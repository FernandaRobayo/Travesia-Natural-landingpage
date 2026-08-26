const THEMES = {
  platform: {
    titlePrefix: "Multitour",
    copy: {
      brandName: "Multitour",
      clientNavFive: "Ingresar",
      clientHeroTitle: "Descubre experiencias para tu proxima aventura",
      clientHeroBody:
        "Explora experiencias, hospedajes y opciones disponibles para tu proxima aventura.",
      clientSearchLabel: "Buscar / explorar",
      clientSearchPlaceholder: "Busca experiencias o destinos",
      clientSearchButton: "Explorar",
      featuredTitle: "Experiencias destacadas",
      featuredLink: "Ver todas las experiencias",
      experienceCardTag: "Experiencia",
      experienceCardOneTitle: "Nombre de experiencia",
      experienceCardOneOperator: "Operado por Travesia Natural",
      experienceCardOneBody: "Consulta los detalles y opciones disponibles.",
      experienceCardTwoTitle: "Nombre de experiencia",
      experienceCardTwoOperator: "Operado por Huila Adventure",
      experienceCardTwoBody: "Consulta los detalles y opciones disponibles.",
      experienceCardCta: "Ver experiencia",
      mockupIndexTitle: "Indice del mockup",
      mockupIndexBody:
        "Vista resumida de las pantallas disponibles para revisar la misma arquitectura como plataforma base o experiencia personalizada.",
      mockupIndexCta: "Abrir home",
      mockupNotice:
        "Prototipo visual para revisar navegacion, consistencia visual y adaptabilidad del producto.",
      mockupSectionTitle: "01 - Pantallas principales",
      mockupCardOneTitle: "Home",
      mockupCardOneBody: "Pantalla principal para explorar la oferta del operador",
      mockupCardTwoTitle: "Login",
      mockupCardTwoBody:
        "Acceso al sistema con la misma estructura funcional del producto",
      loginHeroTitle:
        "Una misma base para vender, operar y administrar experiencias.",
      loginHeroBody:
        "Plataforma compartida con identidad configurable por operador turistico.",
      loginTitle: "Iniciar sesion",
      loginSubtitle: "Accede al entorno operativo del sistema.",
      loginTabOne: "Acceso cliente",
      loginTabTwo: "Staff / operacion",
      loginEmailLabel: "Correo electronico",
      loginPasswordLabel: "Contrasena",
      loginForgotLink: "Olvidaste tu contrasena?",
      loginSubmit: "Ingresar",
    },
    feedback: {
      empty: "Completa el correo y la contrasena para continuar.",
      success: "Inicio de sesion simulado para la operacion de la plataforma.",
    },
    titles: {
      inicio: "Home | Multitour",
      index: "Indice del Mockup | Multitour",
      login: "Login | Multitour",
    },
  },
  "travesia-natural": {
    titlePrefix: "Travesia Natural",
    copy: {
      brandName: "Travesia Natural",
      clientNavFive: "Ingresar",
      clientHeroTitle: "Descubre experiencias para tu proxima aventura",
      clientHeroBody:
        "Explora experiencias, hospedajes y opciones disponibles para tu proxima aventura.",
      clientSearchLabel: "Buscar / explorar",
      clientSearchPlaceholder: "Busca experiencias o destinos",
      clientSearchButton: "Explorar",
      featuredTitle: "Experiencias destacadas",
      featuredLink: "Ver todas las experiencias",
      experienceCardTag: "Experiencia",
      experienceCardOneTitle: "Nombre de experiencia",
      experienceCardOneOperator: "Operado por Travesia Natural",
      experienceCardOneBody: "Consulta los detalles y opciones disponibles.",
      experienceCardTwoTitle: "Nombre de experiencia",
      experienceCardTwoOperator: "Operado por Huila Adventure",
      experienceCardTwoBody: "Consulta los detalles y opciones disponibles.",
      experienceCardCta: "Ver experiencia",
      mockupIndexTitle: "Indice del mockup",
      mockupIndexBody:
        "Vista resumida de las pantallas principales del sistema configurado para Travesia Natural.",
      mockupIndexCta: "Abrir home",
      mockupNotice:
        "Prototipo visual del tenant Travesia Natural sobre la misma base funcional del producto.",
      mockupSectionTitle: "01 - Pantallas principales",
      mockupCardOneTitle: "Home",
      mockupCardOneBody: "Pantalla principal para explorar la oferta configurada del operador",
      mockupCardTwoTitle: "Login",
      mockupCardTwoBody: "Acceso principal al ecosistema de Travesia Natural",
      loginHeroTitle:
        "El puente entre la exploracion salvaje y la gestion precisa.",
      loginHeroBody: "Plataforma integral para ecosistemas vivos.",
      loginTitle: "Iniciar sesion",
      loginSubtitle: "Bienvenido de vuelta al ecosistema.",
      loginTabOne: "Acceso cliente",
      loginTabTwo: "Staff / operacion",
      loginEmailLabel: "Correo electronico",
      loginPasswordLabel: "Contrasena",
      loginForgotLink: "Olvidaste tu contrasena?",
      loginSubmit: "Ingresar",
    },
    feedback: {
      empty: "Completa el correo y la contrasena para continuar.",
      success:
        "Inicio de sesion simulado para administrador o encargado del local.",
    },
    titles: {
      inicio: "Home | Travesia Natural",
      index: "Indice del Mockup | Travesia Natural",
      login: "Login | Travesia Natural",
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
    if (value) node.textContent = value;
  });

  document.querySelectorAll("[data-copy-placeholder]").forEach((node) => {
    const key = node.dataset.copyPlaceholder;
    const value = themeConfig.copy[key];
    if (value) node.setAttribute("placeholder", value);
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
    if (path) node.setAttribute("href", withTheme(path, theme));
  });
}

function applyTheme() {
  const theme = getTheme();
  const themeConfig = THEMES[theme];
  const screen = document.body.dataset.screen;

  if (theme === "travesia-natural" && screen === "inicio") {
    window.location.replace("../index.html#escenarios");
    return;
  }

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

const activeTheme = getTheme();
const activeThemeConfig = THEMES[activeTheme];

applyTheme();
setupPasswordToggle();
setupLoginForm(activeThemeConfig, activeTheme);
