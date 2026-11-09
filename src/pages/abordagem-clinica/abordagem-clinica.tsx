import { useState, useEffect, useRef } from 'react'
import './abordagem-clinica.css'
import Teorico1 from '../../assets/teoricos/1.png'
import Teorico2 from '../../assets/teoricos/2.png'
import Teorico3 from '../../assets/teoricos/3.png'
import Teorico4 from '../../assets/teoricos/4.png'
import Teorico5 from '../../assets/teoricos/5.png'
import Teorico6 from '../../assets/teoricos/6.png'
import Teorico7 from '../../assets/teoricos/7.png'
import Teorico8 from '../../assets/teoricos/8.png'

interface TeoricoData {
    name: string
    title: string
    img: string
    summary: string
    className: string
}

const teoricosList: TeoricoData[] = [
    {
        name: 'Martin Heidegger',
        title: 'Ontologia Fenomenológica & Daseinsanálise',
        img: Teorico1,
        className: 'circle-top',
        summary: 'Em Ser e Tempo (1927), Martin Heidegger formulou a analítica do Dasein (ser-aí) como ser-no-mundo (In-der-Welt-sein), rompendo com o paradigma cartesiano da mente isolada e com o determinismo biológico. Embora o projeto heideggeriano fosse estritamente ontológico — a pergunta pelo sentido do Ser —, conceitos fundamentais como cuidado (Sorge), finitude, temporalidade e angústia forneceram os pilares para a Psicologia Fenomenológico-Existencial. A partir desse arcabouço e da cooperação direta nos Seminários de Zollikon, psiquiatras como Ludwig Binswanger e Medard Boss fundaram a Daseinsanálise (Daseinsanalyse). Na clínica, essa virada deslocou o foco de uma "psique intrapsíquica" mecânica para a compreensão fenomenológica do sofrimento humano enquanto estreitamento de possibilidades e formas inautênticas de abertura e relação com o mundo compartilhado.'
    },
    {
        name: 'Maria Vasconcellos',
        title: 'Pensamento Sistêmico & Epistemologia da Complexidade',
        img: Teorico5,
        className: 'circle-top-right',
        summary: 'Pioneira na introdução do pensamento sistêmico e da epistemologia da complexidade no Brasil, Vasconcellos propôs a superação do paradigma cartesiano-newtoniano de ciência na psicologia clínica e comunitária. Apoiando-se na cibernética de segunda ordem (Heinz von Foerster) e na teoria da autopoiese (Maturana e Varela), formulou as bases do pensamento ecossistêmico. Sua contribuição central consiste em reposicionar o terapeuta de um observador externo e neutro para um coparticipante ativo do sistema observado. A prática psicológica abandona assim a causalidade linear (causa-efeito patológico) em favor da circularidade relacional, da autorreferência e da cocriação de realidades conversacionais.'
    },
    {
        name: 'Jean-Paul Sartre',
        title: 'Existencialismo & Psicanálise Existencial',
        img: Teorico2,
        className: 'circle-right',
        summary: 'Em O Ser e o Nada (1943), Sartre estruturou a ontologia fenomenológica a partir da primazia da existência sobre a essência, definindo o humano como para-si (pour-soi) — um nada de ser determinado, condenado à liberdade e confrontado com o em-si (en-soi). Para a psicologia, formulou o projeto da Psicanálise Existencial, que rejeita o inconsciente substantivado freudiano em favor da consciência em contínua escolha de si. A clínica existencialista sartreana desconstrói a má-fé (mauvaise foi) — mecanismo pelo qual o sujeito se aliena sob pretextos deterministas — e reposiciona o sofrimento psíquico não como patologia mecanicista, mas como crise ética de responsabilização diante da própria liberdade e do projeto fundamental de ser.'
    },
    {
        name: 'Michel Foucault',
        title: 'Genealogia do Poder & Arqueologia do Saber',
        img: Teorico6,
        className: 'circle-bottom-right',
        summary: 'Foucault desmontou a pretensa neutralidade epistêmica das ciências humanas por meio da arqueologia do saber e da genealogia do poder. Para a filosofia e a psicologia crítica, obras como História da Loucura (1961) e Vigiar e Punir (1975) demonstraram que noções como "normalidade", "desvio" e "psiquismo" não são essências universais descobertas pela ciência, mas construções históricas operadas por dispositivos disciplinares e biopolíticos. Sua obra revelou como a psicologia e a psiquiatria funcionam historicamente como instâncias de governamentalidade, vigilância e normalização dos corpos, fornecendo à saúde mental coletiva o instrumental teórico para a desinstitucionalização e a crítica às instituições de sequestro.'
    },
    {
        name: 'Nise da Silveira',
        title: 'Psiquiatria Humanista & Imagens do Inconsciente',
        img: Teorico3,
        className: 'circle-bottom',
        summary: 'Discípula direta de C. G. Jung, Nise operou uma revolução epistemológica e ética na psiquiatria brasileira ao rejeitar tratamentos violentos (eletrochoques, lobotomias) em favor da expressão plástica e do afeto. Filosoficamente ancorada no humanismo radical e na recusa à reificação da loucura, fundou o Museu de Imagens do Inconsciente (1952) e a Casa das Palmeiras. Sua contribuição psicológica demonstrou que o delírio esquizofrênico não é mero déficit cognitivo, mas linguagem simbólica estruturada segundo arquétipos do inconsciente coletivo. Ao introduzir a mediação expressiva e a coterapia com animais (a quem chamava de coterapeutas), redefiniu a clínica psiquiátrica como espaço de acolhimento e escuta poético-arquetípica.'
    },
    {
        name: 'Silvia Lane',
        title: 'Psicologia Social Sócio-Histórica',
        img: Teorico7,
        className: 'circle-bottom-left',
        summary: 'Artífice da Psicologia Social Sócio-Histórica no Brasil e figura central da Associação Brasileira de Psicologia Social (ABRAPSO), Lane rompeu com o modelo hegemônico norte-americano positivista e a-histórico. Alicerçada no materialismo histórico-dialético e na psicologia histórico-cultural soviética (Vygotsky, Politzer), formulou a tese de que a subjetividade humana não é um dado biológico inato ou abstrato, mas um produto dialético das relações sociais, da linguagem e do trabalho concreto. Sua importância reside em politizar a psicologia, transformando a disciplina de instrumento de adaptação da ordem vigente em práxis emancipatória orientada à conscientização e à transformação das condições materiais de existência.'
    },
    {
        name: 'Carl Rogers',
        title: 'Abordagem Centrada na Pessoa (ACP)',
        img: Teorico4,
        className: 'circle-left',
        summary: 'Fundador da Abordagem Centrada na Pessoa (ACP), Rogers promoveu uma revolução de bases fenomenológico-humanistas na psicoterapia ao deslocar a autoridade do analista-especialista para a experiência do próprio sujeito, denominado "cliente". Epistemologicamente, sustentou a existência de uma tendência atualizante — impulso intrínseco de todo organismo em direção à autorrealização e congruência. Ao postular que as condições necessárias e suficientes para a mudança terapêutica residem nas atitudes do facilitador (congruência ou autenticidade, consideração positiva incondicional e compreensão empática), reformulou não apenas a técnica clínica, mas os modelos pedagógicos, a resolução de conflitos e as relações interpessoais.'
    },
    {
        name: 'Edmund Husserl',
        title: 'Fundador da Fenomenologia',
        img: Teorico8,
        className: 'circle-top-left',
        summary: 'Pai da fenomenologia contemporânea, Husserl fundou o método de retorno "às coisas mesmas" (zu den Sachen selbst). Na filosofia, superou o psicologismo lógico com as Investigações Lógicas (1900-1901), demonstrando que as leis do pensamento não se reduzem a fatos psíquicos empíricos, e formalizou o princípio da intencionalidade da consciência (toda consciência é consciência de algo) por meio da epoché (suspensão de juízos prévios) e da redução eidética. Para a psicologia, legou a fundamentação epistemológica rigorosa para o estudo dos fenômenos da consciência tal como são vivenciados (Erlebnisse), permitindo que a investigação do psiquismo prescindisse do reducionismo empirista e naturalizante.'
    }
]

function AbordagemClinica() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
    const [hasAnimated, setHasAnimated] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
                }
            },
            { threshold: 0.2 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [hasAnimated])

    const handleOpen = (index: number) => {
        setSelectedIndex(index)
    }

    const handleClose = () => {
        setSelectedIndex(null)
    }

    const handlePrev = () => {
        if (selectedIndex === null) return
        setSelectedIndex((selectedIndex - 1 + teoricosList.length) % teoricosList.length)
    }

    const handleNext = () => {
        if (selectedIndex === null) return
        setSelectedIndex((selectedIndex + 1) % teoricosList.length)
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return
            if (e.key === 'Escape') handleClose()
            if (e.key === 'ArrowLeft') handlePrev()
            if (e.key === 'ArrowRight') handleNext()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedIndex])

    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [selectedIndex])

    const currentTeorico = selectedIndex !== null ? teoricosList[selectedIndex] : null

    return (
        <section className={`abordagem-section ${hasAnimated ? 'section-active' : ''}`} id="abordagem" ref={sectionRef}>
            <div className="wave-container" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="var(--sage-dark)" fillOpacity="1" d="M0,192L34.3,176C68.6,160,137,128,206,133.3C274.3,139,343,181,411,213.3C480,245,549,267,617,266.7C685.7,267,754,245,823,208C891.4,171,960,117,1029,117.3C1097.1,117,1166,171,1234,192C1302.9,213,1371,203,1406,197.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
                </svg>
            </div>

            <div className="abordagem-container">
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

                <div className="abordagem-grid">
                    <div className="text-content-col">
                        <div className="intro-card">
                            <p className="intro-paragraph">
                                Em vez de reduzir histórias a diagnósticos rígidos ou teorias pré-moldadas, a clínica fenomenológica se debruça sobre a realidade a partir da própria perspectiva de quem a vivencia.
                            </p>
                            <p className="intro-paragraph">
                                No espaço terapêutico, o foco é compreender os significados profundos que você atribui às suas angústias, aos seus desafios e às suas escolhas.
                            </p>
                        </div>

                        <div className="pillars-cards-wrapper">
                            <div className="pillar-card pillar-card-1">
                                <div className="pillar-card-icon">🤝</div>
                                <div className="pillar-card-content">
                                    <h3>Acolhimento sem julgamentos</h3>
                                    <p>Um ambiente seguro e empático, pautado na escuta atenta e na suspensão de pré-conceitos.</p>
                                </div>
                            </div>

                            <div className="pillar-card pillar-card-2">
                                <div className="pillar-card-icon">🌱</div>
                                <div className="pillar-card-content">
                                    <h3>Foco na singularidade</h3>
                                    <p>O reconhecimento de que cada sofrimento, desejo ou conquista possui um sentido único para cada indivíduo.</p>
                                </div>
                            </div>

                            <div className="pillar-card pillar-card-3">
                                <div className="pillar-card-icon">💡</div>
                                <div className="pillar-card-content">
                                    <h3>Autonomia e autoconhecimento</h3>
                                    <p>Um processo que ajuda a clarear impasses, compreender repetições e ampliar possibilidades de escolha mais autênticas.</p>
                                </div>
                            </div>
                        </div>

                        <div className="closing-quote-banner">
                            <p className="typewriter-quote">
                                “O importante não é aquilo que fazem de nós, mas o que nós mesmos fazemos daquilo que fizeram de nós.” - Jean-Paul Sartre
                            </p>
                        </div>
                    </div>

                    <div className="diagram-content-col">
                        <div className="theorists-diagram-wrapper">
                            <div className="diagram-header-box">
                                <h3 className="diagram-title">Minhas Influências Teóricas</h3>
                                <div className="diagram-interactive-badge">
                                    <span className="badge-pulse-indicator"></span>
                                    <span>Clique na foto de um autor para abrir suas contribuições</span>
                                </div>
                            </div>
                            
                            <div className="theorists-diagram-container">
                                <div className="center-psi-circle">
                                    <span className="psi-symbol-large">Ψ</span>
                                </div>

                                {teoricosList.map((teorico, index) => (
                                    <button
                                        type="button"
                                        key={teorico.name}
                                        className={`theorist-circle ${teorico.className}`}
                                        title={`Ver resumo de ${teorico.name}`}
                                        onClick={() => handleOpen(index)}
                                        aria-label={`Ver resumo de ${teorico.name}`}
                                    >
                                        <img src={teorico.img} alt={teorico.name} />
                                    </button>
                                ))}
                            </div>

                            <p className="diagram-footer-note">
                                Fundamentação teórico-conceitual nos grandes nomes da Fenomenologia Existencial.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {currentTeorico && (
                <div className="teorico-modal-overlay" onClick={handleClose} role="dialog" aria-modal="true">
                    <div className="teorico-modal-hub" onClick={(e) => e.stopPropagation()}>
                        <button type="button" className="modal-close-btn" onClick={handleClose} aria-label="Fechar resumo">
                            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <button type="button" className="modal-nav-arrow arrow-left" onClick={handlePrev} aria-label="Teórico anterior">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>

                        <button type="button" className="modal-nav-arrow arrow-right" onClick={handleNext} aria-label="Próximo teórico">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>

                        <div className="modal-content-grid" key={currentTeorico.name}>
                            <div className="modal-image-col">
                                <div className="modal-image-frame">
                                    <img src={currentTeorico.img} alt={currentTeorico.name} />
                                </div>
                                <span className="modal-theorist-index">
                                    {(selectedIndex! + 1).toString().padStart(2, '0')} / {teoricosList.length.toString().padStart(2, '0')}
                                </span>
                            </div>

                            <div className="modal-text-col">
                                <div className="modal-header-info">
                                    <span className="modal-badge">Fundamentação Teórica</span>
                                    <h3 className="modal-theorist-name">{currentTeorico.name}</h3>
                                    <span className="modal-theorist-title">{currentTeorico.title}</span>
                                </div>

                                <div className="modal-summary-wrapper">
                                    <p className="modal-summary-text">{currentTeorico.summary}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default AbordagemClinica