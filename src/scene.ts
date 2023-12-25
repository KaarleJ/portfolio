import * as THREE from "three";

// Here we instantiate and configure the scene.
const scene = new THREE.Scene();

const loader = new THREE.TextureLoader();

let offsetX = 0;
let offsetRepeatX = 1;
let offsetY = 0;
let offsetRepeatY = 1;

const spaceTexture = loader.load(
  "space.jpg",
  // Callback function for scaling the image to fit the screen
  function (texture) {
    const targetWidth = window.innerWidth;
    const targetHeight = window.innerHeight;
    const imageWidth = texture.image.width;
    const imageHeight = texture.image.height;

    const targetAspect = targetWidth / targetHeight;
    const imageAspect = imageWidth / imageHeight;
    const factor = imageAspect / targetAspect;
    // When factor larger than 1, that means texture 'wilder' than target。
    // we should scale texture height to target height and then 'map' the center  of texture to target， and vice versa.
    offsetX = factor > 1 ? (1 - 1 / factor) / 2 : 0;
    offsetRepeatX = factor > 1 ? 1 / factor : 1;
    offsetY = factor > 1 ? 0 : (1 - factor) / 2;
    offsetRepeatY = factor > 1 ? 1 : factor;
  },
  undefined,
  function (error) {
    console.error("An error occurred while loading the texture", error);
  }
);

spaceTexture.colorSpace = THREE.SRGBColorSpace;
scene.background = spaceTexture;

scene.background.offset.x = offsetX;
scene.background.repeat.x = offsetRepeatX;
scene.background.offset.y = offsetY;
scene.background.repeat.y = offsetRepeatY;

// Add ambient light to the scene
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

export default scene;
