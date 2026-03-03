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

                    <div className="flex flex-col sm:flex-row items-center sm:items-center gap-8 mb-6">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight text-center sm:text-left">
                            Diego
                            <br />
                            <span className="gradient-text">Suárez</span>
                        </h1>
                        <img
                            src="/DiegoFoto.png"
                            alt="Diego Suárez"
                            className="bg-[#0a0e27] w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full object-cover border-4 border-accent/40 shadow-xl shadow-accent/20"
                        />
                    </div>

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
                            href="/cv.pdf"
                            download
                            className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-primary-light to-accent text-white hover:shadow-xl hover:shadow-accent/20 hover:scale-105 transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 18h16" />
                            </svg>
                            Descargar CV
                        </a>
                        <a
                            href="https://www.linkedin.com/in/diego-su%C3%A1rez-obando/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold rounded-full border border-white/20 text-white hover:bg-white/5 hover:border-accent/50 transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
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
