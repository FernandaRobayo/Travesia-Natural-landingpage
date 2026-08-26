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
      "client-dashboard": "Panel cliente | Multitour",
      tours: "Tours | Multitour",
      lodging: "Alojamiento | Multitour",
      index: "Indice del Mockup | Multitour",
      login: "Login | Multitour",
      signup: "Crear cuenta | Multitour",
      recover: "Recuperar contrasena | Multitour",
      reset: "Nueva contrasena | Multitour",
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
      "client-dashboard": "Panel cliente | Travesia Natural",
      tours: "Tours | Travesia Natural",
      lodging: "Alojamiento | Travesia Natural",
      index: "Indice del Mockup | Travesia Natural",
      login: "Login | Travesia Natural",
      signup: "Crear cuenta | Travesia Natural",
      recover: "Recuperar contrasena | Travesia Natural",
      reset: "Nueva contrasena | Travesia Natural",
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
    dashboard: "panel-cliente.html",
    tours: "tours.html",
    lodging: "alojamiento.html",
    login: "login.html",
    signup: "crear-cuenta.html",
    recover: "recuperar.html",
    reset: "nueva-contrasena.html",
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

    const activeRole =
      document.querySelector("[data-role-option].is-active")?.dataset.roleOption || "client";

    setFeedback("login", themeConfig.feedback.success, "is-success");

    window.setTimeout(() => {
      const nextPath = activeRole === "staff" ? "indice.html" : "panel-cliente.html";
      window.location.href = withTheme(nextPath, theme);
    }, 700);
  });
}

function setupRoleSwitch() {
  const options = document.querySelectorAll("[data-role-option]");
  if (!options.length) return;

  options.forEach((option) => {
    option.addEventListener("click", () => {
      options.forEach((node) => {
        node.classList.remove("is-active");
        node.setAttribute("aria-pressed", "false");
      });

      option.classList.add("is-active");
      option.setAttribute("aria-pressed", "true");
    });
  });
}

function setupRecoverForm(theme) {
  const form = document.querySelector('[data-form="recover"]');
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = form.querySelector("#recover-email");
    if (!email.value.trim()) {
      setFeedback("recover", "Completa el correo electronico para continuar.", "is-error");
      return;
    }

    setFeedback(
      "recover",
      "Se envio una validacion simulada para recuperar el acceso.",
      "is-success",
    );

    window.setTimeout(() => {
      window.location.href = withTheme("nueva-contrasena.html", theme);
    }, 900);
  });
}

function setupSignupForm(theme) {
  const form = document.querySelector('[data-form="signup"]');
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.querySelector("#signup-name");
    const email = form.querySelector("#signup-email");
    const phone = form.querySelector("#signup-phone");
    const password = form.querySelector("#signup-password");
    const confirm = form.querySelector("#signup-confirm");
    const value = password.value.trim();

    if (
      !name.value.trim() ||
      !email.value.trim() ||
      !phone.value.trim() ||
      !value ||
      !confirm.value.trim()
    ) {
      setFeedback("signup", "Completa todos los campos para continuar.", "is-error");
      return;
    }

    const hasMinLength = value.length >= 8;
    const hasUppercase = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);

    if (!hasMinLength || !hasUppercase || !hasNumber) {
      setFeedback(
        "signup",
        "La contrasena debe tener minimo 8 caracteres, una mayuscula y un numero.",
        "is-error",
      );
      return;
    }

    if (value !== confirm.value.trim()) {
      setFeedback("signup", "Las contrasenas no coinciden.", "is-error");
      return;
    }

    setFeedback("signup", "Cuenta creada en esta simulacion. Ahora puedes iniciar sesion.", "is-success");

    window.setTimeout(() => {
      window.location.href = withTheme("login.html", theme);
    }, 900);
  });
}

function setupResetForm(theme) {
  const form = document.querySelector('[data-form="reset"]');
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const password = form.querySelector("#reset-password");
    const confirm = form.querySelector("#reset-confirm");
    const value = password.value.trim();

    if (!value || !confirm.value.trim()) {
      setFeedback("reset", "Completa ambos campos para continuar.", "is-error");
      return;
    }

    const hasMinLength = value.length >= 8;
    const hasUppercase = /[A-Z]/.test(value);
    const hasNumber = /\d/.test(value);

    if (!hasMinLength || !hasUppercase || !hasNumber) {
      setFeedback(
        "reset",
        "La contrasena debe tener minimo 8 caracteres, una mayuscula y un numero.",
        "is-error",
      );
      return;
    }

    if (value !== confirm.value.trim()) {
      setFeedback("reset", "Las contrasenas no coinciden.", "is-error");
      return;
    }

    setFeedback("reset", "La nueva contrasena se guardo en esta simulacion.", "is-success");

    window.setTimeout(() => {
      window.location.href = withTheme("login.html", theme);
    }, 900);
  });
}

const activeTheme = getTheme();
const activeThemeConfig = THEMES[activeTheme];

applyTheme();
setupPasswordToggle();
setupRoleSwitch();
setupLoginForm(activeThemeConfig, activeTheme);
setupSignupForm(activeTheme);
setupRecoverForm(activeTheme);
setupResetForm(activeTheme);
