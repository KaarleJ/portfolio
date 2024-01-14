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

// This function checks if the user is on a mobile device
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// This function will be called on every frame
function animate() {
  requestAnimationFrame(animate);

  // We call the mainObjectControl function to move the objects if not on mobile
  if (!isMobile()) {
    mainObjectControl();
  }

  renderer.render(scene, camera);
}

// We add an event listener for scrolling and move the camera accordingly
document.body.onscroll = isMobile() ? null : moveCamera;
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
