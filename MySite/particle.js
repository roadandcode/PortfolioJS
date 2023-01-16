// JavaScript code for the particle animation
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("jsSection").appendChild(renderer.domElement);

var particles = new THREE.Geometry();
var material = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    size: 0.1
});

//Reduce the number of particles
var particleCount = 5000;

//Simplifying the animation
for (var i = 0; i < particleCount; i++) {
    var particle = new THREE.Vector3(
        Math.random() * 500 - 250,
        Math.random() * 500 - 250,
        Math.random() * 500 - 250
    );
    particles.vertices.push(particle);
}

var particleSystem = new THREE.Points(particles, material);
scene.add(particleSystem);

//Handling resizing
window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

var light = new THREE.PointLight(0xFFFFFF);
light.position.set(0, 0, 0);
scene.add(light);

//Add more lights
var light1 = new THREE.PointLight(0xFFFFFF, 1, 0);
light1.position.set(0, 0, 0);
scene.add(light1);

var light2 = new THREE.PointLight(0xFFFFFF, 1, 0);
light2.position.set(0, 0, 0);
scene.add(light2);

var light3 = new THREE.PointLight(0xFFFFFF, 1, 0);
light3.position.set(0, 0, 0);
scene.add(light3);


document.addEventListener("mousemove", onDocumentMouseMove, false);
function onDocumentMouseMove(event) {
    light.position.set(event.clientX, event.clientY, 100);
}

//camera.position.z = 100;

document.addEventListener("mousedown", onMouseDown, false);
document.addEventListener("mouseup", onMouseUp, false);

var isMouseDown = false;

function onMouseDown() {
    isMouseDown = true;
}

function onMouseUp() {
    isMouseDown = false;
}

function animate() {
    requestAnimationFrame(animate);
    for (var i = 0; i < particles.vertices.length; i++) {
        var particle = particles.vertices[i];
        if (isMouseDown) {
            particle.x += Math.random() * 0.1 - 0.05;
            particle.y += Math.random() * 0.1 - 0.05;
            particle.z += Math.random() * 0.1 - 0.05;
        } else {
            particle.x += Math.random() * 0.05 - 0.025;
            particle.y += Math.random() * 0.05 - 0.025;
            particle.z += Math.random() * 0.05 - 0.025;
        }
    }
    particles.verticesNeedUpdate = true;
    renderer.render(scene, camera);
}
animate();