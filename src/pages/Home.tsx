import React from "react";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Add the embedded Spline design as a foreground */}
      <div className="absolute inset-0 z-20">
        <iframe
          src="https://my.spline.design/miniroomremakecopyprogrammerroom-e96a6679b35c89c566a74cbefc188ad7/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
        ></iframe>
      </div>
      {/* Foreground content with blur effect */}
      <div className="relative z-10 flex flex-col items-start justify-center h-screen text-center text-white px-40">
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
    </div>
  );
}
