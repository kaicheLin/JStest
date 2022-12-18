import { MeshText2D, SpriteText2D, textAlign } from '@kinyoklion/three-text2d/dist/three-text2d.js';
// import * as Text2D from '@kinyoklion/three-text2d/dist/three-text2d.js';
import * as THREE from 'three';

import { scene } from './main-3.js';

var theBox = new THREE.Group();

function buildScene() {

   let box = new THREE.Mesh(new THREE.BoxGeometry(50, 20, 10), new THREE.MeshNormalMaterial());
   // scene.add(box);


   // let text = new MeshText2D("my-hello", {
   //    align: textAlign.right, font: '30px Arial',
   //    fillStyle: '#000000', antialias: true
   // });
   // scene.add(text);

   ////////////////////////////////////////////////////////////////////////////////////////////////////

   let text2 = new MeshText2D("M-box", {
      align: textAlign.center,
      font: '10px Arial',
      fillStyle: '#00ffff',
      antialias: true
   });

   text2.position.set(0, 10, 5.01);
   text2.scale.set(1.5, 1.5, 1.5);
   // scene.add(text2);

   let spriteWord = "S-box \n";
   spriteWord += "\\這是中文\/ \n";
   spriteWord += "mark \⦻ \❦ \❧ \✴ \✵ ";

   let sprite = new SpriteText2D(spriteWord, {
      align: textAlign.center,
      font: '10px Arial',
      fillStyle: '#880000',
      antialias: true
   });

   sprite.position.set(0, 30, 0);
   sprite.scale.set(0.5, 0.5, 0.5);
   // scene.add(sprite);

   theBox.add(text2, sprite, box);
   scene.add(theBox);
}

export { buildScene, theBox };

