import './footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer className="footer">
            <div className="footer-container">
                
                {/* Grade Principal do Rodapé (3 Colunas) */}
                <div className="footer-grid">
                    
                    {/* Coluna 1: Logo & Branding (Baseado no Header) */}
                    <div className="footer-col footer-brand-col">
                        <a href="#" className="footer-logo-box" aria-label="Halana Maranha Psicologia Clínica Home">
                            <div className="footer-logo-icon">
                                <span className="footer-logo-symbol">Ψ</span>
                            </div>
                            <div className="footer-logo-text">
                                <span className="footer-logo-name">Halana Maranha</span>
                                <span className="footer-logo-subtitle">Psicologia Clínica</span>
                            </div>
                        </a>

                        <p className="footer-brand-desc">
                            Prática clínica fundamentada na escuta ética, no respeito à singularidade e na reflexão crítica sobre a cultura e a existência.
                        </p>

                        <div className="footer-crp-badge">
                            <span className="crp-dot"></span>
                            <span>CRP 06/XXXXXX • Atendimento Presencial & Online</span>
                        </div>
                    </div>

                    {/* Coluna 2: Navegação Rápida */}
                    <div className="footer-col footer-nav-col">
                        <h4 className="footer-col-title">Navegação</h4>
                        <nav className="footer-nav">
                            <a href="#home" className="footer-link">Home</a>
                            <a href="#sobre" className="footer-link">Sobre Mim</a>
                            <a href="#abordagem" className="footer-link">Abordagem & Clínica</a>
                            <a href="#contato" className="footer-link">Contato & Agendamento</a>
                        </nav>
                    </div>

                    {/* Coluna 3: Contato & Redes / Ação */}
                    <div className="footer-col footer-contact-col">
                        <h4 className="footer-col-title">Contato & Atendimento</h4>
                        
                        <div className="footer-contact-items">
                            <div className="footer-contact-item">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <span>contato@halanamaranha.com.br</span>
                            </div>

                            <div className="footer-contact-item">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.057-.978-.277-.1-.479-.15-.68.15-.201.3-.78 1-.956 1.201-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.424-1.496-.897-.799-1.503-1.787-1.68-2.088-.176-.3-.019-.462.131-.611.135-.134.301-.351.451-.527.15-.176.201-.301.302-.502.1-.2.05-.376-.025-.526-.075-.15-.68-1.636-.931-2.241-.244-.588-.493-.508-.68-.518-.176-.009-.376-.01-.576-.01-.2 0-.526.075-.802.376-.276.3-1.053 1.03-1.053 2.513 0 1.483 1.079 2.914 1.23 3.115.15.2 2.122 3.24 5.14 4.545.717.31 1.277.495 1.713.633.72.228 1.376.195 1.895.118.579-.086 1.78-.727 2.03-1.43.25-.703.25-1.304.175-1.43-.075-.125-.276-.201-.577-.351zm-5.467 7.618v-.001c-1.802 0-3.57-.485-5.114-1.402l-.366-.218-3.8.997 1.014-3.704-.239-.38c-1.008-1.603-1.541-3.468-1.54-5.38 0-5.518 4.49-10.008 10.012-10.008 2.673 0 5.185 1.042 7.075 2.934 1.89 1.89 2.931 4.403 2.93 7.077-.001 5.52-4.492 10.012-10.01 10.012z"/>
                                </svg>
                                <span>WhatsApp: (00) 90000-0000</span>
                            </div>
                        </div>

                        <a 
                            href="https://wa.me/556292596851?text=Olá,%20vim%20pelo%20site,%20gostaria%20de%20marcar%20uma%20consulta!" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="footer-cta-btn"
                        >
                            <span>Agendar Consulta</span>
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>

                </div>

                {/* Barra Inferior de Direitos & Voltar ao Topo */}
                <div className="footer-bottom-bar">
                    <p className="copyright-text">
                        &copy; {currentYear} Psi. Halana Maranha. Todos os direitos reservados. <br />
                        &copy; Site produzido por <a href="https://www.planno.online/" target='_blank'>Planno</a> | <a href="https://www.planno.online/termos-de-uso" target='_blank'>Termos de Uso</a> | <a href="https://www.planno.online/politicas-de-privacidade" target='_blank'>Políticas de Privacidade</a>
                    </p>

                    <button 
                        onClick={scrollToTop} 
                        className="back-to-top-btn"
                        aria-label="Voltar ao topo da página"
                    >
                        <span>Voltar ao topo</span>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <line x1="12" y1="19" x2="12" y2="5"></line>
                            <polyline points="5 12 12 5 19 12"></polyline>
                        </svg>
                    </button>
                </div>

            </div>
        </footer>
    )
}

export default Footer