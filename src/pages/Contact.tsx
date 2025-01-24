import { Mail, Github, Linkedin, Instagram, FileText } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="relative max-w-md w-full bg-gray-800/50 rounded-xl p-8 border border-gray-700/50 backdrop-blur-sm flex flex-col items-center card">
        <div className="relative w-36 h-36 rounded-full overflow-hidden mb-4">
          <img
            src="/logo.svg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-3xl font-bold text-purple-400 mb-2">
          Saurabh Kale
        </h2>
        <p className="text-1xl text-gray-100 mb-4">
          Full Stack Developer | UI/UX | Data Analyst
        </p>
        <p className="text-gray-400 mb-4"></p>
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="https://www.linkedin.com/in/saurabh-kale-056b7a22a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/saurabh-k-7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:saurabh2003kale@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://www.instagram.com/saurabh.k.7?igsh=YXZjMXlidWoxanRq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>
        <div className="flex justify-center w-full mb-6">
          <a
            href="https://drive.google.com/file/d/1TXZU5T1kiavBUlXPDNCOxnaauLIBH5FN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300 text-center"
          >
            <FileText size={20} className="inline-block mr-2" />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
