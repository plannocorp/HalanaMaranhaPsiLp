import './abordagem-clinica.css'
import Teorico1 from '../../assets/teoricos/1.png'
import Teorico2 from '../../assets/teoricos/2.png'
import Teorico3 from '../../assets/teoricos/3.png'
import Teorico4 from '../../assets/teoricos/4.png'
import Teorico5 from '../../assets/teoricos/5.png'
import Teorico6 from '../../assets/teoricos/6.png'
import Teorico7 from '../../assets/teoricos/7.png'
import Teorico8 from '../../assets/teoricos/8.png'

function AbordagemClinica() {
    return (
        <section className="abordagem-section" id="abordagem">
            {/* Transição em Onda SVG vindo da seção escura (Sobre Mim) */}
            <div className="wave-container" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="var(--sage-dark)" fillOpacity="1" d="M0,192L34.3,176C68.6,160,137,128,206,133.3C274.3,139,343,181,411,213.3C480,245,549,267,617,266.7C685.7,267,754,245,823,208C891.4,171,960,117,1029,117.3C1097.1,117,1166,171,1234,192C1302.9,213,1371,203,1406,197.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
                </svg>
            </div>

            <div className="abordagem-container">
                
                {/* Cabeçalho da Seção */}
                <div className="abordagem-header">
                    <div className="eyebrow-badge-light">
                        <span className="eyebrow-dot-dark"></span>
                        <span>Fundamentação Clínica</span>
                    </div>

                    <h2 className="abordagem-title">
                        Psicologia <span className="title-highlight-dark">Fenomenológica Existencial</span>
                    </h2>

                    <p className="abordagem-subtitle">
                        Uma abordagem que compreende a pessoa a partir de sua experiência vivida e da maneira singular como ela sente, percebe e se relaciona com o mundo.
                    </p>
                </div>

                {/* Conteúdo Principal Bipartido */}
                <div className="abordagem-grid">
                    
                    {/* Coluna Esquerda: Texto Explicativo & Cards dos Pilares */}
                    <div className="text-content-col">
                        <div className="intro-card">
                            <p className="intro-paragraph">
                                Em vez de reduzir histórias a diagnósticos rígidos ou teorias pré-moldadas, a clínica fenomenológica se debruça sobre a realidade a partir da própria perspectiva de quem a vivencia.
                            </p>
                            <p className="intro-paragraph">
                                No espaço terapêutico, o foco é compreender os significados profundos que você atribui às suas angústias, aos seus desafios e às suas escolhas.
                            </p>
                        </div>

                        {/* Cards dos 3 Pilares da Abordagem */}
                        <div className="pillars-cards-wrapper">
                            <div className="pillar-card">
                                <div className="pillar-card-icon">🤝</div>
                                <div className="pillar-card-content">
                                    <h3>Acolhimento sem julgamentos</h3>
                                    <p>Um ambiente seguro e empático, pautado na escuta atenta e na suspensão de pré-conceitos.</p>
                                </div>
                            </div>

                            <div className="pillar-card">
                                <div className="pillar-card-icon">🌱</div>
                                <div className="pillar-card-content">
                                    <h3>Foco na singularidade</h3>
                                    <p>O reconhecimento de que cada sofrimento, desejo ou conquista possui um sentido único para cada indivíduo.</p>
                                </div>
                            </div>

                            <div className="pillar-card">
                                <div className="pillar-card-icon">💡</div>
                                <div className="pillar-card-content">
                                    <h3>Autonomia e autoconhecimento</h3>
                                    <p>Um processo que ajuda a clarear impasses, compreender repetições e ampliar possibilidades de escolha mais autênticas.</p>
                                </div>
                            </div>
                        </div>

                        <div className="closing-quote-banner">
                            <p>
                                “O importante não é aquilo que fazem de nós, mas o que nós mesmos fazemos daquilo que fizeram de nós.” - Jean-Paul Sartre
                            </p>
                        </div>
                    </div>

                    {/* Coluna Direita: Composição Orbital Completa de 8 Teóricos em Volta do Círculo Grande Central */}
                    <div className="diagram-content-col">
                        <div className="theorists-diagram-wrapper">
                            <h3 className="diagram-title">Minhas Influências Teóricas</h3>
                            
                            <div className="theorists-diagram-container">
                                {/* Grande Círculo Central com o Símbolo do PSI */}
                                <div className="center-psi-circle">
                                    <span className="psi-symbol-large">Ψ</span>
                                </div>

                                {/* 4 Círculos Cardinais (Topo, Direita, Baixo, Esquerda) */}
                                <div className="theorist-circle circle-top" title="Martin Heidegger">
                                    <img src={Teorico1} alt="Teórico 1" />
                                </div>

                                <div className="theorist-circle circle-right" title="Jean-Paul Sartre">
                                    <img src={Teorico2} alt="Teórico 2" />
                                </div>

                                <div className="theorist-circle circle-bottom" title="Nise da Silveira">
                                    <img src={Teorico3} alt="Teórico 3" />
                                </div>

                                <div className="theorist-circle circle-left" title="Carl Rogers">
                                    <img src={Teorico4} alt="Teórico 4" />
                                </div>

                                {/* 4 Círculos Diagonais (Superior Direito, Inferior Direito, Inferior Esquerdo, Superior Esquerdo) */}
                                <div className="theorist-circle circle-top-right" title="Karl Marx">
                                    <img src={Teorico5} alt="Teórico 5" />
                                </div>

                                <div className="theorist-circle circle-bottom-right" title="Michel Foucault">
                                    <img src={Teorico6} alt="Teórico 6" />
                                </div>

                                <div className="theorist-circle circle-bottom-left" title="Silvia Lane">
                                    <img src={Teorico7} alt="Teórico 7" />
                                </div>

                                <div className="theorist-circle circle-top-left" title="Edmund Husserl">
                                    <img src={Teorico8} alt="Teórico 8" />
                                </div>
                            </div>

                            <p className="diagram-footer-note">
                                Fundamentação teórico-conceitual nos grandes nomes da Fenomenologia Existencial.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default AbordagemClinica