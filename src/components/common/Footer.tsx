import { Link } from 'react-router-dom';
import { Building2, Globe, MessageSquare, Share2, Mail, Heart } from 'lucide-react';
import { APP_NAME, APP_TAGLINE } from '@/constants';

const footerLinks = {
  Product: [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Builders', path: '/builders' },
    { label: 'Blog', path: '/blog' },
  ],
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '#' },
    { label: 'Press', path: '#' },
    { label: 'Contact', path: '/contact' },
  ],
  Support: [
    { label: 'FAQ', path: '/faq' },
    { label: 'Help Center', path: '#' },
    { label: 'Privacy Policy', path: '#' },
    { label: 'Terms of Service', path: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 group mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                {APP_NAME}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mb-5">
              {APP_TAGLINE} — AI-powered construction marketplace connecting you with verified builders for smarter, faster projects.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: <MessageSquare className="h-4 w-4" />, label: 'Social' },
                { icon: <Share2 className="h-4 w-4" />, label: 'Network' },
                { icon: <Globe className="h-4 w-4" />, label: 'Website' },
                { icon: <Mail className="h-4 w-4" />, label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-accent hover:border-accent transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-foreground mb-3">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            Made with <Heart className="h-3 w-3 text-destructive fill-destructive" /> in San Francisco
          </p>
        </div>
      </div>
    </footer>
  );
}
