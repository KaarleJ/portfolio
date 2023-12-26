import "./style.css";
import * as THREE from "three";
import { kaarleControl } from "./objects/kaarle";
import { meteorControl } from "./meteorControl";
import { planetControl } from "./objects/planet";
import { digitMove, digitControl } from "./objects/digit";
import { deathStarMove } from "./objects/deathStar";
import { hopsControl } from "./objects/hops";
import { simplyfoodControl, simplyfoodMove } from "./objects/simplyfood";
import { javaControl } from "./objects/java";

// We import the instantiated scene from another file
import scene from "./scene";

// Instantiate the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.setZ(5);

// Instantiate the renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg") as HTMLCanvasElement,
  antialias: true,
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Render the scene
renderer.render(scene, camera);

// This function will be called on every frame
function animate() {
  requestAnimationFrame(animate);

  // We call the control functions for the objects
  meteorControl(camera.position.x, camera.position.y, camera.position.z);
  kaarleControl();
  planetControl();
  digitControl();
  hopsControl();
  simplyfoodControl();
  javaControl();

  renderer.render(scene, camera);
}

// We add an event listener for scrolling and move the camera accordingly
document.body.onscroll = moveCamera;
function moveCamera() {
  const move = document.body.getBoundingClientRect().top;
  camera.position.x = move * -0.04;

  digitMove(move);
  deathStarMove(move);
  simplyfoodMove(move);
}

animate();
