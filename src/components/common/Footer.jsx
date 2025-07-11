import Link from "next/link";
import { FaYoutube, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 px-6 py-12 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-3">
            JDCodebase
          </h2>
          <p className="text-sm text-gray-400">
            Your one-stop coding platform — learn, code, grow.
          </p>
        </div>

        <nav>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/dsa" className="hover:text-blue-400 transition">
                DSA
              </Link>
            </li>
            <li>
              <Link
                href="/languages"
                className="hover:text-blue-400 transition"
              >
                Languages
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-400 transition">
                Projects
              </Link>
            </li>
          </ul>
        </nav>

        <address className="not-italic">
          <h3 className="text-xl font-semibold text-white mb-4">
            Connect with Me
          </h3>
          <div className="flex space-x-5 mt-2">
            <a
              href="https://www.youtube.com/@jdcodebase"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-red-500 transition"
            >
              <FaYoutube size={22} />
            </a>
            <a
              href="https://github.com/jdcodebase"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/jatin-dhamija-jd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://www.instagram.com/jdcodebase/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </address>
      </div>

      <div className="mt-12 text-center text-xs text-gray-500 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} JDCodebase. Made with{" "}
        <span className="text-red-500">❤️</span> by JD.
      </div>
    </footer>
  );
}
