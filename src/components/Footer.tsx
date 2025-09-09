import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Our Story", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
    ],
    Products: [
      { name: "Marble Collection", href: "#products" },
      { name: "Granite Selection", href: "#products" },
      { name: "Custom Solutions", href: "#" },
      { name: "Installation Services", href: "#" },
    ],
    Resources: [
      { name: "Portfolio", href: "#portfolio" },
      { name: "Care & Maintenance", href: "#" },
      { name: "Design Gallery", href: "#" },
      { name: "Technical Specs", href: "#" },
    ],
    Support: [
      { name: "Contact Us", href: "#contact" },
      { name: "Get Quote", href: "#contact" },
      { name: "FAQ", href: "#" },
      { name: "Warranty", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-6 gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Image
                src="/marmilixLogo.png"
                alt="Marmilix"
                width={180}
                height={180}
                className="h-36 w-auto mb-4"
                priority
              />
              {/* <p className="text-gray-600 mb-6 max-w-sm">
                Transforming spaces worldwide with premium marble and granite for over 35 years.
                Quality, craftsmanship, and excellence in every stone.
              </p> */}

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@marmilix.com</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm mb-4 tracking-wide uppercase font-semibold text-black">
                  {title}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Separator (replacing shadcn with Tailwind) */}
          <div className="h-px w-full bg-gray-200 mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600">
              © {currentYear} Marmilix. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-gray-600" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-black transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
