import Link from "next/link";
import { FaYoutube, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold text-white mb-2">JDCodebase</h2>
          <p>Your one-stop coding platform — learn, code, grow.</p>
        </div>

        <nav aria-label="Footer Quick Links">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/dsa" className="hover:underline">
                DSA
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/languages" className="hover:underline">
                Languages
              </Link>
            </li>
          </ul>
        </nav>

        <address className="not-italic">
          <h3 className="text-lg font-semibold text-white mb-3">
            Connect with Me
          </h3>
          <div className="flex space-x-4" aria-label="Social Media Links">
            <a
              href="https://youtube.com/@jdcodebase-en?si=KU_TsQUT_LfU9oke"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="JDCodebase on YouTube"
            >
              <FaYoutube size={24} className="hover:text-red-500" />
            </a>
            <a
              href="https://github.com/jd-code-base"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="JDCodebase on GitHub"
            >
              <FaGithub size={24} className="hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/jatin-dhamija-971309252/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="JDCodebase on LinkedIn"
            >
              <FaLinkedin size={24} className="hover:text-blue-400" />
            </a>
            <a
              href="https://www.instagram.com/jdcodebase/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="JDCodebase on Instagram"
            >
              <FaInstagram size={24} className="hover:text-blue-400" />
            </a>
          </div>
        </address>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 border-t border-neutral-700 pt-5">
        © {new Date().getFullYear()} JDCodebase. Made with ❤️ by JD.
      </div>
    </footer>
  );
}
