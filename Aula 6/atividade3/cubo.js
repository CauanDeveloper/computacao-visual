const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const textureLoader = new THREE.TextureLoader();
const materialVermelho = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const materials = [
    new THREE.MeshStandardMaterial({ color: 0xff0000 }),
    new THREE.MeshStandardMaterial({ color: 0xff0000 }),
    new THREE.MeshStandardMaterial({ color: 0xff0000 }),
    new THREE.MeshStandardMaterial({ color: 0xff0000 }),
    new THREE.MeshStandardMaterial({ color: 0xff0000 }),
    new THREE.MeshStandardMaterial({ color: 0xff0000 })
];
const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);

const ambientLight = new THREE.AmbientLight(0x404040, 0.5); 
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0); 
directionalLight.position.set(5, 10, 7.5); 
scene.add(directionalLight);

let rotationSpeedX = 0.01; 
let rotationSpeedY = 0.01;

const SPEED_STEP = 0.005;

window.addEventListener('keydown', (event) => {

    switch (event.key) {
        case 'ArrowUp':
            rotationSpeedX = rotationSpeedX + SPEED_STEP;
            rotationSpeedY = rotationSpeedY + SPEED_STEP;      
            break;

        case 'ArrowDown':
            let newAbsX = rotationSpeedX - SPEED_STEP;
            let newAbsY = rotationSpeedY - SPEED_STEP;
            
            rotationSpeedX = newAbsX ;
            rotationSpeedY = newAbsY ;
            break;
            
        case 'ArrowLeft':
            rotationSpeedX *= -1;
            break;

        case 'ArrowRight':
            rotationSpeedY *= -1;
            break;
    }
});

function animate() {
    requestAnimationFrame(animate);
    
    cube.rotation.x -= rotationSpeedX; 
    cube.rotation.y -= rotationSpeedY;
    
    renderer.render(scene, camera);
}

animate();

camera.position.z = 5;