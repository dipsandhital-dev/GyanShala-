import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  BookOpen,
  GraduationCap,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* GyanShala Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap size={28} className="text-emerald-400" />
              <h3 className="text-xl font-bold text-white">GyanShala</h3>
            </div>
            <p className="mb-4 text-sm leading-relaxed">
              Empowering learners with accessible, high-quality education anytime, anywhere.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
              <BookOpen size={20} /> Explore
            </h4>
            <ul className="space-y-3">
              {["All Courses", "Free Resources", "Certifications", "Live Classes", "Study Groups"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition-colors duration-200 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Support</h4>
            <ul className="space-y-3">
              {["Help Center", "FAQs", "Contact Us", "Privacy Policy", "Terms of Use"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-white transition-colors duration-200 text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">Stay Inspired</h4>
            <p className="text-sm mb-4">
              Get weekly learning tips, course updates, and motivational content.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm w-full"
                required
              />
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 whitespace-nowrap"
              >
                Join Now
              </button>
            </form>
          </div>

        </div>

        {/* Contact Info (Optional) */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400 mb-8">
          <div className="flex items-center gap-2">
            <MapPin size={16} /> Kathmandu, Nepal
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} /> +977 98XXXXXXX
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} /> support@gyanshala.edu.np
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} GyanShala. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <a href="#" className="hover:text-white transition-colors">Blog</a>
              <a href="#" className="hover:text-white transition-colors">Partners</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;