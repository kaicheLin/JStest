
import * as THREE from 'https://threejs.org/build/three.module.js';
import * as funKey from './funInKey.js';

var thePosS = [];

var pos1 = new THREE.Vector3(30, 30, 130); // 70 45 5 / -10 15 -65 / -5 7.5 -32.5
var pos3 = new THREE.Vector3(-140, 10, 10);
var pos5 = new THREE.Vector3(-10, 60, -60); // -15 35 -30
var pos7 = new THREE.Vector3(-90, 10, 80);
var pos9 = new THREE.Vector3(90, 100, 0);

var pos2 = funKey.makeMiddle(pos1, pos3);
var pos4 = funKey.makeMiddle(pos3, pos5);
var pos6 = funKey.makeMiddle(pos5, pos7);
var pos8 = funKey.makeMiddle(pos7, pos9);
var pos10 = funKey.makeMiddle(pos9, pos1);

console.log(thePosS);

thePosS.push(pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9, pos10);
////////////////////////////////////////////

var theQuadS = [];

theQuadS.push(funKey.theQuad(thePosS[thePosS.length - 1], thePosS[0]));

for (let i = 1; i < thePosS.length; i++) {
    theQuadS.push(funKey.theQuad(thePosS[i - 1], thePosS[i]));
}

console.log(theQuadS);
////////////////////////////////////////////
var keys = [];

for (let i = 0; i < thePosS.length; i++) {

    let step = 1 / thePosS.length;

    // keys.push([step * i, thePosS[i], theQuadS[i]]);

    if (i % 2 === 0) {
        keys.push([step * i, thePosS[i], theQuadS[i]]);
    } else {
        keys.push([step * (i - funKey.theta), thePosS[i], theQuadS[i]]);
    }

}

keys.push([1, thePosS[0], theQuadS[0]]);

console.log(keys);

export { keys };