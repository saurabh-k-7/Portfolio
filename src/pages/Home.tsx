import React, { useEffect, useState } from "react";
import MobileHome from "./MobileHome";
import "ldrs/helix";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Minimum 2 seconds of loading animation
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  if (isMobile) {
    return <MobileHome />;
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Loading Screen */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 z-50 transition-opacity duration-1000">
          <l-helix size="150" speed="2.5" color="white"></l-helix>
        </div>
      )}

      {/* 3D Model - Keep it hidden until loaded */}
      <div
        className={`absolute inset-0 z-20 model-container transition-opacity duration-1000 ${
          isModelLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <iframe
          src="https://my.spline.design/miniroomremakecopyprogrammerroom-e96a6679b35c89c566a74cbefc188ad7/"
          frameBorder="0"
          className="model-iframe"
          onLoad={() => setIsModelLoaded(true)} // Hide loading once model is loaded
        ></iframe>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-screen text-center text-white px-40 content-container">
        <div className="bg-violet/10 backdrop-blur-md p-8 rounded-lg">
          <h1 className="text-6xl font-bold mb-6 text-shadow">Saurabh Kale</h1>
          <p className="text-xl text-gray-200 mb-8 text-shadow">
            Full Stack Developer | UI/UX Enthusiast | Data Analyst
          </p>
          <div className="space-y-4">
            <p className="text-gray-300 text-shadow">
              Crafting digital experiences with modern web technologies
            </p>
            <div className="flex gap-4 justify-center text-sm">
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-shadow">
                MERN Stack
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-shadow">
                JavaScript | TypeScript
              </span>
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-shadow">
                Python
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-shadow">
                AWS
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .model-container {
          width: 100%;
          height: 100%;
        }
        .model-iframe {
          width: 100%;
          height: 100%;
        }
        @media (max-width: 1024px) {
          .model-container {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
