import { HiMail, HiHeart } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const socialLinks = [
    { name: 'GitHub', icon: FaGithub, href: 'https://github.com/Diegosuar' },
    { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/diego-su%C3%A1rez-obando/' },
    { name: 'Email', icon: HiMail, href: 'https://mail.google.com/mail/?view=cm&to=diego.suarezob@gmail.com' },
]

export default function Footer() {
    return (
        <footer className="border-t border-white/5 py-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Brand */}
                <div className="flex items-center gap-1 text-sm text-muted">
                    <span>© {new Date().getFullYear()} Diego Suárez. Hecho con pasión</span>
                    <HiHeart className="text-accent text-xs" />
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-accent hover:border-accent/50 transition-all duration-300"
                            aria-label={link.name}
                        >
                            <link.icon className="text-sm" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
