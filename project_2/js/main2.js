import * as THREE from 'https://unpkg.com/three/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.120.1/examples/jsm/controls/OrbitControls.js'
    
    // SCENE AND CAMERA
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // WIRE CUBE
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, wireframe: true } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    // GEO 2
    var geo = new THREE.EdgesGeometry( geometry ); // or WireframeGeometry( geometry )
    var mat = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 2 } );
    var wireframe = new THREE.LineSegments( geo, mat );
    scene.add( wireframe );

    // ORBIT CONTROL
    //const controls = new OrbitControls(camera, renderer.domElement);

    //IMG
    const jeffTexture = new THREE.TextureLoader().load('justin.png');
    const jeff = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: jeffTexture }));
    scene.add(jeff);
    jeff.position.y = 3
    jeff.position.z = -5
    jeff.position.x = 4

    // GRID
    const grid = new THREE.GridHelper(200, 50);
    scene.add( grid );
    grid.position.y = -5;

    // LIGHT
    const pointLight = new THREE.PointLight(0xffffff)
    pointLight.position.set(5,5,5)
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);
    camera.position.z = 5;

    // SCROLL
    function moveCamera() {
      const t = document.body.getBoundingClientRect().top;
      camera.position.z = t * -1;
      //camera.rotation.y = t * -0.0002;
    }
     document.body.onscroll = moveCamera;
     moveCamera();
      // ANIMATION
      const animate = function () {
          requestAnimationFrame( animate );
          cube.rotation.x += 0.01;
          //cube.rotation.y += 0.01;
          //wireframe.rotation.x += -0.01;
          wireframe.rotation.y += -0.01;
          renderer.render( scene, camera );
      };
      animate();