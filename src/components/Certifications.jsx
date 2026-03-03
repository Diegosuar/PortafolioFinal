import { motion } from 'framer-motion'
import { HiAcademicCap, HiLightningBolt, HiStar, HiUserGroup, HiChartBar, HiGlobe, HiServer } from 'react-icons/hi'

const certifications = [
    { name: 'Laboratorio de Startups de Triple Impacto', provider: 'Univ. de La Sabana - 2025', icon: HiLightningBolt, color: '#42a5f5', link: '/Diploma Capstone.pdf' },
    { name: 'Core Curriculum Persona & Cultura', provider: 'Univ. de La Sabana - 2025', icon: HiUserGroup, color: '#8b5cf6', link: '/Diploma Core.pdf' },
    { name: 'Liderazgo para la Alta Gerencia', provider: 'Platzi - 2024', icon: HiChartBar, color: '#98ca3f', link: '/diploma-alta-gerencia.pdf' },
    { name: 'Métricas de Negocios', provider: 'Platzi - 2024', icon: HiChartBar, color: '#98ca3f', link: '/diploma-metricas-2min.pdf' },
    { name: 'Técnicas de Influencia y Persuasión', provider: 'Platzi - 2024', icon: HiGlobe, color: '#98ca3f', link: '/diploma-tecnicas-influencia.pdf' },
    { name: 'Networking Essentials', provider: 'Cisco - 2023', icon: HiServer, color: '#049fd9', link: '/Networking Essentials.pdf' },
    { name: 'Crédito y Endeudamiento', provider: 'Platzi - 2024', icon: HiChartBar, color: '#98ca3f', link: '/diploma-credito-endeudamiento.pdf' },
]

function OrbitingItem({ cert, index, total, radius }) {
    const angle = (index / total) * 360

    return (
        <motion.div
            className="absolute"
            style={{
                top: '50%',
                left: '50%',
            }}
            animate={{
                rotate: [angle, angle + 360],
            }}
            transition={{
                duration: 40,
                repeat: Infinity,
                ease: 'linear',
            }}
        >
            <div
                style={{
                    transform: `translateX(${radius}px) translateY(-50%)`,
                }}
            >
                <motion.div
                    animate={{ rotate: [-(angle), -(angle + 360)] }}
                    transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                    className="glass rounded-2xl p-4 flex flex-col items-center gap-2 w-[120px] sm:w-[140px] cursor-pointer group"
                    onClick={() => cert.link && window.open(cert.link, '_blank')}
                    whileHover={{ scale: 1.15, zIndex: 10 }}
                >
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${cert.color}15` }}
                    >
                        <cert.icon className="text-xl" style={{ color: cert.color }} />
                    </div>
                    <div className="text-center">
                        <p className="text-[10px] sm:text-xs font-semibold leading-tight">{cert.name}</p>
                        <p className="text-[9px] sm:text-[10px] text-muted mt-0.5">{cert.provider}</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

function CertCarousel() {
    const doubled = [...certifications, ...certifications]

    return (
        <div className="overflow-hidden w-full">
            <motion.div
                className="flex gap-4"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                    x: {
                        duration: 30,
                        repeat: Infinity,
                        ease: 'linear',
                    },
                }}
            >
                {doubled.map((cert, i) => (
                    <a
                        key={`${cert.name}-${i}`}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass rounded-2xl p-5 flex flex-col items-center gap-3 min-w-[160px] sm:min-w-[180px] cursor-pointer group card-hover flex-shrink-0 no-underline text-white"
                    >
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                            style={{ backgroundColor: `${cert.color}15` }}
                        >
                            <cert.icon className="text-2xl" style={{ color: cert.color }} />
                        </div>
                        <div className="text-center">
                            <p className="text-xs sm:text-sm font-semibold leading-tight">{cert.name}</p>
                            <p className="text-[10px] sm:text-xs text-muted mt-1">{cert.provider}</p>
                        </div>
                    </a>
                ))}
            </motion.div>
        </div>
    )
}

export default function Certifications() {
    const innerCerts = certifications.slice(0, 4)
    const outerCerts = certifications.slice(4)

    return (
        <section id="certifications" className="relative">
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
                        Formación Continua
                    </p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                        Cursos y <span className="gradient-text">Certificaciones</span>
                    </h2>
                    <p className="text-muted mt-4 text-lg max-w-2xl mx-auto">
                        Certificaciones y cursos que respaldan mi conocimiento en gestión de proyectos, análisis de datos, cloud computing, ML y desarrollo.
                    </p>
                </motion.div>

                {/* Orbiting Circles - Desktop */}
                <div className="hidden lg:flex justify-center items-center mb-8">
                    <div className="relative w-[700px] h-[700px]">
                        {/* Center element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <div className="glass rounded-full w-24 h-24 flex items-center justify-center glow-accent">
                                <HiAcademicCap className="text-4xl text-accent" />
                            </div>
                        </div>

                        {/* Orbit rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] border border-white/5 rounded-full" />

                        {/* Inner orbit items */}
                        {innerCerts.map((cert, i) => (
                            <OrbitingItem
                                key={cert.name}
                                cert={cert}
                                index={i}
                                total={innerCerts.length}
                                radius={200}
                            />
                        ))}

                        {/* Outer orbit items */}
                        {outerCerts.map((cert, i) => (
                            <OrbitingItem
                                key={cert.name}
                                cert={cert}
                                index={i}
                                total={outerCerts.length}
                                radius={310}
                            />
                        ))}
                    </div>
                </div>

                {/* Carousel - Mobile & Tablet */}
                <div className="lg:hidden">
                    <CertCarousel />
                </div>
            </div>
        </section>
    )
}
