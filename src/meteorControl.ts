import scene from "./scene";
import * as THREE from "three";

const meteors: THREE.Mesh<
  THREE.SphereGeometry,
  THREE.MeshStandardMaterial,
  THREE.Object3DEventMap
>[] = [];

function addMeteor() {
  const geometry = new THREE.SphereGeometry(0.05, 7, 7);
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
  });
  material.color.setHSL(1, 1, 1, THREE.SRGBColorSpace);
  const meteor = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill(null)
    .map(() => THREE.MathUtils.randFloatSpread(200));

  meteor.position.set(x, y, z);
  meteors.push(meteor);
  scene.add(meteor);
}

for (let i = 0; i < 500; i++) {
  addMeteor();
}

export function meteorControl(x: number, y: number, z: number) {
  // The params indicate the position of the camera
  // Meteors that are too far away from the camera will be moved to the front of the camera
  meteors.forEach((meteor) => {
    meteor.position.z += 0.4;
    if (meteor.position.z > z) {
      meteor.position.z = z - (50 + THREE.MathUtils.randFloatSpread(100));
      meteor.position.x = x - THREE.MathUtils.randFloatSpread(200);
      meteor.position.y = y - THREE.MathUtils.randFloatSpread(200);
    }
    if (meteor.position.x > x + 20 || meteor.position.x < x - 20) {
      meteor.position.x = x - THREE.MathUtils.randFloatSpread(200);
    }
    if (meteor.position.y > y + 20 || meteor.position.y < y - 20) {
      meteor.position.y = y - THREE.MathUtils.randFloatSpread(200);
    }
  });
}
