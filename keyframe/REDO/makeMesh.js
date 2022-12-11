
import * as THREE from 'https://threejs.org/build/three.module.js';

var smokes = [];

let smokesMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

let smoke1 = new THREE.Mesh(new THREE.CapsuleGeometry(3, 1, 32, 64), smokesMaterial);
let smoke2 = new THREE.Mesh(new THREE.CapsuleGeometry(2, 1, 32, 64), smokesMaterial);
let smoke3 = new THREE.Mesh(new THREE.CapsuleGeometry(1, 1, 32, 64), smokesMaterial);

smokes.push(smoke1, smoke2, smoke3);


function makeCar() {
    var car = new THREE.Group();
    var normalMat = new THREE.MeshNormalMaterial({
        wireframe: false
    });
    var body = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 20, 20), normalMat);
    body.rotation.z = -Math.PI / 2;

    var nose = new THREE.Mesh(new THREE.BoxGeometry(25, 2, 7), normalMat);
    nose.rotation.y = Math.PI / 2;

    var head = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 7), normalMat);
    head.position.y = 15 / 2;

    var axesHelper = new THREE.AxesHelper(40);

    car.add(body, nose, head/*, axesHelper*/);

    return car;
}


export { smokes };
export { makeCar };