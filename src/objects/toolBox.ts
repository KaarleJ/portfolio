import * as THREE from "three";
import scene from "../scene";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const loader = new GLTFLoader();

let toolBox: THREE.Group;

loader.load("/toolBox/scene.gltf", (gltf) => {
  toolBox = gltf.scene;
  toolBox.add(new THREE.PointLight(0xffffff, 1));
  toolBox.position.set(-200, 0, 0);
  toolBox.scale.set(5, 5, 5);
  scene.add(toolBox);
});

export function toolBoxControl() {
  if (toolBox) {
    toolBox.rotation.y += 0.01;
    toolBox.rotation.x += 0.01;
    toolBox.rotation.z += 0.01;
  }
}

export function toolBoxMove(move: number) {
  if (toolBox) {
    toolBox.position.x = -153 + move * -0.05;
  }
}
