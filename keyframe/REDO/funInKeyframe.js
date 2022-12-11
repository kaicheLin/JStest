
import * as myInit from './init.js';
import * as getMesh from './makeMesh.js';
import * as getKey from './setKeys.js';

function keyframeSetup(t) {
    keyframe(t, myInit.car);
    keyframe(t - 0.2, getMesh.smokes[0]);
    keyframe(t - 0.3, getMesh.smokes[1]);
    keyframe(t - 0.4, getMesh.smokes[2]);
}

function keyframe(t, obj) {
    var s = ((t - myInit.ts) % myInit.T) / myInit.T;

    for (var i = 1; i < getKey.keys.length; i++) {
        if (getKey.keys[i][0] > s) break;
    }
    // take i-1
    var ii = i - 1;
    var a = (s - getKey.keys[ii][0]) / (getKey.keys[ii + 1][0] - getKey.keys[ii][0]);

    obj.position.lerpVectors(getKey.keys[ii][1], getKey.keys[ii + 1][1], a);
    obj.quaternion.slerpQuaternions(getKey.keys[ii][2], getKey.keys[ii + 1][2], a);
}

export { keyframeSetup };