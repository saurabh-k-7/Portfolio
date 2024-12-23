// import { Suspense, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import * as THREE from "three";
// import Background from "../components/Background"; // Import the Background component

// function Model() {
//   const { scene } = useGLTF("/scene.gltf");

//   const modelRef = useRef<THREE.Object3D>(null);

//   const initialRotation = -Math.PI / 2;

//   useFrame(() => {
//     if (modelRef.current) {
//       modelRef.current.rotation.y =
//         initialRotation + (Math.sin(Date.now() * 0.001) * Math.PI) / 5;
//     }
//   });

//   return (
//     <primitive ref={modelRef} object={scene} scale={10} position={[1, 1, 1]} />
//   );
// }

// export default function Home() {
//   return (
//     <div className="relative min-h-screen">
//       <Background /> {/* Add the Background component */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <Canvas>
//           <ambientLight intensity={2} />
//           <directionalLight position={[10, 0, 5]} intensity={1} />
//           <Suspense fallback={null}>
//             <Model />
//           </Suspense>
//           <OrbitControls
//             enableZoom={false}
//             maxPolarAngle={Math.PI / 1}
//             minPolarAngle={Math.PI / 2}
//           />
//         </Canvas>
//       </div>
//       <div className="relative z-10 flex flex-col items-end justify-center h-screen text-center text-white px-10 transform -translate-x-20 -translate-y-20">
//         {/* Change items-start to items-center or items-end to adjust horizontal alignment */}
//         {/* Change text-left to text-center or text-right to adjust text alignment */}
//         <h1 className="text-6xl font-bold mb-6 text-shadow">Saurabh Kale</h1>
//         <p className="text-xl text-gray-300 mb-8 text-shadow">
//           Full Stack Developer & UI/UX Enthusiast
//         </p>
//         <div className="space-y-4">
//           <p className="text-gray-400 text-shadow">
//             Crafting digital experiences with modern web technologies
//           </p>
//           <div className="flex gap-4 justify-center text-sm">
//             <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-shadow">
//               React
//             </span>
//             <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-shadow">
//               TypeScript
//             </span>
//             <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-shadow">
//               Node.js
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Add the Sketchfab iframe as a background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="sketchfab-embed-wrapper w-full h-full">
          <iframe
            title="Room Isometric"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/4f5313ae716545a3be653cf045d0c8f2/embed?autospin=1&autostart=1&transparent=1&ui_hint=0&ui_theme=dark&dnt=1"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-end justify-center h-screen text-center text-white px-10">
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
