const THEMES = {
  platform: {
    titlePrefix: "Universal Tour Operator Platform",
    copy: {
      brandName: "Universal Tour Operator Platform",
      topbarCta: "Entrar al sistema",
      experienceEyebrow: "CANAL CLIENTE",
      experienceTitle: "Experiencias configurables para cada operador.",
      experienceBody:
        "La misma base permite presentar destinos, experiencias y contenido comercial con identidad propia para cada marca turística.",
      experienceCta: "Explorar experiencia",
      operationsEyebrow: "CANAL INTERNO",
      operationsTitle: "Operación clara, estable y reutilizable.",
      operationsBody:
        "La capa interna prioriza productividad, estados operativos y control del negocio sin depender del branding promocional de la marca.",
      staffButton: "Acceso staff",
      indexButton: "Índice",
      statusTitle: "OPERACIÓN ACTIVA",
      statusItemOne: "Reservas de temporada",
      statusTagOne: "Estable",
      statusItemTwo: "Inventario operativo",
      statusTagTwo: "Revisión",
      footerNote: "© 2026 Plataforma base para operadores turísticos",
      footerLinkOne: "Capacidades",
      footerLinkTwo: "Seguridad",
      footerLinkThree: "Privacidad",
      footerLinkFour: "Contacto",
      mockupIndexTitle: "Índice del mockup",
      mockupIndexBody:
        "Vista resumida de las pantallas disponibles para revisar la misma arquitectura en modo plataforma o marca configurada.",
      mockupIndexCta: "Abrir inicio",
      mockupNotice:
        "Prototipo visual para revisar navegación, theming y consistencia de componentes core.",
      mockupSectionTitle: "01 - Pantallas principales",
      mockupCardOneTitle: "Inicio",
      mockupCardOneBody:
        "Pantalla de entrada con canal cliente y canal interno",
      mockupCardTwoTitle: "Login",
      mockupCardTwoBody:
        "Acceso al sistema con la misma estructura y distinto theme",
      loginHeroTitle:
        "Una misma base para vender, operar y administrar experiencias.",
      loginHeroBody:
        "Core compartido con identidad configurable por operador turístico.",
      loginTitle: "Iniciar sesión",
      loginSubtitle: "Accede al entorno operativo del sistema.",
      loginTabOne: "Acceso cliente",
      loginTabTwo: "Staff / operación",
      loginEmailLabel: "Correo electrónico",
      loginPasswordLabel: "Contraseña",
      loginForgotLink: "¿Olvidaste tu contraseña?",
      loginSubmit: "Ingresar",
    },
    feedback: {
      empty: "Completa el correo y la contraseña para continuar.",
      success: "Inicio de sesión simulado para la operación de la plataforma.",
      recoverEmpty: "Ingresa tu correo registrado para continuar.",
      recoverSuccess:
        "Recuperación simulada. El enlace se enviaría al correo asociado a la cuenta.",
    },
    titles: {
      inicio: "Inicio | Universal Tour Operator Platform",
      index: "Índice del Mockup | Universal Tour Operator Platform",
      login: "Login | Universal Tour Operator Platform",
    },
  },
  "travesia-natural": {
    titlePrefix: "Travesía Natural",
    copy: {
      brandName: "Travesía Natural",
      topbarCta: "Entrar al sistema",
      experienceEyebrow: "EXPLORADOR",
      experienceTitle: "Vive la experiencia.",
      experienceBody:
        "Sumérgete en el corazón del ecosistema. Diseña tu viaje, conecta con la comunidad y descubre refugios naturales intactos.",
      experienceCta: "Comienza tu aventura",
      operationsEyebrow: "OPERADOR BASE",
      operationsTitle: "Gestiona la operación.",
      operationsBody:
        "Control total del ecosistema logístico. Monitorea recursos, gestiona inventarios y asegura el flujo continuo de las expediciones.",
      staffButton: "Acceso staff",
      indexButton: "Índice",
      statusTitle: "LOGÍSTICA ACTIVA",
      statusItemOne: "Expedición A",
      statusTagOne: "En ruta",
      statusItemTwo: "Inventario Base Sur",
      statusTagTwo: "Revisión",
      footerNote: "© 2026 Travesía Natural - Expedición natural premium",
      footerLinkOne: "Sostenibilidad",
      footerLinkTwo: "Términos",
      footerLinkThree: "Privacidad",
      footerLinkFour: "Contacto",
      mockupIndexTitle: "Índice del mockup",
      mockupIndexBody:
        "Vista resumida de las pantallas principales del sistema configurado para Travesía Natural.",
      mockupIndexCta: "Abrir inicio",
      mockupNotice:
        "Prototipo visual del tenant Travesía Natural sobre la misma base funcional del producto.",
      mockupSectionTitle: "01 - Pantallas principales",
      mockupCardOneTitle: "Inicio",
      mockupCardOneBody:
        "Pantalla principal de exploración y operación del sistema",
      mockupCardTwoTitle: "Login",
      mockupCardTwoBody:
        "Acceso principal al ecosistema de Travesía Natural",
      loginHeroTitle:
        "El puente entre la exploración salvaje y la gestión precisa.",
      loginHeroBody: "Plataforma integral para ecosistemas vivos.",
      loginTitle: "Iniciar sesión",
      loginSubtitle: "Bienvenido de vuelta al ecosistema.",
      loginTabOne: "Acceso cliente",
      loginTabTwo: "Staff / operación",
      loginEmailLabel: "Correo electrónico",
      loginPasswordLabel: "Contraseña",
      loginForgotLink: "¿Olvidaste tu contraseña?",
      loginSubmit: "Ingresar",
    },
    feedback: {
      empty: "Completa el correo y la contraseña para continuar.",
      success:
        "Inicio de sesión simulado para administrador o encargado del local.",
      recoverEmpty: "Ingresa tu correo registrado para continuar.",
      recoverSuccess:
        "Recuperación simulada. El enlace se enviaría al correo asociado a la cuenta.",
    },
    titles: {
      inicio: "Inicio | Travesía Natural",
      index: "Índice del Mockup | Travesía Natural",
      login: "Login | Travesía Natural",
    },
  },
};

function getTheme() {
  const params = new URLSearchParams(window.location.search);
  const requestedTheme = params.get("theme");
  return THEMES[requestedTheme] ? requestedTheme : "platform";
}

function withTheme(path, theme) {
  return `${path}?theme=${encodeURIComponent(theme)}`;
}

function applyCopy(themeConfig) {
  document.querySelectorAll("[data-copy]").forEach((node) => {
    const key = node.dataset.copy;
    const value = themeConfig.copy[key];
    if (value) {
      node.textContent = value;
    }
  });
}

function applyRoutes(theme) {
  const routeMap = {
    home: "index.html",
    login: "login.html",
    index: "indice.html",
  };

  document.querySelectorAll("[data-route]").forEach((node) => {
    const routeKey = node.dataset.route;
    const path = routeMap[routeKey];
    if (path) {
      node.setAttribute("href", withTheme(path, theme));
    }
  });
}

function applyTheme() {
  const theme = getTheme();
  const themeConfig = THEMES[theme];
  const screen = document.body.dataset.screen;

  document.body.dataset.theme = theme;
  document.title = themeConfig.titles[screen] || themeConfig.titlePrefix;

  applyCopy(themeConfig);
  applyRoutes(theme);
}

function setFeedback(key, message, type) {
  const node = document.querySelector(`[data-feedback="${key}"]`);
  if (!node) return;

  node.textContent = message;
  node.className = type ? `feedback ${type}` : "feedback";
}

function setupPasswordToggle() {
  const toggles = document.querySelectorAll("[data-toggle]");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const target = document.querySelector(toggle.dataset.toggle);
      if (!target) return;

      const nextType = target.type === "password" ? "text" : "password";
      target.type = nextType;
      toggle.textContent = nextType === "password" ? "Mostrar" : "Ocultar";
    });
  });
}

function setupLoginForm(themeConfig, theme) {
  const form = document.querySelector('[data-form="login"]');
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = form.querySelector("#login-id");
    const password = form.querySelector("#login-password");

    if (!email.value.trim() || !password.value.trim()) {
      setFeedback("login", themeConfig.feedback.empty, "is-error");
      return;
    }

    setFeedback("login", themeConfig.feedback.success, "is-success");

    window.setTimeout(() => {
      window.location.href = withTheme("indice.html", theme);
    }, 700);
  });
}

function setupRecoverForm(themeConfig) {
  const form = document.querySelector('[data-form="recover"]');
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = form.querySelector("#recover-id");

    if (!email.value.trim()) {
      setFeedback("recover", themeConfig.feedback.recoverEmpty, "is-error");
      email.focus();
      return;
    }

    setFeedback("recover", themeConfig.feedback.recoverSuccess, "is-success");
  });
}

const activeTheme = getTheme();
const activeThemeConfig = THEMES[activeTheme];

applyTheme();
setupPasswordToggle();
setupLoginForm(activeThemeConfig, activeTheme);
setupRecoverForm(activeThemeConfig);
