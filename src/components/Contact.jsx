import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMail, HiUser, HiChat, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState('idle') // idle | sending | success | error

    const validate = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = 'El nombre es requerido'
        if (!formData.email.trim()) {
            newErrors.email = 'El email es requerido'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Email inválido'
        }
        if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido'
        return newErrors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newErrors = validate()
        setErrors(newErrors)

        if (Object.keys(newErrors).length > 0) return

        setStatus('sending')

        // Enviar a Firebase Realtime Database
        try {
            const response = await fetch(
                'https://citas-65e32-default-rtdb.firebaseio.com/contacto.json',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        ...formData,
                        timestamp: new Date().toISOString(),
                    }),
                }
            )
            if (!response.ok) throw new Error('Error al enviar')
            setStatus('success')
            setFormData({ name: '', email: '', message: '' })
            setTimeout(() => setStatus('idle'), 4000)
        } catch {
            setStatus('error')
            setTimeout(() => setStatus('idle'), 4000)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }))
        }
    }

    return (
        <section id="contact" className="relative">
            <div className="max-w-3xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
                        Hablemos
                    </p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                        Envíame un <span className="gradient-text">Mensaje</span>
                    </h2>
                    <p className="text-muted mt-4 text-lg max-w-xl mx-auto">
                        ¿Tienes un proyecto en mente o simplemente quieres decir hola? Me encantaría escucharte.
                    </p>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="glass rounded-3xl p-8 lg:p-12 space-y-6"
                >
                    {/* Name */}
                    <div>
                        <label htmlFor="contact-name" className="flex items-center gap-2 text-sm font-medium mb-2">
                            <HiUser className="text-accent" />
                            Nombre
                        </label>
                        <input
                            id="contact-name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Tu nombre completo"
                            className={`w-full px-5 py-3.5 rounded-xl bg-white/5 border text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300 ${errors.name ? 'border-red-400/50' : 'border-white/10 focus:border-accent/30'
                                }`}
                        />
                        <AnimatePresence>
                            {errors.name && (
                                <motion.p
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="text-red-400 text-xs mt-1.5 flex items-center gap-1"
                                >
                                    <HiExclamationCircle /> {errors.name}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="contact-email" className="flex items-center gap-2 text-sm font-medium mb-2">
                            <HiMail className="text-accent" />
                            Email
                        </label>
                        <input
                            id="contact-email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="tu@email.com"
                            className={`w-full px-5 py-3.5 rounded-xl bg-white/5 border text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300 ${errors.email ? 'border-red-400/50' : 'border-white/10 focus:border-accent/30'
                                }`}
                        />
                        <AnimatePresence>
                            {errors.email && (
                                <motion.p
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="text-red-400 text-xs mt-1.5 flex items-center gap-1"
                                >
                                    <HiExclamationCircle /> {errors.email}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="contact-message" className="flex items-center gap-2 text-sm font-medium mb-2">
                            <HiChat className="text-accent" />
                            Mensaje
                        </label>
                        <textarea
                            id="contact-message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Cuéntame sobre tu proyecto..."
                            className={`w-full px-5 py-3.5 rounded-xl bg-white/5 border text-white placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-300 resize-none ${errors.message ? 'border-red-400/50' : 'border-white/10 focus:border-accent/30'
                                }`}
                        />
                        <AnimatePresence>
                            {errors.message && (
                                <motion.p
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="text-red-400 text-xs mt-1.5 flex items-center gap-1"
                                >
                                    <HiExclamationCircle /> {errors.message}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-light to-accent text-white font-semibold text-base hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <AnimatePresence mode="wait">
                            {status === 'idle' && (
                                <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                    Enviar Mensaje
                                </motion.span>
                            )}
                            {status === 'sending' && (
                                <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Enviando...
                                </motion.span>
                            )}
                            {status === 'success' && (
                                <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-green-300">
                                    <HiCheckCircle className="text-xl" />
                                    ¡Mensaje enviado!
                                </motion.span>
                            )}
                            {status === 'error' && (
                                <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-300">
                                    Error al enviar. Inténtalo de nuevo.
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </button>
                </motion.form>
            </div>
        </section>
    )
}
