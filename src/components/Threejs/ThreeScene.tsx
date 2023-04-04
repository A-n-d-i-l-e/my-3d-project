import React, { useEffect, useRef } from 'react';
import {WebGLRenderer, PerspectiveCamera,Scene,Color,AmbientLight,PointLight,HemisphereLight, Box3,Mesh,MeshStandardMaterial,TextureLoader,Vector3, DoubleSide, CanvasTexture, MeshBasicMaterial, PlaneGeometry,} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Movement from '../movement';
import Navbar from '../Navbar';
import Content from '../Content';

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bottleRef = useRef<Mesh>();

  useEffect(() => {
    if (containerRef.current === null) return;
  
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
  
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 15);
  
    const scene = new Scene();
    scene.background = new Color('#7EA594');

  
    // Create a mesh to cover the entire viewport
    const geometry = new PlaneGeometry(window.innerWidth, window.innerHeight);
    const material = new MeshBasicMaterial({ 
      map: new CanvasTexture(getGradientCanvas()), 
      side: DoubleSide 
    });
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);
  
    const ambientLight = new AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
  
    const pointLight = new PointLight(0xffffff, 1, 300);
    pointLight.position.set(120, 30, 30);
    scene.add(pointLight);
  
    const hemiLight = new HemisphereLight(0xffffff, 0x444444, 1);
    hemiLight.position.set(0, 80, 0);
    scene.add(hemiLight);
  
    const loader = new GLTFLoader();
    const textureLoader = new TextureLoader();
  
    textureLoader.load('assets/texture.jpg', (texture) => {
      loader.load('assets/winebottle.glb', (gltf) => {
        const bottle = gltf.scene;
        bottle.traverse((child) => {
          if (child instanceof Mesh) {
            child.material = new MeshStandardMaterial({ map: texture, roughness: 0.7, metalness: 0.5 });
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
  
        const box = new Box3().setFromObject(bottle);
        const size = new Vector3();
        box.getSize(size);
        const maxSize = Math.max(size.x, size.y, size.z);
        bottle.scale.setScalar(10 / maxSize);
        bottle.position.y = -size.y / 40;
        bottle.position.x = 6;
        bottle.rotation.y = Math.PI / 1.5;
        bottle.rotation.x = Math.PI / 1.7;
        bottle.rotation.z = Math.PI / -6;
  
        bottle.name = 'Wine_Bottle_1';
        bottleRef.current = bottle as unknown as Mesh;
        scene.add(bottle);
  
        const animate = () => {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };
  
        animate();
      });
    });
  
    return () => {
      // Cleanup
    };
  }, []);
  
  // Function to create the gradient canvas
  // Function to create the gradient canvas
function getGradientCanvas() {
  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const context = canvas.getContext('2d') as CanvasRenderingContext2D;

  // Start the gradient at the bottom left corner (0, canvas.height) and end it at the top right corner (canvas.width, 0)
  const gradient = context.createLinearGradient(0, canvas.height, canvas.width, 0);
  gradient.addColorStop(0, '#4F647A'); // Darker color at the bottom
  gradient.addColorStop(1, '#7EA594'); // Lighter color at the top

  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  return canvas;
}

  
  
  

  return (
    <div>
      <Navbar />
      <Content />
      <div ref={containerRef} />
      {bottleRef.current && (
        <Movement bottle={bottleRef.current} angleIncrement={0.01} speed={0.3} maxDistance={50} size={new Vector3()} camera={new PerspectiveCamera()} />
      )}

    </div>
  );
};


export default ThreeScene;
