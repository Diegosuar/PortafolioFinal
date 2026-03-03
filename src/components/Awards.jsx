import { motion } from 'framer-motion'
import { HiStar, HiAcademicCap, HiExternalLink } from 'react-icons/hi'

const awards = [
    {
        icon: HiStar,
        title: '1er Lugar — Sabanahack',
        subtitle: 'Hackathon Universidad de La Sabana',
        description: 'Ganador con el reto Unisabana Dining, desarrollando una solución orientada a mejorar la experiencia de los usuarios en el campus universitario.',
        color: '#fbbf24',
        year: '2025',
        images: ['/SabanaHack.jpeg', '/cheque-sabanahack.jpg'],
    },
    {
        icon: HiAcademicCap,
        title: 'Mención de Honor — Docente Practicante',
        subtitle: 'Gobierno Municipal de Zipaquirá',
        description: 'Reconocimiento por labor como docente practicante en la estrategia educativa "Esfuérzate y Refuerza", contribuyendo al fortalecimiento académico y a la permanencia escolar.',
        color: '#8b5cf6',
        year: '2025',
        link: '/diploma-mencion.pdf',
        linkLabel: 'Ver diploma',
    },
]

export default function Awards() {
    return (
        <section id="awards" className="relative">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
                        Logros
                    </p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                        Reconocimientos y <span className="gradient-text">Premios</span>
                    </h2>
                </motion.div>

                {/* Awards Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {awards.map((award, i) => (
                        <motion.div
                            key={award.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="glass rounded-3xl card-hover group relative overflow-hidden"
                        >
                            {/* Images */}
                            {award.images && (
                                <div className="grid grid-cols-2 gap-2 w-full overflow-hidden bg-black/20 p-2 items-center">
                                    {award.images.map((img, idx) => (
                                        <img
                                            key={idx}
                                            src={img}
                                            alt={`${award.title} ${idx + 1}`}
                                            className="w-full h-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ))}
                                </div>
                            )}
                            {award.image && !award.images && (
                                <div className="w-full h-48 overflow-hidden">
                                    <img
                                        src={award.image}
                                        alt={award.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            )}

                            <div className="p-8">
                                {/* Accent glow */}
                                <div
                                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                                    style={{ backgroundColor: award.color }}
                                />

                                {/* Year badge */}
                                <div className="flex items-center justify-between mb-6">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                        style={{ backgroundColor: `${award.color}15` }}
                                    >
                                        <award.icon className="text-3xl" style={{ color: award.color }} />
                                    </div>
                                    <span
                                        className="text-xs font-bold tracking-wider px-3 py-1 rounded-full"
                                        style={{ backgroundColor: `${award.color}15`, color: award.color }}
                                    >
                                        {award.year}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors duration-300">
                                    {award.title}
                                </h3>
                                <p className="text-accent text-sm font-medium mb-4">
                                    {award.subtitle}
                                </p>
                                <p className="text-muted text-sm leading-relaxed">
                                    {award.description}
                                </p>

                                {/* Link button */}
                                {award.link && (
                                    <a
                                        href={award.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 text-sm font-semibold rounded-full border border-white/10 text-muted hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
                                    >
                                        <HiExternalLink className="text-base" />
                                        {award.linkLabel || 'Ver más'}
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
