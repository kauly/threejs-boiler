import "./style.css";
import * as THREE from "three";

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let light: THREE.DirectionalLight;
let cube1: THREE.Mesh;
let cube2: THREE.Mesh;
let cube3: THREE.Mesh;

init();
addCubes();
animate();

// a basic scene setup
function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color("#fdf0d5");

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 0, 1);

  scene.add(light);
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  window.addEventListener("resize", onWindowResize, false);
}

// on window resize, update the camera and renderer size
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// render the scene
function animate() {
  requestAnimationFrame(animate);
  cube1.rotation.x += 0.01;
  cube2.rotation.x -= 0.01;
  cube3.rotation.y += 0.01;

  renderer.render(scene, camera);
}

function addCubes() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({
    color: "#c1121f",
  });
  cube1 = new THREE.Mesh(geometry, material);
  cube2 = new THREE.Mesh(geometry, material);
  cube3 = new THREE.Mesh(geometry, material);

  cube1.position.x = -2;
  cube2.position.x = 0;
  cube3.position.x = 2;

  camera.position.z = 5;

  scene.add(cube1);
  scene.add(cube2);
  scene.add(cube3);
}
