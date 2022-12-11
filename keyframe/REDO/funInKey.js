
import * as THREE from 'https://threejs.org/build/three.module.js';
import * as tool from './tool.js';

function theQuad(thepos3, thepos1) {
    return makeQuad(ang1(thepos1, thepos3), ang2(thepos1, thepos3));
}

function ang1(pos1, pos3) {
    // 3/2𝜋 + Math.atan2(x,z)
    return 3 / 2 * Math.PI + Math.atan2(pos1.x - pos3.x, pos1.z - pos3.z);
}

function ang2(pos1, pos3) {
    return Math.atan2(pos1.y - pos3.y, Math.sqrt((pos1.x - pos3.x) * (pos1.x - pos3.x) + (pos1.y - pos3.y) * (pos1.y - pos3.y)));
}

function makeQuad(xz = 0, xy = 0) {
    var takeQuad = new THREE.Mesh(new THREE.BoxGeometry(25, 4, 7), new THREE.MeshNormalMaterial());
    takeQuad.rotation.y = (xz);
    takeQuad.rotation.z = (xy);
    return takeQuad.quaternion;
}

var theta = 1 / 4;

theta = tool.clamp(theta, 0, 1);

function makeMiddle(thepos1, thepos2) {
    // let midx = (thepos1.x + thepos2.x) / 2;
    // let midy = (thepos1.y + thepos2.y) / 2;
    // let midz = (thepos1.z + thepos2.z) / 2;

    let midx = (thepos2.x - thepos1.x) * theta + thepos1.x;
    let midy = (thepos2.y - thepos1.y) * theta + thepos1.y;
    let midz = (thepos2.z - thepos1.z) * theta + thepos1.z;

    return new THREE.Vector3(midx, midy, midz);;
}

export { theta };
export { theQuad, makeMiddle };