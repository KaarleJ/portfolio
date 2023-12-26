import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import scene from "../scene";

const loader = new GLTFLoader();

let deathStar: THREE.Group;

loader.load("/deathstar/scene.gltf", (gltf) => {
  deathStar = gltf.scene;
  // We add a light to the star
  deathStar.scale.set(0.1, 0.1, 0.1);
  deathStar.add(new THREE.PointLight(0xffffff, 1));
  deathStar.position.set(265, 0, -5);
  scene.add(deathStar);
});

export function deathStarMove(move: number) {
  if (deathStar) {
    deathStar.position.y = -65 + move * -0.01;
  }
}
