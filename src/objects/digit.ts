import * as THREE from "three";
import scene from "../scene";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const loader = new GLTFLoader();

let digit: THREE.Group;

loader.load("/digit/scene.gltf", (gltf) => {
  digit = gltf.scene;
  digit.add(new THREE.PointLight(0xffffff, 1));
  digit.position.set(-20, 0, 0);
  digit.rotateZ(Math.PI);
  scene.add(digit);
});

export function digitControl() {
  if (digit) {
    digit.rotation.y += 0.01;
  }
}

export function digitMove(move: number) {
  if (digit) {
    digit.position.x = -45 + move * -0.05;
  }
}
