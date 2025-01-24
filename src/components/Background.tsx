import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaAws,
  FaDatabase,
  FaNodeJs,
} from "react-icons/fa";

export default function Background() {
  const icons = [
    <FaReact className="icon" />,
    <FaHtml5 className="icon" />,
    <FaCss3Alt className="icon" />,
    <FaJs className="icon" />,
    <FaPython className="icon" />,
    <FaAws className="icon" />,
    <FaDatabase className="icon" />,
    <FaNodeJs className="icon" />,
  ];

  const skills = [
    "React.js",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Python",
    "Tensorflow",
    "AWS",
    "Docker",
    "SQL",
    "Figma",
    "PowerBI",
    "Tableau",
  ];

  // Generate positions for icons ensuring they don't overlap too much
  const randomPositions = Array.from({ length: icons.length }, () => ({
    top: `${Math.random() * 85 + 7}%`,
    left: `${Math.random() * 85 + 7}%`,
  }));

  return (
    <div className="fixed inset-0 z-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900" />

      {/* Ambient lighting effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

      {/* Grid effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, purple 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Moving and dimmed icons */}
      <div className="relative w-full h-full">
        {icons.map((Icon, index) => (
          <div
            key={index}
            className={`absolute text-$
              {index % 2 === 0 ? "[#9333ea]" : "black"}/30 animate-bounce`}
            style={{
              ...randomPositions[index],
              fontSize: "2.5rem",
              opacity: 0.2, // Lower brightness by reducing opacity
              animationDelay: `${Math.random() * 5}s`, // Random animation start time
            }}
          >
            {Icon}
          </div>
        ))}
      </div>

      {/* Skills Text Scroller */}
      <div className="absolute top-0 w-full text-center py-4 bg-gray-900/50 overflow-hidden">
        <div className="w-full whitespace-nowrap animate-scroll">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="mx-8 text-lg font-semibold inline-block text-white/50"
            >
              {skill}
            </span>
          ))}
          {skills.map((skill, index) => (
            <span
              key={index + skills.length}
              className="mx-8 text-lg font-semibold inline-block text-white/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        .animate-bounce {
          animation: bounce 10s ease-in-out infinite;
        }

        @keyframes bounce {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(20px, -20px);
          }
          50% {
            transform: translate(-20px, 20px);
          }
          75% {
            transform: translate(25px, -25px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        .icon:hover {
          transform: scale(1.5);
          transition: transform 0.3s ease-in-out;
        }

        .animate-scroll {
          display: inline-block;
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
