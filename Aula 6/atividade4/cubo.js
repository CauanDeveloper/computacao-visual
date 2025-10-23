const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

scene.background = new THREE.Color(0x300060);

const geometry = new THREE.BoxGeometry();
const materials = [
    new THREE.MeshStandardMaterial({ color: 0xff0000 }),
    new THREE.MeshStandardMaterial({ color: 0x000000 }),
    new THREE.MeshStandardMaterial({ color: 0x0000ff }),
    new THREE.MeshStandardMaterial({ color: 0x00ff00 }),
    new THREE.MeshStandardMaterial({ color: 0xffff00 }),
    new THREE.MeshStandardMaterial({ color: 0xffa500 })
];
const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);

const orbitPrismGeometry = new THREE.CylinderGeometry(0.3, 0.3, 1.5, 6);
const orbitGoldenMaterial = new THREE.MeshStandardMaterial({
    color: 0xffd700,
    metalness: 0.8,
    roughness: 0.3
});
const orbitGoldenPrism = new THREE.Mesh(orbitPrismGeometry, orbitGoldenMaterial);
orbitGoldenPrism.position.set(2, 0, 0);
const orbitGroup = new THREE.Group();
orbitGroup.add(orbitGoldenPrism);
scene.add(orbitGroup);

const sphereGeometry = new THREE.SphereGeometry(0.7, 32, 32);
const sphereMaterial = new THREE.MeshStandardMaterial({
    color: 0x8800ff,
    roughness: 0.2,
    metalness: 0.7
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

sphere.position.set(-3, 1, 0);
orbitGroup.add(sphere);

const secondPrismGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2.0, 6);
const secondPrismMaterial = new THREE.MeshStandardMaterial({
    color: 0x00aaff,
    transparent: true,
    opacity: 0.6,
    roughness: 0.4,
    metalness: 0.1
});
const secondPrism = new THREE.Mesh(secondPrismGeometry, secondPrismMaterial);
secondPrism.position.set(3, -1, 0);
scene.add(secondPrism);

const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
}

animate();

camera.position.z = 5;