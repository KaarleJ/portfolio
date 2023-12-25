import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import scene from "../scene";

const loader = new GLTFLoader();

let deathStar: THREE.Group;

loader.load("/deathstar/scene.gltf", (gltf) => {
  deathStar = gltf.scene;
  // We add a light to the star
  deathStar.scale.set(10, 10, 10);
  deathStar.add(new THREE.PointLight(0xffffff, 1));
  deathStar.position.set(254.5, 0, 3);
  scene.add(deathStar);
});

export function deathStarMove(move: number) {
  if (deathStar) {
    deathStar.position.y = -58.5 + move * -0.01;
  }
}
