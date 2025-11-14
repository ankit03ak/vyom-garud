import React from 'react';
import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    product: [
      { label: 'Features', href: '#' },
      { label: 'Specifications', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Documentation', href: '#' }
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#' },
      { label: 'News', href: '#' },
      { label: 'Contact', href: '#contact' }
    ],
    resources: [
      { label: 'Blog', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Partners', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-blue-500/20 overflow-hidden">
     
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05),transparent_50%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
         
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur-md opacity-75"></div>
                <div className="relative bg-slate-900 border border-blue-500/50 rounded-lg p-2">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                VyomGarud
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              Pioneering autonomous UAV technology for intelligence, surveillance, and precision missions.
            </p>
            
           
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                <MapPin className="w-4 h-4" />
                <span>Bangalore, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>contact@vyomgarud.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 (XXX) XXX-XXXX</span>
              </div>
            </div>
          </div>

        
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        <div className="border-t border-blue-500/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm">Get the latest updates on UAV technology and product releases.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-slate-900 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors flex-1 md:w-64"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold text-white hover:from-blue-500 hover:to-cyan-500 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-blue-500/20">
         
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} VyomGarud. All rights reserved.
          </div>

          
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-slate-900 border border-blue-500/20 hover:border-blue-500/50 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </footer>
  );
}