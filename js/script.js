document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const header = document.getElementById("header");
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const backToTop = document.getElementById("backToTop");
  const faqItems = document.querySelectorAll(".faq-item");
  const revealElements = document.querySelectorAll(".reveal");
  const articleCards = document.querySelectorAll(".article-card[data-article]");
  const articleModal = document.getElementById("articleModal");
  const articleModalTitle = document.getElementById("articleModalTitle");
  const articleModalCategory = document.getElementById("articleModalCategory");
  const articleModalContent = document.getElementById("articleModalContent");
  const articleCloseButtons = document.querySelectorAll("[data-close-article]");

  const articles = [
    {
      category: "Contratos",
      title: "Como contratos bem estruturados reduzem riscos empresariais.",
      content: `
        <p>Contratos empresariais não devem ser tratados como simples documentos formais. Em operações relevantes, eles funcionam como instrumentos de proteção, previsibilidade, controle de risco e preservação de valor.</p>

        <p>Um contrato bem construído define obrigações, limites de responsabilidade, prazos, penalidades, confidencialidade, hipóteses de rescisão e mecanismos de solução de conflitos. Isso reduz ruídos na relação comercial e evita que decisões importantes fiquem abertas à interpretação.</p>

        <h3>Prevenção antes do conflito</h3>

        <p>Grande parte dos litígios empresariais nasce de cláusulas genéricas, ausência de previsão sobre inadimplemento ou documentos copiados sem adaptação ao negócio. A revisão jurídica preventiva permite identificar pontos frágeis antes da assinatura.</p>

        <p>Essa análise protege a empresa em negociações com fornecedores, sócios, investidores, clientes estratégicos e parceiros comerciais. Mais do que evitar processos, o contrato certo melhora a posição negocial da empresa.</p>

        <h3>Segurança para decisões de alto impacto</h3>

        <p>Em contratos de alto valor, cada cláusula precisa ser pensada de forma técnica e estratégica. A linguagem deve ser clara, mas juridicamente forte. O objetivo é permitir que o cliente tome decisões com segurança e reduza riscos financeiros, operacionais e reputacionais.</p>
      `,
    },

    {
      category: "Patrimônio",
      title: "Planejamento patrimonial: proteção, sucessão e continuidade.",
      content: `
        <p>O planejamento patrimonial é uma estratégia jurídica voltada à organização, proteção e continuidade de bens, empresas e investimentos. Ele é especialmente importante para famílias empresárias, investidores e titulares de patrimônio relevante.</p>

        <p>Sem uma estrutura preventiva, disputas sucessórias, conflitos familiares, problemas fiscais e ausência de governança podem comprometer anos de construção patrimonial. Por isso, a organização jurídica deve começar antes do conflito.</p>

        <h3>Proteção e previsibilidade</h3>

        <p>Um bom planejamento pode envolver análise de imóveis, participações societárias, contratos, estrutura familiar, riscos empresariais, sucessão e regras de administração. Cada solução precisa ser personalizada conforme o perfil do cliente.</p>

        <p>O objetivo não é apenas transferir bens, mas preservar valor, reduzir incertezas e criar uma estrutura clara para o futuro. Isso evita decisões improvisadas em momentos de pressão.</p>

        <h3>Continuidade familiar e empresarial</h3>

        <p>Quando bem conduzido, o planejamento patrimonial permite que empresas, imóveis e investimentos continuem protegidos mesmo diante de sucessão, mudança familiar ou reorganização societária. É uma decisão de visão estratégica, não apenas jurídica.</p>
      `,
    },

    {
      category: "Empresarial",
      title: "Disputas societárias exigem estratégia antes da reação.",
      content: `
        <p>Conflitos entre sócios podem afetar diretamente a operação, a reputação e a estabilidade financeira de uma empresa. Por isso, agir por impulso pode aumentar o risco e enfraquecer a posição jurídica do cliente.</p>

        <p>Antes de qualquer medida, é necessário analisar contrato social, acordo de sócios, atas, mensagens, documentos financeiros, obrigações assumidas e possíveis impactos comerciais. A estratégia começa pelo diagnóstico.</p>

        <h3>Negociação, contenção e prova</h3>

        <p>Em disputas societárias, nem sempre o primeiro caminho deve ser judicial. Muitas vezes, uma negociação bem conduzida preserva ativos, reduz exposição e evita desgaste público. Em outros casos, é necessário preparar uma atuação contenciosa firme.</p>

        <p>A coleta e organização de provas também é decisiva. Documentos mal apresentados ou decisões precipitadas podem comprometer uma boa tese jurídica.</p>

        <h3>Proteção da empresa e dos sócios</h3>

        <p>O foco deve ser proteger o patrimônio, a operação e os direitos do cliente. Uma atuação estratégica considera não apenas a lei, mas também o impacto econômico, reputacional e negocial da disputa.</p>
      `,
    },
  ];

  if (loader) {
    window.setTimeout(() => {
      loader.classList.add("hide");
    }, 360);
  }

  const closeMenu = () => {
    navMenu?.classList.remove("active");
    menuToggle?.classList.remove("active");
    document.body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    navMenu?.classList.add("active");
    menuToggle?.classList.add("active");
    document.body.classList.add("menu-open");
    menuToggle?.setAttribute("aria-expanded", "true");
  };

  menuToggle?.addEventListener("click", () => {
    const isOpen = navMenu?.classList.contains("active");
    isOpen ? closeMenu() : openMenu();
  });

  navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  const openArticle = (index) => {
    const article = articles[index];

    if (
      !article ||
      !articleModal ||
      !articleModalTitle ||
      !articleModalCategory ||
      !articleModalContent
    ) {
      return;
    }

    articleModalCategory.textContent = article.category;
    articleModalTitle.textContent = article.title;
    articleModalContent.innerHTML = article.content;

    articleModal.classList.add("active");
    articleModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");
  };

  const closeArticle = () => {
    articleModal?.classList.remove("active");
    articleModal?.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");
  };

  articleCards.forEach((card) => {
    const index = Number(card.dataset.article);

    card.addEventListener("click", () => {
      openArticle(index);
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openArticle(index);
      }
    });
  });

  articleCloseButtons.forEach((button) => {
    button.addEventListener("click", closeArticle);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      closeArticle();
    }
  });

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    header?.classList.toggle("scrolled", scrollY > 24);
    backToTop?.classList.toggle("visible", scrollY > 700);
  };

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  handleScroll();

  backToTop?.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  faqItems.forEach((item) => {
    const button = item.querySelector("button");
    const content = item.querySelector(".faq-item__content");

    button?.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      faqItems.forEach((currentItem) => {
        const currentButton = currentItem.querySelector("button");
        const currentContent = currentItem.querySelector(".faq-item__content");

        currentItem.classList.remove("active");

        currentButton?.setAttribute("aria-expanded", "false");

        if (currentContent) {
          currentContent.style.maxHeight = null;
        }
      });

      if (!isActive) {
        item.classList.add("active");

        button.setAttribute("aria-expanded", "true");

        if (content) {
          content.style.maxHeight = `${content.scrollHeight}px`;
        }
      }
    });
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -48px 0px",
      },
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }
});
