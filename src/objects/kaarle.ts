import * as THREE from "three";
import scene from "../scene";

const kaarleTexture = new THREE.TextureLoader().load("/kaarle.png");
kaarleTexture.colorSpace = THREE.SRGBColorSpace;

const kaarle = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: kaarleTexture })
);

kaarle.position.set(5, 0, -3);
scene.add(kaarle);

export function kaarleControl() {
  kaarle.rotation.y += 0.01;
  kaarle.rotation.z += 0.01;
  kaarle.rotation.x += 0.01;
}
