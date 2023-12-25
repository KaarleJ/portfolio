import * as THREE from "three";
import scene from "../scene";

const planetTexture = new THREE.TextureLoader().load("/planet.png");
const planetNormal = new THREE.TextureLoader().load("/planet_normal.jpg");
planetTexture.colorSpace = THREE.SRGBColorSpace;

const planet = new THREE.Mesh(
  new THREE.SphereGeometry(3, 64, 64),
  new THREE.MeshStandardMaterial({
    map: planetTexture,
    normalMap: planetNormal,
  })
);

planet.position.set(86, 0, -5);
scene.add(planet);

const moonTexture = new THREE.TextureLoader().load("/moon.jpg");
const moonNormal = new THREE.TextureLoader().load("/moon_normal.jpg");
moonTexture.colorSpace = THREE.SRGBColorSpace;

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(0.5, 12, 12),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: moonNormal,
  })
);

moon.position.set(86, 0, -5);
scene.add(moon);

let angle = 0;
export function planetControl() {
  planet.rotation.y += 0.002;
  moon.rotation.y += 0.02;

  // Set the moon's position relative to the planet
  angle += 0.005;
  moon.position.x = planet.position.x + Math.cos(angle) * 7;
  moon.position.z = planet.position.z + Math.sin(angle) * 7;
}
