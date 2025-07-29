import { Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' }
  ];

  const quickLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Features', href: '#features' },
    { label: 'Technology', href: '#technology' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Experience', href: '#experience' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent">
            AURORA ONE
          </h3>
          <p className="text-gray-400 max-w-md">
            Experience the future of luxury timepieces. Crafted for visionaries, engineered for excellence, designed to disappear into your lifestyle.
          </p>
          <div className="space-y-3 text-gray-400">
            <div className="flex items-center gap-3">
              <Mail size={20} /> hello@auroraone.com
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} /> +1 (555) 123-4567
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} /> Cupertino, CA
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
          <nav className="flex flex-col space-y-3 text-gray-400">
            {quickLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-6">Stay Connected</h4>
          <p className="text-gray-400 mb-6">
            Get exclusive updates and early access to new releases.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl bg-gray-800 border border-gray-700 px-4 py-3 placeholder-gray-500 focus:outline-none focus:border-white transition"
              required
            />
            <button className="w-full bg-white text-black rounded-xl py-3 font-semibold hover:bg-gray-200 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-800 pt-6 flex flex-col lg:flex-row justify-between items-center text-gray-500 text-sm gap-6">
        <span>© 2025 Aurora Labs. All rights reserved.</span>
        <div className="flex gap-6">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-white transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
