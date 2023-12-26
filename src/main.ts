import "./style.css";
import * as THREE from "three";
import { mainObjectControl, mainObjectMove } from "./mainObjectControl";

// We import the instantiated scene from another file
import scene from "./scene";

// Instantiate the camera
export const camera = new THREE.PerspectiveCamera(
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

  // We call the mainObjectControl function to move the objects
  mainObjectControl();

  renderer.render(scene, camera);
}

// We add an event listener for scrolling and move the camera accordingly
document.body.onscroll = moveCamera;
function moveCamera() {
  let move = document.body.getBoundingClientRect().top;
  if (window.innerWidth > 1920) {
    move = document.body.getBoundingClientRect().top * 1.05;
  }
  if (window.innerWidth > 2560) {
    move = document.body.getBoundingClientRect().top * 1.1;
  }
  camera.position.x = move * -0.04;

  mainObjectMove(move);
}

animate();
