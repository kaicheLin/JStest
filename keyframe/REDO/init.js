// import * as THREE from 'https://threejs.org/build/three.min.js';
// import { OrbitControls } from "https://threejs.org/examples/js/controls/OrbitControls.js";

import * as THREE from 'https://threejs.org/build/three.module.js';

// import * as THREE from 'https://cdn.skypack.dev/three@0.136';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/OrbitControls.js';

import * as getMesh from './makeMesh.js';
import * as funKeyframe from './funInKeyframe.js';

var camera, scene, renderer;

var T = 6;
var clock = new THREE.Clock();
var ts = clock.getElapsedTime();
var car;


function init() {

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x888888);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(300, 400, 500); // camera at (0,0,500)
    let controls = new OrbitControls(camera, renderer.domElement);

    ////////////////////////////////////////////////////////
    var gridXZ = new THREE.GridHelper(300, 30, 'red', 'white');
    scene.add(gridXZ);

    car = getMesh.makeCar();
    scene.add(car);

    ////////////////////////////////////////////////////////

    for (let i = 0; i < getMesh.smokes.length; i++) {
        scene.add(getMesh.smokes[i]);
    }

}

function animate() {

    funKeyframe.keyframeSetup(clock.getElapsedTime());

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

export { init, animate };
export { camera, scene, renderer };
export { T, ts, car };