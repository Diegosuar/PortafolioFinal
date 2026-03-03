import { motion } from 'framer-motion'
import { HiDatabase, HiCode, HiChartBar, HiLightningBolt, HiCube, HiChip, HiServer, HiTerminal, HiCloud } from 'react-icons/hi'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
    }),
}

const skills = [
    { icon: HiCode, name: 'Python', desc: 'Análisis, automatización y ML', color: '#3776ab' },
    { icon: HiChartBar, name: 'Pandas', desc: 'Manipulación y limpieza de datos', color: '#150458' },
    { icon: HiChip, name: 'Machine Learning', desc: 'Modelos predictivos y clustering', color: '#f7931e' },
    { icon: HiDatabase, name: 'SQL / Bases de Datos', desc: 'Consultas complejas y diseño de schemas', color: '#336791' },
    { icon: HiServer, name: 'Pipelines de Datos', desc: 'ETL, flujos automatizados', color: '#017cee' },
    { icon: HiCube, name: 'React / Frontend', desc: 'Interfaces modernas y responsivas', color: '#61dafb' },
    { icon: HiTerminal, name: 'Docker', desc: 'Contenedores y despliegue', color: '#2496ed' },
    { icon: HiLightningBolt, name: 'Git', desc: 'Control de versiones', color: '#f05032' },
    { icon: HiLightningBolt, name: 'n8n', desc: 'Automatización de workflows e integraciones', color: '#ea4b71' },
    { icon: HiCloud, name: 'Cloud (GCP & AWS)', desc: 'Infraestructura y servicios en la nube', color: '#4285f4' },
]

export default function About() {
    return (
        <section id="about" className="relative">
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
                        Sobre Mí
                    </p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                        Quién <span className="gradient-text">Soy</span>
                    </h2>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto lg:auto-rows-[180px]">
                    {/* Large intro card - spans 2 cols, 2 rows */}
                    <motion.div
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        className="glass rounded-3xl p-8 flex flex-col justify-between card-hover col-span-1 md:col-span-2 row-span-3"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                                    <HiCode className="text-2xl text-accent" />
                                </div>
                                <span className="text-accent text-sm font-semibold tracking-wide uppercase">Perfil</span>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                                Ingeniero Informático en formación
                            </h3>
                            <p className="text-muted leading-relaxed text-sm lg:text-base mb-3">
                                Apasionado por crear valor a través de la analítica de datos, la gerencia de proyectos, la automatización con IA y el cloud computing. Mi enfoque combina pensamiento analítico, gestión de proyectos y una mentalidad orientada a resultados, buscando convertir necesidades del negocio en soluciones eficientes y escalables.
                            </p>
                            <p className="text-muted leading-relaxed text-sm lg:text-base mb-3">
                                Actualmente lidero proyectos para clientes de los sectores inmobiliario y HORECA, gestionando el desarrollo de sistemas, automatización de procesos y estrategias de crecimiento digital.
                            </p>
                            <p className="text-muted leading-relaxed text-sm lg:text-base">
                                Me caracterizan el liderazgo, la comunicación efectiva, el pensamiento crítico, la proactividad y el aprendizaje continuo. Disfruto trabajar en equipo, asumir retos y construir soluciones que generen valor para las personas y las organizaciones. Siempre estoy abierto a nuevas oportunidades de colaboración e innovación.
                            </p>
                        </div>
                        <div className="flex items-center gap-6 pt-4">
                            <div>
                                <p className="text-3xl font-bold text-accent">1°</p>
                                <p className="text-muted text-xs">Lugar Sabanahack</p>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div>
                                <p className="text-3xl font-bold text-accent">IEEE</p>
                                <p className="text-muted text-xs">EPICS Instructor</p>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div>
                                <p className="text-3xl font-bold text-accent">7+</p>
                                <p className="text-muted text-xs">Certificaciones</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skill Cards */}
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            custom={i + 1}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-50px' }}
                            className="glass rounded-3xl p-6 flex flex-col justify-between card-hover group cursor-default"
                        >
                            <div className="flex items-center justify-between">
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: `${skill.color}15` }}
                                >
                                    <skill.icon
                                        className="text-2xl transition-colors duration-300"
                                        style={{ color: skill.color }}
                                    />
                                </div>
                                <HiLightningBolt className="text-white/10 group-hover:text-accent/30 transition-colors text-lg" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm mb-1">{skill.name}</h4>
                                <p className="text-muted text-xs leading-relaxed">{skill.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
