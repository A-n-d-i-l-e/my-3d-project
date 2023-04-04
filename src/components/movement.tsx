import { useEffect } from 'react';
import * as CANNON from 'cannon';
import { Object3D, Vector3, PerspectiveCamera } from 'three';

interface MovementProps {
  bottle: Object3D;
  size: Vector3;
  camera: PerspectiveCamera;
  angleIncrement: number;
  speed: number;
  maxDistance: number;
}


const Movement: React.FC<MovementProps> = ({ bottle, angleIncrement, speed, maxDistance, size, camera }) => {
  useEffect(() => {
    const world = new CANNON.World();
    world.gravity.set(0, -9.82, 0);

    // Add bottle body
    const shape = new CANNON.Cylinder(size.y / 2, size.y / 2, size.x, 20);
    const bottleBody = new CANNON.Body({ mass: 1, shape });
    bottleBody.position.set(bottle.position.x, bottle.position.y, bottle.position.z);
    bottleBody.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), -Math.PI / 2);
    world.addBody(bottleBody);

    // Handle user scroll
    let distance = 0;
    let angle = 0;
    window.addEventListener('wheel', (e) => {
      const delta = e.deltaY * 0.1;
      if (delta > 0) {
        distance += speed;
        angle += angleIncrement;

        // Limit distance
        if (distance > maxDistance) {
          distance = maxDistance;
        }

        // Update bottle position and rotation
        const newPosition = new CANNON.Vec3(-distance, 0, 0);
        const newQuaternion = new CANNON.Quaternion();
        newQuaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), angle);
        bottleBody.position.copy(newPosition);
        bottleBody.quaternion.copy(newQuaternion);
      }
    });

    // Update Cannon.js world
    const update = () => {
      world.step(1 / 60);
      const position = bottleBody.position;
      const quaternion = bottleBody.quaternion;
      bottle.position.set(position.x, position.y, position.z);
      bottle.quaternion.set(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
    };

    const animateMovement = () => {
      update();
      camera.lookAt(bottle.position);
      requestAnimationFrame(animateMovement);
    };

    // Start animation loop
    animateMovement();

    return () => {
      // Cleanup
    };
  }, [bottle, angleIncrement, speed, maxDistance, size, camera]);

  return null;
};

export default Movement;
