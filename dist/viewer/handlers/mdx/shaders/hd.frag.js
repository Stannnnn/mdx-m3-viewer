"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const precision_glsl_1 = require("../../shaders/precision.glsl");
const shader = `
${precision_glsl_1.default}

uniform sampler2D u_diffuseMap;
uniform sampler2D u_ormMap;
uniform sampler2D u_teamColorMap;
uniform float u_filterMode;

varying vec3 v_normal;
varying vec2 v_uv;
varying float v_layerAlpha;

void main() {
  vec4 texel = texture2D(u_diffuseMap, v_uv);
  vec4 color = vec4(texel.rgb, texel.a * v_layerAlpha);

  vec4 orma = texture2D(u_ormMap, v_uv);

  if (orma.a > 0.1) {
    color *= texture2D(u_teamColorMap, v_uv) * orma.a;
  }

  // 1bit Alpha
  if (u_filterMode == 1.0 && color.a < 0.75) {
    discard;
  }

  gl_FragColor = color;
}
`;
exports.default = shader;
