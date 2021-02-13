declare const shader = "\n#define EMITTER_PARTICLE2 0\n#define EMITTER_RIBBON 1\n#define EMITTER_SPLAT 2\n#define EMITTER_UBERSPLAT 3\n#define HEAD 0.0\n\nuniform mat4 u_VP;\nuniform int u_emitter;\n\n// Shared\nuniform vec4 u_colors[3];\nuniform vec3 u_vertices[4];\nuniform vec3 u_intervals[4];\nuniform float u_lifeSpan;\nuniform float u_columns;\nuniform float u_rows;\n\n// Particle2\nuniform vec3 u_scaling;\nuniform vec3 u_cameraZ;\nuniform float u_timeMiddle;\nuniform bool u_teamColored;\n\n// Splat and Uber.\nuniform vec3 u_intervalTimes;\n\n// Vertices\nattribute float a_position;\n\n// Instances\nattribute vec3 a_p0;\nattribute vec3 a_p1;\nattribute vec3 a_p2;\nattribute vec3 a_p3;\nattribute float a_health;\nattribute vec4 a_color;\nattribute float a_tail;\nattribute vec3 a_leftRightTop;\n\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\n\nfloat getCell(vec3 interval, float factor) {\n  float start = interval[0];\n  float end = interval[1];\n  float repeat = interval[2];\n  float spriteCount = end - start;\n\n  if (spriteCount > 0.0) {\n    // Repeating speeds up the sprite animation, which makes it effectively run N times in its interval.\n    // E.g. if repeat is 4, the sprite animation will be seen 4 times, and thus also run 4 times as fast.\n    // The sprite index is limited to the number of actual sprites.\n    return min(start + mod(floor(spriteCount * repeat * factor), spriteCount), u_columns * u_rows - 1.0);\n  }\n\n  return 0.0;\n}\n\nvoid particle2() {\n  float factor = (u_lifeSpan - a_health) / u_lifeSpan;\n  int index = 0;\n\n  if (factor < u_timeMiddle) {\n    factor = factor / u_timeMiddle;\n    index = 0;\n  } else {\n    factor = (factor - u_timeMiddle) / (1.0 - u_timeMiddle);\n    index = 1;\n  }\n\n  factor = min(factor, 1.0);\n\n  float scale = mix(u_scaling[index], u_scaling[index + 1], factor);\n  vec4 color = mix(u_colors[index], u_colors[index + 1], factor);\n\n  float cell = 0.0;\n\n  if (u_teamColored) {\n    cell = a_leftRightTop[0];\n  } else {\n    vec3 interval;\n\n    if (a_tail == HEAD) {\n      interval = u_intervals[index];\n    } else {\n      interval = u_intervals[index + 2];\n    }\n\n    cell = getCell(interval, factor);\n  }\n\n  float left = floor(mod(cell, u_columns));\n  float top = floor(cell / u_columns);\n  float right = left + 1.0;\n  float bottom = top + 1.0;\n\n  left /= u_columns;\n  right /= u_columns;\n  top /= u_rows;\n  bottom /= u_rows;\n\n  if (a_position == 0.0) {\n    v_texcoord = vec2(right, top);\n  } else if (a_position == 1.0) {\n    v_texcoord = vec2(left, top);\n  } else if (a_position == 2.0) {\n    v_texcoord = vec2(left, bottom);\n  } else if (a_position == 3.0) {\n    v_texcoord = vec2(right, bottom);\n  }\n\n  v_color = color;\n  \n  if (a_tail == HEAD) {\n    gl_Position = u_VP * vec4(a_p0 + (u_vertices[int(a_position)] * scale), 1.0);\n  } else {\n    // Get the normal to the tail in camera space.\n    // This allows to build a 2D rectangle around the 3D tail.\n    vec3 normal = cross(u_cameraZ, normalize(a_p1 - a_p0));\n    vec3 boundary = normal * scale * a_p2[0];\n    vec3 position;\n\n    if (a_position == 0.0) {\n      position = a_p0 - boundary;\n    } else if (a_position == 1.0) {\n      position = a_p1 - boundary;\n    } else if (a_position == 2.0) {\n      position = a_p1 + boundary;\n    } else if (a_position == 3.0) {\n      position = a_p0 + boundary;\n    }\n\n    gl_Position = u_VP * vec4(position, 1.0);\n  }\n}\n\nvoid ribbon() {\n  vec3 position;\n  float left = a_leftRightTop[0] / 255.0;\n  float right = a_leftRightTop[1] / 255.0;\n  float top = a_leftRightTop[2] / 255.0;\n  float bottom = top + 1.0;\n\n  if (a_position == 0.0) {\n    v_texcoord = vec2(right, top);\n    position = a_p0;\n  } else if (a_position == 1.0) {\n    v_texcoord = vec2(right, bottom);\n    position = a_p1;\n  } else if (a_position == 2.0) {\n    v_texcoord = vec2(left, bottom);\n    position = a_p2;\n  } else if (a_position == 3.0) {\n    v_texcoord = vec2(left, top);\n    position = a_p3;\n  }\n\n  v_texcoord[0] /= u_columns;\n  v_texcoord[1] /= u_rows;\n\n  v_color = a_color;\n\n  gl_Position = u_VP * vec4(position, 1.0);\n}\n\nvoid splat() {\n  float factor = u_lifeSpan - a_health;\n  int index;\n\n  if (factor < u_intervalTimes[0]) {\n    factor = factor / u_intervalTimes[0];\n    index = 0;\n  } else {\n    factor = (factor - u_intervalTimes[0]) / u_intervalTimes[1];\n    index = 1;\n  }\n\n  float cell = getCell(u_intervals[index], factor);\n  float left = floor(mod(cell, u_columns));\n  float top = floor(cell / u_columns);\n  float right = left + 1.0;\n  float bottom = top + 1.0;\n  vec3 position;\n\n  if (a_position == 0.0) {\n    v_texcoord = vec2(left, top);\n    position = a_p0;\n  } else if (a_position == 1.0) {\n    v_texcoord = vec2(left, bottom);\n    position = a_p1;\n  } else if (a_position == 2.0) {\n    v_texcoord = vec2(right, bottom);\n    position = a_p2;\n  } else if (a_position == 3.0) {\n    v_texcoord = vec2(right, top);\n    position = a_p3;\n  }\n\n  v_texcoord[0] /= u_columns;\n  v_texcoord[1] /= u_rows;\n\n  v_color = mix(u_colors[index], u_colors[index + 1], factor) / 255.0;\n\n  gl_Position = u_VP * vec4(position, 1.0);\n}\n\nvoid ubersplat() {\n  float factor = u_lifeSpan - a_health;\n  vec4 color;\n\n  if (factor < u_intervalTimes[0]) {\n    color = mix(u_colors[0], u_colors[1], factor / u_intervalTimes[0]);\n  } else if (factor < u_intervalTimes[0] + u_intervalTimes[1]) {\n    color = u_colors[1];\n  } else {\n    color = mix(u_colors[1], u_colors[2], (factor - u_intervalTimes[0] - u_intervalTimes[1]) / u_intervalTimes[2]);\n  }\n\n  vec3 position;\n\n  if (a_position == 0.0) {\n    v_texcoord = vec2(0.0, 0.0);\n    position = a_p0;\n  } else if (a_position == 1.0) {\n    v_texcoord = vec2(0.0, 1.0);\n    position = a_p1;\n  } else if (a_position == 2.0) {\n    v_texcoord = vec2(1.0, 1.0);\n    position = a_p2;\n  } else if (a_position == 3.0) {\n    v_texcoord = vec2(1.0, 0.0);\n    position = a_p3;\n  }\n\n  v_color = color / 255.0;\n\n  gl_Position = u_VP * vec4(position, 1.0);\n}\n\nvoid main() {\n  if (u_emitter == EMITTER_PARTICLE2) {\n    particle2();\n  } else if (u_emitter == EMITTER_RIBBON) {\n    ribbon();\n  } else if (u_emitter == EMITTER_SPLAT) {\n    splat();\n  } else if (u_emitter == EMITTER_UBERSPLAT) {\n    ubersplat();\n  }\n}\n";
export default shader;