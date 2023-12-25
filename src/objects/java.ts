import * as THREE from "three";
import scene from "../scene";

const javaTexture = new THREE.TextureLoader().load("../resources/java.png");

javaTexture.colorSpace = THREE.SRGBColorSpace;

const java = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: javaTexture })
);

java.position.set(520, 0, -3);

scene.add(java);

export function javaControl() {
  java.rotation.y += 0.01;
  java.rotation.z -= 0.01;
  java.rotation.x -= 0.01;
}
