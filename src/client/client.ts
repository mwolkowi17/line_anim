import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 50


const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// const geometry = new THREE.BoxGeometry()
// const material = new THREE.MeshBasicMaterial({
//     color: 0x00ff00,
//     wireframe: true,
// })

// const cube = new THREE.Mesh(geometry, material)


//scene.add(cube)

const material = new THREE.LineBasicMaterial( { color: 0x00ff00 } );

const points = [];
points.push( new THREE.Vector3( -7.5, 0, 0 ) );
points.push( new THREE.Vector3( 0, 20, 3 ) );
//points.push( new THREE.Vector3( 10, 0, 0 ) );
points.push( new THREE.Vector3( 7.5, 0, 0 ) );
points.push( new THREE.Vector3( 0, 0, 12 ) );
points.push( new THREE.Vector3( - 7.5, 0, 0 ) );
points.push( new THREE.Vector3( 7.5, 0, 0 ) );
points.push( new THREE.Vector3( 0, 0, 12 ) );
points.push( new THREE.Vector3( 0, 20, 3 ) );


const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );

scene.add( line );

const controls = new OrbitControls(camera, renderer.domElement)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function animate() {
    requestAnimationFrame(animate)

   //line.rotation.x += 0.005
   //line.rotation.y += 0.005

   controls.update()

    render()
}

function render() {
    renderer.render(scene, camera)
}

animate()