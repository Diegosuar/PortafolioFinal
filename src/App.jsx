import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Awards from './components/Awards'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="relative min-h-screen bg-bg-dark text-white overflow-hidden">
            {/* Background ambient glow */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
            </div>

            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Awards />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
