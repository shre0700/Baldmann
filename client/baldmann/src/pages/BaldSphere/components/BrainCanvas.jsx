'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { Suspense, useRef, forwardRef, useImperativeHandle } from 'react';
import BrainModel from './BrainModel';

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2 text-gray-600">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
        <div className="text-sm">Loading 3D Brain Model...</div>
      </div>
    </Html>
  );
}

const BrainCanvas = forwardRef(({ highlightedRegions = [] }, ref) => {
  const controlsRef = useRef(null);

  useImperativeHandle(ref, () => ({
    resetCamera: () => {
      if (controlsRef.current) {
        // Reset camera position and zoom
        controlsRef.current.reset();
      }
    }
  }));

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 1.5], fov: 25, near: 0.01, far: 100 }}
        style={{ background: '#eeeeee', width: '100%', height: '100%' }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

        <Suspense fallback={<Loader />}>
          <BrainModel highlightedRegions={highlightedRegions} />
        </Suspense>
        <OrbitControls
          ref={controlsRef}
          enableDamping
          dampingFactor={0.25}
          autoRotate
          autoRotateSpeed={0.5}
          enableZoom={true}
        />
      </Canvas>
    </div>
  );
});

BrainCanvas.displayName = 'BrainCanvas';

export default BrainCanvas; 