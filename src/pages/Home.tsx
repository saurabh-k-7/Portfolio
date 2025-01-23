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
          Full Stack Developer | UI/UX Enthusiast | Data Analyst
        </p>
        <div className="space-y-4">
          <p className="text-gray-400 text-shadow">
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
  );
}
