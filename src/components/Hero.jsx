import { Suspense, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import DataNetwork from '../three/DataNetwork'

const roles = [
    'Analítica de Datos',
    'Machine Learning',
    'Gerencia de Proyectos',
    'Desarrollo de Software',
    'Ingeniería de Datos',
]

function FlipWords() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <span className="relative inline-block h-[1.2em] overflow-hidden align-bottom">
            {roles.map((role, i) => (
                <motion.span
                    key={role}
                    className="absolute left-0 text-accent"
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{
                        y: i === index ? '0%' : '-100%',
                        opacity: i === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                    {role}
                </motion.span>
            ))}
        </span>
    )
}

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center overflow-hidden pt-28 pb-12"
        >
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-6">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="z-10"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted text-sm md:text-base font-medium tracking-widest uppercase mb-4"
                    >
                        Ingeniero Informático
                    </motion.p>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight mb-6">
                        Diego
                        <br />
                        <span className="gradient-text">Suárez</span>
                    </h1>

                    <div className="text-xl sm:text-2xl lg:text-3xl font-light text-muted mb-8">
                        Especializado en{' '}
                        <FlipWords />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-muted text-base lg:text-lg max-w-lg mb-10 leading-relaxed"
                    >
                        Construir modelos predictivos, gestionar proyectos y desarrollar soluciones de software robustas. Convierto ideas en soluciones tecnológicas que generan impacto real.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="/cv.txt"
                            download
                            className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-primary-light to-accent text-white hover:shadow-xl hover:shadow-accent/20 hover:scale-105 transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Descargar CV
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold rounded-full border border-white/20 text-white hover:bg-white/5 hover:border-accent/50 transition-all duration-300"
                        >
                            Contáctame
                        </a>
                    </motion.div>
                </motion.div>

                {/* 3D Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]"
                >
                    <Suspense
                        fallback={
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="w-16 h-16 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
                            </div>
                        }
                    >
                        <DataNetwork />
                    </Suspense>
                    {/* Subtle glow behind 3D */}
                    <div className="absolute inset-0 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
                </motion.div>
            </div>
        </section>
    )
}
