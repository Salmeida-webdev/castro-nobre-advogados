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

      title:
        "Contratos estratégicos como instrumento de blindagem empresarial.",

      content: `
        <p>
          Contratos empresariais não devem ser tratados como simples documentos formais.
          Em operações relevantes, eles funcionam como instrumentos de proteção,
          previsibilidade, controle de risco e preservação de valor.
        </p>

        <p>
          Um contrato bem construído define obrigações, limites de responsabilidade,
          prazos, penalidades, confidencialidade, hipóteses de rescisão e mecanismos
          de solução de conflitos.
        </p>

        <h3>Prevenção antes do conflito</h3>

        <p>
          Grande parte dos litígios empresariais nasce de cláusulas genéricas,
          ausência de previsão sobre inadimplemento ou documentos copiados sem
          adaptação ao negócio.
        </p>

        <p>
          A revisão jurídica preventiva permite identificar pontos frágeis antes da assinatura,
          protegendo a empresa em negociações com fornecedores, sócios,
          investidores e parceiros estratégicos.
        </p>

        <h3>Segurança para decisões de alto impacto</h3>

        <p>
          Em contratos de alto valor, cada cláusula precisa ser pensada de forma técnica,
          estratégica e patrimonial.
        </p>

        <p>
          O objetivo é permitir que o cliente tome decisões com segurança,
          reduza riscos financeiros e preserve a estabilidade da operação.
        </p>
      `,
    },

    {
      category: "Patrimônio",

      title:
        "Planejamento patrimonial para preservação, sucessão e continuidade.",

      content: `
        <p>
          O planejamento patrimonial é uma estratégia jurídica voltada à organização,
          proteção e continuidade de bens, empresas e investimentos.
        </p>

        <p>
          Sem uma estrutura preventiva, disputas sucessórias, conflitos familiares
          e ausência de governança podem comprometer anos de construção patrimonial.
        </p>

        <h3>Proteção e previsibilidade</h3>

        <p>
          Um planejamento eficiente envolve análise de imóveis,
          participações societárias, contratos, estrutura familiar,
          sucessão e riscos empresariais.
        </p>

        <p>
          O objetivo não é apenas transferir bens, mas preservar valor,
          reduzir incertezas e criar uma estrutura sólida para o futuro.
        </p>

        <h3>Continuidade familiar e empresarial</h3>

        <p>
          Quando bem conduzido, o planejamento patrimonial protege empresas,
          imóveis e investimentos diante de reorganizações societárias,
          sucessão ou mudanças familiares.
        </p>
      `,
    },

    {
      category: "Empresarial",

      title: "Disputas societárias exigem estratégia antes da reação.",

      content: `
        <p>
          Conflitos entre sócios podem afetar diretamente a operação,
          a reputação e a estabilidade financeira de uma empresa.
        </p>

        <p>
          Antes de qualquer medida, é necessário analisar contrato social,
          acordo de sócios, atas, documentos financeiros e impactos comerciais.
        </p>

        <h3>Negociação, contenção e prova</h3>

        <p>
          Em disputas societárias, nem sempre o primeiro caminho deve ser judicial.
          Muitas vezes, uma negociação bem conduzida preserva ativos,
          reduz exposição e evita desgaste público.
        </p>

        <p>
          A coleta e organização de provas também é decisiva para fortalecer
          a estratégia jurídica e proteger os interesses do cliente.
        </p>

        <h3>Proteção da empresa e dos sócios</h3>

        <p>
          O foco deve ser proteger patrimônio, operação e direitos estratégicos.
          Uma atuação sofisticada considera não apenas a lei,
          mas também os impactos econômicos e reputacionais da disputa.
        </p>
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

  let ticking = false;

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    header?.classList.toggle("scrolled", scrollY > 24);

    backToTop?.classList.toggle("visible", scrollY > 700);

    ticking = false;
  };

  const requestScrollUpdate = () => {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);

      ticking = true;
    }
  };

  window.addEventListener("scroll", requestScrollUpdate, {
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
