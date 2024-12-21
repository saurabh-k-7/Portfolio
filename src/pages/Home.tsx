// export default function Home() {
//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       <div className="max-w-2xl text-center">
//         <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
//           John Developer
//         </h1>
//         <p className="text-xl text-gray-400 mb-8">
//           Full Stack Developer & UI/UX Enthusiast
//         </p>
//         <div className="space-y-4">
//           <p className="text-gray-300">
//             Crafting digital experiences with modern web technologies
//           </p>
//           <div className="flex gap-4 justify-center text-sm">
//             <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
//               React
//             </span>
//             <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
//               TypeScript
//             </span>
//             <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
//               Node.js
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import Background from "../components/Background"; // Import the Background component

function Model() {
  const { scene } = useGLTF("/room.gltf");

  const modelRef = useRef<THREE.Object3D>(null);

  const initialRotation = -Math.PI / 2.75;

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y =
        initialRotation + (Math.sin(Date.now() * 0.002) * Math.PI) / 100;
    }
  });

  return (
    <primitive ref={modelRef} object={scene} scale={10} position={[3, 1, 1]} />
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Background /> {/* Add the Background component */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas>
          <ambientLight intensity={5} />
          <directionalLight position={[10, 0, 5]} intensity={1} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 1}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
      <div className="relative z-10 flex flex-col items-end justify-center h-screen text-center text-white px-10 transform -translate-x-20 -translate-y-20">
        {/* Change items-start to items-center or items-end to adjust horizontal alignment */}
        {/* Change text-left to text-center or text-right to adjust text alignment */}
        <h1 className="text-6xl font-bold mb-6 text-shadow">Saurabh Kale</h1>
        <p className="text-xl text-gray-300 mb-8 text-shadow">
          Full Stack Developer & UI/UX Enthusiast
        </p>
        <div className="space-y-4">
          <p className="text-gray-400 text-shadow">
            Crafting digital experiences with modern web technologies
          </p>
          <div className="flex gap-4 justify-center text-sm">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-shadow">
              React
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-shadow">
              TypeScript
            </span>
            <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-shadow">
              Node.js
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
