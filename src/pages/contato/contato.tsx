import { useState } from 'react'
import './contato.css'

function Contato() {
    const [submitted, setSubmitted] = useState(false)

    // Tipagem atualizada para React 19 sem warning de deprecation
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
    }

    return (
        <section className="contato-section" id="contato">
            <div className="contato-container">
                {/* Cabeçalho */}
                <div className="contato-header">
                    <div className="contato-eyebrow">
                        <span className="eyebrow-dot"></span>
                        <span>Agendamento & Contato</span>
                    </div>

                    <h2 className="contato-title">
                        Vamos dar o <span className="title-highlight-pale">próximo passo</span> juntos?
                    </h2>

                    <p className="contato-subtitle">
                        Entre em contato para agendar sua primeira consulta ou tirar dúvidas sobre o processo terapêutico.
                    </p>
                </div>

                {/* Conteúdo Bipartido */}
                <div className="contato-grid">
                    {/* Lado Esquerdo: Canais Diretos & WhatsApp */}
                    <div className="contato-info-col">
                        {/* Card Principal WhatsApp (Alta Conversão) */}
                        <div className="whatsapp-highlight-card">
                            <div className="whatsapp-card-icon">
                                <i className="fab fa-whatsapp"></i>
                            </div>

                            <div className="whatsapp-card-body">
                                <h3>Atendimento Rápido via WhatsApp</h3>
                                <p>Tire suas dúvidas ou agende sua sessão de forma simples e direta.</p>
                                
                                <a 
                                    href="https://wa.me/556292596851?text=Olá,%20vim%20pelo%20site,%20gostaria%20de%20marcar%20uma%20consulta!"
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="whatsapp-btn"
                                >
                                    <span>Falar com a Psi. Halana no WhatsApp</span>
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Cards de Informações Complementares */}
                        <div className="info-cards-grid">
                            <div className="info-item-card">
                                <div className="info-icon">📍</div>
                                <div className="info-details">
                                    <strong>Modalidades</strong>
                                    <span>Presencial & Online para todo o Brasil e Exterior</span>
                                </div>
                            </div>

                            <div className="info-item-card">
                                <div className="info-icon">✉️</div>
                                <div className="info-details">
                                    <strong>E-mail</strong>
                                    <span>contato@halanamaranha.com.br</span>
                                </div>
                            </div>

                            <div className="info-item-card">
                                <div className="info-icon">🕒</div>
                                <div className="info-details">
                                    <strong>Horários de Atendimento</strong>
                                    <span>Segunda a Sexta • 08h às 20h</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lado Direito: Formulário de Mensagem Direta */}
                    <div className="contato-form-col">
                        <div className="form-card">
                            <h3 className="form-title">Envie uma mensagem</h3>
                            <p className="form-subtitle">Preencha o formulário abaixo e entrarei em contato em breve.</p>

                            {submitted ? (
                                <div className="form-success-message">
                                    <div className="success-icon">✨</div>
                                    <h4>Mensagem enviada com sucesso!</h4>
                                    <p>Obrigado pelo contato. Responderei em até 24 horas úteis.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="contato-form">
                                    <div className="form-group">
                                        <label htmlFor="nome">Nome Completo</label>
                                        <input 
                                            type="text" 
                                            id="nome" 
                                            name="nome" 
                                            placeholder="Seu nome" 
                                            required 
                                        />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="email">E-mail</label>
                                            <input 
                                                type="email" 
                                                id="email" 
                                                name="email" 
                                                placeholder="seu@email.com" 
                                                required 
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="telefone">WhatsApp / Telefone</label>
                                            <input 
                                                type="tel" 
                                                id="telefone" 
                                                name="telefone" 
                                                placeholder="(00) 90000-0000" 
                                                required 
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="modalidade">Interesse de Atendimento</label>
                                        <select id="modalidade" name="modalidade" required>
                                            <option value="online">Atendimento Online</option>
                                            <option value="presencial">Atendimento Presencial</option>
                                            <option value="duvidas">Dúvidas Gerais</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="mensagem">Mensagem</label>
                                        <textarea 
                                            id="mensagem" 
                                            name="mensagem" 
                                            rows={4} 
                                            placeholder="Conte sucintamente o motivo do contato..." 
                                            required 
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="form-submit-btn">
                                        <span>Enviar Mensagem</span>
                                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                        </svg>
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

                {/* Rodapé da Seção / Ética & CRP */}
                <div className="contato-footer-note">
                    <p>Psi. Halana Maranha • Psicóloga Clínica • CRP 06/XXXXXX</p>
                    <p className="ethics-text">Todos os atendimentos seguem rigorosamente o Código de Ética Profissional do Psicólogo.</p>
                </div>
            </div>
        </section>
    )
}

export default Contato