import './home.css'
import FotoPrincipal from '../../assets/foto-home.jpg'

function Home() {
    return (
        <section className="hero-section" id='home'>
            <div className="hero-container">
                {/* Lado Esquerdo: Conteúdo Textual & Ações */}
                <div className="text-box">
                    <div className="eyebrow-badge">
                        <span className="badge-dot"></span>
                        <span>Psicologia Clínica Fenomenológica</span>
                    </div>

                    <h1 className="main-title">
                        Psicologia Clínica com <span className="title-highlight">Cultura</span> e Pensamento Crítico
                    </h1>

                    <p className="main-subtitle">
                        Um espaço seguro e acolhedor dedicado à escuta ética, ao autoconhecimento e à transformação da sua saúde mental através de um olhar singular e humanizado da Psicologia Social e Fenomenológica Existencial.
                    </p>

                    <div className="hero-actions">
                        <a href="#agendar" className="hero-btn-primary">
                            <span>Agendar Primeira Consulta</span>
                            <svg className="btn-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                        
                        <a href="#abordagem" className="hero-btn-secondary">
                            <span>Conhecer Abordagem</span>
                        </a>
                    </div>

                    {/* Destaques / Selos de Confiança */}
                    <div className="hero-features">
                        <div className="feature-item">
                            <svg className="feature-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span>Sessões de até 1 hora</span>
                        </div>

                        <div className="feature-item">
                            <svg className="feature-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                            <span>Presencial & Online</span>
                        </div>

                        <div className="feature-item">
                            <svg className="feature-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                            <span>Sigilo & Ética</span>
                        </div>
                    </div>
                </div>

                {/* Lado Direito: Imagem Principal com Elementos Decorativos */}
                <div className="img-box">
                    <div className="img-wrapper">
                        {/* Brilho e Moldura de Fundo */}
                        <div className="img-glow-bg"></div>
                        <div className="img-frame-accent"></div>

                        {/* Imagem Principal */}
                        <div className="img-crop">
                            <img src={FotoPrincipal} alt="Dra. Halana Maranha - Psicóloga Clínica" />
                        </div>

                        {/* Card Flutuante de Destaque */}
                        <div className="floating-badge">
                            <div className="floating-badge-icon">☀️</div>
                            <div className="floating-badge-text">
                                <strong>Escuta Acolhedora</strong>
                                <span>Atendimento Individualizado</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home