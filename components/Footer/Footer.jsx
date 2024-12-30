import React, { Suspense } from 'react';
import Link from 'next/link'; // Corrected import for `Link`
import { projects } from '../jsons/projects';

const Mail = React.lazy(() => import('lucide-react').then(module => ({ default: module.Mail })));
const MapPin = React.lazy(() => import('lucide-react').then(module => ({ default: module.MapPin })));
const Phone = React.lazy(() => import('lucide-react').then(module => ({ default: module.Phone })));
const ArrowRight = React.lazy(() => import('lucide-react').then(module => ({ default: module.ArrowRight })));
const Facebook = React.lazy(() => import('lucide-react').then(module => ({ default: module.Facebook })));
const Twitter = React.lazy(() => import('lucide-react').then(module => ({ default: module.Twitter })));
const Linkedin = React.lazy(() => import('lucide-react').then(module => ({ default: module.Linkedin })));
const Youtube = React.lazy(() => import('lucide-react').then(module => ({ default: module.Youtube })));
const Instagram = React.lazy(() => import('lucide-react').then(module => ({ default: module.Instagram })));

export default function Footer() {

  const links = [
    { title: 'Privacy Policy', slug: 'privacy-policy' },
    { title: 'Conditions', slug: 'conditions' },
    { title: 'Company', slug: 'company' },
    { title: 'FAQ & Terms', slug: 'faq-terms' },
    { title: 'Contact Us', slug: 'contacts' },
  ];
  
  return (
    <footer
      className="relative text-gray-200"
      style={{
        backgroundImage: `url("https://files.catbox.moe/ftjrp3.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/90" />
      <div className="relative px-6 py-12 mx-auto max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Logo and Newsletter Section */}
          <div className="space-y-6">
            <img src="https://files.catbox.moe/6wp9e5.svg" alt="Alpha Omega" className="h-8" />
            <p className="max-w-md text-gray-400 text-sm">From Concept to Creation</p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Join Newsletters</h3>
              <form className="flex gap-2 text-sm">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A00201]"
                />
                <button
                  type="submit"
                  className="p-2 text-white bg-[#A00201] rounded-lg hover:bg-[#600100] transition-colors"
                >
                  <Suspense fallback={<div>...</div>}>
                    <ArrowRight className="w-5 h-5" />
                  </Suspense>
                </button>
              </form>
            </div>
          </div>

          {/* Our Projects */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Our Projects</h3>
            <ul className="space-y-4">
              {projects.map((item) => (
                <li key={item.name}>
                  <Link href={`/project/${item.slug}`} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Support</h3>
            <ul className="space-y-4">
              {links.map((item) => (
                <li key={item.title}>
                  <Link href={`/${item.slug}`} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm">
                <div className="p-2 bg-[#A00201] hover:bg-[#600100] rounded-full">
                  <Suspense fallback={<div>...</div>}>
                    <Phone className="w-5 h-5" />
                  </Suspense>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone Number</p>
                  <p>+977 9767656456</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <div className="p-2 bg-[#A00201] hover:bg-[#600100] rounded-full">
                  <Suspense fallback={<div>...</div>}>
                    <Mail className="w-5 h-5" />
                  </Suspense>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Address</p>
                  <p>alphaomegaengsol@gmail.com</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <div className="p-2 bg-[#A00201] hover:bg-[#600100] rounded-full">
                  <Suspense fallback={<div>...</div>}>
                    <MapPin className="w-5 h-5" />
                  </Suspense>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Locations</p>
                  <p>Kathmandu, Nepal</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-gray-400 text-sm">
              © 2024 <span className="text-[#A00201]">Alpha Omega</span>. All Rights Reserved
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: 'https://www.facebook.com/alphaomegaengsol' },
                { icon: Linkedin, href: 'https://www.linkedin.com/company/alphaomegaengsol' },
                { icon: Youtube, href: 'https://www.youtube.com/@alphaomegaengsol' },
                { icon: Instagram, href: 'https://www.instagram.com/alphaomegaengsol' },
                { icon: Twitter, href: 'https://www.x.com/alphaomegaengsol' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Suspense fallback={<div>...</div>}>
                    <social.icon className="w-5 h-5" />
                  </Suspense>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
