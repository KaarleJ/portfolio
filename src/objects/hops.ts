import * as THREE from "three";
import scene from "../scene";

const nodeTexture = new THREE.TextureLoader().load("/node.png");
const reactTexture = new THREE.TextureLoader().load("/react.png");
const tsTexture = new THREE.TextureLoader().load("/typescript.png");

nodeTexture.colorSpace = THREE.SRGBColorSpace;
reactTexture.colorSpace = THREE.SRGBColorSpace;
tsTexture.colorSpace = THREE.SRGBColorSpace;

const node = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: nodeTexture })
);

const react = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: reactTexture })
);

const ts = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: tsTexture })
);

node.position.set(334, -2, -3);
react.position.set(337, 2, -3);
ts.position.set(340, -2, -3);

scene.add(node);
scene.add(react);
scene.add(ts);

export function hopsControl() {
  node.rotation.y += 0.01;
  node.rotation.z -= 0.01;
  node.rotation.x -= 0.01;

  react.rotation.y -= 0.01;
  react.rotation.z -= 0.01;
  react.rotation.x += 0.01;

  ts.rotation.y += 0.01;
  ts.rotation.z -= 0.01;
  ts.rotation.x += 0.01;
}
