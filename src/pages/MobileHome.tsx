import React from "react";

export default function MobileHome() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-40">
      <div className="bg-violet/10 backdrop-blur-md p-6 rounded-lg">
        <h1 className="text-4xl font-bold mb-4 text-shadow">Saurabh Kale</h1>
        <p className="text-lg text-gray-200 mb-6 text-shadow">
          Full Stack Developer | UI/UX Enthusiast | Data Analyst
        </p>
        <div className="space-y-3">
          <p className="text-gray-300 text-shadow">
            Crafting digital experiences with modern web technologies
          </p>
          <div className="flex gap-3 justify-center text-xs">
            <span className="px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-shadow">
              MERN Stack
            </span>
            <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-shadow">
              TypeScript
            </span>
            <span className="px-2 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-shadow">
              Python
            </span>
            <span className="px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-shadow">
              AWS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
