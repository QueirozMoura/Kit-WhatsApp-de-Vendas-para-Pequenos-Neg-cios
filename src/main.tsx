import { StrictMode, useEffect, useState, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowRight,
  BellRing,
  Check,
  ChevronDown,
  ClipboardList,
  FileText,
  LayoutGrid,
  MessageCircle,
  MessageSquareText,
  MousePointer2,
  PenLine,
  Table2,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Zap,
} from "lucide-react";
import "./styles.css";

export const CHECKOUT_URL = "https://pay.kiwify.com.br/u7UkvHZ";

const problems = [
  {
    icon: MessageCircle,
    title: "Trava na hora de responder",
    text: "Você perde tempo pensando no que dizer para cada cliente.",
  },
  {
    icon: FileText,
    title: "Orçamentos sem retorno",
    text: "O cliente recebe o orçamento e depois a conversa esfria.",
  },
  {
    icon: BellRing,
    title: "Follow-up que fica para depois",
    text: "Na correria do dia, você acaba esquecendo de retomar o contato.",
  },
  {
    icon: PenLine,
    title: "As mesmas mensagens, de novo",
    text: "Você digita explicações e respostas repetidas várias vezes.",
  },
  {
    icon: UsersRound,
    title: "Contatos difíceis de organizar",
    text: "Fica complicado saber quem pediu orçamento e em que etapa está.",
  },
];

const kitItems = [
  {
    icon: MessageSquareText,
    title: "Mensagens prontas",
    text: "Respostas para agilizar o atendimento sem deixar a conversa robótica.",
  },
  {
    icon: ClipboardList,
    title: "Orçamento e follow-up",
    text: "Textos para enviar propostas e retomar conversas com naturalidade.",
  },
  {
    icon: Sparkles,
    title: "Prompts para IA",
    text: "Comandos práticos para adaptar mensagens ao seu negócio.",
  },
  {
    icon: LayoutGrid,
    title: "Planilha de acompanhamento",
    text: "Uma visão simples para organizar clientes e próximos passos.",
  },
  {
    icon: Check,
    title: "Checklist do WhatsApp Business",
    text: "Um roteiro para deixar sua ferramenta mais organizada.",
  },
];

const faqs = [
  {
    q: "Preciso saber usar inteligência artificial?",
    a: "Não. O kit pode ser usado com as mensagens prontas. Os prompts são um recurso extra para quem quiser usar IA no dia a dia.",
  },
  {
    q: "É um curso?",
    a: "Não. É um kit prático de materiais para consultar e aplicar na rotina de atendimento.",
  },
  {
    q: "Como recebo o produto?",
    a: "Após a confirmação da compra, você recebe o acesso ao material digital.",
  },
  {
    q: "Posso usar para diferentes tipos de negócio?",
    a: "Sim. As mensagens e os prompts podem ser adaptados para diferentes pequenos negócios e prestadores de serviços que atendem pelo WhatsApp.",
  },
];

function CheckoutButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={`button button-primary ${className}`}
      href={CHECKOUT_URL}
      aria-label="Comprar o Kit WhatsApp de Vendas"
    >
      {children}
      <ArrowRight size={17} strokeWidth={2.2} />
    </a>
  );
}

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#top"
          aria-label="Kit WhatsApp de Vendas - início"
        >
          <span className="brand-mark">
            <MessageCircle size={18} fill="currentColor" />
          </span>
          <span>
            Kit WhatsApp
            <br />
            <strong>de Vendas</strong>
          </span>
        </a>
        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#kit">O que você recebe</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>
        <CheckoutButton className="header-cta">Quero o meu kit</CheckoutButton>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" /> Feito para a rotina real do
              pequeno negócio
            </div>
            <h1>
              Atenda melhor no WhatsApp <em>sem perder tempo.</em>
            </h1>
            <p className="hero-text">
              Mensagens prontas, prompts e ferramentas simples para facilitar
              seus atendimentos, orçamentos, follow-ups e a organização dos seus
              clientes.
            </p>
            <div className="hero-actions">
              <CheckoutButton>Quero organizar meu atendimento</CheckoutButton>
              <a className="text-link" href="#kit">
                Ver o que vem no kit <ArrowDown size={16} />
              </a>
            </div>
            <div className="trust-note">
              <ShieldCheck size={16} /> Pagamento único <span /> Acesso ao
              material digital
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Prévia de uma conversa organizada no WhatsApp"
          >
            <div className="visual-glow" />
            <div className="phone-card">
              <div className="phone-top">
                <span className="phone-camera" />
                <span className="phone-speaker" />
              </div>
              <div className="chat-header">
                <span className="avatar">V</span>
                <div>
                  <strong>Visão geral</strong>
                  <small>Atendimento organizado</small>
                </div>
                <span className="online-dot" />
              </div>
              <div className="chat-body">
                <div className="chat-date">HOJE</div>
                <div className="message received">
                  Oi! Gostaria de saber mais sobre o orçamento.{" "}
                  <small>09:41</small>
                </div>
                <div className="message sent">
                  Olá! Claro, vou te ajudar com isso.{" "}
                  <small>
                    09:42 <Check size={11} />
                  </small>
                </div>
                <div className="message sent message-highlight">
                  Perfeito. Para montar seu orçamento, preciso de algumas
                  informações...{" "}
                  <small>
                    09:42 <Check size={11} />
                  </small>
                </div>
                <div className="followup-card">
                  <span className="mini-icon">
                    <BellRing size={13} />
                  </span>
                  <div>
                    <strong>Próximo follow-up</strong>
                    <small>Retomar conversa · amanhã</small>
                  </div>
                  <span className="followup-arrow">→</span>
                </div>
              </div>
              <div className="chat-input">
                <span>Escreva uma mensagem...</span>
                <span className="send-icon">↑</span>
              </div>
            </div>
            <div className="floating-tag tag-top">
              <span>
                <Zap size={14} fill="currentColor" />
              </span>{" "}
              Mais clareza no dia a dia
            </div>
            <div className="floating-tag tag-bottom">
              <span>
                <Check size={14} />
              </span>{" "}
              Sem começar do zero
            </div>
          </div>
        </section>

        <section className="problem-section section-pad reveal" id="problemas">
          <div className="section-heading centered">
            <span className="section-kicker">O problema</span>
            <h2>Você passa por isso?</h2>
            <p>
              Quando o WhatsApp é o coração do negócio, cada conversa importa.
              <br />
              Mas manter tudo em ordem nem sempre é simples.
            </p>
          </div>
          <div className="problem-grid">
            {problems.map(({ icon: Icon, title, text }) => (
              <article className="problem-card" key={title}>
                <div className="icon-box">
                  <Icon size={21} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="kit-section section-pad reveal" id="kit">
          <div className="kit-intro">
            <span className="section-kicker">O kit na prática</span>
            <h2>
              Tudo o que você precisa para <em>simplificar</em> o atendimento.
            </h2>
            <p>
              Um conjunto direto ao ponto para você adaptar à sua realidade e
              usar quando precisar.
            </p>
            <CheckoutButton>Quero meu kit por R$ 19,90</CheckoutButton>
          </div>
          <div className="kit-list">
            {kitItems.map(({ icon: Icon, title, text }, i) => (
              <article className="kit-item" key={title}>
                <div className="kit-number">0{i + 1}</div>
                <div className="kit-icon">
                  <Icon size={20} />
                </div>
                <div className="kit-item-copy">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <Check className="kit-check" size={17} />
              </article>
            ))}
          </div>
        </section>

        <section className="steps-section section-pad reveal" id="como-funciona">
          <div className="section-heading centered">
            <span className="section-kicker">Sem complicação</span>
            <h2>Como funciona</h2>
            <p>Você compra uma vez e começa a aplicar no seu ritmo.</p>
          </div>
          <div className="steps-grid">
            <article>
              <span className="step-number">01</span>
              <div className="step-icon">
                <MousePointer2 size={24} />
              </div>
              <h3>Compra</h3>
              <p>Faça o pagamento único de R$ 19,90 pelo checkout.</p>
            </article>
            <div className="step-line" />
            <article>
              <span className="step-number">02</span>
              <div className="step-icon">
                <ArrowDown size={24} />
              </div>
              <h3>Acesso ao material</h3>
              <p>Receba o acesso ao kit digital após a confirmação.</p>
            </article>
            <div className="step-line" />
            <article>
              <span className="step-number">03</span>
              <div className="step-icon">
                <Zap size={24} />
              </div>
              <h3>Aplicação no negócio</h3>
              <p>Adapte as mensagens e ferramentas à sua rotina.</p>
            </article>
          </div>
        </section>

        <section className="audience-section section-pad reveal">
          <div className="audience-card">
            <div className="audience-copy">
              <span className="section-kicker">Para quem é</span>
              <h2>Para quem quer cuidar melhor de cada conversa.</h2>
              <p>
                O kit foi pensado para pequenos negócios e prestadores de
                serviços que usam o WhatsApp para atender clientes e vender — e
                querem mais clareza para fazer isso no dia a dia.
              </p>
              <div className="audience-points">
                <span>
                  <Check size={15} /> Pequenos negócios
                </span>
                <span>
                  <Check size={15} /> Prestadores de serviços
                </span>
                <span>
                  <Check size={15} /> Quem atende pelo WhatsApp
                </span>
              </div>
            </div>
            <div className="audience-art">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="art-center">
                <MessageCircle size={38} fill="currentColor" />
              </div>
              <div className="art-bubble bubble-one">
                <UsersRound size={17} />
              </div>
              <div className="art-bubble bubble-two">
                <MessageSquareText size={17} />
              </div>
              <div className="art-bubble bubble-three">
                <ClipboardList size={17} />
              </div>
            </div>
          </div>
        </section>

        <section className="demo-section section-pad reveal" id="demonstracao">
          <div className="demo-heading section-heading">
            <span className="section-kicker">Uma prévia do material</span>
            <h2>Veja como o kit ajuda na rotina.</h2>
            <p>
              Exemplos ilustrativos do tipo de recurso que você encontra para
              adaptar ao seu atendimento.
            </p>
          </div>
          <div className="demo-grid">
            <article className="demo-panel conversation-panel">
              <div className="demo-panel-head">
                <span className="demo-icon"><MessageSquareText size={18} /></span>
                <div><strong>Conversa de atendimento</strong><small>Exemplo de mensagem</small></div>
              </div>
              <div className="demo-chat">
                <span className="demo-label">EXEMPLO</span>
                <div className="demo-bubble demo-bubble-client">Oi! Você pode me passar mais detalhes?</div>
                <div className="demo-bubble demo-bubble-business">Claro! Vou te enviar as informações e, se quiser, te ajudo a escolher a melhor opção.</div>
                <span className="demo-time">Mensagem pronta para adaptar · 10:24</span>
              </div>
            </article>
            <article className="demo-panel prompt-panel">
              <div className="demo-panel-head">
                <span className="demo-icon coral-icon"><Sparkles size={18} /></span>
                <div><strong>Prompt para adaptar</strong><small>Exemplo de uso com IA</small></div>
              </div>
              <div className="prompt-code">
                <span className="prompt-mark">&gt;</span>
                <p>Adapte esta mensagem para um tom mais próximo e objetivo, mantendo as informações principais.</p>
              </div>
              <div className="prompt-footer"><span>Pronto para copiar</span><Check size={15} /></div>
            </article>
            <article className="demo-panel sheet-panel">
              <div className="demo-panel-head">
                <span className="demo-icon amber-icon"><Table2 size={18} /></span>
                <div><strong>Acompanhamento simples</strong><small>Exemplo de organização</small></div>
              </div>
              <div className="mini-sheet">
                <div className="sheet-row sheet-head"><span>Cliente</span><span>Próximo passo</span></div>
                <div className="sheet-row"><span>Marina <i>novo</i></span><span>Enviar orçamento</span></div>
                <div className="sheet-row"><span>Rafael <i className="warm">retomar</i></span><span>Follow-up</span></div>
              </div>
            </article>
          </div>
        </section>

        <section className="price-section section-pad reveal">
          <div className="price-card">
            <div className="price-copy">
              <span className="section-kicker">Comece hoje</span>
              <h2>
                Mais clareza para atender.
                <br />
                <em>Um passo de cada vez.</em>
              </h2>
              <p>
                Tenha um material prático para consultar sempre que precisar,
                sem mensalidade e sem complicação.
              </p>
            </div>
            <div className="price-box">
              <span>Pagamento único</span>
              <strong>
                <small>R$</small>19,90
              </strong>
              <CheckoutButton>Quero o meu kit</CheckoutButton>
              <small className="secure-note">
                <ShieldCheck size={13} /> Compra segura pelo checkout
              </small>
            </div>
          </div>
        </section>

        <section className="faq-section section-pad reveal" id="duvidas">
          <div className="faq-layout">
            <div className="section-heading">
              <span className="section-kicker">Perguntas frequentes</span>
              <h2>Ficou com alguma dúvida?</h2>
              <p>
                Se ainda quiser saber mais, estas são as respostas mais
                importantes.
              </p>
            </div>
            <div className="faq-list">
              {faqs.map(({ q, a }, i) => (
                <div
                  className={`faq-item ${openFaq === i ? "is-open" : ""}`}
                  key={q}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{q}</span>
                    <ChevronDown size={19} />
                  </button>
                  {openFaq === i && <p>{a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta section-pad reveal">
          <div className="final-cta-inner">
            <div className="final-symbol">
              <MessageCircle size={24} fill="currentColor" />
            </div>
            <h2>
              Seu atendimento pode ser
              <br />
              <em>mais simples.</em>
            </h2>
            <p>
              Comece com o que você já tem. Organize suas conversas e ganhe mais
              tranquilidade na rotina.
            </p>
            <CheckoutButton>Quero organizar meu atendimento</CheckoutButton>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="brand">
          <span className="brand-mark">
            <MessageCircle size={18} fill="currentColor" />
          </span>
          <span>
            Kit WhatsApp
            <br />
            <strong>de Vendas</strong>
          </span>
        </div>
        <span>Um material prático para pequenos negócios.</span>
        <span>© 2024 Kit WhatsApp de Vendas</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
