import { useState, useEffect } from 'react'
import './header.css'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    // Listener para alterar background/sombra do header ao rolar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Sistema Dinâmico de Detecção da Seção Ativa (Scroll Spy)
    useEffect(() => {
        const sectionIds = ['home', 'sobre', 'abordagem', 'contato']

        const handleSectionScroll = () => {
            const scrollPosition = window.scrollY + 180 // Compensação da altura do header fixo

            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const section = document.getElementById(sectionIds[i])
                if (section) {
                    const sectionTop = section.offsetTop
                    if (scrollPosition >= sectionTop) {
                        setActiveSection(sectionIds[i])
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleSectionScroll)
        handleSectionScroll() // Executa na montagem inicial

        return () => window.removeEventListener('scroll', handleSectionScroll)
    }, [])

    // Bloqueia o scroll do body quando a gaveta mobile estiver aberta
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="header-container">
                {/* Logo Brand Box */}
                <a 
                    href="#home" 
                    className="logo-box" 
                    onClick={closeMenu} 
                    aria-label="Halana Maranha Psicologia Clínica Home"
                >
                    <div className="logo-icon-wrapper">
                        <span className="logo-symbol">Ψ</span>
                    </div>
                    <div className="logo-text-wrapper">
                        <span className="logo-name">Halana Maranha</span>
                        <span className="logo-subtitle">Psicologia Clínica</span>
                    </div>
                </a>

                {/* Desktop Navigation Links com Detecção Dinâmica de Seção */}
                <nav className="desktop-nav" aria-label="Navegação principal">
                    <a 
                        href="#home" 
                        className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                    >
                        Home
                    </a>
                    <a 
                        href="#sobre" 
                        className={`nav-link ${activeSection === 'sobre' ? 'active' : ''}`}
                    >
                        Sobre Mim
                    </a>
                    <a 
                        href="#abordagem" 
                        className={`nav-link ${activeSection === 'abordagem' ? 'active' : ''}`}
                    >
                        Abordagem & Clínica
                    </a>
                    <a 
                        href="#contato" 
                        className={`nav-link ${activeSection === 'contato' ? 'active' : ''}`}
                    >
                        Contato
                    </a>
                </nav>

                {/* CTA Action & Mobile Menu Toggle */}
                <div className="header-actions">
                    <a href="#contato" className="cta-button">
                        <span>Agendar Consulta</span>
                        <svg className="cta-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                            <polyline points="9 16 11 18 15 14"></polyline>
                        </svg>
                    </a>

                    {/* Mobile Hamburger Button */}
                    <button 
                        className={`mobile-toggle ${isMenuOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu-drawer"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Backdrop */}
            <div 
                className={`mobile-backdrop ${isMenuOpen ? 'visible' : ''}`}
                onClick={closeMenu}
                aria-hidden="true"
            />

            {/* Retractable Mobile Menu Drawer */}
            <aside 
                className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`} 
                id="mobile-menu-drawer"
                aria-label="Menu móvel"
            >
                <div className="mobile-drawer-header">
                    <div className="logo-box-mobile">
                        <span className="logo-symbol-mobile">Ψ</span>
                        <span className="logo-name-mobile">Halana Maranha</span>
                    </div>
                </div>

                <nav className="mobile-nav">
                    <a 
                        href="#home" 
                        className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`} 
                        onClick={closeMenu}
                    >
                        <svg className="nav-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        <span>Home</span>
                    </a>

                    <a 
                        href="#sobre" 
                        className={`mobile-nav-link ${activeSection === 'sobre' ? 'active' : ''}`} 
                        onClick={closeMenu}
                    >
                        <svg className="nav-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span>Sobre Mim</span>
                    </a>

                    <a 
                        href="#abordagem" 
                        className={`mobile-nav-link ${activeSection === 'abordagem' ? 'active' : ''}`} 
                        onClick={closeMenu}
                    >
                        <svg className="nav-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 2a5 5 0 0 1 5 5c0 1.2-.4 2.3-1.1 3.2C17.1 11.1 18 12.5 18 14a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5c0-1.5.9-2.9 2.1-3.8C5.4 9.3 5 8.2 5 7a5 5 0 0 1 7-5z"></path>
                            <line x1="12" y1="2" x2="12" y2="19"></line>
                        </svg>
                        <span>Abordagem & Clínica</span>
                    </a>

                    <a 
                        href="#contato" 
                        className={`mobile-nav-link ${activeSection === 'contato' ? 'active' : ''}`} 
                        onClick={closeMenu}
                    >
                        <svg className="nav-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span>Contato</span>
                    </a>
                </nav>

                <div className="mobile-drawer-footer">
                    <a href="#contato" className="mobile-cta-button" onClick={closeMenu}>
                        <svg className="mobile-cta-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                            <path d="M17.472 14.382c-.301-.15-1.78-.878-2.057-.978-.277-.1-.479-.15-.68.15-.201.3-.78 1-.956 1.201-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.424-1.496-.897-.799-1.503-1.787-1.68-2.088-.176-.3-.019-.462.131-.611.135-.134.301-.351.451-.527.15-.176.201-.301.302-.502.1-.2.05-.376-.025-.526-.075-.15-.68-1.636-.931-2.241-.244-.588-.493-.508-.68-.518-.176-.009-.376-.01-.576-.01-.2 0-.526.075-.802.376-.276.3-1.053 1.03-1.053 2.513 0 1.483 1.079 2.914 1.23 3.115.15.2 2.122 3.24 5.14 4.545.717.31 1.277.495 1.713.633.72.228 1.376.195 1.895.118.579-.086 1.78-.727 2.03-1.43.25-.703.25-1.304.175-1.43-.075-.125-.276-.201-.577-.351zm-5.467 7.618v-.001c-1.802 0-3.57-.485-5.114-1.402l-.366-.218-3.8.997 1.014-3.704-.239-.38c-1.008-1.603-1.541-3.468-1.54-5.38 0-5.518 4.49-10.008 10.012-10.008 2.673 0 5.185 1.042 7.075 2.934 1.89 1.89 2.931 4.403 2.93 7.077-.001 5.52-4.492 10.012-10.01 10.012z"/>
                        </svg>
                        <span>Agendar Consulta</span>
                    </a>
                </div>
            </aside>
        </header>
    )
}

export default Header