(function() {

  var canvas, gl, program;

  glUtils.SL.init({ callback: function() { main(); }});
  function main() {
    // window.addEventListener('resize', resizer);
    canvas = document.getElementById("glcanvas");
    gl = glUtils.checkWebGL(canvas);
    // initGLSize();
    var vertexShader = glUtils.getShader(gl, gl.VERTEX_SHADER, glUtils.SL.Shaders.v1.vertex);
    var fragmentShader = glUtils.getShader(gl, gl.FRAGMENT_SHADER, glUtils.SL.Shaders.v1.fragment);
    program = glUtils.createProgram(gl, vertexShader, fragmentShader);
    gl.useProgram(program);
    
    // resizer();
    draw();
  }

  function degToRad(x) {
    return x * Math.PI / 180;
  }

  function initBuffers() {
    var ret = [];
    var vertices = [];
    
    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
      alert("Gagal membuat buffer");
      return -1;
    }

    var upsideRight = 172.5;
    var upsideLeft = 187.5;
    var delta = 0.1;
    for (var i = 0; i <= upsideRight; i += delta) {
      var j = degToRad(i);
      vertices = vertices.concat(0.5*Math.sin(j));
      vertices = vertices.concat(0.5*Math.cos(j));
    }
    for (var i = upsideLeft; i <= 360; i += delta) {
      var j = degToRad(i);
      vertices = vertices.concat(0.5*Math.sin(j));
      vertices = vertices.concat(0.5*Math.cos(j));
    }
    ret = ret.concat(0);
    ret = ret.concat(vertices.length / 2);
    ret = ret.concat(vertices.length / 2);
    var last = vertices.length / 2;
    vertices = vertices.concat([0.5 * Math.sin(degToRad(upsideRight)), 0.5 * Math.cos(degToRad(upsideRight))]);
    vertices = vertices.concat([0.5 * Math.sin(degToRad(upsideRight)), -0.15]);
    vertices = vertices.concat([0.15, -0.15]);
    vertices = vertices.concat([0.2, -0.03]);
    vertices = vertices.concat([0.5 * Math.sin(degToRad(upsideRight)), -0.03]);
    vertices = vertices.concat([0.5 * Math.sin(degToRad(upsideRight)), 0.075]);
    ret = ret.concat(vertices.length / 2 - last);
    last = vertices.length / 2;
    ret = ret.concat(vertices.length / 2);
    vertices = vertices.concat([0.5 * Math.sin(degToRad(upsideLeft)), 0.5 * Math.cos(degToRad(upsideLeft))]);
    vertices = vertices.concat([0.5 * Math.sin(degToRad(upsideLeft)), -0.15]);
    vertices = vertices.concat([-0.18, -0.15]);
    vertices = vertices.concat([-0.18, -0.03]);
    vertices = vertices.concat([0.5 * Math.sin(degToRad(upsideLeft)), -0.03]);
    vertices = vertices.concat([0.5 * Math.sin(degToRad(upsideLeft)), 0.075]);
    ret = ret.concat(vertices.length / 2 - last);
    last = vertices.length / 2;
    ret = ret.concat(vertices.length / 2);
    for (var i = 270; i <= 360; i += delta) {
      var j = degToRad(i);
      vertices = vertices.concat(0.2*Math.sin(j) + 0.135);
      vertices = vertices.concat(0.2*Math.cos(j) + 0.075);
    }
    ret = ret.concat(vertices.length / 2 - last);
    last = vertices.length / 2;
    ret = ret.concat(vertices.length / 2);
    for (var i = 270; i <= 360; i += delta) {
      var j = degToRad(i);
      vertices = vertices.concat(0.05*Math.sin(j) + 0.115);
      vertices = vertices.concat(0.05*Math.cos(j) + 0.075);
    }
    ret = ret.concat(vertices.length / 2 - last);
    last = vertices.length / 2;
    ret = ret.concat(vertices.length / 2);
    vertices = vertices.concat([0.05*Math.sin(degToRad(360)) + 0.115, 0.05*Math.cos(degToRad(360)) + 0.075]);
    vertices = vertices.concat([0.2, 0.05*Math.cos(degToRad(360)) + 0.075]);
    vertices = vertices.concat([0.2, 0.27]);
    vertices = vertices.concat([0.2*Math.sin(degToRad(360)) + 0.135, 0.2*Math.cos(degToRad(360)) + 0.075]);
    ret = ret.concat(vertices.length / 2 - last);
    last = vertices.length / 2;


    //gambar kanan
    upsideRight = 172.5;
    upsideLeft = 187.5; 
    delta = 0.1;
    for (var i = 0; i <= upsideRight; i += delta) {
      var j = degToRad(i);
      vertices = vertices.concat(0.5*Math.sin(j));
      vertices = vertices.concat(0.5*Math.cos(j));
    }
    console.log(ret.length);
    for (var i = upsideLeft; i <= 360; i += delta) {
      var j = degToRad(i);
      vertices = vertices.concat(0.5*Math.sin(j));
      vertices = vertices.concat(0.5*Math.cos(j));
    }
    ret = ret.concat(0);
    ret = ret.concat(vertices.length / 2);
    last = vertices.length / 2;
    ret = ret.concat(vertices.length / 2);
    vertices = vertices.concat([0.5 * Math.sin(degToRad(upsideRight)), 0.5 * Math.cos(degToRad(upsideRight))]);
    vertices = vertices.concat([0.5 * Math.sin(degToRad(upsideRight)), 0.075]);
    vertices = vertices.concat([0.5 * Math.sin(degToRad(upsideLeft)), 0.5 * Math.cos(degToRad(upsideLeft))]);
    vertices = vertices.concat([0.5 * Math.sin(degToRad(upsideLeft)), 0.075]);
    ret = ret.concat(vertices.length / 2 - last);
    last = vertices.length / 2;
    ret = ret.concat(vertices.length / 2);
    vertices = vertices.concat([0.15, -0.15]);
    vertices = vertices.concat([0.2, -0.03]);
    vertices = vertices.concat([-0.18, -0.15]);
    vertices = vertices.concat([-0.18, -0.03]);
    ret = ret.concat(vertices.length / 2 - last);
    last = vertices.length / 2;
    ret = ret.concat(vertices.length / 2);
    for (var i = 270; i <= 360; i += delta) {
      var j = degToRad(i);
      vertices = vertices.concat(0.2*Math.sin(j) + 0.135);
      vertices = vertices.concat(0.2*Math.cos(j) + 0.075);
      vertices = vertices.concat(0.05*Math.sin(j) + 0.115);
      vertices = vertices.concat(0.05*Math.cos(j) + 0.075);
    }
    ret = ret.concat(vertices.length / 2 - last);
    last = vertices.length / 2;
    ret = ret.concat(vertices.length / 2);
    vertices = vertices.concat([0.05*Math.sin(degToRad(360)) + 0.11, 0.05*Math.cos(degToRad(360)) + 0.075]);
    vertices = vertices.concat([0.2, 0.05*Math.cos(degToRad(360)) + 0.075]);
    
    vertices = vertices.concat([0.2*Math.sin(degToRad(360)) + 0.13, 0.2*Math.cos(degToRad(360)) + 0.075]);
    vertices = vertices.concat([0.2, 0.27]);
    ret = ret.concat(vertices.length / 2 - last);
    last = vertices.length / 2;
    ret = ret.concat(vertices.length / 2);
    for (var i = 290; i <= 340; i += 10) {
      vertices = vertices.concat(0.4*Math.sin(degToRad(i)));
      vertices = vertices.concat(0.4*Math.cos(degToRad(i)));
      vertices = vertices.concat(0.3*Math.sin(degToRad(i)));
      vertices = vertices.concat(0.3*Math.cos(degToRad(i)));
    }
    ret = ret.concat(vertices.length / 2 - last);
    last = vertices.length / 2;
    ret = ret.concat(vertices.length / 2);
    for (var i = 110; i <= 290; i += delta) {
      vertices = vertices.concat(0.046*Math.sin(degToRad(i)) - 0.33);
      vertices = vertices.concat(0.046*Math.cos(degToRad(i)) + 0.12);
    }
    ret = ret.concat(vertices.length / 2 - last);
    last = vertices.length / 2;
    ret = ret.concat(vertices.length / 2);
    for (var i = 340; i <= 360; i += delta) {
      vertices = vertices.concat(0.048*Math.sin(degToRad(i)) - 0.12);
      vertices = vertices.concat(0.048*Math.cos(degToRad(i)) + 0.33);
    }
    for (var i = 0; i <= 160; i += delta) {
      vertices = vertices.concat(0.048*Math.sin(degToRad(i)) - 0.12);
      vertices = vertices.concat(0.048*Math.cos(degToRad(i)) + 0.33);
    }
    ret = ret.concat(vertices.length / 2 - last);
    last = vertices.length / 2;

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    
    var aPosition = gl.getAttribLocation(program, 'aPosition');
    if (aPosition < 0) {
      alert('Gagal mendapat aPosition');
      return;
    }
    console.log(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    

    return ret;

  }

  function anotherBuffer() {
    var ret = [];
    var vertices = [];
    
    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
      alert("Gagal membuat buffer");
      return -1;
    }

    

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    var uFragColor = gl.getUniformLocation(program2, 'uFragColor');
    if (uFragColor < 0) {
      alert('Gagal mendapat fragColor');
      return;
    }
    var aPosition = gl.getAttribLocation(program2, 'aPosition');
    // console.log(aPosition);
    if (aPosition < 0) {
      alert('Gagal mendapat aPosition');
      return;
    }

    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    
    gl.enableVertexAttribArray(aPosition);
    return ret;
  }

  function draw() {
    var arrayBuffer = initBuffers(gl);
    var thetaUniformLocation = gl.getUniformLocation(program, 'theta');
    var theta = 0;
    gl.uniform1f(thetaUniformLocation, theta);
    var scaleXUniformLocation = gl.getUniformLocation(program, 'scaleX');
    var scaleX = 1.0;
    gl.uniform1f(scaleXUniformLocation, scaleX);
    var scaleYUniformLocation = gl.getUniformLocation(program, 'scaleY');
    var scaleY = 1.0;
    gl.uniform1f(scaleYUniformLocation, scaleY);
    var transXUniformLocation = gl.getUniformLocation(program, 'transX');
    gl.uniform1f(transXUniformLocation, 0);

    
    
  
    var uFragColor = gl.getUniformLocation(program, 'uFragColor');
    if (uFragColor < 0) {
      alert('Gagal mendapat fragColor');
      return;
    }
    function render() {
      theta += 0.0116;
      gl.uniform1f(thetaUniformLocation, theta);
      gl.uniform1f(scaleYUniformLocation, 1.0);
      gl.uniform1f(scaleXUniformLocation, 1.0);
      gl.uniform1f(transXUniformLocation, -0.5);
      

      gl.clearColor(0.663, 0.663, 0.663, 0.8);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform4f(uFragColor, 0, 0, 0, 1);
      gl.drawArrays(gl.POINTS, 0, arrayBuffer[1]);
      gl.drawArrays(gl.LINE_STRIP, arrayBuffer[2], arrayBuffer[3]);
      gl.drawArrays(gl.LINE_STRIP, arrayBuffer[4], arrayBuffer[5]);
      gl.drawArrays(gl.POINTS, arrayBuffer[6], arrayBuffer[7]);
      gl.drawArrays(gl.POINTS, arrayBuffer[8], arrayBuffer[9]);
      gl.drawArrays(gl.LINE_STRIP, arrayBuffer[10], arrayBuffer[11]);


      if (scaleX >= 1.0) widen = -1.0;
      else if (scaleX <= -1.0) widen = 1.0;
      scaleX += 0.0116 * widen;
      gl.uniform1f(scaleXUniformLocation, scaleX);

      gl.uniform1f(thetaUniformLocation, 0);
      gl.uniform1f(scaleYUniformLocation, scaleY);
      gl.uniform1f(scaleXUniformLocation, scaleX);
      gl.uniform1f(transXUniformLocation, 0.5);
      gl.uniform4f(uFragColor, 0.231, 0.349, 0.596, 1);
      gl.enable(gl.BLEND)
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.drawArrays(gl.TRIANGLE_FAN, arrayBuffer[12], arrayBuffer[13]);
      gl.uniform4f(uFragColor, 1, 1, 1, 1);
      gl.drawArrays(gl.TRIANGLE_STRIP, arrayBuffer[14], arrayBuffer[15]);
      gl.drawArrays(gl.TRIANGLE_STRIP, arrayBuffer[16], arrayBuffer[17]);
      gl.drawArrays(gl.TRIANGLE_STRIP, arrayBuffer[18], arrayBuffer[19]);
      gl.drawArrays(gl.TRIANGLE_STRIP, arrayBuffer[20], arrayBuffer[21]);
      gl.uniform4f(uFragColor, 0, 0, 0, 0.1);
      gl.drawArrays(gl.TRIANGLE_STRIP, arrayBuffer[22], arrayBuffer[23]);
      gl.drawArrays(gl.TRIANGLE_FAN, arrayBuffer[24], arrayBuffer[25]);
      gl.drawArrays(gl.TRIANGLE_FAN, arrayBuffer[26], arrayBuffer[27]);
      requestAnimationFrame(render);
    }
    render();
  }

  

  function resizer() {
    var width = canvas.getAttribute("width"), height = canvas.getAttribute("height");
    if (!width || width < 0) {
      canvas.width = window.innerWidth;
      canvas.maxWidth = window.innerWidth;
    }
    if (!height || height < 0) {
      canvas.height = window.innerHeight;
      canvas.maxHeight = window.innerHeight;
    }

    var min = Math.min.apply(Math, [gl.maxWidth, gl.maxHeight, window.innerWidth, window.innerHeight]);
    canvas.width = min;
    canvas.height = min;
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    draw();
  }

  function initGLSize() {
    var width = canvas.getAttribute("width"), height = canvas.getAttribute("height");
    if (width) {
      gl.maxWidth = width;
    }
    if (height) {
      gl.maxHeight = height;
    }
  }

  
})();