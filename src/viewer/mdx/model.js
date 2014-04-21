function Model(parser, textureMap) {
  var objects, i, l, j, k;
  
  this.name = parser.modelChunk.name;
  this.sequences = [];
  this.textures = [];
  this.textureMap = {};
  
  if (parser["textureChunk"]) {
    objects = parser["textureChunk"].objects;
    
    for (i = 0, l = objects.length; i < l; i++) {
      this.loadTexture(objects[i], textureMap);
    }
  }
  
  if (parser["sequenceChunk"]) {
    this.sequences = parser["sequenceChunk"].objects;
  }
  
  if (parser["globalSequenceChunk"]) {
    this.globalSequences = parser["globalSequenceChunk"].objects;
  }
  
  var nodes = parser["nodes"];
  var pivots = parser["pivotPointChunk"].objects;
  
  this.nodes = [];
  
  for (i = 0, l = nodes.length; i < l; i++) {
    this.nodes[i] = new Node(nodes[i], this, pivots);
  }
  
  // This list is used to access all the nodes in a loop while keeping the hierarchy in mind.
  this.hierarchy = [0];
  this.setupHierarchy(0);
  
  if (parser["boneChunk"]) {
    this.bones = parser["boneChunk"].objects;
  }
  
  if (parser["materialChunk"]) {
    this.materials = parser["materialChunk"].objects;
  }
  
  if (parser["geosetChunk"]) {
    var geosets = parser["geosetChunk"].objects;
    var groups = [[], [], [], []];
    
    this.geosets = [];
    
    for (i = 0, l = geosets.length; i < l; i++) {
      var g = geosets[i];
      var layers = this.materials[g.materialId].layers;
      
      this.geosets.push(new Geoset(g));
      
      for (j = 0, k = layers.length; j < k; j++) {
        var layer = new Layer(layers[j], i, this);
        
        groups[layer.renderOrder].push(layer);
      }
    }
    
    this.layers = groups[0].concat(groups[1]).concat(groups[2]).concat(groups[3]);
  }
  
  // TODO: Think what to do with cameras.
  if (parser["cameraChunk"]) {
    this.cameras = parser["cameraChunk"].objects;
  }

  if (parser["geosetAnimationChunk"]) {
    objects = parser["geosetAnimationChunk"].objects;

    this.geosetAnimations = [];
    
    for (i = 0, l = objects.length; i < l; i++) {
      this.geosetAnimations[i] = new GeosetAnimation(objects[i], this);
    }
  }
  
  if (parser["textureAnimationChunk"]) {
    objects = parser["textureAnimationChunk"].objects;

    this.textureAnimations = [];
    
    for (i = 0, l = objects.length; i < l; i++) {
      this.textureAnimations[i] = new TextureAnimation(objects[i], this);
    }
  }

  if (parser["particleEmitterChunk"]) {
    this.particleEmitters = parser["particleEmitterChunk"].objects;
  }

  if (parser["particleEmitter2Chunk"]) {
    this.particleEmitters2 = parser["particleEmitter2Chunk"].objects;
  }

  if (parser["ribbonEmitterChunk"]) {
    this.ribbonEmitters = parser["ribbonEmitterChunk"].objects;
  }

  if (parser["collisionShapeChunk"]) {
    objects = parser["collisionShapeChunk"].objects;
    
    this.collisionShapes = [];
    
    for (i = 0, l = objects.length; i < l; i++) {
      this.collisionShapes[i] = new CollisionShape(objects[i]);
    }
  }

  if (parser["attachmentChunk"]) {
    objects = parser["attachmentChunk"].objects;
    
    this.attachments = [];
    
    for (i = 0, l = objects.length; i < l; i++) {
      this.attachments[i] = new Attachment(objects[i], this);
    }
  }
  
  this.ready = true;
}

Model.prototype = {
  loadTexture: function (texture, textureMap) {
    var source = texture.path;
    var path;
    var replaceableId = texture.replaceableId;
    
    if (replaceableId !== 0) {
      source = "ReplaceableTextures/" + replaceableIdToName[replaceableId] + ".blp";
    }
    
    source = source.replace(/\\/g, "/").toLowerCase();
    
    this.textures.push(source);
    
    if (textureMap[source]) {
      path = textureMap[source];
    } else {
      path = urls.mpqFile(source);
    }
    
    this.textureMap[source] = path;
    
    gl.newTexture(path);
  },
  
  setupHierarchy: function (parent) {
    var cildren = [];
      
    for (var i = 0, l = this.nodes.length; i < l; i++) {
      var node = this.nodes[i];
      
      if (node.parentId === parent) {
        this.hierarchy.push(node.objectId);
        
        this.setupHierarchy(node.objectId);
      }
    }
  },
  
  render: function (instance, textureMap) {
    var i, l, v;
	  var sequence = instance.sequence;
    var frame = instance.frame;
    var counter = instance.counter;
    
    if (this.layers && gl.shaderReady("wmain")) {
      gl.bindShader("wmain");
      gl.bindMVP("u_mvp");
      gl.setParameter("u_texture", 0);
      
      instance.skeleton.bind();
      
      for (i = 0, l = this.layers.length; i < l; i++) {
        var layer = this.layers[i];
        
        if (layer.shouldRender(sequence, frame, counter) && this.shouldRenderGeoset(sequence, frame, counter, layer)) {
          var geoset = this.geosets[layer.geosetId];
          
          var modifier = [1, 1, 1, 1];
          var uvoffset = [0 ,0];
          
          layer.setMaterial();
          
          var textureId = getSDValue(sequence, frame, counter, layer.sd.textureId, layer.textureId);
          
          bindTexture(this.textures[textureId], 0, this.textureMap, textureMap);
          
          if (this.geosetAnimations) {
            for (var j = this.geosetAnimations.length; j--;) {
              var geosetAnimation = this.geosetAnimations[j];
              
              if (geosetAnimation.geosetId === layer.geosetId) {
                v = getSDValue(sequence, frame, counter, geosetAnimation.sd.color, geosetAnimation.color);
                
                if (v[0] !== 1 || v[1] !== 1 || v[2] !== 1) {
                  modifier[0] = v[2];
                  modifier[1] = v[1];
                  modifier[2] = v[0];
                }
              }
            }
          }
          
          modifier[3] = getSDValue(sequence, frame, counter, layer.sd.alpha, layer.alpha);
          
          gl.setParameter("u_modifier", modifier);
          
          if (layer.textureAnimationId !== -1 && this.textureAnimations) {
            var textureAnimation = this.textureAnimations[layer.textureAnimationId];
            // What is Z used for?
            v = getSDValue(sequence, frame, counter, textureAnimation.sd.translation);
            
            uvoffset[0] = v[0];
            uvoffset[1] = v[1];
          }
          
          gl.setParameter("u_uv_offset", uvoffset);
          
          geoset.render(layer.coordId);
        }
      }
    }
    
    ctx.depthMask(1);
    
    if (instance.particleEmitters && gl.shaderReady("wmain")) {
      for (i = 0, l = instance.particleEmitters.length; i < l; i++) {
        instance.particleEmitters[i].render();
      }
    }
    
    if (instance.ribbonEmitters && gl.shaderReady("wribbons")) {
      ctx.disable(ctx.CULL_FACE);
      
      gl.bindShader("wribbons");
      gl.bindMVP("u_mvp");
      gl.setParameter("u_texture", 0);
      
      for (i = 0, l = instance.ribbonEmitters.length; i < l; i++) {
        instance.ribbonEmitters[i].render(sequence, frame, counter, textureMap);
      }
    }
    
    if (instance.particleEmitters2 && gl.shaderReady("wparticles")) {
      ctx.depthMask(0);
      ctx.enable(ctx.BLEND);
      ctx.disable(ctx.CULL_FACE);
      
      gl.bindShader("wparticles");
      gl.bindMVP("u_mvp");
      gl.setParameter("u_texture", 0);
      
      for (i = 0, l = instance.particleEmitters2.length; i < l; i++) {
        instance.particleEmitters2[i].render(textureMap);
      }
      
      ctx.depthMask(1);
      ctx.disable(ctx.BLEND);
      ctx.enable(ctx.CULL_FACE);
    }
    
    if (shouldRenderShapes && this.collisionShapes && gl.shaderReady("white")) {
      ctx.depthMask(1);
      gl.bindShader("white");
      
      for (i = 0, l = this.collisionShapes.length; i < l; i++) {
        this.collisionShapes[i].render(instance.skeleton);
      }
    }
    
    ctx.disable(ctx.BLEND);
    ctx.enable(ctx.CULL_FACE);
    
    // Since the bone texture isn't registered through GL but used directly, it must be null'd so that other textures would replace it.
    gl.bindTexture(null, 1);
  },
  
  shouldRenderGeoset: function (sequence, frame, counter, layer) {
    var i, l;
    
    if (this.geosetAnimations) {
      for (i = 0, l = this.geosetAnimations.length; i < l; i++) {
        var geosetAnimation = this.geosetAnimations[i];
        
        if (geosetAnimation.geosetId === layer.geosetId && geosetAnimation.sd.alpha) {
          return getSDValue(sequence, frame, counter, geosetAnimation.sd.alpha) > 0.1;
        }
      }
    }
    
    return true;
  },
  
  getAttachment: function (id) {
    if (this.attachments) {
      return this.attachments[id];
    }
  },
  
  getCamera: function (id) {
    if (this.cameras) {
      return this.cameras[id];
    }
  },
  
  overrideTexture: function (source, path) {
    this.textureMap[source] = path;
  },
  
  getSequences: function () {
    var data = [];
    
    if (this.sequences) {
      for (var i = 0, l = this.sequences.length; i < l; i++) {
        data[i] = this.sequences[i].name;
      }
    }
    
    return data;
  },
  
  getAttachments: function () {
    var data = [];
    
    if (this.attachments) {
      for (var i = 0, l = this.attachments.length; i < l; i++) {
        data[i] = this.attachments[i].name;
      }
    }
    
    return data;
  },
  
  getCameras: function () {
    var data = [];
    
    if (this.cameras) {
      for (var i = 0, l = this.cameras.length; i < l; i++) {
        data[i] = this.cameras[i].name;
      }
    }
    
    return data;
  },
  
  getTextureMap: function () {
    var data = {};
    var textureMap = this.textureMap;
    var keys = Object.keys(textureMap);
    var key;
      
    for (var i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      
      data[key] = textureMap[key];
    }
    
    return data;
  }
};