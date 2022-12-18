import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { buildScene, theBox } from './buildScene';

var camera, scene, renderer;
var alpha = 0;

init();
animate();

function init() {

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(100, 200, 100);

  const controls = new OrbitControls(camera, renderer.domElement);

  ////////////////////////////////////////////////////////////////
  var gridXZ = new THREE.GridHelper(200, 20, 'red', 'white');
  scene.add(gridXZ);

  buildScene();

}

function animate() {

  alpha += 0.01;

  theBox.position.set(60 * Math.sin(alpha), 10, 60 * Math.cos(alpha));


  requestAnimationFrame(animate);
  renderer.render(scene, camera);

}


export { scene };
