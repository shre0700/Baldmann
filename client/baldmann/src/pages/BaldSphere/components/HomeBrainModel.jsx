import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function InteractiveBrain({ isMobile }) {
  const meshRef = useRef(null);
  const { scene } = useGLTF('/baldsphere/HomeBrain.glb');
  const [autoRotate, setAutoRotate] = useState(true);
  const { viewport } = useThree();

  const clonedScene = scene.clone();

  // Responsive scaling based on viewport and device type
  const getResponsiveScale = () => {
    if (isMobile) {
      return Math.min(viewport.width * 0.008, 0.045); // Smaller on mobile
    }
    return Math.min(viewport.width * 0.006, 0.05); // Larger on desktop
  };

  // Responsive position based on viewport
  const getResponsivePosition = () => {
    if (isMobile) {
      return [0, 0.2, 0]; // Very high position on mobile
    }
    return [0, 0, 0]; // Center/very high position on desktop
  };

  useEffect(() => {
    if (clonedScene) {
      clonedScene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.visible = true;
          const mesh = child;
          if (mesh.material) {
            const material = mesh.material;
            material.transparent = false;
            material.opacity = 1;
          }
        }
      });
    }
  }, [clonedScene]);

  // Auto-rotate only when not being manually controlled
  useFrame((state) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.03;
    }
  });

  if (!clonedScene) return null;

  return (
    <>
      <group
        ref={meshRef}
        scale={getResponsiveScale()}
        position={getResponsivePosition()}
      >
        <primitive object={clonedScene} />
      </group>
      <OrbitControls
        enableDamping
        dampingFactor={0.25}
        enableZoom={true}
        enablePan={false}
        minDistance={isMobile ? 7.5 : 8.5} // Increased minimum distance to prevent zooming too close
        maxDistance={isMobile ? 12 : 15} // Increased maximum distance
        minPolarAngle={Math.PI / 6} // Limit vertical rotation to prevent flipping
        maxPolarAngle={Math.PI - Math.PI / 6} // Limit vertical rotation to prevent flipping
        onStart={() => setAutoRotate(false)}
        onEnd={() => setAutoRotate(true)}
        autoRotate={autoRotate}
        autoRotateSpeed={isMobile ? 0.3 : 0.5}
      />
    </>
  );
}

export default function HomeBrainModel() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Simulate loading time for brain model
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Responsive camera settings
  const getCameraSettings = () => {
    if (isMobile) {
      return {
        position: [0, 0, 8], // Increased distance
        fov: 70
      };
    }
    return {
      position: [0, 0, 9], // Increased distance
      fov: 60
    };
  };

  if (hasError) {
    return (
      <div className="w-full max-w-md h-80 xs:max-w-lg xs:h-96 sm:max-w-xl sm:h-[28rem] md:max-w-2xl md:h-[32rem] lg:max-w-3xl lg:h-[36rem] xl:max-w-4xl xl:h-[40rem] mx-auto mb-6 sm:mb-8 flex items-center justify-center">
        <div className="text-center text-gray-600">
          <div className="text-4xl mb-2">🧠</div>
          <p className="text-sm">Brain model unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md h-80 xs:max-w-lg xs:h-96 sm:max-w-xl sm:h-[28rem] md:max-w-2xl md:h-[32rem] lg:max-w-3xl lg:h-[36rem] xl:max-w-4xl xl:h-[40rem] mx-auto mb-6 sm:mb-8 relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500 mx-auto mb-2"></div>
            <p className="text-sm text-gray-600">Loading brain model...</p>
          </div>
        </div>
      )}
      <Canvas
        camera={getCameraSettings()}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
        dpr={[1, 2]} // Responsive pixel ratio
        onCreated={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
      >
        <ambientLight intensity={isMobile ? 0.9 : 0.8} />
        <directionalLight
          position={[2, 2, 2]}
          intensity={isMobile ? 0.6 : 0.5}
        />

        <InteractiveBrain isMobile={isMobile} />
      </Canvas>
    </div>
  );
}

useGLTF.preload('/baldsphere/HomeBrain.glb'); 