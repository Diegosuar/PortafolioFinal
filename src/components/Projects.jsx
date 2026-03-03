import { motion } from 'framer-motion'
import { HiCode, HiDatabase, HiCloud, HiDeviceMobile, HiChartBar, HiLightningBolt, HiServer, HiGlobe, HiExternalLink, HiCube, HiChip } from 'react-icons/hi'

const categoryIcons = {
    'Embedded': HiChip,
    'IoT': HiCube,
    'Cloud': HiCloud,
    'Analytics': HiChartBar,
    'Big Data': HiDatabase,
    'Machine Learning': HiLightningBolt,
    'Full-Stack': HiCode,
    'Software Architecture': HiServer,
}

const projects = [
    // 2025-2
    {
        title: 'Modelo Predictivo de Delitos en EE.UU.',
        description: 'Modelo de Machine Learning para predecir delitos usando aprendizaje supervisado y no supervisado, con dashboards interactivos en Grafana y Dash.',
        tech: ['Python', 'Grafana', 'Dash', 'Scikit-learn'],
        category: 'Machine Learning',
        period: '2025-2',
        github: 'https://github.com/Diegosuar',
    },
    {
        title: 'Capstone Design — Idea de Negocio',
        description: 'Desarrollo de idea de negocio con estudio de mercado, modelo de negocio completo y prototipo funcional de software en la nube con IA integrada.',
        tech: ['React', 'Ollama', 'Cloud', 'Business Model'],
        category: 'Full-Stack',
        period: '2025-2',
        github: 'https://github.com/Diegosuar',
    },
    // 2025-1
    {
        title: 'Casa Inteligente Domótica',
        description: 'Sistema IoT de domótica con sensores, actuadores y datos en la nube. Control remoto mediante app móvil desarrollada en React Native.',
        tech: ['ESP32', 'React Native', 'Firebase', 'IoT'],
        category: 'IoT',
        period: '2025-1',
        github: 'https://github.com/Diegosuar',
    },
    {
        title: 'Carro a Control Remoto con Giroscopio',
        description: 'Vehículo controlado de forma remota mediante giroscopio, programado con ESP32 en lenguaje Arduino con comunicación inalámbrica.',
        tech: ['ESP32', 'Arduino', 'Giroscopio', 'IoT'],
        category: 'IoT',
        period: '2025-1',
        github: 'https://github.com/Diegosuar',
    },
    {
        title: 'Infraestructura de TI en la Nube',
        description: 'Diseño e implementación de infraestructura cloud empresarial, incluyendo redes, servidores virtuales, almacenamiento y políticas de seguridad.',
        tech: ['AWS', 'GCP', 'Networking', 'Seguridad'],
        category: 'Cloud',
        period: '2025-1',
        github: 'https://github.com/Diegosuar',
    },
    {
        title: 'Analítica de Datos — Base de Datos del Estado',
        description: 'Análisis completo de datos gubernamentales: exploración, limpieza, visualización y modelos de aprendizaje como XGBoost para predicciones.',
        tech: ['Python', 'XGBoost', 'Pandas', 'Matplotlib'],
        category: 'Analytics',
        period: '2025-1',
        github: 'https://github.com/Diegosuar',
    },
    {
        title: 'Pipeline de Big Data con Prefect & AWS',
        description: 'ETL escalable con Prefect y Dask, analítica descriptiva, transformación con Pandas/NumPy, base de datos en AWS y visualización con Grafana.',
        tech: ['Python', 'Prefect', 'Dask', 'AWS', 'Grafana'],
        category: 'Big Data',
        period: '2025-1',
        github: 'https://github.com/Diegosuar',
    },
    // 2024-2
    {
        title: 'Máquina Expendedora con Microcontroladores',
        description: 'Máquina expendedora programada en Assembler con arquitectura de microcontroladores PIC16F877A, control de motores y pantalla LCD.',
        tech: ['Assembler', 'PIC16F877A', 'Microcontroladores'],
        category: 'Embedded',
        period: '2024-2',
        github: 'https://github.com/Diegosuar',
    },
    {
        title: 'Arquitectura de Software en Java',
        description: 'Arquitectura empresarial desplegada en Java con patrones de diseño (MVC, Factory, Observer), frontend en React y despliegue en la nube.',
        tech: ['Java', 'React', 'Patrones de Diseño', 'Cloud'],
        category: 'Software Architecture',
        period: '2024-2',
        github: 'https://github.com/Diegosuar',
    },
]

function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass rounded-3xl overflow-hidden group card-hover"
        >
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-to-r from-primary-light to-accent w-0 group-hover:w-full transition-all duration-500" />

            <div className="p-6 lg:p-8">
                {/* Category & Period */}
                <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-accent tracking-wider uppercase bg-accent/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                        {(() => {
                            const Icon = categoryIcons[project.category] || HiCode
                            return <Icon className="text-sm" />
                        })()}
                        {project.category}
                    </span>
                    {project.period && (
                        <span className="text-[10px] font-bold text-muted tracking-wider bg-white/5 px-2.5 py-1 rounded-full">
                            {project.period}
                        </span>
                    )}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                        <motion.div
                            key={t}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 + 0.2 }}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-muted group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300"
                        >
                            <HiCode className="text-xs" />
                            <span className="text-xs font-medium">{t}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default function Projects() {
    return (
        <section id="projects" className="relative">
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
                        Portafolio
                    </p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                        Mis <span className="gradient-text">Proyectos</span>
                    </h2>
                    <p className="text-muted mt-4 text-lg max-w-2xl mx-auto">
                        Una selección de proyectos que demuestran mi experiencia en datos, desarrollo y soluciones innovadoras.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
