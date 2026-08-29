import './sobre-mim.css'
import FotoSobre from '../../assets/foto-home.jpg'

function SobreMim() {
    return (
        <section className="sobre-section" id="sobre">
            {/* Brilhos decorativos de iluminação ambiente */}
            <div className="sobre-ambient-glow-1" aria-hidden="true"></div>
            <div className="sobre-ambient-glow-2" aria-hidden="true"></div>

            <div className="sobre-container">
                
                {/* Cabeçalho da Seção */}
                <div className="sobre-header">
                    <div className="sobre-eyebrow">
                        <span className="eyebrow-dot"></span>
                        <span>Sobre Halana Maranha</span>
                    </div>

                    <h2 className="sobre-title">
                        Uma clínica guiada pela <span className="title-highlight">escuta singular</span> e pela cultura
                    </h2>

                    <p className="sobre-subtitle">
                        Compreender quem você é exige dar voz à sua história sem fórmulas prontas ou julgamentos.
                    </p>
                </div>

                {/* Grid Criativo Bento Box em Fundo Escuro */}
                <div className="sobre-bento-grid">
                    
                    {/* Bento 1: Card de Apresentação & Foto */}
                    <div className="bento-card bento-profile-card">
                        <div className="profile-img-container">
                            <div className="profile-img-glow"></div>
                            <img src={FotoSobre} alt="Psi. Halana Maranha - Psicóloga Clínica" className="profile-img" />
                            <div className="profile-tag">
                                <span>Psicóloga Clínica</span>
                                <strong>CRP 06/XXXXXX</strong>
                            </div>
                        </div>

                        <div className="profile-text-content">
                            <h3 className="profile-heading">Trajetória & Filosofia</h3>
                            <p className="profile-bio">
                                Acredito que a psicologia clínica vai além de aliviar sintomas: é um processo profundo de reconexão com a própria verdade. Minha atuação une a fundamentação teórica da psicanálise com o pensamento crítico sobre os dilemas da vida contemporânea.
                            </p>
                        </div>
                    </div>

                    {/* Bento 2: Citação em Destaque */}
                    <div className="bento-card bento-quote-card">
                        <div className="quote-mark">“</div>
                        <blockquote className="quote-phrase">
                            O sofrimento não deve ser silenciado; ele pede para ser escutado e ressignificado.
                        </blockquote>
                        <cite className="quote-author">— Psi. Halana Maranha</cite>
                    </div>

                    {/* Bento 3: Pilares da Prática Clínica */}
                    <div className="bento-card bento-pillars-card">
                        <h3 className="bento-section-title">
                            <svg className="bento-title-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                            <span>Princípios da Minha Prática</span>
                        </h3>

                        <div className="pillars-grid">
                            <div className="pillar-chip">
                                <div className="chip-icon">🌿</div>
                                <div className="chip-info">
                                    <strong>Escuta Ética & Acolhedora</strong>
                                    <span>Um espaço confidencial, livre de julgamentos morais.</span>
                                </div>
                            </div>

                            <div className="pillar-chip">
                                <div className="chip-icon">🧠</div>
                                <div className="chip-info">
                                    <strong>Pensamento Crítico</strong>
                                    <span>Compreensão do indivíduo inserido no seu contexto cultural.</span>
                                </div>
                            </div>

                            <div className="pillar-chip">
                                <div className="chip-icon">✨</div>
                                <div className="chip-info">
                                    <strong>Singularidade do Sujeito</strong>
                                    <span>Cada processo é único e respeita o seu próprio tempo.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bento 4: Passos da Jornada Terapêutica */}
                    <div className="bento-card bento-steps-card">
                        <h3 className="bento-section-title">
                            <svg className="bento-title-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                            </svg>
                            <span>Como Funciona o Processo</span>
                        </h3>

                        <div className="steps-timeline">
                            <div className="step-item">
                                <span className="step-number">01</span>
                                <div className="step-content">
                                    <strong>Primeira Acolhida</strong>
                                    <span>Compreensão das suas demandas iniciais e alinhamento do espaço de escuta.</span>
                                </div>
                            </div>

                            <div className="step-item">
                                <span className="step-number">02</span>
                                <div className="step-content">
                                    <strong>Investigação & Sentido</strong>
                                    <span>Aprofundamento nas questões emocionais, padrões e história de vida.</span>
                                </div>
                            </div>

                            <div className="step-item">
                                <span className="step-number">03</span>
                                <div className="step-content">
                                    <strong>Autonomia & Transformação</strong>
                                    <span>Construção de novos caminhos e fortalecimento da saúde mental.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bento 5: Card de Ação & Convite ao Diálogo */}
                    <div className="bento-card bento-cta-card">
                        <div className="cta-card-content">
                            <span className="cta-mini-tag">Atendimento Online & Presencial</span>
                            <h4>Pronto para dar o primeiro passo?</h4>
                            <p>Estou à disposição para tirar dúvidas e agendar nossa conversa inicial.</p>
                        </div>
                        
                        <a href="#agendar" className="sobre-cta-button">
                            <span>Agendar Sessão</span>
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </a>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default SobreMim