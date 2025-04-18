import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6 px-6 sm:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Branding */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400">MemeMafia</h2>
          <p className="mt-3 text-sm text-gray-300">
            The internet is your playground. We just meme it better. ⚡
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/work" className="hover:text-yellow-400">Our Work</a></li>
            <li><a href="/services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="/careers" className="hover:text-yellow-400">Careers</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-300">📍 Meme HQ, Internet City</p>
          <p className="text-sm text-gray-300">✉️ hello@mememafia.com</p>
          <div className="flex space-x-4 mt-3 text-yellow-400 text-xl">
            <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
          </div>
        </div>

        {/* Newsletter (Optional) */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Subscribe</h3>
          <p className="text-sm text-gray-300 mb-2">Get the latest meme trends weekly 🍟</p>
          <form className="flex flex-col sm:flex-row sm:items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md text-black focus:outline-none w-full sm:w-auto"
            />
            <button className="mt-2 sm:mt-0 sm:ml-2 bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-md">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} MemeMafia. Built with 😎 for the culture.
      </div>
    </footer>
  );
}
