import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-800/50 rounded-xl p-8 border border-gray-700/50 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-400">
          Get in Touch
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex justify-center gap-6">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Mail, href: "#", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}