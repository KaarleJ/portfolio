import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import scene from "../scene";

const loader = new GLTFLoader();

let earth: THREE.Group;

loader.load("/earth/scene.gltf", (gltf) => {
  earth = gltf.scene;
  earth.position.set(84, 0, 0);
  scene.add(earth);
});

export function planetControl() {
  earth.rotation.y += 0.002;
}
