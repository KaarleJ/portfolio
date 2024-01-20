import * as THREE from "three";
import scene from "../scene";

const nextTexture = new THREE.TextureLoader().load("/next.png");
const prismaTexture = new THREE.TextureLoader().load("/prisma.png");
const tailwindTexture = new THREE.TextureLoader().load("/tailwind.png");

nextTexture.colorSpace = THREE.SRGBColorSpace;
prismaTexture.colorSpace = THREE.SRGBColorSpace;
tailwindTexture.colorSpace = THREE.SRGBColorSpace;

const next = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ map: nextTexture })
);

const prisma = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ map: prismaTexture })
);

const tailwind = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ map: tailwindTexture })
);

next.position.set(200, -2, 0);
prisma.position.set(200, 2, 0);
tailwind.position.set(200, -2, 0);

scene.add(next);
scene.add(prisma);
scene.add(tailwind);

export function simplyfoodControl() {
  next.rotation.y += 0.01;
  next.rotation.z -= 0.01;
  next.rotation.x -= 0.01;

  prisma.rotation.y -= 0.01;
  prisma.rotation.z -= 0.01;
  prisma.rotation.x += 0.01;

  tailwind.rotation.y += 0.01;
  tailwind.rotation.z -= 0.01;
  tailwind.rotation.x += 0.01;
}

export function simplyfoodMove(move: number) {
  next.position.x = -118 + move * -0.05;
  prisma.position.x = -116 + move * -0.05;
  tailwind.position.x = -114 + move * -0.05;
}
