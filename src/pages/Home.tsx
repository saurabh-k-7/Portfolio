import React, { useEffect, useState } from "react";
import MobileHome from "./MobileHome";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <MobileHome />;
  }

  return (
    <div className="relative min-h-screen">
      {/* Add the embedded Spline design as a foreground */}
      <div className="absolute inset-0 z-20 model-container">
        <iframe
          src="https://my.spline.design/miniroomremakecopyprogrammerroom-e96a6679b35c89c566a74cbefc188ad7/"
          frameBorder="0"
          className="model-iframe"
        ></iframe>
      </div>
      {/* Foreground content with blur effect */}
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
            display: none; /* Hide the model for tablets and smaller devices */
          }
        }
      `}</style>
    </div>
  );
}
