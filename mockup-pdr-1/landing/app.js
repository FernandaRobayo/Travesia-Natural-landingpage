// ---------------------------------------------------------------------------
// Reloj único de demostración. Todo el dominio (cliente, operador y plataforma) lee el "ahora"
// de getOperatorNow(): el instante de referencia de la demo más un desfase guardado en el
// navegador (clave multitour-demo-clock-offset-ms). El reloj no corre solo: avanza únicamente
// con los botones del control "Reloj de demostración". No reemplaza ids únicos ni formateos.
// ---------------------------------------------------------------------------
const OPERATOR_DEMO_CLOCK_BASE = "2026-09-01T12:00:00-05:00";
const OPERATOR_DEMO_CLOCK_KEY = "multitour-demo-clock-offset-ms";

function getOperatorDemoClockOffset() {
  try {
    const value = Number(window.localStorage.getItem(OPERATOR_DEMO_CLOCK_KEY));
    return Number.isFinite(value) ? value : 0;
  } catch {
    return 0;
  }
}

function setOperatorDemoClockOffset(ms) {
  try {
    window.localStorage.setItem(OPERATOR_DEMO_CLOCK_KEY, String(Math.max(0, Math.round(Number(ms) || 0))));
  } catch {
    /* sin localStorage: el reloj vuelve a la referencia */
  }
}

function getOperatorNow() {
  return new Date(new Date(OPERATOR_DEMO_CLOCK_BASE).getTime() + getOperatorDemoClockOffset());
}

const THEMES = {
  platform: {
    titlePrefix: "Multitour",
    copy: {
      brandName: "Multitour",
      clientNavFive: "Ingresar",
      clientHeroTitle: "Descubre experiencias para tu próxima aventura",
      clientHeroBody:
        "Explora experiencias, tours y establecimientos asociados disponibles para tu próxima aventura.",
      clientSearchLabel: "Buscar / explorar",
      clientSearchPlaceholder: "Busca experiencias o destinos",
      clientSearchButton: "Explorar",
      featuredTitle: "Experiencias destacadas",
      featuredLink: "Ver todas las experiencias",
      experienceCardTag: "Experiencia",
      experienceCardOneTitle: "Nombre de experiencia",
      experienceCardOneOperator: "Operado por Travesía Natural",
      experienceCardOneBody: "Consulta los detalles y opciones disponibles.",
      experienceCardTwoTitle: "Nombre de experiencia",
      experienceCardTwoOperator: "Operado por Huila Adventure",
      experienceCardTwoBody: "Consulta los detalles y opciones disponibles.",
      experienceCardCta: "Ver experiencia",
      mockupIndexTitle: "Índice del mockup",
      mockupIndexBody:
        "Vista resumida de las pantallas disponibles para revisar la misma arquitectura como plataforma base o experiencia personalizada.",
      mockupIndexCta: "Abrir home",
      mockupNotice:
        "Prototipo visual para revisar navegación, consistencia visual y adaptabilidad del producto.",
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
    },
    titles: {
      inicio: "Home | Multitour",
      "client-dashboard": "Panel cliente | Multitour",
      "client-reservations": "Mis reservas | Multitour",
      "client-payments": "Mis pagos | Multitour",
      tours: "Tours | Multitour",
      lodging: "Alojamiento | Multitour",
      gastronomy: "Gastronomía | Multitour",
      restaurants: "Restaurantes | Multitour",
      "gastronomy-detail": "Detalle gastronómico | Multitour",
      "tour-detail": "Detalle tour | Multitour",
      "tour-booking": "Reservar tour | Multitour",
      "tour-checkout": "Finalizar reserva | Multitour",
      "tour-payment-success": "Comprobante recibido | Multitour",
      "tour-payment-failed": "Comprobante rechazado | Multitour",
      "tour-payment-transfer": "Pago por transferencia | Multitour",
      companions: "Acompañantes | Multitour",
      profile: "Perfil | Multitour",
      index: "Índice del mockup | Multitour",
      login: "Login | Multitour",
      signup: "Crear cuenta | Multitour",
      recover: "Recuperar contraseña | Multitour",
      reset: "Nueva contraseña | Multitour",
      "platform-admin": "Plataforma | Multitour",
      "platform-operators": "Operadores | Multitour",
      "platform-create": "Crear operador | Multitour",
      "platform-tenant-detail": "Detalle del operador | Multitour",
      "platform-audit": "Auditoría | Multitour",
      "platform-login": "Acceso de plataforma | Multitour",
    },
  },
  "travesia-natural": {
    titlePrefix: "Multitour",
    copy: {
      brandName: "Travesía Natural",
      clientNavFive: "Ingresar",
      clientHeroTitle: "Descubre experiencias para tu próxima aventura",
      clientHeroBody:
        "Explora experiencias, tours y establecimientos asociados disponibles para tu próxima aventura.",
      clientSearchLabel: "Buscar / explorar",
      clientSearchPlaceholder: "Busca experiencias o destinos",
      clientSearchButton: "Explorar",
      featuredTitle: "Experiencias destacadas",
      featuredLink: "Ver todas las experiencias",
      experienceCardTag: "Experiencia",
      experienceCardOneTitle: "Nombre de experiencia",
      experienceCardOneOperator: "Operado por Travesía Natural",
      experienceCardOneBody: "Consulta los detalles y opciones disponibles.",
      experienceCardTwoTitle: "Nombre de experiencia",
      experienceCardTwoOperator: "Operado por Huila Adventure",
      experienceCardTwoBody: "Consulta los detalles y opciones disponibles.",
      experienceCardCta: "Ver experiencia",
      mockupIndexTitle: "Índice del mockup",
      mockupIndexBody:
        "Vista resumida de las pantallas principales del sistema configurado para Travesía Natural.",
      mockupIndexCta: "Abrir home",
      mockupNotice:
        "Prototipo visual del tenant Travesía Natural sobre la misma base funcional del producto.",
      mockupSectionTitle: "01 - Pantallas principales",
      mockupCardOneTitle: "Home",
      mockupCardOneBody: "Pantalla principal para explorar la oferta configurada del operador",
      mockupCardTwoTitle: "Login",
      mockupCardTwoBody: "Acceso principal al ecosistema de Travesía Natural",
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
    },
    titles: {
      inicio: "Home | Multitour",
      "client-dashboard": "Panel cliente | Multitour",
      "client-reservations": "Mis reservas | Multitour",
      "client-payments": "Mis pagos | Multitour",
      tours: "Tours | Multitour",
      lodging: "Alojamiento | Multitour",
      gastronomy: "Gastronomía | Multitour",
      restaurants: "Restaurantes | Multitour",
      "gastronomy-detail": "Detalle gastronómico | Multitour",
      "tour-detail": "Detalle tour | Multitour",
      "tour-booking": "Reservar tour | Multitour",
      "tour-checkout": "Finalizar reserva | Multitour",
      "tour-payment-success": "Comprobante recibido | Multitour",
      "tour-payment-failed": "Comprobante rechazado | Multitour",
      "tour-payment-transfer": "Pago por transferencia | Multitour",
      companions: "Acompañantes | Multitour",
      profile: "Perfil | Multitour",
      index: "Índice del mockup | Multitour",
      login: "Login | Multitour",
      signup: "Crear cuenta | Multitour",
      recover: "Recuperar contraseña | Multitour",
      reset: "Nueva contraseña | Multitour",
      "platform-admin": "Plataforma | Multitour",
      "platform-operators": "Operadores | Multitour",
      "platform-create": "Crear operador | Multitour",
      "platform-tenant-detail": "Detalle del operador | Multitour",
      "platform-audit": "Auditoría | Multitour",
      "platform-login": "Acceso de plataforma | Multitour",
    },
  },
};

function formatCOP(value) {
  return `$${new Intl.NumberFormat("es-CO", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)}`;
}

function formatCOPRange(min, max) {
  return `${formatCOP(min)} - ${formatCOP(max)}`;
}

function getTheme() {
  const params = new URLSearchParams(window.location.search);
  const requestedTheme = params.get("theme");
  return THEMES[requestedTheme] ? requestedTheme : "platform";
}

function withTheme(path, theme) {
  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}theme=${encodeURIComponent(theme)}`;
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
    gastronomy: "gastronomia.html",
    restaurants: "restaurantes.html",
    gastronomyDetail: "detalle-gastronomia.html",
    tourDetail: "detalle-tour.html",
    tourBooking: "reservar-tour.html",
    tourCheckout: "finalizar-reserva.html",
    tourPaymentSuccess: "pago-exitoso.html",
    tourPaymentFailed: "pago-fallido.html",
    tourPaymentTransfer: "pago-transferencia.html",
    companions: "acompanantes.html",
    profile: "profile.html",
    login: "login.html",
    signup: "crear-cuenta.html",
    recover: "recuperar.html",
    reset: "nueva-contrasena.html",
    clientReprogrammingProposal: "propuesta-reprogramacion.html",
    clientDashboard: "panel-cliente.html",
    clientReservations: "mis-reservas.html",
    clientPayments: "mis-pagos.html",
    platformAdmin: "admin-plataforma.html",
    platformOperators: "admin-operadores.html",
    platformCreate: "admin-crear-operador.html",
    platformTenantDetail: "admin-detalle-operador.html",
    platformAudit: "admin-auditoria.html",
    platformLogin: "admin-login.html",
    operatorCollaborators: "admin-colaboradores.html",
    operatorRegisterCollaborator: "admin-registrar-colaborador.html",
    operatorNotifications: "admin-notificaciones.html",
    operatorFoodCatalog: "admin-gestionar-alimentacion.html",
    operatorNewDiscount: "admin-nuevo-descuento.html",
    operatorAdmin: "admin-operador.html",
    operatorReservations: "admin-reservas.html",
    operatorReservationDetail: "admin-detalle-reserva.html",
    operatorCreateReservation: "admin-crear-reserva.html",
    operatorReservationCreated: "admin-reserva-registrada.html",
    operatorReservationPayment: "admin-gestion-pago.html",
    operatorCatalogs: "admin-catalogos.html",
    operatorNewService: "admin-nuevo-servicio.html",
    operatorTourCatalog: "admin-gestionar-catalogo.html",
    operatorLodgingCatalog: "admin-gestionar-hospedaje.html",
    operatorTransportCatalog: "admin-gestionar-transporte.html",
    operatorDiscounts: "admin-descuentos.html",
    operatorPayments: "admin-pagos.html",
    operatorCash: "admin-caja.html",
    operatorOperations: "admin-operacion.html",
    operatorReports: "admin-reportes.html",
    index: "indice.html",
  };

  document.querySelectorAll("[data-route]").forEach((node) => {
    const routeKey = node.dataset.route;
    const path = routeMap[routeKey];
    if (!path) return;

    const currentHref = node.getAttribute("href") || "";
    const query = currentHref.includes("?") ? currentHref.slice(currentHref.indexOf("?")) : "";
    node.setAttribute("href", withTheme(`${path}${query}`, theme));
  });

  // Enlaces internos del panel del operador y de plataforma sin data-route: conservan el tema.
  document.querySelectorAll(".operator-shell a[href], .platform-shell a[href]").forEach((node) => {
    const href = node.getAttribute("href") || "";
    if (node.dataset.route || href.includes("theme=") || href.includes("#") || !/^[a-z0-9-]+\.html(\?|$)/i.test(href)) return;
    node.setAttribute("href", withTheme(href, theme));
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
  // Si la pantalla no define titulo propio se conserva el <title> del HTML (sufijo " | Multitour").
  if (themeConfig.titles[screen]) document.title = themeConfig.titles[screen];
  else if (!document.title) document.title = themeConfig.titlePrefix;

  applyCopy(themeConfig);
  applyRoutes(theme);
}

function setFeedback(key, message, type) {
  const node = document.querySelector(`[data-feedback="${key}"]`);
  if (!node) return;
  node.textContent = message;
  node.className = type ? `feedback ${type}` : "feedback";
}

function getStoredProfile() {
  try {
    const raw = window.localStorage.getItem("multitour-user-profile");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function getUserInitials(name) {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);
  if (!parts.length) return "FN";
  return parts.map((part) => part[0].toUpperCase()).join("");
}

function hydrateStoredUser() {
  const profile = getStoredProfile();

  // Saludo del header: con perfil guardado usa su primer nombre; sin perfil o sin nombre el
  // saludo es genérico ("Hola, bienvenido").
  if (profile) {
    document.querySelectorAll("[data-user-avatar], [data-user-avatar-large]").forEach((node) => {
      node.textContent = getUserInitials(profile.name);
    });
    const greetingNode = document.querySelector("[data-user-greeting]");
    if (greetingNode) {
      const firstName = String(profile.name || "").trim().split(/\s+/)[0];
      greetingNode.textContent = firstName ? `Hola, ${firstName}` : "Hola, bienvenido";
    }
  }

  // Mi perfil (Datos de la cuenta / Datos personales): a diferencia del saludo, aqui NUNCA
  // se muestra un dato de ejemplo hardcodeado. Sin perfil real guardado, se informa
  // "No registrado" en cada campo.
  const profileNameCard = document.querySelector("[data-profile-name-card]");
  if (profileNameCard) profileNameCard.textContent = profile?.name || "No registrado";

  const profileEmail = document.querySelector("[data-profile-email]");
  if (profileEmail) profileEmail.textContent = profile?.email || "No registrado";

  const profileNameInput = document.querySelector("[data-profile-name-input]");
  if (profileNameInput) profileNameInput.value = profile?.name || "";

  const profileEmailInput = document.querySelector("[data-profile-email-input]");
  if (profileEmailInput) profileEmailInput.value = profile?.email || "";

  const profilePhoneInput = document.querySelector("[data-profile-phone-input]");
  if (profilePhoneInput) profilePhoneInput.value = profile?.phone || "";

  // El cliente opera dentro de un tenant determinado (operador): se muestra, no es editable.
  const profileTenantInput = document.querySelector("[data-profile-tenant-input]");
  if (profileTenantInput) profileTenantInput.value = profile?.tenantName || resolveClientTenantName();
}

// "Mi perfil" -> Resumen: reservas activas, pagos pendientes y ultima reserva, todas
// derivadas del MISMO historial/reserva actual ya usado por panel-cliente y mis-pagos
// (multitour-client-reservations / multitour-dashboard-booking). Nunca cantidades
// hardcodeadas.
function setupProfileSummary() {
  if (document.body.dataset.screen !== "profile") return;

  // Misma fuente que el panel y Mis reservas: getClientReservationViews() (reservas de
  // demostración del cliente más las propias, con el estado real del tenant).
  const views = getClientReservationViews();
  const active = views.filter((view) => !["Finalizada", "Cancelada"].includes(view.status));
  // Pago pendiente: reserva Pendiente de pago, o Confirmada/En ejecución con saldo por pagar.
  const pendingPayments = active.filter((view) => view.status === "Pendiente de pago" || view.balance > 0);

  const activeNode = document.querySelector("[data-profile-active-reservations]");
  if (activeNode) activeNode.textContent = String(active.length);

  const pendingNode = document.querySelector("[data-profile-pending-payments]");
  if (pendingNode) pendingNode.textContent = String(pendingPayments.length);

  // Última reserva: la creada más recientemente; sin fecha de creación, la de código mayor.
  const codeNumber = (view) => Number(String(view.code).replace(/\D/g, "")) || 0;
  const latest = views.slice().sort((a, b) => {
    const byDate = String(b.createdAtIso || "").localeCompare(String(a.createdAtIso || ""));
    return byDate || codeNumber(b) - codeNumber(a);
  })[0];
  const lastNode = document.querySelector("[data-profile-last-reservation]");
  if (lastNode) lastNode.textContent = latest ? `${latest.code} · ${latest.tour} (${latest.departureLabel})` : "No registrado";
}

// "Mi perfil" -> Seguridad -> Editar perfil: solo nombre y telefono son editables (unicos
// campos del modelo/PDR realmente mutables para el Cliente). Rol, tenant e identificadores
// internos nunca se exponen como editables aqui.
function setupProfileEdit() {
  if (document.body.dataset.screen !== "profile") return;

  const toggle = document.querySelector("[data-profile-edit-toggle]");
  const label = document.querySelector("[data-profile-edit-label]");
  const nameInput = document.querySelector("[data-profile-name-input]");
  const phoneInput = document.querySelector("[data-profile-phone-input]");
  const feedback = document.querySelector("[data-profile-feedback]");
  if (!toggle || !nameInput || !phoneInput) return;

  let editing = false;

  toggle.addEventListener("click", (event) => {
    event.preventDefault();

    if (!editing) {
      editing = true;
      nameInput.removeAttribute("readonly");
      phoneInput.removeAttribute("readonly");
      nameInput.focus();
      if (label) label.textContent = "Guardar cambios";
      if (feedback) {
        feedback.textContent = "";
        feedback.className = "feedback";
      }
      return;
    }

    if (!nameInput.value.trim()) {
      if (feedback) { feedback.textContent = "El nombre completo es obligatorio."; feedback.className = "feedback is-error"; }
      return;
    }
    if (!isClientPhoneValid(phoneInput.value)) {
      if (feedback) { feedback.textContent = "El teléfono es obligatorio y debe ser válido (entre 7 y 15 dígitos; puede iniciar con +)."; feedback.className = "feedback is-error"; }
      return;
    }

    const current = getStoredProfile() || {};
    const updated = {
      ...current,
      name: nameInput.value.trim() || current.name || "",
      phone: phoneInput.value.trim(),
    };
    window.localStorage.setItem("multitour-user-profile", JSON.stringify(updated));

    editing = false;
    nameInput.setAttribute("readonly", "true");
    phoneInput.setAttribute("readonly", "true");
    if (label) label.textContent = "Editar perfil";
    if (feedback) {
      feedback.textContent = "Perfil actualizado en esta simulación.";
      feedback.className = "feedback is-success";
    }
    hydrateStoredUser();
  });
}

function setupPasswordToggle() {
  const toggles = document.querySelectorAll("[data-toggle]");
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const target = document.querySelector(toggle.dataset.toggle);
      if (!target) return;
      const nextType = target.type === "password" ? "text" : "password";
      target.type = nextType;
      toggle.textContent = nextType === "password" ? "Ver" : "Ocultar";
    });
  });
}

// Contraseñas comunes o conocidas como comprometidas (PDR sección 9, A4/D3/E20): lista pequeña
// de demostración que se rechaza en TODOS los flujos de contraseña, aunque cumplan la política.
const COMMON_PASSWORDS = ["12345678", "123456789", "1234567890", "password", "password1", "password1!", "password123", "password123!", "qwerty123", "qwerty123!", "qwertyuiop", "multitour1!", "multitour123", "multitour123!", "admin123", "admin123!", "welcome1", "welcome1!", "abc12345", "abc12345!", "iloveyou1!", "letmein123!", "contraseña1!", "contrasena1!", "colombia2026!", "changeme1!"];
const COMMON_PASSWORD_MESSAGE = "Esa contraseña es muy común o figura como comprometida: elige otra distinta.";

function isCommonPassword(password) {
  return COMMON_PASSWORDS.includes(String(password || "").trim().toLowerCase());
}

function getMvpPasswordPolicyError(password) {
  if (isCommonPassword(password)) return COMMON_PASSWORD_MESSAGE;
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialCharacter = /[^A-Za-z0-9\s]/.test(password);

  if (hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSpecialCharacter) return "";
  return "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.";
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

    const activeRole = document.body.dataset.screen === "platform-login"
      ? "platform-admin"
      : document.querySelector("[data-role-option].is-active")?.dataset.roleOption || "client";

    // Cierre del ingreso: fija la sesión simulada y entra al portal. Con credencial temporal,
    // el cambio de contraseña obligatorio ocurre antes (showOperatorFirstAccessStep).
    let loginSession = () => {};
    const finishLogin = () => {
      loginSession();
      // BUG/UX corregido: el mensaje de exito estaba redactado para el ingreso de plataforma
      // ("...para la operacion de la plataforma"), incluso cuando el perfil activo era
      // Cliente. Ahora el texto depende del perfil realmente seleccionado.
      const successMessage = activeRole === "platform-admin"
        ? themeConfig.feedback.success
        : activeRole === "staff"
          ? "Inicio de sesión simulado (vista de referencia). Ingresando al portal del operador..."
          : "Inicio de sesión simulado (vista de referencia). Ingresando a tu panel de cliente...";
      setFeedback("login", successMessage, "is-success");
      window.setTimeout(() => {
        const nextPath = activeRole === "platform-admin" ? "admin-plataforma.html" : activeRole === "staff" ? "admin-operador.html" : "panel-cliente.html";
        window.location.href = withTheme(nextPath, theme);
      }, 700);
    };

    // Tenant inactivo (PDR sección 9, A6/E26/GAP-06): el acceso del cliente se rechaza.
    if (activeRole === "client") {
      const inactiveTenantBlock = getOperatorLoginInactiveTenantError("client");
      if (inactiveTenantBlock) {
        setFeedback("login", inactiveTenantBlock, "is-error");
        return;
      }
    }

    // Cliente: la cuenta permanece inactiva hasta verificar el correo (CA-024).
    if (activeRole === "client") {
      const stored = getStoredProfile();
      if (stored && String(stored.email || "").trim().toLowerCase() === email.value.trim().toLowerCase() && stored.verified === false) {
        setFeedback("login", "Tu cuenta aún está inactiva: verifica tu correo con el código que te enviamos para poder ingresar.", "is-error");
        const feedbackNode = document.querySelector('[data-feedback="login"]');
        if (feedbackNode) {
          const link = document.createElement("a");
          link.href = withTheme("crear-cuenta.html?verificar=1", theme);
          link.textContent = " Verificar correo";
          feedbackNode.append(link);
        }
        return;
      }
    }

    if (activeRole === "staff") {
      const staffRole = document.querySelector("[data-staff-role-option].is-active")?.dataset.staffRoleOption || "admin";
      // Un usuario registrado por el Administrador del tenant entra con el rol que se le
      // asignó; sin registro, se usa el rol elegido en la pantalla.
      const staffEmail = email.value.trim().toLowerCase();
      const registeredUser = getOperatorCollaboratorsForCurrentTenant().find((c) => String(c.email).toLowerCase() === staffEmail);
      if (registeredUser && registeredUser.active === false) {
        setFeedback("login", "Este usuario está inactivo y no puede autenticarse. Solicita su reactivación a un Administrador del tenant.", "is-error");
        return;
      }
      if (registeredUser && operatorTempCredentialExpired(registeredUser)) {
        setFeedback("login", registeredUser.primary
          ? "La credencial temporal del primer Administrador del tenant venció (72 horas). El Administrador de plataforma debe emitir una nueva credencial temporal."
          : "La credencial temporal de este usuario venció (72 horas). Un Administrador del tenant debe emitir una nueva credencial temporal.", "is-error");
        return;
      }
      const sessionRole = registeredUser ? getOperatorRoleIdByLabel(registeredUser.role) : (OPERATOR_ROLES[staffRole] ? staffRole : "admin");
      const inactiveTenantBlock = getOperatorLoginInactiveTenantError("staff", sessionRole);
      if (inactiveTenantBlock) {
        setFeedback("login", inactiveTenantBlock, "is-error");
        return;
      }
      loginSession = () => {
        if (registeredUser) setOperatorRole(sessionRole, { id: registeredUser.id, name: registeredUser.name, role: sessionRole });
        else setOperatorRole(sessionRole);
      };
      // Primer acceso con credencial temporal vigente: cambio de contraseña obligatorio (A4/D2/D3/E20/G15).
      if (registeredUser && operatorTempCredentialPending(registeredUser)) {
        showOperatorFirstAccessStep(form, registeredUser, () => finishLogin());
        return;
      }
    }

    finishLogin();
  });
}

// ---------------------------------------------------------------------------
// Roles y permisos del tenant (PDR secciones 9 y 15).
//
// Roles base: Administrador del tenant y Colaborador operativo. Roles opcionales por
// tenant: Gerente, Contador y Analista (solo consulta: no registran reservas, pagos,
// gastos ni movimientos de caja, no validan comprobantes y no autorizan devoluciones).
//
// Permisos especiales (se asignan por usuario y la asignación o el retiro quedan
// auditados):
//   - Validar comprobantes: el Administrador del tenant lo tiene por perfil y puede
//     asignarlo a Colaboradores operativos. Gerente, Contador y Analista no lo reciben.
//   - Gestionar caja: abrir, cerrar y reabrir caja (Administrador por perfil).
//   - Gestionar ejecución de salidas: inicio, finalización, novedades y regularización
//     (Administrador por perfil).
//   - Consultar datos sensibles: solo asignable al Administrador del tenant o al
//     Colaborador operativo; ningún rol lo tiene por perfil.
//
// El mockup no tiene backend: roles, usuario activo y asignaciones viven en localStorage.
// ---------------------------------------------------------------------------
const OPERATOR_ROLE_KEY = "multitour-operator-role";
const OPERATOR_CURRENT_USER_KEY = "multitour-operator-current-user";
const OPERATOR_PERMISSIONS_KEY = "multitour-operator-permissions";
const OPERATOR_PERMISSIONS_AUDIT_KEY = "multitour-operator-permissions-audit";

const OPERATOR_PERMISSION_VALIDATE_RECEIPTS = "Validar comprobantes";
const OPERATOR_PERMISSION_MANAGE_CASH = "Gestionar caja";
const OPERATOR_PERMISSION_MANAGE_EXECUTION = "Gestionar ejecución de salidas";
const OPERATOR_PERMISSION_VIEW_SENSITIVE = "Consultar datos sensibles";
const OPERATOR_PERMISSIONS = [
  OPERATOR_PERMISSION_VALIDATE_RECEIPTS,
  OPERATOR_PERMISSION_MANAGE_CASH,
  OPERATOR_PERMISSION_MANAGE_EXECUTION,
  OPERATOR_PERMISSION_VIEW_SENSITIVE,
];

const OPERATOR_ROLES = {
  admin: {
    label: "Administrador del tenant",
    profilePermissions: [
      OPERATOR_PERMISSION_VALIDATE_RECEIPTS,
      OPERATOR_PERMISSION_MANAGE_CASH,
      OPERATOR_PERMISSION_MANAGE_EXECUTION,
    ],
    assignablePermissions: [OPERATOR_PERMISSION_VIEW_SENSITIVE],
    queryOnly: false,
  },
  colaborador: {
    label: "Colaborador operativo",
    profilePermissions: [],
    assignablePermissions: OPERATOR_PERMISSIONS,
    queryOnly: false,
  },
  gerente: { label: "Gerente", profilePermissions: [], assignablePermissions: [], queryOnly: true },
  contador: { label: "Contador", profilePermissions: [], assignablePermissions: [], queryOnly: true },
  analista: { label: "Analista", profilePermissions: [], assignablePermissions: [], queryOnly: true },
};

function readOperatorStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeOperatorStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* Sin localStorage disponible: el cambio solo aplica a la vista actual. */
  }
}

function getOperatorRole() {
  try {
    const stored = localStorage.getItem(OPERATOR_ROLE_KEY);
    return OPERATOR_ROLES[stored] ? stored : "admin";
  } catch {
    return "admin";
  }
}

function setOperatorRole(role, user) {
  try {
    localStorage.setItem(OPERATOR_ROLE_KEY, OPERATOR_ROLES[role] ? role : "admin");
    if (user) localStorage.setItem(OPERATOR_CURRENT_USER_KEY, JSON.stringify(user));
    else localStorage.removeItem(OPERATOR_CURRENT_USER_KEY);
  } catch {
    /* Sin localStorage disponible: el rol solo aplica a la vista actual. */
  }
}

function isOperatorAdmin() {
  return getOperatorRole() === "admin";
}

function isOperatorColaborador() {
  return getOperatorRole() === "colaborador";
}

function isOperatorQueryOnlyRole() {
  return Boolean(OPERATOR_ROLES[getOperatorRole()]?.queryOnly);
}

function getOperatorRoleLabel(role = getOperatorRole()) {
  return (OPERATOR_ROLES[role] || OPERATOR_ROLES.admin).label;
}

function getOperatorRoleIdByLabel(label) {
  return Object.keys(OPERATOR_ROLES).find((id) => OPERATOR_ROLES[id].label === label) || "colaborador";
}

// Usuario activo de la sesión simulada: { id, name, role }. El Administrador usa un id fijo;
// para el resto de roles se toma el usuario registrado más reciente con ese rol y, si no
// existe, un usuario de demostración (las asignaciones de permisos se guardan por id).
function getOperatorCurrentUser() {
  const role = getOperatorRole();
  const stored = readOperatorStorage(OPERATOR_CURRENT_USER_KEY, null);
  if (stored?.id && (!stored.role || stored.role === role)) return { id: stored.id, name: stored.name || getOperatorRoleLabel(role), role };
  if (role === "admin") return { id: "admin-tenant", name: getOperatorRoleLabel(role), role };
  const registered = getOperatorCollaborators()
    .filter((item) => item.tenantId === OPERATOR_CURRENT_TENANT_ID && item.active !== false && getOperatorRoleIdByLabel(item.role) === role)
    .pop();
  if (registered) return { id: registered.id, name: registered.name, role };
  return { id: `${role}-demo`, name: getOperatorRoleLabel(role), role };
}

// Actor que queda registrado en bitácoras: nombre del usuario y rol.
function getOperatorActorLabel() {
  const user = getOperatorCurrentUser();
  const roleLabel = getOperatorRoleLabel(user.role);
  return user.name && user.name !== roleLabel ? `${user.name} (${roleLabel})` : roleLabel;
}

function getOperatorPermissionGrants() {
  return readOperatorStorage(OPERATOR_PERMISSIONS_KEY, {});
}

// ¿Puede el rol recibir el permiso (por perfil o por asignación)? Gerente, Contador y
// Analista no pueden recibir ninguno (PDR sección 9, restricciones base).
function operatorRoleCanHavePermission(role, permission) {
  const config = OPERATOR_ROLES[role];
  if (!config) return false;
  return config.profilePermissions.includes(permission) || config.assignablePermissions.includes(permission);
}

function operatorRoleHasProfilePermission(role, permission) {
  return Boolean(OPERATOR_ROLES[role]?.profilePermissions.includes(permission));
}

function operatorHasPermission(permission, user = getOperatorCurrentUser()) {
  if (!user || !operatorRoleCanHavePermission(user.role, permission)) return false;
  if (operatorRoleHasProfilePermission(user.role, permission)) return true;
  return Boolean(getOperatorPermissionGrants()[user.id]?.[permission]);
}

function getOperatorPermissionAudit(userId) {
  const list = readOperatorStorage(OPERATOR_PERMISSIONS_AUDIT_KEY, []);
  return userId ? list.filter((entry) => entry.userId === userId) : list;
}

// Asigna o retira un permiso especial a un usuario del tenant. Solo el Administrador del
// tenant puede hacerlo y cada cambio queda auditado (usuario, permiso, acción, actor, fecha
// y hora, y motivo opcional).
function setOperatorUserPermission(target, permission, granted, reason = "") {
  if (!isOperatorAdmin()) return { ok: false, error: "Solo el Administrador del tenant puede asignar o retirar permisos." };
  if (!OPERATOR_PERMISSIONS.includes(permission)) return { ok: false, error: "Permiso no reconocido." };
  if (operatorRoleHasProfilePermission(target.role, permission)) return { ok: false, error: `${getOperatorRoleLabel(target.role)} dispone de este permiso por perfil.` };
  if (!operatorRoleCanHavePermission(target.role, permission)) return { ok: false, error: `El rol ${getOperatorRoleLabel(target.role)} no puede recibir el permiso ${permission}.` };
  const grants = getOperatorPermissionGrants();
  const current = Boolean(grants[target.id]?.[permission]);
  if (current === Boolean(granted)) return { ok: true, unchanged: true };
  grants[target.id] = { ...(grants[target.id] || {}), [permission]: Boolean(granted) };
  writeOperatorStorage(OPERATOR_PERMISSIONS_KEY, grants);
  const audit = getOperatorPermissionAudit();
  audit.unshift({
    userId: target.id,
    userName: target.name || target.id,
    permission,
    action: granted ? "Asignado" : "Retirado",
    actor: getOperatorActorLabel(),
    reason: String(reason || "").trim(),
    at: getOperatorNow().toISOString(),
  });
  writeOperatorStorage(OPERATOR_PERMISSIONS_AUDIT_KEY, audit);
  return { ok: true };
}

// Bloquea el acceso directo por URL a pantallas reservadas al Administrador del tenant.
// Sin esto, ocultar el enlace del menú no impediría escribir la URL directamente.
function guardOperatorAdminOnlyScreen(fallbackPath) {
  if (isOperatorAdmin()) return true;
  window.location.href = withTheme(fallbackPath, getTheme());
  return false;
}

function guardOperatorPermissionScreen(permission, fallbackPath) {
  if (operatorHasPermission(permission)) return true;
  window.location.href = withTheme(fallbackPath, getTheme());
  return false;
}

// Aplica el rol activo en CUALQUIER pantalla del operador: actualiza la etiqueta del rol en
// el menú lateral y retira lo que el rol no puede usar:
//   - Descuentos y Colaboradores del menú (solo Administrador del tenant).
//   - [data-role-admin-only]: bloques exclusivos del Administrador del tenant.
//   - [data-requires-permission="<permiso>"]: bloques que exigen un permiso especial.
function setupOperatorRoleChrome() {
  const roleLabel = document.querySelector(".operator-sidebar .operator-role");
  if (roleLabel) roleLabel.textContent = getOperatorRoleLabel();
  if (!isOperatorAdmin()) {
    document.querySelector('.operator-nav [data-route="operatorDiscounts"]')?.remove();
    document.querySelector('.operator-nav [data-route="operatorCollaborators"]')?.remove();
    document.querySelectorAll("[data-role-admin-only]").forEach((el) => el.remove());
  }
  document.querySelectorAll("[data-requires-permission]").forEach((el) => {
    if (!operatorHasPermission(el.dataset.requiresPermission)) el.remove();
  });
  setupOperatorChromeExtras();
}

// Resumen del operador: mismos datos para todos los roles. Para roles distintos del
// Administrador del tenant cambia el texto de bienvenida y se retira el bloque de flujos
// principales (las tarjetas de indicadores ya funcionan como accesos). La tarjeta de pagos
// refleja si el usuario puede validar comprobantes y alerta las revisiones vencidas.
function setupOperatorDashboardRole() {
  if (document.body.dataset.screen !== "operator-admin") return;
  const setText = (selector, value) => { const el = document.querySelector(selector); if (el) el.textContent = String(value); };

  const dashboard = getOperatorReportsDashboard();
  setText("[data-dashboard-created]", dashboard.createdToday);
  setText("[data-dashboard-pending]", dashboard.pendingPayment);
  setText("[data-dashboard-confirmed]", dashboard.confirmed);
  setText("[data-dashboard-confirmed-with-balance]", dashboard.confirmedWithBalance);
  setText("[data-dashboard-cancelled]", dashboard.cancelled);
  setText("[data-dashboard-upcoming]", dashboard.upcomingExecutions);

  const pendingReceipts = getOperatorPendingReceipts();
  const overdueReceipts = pendingReceipts.filter(operatorReceiptOverdue);
  setText("[data-dashboard-pagos-count]", pendingReceipts.length);
  const canValidate = operatorHasPermission(OPERATOR_PERMISSION_VALIDATE_RECEIPTS);
  const overdueNote = canValidate && overdueReceipts.length ? ` · ${overdueReceipts.length} con revisión vencida` : "";
  setText(
    "[data-dashboard-pagos-label]",
    (canValidate ? "Comprobantes por validar" : "Comprobantes en validación (consulta)") + overdueNote,
  );

  // Mismo total que Caja (misma jornada, mismos movimientos): BASE + INGRESOS - PAGOS
  // OPERACIONALES - GASTOS - DEVOLUCIONES.
  setText("[data-dashboard-caja-total]", formatCOP(computeOperatorCashTotals(getOperatorCashDay()).total));

  // Alertas del panel: salidas sin cierre operativo, devoluciones por atender y estado de la caja.
  const seesDepartureAlerts = isOperatorAdmin() || operatorCanManageExecution();
  setText("[data-dashboard-departure-alerts]", getOperatorDepartures().filter((item) => item.pendingRegularization || item.startAlert).length);
  if (!seesDepartureAlerts) document.querySelector("[data-dashboard-departure-alerts]")?.closest(".mt-summary-metric")?.remove();
  setText("[data-dashboard-refund-alerts]", getOperatorRefundRequests().filter((request) => operatorRefundExecutionOverdue(request) || request.status === "Pendiente de autorización").length);
  if (isOperatorQueryOnlyRole()) document.querySelector("[data-dashboard-refund-alerts]")?.closest(".mt-summary-metric")?.remove();
  const dashboardCash = getOperatorCashDay();
  setText("[data-dashboard-cash-state]", isOperatorCashPendingClosure() ? "Pendiente de cierre" : dashboardCash.status === "cerrada" ? "Cerrada" : dashboardCash.status === "sin-apertura" ? "Sin apertura" : dashboardCash.operativeOpen ? "Abierta" : "Abierta (automática)");

  if (!isOperatorAdmin()) {
    setText("[data-dashboard-hero-title]", "Seguimiento comercial y operativo en un solo lugar.");
    setText("[data-dashboard-hero-body]", "Consulta la información de tu tenant: reservas, catálogo, pagos, caja y ejecución.");
    document.querySelector("[data-dashboard-flujos-principales]")?.remove();
  }
}

// Gestión de usuarios internos del tenant (PDR sección 9 y RF-017). Tenant principal de
// validación y demostración ya usado en toda la plataforma (mismo id de getPlatformTenants()).
// El aislamiento por tenant se aplica filtrando siempre por el tenant activo.
const OPERATOR_CURRENT_TENANT_ID = "travesia-natural";
const OPERATOR_CURRENT_TENANT_NAME = "Travesía Natural";
const OPERATOR_COLLABORATOR_ROLE = "Colaborador operativo";
const OPERATOR_ADMIN_ROLE_LABEL = "Administrador del tenant";
const OPERATOR_PRIMARY_ADMIN_ID = "admin-tenant";
const OPERATOR_COLLABORATORS_KEY = "multitour-operator-collaborators";
const OPERATOR_USERS_AUDIT_KEY = "multitour-operator-users-audit";
const OPERATOR_TEMP_CREDENTIAL_MS = 72 * 60 * 60 * 1000;

// Sin datos de demostración quemados: el listado empieza con el primer Administrador del
// tenant (registrado por el Administrador de plataforma al crear el tenant) y los usuarios
// que registre el Administrador del tenant.
function getOperatorCollaborators() {
  return readOperatorStorage(OPERATOR_COLLABORATORS_KEY, []);
}

function setOperatorCollaborators(list) {
  localStorage.setItem(OPERATOR_COLLABORATORS_KEY, JSON.stringify(list));
}

// Primer Administrador del tenant: viene del alta del tenant en la plataforma. Se muestra
// siempre en el equipo para poder aplicar la regla "no dejar al tenant sin Administrador".
function getOperatorPrimaryAdminRecord() {
  const tenant = getPlatformTenants().find((item) => item.id === OPERATOR_CURRENT_TENANT_ID);
  return {
    id: OPERATOR_PRIMARY_ADMIN_ID,
    name: tenant?.adminName || OPERATOR_ADMIN_ROLE_LABEL,
    email: tenant?.adminEmail || "",
    role: OPERATOR_ADMIN_ROLE_LABEL,
    tenantId: OPERATOR_CURRENT_TENANT_ID,
    active: true,
    primary: true,
    createdAt: "2026-08-29T15:32:00.000Z",
    // La credencial temporal del primer Administrador vive en el alta del tenant (plataforma).
    tempCredential: tenant?.tempCredential,
  };
}

function getOperatorCollaboratorsForCurrentTenant() {
  const list = getOperatorCollaborators().filter((c) => c.tenantId === OPERATOR_CURRENT_TENANT_ID)
    .map((c) => (c.id === OPERATOR_PRIMARY_ADMIN_ID ? { ...c, tempCredential: getOperatorPrimaryAdminRecord().tempCredential } : c));
  if (!list.some((c) => c.id === OPERATOR_PRIMARY_ADMIN_ID)) list.unshift(getOperatorPrimaryAdminRecord());
  return list;
}

function upsertOperatorCollaborator(record) {
  const list = getOperatorCollaborators();
  const index = list.findIndex((item) => item.id === record.id);
  if (index === -1) list.push(record); else list[index] = record;
  setOperatorCollaborators(list);
}

function countOperatorActiveAdmins(excludeId = "") {
  return getOperatorCollaboratorsForCurrentTenant().filter((u) => u.active !== false && u.role === OPERATOR_ADMIN_ROLE_LABEL && u.id !== excludeId).length;
}

// Credencial temporal (PDR sección 9, A4/E20/G15): vigencia máxima de 72 horas; en el primer
// acceso el usuario debe establecer su propia contraseña. La contraseña no se persiste.
function buildOperatorTempCredential() {
  const issuedAt = getOperatorNow();
  return {
    issuedAt: issuedAt.toISOString(),
    expiresAt: new Date(issuedAt.getTime() + OPERATOR_TEMP_CREDENTIAL_MS).toISOString(),
    activated: false,
    issuedBy: getOperatorActorLabel(),
  };
}

function operatorTempCredentialExpired(user) {
  const credential = user?.tempCredential;
  return Boolean(credential && !credential.activated && getOperatorNow() > new Date(credential.expiresAt));
}

function describeOperatorTempCredential(user) {
  const credential = user?.tempCredential;
  if (!credential) return "Contraseña propia establecida";
  if (credential.activated) return "Contraseña propia establecida en el primer acceso";
  if (operatorTempCredentialExpired(user)) return `Credencial temporal vencida el ${formatOperatorTenantDateTime(credential.expiresAt)}`;
  return `Credencial temporal vigente hasta el ${formatOperatorTenantDateTime(credential.expiresAt)} (72 h; cambio obligatorio en el primer acceso)`;
}

function getOperatorUsersAudit(userId) {
  const list = readOperatorStorage(OPERATOR_USERS_AUDIT_KEY, []);
  return userId ? list.filter((entry) => entry.userId === userId) : list;
}

function addOperatorUserAudit(user, action, reason = "") {
  const list = getOperatorUsersAudit();
  list.unshift({
    userId: user.id,
    userName: user.name,
    userEmail: user.email,
    role: user.role,
    action,
    actor: getOperatorActorLabel(),
    reason: String(reason || "").trim(),
    at: getOperatorNow().toISOString(),
  });
  writeOperatorStorage(OPERATOR_USERS_AUDIT_KEY, list);
}

// Inactivar o reactivar un usuario interno (RF-017, GAP-10): solo el Administrador del tenant,
// con motivo obligatorio y trazabilidad de responsable, fecha y hora. No elimina el histórico.
// No permite inactivar al último Administrador del tenant activo.
function setOperatorUserActive(user, active, reason = "") {
  if (!isOperatorAdmin()) return { ok: false, error: "Solo el Administrador del tenant gestiona usuarios internos." };
  const cleanReason = String(reason || "").trim();
  if (!cleanReason) return { ok: false, error: `Registra el motivo de la ${active ? "reactivación" : "inactivación"} para conservar la trazabilidad.` };
  if (!active && user.role === OPERATOR_ADMIN_ROLE_LABEL && countOperatorActiveAdmins(user.id) === 0) {
    return { ok: false, error: "No es posible inactivar al último Administrador del tenant activo: el tenant quedaría sin ninguna cuenta administrativa disponible." };
  }
  const now = getOperatorNow().toISOString();
  upsertOperatorCollaborator({ ...user, active, statusChangedAt: now, statusChangedBy: getOperatorActorLabel(), statusReason: cleanReason });
  addOperatorUserAudit(user, active ? "Reactivado" : "Inactivado", cleanReason);
  return { ok: true };
}

// Emite una nueva credencial temporal (invalida la anterior e inicia otro periodo de 72 horas).
function issueOperatorUserTempCredential(user, password, confirmation) {
  if (!isOperatorAdmin()) return { ok: false, error: "Solo el Administrador del tenant emite credenciales temporales a los usuarios internos." };
  if (user.active === false) return { ok: false, error: "El usuario está inactivo: reactívalo antes de emitir una nueva credencial." };
  if (!password || !confirmation) return { ok: false, error: "Ingresa la nueva contraseña temporal y su confirmación." };
  const policyError = getMvpPasswordPolicyError(password);
  if (policyError) return { ok: false, error: policyError };
  if (password !== confirmation) return { ok: false, error: "La contraseña temporal y su confirmación deben coincidir." };
  upsertOperatorCollaborator({ ...user, tempCredential: buildOperatorTempCredential() });
  addOperatorUserAudit(user, "Credencial temporal emitida", "Nueva credencial de 72 horas; invalida cualquier credencial temporal anterior.");
  return { ok: true };
}

function describeOperatorUserPermissions(user) {
  const role = getOperatorRoleIdByLabel(user.role);
  const granted = OPERATOR_PERMISSIONS.filter((permission) => operatorHasPermission(permission, { id: user.id, role }));
  return granted.length ? granted.join(", ") : "Sin permisos especiales";
}

function operatorUserStatusMarkup(user) {
  return user.active === false
    ? '<span class="operator-status is-cancelled">Inactivo</span>'
    : '<span class="operator-status is-confirmed">Activo</span>';
}

function setupOperatorCollaborators() {
  if (document.body.dataset.screen !== "operator-collaborators") return;
  if (!guardOperatorAdminOnlyScreen("admin-operador.html")) return;

  const list = document.querySelector("[data-collaborators-list]");
  const emptyNote = document.querySelector("[data-collaborators-empty]");
  const wrap = document.querySelector("[data-collaborators-wrap]");
  const filter = document.querySelector("[data-collaborators-filter]");
  const summary = document.querySelector("[data-collaborators-summary]");
  const render = () => {
    const all = getOperatorCollaboratorsForCurrentTenant();
    const mode = filter?.value || "todos";
    const collaborators = all.filter((c) => mode === "todos" || (mode === "activos" ? c.active !== false : c.active === false));
    if (summary) {
      const activeCount = all.filter((c) => c.active !== false).length;
      const adminCount = countOperatorActiveAdmins();
      summary.textContent = `${activeCount} usuario${activeCount === 1 ? "" : "s"} activo${activeCount === 1 ? "" : "s"} · ${adminCount} Administrador${adminCount === 1 ? "" : "es"} del tenant activo${adminCount === 1 ? "" : "s"} · ${all.length - activeCount} inactivo${all.length - activeCount === 1 ? "" : "s"}`;
    }
    if (emptyNote) emptyNote.hidden = collaborators.length > 0;
    if (wrap) wrap.hidden = collaborators.length === 0;
    if (list) {
      list.innerHTML = collaborators
        .map((c) => {
          const detailHref = withTheme(`admin-detalle-colaborador.html?id=${encodeURIComponent(c.id)}`, getTheme());
          return `<tr><td><strong>${escapeHtml(c.name)}</strong></td><td>${escapeHtml(c.email)}</td><td>${escapeHtml(c.role)}<br><small>${escapeHtml(describeOperatorUserPermissions(c))}</small></td><td>${operatorUserStatusMarkup(c)}</td><td><a href="${detailHref}">Ver detalle</a></td></tr>`;
        })
        .join("");
    }
  };
  filter?.addEventListener("change", render);
  render();
  setupOperatorRegionalSettings();
}

// RF-017: nombre completo, correo electrónico, contraseña inicial (temporal, 72 h) y
// confirmación. El rol se elige entre los roles del tenant (Colaborador operativo por defecto) y
// el tenant se asocia automáticamente al operador activo. El correo es único por tenant, incluso
// entre usuarios inactivos. La contraseña se valida pero no se persiste.
function setupOperatorRegisterCollaborator() {
  if (document.body.dataset.screen !== "operator-register-collaborator") return;
  if (!guardOperatorAdminOnlyScreen("admin-operador.html")) return;

  const tenantNameNode = document.querySelector("[data-collaborator-tenant-name]");
  if (tenantNameNode) tenantNameNode.textContent = OPERATOR_CURRENT_TENANT_NAME;

  const form = document.querySelector("[data-register-collaborator-form]");
  const feedback = document.querySelector("[data-register-collaborator-feedback]");
  const reactivateLink = document.querySelector("[data-register-collaborator-reactivate]");
  const roleSelect = form?.querySelector("[name=\"role\"]");
  const roleHint = document.querySelector("[data-register-role-hint]");
  const ROLE_HINTS = {
    "Administrador del tenant": "Administrador adicional: control general del tenant. Dispone por perfil de Validar comprobantes, Gestionar caja y Gestionar ejecución de salidas.",
    "Colaborador operativo": "Opera reservas, seguimiento, caja y gastos. Sin permisos especiales hasta que un Administrador del tenant se los asigne.",
    Gerente: "Rol opcional de solo consulta. No puede recibir permisos especiales.",
    Contador: "Rol opcional de solo consulta. No puede recibir permisos especiales.",
    Analista: "Rol opcional de solo consulta. No puede recibir permisos especiales.",
  };
  if (roleSelect && !roleSelect.options.length) {
    // Gerente, Contador y Analista solo se ofrecen si el tenant los habilitó (sección 15 y 24.1).
    const order = ["colaborador", "admin", "gerente", "contador", "analista"].filter((id) => !OPTIONAL_OPERATOR_ROLE_IDS.includes(id) || isOperatorOptionalRoleEnabled(id));
    roleSelect.innerHTML = order.map((id) => `<option value="${escapeHtml(OPERATOR_ROLES[id].label)}">${escapeHtml(id === "admin" ? "Administrador del tenant (adicional)" : OPERATOR_ROLES[id].label)}</option>`).join("");
  }
  const syncRoleHint = () => { if (roleHint && roleSelect) roleHint.textContent = ROLE_HINTS[roleSelect.value] || ""; };
  roleSelect?.addEventListener("change", syncRoleHint);
  syncRoleHint();

  const showError = (message) => {
    if (feedback) { feedback.textContent = message; feedback.classList.remove("is-valid"); }
  };
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (reactivateLink) reactivateLink.hidden = true;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const initialPassword = String(data.get("initialPassword") || "");
    const confirmPassword = String(data.get("confirmPassword") || "");
    const requestedRole = String(data.get("role") || OPERATOR_COLLABORATOR_ROLE).trim();
    const role = Object.values(OPERATOR_ROLES).some((config) => config.label === requestedRole) ? requestedRole : OPERATOR_COLLABORATOR_ROLE;
    const roleId = getOperatorRoleIdByLabel(role);
    if (OPTIONAL_OPERATOR_ROLE_IDS.includes(roleId) && !isOperatorOptionalRoleEnabled(roleId)) {
      showError(`El rol ${role} no está habilitado para este tenant. Habilítalo primero en Colaboradores > Roles opcionales del tenant.`);
      return;
    }

    if (!name || !email || !initialPassword || !confirmPassword) {
      showError("Completa el nombre, el correo y la contraseña del usuario.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError("Ingresa un correo electrónico válido.");
      return;
    }
    const passwordPolicyError = getMvpPasswordPolicyError(initialPassword);
    if (passwordPolicyError) {
      showError(passwordPolicyError);
      return;
    }
    if (initialPassword !== confirmPassword) {
      showError("La contraseña inicial y su confirmación deben coincidir.");
      return;
    }
    const duplicated = getOperatorCollaboratorsForCurrentTenant().find((c) => String(c.email).toLowerCase() === email.toLowerCase());
    if (duplicated) {
      showError(duplicated.active === false
        ? "Ya existe un usuario inactivo con ese correo en este tenant. El registro existente puede reactivarse; no se crea un segundo registro."
        : "Ya existe un usuario con ese correo en este tenant.");
      if (reactivateLink) {
        reactivateLink.href = withTheme(`admin-detalle-colaborador.html?id=${encodeURIComponent(duplicated.id)}`, getTheme());
        reactivateLink.textContent = duplicated.active === false ? "Ir al usuario inactivo para reactivarlo" : "Ver el usuario existente";
        reactivateLink.hidden = false;
      }
      return;
    }

    const record = {
      id: `colaborador-${Date.now()}`,
      name,
      email,
      role,
      tenantId: OPERATOR_CURRENT_TENANT_ID,
      active: true,
      createdAt: getOperatorNow().toISOString(),
      createdBy: getOperatorActorLabel(),
      tempCredential: buildOperatorTempCredential(),
    };
    upsertOperatorCollaborator(record);
    addOperatorUserAudit(record, "Registrado", `Rol asignado: ${role}. Credencial temporal de 72 horas.`);
    if (feedback) { feedback.textContent = "Usuario registrado correctamente. Su contraseña inicial es temporal: vence en 72 horas y debe cambiarse en el primer acceso."; feedback.classList.add("is-valid"); }
    window.setTimeout(() => { window.location.href = withTheme("admin-colaboradores.html", getTheme()); }, 900);
  });
}

// Panel de permisos especiales del detalle de un usuario. Usa el contenedor
// [data-collaborator-permissions] si la pantalla lo define; si no, lo agrega al final.
function renderOperatorCollaboratorPermissions(collaborator, anchor) {
  const role = getOperatorRoleIdByLabel(collaborator.role);
  const user = { id: collaborator.id, name: collaborator.name, role };
  let panel = document.querySelector("[data-collaborator-permissions]");
  if (!panel) {
    panel = document.createElement("section");
    panel.className = "operator-panel";
    panel.dataset.collaboratorPermissions = "";
    anchor?.after(panel);
  }
  const rows = OPERATOR_PERMISSIONS.map((permission) => {
    const byProfile = operatorRoleHasProfilePermission(role, permission);
    const assignable = operatorRoleCanHavePermission(role, permission);
    const enabled = operatorHasPermission(permission, user);
    const state = byProfile ? "Por perfil" : enabled ? "Asignado" : assignable ? "No asignado" : "No aplica al rol";
    const action = byProfile || !assignable
      ? ""
      : `<button class="operator-outline" type="button" data-permission-toggle="${escapeHtml(permission)}" data-permission-granted="${enabled ? "true" : "false"}">${enabled ? "Retirar" : "Asignar"}</button>`;
    return `<tr><td><strong>${escapeHtml(permission)}</strong></td><td>${escapeHtml(state)}</td><td>${action}</td></tr>`;
  }).join("");
  const audit = getOperatorPermissionAudit(collaborator.id);
  const auditRows = audit.length
    ? audit.map((entry) => `<tr><td>${escapeHtml(formatOperatorTenantDateTime(entry.at))}</td><td>${escapeHtml(entry.permission)}</td><td>${escapeHtml(entry.action)}</td><td>${escapeHtml(entry.actor)}</td><td>${escapeHtml(entry.reason || "—")}</td></tr>`).join("")
    : '<tr><td colspan="5">Sin asignaciones ni retiros registrados.</td></tr>';
  const readOnlyRole = OPERATOR_ROLES[role]?.queryOnly;
  panel.innerHTML = '<p class="operator-eyebrow">Permisos especiales</p><h2>Permisos de este usuario</h2>'
    + (readOnlyRole ? `<p class="operator-copy">El rol ${escapeHtml(collaborator.role)} es de solo consulta y no puede recibir permisos especiales (PDR sección 9).</p>` : "")
    + '<div class="operator-table-wrap"><table class="operator-table"><thead><tr><th>Permiso</th><th>Estado</th><th>Acción</th></tr></thead><tbody>' + rows + "</tbody></table></div>"
    + '<label class="operator-form-wide">Motivo de la asignación o retiro (opcional)<input type="text" data-permission-reason placeholder="Motivo para la bitácora" /></label>'
    + '<p class="operator-form-feedback" data-permission-feedback></p>'
    + '<p class="operator-eyebrow">Auditoría de permisos</p>'
    + '<div class="operator-table-wrap"><table class="operator-table"><thead><tr><th>Fecha y hora</th><th>Permiso</th><th>Acción</th><th>Responsable</th><th>Motivo</th></tr></thead><tbody>' + auditRows + "</tbody></table></div>";
  panel.querySelectorAll("[data-permission-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const reason = panel.querySelector("[data-permission-reason]")?.value || "";
      const result = setOperatorUserPermission(user, button.dataset.permissionToggle, button.dataset.permissionGranted !== "true", reason);
      if (!result.ok) {
        const feedback = panel.querySelector("[data-permission-feedback]");
        if (feedback) feedback.textContent = result.error;
        return;
      }
      renderOperatorCollaboratorPermissions(collaborator, anchor);
    });
  });
}

function setupOperatorCollaboratorDetail() {
  if (document.body.dataset.screen !== "operator-collaborator-detail") return;
  if (!guardOperatorAdminOnlyScreen("admin-operador.html")) return;

  const id = new URLSearchParams(window.location.search).get("id") || "";
  const foundPanel = document.querySelector("[data-collaborator-detail-found]");
  const notFoundNote = document.querySelector("[data-collaborator-not-found]");
  const setText = (selector, value) => { const el = document.querySelector(selector); if (el) el.textContent = value; };
  const find = () => getOperatorCollaboratorsForCurrentTenant().find((c) => c.id === id);
  if (!find()) {
    if (foundPanel) foundPanel.hidden = true;
    if (notFoundNote) notFoundNote.hidden = false;
    return;
  }
  if (foundPanel) foundPanel.hidden = false;
  if (notFoundNote) notFoundNote.hidden = true;

  const statusFeedback = document.querySelector("[data-collaborator-status-feedback]");
  const credentialFeedback = document.querySelector("[data-collaborator-credential-feedback]");
  const render = () => {
    const collaborator = find();
    const inactive = collaborator.active === false;
    setText("[data-collaborator-name]", collaborator.name);
    setText("[data-collaborator-name-field]", collaborator.name);
    setText("[data-collaborator-email]", collaborator.email);
    setText("[data-collaborator-role]", collaborator.role + (collaborator.primary ? " (primer Administrador del tenant)" : ""));
    setText("[data-collaborator-tenant]", OPERATOR_CURRENT_TENANT_NAME);
    setText("[data-collaborator-created-at]", formatOperatorTenantDateTime(collaborator.createdAt));
    setText("[data-collaborator-credential]", describeOperatorTempCredential(collaborator));
    const statusNode = document.querySelector("[data-collaborator-status]");
    if (statusNode) statusNode.innerHTML = operatorUserStatusMarkup(collaborator);
    setText("[data-collaborator-status-meta]", collaborator.statusChangedAt
      ? `${inactive ? "Inactivado" : "Reactivado"} por ${collaborator.statusChangedBy} el ${formatOperatorTenantDateTime(collaborator.statusChangedAt)}. Motivo: ${collaborator.statusReason}`
      : "Sin cambios de estado registrados.");
    setText("[data-collaborator-status-heading]", inactive ? "Reactivar usuario" : "Inactivar usuario");
    setText("[data-collaborator-status-copy]", inactive
      ? "La reactivación restaura el acceso del registro existente (no se crea otro) y queda registrada con responsable, fecha, hora y motivo."
      : "Un usuario inactivo no puede autenticarse ni ejecutar operaciones. El histórico se conserva y la inactivación queda registrada con responsable, fecha, hora y motivo.");
    setText("[data-collaborator-status-label]", inactive ? "Motivo de la reactivación" : "Motivo de la inactivación");
    const submit = document.querySelector("[data-collaborator-status-submit]");
    const isLastAdmin = !inactive && collaborator.role === OPERATOR_ADMIN_ROLE_LABEL && countOperatorActiveAdmins(collaborator.id) === 0;
    if (submit) {
      submit.textContent = inactive ? "Reactivar usuario" : "Inactivar usuario";
      submit.className = inactive ? "operator-primary" : "operator-outline";
      submit.disabled = isLastAdmin;
    }
    const lastAdminNote = document.querySelector("[data-collaborator-last-admin-note]");
    if (lastAdminNote) lastAdminNote.hidden = !isLastAdmin;
    const credentialPanel = document.querySelector("[data-collaborator-credential-panel]");
    if (credentialPanel) credentialPanel.hidden = inactive;
    const historyBody = document.querySelector("[data-collaborator-history]");
    if (historyBody) {
      const history = getOperatorUsersAudit(collaborator.id);
      historyBody.innerHTML = history.length
        ? history.map((entry) => `<tr><td>${escapeHtml(formatOperatorTenantDateTime(entry.at))}</td><td>${escapeHtml(entry.action)}</td><td>${escapeHtml(entry.actor)}</td><td>${escapeHtml(entry.reason || "—")}</td></tr>`).join("")
        : '<tr><td colspan="4">Sin eventos registrados para este usuario.</td></tr>';
    }
    renderOperatorCollaboratorPermissions(collaborator, foundPanel?.querySelector(".operator-panel") || foundPanel);
  };
  render();

  document.querySelector("[data-collaborator-status-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const collaborator = find();
    const reason = String(new FormData(event.currentTarget).get("reason") || "");
    const result = setOperatorUserActive(collaborator, collaborator.active === false, reason);
    if (statusFeedback) {
      statusFeedback.textContent = result.ok ? "Estado actualizado y registrado en la bitácora." : result.error;
      statusFeedback.classList.toggle("is-valid", result.ok);
    }
    if (result.ok) { event.currentTarget.reset(); render(); }
  });

  document.querySelector("[data-collaborator-credential-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const result = issueOperatorUserTempCredential(find(), String(data.get("password") || ""), String(data.get("confirmation") || ""));
    if (credentialFeedback) {
      credentialFeedback.textContent = result.ok ? "Nueva credencial temporal emitida: vence en 72 horas, invalida la anterior y debe cambiarse en el primer acceso." : result.error;
      credentialFeedback.classList.toggle("is-valid", result.ok);
    }
    if (result.ok) { event.currentTarget.reset(); render(); }
  });
}

// Zona horaria y país del tenant (PDR sección 9, G14/R2/FINAL-007): los define el Administrador
// de plataforma al crear el tenant y después los modifica el Administrador del tenant, con efecto
// solo prospectivo y auditoría. El cambio de zona horaria no se activa con una caja Abierta o
// Pendiente de cierre.
function setupOperatorRegionalSettings() {
  const panel = document.querySelector("[data-regional-settings]");
  if (!panel) return;
  const countrySelect = panel.querySelector("[data-regional-country]");
  const zoneSelect = panel.querySelector("[data-regional-timezone]");
  const reasonInput = panel.querySelector("[data-regional-reason]");
  const feedback = panel.querySelector("[data-regional-feedback]");
  const historyBody = panel.querySelector("[data-regional-history]");
  const current = () => getPlatformTenants().find((item) => item.id === OPERATOR_CURRENT_TENANT_ID) || {};
  const fillZones = (country, selected) => {
    // La zona vigente siempre es elegible (permite cambiar solo el país sin tocar la zona horaria).
    const zones = [...new Set([current().timezone || "America/Bogota", ...(PLATFORM_COUNTRY_OPTIONS.find((item) => item.country === country) || PLATFORM_COUNTRY_OPTIONS[0]).zones])];
    zoneSelect.innerHTML = zones.map((zone) => `<option value="${escapeHtml(zone)}">${escapeHtml(zone)}${zone === current().timezone ? " (vigente)" : ""}</option>`).join("");
    if (zones.includes(selected)) zoneSelect.value = selected;
  };
  const render = () => {
    const tenant = current();
    countrySelect.innerHTML = PLATFORM_COUNTRY_OPTIONS.map((item) => `<option value="${escapeHtml(item.country)}">${escapeHtml(item.country)}</option>`).join("");
    countrySelect.value = tenant.country || "Colombia";
    fillZones(countrySelect.value, tenant.timezone || "America/Bogota");
    const history = getOperatorTenantRegionAudit(OPERATOR_CURRENT_TENANT_ID);
    if (historyBody) {
      historyBody.innerHTML = history.length
        ? history.map((entry) => `<tr><td>${escapeHtml(formatOperatorTenantDateTime(entry.at))}</td><td>${escapeHtml(entry.field)}</td><td>${escapeHtml(entry.previous)}</td><td>${escapeHtml(entry.next)}</td><td>${escapeHtml(entry.actor)}</td><td>${escapeHtml(entry.reason || "—")}</td></tr>`).join("")
        : '<tr><td colspan="6">Sin cambios de país o zona horaria registrados.</td></tr>';
    }
  };
  render();
  countrySelect.addEventListener("change", () => fillZones(countrySelect.value, ""));
  panel.querySelector("[data-regional-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = setOperatorTenantRegion({ country: countrySelect.value, timezone: zoneSelect.value, reason: reasonInput?.value || "" });
    if (feedback) {
      feedback.textContent = result.ok
        ? (result.unchanged ? "No hay cambios por registrar." : "Cambio registrado con efecto prospectivo: no modifica históricos ni recalcula plazos ya iniciados.")
        : result.error;
      feedback.classList.toggle("is-valid", Boolean(result.ok));
    }
    if (result.ok) { if (reasonInput) reasonInput.value = ""; render(); }
  });
}

function setupRoleSwitch() {
  const options = document.querySelectorAll("[data-role-option]");
  if (!options.length) return;

  const clientSignup = document.querySelector("[data-client-signup]");
  const staffAccess = document.querySelector("[data-staff-access]");
  const loginSubtitle = document.querySelector("[data-login-subtitle]");
  const staffRoleSwitch = document.querySelector("[data-staff-role-switch]");

  const syncSignupAccess = (role) => {
    const isStaff = role === "staff";
    if (clientSignup) clientSignup.hidden = isStaff;
    if (staffAccess) staffAccess.hidden = !isStaff;
    if (staffRoleSwitch) staffRoleSwitch.hidden = !isStaff;
    if (loginSubtitle) loginSubtitle.textContent = isStaff
      ? "Ingresa a tu cuenta para gestionar la operación."
      : "Ingresa a tu cuenta del operador para gestionar tus viajes.";
  };

  options.forEach((option) => {
    option.addEventListener("click", () => {
      options.forEach((node) => {
        node.classList.remove("is-active");
        node.setAttribute("aria-pressed", "false");
      });

      option.classList.add("is-active");
      option.setAttribute("aria-pressed", "true");
      syncSignupAccess(option.dataset.roleOption);
    });
  });

  syncSignupAccess(document.querySelector("[data-role-option].is-active")?.dataset.roleOption);

  // Roles base del PDR dentro del equipo del operador (seccion 14): Administrador y
  // Colaborador operativo. No se inventa un rol nuevo.
  const staffOptions = document.querySelectorAll("[data-staff-role-option]");
  staffOptions.forEach((option) => {
    option.addEventListener("click", () => {
      staffOptions.forEach((node) => {
        node.classList.remove("is-active");
        node.setAttribute("aria-pressed", "false");
      });
      option.classList.add("is-active");
      option.setAttribute("aria-pressed", "true");
    });
  });
}

// Recuperación de contraseña del cliente (RF-014): correo electrónico, código de recuperación
// (vence en 30 minutos y solo puede usarse una vez), nueva contraseña y confirmación. Se hace
// dentro del tenant ya determinado. En el mockup el "correo" se simula con un bloque en pantalla.
const CLIENT_RECOVERY_CODE_MINUTES = 30;

function isClientEmailValid(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(value || "").trim());
}

function isClientPhoneValid(value) {
  const compact = String(value || "").replace(/[\s().-]/g, "");
  return /^\+?\d{7,15}$/.test(compact);
}

function setupAccountRecovery(theme) {
  const recoverForm = document.querySelector("[data-recover-form]");
  if (recoverForm) {
    const email = recoverForm.querySelector("[name=\"email\"]");
    const feedback = recoverForm.querySelector("[data-recover-feedback]");
    const simulateMail = recoverForm.querySelector("[data-recover-simulate]");
    const simulateCode = recoverForm.querySelector("[data-recover-code]");
    const simulateLink = recoverForm.querySelector("[data-recover-continue]");
    recoverForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = email?.value.trim().toLowerCase() || "";
      if (!isClientEmailValid(value)) {
        if (feedback) feedback.textContent = "Ingresa un correo electrónico válido para continuar.";
        return;
      }
      const tenant = resolveClientTenant();
      const code = String(Math.floor(100000 + Math.random() * 900000));
      clientStorageSet(CLIENT_RECOVERY_STORAGE_KEY, {
        email: value,
        tenantId: tenant.id,
        code,
        expiresAt: Date.now() + CLIENT_RECOVERY_CODE_MINUTES * 60 * 1000,
        used: false,
      });
      // No se revela si el correo existe: el mensaje es el mismo exista o no la cuenta.
      if (feedback) feedback.textContent = `Si existe una cuenta con ese correo en ${tenant.name}, enviamos un código de recuperación que vence en ${CLIENT_RECOVERY_CODE_MINUTES} minutos y solo puede usarse una vez.`;
      if (simulateCode) simulateCode.textContent = code;
      if (simulateMail) simulateMail.hidden = false;
      if (simulateLink) simulateLink.setAttribute("href", `${withTheme("nueva-contrasena.html", theme)}&email=${encodeURIComponent(value)}`);
    });
  }

  const resetForm = document.querySelector("[data-reset-form]");
  if (!resetForm) return;

  const params = new URLSearchParams(window.location.search);
  const state = params.get("estado");
  const feedback = resetForm.querySelector("[data-reset-feedback]") || document.querySelector("[data-reset-feedback]");
  const loginLink = resetForm.querySelector("[data-reset-login]");
  const requestNewLink = document.querySelector("[data-reset-request-new]");
  const emailInput = resetForm.querySelector("[name=\"email\"]");
  const codeInput = resetForm.querySelector("[name=\"code\"]");
  const password = resetForm.querySelector("[name=\"password\"]");
  const confirm = resetForm.querySelector("[name=\"password-confirmation\"]");
  const say = (message, ok = false) => {
    if (!feedback) return;
    feedback.textContent = message;
    feedback.className = ok ? "feedback is-success" : "feedback is-error";
  };
  if (emailInput && params.get("email")) emailInput.value = params.get("email");

  if (state === "vencido" || state === "usado") {
    say(state === "vencido"
      ? "Este código de recuperación venció. Solicita uno nuevo para continuar."
      : "Este código de recuperación ya fue usado. Solicita uno nuevo para continuar.");
    resetForm.hidden = true;
    if (requestNewLink) requestNewLink.hidden = false;
    return;
  }

  resetForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValue = emailInput?.value.trim().toLowerCase() || "";
    const codeValue = codeInput?.value.trim() || "";
    const value = password?.value.trim() || "";
    const confirmation = confirm?.value.trim() || "";
    if (!emailValue || !codeValue || !value || !confirmation) return say("Completa el correo, el código de recuperación, la nueva contraseña y su confirmación.");
    if (!isClientEmailValid(emailValue)) return say("Ingresa un correo electrónico válido.");

    const recovery = clientStorageGet(CLIENT_RECOVERY_STORAGE_KEY, null);
    if (!recovery || recovery.email !== emailValue || recovery.tenantId !== resolveClientTenant().id) {
      return say("El código no es válido para ese correo y operador. Solicita un código de recuperación.");
    }
    if (recovery.used) {
      if (requestNewLink) requestNewLink.hidden = false;
      return say("Este código ya fue usado. Solicita uno nuevo para continuar.");
    }
    if (Date.now() > recovery.expiresAt) {
      if (requestNewLink) requestNewLink.hidden = false;
      return say("Este código venció (vigencia de 30 minutos). Solicita uno nuevo para continuar.");
    }
    if (recovery.code !== codeValue) return say("El código ingresado no es correcto.");
    if (value !== confirmation) return say("La nueva contraseña y su confirmación no coinciden.");
    const policyError = getMvpPasswordPolicyError(value);
    if (policyError) return say(policyError);

    clientStorageSet(CLIENT_RECOVERY_STORAGE_KEY, { ...recovery, used: true, usedAt: Date.now() });
    say("Tu contraseña fue actualizada y el código quedó inutilizado. Se cerraron las sesiones activas; inicia sesión con tu nueva contraseña.", true);
    const submitButton = resetForm.querySelector("button[type=submit]");
    if (submitButton) submitButton.hidden = true;
    if (loginLink) loginLink.hidden = false;
  });
}

// Crear cuenta del cliente: nombre, apellido, correo, teléfono (obligatorio y validado),
// contraseña y confirmación (RF-014). La cuenta queda INACTIVA hasta verificar el correo con un
// código (verificación obligatoria: CA-024, Q5). Se crea dentro del tenant ya determinado.
function setupSignupForm(theme) {
  const form = document.querySelector('[data-form="signup"]');
  if (!form) return;

  const verifyPanel = document.querySelector("[data-signup-verify]");
  const verifyForm = document.querySelector("[data-signup-verify-form]");
  const verifyCodeNode = document.querySelector("[data-signup-verify-code]");
  const verifyEmailNode = document.querySelector("[data-signup-verify-email]");
  const verifyTenantNode = document.querySelector("[data-signup-verify-tenant]");
  const resendButton = document.querySelector("[data-signup-resend]");
  const verifyInput = document.querySelector("[data-signup-verify-input]");

  const newVerificationCode = () => String(Math.floor(100000 + Math.random() * 900000));

  const showVerification = (verification) => {
    form.hidden = true;
    document.querySelector("[data-signup-form-copy]")?.setAttribute("hidden", "");
    if (verifyPanel) verifyPanel.hidden = false;
    if (verifyCodeNode) verifyCodeNode.textContent = verification.code;
    if (verifyEmailNode) verifyEmailNode.textContent = verification.email;
    if (verifyTenantNode) verifyTenantNode.textContent = verification.tenantName;
    setFeedback("signup", "", "");
  };

  const pending = clientStorageGet(CLIENT_VERIFICATION_STORAGE_KEY, null);
  if (pending && !pending.verified && new URLSearchParams(window.location.search).get("verificar") === "1") showVerification(pending);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = form.querySelector("#signup-first-name");
    const lastName = form.querySelector("#signup-last-name");
    const email = form.querySelector("#signup-email");
    const phone = form.querySelector("#signup-phone");
    const password = form.querySelector("#signup-password");
    const confirm = form.querySelector("#signup-confirm");
    const value = password.value.trim();
    const emailValue = email.value.trim().toLowerCase();

    if (!firstName.value.trim() || !lastName.value.trim() || !emailValue || !phone.value.trim() || !value || !confirm.value.trim()) {
      setFeedback("signup", "Completa todos los campos obligatorios, incluido el teléfono, para continuar.", "is-error");
      return;
    }

    if (!isClientEmailValid(emailValue)) {
      setFeedback("signup", "Ingresa un correo electrónico válido.", "is-error");
      return;
    }

    if (!isClientPhoneValid(phone.value)) {
      setFeedback("signup", "Ingresa un número de teléfono válido (solo dígitos, entre 7 y 15; puede iniciar con +). Ej. 300 000 0000.", "is-error");
      return;
    }

    if (value !== confirm.value.trim()) {
      setFeedback("signup", "Las contraseñas no coinciden.", "is-error");
      return;
    }

    const passwordPolicyError = getMvpPasswordPolicyError(value);
    if (passwordPolicyError) {
      setFeedback("signup", passwordPolicyError, "is-error");
      return;
    }

    const tenant = resolveClientTenant();
    const existing = getStoredProfile();
    if (existing && String(existing.email || "").toLowerCase() === emailValue && existing.tenantId === tenant.id) {
      setFeedback("signup", `Ya existe una cuenta con ese correo en ${tenant.name}. Inicia sesión o recupera tu contraseña.`, "is-error");
      return;
    }

    const profile = {
      name: `${firstName.value.trim()} ${lastName.value.trim()}`,
      email: email.value.trim(),
      phone: phone.value.trim(),
      tenantId: tenant.id,
      tenantName: tenant.name,
      verified: false,
      status: "Pendiente de verificación",
      savedAt: getOperatorNow().toLocaleDateString("es-CO"),
    };
    window.localStorage.setItem("multitour-user-profile", JSON.stringify(profile));

    const verification = { email: emailValue, tenantId: tenant.id, tenantName: tenant.name, code: newVerificationCode(), verified: false };
    clientStorageSet(CLIENT_VERIFICATION_STORAGE_KEY, verification);
    showVerification(verification);
  });

  resendButton?.addEventListener("click", () => {
    const current = clientStorageGet(CLIENT_VERIFICATION_STORAGE_KEY, null);
    if (!current) return;
    const next = { ...current, code: newVerificationCode() };
    clientStorageSet(CLIENT_VERIFICATION_STORAGE_KEY, next);
    if (verifyCodeNode) verifyCodeNode.textContent = next.code;
    setFeedback("signup-verify", "Enviamos un nuevo código; el anterior ya no es válido.", "is-success");
  });

  verifyForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const current = clientStorageGet(CLIENT_VERIFICATION_STORAGE_KEY, null);
    const entered = verifyInput?.value.trim() || "";
    if (!current) {
      setFeedback("signup-verify", "No hay una verificación pendiente. Crea tu cuenta nuevamente.", "is-error");
      return;
    }
    if (!entered) {
      setFeedback("signup-verify", "Ingresa el código de verificación que enviamos a tu correo.", "is-error");
      return;
    }
    if (entered !== current.code) {
      setFeedback("signup-verify", "El código ingresado no es correcto.", "is-error");
      return;
    }
    clientStorageSet(CLIENT_VERIFICATION_STORAGE_KEY, { ...current, verified: true });
    const profile = getStoredProfile();
    if (profile) window.localStorage.setItem("multitour-user-profile", JSON.stringify({ ...profile, verified: true, status: "Activa" }));
    setFeedback("signup-verify", "Correo verificado. Tu cuenta quedó activa; ya puedes iniciar sesión.", "is-success");
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

    const passwordPolicyError = getMvpPasswordPolicyError(value);
    if (passwordPolicyError) {
      setFeedback("reset", passwordPolicyError, "is-error");
      return;
    }

    if (value !== confirm.value.trim()) {
      setFeedback("reset", "Las contraseñas no coinciden.", "is-error");
      return;
    }

    setFeedback("reset", "La nueva contraseña se guardó en esta simulación.", "is-success");

    window.setTimeout(() => {
      window.location.href = withTheme("login.html", theme);
    }, 900);
  });
}

const PLATFORM_TENANTS_STORAGE_KEY = "multitour-platform-tenants";
const PLATFORM_AUDIT_STORAGE_KEY = "multitour-platform-audit";
const PLATFORM_ACCESS_REQUESTS_KEY = "multitour-platform-access-requests";
const PLATFORM_RECOVERY_KEY = "multitour-platform-recovery";
const OPERATOR_TENANT_REGION_AUDIT_KEY = "multitour-tenant-region-audit";
const PLATFORM_OPERATORS_MODULE = "Administración de plataforma / Operadores";
const PLATFORM_ACCESS_MS = 24 * 60 * 60 * 1000;
const PLATFORM_RECOVERY_MS = 30 * 60 * 1000;
const PLATFORM_TEMP_CREDENTIAL_MS = 72 * 60 * 60 * 1000;

// País y zona horaria oficial del tenant (PDR sección 9, G14/Q2/R2): obligatorios al crear el
// tenant. El país determina los festivos nacionales para los plazos en días hábiles.
const PLATFORM_COUNTRY_OPTIONS = [
  { country: "Colombia", zones: ["America/Bogota"] },
  { country: "Ecuador", zones: ["America/Guayaquil", "Pacific/Galapagos"] },
  { country: "Perú", zones: ["America/Lima"] },
  { country: "México", zones: ["America/Mexico_City", "America/Cancun", "America/Tijuana"] },
  { country: "Argentina", zones: ["America/Argentina/Buenos_Aires"] },
  { country: "Chile", zones: ["America/Santiago"] },
];

const PLATFORM_AUDIT_CATEGORIES = [
  "Operadores",
  "Credenciales y contraseñas",
  "Acceso excepcional",
  "País y zona horaria",
  "Permisos especiales",
  "Usuarios internos",
  "Establecimientos asociados",
  "Reglas automáticas por tiempo",
  "Pagos y saldo a favor",
  "Parámetros de pago del tenant",
];

const PLATFORM_ADMIN_ACTOR = { name: "Fernanda Robayo", role: "Administrador de plataforma" };

// timezone: zona horaria IANA del tenant. La caja y los reportes del operador la leen con
// getOperatorTenantTimezone() (America/Bogota por defecto si el tenant no la tiene configurada).
// tempCredential: credencial temporal del primer Administrador del tenant (72 horas).
const DEFAULT_PLATFORM_TENANTS = [
  { id: "travesia-natural", name: "Travesía Natural", status: "Activo", adminName: "Laura Gómez", adminEmail: "laura@travesianatural.co", createdAt: "29 ago 2026", country: "Colombia", timezone: "America/Bogota", tempCredential: { issuedAt: "2026-08-29T15:32:00.000Z", expiresAt: "2026-09-01T15:32:00.000Z", activated: true } },
  { id: "huila-adventure", name: "Huila Adventure", status: "Activo", adminName: "Mateo Rojas", adminEmail: "mateo@huilaadventure.co", createdAt: "27 ago 2026", country: "Colombia", timezone: "America/Bogota", tempCredential: { issuedAt: "2026-08-27T20:10:00.000Z", expiresAt: "2026-08-30T20:10:00.000Z", activated: false } },
  { id: "selva-viva", name: "Selva Viva", status: "Inactivo", statusReason: "Solicitud administrativa registrada", adminName: "Diana Torres", adminEmail: "diana@selvaviva.co", createdAt: "20 ago 2026", country: "Colombia", timezone: "America/Bogota", tempCredential: { issuedAt: "2026-08-20T14:00:00.000Z", expiresAt: "2026-08-23T14:00:00.000Z", activated: true } },
];

const DEFAULT_PLATFORM_AUDIT = [
  { date: "29 ago 2026, 10:32", ts: "2026-08-29T15:32:00.000Z", category: "Operadores", action: "Operador creado", tenant: "Travesía Natural", tenantId: "travesia-natural", detail: "Estado inicial: Activo · País: Colombia · Zona horaria: America/Bogota", actorName: "Fernanda Robayo", actorRole: "Administrador de plataforma", reason: "Alta administrativa inicial", recordAffected: "Operador: travesia-natural", previousValue: "No aplica", newValue: "Estado inicial: Activo · País: Colombia · Zona horaria: America/Bogota", module: PLATFORM_OPERATORS_MODULE, functionalReference: "Alta administrativa de operador (RF-016)" },
  { date: "29 ago 2026, 10:32", ts: "2026-08-29T15:32:30.000Z", category: "Credenciales y contraseñas", action: "Credencial temporal emitida", tenant: "Travesía Natural", tenantId: "travesia-natural", detail: "Primer Administrador del tenant · vigencia 72 horas", actorName: "Fernanda Robayo", actorRole: "Administrador de plataforma", reason: "Alta administrativa inicial", recordAffected: "Primer Administrador del tenant: travesia-natural", previousValue: "No aplica", newValue: "Credencial temporal de 72 horas", module: PLATFORM_OPERATORS_MODULE, functionalReference: "Credencial temporal (sección 9, G15)" },
  { date: "27 ago 2026, 15:10", ts: "2026-08-27T20:10:00.000Z", category: "Operadores", action: "Operador creado", tenant: "Huila Adventure", tenantId: "huila-adventure", detail: "Estado inicial: Activo · País: Colombia · Zona horaria: America/Bogota", actorName: "Fernanda Robayo", actorRole: "Administrador de plataforma", reason: "Alta administrativa inicial", recordAffected: "Operador: huila-adventure", previousValue: "No aplica", newValue: "Estado inicial: Activo · País: Colombia · Zona horaria: America/Bogota", module: PLATFORM_OPERATORS_MODULE, functionalReference: "Alta administrativa de operador (RF-016)" },
  { date: "25 ago 2026, 09:48", ts: "2026-08-25T14:48:00.000Z", category: "Operadores", action: "Operador inactivado", tenant: "Selva Viva", tenantId: "selva-viva", detail: "Activo -> Inactivo", actorName: "Fernanda Robayo", actorRole: "Administrador de plataforma", reason: "Solicitud administrativa registrada", recordAffected: "Estado del operador: selva-viva", previousValue: "Activo", newValue: "Inactivo", module: PLATFORM_OPERATORS_MODULE, functionalReference: "Cambio de estado de operador" },
  { date: "20 ago 2026, 09:00", ts: "2026-08-20T14:00:00.000Z", category: "Operadores", action: "Operador creado", tenant: "Selva Viva", tenantId: "selva-viva", detail: "Estado inicial: Activo · País: Colombia · Zona horaria: America/Bogota", actorName: "Fernanda Robayo", actorRole: "Administrador de plataforma", reason: "Alta administrativa inicial", recordAffected: "Operador: selva-viva", previousValue: "No aplica", newValue: "Estado inicial: Activo · País: Colombia · Zona horaria: America/Bogota", module: PLATFORM_OPERATORS_MODULE, functionalReference: "Alta administrativa de operador (RF-016)" },
];

function readPlatformStorage(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function getPlatformTenants() {
  return readPlatformStorage(PLATFORM_TENANTS_STORAGE_KEY, DEFAULT_PLATFORM_TENANTS).map(normalizePlatformDemoTenant);
}

function getPlatformAudit() {
  return readPlatformStorage(PLATFORM_AUDIT_STORAGE_KEY, DEFAULT_PLATFORM_AUDIT)
    .map(normalizePlatformDemoAuditEvent)
    .map((event) => ({ ...event, date: formatStoredPlatformDateTime(event.date) }));
}

function savePlatformTenants(tenants) {
  window.localStorage.setItem(PLATFORM_TENANTS_STORAGE_KEY, JSON.stringify(tenants));
}

// Consecuencias que se muestran al confirmar la inactivación o la reactivación de un operador.
function getPlatformStateDialogItems(inactivating) {
  return inactivating
    ? "<li>Se revocan de inmediato los accesos de operación normal de Clientes finales, Colaboradores operativos, Gerentes, Contadores, Analistas y Administradores del tenant (sus sesiones se cierran).</li><li>No se aceptan nuevas reservas, pagos ni ventas.</li><li>Se suspenden los plazos operativos y las cancelaciones automáticas: las reservas Pendientes de pago quedan suspendidas con el tiempo restante de cada plazo. No se suspenden los temporizadores de seguridad ni los plazos de contingencia.</li><li>El Administrador del tenant conserva un acceso restringido para gestionar obligaciones pendientes (reservas afectadas, reprogramaciones, devoluciones y autorizaciones de soporte).</li><li>Las salidas cuya hora programada llegue mientras el tenant esté inactivo se cancelan por causa no atribuible al cliente.</li><li>El historial y la auditoría se conservan. Esta acción no te da acceso a los datos del tenant.</li>"
    : "<li>La reactivación es una acción explícita y queda registrada con responsable, fecha, hora y motivo.</li><li>Cada plazo operativo continúa con el tiempo restante que tenía al inactivarse el tenant.</li><li>Los usuarios inactivados individualmente permanecen inactivos.</li><li>Una salida cuya hora programada ya transcurrió no se reactiva.</li>";
}

// Cambia el estado del operador (Activo <-> Inactivo) con motivo obligatorio y deja el evento
// en la auditoría de plataforma. Lo usan el detalle del operador y el directorio.
function changePlatformTenantStatus(tenantId, reason) {
  const tenants = getPlatformTenants();
  const tenant = tenants.find((item) => item.id === tenantId);
  if (!tenant) return null;
  const previousStatus = tenant.status;
  const nextStatus = previousStatus === "Activo" ? "Inactivo" : "Activo";
  tenant.status = nextStatus;
  tenant.statusReason = reason;
  savePlatformTenants(tenants);
  recordOperatorTenantSuspensionChange(tenant.id, nextStatus);
  const consequence = nextStatus === "Inactivo"
    ? "Accesos de operación normal revocados; plazos operativos suspendidos; reservas Pendientes de pago suspendidas; Administrador del tenant con acceso restringido."
    : "Plazos operativos reanudados con el tiempo restante; usuarios inactivados individualmente siguen inactivos.";
  recordPlatformAuditEvent({ action: `Operador ${nextStatus === "Activo" ? "reactivado" : "inactivado"}`, tenant: tenant.name, tenantId: tenant.id, detail: `${previousStatus} -> ${nextStatus}. ${consequence}`, reason, recordAffected: `Estado del operador: ${tenant.id}`, previousValue: previousStatus, newValue: nextStatus, functionalReference: "Cambio de estado de operador (RF-016, CA-017)" });
  return tenant;
}

function addPlatformAudit(event) {
  const audit = getPlatformAudit();
  window.localStorage.setItem(PLATFORM_AUDIT_STORAGE_KEY, JSON.stringify([event, ...audit]));
}

function normalizePlatformDemoTenant(tenant) {
  const isHuilaPassionDemo = tenant.id === "pasion-hula" || String(tenant.name || "").toLowerCase() === "huila pasion";
  const base = isHuilaPassionDemo ? { ...tenant, id: "huila-pasion", name: "Huila Pasión" } : tenant;
  // Registros guardados antes de exigir país y zona horaria: se completan con el valor por
  // defecto de Colombia (sin reinterpretar históricos).
  return { ...base, country: base.country || "Colombia", timezone: base.timezone || "America/Bogota" };
}

function normalizePlatformDemoAuditEvent(event) {
  const isHuilaPassionDemo = event.tenantId === "pasion-hula" || String(event.tenant || "").toLowerCase() === "huila pasion";
  const isOperatorManagementEvent = String(event.action || "").startsWith("Operador ");
  if (!isHuilaPassionDemo) return isOperatorManagementEvent ? { ...event, module: PLATFORM_OPERATORS_MODULE } : event;
  return {
    ...event,
    tenantId: "huila-pasion",
    tenant: "Huila Pasión",
    recordAffected: String(event.recordAffected || "").replaceAll("pasion-hula", "huila-pasion"),
    module: PLATFORM_OPERATORS_MODULE,
  };
}

function formatPlatformDate(date) {
  const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function formatPlatformDateTime(date) {
  return `${formatPlatformDate(date)}, ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function formatStoredPlatformDateTime(value) {
  const raw = String(value || "").trim();
  if (/^\d{1,2} (ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic) \d{4}, \d{2}:\d{2}$/.test(raw)) return raw;
  const match = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:,\s*(\d{1,2}):(\d{2})(?::\d{2})?(?:\s*([ap])\.?\s*m\.?)?)?$/i);
  if (!match) return raw;
  let hours = Number(match[4] || 0);
  if (match[6]?.toLowerCase() === "p" && hours < 12) hours += 12;
  if (match[6]?.toLowerCase() === "a" && hours === 12) hours = 0;
  const date = new Date(Number(match[3]), Number(match[2]) - 1, Number(match[1]), hours, Number(match[5] || 0));
  return formatPlatformDateTime(date);
}

function formatStoredPlatformDate(value) {
  const match = String(value || "").match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!match) return value;
  return formatPlatformDate(new Date(Number(match[3]), Number(match[2]) - 1, Number(match[1])));
}

// "29 ago 2026, 10:32" -> Date (para ordenar eventos antiguos que no tienen marca ts).
function parsePlatformDateTime(text) {
  const match = String(text || "").match(/^(\d{1,2}) (ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic) (\d{4})(?:, (\d{2}):(\d{2}))?$/);
  if (!match) return null;
  const month = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"].indexOf(match[2]);
  return new Date(Number(match[3]), month, Number(match[1]), Number(match[4] || 0), Number(match[5] || 0));
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function platformTenantHref(tenantId, theme) {
  return `${withTheme("admin-detalle-operador.html", theme)}&tenant=${encodeURIComponent(tenantId)}`;
}

function platformStatusMarkup(status) {
  const modifier = status === "Activo" ? "is-active" : "is-inactive";
  return `<span class="platform-status ${modifier}">${escapeHtml(status)}</span>`;
}

function categorizePlatformAuditAction(action) {
  const text = String(action || "").toLowerCase();
  if (text.includes("acceso")) return "Acceso excepcional";
  if (text.includes("credencial") || text.includes("contraseña")) return "Credenciales y contraseñas";
  if (text.includes("zona horaria") || text.includes("país")) return "País y zona horaria";
  if (text.includes("permiso")) return "Permisos especiales";
  if (text.includes("establecimiento")) return "Establecimientos asociados";
  if (text.includes("usuario")) return "Usuarios internos";
  return "Operadores";
}

// Arma un evento de auditoría de plataforma completo (fecha/hora, responsable, motivo, registro
// afectado, valor anterior y nuevo, módulo y referencia funcional) y lo guarda.
function recordPlatformAuditEvent(fields) {
  const now = getOperatorNow();
  const event = {
    date: formatPlatformDateTime(now),
    ts: now.toISOString(),
    actorName: PLATFORM_ADMIN_ACTOR.name,
    actorRole: PLATFORM_ADMIN_ACTOR.role,
    module: PLATFORM_OPERATORS_MODULE,
    reason: "No aplica",
    previousValue: "No aplica",
    newValue: "No aplica",
    category: categorizePlatformAuditAction(fields.action),
    ...fields,
  };
  addPlatformAudit(event);
  return event;
}

// Auditoría transversal: eventos de plataforma más los eventos administrativos del tenant
// (permisos especiales, usuarios internos, establecimientos, país y zona horaria). Solo
// metadatos administrativos: nunca datos operativos ni sensibles.
function getOperatorTenantRegionAudit(tenantId) {
  const list = readOperatorStorage(OPERATOR_TENANT_REGION_AUDIT_KEY, []);
  return tenantId ? list.filter((entry) => entry.tenantId === tenantId) : list;
}

function getPlatformAuditAll() {
  const events = getPlatformAudit().map((event) => ({
    ...event,
    category: event.category || categorizePlatformAuditAction(event.action),
    ts: event.ts || parsePlatformDateTime(event.date)?.toISOString() || "",
  }));
  const tenantEvent = (at, fields) => events.push({
    date: formatPlatformDateTime(new Date(at)),
    ts: at,
    tenant: OPERATOR_CURRENT_TENANT_NAME,
    tenantId: OPERATOR_CURRENT_TENANT_ID,
    module: "Administración del tenant",
    functionalReference: "Evento administrativo del tenant",
    previousValue: "No aplica",
    ...fields,
  });
  readOperatorStorage(OPERATOR_PERMISSIONS_AUDIT_KEY, []).forEach((entry) => {
    const target = entry.userId === OPERATOR_PRIMARY_ADMIN_ID ? OPERATOR_ADMIN_ROLE_LABEL : "usuario interno del tenant";
    tenantEvent(entry.at, {
      action: `Permiso especial ${entry.action === "Asignado" ? "asignado" : "retirado"}`,
      category: "Permisos especiales",
      detail: `${entry.permission} (${target})`,
      actorName: entry.actor,
      actorRole: "Administrador del tenant",
      reason: entry.reason || "No aplica",
      recordAffected: `Permiso: ${entry.permission}`,
      newValue: entry.action,
    });
  });
  readOperatorStorage(OPERATOR_USERS_AUDIT_KEY, []).forEach((entry) => {
    const credential = entry.action === "Credencial temporal emitida";
    tenantEvent(entry.at, {
      action: credential ? "Credencial temporal emitida" : `Usuario interno ${String(entry.action).toLowerCase()}`,
      category: credential ? "Credenciales y contraseñas" : "Usuarios internos",
      detail: `Rol: ${entry.role}`,
      actorName: entry.actor,
      actorRole: "Administrador del tenant",
      reason: entry.reason || "No aplica",
      recordAffected: `Usuario interno (${entry.role})`,
      newValue: entry.action,
    });
  });
  readOperatorStorage(OPERATOR_ESTABLISHMENTS_AUDIT_KEY, []).forEach((entry) => {
    tenantEvent(entry.at, {
      action: `Establecimiento asociado ${String(entry.action).toLowerCase()}`,
      category: "Establecimientos asociados",
      detail: entry.name,
      actorName: entry.actor,
      actorRole: "Administrador del tenant",
      reason: entry.reason || "No aplica",
      recordAffected: `Establecimiento: ${entry.name}`,
      newValue: entry.action,
    });
  });
  readOperatorStorage(OPERATOR_FINANCE_AUDIT_KEY, []).forEach((entry) => {
    tenantEvent(entry.at, {
      action: entry.action,
      category: entry.category || "Pagos y saldo a favor",
      detail: entry.detail,
      actorName: entry.actor,
      actorRole: entry.actor === "Cliente" ? "Cliente" : "Usuario interno del tenant",
      reason: entry.reason || "No aplica",
      recordAffected: entry.recordAffected || "No aplica",
      previousValue: entry.previousValue || "No aplica",
      newValue: entry.newValue || entry.action,
    });
  });
  // Reglas automáticas por tiempo: solo metadatos (código de reserva, regla y efecto), sin datos personales.
  getOperatorTimeEvents().forEach((entry) => {
    tenantEvent(entry.at, {
      action: entry.action,
      category: "Reglas automáticas por tiempo",
      detail: entry.detail,
      actorName: "Multitour (regla automática)",
      actorRole: "Sistema",
      reason: entry.rule ? `Regla ${entry.rule}: plazo cumplido` : "Plazo cumplido",
      recordAffected: entry.recordAffected || "No aplica",
      newValue: entry.action,
    });
  });
  getOperatorOptionalRolesAudit().forEach((entry) => {
    tenantEvent(entry.at, {
      action: `Rol opcional ${String(entry.action).toLowerCase()}`,
      category: "Usuarios internos",
      detail: `${entry.label} (rol opcional del tenant)`,
      actorName: entry.actor,
      actorRole: "Administrador del tenant",
      reason: "No aplica",
      recordAffected: `Rol opcional: ${entry.label}`,
      newValue: entry.action,
    });
  });
  getOperatorTenantRegionAudit().forEach((entry) => {
    tenantEvent(entry.at, {
      action: `Cambio de ${entry.field.toLowerCase()}`,
      category: "País y zona horaria",
      detail: `${entry.previous} -> ${entry.next} (efecto prospectivo)`,
      actorName: entry.actor,
      actorRole: "Administrador del tenant",
      reason: entry.reason || "No aplica",
      recordAffected: `${entry.field} del tenant`,
      previousValue: entry.previous,
      newValue: entry.next,
    });
  });
  return events.sort((a, b) => String(b.ts || "").localeCompare(String(a.ts || "")));
}

// Cambio de país o zona horaria por el Administrador del tenant (efecto solo prospectivo). El
// cambio de zona horaria no se activa mientras exista una caja Abierta o Pendiente de cierre.
function setOperatorTenantRegion({ country, timezone, reason }) {
  if (!isOperatorAdmin()) return { ok: false, error: "Solo el Administrador del tenant puede modificar el país y la zona horaria." };
  const cleanReason = String(reason || "").trim();
  if (!cleanReason) return { ok: false, error: "Registra el motivo del cambio para la auditoría." };
  const tenants = getPlatformTenants();
  const tenant = tenants.find((item) => item.id === OPERATOR_CURRENT_TENANT_ID);
  if (!tenant) return { ok: false, error: "No se encontró el tenant." };
  const countryChanged = country && country !== tenant.country;
  const zoneChanged = timezone && timezone !== tenant.timezone;
  if (!countryChanged && !zoneChanged) return { ok: true, unchanged: true };
  if (zoneChanged) {
    const cash = typeof getOperatorCashDay === "function" ? getOperatorCashDay() : null;
    if (cash && cash.status !== "cerrada") {
      return { ok: false, error: "No se puede activar el cambio de zona horaria con una caja Abierta o Pendiente de cierre. Cierra primero la caja del día en Caja." };
    }
  }
  const audit = getOperatorTenantRegionAudit();
  const at = getOperatorNow().toISOString();
  const actor = getOperatorActorLabel();
  if (countryChanged) audit.unshift({ tenantId: tenant.id, tenantName: tenant.name, field: "País", previous: tenant.country, next: country, actor, reason: cleanReason, at });
  if (zoneChanged) audit.unshift({ tenantId: tenant.id, tenantName: tenant.name, field: "Zona horaria", previous: tenant.timezone, next: timezone, actor, reason: cleanReason, at });
  writeOperatorStorage(OPERATOR_TENANT_REGION_AUDIT_KEY, audit);
  savePlatformTenants(tenants.map((item) => item.id === tenant.id ? { ...item, country: country || item.country, timezone: timezone || item.timezone } : item));
  return { ok: true };
}

function getPlatformTempCredentialState(tenant) {
  const credential = tenant?.tempCredential;
  if (!credential) return { label: "Contraseña propia establecida", tone: "ok", expired: false };
  if (credential.activated) return { label: "Contraseña propia establecida en el primer acceso", tone: "ok", expired: false };
  if (getOperatorNow() > new Date(credential.expiresAt)) return { label: `Credencial temporal vencida el ${formatPlatformDateTime(new Date(credential.expiresAt))}`, tone: "warn", expired: true };
  return { label: `Credencial temporal vigente hasta el ${formatPlatformDateTime(new Date(credential.expiresAt))}`, tone: "pending", expired: false };
}

// Administradores del tenant activos (para correos de acceso de emergencia y para emitir una
// credencial cuando ningún Administrador puede autenticarse, GAP-016).
function getPlatformTenantActiveAdmins(tenant) {
  const admins = [{ id: "primary", name: tenant.adminName, email: tenant.adminEmail }];
  if (tenant.id === OPERATOR_CURRENT_TENANT_ID) {
    const stored = getOperatorCollaborators().filter((c) => c.tenantId === tenant.id);
    const primary = stored.find((c) => c.id === OPERATOR_PRIMARY_ADMIN_ID);
    if (primary && primary.active === false) admins.shift();
    stored.filter((c) => c.id !== OPERATOR_PRIMARY_ADMIN_ID && c.role === OPERATOR_ADMIN_ROLE_LABEL && c.active !== false)
      .forEach((c) => admins.push({ id: c.id, name: c.name, email: c.email }));
  }
  return admins;
}

// Acceso excepcional del Administrador de plataforma (PDR sección 9, E21/J4/GAP-020): con
// autorización de un Administrador del tenant (máximo 24 h) o, de emergencia, con justificación,
// duración máxima de 24 h y correos al iniciar y finalizar. Sin acceso ordinario a datos
// operativos ni sensibles. El mockup solo registra el estado; no expone datos del tenant.
function getPlatformAccessRequests(tenantId) {
  const now = getOperatorNow();
  const list = readOperatorStorage(PLATFORM_ACCESS_REQUESTS_KEY, []).map((request) => {
    if (request.status === "Vigente" && request.expiresAt && now > new Date(request.expiresAt)) return { ...request, status: "Expirado", endedAt: request.expiresAt };
    return request;
  });
  return tenantId ? list.filter((request) => request.tenantId === tenantId) : list;
}

function savePlatformAccessRequests(list) {
  writeOperatorStorage(PLATFORM_ACCESS_REQUESTS_KEY, list);
}

function updatePlatformAccessRequest(id, patch) {
  const list = getPlatformAccessRequests().map((request) => request.id === id ? { ...request, ...patch } : request);
  savePlatformAccessRequests(list);
  return list.find((request) => request.id === id);
}

function createPlatformAccessRequest(tenant, { scope, reason }) {
  const request = {
    id: `acceso-${Date.now()}`,
    tenantId: tenant.id,
    tenantName: tenant.name,
    type: "Autorizado",
    status: "Pendiente",
    scope,
    reason,
    requestedAt: getOperatorNow().toISOString(),
    requestedBy: PLATFORM_ADMIN_ACTOR.name,
    sensitive: false,
  };
  savePlatformAccessRequests([request, ...getPlatformAccessRequests()]);
  recordPlatformAuditEvent({ action: "Acceso excepcional solicitado", tenant: tenant.name, tenantId: tenant.id, detail: `Solicitud pendiente de autorización del Administrador del tenant · Alcance: ${scope}`, reason, recordAffected: `Acceso excepcional: ${request.id}`, newValue: "Pendiente de autorización", functionalReference: "Acceso excepcional (sección 9, E21)" });
  return request;
}

// Decisión del Administrador del tenant sobre una solicitud de acceso excepcional.
function decidePlatformAccessRequest(id, approve, actorLabel) {
  const request = getPlatformAccessRequests().find((item) => item.id === id);
  if (!request || request.status !== "Pendiente") return { ok: false, error: "La solicitud ya no está pendiente." };
  const now = getOperatorNow();
  const updated = approve
    ? updatePlatformAccessRequest(id, { status: "Vigente", authorizedBy: actorLabel, authorizedAt: now.toISOString(), startedAt: now.toISOString(), expiresAt: new Date(now.getTime() + PLATFORM_ACCESS_MS).toISOString() })
    : updatePlatformAccessRequest(id, { status: "Rechazado", authorizedBy: actorLabel, authorizedAt: now.toISOString(), endedAt: now.toISOString() });
  recordPlatformAuditEvent({
    action: approve ? "Acceso excepcional autorizado" : "Acceso excepcional rechazado",
    tenant: updated.tenantName, tenantId: updated.tenantId,
    detail: approve ? `Vigente hasta ${formatPlatformDateTime(new Date(updated.expiresAt))} (máximo 24 h) · Alcance: ${updated.scope}` : "El Administrador del tenant no autorizó el acceso",
    actorName: actorLabel, actorRole: "Administrador del tenant", reason: updated.reason,
    recordAffected: `Acceso excepcional: ${id}`, newValue: approve ? "Vigente" : "Rechazado",
    functionalReference: "Acceso excepcional (sección 9, E21)",
  });
  return { ok: true };
}

function startPlatformEmergencyAccess(tenant, { justification, scope, includeSensitive, sensitiveJustification }) {
  const now = getOperatorNow();
  const admins = getPlatformTenantActiveAdmins(tenant);
  const request = {
    id: `emergencia-${Date.now()}`,
    tenantId: tenant.id,
    tenantName: tenant.name,
    type: "Emergencia",
    status: "Vigente",
    scope,
    reason: justification,
    sensitive: Boolean(includeSensitive),
    sensitiveJustification: includeSensitive ? sensitiveJustification : "",
    requestedAt: now.toISOString(),
    startedAt: now.toISOString(),
    requestedBy: PLATFORM_ADMIN_ACTOR.name,
    expiresAt: new Date(now.getTime() + PLATFORM_ACCESS_MS).toISOString(),
    startEmailTo: admins.map((admin) => admin.email),
  };
  savePlatformAccessRequests([request, ...getPlatformAccessRequests()]);
  recordPlatformAuditEvent({
    action: "Acceso de emergencia iniciado", tenant: tenant.name, tenantId: tenant.id,
    detail: `Duración máxima 24 h · Alcance: ${scope} · Datos sensibles: ${includeSensitive ? "incluidos de forma expresa" : "excluidos"} · Correo de inicio (simulado) a: ${request.startEmailTo.join(", ")}`,
    reason: justification, recordAffected: `Acceso de emergencia: ${request.id}`, newValue: "Vigente",
    functionalReference: "Acceso de emergencia (sección 9, J4/GAP-020)",
  });
  return request;
}

function endPlatformAccess(id) {
  const request = getPlatformAccessRequests().find((item) => item.id === id);
  if (!request || request.status !== "Vigente") return { ok: false, error: "El acceso ya no está vigente." };
  const tenant = getPlatformTenants().find((item) => item.id === request.tenantId);
  const now = getOperatorNow();
  const emergency = request.type === "Emergencia";
  const endEmailTo = emergency && tenant ? getPlatformTenantActiveAdmins(tenant).map((admin) => admin.email) : [];
  updatePlatformAccessRequest(id, { status: "Finalizado", endedAt: now.toISOString(), endEmailTo });
  recordPlatformAuditEvent({
    action: emergency ? "Acceso de emergencia finalizado" : "Acceso excepcional finalizado",
    tenant: request.tenantName, tenantId: request.tenantId,
    detail: emergency ? `Finalizado el ${formatPlatformDateTime(now)} · Correo de finalización (simulado) a: ${endEmailTo.join(", ")}` : `Finalizado el ${formatPlatformDateTime(now)}`,
    reason: "Cierre del acceso", recordAffected: `${emergency ? "Acceso de emergencia" : "Acceso excepcional"}: ${id}`, previousValue: "Vigente", newValue: "Finalizado",
    functionalReference: "Acceso excepcional (sección 9, E21/J4)",
  });
  return { ok: true };
}

function platformAccessStatusMarkup(status) {
  const cls = status === "Vigente" ? "is-active" : status === "Pendiente" ? "is-pending" : "is-inactive";
  return `<span class="platform-status ${cls}">${escapeHtml(status)}</span>`;
}

function fillPlatformCountryControls(countrySelect, zoneSelect, country, zone) {
  if (!countrySelect || !zoneSelect) return;
  countrySelect.innerHTML = '<option value="">Selecciona un país</option>' + PLATFORM_COUNTRY_OPTIONS.map((item) => `<option value="${escapeHtml(item.country)}">${escapeHtml(item.country)}</option>`).join("");
  const fillZones = (selectedCountry, selectedZone) => {
    const option = PLATFORM_COUNTRY_OPTIONS.find((item) => item.country === selectedCountry);
    zoneSelect.innerHTML = '<option value="">Selecciona una zona horaria</option>' + (option ? option.zones : []).map((value) => `<option value="${escapeHtml(value)}">${escapeHtml(value)}</option>`).join("");
    if (option && option.zones.includes(selectedZone)) zoneSelect.value = selectedZone;
    else if (option && option.zones.length === 1) zoneSelect.value = option.zones[0];
  };
  countrySelect.value = country || "";
  fillZones(country || "", zone || "");
  countrySelect.addEventListener("change", () => fillZones(countrySelect.value, ""));
}

function setupPlatformScreens(theme) {
  const screen = document.body.dataset.screen;
  const platformScreens = new Set(["platform-admin", "platform-operators", "platform-create", "platform-tenant-detail", "platform-audit", "platform-login"]);
  if (!platformScreens.has(screen)) return;

  if (screen === "platform-admin") {
    const tenants = getPlatformTenants();
    const activeCount = tenants.filter((tenant) => tenant.status === "Activo").length;
    const inactiveCount = tenants.length - activeCount;
    const activeNode = document.querySelector("[data-platform-active-count]");
    const inactiveNode = document.querySelector("[data-platform-inactive-count]");
    const createdNode = document.querySelector("[data-platform-created-count]");
    const preview = document.querySelector("[data-platform-tenant-preview]");
    if (activeNode) activeNode.textContent = activeCount;
    if (inactiveNode) inactiveNode.textContent = inactiveCount;
    if (createdNode) createdNode.textContent = tenants.length;
    if (preview) preview.innerHTML = tenants.slice(0, 3).map((tenant) => `<a class="platform-tenant-row" href="${platformTenantHref(tenant.id, theme)}"><span class="platform-tenant-mark">${escapeHtml(tenant.name.slice(0, 1))}</span><span><strong>${escapeHtml(tenant.name)}</strong><small>${escapeHtml(tenant.id)} · ${escapeHtml(tenant.country)} · ${escapeHtml(tenant.timezone)}</small></span>${platformStatusMarkup(tenant.status)}<span class="platform-row-arrow" aria-hidden="true">&#8594;</span></a>`).join("");

    // Atención pendiente: obligaciones de plataforma sin exponer datos operativos del tenant.
    const attention = document.querySelector("[data-platform-attention]");
    if (attention) {
      const items = [];
      tenants.filter((tenant) => tenant.status === "Inactivo").forEach((tenant) => items.push({ tenant, text: `${tenant.name}: operador inactivo. Su Administrador conserva solo un acceso restringido para obligaciones pendientes; los plazos operativos están suspendidos.` }));
      tenants.forEach((tenant) => {
        const state = getPlatformTempCredentialState(tenant);
        if (state.expired) items.push({ tenant, text: `${tenant.name}: la credencial temporal de ${tenant.adminName} venció sin primer acceso. Emite una nueva credencial temporal.` });
      });
      getPlatformAccessRequests().filter((request) => ["Pendiente", "Vigente"].includes(request.status)).forEach((request) => {
        const tenant = tenants.find((item) => item.id === request.tenantId) || { id: request.tenantId };
        items.push({ tenant, text: `${request.tenantName}: acceso ${request.type === "Emergencia" ? "de emergencia" : "excepcional"} ${request.status === "Pendiente" ? "pendiente de autorización del Administrador del tenant" : "vigente hasta " + formatPlatformDateTime(new Date(request.expiresAt))}.` });
      });
      attention.innerHTML = items.length
        ? items.map((item) => `<a class="platform-tenant-row" href="${platformTenantHref(item.tenant.id, theme)}"><span><strong>${escapeHtml(item.text)}</strong></span><span class="platform-row-arrow" aria-hidden="true">&#8594;</span></a>`).join("")
        : '<p class="platform-section-copy">Sin pendientes de plataforma.</p>';
    }
  }

  if (screen === "platform-operators") {
    const table = document.querySelector("[data-platform-tenant-table]");
    const renderOperatorsTable = () => { if (table) table.innerHTML = getPlatformTenants().map((tenant) => {
      const credential = getPlatformTempCredentialState(tenant);
      const stateHref = `${platformTenantHref(tenant.id, theme)}#estado`;
      return `<tr><td><strong>${escapeHtml(tenant.name)}</strong><small>Creado: ${escapeHtml(formatStoredPlatformDate(tenant.createdAt))}</small></td><td><code>${escapeHtml(tenant.id)}</code></td><td>${escapeHtml(tenant.country)}<small>${escapeHtml(tenant.timezone)}</small></td><td>${escapeHtml(tenant.adminName)}<small>${escapeHtml(tenant.adminEmail)}</small></td><td>${escapeHtml(credential.label)}</td><td>${platformStatusMarkup(tenant.status)}</td><td><div class="platform-row-actions"><a class="platform-action platform-action-view" href="${platformTenantHref(tenant.id, theme)}">Ver detalle</a><button type="button" class="platform-action ${tenant.status === "Activo" ? "platform-action-deactivate" : "platform-action-activate"}" data-platform-state-open="${escapeHtml(tenant.id)}">${tenant.status === "Activo" ? "Inactivar" : "Reactivar"}</button></div></td></tr>`;
    }).join(""); };
    renderOperatorsTable();
    const stateDialog = document.querySelector("[data-platform-list-state-dialog]");
    if (table && stateDialog) {
      const q = (selector) => stateDialog.querySelector(selector);
      let targetId = "";
      table.addEventListener("click", (event) => {
        const trigger = event.target.closest("[data-platform-state-open]");
        if (!trigger) return;
        const tenant = getPlatformTenants().find((item) => item.id === trigger.dataset.platformStateOpen);
        if (!tenant) return;
        targetId = tenant.id;
        const inactivating = tenant.status === "Activo";
        q("[data-state-title]").textContent = inactivating ? `¿Inactivar a ${tenant.name}?` : `¿Reactivar a ${tenant.name}?`;
        q("[data-state-body]").innerHTML = getPlatformStateDialogItems(inactivating);
        q("[data-state-reason-label]").textContent = inactivating ? "Motivo de la inactivación" : "Motivo de la reactivación";
        q("[data-state-reason]").value = "";
        q("[data-state-reason]").placeholder = inactivating ? "Ingresa el motivo obligatorio para inactivar el operador." : "Ingresa el motivo obligatorio para reactivar el operador.";
        q("[data-state-feedback]").textContent = "";
        const confirm = q("[data-state-confirm]");
        confirm.textContent = inactivating ? "Confirmar inactivación" : "Confirmar reactivación";
        confirm.className = inactivating ? "platform-danger" : "platform-primary";
        if (stateDialog.showModal) stateDialog.showModal(); else stateDialog.setAttribute("open", "");
      });
      q("[data-state-cancel]").addEventListener("click", () => stateDialog.close?.());
      q("[data-state-confirm]").addEventListener("click", () => {
        const reason = q("[data-state-reason]").value.trim();
        if (!reason) { q("[data-state-feedback]").textContent = "Registra el motivo para conservar la trazabilidad del cambio."; return; }
        if (!changePlatformTenantStatus(targetId, reason)) return;
        stateDialog.close?.();
        renderOperatorsTable();
      });
    }
  }

  if (screen === "platform-create") {
    const form = document.querySelector("[data-platform-create-form]");
    fillPlatformCountryControls(form?.querySelector("[name=\"country\"]"), form?.querySelector("[name=\"timezone\"]"), "Colombia", "America/Bogota");
    form?.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("commercialName") || "").trim();
      const tenantId = String(data.get("tenantId") || "").trim().toLowerCase();
      const status = String(data.get("status") || "Activo");
      const country = String(data.get("country") || "");
      const timezone = String(data.get("timezone") || "");
      const adminName = String(data.get("adminName") || "").trim();
      const adminEmail = String(data.get("adminEmail") || "").trim();
      const initialPassword = String(data.get("initialPassword") || "");
      const confirmPassword = String(data.get("confirmPassword") || "");
      const tenants = getPlatformTenants();
      if (!name || !tenantId || !country || !timezone || !adminName || !adminEmail || !initialPassword || !confirmPassword) { setFeedback("platform-create", "Completa todos los datos obligatorios: nombre comercial, identificador, estado, país, zona horaria y los datos del primer Administrador.", "is-error"); return; }
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(tenantId)) { setFeedback("platform-create", "El identificador solo admite minúsculas, números y guiones (por ejemplo: andes-vivo).", "is-error"); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(adminEmail)) { setFeedback("platform-create", "Ingresa un correo electrónico válido para el primer Administrador.", "is-error"); return; }
      try { new Intl.DateTimeFormat("es-CO", { timeZone: timezone }); } catch { setFeedback("platform-create", "La zona horaria no es válida.", "is-error"); return; }
      const passwordPolicyError = getMvpPasswordPolicyError(initialPassword);
      if (passwordPolicyError) { setFeedback("platform-create", passwordPolicyError, "is-error"); return; }
      if (initialPassword !== confirmPassword) { setFeedback("platform-create", "La contraseña inicial y su confirmación deben coincidir.", "is-error"); return; }
      if (tenants.some((tenant) => tenant.id === tenantId)) { setFeedback("platform-create", "El identificador ya pertenece a otro operador.", "is-error"); return; }
      const now = getOperatorNow();
      const tenant = {
        id: tenantId, name, status, adminName, adminEmail, country, timezone,
        createdAt: formatPlatformDate(now),
        tempCredential: { issuedAt: now.toISOString(), expiresAt: new Date(now.getTime() + PLATFORM_TEMP_CREDENTIAL_MS).toISOString(), activated: false },
      };
      savePlatformTenants([tenant, ...tenants]);
      const summary = `Estado inicial: ${status} · País: ${country} · Zona horaria: ${timezone}`;
      recordPlatformAuditEvent({ action: "Operador creado", tenant: name, tenantId, detail: summary, reason: "Alta administrativa inicial", recordAffected: `Operador: ${tenantId}`, newValue: summary, functionalReference: "Alta administrativa de operador (RF-016)" });
      recordPlatformAuditEvent({ action: "Credencial temporal emitida", tenant: name, tenantId, detail: "Primer Administrador del tenant · vigencia 72 horas · cambio obligatorio en el primer acceso", reason: "Alta administrativa inicial", recordAffected: `Primer Administrador del tenant: ${tenantId}`, newValue: "Credencial temporal de 72 horas", functionalReference: "Credencial temporal (sección 9, G15)" });
      setFeedback("platform-create", "Operador creado en esta simulación. La contraseña inicial es temporal: vence en 72 horas y el Administrador debe cambiarla en su primer acceso.", "is-success");
      window.setTimeout(() => { window.location.href = platformTenantHref(tenantId, theme); }, 900);
    });
  }

  if (screen === "platform-tenant-detail") {
    const tenantId = new URLSearchParams(window.location.search).get("tenant");
    const tenants = getPlatformTenants();
    const tenant = tenants.find((item) => item.id === tenantId) || tenants[0];
    if (!tenant) return;
    const $ = (selector) => document.querySelector(selector);
    const setText = (selector, value) => { const node = $(selector); if (node) node.textContent = value; };
    const persistTenant = () => savePlatformTenants(getPlatformTenants().map((item) => item.id === tenant.id ? tenant : item));

    const renderDetail = () => {
      const isActive = tenant.status === "Activo";
      setText("[data-tenant-name]", tenant.name);
      setText("[data-tenant-id]", `Identificador: ${tenant.id}`);
      const statusNode = $("[data-tenant-status]");
      if (statusNode) { statusNode.textContent = tenant.status; statusNode.className = `platform-status ${isActive ? "is-active" : "is-inactive"}`; }
      setText("[data-tenant-admin]", tenant.adminName);
      setText("[data-tenant-email]", tenant.adminEmail);
      setText("[data-tenant-country]", tenant.country);
      setText("[data-tenant-timezone]", tenant.timezone);
      setText("[data-tenant-credential]", getPlatformTempCredentialState(tenant).label);
      setText("[data-tenant-state-heading]", isActive ? "Operador activo" : "Operador inactivo");
      setText("[data-tenant-state-copy]", isActive
        ? "Puede recibir nuevas autenticaciones y reservas dentro de su propio tenant."
        : `No recibe nuevas autenticaciones, reservas, pagos ni ventas; su historial y auditoría se conservan.${tenant.statusReason ? " Motivo registrado: " + tenant.statusReason + "." : ""} El Administrador del tenant conserva un acceso restringido para gestionar obligaciones pendientes y los plazos operativos están suspendidos.`);
      setText("[data-platform-state-reason-label]", isActive ? "Motivo de la inactivación" : "Motivo de la reactivación");
      const reasonInput = $("[data-platform-state-reason]");
      if (reasonInput) reasonInput.placeholder = isActive ? "Ingresa el motivo obligatorio para inactivar el operador." : "Ingresa el motivo obligatorio para reactivar el operador.";
      const submit = $("[data-platform-state-submit]");
      if (submit) { submit.textContent = isActive ? "Inactivar operador" : "Reactivar operador"; submit.className = isActive ? "platform-danger" : "platform-primary"; }
      const regionHistory = $("[data-tenant-region-history]");
      if (regionHistory) {
        const history = getOperatorTenantRegionAudit(tenant.id);
        regionHistory.innerHTML = history.length
          ? history.map((entry) => `<li>${escapeHtml(formatPlatformDateTime(new Date(entry.at)))}: ${escapeHtml(entry.field)} ${escapeHtml(entry.previous)} -> ${escapeHtml(entry.next)} (${escapeHtml(entry.actor)}; efecto prospectivo)</li>`).join("")
          : "<li>Sin cambios de país o zona horaria posteriores al alta.</li>";
      }
      renderCredentialForm();
      renderAccess();
      renderPlatformTenantObligations(tenant);
    };

    // Confirmación de inactivación / reactivación.
    const dialog = $("[data-platform-state-dialog]");
    const dialogBody = $("[data-platform-state-dialog-body]");
    const dialogTitle = $("[data-platform-state-dialog-title]");
    let pendingReason = "";
    $("[data-platform-state-form]")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const reason = String(new FormData(event.currentTarget).get("reason") || "").trim();
      if (!reason) { setFeedback("platform-state", "Registra el motivo para conservar la trazabilidad del cambio.", "is-error"); return; }
      setFeedback("platform-state", "", "");
      pendingReason = reason;
      const inactivating = tenant.status === "Activo";
      if (dialogTitle) dialogTitle.textContent = inactivating ? `¿Inactivar a ${tenant.name}?` : `¿Reactivar a ${tenant.name}?`;
      if (dialogBody) {
        dialogBody.innerHTML = getPlatformStateDialogItems(inactivating);
      }
      const confirmButton = $("[data-platform-state-confirm]");
      if (confirmButton) { confirmButton.textContent = inactivating ? "Confirmar inactivación" : "Confirmar reactivación"; confirmButton.className = inactivating ? "platform-danger" : "platform-primary"; }
      if (dialog?.showModal) dialog.showModal(); else applyState();
    });
    const applyState = () => {
      const updated = changePlatformTenantStatus(tenant.id, pendingReason);
      if (!updated) return;
      tenant.status = updated.status;
      tenant.statusReason = updated.statusReason;
      $("[data-platform-state-form]")?.reset();
      dialog?.close?.();
      setFeedback("platform-state", `Operador ${tenant.status.toLowerCase()} en esta simulación.`, "is-success");
      renderDetail();
    };
    $("[data-platform-state-confirm]")?.addEventListener("click", applyState);
    $("[data-platform-state-cancel]")?.addEventListener("click", () => dialog?.close?.());

    // Nueva credencial temporal (invalida la anterior; nuevo periodo de 72 horas).
    const recipientSelect = $("[data-platform-credential-recipient]");
    const noAdminCheck = $("[data-platform-credential-no-admin]");
    function renderCredentialForm() {
      if (!recipientSelect) return;
      const admins = getPlatformTenantActiveAdmins(tenant);
      const anyAdmin = Boolean(noAdminCheck?.checked);
      recipientSelect.innerHTML = (anyAdmin ? admins : admins.slice(0, 1)).map((admin) => `<option value="${escapeHtml(admin.id)}">${escapeHtml(admin.name)} (${escapeHtml(admin.email)})</option>`).join("");
    }
    noAdminCheck?.addEventListener("change", renderCredentialForm);
    $("[data-platform-credential-form]")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const password = String(data.get("password") || "");
      const confirmation = String(data.get("confirmation") || "");
      const reason = String(data.get("reason") || "").trim();
      const anyAdmin = Boolean(noAdminCheck?.checked);
      if (!password || !confirmation) { setFeedback("platform-credential", "Ingresa la nueva contraseña temporal y su confirmación.", "is-error"); return; }
      const policyError = getMvpPasswordPolicyError(password);
      if (policyError) { setFeedback("platform-credential", policyError, "is-error"); return; }
      if (password !== confirmation) { setFeedback("platform-credential", "La contraseña temporal y su confirmación deben coincidir.", "is-error"); return; }
      if (anyAdmin && !reason) { setFeedback("platform-credential", "Registra el motivo: se emite a un Administrador que no es el primero porque ningún Administrador activo puede autenticarse (GAP-016).", "is-error"); return; }
      const now = getOperatorNow();
      const credential = { issuedAt: now.toISOString(), expiresAt: new Date(now.getTime() + PLATFORM_TEMP_CREDENTIAL_MS).toISOString(), activated: false, issuedBy: PLATFORM_ADMIN_ACTOR.name };
      const recipientId = recipientSelect?.value || "primary";
      const recipient = getPlatformTenantActiveAdmins(tenant).find((admin) => admin.id === recipientId) || { id: "primary", name: tenant.adminName, email: tenant.adminEmail };
      if (recipient.id === "primary") {
        tenant.tempCredential = credential;
        persistTenant();
      } else {
        const stored = getOperatorCollaborators().find((c) => c.id === recipient.id);
        if (stored) upsertOperatorCollaborator({ ...stored, tempCredential: credential });
      }
      recordPlatformAuditEvent({ action: "Credencial temporal emitida", tenant: tenant.name, tenantId: tenant.id, detail: `Para ${recipient.name} · vigencia 72 horas · invalida cualquier credencial temporal anterior${anyAdmin ? " · emitida a un Administrador distinto del primero" : ""}`, reason: reason || "Credencial vencida o no disponible", recordAffected: `Administrador del tenant: ${recipient.email}`, newValue: "Credencial temporal de 72 horas", functionalReference: "Credencial temporal (sección 9, G15/GAP-016)" });
      event.currentTarget.reset();
      setFeedback("platform-credential", "Nueva credencial temporal emitida: vence en 72 horas y debe cambiarse en el primer acceso.", "is-success");
      renderDetail();
    });

    // Acceso excepcional y de emergencia.
    const accessList = $("[data-platform-access-list]");
    function renderAccess() {
      if (!accessList) return;
      const requests = getPlatformAccessRequests(tenant.id);
      accessList.innerHTML = requests.length
        ? requests.map((request) => {
          const parts = [`${escapeHtml(request.type === "Emergencia" ? "Acceso de emergencia" : "Acceso excepcional autorizado")} · alcance: ${escapeHtml(request.scope)}`];
          if (request.type === "Emergencia") parts.push(`Datos sensibles: ${request.sensitive ? "incluidos de forma expresa (" + escapeHtml(request.sensitiveJustification) + ")" : "excluidos"}`);
          if (request.status === "Vigente") parts.push(`Vigente hasta ${escapeHtml(formatPlatformDateTime(new Date(request.expiresAt)))} (máximo 24 h)`);
          if (request.status === "Pendiente") parts.push("A la espera de la autorización de un Administrador del tenant (la recibe en su centro de notificaciones)");
          if (request.startEmailTo?.length) parts.push(`Correo de inicio (simulado): ${escapeHtml(request.startEmailTo.join(", "))}`);
          if (request.endEmailTo?.length) parts.push(`Correo de finalización (simulado): ${escapeHtml(request.endEmailTo.join(", "))}`);
          const actions = request.status === "Vigente"
            ? `<button class="platform-link" type="button" data-platform-access-end="${escapeHtml(request.id)}">Finalizar acceso</button>`
            : request.status === "Pendiente"
              ? `<button class="platform-link" type="button" data-platform-access-simulate="${escapeHtml(request.id)}">Simular autorización del Administrador del tenant</button>`
              : "";
          return `<li class="platform-access-item"><div>${platformAccessStatusMarkup(request.status)} <small>${escapeHtml(formatPlatformDateTime(new Date(request.requestedAt)))}</small></div><div><p>${parts.join("<br>")}</p>${actions}</div></li>`;
        }).join("")
        : "<li>Sin accesos excepcionales ni de emergencia registrados para este operador.</li>";
      accessList.querySelectorAll("[data-platform-access-end]").forEach((button) => button.addEventListener("click", () => { endPlatformAccess(button.dataset.platformAccessEnd); renderAccess(); }));
      accessList.querySelectorAll("[data-platform-access-simulate]").forEach((button) => button.addEventListener("click", () => { decidePlatformAccessRequest(button.dataset.platformAccessSimulate, true, `${tenant.adminName} (Administrador del tenant)`); renderAccess(); }));
    }
    $("[data-platform-access-form]")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const scope = String(data.get("scope") || "").trim();
      const reason = String(data.get("reason") || "").trim();
      if (!scope || !reason) { setFeedback("platform-access", "Indica el alcance necesario y el motivo de soporte.", "is-error"); return; }
      createPlatformAccessRequest(tenant, { scope, reason });
      event.currentTarget.reset();
      setFeedback("platform-access", "Solicitud enviada al Administrador del tenant. Si la autoriza, el acceso vence automáticamente a las 24 horas como máximo.", "is-success");
      renderAccess();
    });
    const sensitiveCheck = $("[data-platform-emergency-sensitive]");
    const sensitiveField = $("[data-platform-emergency-sensitive-field]");
    sensitiveCheck?.addEventListener("change", () => { if (sensitiveField) sensitiveField.hidden = !sensitiveCheck.checked; });
    $("[data-platform-emergency-form]")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const justification = String(data.get("justification") || "").trim();
      const scope = String(data.get("scope") || "").trim();
      const includeSensitive = Boolean(data.get("sensitive"));
      const sensitiveJustification = String(data.get("sensitiveJustification") || "").trim();
      if (!data.get("noAuthorization") || !data.get("criticalIncident")) { setFeedback("platform-emergency", "Confirma que no fue posible obtener la autorización de un Administrador del tenant y que existe una incidencia crítica.", "is-error"); return; }
      if (!justification || !scope) { setFeedback("platform-emergency", "La justificación y el alcance (mínimo privilegio) son obligatorios.", "is-error"); return; }
      if (includeSensitive && !sensitiveJustification) { setFeedback("platform-emergency", "Para incluir datos sensibles registra una justificación específica; sin ella quedan excluidos.", "is-error"); return; }
      const request = startPlatformEmergencyAccess(tenant, { justification, scope, includeSensitive, sensitiveJustification });
      event.currentTarget.reset();
      if (sensitiveField) sensitiveField.hidden = true;
      setFeedback("platform-emergency", `Acceso de emergencia iniciado (máximo 24 h). Se enviaron correos (simulados) a ${request.startEmailTo.length} Administrador(es) del tenant activos; el fallo de un correo no invalida el acceso pero queda registrado.`, "is-success");
      renderAccess();
    });

    renderDetail();
    if (window.location.hash === "#estado") $("#estado")?.scrollIntoView();
  }

  if (screen === "platform-audit") {
    const table = document.querySelector("[data-platform-audit-table]");
    const filter = document.querySelector("[data-platform-audit-filter]");
    const dialog = document.querySelector("[data-platform-audit-dialog]");
    const detail = document.querySelector("[data-platform-audit-detail]");
    const audit = getPlatformAuditAll();
    if (filter && !filter.options.length) {
      filter.innerHTML = '<option value="">Todas las categorías</option>' + PLATFORM_AUDIT_CATEGORIES.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("");
    }
    const render = () => {
      const category = filter?.value || "";
      const rows = audit.map((event, index) => ({ event, index })).filter(({ event }) => !category || event.category === category);
      if (table) table.innerHTML = rows.length
        ? rows.map(({ event, index }) => `<tr><td>${escapeHtml(event.date)}</td><td><strong>${escapeHtml(event.action)}</strong><small>${escapeHtml(event.category)}</small></td><td>${escapeHtml(event.tenant)}<small>${escapeHtml(event.tenantId || "Sin identificador")}</small></td><td>${escapeHtml(event.detail || "No aplica")}</td><td><strong>${escapeHtml(event.actorName || PLATFORM_ADMIN_ACTOR.name)}</strong><small>${escapeHtml(event.actorRole || event.actor || PLATFORM_ADMIN_ACTOR.role)}</small></td><td>${escapeHtml(event.reason || "No aplica")}</td><td><button class="platform-table-link" type="button" data-platform-audit-detail-button="${index}">Ver detalle</button></td></tr>`).join("")
        : '<tr><td colspan="7">No hay eventos para la categoría seleccionada.</td></tr>';
    };
    render();
    filter?.addEventListener("change", render);
    table?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-platform-audit-detail-button]");
      if (!button || !detail || !dialog) return;
      const auditEvent = audit[Number(button.dataset.platformAuditDetailButton)];
      if (!auditEvent) return;
      const fields = [["Fecha y hora", auditEvent.date], ["Usuario", auditEvent.actorName || PLATFORM_ADMIN_ACTOR.name], ["Rol", auditEvent.actorRole || auditEvent.actor || PLATFORM_ADMIN_ACTOR.role], ["Operador", auditEvent.tenant], ["Categoría", auditEvent.category], ["Acción", auditEvent.action], ["Registro afectado", auditEvent.recordAffected || auditEvent.tenantId || "No aplica"], ["Valor anterior", auditEvent.previousValue || "No aplica"], ["Valor nuevo", auditEvent.newValue || auditEvent.detail || "No aplica"], ["Motivo", auditEvent.reason || "No aplica"], ["Módulo o canal", auditEvent.module || "No aplica"], ["Referencia funcional", auditEvent.functionalReference || "No aplica"]];
      detail.innerHTML = fields.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("");
      dialog.showModal();
    });
    document.querySelector("[data-platform-audit-close]")?.addEventListener("click", () => dialog?.close());
  }

  // Recuperación de la contraseña administrativa (PDR sección 9, A4/D3/E20, CA-020): código de
  // un solo uso con vigencia de 30 minutos; cada solicitud invalida la anterior; todo
  // restablecimiento, exitoso o fallido, se audita; al completarse se invalidan las sesiones
  // activas y se notifica por correo. El código se muestra en pantalla solo porque es un mockup.
  if (screen === "platform-login") {
    const openLink = document.querySelector("[data-platform-recover-open]");
    const box = document.querySelector("[data-platform-recover]");
    const requestForm = document.querySelector("[data-platform-recover-request]");
    const resetForm = document.querySelector("[data-platform-recover-reset]");
    const mock = document.querySelector("[data-platform-recover-mock]");
    openLink?.addEventListener("click", (event) => {
      event.preventDefault();
      if (box) box.hidden = !box.hidden;
    });
    requestForm?.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = String(new FormData(requestForm).get("email") || "").trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setFeedback("platform-recover", "Ingresa un correo electrónico válido.", "is-error"); return; }
      const now = getOperatorNow();
      const code = String(Math.floor(100000 + Math.random() * 900000));
      // Una nueva solicitud reemplaza (invalida) cualquier código anterior.
      writeOperatorStorage(PLATFORM_RECOVERY_KEY, { email, code, issuedAt: now.toISOString(), expiresAt: new Date(now.getTime() + PLATFORM_RECOVERY_MS).toISOString(), used: false });
      recordPlatformAuditEvent({ action: "Restablecimiento de contraseña administrativa solicitado", tenant: "Plataforma Multitour", tenantId: "plataforma", detail: `Código de un solo uso (30 minutos) enviado a ${email}`, actorName: email, reason: "Recuperación de acceso", recordAffected: `Cuenta administrativa: ${email}`, newValue: "Código emitido", functionalReference: "Recuperación de acceso (sección 9, CA-020)" });
      setFeedback("platform-recover", "Si existe una cuenta administrativa con ese correo, enviamos un código de un solo uso que vence en 30 minutos.", "is-success");
      if (mock) { mock.hidden = false; mock.textContent = `Simulación del correo recibido: tu código es ${code} (solo visible en el mockup).`; }
      if (resetForm) resetForm.hidden = false;
    });
    resetForm?.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(resetForm);
      const code = String(data.get("code") || "").trim();
      const password = String(data.get("password") || "");
      const confirmation = String(data.get("confirmation") || "");
      const record = readOperatorStorage(PLATFORM_RECOVERY_KEY, null);
      const fail = (message, auditReason) => {
        recordPlatformAuditEvent({ action: "Restablecimiento de contraseña administrativa fallido", tenant: "Plataforma Multitour", tenantId: "plataforma", detail: auditReason, actorName: record?.email || "Sin identificar", reason: auditReason, recordAffected: `Cuenta administrativa: ${record?.email || "No identificada"}`, newValue: "Sin cambios", functionalReference: "Recuperación de acceso (sección 9, CA-020)" });
        setFeedback("platform-recover", message, "is-error");
      };
      if (!code || !password || !confirmation) { setFeedback("platform-recover", "Completa el código, la nueva contraseña y su confirmación.", "is-error"); return; }
      if (!record || record.used || getOperatorNow() > new Date(record.expiresAt) || record.code !== code) {
        fail("El código no es válido, venció o ya fue usado. Solicita uno nuevo.", "Código inválido, vencido, usado o reemplazado");
        return;
      }
      const policyError = getMvpPasswordPolicyError(password);
      if (policyError) { setFeedback("platform-recover", policyError, "is-error"); return; }
      if (password !== confirmation) { setFeedback("platform-recover", "La contraseña y su confirmación deben coincidir.", "is-error"); return; }
      writeOperatorStorage(PLATFORM_RECOVERY_KEY, { ...record, used: true, usedAt: getOperatorNow().toISOString() });
      recordPlatformAuditEvent({ action: "Contraseña administrativa restablecida", tenant: "Plataforma Multitour", tenantId: "plataforma", detail: "Sesiones activas anteriores invalidadas · notificación enviada por correo al titular", actorName: record.email, reason: "Recuperación de acceso", recordAffected: `Cuenta administrativa: ${record.email}`, newValue: "Contraseña actualizada", functionalReference: "Recuperación de acceso (sección 9, CA-020)" });
      resetForm.hidden = true;
      if (requestForm) requestForm.hidden = true;
      if (mock) mock.hidden = true;
      setFeedback("platform-recover", "Tu contraseña fue actualizada. Se cerraron las sesiones activas anteriores y enviamos una notificación a tu correo. Ya puedes iniciar sesión.", "is-success");
    });
  }
}

function setupVenueLinks(theme) {
  const links = document.querySelectorAll("[data-venue-link]");
  if (!links.length) return;

  links.forEach((link) => {
    const venue = link.dataset.venueLink;
    const source = link.dataset.sourceScreen || document.body.dataset.screen || "gastronomy";
    link.setAttribute(
      "href",
      `${withTheme("detalle-gastronomia.html", theme)}&venue=${encodeURIComponent(venue)}&source=${encodeURIComponent(source)}`,
    );
  });
}

function setupTourLinks(theme) {
  const links = document.querySelectorAll("[data-tour-link]");
  if (!links.length) return;

  links.forEach((link) => {
    const tour = link.dataset.tourLink;
    const source = link.dataset.sourceScreen || document.body.dataset.screen || "tours";
    link.setAttribute(
      "href",
      `${withTheme("detalle-tour.html", theme)}&tour=${encodeURIComponent(tour)}&source=${encodeURIComponent(source)}`,
    );
  });
}

function setupTourBookingLinks(theme) {
  const links = document.querySelectorAll("[data-tour-booking-link]");
  if (!links.length) return;

  const params = new URLSearchParams(window.location.search);
  const currentTour = params.get("tour") || "mountains";

  links.forEach((link) => {
    const tour = link.dataset.tourBookingLink || currentTour;
    link.setAttribute(
      "href",
      `${withTheme("reservar-tour.html", theme)}&tour=${encodeURIComponent(tour)}&source=tour-detail`,
    );
  });
}

// Gastronomía y Restaurantes del cliente: SOLO establecimientos asociados informativos con
// sus datos de contacto (GAP-04). No hay platos del día, tarifas ni reserva de mesa. Se
// renderiza desde los establecimientos del tenant y respeta los inactivos.
function renderOperatorEstablishmentCard(establishment, { screen, kindLabel, mediaClass }) {
  const contact = getOperatorEstablishmentContactLines(establishment)
    .map((line) => `<small>${escapeHtml(line)}</small>`)
    .join("");
  const mediaStyle = establishment.image
    ? ` style="background-image:url('${establishment.image.replace(/'/g, "%27")}');background-size:cover;background-position:center;"`
    : "";
  return `<article class="travel-tour-card" data-search-card data-search-terms="${escapeHtml(`${establishment.name} ${kindLabel}`.toLowerCase())}">
    <div class="travel-tour-media ${mediaClass}"${mediaStyle}></div>
    <div class="travel-tour-body">
      <strong>${escapeHtml(establishment.name)}</strong>
      <span class="travel-tour-location">${escapeHtml(kindLabel)}</span>
      ${establishment.description ? `<p class="travel-dashboard-copy">${escapeHtml(establishment.description)}</p>` : ""}
      <div class="travel-catalog-tags">${contact}</div>
      <div class="travel-tour-meta">
        <div></div>
        <a class="travel-tour-detail-link" href="detalle-gastronomia.html" data-venue-link="${escapeHtml(establishment.id)}" data-source-screen="${screen}">Ver contacto</a>
      </div>
    </div>
  </article>`;
}

function setupGastronomyCatalog() {
  const screen = document.body.dataset.screen;
  if (screen !== "gastronomy" && screen !== "restaurants") return;

  const restaurants = getOperatorActiveAssociatedEstablishments("restaurant");
  const cards = restaurants.map((establishment) => renderOperatorEstablishmentCard(establishment, {
    screen,
    kindLabel: "Restaurante asociado",
    mediaClass: "establishment-media establishment-media-restaurant",
  }));
  const empty = '<p class="travel-dashboard-copy" data-restaurant-empty>No hay restaurantes asociados activos en este momento.</p>';

  if (screen === "restaurants") {
    const restaurantGrid = document.querySelector("[data-restaurant-grid]");
    if (restaurantGrid) restaurantGrid.innerHTML = cards.length ? cards.join("") : empty;
    return;
  }

  // La plataforma no publica platos del día: el filtro "food" ya no tiene contenido propio.
  document.querySelectorAll("[data-filter-tab]").forEach((tab) => {
    if (tab.dataset.filterTab === "food") tab.hidden = true;
    else tab.classList.toggle("is-active", true);
  });
  const gastronomyGrid = document.querySelector("[data-gastronomy-grid]");
  if (gastronomyGrid) gastronomyGrid.innerHTML = cards.length ? cards.join("") : empty.replace(" data-restaurant-empty", " data-gastronomy-empty");
}

// Alojamiento: solo el hotel asociado activo, con sus datos de contacto; nunca habitaciones,
// tarifas ni disponibilidad.
function setupLodgingCatalog() {
  if (document.body.dataset.screen !== "lodging") return;

  const hotels = getOperatorActiveAssociatedEstablishments("hotel");
  const hotelGrid = document.querySelector("[data-hotel-grid]");
  if (hotelGrid) {
    hotelGrid.innerHTML = hotels.length
      ? hotels.map((establishment) => renderOperatorEstablishmentCard(establishment, { screen: "lodging", kindLabel: "Alojamiento asociado", mediaClass: "establishment-media establishment-media-hotel" })).join("")
      : '<p class="travel-dashboard-copy" data-hotel-empty>No hay alojamientos asociados activos en este momento.</p>';
  }
}

function setupGastronomyDetail(theme) {
  if (document.body.dataset.screen !== "gastronomy-detail") return;

  const params = new URLSearchParams(window.location.search);
  const venueKey = params.get("venue");
  const sourceKey = params.get("source") || "gastronomy";
  const venueRecord = getOperatorAssociatedEstablishments().find((item) => item.id === venueKey);
  const isLodging = sourceKey === "lodging" || venueRecord?.kind === "hotel";
  // Busca el establecimiento asociado REAL por id; si no existe o ya no está activo, se
  // informa en vez de inventar uno.
  const establishment = getOperatorActiveAssociatedEstablishments(isLodging ? "hotel" : "restaurant").find(
    (item) => item.id === venueKey,
  ) || null;
  const themeConfig = THEMES[theme];
  const sourceMap = {
    gastronomy: { path: "gastronomia.html", label: "Volver a gastronomía" },
    restaurants: { path: "restaurantes.html", label: "Volver a restaurantes" },
    lodging: { path: "alojamiento.html", label: "Volver a alojamiento" },
  };
  const sourceConfig = sourceMap[sourceKey] || sourceMap.gastronomy;

  const backLink = document.querySelector(".travel-tours-back");
  if (backLink) backLink.setAttribute("href", withTheme(sourceConfig.path, theme));

  const backLabel = document.querySelector("[data-detail-back-label]");
  if (backLabel) backLabel.textContent = sourceConfig.label;

  if (!establishment) {
    document.title = `Establecimiento no disponible | ${themeConfig.titlePrefix}`;
    document.querySelector("[data-venue-field=detailTitle]")?.replaceChildren(document.createTextNode("Establecimiento no disponible"));
    document.querySelector("[data-venue-field=name]")?.replaceChildren(document.createTextNode("Establecimiento no disponible"));
    document.querySelector("[data-venue-field=description]")?.replaceChildren(document.createTextNode("Este establecimiento ya no está activo o no existe."));
    const intro = document.querySelector(".travel-detail-intro");
    if (intro) intro.innerHTML = '<div class="travel-detail-copy"><h1>Establecimiento no disponible</h1><div class="travel-detail-description">Este establecimiento ya no está activo o no existe.</div></div>';
    document.querySelector(".travel-detail-gallery")?.remove();
    document.querySelectorAll(".travel-detail-section").forEach((section) => section.remove());
    document.querySelector(".travel-detail-sticky-bar")?.remove();
    return;
  }

  const categoryLabel = isLodging ? "Alojamiento asociado" : "Restaurante asociado";
  document.title = `${establishment.name} | ${themeConfig.titlePrefix}`;

  const fieldValues = {
    detailTitle: categoryLabel,
    name: establishment.name,
    category: categoryLabel,
    description: establishment.description || "Sin información adicional registrada.",
  };
  document.querySelectorAll("[data-venue-field]").forEach((node) => {
    const key = node.dataset.venueField;
    if (fieldValues[key] !== undefined) node.textContent = fieldValues[key];
  });

  // Datos de contacto para que el cliente coordine directamente con el establecimiento.
  const contactLines = getOperatorEstablishmentContactLines(establishment);
  const contactPanel = document.querySelector(".travel-detail-description .operator-panel");
  if (contactPanel && contactLines.length && !contactPanel.querySelector("[data-venue-contact]")) {
    contactPanel.insertAdjacentHTML("beforeend", `<p data-venue-contact>${contactLines.map((line) => escapeHtml(line)).join("<br>")}</p>`);
  }

  // No hay calificación, reseñas, menú ni precio en el modelo de establecimiento asociado:
  // se retiran esos bloques en vez de inventar valores.
  document.querySelector("[data-venue-field=\"rating\"]")?.remove();
  document.querySelector(".travel-detail-location-row")?.remove();
  document.querySelector("[data-venue-features]")?.closest(".travel-detail-section")?.remove();
  document.querySelector("[data-venue-menu]")?.closest(".travel-detail-section")?.remove();
  document.querySelector(".travel-detail-review-card")?.closest(".travel-detail-section")?.remove();

  const heroNode = document.querySelector('[data-venue-image="hero"]');
  if (heroNode) {
    heroNode.style.gridColumn = "1 / -1";
    heroNode.classList.remove("dashboard-media-two");
    heroNode.classList.add("establishment-media", isLodging ? "establishment-media-hotel" : "establishment-media-restaurant", "establishment-media-hero");
    if (establishment.image) heroNode.style.backgroundImage = `url("${establishment.image.replace(/"/g, "%22")}")`;
  }
}

// BUG corregido: "Explorar/Tours" mostraba 4 tarjetas globales hardcodeadas (con
// "3 dias/2 noches" y otras caracteristicas turisticas inventadas) sin relacion con el
// catalogo real ni con su estado activo/vigente. Ahora se renderiza desde el catalogo REAL
// de Tours (mismo usado en Detalle del tour / Reservar), con estado vacio explicito cuando
// no hay datos.
function setupToursCatalog() {
  if (document.body.dataset.screen !== "tours") return;
  const services = getOperatorActiveTourServices();
  const tours = Object.values(services);
  const mediaClasses = ["tour-media-one", "tour-media-two", "tour-media-three", "tour-media-four"];

  const card = (tour, index) => {
    const finalPrice = tour.price * (1 - tour.discount);
    const mediaClass = mediaClasses[index % mediaClasses.length];
    return `
      <article class="travel-tour-card" data-search-card data-search-terms="${escapeHtml(tour.name.toLowerCase())}">
        <div class="travel-tour-media ${mediaClass}">
          ${tour.discount ? `<span class="travel-tour-discount-tag">${Math.round(tour.discount * 100)}% de descuento</span>` : ""}
          ${tour.image ? `<img class="gastronomy-card-image" src="${tour.image.replace(/"/g, "%22")}" alt="Imagen de ${escapeHtml(tour.name)}" />` : ""}
        </div>
        <div class="travel-tour-body">
          <strong>${escapeHtml(tour.name)}</strong>
          <div class="travel-tour-meta">
            <div class="travel-tour-price">
              ${tour.discount ? `<small class="travel-tour-price-before">Antes: <del>${formatCOP(tour.price)}</del></small>` : ""}
              <small>Desde</small>
              <em>${formatCOP(finalPrice)}</em>
            </div>
            <a class="travel-tour-detail-link" href="detalle-tour.html" data-tour-link="${escapeHtml(tour.key)}" data-source-screen="tours">Ver detalle</a>
          </div>
        </div>
      </article>
    `;
  };

  const grid = document.querySelector("[data-tours-grid]");
  if (grid) {
    grid.innerHTML = tours.length
      ? tours.map(card).join("")
      : '<p class="travel-dashboard-copy" data-tours-empty>No hay tours disponibles en este momento.</p>';
  }
}

// ===========================================================================
// Canal cliente (web y móvil) — PDR v1.9: RF-001, RF-014, RF-015, RF-015A, RF-015B, RF-019,
// RN-RES-004, RN-RES-006, RN-RES-006A, RN-RES-006C, RN-RES-006D, RN-RES-007, RN-RES-009,
// RN-RES-010 y RN-SAL-001.
//
// Resumen del modelo del cliente en el mockup (sin backend, todo en localStorage):
//   - Tenant: el cliente opera dentro de un tenant determinado ANTES de registrarse, ingresar
//     o recuperar su contraseña (resolveClientTenant).
//   - Salidas: cada reserva pertenece a UNA salida programada con fecha, hora de inicio, hora
//     de finalización estimada y cupos (getClientTourDepartures). La capacidad efectiva es el
//     menor valor entre la capacidad del tour y la del transporte asociado (RN-SAL-001).
//   - Cupo: se aparta con el primer pago (primer comprobante o saldo a favor aplicado), no al
//     crear la reserva (RN-RES-007).
//   - Reservas del cliente: se registran también como reservas del tenant
//     (saveOperatorCreatedReservation) para que el equipo valide sus comprobantes, y el
//     cliente ve el estado real (estado de la reserva, estado del comprobante y situación
//     financiera son conceptos independientes: RN-RES-006A).
// ===========================================================================
const CLIENT_TENANT_STORAGE_KEY = "multitour-client-tenant";
const CLIENT_VERIFICATION_STORAGE_KEY = "multitour-client-verification";
const CLIENT_RECOVERY_STORAGE_KEY = "multitour-client-recovery";
const CLIENT_DEPARTURE_HOLDS_KEY = "multitour-client-departure-holds";
const CLIENT_PAYMENT_CONTEXT_KEY = "multitour-payment-context";

function clientStorageGet(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function clientStorageSet(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* sin almacenamiento local: el mockup sigue funcionando sin persistencia */
  }
}

// --- Tenant del cliente (determinado antes de registro, ingreso y recuperación) -------------
function getClientActiveTenants() {
  let tenants = [];
  try {
    tenants = getPlatformTenants().filter((tenant) => tenant.status === "Activo");
  } catch {
    tenants = [];
  }
  return tenants.length ? tenants : [{ id: OPERATOR_CURRENT_TENANT_ID, name: OPERATOR_CURRENT_TENANT_NAME }];
}

function resolveClientTenant() {
  const tenants = getClientActiveTenants();
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("tenant") || (getTheme() === "platform" ? "" : getTheme());
  const stored = clientStorageGet(CLIENT_TENANT_STORAGE_KEY, "");
  return tenants.find((tenant) => tenant.id === requested)
    || tenants.find((tenant) => tenant.id === stored)
    || tenants.find((tenant) => tenant.id === OPERATOR_CURRENT_TENANT_ID)
    || tenants[0];
}

function resolveClientTenantName() {
  return resolveClientTenant().name;
}

// Selector del operador (tenant) para las pantallas de acceso: login del cliente, crear cuenta,
// recuperar y nueva contraseña. Persiste la elección para el resto del portal.
function setupClientTenantSelector() {
  const boxes = document.querySelectorAll("[data-client-tenant-box]");
  if (!boxes.length) return;
  // Operador por defecto: URL (?tenant=), tema o elección guardada. Línea discreta
  // "Operador: X · Cambiar": el selector solo se despliega al pulsar "Cambiar" (L9).
  const current = resolveClientLoginTenant();
  const tenants = getClientActiveTenants();
  const options = tenants.some((tenant) => tenant.id === current.id) ? tenants : [current, ...tenants];
  clientStorageSet(CLIENT_TENANT_STORAGE_KEY, current.id);
  boxes.forEach((box) => {
    box.classList.add("client-tenant-line");
    box.innerHTML = `<span class="client-tenant-line-text">Operador: <strong data-client-tenant-name>${escapeHtml(current.name)}</strong>${current.status === "Inactivo" ? " (inactivo)" : ""} · <button type="button" class="client-tenant-change" data-client-tenant-change aria-expanded="false">Cambiar</button></span><select class="client-tenant-select" data-client-tenant-select aria-label="Operador" hidden>${options
      .map((tenant) => `<option value="${escapeHtml(tenant.id)}"${tenant.id === current.id ? " selected" : ""}>${escapeHtml(tenant.name)}${tenant.status === "Inactivo" ? " (inactivo)" : ""}</option>`)
      .join("")}</select>`;
    const select = box.querySelector("select");
    const toggle = box.querySelector("[data-client-tenant-change]");
    toggle.addEventListener("click", () => {
      select.hidden = !select.hidden;
      toggle.setAttribute("aria-expanded", String(!select.hidden));
      if (!select.hidden) select.focus();
    });
    select.addEventListener("change", (event) => {
      clientStorageSet(CLIENT_TENANT_STORAGE_KEY, event.target.value);
      const selected = options.find((tenant) => tenant.id === event.target.value) || current;
      document.querySelectorAll("[data-client-tenant-name]").forEach((node) => { node.textContent = selected.name; });
      select.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Operador (tenant) de las pantallas de acceso, incluido uno Inactivo: el ingreso debe poder
// explicar que el operador está inactivo en lugar de cambiarlo silenciosamente.
function resolveClientLoginTenant() {
  let all = [];
  try { all = getPlatformTenants(); } catch { all = []; }
  if (!all.length) return { id: OPERATOR_CURRENT_TENANT_ID, name: OPERATOR_CURRENT_TENANT_NAME, status: "Activo" };
  const params = new URLSearchParams(window.location.search);
  const requested = params.get("tenant") || (getTheme() === "platform" ? "" : getTheme());
  const stored = clientStorageGet(CLIENT_TENANT_STORAGE_KEY, "");
  return all.find((tenant) => tenant.id === requested)
    || all.find((tenant) => tenant.id === stored)
    || all.find((tenant) => tenant.id === OPERATOR_CURRENT_TENANT_ID)
    || all[0];
}

// --- Salidas programadas (RN-SAL-001, RN-RES-010) ------------------------------------------
// Datos de demostración coherentes: salidas semanales dentro de la vigencia del tour, con una
// salida casi llena y otra llena para mostrar el mensaje de cupo no disponible. Zona horaria
// del tenant (America/Bogota, UTC-5).
const CLIENT_DEPARTURE_SLOTS = [
  { offsetDays: 4, start: "06:30", end: "18:00", reservedRatio: 0.5 },
  { offsetDays: 11, start: "07:00", end: "17:30", reservedRatio: -1 },
  { offsetDays: 18, start: "06:30", end: "18:00", reservedRatio: 1 },
  { offsetDays: 25, start: "08:00", end: "16:00", reservedRatio: 0.2 },
];
const CLIENT_DEFAULT_DEPARTURE_CAPACITY = 20;

function getClientDepartureHolds() {
  return clientStorageGet(CLIENT_DEPARTURE_HOLDS_KEY, {});
}

// Cupo apartado por una reserva del cliente (se llama con el primer pago).
function holdClientDepartureSeats(departureId, code, travelers) {
  if (!departureId || !code) return;
  const holds = getClientDepartureHolds();
  holds[departureId] = { ...(holds[departureId] || {}), [code]: Number(travelers || 0) };
  clientStorageSet(CLIENT_DEPARTURE_HOLDS_KEY, holds);
}

// El cupo se libera por rechazo del primer pago antes de la confirmación o por cancelación de
// la reserva (RN-RES-007).
function clientDepartureHoldReleased(code) {
  let record = null;
  try { record = getUnifiedOperatorReservation(code); } catch { record = null; }
  return Boolean(record && (record.status === "Cancelada" || (Number(record.paidValue) <= 0 && record.receiptStatus === "Rechazado")));
}

function clientDepartureHasHold(departureId, code) {
  const held = getClientDepartureHolds()[departureId] || {};
  return Object.prototype.hasOwnProperty.call(held, code) && !clientDepartureHoldReleased(code);
}

function getClientEffectiveCapacity(tour) {
  const byTour = Number(tour.capacity) > 0 ? Number(tour.capacity) : null;
  const byTransport = tour.associatedTransport && Number(tour.associatedTransport.capacity) > 0 ? Number(tour.associatedTransport.capacity) : null;
  const candidates = [byTour, byTransport].filter((value) => value !== null);
  return candidates.length ? Math.min(...candidates) : CLIENT_DEFAULT_DEPARTURE_CAPACITY;
}

// Salidas del cliente = salidas reales del tenant (modelo compartido getOperatorDepartures):
// las programa el Administrador del tenant en Salidas y el cliente solo ve las Programadas,
// futuras y con su capacidad efectiva (menor entre el cupo del tour y los vehículos asignados) y
// cupos apartados reales. Una salida llena (disponible 0) se muestra como no disponible y no
// permite crear la reserva (G9). Los slots de demostración anteriores quedaron sin uso.
function getClientTourDepartures(tourId) {
  return getOperatorDepartures()
    .filter((departure) => departure.tourKey === tourId && departure.status === "Programada" && new Date(departure.startAt) > getOperatorNow())
    .map((departure) => ({
      id: departure.id,
      tourKey: departure.tourKey,
      date: departure.date,
      start: departure.start,
      end: departure.end,
      startLabel: departure.label,
      startsAt: departure.startAt,
      capacity: departure.effectiveCapacity,
      reserved: departure.held,
      available: departure.available,
      full: departure.isFull,
      status: departure.status,
    }));
}


function getClientDeparture(tourId, departureId) {
  return getClientTourDepartures(tourId).find((departure) => departure.id === departureId) || null;
}

// --- Plazos de pago (RN-RES-004, RN-RES-006) -----------------------------------------------
// Duraciones de demostración parametrizadas por tipo de pago. Ningún plazo supera la hora de
// inicio de la salida (límite absoluto, G1/H1).
// Los valores salen de la configuración "Parámetros de pago del tenant" (getOperatorPaymentParams);
// 48 h pago total / 24 h abono / 24 h ampliación / saldo 24 h antes son solo los predeterminados.
const CLIENT_HOUR_MS = 60 * 60 * 1000;

function computeClientPaymentDeadline(paymentType, departureStartsAt, createdAt = getOperatorNow(), serviceName = "", snapshot = null) {
  const params = snapshot || getOperatorPaymentParams(serviceName);
  const plazo = { initialHours: paymentType === "Abono" ? params.initialHoursDeposit : params.initialHoursTotal, extensionHours: params.extensionHours };
  const departure = new Date(departureStartsAt);
  const initialEnd = new Date(createdAt.getTime() + plazo.initialHours * CLIENT_HOUR_MS);
  const extendedEnd = new Date(initialEnd.getTime() + plazo.extensionHours * CLIENT_HOUR_MS);
  const min = (a, b) => (a < b ? a : b);
  return {
    initialHours: plazo.initialHours,
    extensionHours: plazo.extensionHours,
    effective: min(initialEnd, departure),
    maxExtended: min(extendedEnd, departure),
    departure,
    limitedByDeparture: departure <= initialEnd,
    balanceDeadline: new Date(departure.getTime() - params.balanceHoursBefore * CLIENT_HOUR_MS),
  };
}

function formatClientDateTime(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "Por definir";
  let timeZone = "America/Bogota";
  try { timeZone = getOperatorTenantTimezone() || timeZone; } catch { /* zona por defecto */ }
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone, day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
  }).formatToParts(date).reduce((acc, part) => { acc[part.type] = part.value; return acc; }, {});
  return `${parts.day} ${OPERATOR_MONTH_ABBR[Number(parts.month) - 1]} ${parts.year} · ${parts.hour}:${parts.minute}`;
}

// --- Reservas propias del cliente (vista unificada) ----------------------------------------
function normalizeClientReservationCode(code) {
  return String(code || "").replace(/^#/, "").trim();
}

// Superpone el estado real de la reserva (decisiones del equipo sobre comprobantes, efectivo
// recibido, saldo a favor, cancelaciones) cuando la reserva existe en el modelo del tenant.
function resolveClientReservationRecord(item) {
  let record = null;
  try { record = getUnifiedOperatorReservation(normalizeClientReservationCode(item.code)); } catch { record = null; }
  if (!record) return item;
  return {
    ...item,
    status: record.status,
    receiptStatus: record.receiptStatus,
    financialStatus: record.financialStatus,
    paid: record.paidValue,
    balance: record.balanceValue,
    value: record.value,
    creditBalance: record.creditBalanceValue,
    refunded: record.refundedValue,
    pendingTreatment: record.pendingTreatmentValue,
    cancellationCause: record.cancellationCause || item.cancellationCause,
    refundTreatment: record.refundTreatment || item.refundTreatment,
  };
}

function toClientReservationView(raw) {
  const code = normalizeClientReservationCode(raw.code);
  const status = raw.status || "Pendiente de pago";
  const numeric = (value) => (typeof value === "number" ? value : parseCOP(value));
  const value = numeric(raw.value ?? raw.finalValue ?? raw.budget ?? 0);
  const paid = numeric(raw.paid ?? 0);
  const balance = status === "Cancelada" ? 0 : (raw.balance != null ? numeric(raw.balance) : Math.max(value - paid, 0));
  return {
    ...raw,
    code,
    status,
    value,
    paid,
    balance,
    customer: raw.customer || OPERATOR_DEMO_CUSTOMERS[code] || (getStoredProfile()?.name) || "Cliente",
    tour: raw.tour || raw.experience || "Reserva",
    departureLabel: raw.departure || raw.startDate || "Por definir",
    startsAt: raw.startsAt || raw.departureStartsAt || "",
    departureEnd: raw.departureEnd || "",
    receiptStatus: raw.receiptStatus || "Sin comprobante",
    financialStatus: raw.financialStatus || (status === "Cancelada" ? "" : "Sin pago"),
    paymentType: raw.paymentType || "Por definir",
    paymentMedium: raw.paymentMedium || raw.method || "Por definir",
    creditBalance: Number(raw.creditBalance || 0),
    refunded: Number(raw.refunded || 0),
    pendingTreatment: Number(raw.pendingTreatment || 0),
    travelers: Number(raw.travelers || 1),
  };
}

function getClientReservationViews() {
  const demo = getClientDemoReservationsResolved();
  const stored = getClientReservationHistory()
    .filter((item) => !demo.some((demoItem) => demoItem.code === normalizeClientReservationCode(item.code)))
    .map(resolveClientReservationRecord);
  return [...demo, ...stored].map(toClientReservationView);
}

function findClientReservationView(code) {
  const normalized = normalizeClientReservationCode(code);
  return getClientReservationViews().find((view) => view.code === normalized) || null;
}

// --- Saldo a favor del cliente (RN-RES-009, GAP-014, GAP-015) ------------------------------
function getClientCreditRequests() {
  try {
    return getOperatorRefundRequests().filter((request) => request.origin === "saldo-a-favor");
  } catch {
    return [];
  }
}

function getClientCreditAvailable(view) {
  const requested = getClientCreditRequests()
    .filter((request) => request.reservationCode === view.code && request.status !== "Rechazada")
    .reduce((sum, request) => sum + Number(request.amountValue || 0), 0);
  return Math.max(Number(view.creditBalance || 0) - requested, 0);
}

function getClientCreditTotal() {
  return getClientReservationViews().reduce((sum, view) => sum + getClientCreditAvailable(view), 0);
}

// Aplica saldo a favor como pago validado de una reserva nueva del mismo tenant. Descuenta el
// monto consumido del saldo de la reserva de origen y deja trazabilidad (actor, fecha, destino).
function applyClientCreditToReservation(newCode, amount) {
  let remaining = Math.max(Number(amount || 0), 0);
  getClientReservationViews().forEach((view) => {
    if (remaining <= 0) return;
    const available = getClientCreditAvailable(view);
    if (available <= 0) return;
    const used = Math.min(available, remaining);
    const ledger = readOperatorStorage(OPERATOR_CREDIT_LEDGER_KEY, {});
    ledger[view.code] = [...(ledger[view.code] || []), {
      amount: -used,
      origin: `Aplicado a la reserva ${newCode}`,
      tenantId: OPERATOR_CURRENT_TENANT_ID,
      reservation: view.code,
      actor: "Cliente",
      at: getOperatorNow().toISOString(),
    }];
    writeOperatorStorage(OPERATOR_CREDIT_LEDGER_KEY, ledger);
    remaining -= used;
  });
  const applied = Math.max(Number(amount || 0), 0) - remaining;
  if (applied > 0) {
    addOperatorPaymentMovement(newCode, { kind: "credit", value: applied, applied, surplus: 0, medium: "Saldo a favor", actor: "Cliente" });
  }
  return applied;
}

function downloadClientReceipt(name, detail) {
  const blob = new Blob([`Comprobante simulado: ${name}\n${detail}\n`], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `${String(name).replace(/\.[a-z0-9]+$/i, "")}.txt`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 500);
}

function setupTourDetail(theme) {
  if (document.body.dataset.screen !== "tour-detail") return;

  const params = new URLSearchParams(window.location.search);
  const tourKey = params.get("tour");
  const sourceKey = params.get("source") || "tours";
  const services = getOperatorActiveTourServices();
  const tour = (tourKey && services[tourKey]) || null;
  const themeConfig = THEMES[theme];
  const sourceMap = {
    tours: {
      path: "tours.html",
      label: "Volver a tours",
    },
    dashboard: {
      path: "panel-cliente.html",
      label: "Volver al panel cliente",
    },
  };
  const sourceConfig = sourceMap[sourceKey] || sourceMap.tours;

  const backLink = document.querySelector(".travel-tours-back");
  if (backLink) backLink.setAttribute("href", withTheme(sourceConfig.path, theme));

  const backLabel = document.querySelector("[data-tour-back-label]");
  if (backLabel) backLabel.textContent = sourceConfig.label;

  // BUG corregido: esta pantalla mostraba SIEMPRE un tour fijo (con itinerario, "lo que
  // incluye" y "salidas disponibles" inventados) sin validar si el tour realmente existe,
  // esta activo y vigente. Ahora se resuelve desde el catalogo REAL (activo + vigente); si
  // no existe, se informa en vez de mostrar un tour de relleno.
  if (!tour) {
    document.title = `Tour no disponible | ${themeConfig.titlePrefix}`;
    const intro = document.querySelector(".travel-detail-intro");
    if (intro) intro.innerHTML = '<div class="travel-detail-copy"><h1>Tour no disponible</h1><div class="travel-detail-description">Este tour ya no está activo, vigente, o no existe.</div></div>';
    document.querySelector(".travel-detail-main")?.querySelectorAll(".travel-detail-section, [data-tour-risk-note]").forEach((node) => node.remove());
    document.querySelector(".travel-detail-summary-card")?.remove();
    return;
  }

  document.title = `${tour.name} | ${themeConfig.titlePrefix}`;

  document.querySelectorAll("[data-tour-field]").forEach((node) => {
    const key = node.dataset.tourField;
    if (key === "detailTitle") node.textContent = "Detalle del tour";
    if (key === "name") node.textContent = tour.name;
  });

  const priceFinalNode = document.querySelector("[data-tour-price-final]");
  const priceBeforeNode = document.querySelector("[data-tour-price-before]");
  const discountNode = document.querySelector("[data-tour-discount]");
  const finalPrice = tour.price * (1 - tour.discount);
  if (priceFinalNode) priceFinalNode.textContent = `Desde: ${formatCOP(finalPrice)}`;
  if (priceBeforeNode) {
    priceBeforeNode.textContent = `Antes: ${formatCOP(tour.price)}`;
    priceBeforeNode.hidden = !tour.discount;
  }
  if (discountNode) {
    discountNode.textContent = tour.discount ? `${Math.round(tour.discount * 100)}% de descuento` : "";
    discountNode.hidden = !tour.discount;
  }

  // Vigencia, capacidad y restricciones como bloques informativos (PDR v1.7.1): mismos
  // valores ya usados en el paso de reserva (create-reservation / reservar-tour), solo con
  // mejor jerarquia visual aqui. Capacidad/restricciones solo se muestran cuando el dato
  // realmente existe (no todo tour dinamico las tiene, y los 4 tours base del catalogo no
  // las modelan): nunca se inventa un valor de relleno.
  const validityCard = `<div class="travel-detail-info-card"><span>Vigencia</span><strong>${formatOperatorDate(tour.start)} - ${formatOperatorDate(tour.end)}</strong></div>`;
  const capacityCard = tour.capacity != null
    ? `<div class="travel-detail-info-card"><span>Capacidad</span><strong>Hasta ${tour.capacity} viajeros</strong></div>`
    : "";
  const restrictionsCard = tour.restrictions
    ? `<div class="travel-detail-info-card"><span>Restricciones</span><strong>${escapeHtml(tour.restrictions)}</strong></div>`
    : "";

  const infoGrid = document.querySelector("[data-tour-info-grid]");
  if (infoGrid) infoGrid.innerHTML = validityCard + capacityCard + restrictionsCard;

  const summaryInfo = document.querySelector("[data-tour-summary-info]");
  if (summaryInfo) summaryInfo.innerHTML = validityCard + capacityCard;

  // Salidas programadas (RN-SAL-001, RN-RES-010): fecha, hora de inicio, hora de finalización
  // estimada y cupos disponibles de cada salida; el cupo se controla por salida.
  const departures = getClientTourDepartures(tour.key);
  const departuresNode = document.querySelector("[data-tour-departures]");
  if (departuresNode) {
    departuresNode.innerHTML = departures.length
      ? departures.map((departure) => `<div class="client-departure-row"><strong>${escapeHtml(formatOperatorDate(departure.date))}</strong><span>Inicio ${escapeHtml(departure.start)} · Finalización estimada ${escapeHtml(departure.end)}</span><span>${departure.full ? "Salida llena: sin cupos disponibles" : `${departure.available} de ${departure.capacity} cupos disponibles`}</span></div>`).join("")
      : '<p class="travel-dashboard-copy">No hay salidas programadas disponibles para este tour por ahora.</p>';
  }

  // Servicio relacionado real: solo Transporte (RN-TRA-001/002), cuando el Administrador
  // realmente lo asocio a este Tour. Hoteles y restaurantes son establecimientos asociados por
  // convenio (solo contacto): no son un servicio relacionado reservable del Tour.
  const relatedSection = document.querySelector("[data-tour-related-section]");
  const relatedTags = document.querySelector("[data-tour-related]");
  if (relatedSection && relatedTags) {
    if (tour.associatedTransport) {
      relatedSection.hidden = false;
      relatedTags.innerHTML = `<span>Transporte incluido: ${escapeHtml(tour.associatedTransport.name)} (${escapeHtml(tour.associatedTransport.route)})</span>`;
    } else {
      relatedSection.hidden = true;
      relatedTags.innerHTML = "";
    }
  }

  // Modalidades de pago realmente habilitadas para este tour (Fase 1: Transferencia,
  // Efectivo, Abono, segun corresponda). Solo mejora de presentacion, misma lista real ya
  // usada en el paso de reserva.
  const paymentsNode = document.querySelector("[data-tour-payments]");
  if (paymentsNode) paymentsNode.innerHTML = (tour.payments || []).map((method) => `<span>${escapeHtml(method)}</span>`).join("");

  // Condiciones de reserva reales del tour, en un bloque destacado.
  const conditionsNode = document.querySelector("[data-tour-conditions]");
  if (conditionsNode) conditionsNode.innerHTML = (tour.conditions || []).map((condition) => `<li>${escapeHtml(condition)}</li>`).join("");

  const availabilityNode = document.querySelector('[data-tour-field="availability"]');
  if (availabilityNode) availabilityNode.textContent = `Vigente del ${formatOperatorDate(tour.start)} al ${formatOperatorDate(tour.end)}.`;

  const bookingButton = document.querySelector("[data-tour-booking-button]");
  if (bookingButton) {
    const hasOpenDeparture = departures.some((departure) => !departure.full);
    bookingButton.disabled = !hasOpenDeparture;
    bookingButton.textContent = hasOpenDeparture ? "Elegir salida y reservar" : "Sin salidas con cupo disponible";
    bookingButton.addEventListener("click", () => {
      window.location.href = `${withTheme("reservar-tour.html", theme)}&tour=${encodeURIComponent(tour.key)}&source=${encodeURIComponent(sourceKey)}`;
    });
  }

  const riskNote = document.querySelector("[data-tour-risk-note]");
  if (riskNote) riskNote.hidden = !tour.risk;

  // No hay imagenes comerciales de stock reales por Tour: solo un recurso creado
  // dinamicamente en "Nuevo servicio" puede traer una imagen real cargada por el
  // Administrador. Si no existe, no se reserva espacio para ninguna imagen (evita el
  // espacio vacio que dejaba la galeria anterior en tours sin imagen real).
  const summaryImage = document.querySelector("[data-tour-summary-image]");
  if (summaryImage) {
    if (tour.image) {
      summaryImage.hidden = false;
      summaryImage.style.backgroundImage = `url("${tour.image.replace(/"/g, "%22")}")`;
    } else {
      summaryImage.hidden = true;
    }
  }
}

function setupTourBooking(theme) {
  if (document.body.dataset.screen !== "tour-booking") return;

  const params = new URLSearchParams(window.location.search);
  const tourKey = params.get("tour") || "";
  const tour = getOperatorActiveTourService(tourKey);
  const backLink = document.querySelector("[data-tour-booking-back]");
  const bookingName = document.querySelector("[data-booking-tour-name]");
  const bookingCategory = document.querySelector("[data-booking-tour-category]");
  const bookingPrice = document.querySelector("[data-booking-tour-price]");
  const projectedValueNode = document.querySelector("[data-booking-projected-value]");
  const discountBlock = document.querySelector("[data-booking-discount-block]");
  const discountValueNode = document.querySelector("[data-booking-discount-value]");
  const finalValueNode = document.querySelector("[data-booking-final-value]");
  const bookingSelection = document.querySelector("[data-booking-selection]");
  const capacityMessage = document.querySelector("[data-booking-capacity-message]");
  const conditionsList = document.querySelector("[data-booking-conditions-list]");
  const conditionsEmpty = document.querySelector("[data-booking-conditions-empty]");
  const continueButton = document.querySelector("[data-booking-continue]");
  const departuresList = document.querySelector("[data-booking-departures]");
  const departuresCard = document.querySelector("[data-booking-departures-card]");
  const checkoutStorageKey = "multitour-tour-checkout";

  if (backLink) {
    backLink.setAttribute("href", `${withTheme("detalle-tour.html", theme)}&tour=${encodeURIComponent(tourKey)}&source=tours`);
  }

  if (!tour) {
    if (bookingName) bookingName.textContent = "Tour no disponible";
    if (bookingCategory) bookingCategory.textContent = "Este tour ya no está activo, vigente, o no existe.";
    departuresCard?.remove();
    document.querySelectorAll("[data-counter]").forEach((counter) => counter.closest(".travel-booking-card")?.remove());
    if (continueButton) continueButton.disabled = true;
    return;
  }

  // PDR v1.9 (RN-RES-010, RN-SAL-001): el cliente elige una SALIDA programada (fecha, hora de
  // inicio, hora de finalización estimada y cupos). Cada reserva corresponde a una única salida;
  // el cupo se controla por salida y se aparta con el primer pago (RN-RES-007).
  const departures = getClientTourDepartures(tourKey);
  let selectedId = params.get("salida") || (departures.find((departure) => !departure.full) || {}).id || "";
  let travelers = 1;

  if (bookingName) bookingName.textContent = tour.name;
  if (bookingCategory) bookingCategory.textContent = `Vigente del ${formatOperatorDate(tour.start)} al ${formatOperatorDate(tour.end)}. Elige una de sus salidas programadas.`;
  if (bookingPrice) bookingPrice.textContent = `Desde ${formatCOP(tour.price * (1 - tour.discount))}`;
  if (conditionsList) {
    const conditions = tour.conditions || [];
    conditionsList.innerHTML = conditions.map((condition) => `<li>${escapeHtml(condition)}</li>`).join("");
    conditionsList.hidden = conditions.length === 0;
    if (conditionsEmpty) conditionsEmpty.hidden = conditions.length > 0;
  }

  const selectedDeparture = () => departures.find((departure) => departure.id === selectedId) || null;

  const renderSummary = () => {
    const departure = selectedDeparture();
    const projectedValue = tour.price * travelers;
    const discountValue = Math.round(projectedValue * tour.discount);
    const finalValue = projectedValue - discountValue;
    const fits = Boolean(departure) && travelers <= departure.available;
    const bookable = Boolean(departure) && !departure.full && fits;

    if (projectedValueNode) projectedValueNode.textContent = formatCOP(projectedValue);
    if (discountBlock) discountBlock.hidden = discountValue === 0;
    if (discountValueNode) discountValueNode.textContent = `- ${formatCOP(discountValue)}`;
    if (finalValueNode) finalValueNode.textContent = formatCOP(finalValue);
    if (bookingSelection) {
      bookingSelection.textContent = departure
        ? `${formatOperatorDate(departure.date)} · ${departure.start} - ${travelers} ${travelers === 1 ? "viajero" : "viajeros"}`
        : "Sin salida seleccionada";
    }
    if (capacityMessage) {
      let message = "";
      if (!departures.length) message = "Este tour no tiene salidas programadas disponibles por ahora.";
      else if (!departure) message = "Selecciona una salida programada para continuar.";
      else if (departure.full) message = "Esta salida está llena: no hay cupos disponibles y no se crea la reserva. Elige otra salida.";
      else if (!fits) message = `Cupo no disponible: esta salida solo tiene ${departure.available} ${departure.available === 1 ? "cupo disponible" : "cupos disponibles"} y seleccionaste ${travelers} viajeros.`;
      else message = `Hay ${departure.available} ${departure.available === 1 ? "cupo disponible" : "cupos disponibles"} en la salida seleccionada. El cupo no se garantiza hasta tu primer pago (comprobante presentado o efectivo registrado).`;
      capacityMessage.textContent = message;
      capacityMessage.classList.toggle("is-error", !bookable);
    }
    if (continueButton) continueButton.disabled = !bookable;
  };

  const renderDepartures = () => {
    if (!departuresList) return;
    if (!departures.length) {
      departuresList.innerHTML = '<p class="travel-dashboard-copy" data-booking-departures-empty>No hay salidas programadas disponibles para este tour por ahora.</p>';
      return;
    }
    departuresList.innerHTML = departures.map((departure) => `
      <label class="client-departure-option${departure.id === selectedId ? " is-active" : ""}${departure.full ? " is-full" : ""}">
        <input type="radio" name="departure" value="${escapeHtml(departure.id)}"${departure.id === selectedId ? " checked" : ""} />
        <span class="client-departure-main">
          <strong>${escapeHtml(formatOperatorDate(departure.date))}</strong>
          <small>Inicio ${escapeHtml(departure.start)} · Finalización estimada ${escapeHtml(departure.end)}</small>
        </span>
        <span class="client-departure-seats">${departure.full ? "Salida llena" : `${departure.available} de ${departure.capacity} cupos disponibles`}</span>
      </label>`).join("");
  };

  departuresList?.addEventListener("change", (event) => {
    if (event.target && event.target.name === "departure") {
      selectedId = event.target.value;
      renderDepartures();
      renderSummary();
    }
  });

  document.querySelectorAll("[data-counter]").forEach((counter) => {
    const valueNode = counter.querySelector("[data-counter-value]");
    const type = counter.dataset.counter;
    valueNode.textContent = String(travelers);

    counter.querySelectorAll("[data-counter-action]").forEach((button) => {
      button.addEventListener("click", () => {
        const isIncrease = button.dataset.counterAction === "increase";
        if (type === "travelers") {
          travelers = isIncrease ? travelers + 1 : Math.max(1, travelers - 1);
          valueNode.textContent = String(travelers);
        }
        renderSummary();
      });
    });
  });

  if (continueButton) {
    continueButton.addEventListener("click", () => {
      const departure = selectedDeparture();
      if (!departure || departure.full || travelers > departure.available) return;
      const projectedValue = tour.price * travelers;
      const discountValue = Math.round(projectedValue * tour.discount);
      const finalValue = projectedValue - discountValue;
      const booking = {
        experience: tour.name,
        startDate: departure.startLabel,
        endDate: departure.startLabel,
        isoDate: departure.date,
        departureId: departure.id,
        departureDate: departure.date,
        departureStart: departure.start,
        departureEnd: departure.end,
        departureStartsAt: departure.startsAt,
        travelers: String(travelers),
        budget: formatCOP(finalValue),
        projectedValue,
        discountValue,
        finalValue,
        savedAt: getOperatorNow().toLocaleDateString("es-CO"),
        unitPrice: finalValue / travelers,
        tourKey,
        risk: tour.risk,
        payments: tour.payments,
        conditions: tour.conditions,
        transportSelected: tour.associatedTransport ? `${tour.associatedTransport.name} — ${tour.associatedTransport.route}` : "",
      };
      clientStorageSet(checkoutStorageKey, booking);
      window.location.href = `${withTheme("finalizar-reserva.html", theme)}&tour=${encodeURIComponent(tourKey)}`;
    });
  }

  renderDepartures();
  renderSummary();
}

function setupTourCheckout(theme) {
  if (document.body.dataset.screen !== "tour-checkout") return;

  const storageKey = "multitour-dashboard-booking";
  const checkoutStorageKey = "multitour-tour-checkout";
  const params = new URLSearchParams(window.location.search);
  const existingCode = normalizeClientReservationCode(params.get("reserva"));
  const content = document.querySelector(".travel-checkout-content");
  const feedbackNode = document.querySelector("[data-checkout-feedback]");
  const payButton = document.querySelector("[data-checkout-pay]");
  const say = (message) => { if (feedbackNode) feedbackNode.textContent = message; };
  const setText = (selector, value) => { const node = document.querySelector(selector); if (node) node.textContent = value; };
  const closeFlow = (message, backHref) => {
    if (content) content.innerHTML = `<article class="travel-booking-card"><p class="travel-dashboard-copy">${message}</p><p><a class="travel-dashboard-section-action" href="${backHref}">Volver</a></p></article>`;
    document.querySelector(".travel-booking-sticky-bar")?.remove();
  };

  // ---- Origen de la reserva: nueva (borrador del flujo) o existente (completar el saldo) ----
  let booking = null;
  let existing = null;
  if (existingCode) {
    existing = findClientReservationView(existingCode);
  } else {
    booking = clientStorageGet(checkoutStorageKey, null);
  }
  const isExisting = Boolean(existingCode);
  const tourKey = isExisting ? (existing?.tourKey || "") : (booking?.tourKey || params.get("tour") || "");
  const tour = getOperatorActiveTourService(tourKey);

  const backLink = document.querySelector("[data-tour-checkout-back]");
  if (backLink) {
    backLink.setAttribute(
      "href",
      isExisting
        ? withTheme("mis-reservas.html", theme)
        : `${withTheme("reservar-tour.html", theme)}&tour=${encodeURIComponent(tourKey)}&source=tour-detail`,
    );
    if (isExisting) {
      const label = backLink.querySelector("span:last-child");
      if (label) label.textContent = "Volver a mis reservas";
      setText("[data-checkout-title]", "Completar el pago de la reserva");
      setText("[data-checkout-secure-pill]", "Completa el saldo de una reserva existente: no se crea una reserva nueva.");
    }
  }

  // Sin borrador real ni reserva existente utilizable no se inventan datos.
  if (isExisting) {
    if (!existing) return closeFlow("No encontramos la reserva indicada en tu cuenta.", withTheme("mis-reservas.html", theme));
    if (existing.status === "Cancelada") return closeFlow(`La reserva ${escapeHtml(existing.code)} está Cancelada: no admite nuevos pagos y no puede reactivarse.`, withTheme("mis-reservas.html", theme));
    if (existing.balance <= 0) return closeFlow(`La reserva ${escapeHtml(existing.code)} no tiene saldo pendiente.`, withTheme("mis-reservas.html", theme));
    if (getClientInactiveTenantMessage()) return closeFlow(`${escapeHtml(getClientInactiveTenantMessage())} Tus reservas siguen visibles en modo de solo lectura.`, withTheme("mis-reservas.html", theme));
    if (existing.receiptStatus === "En validación") return closeFlow(`La reserva ${escapeHtml(existing.code)} ya tiene un comprobante En validación. Espera su revisión (hasta 24 horas corridas) antes de presentar otro pago.`, withTheme("mis-reservas.html", theme));
    if (existing.startsAt && getOperatorNow() >= new Date(existing.startsAt)) return closeFlow("Desde la hora programada de inicio de la salida no se admiten pagos ni comprobantes asociados a ella.", withTheme("mis-reservas.html", theme));
  } else if (!booking) {
    return closeFlow("No hay una reserva en curso. Vuelve a Explorar para seleccionar un tour y una salida.", withTheme("tours.html", theme));
  }

  const travelers = Number((isExisting ? existing.travelers : booking.travelers) || 1);
  const projectedValue = isExisting ? existing.value : Number(booking.projectedValue || 0);
  const discountValue = isExisting ? 0 : Number(booking.discountValue || 0);
  const finalValue = isExisting ? existing.value : Number(booking.finalValue ?? projectedValue - discountValue);
  const experienceName = isExisting ? existing.tour : booking.experience;
  const departureLabel = isExisting ? existing.departureLabel : booking.startDate;
  const departureStartsAt = isExisting ? existing.startsAt : booking.departureStartsAt;
  const departureEnd = isExisting ? existing.departureEnd : booking.departureEnd;

  const imageNode = document.querySelector("[data-checkout-image]");
  if (imageNode && tour?.image) imageNode.style.backgroundImage = `url("${tour.image.replace(/"/g, "%22")}")`;
  setText("[data-checkout-tour-name]", experienceName);
  setText("[data-checkout-date]", departureLabel);
  setText("[data-checkout-departure-detail]", departureEnd ? `Salida única de esta reserva · finalización estimada ${departureEnd}` : "Cada reserva corresponde a una única salida");
  setText("[data-checkout-guests]", `${travelers} ${travelers === 1 ? "viajero" : "viajeros"}`);
  setText("[data-checkout-subtotal-label]", `Precio base x${travelers}`);
  setText("[data-checkout-subtotal]", formatCOP(projectedValue));

  // PDR v1.9: el resumen usa únicamente valor proyectado, descuentos aplicables y valor final.
  const discountRow = document.querySelector("[data-checkout-discount-row]");
  if (discountRow) discountRow.hidden = discountValue === 0;
  setText("[data-checkout-discount]", `-${formatCOP(discountValue)}`);
  setText("[data-checkout-total]", formatCOP(finalValue));
  setText("[data-checkout-total-sticky]", formatCOP(finalValue));
  setText("[data-checkout-selection]", `${departureLabel} - ${travelers} ${travelers === 1 ? "viajero" : "viajeros"}`);
  setText("[data-checkout-code]", isExisting ? `#${existing.code}` : "Borrador");

  if (isExisting) {
    ["[data-checkout-holder-section]", "[data-checkout-travelers-section]", "[data-checkout-risk-section]", "[data-checkout-conditions-section]", "[data-checkout-subtotal-row]", "[data-checkout-discount-row]"].forEach((selector) => {
      const node = document.querySelector(selector);
      if (node) node.hidden = true;
    });
    const paidRow = document.querySelector("[data-checkout-paid-row]");
    const balanceRow = document.querySelector("[data-checkout-balance-row]");
    if (paidRow) paidRow.hidden = false;
    if (balanceRow) balanceRow.hidden = false;
    setText("[data-checkout-paid]", formatCOP(existing.paid));
    setText("[data-checkout-balance]", formatCOP(existing.balance));
  }

  // ---- Titular, acompañantes y requisitos de riesgo (solo reservas nuevas) -------------------
  const holderNameInput = document.querySelector("[data-checkout-holder-name]");
  const holderDocumentInput = document.querySelector("[data-checkout-holder-document]");
  const holderPhoneInput = document.querySelector("[data-checkout-holder-phone]");
  const holderEmailInput = document.querySelector("[data-checkout-holder-email]");
  const holderBirthDateInput = document.querySelector("[data-checkout-holder-birthdate]");
  const companionsCount = isExisting ? 0 : Math.max(0, travelers - 1);

  if (!isExisting) {
    // Titular: se prellena con el mismo perfil local ya usado para el saludo del panel cliente.
    const profile = getStoredProfile();
    if (holderNameInput && profile?.name) holderNameInput.value = profile.name;
    if (holderPhoneInput && profile?.phone) holderPhoneInput.value = profile.phone;
    if (holderEmailInput && profile?.email) holderEmailInput.value = profile.email;

    const companionsCountNode = document.querySelector("[data-checkout-companions-count]");
    if (companionsCountNode) {
      companionsCountNode.textContent =
        companionsCount === 0
          ? "No requiere acompañantes"
          : `${companionsCount} acompañante${companionsCount === 1 ? "" : "s"} requerido${companionsCount === 1 ? "" : "s"}`;
    }
    const companionsContainer = document.querySelector("[data-checkout-companions]");
    if (companionsContainer) {
      companionsContainer.innerHTML = Array.from(
        { length: companionsCount },
        (_, index) => `
        <article class="travel-companion-card">
          <div class="travel-checkout-section-title"><h2>Acompañante ${index + 1}</h2></div>
          <div class="travel-companion-grid">
            <label>Nombre completo<input type="text" required data-companion-name="${index}" placeholder="Nombre completo" /></label>
            <label>Documento de identidad<input type="text" required data-companion-document="${index}" placeholder="Documento" /></label>
            <label>Fecha de nacimiento<input type="date" required data-companion-birthdate="${index}" /></label>
            <label>Contacto de emergencia<input type="text" required data-companion-emergency="${index}" placeholder="Nombre y teléfono" /></label>
          </div>
        </article>`,
      ).join("");
    }

    // Requisitos de actividad de riesgo: solo si el servicio está marcado como actividad de
    // riesgo, para el titular y cada acompañante.
    const riskSection = document.querySelector("[data-checkout-risk-section]");
    const riskFieldsContainer = document.querySelector("[data-checkout-risk-fields]");
    if (riskSection) riskSection.hidden = !booking.risk;
    if (booking.risk && riskFieldsContainer) {
      const people = ["Titular", ...Array.from({ length: companionsCount }, (_, index) => `Acompañante ${index + 1}`)];
      riskFieldsContainer.innerHTML = people
        .map(
          (label, index) => `
          <article class="travel-companion-card">
            <div class="travel-checkout-section-title"><h2>${label}</h2></div>
            <div class="travel-companion-grid">
              <label>Tipo de sangre<input type="text" required data-risk-blood="${index}" placeholder="Ej. O+" /></label>
              <label>Contacto de emergencia<input type="text" required data-risk-emergency="${index}" placeholder="Nombre y teléfono" /></label>
            </div>
            <label>Restricciones físicas o movilidad reducida<textarea required data-risk-restrictions="${index}" placeholder="Indica restricciones o escribe Ninguna."></textarea></label>
            <label class="travel-checkout-consent"><input type="checkbox" required data-risk-consent="${index}" /> Consentimiento informado o exoneración registrado.</label>
          </article>`,
        )
        .join("");
    }

    const conditionsListNode = document.querySelector("[data-checkout-conditions-list]");
    if (conditionsListNode) {
      conditionsListNode.innerHTML = (booking.conditions || []).map((condition) => `<li>${escapeHtml(condition)}</li>`).join("");
    }
  }

  // ---- Tipo y medio de pago (conceptos separados: RN-RES-004) ---------------------------------
  const paymentConfig = { types: ["Pago total", "Abono"], media: ["Transferencia", "Efectivo"] };
  const depositFields = document.querySelector("[data-checkout-deposit-fields]");
  const amountInput = document.querySelector("[data-checkout-deposit-amount]");
  const deadlineBox = document.querySelector("[data-checkout-deadline-box]");
  const serviceName = tour?.name || experienceName;
  const minimumDeposit = operatorMinimumDeposit(finalValue, serviceName);
  const minimumPercent = getOperatorMinimumDepositPercent(serviceName);
  const typeGroup = document.querySelector("[data-checkout-type-group]");
  if (isExisting && typeGroup) typeGroup.hidden = true;
  setText("[data-checkout-existing-type]", isExisting ? `Tipo de pago de la reserva: ${existing.paymentType}. Aquí pagas una parte o todo el saldo pendiente (${formatCOP(existing.balance)}).` : "");
  const existingTypeNode = document.querySelector("[data-checkout-existing-type]");
  if (existingTypeNode) existingTypeNode.hidden = !isExisting;
  if (isExisting && amountInput) {
    amountInput.value = String(existing.balance);
    amountInput.max = String(existing.balance);
    setText("[data-checkout-amount-label]", "Monto a pagar ahora");
  }

  const currentType = () => {
    if (isExisting) return existing.paymentType;
    return document.querySelector('input[name="payment-type"]:checked')?.value === "deposit" ? "Abono" : "Pago total";
  };

  const renderDeadline = () => {
    if (!deadlineBox) return;
    const type = currentType();
    const plazo = computeClientPaymentDeadline(type, departureStartsAt || getOperatorNow(), getOperatorNow(), serviceName);
    const lines = [];
    if (isExisting) {
      const deadlineAt = existing.status === "Pendiente de pago"
        ? (existing.paymentDeadlineAt || plazo.effective.toISOString())
        : (existing.balanceDeadlineAt || plazo.balanceDeadline.toISOString());
      lines.push(`<p><strong>${existing.status === "Pendiente de pago" ? "Plazo de pago vigente" : "Plazo para completar el saldo"}:</strong> hasta ${escapeHtml(formatClientDateTime(deadlineAt))}.</p>`);
      lines.push(`<p><strong>Límite absoluto:</strong> ningún plazo supera la hora de inicio de la salida (${escapeHtml(formatClientDateTime(plazo.departure))}); desde esa hora no se admiten pagos ni comprobantes.</p>`);
      lines.push("<p>Pagar el saldo de una reserva ya Confirmada no vuelve a validar ni a asignar cupo; solo cambia su situación financiera.</p>");
    } else {
      lines.push(`<p><strong>Plazo inicial de pago (${escapeHtml(type)}):</strong> ${plazo.initialHours} horas desde la creación de la reserva; vence ${escapeHtml(formatClientDateTime(plazo.effective))}${plazo.limitedByDeparture ? ", limitado por la hora de inicio de la salida" : ""}.</p>`);
      lines.push(`<p><strong>Ampliación única:</strong> antes del vencimiento, un Colaborador operativo o el Administrador del tenant puede conceder una sola ampliación de hasta ${plazo.extensionHours} horas (máximo hasta ${escapeHtml(formatClientDateTime(plazo.maxExtended))}).</p>`);
      lines.push(`<p><strong>Límite absoluto:</strong> ningún plazo supera la hora de inicio de la salida (${escapeHtml(formatClientDateTime(plazo.departure))}). Si no se cumple el pago en el plazo, la reserva se cancela automáticamente y el cupo se libera.</p>`);
      if (type === "Abono") lines.push(`<p><strong>Saldo del abono:</strong> una vez Confirmada, debes completarlo y que sea validado antes de ${escapeHtml(formatClientDateTime(plazo.balanceDeadline))} (plazo configurado por el operador; nunca después de la hora de inicio de la salida).</p>`);
      lines.push("<p>Si presentas un comprobante dentro del plazo, la reserva no se cancela mientras esté En validación. El cupo se aparta con tu primer pago, no al crear la reserva.</p>");
    }
    deadlineBox.innerHTML = lines.join("");
  };

  // Saldo a favor disponible (RN-RES-009): se aplica como pago validado a una reserva nueva.
  const creditBox = document.querySelector("[data-checkout-credit-box]");
  const creditApply = document.querySelector("[data-checkout-credit-apply]");
  // GAP-015: también puede aplicarse al saldo pendiente de una reserva existente.
  const availableCredit = getClientCreditTotal();
  if (creditBox) creditBox.hidden = availableCredit <= 0;
  if (availableCredit > 0) setText("[data-checkout-credit-label]", isExisting
    ? `Aplicar mi saldo a favor disponible (${formatCOP(availableCredit)}) al saldo pendiente de esta reserva. El valor aplicado cuenta como pago validado, sin comprobante.`
    : `Aplicar mi saldo a favor disponible (${formatCOP(availableCredit)}) como pago de esta reserva. El valor aplicado cuenta como pago validado.`);

  const syncPaymentCopy = () => {
    const selectedType = currentType();
    const selectedMedium = document.querySelector('input[name="payment-medium"]:checked')?.value || "";
    document.querySelectorAll("[data-payment-type-option]").forEach((option) => { option.hidden = !paymentConfig.types.includes(option.dataset.paymentTypeValue); });
    document.querySelectorAll("[data-payment-medium-option]").forEach((option) => { option.hidden = !paymentConfig.media.includes(option.dataset.paymentMediumValue); });
    const showAmount = isExisting || selectedType === "Abono";
    if (depositFields) depositFields.hidden = !showAmount;
    const depositHint = document.querySelector("[data-checkout-deposit-hint]");
    if (depositHint) {
      depositHint.textContent = isExisting
        ? `Saldo pendiente: ${formatCOP(existing.balance)}. Puedes pagar una parte o todo el saldo.`
        : selectedType === "Abono"
          ? `Abono mínimo del servicio: ${formatCOP(minimumDeposit)} (${minimumPercent} % del valor final después de aplicar descuentos). La reserva se confirma cuando se valida como mínimo ese valor; el saldo restante queda pendiente.`
          : "";
    }
    if (!isExisting && amountInput) {
      amountInput.min = String(minimumDeposit);
      amountInput.max = String(finalValue);
      amountInput.placeholder = `Mínimo ${formatCOP(minimumDeposit)}`;
      if (selectedType === "Abono" && !amountInput.value) amountInput.value = String(minimumDeposit);
    }
    const cashHint = document.querySelector("[data-checkout-cash-hint]");
    if (cashHint) cashHint.hidden = selectedMedium !== "cash";
    const transferHint = document.querySelector("[data-checkout-transfer-hint]");
    if (transferHint) transferHint.hidden = selectedMedium !== "bank";
    if (payButton) {
      payButton.textContent = selectedMedium === "bank"
        ? "Continuar para subir comprobante"
        : selectedMedium === "cash"
          ? (isExisting ? "Registrar promesa de pago en efectivo" : "Crear reserva Pendiente de pago")
          : "Continuar";
    }
    renderDeadline();
  };
  document.querySelectorAll('input[name="payment-type"], input[name="payment-medium"]').forEach((input) => input.addEventListener("change", syncPaymentCopy));
  const firstType = document.querySelector('input[name="payment-type"]');
  const firstMedium = document.querySelector('input[name="payment-medium"]');
  if (firstType) firstType.checked = true;
  if (firstMedium) firstMedium.checked = true;
  syncPaymentCopy();

  if (!payButton) return;

  const normalizeDoc = (value) =>
    String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");

  // ---- Reserva existente: completar el saldo ------------------------------------------------
  if (isExisting) {
    payButton.addEventListener("click", () => {
      say("");
      const selectedMedium = document.querySelector('input[name="payment-medium"]:checked')?.value || "";
      if (!selectedMedium) return say("Selecciona el medio de pago.");
      const amount = Math.round(Number(amountInput?.value || 0));
      if (!(amount > 0) || amount > existing.balance) return say(`Ingresa un monto válido: mayor a cero y hasta el saldo pendiente (${formatCOP(existing.balance)}).`);
      // Saldo a favor aplicado al saldo pendiente (GAP-015): pago validado sin comprobante; si es el
      // primer pago, aparta el cupo en la misma operación.
      let creditUsed = 0;
      if (availableCredit > 0 && creditApply?.checked) {
        const credit = applyOperatorCreditToExistingReservation(existing.code, Math.min(availableCredit, amount), { self: true });
        if (!credit.ok) return say(credit.error);
        creditUsed = credit.applied;
        if (creditUsed >= amount) {
          say(`Aplicamos ${formatCOP(creditUsed)} de tu saldo a favor como pago validado de la reserva #${existing.code}.`);
          payButton.disabled = true;
          window.setTimeout(() => { window.location.href = withTheme("mis-reservas.html", theme); }, 1200);
          return;
        }
      }
      const amountToPay = amount - creditUsed;
      if (selectedMedium === "bank") {
        clientStorageSet(CLIENT_PAYMENT_CONTEXT_KEY, { code: existing.code, amount: amountToPay });
        window.location.href = `${withTheme("pago-transferencia.html", theme)}&reserva=${encodeURIComponent(existing.code)}&monto=${amountToPay}`;
        return;
      }
      say(`Registramos tu intención de pagar ${formatCOP(amountToPay)} en efectivo. No es un pago validado: el saldo sigue pendiente y el pago solo cuenta cuando el equipo del operador reciba y registre el dinero dentro del plazo.`);
      payButton.disabled = true;
    });
    return;
  }

  // ---- Reserva nueva -------------------------------------------------------------------------
  payButton.addEventListener("click", () => {
    say("");
    const selectedType = currentType();
    const selectedMedium = document.querySelector('input[name="payment-medium"]:checked')?.value || "";
    const conditionsAccepted = Boolean(document.querySelector("[data-checkout-conditions-accept]")?.checked);
    const holderName = holderNameInput?.value.trim() || "";
    const holderDocument = holderDocumentInput?.value.trim() || "";
    const holderPhone = holderPhoneInput?.value.trim() || "";
    const holderEmail = holderEmailInput?.value.trim() || "";
    const holderBirthDate = holderBirthDateInput?.value || "";
    const termsAccepted = Boolean(document.querySelector("[data-checkout-terms-accept]")?.checked);

    const companions = Array.from({ length: companionsCount }, (_, index) => ({
      name: document.querySelector(`[data-companion-name="${index}"]`)?.value.trim() || "",
      document: document.querySelector(`[data-companion-document="${index}"]`)?.value.trim() || "",
      birthDate: document.querySelector(`[data-companion-birthdate="${index}"]`)?.value || "",
      emergency: document.querySelector(`[data-companion-emergency="${index}"]`)?.value.trim() || "",
    }));

    if (!holderName || !holderDocument || !holderPhone || !holderEmail || !holderBirthDate) return say("Completa nombre, documento, teléfono, correo y fecha de nacimiento del titular.");
    if (companions.some((companion) => !companion.name || !companion.document || !companion.birthDate || !companion.emergency)) return say("Completa los datos de todos los acompañantes: nombre, documento, fecha de nacimiento y contacto de emergencia.");
    const allDocs = [holderDocument, ...companions.map((companion) => companion.document)].map(normalizeDoc).filter(Boolean);
    if (allDocs.some((doc, index) => allDocs.indexOf(doc) !== index)) return say("El documento del titular y los acompañantes debe ser único dentro de la reserva.");
    if (booking.risk) {
      const peopleCount = 1 + companionsCount;
      for (let index = 0; index < peopleCount; index += 1) {
        const blood = document.querySelector(`[data-risk-blood="${index}"]`)?.value.trim();
        const emergency = document.querySelector(`[data-risk-emergency="${index}"]`)?.value.trim();
        const restrictions = document.querySelector(`[data-risk-restrictions="${index}"]`)?.value.trim();
        const consent = document.querySelector(`[data-risk-consent="${index}"]`)?.checked;
        if (!blood || !emergency || !restrictions || !consent) return say("Completa los requisitos de actividad de riesgo para cada viajero.");
      }
    }
    if (!termsAccepted) return say("Debes aceptar los términos y condiciones para continuar.");
    if (!conditionsAccepted) return say("Debes aceptar las condiciones aplicables para continuar.");
    if (!selectedMedium) return say("Selecciona el medio de pago.");

    let depositAmount = 0;
    if (selectedType === "Abono") {
      depositAmount = Math.round(Number(amountInput?.value || 0));
      if (!depositAmount || depositAmount <= 0 || depositAmount > finalValue) return say("Ingresa un monto de abono válido (mayor a cero y hasta el valor final).");
      // El abono debe cubrir como mínimo el abono mínimo del servicio, calculado sobre el valor
      // final después de aplicar los descuentos (RN-RES-004).
      if (depositAmount < minimumDeposit) return say(`El abono debe ser como mínimo ${formatCOP(minimumDeposit)} (abono mínimo del servicio sobre el valor final después de descuentos).`);
    }

    const inactiveTenantMessage = getClientInactiveTenantMessage();
    if (inactiveTenantMessage) return say(`${inactiveTenantMessage} No se creó la reserva.`);
    // RF-014 / RN-RES-007: la salida debe tener capacidad efectiva disponible. Si no la tiene,
    // no se crea la reserva.
    const departure = getClientDeparture(tourKey, booking.departureId);
    if (!departure) return say("La salida seleccionada ya no está programada. Vuelve a elegir una salida; no se creó la reserva.");
    if (getOperatorNow() >= new Date(departure.startsAt)) return say("La hora de inicio de esta salida ya se alcanzó: no se admiten reservas ni pagos. No se creó la reserva.");
    if (departure.available < travelers) {
      return say(departure.full
        ? `Cupo no disponible: la salida del ${formatOperatorDate(departure.date)} está llena. No se creó la reserva; elige otra salida.`
        : `Cupo no disponible: la salida del ${formatOperatorDate(departure.date)} solo tiene ${departure.available} cupos disponibles para ${travelers} viajeros. No se creó la reserva.`);
    }

    const code = getNextOperatorReservationCode();
    const plazo = computeClientPaymentDeadline(selectedType, departure.startsAt, getOperatorNow(), booking.experience);
    const mediumLabel = selectedMedium === "bank" ? "Transferencia" : "Efectivo";
    const target = selectedType === "Abono" ? depositAmount : finalValue;
    const profile = getStoredProfile();
    const finalBooking = {
      code,
      experience: booking.experience,
      tour: booking.experience,
      startDate: departure.startLabel,
      endDate: departure.startLabel,
      departureId: departure.id,
      departureDate: departure.date,
      departureStart: departure.start,
      departureEnd: departure.end,
      startsAt: departure.startsAt,
      travelers: String(travelers),
      budget: formatCOP(finalValue),
      projectedValue: formatCOP(projectedValue),
      discountValue: discountValue ? `-${formatCOP(discountValue)}` : "$0",
      finalValue: formatCOP(finalValue),
      value: finalValue,
      savedAt: getOperatorNow().toLocaleDateString("es-CO"),
      createdAtIso: getOperatorNow().toISOString(),
      paymentDeadlineAt: plazo.effective.toISOString(),
      balanceDeadlineAt: selectedType === "Abono" ? plazo.balanceDeadline.toISOString() : "",
      tourKey,
      customer: holderName,
      holderDocument,
      holderName,
      companions,
      transportSelected: booking.transportSelected || "",
      method: mediumLabel,
      paymentType: selectedType,
      paymentMedium: mediumLabel,
      holderPhone,
      holderEmail,
      holderBirthDate,
      depositAmount,
      tenantName: resolveClientTenantName(),
      status: "Pendiente de pago",
      receiptStatus: selectedMedium === "bank" ? "Sin comprobante" : "No aplica",
      financialStatus: "Sin pago",
    };

    // La reserva se registra también como reserva del tenant para que el equipo valide sus
    // comprobantes y registre el efectivo recibido (misma reserva, misma trazabilidad).
    try {
      saveOperatorCreatedReservation({
        code,
        customer: holderName || profile?.name || "Cliente",
        email: holderEmail,
        service: booking.experience,
        date: departure.startLabel,
        travelers,
        companions: formatOperatorCompanions(travelers),
        value: finalValue,
        projected: formatCOP(projectedValue),
        discount: discountValue ? `-${formatCOP(discountValue)}` : "$0",
        final: formatCOP(finalValue),
        paymentType: selectedType,
        paymentMedium: mediumLabel,
        createdAt: getOperatorNow().toISOString(),
        transportSelected: booking.transportSelected || "",
        departureId: departure.id,
        createdBy: "Cliente (canal digital)",
        commercialContext: buildOperatorCommercialContext(booking.experience, projectedValue > 0 ? (discountValue / projectedValue) * 100 : 0),
        paymentParams: getOperatorPaymentParams(booking.experience),
      });
    } catch {
      /* el registro del tenant es opcional para la vista del cliente */
    }

    // Saldo a favor aplicado como pago validado (RN-RES-009): cuenta para la condición de
    // confirmación y, al ser el primer pago, aparta el cupo.
    let creditApplied = 0;
    if (availableCredit > 0 && creditApply?.checked) {
      creditApplied = applyClientCreditToReservation(code, Math.min(availableCredit, target));
      if (creditApplied > 0) {
        holdClientDepartureSeats(departure.id, code, travelers);
        try {
          const after = getUnifiedOperatorReservation(code);
          if (after && after.status === "Confirmada") markOperatorReservationConfirmed(code, "Saldo a favor aplicado");
        } catch { /* sin modelo del tenant */ }
      }
    }
    const amountDue = Math.max(target - creditApplied, 0);

    recordClientReservation(finalBooking);
    clientStorageSet(storageKey, finalBooking);
    window.localStorage.removeItem(checkoutStorageKey);
    clientStorageSet(CLIENT_PAYMENT_CONTEXT_KEY, { code, amount: amountDue });

    if (creditApplied > 0 && amountDue === 0) {
      window.location.href = `${withTheme("mis-reservas.html", theme)}&creada=${encodeURIComponent(code)}&medio=credito`;
      return;
    }
    if (selectedMedium === "bank") {
      window.location.href = `${withTheme("pago-transferencia.html", theme)}&reserva=${encodeURIComponent(code)}&monto=${amountDue}`;
      return;
    }
    window.location.href = `${withTheme("mis-reservas.html", theme)}&creada=${encodeURIComponent(code)}&medio=efectivo`;
  });
}

// Comprobante recibido (antes "Pago exitoso"): presentar un comprobante NO confirma la reserva.
// El comprobante queda En validación y solo un pago validado cuenta para confirmar (RN-RES-004,
// RN-RES-006A). No existe pasarela ni pago con tarjeta en Fase 1.
function setupTourPaymentSuccess(theme) {
  if (document.body.dataset.screen !== "tour-payment-success") return;

  const params = new URLSearchParams(window.location.search);
  const context = clientStorageGet(CLIENT_PAYMENT_CONTEXT_KEY, null);
  const view = findClientReservationView(params.get("reserva") || context?.code);
  const setText = (selector, value) => { const node = document.querySelector(selector); if (node) node.textContent = value; };

  if (!view) {
    setText("[data-success-title]", "No encontramos la reserva");
    setText("[data-success-message]", "Entra desde Mis reservas para consultar el estado de tus comprobantes.");
    document.querySelector("[data-success-details]")?.remove();
    return;
  }

  const tour = getOperatorActiveTourService(view.tourKey);
  const imageNode = document.querySelector("[data-success-image]");
  if (imageNode && tour?.image) imageNode.style.backgroundImage = `url("${tour.image.replace(/"/g, "%22")}")`;
  else if (imageNode) imageNode.hidden = true;

  setText("[data-success-tour-name]", view.tour);
  setText("[data-success-date]", `${view.departureLabel}${view.departureEnd ? ` · finalización estimada ${view.departureEnd}` : ""}`);
  setText("[data-success-travelers]", `${view.travelers} ${view.travelers === 1 ? "viajero" : "viajeros"}`);
  setText("[data-success-code]", `#${view.code}`);
  setText("[data-success-receipt-status]", view.receiptStatus);
  setText("[data-success-reservation-status]", view.status);
  setText("[data-success-financial]", view.financialStatus || "No aplica");
  const deadlineAt = view.status === "Pendiente de pago" ? view.paymentDeadlineAt : view.balanceDeadlineAt;
  setText("[data-success-deadline]", deadlineAt
    ? `Plazo de pago vigente hasta ${formatClientDateTime(deadlineAt)}. Si presentaste el comprobante dentro del plazo, la reserva no se cancela mientras esté En validación.`
    : "El comprobante se revisa en un plazo máximo de 24 horas corridas.");

  const reservationsLink = document.querySelector("[data-success-reservations-link]");
  if (reservationsLink) reservationsLink.setAttribute("href", withTheme("mis-reservas.html", theme));
}

// Comprobante rechazado (antes "Pago fallido"): el rechazo conserva el histórico y la reserva
// sigue sujeta a su plazo original; el cliente presenta un nuevo comprobante sobre la MISMA
// reserva mientras el plazo continúe vigente (RN-RES-006C, RN-RES-006D).
function setupTourPaymentFailed(theme) {
  if (document.body.dataset.screen !== "tour-payment-failed") return;

  const params = new URLSearchParams(window.location.search);
  const context = clientStorageGet(CLIENT_PAYMENT_CONTEXT_KEY, null);
  const requestedCode = normalizeClientReservationCode(params.get("reserva") || context?.code);
  const views = getClientReservationViews();
  const view = views.find((item) => item.code === requestedCode)
    || views.find((item) => item.receiptStatus === "Rechazado" && item.status !== "Cancelada")
    || null;
  const setText = (selector, value) => { const node = document.querySelector(selector); if (node) node.textContent = value; };

  if (!view || view.receiptStatus !== "Rechazado") {
    setText("[data-failed-title]", "Sin comprobantes rechazados");
    setText("[data-failed-message]", "No tienes comprobantes rechazados pendientes de subsanar. Consulta el estado de tus comprobantes en Mis pagos.");
    document.querySelector("[data-failed-details]")?.remove();
    const retry = document.querySelector("[data-failed-retry]");
    if (retry) retry.setAttribute("href", withTheme("mis-pagos.html", theme));
    if (retry) retry.textContent = "Ir a mis pagos";
    document.querySelector("[data-failed-change-method]")?.remove();
    return;
  }

  const receipts = getOperatorReceiptList(view.code);
  const rejected = [...receipts].reverse().find((receipt) => receipt.status === "Rechazado");
  const reason = rejected?.decision?.reason || "Sin motivo registrado.";
  const tour = getOperatorActiveTourService(view.tourKey);
  const imageNode = document.querySelector("[data-failed-image]");
  if (imageNode && tour?.image) imageNode.style.backgroundImage = `url("${tour.image.replace(/"/g, "%22")}")`;
  else if (imageNode) imageNode.hidden = true;

  const deadlineAt = view.status === "Pendiente de pago" ? view.paymentDeadlineAt : view.balanceDeadlineAt;
  const expired = Boolean(deadlineAt) && getOperatorNow() > new Date(deadlineAt);

  setText("[data-failed-tour-name]", view.tour);
  setText("[data-failed-date]", view.departureLabel);
  setText("[data-failed-travelers]", `${view.travelers} ${view.travelers === 1 ? "viajero" : "viajeros"}`);
  setText("[data-failed-code]", `#${view.code}`);
  setText("[data-failed-status]", `Comprobante ${view.receiptStatus} · Reserva ${view.status}`);
  setText("[data-failed-reason]", reason);
  setText("[data-failed-total]", formatCOP(view.balance));
  setText("[data-failed-deadline]", expired
    ? "El plazo de pago original ya venció: la reserva se cancela automáticamente y el cupo se libera. Ningún usuario puede reactivarla."
    : deadlineAt
      ? `El plazo de pago original sigue vigente hasta ${formatClientDateTime(deadlineAt)}. El rechazo no genera un plazo adicional: presenta un nuevo comprobante sobre esta misma reserva dentro del tiempo restante.`
      : "Presenta un nuevo comprobante sobre esta misma reserva mientras el plazo de pago siga vigente.");

  const retryLink = document.querySelector("[data-failed-retry]");
  if (retryLink) {
    if (expired) {
      retryLink.setAttribute("href", withTheme("mis-reservas.html", theme));
      retryLink.textContent = "Ver mis reservas";
    } else {
      retryLink.setAttribute("href", `${withTheme("pago-transferencia.html", theme)}&reserva=${encodeURIComponent(view.code)}`);
    }
  }
  const secondary = document.querySelector("[data-failed-change-method]");
  if (secondary) secondary.setAttribute("href", withTheme("mis-reservas.html", theme));
}

// Pago por transferencia: el cliente adjunta el comprobante (PDF, JPG, JPEG o PNG, máximo 5 MB).
// El comprobante queda En validación SOLO tras enviarlo y no es ingreso de caja hasta que un
// usuario con el permiso Validar comprobantes lo valide (revisión hasta 24 horas corridas).
function setupTourPaymentTransfer(theme) {
  if (document.body.dataset.screen !== "tour-payment-transfer") return;

  const params = new URLSearchParams(window.location.search);
  const context = clientStorageGet(CLIENT_PAYMENT_CONTEXT_KEY, null);
  const code = normalizeClientReservationCode(params.get("reserva") || context?.code);
  const view = findClientReservationView(code);
  const content = document.querySelector(".travel-checkout-content");
  const setText = (selector, value) => { const node = document.querySelector(selector); if (node) node.textContent = value; };
  const reservationsHref = withTheme("mis-reservas.html", theme);

  const backLink = document.querySelector("[data-transfer-back]");
  if (backLink) backLink.setAttribute("href", reservationsHref);

  const blockWith = (message) => {
    if (content) content.innerHTML = `<article class="travel-booking-card"><p class="travel-dashboard-copy">${message}</p><p><a class="travel-dashboard-section-action" href="${reservationsHref}">Ir a mis reservas</a></p></article>`;
  };

  if (!view) return blockWith("No encontramos la reserva de este pago. Entra desde Mis reservas para continuar el pago.");
  if (view.status === "Cancelada") return blockWith(`La reserva #${escapeHtml(view.code)} está Cancelada: no admite nuevos comprobantes y no puede reactivarse.`);
  if (view.balance <= 0) return blockWith(`La reserva #${escapeHtml(view.code)} no tiene saldo pendiente.`);
  if (getClientInactiveTenantMessage()) return blockWith(`${escapeHtml(getClientInactiveTenantMessage())} Tus reservas siguen visibles en modo de solo lectura.`);
  if (view.startsAt && getOperatorNow() >= new Date(view.startsAt)) return blockWith("Desde la hora programada de inicio de la salida no se admiten pagos ni comprobantes asociados a ella.");

  const plazo = computeClientPaymentDeadline(view.paymentType, view.startsAt || getOperatorNow(), getOperatorNow(), view.tour);
  const deadlineAt = view.status === "Pendiente de pago"
    ? (view.paymentDeadlineAt || plazo.effective.toISOString())
    : (view.balanceDeadlineAt || plazo.balanceDeadline.toISOString());
  const deadlineExpired = getOperatorNow() > new Date(deadlineAt);
  if (deadlineExpired && view.receiptStatus !== "En validación") {
    return blockWith(`El plazo de pago de la reserva #${escapeHtml(view.code)} venció el ${escapeHtml(formatClientDateTime(deadlineAt))}: la reserva se cancela automáticamente y el cupo se libera.`);
  }

  // Monto esperado: el indicado en el flujo de pago; por defecto el abono (si aún no hay pago) o el saldo.
  const requestedAmount = Math.round(Number(params.get("monto") || 0));
  const defaultAmount = view.paymentType === "Abono" && view.paid <= 0 && Number(view.depositAmount) > 0 ? Number(view.depositAmount) : view.balance;
  const expectedAmount = requestedAmount > 0 ? requestedAmount : defaultAmount;

  setText("[data-transfer-code]", `#${view.code}`);
  setText("[data-transfer-tour]", view.tour);
  setText("[data-transfer-departure]", `${view.departureLabel}${view.departureEnd ? ` · finalización estimada ${view.departureEnd}` : ""}`);
  setText("[data-transfer-travelers]", `${view.travelers} ${view.travelers === 1 ? "viajero" : "viajeros"}`);
  setText("[data-transfer-type]", `${view.paymentType} · Transferencia`);
  setText("[data-transfer-total]", formatCOP(expectedAmount));
  setText("[data-transfer-balance]", formatCOP(view.balance));
  setText("[data-transfer-reservation-status]", view.status);
  setText("[data-transfer-financial]", view.financialStatus || "No aplica");
  setText("[data-transfer-receipt-status]", view.receiptStatus === "En validación" ? "En validación" : `${view.receiptStatus === "Sin comprobante" ? "Sin comprobante" : view.receiptStatus} (el nuevo comprobante queda En validación al enviarlo)`);
  setText("[data-transfer-deadline]", `Plazo de pago vigente hasta ${formatClientDateTime(deadlineAt)}. Ningún plazo supera la hora de inicio de la salida (${formatClientDateTime(plazo.departure)}). La revisión del comprobante toma hasta 24 horas corridas y la realiza cualquier usuario del operador con el permiso Validar comprobantes.`);

  // Datos bancarios del tenant: única fuente configurada (TENANT_BANK_ACCOUNT).
  setText("[data-transfer-tenant]", resolveClientTenantName());
  setText("[data-transfer-bank]", TENANT_BANK_ACCOUNT.bank);
  setText("[data-transfer-account-type]", TENANT_BANK_ACCOUNT.accountType);
  setText("[data-transfer-account-number]", TENANT_BANK_ACCOUNT.accountNumber);
  setText("[data-transfer-holder]", TENANT_BANK_ACCOUNT.holder);
  setText("[data-transfer-tax-id]", TENANT_BANK_ACCOUNT.taxId);

  const amountInput = document.querySelector("[data-transfer-amount-input]");
  if (amountInput) amountInput.value = String(expectedAmount);
  const uploadButton = document.querySelector("[data-transfer-upload]");
  const fileInput = document.querySelector("[data-transfer-file-input]");
  const feedback = document.querySelector("[data-transfer-file-feedback]");
  const say = (message, ok = false) => {
    if (!feedback) return;
    feedback.textContent = message;
    feedback.classList.toggle("is-valid", ok);
  };

  // Comprobante anterior rechazado: se muestra el motivo y se permite resubir sobre la MISMA reserva.
  const rejectedBox = document.querySelector("[data-transfer-rejected]");
  if (view.receiptStatus === "Rechazado" && rejectedBox) {
    const rejected = [...getOperatorReceiptList(view.code)].reverse().find((receipt) => receipt.status === "Rechazado");
    rejectedBox.hidden = false;
    rejectedBox.innerHTML = `<p><strong>Tu comprobante anterior fue rechazado.</strong> Motivo: ${escapeHtml(rejected?.decision?.reason || "Sin motivo registrado.")}</p><p>Puedes presentar un nuevo comprobante sobre esta misma reserva mientras el plazo de pago original siga vigente (hasta ${escapeHtml(formatClientDateTime(deadlineAt))}). El rechazo anterior se conserva en el histórico.</p>`;
  }

  if (view.receiptStatus === "En validación") {
    say("Ya tienes un comprobante En validación en esta reserva. Espera su revisión antes de presentar otro.");
    if (uploadButton) uploadButton.disabled = true;
    if (fileInput) fileInput.disabled = true;
    return;
  }
  if (!uploadButton) return;

  const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
  const allowedExtension = /\.(pdf|jpe?g|png)$/i;
  const validateFile = () => {
    const file = fileInput?.files?.[0];
    if (!file) {
      say("Selecciona un comprobante para continuar.");
      return null;
    }
    if (!allowedTypes.includes(file.type) || !allowedExtension.test(file.name)) {
      say("El comprobante debe ser un archivo PDF, JPG, JPEG o PNG. Selecciona otro archivo.");
      return null;
    }
    if (file.size > OPERATOR_RECEIPT_MAX_BYTES) {
      say("El comprobante supera el tamaño máximo de 5 MB. Selecciona un archivo más liviano.");
      return null;
    }
    say("Archivo válido. El comprobante quedará En validación solo cuando lo envíes.", true);
    return file;
  };
  fileInput?.addEventListener("change", validateFile);

  uploadButton.addEventListener("click", () => {
    const file = validateFile();
    if (!file) return;
    const declared = Math.round(Number(amountInput?.value || 0));
    if (!(declared > 0)) return say("Indica el valor que transferiste (mayor a $0).");

    // RN-RES-007: el primer pago de una reserva sin cupo exige disponibilidad en la salida. Si ya
    // no hay cupo, se impide la operación y se informa al cliente antes de aceptar el comprobante.
    if (view.departureId && view.tourKey && view.paid <= 0 && !clientDepartureHasHold(view.departureId, view.code)) {
      const departure = getClientDeparture(view.tourKey, view.departureId);
      if (departure && departure.available < view.travelers) {
        return say(`Cupo no disponible: la salida del ${formatOperatorDate(departure.date)} ya no tiene cupos suficientes para ${view.travelers} viajeros. No se recibió el comprobante; tu reserva sigue Pendiente de pago sin cupo apartado.`);
      }
    }

    const receipts = getOperatorReceiptList(view.code);
    const extras = readOperatorStorage(OPERATOR_EXTRA_RECEIPTS_KEY, {});
    extras[view.code] = [...(extras[view.code] || []), {
      id: `${view.code}-R${receipts.length + 1}`,
      code: view.code,
      customer: view.customer,
      method: "Transferencia",
      amount: formatCOP(declared),
      support: file.name,
      status: "En validación",
      presentedAt: getOperatorNow().toISOString(),
      presentedBy: "Cliente",
    }];
    writeOperatorStorage(OPERATOR_EXTRA_RECEIPTS_KEY, extras);
    if (view.departureId && view.paid <= 0) holdClientDepartureSeats(view.departureId, view.code, view.travelers);
    clientStorageSet(CLIENT_PAYMENT_CONTEXT_KEY, { code: view.code, amount: declared });
    setText("[data-transfer-receipt-status]", "En validación");
    window.location.href = `${withTheme("pago-exitoso.html", theme)}&reserva=${encodeURIComponent(view.code)}`;
  });
}

// Historial propio del Cliente (RN vocabulario de estados de reserva: Pendiente de pago /
// Confirmada / En ejecucion / Finalizada / Cancelada). Reutiliza el MISMO mecanismo local
// ya usado por el flujo de checkout (multitour-dashboard-booking = reserva mas reciente);
// esto solo agrega que cada reserva completada quede tambien visible en un historial propio
// ("Ver mis reservas"), en vez de perderse al sobrescribirse con la siguiente.
const CLIENT_RESERVATIONS_HISTORY_KEY = "multitour-client-reservations";
const CLIENT_RESERVATION_STATES = ["Pendiente de pago", "Confirmada", "En ejecución", "Finalizada", "Cancelada"];

function normalizeClientReservationStatus(rawStatus) {
  const exact = CLIENT_RESERVATION_STATES.find((state) => state.toLowerCase() === String(rawStatus || "").toLowerCase());
  if (exact) return exact;
  if (String(rawStatus || "").toLowerCase().includes("pendiente")) return "Pendiente de pago";
  return "Confirmada";
}

function getClientReservationHistory() {
  try { return JSON.parse(localStorage.getItem(CLIENT_RESERVATIONS_HISTORY_KEY) || "[]"); } catch { return []; }
}

function recordClientReservation(booking) {
  if (!booking || !booking.code) return;
  const history = getClientReservationHistory();
  const normalized = { ...booking, status: normalizeClientReservationStatus(booking.status) };
  const index = history.findIndex((item) => item.code === normalized.code);
  if (index === -1) history.unshift(normalized); else history[index] = normalized;
  localStorage.setItem(CLIENT_RESERVATIONS_HISTORY_KEY, JSON.stringify(history));
}

function setupDashboardIdentity() {
  const brand = document.querySelector("[data-tenant-brand]");
  if (brand) brand.textContent = "Multitour";
}

// La acción rápida "Gastronomía" solo aparece si el tenant tiene restaurantes asociados
// activos (establecimientos informativos con datos de contacto; nunca datos demo inventados).
function setupDashboardQuickActions() {
  const gastronomyCard = document.querySelector('[data-action="gastronomy"]');
  if (gastronomyCard) gastronomyCard.hidden = getOperatorActiveAssociatedEstablishments("restaurant").length === 0;
}

// Descuentos vigentes (RF-005A): misma fuente real que Descuentos del Administrador
// (getOperatorDiscounts), filtrando solo activos y dentro de vigencia hoy. Nunca una lista
// hardcodeada independiente.
function setupDashboardPromotions() {
  if (document.body.dataset.screen !== "client-dashboard") return;
  const container = document.querySelector(".travel-dashboard-promos");
  if (!container) return;
  const services = getOperatorCatalogServiceOptions();
  const today = getOperatorTodayDate();
  const vigentes = getOperatorDiscounts().filter(
    (discount) => discount.active && (!discount.start || discount.start <= today) && (!discount.end || discount.end >= today),
  );
  if (vigentes.length === 0) {
    container.innerHTML = '<p class="travel-dashboard-copy">No hay descuentos vigentes en este momento.</p>';
    return;
  }
  container.innerHTML = vigentes
    .map((discount) => {
      const label = discount.serviceLabel || services.find((service) => service.key === discount.service)?.label || discount.service;
      const validUntil = discount.end ? `Válido hasta ${formatOperatorDate(discount.end)}` : "Vigencia activa";
      return `<article class="travel-dashboard-promo promo-cyan"><span class="travel-dashboard-promo-tag">${discount.percentage}% de descuento</span><strong>${escapeHtml(label)}</strong><p>${escapeHtml(validUntil)}</p><a href="tours.html" data-route="tours">Ver detalle</a></article>`;
    })
    .join("");
}

// Experiencias destacadas (RF-004): misma fuente real que Catálogos del Administrador
// (OPERATOR_CATALOG_DEFAULTS + getOperatorCatalog), filtrando solo tours activos y dentro
// de su vigencia hoy. Nunca una segunda lista hardcodeada distinta al catalogo real.
function setupDashboardRecommendations() {
  if (document.body.dataset.screen !== "client-dashboard") return;
  const container = document.querySelector(".travel-dashboard-recommendations");
  if (!container) return;
  const today = getOperatorTodayDate();
  const tourCatalogId = "catalogo-catalog-panel";
  const withinValidity = (startText, endText) => {
    const start = parseOperatorDate(startText);
    const end = parseOperatorDate(endText) || start;
    return Boolean(start) && today >= start && today <= (end || start);
  };
  const cards = [];
  OPERATOR_CATALOG_DEFAULTS[tourCatalogId].records.forEach((record) => {
    if (!resolveOperatorServiceActive(tourCatalogId, record.key, record.active)) return;
    const fields = getOperatorServiceFields(tourCatalogId, record.key) || record.fields;
    const [start, end] = (fields.validity || "").split(" - ");
    if (!withinValidity(start, end)) return;
    cards.push({ name: fields.name || record.key, tariff: fields.tariff || "Por configurar" });
  });
  getOperatorCatalog().forEach((resource) => {
    if (resource.type !== "tour" || !resolveOperatorServiceActive(tourCatalogId, resource.id, resource.active)) return;
    if (!(today >= resource.start && today <= resource.end)) return;
    cards.push({ name: resource.name, tariff: formatCOP(resource.price) });
  });
  if (cards.length === 0) {
    container.innerHTML = '<p class="travel-dashboard-copy">No hay experiencias disponibles en este momento.</p>';
    return;
  }
  container.innerHTML = cards
    .map(
      (card, index) => `<article class="travel-dashboard-destination-card"><div class="travel-dashboard-destination-media dashboard-media-${index % 2 === 0 ? "one" : "two"}"></div><div class="travel-dashboard-destination-body"><strong>${escapeHtml(card.name)}</strong><div class="travel-dashboard-destination-meta"><small>Desde</small><em>${escapeHtml(card.tariff)}</em></div><a href="tours.html" data-route="tours">Ver detalle</a></div></article>`,
    )
    .join("");
}

function setupDashboardBooking() {
  if (document.body.dataset.screen !== "client-dashboard") return;

  setupDashboardIdentity();
  setupDashboardPromotions();
  setupDashboardRecommendations();
  setupDashboardQuickActions();

  const form = document.querySelector("[data-booking-form]");
  const clearButton = document.querySelector("[data-booking-clear]");
  const storageKey = "multitour-dashboard-booking";
  const experienceNode = document.querySelector("[data-booking-experience]");
  const datesNode = document.querySelector("[data-booking-dates]");
  const codeNode = document.querySelector("[data-booking-code]");
  const statusNode = document.querySelector("[data-booking-status]");
  const statusBlock = document.querySelector("[data-booking-status-block]");
  const travelersNode = document.querySelector("[data-booking-travelers]");
  const projectedValueNode = document.querySelector("[data-booking-projected-value]");
  const discountValueNode = document.querySelector("[data-booking-discount-value]");
  const finalValueNode = document.querySelector("[data-booking-final-value]");
  const primaryAction = document.querySelector("[data-booking-primary-action]");
  const sectionAction = document.querySelector("[data-booking-section-action]");
  const bookingCard = document.querySelector("[data-booking-result]");

  const formatDate = (value) => {
    if (!value) return "";
    const [year, month, day] = value.split("-");
    if (!year || !month || !day) return value;
    return `${day}/${month}/${year}`;
  };

  const formatValue = (value) => {
    if (typeof value === "number") return formatCOP(value);
    return value || formatCOP(0);
  };

  const setAction = (action, label, href, route) => {
    if (!action) return;
    action.textContent = label;
    action.setAttribute("href", href);
    if (route) {
      action.dataset.route = route;
    } else {
      delete action.dataset.route;
    }
  };

  // "Continuar pago" (accion rapida) solo debe aparecer cuando exista una reserva propia
  // realmente pendiente de pago: nunca como decoracion fija sin importar el estado real.
  const continuePaymentCard = document.querySelector('[data-action="continue-payment"]');
  const syncContinuePayment = () => {
    if (!continuePaymentCard) return;
    const target = getClientReservationViews().find((view) => ["Pendiente de pago", "Confirmada"].includes(view.status) && view.balance > 0 && view.receiptStatus !== "En validación" && !view.reprogrammingMark);
    continuePaymentCard.hidden = !target;
    if (!target) return;
    continuePaymentCard.setAttribute("href", withTheme(`finalizar-reserva.html?reserva=${encodeURIComponent(target.code)}`, getTheme()));
    const copy = continuePaymentCard.querySelector("[data-continue-payment-copy]");
    if (copy) copy.textContent = `Completa el pago de la reserva ${target.code}: saldo pendiente de ${formatClientAmount(target.balance)}.`;
  };

  const renderBooking = (booking) => {
    // Una reserva ya Finalizada o Cancelada no debe mostrarse como "activa" en este
    // resumen (aunque si sigue disponible en el historial de "Ver mis reservas").
    const status = booking ? normalizeClientReservationStatus(booking.status) : null;
    const isActiveBooking = Boolean(booking) && status !== "Finalizada" && status !== "Cancelada";
    syncContinuePayment(isActiveBooking ? booking : null);

    if (!isActiveBooking) {
      const demoActive = getClientReservationViews().filter((item) => ["Pendiente de pago", "Confirmada"].includes(item.status));
      if (demoActive.length) {
        const pending = demoActive.filter((item) => item.status === "Pendiente de pago").length;
        const confirmed = demoActive.filter((item) => item.status === "Confirmada").length;
        experienceNode.textContent = demoActive.length + (demoActive.length === 1 ? " reserva activa" : " reservas activas");
        datesNode.textContent = [pending ? pending + " Pendiente de pago" : "", confirmed ? confirmed + " Confirmada" : ""].filter(Boolean).join(" · ");
        codeNode.textContent = demoActive.map((item) => item.code).join(" · ");
        codeNode.hidden = false;
        statusBlock.hidden = false;
        statusNode.textContent = "Consulta en Mis reservas";
        travelersNode.textContent = "Reservas propias";
        projectedValueNode.textContent = "";
        finalValueNode.textContent = "";
        discountValueNode.hidden = true;
        sectionAction.hidden = true;
        bookingCard.classList.remove("is-empty");
        setAction(primaryAction, "Ver mis reservas", "mis-reservas.html", "clientReservations");
        document.querySelector("[data-view-reservations-link]")?.setAttribute("hidden", "");
        return;
      }
      experienceNode.textContent = "No tienes reservas activas";
      datesNode.textContent = "Explora el catálogo y selecciona los servicios para comenzar una nueva reserva.";
      codeNode.hidden = true;
      statusBlock.hidden = true;
      sectionAction.hidden = true;
      bookingCard.classList.add("is-empty");
      document.querySelector("[data-view-reservations-link]")?.removeAttribute("hidden");
      setAction(primaryAction, "Crear reserva", "tours.html", "tours");
      return;
    }
    experienceNode.textContent = booking.experience;
    datesNode.textContent = booking.departureId ? `Salida: ${booking.startDate}${booking.departureEnd ? ` · finalización estimada ${booking.departureEnd}` : ""}` : `${formatDate(booking.startDate)} - ${formatDate(booking.endDate)}`;
    codeNode.textContent = `Reserva: ${booking.code}`;
    codeNode.hidden = false;
    statusBlock.hidden = false;
    sectionAction.hidden = false;
    bookingCard.classList.remove("is-empty");
    statusNode.textContent = status;
    travelersNode.textContent = `Viajeros: ${booking.travelers}`;
    projectedValueNode.textContent = `Valor proyectado: ${formatValue(booking.projectedValue || booking.budget)}`;
    finalValueNode.textContent = `Valor final: ${formatValue(booking.finalValue || booking.budget)}`;

    if (booking.discountValue) {
      discountValueNode.textContent = `Descuentos: -${formatValue(booking.discountValue)}`;
      discountValueNode.hidden = false;
    } else {
      discountValueNode.hidden = true;
    }

    setAction(primaryAction, "Agregar acompañantes", "acompanantes.html", "companions");
    setAction(sectionAction, "Nueva reserva", "tours.html", "tours");
  };

  const readBooking = () => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      return raw ? resolveClientReservationRecord(JSON.parse(raw)) : null;
    } catch {
      return null;
    }
  };

  const writeBooking = (booking) => {
    window.localStorage.setItem(storageKey, JSON.stringify(booking));
    recordClientReservation(booking);
    renderBooking(booking);
  };

  renderBooking(readBooking());

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const experience = String(formData.get("experience") || "").trim();
    const startDate = String(formData.get("startDate") || "").trim();
    const endDate = String(formData.get("endDate") || "").trim();
    const travelers = String(formData.get("travelers") || "").trim();
    const budget = String(formData.get("budget") || "").trim();

    if (!experience || !startDate || !endDate || !travelers || !budget) return;

    const booking = {
      experience,
      startDate,
      endDate,
      travelers,
      budget,
      code: `#RES-${Date.now().toString().slice(-6)}`,
      savedAt: getOperatorNow().toLocaleDateString("es-CO"),
    };

    writeBooking(booking);
  });

  if (clearButton) {
    clearButton.addEventListener("click", () => {
      form.reset();
      const travelerInput = form.querySelector('input[name="travelers"]');
      if (travelerInput) travelerInput.value = "2";
      window.localStorage.removeItem(storageKey);
      renderBooking(null);
    });
  }
}

// Fuente única de reservas de demostración del portal cliente (Bloque A).
// El Bloque B podrá reutilizarla para alinear las pantallas administrativas.
const DEMO_RESERVATIONS = Object.freeze([
  { code: "RES-1843", tour: "Ruta Andina", departure: "18 sep 2026 · 06:30", departureEnd: "18:00", startsAt: "2026-09-18T06:30:00-05:00", paymentDeadlineAt: "2026-09-02T09:00:00-05:00", travelers: 2, status: "Pendiente de pago", receiptStatus: "En validación", financialStatus: "Sin pago", paymentType: "Pago total", paymentMedium: "Transferencia", value: 1299000, paid: 0, balance: 1299000, reprogrammingMark: "" },
  { code: "RES-1844", tour: "Tour de ejemplo", departure: "20 sep 2026 · 07:00", departureEnd: "18:00", startsAt: "2026-09-20T07:00:00-05:00", balanceDeadlineAt: "2026-09-19T07:00:00-05:00", travelers: 2, status: "Confirmada", receiptStatus: "Aprobado", financialStatus: "Abono recibido", paymentType: "Abono", paymentMedium: "Transferencia", value: 300000, paid: 100000, balance: 200000, reprogrammingMark: "" },
  { code: "RES-1845", tour: "Ruta Andina", departure: "22 sep 2026 · 06:30", departureEnd: "18:00", startsAt: "2026-09-22T06:30:00-05:00", travelers: 2, status: "Cancelada", receiptStatus: "Aprobado", paymentType: "Abono", paymentMedium: "Transferencia", value: 1200000, paid: 400000, balance: 800000, cancellationNature: "incumplimiento-pago", cancellationCause: "Cancelada por vencimiento del plazo del saldo", refundTreatment: "Valores abonados: $400.000 en tratamiento pendiente. El Administrador del tenant decide en 24 horas entre devolver el 100 % o registrarlo como saldo a favor." },
  { code: "RES-1846", tour: "Ruta Andina", departure: "18 sep 2026 · 06:30", departureEnd: "18:00", startsAt: "2026-09-18T06:30:00-05:00", travelers: 2, status: "Confirmada", receiptStatus: "Aprobado", financialStatus: "Pago completo", paymentType: "Pago total", paymentMedium: "Transferencia", value: 1299000, paid: 1299000, balance: 0, reprogrammingMark: "Pendiente de respuesta de reprogramación", originalDeparture: "18 sep 2026 · 06:30", proposedDeparture: "25 sep 2026 · 06:30", proposedDepartureEnd: "18:00", proposedTour: "Ruta Andina", episodeStartedAt: "2026-08-31T18:00:00-05:00", proposalNotifiedAt: "2026-09-01T08:00:00-05:00", proposedStartsAt: "2026-09-25T06:30:00-05:00" },
]);
const CLIENT_REPROGRAM_RESPONSE_KEY = "multitour-reprogram-response";

function getClientReprogramResponse() {
  try { return JSON.parse(localStorage.getItem(CLIENT_REPROGRAM_RESPONSE_KEY) || "null"); } catch { return null; }
}

function setClientReprogramResponse(decision) {
  const response = { code: "RES-1846", decision, respondedAt: getOperatorNow().toISOString(), respondedBy: "Cliente" };
  localStorage.setItem(CLIENT_REPROGRAM_RESPONSE_KEY, JSON.stringify(response));
  return response;
}

function getClientDemoReservations() {
  const response = getClientReprogramResponse();
  return DEMO_RESERVATIONS.map((item) => {
    if (item.code !== "RES-1846" || !response) return { ...item };
    if (response.decision === "aceptar") return { ...item, departure: item.proposedDeparture, departureEnd: item.proposedDepartureEnd, startsAt: item.proposedStartsAt, reprogrammingMark: "" };
    const cancelled = { ...item, status: "Cancelada", reprogrammingMark: "", cancellationCause: "Cancelada por rechazo o vencimiento de reprogramación", refundTreatment: "Se devuelve el 100 % de los valores pagados y validados." };
    delete cancelled.financialStatus;
    return cancelled;
  });
}

function formatClientAmount(value) {
  return formatCOP(Number(value || 0));
}

const CLIENT_RESERVATION_STATUS_CLASS = {
  "Pendiente de pago": "is-pending",
  "Confirmada": "is-confirmed",
  "En ejecución": "is-execution",
  "Finalizada": "is-finalized",
  "Cancelada": "is-cancelled",
};

function describeClientReservationDeadline(view) {
  if (view.status === "Cancelada") return "";
  if (view.reprogrammingMark) return "Tus plazos económicos están congelados mientras esperas tu respuesta de reprogramación.";
  if (view.status === "Pendiente de pago") {
    if (view.receiptStatus === "En validación") return "Comprobante presentado dentro del plazo: la reserva no se cancela mientras se revisa (hasta 24 horas corridas).";
    if (view.paymentDeadlineAt) return `Plazo de pago vigente hasta ${formatClientDateTime(view.paymentDeadlineAt)} (una única ampliación posible; nunca después de la hora de inicio de la salida).`;
    return "Plazo de pago: según la configuración del operador, sin superar la hora de inicio de la salida.";
  }
  if (view.balance > 0) {
    const deadline = view.balanceDeadlineAt || (view.startsAt ? computeClientPaymentDeadline(view.paymentType, view.startsAt, getOperatorNow(), view.tour).balanceDeadline.toISOString() : "");
    return deadline ? `Plazo para completar el saldo: hasta ${formatClientDateTime(deadline)} (antes de la hora de inicio de la salida).` : "Debes completar el saldo antes de la hora de inicio de la salida.";
  }
  return "";
}

function renderClientReservationCard(view, theme) {
  const statusClass = CLIENT_RESERVATION_STATUS_CLASS[view.status] || "";
  const proposal = view.code === "RES-1846" && view.reprogrammingMark === "Pendiente de respuesta de reprogramación";
  const departureCopy = proposal
    ? `Salida original: ${escapeHtml(view.departureLabel)} (cancelada)`
    : `Salida: ${escapeHtml(view.departureLabel)}${view.departureEnd ? ` · finalización estimada ${escapeHtml(view.departureEnd)}` : ""}`;
  const proposalCopy = proposal ? `<small>Salida propuesta: ${escapeHtml(view.proposedDeparture)}</small>` : "";
  const cancellationCopy = view.cancellationCause
    ? `<small>${escapeHtml(view.cancellationCause)}</small>${view.refundTreatment ? `<small>${escapeHtml(view.refundTreatment)}</small>` : ""}`
    : "";
  const financialCopy = view.financialStatus
    ? `Estado del comprobante: ${escapeHtml(view.receiptStatus)} · Situación financiera: ${escapeHtml(view.financialStatus)}`
    : `Estado del comprobante: ${escapeHtml(view.receiptStatus)}`;
  const deadlineCopy = describeClientReservationDeadline(view);
  const actions = [];
  if (proposal) actions.push(`<a class="travel-dashboard-primary-action mt-btn mt-btn-primary" href="${withTheme("propuesta-reprogramacion.html?reserva=RES-1846", theme)}">Responder propuesta</a>`);
  if (view.receiptStatus === "Rechazado" && view.status !== "Cancelada") {
    actions.push(`<a class="travel-dashboard-primary-action mt-btn mt-btn-primary" href="${withTheme(`pago-transferencia.html?reserva=${encodeURIComponent(view.code)}`, theme)}">Presentar nuevo comprobante</a>`);
  } else if (["Pendiente de pago", "Confirmada"].includes(view.status) && view.balance > 0 && view.receiptStatus !== "En validación" && !proposal) {
    actions.push(`<a class="travel-dashboard-primary-action mt-btn mt-btn-primary" href="${withTheme(`finalizar-reserva.html?reserva=${encodeURIComponent(view.code)}`, theme)}">Continuar pago</a>`);
  }
  actions.push(`<a class="travel-dashboard-section-action mt-btn mt-btn-ghost" href="${withTheme("mis-pagos.html", theme)}">Ver pagos y comprobantes</a>`);
  const detailRows = [
    ["Salida", `${view.departureLabel}${view.departureEnd ? ` · finalización estimada ${view.departureEnd}` : ""}`],
    ["Viajeros", String(view.travelers)],
    ["Tipo de pago", view.paymentType],
    ["Medio de pago", view.paymentMedium],
    ["Estado de la reserva", view.status],
    ["Estado del comprobante", view.receiptStatus],
    ["Situación financiera", view.financialStatus || "No aplica por reserva cancelada"],
    ["Valor final", formatClientAmount(view.value)],
    ["Valores validados", formatClientAmount(view.paid)],
    ["Saldo pendiente", formatClientAmount(view.balance)],
  ];
  if (view.refunded) detailRows.push(["Valores devueltos", formatClientAmount(view.refunded)]);
  if (view.creditBalance) detailRows.push(["Saldo a favor", formatClientAmount(view.creditBalance)]);
  if (view.pendingTreatment) detailRows.push(["En tratamiento pendiente", formatClientAmount(view.pendingTreatment)]);
  if (deadlineCopy) detailRows.push(["Plazo", deadlineCopy]);
  return `<article class="travel-dashboard-reservation-card" data-reservation-code="${escapeHtml(view.code)}">
      <div class="travel-dashboard-reservation-main"><div class="travel-dashboard-reservation-copy">
        <strong>${escapeHtml(view.code)} · ${escapeHtml(view.tour)}</strong>
        <p>${departureCopy} · ${escapeHtml(String(view.travelers))} ${view.travelers === 1 ? "viajero" : "viajeros"}</p>
        ${proposalCopy}
        <small>Tipo de pago: ${escapeHtml(view.paymentType)} · Medio de pago: ${escapeHtml(view.paymentMedium)}</small>
        <small>${financialCopy}</small>
        ${deadlineCopy ? `<small>${escapeHtml(deadlineCopy)}</small>` : ""}
        ${cancellationCopy}
        ${proposal ? `<strong class="operator-status is-pending">${escapeHtml(view.reprogrammingMark)}</strong>` : ""}
      </div><div class="travel-dashboard-reservation-status"><span class="travel-dashboard-status-badge operator-status ${statusClass}">${escapeHtml(view.status)}</span><strong>Valor: ${formatClientAmount(view.value)}</strong>${view.status === "Cancelada" ? "" : `<small>Saldo: ${formatClientAmount(view.balance)}</small>`}</div></div>
      <details class="client-reservation-details"><summary>Ver detalle de la reserva</summary><dl>${detailRows.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl></details>
      <div class="travel-dashboard-reservation-actions">${actions.join("")}</div>
    </article>`;
}

// "Ver mis reservas" (histórico propio del Cliente): SOLO sus propias reservas ya
// registradas via el checkout (recordClientReservation), nunca reservas de otro cliente ni
// de otro tenant (mismo almacenamiento local por navegador, sin mezclar datos globales).
function setupClientReservationsScreen() {
  if (document.body.dataset.screen !== "client-reservations") return;
  setupDashboardIdentity();
  const theme = getTheme();
  const list = document.querySelector("[data-reservations-list]");
  const empty = document.querySelector("[data-reservations-empty]");
  const notice = document.querySelector("[data-reservations-notice]");
  if (!list) return;

  const params = new URLSearchParams(window.location.search);
  const createdCode = normalizeClientReservationCode(params.get("creada"));
  if (notice && createdCode) {
    notice.hidden = false;
    notice.textContent = params.get("medio") === "efectivo"
      ? `Reserva #${createdCode} creada en estado Pendiente de pago. Tu intención de pagar en efectivo no es un pago: no confirma la reserva ni aparta cupo. La reserva solo se confirma cuando el equipo del operador reciba y registre el dinero dentro del plazo de pago.`
      : `Reserva #${createdCode} creada. Aplicaste tu saldo a favor como pago validado; revisa abajo su estado y su situación financiera.`;
  }

  const history = getClientReservationViews();
  if (empty) empty.hidden = history.length > 0;
  list.hidden = history.length === 0;
  if (!history.length) return;
  list.innerHTML = history.map((view) => renderClientReservationCard(view, theme)).join("");
}

function getClientProposalDeadline(reservation) {
  const notified = new Date(reservation.proposalNotifiedAt);
  const candidates = [
    { label: "72 horas corridas desde la notificación de la propuesta", at: new Date(notified.getTime() + 72 * CLIENT_HOUR_MS) },
    { label: "límite de 96 horas del episodio de reprogramación", at: new Date(new Date(reservation.episodeStartedAt).getTime() + 96 * CLIENT_HOUR_MS) },
    { label: "hora de inicio de la salida propuesta", at: new Date(reservation.proposedStartsAt) },
  ];
  const winner = candidates.reduce((best, candidate) => (candidate.at < best.at ? candidate : best), candidates[0]);
  return { winner, candidates };
}

function setupReprogrammingProposal() {
  if (document.body.dataset.screen !== "client-reprogramming-proposal") return;
  const reservation = getClientDemoReservations().find((item) => item.code === "RES-1846");
  const params = new URLSearchParams(window.location.search);
  let response = getClientReprogramResponse();
  if (params.get("estado") === "vencido" && !response) response = setClientReprogramResponse("vencido");
  const setText = (selector, value) => { const node = document.querySelector(selector); if (node) node.textContent = value; };
  if (!reservation) return;
  const { winner, candidates } = getClientProposalDeadline(reservation);
  setText("[data-proposal-code]", reservation.code);
  setText("[data-proposal-tour]", reservation.proposedTour);
  setText("[data-proposal-original]", `${reservation.originalDeparture} (cancelada)`);
  setText("[data-proposal-new]", `${reservation.proposedDeparture} · finalización estimada ${reservation.proposedDepartureEnd}`);
  setText("[data-proposal-travelers]", `${reservation.travelers} viajeros`);
  setText("[data-proposal-notified]", formatClientDateTime(reservation.proposalNotifiedAt));
  setText("[data-proposal-deadline]", `Vence el ${formatClientDateTime(winner.at)}. Se calcula como el menor entre: ${candidates.map((candidate) => `${candidate.label} (${formatClientDateTime(candidate.at)})`).join("; ")}.`);
  setText("[data-proposal-seats]", `Tus ${reservation.travelers} cupos están apartados en la salida propuesta hasta el vencimiento. Se liberan si rechazas, si vence el plazo, si la salida propuesta se cancela o si se alcanza el límite del episodio de 96 horas.`);
  const feedback = document.querySelector("[data-proposal-feedback]");
  const actions = document.querySelector("[data-proposal-actions]");
  const renderResponse = (current) => {
    if (!current) return;
    if (actions) actions.hidden = true;
    const messages = {
      aceptar: "Propuesta aceptada. Se conserva la misma reserva, sus pagos y su historial con la nueva salida; los cupos apartados quedan asociados a tu reserva, que sigue Confirmada.",
      rechazar: "Propuesta rechazada. La reserva queda Cancelada y se devuelve el 100 % de los valores pagados y validados, sin penalidades.",
      vencido: "El plazo venció sin respuesta. La reserva queda Cancelada y se devuelve el 100 % de los valores pagados y validados, sin penalidades.",
    };
    if (feedback) {
      feedback.textContent = `${messages[current.decision] || messages.vencido} Respuesta registrada por ${current.respondedBy || "el Cliente"} el ${formatClientDateTime(current.respondedAt)}.`;
      feedback.className = "travel-transfer-reference-copy is-valid";
    }
  };
  renderResponse(response);
  document.querySelector("[data-proposal-accept]")?.addEventListener("click", () => { if (!getClientReprogramResponse()) { renderResponse(setClientReprogramResponse("aceptar")); } });
  document.querySelector("[data-proposal-reject]")?.addEventListener("click", () => { if (!getClientReprogramResponse()) { renderResponse(setClientReprogramResponse("rechazar")); } });
}


// Acompañantes de la reserva: nombre completo, documento de identidad, fecha de nacimiento
// (se muestra la edad) y contacto de emergencia (RF-002). El documento no puede repetirse
// dentro de la misma reserva, incluido el del titular (RN-RES-005).
function setupCompanionsForm() {
  if (document.body.dataset.screen !== "companions") return;

  const bookingStorageKey = "multitour-dashboard-booking";
  const companionsStorageKey = "multitour-booking-companions";
  const form = document.querySelector("[data-companions-form]");
  const list = document.querySelector("[data-companions-list]");
  const bookingName = document.querySelector("[data-companions-booking-name]");
  const bookingMeta = document.querySelector("[data-companions-booking-meta]");
  const feedback = document.querySelector("[data-companions-feedback]");

  if (!form || !list) return;

  const booking = clientStorageGet(bookingStorageKey, null);
  const savedCompanions = clientStorageGet(companionsStorageKey, null) || booking?.companions || [];
  const say = (message, ok = false) => {
    if (!feedback) return;
    feedback.textContent = message;
    feedback.className = ok ? "feedback is-success" : "feedback is-error";
  };

  if (!booking) {
    if (bookingName) bookingName.textContent = "Sin reserva activa";
    if (bookingMeta) bookingMeta.textContent = "Primero crea una reserva para registrar acompañantes.";
    list.innerHTML = "";
    form.style.display = "none";
    return;
  }

  const totalTravelers = Number(booking.travelers || 0);
  const companionsCount = Math.max(0, totalTravelers - 1);
  const todayKey = getOperatorTodayDate();

  if (bookingName) bookingName.textContent = booking.experience;
  if (bookingMeta) {
    bookingMeta.textContent =
      companionsCount > 0
        ? `Reserva ${booking.code}. Completa los datos de ${companionsCount} acompañante${companionsCount === 1 ? "" : "s"}.`
        : `Reserva ${booking.code}. Esta reserva no requiere acompañantes adicionales.`;
  }

  if (companionsCount === 0) {
    list.innerHTML = `
      <article class="travel-booking-card">
        <div class="travel-checkout-section-title">
          <h2>Sin acompañantes por registrar</h2>
        </div>
        <p class="travel-companions-empty">Esta reserva fue creada para un solo viajero.</p>
      </article>
    `;
    return;
  }

  const ageFrom = (birthDate) => {
    if (!birthDate) return "";
    const birth = new Date(`${birthDate}T12:00:00`);
    const today = new Date(`${todayKey}T12:00:00`);
    if (Number.isNaN(birth.getTime()) || birth > today) return "";
    let age = today.getFullYear() - birth.getFullYear();
    const before = today.getMonth() < birth.getMonth() || (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate());
    if (before) age -= 1;
    return `${age} ${age === 1 ? "año" : "años"}`;
  };

  list.innerHTML = Array.from({ length: companionsCount }, (_, index) => {
    const saved = savedCompanions[index] || {};
    return `
      <article class="travel-booking-card travel-companion-card">
        <div class="travel-checkout-section-title">
          <h2>Acompañante ${index + 1}</h2>
        </div>

        <div class="travel-companion-grid">
          <label>
            <span>Nombre completo</span>
            <input type="text" name="name-${index}" value="${escapeHtml(saved.name || "")}" placeholder="Ej. María Pérez" />
          </label>
          <label>
            <span>Documento de identidad</span>
            <input type="text" name="document-${index}" value="${escapeHtml(saved.document || "")}" placeholder="Ej. 1023456789" />
          </label>
          <label>
            <span>Fecha de nacimiento</span>
            <input type="date" name="birthdate-${index}" max="${todayKey}" value="${escapeHtml(saved.birthDate || "")}" />
            <small data-companion-age="${index}">${escapeHtml(ageFrom(saved.birthDate))}</small>
          </label>
          <label>
            <span>Teléfono (opcional)</span>
            <input type="text" name="phone-${index}" value="${escapeHtml(saved.phone || "")}" placeholder="Ej. 300 000 0000" />
          </label>
          <label>
            <span>Contacto de emergencia</span>
            <input type="text" name="emergency-${index}" value="${escapeHtml(saved.emergency || "")}" placeholder="Nombre y teléfono" />
          </label>
        </div>
      </article>
    `;
  }).join("");

  list.addEventListener("input", (event) => {
    const target = event.target;
    if (target && target.name && target.name.startsWith("birthdate-")) {
      const index = target.name.split("-")[1];
      const node = list.querySelector(`[data-companion-age="${index}"]`);
      if (node) node.textContent = ageFrom(target.value);
    }
  });

  const normalizeDoc = (value) => String(value || "").trim().toLowerCase().replace(/[^a-z0-9]/g, "");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const companions = Array.from({ length: companionsCount }, (_, index) => ({
      name: String(form.querySelector(`[name="name-${index}"]`)?.value || "").trim(),
      document: String(form.querySelector(`[name="document-${index}"]`)?.value || "").trim(),
      birthDate: String(form.querySelector(`[name="birthdate-${index}"]`)?.value || ""),
      phone: String(form.querySelector(`[name="phone-${index}"]`)?.value || "").trim(),
      emergency: String(form.querySelector(`[name="emergency-${index}"]`)?.value || "").trim(),
    }));

    const missing = companions.findIndex((companion) => !companion.name || !companion.document || !companion.birthDate || !companion.emergency);
    if (missing !== -1) return say(`Completa nombre, documento, fecha de nacimiento y contacto de emergencia del acompañante ${missing + 1}.`);
    const future = companions.findIndex((companion) => companion.birthDate > todayKey);
    if (future !== -1) return say(`La fecha de nacimiento del acompañante ${future + 1} no puede ser futura.`);
    const docs = [booking.holderDocument, ...companions.map((companion) => companion.document)].map(normalizeDoc).filter(Boolean);
    if (docs.some((doc, index) => docs.indexOf(doc) !== index)) return say("Hay un documento repetido: el documento del titular y de cada acompañante debe ser único dentro de la reserva.");

    clientStorageSet(companionsStorageKey, companions);
    clientStorageSet(bookingStorageKey, { ...booking, companions });
    recordClientReservation({ ...booking, companions });
    say("Acompañantes guardados.", true);
    window.setTimeout(() => { window.location.href = withTheme("panel-cliente.html", getTheme()); }, 600);
  });
}

// Notificaciones del panel (RF-019): reflejan el estado real de las reservas del cliente
// (comprobantes, plazos, saldo a favor y reprogramación), no un texto fijo.
function setupDashboardNotifications() {
  if (document.body.dataset.screen !== "client-dashboard") return;
  const container = document.querySelector("[data-client-notifications]");
  if (!container) return;
  const theme = getTheme();
  const response = getClientReprogramResponse();
  const items = [];
  getClientReservationViews().forEach((view) => {
    const tag = `<strong>Reserva ${escapeHtml(view.code)}:</strong>`;
    if (view.code === "RES-1846") {
      if (response?.decision === "aceptar") {
        items.push(`${tag} aceptaste la nueva salida y la reserva sigue Confirmada.`);
      } else if (response?.decision === "rechazar" || response?.decision === "vencido") {
        items.push(`${tag} la reserva está Cancelada y se devuelve el 100 % de los valores pagados y validados.`);
      } else {
        const { winner } = getClientProposalDeadline(view);
        items.push(`${tag} la salida fue cancelada por una causa no atribuible al cliente. Hay una propuesta de nueva salida pendiente de tu respuesta hasta el ${escapeHtml(formatClientDateTime(winner.at))}. <a class="travel-dashboard-section-action" href="${withTheme("propuesta-reprogramacion.html?reserva=RES-1846", theme)}">Responder propuesta de reprogramación</a>`);
      }
    } else if (view.status === "Cancelada") {
      if (view.cancellationCause) items.push(`${tag} ${escapeHtml(view.cancellationCause)}.${view.pendingTreatment > 0 ? ` Los valores abonados (${escapeHtml(formatClientAmount(view.pendingTreatment))}) quedaron en tratamiento pendiente.` : ""}`);
    } else if (view.receiptStatus === "En validación") {
      items.push(`${tag} comprobante En validación. La revisión puede tardar hasta 24 horas corridas y la reserva no se confirma hasta que el pago sea validado.`);
    } else if (view.receiptStatus === "Rechazado") {
      items.push(`${tag} comprobante Rechazado. Puedes presentar un nuevo comprobante sobre la misma reserva mientras el plazo de pago siga vigente. <a class="travel-dashboard-section-action" href="${withTheme(`pago-transferencia.html?reserva=${encodeURIComponent(view.code)}`, theme)}">Presentar nuevo comprobante</a>`);
    } else if (view.status === "Confirmada" && view.balance > 0) {
      items.push(`${tag} Confirmada con saldo pendiente de ${escapeHtml(formatClientAmount(view.balance))}. ${escapeHtml(describeClientReservationDeadline(view))} <a class="travel-dashboard-section-action" href="${withTheme(`finalizar-reserva.html?reserva=${encodeURIComponent(view.code)}`, theme)}">Continuar pago</a>`);
    } else if (view.status === "Pendiente de pago" && view.balance > 0) {
      items.push(`${tag} Pendiente de pago. ${escapeHtml(describeClientReservationDeadline(view))} <a class="travel-dashboard-section-action" href="${withTheme(`finalizar-reserva.html?reserva=${encodeURIComponent(view.code)}`, theme)}">Continuar pago</a>`);
    }
    if (view.status !== "Cancelada" || view.creditBalance > 0) {
      const credit = getClientCreditAvailable(view);
      if (credit > 0) items.push(`${tag} tienes un saldo a favor de ${escapeHtml(formatClientAmount(credit))}. <a class="travel-dashboard-section-action" href="${withTheme("mis-pagos.html", theme)}">Consultar saldo a favor</a>`);
    }
  });
  container.innerHTML = items.length ? items.map((item) => `<p>${item}</p>`).join("") : "<p>No tienes notificaciones nuevas.</p>";
  const badge = document.querySelector("[data-client-bell-count]");
  if (badge) { badge.textContent = String(items.length); badge.hidden = items.length === 0; }
  const bell = document.querySelector("[data-client-bell]");
  const bellButton = document.querySelector("[data-client-bell-button]");
  const bellPanel = document.querySelector("[data-client-bell-panel]");
  if (bell && bellButton && bellPanel && !bell.dataset.ready) {
    bell.dataset.ready = "true";
    const setOpen = (open) => { bellPanel.hidden = !open; bellButton.setAttribute("aria-expanded", String(open)); };
    bellButton.addEventListener("click", () => setOpen(bellPanel.hidden));
    document.addEventListener("click", (event) => { if (!bell.contains(event.target)) setOpen(false); });
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") setOpen(false); });
  }
}

function setupDashboardSearch() {
  if (document.body.dataset.screen !== "client-dashboard") return;
  const input = document.querySelector("#dashboard-search");
  const button = document.querySelector("[data-dashboard-search-button]");
  const feedback = document.querySelector("[data-dashboard-search-feedback]");
  if (!input || !button) return;
  const cards = () => [...document.querySelectorAll(".travel-dashboard-destination-card, .travel-dashboard-promo")];
  const run = () => {
    const term = input.value.trim().toLowerCase();
    let visible = 0;
    cards().forEach((card) => {
      const matches = !term || card.textContent.toLowerCase().includes(term);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    if (feedback) {
      feedback.hidden = !term || visible > 0;
      feedback.textContent = term && visible === 0 ? `No encontramos resultados para ${input.value.trim()}.` : "";
    }
  };
  button.addEventListener("click", run);
  input.addEventListener("keydown", (event) => { if (event.key === "Enter") { event.preventDefault(); run(); } });
  input.addEventListener("input", () => { if (!input.value.trim()) run(); });
}

function setupCatalogSearch() {
  const supportedScreens = new Set(["tours", "gastronomy", "restaurants", "lodging", "bars", "cafes"]);
  const screen = document.body.dataset.screen;
  if (!supportedScreens.has(screen)) return;

  const searchInput = document.querySelector("[data-catalog-search]");
  const searchButton = document.querySelector("[data-catalog-search-button]");
  // Gastronomía ("Todos") ahora combina dos grids independientes (platos del día +
  // restaurantes asociados): se buscan tarjetas en TODOS los grids presentes, no solo el primero.
  const grids = Array.from(document.querySelectorAll(".travel-restaurant-grid, .travel-tours-grid"));

  if (!searchInput || !grids.length) return;

  const cards = grids.flatMap((grid) => Array.from(grid.querySelectorAll("[data-search-card], .travel-tour-card")));
  if (!cards.length) return;

  const emptyState = document.createElement("div");
  emptyState.className = "travel-catalog-empty-state is-hidden";
  const isToursCatalog = screen === "tours";
  const emptyTitle = isToursCatalog
    ? "No encontramos tours que coincidan con tu búsqueda."
    : "No encontramos resultados con esa búsqueda.";
  const emptyHint = isToursCatalog
    ? "Prueba con otro nombre o destino."
    : "Prueba con otra búsqueda.";
  emptyState.innerHTML = `
    <strong>${emptyTitle}</strong>
    <p>${emptyHint}</p>
    <button type="button">Limpiar búsqueda</button>
  `;
  grids[grids.length - 1].insertAdjacentElement("afterend", emptyState);
  const clearButton = emptyState.querySelector("button");

  const normalize = (value) =>
    String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const getCardName = (card) => {
    const explicitName = card.dataset.searchName;
    if (explicitName) return normalize(explicitName);
    const titleNode = card.querySelector(".travel-tour-body > strong");
    return normalize(titleNode ? titleNode.textContent : "");
  };

  const filterCards = () => {
    const query = normalize(searchInput.value.trim());
    let visibleCount = 0;

    cards.forEach((card) => {
      const name = getCardName(card);
      const matches = !query || name.includes(query);
      card.hidden = !matches;
      card.classList.toggle("is-hidden", !matches);
      if (matches) visibleCount += 1;
    });

    emptyState.classList.toggle("is-hidden", visibleCount > 0 || !query);
  };

  searchInput.addEventListener("input", filterCards);
  searchInput.addEventListener("keyup", filterCards);
  searchInput.addEventListener("search", filterCards);
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      filterCards();
    }
  });
  if (searchButton) {
    searchButton.addEventListener("click", filterCards);
  }
  clearButton?.addEventListener("click", () => {
    searchInput.value = "";
    filterCards();
    searchInput.focus();
  });
  filterCards();
}

// Reservas base de demostración del operador. Solo guardan los datos de la reserva; el estado
// vigente, los valores pagados, el saldo, el estado del comprobante y la situación financiera
// se calculan en el modelo unificado (getUnifiedOperatorReservations) a partir de los
// comprobantes decididos, el efectivo recibido, las cancelaciones y las modificaciones.
const OPERATOR_RESERVATIONS = {
  "RES-1842": { customer: "Laura Gómez", email: "laura.gomez@ejemplo.com", service: "Tour Montañas", date: "15 sep 2026", travelers: 2, companions: "1 registrado", status: "Pendiente de pago", projected: "$1.299.000", discount: "-$259.800", final: "$1.039.200", paid: "$0", paymentType: "Pago total", paymentMedium: "Transferencia", receiptStatus: "En validación" },
  "RES-1841": { customer: "Mateo Ríos", email: "mateo.rios@ejemplo.com", service: "Rafting y acampada", date: "13 sep 2026", travelers: 2, companions: "1 registrado", status: "Confirmada", projected: "$1.600.000", discount: "$0", final: "$1.600.000", paid: "$1.600.000", paymentType: "Pago total", paymentMedium: "Transferencia", receiptStatus: "Aprobado" },
  "RES-1840": { customer: "Carolina Díaz", email: "carolina.diaz@ejemplo.com", service: "Ruta arqueológica", date: "1 sep 2026", travelers: 4, companions: "3 registrados", status: "En ejecución", projected: "$2.400.000", discount: "$0", final: "$2.400.000", paid: "$2.400.000", paymentType: "Pago total", paymentMedium: "Efectivo", receiptStatus: "No aplica" },
  "RES-1837": { customer: "Juliana Cruz", email: "juliana.cruz@ejemplo.com", service: "Tour Montañas", date: "22 sep 2026", travelers: 3, companions: "2 registrados", status: "Pendiente de pago", projected: "$3.897.000", discount: "-$779.400", final: "$3.117.600", paid: "$0", paymentType: "Abono", paymentMedium: "Transferencia", receiptStatus: "En validación" },
  "RES-1829": { customer: "Andrés Silva", email: "andres.silva@ejemplo.com", service: "Tour Montañas", date: "29 ago 2026", travelers: 2, companions: "1 registrado", status: "Finalizada", projected: "$2.598.000", discount: "-$519.600", final: "$2.078.400", paid: "$2.078.400", paymentType: "Pago total", paymentMedium: "Transferencia", receiptStatus: "Aprobado" },
  "RES-1822": { customer: "Paula Méndez", email: "paula.mendez@ejemplo.com", service: "Rafting y acampada", date: "27 ago 2026", travelers: 2, companions: "1 registrado", status: "Cancelada", projected: "$1.600.000", discount: "$0", final: "$1.600.000", paid: "$0", paymentType: "Pago total", paymentMedium: "Transferencia", receiptStatus: "Sin comprobante" },
};

function parseCOP(text) {
  return Number(String(text ?? "").replace(/[^0-9]/g, "")) || 0;
}

const OPERATOR_RESERVATION_ADJUSTMENTS_KEY = "multitour-reservation-adjustments";

function getOperatorReservationAdjustments() {
  try { return JSON.parse(localStorage.getItem(OPERATOR_RESERVATION_ADJUSTMENTS_KEY) || "{}"); } catch { return {}; }
}

function getOperatorReservationAdjustment(code) {
  return getOperatorReservationAdjustments()[code] || null;
}

function setOperatorReservationAdjustment(code, adjustment) {
  const adjustments = getOperatorReservationAdjustments();
  adjustments[code] = adjustment;
  localStorage.setItem(OPERATOR_RESERVATION_ADJUSTMENTS_KEY, JSON.stringify(adjustments));
}

// Antes de ejecucion (Pendiente de pago / Confirmada) la reserva admite modificaciones;
// En ejecucion, Finalizada y Cancelada no admiten descuento adicional (RF-008/RF-003A).
function isReservationEligibleForAdditionalDiscount(statusClass) {
  return statusClass === "is-pending" || statusClass === "is-confirmed";
}


const OPERATOR_PAYMENT_FOLLOWUPS_KEY = "multitour-payment-followups";

function getOperatorPaymentFollowups() {
  try { return JSON.parse(localStorage.getItem(OPERATOR_PAYMENT_FOLLOWUPS_KEY) || "{}"); } catch { return {}; }
}

function getOperatorPaymentFollowupsForCode(code) {
  return getOperatorPaymentFollowups()[code] || [];
}

// Historico de seguimientos: cada nota se agrega a la lista existente, nunca la reemplaza.
function appendOperatorPaymentFollowup(code, entry) {
  const all = getOperatorPaymentFollowups();
  all[code] = [...(all[code] || []), entry];
  localStorage.setItem(OPERATOR_PAYMENT_FOLLOWUPS_KEY, JSON.stringify(all));
}


const SUPPORT_IMAGE_EXTENSIONS = ["jpg", "jpeg", "png", "gif", "webp"];
// Iconos genericos (no son comprobantes reales): solo representan el tipo de archivo adjunto.
const SUPPORT_IMAGE_PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="220" height="140" viewBox="0 0 220 140">'
  + '<rect width="220" height="140" rx="10" fill="#eef5f1"/>'
  + '<path d="M32 104l38-42 26 28 22-24 40 38" stroke="#8fae9f" stroke-width="5" fill="none"/>'
  + '<circle cx="66" cy="46" r="11" fill="#8fae9f"/>'
  + '</svg>',
);
const SUPPORT_DOCUMENT_PLACEHOLDER = "data:image/svg+xml;utf8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="220" height="280" viewBox="0 0 220 280">'
  + '<rect x="10" y="10" width="200" height="260" rx="6" fill="#ffffff" stroke="#cbd8d2" stroke-width="2"/>'
  + '<path d="M150 10v40h40z" fill="#e3ece7"/>'
  + '<rect x="30" y="70" width="140" height="10" rx="3" fill="#dbe6e1"/>'
  + '<rect x="30" y="95" width="140" height="10" rx="3" fill="#dbe6e1"/>'
  + '<rect x="30" y="120" width="90" height="10" rx="3" fill="#dbe6e1"/>'
  + '<rect x="30" y="220" width="52" height="24" rx="4" fill="#c0392b"/>'
  + '<text x="40" y="237" font-family="Arial" font-size="13" fill="#ffffff">PDF</text>'
  + '</svg>',
);

function classifySupportFile(filename) {
  if (!filename) return "none";
  const ext = filename.split(".").pop().toLowerCase();
  return SUPPORT_IMAGE_EXTENSIONS.includes(ext) ? "image" : "document";
}

// El nombre del archivo se muestra una sola vez (data-validate-support-filename).
// Imagen: vista previa directa. PDF/documento: "Ver comprobante" abre el documento
// (sin dejar un texto de referencia una vez que ya existe visualizacion real).
function renderSupportPreview(form, filename) {
  const imageEl = form.querySelector("[data-validate-support-image]");
  const viewButton = form.querySelector("[data-validate-support-view]");
  const documentEl = form.querySelector("[data-validate-support-document]");
  const filenameEl = form.querySelector("[data-validate-support-filename]");
  const type = classifySupportFile(filename);

  if (filenameEl) filenameEl.textContent = filename ? `Archivo: ${filename}` : "Sin comprobante adjunto";
  if (imageEl) {
    imageEl.hidden = type !== "image";
    if (type === "image") imageEl.src = SUPPORT_IMAGE_PLACEHOLDER;
  }
  if (viewButton) {
    viewButton.hidden = type !== "document";
    if (type === "document") {
      viewButton.addEventListener("click", () => {
        if (!documentEl) return;
        const isOpen = !documentEl.hidden;
        if (isOpen) {
          documentEl.hidden = true;
        } else {
          documentEl.src = SUPPORT_DOCUMENT_PLACEHOLDER;
          documentEl.hidden = false;
        }
      });
    }
  }
}


function setupOperatorPaymentFollowup() {
  if (document.body.dataset.screen !== "operator-payment-followup") return;
  const code = new URLSearchParams(window.location.search).get("reservation") || "";
  // Misma fuente que Detalle de reserva y Gestión de pago: el modelo unificado ya refleja los
  // comprobantes validados, el efectivo recibido y los descuentos o modificaciones.
  const reservation = code ? getUnifiedOperatorReservation(code) : null;
  const form = document.querySelector("[data-followup-form]");
  const feedback = document.querySelector("[data-followup-feedback]");
  if (!form) return;

  if (!reservation) {
    if (feedback) feedback.textContent = "No se encontró el pago seleccionado. Vuelve a Pagos e ingresa nuevamente por Registrar seguimiento.";
    form.querySelectorAll("input, textarea, button").forEach((el) => { el.disabled = true; });
    return;
  }

  // Una reserva sin saldo pendiente (o Cancelada) ya no es un pago pendiente: solo se consulta
  // el historial existente. Los roles de consulta tampoco registran seguimientos.
  const isSettled = reservation.balanceValue === 0 || reservation.status === "Cancelada";
  const readOnly = isSettled || isOperatorQueryOnlyRole();

  form.querySelector("[data-followup-code]").value = `#${code}`;
  form.querySelector("[data-followup-customer]").value = reservation.customer || "";
  form.querySelector("[data-followup-method]").value = `${reservation.paymentType} · ${reservation.paymentMedium}`;
  form.querySelector("[data-followup-amount]").value = reservation.paid || "";
  form.querySelector("[data-followup-balance]").value = reservation.balance;
  form.querySelector("[data-followup-status]").value = reservation.financialStatus || "No aplica por reserva cancelada";
  // El plazo de pago lo parametriza el tenant según el tipo de pago; su vencimiento efectivo
  // nunca supera la hora programada de inicio de la salida (RN-RES-006). No hay plazo
  // parametrizado en el mockup: se informa en vez de inventar uno.
  const followupDeadline = getOperatorPaymentDeadline(reservation);
  form.querySelector("[data-followup-deadline]").value = describeOperatorPaymentDeadline(followupDeadline);
  const followupDeparture = getOperatorReservationDeparture(reservation);
  const followupDepartureField = form.querySelector("[data-followup-departure]");
  if (followupDepartureField) followupDepartureField.value = followupDeparture ? `${followupDeparture.id} · ${followupDeparture.tourName} · ${followupDeparture.label} (${followupDeparture.status})` : "Sin salida asociada";

  const noteInput = form.querySelector("[data-followup-note]");
  const noteField = noteInput?.closest("[data-followup-entry]") || noteInput?.closest("label");
  const deadlineField = form.querySelector("[data-followup-deadline]")?.closest("label");
  const submitButton = form.querySelector('button[type="submit"]');
  const historyBody = document.querySelector("[data-followup-history]");
  const emptyNote = document.querySelector("[data-followup-empty]");

  if (readOnly) {
    if (feedback) {
      feedback.textContent = isSettled
        ? "Esta reserva no tiene saldo pendiente o está cancelada: solo puedes consultar el historial de seguimientos existente."
        : "Tu rol es de solo consulta: puedes revisar el historial de seguimientos.";
    }
    if (noteField) noteField.hidden = true;
    if (deadlineField) deadlineField.hidden = true;
    if (submitButton) submitButton.hidden = true;
  }

  const renderHistory = () => {
    const entries = getOperatorPaymentFollowupsForCode(code);
    if (historyBody) {
      historyBody.innerHTML = entries
        .map((entry) => `<tr><td>${escapeHtml(entry.date)}</td><td>${escapeHtml(entry.time)}</td><td>${escapeHtml(entry.actor)}</td><td>${escapeHtml(entry.note)}</td></tr>`)
        .join("");
    }
    if (emptyNote) emptyNote.hidden = entries.length > 0;
  };
  renderHistory();

  // Ampliación única del plazo (RN-RES-006): la conceden el Colaborador operativo o el
  // Administrador del tenant antes del vencimiento y queda registrada con duración, fecha, hora y responsable.
  const extensionPanel = document.querySelector("[data-extension-panel]");
  if (extensionPanel) {
    const renderExtension = () => {
      const current = getOperatorPaymentDeadline(getUnifiedOperatorReservation(code));
      extensionPanel.hidden = readOnly || !current.applies || getUnifiedOperatorReservation(code).status !== "Pendiente de pago";
      const text = extensionPanel.querySelector("[data-extension-text]");
      if (text) text.textContent = current.extension
        ? `Ampliación concedida: ${current.extension.hours} h por ${current.extension.actor} el ${formatOperatorTenantDateTime(current.extension.at)}. El plazo total es el inicial (${current.initialHours} h) más la ampliación y nunca supera la hora de inicio de la salida. No se admite otra ampliación.`
        : `Se puede conceder una única ampliación antes del vencimiento (duración sugerida: ${getOperatorReservationPaymentParams(getUnifiedOperatorReservation(code)).extensionHours} h). El plazo total nunca supera la hora programada de inicio de la salida.`;
      const hoursInput = extensionPanel.querySelector("[data-extension-hours]");
      if (hoursInput && !hoursInput.value) hoursInput.value = getOperatorReservationPaymentParams(getUnifiedOperatorReservation(code)).extensionHours;
      extensionPanel.querySelectorAll("input, button").forEach((el) => { el.disabled = Boolean(current.extension); });
      const deadlineInput = form.querySelector("[data-followup-deadline]");
      if (deadlineInput) deadlineInput.value = describeOperatorPaymentDeadline(current);
    };
    renderExtension();
    extensionPanel.querySelector("[data-extension-form]")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const result = grantOperatorPaymentExtension(code, extensionPanel.querySelector("[data-extension-hours]").value);
      const note = extensionPanel.querySelector("[data-extension-feedback]");
      if (note) { note.hidden = false; note.textContent = result.ok ? "Ampliación registrada con su duración, fecha, hora y responsable." : result.error; note.classList.toggle("is-valid", result.ok); }
      renderExtension();
    });
  }

  if (readOnly) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = noteInput.value.trim();
    if (!note) {
      feedback.textContent = "Registra una nota de seguimiento antes de guardar.";
      feedback.classList.remove("is-valid");
      return;
    }
    const now = getOperatorNow();
    appendOperatorPaymentFollowup(code, {
      note,
      actor: getOperatorActorLabel(),
      date: getOperatorTenantDateKey(now),
      time: formatOperatorTenantTime(now),
    });
    noteInput.value = "";
    feedback.textContent = "Seguimiento registrado correctamente.";
    feedback.classList.add("is-valid");
    renderHistory();
  });
}

// Devoluciones monetarias (RF-015B, RN-RES-008, RN-RES-006C, RN-RES-009, RF-021).
//
// Tres decisiones separadas: determinación del valor a devolver, autorización (solo el
// Administrador del tenant) y ejecución efectiva de la salida de dinero (Administrador o
// Colaborador operativo, únicamente con autorización previa trazable). Una devolución
// determinada debe ejecutarse en un máximo de 5 días hábiles; si no se completa queda marcada
// como vencida. Si el Administrador no decide en 24 horas corridas, Multitour determina la
// devolución del 100 % (queda pendiente de ejecución; no implica que el dinero se devolvió).
//
// La lista empieza vacía hasta que exista un flujo real que registre una solicitud.
const OPERATOR_REFUND_REQUESTS_KEY = "multitour-refund-requests";
const OPERATOR_REFUND_DECISION_MS = 24 * 60 * 60 * 1000;
const OPERATOR_REFUND_EXECUTION_BUSINESS_DAYS = 5;

// Reglas de determinación del valor a devolver según el origen de la cancelación o
// modificación. Reemplaza la antigua etiqueta "pendiente de parametrización comercial".
const OPERATOR_REFUND_ORIGIN_RULES = {
  cliente: {
    label: "Cancelación solicitada por el cliente",
    rule: "Se aplica la política de cancelación vigente del servicio: la penalidad válida se descuenta de lo pagado y validado y el resultado es el monto reembolsable (RF-021). Sin penalidad parametrizada se devuelve el 100 %.",
  },
  "no-atribuible": {
    label: "Causa no atribuible al cliente",
    rule: "Devolución del 100 % de los valores pagados y validados, sin penalidades, retenciones ni devoluciones parciales (RN-EJE-002).",
  },
  "incumplimiento-pago": {
    label: "Cancelación por incumplimiento del pago",
    rule: "Valores abonados en tratamiento pendiente: devolución del 100 % del valor abonado y validado o registro del 100 % como saldo a favor (RN-RES-006C).",
  },
  modificacion: {
    label: "Excedente por reducción del valor",
    rule: "Devolución del 100 % del excedente sobre los pagos validados o registro del 100 % como saldo a favor del cliente (RN-RES-004).",
  },
};

// Suma días hábiles (lunes a viernes). Los festivos del tenant no están parametrizados.
function addOperatorBusinessDays(start, days) {
  const result = new Date(start);
  let added = 0;
  while (added < days) {
    result.setDate(result.getDate() + 1);
    const weekday = result.getDay();
    if (weekday !== 0 && weekday !== 6) added += 1;
  }
  return result;
}

// Determina el monto a devolver. Por defecto 100 %; solo la cancelación solicitada por el
// cliente admite una penalidad parametrizada por servicio (porcentaje sobre lo pagado y
// validado). Devuelve el detalle para dejarlo trazable en la reserva.
function computeOperatorRefundDetermination({ paid, origin = "cliente", penaltyPercent = 0 }) {
  const rule = OPERATOR_REFUND_ORIGIN_RULES[origin] || OPERATOR_REFUND_ORIGIN_RULES.cliente;
  const base = Math.max(Number(paid || 0), 0);
  const percent = origin === "cliente" ? Math.min(Math.max(Number(penaltyPercent || 0), 0), 100) : 0;
  const penalty = Math.round((base * percent) / 100);
  const amount = base - penalty;
  const ruleLabel = percent > 0
    ? `${rule.label}: ${formatCOP(base)} pagados y validados menos penalidad del ${percent} % (${formatCOP(penalty)}) = ${formatCOP(amount)} reembolsables.`
    : `${rule.label}: devolución del 100 % de ${formatCOP(base)} pagados y validados${origin === "cliente" ? " (sin penalidad parametrizada para el servicio)" : ""}.`;
  return { origin, originLabel: rule.label, paid: base, penaltyPercent: percent, penalty, amount, ruleLabel };
}

function getOperatorRefundRequests() {
  const list = readOperatorStorage(OPERATOR_REFUND_REQUESTS_KEY, []);
  const now = getOperatorNow();
  let changed = false;
  const normalized = list.map((request) => {
    // Sin decisión del Administrador del tenant en 24 horas corridas: determinación
    // automática del 100 %, pendiente de ejecución. Se notifica a los Administradores
    // activos (alerta persistente y correo; simulados en el mockup).
    // La decisión financiera de 24 h se suspende con el tenant inactivo (AC-01): fecha efectiva desplazada.
    const effectiveDecisionDueAt = request.decisionDueAt ? getOperatorRefundDecisionDueAt(request).toISOString() : "";
    if (request.status === "Pendiente de autorización" && effectiveDecisionDueAt && now >= new Date(effectiveDecisionDueAt)) {
      changed = true;
      return {
        ...request,
        status: "Autorizada",
        autoDetermined: true,
        authorizedBy: "Multitour (determinación automática)",
        authorizedAt: effectiveDecisionDueAt,
        authorizationNote: request.origin === "saldo-a-favor"
          ? `Sin decisión del Administrador del tenant en 24 horas corridas: Multitour autorizó automáticamente la devolución del monto disponible solicitado (${request.amount}) y notificó a todos los Administradores del tenant. Queda pendiente de ejecución en máximo 5 días hábiles; no implica que el dinero haya sido devuelto.`
          : "Sin decisión del Administrador del tenant en 24 horas corridas: Multitour determinó la devolución del 100 %. Queda pendiente de ejecución; no implica que el dinero haya sido devuelto.",
        executionDueAt: addOperatorBusinessDays(new Date(effectiveDecisionDueAt), OPERATOR_REFUND_EXECUTION_BUSINESS_DAYS).toISOString(),
        adminsNotified: true,
      };
    }
    return request;
  });
  if (changed) saveOperatorRefundRequests(normalized);
  return normalized;
}

function saveOperatorRefundRequests(list) {
  localStorage.setItem(OPERATOR_REFUND_REQUESTS_KEY, JSON.stringify(list));
}

function getOperatorRefundRequest(id) {
  return getOperatorRefundRequests().find((item) => item.id === id) || null;
}

// Devolución determinada y no ejecutada dentro de 5 días hábiles: queda marcada como vencida
// (alerta para los Administradores del tenant); sigue siendo una obligación pendiente.
function operatorRefundExecutionOverdue(request) {
  return Boolean(request && request.status === "Autorizada" && request.executionDueAt && getOperatorNow() > new Date(request.executionDueAt));
}

// Actualiza SIEMPRE el mismo registro (nunca crea uno nuevo) y nunca borra campos ya
// registrados: autorización y ejecución se acumulan, no se sobrescriben entre sí.
function updateOperatorRefundRequest(id, patch) {
  const list = getOperatorRefundRequests();
  const index = list.findIndex((item) => item.id === id);
  if (index === -1) return null;
  list[index] = { ...list[index], ...patch };
  saveOperatorRefundRequests(list);
  return list[index];
}

function setupOperatorRefundRequests() {
  if (document.body.dataset.screen !== "operator-refund-requests") return;
  ensureOperatorTreatmentRequests();
  const list = getOperatorRefundRequests();
  // Alertas del panel: ejecuciones vencidas (5 días hábiles) y decisiones de 24 horas por vencer.
  const alertsBox = document.querySelector("[data-refund-alerts]");
  if (alertsBox) {
    const overdue = list.filter(operatorRefundExecutionOverdue);
    const dueSoon = list.filter((request) => request.status === "Pendiente de autorización" && request.decisionDueAt);
    const lines = [
      ...overdue.map((request) => `#${escapeHtml(request.reservationCode)}: la ejecución de la devolución (${escapeHtml(request.amount)}) superó los 5 días hábiles y está vencida; sigue siendo una obligación pendiente.`),
      ...dueSoon.map((request) => `#${escapeHtml(request.reservationCode)}: decisión del Administrador del tenant pendiente hasta el ${escapeHtml(formatOperatorTenantDateTime(getOperatorRefundDecisionDueAt(request).toISOString()))}; sin decisión se determina la devolución del 100 %.`),
      ...list.filter((request) => request.autoDetermined && request.status === "Autorizada").map((request) => `#${escapeHtml(request.reservationCode)}: devolución determinada automáticamente (${escapeHtml(request.amount)}), pendiente de ejecución; no implica que el dinero haya sido devuelto.`),
    ];
    alertsBox.hidden = !lines.length || isOperatorQueryOnlyRole();
    const alertsList = alertsBox.querySelector("[data-refund-alerts-list]");
    if (alertsList) alertsList.innerHTML = lines.map((line) => `<li>${line}</li>`).join("");
  }
  const tbody = document.querySelector("[data-refund-list]");
  const emptyNote = document.querySelector("[data-refund-empty]");
  const counter = document.querySelector("[data-refund-count]");
  if (counter) counter.textContent = `${list.length} solicitud${list.length === 1 ? "" : "es"}`;
  if (emptyNote) emptyNote.hidden = list.length > 0;
  if (tbody) {
    tbody.innerHTML = list
      .map((request) => {
        // Autorizar o rechazar es exclusivo del Administrador del tenant: los demás roles solo
        // consultan o, con autorización previa, registran la ejecución.
        const actionLabel = request.status === "Pendiente de autorización"
          ? (isOperatorAdmin() ? (request.kind === "tratamiento" ? "Decidir tratamiento" : "Autorizar devolución") : "Consultar detalle")
          : request.status === "Autorizada" && !isOperatorQueryOnlyRole()
            ? "Registrar ejecución"
            : "Consultar detalle";
        const detailHref = withTheme(`admin-detalle-devolucion.html?id=${encodeURIComponent(request.id)}`, getTheme());
        const marks = [
          operatorRefundExecutionOverdue(request) ? "Ejecución vencida (5 días hábiles)" : "",
          request.autoDetermined ? "Determinada por Multitour" : "",
        ].filter(Boolean).map((mark) => `<br><small>${escapeHtml(mark)}</small>`).join("");
        return `<tr><td><a class="operator-reservation-link" href="${detailHref}">#${escapeHtml(request.reservationCode)}</a></td><td>${escapeHtml(request.customer)}</td><td>${escapeHtml(request.reason)}</td><td>${escapeHtml(request.amount)}</td><td><span class="operator-status ${operatorRefundExecutionOverdue(request) ? "is-cancelled" : "is-pending"}">${escapeHtml(request.status)}</span>${marks}</td><td>${escapeHtml(request.requestedAt)}</td><td><a href="${detailHref}">${actionLabel}</a></td></tr>`;
      })
      .join("");
  }
}

function setupOperatorRefundDetail() {
  if (document.body.dataset.screen !== "operator-refund-detail") return;
  const id = new URLSearchParams(window.location.search).get("id") || "";
  const request = getOperatorRefundRequest(id);

  const setText = (selector, value) => { const el = document.querySelector(selector); if (el) el.textContent = value; };

  if (!request) {
    ["reservation", "customer", "reason", "note", "amount", "owner", "date", "method", "cash-movement", "status"].forEach((field) => {
      setText(`[data-refund-${field}]`, field === "reservation" ? "No se encontró la solicitud seleccionada." : "—");
    });
    return;
  }

  const decisionPanel = document.querySelector("[data-refund-decision-panel]");
  const executePanel = document.querySelector("[data-refund-execute-panel]");
  const ruleNote = document.querySelector("[data-refund-pending-calculation-note]");
  const authorizeButton = document.querySelector("[data-refund-authorize]");
  const rejectButton = document.querySelector("[data-refund-reject]");

  const render = (current) => {
    setText("[data-refund-reservation]", `#${current.reservationCode}`);
    setText("[data-refund-customer]", current.customer);
    setText("[data-refund-reason]", current.reason);
    setText("[data-refund-note]", current.administrativeNote || "Sin observaciones registradas.");
    setText("[data-refund-amount]", current.amount);
    setText("[data-refund-decision-note-display]", current.authorizationNote || current.rejectionReason || "No aplica");
    setText("[data-refund-owner]", current.executedBy || current.rejectedBy || current.authorizedBy || "Sin responsable asignado");
    // Toda devolución registra su fecha; una vez ejecutada, la relevante es la de la ejecución.
    setText("[data-refund-date]", current.executedAt ? formatOperatorTenantDateTime(current.executedAt) : current.requestedAt);
    setText("[data-refund-method]", current.exitMethod || "No aplica");
    setText("[data-refund-cash-movement]", current.cashMovementRef || "No aplica");
    setText("[data-refund-status]", operatorRefundExecutionOverdue(current) ? `${current.status} · Ejecución vencida` : current.status);

    const isPending = current.status === "Pendiente de autorización";
    // Regla de determinación del valor, plazo de decisión (24 h) y de ejecución (5 días hábiles).
    if (ruleNote) {
      const parts = [current.ruleLabel || "Devolución del 100 % por defecto."];
      if (isPending && current.decisionDueAt) parts.push(`Decisión del Administrador del tenant antes del ${formatOperatorTenantDateTime(getOperatorRefundDecisionDueAt(current).toISOString())}; si no decide, Multitour determina la devolución del 100 %.`);
      if (current.executionDueAt) parts.push(`Ejecución máxima: ${formatOperatorTenantDateTime(current.executionDueAt)} (5 días hábiles).`);
      ruleNote.textContent = parts.join(" ");
      ruleNote.hidden = false;
    }
    // Solo el Administrador del tenant autoriza o rechaza. El tratamiento de valores abonados,
    // el monto reembolsable del cliente y el excedente por modificación se deciden entre devolver
    // el 100 % o registrar saldo a favor.
    if (decisionPanel) decisionPanel.hidden = !isPending || !isOperatorAdmin();
    const isTreatment = current.kind === "tratamiento";
    document.querySelectorAll("[data-refund-generic-actions]").forEach((node) => { node.hidden = isTreatment; });
    document.querySelectorAll("[data-refund-treatment-actions]").forEach((node) => { node.hidden = !isTreatment; });
    const overdueNote = document.querySelector("[data-refund-overdue-note]");
    if (overdueNote) overdueNote.hidden = !operatorRefundExecutionOverdue(current);
    if (authorizeButton) authorizeButton.disabled = false;
    if (executePanel) executePanel.hidden = current.status !== "Autorizada" || isOperatorQueryOnlyRole();
  };
  render(request);

  const decisionForm = document.querySelector("[data-refund-decision-form]");
  const decisionNoteInput = document.querySelector("[data-refund-decision-note]");
  const decisionFeedback = document.querySelector("[data-refund-decision-feedback]");
  const disableDecisionForm = () => decisionForm?.querySelectorAll("textarea, button").forEach((el) => { el.disabled = true; });

  authorizeButton?.addEventListener("click", () => {
    if (!isOperatorAdmin()) return;
    const note = decisionNoteInput.value.trim();
    if (!note) {
      decisionFeedback.textContent = "Registra el motivo para autorizar la devolución.";
      decisionFeedback.classList.remove("is-valid");
      return;
    }
    const authorizedAt = getOperatorNow();
    const updated = updateOperatorRefundRequest(id, {
      status: "Autorizada",
      authorizedBy: getOperatorActorLabel(),
      authorizedAt: authorizedAt.toISOString(),
      authorizationNote: note,
      executionDueAt: addOperatorBusinessDays(authorizedAt, OPERATOR_REFUND_EXECUTION_BUSINESS_DAYS).toISOString(),
    });
    if (!updated) return;
    render(updated);
    decisionFeedback.textContent = "Devolución autorizada correctamente. Debe ejecutarse en un máximo de 5 días hábiles.";
    decisionFeedback.classList.add("is-valid");
    disableDecisionForm();
  });

  rejectButton?.addEventListener("click", () => {
    if (!isOperatorAdmin()) return;
    const note = decisionNoteInput.value.trim();
    if (!note) {
      decisionFeedback.textContent = "Registra el motivo del rechazo.";
      decisionFeedback.classList.remove("is-valid");
      return;
    }
    const updated = updateOperatorRefundRequest(id, {
      status: "Rechazada",
      rejectedBy: getOperatorActorLabel(),
      rejectedAt: getOperatorNow().toISOString(),
      rejectionReason: note,
    });
    if (!updated) return;
    render(updated);
    decisionFeedback.textContent = "Devolución rechazada correctamente.";
    decisionFeedback.classList.add("is-valid");
    disableDecisionForm();
  });

  document.querySelectorAll("[data-refund-treatment]").forEach((button) => button.addEventListener("click", () => {
    const result = decideOperatorTreatment(id, button.dataset.refundTreatment, decisionNoteInput.value);
    if (!result.ok) {
      decisionFeedback.textContent = result.error;
      decisionFeedback.classList.remove("is-valid");
      return;
    }
    render(getOperatorRefundRequest(id));
    decisionFeedback.textContent = result.option === "devolver"
      ? "Devolución del 100 % autorizada. Debe ejecutarse en un máximo de 5 días hábiles y registrarse como movimiento de caja."
      : "El 100 % quedó registrado como saldo a favor del cliente dentro del tenant.";
    decisionFeedback.classList.add("is-valid");
    disableDecisionForm();
  }));

  const executeForm = document.querySelector("[data-refund-execute-form]");
  const outflowSelect = document.querySelector("[data-refund-execute-outflow]");
  const outflowFields = document.querySelectorAll("[data-refund-outflow-field]");
  outflowSelect?.addEventListener("change", () => {
    const show = outflowSelect.value === "si";
    outflowFields.forEach((field) => { field.hidden = !show; });
  });
  executeForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const feedback = document.querySelector("[data-refund-execute-feedback]");
    const current = getOperatorRefundRequest(id);
    if (!current || current.status !== "Autorizada") {
      feedback.textContent = "Solo se puede ejecutar una devolución con autorización previa y trazable.";
      feedback.classList.remove("is-valid");
      return;
    }
    const outflow = outflowSelect.value;
    if (!outflow) {
      feedback.textContent = "Indica si hubo salida efectiva de dinero.";
      feedback.classList.remove("is-valid");
      return;
    }
    // Sin salida efectiva de dinero no se marca "Ejecutada" (RF-015B, RN-RES-008): el valor
    // queda registrado como saldo a favor del cliente dentro del tenant.
    if (outflow === "si") {
      const cashMovement = document.querySelector("[data-refund-execute-cash]").value.trim();
      if (!cashMovement) {
        feedback.textContent = "Registra el movimiento de caja asociado a la salida de dinero.";
        feedback.classList.remove("is-valid");
        return;
      }
      const method = document.querySelector("[data-refund-execute-method]").value;
      if (method === "Efectivo" && getOperatorCashDay().status === "cerrada") {
        feedback.textContent = "La caja de hoy está cerrada: una salida en efectivo exige reabrirla con motivo (permiso Gestionar caja).";
        feedback.classList.remove("is-valid");
        return;
      }
      const updated = updateOperatorRefundRequest(id, {
        status: "Ejecutada",
        executedBy: getOperatorActorLabel(),
        executedAt: getOperatorNow().toISOString(),
        exitMethod: method,
        cashMovementRef: cashMovement,
        executedAmount: current.amountValue || parseCOP(current.amount),
      });
      if (!updated) return;
      render(updated);
      feedback.textContent = "Ejecución registrada correctamente. La salida de dinero quedó asociada a un movimiento de caja.";
    } else {
      const updated = updateOperatorRefundRequest(id, {
        status: "Saldo a favor",
        executedBy: getOperatorActorLabel(),
        executedAt: getOperatorNow().toISOString(),
      });
      if (!updated) return;
      addOperatorCreditEntry(updated.reservationCode, updated.amountValue || parseCOP(updated.amount), "Valor registrado como saldo a favor");
      render(updated);
      feedback.textContent = "Registrado como saldo a favor del cliente dentro del tenant: no hubo salida efectiva de dinero.";
    }
    feedback.classList.add("is-valid");
    executeForm.querySelectorAll("select, input, button").forEach((el) => { el.disabled = true; });
  });
}

// Origen de una solicitud de devolución: cancelación o modificación registrada con su causal y
// el valor a devolver ya determinado según la regla del PDR.
const OPERATOR_REFUND_ORIGINS_KEY = "multitour-refund-origins";

function getOperatorRefundOrigins() {
  return readOperatorStorage(OPERATOR_REFUND_ORIGINS_KEY, {});
}

function getOperatorRefundOrigin(code) {
  return getOperatorRefundOrigins()[code] || null;
}

function setOperatorRefundOrigin(code, origin) {
  const all = getOperatorRefundOrigins();
  all[code] = origin;
  localStorage.setItem(OPERATOR_REFUND_ORIGINS_KEY, JSON.stringify(all));
}

// El estado "Cancelada" de la reserva es independiente de si existe valor a devolver: una
// cancelación con $0 pagado también deja la reserva en "Cancelada" (estado terminal).
const OPERATOR_RESERVATION_CANCELLATIONS_KEY = "multitour-reservation-cancellations";

function getOperatorReservationCancellations() {
  return readOperatorStorage(OPERATOR_RESERVATION_CANCELLATIONS_KEY, {});
}

function getOperatorReservationCancellation(code) {
  return getOperatorReservationCancellations()[code] || null;
}

function setOperatorReservationCancellation(code, cancellation) {
  const all = getOperatorReservationCancellations();
  all[code] = cancellation;
  localStorage.setItem(OPERATOR_RESERVATION_CANCELLATIONS_KEY, JSON.stringify(all));
}

// Modificación de reserva (RF-003A): cambia servicio, fecha y viajeros de la MISMA reserva y
// recalcula valor proyectado, descuento, valor final y saldo. Los pagos validados no se
// pierden (el saldo se recalcula sobre lo ya pagado).
const OPERATOR_RESERVATION_MODIFICATIONS_KEY = "multitour-reservation-modifications";

function getOperatorReservationModifications() {
  return readOperatorStorage(OPERATOR_RESERVATION_MODIFICATIONS_KEY, {});
}

function getOperatorReservationModification(code) {
  return getOperatorReservationModifications()[code] || null;
}

function setOperatorReservationModification(code, modification) {
  const all = getOperatorReservationModifications();
  all[code] = modification;
  localStorage.setItem(OPERATOR_RESERVATION_MODIFICATIONS_KEY, JSON.stringify(all));
}
function setupOperatorCancelModifyReservation() {
  if (document.body.dataset.screen !== "operator-cancel-modify-reservation") return;
  const code = new URLSearchParams(window.location.search).get("reservation") || "";
  const reservation = getUnifiedOperatorReservation(code);
  const form = document.querySelector("[data-cancel-modify-form]");
  const feedback = document.querySelector("[data-cancel-modify-feedback]");
  if (!form) return;
  const disableAll = () => form.querySelectorAll("input, textarea, select, button").forEach((el) => { el.disabled = true; });
  const say = (message, ok) => {
    if (!feedback) return;
    feedback.textContent = message;
    feedback.classList.toggle("is-valid", Boolean(ok));
  };

  document.querySelectorAll("[data-cancel-modify-back]").forEach((link) => {
    link.href = withTheme(`admin-detalle-reserva.html?reservation=${encodeURIComponent(code)}`, getTheme());
  });

  if (!reservation) {
    say("No se encontró la reserva seleccionada.");
    disableAll();
    return;
  }
  // La cancelación la registran el Colaborador operativo o el Administrador del tenant, con
  // causal y trazabilidad (RF-021). Los roles de consulta no registran cambios.
  if (isOperatorQueryOnlyRole()) {
    say("Tu rol es de solo consulta: no puede cancelar ni modificar reservas.");
    disableAll();
    return;
  }
  if (["is-finalized", "is-cancelled"].includes(reservation.statusClass)) {
    say(`Esta reserva está en estado "${reservation.status}" y ya no admite cancelación o modificación (Cancelada y Finalizada son estados terminales).`);
    disableAll();
    return;
  }

  const currentDeparture = getOperatorReservationDeparture(reservation);
  form.querySelector("[data-cancel-modify-code]").value = `#${code}`;
  form.querySelector("[data-cancel-modify-customer]").value = reservation.customer;
  form.querySelector("[data-cancel-modify-status]").value = reservation.status;
  form.querySelector("[data-cancel-modify-paid]").value = reservation.paid;
  const departureField = form.querySelector("[data-cancel-modify-departure]");
  if (departureField) departureField.value = currentDeparture ? `${currentDeparture.id} · ${currentDeparture.tourName} · ${currentDeparture.label} (${currentDeparture.status})` : reservation.date || "Sin salida asociada";

  // En ejecución no se permiten ajustes ordinarios: solo cancelación extraordinaria por
  // emergencia (RF-008, RN-EJE-002).
  const typeSelect = form.querySelector("[data-cancel-modify-type]");
  const modificationOption = form.querySelector("[data-cancel-modify-type-modification]");
  const dateOption = typeSelect.querySelector('option[value="Cambio de fecha"]');
  const executionNote = document.querySelector("[data-cancel-modify-execution-note]");
  const isInExecution = reservation.statusClass === "is-execution";
  if (isInExecution) {
    if (modificationOption) modificationOption.disabled = true;
    if (dateOption) dateOption.disabled = true;
    if (executionNote) executionNote.hidden = false;
    typeSelect.value = "Cancelación";
  }

  const causalInput = form.querySelector("[data-cancel-modify-causal]");
  if (isInExecution) causalInput.placeholder = "Describe la emergencia que justifica la cancelación extraordinaria";
  // Origen de la cancelación: determina la regla de devolución (cliente con penalidad, causa
  // no atribuible al cliente o incumplimiento del pago).
  const originSelect = form.querySelector("[data-cancel-modify-origin]");
  const originField = form.querySelector("[data-cancel-origin-field]");
  const selectedOrigin = () => (isInExecution ? "no-atribuible" : originSelect?.value || "cliente");
  const penaltyPercent = getOperatorCancellationPenaltyPercent(reservation.service);
  const paidValue = reservation.paidValue;

  // Catálogo vivo de tours (solo activos) y salidas reales con cupo.
  const services = getOperatorReservationServiceCatalog();
  const modifyFieldsSection = document.querySelector("[data-modify-fields]");
  const dateChangeSection = document.querySelector("[data-datechange-fields]");
  const dateChangeSelect = form.querySelector("[data-datechange-departure]");
  const dateChangeNote = document.querySelector("[data-datechange-note]");
  const serviceSelect = form.querySelector("[data-modify-service]");
  const departureSelect = form.querySelector("[data-modify-departure]");
  const travelersInput = form.querySelector("[data-modify-travelers]");
  const projectedNode = form.querySelector("[data-modify-projected]");
  const discountNode = form.querySelector("[data-modify-discount]");
  const finalNode = form.querySelector("[data-modify-final]");
  const balanceNode = form.querySelector("[data-modify-balance]");
  const potentialField = form.querySelector("[data-cancel-modify-potential]");

  // Contexto comercial fijado al crear la reserva (GAP-018, FINAL-004), descuento adicional
  // autorizable en la modificación y desglose de componentes del recálculo.
  const firstPanel = form.querySelector("section.operator-panel");
  if (firstPanel && !form.querySelector("[data-commercial-panel]")) firstPanel.insertAdjacentHTML("afterend", `<section class="operator-panel mt-compact-panel" data-commercial-panel>${renderOperatorCommercialContextHtml(reservation)}<p class="mt-muted">Los descuentos creados después no se aplican y los que vencieron no desaparecen: la modificación se recalcula con este contexto.</p></section>`);
  const existingAdjustment = getOperatorReservationAdjustment(code);
  if (modifyFieldsSection && !modifyFieldsSection.querySelector("[data-modify-additional-box]")) {
    const grid = modifyFieldsSection.querySelector(".operator-form-grid");
    grid?.insertAdjacentHTML("beforeend", existingAdjustment
      ? `<label data-modify-additional-box>Descuento adicional ya autorizado (%)<input readonly data-modify-additional value="${existingAdjustment.percentage}" /></label>`
      : isOperatorAdmin()
        ? `<label data-modify-additional-box>Descuento adicional (%) · opcional, solo Administrador<input type="number" min="0" max="${OPERATOR_ADDITIONAL_DISCOUNT_CAP_PERCENT}" step="1" inputmode="numeric" data-modify-additional placeholder="0" /></label>`
        : `<label data-modify-additional-box>Descuento adicional (%)<input readonly data-modify-additional value="0" title="Solo el Administrador del tenant autoriza descuentos adicionales" /></label>`);
    modifyFieldsSection.insertAdjacentHTML("beforeend", '<div data-modify-components></div><p class="operator-copy" data-modify-difference></p>');
  }
  const additionalInput = form.querySelector("[data-modify-additional]");
  const additionalPercent = () => (existingAdjustment ? existingAdjustment.percentage : isOperatorAdmin() ? Math.min(Math.max(Number(additionalInput?.value) || 0, 0), OPERATOR_ADDITIONAL_DISCOUNT_CAP_PERCENT) : 0);
  const componentsNode = form.querySelector("[data-modify-components]");
  const differenceNode = form.querySelector("[data-modify-difference]");

  if (serviceSelect) {
    serviceSelect.innerHTML = '<option value="">Selecciona el nuevo servicio</option>' + Object.keys(services).map((key) => `<option value="${escapeHtml(key)}">${escapeHtml(services[key].name)}</option>`).join("");
    const currentKey = Object.keys(services).find((key) => services[key].name === reservation.service || key === currentDeparture?.tourKey);
    if (currentKey) serviceSelect.value = currentKey;
  }
  if (travelersInput) travelersInput.value = reservation.travelers;
  const selectedService = () => services[serviceSelect?.value];
  const travelers = () => Math.max(1, Number.parseInt(travelersInput?.value, 10) || 1);

  // Cambio de fecha (E25, C2): misma reserva, nueva salida del mismo tour con disponibilidad. No
  // puede realizarse con un comprobante En validación ni con la salida cancelada (esa se
  // gestiona con la reprogramación).
  let dateChangeBlocked = "";
  if (!currentDeparture) dateChangeBlocked = "La reserva no tiene una salida asociada de la que cambiar la fecha.";
  else if (currentDeparture.status === "Cancelada") dateChangeBlocked = "La salida de esta reserva está cancelada: se gestiona con la propuesta de reprogramación.";
  else if (reservation.receiptStatus === "En validación") dateChangeBlocked = "No se puede cambiar la fecha mientras exista un comprobante En validación: espera su decisión.";
  else if (currentDeparture.status !== "Programada") dateChangeBlocked = "Solo una reserva con salida Programada admite un cambio de fecha.";
  if (dateChangeBlocked && dateOption) dateOption.disabled = true;
  const renderDateChangeOptions = () => {
    if (!dateChangeSelect || !currentDeparture) return;
    const options = getOperatorBookableDepartures(currentDeparture.tourKey).filter((item) => item.id !== currentDeparture.id && item.available >= Number(reservation.travelers));
    dateChangeSelect.innerHTML = '<option value="">Selecciona la nueva salida</option>' + options.map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.id)} · ${escapeHtml(item.label)} · ${item.available} cupo(s) disponible(s)</option>`).join("");
    if (dateChangeNote) {
      dateChangeNote.hidden = !dateChangeBlocked && options.length > 0;
      dateChangeNote.textContent = dateChangeBlocked || "No hay otra salida del mismo tour con disponibilidad suficiente: el cambio no se realiza y la reserva conserva su fecha y su cupo.";
    }
  };
  renderDateChangeOptions();

  const renderDepartureOptions = () => {
    if (!departureSelect) return;
    const key = serviceSelect?.value;
    const options = key ? getOperatorDepartures().filter((item) => item.tourKey === key && (item.bookable || item.id === currentDeparture?.id)) : [];
    departureSelect.innerHTML = '<option value="">Selecciona una salida</option>' + options.map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.id)} · ${escapeHtml(item.label)} · ${item.id === currentDeparture?.id ? "salida actual" : `${item.available} cupo(s) disponible(s)`}</option>`).join("");
    departureSelect.disabled = !key;
    if (currentDeparture && options.some((item) => item.id === currentDeparture.id)) departureSelect.value = currentDeparture.id;
  };

  const computeModification = () => {
    const service = selectedService();
    if (!service) return { service, projected: 0, discount: 0, final: 0, balance: 0, components: [], finalBase: 0, additionalPercent: 0 };
    const quote = computeOperatorModificationQuote(reservation, service, travelers(), additionalPercent());
    return { service, ...quote, balance: Math.max(quote.final - paidValue, 0) };
  };

  // Valor a devolver según la regla del PDR (100 % por defecto; 100 % por causa no atribuible;
  // penalidad en la cancelación solicitada por el cliente; excedente por modificación).
  const determineRefund = (type, final) => {
    if (type === "Cancelación") return paidValue > 0 ? computeOperatorRefundDetermination({ paid: paidValue, origin: selectedOrigin(), penaltyPercent }) : null;
    if (type === "Modificación") return final < paidValue ? computeOperatorRefundDetermination({ paid: paidValue - final, origin: "modificacion" }) : null;
    return null;
  };

  const updatePotentialField = () => {
    if (!potentialField) return;
    if (typeSelect.value === "Cancelación") {
      const determination = determineRefund("Cancelación");
      potentialField.value = determination ? determination.ruleLabel : "No aplica: no hay valores pagados y validados en esta reserva; la cancelación es definitiva y no deja valores por tratar.";
      return;
    }
    if (typeSelect.value === "Cambio de fecha") {
      potentialField.value = "No aplica: el cambio de fecha conserva los valores, los pagos y el historial de la misma reserva.";
      return;
    }
    if (typeSelect.value === "Modificación") {
      const { service, final } = computeModification();
      if (!service) { potentialField.value = "Selecciona el nuevo servicio para calcular el saldo resultante."; return; }
      const determination = determineRefund("Modificación", final);
      potentialField.value = determination ? determination.ruleLabel : "No aplica: el valor final no queda por debajo de lo ya pagado.";
      return;
    }
    potentialField.value = "";
  };

  const renderModificationSummary = () => {
    const { projected, discount, final, balance, components, service } = computeModification();
    if (componentsNode) componentsNode.innerHTML = renderOperatorComponentsHtml(components);
    if (differenceNode) {
      const diff = final - paidValue;
      const start = currentDeparture ? formatOperatorTenantDateTime(currentDeparture.startAt) : "el inicio de la salida";
      differenceNode.textContent = !service ? "" : diff > 0
        ? (reservation.status === "Confirmada" ? `Aumento: diferencia por pagar de ${formatCOP(diff)} antes de la hora de inicio de la salida (${start}); no cambia el estado de la reserva.` : `Aumento: el valor final sube a ${formatCOP(final)}; se paga dentro del plazo vigente y nunca después de la hora de inicio.`)
        : diff < 0 ? `Reducción: excedente de ${formatCOP(-diff)} sobre lo pagado, tratado en 24 horas corridas por el Administrador del tenant (devolución del 100 % o saldo a favor).` : "Sin diferencia frente a lo pagado.";
    }
    if (projectedNode) projectedNode.textContent = formatCOP(projected);
    if (discountNode) discountNode.textContent = discount ? `-${formatCOP(discount)}` : "$0";
    if (finalNode) finalNode.textContent = formatCOP(final);
    if (balanceNode) balanceNode.textContent = formatCOP(balance);
    updatePotentialField();
  };

  const updateTypeVisibility = () => {
    const type = typeSelect.value;
    if (modifyFieldsSection) modifyFieldsSection.hidden = type !== "Modificación";
    if (dateChangeSection) dateChangeSection.hidden = type !== "Cambio de fecha";
    if (originField) originField.hidden = type !== "Cancelación" || isInExecution;
    if (type === "Modificación") { renderDepartureOptions(); renderModificationSummary(); } else updatePotentialField();
  };

  serviceSelect?.addEventListener("change", () => { renderDepartureOptions(); renderModificationSummary(); });
  departureSelect?.addEventListener("change", renderModificationSummary);
  travelersInput?.addEventListener("input", renderModificationSummary);
  additionalInput?.addEventListener("input", renderModificationSummary);
  originSelect?.addEventListener("change", updatePotentialField);
  typeSelect.addEventListener("change", updateTypeVisibility);
  updateTypeVisibility();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const type = typeSelect.value;
    const causal = causalInput.value.trim();
    if (!type || !causal) {
      say("Completa el tipo y la causal de la cancelación o modificación.");
      return;
    }
    if (isInExecution && type !== "Cancelación") {
      say("Esta reserva está en ejecución: solo se permite registrar una cancelación extraordinaria por emergencia.");
      return;
    }

    const registeredAt = getOperatorNow().toISOString();
    let determination = null;
    let message = "";

    if (type === "Cancelación") {
      setOperatorReservationCancellation(code, { causal, origin: selectedOrigin(), registeredAt, registeredBy: getOperatorActorLabel() });
      determination = determineRefund("Cancelación");
    } else if (type === "Cambio de fecha") {
      const target = dateChangeSelect?.value;
      if (dateChangeBlocked) { say(dateChangeBlocked); return; }
      if (!target) { say("Selecciona la nueva salida para registrar el cambio de fecha."); return; }
      // El cupo se traslada a la nueva salida y se libera el de la anterior en una única operación.
      const receive = canOperatorDepartureReceive({ id: target }, Number(reservation.travelers), code);
      if (!receive.ok) { say(`${receive.error} El cambio no se realiza y la reserva conserva su fecha y su cupo.`); return; }
      const next = receive.departure;
      setOperatorReservationModification(code, {
        kind: "Cambio de fecha",
        service: reservation.service,
        date: `${formatOperatorDate(next.date)} · ${next.start}`,
        departureId: next.id,
        previousDepartureId: currentDeparture?.id || "",
        travelers: reservation.travelers,
        companions: reservation.companions,
        projected: reservation.projected,
        discount: reservation.discount,
        final: reservation.final,
        balance: reservation.balance,
        previousValue: reservation.final,
        causal,
        registeredAt,
        registeredBy: getOperatorActorLabel(),
      });
      message = `Cambio de fecha registrado sobre la misma reserva: ${currentDeparture?.id || "salida anterior"} pasa a ${next.id} (${next.label}). El cupo se trasladó en una única operación; pagos, valores e historial se conservan.`;
    } else {
      const { service, projected, discount, final, balance, components, finalBase, context } = computeModification();
      const extraPercent = additionalPercent();
      if (!existingAdjustment && extraPercent > 0 && (!isOperatorAdmin() || extraPercent < 1)) { say("Solo el Administrador del tenant autoriza un descuento adicional válido."); return; }
      const targetId = departureSelect?.value;
      if (!service || !targetId) {
        say("Selecciona el nuevo servicio y la nueva salida para registrar la modificación.");
        return;
      }
      const target = getOperatorDeparture(targetId);
      const receive = canOperatorDepartureReceive(target, travelers(), targetId === currentDeparture?.id ? code : "");
      if (!receive.ok) { say(`${receive.error} La modificación no se realiza.`); return; }
      setOperatorReservationModification(code, {
        kind: "Modificación",
        service: service.name,
        date: `${formatOperatorDate(target.date)} · ${target.start}`,
        departureId: target.id,
        previousDepartureId: currentDeparture?.id || "",
        travelers: travelers(),
        companions: formatOperatorCompanions(travelers()),
        projected: formatCOP(projected),
        discount: discount ? `-${formatCOP(discount)}` : "$0",
        final: formatCOP(final),
        balance: formatCOP(balance),
        components,
        finalBase,
        additionalPercent: extraPercent,
        context,
        previousValue: reservation.final,
        causal,
        registeredAt,
        registeredBy: getOperatorActorLabel(),
      });
      if (!existingAdjustment && extraPercent > 0) {
        setOperatorReservationAdjustment(code, { percentage: extraPercent, reason: causal, appliedAt: registeredAt, appliedBy: getOperatorActorLabel(), previousValue: reservation.value, newValue: final, viaModification: true, history: [] });
        addOperatorFinanceAudit({ action: "Descuento adicional incorporado en una modificación", category: "Pagos y saldo a favor", detail: `${extraPercent} % sobre el subtotal recalculado de la modificación (${formatCOP(finalBase)}).`, reason: causal, recordAffected: `Reserva ${code}`, previousValue: formatCOP(reservation.value), newValue: formatCOP(final) });
      }
      determination = determineRefund("Modificación", final);
    }

    if (determination && determination.amount > 0) {
      setOperatorRefundOrigin(code, {
        type,
        causal,
        origin: determination.origin,
        potentialAmount: formatCOP(determination.amount),
        potentialValue: determination.amount,
        penalty: determination.penalty,
        penaltyPercent: determination.penaltyPercent,
        ruleLabel: determination.ruleLabel,
        pendingCalculation: false,
        registeredAt,
      });
      // Causa no atribuible: devolución del 100 % determinada y autorizada automáticamente.
      const automatic = determination.origin === "no-atribuible" ? createOperatorRefundRequest(code, { motive: causal }) : null;
      message = type === "Cancelación"
        ? (automatic?.ok
          ? `Cancelación registrada. Valor a devolver: ${formatCOP(determination.amount)} (100 %, causa no atribuible al cliente), determinado y autorizado automáticamente; se ejecuta en máximo 5 días hábiles desde Solicitudes de devolución.`
          : `Cancelación registrada. Valor a devolver determinado: ${formatCOP(determination.amount)}. El Administrador del tenant decide en 24 horas corridas (devolución del 100 % por defecto o saldo a favor); la devolución se ejecuta en máximo 5 días hábiles. Continúa desde el detalle de la reserva con Gestionar devolución.`)
        : `Modificación registrada y valores recalculados. Excedente determinado: ${formatCOP(determination.amount)} (devolución del 100 % o saldo a favor, decisión del Administrador del tenant en 24 horas).`;
    } else if (!message) {
      message = type === "Cancelación"
        ? "Cancelación registrada: no hay valores pagados y validados que devolver, por lo que no se genera solicitud de devolución y la cancelación queda como cierre definitivo. El cupo se liberó."
        : "Modificación registrada y valores recalculados.";
    }
    say(message, true);
    disableAll();
    window.setTimeout(() => {
      window.location.href = withTheme(`admin-detalle-reserva.html?reservation=${encodeURIComponent(code)}`, getTheme());
    }, 1800);
  });
}

// Ejecucion real de servicios (RF-007, linea 447): registra lo efectivamente prestado y
// no prestado, con causal obligatoria si no se presto (RN-EJE-005), y la diferencia entre
// lo reservado y lo ejecutado (RN-EJE-003). Al registrarse, la reserva inicia "En ejecucion".
const OPERATOR_RESERVATION_EXECUTIONS_KEY = "multitour-reservation-executions";

// Registros de ejecución de demostración: RES-1840 ya está en la salida En ejecución SAL-001 y
// RES-1829 terminó con la salida SAL-017.
const OPERATOR_BASE_EXECUTIONS = {
  "RES-1840": { departureId: "SAL-001", reserved: 4, executed: 4, served: true, causal: "", services: [], startedAt: "2026-09-01T06:40:00-05:00", registeredBy: "Fernanda Robayo (Administrador del tenant)", finalized: false },
  "RES-1829": { departureId: "SAL-017", reserved: 2, executed: 2, served: true, causal: "", services: [], startedAt: "2026-08-29T06:35:00-05:00", registeredBy: "Fernanda Robayo (Administrador del tenant)", finalized: true, finalizedAt: "2026-08-29T16:45:00-05:00", finalizedBy: "Fernanda Robayo (Administrador del tenant)" },
};

function getOperatorReservationExecutions() {
  let stored = {};
  try { stored = JSON.parse(localStorage.getItem(OPERATOR_RESERVATION_EXECUTIONS_KEY) || "{}"); } catch { stored = {}; }
  return { ...OPERATOR_BASE_EXECUTIONS, ...stored };
}

function getOperatorReservationExecution(code) {
  return getOperatorReservationExecutions()[code] || null;
}

function setOperatorReservationExecution(code, execution) {
  const all = getOperatorReservationExecutions();
  all[code] = execution;
  localStorage.setItem(OPERATOR_RESERVATION_EXECUTIONS_KEY, JSON.stringify(all));
}

// Costos operacionales (RF-009, linea 469): solo pueden registrarse sobre una ejecucion
// real ya iniciada (precondicion RF-009) y quedan siempre asociados a esa ejecucion
// (RN-OPE-001); nunca como costo generico sin operacion relacionada.
const OPERATOR_OPERATION_COSTS_KEY = "multitour-operation-costs";

function getOperatorOperationCosts() {
  try { return JSON.parse(localStorage.getItem(OPERATOR_OPERATION_COSTS_KEY) || "[]"); } catch { return []; }
}

function setOperatorOperationCosts(list) {
  localStorage.setItem(OPERATOR_OPERATION_COSTS_KEY, JSON.stringify(list));
}

// El cierre es de la SALIDA (sección 16, RN-EJE-001): al registrar la finalización de la salida
// sus reservas En ejecución pasan a Finalizada (ver finishOperatorDeparture). Ya no se finaliza
// una reserva de forma aislada.

// Las "próximas ejecuciones" son las salidas Programadas que aún no alcanzan su hora de inicio y
// tienen al menos una reserva vigente; nunca un número fijo.
function getOperatorUpcomingExecutions() {
  return getOperatorDepartures().filter((departure) => departure.status === "Programada" && new Date(departure.startAt) > getOperatorNow()
    && departure.reservationCodes.some((code) => !["Cancelada", "Finalizada"].includes(getUnifiedOperatorReservation(code)?.status)));
}

// Solo se listan ejecuciones realmente registradas, sin inventar datos.
function getOperatorRegisteredExecutions() {
  return Object.values(getUnifiedOperatorReservations())
    .map((reservation) => {
      const execution = getOperatorReservationExecution(reservation.code);
      return execution ? { code: reservation.code, reservation, execution } : null;
    })
    .filter(Boolean);
}

function setupOperatorOperation() {
  if (document.body.dataset.screen !== "operator-operations") return;
  const canManage = operatorCanManageExecution();

  const renderUpcoming = () => {
    const upcoming = getOperatorUpcomingExecutions();
    const countEl = document.querySelector("[data-operation-upcoming-count]");
    if (countEl) countEl.textContent = `${upcoming.length} próxima${upcoming.length === 1 ? "" : "s"}`;
    const tbody = document.querySelector("[data-operation-upcoming]");
    const emptyNote = document.querySelector("[data-operation-upcoming-empty]");
    if (emptyNote) emptyNote.hidden = upcoming.length > 0;
    if (!tbody) return;
    tbody.innerHTML = upcoming.map((departure) => {
      const records = departure.reservationCodes.map((code) => getUnifiedOperatorReservation(code)).filter((record) => record && !["Cancelada", "Finalizada"].includes(record.status));
      const eligible = records.filter(isOperatorReservationEligibleToStart);
      const pendingPay = records.length - eligible.length;
      // El inicio exige reservas Confirmadas con Pago completo; las demás se cancelan al
      // iniciar por incumplimiento del pago. El registro lo hace el Administrador del tenant o un
      // usuario con el permiso Gestionar ejecución de salidas.
      const action = canManage
        ? `<a href="${withTheme(`admin-registrar-ejecucion.html?departure=${encodeURIComponent(departure.id)}`, getTheme())}">Registrar ejecución</a>`
        : `<a href="${withTheme(`admin-registrar-ejecucion.html?departure=${encodeURIComponent(departure.id)}`, getTheme())}">Consultar salida</a>`;
      return `<tr><td>${escapeHtml(departure.label)}<br><small>fin estimado ${escapeHtml(departure.end)}</small></td><td><strong>${escapeHtml(departure.tourName)}</strong><br><small>${escapeHtml(departure.id)} · ${escapeHtml(describeOperatorDepartureVehicles(departure))}</small></td><td>${records.length} reserva(s) · ${eligible.length} lista(s) para iniciar${pendingPay ? `<br><small>${pendingPay} con pago pendiente o saldo (se cancelan al iniciar si no se completan)</small>` : ""}</td><td><span class="operator-status ${operatorDepartureStatusClass(departure.status)}">${escapeHtml(departure.status)}</span></td><td>${action}</td></tr>`;
    }).join("");
  };

  const renderDeadlines = () => {
    const tbody = document.querySelector("[data-operation-deadlines]");
    const emptyNote = document.querySelector("[data-operation-deadlines-empty]");
    if (!tbody) return;
    const rows = Object.values(getUnifiedOperatorReservations())
      .filter((record) => ["Pendiente de pago", "Confirmada"].includes(record.status) && record.balanceValue > 0)
      .map((record) => ({ record, deadline: getOperatorPaymentDeadline(record) }))
      .filter((item) => item.deadline?.applies);
    if (emptyNote) emptyNote.hidden = rows.length > 0;
    tbody.innerHTML = rows.map(({ record, deadline }) => {
      const dueText = deadline.frozen ? "Congelado" : deadline.effectiveDueAt ? formatOperatorTenantDateTime(deadline.effectiveDueAt.toISOString()) : "Sin fecha de creación";
      const marks = [deadline.limitedByDeparture ? "Límite: hora de inicio de la salida" : "", deadline.overdue ? (deadline.hasReceiptInValidation ? "Plazo cumplido con comprobante En validación" : "Vencido") : ""].filter(Boolean).join(" · ");
      const extension = deadline.extension ? `${deadline.extension.hours} h (${escapeHtml(deadline.extension.actor)})` : record.status === "Pendiente de pago" && !deadline.frozen ? "Disponible (única)" : "No aplica";
      return `<tr><td><a class="operator-reservation-link" href="${withTheme(`admin-detalle-reserva.html?reservation=${encodeURIComponent(record.code)}`, getTheme())}">#${escapeHtml(record.code)}</a></td><td>${escapeHtml(record.paymentType)} · ${escapeHtml(record.paymentMedium)}</td><td>${escapeHtml(record.status)}<br><small>${escapeHtml(record.financialStatus || "")} · saldo ${escapeHtml(record.balance)}</small></td><td>${escapeHtml(deadline.departure ? `${deadline.departure.id} · ${deadline.departure.label}` : "Sin salida")}</td><td>${escapeHtml(dueText)}${marks ? `<br><small>${escapeHtml(marks)}</small>` : ""}</td><td>${extension}</td><td><a href="${withTheme(`admin-registrar-seguimiento.html?reservation=${encodeURIComponent(record.code)}`, getTheme())}">Seguimiento y ampliación</a></td></tr>`;
    }).join("");
  };

  const renderExecutions = () => {
    const executions = getOperatorRegisteredExecutions();
    const tbody = document.querySelector("[data-operation-executions]");
    const emptyNote = document.querySelector("[data-operation-executions-empty]");
    const wrap = document.querySelector("[data-operation-executions-wrap]");
    if (emptyNote) emptyNote.hidden = executions.length > 0;
    if (wrap) wrap.hidden = executions.length === 0;
    if (tbody) {
      tbody.innerHTML = executions
        .map(({ code, reservation, execution }) => {
          const executedText = execution.served === false ? "No prestado" : `${execution.executed} viajero(s)`;
          const notProvided = (execution.services || []).filter((service) => !service.provided);
          const causalText = execution.causal || (notProvided.length ? notProvided.map((service) => `${service.name}: ${service.causal}`).join("; ") : "—");
          const difference = Number(execution.reserved) !== Number(execution.executed) ? ` <small>(diferencia de ${Number(execution.reserved) - Number(execution.executed)})</small>` : "";
          const departureId = execution.departureId || getOperatorReservationDepartureId(reservation) || "";
          const manageHref = withTheme(`admin-registrar-ejecucion.html?departure=${encodeURIComponent(departureId)}`, getTheme());
          const detailHref = withTheme(`admin-detalle-reserva.html?reservation=${code}`, getTheme());
          return `<tr><td>#${escapeHtml(code)}</td><td>${escapeHtml(reservation.date)}</td><td><strong>${escapeHtml(reservation.service)}</strong></td><td>${execution.reserved} viajero(s)</td><td>${escapeHtml(executedText)}${difference}</td><td>${escapeHtml(causalText)}</td><td><span class="operator-status ${escapeHtml(reservation.statusClass)}">${escapeHtml(reservation.status)}</span></td><td>${escapeHtml(execution.registeredBy || "—")}</td><td><a href="${detailHref}">Ver reserva</a>${departureId ? ` · <a href="${manageHref}">Gestionar salida</a>` : ""}</td></tr>`;
        })
        .join("");
    }
  };

  const renderCostExecutionOptions = () => {
    const select = document.querySelector("[data-cost-execution]");
    if (!select) return;
    const executions = getOperatorRegisteredExecutions();
    select.innerHTML = '<option value="">Selecciona una ejecución registrada</option>' +
      executions.map(({ code, reservation }) => `<option value="${escapeHtml(code)}">#${escapeHtml(code)} · ${escapeHtml(reservation.service)} · ${escapeHtml(reservation.date)}</option>`).join("");
  };

  // RF-009, precondición "Ejecución iniciada": mientras no exista ninguna ejecución registrada,
  // "Registrar costo" permanece deshabilitado con su ayuda visible.
  const costToggle = document.querySelector("[data-cost-toggle]");
  const costPanel = document.querySelector("[data-cost-panel]");
  const costUnavailableNote = document.querySelector("[data-cost-unavailable]");
  const renderCostAvailability = () => {
    const hasExecutions = getOperatorRegisteredExecutions().length > 0;
    if (costToggle) costToggle.disabled = !hasExecutions || isOperatorQueryOnlyRole();
    if (costUnavailableNote) costUnavailableNote.hidden = hasExecutions;
    if (!hasExecutions && costPanel) costPanel.hidden = true;
  };

  renderUpcoming();
  renderDeadlines();
  renderExecutions();
  renderCostExecutionOptions();
  renderCostAvailability();

  const costForm = document.querySelector("[data-cost-form]");
  const costFeedback = document.querySelector("[data-cost-feedback]");
  costToggle?.addEventListener("click", () => {
    if (costToggle.disabled) return;
    renderCostExecutionOptions();
    if (costPanel) costPanel.hidden = false;
  });
  document.querySelector("[data-cost-cancel]")?.addEventListener("click", () => {
    if (costPanel) costPanel.hidden = true;
  });
  costForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (isOperatorQueryOnlyRole()) return;
    const executionCode = document.querySelector("[data-cost-execution]").value;
    const concept = document.querySelector("[data-cost-concept]").value.trim();
    const amount = Number(document.querySelector("[data-cost-amount]").value);
    if (!executionCode || !getOperatorReservationExecution(executionCode)) {
      if (costFeedback) { costFeedback.textContent = "Selecciona una ejecución real ya registrada para asociar el costo."; costFeedback.classList.remove("is-valid"); }
      return;
    }
    if (!concept || !amount || amount <= 0) {
      if (costFeedback) { costFeedback.textContent = "Completa el concepto y un valor mayor a $0 para registrar el costo."; costFeedback.classList.remove("is-valid"); }
      return;
    }
    const costs = getOperatorOperationCosts();
    costs.push({ id: `costo-${Date.now()}`, reservationCode: executionCode, concept, amount, registeredAt: getOperatorNow().toISOString(), registeredBy: getOperatorActorLabel() });
    setOperatorOperationCosts(costs);
    costForm.reset();
    if (costFeedback) { costFeedback.textContent = `Costo operacional registrado y asociado a la ejecución de la reserva #${executionCode}.`; costFeedback.classList.add("is-valid"); }
    if (costPanel) costPanel.hidden = true;
  });
}


// Origen de una solicitud de devolución (RF-015B): solo se habilita cuando la MISMA reserva ya
// tiene causal y valor a devolver determinados; nunca inventa ninguno.
function setupOperatorManageRefund() {
  if (document.body.dataset.screen !== "operator-manage-refund") return;
  const code = new URLSearchParams(window.location.search).get("reservation") || "";
  const reservation = getUnifiedOperatorReservation(code);
  const feedback = document.querySelector("[data-manage-refund-feedback]");
  const submitButton = document.querySelector("[data-manage-refund-submit]");
  const motiveInput = document.querySelector("[data-manage-refund-motive]");
  const noteInput = document.querySelector("[data-manage-refund-note]");
  document.querySelector("[data-manage-refund-form]")?.addEventListener("submit", (event) => { event.preventDefault(); submitButton?.click(); });
  const disableForm = () => {
    if (submitButton) submitButton.disabled = true;
    if (motiveInput) motiveInput.disabled = true;
    if (noteInput) noteInput.disabled = true;
  };

  document.querySelectorAll("[data-manage-refund-back]").forEach((link) => {
    link.href = withTheme(`admin-detalle-reserva.html?reservation=${encodeURIComponent(code)}`, getTheme());
  });

  const origin = getOperatorRefundOrigin(code);
  if (!reservation || !origin) {
    if (feedback) feedback.textContent = "Esta reserva no tiene una cancelación o modificación con causal y valor a devolver registrados.";
    disableForm();
    return;
  }
  if (isOperatorQueryOnlyRole()) {
    if (feedback) feedback.textContent = "Tu rol es de solo consulta: no puede registrar solicitudes de devolución.";
    disableForm();
    return;
  }

  const setText = (selector, value) => { const el = document.querySelector(selector); if (el) el.textContent = value; };
  setText("[data-manage-refund-code]", `#${code}`);
  setText("[data-manage-refund-customer]", reservation.customer);
  setText("[data-manage-refund-status]", reservation.status);
  setText("[data-manage-refund-type]", origin.type);
  setText("[data-manage-refund-reason]", origin.causal);
  setText("[data-manage-refund-paid]", reservation.paid);
  setText("[data-manage-refund-date]", formatOperatorTenantDateTime(origin.registeredAt));
  const valueField = document.querySelector("[data-manage-refund-value]");
  if (valueField) valueField.value = `${origin.potentialAmount}${origin.ruleLabel ? ` · ${origin.ruleLabel}` : ""}`;
  if (motiveInput) motiveInput.value = origin.causal;

  const existing = getOperatorRefundRequests().find((request) => request.reservationCode === code);
  if (existing) {
    if (feedback) feedback.textContent = "Ya existe una solicitud de devolución registrada para esta reserva. Consúltala en Solicitudes de devolución.";
    disableForm();
    return;
  }

  submitButton?.addEventListener("click", () => {
    const motive = motiveInput?.value.trim() || "";
    if (!motive) {
      feedback.textContent = "Registra el motivo de la solicitud de devolución.";
      feedback.classList.remove("is-valid");
      return;
    }
    const created = createOperatorRefundRequest(code, { motive, note: noteInput?.value.trim() || "" });
    if (!created.ok) {
      feedback.textContent = created.error;
      feedback.classList.remove("is-valid");
      return;
    }
    feedback.textContent = created.request.kind === "automatica"
      ? "Solicitud registrada: la causa no es atribuible al cliente, por lo que la devolución quedó determinada y autorizada automáticamente. Debe ejecutarse en máximo 5 días hábiles."
      : "Solicitud de devolución registrada. El Administrador del tenant tiene 24 horas corridas para decidir (devolver el 100 % o registrar saldo a favor); sin decisión, Multitour determina la devolución del 100 %, pendiente de ejecución en 5 días hábiles.";
    feedback.classList.add("is-valid");
    disableForm();
  });
}


const OPERATOR_SERVICE_STATUS_KEY = "multitour-service-status";

function getOperatorServiceStatusMap() {
  try { return JSON.parse(localStorage.getItem(OPERATOR_SERVICE_STATUS_KEY) || "{}"); } catch { return {}; }
}

function setOperatorServiceStatus(catalogId, recordKey, active) {
  const map = getOperatorServiceStatusMap();
  map[catalogId] = map[catalogId] || {};
  map[catalogId][recordKey] = active ? "active" : "inactive";
  localStorage.setItem(OPERATOR_SERVICE_STATUS_KEY, JSON.stringify(map));
}

function resolveOperatorServiceActive(catalogId, recordKey, defaultActive) {
  const stored = getOperatorServiceStatusMap()[catalogId]?.[recordKey];
  return stored ? stored === "active" : defaultActive;
}

const OPERATOR_SERVICE_FIELDS_KEY = "multitour-service-fields";

function getOperatorServiceFieldsMap() {
  try { return JSON.parse(localStorage.getItem(OPERATOR_SERVICE_FIELDS_KEY) || "{}"); } catch { return {}; }
}

function getOperatorServiceFields(catalogId, recordKey) {
  return getOperatorServiceFieldsMap()[catalogId]?.[recordKey] || null;
}

function setOperatorServiceFields(catalogId, recordKey, fields) {
  const map = getOperatorServiceFieldsMap();
  map[catalogId] = map[catalogId] || {};
  map[catalogId][recordKey] = fields;
  localStorage.setItem(OPERATOR_SERVICE_FIELDS_KEY, JSON.stringify(map));
}

// Espejo de los registros demo ya definidos en cada HTML de "Gestionar <catalogo>",
// usando como clave el mismo texto de la primera celda que ya identifica cada fila.
const OPERATOR_MONTH_ABBR = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

function parseOperatorDate(text) {
  const match = /^(\d{1,2})\s+([a-z]{3})\s+(\d{4})$/i.exec((text || "").trim());
  if (!match) return "";
  const monthIndex = OPERATOR_MONTH_ABBR.indexOf(match[2].toLowerCase());
  if (monthIndex === -1) return "";
  return `${match[3]}-${String(monthIndex + 1).padStart(2, "0")}-${match[1].padStart(2, "0")}`;
}

function formatOperatorDate(isoDate) {
  const [year, month, day] = (isoDate || "").split("-");
  const monthName = OPERATOR_MONTH_ABBR[Number(month) - 1];
  if (!year || !day || !monthName) return "";
  return `${day} ${monthName} ${year}`;
}

// Catálogo operativo base. En Fase 1 solo existen dos tipos de servicio gestionados por el
// tenant: tours (con salidas y cupos) y transporte. Hospedaje y alimentación NO son servicios
// reservables: son establecimientos asociados por convenio con solo datos de contacto (ver
// getOperatorAssociatedEstablishments), sin capacidad, tarifa ni política de apartamiento.
const OPERATOR_CATALOG_DEFAULTS = {
  "catalogo-catalog-panel": {
    cardIndex: 0,
    backHref: "admin-gestionar-catalogo.html",
    records: [
      { key: "Tour destino ejemplo - Montañas", active: true, typeLabel: "Actividad principal", fields: { name: "Tour destino ejemplo - Montañas", tariff: "$1.299.000", validity: "01 sep 2026 - 30 sep 2026", policy: "Cupo apartado con el primer pago" } },
      { key: "Aventura en cenotes ocultos", active: true, typeLabel: "Actividad principal", fields: { name: "Aventura en cenotes ocultos", tariff: "$520.000", validity: "01 sep 2026 - 30 sep 2026", policy: "Cupo apartado con el primer pago" } },
      { key: "Recorrido cultural e histórico", active: true, typeLabel: "Actividad principal", fields: { name: "Recorrido cultural e histórico", tariff: "$349.000", validity: "01 sep 2026 - 30 sep 2026", policy: "Cupo apartado con el primer pago" } },
      { key: "Rafting y acampada extrema", active: true, typeLabel: "Actividad principal", fields: { name: "Rafting y acampada extrema", tariff: "$799.000", validity: "01 sep 2026 - 30 sep 2026", policy: "Cupo apartado con el primer pago" } },
    ],
  },
  "transporte-catalog-panel": {
    cardIndex: 1,
    backHref: "admin-gestionar-transporte.html",
    records: [
      // El transporte lo presta el operador como parte del tour (RN-TRA-001): su capacidad
      // restringe el cupo de la salida y la tarifa es por persona (RN-TRA-002). Ambas son
      // parametrizables solo por el Administrador del tenant (Configurar transporte); el vehículo
      // base coincide con el que muestran las pantallas de salidas.
      { key: "Bus Andino 01", active: true, fields: { name: "Bus Andino 01", route: "Ruta Andina", capacity: "20", tariff: "Por configurar", cost: "Por configurar", policy: "Capacidad efectiva de la salida", validity: "Sin vencimiento" } },
    ],
  },
};

// Vinculo Tour -> Transporte (Nuevo servicio, "Incluye transporte"). RN-TRA-002: la
// tarifa por persona puede ser propia de CADA tour ("tariffOverride"), sin sobrescribir la
// tarifa generica del recurso de Transporte para otros tours que lo usen sin su propia
// tarifa. Mismo mecanismo/clave ya usado y aprobado en el Portal Angular.
const OPERATOR_TOUR_TRANSPORT_LINKS_KEY = "multitour-tour-transport-links";

function getOperatorTourTransportLinks() {
  try { return JSON.parse(localStorage.getItem(OPERATOR_TOUR_TRANSPORT_LINKS_KEY) || "{}"); } catch { return {}; }
}

function setOperatorTourTransportLink(tourKey, transportKey, tariffOverride) {
  const links = getOperatorTourTransportLinks();
  if (transportKey) {
    links[tourKey] = { transportKey, tariffOverride: tariffOverride > 0 ? tariffOverride : undefined };
  } else {
    delete links[tourKey];
  }
  localStorage.setItem(OPERATOR_TOUR_TRANSPORT_LINKS_KEY, JSON.stringify(links));
}

// Transportes realmente disponibles para asociar a un Tour: solo activos y vigentes,
// igual que Gestionar transporte. Nunca se hardcodea un transporte nuevo aqui; si no hay
// tarifa/capacidad parametrizada, se mantiene "Por configurar".
function getOperatorActiveTransportOptions() {
  const options = [];
  const defaultRecord = OPERATOR_CATALOG_DEFAULTS["transporte-catalog-panel"]?.records[0];
  if (defaultRecord && resolveOperatorServiceActive("transporte-catalog-panel", defaultRecord.key, defaultRecord.active)) {
    const fields = getOperatorServiceFields("transporte-catalog-panel", defaultRecord.key) || defaultRecord.fields;
    options.push({
      key: defaultRecord.key,
      name: fields.name || defaultRecord.key,
      route: (fields.route || "").trim() || "Por configurar",
      price: parseCOP(fields.tariff),
      capacity: parseCOP(fields.capacity) || null,
      cost: parseCOP(fields.cost),
    });
  }
  getOperatorCatalog().forEach((resource) => {
    if (resource.type !== "transport" || !resource.active) return;
    options.push({
      key: resource.id,
      name: resource.name,
      route: (resource.route || "").trim() || "Por configurar",
      price: resource.price,
      capacity: resource.capacity,
      cost: resource.cost || 0,
    });
  });
  return options;
}

function getOperatorTransportOptionByKey(key) {
  return getOperatorActiveTransportOptions().find((option) => option.key === key) || null;
}

// RN-TRA-002: si este Tour tiene tarifa propia (tariffOverride), se antepone a la tarifa
// generica del transporte, sin modificarla para otros tours que usen el mismo recurso.
function getOperatorTourTransport(tourKey) {
  const link = getOperatorTourTransportLinks()[tourKey];
  if (!link) return null;
  const option = getOperatorTransportOptionByKey(link.transportKey);
  if (!option) return null;
  return link.tariffOverride != null ? { ...option, price: link.tariffOverride } : option;
}

// PDR v1.7.1 (flujo de reserva del Cliente): catalogo REAL de Tours (activo + vigente).
// El PDR no modela una lista independiente de "salidas": la disponibilidad de fecha depende
// exclusivamente de la vigencia (start/end) ya parametrizada del servicio, nunca de fechas
// programadas aparte. El enriquecimiento (descuento, riesgo, medios de pago, condiciones)
// reutiliza EXACTAMENTE los mismos datos ya aprobados para estos 4 tours en el Portal
// (create-reservation.component.ts: KNOWN_TOUR_DETAILS), sin inventar una politica distinta
// entre Landing y Portal. No incluye itinerario, caracteristicas turisticas ni "inclusiones"
// de alimentacion: esos datos no estan realmente modelados por tour en el catalogo.
const KNOWN_TOUR_DETAILS = {
  "Tour destino ejemplo - Montañas": {
    discount: 0.2,
    risk: false,
    payments: ["Transferencia", "Efectivo", "Abono"],
    conditions: [
      "La modificación o cancelación depende de las condiciones vigentes del tour.",
      "La disponibilidad y los valores se validan antes de registrar la reserva.",
    ],
  },
  "Aventura en cenotes ocultos": {
    discount: 0,
    risk: false,
    payments: ["Transferencia", "Efectivo", "Abono"],
    conditions: [
      "La modificación o cancelación depende de las condiciones vigentes del tour.",
      "La disponibilidad y los valores se validan antes de registrar la reserva.",
    ],
  },
  "Rafting y acampada extrema": {
    discount: 0,
    risk: true,
    payments: ["Transferencia", "Abono"],
    conditions: [
      "La actividad requiere requisitos de riesgo para cada viajero.",
      "La modificación o cancelación depende de las condiciones vigentes del servicio.",
    ],
  },
  "Recorrido cultural e histórico": {
    discount: 0,
    risk: false,
    payments: ["Transferencia", "Efectivo"],
    conditions: [
      "La modificación o cancelación depende de las condiciones vigentes del servicio.",
      "Los descuentos se aplican según la configuración comercial vigente.",
    ],
  },
};
const GENERIC_TOUR_CONDITION = "La disponibilidad y los valores se validan antes de registrar la reserva.";
const DEFAULT_TOUR_PAYMENT_METHODS = ["Transferencia", "Efectivo", "Abono"];
const TOUR_CATALOG_ID = "catalogo-catalog-panel";

// Descuento general vigente de un tour (RF-005A/B): misma fuente que la pantalla Descuentos.
// Si el tour no tiene ninguna regla configurada, se conserva el descuento propio de su ficha.
function getOperatorTourDiscountRate(tourKey, fallback) {
  const rules = getOperatorDiscounts().filter((discount) => discount.service === tourKey);
  if (!rules.length) return fallback || 0;
  const today = getOperatorTodayDate();
  const live = rules.filter((discount) => discount.active && (!discount.start || discount.start <= today) && (!discount.end || discount.end >= today));
  return live.length ? Math.max(...live.map((discount) => Number(discount.percentage) || 0)) / 100 : 0;
}

function getOperatorActiveTourServices() {
  const result = {};

  OPERATOR_CATALOG_DEFAULTS[TOUR_CATALOG_ID].records.forEach((record) => {
    if (!resolveOperatorServiceActive(TOUR_CATALOG_ID, record.key, record.active)) return;
    const fields = getOperatorServiceFields(TOUR_CATALOG_ID, record.key) || record.fields;
    const [startText, endText] = (fields.validity || "").split(" - ");
    const start = parseOperatorDate(startText);
    if (!start) return;
    const details = KNOWN_TOUR_DETAILS[record.key];
    result[record.key] = {
      key: record.key,
      name: fields.name || record.key,
      price: parseCOP(fields.tariff),
      discount: getOperatorTourDiscountRate(record.key, details?.discount ?? 0),
      risk: details?.risk ?? false,
      capacity: parseCOP(fields.capacity) || null,
      restrictions: "",
      start,
      end: parseOperatorDate(endText) || start,
      payments: details?.payments ?? DEFAULT_TOUR_PAYMENT_METHODS,
      conditions: details?.conditions ?? [GENERIC_TOUR_CONDITION],
      associatedTransport: getOperatorTourTransport(record.key),
      image: "",
    };
  });

  getOperatorCatalog().forEach((resource) => {
    if (resource.type !== "tour" || !resource.active) return;
    result[resource.id] = {
      key: resource.id,
      name: resource.name,
      price: resource.price,
      discount: getOperatorTourDiscountRate(resource.id, 0),
      risk: false,
      capacity: resource.capacity,
      restrictions: resource.restrictions || "",
      start: resource.start,
      end: resource.end,
      payments: DEFAULT_TOUR_PAYMENT_METHODS,
      conditions: [resource.policy || GENERIC_TOUR_CONDITION],
      associatedTransport: getOperatorTourTransport(resource.id),
      image: resource.image || "",
    };
  });

  return result;
}

function getOperatorActiveTourService(key) {
  return getOperatorActiveTourServices()[key] || null;
}

// Datos bancarios para instrucciones de transferencia: no existe hoy una pantalla de
// configuracion de datos bancarios por operador, asi que se centraliza AQUI (una sola
// fuente para toda la pantalla de transferencia) en vez de dejarlos repetidos como texto
// fijo en el HTML. Mismo valor de referencia ya usado, ahora como dato configurable.
const TENANT_BANK_ACCOUNT = {
  bank: "Banco de Occidente",
  accountType: "Corriente",
  accountNumber: "1234-5678-9012-3456",
  holder: "Travesía Natural S.A.S.",
  taxId: "900.123.456-7",
};

// Actualiza los campos GLOBALES del recurso de Transporte (trayecto/capacidad/costo
// base): valen para cualquier Tour que lo use, igual que si se editara desde Configurar
// transporte (mismo mecanismo, reutilizado aqui para no duplicar logica). La tarifa por
// persona NO se toca aqui: es especifica por Tour (ver setOperatorTourTransportLink).
function updateOperatorTransportResourceConfig(transportKey, patch) {
  const defaultRecord = OPERATOR_CATALOG_DEFAULTS["transporte-catalog-panel"]?.records[0];
  if (defaultRecord && defaultRecord.key === transportKey) {
    const current = getOperatorServiceFields("transporte-catalog-panel", transportKey) || defaultRecord.fields;
    const updated = { ...current };
    if (patch.route !== undefined) updated.route = (patch.route || "").trim() || "Por configurar";
    if (patch.capacity !== undefined) updated.capacity = patch.capacity ? String(patch.capacity) : "Por configurar";
    if (patch.cost !== undefined) updated.cost = patch.cost > 0 ? formatCOP(patch.cost) : "Por configurar";
    setOperatorServiceFields("transporte-catalog-panel", transportKey, updated);
    return;
  }
  const catalog = getOperatorCatalog().map((resource) => {
    if (resource.id !== transportKey || resource.type !== "transport") return resource;
    return {
      ...resource,
      route: patch.route !== undefined ? ((patch.route || "").trim() || undefined) : resource.route,
      capacity: patch.capacity !== undefined ? patch.capacity : resource.capacity,
      cost: patch.cost !== undefined ? patch.cost : resource.cost,
    };
  });
  localStorage.setItem(OPERATOR_CATALOG_STORAGE_KEY, JSON.stringify(catalog));
}


function setupManagedTourCatalog() {
  const panel = document.querySelector("[data-managed-tour-catalog], [data-managed-catalog]");
  if (!panel) return;
  const catalogId = panel.id;
  const tbody = panel.querySelector("tbody");

  // BUG corregido: esta tabla solo mostraba los registros base hardcodeados en el HTML,
  // ignorando servicios del MISMO tipo creados despues en Nuevo servicio (ej. tours nuevos
  // que no aparecian aunque el contador de "Catálogos" ya los contara). Se agregan filas
  // reales adicionales clonando la estructura de columnas ya aprobada de este catalogo, para
  // que tabla y contador salgan siempre de la MISMA fuente.
  const typeEntry = tbody && Object.entries(OPERATOR_NEW_SERVICE_CATALOG_ID_BY_TYPE).find(([, id]) => id === catalogId);
  if (typeEntry) {
    const [type] = typeEntry;
    const templateRow = tbody.querySelector("tr");
    getOperatorCatalog().filter((resource) => resource.type === type).forEach((resource) => {
      const row = templateRow ? templateRow.cloneNode(true) : document.createElement("tr");
      row.dataset.recordKey = resource.id;
      const setCell = (attr, value) => { const cell = row.querySelector(`[${attr}]`); if (cell) cell.textContent = value; };
      setCell("data-service-name", resource.name);
      setCell("data-service-dish", resource.name);
      setCell("data-service-tariff", formatCOP(resource.price));
      setCell("data-service-validity", `${formatOperatorDate(resource.start)} - ${formatOperatorDate(resource.end)}`);
      setCell("data-service-route", (resource.route || "").trim() || "Por configurar");
      setCell("data-service-capacity", resource.capacity != null ? `${resource.capacity} viajero${resource.capacity === 1 ? "" : "s"}` : "Por configurar");
      setCell("data-service-cost", resource.cost > 0 ? formatCOP(resource.cost) : "Por configurar");
      setCell("data-service-policy", resource.policy);
      setCell("data-service-status", "Activo");
      const manageLink = row.querySelector("td:last-child a");
      if (manageLink) manageLink.setAttribute("href", `${(manageLink.getAttribute("href") || "").split("?")[0]}?record=${encodeURIComponent(resource.id)}`);
      const toggleButton = row.querySelector("[data-toggle-service]");
      if (toggleButton) toggleButton.dataset.toggleService = resource.active ? "deactivate" : "activate";
      tbody.appendChild(row);
    });
  }

  document.querySelectorAll("[data-toggle-service]").forEach((button) => {
    const row = button.closest("tr");
    const actionCell = row.querySelector("td:last-child");
    const manage = actionCell.querySelector("a");
    manage.className = "operator-row-manage";
    button.className = "operator-row-toggle";
    actionCell.textContent = "";
    actionCell.append(manage, button);
    // Los registros base identifican su clave por el texto visible de la primera columna
    // (ya aprobado); los dinamicos usan su id real via data-record-key (ver arriba), para no
    // depender del nombre visible (que no es unico) como clave de estado.
    const recordKey = row.dataset.recordKey || row.querySelector("td:first-child")?.textContent.trim() || "";
    const defaultRecord = catalogId ? OPERATOR_CATALOG_DEFAULTS[catalogId]?.records.find((r) => r.key === recordKey) : null;
    if (defaultRecord?.fields) {
      const fields = getOperatorServiceFields(catalogId, recordKey) || defaultRecord.fields;
      Object.entries(fields).forEach(([field, value]) => {
        const cell = row.querySelector(`[data-service-${field}]`);
        if (!cell) return;
        cell.textContent = field === "capacity" && value && value !== "Por configurar" ? `${value} viajero${value === "1" ? "" : "s"}` : value;
      });
    }
    const defaultActive = button.dataset.toggleService === "deactivate";
    const applyState = (active) => {
      button.dataset.toggleService = active ? "deactivate" : "activate";
      button.textContent = active ? "Inactivar" : "Reactivar";
      const status = row.querySelector("[data-service-status]");
      status.textContent = active ? "Activo" : "Inactivo";
      status.className = `operator-status ${active ? "is-confirmed" : "is-cancelled"}`;
      row.dataset.availableForNewReservations = String(active);
    };
    applyState(catalogId ? resolveOperatorServiceActive(catalogId, recordKey, defaultActive) : defaultActive);
    button.addEventListener("click", () => {
      const active = button.dataset.toggleService === "deactivate";
      const validity = row.querySelector("[data-service-validity]")?.textContent.trim();
      if (!active && (!validity || validity === "—")) return;
      const nextActive = !active;
      applyState(nextActive);
      if (catalogId) setOperatorServiceStatus(catalogId, recordKey, nextActive);
    });
  });
}

// Caja del tenant (RN-CAJ-001): BASE + INGRESOS - PAGOS OPERACIONALES - GASTOS -
// DEVOLUCIONES = TOTAL del día. Una única caja por día calendario según la zona horaria del
// tenant. La base de apertura representa exclusivamente efectivo físico: el efectivo esperado
// al cierre es la base inicial más las entradas en efectivo menos las salidas en efectivo; las
// transferencias se registran y concilian por separado y no modifican el efectivo esperado.
//
// Cada movimiento tiene tipo (Ingreso, Pago operacional, Gasto, Devolución), medio de pago
// (Efectivo o Transferencia), valor con signo, responsable y, cuando aplica, la reserva.
// Los ingresos por pagos validados y las devoluciones ejecutadas se agregan automáticamente.
const OPERATOR_CASH_DAY_KEY = "multitour-cash-day";
const OPERATOR_CASH_CLOSURES_KEY = "multitour-cash-closures";
const OPERATOR_CASH_LEDGER_KEY = "multitour-cash-ledger";
const OPERATOR_DEFAULT_TENANT_TIMEZONE = "America/Bogota";

// La jornada de caja, su cierre, historial y consolidación usan SIEMPRE la fecha y hora local
// del tenant, nunca UTC ni la zona de quien consulta. La zona horaria se lee de la
// configuración del tenant (campo timezone del registro del tenant en la plataforma) y, si no
// está configurada o no es válida, se usa America/Bogota.
function getOperatorTenantTimezone() {
  let candidate = "";
  try {
    candidate = String(getPlatformTenants().find((tenant) => tenant.id === OPERATOR_CURRENT_TENANT_ID)?.timezone || "");
    if (!candidate) candidate = String(localStorage.getItem("multitour-tenant-timezone") || "");
  } catch {
    candidate = "";
  }
  if (!candidate) return OPERATOR_DEFAULT_TENANT_TIMEZONE;
  try {
    new Intl.DateTimeFormat("es-CO", { timeZone: candidate });
    return candidate;
  } catch {
    return OPERATOR_DEFAULT_TENANT_TIMEZONE;
  }
}

function getOperatorTenantDateKey(date = getOperatorNow()) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: getOperatorTenantTimezone(), year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
}

function formatOperatorTenantDateTime(isoDate) {
  if (!isoDate) return "—";
  return new Date(isoDate).toLocaleString("es-CO", { timeZone: getOperatorTenantTimezone() });
}

function formatOperatorTenantTime(date = getOperatorNow()) {
  return new Date(date).toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit", timeZone: getOperatorTenantTimezone() });
}

function getOperatorCashTodayKey() {
  return getOperatorTenantDateKey();
}

function normalizeOperatorCashMovement(movement) {
  return { ...movement, amount: Number(movement.amount || 0), medium: movement.medium || "Efectivo" };
}

// Valor de arranque en frío (solo cuando nunca existió ninguna jornada): no se reinventa en
// cada jornada nueva, se hereda de la jornada anterior.
function getDefaultOperatorCashDay() {
  return {
    date: getOperatorCashTodayKey(),
    status: "abierta",
    base: 300000,
    origin: "operativa",
    operativeOpen: true,
    openedBy: "Fernanda Robayo (Administrador del tenant)",
    movements: [
      { time: "09:20", type: "Ingreso", concept: "Pago reserva #RES-1832", amount: 1290000, medium: "Transferencia", responsible: "Fernanda Robayo" },
      { time: "11:45", type: "Gasto", concept: "Compra operativa", amount: -250000, medium: "Efectivo", responsible: "Fernanda Robayo" },
    ],
  };
}

// Base parametrizada que se propone al abrir una nueva jornada: la última base registrada. Solo
// el Administrador del tenant puede modificarla (RN-CAJ-001).
function getOperatorCashProposedBase() {
  const stored = readOperatorStorage(OPERATOR_CASH_DAY_KEY, null);
  if (stored && Number.isFinite(Number(stored.base)) && stored.operativeOpen !== false) return Number(stored.base);
  const closures = getOperatorCashClosures();
  return closures.length ? Number(closures[closures.length - 1].base || 0) : 0;
}


// Libro de movimientos automáticos (pagos validados): se conserva aparte de la jornada para
// poder consolidarlos por fecha aunque la jornada ya esté cerrada.
function getOperatorCashLedger() {
  return readOperatorStorage(OPERATOR_CASH_LEDGER_KEY, []);
}

// Agrega un movimiento automático a la caja del día (por fecha local del tenant). Un
// movimiento en efectivo exige la caja del día con apertura operativa y abierta (si está cerrada
// hay que reabrirla con motivo); una transferencia validada o una devolución por transferencia
// después del cierre, dentro del mismo día, se registra como movimiento no efectivo posterior al
// cierre, sin reabrir la caja. Si todavía no existe la caja del día, un movimiento no efectivo
// la crea automáticamente (Abierta, sin base, origen "creación automática"), sin apertura física.
function addOperatorCashMovement({ type, concept, amount, medium = "Efectivo", reservationCode = "", responsible }) {
  // Operador inactivo: solo los movimientos estrictamente necesarios (devoluciones y la validación de
  // comprobantes presentados antes de la inactivación); sin ventas, gastos ni ingresos nuevos.
  if (isOperatorTenantInactive() && !/devoluci/i.test(String(type)) && !String(concept).startsWith("Comprobante aprobado")) {
    return { ok: false, error: "Operador inactivo: acceso restringido. En Caja solo se registran las devoluciones y los movimientos estrictamente necesarios derivados de las obligaciones pendientes." };
  }
  const normalizedMedium = medium === "Transferencia" ? "Transferencia" : "Efectivo";
  const day = getOperatorCashDay();
  if (normalizedMedium === "Efectivo") {
    if (day.status === "cerrada") {
      return { ok: false, error: "La caja de hoy está cerrada: un movimiento en efectivo exige reabrirla con motivo (permiso Gestionar caja)." };
    }
    if (!day.operativeOpen) {
      return { ok: false, error: "La caja de hoy no tiene apertura operativa: ábrela con la base del día (permiso Gestionar caja) antes de registrar efectivo." };
    }
  }
  const now = getOperatorNow();
  const signed = type === "Ingreso" ? Math.abs(amount) : -Math.abs(amount);
  const ledger = getOperatorCashLedger();
  ledger.push({
    id: `mov-${now.getTime()}-${ledger.length + 1}`,
    at: now.toISOString(),
    date: getOperatorTenantDateKey(now),
    time: formatOperatorTenantTime(now),
    type,
    concept,
    amount: signed,
    medium: normalizedMedium,
    reservationCode,
    responsible: responsible || getOperatorActorLabel(),
  });
  writeOperatorStorage(OPERATOR_CASH_LEDGER_KEY, ledger);
  return { ok: true };
}


// Totales de la jornada a partir de sus movimientos reales (nunca contadores independientes
// que puedan desincronizarse), discriminados por medio de pago.
function computeOperatorCashMovementTotals(day) {
  return day.movements.reduce(
    (totals, raw) => {
      const movement = normalizeOperatorCashMovement(raw);
      const absolute = Math.abs(movement.amount);
      if (movement.type === "Ingreso") totals.ingresos += absolute;
      if (movement.type === "Pago operacional") totals.pagosOperacionales += absolute;
      if (movement.type === "Gasto") totals.gastos += absolute;
      const bucket = movement.medium === "Transferencia" ? "Transferencia" : "Efectivo";
      if (movement.amount >= 0) totals[`entradas${bucket}`] += absolute; else totals[`salidas${bucket}`] += absolute;
      return totals;
    },
    { ingresos: 0, pagosOperacionales: 0, gastos: 0, entradasEfectivo: 0, salidasEfectivo: 0, entradasTransferencia: 0, salidasTransferencia: 0 },
  );
}

// La caja funciona por jornada: cada jornada tiene su propia base, movimientos y cierre. Estados de
// la caja de hoy: "sin-apertura" (todavía no existe), "abierta" y "cerrada". Una caja Abierta puede
// tener apertura operativa (base de efectivo) o haberse creado automáticamente por un movimiento
// no efectivo (origen "automatica", sin base). La base es independiente del total de cierre de la
// jornada anterior: solo el Administrador del tenant registra un nuevo valor. Una jornada cerrada
// que fue reabierta con motivo vuelve a ser la jornada abierta de ese día (sin crear otra caja).
function getOperatorCashDay() {
  const stored = readOperatorStorage(OPERATOR_CASH_DAY_KEY, null);
  const today = getOperatorCashTodayKey();

  // Fuente única de verdad: la jornada de HOY solo está cerrada si existe un cierre real para
  // la fecha local de hoy (ya normalizada por closedAt) que no fue reabierto.
  const todaysClosure = getOperatorCashClosures().find((closure) => closure.date === today && !closure.reopened);
  let day;
  if (todaysClosure) {
    // Las devoluciones se recalculan siempre en vivo (por fecha de ejecución).
    day = {
      date: today,
      status: "cerrada",
      base: todaysClosure.base,
      closedAt: todaysClosure.closedAt,
      origin: todaysClosure.origin || (todaysClosure.operativeOpen === false ? "automatica" : "operativa"),
      operativeOpen: todaysClosure.operativeOpen !== false,
      movements: todaysClosure.movements.filter((movement) => movement.type !== "Devolución").map(normalizeOperatorCashMovement),
    };
  } else if (!stored) {
    day = getDefaultOperatorCashDay();
  } else if (stored.date !== today || stored.status === "cerrada") {
    // Sin un cierre real para hoy y sin apertura: la caja de hoy todavía no existe. La caja
    // del día anterior sin cerrar queda con la marca Pendiente de cierre y no se arrastra.
    day = { date: today, status: "sin-apertura", base: 0, origin: "", operativeOpen: false, movements: [] };
  } else {
    day = { ...stored, operativeOpen: stored.operativeOpen !== false, origin: stored.origin || "operativa", movements: stored.movements.map(normalizeOperatorCashMovement) };
  }

  const ledgerToday = getOperatorCashLedger().filter((entry) => entry.date === today);
  // Creación automática: un movimiento no efectivo sin caja del día la crea Abierta y sin base.
  if (day.status === "sin-apertura" && ledgerToday.some((entry) => entry.medium !== "Efectivo")) {
    day = { ...day, status: "abierta", origin: "automatica", operativeOpen: false, base: 0 };
  }

  // Movimientos automáticos del día (pagos validados, devoluciones por transferencia) que aún no
  // formen parte de la jornada.
  const known = new Set(day.movements.map((movement) => movement.id).filter(Boolean));
  ledgerToday.filter((entry) => !known.has(entry.id)).forEach((entry) => {
    day.movements.push(normalizeOperatorCashMovement({ ...entry, afterClosure: day.status === "cerrada" && entry.at > (day.closedAt || "") }));
  });
  return day;
}


function setOperatorCashDay(day) {
  localStorage.setItem(OPERATOR_CASH_DAY_KEY, JSON.stringify(day));
}

// Un único cierre ordinario por tenant y fecha. La fecha del cierre se recalcula siempre desde
// su propio closedAt (instante real) convertido a la fecha local del tenant; si tras
// normalizar coinciden dos cierres, se conserva el ordinario original y se fusiona en él
// cualquier corrección registrada sobre el duplicado.
function getOperatorCashClosures() {
  const stored = readOperatorStorage(OPERATOR_CASH_CLOSURES_KEY, []);
  const byDate = new Map();
  let changed = false;
  stored.forEach((closure) => {
    const tenantDate = closure.closedAt ? getOperatorTenantDateKey(new Date(closure.closedAt)) : closure.date;
    if (tenantDate !== closure.date) changed = true;
    const normalized = tenantDate === closure.date ? closure : { ...closure, date: tenantDate };
    const existing = byDate.get(tenantDate);
    if (!existing) {
      byDate.set(tenantDate, { ...normalized, corrections: [...(normalized.corrections || [])] });
      return;
    }
    changed = true;
    existing.corrections = [...(existing.corrections || []), ...(normalized.corrections || [])];
  });
  const deduped = Array.from(byDate.values());
  if (changed) setOperatorCashClosures(deduped);
  return deduped;
}

function setOperatorCashClosures(list) {
  localStorage.setItem(OPERATOR_CASH_CLOSURES_KEY, JSON.stringify(list));
}

// Reabre la caja del día con motivo obligatorio y trazabilidad completa (usuario, fecha y
// hora). No genera una segunda caja para la misma fecha: el cierre original se conserva en su
// histórico y se actualiza cuando la caja vuelve a cerrarse.
function reopenOperatorCashDay(reason) {
  if (!operatorHasPermission(OPERATOR_PERMISSION_MANAGE_CASH)) return { ok: false, error: "Tu usuario no tiene el permiso Gestionar caja." };
  const justification = String(reason || "").trim();
  if (!justification) return { ok: false, error: "Registra el motivo obligatorio de la reapertura." };
  const today = getOperatorCashTodayKey();
  const closures = getOperatorCashClosures();
  const closure = closures.find((item) => item.date === today && !item.reopened);
  if (!closure) return { ok: false, error: "La caja de hoy no está cerrada." };
  closure.reopened = true;
  closure.reopenings = [...(closure.reopenings || []), { reason: justification, by: getOperatorActorLabel(), at: getOperatorNow().toISOString() }];
  setOperatorCashClosures(closures);
  setOperatorCashDay({
    date: today,
    status: "abierta",
    base: closure.base,
    origin: closure.origin || "operativa",
    operativeOpen: closure.operativeOpen !== false,
    movements: closure.movements.filter((movement) => movement.type !== "Devolución"),
  });
  return { ok: true };
}

// Apertura operativa de la caja del día (Administrador del tenant o usuario con el permiso
// Gestionar caja). La base representa solo efectivo físico: el Administrador del tenant puede
// registrar un valor nuevo; los demás usuarios abren con la base parametrizada. Si la caja ya se
// había creado automáticamente por un movimiento no efectivo, esa misma caja pasa por la apertura.
function openOperatorCashDay(baseValue) {
  if (!operatorHasPermission(OPERATOR_PERMISSION_MANAGE_CASH)) return { ok: false, error: "Tu usuario no tiene el permiso Gestionar caja." };
  const day = getOperatorCashDay();
  if (day.status === "cerrada") return { ok: false, error: "La caja de hoy está cerrada: reábrela con motivo." };
  if (day.operativeOpen) return { ok: false, error: "La caja de hoy ya tiene apertura operativa." };
  const proposed = getOperatorCashProposedBase();
  let base = proposed;
  if (isOperatorAdmin() && baseValue !== undefined && baseValue !== "") {
    base = Number(baseValue);
    if (Number.isNaN(base) || base < 0) return { ok: false, error: "Registra una base diaria válida." };
  }
  const pendingPrevious = isOperatorCashPendingClosure() ? getOperatorPendingCashDay() : null;
  if (pendingPrevious && pendingPrevious.date !== day.date && !getOperatorPendingCashDayList().some((item) => item.date === pendingPrevious.date)) {
    writeOperatorStorage(OPERATOR_CASH_PENDING_KEY, [...getOperatorPendingCashDayList(), pendingPrevious]);
  }
  setOperatorCashDay({
    date: day.date,
    status: "abierta",
    base,
    origin: day.origin === "automatica" ? "automatica" : "operativa",
    operativeOpen: true,
    openedAt: getOperatorNow().toISOString(),
    openedBy: getOperatorActorLabel(),
    movements: day.movements.filter((movement) => !movement.id || !String(movement.id).startsWith("mov-")),
  });
  return { ok: true, base };
}

// Cierre formal de la caja con apertura operativa (permiso Gestionar caja): conserva el cierre y
// el histórico de movimientos; discrimina entradas y salidas por medio de pago y calcula el
// efectivo esperado. No exige que quien cierra sea quien abrió.
function closeOperatorCashDay(day, { lateClose = false } = {}) {
  if (!operatorHasPermission(OPERATOR_PERMISSION_MANAGE_CASH)) return { ok: false, error: "Tu usuario no tiene el permiso Gestionar caja." };
  if (day.status === "cerrada") return { ok: false, error: "La caja ya está cerrada." };
  if (!day.operativeOpen) return { ok: false, error: "Una caja creada automáticamente sin apertura operativa se cierra sola al finalizar el día." };
  const dayDate = day.date || getOperatorCashTodayKey();
  const closures = getOperatorCashClosures();
  const existing = closures.find((closure) => closure.date === dayDate);
  // Un único cierre ordinario por tenant y fecha. Si el cierre existe y no fue reabierto, no se
  // crea otro duplicado: cualquier ajuste posterior se registra como corrección en el historial.
  if (existing && !existing.reopened) {
    return { ok: false, error: "Ya existe un cierre registrado para esta fecha. Usa Historial de caja para registrar una corrección.", duplicate: true };
  }
  const totals = computeOperatorCashTotals(day);
  const closure = {
    id: existing?.id || `cierre-${Date.now()}`,
    date: dayDate,
    base: day.base,
    ingresos: totals.ingresos,
    pagosOperacionales: totals.pagosOperacionales,
    gastos: totals.gastos,
    devoluciones: totals.devoluciones,
    total: totals.total,
    entradasEfectivo: totals.entradasEfectivo,
    salidasEfectivo: totals.salidasEfectivo,
    entradasTransferencia: totals.entradasTransferencia,
    salidasTransferencia: totals.salidasTransferencia,
    efectivoEsperado: totals.efectivoEsperado,
    origin: day.origin || "operativa",
    operativeOpen: true,
    openedBy: day.openedBy || "",
    // Las devoluciones no se copian: se leen siempre en vivo por fecha de ejecución.
    movements: day.movements.map(normalizeOperatorCashMovement),
    // El cierre de una caja Pendiente de cierre conserva su fecha de jornada: la hora de cierre
    // contable es el final de ese día y la hora real del cierre formal queda aparte.
    closedAt: lateClose ? new Date(`${dayDate}T23:59:59${OPERATOR_TENANT_UTC_OFFSET}`).toISOString() : getOperatorNow().toISOString(),
    formalClosedAt: getOperatorNow().toISOString(),
    lateClose,
    closedBy: getOperatorActorLabel(),
    corrections: existing?.corrections || [],
    reopenings: existing?.reopenings || [],
  };
  if (existing) closures.splice(closures.indexOf(existing), 1, closure); else closures.push(closure);
  setOperatorCashClosures(closures);
  const storedNow = readOperatorStorage(OPERATOR_CASH_DAY_KEY, null);
  if (!storedNow || storedNow.date === dayDate) setOperatorCashDay({ ...day, status: "cerrada" });
  logOperatorTimeEvent(`cash-closed:${dayDate}:${closure.formalClosedAt}`, { at: closure.formalClosedAt, rule: "GAP-012", action: lateClose ? "Cierre formal de caja pendiente" : "Cierre formal de caja", detail: `Caja del ${dayDate} cerrada por ${closure.closedBy}. Efectivo esperado: ${formatCOP(closure.efectivoEsperado)}.`, recordAffected: `Caja del ${dayDate}`, audience: "cash" });
  return { ok: true, closure, totals };
}

// GAP-012: la caja con apertura operativa que no se cerró al finalizar su día calendario queda
// Pendiente de cierre. Se reconstruye su jornada (movimientos guardados + movimientos del libro
// de esa fecha) para cerrarla formalmente.
function getOperatorPendingCashDay() {
  if (!isOperatorCashPendingClosure()) return null;
  const archived = getOperatorPendingCashDayList()[0];
  if (archived) return { ...archived, operativeOpen: archived.operativeOpen !== false, movements: (archived.movements || []).map(normalizeOperatorCashMovement) };
  const stored = readOperatorStorage(OPERATOR_CASH_DAY_KEY, null);
  const known = new Set((stored.movements || []).map((movement) => movement.id).filter(Boolean));
  const movements = (stored.movements || []).map(normalizeOperatorCashMovement);
  getOperatorCashLedger().filter((entry) => entry.date === stored.date && !known.has(entry.id)).forEach((entry) => movements.push(normalizeOperatorCashMovement(entry)));
  return { ...stored, operativeOpen: stored.operativeOpen !== false, movements };
}

// AB-02: las cajas creadas automáticamente que nunca tuvieron apertura operativa ni efectivo se
// cierran solas al terminar su día calendario (cierre automático auditado). Se derivan del libro
// de movimientos no efectivos de las fechas anteriores.
function getOperatorAutomaticCashClosures() {
  const today = getOperatorCashTodayKey();
  const closedDates = new Set(getOperatorCashClosures().map((closure) => closure.date));
  const stored = readOperatorStorage(OPERATOR_CASH_DAY_KEY, null);
  const byDate = new Map();
  getOperatorCashLedger().forEach((entry) => {
    if (!entry.date || entry.date >= today || closedDates.has(entry.date) || (stored?.date === entry.date && stored.operativeOpen !== false) || getOperatorPendingCashDayList().some((day) => day.date === entry.date)) return;
    if (!byDate.has(entry.date)) byDate.set(entry.date, []);
    byDate.get(entry.date).push(normalizeOperatorCashMovement(entry));
  });
  return Array.from(byDate.entries()).map(([date, movements]) => {
    const totals = computeOperatorCashMovementTotals({ movements });
    const refunds = getOperatorExecutedRefundMovements(date);
    const refundTotal = refunds.reduce((sum, item) => sum + Math.abs(item.signedAmount), 0);
    return {
      id: `auto-${date}`,
      date,
      base: 0,
      ingresos: totals.ingresos,
      pagosOperacionales: totals.pagosOperacionales,
      gastos: totals.gastos,
      devoluciones: refundTotal,
      total: totals.ingresos - totals.pagosOperacionales - totals.gastos - refundTotal,
      efectivoEsperado: 0,
      origin: "automatica",
      operativeOpen: false,
      automatic: true,
      movements,
      closedAt: new Date(`${date}T23:59:59${OPERATOR_TENANT_UTC_OFFSET}`).toISOString(),
      closedBy: "Cierre automático (Multitour)",
      corrections: [],
      reopenings: [],
    };
  });
}


// Una caja con apertura operativa que no se cerró formalmente al terminar su día calendario
// queda con la marca Pendiente de cierre (no es un estado): no acepta movimientos y alerta a
// los Administradores y a los usuarios con el permiso Gestionar caja (GAP-012).
function isOperatorCashPendingClosure() {
  const stored = readOperatorStorage(OPERATOR_CASH_DAY_KEY, null);
  if (getOperatorPendingCashDayList().length) return true;
  if (!stored || stored.status === "cerrada" || stored.operativeOpen === false || stored.date >= getOperatorCashTodayKey()) return false;
  return !getOperatorCashClosures().some((closure) => closure.date === stored.date && !closure.reopened);
}

// Cajas anteriores que quedaron Pendientes de cierre cuando se abrió la caja de un día posterior:
// se conservan aparte hasta su cierre formal (la caja del día siguiente opera de forma independiente).
const OPERATOR_CASH_PENDING_KEY = "multitour-cash-pending-days";

function getOperatorPendingCashDayList() {
  const closures = readOperatorStorage(OPERATOR_CASH_CLOSURES_KEY, []);
  return readOperatorStorage(OPERATOR_CASH_PENDING_KEY, []).filter((day) => !closures.some((closure) => closure.date === day.date && !closure.reopened));
}

function formatSignedCOP(value) {
  return value < 0 ? `-${formatCOP(Math.abs(value))}` : formatCOP(value);
}

// Solo se suman devoluciones EFECTIVAMENTE ejecutadas (RF-015B, RN-RES-008), con su monto
// real, en la fecha local del tenant en que se ejecutaron. Si se indica una fecha, solo se
// devuelven las de esa fecha: cada movimiento se contabiliza una sola vez.
function getOperatorExecutedRefundMovements(dateKey) {
  return getOperatorRefundRequests()
    .filter((request) => request.status === "Ejecutada")
    .map((request) => {
      const amount = Number(request.executedAmount ?? request.amountValue ?? parseCOP(request.amount));
      return {
        id: `refund-${request.id}`,
        date: request.executedAt ? getOperatorTenantDateKey(new Date(request.executedAt)) : "",
        time: request.executedAt ? formatOperatorTenantTime(new Date(request.executedAt)) : "--:--",
        type: "Devolución",
        concept: `Devolución reserva #${request.reservationCode}`,
        amount: -Math.abs(amount),
        signedAmount: -Math.abs(amount),
        displayAmount: formatSignedCOP(-Math.abs(amount)),
        medium: request.exitMethod === "Efectivo" ? "Efectivo" : "Transferencia",
        reservationCode: request.reservationCode,
        responsible: request.executedBy || "Sin responsable asignado",
      };
    })
    .filter((movement) => !dateKey || movement.date === dateKey);
}

function computeOperatorCashTotals(day) {
  const movementTotals = computeOperatorCashMovementTotals(day);
  const refundMovements = getOperatorExecutedRefundMovements(day.date);
  const devoluciones = refundMovements.reduce((sum, item) => sum + Math.abs(item.signedAmount), 0);
  const refundsCash = refundMovements.filter((item) => item.medium === "Efectivo").reduce((sum, item) => sum + Math.abs(item.signedAmount), 0);
  const refundsTransfer = devoluciones - refundsCash;
  const { ingresos, pagosOperacionales, gastos } = movementTotals;
  const total = day.base + ingresos - pagosOperacionales - gastos - devoluciones;
  const salidasEfectivo = movementTotals.salidasEfectivo + refundsCash;
  const salidasTransferencia = movementTotals.salidasTransferencia + refundsTransfer;
  return {
    ingresos,
    pagosOperacionales,
    gastos,
    devoluciones,
    total,
    refundMovements,
    entradasEfectivo: movementTotals.entradasEfectivo,
    salidasEfectivo,
    entradasTransferencia: movementTotals.entradasTransferencia,
    salidasTransferencia,
    // Efectivo esperado = base inicial + entradas en efectivo - salidas en efectivo. Las
    // transferencias se concilian por separado y no lo modifican.
    efectivoEsperado: day.base + movementTotals.entradasEfectivo - salidasEfectivo,
    transferenciasNetas: movementTotals.entradasTransferencia - salidasTransferencia,
  };
}

function setupOperatorCash() {
  if (document.body.dataset.screen !== "operator-cash") return;
  const canManageCash = operatorHasPermission(OPERATOR_PERMISSION_MANAGE_CASH);
  const canRegister = !isOperatorQueryOnlyRole();
  const $ = (selector) => document.querySelector(selector);
  const setText = (selector, value) => { const el = $(selector); if (el) el.textContent = value; };
  const say = (selector, message, ok) => { const el = $(selector); if (!el) return; el.hidden = false; el.textContent = message; el.classList.toggle("is-valid", Boolean(ok)); };

  const render = () => {
    const day = getOperatorCashDay();
    const totals = computeOperatorCashTotals(day);
    const { ingresos, pagosOperacionales, gastos, devoluciones, total, refundMovements } = totals;
    const closed = day.status === "cerrada";
    const noBox = day.status === "sin-apertura";
    const automaticOnly = day.status === "abierta" && !day.operativeOpen;
    const pendingDay = getOperatorPendingCashDay();

    setText("[data-cash-day-status]", closed ? "Jornada cerrada" : noBox ? "Sin apertura" : automaticOnly ? "Abierta · creación automática" : "Jornada abierta");
    // El efectivo esperado (base + entradas en efectivo - salidas en efectivo) no se mezcla con las
    // transferencias: el total de todos los medios se informa aparte.
    setText("[data-cash-total-headline]", noBox
      ? "La caja de hoy todavía no existe."
      : automaticOnly
        ? "Efectivo esperado al cierre: no aplica (caja sin efectivo)."
        : `Efectivo esperado al cierre: ${formatCOP(totals.efectivoEsperado)}.`);
    setText("[data-cash-consolidated]", noBox
      ? ""
      : `Total consolidado de la jornada (todos los medios): ${formatCOP(total)}${day.base ? ` · incluye la base de ${formatCOP(day.base)}` : ""}.`);
    setText("[data-cash-origin-note]", noBox
      ? "No hay apertura operativa ni movimientos no efectivos hoy. Ábrela con la base del día para registrar efectivo; un movimiento no efectivo (transferencia validada) crea la caja automáticamente, sin base."
      : automaticOnly
        ? "Caja creada automáticamente por un movimiento no efectivo: no tiene base ni apertura física y no modifica el efectivo esperado. Para registrar efectivo debe pasar por la apertura operativa; si no la tiene, se cierra sola al finalizar el día con cierre automático auditado."
        : closed
          ? "La caja está cerrada. Un movimiento en efectivo exige reabrirla con motivo; las transferencias validadas hoy se registran como movimientos no efectivos posteriores al cierre, sin reabrirla."
          : `Apertura operativa${day.openedBy ? ` por ${day.openedBy}` : ""}. La base representa solo efectivo físico; el efectivo esperado al cierre es la base más las entradas en efectivo menos las salidas en efectivo.`);
    setText("[data-cash-base]", formatCOP(day.base));
    setText("[data-cash-ingresos]", formatCOP(ingresos));
    setText("[data-cash-pagos-operacionales]", formatCOP(pagosOperacionales));
    setText("[data-cash-gastos]", formatCOP(gastos));
    setText("[data-cash-devoluciones]", formatCOP(devoluciones));
    setText("[data-cash-expected]", automaticOnly || noBox ? "No aplica" : formatCOP(totals.efectivoEsperado));
    setText("[data-cash-transfers]", formatSignedCOP(totals.transferenciasNetas));

    const tbody = $("[data-cash-movements]");
    if (tbody) {
      const rows = [
        ...day.movements.map((movement) => ({ ...movement, displayAmount: formatSignedCOP(movement.amount) })),
        ...refundMovements,
      ];
      tbody.innerHTML = rows.length
        ? rows.map((movement) => `<tr><td>${escapeHtml(movement.time)}</td><td>${escapeHtml(movement.type)}</td><td>${escapeHtml(movement.concept)}</td><td>${escapeHtml(movement.medium || "Efectivo")}${movement.afterClosure ? "<br><small>Posterior al cierre</small>" : ""}</td><td>${escapeHtml(movement.displayAmount)}</td><td>${escapeHtml(movement.responsible)}</td></tr>`).join("")
        : '<tr><td colspan="6">Sin movimientos registrados hoy.</td></tr>';
    }

    // Apertura operativa (Administrador del tenant o permiso Gestionar caja).
    const openPanel = $("[data-cash-open-panel]");
    if (openPanel) openPanel.hidden = !(noBox || automaticOnly);
    const openBase = $("[data-cash-open-base]");
    if (openBase) {
      openBase.value = getOperatorCashProposedBase();
      openBase.readOnly = !isOperatorAdmin();
    }
    const reopenPanel = $("[data-cash-reopen-panel]");
    if (reopenPanel) reopenPanel.hidden = !closed;
    const pendingPanel = $("[data-cash-pending-panel]");
    if (pendingPanel) {
      pendingPanel.hidden = !pendingDay || !(isOperatorAdmin() || canManageCash);
      setText("[data-cash-pending-text]", pendingDay ? `La caja del ${pendingDay.date} tuvo apertura operativa y no se cerró al finalizar su día: quedó con la marca Pendiente de cierre. No acepta movimientos nuevos ni tiene efectivo final calculado por el sistema; la caja de hoy opera de forma independiente.` : "");
    }

    // Movimientos manuales: el efectivo exige caja abierta con apertura operativa; las transferencias
    // se aceptan siempre (crean la caja del día o se registran posteriores al cierre).
    const mediumSelect = $("[data-cash-movement-medium]");
    const cashAllowed = !closed && !noBox && !automaticOnly;
    if (mediumSelect) {
      [...mediumSelect.options].forEach((option) => { if (option.value === "Efectivo") option.disabled = !cashAllowed; });
      if (!cashAllowed) mediumSelect.value = "Transferencia";
    }
    $("[data-cash-movement-form]")?.querySelectorAll("input, select, button").forEach((el) => { el.disabled = !canRegister; });
    const adjustToggle = $("[data-cash-adjust-toggle]");
    if (adjustToggle) adjustToggle.disabled = closed || noBox || automaticOnly || !isOperatorAdmin();
    const closeButton = $("[data-cash-close]");
    if (closeButton) {
      closeButton.disabled = closed || noBox || automaticOnly || !canManageCash;
      closeButton.title = canManageCash ? "" : "Requiere el permiso Gestionar caja.";
    }
    if (!cashAllowed) { const adjustPanel = $("[data-cash-adjust-panel]"); if (adjustPanel) adjustPanel.hidden = true; }
  };
  render();

  // Apertura operativa.
  $("[data-cash-open]")?.addEventListener("click", () => {
    const result = openOperatorCashDay($("[data-cash-open-base]")?.value);
    if (!result.ok) { say("[data-cash-open-feedback]", result.error, false); return; }
    say("[data-cash-feedback]", `Caja abierta con una base de ${formatCOP(result.base)}. Quedó registrada la apertura con su responsable, fecha y hora.`, true);
    render();
  });

  // Reapertura con motivo obligatorio y trazabilidad (no crea una segunda caja).
  $("[data-cash-reopen]")?.addEventListener("click", () => {
    const result = reopenOperatorCashDay($("[data-cash-reopen-reason]")?.value);
    if (!result.ok) { say("[data-cash-reopen-feedback]", result.error, false); return; }
    const reason = $("[data-cash-reopen-reason]"); if (reason) reason.value = "";
    say("[data-cash-feedback]", "Caja reabierta con motivo. El cierre original se conserva en el historial y la reapertura queda auditada.", true);
    render();
  });

  // Cierre de una caja Pendiente de cierre.
  $("[data-cash-pending-close]")?.addEventListener("click", () => {
    const pendingDay = getOperatorPendingCashDay();
    if (!pendingDay) return;
    const result = closeOperatorCashDay(pendingDay, { lateClose: true });
    say("[data-cash-pending-feedback]", result.ok ? `Caja del ${pendingDay.date} cerrada formalmente. Efectivo esperado: ${formatCOP(result.totals.efectivoEsperado)}.` : result.error, result.ok);
    render();
  });

  // Solo el Administrador del tenant puede modificar la base diaria (RN-CAJ-001).
  const adjustToggle = $("[data-cash-adjust-toggle]");
  const adjustPanel = $("[data-cash-adjust-panel]");
  const adjustForm = $("[data-cash-adjust-form]");
  const adjustInput = $("[data-cash-adjust-input]");
  const adjustFeedback = $("[data-cash-adjust-feedback]");
  adjustToggle?.addEventListener("click", () => {
    if (adjustToggle.disabled || !isOperatorAdmin()) return;
    const day = getOperatorCashDay();
    if (adjustInput) adjustInput.value = day.base;
    if (adjustPanel) adjustPanel.hidden = false;
  });
  $("[data-cash-adjust-cancel]")?.addEventListener("click", () => {
    if (adjustPanel) adjustPanel.hidden = true;
  });
  adjustForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!isOperatorAdmin()) return;
    const rawValue = adjustInput.value;
    const value = Number(rawValue);
    if (rawValue === "" || Number.isNaN(value) || value < 0) {
      if (adjustFeedback) { adjustFeedback.textContent = "Registra una base diaria válida."; adjustFeedback.classList.remove("is-valid"); }
      return;
    }
    const day = getOperatorCashDay();
    if (day.status !== "abierta" || !day.operativeOpen) return;
    day.base = value;
    setOperatorCashDay(day);
    if (adjustFeedback) { adjustFeedback.textContent = "Base diaria actualizada correctamente."; adjustFeedback.classList.add("is-valid"); }
    if (adjustPanel) adjustPanel.hidden = true;
    render();
  });

  // Todo movimiento distingue Ingreso, Pago operacional o Gasto y su medio de pago. Las
  // devoluciones no se registran manualmente aquí: se agregan solo cuando quedan
  // efectivamente ejecutadas desde Solicitudes de devolución.
  const movementForm = $("[data-cash-movement-form]");
  movementForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!canRegister) return;
    const type = $("[data-cash-movement-type]").value;
    const concept = $("[data-cash-movement-concept]").value.trim();
    const amount = Number($("[data-cash-movement-amount]").value);
    const medium = $("[data-cash-movement-medium]")?.value === "Transferencia" ? "Transferencia" : "Efectivo";
    if (!type || !concept || !amount || amount <= 0) {
      say("[data-cash-feedback]", "Completa tipo, concepto, medio de pago y un valor mayor a $0 para registrar el movimiento.", false);
      return;
    }
    const day = getOperatorCashDay();
    if (medium === "Transferencia") {
      const result = addOperatorCashMovement({ type, concept, amount, medium });
      if (!result.ok) { say("[data-cash-feedback]", result.error, false); return; }
      say("[data-cash-feedback]", day.status === "cerrada" ? "Movimiento no efectivo registrado como posterior al cierre, sin reabrir la caja." : day.status === "sin-apertura" ? "Movimiento no efectivo registrado: la caja de hoy se creó automáticamente (Abierta, sin base)." : "Movimiento registrado correctamente.", true);
    } else {
      if (day.status !== "abierta" || !day.operativeOpen) {
        say("[data-cash-feedback]", day.status === "cerrada" ? "La caja está cerrada: reábrela con motivo para registrar efectivo." : "Abre la caja de hoy (apertura operativa) antes de registrar efectivo.", false);
        return;
      }
      const signedAmount = type === "Ingreso" ? amount : -amount;
      day.movements.push({ id: `manual-${Date.now()}`, time: formatOperatorTenantTime(), type, concept, amount: signedAmount, medium, responsible: getOperatorActorLabel() });
      setOperatorCashDay(day);
      say("[data-cash-feedback]", "Movimiento registrado correctamente.", true);
    }
    movementForm.reset();
    render();
  });

  // Cerrar caja (permiso Gestionar caja) conserva el cierre y el histórico de movimientos; nunca
  // borra información. Calcula el efectivo esperado y discrimina por medio de pago.
  $("[data-cash-close]")?.addEventListener("click", () => {
    const result = closeOperatorCashDay(getOperatorCashDay());
    if (!result.ok) { say("[data-cash-feedback]", result.error, false); render(); return; }
    say("[data-cash-feedback]", `Caja cerrada correctamente. Efectivo esperado: ${formatCOP(result.totals.efectivoEsperado)}. El cierre y el histórico quedaron conservados.`, true);
    render();
  });
}


// Toda corrección posterior al cierre queda restringida al Administrador del tenant, exige
// justificación obligatoria y trazabilidad, y NUNCA sobrescribe los valores originales del
// cierre (se agrega como historial adicional).
function setupOperatorCashHistory() {
  if (document.body.dataset.screen !== "operator-cash-history") return;
  const list = document.querySelector("[data-cash-history-list]");
  const emptyNote = document.querySelector("[data-cash-history-empty]");
  if (!list) return;

  const render = () => {
    const closures = [...getOperatorCashClosures(), ...getOperatorAutomaticCashClosures()].sort((a, b) => String(b.date).localeCompare(String(a.date)));
    if (emptyNote) emptyNote.hidden = closures.length > 0;
    list.innerHTML = closures
      .map((closure) => {
        const corrections = closure.corrections || [];
        const correctionsHtml = corrections.length
          ? `<div class="operator-table-wrap"><table class="operator-table"><thead><tr><th>Fecha</th><th>Responsable</th><th>Justificación</th></tr></thead><tbody>${corrections
              .map((c) => `<tr><td>${escapeHtml(formatOperatorTenantDateTime(c.appliedAt))}</td><td>${escapeHtml(c.appliedBy)}</td><td>${escapeHtml(c.justification)}</td></tr>`)
              .join("")}</tbody></table></div>`
          : `<p class="operator-copy">Sin correcciones registradas para este cierre.</p>`;
        const reopenings = (closure.reopenings || []).map((r) => `<tr><td>${escapeHtml(formatOperatorTenantDateTime(r.at))}</td><td>${escapeHtml(r.by)}</td><td>${escapeHtml(r.reason)}</td></tr>`).join("");
        const reopeningsHtml = reopenings
          ? `<p class="operator-eyebrow">Reaperturas</p><div class="operator-table-wrap"><table class="operator-table"><thead><tr><th>Fecha</th><th>Responsable</th><th>Motivo</th></tr></thead><tbody>${reopenings}</tbody></table></div>`
          : "";
        const expectedRow = closure.efectivoEsperado != null && closure.operativeOpen !== false
          ? `<div><span>Efectivo esperado al cierre</span><strong>${formatCOP(closure.efectivoEsperado)}</strong></div>`
          : "";
        const originRow = `<div><span>Origen de la caja</span><strong>${closure.automatic ? "Creación automática, sin apertura operativa ni efectivo (cierre automático)" : closure.origin === "automatica" ? "Creación automática con apertura operativa posterior" : "Apertura operativa"}</strong></div>${closure.lateClose ? `<div><span>Cierre formal de una caja Pendiente de cierre</span><strong>${escapeHtml(formatOperatorTenantDateTime(closure.formalClosedAt))}</strong></div>` : ""}`;
        const transferRows = (closure.movements || []).filter((movement) => movement.medium === "Transferencia");
        const movementsHtml = (closure.movements || []).length
          ? `<p class="operator-eyebrow">Movimientos de la jornada (cada uno se contabiliza una sola vez)</p><div class="operator-table-wrap"><table class="operator-table"><thead><tr><th>Hora</th><th>Tipo</th><th>Concepto</th><th>Medio</th><th>Valor</th></tr></thead><tbody>${closure.movements.map((movement) => `<tr><td>${escapeHtml(movement.time || "")}</td><td>${escapeHtml(movement.type)}</td><td>${escapeHtml(movement.concept)}</td><td>${escapeHtml(movement.medium || "Efectivo")}${movement.afterClosure ? " · posterior al cierre" : ""}</td><td>${escapeHtml(formatSignedCOP(movement.amount))}</td></tr>`).join("")}</tbody></table></div>${transferRows.length ? `<p class="operator-copy">${transferRows.length} movimiento(s) no efectivo(s): se concilian aparte y no modifican el efectivo esperado.</p>` : ""}`
          : "";
        return `<section class="operator-panel">
          <div class="operator-panel-head"><div><p class="operator-eyebrow">Cierre ${escapeHtml(closure.date)}</p><h2>Total: ${formatCOP(closure.total)}</h2></div><span class="operator-status ${closure.reopened ? "is-pending" : "is-confirmed"}">${closure.reopened ? "Reabierto" : closure.automatic ? "Cierre automático" : "Cerrado"}</span></div>
          <div class="operator-detail-list">
            <div><span>Base</span><strong>${formatCOP(closure.base)}</strong></div>
            <div><span>Ingresos</span><strong>${formatCOP(closure.ingresos)}</strong></div>
            <div><span>Pagos operacionales</span><strong>${formatCOP(closure.pagosOperacionales)}</strong></div>
            <div><span>Gastos</span><strong>${formatCOP(closure.gastos)}</strong></div>
            <div><span>Devoluciones</span><strong>${formatCOP(closure.devoluciones)}</strong></div>
            ${expectedRow}
            ${originRow}
            <div><span>Cerrado por</span><strong>${escapeHtml(closure.closedBy)}</strong></div>
            <div><span>Fecha y hora de cierre</span><strong>${escapeHtml(formatOperatorTenantDateTime(closure.closedAt))}</strong></div>
          </div>
          ${reopeningsHtml}
          ${movementsHtml}
          <p class="operator-eyebrow">Correcciones posteriores</p>
          ${correctionsHtml}
          ${
            isOperatorAdmin() && !closure.automatic
              ? `<form data-cash-correction-form data-closure-id="${escapeHtml(closure.id)}">
            <div class="operator-form-grid">
              <label class="operator-form-wide">Justificación de la corrección (obligatoria)<textarea data-cash-correction-input required placeholder="Describe la corrección operativa excepcional y su justificación"></textarea></label>
            </div>
            <p class="operator-form-feedback" data-cash-correction-feedback>Solo el Administrador del tenant puede registrar una corrección posterior al cierre.</p>
            <div class="operator-form-actions"><button class="operator-outline" type="submit">Registrar corrección</button></div>
          </form>`
              : ""
          }
        </section>`;
      })
      .join("");
  };
  render();

  list.addEventListener("submit", (event) => {
    const form = event.target.closest("[data-cash-correction-form]");
    if (!form) return;
    event.preventDefault();
    if (!isOperatorAdmin()) return;
    const closureId = form.dataset.closureId;
    const input = form.querySelector("[data-cash-correction-input]");
    const feedback = form.querySelector("[data-cash-correction-feedback]");
    const justification = input.value.trim();
    if (!justification) {
      feedback.textContent = "Registra la justificación obligatoria de la corrección.";
      feedback.classList.remove("is-valid");
      return;
    }
    const closures = getOperatorCashClosures();
    const closure = closures.find((item) => item.id === closureId);
    if (!closure) return;
    closure.corrections = closure.corrections || [];
    closure.corrections.push({ justification, appliedBy: getOperatorActorLabel(), appliedAt: getOperatorNow().toISOString() });
    setOperatorCashClosures(closures);
    render();
  });
}

// Todos los movimientos individuales conocidos, cada uno una sola vez y con su fecha local:
// movimientos de cierres y de la jornada abierta guardada, movimientos automáticos de pagos
// validados (libro de caja) y devoluciones efectivamente ejecutadas. NO incluye la base ni
// re-suma cierres (GAP-11).
function collectOperatorCashMovements() {
  const byDate = new Map();
  getOperatorCashClosures().forEach((closure) => {
    byDate.set(closure.date, (closure.movements || []).filter((movement) => movement.type !== "Devolución"));
  });
  const storedDay = readOperatorStorage(OPERATOR_CASH_DAY_KEY, null);
  if (storedDay && storedDay.status !== "cerrada" && Array.isArray(storedDay.movements)) {
    byDate.set(storedDay.date, storedDay.movements);
  }
  // Sin jornada guardada, la caja que ve el Administrador es la de demostración: sus movimientos
  // también cuentan en el reporte mensual (misma fuente que la pantalla Caja).
  if (!storedDay) {
    const demoDay = getDefaultOperatorCashDay();
    if (demoDay && demoDay.status !== "cerrada" && Array.isArray(demoDay.movements)) byDate.set(demoDay.date, demoDay.movements);
  }
  const result = [];
  const seen = new Set();
  const push = (date, movement) => {
    if (movement.id) {
      if (seen.has(movement.id)) return;
      seen.add(movement.id);
    }
    result.push({ ...normalizeOperatorCashMovement(movement), date });
  };
  byDate.forEach((movements, date) => movements.forEach((movement) => push(date, movement)));
  getOperatorCashLedger().forEach((entry) => push(entry.date, entry));
  getOperatorExecutedRefundMovements().forEach((refund) => push(refund.date, refund));
  return result;
}

// RF-012 y GAP-11: reporte administrativo mensual. El total del mes es la suma de TODOS los
// movimientos individuales del mes: ingresos efectivamente recibidos - pagos operacionales -
// gastos operacionales - devoluciones ejecutadas. Los cierres diarios no se re-suman entre sí,
// la base diaria no cuenta como ingreso y cada movimiento se contabiliza una sola vez.
// Compartido entre Caja > Consolidación mensual y Reportes.
function getOperatorMonthlyConsolidation() {
  const movements = collectOperatorCashMovements();
  if (!movements.length) return [];

  const cancellations = Object.values(getOperatorReservationCancellations());
  const costs = getOperatorOperationCosts();
  const periods = {};
  movements.forEach((movement) => {
    if (!movement.date) return;
    const period = movement.date.slice(0, 7);
    if (!periods[period]) periods[period] = { ingresos: 0, pagosOperacionales: 0, gastos: 0, devoluciones: 0, total: 0, movimientos: 0, ingresosEfectivo: 0, ingresosTransferencia: 0 };
    const absolute = Math.abs(movement.amount);
    periods[period].movimientos += 1;
    if (movement.type === "Ingreso") periods[period][movement.medium === "Transferencia" ? "ingresosTransferencia" : "ingresosEfectivo"] += absolute;
    if (movement.type === "Ingreso") periods[period].ingresos += absolute;
    else if (movement.type === "Pago operacional") periods[period].pagosOperacionales += absolute;
    else if (movement.type === "Gasto") periods[period].gastos += absolute;
    else if (movement.type === "Devolución") periods[period].devoluciones += absolute;
  });
  // El período del reloj de demostración siempre figura (aunque aún no tenga movimientos) para que
  // el encabezado del reporte y la lista mensual coincidan en el mismo mes.
  const currentPeriod = getOperatorTodayDate().slice(0, 7);
  if (!periods[currentPeriod]) periods[currentPeriod] = { ingresos: 0, pagosOperacionales: 0, gastos: 0, devoluciones: 0, total: 0, movimientos: 0, ingresosEfectivo: 0, ingresosTransferencia: 0 };
  Object.values(periods).forEach((data) => {
    data.total = data.ingresos - data.pagosOperacionales - data.gastos - data.devoluciones;
  });

  return Object.keys(periods)
    .sort()
    .reverse()
    .map((period) => {
      const data = periods[period];
      const cancelacionesPeriodo = cancellations.filter((c) => getOperatorTenantDateKey(new Date(c.registeredAt)).slice(0, 7) === period).length;
      const costosPeriodo = costs.filter((c) => getOperatorTenantDateKey(new Date(c.registeredAt)).slice(0, 7) === period).reduce((sum, c) => sum + c.amount, 0);
      return { period, ...data, cancelaciones: cancelacionesPeriodo, costosOperacionales: costosPeriodo };
    });
}

function setupOperatorCashMonthly() {
  if (document.body.dataset.screen !== "operator-cash-monthly") return;
  const list = document.querySelector("[data-cash-monthly-list]");
  const emptyNote = document.querySelector("[data-cash-monthly-empty]");
  if (!list) return;

  const periods = getOperatorMonthlyConsolidation();
  if (emptyNote) emptyNote.hidden = periods.length > 0;
  if (!periods.length) { list.innerHTML = ""; return; }

  list.innerHTML = periods
    .map((data) => `<section class="operator-panel">
        <p class="operator-eyebrow">Período reportado</p><h2>${escapeHtml(data.period)}</h2>
        <div class="operator-detail-list">
          <div><span>Movimientos individuales contabilizados</span><strong>${data.movimientos}</strong></div>
          <div><span>Ingresos del período</span><strong>${formatCOP(data.ingresos)}</strong></div>
          <div><span>Ingresos en efectivo</span><strong>${formatCOP(data.ingresosEfectivo)}</strong></div>
          <div><span>Ingresos por transferencia</span><strong>${formatCOP(data.ingresosTransferencia)}</strong></div>
          <div><span>Pagos operacionales del período</span><strong>${formatCOP(data.pagosOperacionales)}</strong></div>
          <div><span>Gastos del período</span><strong>${formatCOP(data.gastos)}</strong></div>
          <div><span>Devoluciones efectivamente realizadas</span><strong>${formatCOP(data.devoluciones)}</strong></div>
          <div><span>Total consolidado de caja del período</span><strong>${formatCOP(data.total)}</strong></div>
          <div><span>Cancelaciones registradas en el período</span><strong>${data.cancelaciones}</strong></div>
          <div><span>Costos operacionales registrados en el período</span><strong>${data.costosOperacionales > 0 ? formatCOP(data.costosOperacionales) : "Sin costos operacionales registrados"}</strong></div>
        </div>
      </section>`)
    .join("");
}

// Fecha de referencia ("hoy") ya usada en el encabezado del resumen del operador
// (admin-operador.html: "Martes, 1 sep 2026"). Se reutiliza la misma, no se inventa otra.
function getOperatorTodayDate() { return getOperatorTenantDateKey(getOperatorNow()); }

// RF-011 (CA-011): dashboard diario con reservas creadas del día, pendientes de pago,
// confirmadas (y, por separado, confirmadas con saldo), canceladas y tours o servicios
// próximos a ejecutar. Todo sale del modelo unificado de reservas, sin cifras inventadas.
function getOperatorReportsDashboard() {
  const reservations = Object.values(getUnifiedOperatorReservations());

  // "Creadas hoy": fecha REAL de creación (createdAt) igual a la fecha de referencia. Los
  // registros base no tienen createdAt (no existe ese dato histórico), así que nunca cuentan.
  const createdToday = reservations.filter((r) => r.createdAt === getOperatorTodayDate()).length;

  // "Canceladas" del dashboard diario: únicamente cancelaciones cuya fecha de registro es HOY
  // (no el total histórico ni el del período).
  const cancelledToday = Object.values(getOperatorReservationCancellations()).filter(
    (c) => getOperatorTenantDateKey(new Date(c.registeredAt)) === getOperatorTodayDate(),
  ).length;

  return {
    createdToday,
    pendingPayment: reservations.filter((r) => r.status === "Pendiente de pago").length,
    confirmed: reservations.filter((r) => r.status === "Confirmada").length,
    confirmedWithBalance: reservations.filter((r) => r.status === "Confirmada" && ["Abono recibido", "Saldo pendiente"].includes(r.financialStatus)).length,
    cancelled: cancelledToday,
    upcomingExecutions: getOperatorUpcomingExecutions().length,
  };
}

// RF-012: ventas confirmadas, ingresos, costos operacionales y cancelaciones, derivados de
// Reservas, Caja y Operación/Costos reales. "Cancelaciones" y "Cancelaciones registradas en
// el período" salen de la MISMA fuente (registro de cancelaciones con fecha real).
function getOperatorReportsSummary() {
  const reservations = Object.values(getUnifiedOperatorReservations());
  const confirmedSales = reservations
    .filter((r) => ["Confirmada", "En ejecución", "Finalizada"].includes(r.status))
    .reduce((sum, r) => sum + r.value, 0);
  const totalIngresos = collectOperatorCashMovements()
    .filter((movement) => movement.type === "Ingreso")
    .reduce((sum, movement) => sum + Math.abs(movement.amount), 0);
  const totalCosts = getOperatorOperationCosts().reduce((sum, c) => sum + c.amount, 0);
  const cancelledCount = Object.values(getOperatorReservationCancellations()).length;
  return { confirmedSales, totalIngresos, totalCosts, cancelledCount };
}

// "Exportar reporte" genera un PDF real con EXACTAMENTE los mismos datos ya mostrados en
// pantalla (mismo dashboard, resumen y períodos), sin recalcular ni inventar nada. Todos los
// datos pertenecen exclusivamente a este tenant.
function buildOperatorReportsLines(dashboard, summary, periods) {
  const lines = [];
  lines.push({ text: "Reporte operativo y económico - Multitour", size: 14, bold: true });
  lines.push({ text: `Generado: ${formatOperatorTenantDateTime(getOperatorNow().toISOString())}`, size: 9 });
  lines.push({ text: "" });
  lines.push({ text: "Resumen", size: 12, bold: true });
  lines.push({ text: `Ventas confirmadas: ${formatCOP(summary.confirmedSales)}` });
  lines.push({ text: `Ingresos del período: ${formatCOP(summary.totalIngresos)}` });
  lines.push({ text: `Costos operacionales: ${formatCOP(summary.totalCosts)}` });
  lines.push({ text: `Cancelaciones: ${summary.cancelledCount}` });
  lines.push({ text: "" });
  lines.push({ text: "Dashboard diario (hoy)", size: 12, bold: true });
  lines.push({ text: `Reservas creadas hoy: ${dashboard.createdToday}` });
  lines.push({ text: `Pendientes de pago: ${dashboard.pendingPayment}` });
  lines.push({ text: `Confirmadas: ${dashboard.confirmed}` });
  lines.push({ text: `Confirmadas con saldo: ${dashboard.confirmedWithBalance}` });
  lines.push({ text: `Canceladas: ${dashboard.cancelled}` });
  lines.push({ text: `Próximas a ejecutar: ${dashboard.upcomingExecutions}` });
  lines.push({ text: "" });
  lines.push({ text: "Reporte mensual", size: 12, bold: true });
  if (!periods.length) {
    lines.push({ text: "Aún no hay movimientos de caja registrados para consolidar el reporte mensual." });
  } else {
    periods.forEach((data) => {
      lines.push({ text: `Período reportado: ${data.period}`, bold: true });
      lines.push({ text: `Ingresos del período: ${formatCOP(data.ingresos)}` });
      lines.push({ text: `Pagos operacionales del período: ${formatCOP(data.pagosOperacionales)}` });
      lines.push({ text: `Gastos del período: ${formatCOP(data.gastos)}` });
      lines.push({ text: `Devoluciones efectivamente realizadas: ${formatCOP(data.devoluciones)}` });
      lines.push({ text: `Total consolidado de caja del período: ${formatCOP(data.total)}` });
      lines.push({ text: `Cancelaciones registradas en el período: ${data.cancelaciones}` });
      lines.push({
        text: `Costos operacionales registrados en el período: ${data.costosOperacionales > 0 ? formatCOP(data.costosOperacionales) : "Sin costos operacionales registrados"}`,
      });
      lines.push({ text: "" });
    });
  }
  return lines;
}

// CSV del reporte (mismas cifras que la pantalla). Pendientes de pago y Confirmadas con saldo se
// informan por separado (E23). El mensual se calcula por movimientos de caja (GAP-11).
function buildOperatorReportsCsv(dashboard, summary, periods) {
  const cell = (value) => `"${String(value ?? "").replace(/"/g, '""')}"`;
  const rows = [["Sección", "Indicador", "Valor"]];
  rows.push(["Resumen", "Ventas confirmadas", summary.confirmedSales], ["Resumen", "Ingresos del período", summary.totalIngresos], ["Resumen", "Costos operacionales", summary.totalCosts], ["Resumen", "Cancelaciones", summary.cancelledCount]);
  rows.push(["Dashboard diario", "Reservas creadas hoy", dashboard.createdToday], ["Dashboard diario", "Pendientes de pago", dashboard.pendingPayment], ["Dashboard diario", "Confirmadas", dashboard.confirmed], ["Dashboard diario", "Confirmadas con saldo", dashboard.confirmedWithBalance], ["Dashboard diario", "Canceladas", dashboard.cancelled], ["Dashboard diario", "Próximas a ejecutar", dashboard.upcomingExecutions]);
  periods.forEach((data) => {
    rows.push([`Mensual ${data.period}`, "Ingresos", data.ingresos], [`Mensual ${data.period}`, "Pagos operacionales", data.pagosOperacionales], [`Mensual ${data.period}`, "Gastos", data.gastos], [`Mensual ${data.period}`, "Devoluciones efectivamente realizadas", data.devoluciones], [`Mensual ${data.period}`, "Total consolidado de caja", data.total], [`Mensual ${data.period}`, "Cancelaciones registradas", data.cancelaciones], [`Mensual ${data.period}`, "Costos operacionales registrados", data.costosOperacionales]);
  });
  return rows.map((row) => row.map(cell).join(",")).join("\r\n");
}

// Nombre sugerido: reporte-multitour-YYYY-MM.pdf, con el período más reciente del reporte
// mensual (o la fecha de referencia si aún no hay movimientos de caja).
function buildOperatorReportsPdfFilename(periods) {
  const period = periods.length ? periods[0].period : getOperatorTodayDate().slice(0, 7);
  return `reporte-multitour-${period}.pdf`;
}

function buildOperatorReportsPdfDoc(dashboard, summary, periods) {
  const JsPDF = window.jspdf && window.jspdf.jsPDF;
  if (!JsPDF) return null;
  const doc = new JsPDF();
  const marginLeft = 14;
  const pageHeight = doc.internal.pageSize.getHeight();
  let y = 18;
  buildOperatorReportsLines(dashboard, summary, periods).forEach((line) => {
    if (y > pageHeight - 15) {
      doc.addPage();
      y = 18;
    }
    doc.setFontSize(line.size || 10);
    doc.setFont(undefined, line.bold ? "bold" : "normal");
    if (line.text) doc.text(line.text, marginLeft, y);
    y += line.size && line.size > 10 ? 8 : 6;
  });
  return doc;
}

function setupOperatorReports() {
  if (document.body.dataset.screen !== "operator-reports") return;

  const dashboard = getOperatorReportsDashboard();
  const setText = (selector, value) => { const el = document.querySelector(selector); if (el) el.textContent = value; };
  setText("[data-reports-created]", String(dashboard.createdToday));
  setText("[data-reports-pending]", String(dashboard.pendingPayment));
  setText("[data-reports-confirmed]", String(dashboard.confirmed));
  setText("[data-reports-confirmed-with-balance]", String(dashboard.confirmedWithBalance));
  setText("[data-reports-cancelled-dashboard]", String(dashboard.cancelled));
  setText("[data-reports-upcoming]", String(dashboard.upcomingExecutions));

  const summary = getOperatorReportsSummary();
  setText("[data-reports-sales]", formatCOP(summary.confirmedSales));
  setText("[data-reports-income]", formatCOP(summary.totalIngresos));
  setText("[data-reports-costs]", formatCOP(summary.totalCosts));
  setText("[data-reports-cancellations]", String(summary.cancelledCount));

  // Mismo cálculo de Caja > Consolidación mensual, para que ambas pantallas muestren siempre
  // los mismos períodos y valores.
  const periods = getOperatorMonthlyConsolidation();
  const monthlyList = document.querySelector("[data-reports-monthly-list]");
  const monthlyEmpty = document.querySelector("[data-reports-monthly-empty]");
  if (monthlyEmpty) monthlyEmpty.hidden = periods.length > 0;
  if (monthlyList) {
    monthlyList.innerHTML = periods
      .map((data) => `<div>
          <p class="operator-eyebrow">Período reportado</p><strong>${escapeHtml(data.period)}</strong>
          <div class="operator-detail-list">
            <div><span>Ingresos del período</span><strong>${formatCOP(data.ingresos)}</strong></div>
            <div><span>Pagos operacionales del período</span><strong>${formatCOP(data.pagosOperacionales)}</strong></div>
            <div><span>Gastos del período</span><strong>${formatCOP(data.gastos)}</strong></div>
            <div><span>Devoluciones efectivamente realizadas</span><strong>${formatCOP(data.devoluciones)}</strong></div>
            <div><span>Total consolidado de caja del período</span><strong>${formatCOP(data.total)}</strong></div>
            <div><span>Cancelaciones registradas en el período</span><strong>${data.cancelaciones}</strong></div>
            <div><span>Costos operacionales registrados en el período</span><strong>${data.costosOperacionales > 0 ? formatCOP(data.costosOperacionales) : "Sin costos operacionales registrados"}</strong></div>
          </div>
        </div>`)
      .join("");
  }

  // Roles de solo consulta (Gerente, Contador, Analista): consultan y exportan, sin modificar.
  const queryOnlyNote = document.querySelector("[data-query-only-note]");
  if (queryOnlyNote) queryOnlyNote.hidden = !isOperatorQueryOnlyRole();

  // Exportar: descarga CSV (mismos datos que la pantalla). El PDF queda como alternativa y, si
  // la librería no carga, se descarga el CSV.
  const downloadCsv = () => {
    const blob = new Blob(["﻿" + buildOperatorReportsCsv(dashboard, summary, periods)], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = buildOperatorReportsPdfFilename(periods).replace(/\.pdf$/, ".csv");
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  document.querySelector("[data-reports-export-csv]")?.addEventListener("click", downloadCsv);
  document.querySelector("[data-reports-export]")?.addEventListener("click", () => {
    const doc = buildOperatorReportsPdfDoc(dashboard, summary, periods);
    if (!doc) { downloadCsv(); return; }
    doc.save(buildOperatorReportsPdfFilename(periods));
  });
}

// Catálogo al que pertenece cada tipo de servicio gestionado por el tenant (tours y transporte).
const OPERATOR_NEW_SERVICE_CATALOG_ID_BY_TYPE = { tour: "catalogo-catalog-panel", transport: "transporte-catalog-panel" };

const OPERATOR_CATALOG_STORAGE_KEY = "multitour-operator-catalog";

function getOperatorCatalog() {
  try { return JSON.parse(localStorage.getItem(OPERATOR_CATALOG_STORAGE_KEY) || "[]"); } catch { return []; }
}

// Establecimientos asociados (hoteles y restaurantes por convenio, GAP-04, RF-018). En Fase 1
// el único servicio con reserva y gestión de cupos es el tour: la plataforma solo muestra los
// datos de contacto del establecimiento para que el cliente coordine directamente. No genera
// reserva de habitación ni de mesa, ni maneja capacidad, tarifa, política de apartamiento,
// platos del día ni inventario. Cada establecimiento conserva únicamente: nombre,
// descripción, imagen, datos de contacto (correo, teléfono, dirección), estado
// activo/inactivo y trazabilidad de sus cambios de estado.
const OPERATOR_ASSOCIATED_ESTABLISHMENTS_KEY = "multitour-associated-establishments";
const OPERATOR_ASSOCIATED_ESTABLISHMENTS_CATALOG_ID = "associated-establishments";
const OPERATOR_ESTABLISHMENTS_AUDIT_KEY = "multitour-associated-establishments-audit";

// Establecimientos de demostración (mismos datos de contacto que muestra el catálogo del
// cliente). Se usan solo mientras el Administrador del tenant no haya registrado ninguno.
const OPERATOR_DEFAULT_ESTABLISHMENTS = [
  { id: "hotel-mirador", kind: "hotel", name: "Ecohotel Mirador", description: "Alojamiento asociado por convenio. Coordina directamente con el establecimiento.", image: "", email: "reservas@ecohotelmirador.co", phone: "+57 300 555 0184", address: "Vía principal, km 8" },
  { id: "sabores-montana", kind: "restaurant", name: "Sabores de la Montaña", description: "Restaurante asociado por convenio. Coordina directamente con el establecimiento.", image: "", email: "reservas@saboresmontana.co", phone: "+57 310 555 0220", address: "Plaza principal, local 4" },
];

function getOperatorAssociatedEstablishments() {
  const stored = readOperatorStorage(OPERATOR_ASSOCIATED_ESTABLISHMENTS_KEY, null);
  return Array.isArray(stored) ? stored : OPERATOR_DEFAULT_ESTABLISHMENTS.map((item) => ({ ...item }));
}

// Solo los establecimientos activos del tenant se muestran al cliente. El estado
// activo/inactivo reutiliza el mismo mapa genérico del resto de catálogos
// (resolveOperatorServiceActive); un establecimiento recién registrado queda Activo y nunca
// se borra, solo se inactiva (histórico conservado).
function getOperatorActiveAssociatedEstablishments(kind) {
  return getOperatorAssociatedEstablishments().filter(
    (establishment) =>
      establishment.kind === kind &&
      resolveOperatorServiceActive(OPERATOR_ASSOCIATED_ESTABLISHMENTS_CATALOG_ID, establishment.id, true),
  );
}

function getOperatorEstablishmentContactLines(establishment) {
  return [establishment.email, establishment.phone, establishment.address].filter(Boolean);
}

function getOperatorEstablishmentAudit(id) {
  const list = readOperatorStorage(OPERATOR_ESTABLISHMENTS_AUDIT_KEY, []);
  return id ? list.filter((entry) => entry.establishmentId === id) : list;
}

// Inactivar o reactivar un establecimiento (solo Administrador del tenant) con trazabilidad:
// quién, cuándo y, si se informa, el motivo.
function setOperatorEstablishmentActive(establishment, active, reason = "") {
  if (!isOperatorAdmin()) return { ok: false, error: "Solo el Administrador del tenant gestiona establecimientos asociados." };
  setOperatorServiceStatus(OPERATOR_ASSOCIATED_ESTABLISHMENTS_CATALOG_ID, establishment.id, active);
  const audit = getOperatorEstablishmentAudit();
  audit.unshift({
    establishmentId: establishment.id,
    name: establishment.name,
    action: active ? "Reactivado" : "Inactivado",
    actor: getOperatorActorLabel(),
    reason: String(reason || "").trim(),
    at: getOperatorNow().toISOString(),
  });
  writeOperatorStorage(OPERATOR_ESTABLISHMENTS_AUDIT_KEY, audit);
  return { ok: true };
}

/// Gestión de establecimientos asociados (RF-018, RN-ASO-001, GAP-10): solo el Administrador del
// tenant registra, edita, inactiva y reactiva. Cada establecimiento conserva únicamente nombre,
// descripción, imagen, contacto (correo, teléfono, dirección) y estado; nunca cupos, tarifas,
// habitaciones, platos ni inventario. Inactivar o reactivar exige motivo y queda en la bitácora.
function saveOperatorAssociatedEstablishments(list) {
  writeOperatorStorage(OPERATOR_ASSOCIATED_ESTABLISHMENTS_KEY, list);
}

function addOperatorEstablishmentAudit(establishment, action, reason = "") {
  const audit = getOperatorEstablishmentAudit();
  audit.unshift({
    establishmentId: establishment.id,
    name: establishment.name,
    kind: establishment.kind,
    action,
    actor: getOperatorActorLabel(),
    reason: String(reason || "").trim(),
    at: getOperatorNow().toISOString(),
  });
  writeOperatorStorage(OPERATOR_ESTABLISHMENTS_AUDIT_KEY, audit);
}

const OPERATOR_ESTABLISHMENT_KIND_LABELS = { hotel: "Alojamiento asociado", restaurant: "Restaurante asociado" };

// Pantallas de catálogo y configuración de solo Administrador del tenant (despachador único,
// invocado desde el arranque de la página).
function setupOperatorAdminCatalogScreens() {
  const screen = document.body.dataset.screen;
  if (screen === "operator-manage-establishments") setupOperatorEstablishmentsManager();
  else if (screen === "operator-configure-establishment") setupOperatorEstablishmentForm();
  else if (screen === "operator-catalogs") setupOperatorCatalogsOverview();
  else if (screen === "operator-configure-tour") setupOperatorConfigureTour();
  else if (screen === "operator-configure-transport") setupOperatorConfigureTransport();
  else if (screen === "operator-notifications") setupOperatorNotifications();
}

function setupOperatorEstablishmentsManager() {
  if (!guardOperatorAdminOnlyScreen("admin-catalogos.html")) return;
  const kind = document.body.dataset.establishmentKind || "hotel";
  const tbody = document.querySelector("[data-establishments-body]");
  const auditBody = document.querySelector("[data-establishments-audit]");
  const dialog = document.querySelector("[data-establishment-dialog]");
  const reasonInput = document.querySelector("[data-establishment-reason]");
  const dialogFeedback = document.querySelector("[data-establishment-dialog-feedback]");
  let target = null;
  const configureHref = (id) => withTheme(`${document.body.dataset.configurePage}${id ? `?id=${encodeURIComponent(id)}` : ""}`, getTheme());
  const addLink = document.querySelector("[data-establishment-add]");
  if (addLink) addLink.setAttribute("href", configureHref(""));

  const render = () => {
    const items = getOperatorAssociatedEstablishments().filter((item) => item.kind === kind);
    const audit = getOperatorEstablishmentAudit();
    const activeCount = items.filter((item) => resolveOperatorServiceActive(OPERATOR_ASSOCIATED_ESTABLISHMENTS_CATALOG_ID, item.id, true)).length;
    const counter = document.querySelector("[data-establishments-count]");
    if (counter) counter.textContent = `${activeCount} activo${activeCount === 1 ? "" : "s"} de ${items.length}`;
    if (!tbody) return;
    tbody.innerHTML = items.length
      ? items.map((item) => {
        const active = resolveOperatorServiceActive(OPERATOR_ASSOCIATED_ESTABLISHMENTS_CATALOG_ID, item.id, true);
        const last = audit.find((entry) => entry.establishmentId === item.id);
        const lastText = last ? `<small>${escapeHtml(last.action)} por ${escapeHtml(last.actor)} el ${escapeHtml(formatOperatorTenantDateTime(last.at))}${last.reason ? ". Motivo: " + escapeHtml(last.reason) : ""}</small>` : "";
        const contact = getOperatorEstablishmentContactLines(item).map((line) => escapeHtml(line)).join("<br>") || "Sin datos de contacto";
        return `<tr><td><strong>${escapeHtml(item.name)}</strong><br><small>${escapeHtml(item.description || "Sin descripción registrada.")}</small></td><td>${contact}</td><td><span class="operator-status ${active ? "is-confirmed" : "is-cancelled"}">${active ? "Activo" : "Inactivo"}</span>${lastText}</td><td><a class="operator-row-manage" href="${configureHref(item.id)}">Gestionar</a><button class="operator-row-toggle" type="button" data-establishment-toggle="${escapeHtml(item.id)}">${active ? "Inactivar" : "Reactivar"}</button></td></tr>`;
      }).join("")
      : `<tr><td colspan="4">Aún no hay ${kind === "hotel" ? "alojamientos" : "restaurantes"} asociados. Usa "Agregar establecimiento" para registrar el primero.</td></tr>`;
    tbody.querySelectorAll("[data-establishment-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        target = items.find((item) => item.id === button.dataset.establishmentToggle) || null;
        if (!target || !dialog) return;
        const active = resolveOperatorServiceActive(OPERATOR_ASSOCIATED_ESTABLISHMENTS_CATALOG_ID, target.id, true);
        const title = dialog.querySelector("[data-establishment-dialog-title]");
        const copy = dialog.querySelector("[data-establishment-dialog-copy]");
        const confirm = dialog.querySelector("[data-establishment-confirm]");
        if (title) title.textContent = `${active ? "Inactivar" : "Reactivar"} ${target.name}`;
        if (copy) copy.textContent = active
          ? "Dejará de mostrarse a los clientes del tenant en nuevas consultas. La información y el histórico se conservan."
          : "Restaura su visibilidad promocional para los clientes del tenant.";
        if (confirm) confirm.textContent = active ? "Confirmar inactivación" : "Confirmar reactivación";
        if (reasonInput) reasonInput.value = "";
        if (dialogFeedback) dialogFeedback.textContent = "";
        dialog.showModal?.();
      });
    });
    if (auditBody) {
      const entries = audit.filter((entry) => items.some((item) => item.id === entry.establishmentId)).slice(0, 12);
      auditBody.innerHTML = entries.length
        ? entries.map((entry) => `<tr><td>${escapeHtml(formatOperatorTenantDateTime(entry.at))}</td><td>${escapeHtml(entry.name)}</td><td>${escapeHtml(entry.action)}</td><td>${escapeHtml(entry.actor)}</td><td>${escapeHtml(entry.reason || "—")}</td></tr>`).join("")
        : '<tr><td colspan="5">Sin movimientos registrados.</td></tr>';
    }
  };
  document.querySelector("[data-establishment-confirm]")?.addEventListener("click", () => {
    if (!target) return;
    const reason = (reasonInput?.value || "").trim();
    if (!reason) { if (dialogFeedback) dialogFeedback.textContent = "El motivo es obligatorio para la trazabilidad."; return; }
    const active = resolveOperatorServiceActive(OPERATOR_ASSOCIATED_ESTABLISHMENTS_CATALOG_ID, target.id, true);
    const result = setOperatorEstablishmentActive(target, !active, reason);
    if (!result.ok) { if (dialogFeedback) dialogFeedback.textContent = result.error; return; }
    dialog?.close?.();
    render();
  });
  document.querySelector("[data-establishment-cancel]")?.addEventListener("click", () => dialog?.close?.());
  render();
}

function setupOperatorEstablishmentForm() {
  if (!guardOperatorAdminOnlyScreen("admin-catalogos.html")) return;
  const kind = document.body.dataset.establishmentKind || "hotel";
  const backPage = document.body.dataset.managePage;
  const form = document.querySelector("[data-establishment-form]");
  if (!form) return;
  const feedback = form.querySelector("[data-establishment-feedback]");
  const preview = form.querySelector("[data-establishment-preview]");
  const imageInput = form.querySelector("[data-establishment-image]");
  const id = new URLSearchParams(window.location.search).get("id") || "";
  const all = getOperatorAssociatedEstablishments();
  const existing = id ? all.find((item) => item.id === id && item.kind === kind) : null;
  const setValue = (name, value) => { const el = form.elements[name]; if (el) el.value = value || ""; };
  let imageData = "";
  if (existing) {
    setValue("name", existing.name);
    setValue("description", existing.description);
    setValue("email", existing.email);
    setValue("phone", existing.phone);
    setValue("address", existing.address);
    imageData = existing.image || "";
    const status = document.querySelector("[data-establishment-status]");
    const active = resolveOperatorServiceActive(OPERATOR_ASSOCIATED_ESTABLISHMENTS_CATALOG_ID, existing.id, true);
    if (status) status.innerHTML = `<span class="operator-status ${active ? "is-confirmed" : "is-cancelled"}">${active ? "Activo" : "Inactivo"}</span>`;
    const title = document.querySelector("[data-establishment-form-title]");
    if (title) title.textContent = `Editar ${OPERATOR_ESTABLISHMENT_KIND_LABELS[kind].toLowerCase()}`;
  } else {
    const status = document.querySelector("[data-establishment-status]");
    if (status) status.innerHTML = '<span class="operator-status is-confirmed">Activo al guardar</span>';
  }
  if (preview && imageData) { preview.src = imageData; preview.hidden = false; }
  imageInput?.addEventListener("change", () => {
    const file = imageInput.files?.[0];
    if (!file) return;
    if (file.size > 1.5 * 1024 * 1024) { if (feedback) feedback.textContent = "La imagen supera 1,5 MB en este mockup. Elige una más liviana."; imageInput.value = ""; return; }
    const reader = new FileReader();
    reader.addEventListener("load", () => { imageData = String(reader.result); if (preview) { preview.src = imageData; preview.hidden = false; } });
    reader.readAsDataURL(file);
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.elements.name.value.trim();
    const email = form.elements.email.value.trim();
    const phone = form.elements.phone.value.trim();
    const address = form.elements.address.value.trim();
    const description = form.elements.description.value.trim();
    if (!name) { if (feedback) feedback.textContent = "Escribe el nombre comercial del establecimiento."; return; }
    if (!email && !phone) { if (feedback) feedback.textContent = "Registra al menos un dato de contacto (correo o teléfono)."; return; }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { if (feedback) feedback.textContent = "Ingresa un correo de contacto válido."; return; }
    if (!imageData) { if (feedback) feedback.textContent = "Adjunta una imagen del establecimiento (visible para los clientes del tenant)."; return; }
    const duplicated = all.find((item) => item.kind === kind && item.id !== (existing?.id || "") && item.name.trim().toLowerCase() === name.toLowerCase());
    if (duplicated) { if (feedback) feedback.textContent = "Ya existe un establecimiento asociado con ese nombre."; return; }
    if (existing) {
      const updated = { ...existing, name, description, email, phone, address, image: imageData, updatedAt: getOperatorNow().toISOString() };
      saveOperatorAssociatedEstablishments(all.map((item) => item.id === existing.id ? updated : item));
      addOperatorEstablishmentAudit(updated, "Datos actualizados");
    } else {
      const created = { id: `establishment-${Date.now()}`, kind, name, description, image: imageData, email, phone, address, createdAt: getOperatorNow().toISOString(), createdBy: getOperatorActorLabel() };
      saveOperatorAssociatedEstablishments([...all, created]);
      addOperatorEstablishmentAudit(created, "Registrado");
    }
    if (feedback) { feedback.textContent = "Establecimiento guardado."; feedback.classList.add("is-valid"); }
    window.setTimeout(() => { window.location.href = withTheme(backPage, getTheme()); }, 600);
  });
}

// Resumen de catálogos: los conteos salen de las mismas fuentes que usan las pantallas de gestión.
function setupOperatorCatalogsOverview() {
  const plural = (count, one, many) => `${count} ${count === 1 ? one : many}`;
  const set = (key, text) => { const el = document.querySelector(`[data-catalog-count="${key}"]`); if (el) el.textContent = text; };
  set("tours", plural(Object.keys(getOperatorActiveTourServices()).length, "tour activo", "tours activos"));
  set("hotel", plural(getOperatorActiveAssociatedEstablishments("hotel").length, "establecimiento activo", "establecimientos activos"));
  set("restaurant", plural(getOperatorActiveAssociatedEstablishments("restaurant").length, "establecimiento activo", "establecimientos activos"));
  set("transport", plural(getOperatorActiveTransportOptions().length, "recurso activo", "recursos activos"));
}

// Configurar tour (RF-004): solo Administrador del tenant. Nombre, tarifa base, vigencia, capacidad
// del tour y transporte asociado (RN-TRA-001/002). El cupo se controla por salida.
function setupOperatorConfigureTour() {
  if (!guardOperatorAdminOnlyScreen("admin-gestionar-catalogo.html")) return;
  const form = document.querySelector("[data-configure-tour-form]");
  if (!form) return;
  const feedback = form.querySelector("[data-configure-feedback]");
  const recordKey = new URLSearchParams(window.location.search).get("record") || "";
  const base = OPERATOR_CATALOG_DEFAULTS[TOUR_CATALOG_ID].records.find((record) => record.key === recordKey);
  const dynamic = base ? null : getOperatorCatalog().find((resource) => resource.id === recordKey && resource.type === "tour");
  if (!base && !dynamic) {
    if (feedback) feedback.textContent = "No se encontró el tour seleccionado. Vuelve al catálogo y elige \"Gestionar\" en un tour.";
    form.querySelectorAll("input, select, button").forEach((el) => { el.disabled = true; });
    return;
  }
  const baseFields = base ? (getOperatorServiceFields(TOUR_CATALOG_ID, base.key) || base.fields) : null;
  const [baseStart, baseEnd] = baseFields ? (baseFields.validity || "").split(" - ").map(parseOperatorDate) : ["", ""];
  const values = base
    ? { name: baseFields.name || base.key, tariff: parseCOP(baseFields.tariff), start: baseStart, end: baseEnd || baseStart, capacity: parseCOP(baseFields.capacity) || "" }
    : { name: dynamic.name, tariff: dynamic.price, start: dynamic.start, end: dynamic.end, capacity: dynamic.capacity || "" };
  form.elements.name.value = values.name;
  form.elements.tariff.value = values.tariff || "";
  form.elements.start.value = values.start || "";
  form.elements.end.value = values.end || "";
  form.elements.capacity.value = values.capacity;
  const transportSelect = form.elements.transport;
  const transportTariff = form.elements.transportTariff;
  const options = getOperatorActiveTransportOptions();
  transportSelect.innerHTML = '<option value="">Sin transporte incluido</option>' + options.map((option) => `<option value="${escapeHtml(option.key)}">${escapeHtml(option.name)}${option.capacity ? ` (capacidad ${option.capacity})` : ""}</option>`).join("");
  const key = base ? base.key : dynamic.id;
  const link = getOperatorTourTransportLinks()[key];
  if (link && options.some((option) => option.key === link.transportKey)) { transportSelect.value = link.transportKey; transportTariff.value = link.tariffOverride || ""; }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.elements.name.value.trim();
    const tariff = Number(form.elements.tariff.value);
    const start = form.elements.start.value;
    const end = form.elements.end.value;
    const capacity = Number(form.elements.capacity.value) || null;
    if (!name || !(tariff > 0) || !start || !end) { if (feedback) feedback.textContent = "Completa nombre, tarifa base y vigencia."; return; }
    if (end < start) { if (feedback) feedback.textContent = "La vigencia hasta no puede ser anterior a la vigencia desde."; return; }
    if (form.elements.capacity.value && !(capacity >= 1)) { if (feedback) feedback.textContent = "La capacidad debe ser un número mayor a cero."; return; }
    if (transportSelect.value && !(Number(transportTariff.value) > 0)) { if (feedback) feedback.textContent = "Define la tarifa de transporte por persona para este tour (RN-TRA-002)."; return; }
    if (base) {
      setOperatorServiceFields(TOUR_CATALOG_ID, base.key, { ...baseFields, name, tariff: formatCOP(tariff), validity: `${formatOperatorDate(start)} - ${formatOperatorDate(end)}`, capacity: capacity ? String(capacity) : "" });
    } else {
      localStorage.setItem(OPERATOR_CATALOG_STORAGE_KEY, JSON.stringify(getOperatorCatalog().map((resource) => resource.id === dynamic.id ? { ...resource, name, price: tariff, start, end, capacity } : resource)));
    }
    setOperatorTourTransportLink(key, transportSelect.value, Number(transportTariff.value) || 0);
    if (feedback) { feedback.textContent = "Tour guardado."; feedback.classList.add("is-valid"); }
    window.setTimeout(() => { window.location.href = withTheme("admin-gestionar-catalogo.html", getTheme()); }, 600);
  });
}

// Configurar transporte (RN-TRA-001/002): la capacidad restringe el cupo de la salida y la tarifa
// es por persona. Solo Administrador del tenant.
function setupOperatorConfigureTransport() {
  if (!guardOperatorAdminOnlyScreen("admin-gestionar-transporte.html")) return;
  const form = document.querySelector("[data-configure-transport-form]");
  if (!form) return;
  const feedback = form.querySelector("[data-configure-feedback]");
  const transportId = "transporte-catalog-panel";
  const defaultRecord = OPERATOR_CATALOG_DEFAULTS[transportId].records[0];
  const recordKey = new URLSearchParams(window.location.search).get("record") || defaultRecord.key;
  const base = recordKey === defaultRecord.key ? defaultRecord : null;
  const dynamic = base ? null : getOperatorCatalog().find((resource) => resource.id === recordKey && resource.type === "transport");
  if (!base && !dynamic) {
    if (feedback) feedback.textContent = "No se encontró el recurso de transporte seleccionado.";
    form.querySelectorAll("input, select, button").forEach((el) => { el.disabled = true; });
    return;
  }
  const fields = base ? (getOperatorServiceFields(transportId, base.key) || base.fields) : null;
  const text = (value) => (value && value !== "Por configurar" ? value : "");
  form.elements.name.value = base ? (fields.name || base.key) : dynamic.name;
  form.elements.route.value = base ? text(fields.route) : (dynamic.route || "");
  form.elements.capacity.value = base ? (parseCOP(fields.capacity) || "") : (dynamic.capacity || "");
  form.elements.tariff.value = base ? (parseCOP(fields.tariff) || "") : (dynamic.price || "");
  form.elements.cost.value = base ? (parseCOP(fields.cost) || "") : (dynamic.cost || "");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.elements.name.value.trim();
    const route = form.elements.route.value.trim();
    const capacity = Number(form.elements.capacity.value);
    const tariff = Number(form.elements.tariff.value);
    const cost = Number(form.elements.cost.value) || 0;
    if (!name || !route) { if (feedback) feedback.textContent = "Completa el nombre del recurso y el trayecto."; return; }
    if (!(capacity >= 1)) { if (feedback) feedback.textContent = "La capacidad debe ser un número mayor a cero: restringe el cupo de la salida."; return; }
    if (!(tariff > 0)) { if (feedback) feedback.textContent = "Define la tarifa por persona (RN-TRA-002)."; return; }
    if (base) {
      setOperatorServiceFields(transportId, base.key, { ...fields, name, route, capacity: String(capacity), tariff: formatCOP(tariff), cost: cost > 0 ? formatCOP(cost) : "Por configurar" });
    } else {
      localStorage.setItem(OPERATOR_CATALOG_STORAGE_KEY, JSON.stringify(getOperatorCatalog().map((resource) => resource.id === dynamic.id ? { ...resource, name, route, capacity, price: tariff, cost } : resource)));
    }
    if (feedback) { feedback.textContent = "Transporte guardado."; feedback.classList.add("is-valid"); }
    window.setTimeout(() => { window.location.href = withTheme("admin-gestionar-transporte.html", getTheme()); }, 600);
  });
}

// Motivos autorizables de descuentos adicionales (sección 15, parametrizable por el Administrador
// del tenant). La pantalla de descuento adicional puede leerlos con getOperatorDiscountReasons().
const OPERATOR_DISCOUNT_REASONS_KEY = "multitour-discount-reasons";
const OPERATOR_DEFAULT_DISCOUNT_REASONS = ["Fidelización", "Compensación por inconveniente", "Convenio comercial"];

function getOperatorDiscountReasons() {
  const stored = readOperatorStorage(OPERATOR_DISCOUNT_REASONS_KEY, null);
  return Array.isArray(stored) && stored.length ? stored : [...OPERATOR_DEFAULT_DISCOUNT_REASONS];
}

function setupOperatorDiscountReasons() {
  const list = document.querySelector("[data-discount-reasons-list]");
  const form = document.querySelector("[data-discount-reasons-form]");
  if (!list || !form) return;
  const feedback = form.querySelector("[data-discount-reasons-feedback]");
  const render = () => {
    const reasons = getOperatorDiscountReasons();
    list.innerHTML = reasons.map((reason, index) => `<li><span>${escapeHtml(reason)}</span><button class="operator-row-toggle" type="button" data-discount-reason-remove="${index}"${reasons.length === 1 ? " disabled" : ""}>Quitar</button></li>`).join("");
    list.querySelectorAll("[data-discount-reason-remove]").forEach((button) => button.addEventListener("click", () => {
      const next = getOperatorDiscountReasons().filter((_, index) => index !== Number(button.dataset.discountReasonRemove));
      if (!next.length) return;
      writeOperatorStorage(OPERATOR_DISCOUNT_REASONS_KEY, next);
      render();
    }));
  };
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = String(new FormData(form).get("reason") || "").trim();
    if (!value) { if (feedback) feedback.textContent = "Escribe el motivo que se podrá autorizar."; return; }
    const reasons = getOperatorDiscountReasons();
    if (reasons.some((reason) => reason.toLowerCase() === value.toLowerCase())) { if (feedback) feedback.textContent = "Ese motivo ya está habilitado."; return; }
    writeOperatorStorage(OPERATOR_DISCOUNT_REASONS_KEY, [...reasons, value]);
    form.reset();
    if (feedback) feedback.textContent = "";
    render();
  });
  render();
}

// Centro de notificaciones del tenant (RF-019, CA-022 como referencia): alertas visibles según el
// permiso del usuario. Las notificaciones por correo al cliente son informativas y no
// condicionan el estado registrado.
function getOperatorNotificationAlerts() {
  const alerts = [];
  const add = (code, title, body, href) => alerts.push({ code, title, body, href });
  const remaining = (iso) => {
    const ms = new Date(iso) - getOperatorNow();
    if (ms <= 0) return "plazo cumplido";
    return `quedan ${Math.floor(ms / 3600000)} h ${Math.floor((ms % 3600000) / 60000)} min`;
  };
  if (operatorHasPermission(OPERATOR_PERMISSION_VALIDATE_RECEIPTS)) {
    try {
      const overdue = getOperatorPendingReceipts().filter(operatorReceiptOverdue);
      if (overdue.length) add("CP", `Alerta prioritaria · Comprobantes con revisión vencida (${overdue.length})`, `Reservas ${overdue.map((receipt) => receipt.code).join(", ")}: llevan más de 24 horas corridas En validación. Siguen pendientes: no cancelan la reserva ni liberan cupos.`, "admin-pagos.html");
    } catch { /* sin comprobantes disponibles */ }
  }
  if (isOperatorAdmin()) {
    try {
      const refunds = getOperatorRefundRequests();
      refunds.filter((r) => r.status === "Pendiente de autorización").forEach((r) => add("DV", `Devolución pendiente de decisión${r.reservationCode ? " · " + r.reservationCode : ""}`, `Decisión del Administrador del tenant: ${remaining(getOperatorRefundDecisionDueAt(r).toISOString())}. Si no decide en 24 horas, Multitour determina la devolución del 100 %.`, "admin-solicitudes-devolucion.html"));
      refunds.filter(operatorRefundExecutionOverdue).forEach((r) => add("DV", `Devolución vencida${r.reservationCode ? " · " + r.reservationCode : ""}`, "Superó los 5 días hábiles para ejecutarse. Sigue siendo una obligación pendiente.", "admin-solicitudes-devolucion.html"));
    } catch { /* sin devoluciones disponibles */ }
  }
  if (operatorHasPermission(OPERATOR_PERMISSION_MANAGE_EXECUTION)) {
    const departureAlerts = typeof window.getOperatorPendingDepartureAlerts === "function" ? window.getOperatorPendingDepartureAlerts() : null;
    if (Array.isArray(departureAlerts)) departureAlerts.forEach((item) => add("SA", item.title, item.body, "admin-salidas.html"));
  }
  if (isOperatorAdmin() || operatorHasPermission(OPERATOR_PERMISSION_MANAGE_CASH)) {
    try {
      const pendingCash = getOperatorPendingCashDay();
      if (pendingCash) add("CJ", `Caja del ${pendingCash.date} pendiente de cierre`, "Tuvo apertura operativa y no se cerró al finalizar su día: no acepta movimientos nuevos y exige cierre formal. La caja de hoy opera de forma independiente.", "admin-caja.html");
    } catch { /* sin caja disponible */ }
  }
  getOperatorTimeEvents().filter((event) => event.alert && operatorTimeEventVisible(event))
    .sort((a, b) => String(b.at).localeCompare(String(a.at))).slice(0, 12)
    .forEach((event) => add(event.alert.code, event.alert.title, event.alert.body, event.href || "admin-notificaciones.html"));
  return alerts;
}

function setupOperatorNotifications() {
  const alertsNode = document.querySelector("[data-notification-alerts]");
  const roleNote = document.querySelector("[data-notification-role-note]");
  if (roleNote) {
    const permissions = OPERATOR_PERMISSIONS.filter((permission) => operatorHasPermission(permission));
    roleNote.textContent = `Rol: ${getOperatorRoleLabel()}. Ves las alertas de los permisos que tienes: ${permissions.length ? permissions.join(", ") : "ninguno (solo consulta)"}.`;
  }
  if (alertsNode) {
    const alerts = getOperatorNotificationAlerts();
    alertsNode.innerHTML = alerts.length
      ? alerts.map((alert) => `<div class="mt-divider-list-item"><span class="mt-divider-list-icon">${escapeHtml(alert.code)}</span><span class="mt-divider-list-copy"><strong>${escapeHtml(alert.title)}</strong><span>${escapeHtml(alert.body)} <a href="${withTheme(alert.href, getTheme())}">Abrir</a></span></span></div>`).join("")
      : '<p class="operator-copy">Sin alertas pendientes para tu rol.</p>';
  }
  const timeLog = document.querySelector("[data-time-events-log]");
  if (timeLog) {
    const events = getOperatorTimeEvents().filter(operatorTimeEventVisible).sort((a, b) => String(b.at).localeCompare(String(a.at))).slice(0, 25);
    timeLog.innerHTML = events.length
      ? events.map((event) => `<div class="mt-divider-list-item"><span class="mt-divider-list-icon">AU</span><span class="mt-divider-list-copy"><strong>${escapeHtml(event.action)}</strong><span>${escapeHtml(formatOperatorTenantDateTime(event.at))} · ${escapeHtml(event.recordAffected || "")}${event.rule ? ` · Regla ${escapeHtml(event.rule)}` : ""}. ${escapeHtml(event.detail)}</span></span></div>`).join("")
      : '<p class="operator-copy">Aún no se ha aplicado ninguna regla automática. Avanza el reloj de demostración para ver cancelaciones, determinaciones y cierres por tiempo.</p>';
  }
  const accessNode = document.querySelector("[data-notification-access]");
  if (accessNode && isOperatorAdmin()) {
    const render = () => {
      const requests = getPlatformAccessRequests(OPERATOR_CURRENT_TENANT_ID).filter((request) => ["Pendiente", "Vigente"].includes(request.status));
      accessNode.innerHTML = requests.length
        ? requests.map((request) => `<div class="mt-divider-list-item"><span class="mt-divider-list-icon">AX</span><span class="mt-divider-list-copy"><strong>${request.status === "Pendiente" ? "Solicitud de acceso excepcional de soporte" : (request.type === "Emergencia" ? "Acceso de emergencia vigente" : "Acceso excepcional vigente")}</strong><span>Alcance: ${escapeHtml(request.scope)}. Motivo: ${escapeHtml(request.reason)}.${request.status === "Vigente" ? ` Vence ${escapeHtml(formatOperatorTenantDateTime(request.expiresAt))}.` : " Si lo autorizas, vence automáticamente a las 24 horas como máximo."}</span>${request.status === "Pendiente" ? `<span class="operator-form-actions"><button class="operator-primary" type="button" data-access-decision="approve" data-access-id="${escapeHtml(request.id)}">Autorizar 24 h</button><button class="operator-outline" type="button" data-access-decision="reject" data-access-id="${escapeHtml(request.id)}">Rechazar</button></span>` : ""}</span></div>`).join("")
        : '<p class="operator-copy">Sin solicitudes ni accesos de soporte activos.</p>';
      accessNode.querySelectorAll("[data-access-decision]").forEach((button) => button.addEventListener("click", () => {
        decidePlatformAccessRequest(button.dataset.accessId, button.dataset.accessDecision === "approve", getOperatorActorLabel());
        render();
      }));
    };
    render();
  }
}

// Elementos comunes del menú del operador: enlace a Notificaciones en todas las pantallas del
// panel y aviso/restricción cuando el tenant está inactivo (PDR sección 9, E26/G4).
function setupOperatorChromeExtras() {
  const nav = document.querySelector(".operator-nav");
  if (nav && !nav.querySelector('[data-route="operatorNotifications"]')) {
    const link = document.createElement("a");
    link.href = withTheme("admin-notificaciones.html", getTheme());
    link.dataset.route = "operatorNotifications";
    link.textContent = "Notificaciones";
    if (document.body.dataset.screen === "operator-notifications") link.classList.add("is-active");
    const collaborators = nav.querySelector('[data-route="operatorCollaborators"]');
    if (collaborators) nav.insertBefore(link, collaborators); else nav.append(link);
  }
  // El modo de tenant inactivo (sesiones, acceso restringido y aviso) lo aplica setupOperatorTenantInactiveMode().
}

const OPERATOR_DISCOUNTS_STORAGE_KEY = "multitour-discounts";

// Descuentos de demostración (solo tours, RF-005A): se usan mientras el Administrador del tenant
// no haya guardado cambios; al crear, editar o inactivar uno se persiste la lista completa.
const OPERATOR_DEMO_DISCOUNTS = [
  { id: "legacy-tour-montanas", service: "Tour destino ejemplo - Montañas", serviceLabel: "Tour destino ejemplo - Montañas", percentage: 20, start: "2026-08-01", end: "2026-09-30", priority: 1, stackable: "no", cap: "", base: "original", active: true },
  { id: "demo-tour-cenotes", service: "Aventura en cenotes ocultos", serviceLabel: "Aventura en cenotes ocultos", percentage: 15, start: "2026-08-15", end: "2026-10-15", priority: 2, stackable: "no", cap: "$80.000", base: "original", active: true },
  { id: "demo-tour-cultural", service: "Recorrido cultural e histórico", serviceLabel: "Recorrido cultural e histórico", percentage: 10, start: "2026-08-20", end: "2026-09-25", priority: 3, stackable: "si", cap: "", base: "subtotal", active: true },
];

function getOperatorDiscounts() {
  try {
    const stored = localStorage.getItem(OPERATOR_DISCOUNTS_STORAGE_KEY);
    return stored === null ? OPERATOR_DEMO_DISCOUNTS.map((discount) => ({ ...discount })) : JSON.parse(stored || "[]");
  } catch { return OPERATOR_DEMO_DISCOUNTS.map((discount) => ({ ...discount })); }
}

// Los descuentos aplican únicamente a tours (no a transporte ni a establecimientos asociados).
function getOperatorCatalogServiceOptions() {
  const baseTours = OPERATOR_CATALOG_DEFAULTS["catalogo-catalog-panel"].records.map((record) => ({
    key: record.key,
    label: record.fields?.name || record.key,
  }));
  const dynamicTours = getOperatorCatalog()
    .filter((resource) => resource.type === "tour")
    .map((resource) => ({ key: resource.id, label: resource.name }));
  return [...baseTours, ...dynamicTours];
}

function setupOperatorDiscounts() {
  if (document.body.dataset.screen !== "operator-discounts") return;
  guardOperatorAdminOnlyScreen("admin-operador.html");
  const createButton = document.querySelector(".operator-topbar .operator-primary, .mt-page-header .operator-primary");
  if (createButton) createButton.addEventListener("click", () => { window.location.href = withTheme("admin-nuevo-descuento.html", getTheme()); });
  const existingPromo = document.querySelector(".operator-promo");
  const promoPanel = existingPromo?.closest(".operator-panel");
  const counter = promoPanel?.querySelector(".operator-panel-head .operator-status");
  const discounts = getOperatorDiscounts();
  const hasLegacyOverride = discounts.some((discount) => discount.id === "legacy-tour-montanas");
  const legacyStaticPromo = document.querySelector('.operator-promo[data-discount-id="legacy-tour-montanas"]');
  if (legacyStaticPromo && hasLegacyOverride) legacyStaticPromo.remove();
  discounts.forEach((discount) => {
    const promo = document.createElement("div");
    promo.className = "operator-promo";
    promo.dataset.discountId = discount.id;
    const baseLabel = discount.base === "subtotal" ? "subtotal resultante del descuento anterior" : "valor original";
    const stackableLabel = discount.stackable === "si" ? "acumulable" : "no acumulable";
    const capLabel = discount.cap ? ` Tope: ${escapeHtml(discount.cap)}.` : "";
    promo.innerHTML = `<div><span>${escapeHtml((discount.serviceLabel || discount.service).toUpperCase())}</span><strong>${escapeHtml(String(discount.percentage))}% de descuento</strong><p>Vigente hasta el ${escapeHtml(formatOperatorDate(discount.end))}. Base de cálculo: ${baseLabel}. Prioridad ${escapeHtml(String(discount.priority))}, ${stackableLabel}.${capLabel}</p></div><button type="button">Editar parámetros</button>`;
    promoPanel?.appendChild(promo);
  });
  document.querySelectorAll(".operator-promo button").forEach((button) => {
    const id = button.closest(".operator-promo")?.dataset.discountId;
    if (!id) return;
    button.addEventListener("click", () => { window.location.href = withTheme(`admin-editar-descuento.html?id=${encodeURIComponent(id)}`, getTheme()); });
  });
  const totalActive = (hasLegacyOverride ? 0 : 1) + discounts.length;
  if (counter) counter.textContent = `${totalActive} activa${totalActive === 1 ? "" : "s"}`;
  setupOperatorDiscountReasons();
}

function setupOperatorNewDiscount() {
  if (document.body.dataset.screen !== "operator-new-discount") return;
  guardOperatorAdminOnlyScreen("admin-descuentos.html");
  const form = document.querySelector("[data-new-discount-form]");
  const serviceSelect = form?.querySelector("[data-discount-service]");
  getOperatorCatalogServiceOptions().forEach(({ key, label }) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = label;
    serviceSelect?.append(option);
  });
  const feedback = form?.querySelector("[data-discount-feedback]");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const start = form.querySelector("[data-discount-start]").value;
    const end = form.querySelector("[data-discount-end]").value;
    if (!form.checkValidity() || end < start) {
      feedback.textContent = "Completa los parámetros y define una vigencia válida.";
      return;
    }
    const capText = form.querySelector("[data-discount-cap]").value.trim();
    if (capText && !(parseCOP(capText) > 0)) {
      feedback.textContent = "El tope debe ser un valor en pesos mayor a cero (por ejemplo $50.000) o dejarse vacío.";
      return;
    }
    const serviceInput = form.querySelector("[data-discount-service]");
    const discount = {
      id: `discount-${Date.now()}`,
      service: serviceInput.value,
      serviceLabel: serviceInput.selectedOptions[0]?.textContent || serviceInput.value,
      percentage: Number(form.querySelector("[data-discount-percentage]").value),
      start,
      end,
      priority: Number(form.querySelector("[data-discount-priority]").value),
      stackable: form.querySelector("[data-discount-stackable]").value,
      cap: form.querySelector("[data-discount-cap]").value.trim(),
      base: form.querySelector("[data-discount-base]").value,
      active: true,
    };
    const discounts = getOperatorDiscounts();
    discounts.push(discount);
    localStorage.setItem(OPERATOR_DISCOUNTS_STORAGE_KEY, JSON.stringify(discounts));
    window.location.href = withTheme("admin-descuentos.html", getTheme());
  });
}

function setupOperatorEditDiscount() {
  if (document.body.dataset.screen !== "operator-edit-discount") return;
  guardOperatorAdminOnlyScreen("admin-descuentos.html");
  const form = document.querySelector("[data-edit-discount-form]");
  const serviceSelect = form?.querySelector("[data-discount-service]");
  getOperatorCatalogServiceOptions().forEach(({ key, label }) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = label;
    serviceSelect?.append(option);
  });
  const feedback = form?.querySelector("[data-discount-feedback]");
  const id = new URLSearchParams(window.location.search).get("id") || "";
  const discounts = getOperatorDiscounts();
  let discount = discounts.find((item) => item.id === id);
  const isUnstructuredLegacy = !discount && id === "legacy-tour-montanas";
  if (!discount && !isUnstructuredLegacy) {
    if (feedback) feedback.textContent = "No se encontró el descuento seleccionado. Vuelve a Descuentos e ingresa nuevamente por Editar parámetros.";
    form?.querySelectorAll("input, select, button").forEach((el) => { el.disabled = true; });
    return;
  }
  if (isUnstructuredLegacy) {
    discount = { id, percentage: 20, end: "2026-09-30" };
    if (feedback) feedback.textContent = "Esta promoción no tenía parámetros estructurados previos: confirma servicio, vigencia desde, prioridad, acumulable y base de cálculo antes de guardar.";
  }
  if (discount.service) serviceSelect.value = discount.service;
  if (discount.percentage != null) form.querySelector("[data-discount-percentage]").value = discount.percentage;
  if (discount.start) form.querySelector("[data-discount-start]").value = discount.start;
  if (discount.end) form.querySelector("[data-discount-end]").value = discount.end;
  if (discount.priority != null) form.querySelector("[data-discount-priority]").value = discount.priority;
  if (discount.stackable) form.querySelector("[data-discount-stackable]").value = discount.stackable;
  if (discount.cap) form.querySelector("[data-discount-cap]").value = discount.cap;
  if (discount.base) form.querySelector("[data-discount-base]").value = discount.base;
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const start = form.querySelector("[data-discount-start]").value;
    const end = form.querySelector("[data-discount-end]").value;
    const percentageValue = form.querySelector("[data-discount-percentage]").value;
    const priorityValue = form.querySelector("[data-discount-priority]").value;
    const baseValue = form.querySelector("[data-discount-base]").value;
    const percentage = Number(percentageValue);
    const missingRequired = !start || !end || !priorityValue || !percentageValue || !baseValue;
    if (missingRequired || !form.checkValidity() || percentage < 1 || percentage > 100 || end < start) {
      feedback.textContent = "Completa vigencia desde, vigencia hasta, prioridad, porcentaje y base de cálculo (el porcentaje entre 1 y 100, y la vigencia hasta no anterior a la vigencia desde) antes de guardar.";
      return;
    }
    const capText = form.querySelector("[data-discount-cap]").value.trim();
    if (capText && !(parseCOP(capText) > 0)) {
      feedback.textContent = "El tope debe ser un valor en pesos mayor a cero (por ejemplo $50.000) o dejarse vacío.";
      return;
    }
    const serviceInput = form.querySelector("[data-discount-service]");
    const updated = {
      id,
      service: serviceInput.value,
      serviceLabel: serviceInput.selectedOptions[0]?.textContent || serviceInput.value,
      percentage,
      start,
      end,
      priority: Number(priorityValue),
      stackable: form.querySelector("[data-discount-stackable]").value,
      cap: form.querySelector("[data-discount-cap]").value.trim(),
      base: baseValue,
      active: true,
    };
    const index = discounts.findIndex((item) => item.id === id);
    if (index === -1) discounts.push(updated); else discounts[index] = updated;
    localStorage.setItem(OPERATOR_DISCOUNTS_STORAGE_KEY, JSON.stringify(discounts));
    window.location.href = withTheme("admin-descuentos.html", getTheme());
  });
}

function setupOperatorNewService() {
  if (document.body.dataset.screen !== "operator-new-service") return;
  guardOperatorAdminOnlyScreen("admin-catalogos.html");
  const form = document.querySelector("[data-new-service-form]");
  const formGrid = form?.querySelector(".operator-form-grid");
  const priceLabel = form?.querySelector("[data-service-price]")?.closest("label");
  if (priceLabel?.firstChild) priceLabel.firstChild.nodeValue = "Tarifa base";
  formGrid?.insertAdjacentHTML("beforeend", '<label data-operational-field>Capacidad / cupo<input data-service-capacity type="number" min="1" inputmode="numeric" placeholder="Opcional" /></label><label data-operational-field>Restricciones operativas<textarea data-service-restrictions placeholder="Opcional: condiciones que limitan la disponibilidad"></textarea></label>'
    + '<label data-operational-field data-transport-field hidden>Trayecto (origen - destino o descripción)<input data-service-route type="text" placeholder="Por configurar" /></label>'
    + '<label data-operational-field data-tour-field hidden>¿Incluye transporte?<select data-tour-includes-transport><option value="no">No</option><option value="si">Sí</option></select></label>'
    + '<label data-operational-field data-tour-field hidden>Transporte asociado<select data-tour-transport-key><option value="">Selecciona un transporte activo</option></select></label>'
    + '<p class="operator-form-feedback operator-form-wide" data-tour-transport-empty hidden>No hay transportes activos disponibles. Crea o activa uno en Gestionar transporte antes de asociarlo a este Tour.</p>'
    + '<p class="operator-eyebrow operator-form-wide" data-tour-transport-config hidden>CONFIGURACIÓN DEL TRANSPORTE</p>'
    + '<p class="operator-copy operator-form-wide" data-tour-transport-config hidden>Si el transporte ya tiene datos, se precargan aquí; si no, complétalos directamente. Se guardan sobre el mismo recurso de Transporte, salvo la tarifa por persona, que queda propia de este Tour (RN-TRA-002).</p>'
    + '<label data-tour-transport-config hidden>Trayecto<input data-tour-transport-route type="text" placeholder="Por configurar" /></label>'
    + '<label data-tour-transport-config hidden>Tarifa por persona (para este Tour)<input data-tour-transport-tariff type="number" min="1" inputmode="numeric" placeholder="Por configurar" /></label>'
    + '<label data-tour-transport-config hidden>Capacidad del transporte<input data-tour-transport-capacity type="number" min="1" inputmode="numeric" placeholder="Por configurar" /></label>'
    + '<label data-tour-transport-config hidden>Costo base (interno, no se cobra al cliente)<input data-tour-transport-cost type="number" min="1" inputmode="numeric" placeholder="Por configurar" /></label>'
    + '<div class="operator-form-wide operator-detail-list" data-tour-transport-config hidden><div><span>Capacidad del Tour</span><strong data-tour-capacity-display>Por configurar</strong></div><div><span>Capacidad del Transporte</span><strong data-transport-capacity-display>Por configurar</strong></div></div>'
    + '<p class="operator-form-feedback operator-form-wide" data-tour-transport-config hidden>Capacidad Tour ≠ Capacidad Transporte: son independientes, ninguna se copia sobre la otra. La reserva valida ambas cuando corresponda.</p>');
  const image = form?.querySelector("[data-service-image]");
  const imageLabel = image?.closest("label");
  const kindSelect = form?.querySelector("[data-service-kind]");
  const establishmentTypeSelect = form?.querySelector("[data-establishment-type]");
  const operationalFields = form?.querySelectorAll("[data-operational-field]");
  const establishmentFields = form?.querySelectorAll("[data-establishment-field]");
  const ESTABLISHMENT_IMAGE_LABELS = { hotel: "Imagen del hotel", restaurant: "Imagen del restaurante" };
  const syncServiceKind = () => {
    const isEstablishment = kindSelect?.value === "establishment";
    operationalFields?.forEach((field) => { field.hidden = isEstablishment; });
    establishmentFields?.forEach((field) => { field.hidden = !isEstablishment; });
    // Los campos ocultos se deshabilitan para que sus "required" no bloqueen la validación.
    operationalFields?.forEach((field) => field.querySelectorAll("input, select, textarea").forEach((control) => { control.disabled = isEstablishment; }));
    establishmentFields?.forEach((field) => field.querySelectorAll("input, select, textarea").forEach((control) => { control.disabled = !isEstablishment; }));
    if (imageLabel?.firstChild) {
      imageLabel.firstChild.nodeValue = isEstablishment
        ? ESTABLISHMENT_IMAGE_LABELS[establishmentTypeSelect?.value] || ESTABLISHMENT_IMAGE_LABELS.hotel
        : "Imagen del servicio";
    }
  };
  syncServiceKind();
  kindSelect?.addEventListener("change", syncServiceKind);
  establishmentTypeSelect?.addEventListener("change", syncServiceKind);

  // Tour <-> Transporte (RN-TRA-001/002): solo aplica cuando Tipo = "Tour o actividad".
  // Mismo comportamiento ya aprobado en el Portal Angular.
  const typeSelect = form?.querySelector("[data-service-type]");
  const transportField = form?.querySelector("[data-transport-field]");
  const tourFields = form?.querySelectorAll("[data-tour-field]");
  const includesTransportSelect = form?.querySelector("[data-tour-includes-transport]");
  const transportKeySelect = form?.querySelector("[data-tour-transport-key]");
  const transportEmptyMsg = form?.querySelector("[data-tour-transport-empty]");
  const transportConfigEls = form?.querySelectorAll("[data-tour-transport-config]");
  const transportRouteInput = form?.querySelector("[data-tour-transport-route]");
  const transportTariffInput = form?.querySelector("[data-tour-transport-tariff]");
  const transportCapacityInput = form?.querySelector("[data-tour-transport-capacity]");
  const transportCostInput = form?.querySelector("[data-tour-transport-cost]");
  const tourCapacityDisplay = form?.querySelector("[data-tour-capacity-display]");
  const transportCapacityDisplay = form?.querySelector("[data-transport-capacity-display]");
  const tourCapacityFormInput = form?.querySelector("[data-service-capacity]");

  const hideTransportConfig = () => { transportConfigEls?.forEach((el) => { el.hidden = true; }); };

  const updateCapacityDisplays = () => {
    if (tourCapacityDisplay) tourCapacityDisplay.textContent = tourCapacityFormInput?.value || "Por configurar";
    if (transportCapacityDisplay) transportCapacityDisplay.textContent = transportCapacityInput?.value || "Por configurar";
  };

  const populateTransportOptions = () => {
    const options = getOperatorActiveTransportOptions();
    if (transportKeySelect) {
      // Reconstruir las opciones no debe perder la seleccion actual (syncTransportPanel
      // llama a esta funcion tambien cuando el propio selector de transporte cambia).
      const previousValue = transportKeySelect.value;
      transportKeySelect.innerHTML = '<option value="">Selecciona un transporte activo</option>'
        + options.map((option) => `<option value="${escapeHtml(option.key)}">${escapeHtml(option.name)}</option>`).join("");
      if (options.some((option) => option.key === previousValue)) transportKeySelect.value = previousValue;
    }
    if (transportEmptyMsg) transportEmptyMsg.hidden = options.length > 0;
    return options;
  };

  const syncTransportPanel = () => {
    if (includesTransportSelect?.value !== "si") { hideTransportConfig(); return; }
    const options = populateTransportOptions();
    const option = options.find((o) => o.key === transportKeySelect?.value) || null;
    if (!option) { hideTransportConfig(); return; }
    transportConfigEls?.forEach((el) => { el.hidden = false; });
    if (transportRouteInput) transportRouteInput.value = option.route !== "Por configurar" ? option.route : "";
    if (transportTariffInput) transportTariffInput.value = option.price > 0 ? option.price : "";
    if (transportCapacityInput) transportCapacityInput.value = option.capacity != null ? option.capacity : "";
    if (transportCostInput) transportCostInput.value = option.cost > 0 ? option.cost : "";
    updateCapacityDisplays();
  };

  const syncOperationalType = () => {
    const type = typeSelect?.value;
    if (transportField) transportField.hidden = type !== "transport";
    tourFields?.forEach((field) => { field.hidden = type !== "tour"; });
    // RN-TRA-002: el transporte maneja tarifa por persona; el tour, tarifa base.
    if (priceLabel?.firstChild) priceLabel.firstChild.nodeValue = type === "transport" ? "Tarifa por persona" : "Tarifa base";
    if (type !== "tour") { if (includesTransportSelect) includesTransportSelect.value = "no"; hideTransportConfig(); }
    else syncTransportPanel();
  };

  typeSelect?.addEventListener("change", syncOperationalType);
  includesTransportSelect?.addEventListener("change", () => {
    if (includesTransportSelect.value !== "si" && transportKeySelect) transportKeySelect.value = "";
    syncTransportPanel();
  });
  transportKeySelect?.addEventListener("change", syncTransportPanel);
  tourCapacityFormInput?.addEventListener("input", updateCapacityDisplays);
  transportCapacityInput?.addEventListener("input", updateCapacityDisplays);
  syncOperationalType();

  const preview = form?.querySelector("[data-service-preview]");
  const feedback = form?.querySelector("[data-service-feedback]");
  image?.addEventListener("change", () => {
    const file = image.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => { preview.src = reader.result; preview.dataset.ready = "true"; preview.hidden = false; });
    reader.readAsDataURL(file);
  });
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (kindSelect?.value === "establishment") {
      const email = form.querySelector("[data-establishment-email]")?.value.trim() || "";
      const phone = form.querySelector("[data-establishment-phone]")?.value.trim() || "";
      const address = form.querySelector("[data-establishment-address]")?.value.trim() || "";
      if (!form.checkValidity() || !preview.dataset.ready) {
        feedback.textContent = "Completa el nombre comercial y adjunta una imagen del establecimiento.";
        return;
      }
      if (!email && !phone) {
        feedback.textContent = "Registra al menos un dato de contacto del establecimiento (correo o teléfono).";
        return;
      }
      // Solo nombre, descripción, imagen y datos de contacto: sin capacidad, tarifa ni política
      // de apartamiento (los establecimientos asociados no se reservan en la plataforma).
      const establishment = { id: `establishment-${Date.now()}`, kind: establishmentTypeSelect?.value || "hotel", name: form.querySelector("[data-service-name]").value.trim(), description: form.querySelector("[data-establishment-info]")?.value.trim() || "", image: preview.src, email, phone, address, createdAt: getOperatorNow().toISOString(), createdBy: getOperatorActorLabel() };
      const establishments = getOperatorAssociatedEstablishments();
      establishments.push(establishment);
      localStorage.setItem(OPERATOR_ASSOCIATED_ESTABLISHMENTS_KEY, JSON.stringify(establishments));
      addOperatorEstablishmentAudit(establishment, "Registrado");
      window.location.href = withTheme("admin-catalogos.html", getTheme());
      return;
    }
    const start = form.querySelector("[data-service-start]").value;
    const end = form.querySelector("[data-service-end]").value;
    if (!form.checkValidity() || end < start || !preview.dataset.ready) {
      feedback.textContent = "Completa los datos, adjunta una imagen y define una vigencia válida.";
      return;
    }
    const type = form.querySelector("[data-service-type]").value;
    if (!["tour", "transport"].includes(type)) {
      feedback.textContent = "Solo se crean tours y transporte. Hoteles y restaurantes se registran como establecimientos asociados.";
      return;
    }
    // RN-TRA-001/002: si el Tour declara transporte incluido, debe seleccionarse un
    // recurso de transporte real (activo); nunca se guarda una relacion vacia como "si".
    if (type === "tour" && includesTransportSelect?.value === "si" && !transportKeySelect?.value) {
      feedback.textContent = 'Selecciona un transporte activo para asociarlo a este Tour, o marca "No" si no incluye transporte.';
      return;
    }
    const resource = { id: `resource-${Date.now()}`, name: form.querySelector("[data-service-name]").value.trim(), type, price: Number(form.querySelector("[data-service-price]").value), capacity: Number(form.querySelector("[data-service-capacity]").value) || null, restrictions: form.querySelector("[data-service-restrictions]").value.trim(), start, end, policy: form.querySelector("[data-service-policy]").value, image: preview.src, active: true };
    // RN-TRA-001 (trayecto): solo tiene sentido para type === "transport"; no se inventa
    // uno para el resto de tipos ni si el campo quedo vacio.
    if (type === "transport") {
      const routeValue = form.querySelector("[data-service-route]")?.value.trim();
      if (routeValue) resource.route = routeValue;
    }
    const catalog = getOperatorCatalog();
    catalog.push(resource);
    localStorage.setItem(OPERATOR_CATALOG_STORAGE_KEY, JSON.stringify(catalog));
    if (type === "tour" && includesTransportSelect?.value === "si") {
      const transportKey = transportKeySelect.value;
      // Trayecto/capacidad/costo: configuracion global del recurso de Transporte (mismo
      // mecanismo que Configurar transporte, reutilizado aqui para no duplicar logica).
      updateOperatorTransportResourceConfig(transportKey, {
        route: transportRouteInput?.value || "",
        capacity: transportCapacityInput?.value ? Number(transportCapacityInput.value) : null,
        cost: transportCostInput?.value ? Number(transportCostInput.value) : 0,
      });
      // Tarifa por persona: especifica de este Tour (RN-TRA-002).
      const tariffOverride = transportTariffInput?.value ? Number(transportTariffInput.value) : undefined;
      setOperatorTourTransportLink(resource.id, transportKey, tariffOverride);
    }
    window.location.href = withTheme("admin-catalogos.html", getTheme());
  });
}

function renderClientCatalogProducts() {
  const screen = document.body.dataset.screen;
  const typeByScreen = { tours: "tour" };
  const type = typeByScreen[screen];
  if (!type) return;
  const grid = document.querySelector(".travel-tours-grid");
  if (!grid) return;
  const formatter = new Intl.NumberFormat("es-CO");
  getOperatorCatalog().filter((item) => item.type === type && item.active).forEach((item) => {
    const card = document.createElement("article");
    card.className = "travel-tour-card";
    card.innerHTML = `<div class="travel-tour-media" style="background-image:url('${item.image}')"></div><div class="travel-tour-body"><strong>${escapeHtml(item.name)}</strong><span class="travel-tour-location">Vigencia: ${escapeHtml(item.start)} - ${escapeHtml(item.end)}</span><div class="travel-tour-meta"><div><small>Desde</small><em>$${formatter.format(item.price)}</em></div><button type="button">Ver detalle</button></div></div>`;
    grid.append(card);
  });
}

// Tope del descuento adicional (porcentaje máximo sobre el valor vigente después del descuento
// general), parametrizable por el Administrador del tenant. Valor de demostración del mockup.
const OPERATOR_ADDITIONAL_DISCOUNT_CAP_PERCENT = 20;

function setupOperatorApplyDiscount() {
  if (document.body.dataset.screen !== "operator-apply-discount") return;
  // Solo el Administrador del tenant autoriza descuentos adicionales.
  if (!guardOperatorAdminOnlyScreen("admin-reservas.html")) return;
  const form = document.querySelector("[data-apply-discount-form]");
  const feedback = form?.querySelector("[data-apply-discount-feedback]");
  const code = new URLSearchParams(window.location.search).get("reservation") || "";
  const reservation = code ? getUnifiedOperatorReservation(code) : null;
  const disableForm = () => form?.querySelectorAll("input, textarea, button").forEach((el) => { el.disabled = true; });
  if (!reservation) {
    if (feedback) feedback.textContent = "No se encontró la reserva seleccionada. Vuelve a Reservas e ingresa nuevamente por Aplicar descuento.";
    disableForm();
    return;
  }
  if (!isReservationEligibleForAdditionalDiscount(reservation.statusClass)) {
    if (feedback) feedback.textContent = `Esta reserva está en estado "${reservation.status}" y ya no admite modificaciones: no se puede aplicar un descuento adicional.`;
    disableForm();
    return;
  }
  const existing = getOperatorReservationAdjustment(code);
  form.querySelector("[data-reservation-code-field]").value = `#${code}`;
  form.querySelector("[data-reservation-customer-field]").value = reservation.customer;
  form.querySelector("[data-reservation-service-field]").value = reservation.service;
  form.querySelector("[data-reservation-value-field]").value = reservation.final;
  const generalField = form.querySelector("[data-reservation-general-discount-field]");
  if (generalField) generalField.value = reservation.discount && reservation.discount !== "$0" ? `${reservation.discount} (fijado al crear la reserva)` : "Sin descuento general";
  const paidField = form.querySelector("[data-reservation-paid-field]");
  if (paidField) paidField.value = reservation.paid;
  // Contexto comercial fijado y, si la reserva fue modificada, el desglose por componentes sobre el
  // que se recalcula el descuento adicional (RF-005B, GAP-018).
  const modificationOfReservation = getOperatorReservationModification(code);
  const contextPanelHost = form.querySelector("section.operator-panel");
  if (contextPanelHost && !form.querySelector("[data-commercial-panel]")) {
    contextPanelHost.insertAdjacentHTML("afterend", `<section class="operator-panel mt-compact-panel" data-commercial-panel>${renderOperatorCommercialContextHtml(reservation)}${modificationOfReservation?.components ? `<p class="mt-muted">La reserva fue modificada: el descuento adicional se aplica sobre el subtotal recalculado (${formatCOP(modificationOfReservation.finalBase ?? reservation.value)}) y los componentes conservan sus reglas.</p>${renderOperatorComponentsHtml(modificationOfReservation.components)}` : ""}</section>`);
  }
  if (existing) {
    if (feedback) feedback.textContent = `Esta reserva ya tiene un descuento adicional autorizado (${existing.percentage} % el ${formatOperatorTenantDateTime(existing.appliedAt)} por ${existing.appliedBy}). Solo se autoriza un descuento adicional por reserva.`;
    disableForm();
    return;
  }
  const currentValue = reservation.value;
  const paidValue = reservation.paidValue;
  const cap = OPERATOR_ADDITIONAL_DISCOUNT_CAP_PERCENT;
  const percentageInput = form.querySelector("[data-adjustment-percentage]");
  const newValueField = form.querySelector("[data-adjustment-new-value]");
  const capField = form.querySelector("[data-adjustment-cap]");
  const surplusField = form.querySelector("[data-adjustment-surplus]");
  percentageInput.max = String(cap);
  if (capField) capField.value = `${cap} % del valor vigente`;
  const updateNewValue = () => {
    const percentage = Number(percentageInput.value) || 0;
    const newValue = Math.round(currentValue * (1 - percentage / 100));
    newValueField.value = formatCOP(newValue);
    if (surplusField) surplusField.value = paidValue > newValue ? formatCOP(paidValue - newValue) : "$0 (sin excedente)";
  };
  updateNewValue();
  percentageInput.addEventListener("input", updateNewValue);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const percentage = Number(percentageInput.value);
    const reason = form.querySelector("[data-adjustment-reason]").value.trim();
    if (!reason) {
      feedback.textContent = "Describe el motivo obligatorio del descuento adicional.";
      feedback.classList.remove("is-valid");
      return;
    }
    if (!(percentage >= 1) || percentage > cap) {
      feedback.textContent = `El descuento adicional debe estar entre 1 % y el tope parametrizado de ${cap} %.`;
      feedback.classList.remove("is-valid");
      return;
    }
    const newValue = Math.round(currentValue * (1 - percentage / 100));
    setOperatorReservationAdjustment(code, {
      percentage,
      reason,
      appliedAt: getOperatorNow().toISOString(),
      appliedBy: getOperatorActorLabel(),
      previousValue: currentValue,
      newValue,
      history: [],
    });
    let message = "Descuento adicional aplicado correctamente: el valor final se recalculó y quedaron registrados el motivo y el responsable.";
    // Excedente por modificación (L7): si el nuevo valor queda por debajo de lo ya pagado, el
    // excedente recibe el tratamiento de una modificación (devolución del 100 % por defecto o
    // saldo a favor, decisión del Administrador del tenant en 24 horas).
    if (paidValue > newValue) {
      const determination = computeOperatorRefundDetermination({ paid: paidValue - newValue, origin: "modificacion" });
      setOperatorRefundOrigin(code, {
        type: "Descuento adicional",
        causal: `Descuento adicional del ${percentage} %: ${reason}`,
        origin: determination.origin,
        potentialAmount: formatCOP(determination.amount),
        potentialValue: determination.amount,
        penalty: 0,
        penaltyPercent: 0,
        ruleLabel: determination.ruleLabel,
        pendingCalculation: false,
        registeredAt: getOperatorNow().toISOString(),
      });
      message += ` El valor pagado supera el nuevo valor: excedente de ${formatCOP(determination.amount)} pendiente de tratamiento (continúa desde el detalle de la reserva con Gestionar devolución).`;
    }
    feedback.textContent = message;
    feedback.classList.add("is-valid");
    disableForm();
    window.setTimeout(() => {
      window.location.href = withTheme(`admin-detalle-reserva.html?reservation=${encodeURIComponent(code)}`, getTheme());
    }, 2200);
  });
}


// El catalogo de Catálogos (OPERATOR_CATALOG_DEFAULTS) todavia no modela medios de pago
// aceptados ni inclusiones por servicio. Estos datos complementarios YA aprobados para los 4
// tours base se conservan aqui, ligados al MISMO key/nombre ya usado en Catálogos: la
// identidad, tarifa, vigencia y estado activo/inactivo del servicio siempre se leen en vivo
// desde Catálogos, nunca desde esta lista.
// CORRECCION PDR v1.7.1: el PDR no define una parametrizacion independiente de "salidas". La
// fecha del servicio se selecciona dentro de la vigencia de oferta (ver PDR
// 03-product/prd.md linea 1006), por lo que este mapa ya no expone una lista propia de fechas.
// AJUSTE (Tour <-> Transporte real): "inclusions" ya no declara un texto fijo de
// transporte ("Transporte incluido: ..."). La informacion de transporte de cada Tour sale
// exclusivamente de la relacion real Tour -> Transporte (getOperatorTourTransport),
// nunca de un texto hardcodeado aqui. Mismo ajuste ya aprobado en el Portal Angular.
// Cada entrada puede definir minDepositPercent (abono mínimo sobre el valor final después de
// descuentos; 30 % por defecto) y cancellationPenaltyPercent (penalidad de cancelación solicitada
// por el cliente; 0 % por defecto), parametrizables por servicio.
const OPERATOR_KNOWN_TOUR_DETAILS = {
  "Tour destino ejemplo - Montañas": {
    discount: 0.2, risk: false, payments: ["Transferencia", "Efectivo", "Abono"],
    inclusions: ["Alimentación incluida: plato del día"],
    conditions: ["La modificación o cancelación depende de las condiciones vigentes del tour.", "La disponibilidad y los valores se validan antes de registrar la reserva."],
  },
  "Aventura en cenotes ocultos": {
    discount: 0, risk: false, payments: ["Transferencia", "Efectivo", "Abono"],
    inclusions: ["Alimentación incluida: snack ligero"],
    conditions: ["La modificación o cancelación depende de las condiciones vigentes del tour.", "La disponibilidad y los valores se validan antes de registrar la reserva."],
  },
  "Rafting y acampada extrema": {
    discount: 0, risk: true, payments: ["Transferencia", "Abono"],
    inclusions: ["Alimentación incluida: refrigerio de la actividad"],
    conditions: ["La actividad requiere requisitos de riesgo para cada viajero.", "La modificación o cancelación depende de las condiciones vigentes del servicio."],
  },
  "Recorrido cultural e histórico": {
    discount: 0, risk: false, payments: ["Transferencia", "Efectivo"],
    inclusions: ["Alimentación incluida: opción gastronómica del recorrido"],
    conditions: ["La modificación o cancelación depende de las condiciones vigentes del servicio.", "Los descuentos se aplican según la configuración comercial vigente."],
  },
};
const OPERATOR_GENERIC_CONDITION = "La disponibilidad y los valores se validan antes de registrar la reserva.";
// PDR (linea 633): modalidades de pago soportadas en Fase 1 para el tenant.
const OPERATOR_DEFAULT_PAYMENT_METHODS = ["Transferencia", "Efectivo", "Abono"];

// Regla 1/2/3/6: el catalogo de "Servicio principal" se construye en vivo desde el MISMO
// catalogo ya usado en Catálogos (solo activos y vigentes, incluyendo actualizaciones de
// datos), sin listas independientes ni servicios hardcodeados.
// CORRECCION PDR v1.7.1 (03-product/prd.md linea 1006): el PDR no define una
// parametrizacion independiente de "salidas". La disponibilidad del servicio depende de que
// este activo, dentro de su vigencia de oferta y sin restricciones operativas que lo excluyan
// para la fecha consultada; por eso "Crear reserva" ya no lista fechas discretas, sino que
// permite elegir cualquier fecha dentro del rango de vigencia (start/end) del servicio.
function getOperatorReservationServiceCatalog() {
  const services = {};
  const tourCatalogId = "catalogo-catalog-panel";

  OPERATOR_CATALOG_DEFAULTS[tourCatalogId].records.forEach((record) => {
    if (!resolveOperatorServiceActive(tourCatalogId, record.key, record.active)) return;
    const fields = getOperatorServiceFields(tourCatalogId, record.key) || record.fields;
    const details = OPERATOR_KNOWN_TOUR_DETAILS[record.key];
    const [validityStart, validityEnd] = (fields.validity || "").split(" - ");
    services[record.key] = {
      name: fields.name || record.key,
      price: parseCOP(fields.tariff),
      discount: details ? details.discount : 0,
      risk: details ? details.risk : false,
      start: parseOperatorDate(validityStart),
      end: parseOperatorDate(validityEnd) || parseOperatorDate(validityStart),
      payments: details ? details.payments : OPERATOR_DEFAULT_PAYMENT_METHODS,
      inclusions: details ? details.inclusions : [],
      conditions: details ? details.conditions : [OPERATOR_GENERIC_CONDITION],
      // RN-TRA-001/002: transporte REAL asociado a este Tour (relacion configurada en
      // Nuevo servicio), resuelto en vivo. null si el Tour no tiene transporte asociado, o
      // si el transporte asociado ya no esta activo. Nunca se hardcodea un trayecto/tarifa.
      associatedTransport: getOperatorTourTransport(record.key),
    };
  });
  getOperatorCatalog().forEach((resource) => {
    if (resource.type !== "tour" || !resource.active) return;
    const key = resource.id || resource.name;
    services[key] = {
      name: resource.name,
      price: resource.price,
      discount: 0,
      risk: false,
      start: resource.start,
      end: resource.end,
      payments: OPERATOR_DEFAULT_PAYMENT_METHODS,
      inclusions: [],
      conditions: [resource.policy || OPERATOR_GENERIC_CONDITION],
      associatedTransport: getOperatorTourTransport(resource.id),
    };
  });
  return services;
}

// --- Clientes registrados del tenant (búsqueda y vinculación; RF-003, L9, Q5, R1, CA-024) -----------
const OPERATOR_CUSTOMERS_KEY = "multitour-operator-customers";
const OPERATOR_CUSTOMER_RESOLUTIONS_KEY = "multitour-operator-customer-resolutions";
const OPERATOR_BASE_CUSTOMERS = [
  { id: "cli-1001", name: "Laura Gómez", document: "1.032.456.789", email: "laura.gomez@ejemplo.com", phone: "300 111 2233", birth: "1991-04-12", verified: true },
  { id: "cli-1002", name: "Mateo Ríos", document: "1.020.333.444", email: "mateo.rios@ejemplo.com", phone: "311 222 3344", birth: "1989-09-02", verified: false, source: "registro manual" },
  { id: "cli-1003", name: "Carolina Díaz", document: "52.778.901", email: "carolina.diaz@ejemplo.com", phone: "310 555 6677", birth: "1985-01-30", verified: true },
  { id: "cli-1004", name: "Juliana Cruz", document: "1.098.765.432", email: "juliana.cruz@ejemplo.com", phone: "320 444 8899", birth: "1994-07-21", verified: true },
  { id: "cli-1005", name: "Andrés Silva", document: "80.123.456", email: "andres.silva@ejemplo.com", phone: "301 777 1122", birth: "1980-11-05", verified: true },
  { id: "cli-1006", name: "Paula Méndez", document: "1.045.222.333", email: "paula.mendez@ejemplo.com", phone: "315 888 4455", birth: "1996-03-18", verified: true },
];

function normalizeOperatorEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function normalizeOperatorDocument(value) {
  return String(value || "").trim().toLowerCase().replace(/[^a-z0-9]/g, "");
}

function getOperatorCustomers() {
  const resolutions = readOperatorStorage(OPERATOR_CUSTOMER_RESOLUTIONS_KEY, {});
  return [...OPERATOR_BASE_CUSTOMERS, ...readOperatorStorage(OPERATOR_CUSTOMERS_KEY, [])].map((customer) => (resolutions[customer.id] ? { ...customer, verified: true, verification: resolutions[customer.id] } : customer));
}

function saveOperatorCustomer(customer) {
  const stored = readOperatorStorage(OPERATOR_CUSTOMERS_KEY, []).filter((item) => item.id !== customer.id);
  stored.push(customer);
  writeOperatorStorage(OPERATOR_CUSTOMERS_KEY, stored);
}

// Solo el Administrador del tenant resuelve una coincidencia de correo no verificado: verifica
// la propiedad del correo y vincula (R1). Nunca se fusionan registros automáticamente.
function resolveOperatorCustomerEmailMatch(customerId) {
  if (!isOperatorAdmin()) return { ok: false, error: "Solo el Administrador del tenant resuelve una coincidencia de correo no verificado." };
  const resolutions = readOperatorStorage(OPERATOR_CUSTOMER_RESOLUTIONS_KEY, {});
  resolutions[customerId] = { at: getOperatorNow().toISOString(), by: getOperatorActorLabel() };
  writeOperatorStorage(OPERATOR_CUSTOMER_RESOLUTIONS_KEY, resolutions);
  return { ok: true };
}

function setupOperatorReservationForm() {
  const form = document.querySelector('[data-form="operator-reservation"]');
  if (!form) return;

  const tenant = getPlatformTenants().find((item) => item.id === OPERATOR_CURRENT_TENANT_ID);
  form.closest("body")?.querySelectorAll("[data-tenant-name]").forEach((node) => { node.textContent = tenant?.name || OPERATOR_CURRENT_TENANT_NAME; });

  const services = getOperatorReservationServiceCatalog();
  const serviceSelect = form.querySelector("[data-reservation-service]");
  if (serviceSelect) {
    serviceSelect.innerHTML = '<option value="">Selecciona un tour</option>' +
      Object.keys(services).map((key) => `<option value="${escapeHtml(key)}">${escapeHtml(services[key].name)}</option>`).join("");
  }
  const departureSelect = form.querySelector("[data-reservation-departure]");
  const departureHint = form.querySelector("[data-reservation-departure-hint]");
  const travelerInput = form.querySelector("[data-reservation-travelers]");
  const vehiclesInfo = form.querySelector("[data-departure-vehicles-info]");
  const transportIncludedMessage = form.querySelector("[data-transport-included-message]");
  const transportDetail = form.querySelector("[data-transport-detail]");
  const transportCapacityMessage = form.querySelector("[data-transport-capacity]");
  const holderDocument = form.querySelector("[data-holder-document]");
  const holderName = form.querySelector("[data-holder-name]");
  const holderEmail = form.querySelector("[data-holder-email]");
  const holderPhone = form.querySelector("[data-holder-phone]");
  const holderBirth = form.querySelector("[data-holder-birth]");
  const companionList = form.querySelector("[data-companion-list]");
  const companionCount = form.querySelector("[data-companion-count]");
  const riskSection = form.querySelector("[data-risk-section]");
  const riskList = form.querySelector("[data-risk-list]");
  // Tipo de pago (Pago total / Abono) y medio de pago (Transferencia / Efectivo) son campos
  // independientes (RN-RES-004, E4).
  const paymentTypeSelect = form.querySelector("[data-payment-type]");
  const paymentMediumSelect = form.querySelector("[data-payment-medium]");
  const paymentNote = form.querySelector("[data-payment-deadline-note]");
  const conditions = form.querySelector("[data-reservation-conditions]");
  const inclusions = form.querySelector("[data-service-inclusions]");
  const feedback = form.querySelector("[data-reservation-feedback]");
  const registerButton = form.querySelector("[data-register-reservation]");
  const projectedNode = form.querySelector("[data-projected-value]");
  const discountNode = form.querySelector("[data-discount-value]");
  const finalNode = form.querySelector("[data-final-value]");
  const capacityInfo = form.querySelector("[data-departure-capacity-info]");
  const searchInput = form.querySelector("[data-customer-search]");
  const searchResults = form.querySelector("[data-customer-results]");
  const matchNotice = form.querySelector("[data-customer-match-notice]");
  const matchActions = form.querySelector("[data-customer-match-actions]");

  const formatCurrency = (value) => `$${Math.round(value).toLocaleString("es-CO")}`;
  const selectedService = () => services[serviceSelect.value];
  const travelers = () => Math.max(1, Number.parseInt(travelerInput.value, 10) || 1);
  const selectedDeparture = () => (departureSelect?.value ? getOperatorDeparture(departureSelect.value) : null);
  let linkedCustomer = null;

  // El transporte pertenece al tour (prestado por el operador); la capacidad de los vehículos
  // asignados a la SALIDA restringe su cupo (RN-SAL-001). Aquí no se elige un vehículo.
  const transportOption = () => selectedService()?.associatedTransport || null;
  const transportCost = () => {
    const option = transportOption();
    return option ? option.price * travelers() : 0;
  };

  // --- Cliente existente / coincidencia de correo ---------------------------------------------
  const findEmailMatch = () => {
    const email = normalizeOperatorEmail(holderEmail?.value);
    if (!email) return null;
    return getOperatorCustomers().find((customer) => normalizeOperatorEmail(customer.email) === email && (!linkedCustomer || linkedCustomer.id !== customer.id)) || null;
  };
  const renderMatch = () => {
    const match = findEmailMatch();
    if (matchNotice) {
      matchNotice.hidden = !match;
      if (match) {
        matchNotice.textContent = match.verified
          ? `Existe una cuenta con este correo verificado (${match.name}). Se vincula a esa identidad en lugar de crear un duplicado.`
          : `Existe otro registro con el mismo correo sin verificar (${match.name}). Multitour no crea el duplicado ni fusiona registros automáticamente: la coincidencia la resuelve el Administrador del tenant verificando la propiedad del correo y vinculando, o corrigiendo la información si son personas distintas o el correo es incorrecto.`;
      }
    }
    if (matchActions) {
      matchActions.hidden = !match;
      matchActions.innerHTML = match
        ? (match.verified || isOperatorAdmin()
          ? `<button type="button" class="operator-outline" data-customer-link="${escapeHtml(match.id)}">${match.verified ? "Vincular con la cuenta verificada" : "Confirmar propiedad del correo y vincular"}</button>`
          : '<span class="operator-copy">Solicita al Administrador del tenant resolver la coincidencia o corrige el correo ingresado.</span>')
        : "";
    }
    return match;
  };
  const linkCustomer = (customer, { verify = false } = {}) => {
    if (verify) {
      const result = resolveOperatorCustomerEmailMatch(customer.id);
      if (!result.ok) { feedback.textContent = result.error; return; }
    }
    linkedCustomer = getOperatorCustomers().find((item) => item.id === customer.id) || customer;
    holderName.value = linkedCustomer.name;
    holderDocument.value = linkedCustomer.document || "";
    holderEmail.value = linkedCustomer.email;
    holderPhone.value = linkedCustomer.phone || holderPhone.value;
    if (holderBirth && linkedCustomer.birth) holderBirth.value = linkedCustomer.birth;
    const status = form.querySelector("[data-customer-linked]");
    if (status) { status.hidden = false; status.textContent = `Reserva vinculada al cliente existente ${linkedCustomer.name} (${linkedCustomer.email}).`; }
    if (searchResults) searchResults.innerHTML = "";
    sync();
  };
  searchInput?.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    const normalizedDoc = normalizeOperatorDocument(query);
    const found = query.length < 2 ? [] : getOperatorCustomers().filter((customer) => customer.name.toLowerCase().includes(query) || normalizeOperatorEmail(customer.email).includes(query) || (normalizedDoc && normalizeOperatorDocument(customer.document).includes(normalizedDoc)));
    if (searchResults) {
      searchResults.innerHTML = found.length
        ? found.map((customer) => `<button type="button" class="operator-outline" data-customer-pick="${escapeHtml(customer.id)}">${escapeHtml(customer.name)} · ${escapeHtml(customer.document || "sin documento")} · ${escapeHtml(customer.email)}${customer.verified ? "" : " · correo sin verificar"}</button>`).join("")
        : (query.length < 2 ? "" : '<span class="operator-copy">Sin coincidencias: se registrará como cliente nuevo.</span>');
    }
  });
  form.addEventListener("click", (event) => {
    const pick = event.target.closest("[data-customer-pick]");
    if (pick) { const customer = getOperatorCustomers().find((item) => item.id === pick.dataset.customerPick); if (customer) linkCustomer(customer); return; }
    const link = event.target.closest("[data-customer-link]");
    if (link) { const customer = getOperatorCustomers().find((item) => item.id === link.dataset.customerLink); if (customer) linkCustomer(customer, { verify: !customer.verified }); }
  });
  holderEmail?.addEventListener("input", () => {
    if (linkedCustomer && normalizeOperatorEmail(holderEmail.value) !== normalizeOperatorEmail(linkedCustomer.email)) {
      linkedCustomer = null;
      const status = form.querySelector("[data-customer-linked]");
      if (status) status.hidden = true;
    }
  });

  // --- Salida, transporte y cupo ----------------------------------------------------------------
  const renderDepartureOptions = () => {
    const service = selectedService();
    if (!departureSelect) return;
    if (!service) {
      departureSelect.innerHTML = '<option value="">Selecciona primero un tour</option>';
      departureSelect.disabled = true;
      if (departureHint) departureHint.textContent = "Selecciona primero un tour";
      return;
    }
    const all = getOperatorDepartures().filter((item) => item.tourKey === serviceSelect.value && item.status === "Programada" && new Date(item.startAt) > getOperatorNow());
    departureSelect.disabled = false;
    departureSelect.innerHTML = '<option value="">Selecciona una salida programada</option>' + all.map((item) => `<option value="${escapeHtml(item.id)}"${item.available <= 0 ? " disabled" : ""}>${escapeHtml(item.id)} · ${escapeHtml(item.label)} (fin estimado ${escapeHtml(item.end)}) · ${item.available <= 0 ? "salida llena" : `${item.available} de ${item.effectiveCapacity} cupos disponibles`}</option>`).join("");
    if (departureHint) {
      departureHint.textContent = all.length
        ? "La reserva pertenece a una única salida. Una salida llena no admite nuevas reservas y la creación no aparta cupo: el cupo se aparta con el primer pago."
        : "Este tour no tiene salidas programadas con fecha futura. El Administrador del tenant debe programar una salida antes de reservar.";
    }
  };
  const renderDepartureDetails = () => {
    const departure = selectedDeparture();
    const option = transportOption();
    if (vehiclesInfo) vehiclesInfo.value = departure ? describeOperatorDepartureVehicles(departure) : "Se define con la salida";
    if (capacityInfo) {
      capacityInfo.hidden = !departure;
      if (departure) {
        const full = departure.available <= 0 || travelers() > departure.available;
        capacityInfo.classList.toggle("is-error", full);
        capacityInfo.textContent = departure.available <= 0
          ? `Salida llena (${departure.held} de ${departure.effectiveCapacity} cupos apartados): la reserva no se crea.`
          : travelers() > departure.available
            ? `Capacidad insuficiente: la salida tiene ${departure.available} cupo(s) disponible(s) para ${travelers()} viajeros. La reserva no se crea.`
            : `Capacidad efectiva ${departure.effectiveCapacity} (cupo del tour ${departure.tourCapacity}${departure.vehicles.length ? `, vehículos ${departure.vehicleCapacity}` : ""}) · ${departure.available} cupo(s) disponible(s). La verificación no aparta cupo.`;
      }
    }
    if (transportIncludedMessage) {
      transportIncludedMessage.hidden = !departure;
      transportIncludedMessage.textContent = departure ? `Vehículo(s) de la salida: ${describeOperatorDepartureVehicles(departure)}. El transporte forma parte del tour y se asigna desde la salida; no se elige aquí.` : "";
    }
    if (transportDetail) {
      transportDetail.hidden = !option;
      transportDetail.innerHTML = option ? `<div><span>Transporte del tour</span><strong>${escapeHtml(option.name)}</strong></div><div><span>Trayecto</span><strong>${escapeHtml(option.route)}</strong></div><div><span>Tarifa por persona</span><strong>${option.price > 0 ? formatCurrency(option.price) : "Por configurar"}</strong></div>` : "";
    }
    if (transportCapacityMessage) transportCapacityMessage.hidden = true;
  };

  const renderCompanions = () => {
    const requiredCompanions = Math.max(0, travelers() - 1);
    const previous = [...companionList.querySelectorAll("[data-companion-document]")].map((input) => input.value);
    companionCount.textContent = requiredCompanions === 0 ? "No requiere acompañantes" : `${requiredCompanions} acompañante${requiredCompanions === 1 ? " requerido" : "s requeridos"}`;
    companionList.innerHTML = Array.from({ length: requiredCompanions }, (_, index) => `
      <article class="operator-companion-card">
        <strong>Acompañante ${index + 1}</strong>
        <div class="operator-form-grid">
          <label>Nombre completo<input required type="text" placeholder="Nombre completo" /></label>
          <label>Documento de identidad<input data-companion-document required type="text" value="${escapeHtml(previous[index] || "")}" placeholder="Documento" /></label>
          <label>Fecha de nacimiento<input required type="date" /></label>
        </div>
      </article>`).join("");
  };

  const renderRiskRequirements = (service) => {
    riskSection.hidden = !service?.risk;
    if (!service?.risk) { riskList.innerHTML = ""; return; }
    const people = ["Titular", ...Array.from({ length: Math.max(0, travelers() - 1) }, (_, index) => `Acompañante ${index + 1}`)];
    riskList.innerHTML = people.map((person) => `<article class="operator-risk-card"><strong>${person}</strong><div class="operator-form-grid"><label>Tipo de sangre<input required type="text" placeholder="Ej. O+" /></label><label>Contacto de emergencia<input required type="text" placeholder="Nombre y teléfono" /></label><label class="operator-form-wide">Restricciones físicas o movilidad reducida<textarea required placeholder="Indica restricciones o escribe Ninguna."></textarea></label></div><label class="operator-check"><input required type="checkbox" /> Consentimiento informado o exoneración registrado.</label></article>`).join("");
  };

  const renderPaymentOptions = (service) => {
    if (!paymentTypeSelect || !paymentMediumSelect) return;
    const types = service ? ["Pago total", ...(service.payments.includes("Abono") ? ["Abono"] : [])] : [];
    const media = service ? service.payments.filter((method) => method !== "Abono") : [];
    paymentTypeSelect.innerHTML = '<option value="">Selecciona el tipo de pago</option>' + types.map((type) => `<option value="${type}">${type}</option>`).join("");
    paymentMediumSelect.innerHTML = '<option value="">Selecciona el medio de pago</option>' + media.map((medium) => `<option value="${medium}">${medium}</option>`).join("");
    paymentTypeSelect.disabled = !service;
    paymentMediumSelect.disabled = !service;
  };

  const renderServiceConfiguration = () => {
    const service = selectedService();
    renderDepartureOptions();
    renderPaymentOptions(service);
    inclusions.hidden = !service;
    if (!service) {
      inclusions.innerHTML = "";
      conditions.innerHTML = "<strong>Condiciones de reserva</strong><p>Selecciona un tour para consultar las condiciones parametrizadas.</p>";
      return;
    }
    // La comida es parte del paquete del tour (no un servicio reservable).
    inclusions.hidden = service.inclusions.length === 0;
    inclusions.innerHTML = service.inclusions.length
      ? `<strong>Incluido en el paquete del tour</strong>${service.inclusions.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}`
      : "";
    conditions.innerHTML = `<strong>Condiciones de reserva</strong><ul>${service.conditions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  };

  const renderPaymentNote = () => {
    if (!paymentNote) return;
    const type = paymentTypeSelect?.value;
    const departure = selectedDeparture();
    const paymentParams = getOperatorPaymentParams(selectedService()?.name || "");
    const hours = type === "Abono" ? paymentParams.initialHoursDeposit : paymentParams.initialHoursTotal;
    const service = selectedService();
    const total = service ? Math.round(service.price * travelers() * (1 - service.discount) + transportCost()) : 0;
    const deposit = type === "Abono" && service ? ` Abono mínimo para confirmar: ${formatCurrency(operatorMinimumDeposit(total, service.name))} (${getOperatorMinimumDepositPercent(service.name)} % del valor final).` : "";
    paymentNote.textContent = type
      ? `Plazo inicial de pago: ${hours} horas corridas desde la creación, con una única ampliación registrada; nunca supera la hora programada de inicio de la salida${departure ? ` (${departure.label})` : ""}. La promesa de pago en efectivo no confirma la reserva: se confirma al validar ${type === "Abono" ? "el abono mínimo" : "el 100 % del valor final"}.${deposit}`
      : "El tipo de pago (Pago total o Abono) y el medio (Transferencia o Efectivo) se eligen por separado.";
  };

  const validate = () => {
    const service = selectedService();
    const departure = selectedDeparture();
    const documents = [holderDocument, ...form.querySelectorAll("[data-companion-document]")].map((input) => normalizeOperatorDocument(input.value)).filter(Boolean);
    const duplicatedDocument = documents.some((document, index) => documents.indexOf(document) !== index);
    const match = renderMatch();
    const capacityOk = Boolean(departure && departure.available >= travelers());
    const isValid = Boolean(service && departure && capacityOk && !match && form.checkValidity() && !duplicatedDocument);

    if (!service) feedback.textContent = "Selecciona un tour para consultar sus requisitos y valores.";
    else if (!departure) feedback.textContent = "Selecciona la salida programada: la reserva pertenece a una única salida.";
    else if (!capacityOk) feedback.textContent = departure.available <= 0 ? "La salida está llena: la reserva no se crea." : "La salida no tiene cupo suficiente para esta cantidad de viajeros: la reserva no se crea.";
    else if (match) feedback.textContent = "Resuelve la coincidencia de correo antes de registrar la reserva: no se crean duplicados ni se fusionan registros automáticamente.";
    else if (duplicatedDocument) feedback.textContent = "El documento del titular y los acompañantes debe ser único dentro de la reserva.";
    else if (!form.checkValidity()) feedback.textContent = "Completa los campos obligatorios y registra los requisitos aplicables.";
    else feedback.textContent = "La reserva cumple las validaciones y está lista para registrarse. Quedará Pendiente de pago hasta cumplir la condición de confirmación.";
    feedback.classList.toggle("is-valid", isValid);
    registerButton.disabled = !isValid;
  };

  const renderSummary = () => {
    const service = selectedService();
    const projected = service ? service.price * travelers() + transportCost() : 0;
    const discount = service ? service.price * travelers() * service.discount : 0;
    projectedNode.textContent = formatCurrency(projected);
    discountNode.textContent = discount ? `-${formatCurrency(discount)}` : "$0";
    finalNode.textContent = formatCurrency(projected - discount);
  };

  function sync({ serviceChanged = false } = {}) {
    if (serviceChanged) renderServiceConfiguration();
    renderCompanions();
    renderRiskRequirements(selectedService());
    renderDepartureDetails();
    renderPaymentNote();
    renderSummary();
    validate();
  }

  serviceSelect.addEventListener("change", () => { form.querySelector("[data-conditions-accepted]").checked = false; sync({ serviceChanged: true }); });
  departureSelect?.addEventListener("change", () => sync());
  travelerInput.addEventListener("input", () => sync());
  paymentTypeSelect?.addEventListener("change", () => sync());
  form.addEventListener("input", () => validate());
  form.addEventListener("change", () => validate());
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    validate();
    if (registerButton.disabled) return;

    const service = selectedService();
    const departure = selectedDeparture();
    const code = getNextOperatorReservationCode();
    const projected = service.price * travelers() + transportCost();
    const discount = service.price * travelers() * service.discount;
    const option = transportOption();
    const transportSelected = option ? `Asociado al tour — ${option.name} (${option.route}) · vehículos de la salida: ${describeOperatorDepartureVehicles(departure)}` : (departure.vehicles.length ? `Vehículos de la salida: ${describeOperatorDepartureVehicles(departure)}` : undefined);
    const email = normalizeOperatorEmail(holderEmail.value);
    let customerId = linkedCustomer?.id || "";
    if (!customerId) {
      customerId = `cli-${Date.now()}`;
      saveOperatorCustomer({ id: customerId, name: holderName.value.trim(), document: holderDocument.value.trim(), email, phone: holderPhone.value.trim(), birth: holderBirth.value, verified: false, source: "registro manual" });
    }
    // La reserva se conserva en el almacenamiento local (con borrador en sessionStorage para la
    // navegación inmediata); estado, pagos y saldo se calculan en el modelo unificado. Se crea
    // Pendiente de pago, sin apartar cupo: el cupo se aparta con el primer pago (RN-RES-007).
    saveOperatorCreatedReservation({
      code,
      createdAt: getOperatorTodayDate(),
      createdAtIso: getOperatorNow().toISOString(),
      customer: holderName.value.trim(),
      customerId,
      email,
      service: service.name,
      date: `${formatOperatorDate(departure.date)} · ${departure.start}`,
      departureId: departure.id,
      travelers: travelers(),
      companions: formatOperatorCompanions(travelers()),
      projected: formatCurrency(projected),
      discount: discount ? `-${formatCurrency(discount)}` : "$0",
      final: formatCurrency(projected - discount),
      value: Math.round(projected - discount),
      paymentType: paymentTypeSelect.value,
      paymentMedium: paymentMediumSelect.value,
      transportSelected,
      createdBy: getOperatorActorLabel(),
      commercialContext: buildOperatorCommercialContext(service.name, service.discount * 100),
      paymentParams: getOperatorPaymentParams(service.name),
    });
    window.location.href = withTheme(`admin-reserva-registrada.html?reservation=${encodeURIComponent(code)}`, getTheme());
  });
  sync({ serviceChanged: true });
}

// ===========================================================================
// MODELO UNIFICADO DE RESERVAS Y PAGOS (PDR RN-RES-004, RN-RES-006A/006C, RN-RES-009 y
// sección 16).
//
// Fuente única para todas las pantallas del operador y del cliente. Mantiene separados:
//   - Estado de la reserva: Pendiente de pago, Confirmada, En ejecución, Finalizada, Cancelada.
//   - Estado del comprobante (por comprobante): En validación, Aprobado, Rechazado.
//     "Revisión vencida" es una marca (más de 24 horas corridas En validación), no un estado.
//   - Situación financiera: Sin pago, Parcial, Abono recibido, Saldo pendiente, Pago completo.
//     Se calcula solo con valores efectivamente validados. Saldo pendiente (monto), valores
//     devueltos, saldo a favor y valores en tratamiento pendiente son montos trazables, no
//     estados adicionales.
//   - Tipo de pago (Pago total / Abono) y medio de pago (Transferencia / Efectivo).
//
// Reglas de confirmación: pago total confirma al validar el 100 % del valor final; abono
// confirma al validar como mínimo el abono mínimo del servicio. Un comprobante En validación
// no confirma. Si el monto verificado supera lo pendiente, solo se aplica lo necesario y el
// excedente se registra como saldo a favor del cliente dentro del tenant.
// ===========================================================================
const OPERATOR_RECEIPT_DECISIONS_KEY = "multitour-receipt-decisions";
const OPERATOR_EXTRA_RECEIPTS_KEY = "multitour-extra-receipts";
const OPERATOR_CREDIT_LEDGER_KEY = "multitour-credit-balance";
const OPERATOR_CONFIRMATIONS_KEY = "multitour-reservation-confirmations";
const OPERATOR_PAYMENT_MOVEMENTS_KEY = "multitour-payment-movements";
const OPERATOR_CREATED_RESERVATIONS_KEY = "multitour-operator-created-reservations";
const OPERATOR_RECEIPT_REVIEW_MS = 24 * 60 * 60 * 1000;
const OPERATOR_DEFAULT_MIN_DEPOSIT_PERCENT = 30;
const OPERATOR_FINANCIAL_SITUATIONS = ["Sin pago", "Parcial", "Abono recibido", "Saldo pendiente", "Pago completo"];
const OPERATOR_RECEIPT_STATES = ["En validación", "Aprobado", "Rechazado"];
const OPERATOR_RECEIPT_MAX_BYTES = 5 * 1024 * 1024;

// Comprobantes de transferencia de demostración. Los Aprobados ya están incluidos en el valor
// pagado base de su reserva; los En validación aún no cuentan como pago validado.
const OPERATOR_BASE_RECEIPTS = [
  { id: "RES-1842-R1", code: "RES-1842", customer: "Laura Gómez", method: "Transferencia", amount: "$1.039.200", support: "comprobante-transferencia-RES-1842.pdf", status: "En validación", presentedAt: "2026-09-01T08:00:00-05:00" },
  { id: "RES-1837-R1", code: "RES-1837", customer: "Juliana Cruz", method: "Transferencia", amount: "$1.039.200", support: "comprobante-transferencia-RES-1837.pdf", status: "En validación", presentedAt: "2026-08-31T08:00:00-05:00" },
  { id: "RES-1843-R1", code: "RES-1843", customer: "Paula Méndez", method: "Transferencia", amount: "$1.299.000", support: "comprobante-transferencia-RES-1843.pdf", status: "En validación", presentedAt: "2026-08-31T10:00:00-05:00" },
  { id: "RES-1844-R1", code: "RES-1844", customer: "Daniela Torres", method: "Transferencia", amount: "$100.000", support: "comprobante-transferencia-RES-1844.pdf", status: "Aprobado", presentedAt: "2026-08-30T10:00:00-05:00" },
  { id: "RES-1846-R1", code: "RES-1846", customer: "Andrés Silva", method: "Transferencia", amount: "$1.299.000", support: "comprobante-transferencia-RES-1846.pdf", status: "Aprobado", presentedAt: "2026-08-29T10:00:00-05:00" },
];

const OPERATOR_DEMO_CUSTOMERS = {
  "RES-1843": "Paula Méndez",
  "RES-1844": "Daniela Torres",
  "RES-1845": "Sofía Vargas",
  "RES-1846": "Andrés Silva",
};

function formatOperatorCompanions(travelers) {
  const count = Math.max(Number(travelers || 1) - 1, 0);
  if (count === 0) return "Sin acompañantes";
  return `${count} registrado${count === 1 ? "" : "s"}`;
}

// --- Abono mínimo y penalidad de cancelación (parametrizables por servicio) ---------------
function getOperatorMinimumDepositPercent(serviceName) {
  return getOperatorPaymentParams(serviceName).minDepositPercent;
}

// Abono mínimo calculado sobre el valor final después de aplicar descuentos (RN-RES-004).
function operatorMinimumDeposit(value, serviceName) {
  return Math.ceil((Number(value || 0) * getOperatorMinimumDepositPercent(serviceName)) / 100);
}

// Penalidad vigente de la cancelación solicitada por el cliente (porcentaje sobre lo pagado y
// validado, parametrizable por servicio). Sin parametrización la devolución es del 100 %.
const OPERATOR_DEMO_CANCELLATION_PENALTY = { "Tour destino ejemplo - Montañas": 20, "Tour Montañas": 20 };

function getOperatorCancellationPenaltyPercent(serviceName) {
  return getOperatorPaymentParams(serviceName).cancellationPenaltyPercent;
}

// --- Decisiones sobre comprobantes ----------------------------------------------------
function getOperatorReceiptDecisionLog() {
  const raw = readOperatorStorage(OPERATOR_RECEIPT_DECISIONS_KEY, {});
  const log = {};
  Object.entries(raw).forEach(([code, value]) => {
    const list = Array.isArray(value) ? value : [value];
    log[code] = list.filter(Boolean).map((decision) => ({ receiptId: `${code}-R1`, ...decision }));
  });
  return log;
}

// Guarda la decisión (histórico: nunca se sobrescribe una decisión previa). Trazabilidad:
// actor, fecha y hora, motivo cuando aplica y relación con la reserva y el comprobante.
function setOperatorReceiptDecision(code, data) {
  const log = getOperatorReceiptDecisionLog();
  log[code] = [...(log[code] || []), { ...data, decidedAt: data.decidedAt || getOperatorNow().toISOString() }];
  writeOperatorStorage(OPERATOR_RECEIPT_DECISIONS_KEY, log);
}

function resolveOperatorReceipt(receipt) {
  const decision = (getOperatorReceiptDecisionLog()[receipt.code] || []).find((item) => item.receiptId === receipt.id) || null;
  return {
    ...receipt,
    declaredAmount: parseCOP(receipt.amount),
    status: decision?.status || receipt.status,
    decision,
    verifiedAmount: decision ? Number(decision.verifiedAmount ?? decision.validatedAmount ?? 0) : 0,
    appliedAmount: decision ? Number(decision.appliedAmount ?? decision.validatedAmount ?? 0) : 0,
    surplus: decision ? Number(decision.surplus || 0) : 0,
  };
}

function getOperatorReceiptList(code) {
  const extras = readOperatorStorage(OPERATOR_EXTRA_RECEIPTS_KEY, {})[code] || [];
  return [...OPERATOR_BASE_RECEIPTS.filter((receipt) => receipt.code === code), ...extras]
    .map(resolveOperatorReceipt)
    .sort((a, b) => new Date(a.presentedAt) - new Date(b.presentedAt));
}

// Un registro por reserva: su comprobante más reciente (los anteriores quedan en el histórico).
function getUnifiedReceiptRecords() {
  const extras = readOperatorStorage(OPERATOR_EXTRA_RECEIPTS_KEY, {});
  const codes = new Set([...OPERATOR_BASE_RECEIPTS.map((receipt) => receipt.code), ...Object.keys(extras)]);
  const records = {};
  codes.forEach((code) => {
    const list = getOperatorReceiptList(code);
    if (list.length) records[code] = list[list.length - 1];
  });
  return records;
}

function getOperatorPendingReceipts() {
  return Object.values(getUnifiedReceiptRecords()).filter((receipt) => receipt.status === "En validación");
}

// Marca de revisión vencida: comprobante En validación más de 24 horas corridas (RN-RES-006C).
// No cambia el estado del comprobante, no cancela la reserva ni libera cupos.
function operatorReceiptOverdue(receipt) {
  // La revisión de 24 h se suspende mientras el tenant está inactivo (AC-01).
  return Boolean(receipt && receipt.status === "En validación" && receipt.presentedAt
    && getOperatorNow() >= shiftOperatorDeadlineForSuspension(receipt.presentedAt, new Date(new Date(receipt.presentedAt).getTime() + OPERATOR_RECEIPT_REVIEW_MS)));
}

// --- Saldo a favor, pagos en efectivo y confirmaciones ------------------------------------
function getOperatorCreditEntries(code) {
  return (readOperatorStorage(OPERATOR_CREDIT_LEDGER_KEY, {})[code] || []);
}

function getOperatorCreditBalance(code) {
  return getOperatorCreditEntries(code).reduce((sum, entry) => sum + Number(entry.amount || 0), 0);
}

// Saldo a favor: valor, origen, fecha, actor responsable y reserva de origen (RN-RES-009).
function addOperatorCreditEntry(code, amount, origin, extra = {}) {
  if (!(amount > 0)) return;
  const all = readOperatorStorage(OPERATOR_CREDIT_LEDGER_KEY, {});
  all[code] = [...(all[code] || []), {
    amount,
    origin,
    tenantId: OPERATOR_CURRENT_TENANT_ID,
    reservation: code,
    actor: getOperatorActorLabel(),
    at: getOperatorNow().toISOString(),
    ...extra,
  }];
  writeOperatorStorage(OPERATOR_CREDIT_LEDGER_KEY, all);
}

function getOperatorPaymentMovements(code) {
  return readOperatorStorage(OPERATOR_PAYMENT_MOVEMENTS_KEY, {})[code] || [];
}

function addOperatorPaymentMovement(code, entry) {
  const all = readOperatorStorage(OPERATOR_PAYMENT_MOVEMENTS_KEY, {});
  all[code] = [...(all[code] || []), { registeredAt: getOperatorNow().toISOString(), actor: getOperatorActorLabel(), ...entry }];
  writeOperatorStorage(OPERATOR_PAYMENT_MOVEMENTS_KEY, all);
}

function getOperatorReservationConfirmations() {
  return readOperatorStorage(OPERATOR_CONFIRMATIONS_KEY, {});
}

// Una reserva Confirmada no vuelve a Pendiente de pago aunque cambie su valor (solo cambia
// su situación financiera): la confirmación queda registrada.
function markOperatorReservationConfirmed(code, basis) {
  const all = getOperatorReservationConfirmations();
  if (all[code]) return;
  all[code] = { at: getOperatorNow().toISOString(), actor: getOperatorActorLabel(), basis };
  writeOperatorStorage(OPERATOR_CONFIRMATIONS_KEY, all);
}

// --- Estados derivados -----------------------------------------------------------------
function operatorStatusClass(status) {
  return ({
    "Pendiente de pago": "is-pending",
    "Confirmada": "is-confirmed",
    "En ejecución": "is-execution",
    "Finalizada": "is-finalized",
    "Cancelada": "is-cancelled",
  })[status] || "is-pending";
}

// Situación financiera (sección 16). Se determina a partir de los valores validados:
//   Sin pago        no existe ningún pago validado.
//   Parcial         hay pagos validados que no cumplen la condición de confirmación.
//   Abono recibido  reserva de tipo abono Confirmada con saldo pendiente mayor que cero.
//   Saldo pendiente reserva de tipo pago total Confirmada con una diferencia generada por una
//                   modificación posterior a su confirmación.
//   Pago completo   se validó el 100 % del valor final y el saldo pendiente es cero.
// Una reserva Cancelada no tiene situación financiera: sus valores quedan en tratamiento.
function operatorFinancialSituation(status, type, paid, balance, value) {
  if (status === "Cancelada") return "";
  const p = Number(paid || 0);
  const b = Number(balance || 0);
  if (p <= 0) return "Sin pago";
  if (b <= 0 && Number(value || 0) > 0) return "Pago completo";
  if (["Confirmada", "En ejecución", "Finalizada"].includes(status)) return type === "Abono" ? "Abono recibido" : "Saldo pendiente";
  return "Parcial";
}

// --- Construcción del registro unificado ---------------------------------------------------
function getOperatorExecutedRefundTotal(code) {
  return getOperatorRefundRequests()
    .filter((request) => request.reservationCode === code && request.status === "Ejecutada")
    .reduce((sum, request) => sum + Number(request.amountValue || 0), 0);
}

function operatorBuildReservationRecord(raw) {
  const code = raw.code;
  const originalValue = Number(raw.value || 0);
  let value = originalValue;
  let projected = raw.projected || formatCOP(originalValue);
  let discount = raw.discount || "$0";
  let { service, date, travelers, companions } = raw;

  // Descuento adicional autorizado (solo Administrador del tenant) y modificación de la
  // reserva: recalculan el valor final sin tocar los pagos ya validados.
  const adjustment = getOperatorReservationAdjustment(code);
  if (adjustment) {
    value = adjustment.newValue != null ? Number(adjustment.newValue) : Math.round(originalValue * (1 - adjustment.percentage / 100));
    discount = `-${formatCOP(Math.max(parseCOP(projected) - value, 0))}`;
  }
  const modification = getOperatorReservationModification(code);
  if (modification) {
    ({ service, date, travelers, companions } = modification);
    projected = modification.projected;
    discount = modification.discount;
    value = parseCOP(modification.final);
    // Descuento adicional autorizado después de la modificación: se recalcula sobre el subtotal
    // de la modificación (los componentes conservan las reglas del contexto comercial fijado).
    if (adjustment && modification.finalBase != null && modification.additionalPercent !== adjustment.percentage) {
      value = Math.round(Number(modification.finalBase) * (1 - adjustment.percentage / 100));
      discount = `-${formatCOP(Math.max(parseCOP(projected) - value, 0))}`;
    }
  }

  // Pagos validados: comprobantes aprobados (solo el valor aplicado) y efectivo recibido.
  const decisions = getOperatorReceiptDecisionLog()[code] || [];
  const approved = decisions.filter((decision) => decision.status === "Aprobado");
  const appliedByReceipts = approved.reduce((sum, decision) => sum + Number(decision.appliedAmount ?? decision.validatedAmount ?? 0), 0);
  const treatmentByReceipts = approved.reduce((sum, decision) => sum + Number(decision.pendingTreatment || 0), 0);
  const cashPayments = getOperatorPaymentMovements(code).filter((movement) => movement.kind === "cash" || movement.kind === "credit");
  const appliedByCash = cashPayments.reduce((sum, movement) => sum + Number(movement.applied || 0), 0);
  const paid = Number(raw.basePaid || 0) + appliedByReceipts + appliedByCash;

  const minDeposit = raw.paymentParams ? Math.ceil((Number(value || 0) * raw.paymentParams.minDepositPercent) / 100) : operatorMinimumDeposit(value, service);
  let status = raw.status;
  if (status === "Pendiente de pago") {
    const meetsCondition = paid > 0 && (raw.paymentType === "Abono" ? paid >= minDeposit : paid >= value);
    if (getOperatorReservationConfirmations()[code] || meetsCondition) status = "Confirmada";
  }
  const registeredExecution = getOperatorReservationExecution(code);
  // Una reserva de una salida interrumpida que acepta la reprogramación regresa excepcionalmente
  // de En ejecución a Confirmada con la nueva salida (RN-EJE-002, H2).
  if (registeredExecution && !registeredExecution.interruptedReturned) status = registeredExecution.finalized ? "Finalizada" : "En ejecución";
  const cancellation = getOperatorReservationCancellation(code);
  if (cancellation) status = "Cancelada";
  const execution = status === "Cancelada"
    ? "No ejecutada"
    : ["En ejecución", "Finalizada"].includes(status) ? status : "Pendiente de ejecución";

  // Una reserva Cancelada no tiene saldo pendiente por cobrar: sus valores pagados quedan en tratamiento.
  const balance = status === "Cancelada" ? 0 : Math.max(value - paid, 0);
  const financialStatus = operatorFinancialSituation(status, raw.paymentType, paid, balance, value);
  const receipts = getOperatorReceiptList(code);
  const latestReceipt = receipts[receipts.length - 1] || null;
  const receiptStatus = latestReceipt
    ? latestReceipt.status
    : raw.receiptStatus || (raw.paymentMedium === "Transferencia" ? "Sin comprobante" : "No aplica");
  const refundOrigin = getOperatorRefundOrigin(code);
  const cancellationCause = cancellation?.causal || raw.cancellationCause || "";
  const pendingTreatmentValue = status === "Cancelada" && (raw.cancellationNature || cancellation?.origin) === "incumplimiento-pago"
    ? paid + treatmentByReceipts
    : treatmentByReceipts;
  const refundTreatment = refundOrigin
    ? `Devolución determinada: ${refundOrigin.potentialAmount}. ${refundOrigin.ruleLabel || ""}`.trim()
    : raw.refundTreatment || "";
  const creditBalanceValue = getOperatorCreditBalance(code);
  const refundedValue = getOperatorExecutedRefundTotal(code);

  return {
    ...raw,
    code,
    service,
    date,
    travelers,
    companions,
    originalValue,
    value,
    status,
    statusClass: operatorStatusClass(status),
    projected,
    discount,
    final: formatCOP(value),
    commercialContext: raw.commercialContext || null,
    paymentParams: raw.paymentParams || null,
    paid: formatCOP(paid),
    balance: formatCOP(balance),
    paidValue: paid,
    balanceValue: balance,
    minDeposit,
    execution,
    paymentType: raw.paymentType || "Pago total",
    paymentMedium: raw.paymentMedium || "Por definir",
    method: raw.paymentMedium || "Por definir",
    receiptStatus,
    latestReceipt,
    financialStatus,
    payment: financialStatus,
    cancellationCause,
    refundTreatment,
    creditBalanceValue,
    pendingTreatmentValue,
    refundedValue,
    confirmation: getOperatorReservationConfirmations()[code] || null,
  };
}

function getOperatorCreatedReservations() {
  const stored = readOperatorStorage(OPERATOR_CREATED_RESERVATIONS_KEY, []);
  let draft = null;
  try { draft = JSON.parse(sessionStorage.getItem("operatorReservationDraft") || "null"); } catch { draft = null; }
  if (draft?.code && !stored.some((item) => item.code === draft.code) && !OPERATOR_RESERVATIONS[draft.code]) stored.push(draft);
  return stored;
}

// Las reservas creadas desde Crear reserva se conservan en el almacenamiento local para que
// sus pagos, comprobantes y saldos (guardados por código) no queden huérfanos al cerrar la
// pestaña. El borrador de sessionStorage solo sirve para la navegación inmediata.
function saveOperatorCreatedReservation(record) {
  const stored = readOperatorStorage(OPERATOR_CREATED_RESERVATIONS_KEY, []).filter((item) => item.code !== record.code);
  stored.push(record);
  writeOperatorStorage(OPERATOR_CREATED_RESERVATIONS_KEY, stored);
  try { sessionStorage.setItem("operatorReservationDraft", JSON.stringify(record)); } catch { /* sin sessionStorage */ }
}

function getOperatorBaseReservations() {
  const created = getOperatorCreatedReservations().slice().reverse().map((item) => ({
    code: item.code,
    customer: item.customer,
    email: item.email || "No registrado en esta vista",
    service: item.service,
    date: item.date,
    travelers: item.travelers,
    companions: item.companions,
    status: "Pendiente de pago",
    value: Number(item.value ?? parseCOP(item.final)),
    basePaid: 0,
    projected: item.projected,
    discount: item.discount,
    paymentType: item.paymentType || "Pago total",
    paymentMedium: item.paymentMedium || item.method || "Por definir",
    receiptStatus: "Sin comprobante",
    createdAt: String(item.createdAt || "").slice(0, 10),
    createdAtIso: item.createdAtIso || (String(item.createdAt || "").includes("T") ? item.createdAt : undefined),
    departureId: item.departureId,
    customerId: item.customerId,
    emailMatch: item.emailMatch,
    transportSelected: item.transportSelected,
    commercialContext: item.commercialContext,
    paymentParams: item.paymentParams,
  }));
  const legacy = Object.entries(OPERATOR_RESERVATIONS).map(([code, item]) => ({
    code,
    customer: item.customer,
    email: item.email,
    service: item.service,
    date: item.date,
    travelers: item.travelers,
    companions: item.companions,
    status: item.status,
    value: parseCOP(item.final),
    basePaid: parseCOP(item.paid),
    projected: item.projected,
    discount: item.discount,
    paymentType: item.paymentType,
    paymentMedium: item.paymentMedium,
    receiptStatus: item.receiptStatus,
  }));
  const demo = getClientDemoReservations().map((item) => ({
    code: item.code,
    customer: OPERATOR_DEMO_CUSTOMERS[item.code] || "Cliente demo",
    email: "cliente@ejemplo.com",
    service: item.tour,
    date: item.departure,
    travelers: item.travelers,
    companions: formatOperatorCompanions(item.travelers),
    status: item.status,
    value: item.value,
    basePaid: item.paid || 0,
    projected: formatCOP(item.value),
    discount: "$0",
    paymentType: item.paymentType,
    paymentMedium: item.paymentMedium,
    receiptStatus: item.receiptStatus,
    cancellationCause: item.cancellationCause || "",
    cancellationNature: item.cancellationNature || "",
    refundTreatment: item.refundTreatment || "",
    reprogrammingMark: item.reprogrammingMark || "",
  }));
  return [...created, ...legacy, ...demo];
}

function getUnifiedOperatorReservations() {
  return getOperatorBaseReservations().reduce((out, raw) => {
    out[raw.code] = operatorBuildReservationRecord(raw);
    return out;
  }, {});
}

function getUnifiedOperatorReservation(code) {
  return getUnifiedOperatorReservations()[code] || null;
}

function getNextOperatorReservationCode() {
  const codes = Object.keys(getUnifiedOperatorReservations())
    .map((code) => Number(String(code).replace(/\D/g, "")))
    .filter(Boolean);
  return `RES-${Math.max(1846, ...codes) + 1}`;
}

// --- Decisión sobre un comprobante (aprobar / rechazar) -----------------------------------
// Aprobar: el usuario con permiso Validar comprobantes determina el monto efectivamente
// acreditado (monto verificado), que puede diferir del declarado. Solo se aplica lo necesario
// para completar la obligación; el excedente se registra como saldo a favor del cliente
// dentro del tenant. Si la reserva ya estaba Cancelada, el valor no la reactiva: pasa a
// tratamiento pendiente (RN-RES-006C). Rechazar exige motivo. Toda decisión guarda actor,
// fecha y hora, motivo y relación con la reserva y el comprobante.
function renderReceiptDecision(code, status, options = {}) {
  if (!operatorHasPermission(OPERATOR_PERMISSION_VALIDATE_RECEIPTS)) {
    return { ok: false, error: "Tu usuario no tiene el permiso Validar comprobantes." };
  }
  const receipt = getUnifiedReceiptRecords()[code];
  const before = getUnifiedOperatorReservation(code);
  if (!receipt || !before) return { ok: false, error: "No se encontró el comprobante de la reserva." };
  if (receipt.status !== "En validación") return { ok: false, error: `Este comprobante ya fue decidido (${receipt.status}).` };
  const reason = String(options.reason || "").trim();
  const decidedBy = getOperatorActorLabel();

  if (status === "Rechazado") {
    if (!reason) return { ok: false, error: "Registra el motivo obligatorio del rechazo." };
    setOperatorReceiptDecision(code, {
      receiptId: receipt.id, status, declaredAmount: receipt.declaredAmount, reason, actor: decidedBy, actorRole: getOperatorRoleLabel(),
    });
    return { ok: true, status, record: getUnifiedOperatorReservation(code) };
  }

  const verifiedAmount = Math.round(Number(options.verifiedAmount ?? receipt.declaredAmount));
  if (!(verifiedAmount > 0)) return { ok: false, error: "Registra el monto verificado (mayor a $0)." };
  if (verifiedAmount !== receipt.declaredAmount && !reason) {
    return { ok: false, error: "El monto verificado es distinto al declarado en el comprobante: registra el motivo de la diferencia." };
  }
  const cancelled = before.status === "Cancelada";
  const pending = Math.max(before.value - before.paidValue, 0);
  const appliedAmount = cancelled ? 0 : Math.min(verifiedAmount, pending);
  const surplus = cancelled ? 0 : verifiedAmount - appliedAmount;
  const pendingTreatment = cancelled ? verifiedAmount : 0;
  setOperatorReceiptDecision(code, {
    receiptId: receipt.id,
    status,
    declaredAmount: receipt.declaredAmount,
    verifiedAmount,
    validatedAmount: appliedAmount,
    appliedAmount,
    surplus,
    pendingTreatment,
    reason,
    actor: decidedBy,
    actorRole: getOperatorRoleLabel(),
  });
  if (surplus > 0) addOperatorCreditEntry(code, surplus, "Excedente de comprobante aprobado", { receiptId: receipt.id });
  if (appliedAmount > 0) {
    addOperatorCashMovement({
      type: "Ingreso",
      concept: `Comprobante aprobado reserva #${code}`,
      amount: appliedAmount,
      medium: "Transferencia",
      reservationCode: code,
    });
  }
  const after = getUnifiedOperatorReservation(code);
  if (before.status === "Pendiente de pago" && after.status === "Confirmada") {
    markOperatorReservationConfirmed(code, before.paymentType === "Abono" ? "Abono mínimo validado" : "100 % del valor final validado");
  }
  return { ok: true, status, record: getUnifiedOperatorReservation(code), surplus, appliedAmount, pendingTreatment, confirmed: before.status === "Pendiente de pago" && after.status === "Confirmada" };
}

// Presenta un comprobante de transferencia (el cliente, o un usuario interno en su nombre).
// Un comprobante En validación a la vez; los rechazados quedan en el histórico.
function submitOperatorReceipt(code, { amount, support }) {
  const record = getUnifiedOperatorReservation(code);
  if (!record) return { ok: false, error: "No se encontró la reserva." };
  if (record.status === "Cancelada") return { ok: false, error: "La reserva está Cancelada: no admite nuevos comprobantes." };
  if (record.paymentMedium !== "Transferencia") return { ok: false, error: "El medio de pago de esta reserva no es transferencia." };
  if (record.balanceValue <= 0) return { ok: false, error: "La reserva no tiene saldo pendiente." };
  // RN-RES-007 / RN-EJE-001: la salida debe estar vigente y con cupo antes de recibir el primer
  // comprobante; desde la hora programada de inicio no se aceptan pagos.
  const departureCheck = checkOperatorPaymentAllowedForDeparture(record);
  if (!departureCheck.ok) return departureCheck;
  const receipts = getOperatorReceiptList(code);
  if (receipts.some((receipt) => receipt.status === "En validación")) return { ok: false, error: "Ya existe un comprobante En validación: espera su decisión antes de presentar otro." };
  if (!(amount > 0)) return { ok: false, error: "Registra un monto mayor a $0." };
  const extras = readOperatorStorage(OPERATOR_EXTRA_RECEIPTS_KEY, {});
  extras[code] = [...(extras[code] || []), {
    id: `${code}-R${receipts.length + 1}`,
    code,
    customer: record.customer,
    method: "Transferencia",
    amount: formatCOP(amount),
    support: support || "comprobante-adjunto",
    status: "En validación",
    presentedAt: getOperatorNow().toISOString(),
    presentedBy: getOperatorActorLabel(),
    onBehalf: true,
  }];
  writeOperatorStorage(OPERATOR_EXTRA_RECEIPTS_KEY, extras);
  return { ok: true };
}

// Registra efectivo efectivamente recibido (Colaborador operativo o Administrador del
// tenant). Una promesa de pago no es un pago: solo se llama cuando el dinero ya se recibió.
// El efectivo es un pago validado desde que se registra y genera un ingreso en caja.
function registerOperatorCashPayment(code, amount) {
  if (isOperatorQueryOnlyRole()) return { ok: false, error: "Tu rol es de solo consulta: no puede registrar pagos." };
  const before = getUnifiedOperatorReservation(code);
  if (!before) return { ok: false, error: "No se encontró la reserva." };
  if (before.status === "Cancelada") return { ok: false, error: "La reserva está Cancelada: no admite nuevos pagos." };
  if (before.paymentMedium !== "Efectivo") return { ok: false, error: "El medio de pago de esta reserva no es efectivo." };
  if (before.balanceValue <= 0) return { ok: false, error: "La reserva no tiene saldo pendiente." };
  if (!(amount > 0)) return { ok: false, error: "Registra un monto mayor a $0." };
  // En efectivo la disponibilidad se verifica al registrar la recepción del dinero (RN-RES-007).
  const departureCheck = checkOperatorPaymentAllowedForDeparture(before);
  if (!departureCheck.ok) return departureCheck;
  const applied = Math.min(amount, before.balanceValue);
  const surplus = amount - applied;
  const cash = addOperatorCashMovement({
    type: "Ingreso",
    concept: `Pago en efectivo reserva #${code}`,
    amount,
    medium: "Efectivo",
    reservationCode: code,
  });
  if (!cash.ok) return cash;
  addOperatorPaymentMovement(code, { kind: "cash", value: amount, applied, surplus, medium: "Efectivo" });
  if (surplus > 0) addOperatorCreditEntry(code, surplus, "Excedente de pago en efectivo");
  const after = getUnifiedOperatorReservation(code);
  if (before.status === "Pendiente de pago" && after.status === "Confirmada") {
    markOperatorReservationConfirmed(code, before.paymentType === "Abono" ? "Abono mínimo recibido" : "100 % del valor final recibido");
  }
  return { ok: true, record: after, applied, surplus, confirmed: before.status === "Pendiente de pago" && after.status === "Confirmada" };
}

// --- Cliente: vista de sus reservas con el estado real -----------------------------------
// Las reservas de demostración del cliente reflejan las decisiones del operador (estado,
// valores validados, saldo y situación financiera).
function getClientDemoReservationsResolved() {
  const unified = getUnifiedOperatorReservations();
  return getClientDemoReservations().map((item) => {
    const record = unified[item.code];
    if (!record) return item;
    return {
      ...item,
      status: record.status,
      receiptStatus: record.receiptStatus,
      financialStatus: record.financialStatus,
      paid: record.paidValue,
      balance: record.balanceValue,
      value: record.value,
      creditBalance: record.creditBalanceValue,
      refunded: record.refundedValue,
      pendingTreatment: record.pendingTreatmentValue,
      cancellationCause: record.cancellationCause || item.cancellationCause,
      refundTreatment: record.refundTreatment || item.refundTreatment,
    };
  });
}

// Mis pagos (consulta del cliente): tipo y medio de pago, estado de cada comprobante, situación
// financiera, saldo pendiente, valores devueltos, saldo a favor y valores en tratamiento
// pendiente (RN-RES-006A). El saldo a favor es consultable, aplicable a una reserva nueva y
// devolvible bajo solicitud (RN-RES-009, GAP-014). No permite validar ni rechazar comprobantes.
function setupClientPaymentsScreen() {
  if (document.body.dataset.screen !== "client-payments") return;
  setupDashboardIdentity();
  const theme = getTheme();
  const list = document.querySelector("[data-payments-list]");
  const empty = document.querySelector("[data-payments-empty]");
  const creditPanel = document.querySelector("[data-credit-panel]");
  if (!list) return;

  const render = () => {
    const rows = getClientReservationViews();
    if (empty) empty.hidden = rows.length > 0;
    list.hidden = rows.length === 0;

    list.innerHTML = rows.map((row) => {
      const receipts = getOperatorReceiptList(row.code);
      const receiptItems = receipts.length
        ? `<ul class="client-receipt-list">${receipts.map((receipt) => `<li>${escapeHtml(receipt.support)} · ${escapeHtml(receipt.amount)} · <strong>${escapeHtml(receipt.status)}</strong>${receipt.status === "Rechazado" && receipt.decision?.reason ? ` (motivo: ${escapeHtml(receipt.decision.reason)})` : ""} · <a href="#" data-receipt-download="${escapeHtml(receipt.support)}" data-receipt-detail="${escapeHtml(`Reserva ${row.code} · ${receipt.amount} · ${receipt.status}`)}">Descargar</a></li>`).join("")}</ul>`
        : '<small>Sin comprobantes registrados.</small>';
      return `<article class="travel-dashboard-reservation-card" data-payment-code="${escapeHtml(row.code)}"><p>${escapeHtml(row.code)}</p><h3>${escapeHtml(row.tour)}</h3><p>${escapeHtml(row.departureLabel)}</p><div class="travel-dashboard-card-meta"><span>Estado de la reserva: ${escapeHtml(row.status)}</span><span>Tipo de pago: ${escapeHtml(row.paymentType)}</span><span>Medio de pago: ${escapeHtml(row.paymentMedium)}</span><span>Estado del comprobante: ${escapeHtml(row.receiptStatus)}</span><span>Situación financiera: ${escapeHtml(row.status === "Cancelada" ? "No aplica por reserva cancelada" : (row.financialStatus || "Sin pago"))}</span><span>Valor final: ${formatClientAmount(row.value)}</span><span>Valores validados: ${formatClientAmount(row.paid)}</span><span>Saldo pendiente: ${formatClientAmount(row.balance)}</span><span>Valores devueltos: ${formatClientAmount(row.refunded)}</span><span>Saldo a favor: ${formatClientAmount(row.creditBalance)}</span>${row.pendingTreatment ? `<span>En tratamiento pendiente: ${formatClientAmount(row.pendingTreatment)}</span>` : ""}</div><div><strong>Comprobantes</strong>${receiptItems}</div></article>`;
    }).join("");

    if (!creditPanel) return;
    const sources = rows.map((row) => ({ row, available: getClientCreditAvailable(row) })).filter((entry) => entry.available > 0);
    const requests = getClientCreditRequests();
    const requestLines = requests.map((request) => `<li>${escapeHtml(request.reservationCode)} · ${escapeHtml(request.amount)} · <strong>${escapeHtml(request.status)}</strong> (solicitada el ${escapeHtml(request.requestedAt || "")})</li>`).join("");
    if (!sources.length && !requests.length) {
      creditPanel.innerHTML = '<p class="travel-dashboard-copy">No tienes saldo a favor. Si una modificación, cancelación o pago validado genera un excedente a tu favor, aparecerá aquí.</p>';
      return;
    }
    creditPanel.innerHTML = `
      ${sources.map(({ row, available }) => `<div class="client-info-block"><p><strong>Saldo a favor disponible: ${formatClientAmount(available)}</strong> (origen: reserva ${escapeHtml(row.code)}).</p><p>No vence en Fase 1. Puedes aplicarlo total o parcialmente a una reserva nueva del mismo operador desde el paso de pago, o solicitar su devolución.</p><p><a class="travel-dashboard-section-action" href="${withTheme("tours.html", theme)}">Aplicar a una nueva reserva</a> <button type="button" class="operator-outline" data-credit-refund="${escapeHtml(row.code)}">Solicitar devolución</button></p></div>`).join("")}
      ${requests.length ? `<div class="client-info-block"><p><strong>Solicitudes de devolución de saldo a favor</strong></p><ul class="client-receipt-list">${requestLines}</ul><p>El Administrador del tenant tiene 24 horas corridas para autorizar o rechazar de forma justificada; sin decisión, Multitour autoriza la devolución por el monto solicitado.</p></div>` : ""}
      <p class="operator-form-feedback" data-credit-feedback aria-live="polite"></p>`;
  };

  render();

  document.addEventListener("click", (event) => {
    const download = event.target.closest?.("[data-receipt-download]");
    if (download) {
      event.preventDefault();
      downloadClientReceipt(download.dataset.receiptDownload, download.dataset.receiptDetail || "");
      return;
    }
    const refund = event.target.closest?.("[data-credit-refund]");
    if (!refund) return;
    const code = refund.dataset.creditRefund;
    const view = findClientReservationView(code);
    if (!view) return;
    const amount = getClientCreditAvailable(view);
    if (!(amount > 0)) return;
    const requestedAt = getOperatorNow();
    const requests = getOperatorRefundRequests();
    requests.push({
      id: `refund-${Date.now()}`,
      reservationCode: view.code,
      customer: view.customer,
      reason: "Solicitud de devolución del saldo a favor registrada por el cliente",
      administrativeNote: "",
      amount: formatCOP(amount),
      amountValue: amount,
      origin: "saldo-a-favor",
      ruleLabel: "Devolución del saldo a favor solicitada por el cliente (RN-RES-009)",
      penalty: 0,
      pendingCalculation: false,
      status: "Pendiente de autorización",
      requestedAt: typeof getOperatorTenantDateKey === "function" ? getOperatorTenantDateKey(requestedAt) : requestedAt.toISOString().slice(0, 10),
      requestedBy: "Cliente",
      decisionDueAt: new Date(requestedAt.getTime() + OPERATOR_REFUND_DECISION_MS).toISOString(),
    });
    saveOperatorRefundRequests(requests);
    render();
    const feedback = creditPanel?.querySelector("[data-credit-feedback]");
    if (feedback) {
      feedback.textContent = `Solicitud registrada por ${formatCOP(amount)}. El Administrador del tenant tiene 24 horas corridas para autorizarla o rechazarla de forma justificada; sin decisión, Multitour la autoriza automáticamente por el monto solicitado.`;
      feedback.classList.add("is-valid");
    }
  });
}

// --- Pagos del operador (lista de comprobantes y seguimiento) ---------------------------
function setupOperatorPayments() {
  if (document.body.dataset.screen !== "operator-payments") return;
  const tbody = document.querySelector(".operator-table tbody");
  if (!tbody) return;

  const canValidate = operatorHasPermission(OPERATOR_PERMISSION_VALIDATE_RECEIPTS);
  const receipts = Object.values(getUnifiedReceiptRecords());
  const pending = receipts.filter((receipt) => receipt.status === "En validación");
  const reservations = getUnifiedOperatorReservations();
  const overdue = pending.filter(operatorReceiptOverdue);

  const badge = document.querySelector(".operator-panel-head .operator-status");
  if (badge) badge.textContent = `${pending.length} pendiente${pending.length === 1 ? "" : "s"}`;

  const panel = document.querySelector(".operator-panel");
  if (panel && !panel.querySelector("[data-overdue-note]")) {
    const note = document.createElement("p");
    note.className = "operator-access-note";
    note.dataset.overdueNote = "";
    note.hidden = !(overdue.length && canValidate);
    note.textContent = `Hay ${overdue.length} comprobante(s) con revisión vencida (más de 24 horas corridas En validación). La marca no cambia el estado, no cancela la reserva ni libera cupos.`;
    panel.insertBefore(note, panel.querySelector(".operator-table-wrap"));
  }

  const receiptRows = receipts.map((receipt) => {
    const reservation = reservations[receipt.code] || {};
    const href = withTheme(`admin-validar-soporte.html?reservation=${encodeURIComponent(receipt.code)}`, getTheme());
    const action = receipt.status === "En validación"
      ? `<a href="${href}">${canValidate ? "Validar comprobante" : "Ver comprobante"}</a>`
      : "Sin acción pendiente";
    return `<tr data-payment-row="${escapeHtml(receipt.code)}"><td><strong>#${escapeHtml(receipt.code)}</strong></td><td>${escapeHtml(receipt.customer)}</td><td>${escapeHtml(reservation.paymentType || "Pago total")} · ${escapeHtml(receipt.method)}</td><td>${escapeHtml(receipt.amount)}</td><td><span class="operator-status ${receipt.status === "Rechazado" ? "is-cancelled" : receipt.status === "Aprobado" ? "is-confirmed" : "is-pending"}">${escapeHtml(receipt.status)}${operatorReceiptOverdue(receipt) ? " · Revisión vencida" : ""}</span></td><td>${action}</td></tr>`;
  });
  const withReceiptCodes = new Set(receipts.filter((receipt) => receipt.status === "En validación").map((receipt) => receipt.code));
  const followUpRows = Object.values(reservations)
    .filter((reservation) => reservation.status === "Pendiente de pago" && reservation.balanceValue > 0 && !withReceiptCodes.has(reservation.code))
    .map((reservation) => {
      const href = withTheme(`admin-registrar-seguimiento.html?reservation=${encodeURIComponent(reservation.code)}`, getTheme());
      return `<tr data-payment-row="${escapeHtml(reservation.code)}"><td><strong>#${escapeHtml(reservation.code)}</strong></td><td>${escapeHtml(reservation.customer)}</td><td>${escapeHtml(reservation.paymentType)} · ${escapeHtml(reservation.paymentMedium)}</td><td data-payment-row-amount>${escapeHtml(reservation.balance)}</td><td><span class="operator-status is-pending">${escapeHtml(reservation.financialStatus || "Sin pago")}</span></td><td><a href="${href}">Registrar seguimiento</a></td></tr>`;
    });
  tbody.innerHTML = [...receiptRows, ...followUpRows].join("");

  document.querySelector("[data-consult-refund-requests]")?.addEventListener("click", () => {
    window.location.href = withTheme("admin-solicitudes-devolucion.html", getTheme());
  });

  // Esta pantalla es compartida: el Colaborador operativo (y los roles de consulta) consulta
  // y ejecuta lo ya autorizado; nunca decide autorizaciones nuevas de devolución.
  if (!isOperatorAdmin()) {
    const heroBody = document.querySelector("[data-payments-hero-body]");
    if (heroBody) {
      heroBody.textContent = canValidate
        ? "Valida o rechaza comprobantes, registra seguimientos y ejecuta devoluciones previamente autorizadas cuando corresponda."
        : "Consulta pagos y comprobantes, registra seguimientos y ejecuta devoluciones previamente autorizadas cuando corresponda.";
    }
    const refundTitle = document.querySelector("[data-refund-panel-title]");
    if (refundTitle) refundTitle.textContent = "Devoluciones autorizadas";
    const refundCopy = document.querySelector("[data-refund-panel-copy]");
    if (refundCopy) refundCopy.textContent = "Consulta las devoluciones autorizadas por el Administrador del tenant y registra la salida de dinero cuando corresponda.";
  }
}

// --- Validar comprobante -----------------------------------------------------------------
function setupOperatorValidateSupport() {
  if (document.body.dataset.screen !== "operator-validate-support") return;
  const canValidate = operatorHasPermission(OPERATOR_PERMISSION_VALIDATE_RECEIPTS);
  const titleEl = document.querySelector("[data-validate-title]");
  const headingEl = document.querySelector("[data-validate-heading]");
  if (!canValidate) {
    if (titleEl) titleEl.textContent = "Ver comprobante";
    if (headingEl) headingEl.textContent = "Consulta del comprobante de pago";
  }

  const code = new URLSearchParams(window.location.search).get("reservation") || "RES-1843";
  const receipt = getUnifiedReceiptRecords()[code];
  const reservation = getUnifiedOperatorReservation(code);
  const form = document.querySelector("[data-validate-support-form]");
  const feedback = document.querySelector("[data-validate-feedback]");
  const reasonField = form?.querySelector("[data-validate-reason-field]");
  const reasonInput = form?.querySelector("[data-validate-reason]");
  const approveButton = form?.querySelector("[data-validate-approve]");
  const rejectButton = form?.querySelector("[data-validate-reject]");
  const setValue = (selector, value) => document.querySelectorAll(selector).forEach((node) => { node.value = value; node.textContent = value; });
  // Se conserva activo el botón de ver el comprobante aunque la decisión ya se haya tomado.
  const disableAll = () => form?.querySelectorAll("input, textarea, button:not([data-validate-support-view])").forEach((el) => { el.disabled = true; });
  const setFeedback = (message, ok) => {
    if (!feedback) return;
    feedback.textContent = message;
    feedback.classList.toggle("is-valid", Boolean(ok));
  };

  if (!canValidate) {
    if (reasonField) reasonField.hidden = true;
    if (approveButton) approveButton.hidden = true;
    if (rejectButton) rejectButton.hidden = true;
  }
  if (!receipt || !reservation || !form) {
    setValue("[data-validate-status]", "Comprobante no disponible");
    setFeedback("No se encontró el comprobante seleccionado. Vuelve a Pagos e ingresa nuevamente por Validar comprobante.");
    disableAll();
    return;
  }

  setValue("[data-validate-code]", `#${code}`);
  setValue("[data-validate-customer]", receipt.customer);
  setValue("[data-validate-method]", `${reservation.paymentType} · ${receipt.method}`);
  setValue("[data-validate-amount]", receipt.amount);
  setValue("[data-validate-status]", receipt.status);
  renderSupportPreview(form, receipt.support);

  // Monto verificado: el monto reconocido es el que el usuario verifica en la evidencia, no
  // necesariamente el declarado por el cliente (RN-RES-006A, decisión G6).
  let verifiedInput = form.querySelector("[data-validate-verified-amount]");
  if (!verifiedInput) {
    const amountLabel = form.querySelector("[data-validate-amount]")?.closest("label");
    const label = document.createElement("label");
    label.innerHTML = 'Monto verificado<input data-validate-verified-amount type="text" inputmode="numeric" autocomplete="off" />';
    amountLabel?.after(label);
    verifiedInput = label.querySelector("input");
  }
  verifiedInput.value = String(receipt.status === "En validación" ? receipt.declaredAmount : receipt.verifiedAmount);
  verifiedInput.readOnly = !canValidate || receipt.status !== "En validación";

  if (!canValidate) {
    setFeedback("Consulta de solo lectura: tu usuario no tiene el permiso Validar comprobantes.");
    disableAll();
    return;
  }
  if (receipt.status !== "En validación") {
    const decision = receipt.decision;
    const detail = decision ? ` por ${decision.actor} el ${formatOperatorTenantDateTime(decision.decidedAt)}` : "";
    setFeedback(`Este comprobante ya fue ${receipt.status === "Rechazado" ? "rechazado" : "aprobado"}${detail}. No se puede volver a decidir sobre el mismo comprobante.`);
    disableAll();
    return;
  }
  if (operatorReceiptOverdue(receipt)) setFeedback("Revisión vencida: este comprobante lleva más de 24 horas corridas En validación. Decide cuanto antes.");

  const decide = (status) => {
    const parsed = parseCOP(verifiedInput.value);
    const result = renderReceiptDecision(code, status, {
      verifiedAmount: status === "Aprobado" ? parsed : undefined,
      reason: reasonInput?.value || "",
    });
    if (!result.ok) {
      setFeedback(result.error, false);
      return;
    }
    setValue("[data-validate-status]", status);
    if (status === "Aprobado") {
      const extra = [];
      if (result.confirmed) extra.push("La reserva quedó Confirmada.");
      if (result.surplus > 0) extra.push(`El excedente de ${formatCOP(result.surplus)} se registró como saldo a favor del cliente.`);
      if (result.pendingTreatment > 0) extra.push(`La reserva estaba Cancelada: ${formatCOP(result.pendingTreatment)} pasan a tratamiento pendiente.`);
      setFeedback(`Comprobante aprobado por ${formatCOP(result.appliedAmount)} aplicados. Situación financiera: ${result.record.financialStatus || "No aplica"}. ${extra.join(" ")}`.trim(), true);
    } else {
      setFeedback("Comprobante rechazado. La reserva conserva su estado, sus pagos validados y su saldo pendiente.", true);
    }
    disableAll();
    window.setTimeout(() => { window.location.href = withTheme("admin-pagos.html", getTheme()); }, 1600);
  };
  approveButton?.addEventListener("click", () => decide("Aprobado"));
  rejectButton?.addEventListener("click", () => decide("Rechazado"));
}

// --- Reservas (listado) -----------------------------------------------------------------
function setupOperatorReservations() {
  if (document.body.dataset.screen !== "operator-reservations") return;
  const tbody = document.querySelector(".operator-table tbody");
  if (!tbody) return;
  const mode = new URLSearchParams(window.location.search).get("mode");
  const canValidate = operatorHasPermission(OPERATOR_PERMISSION_VALIDATE_RECEIPTS);
  const episodes = ensureOperatorReprogramEpisodes();
  const rows = Object.values(getUnifiedOperatorReservations());

  tbody.innerHTML = rows.map((reservation) => {
    const detailHref = withTheme(`admin-detalle-reserva.html?reservation=${encodeURIComponent(reservation.code)}`, getTheme());
    const archived = ["Finalizada", "Cancelada"].includes(reservation.status);
    let action = `<a href="${detailHref}">Ver detalle</a>`;
    // Salida cancelada o interrumpida: la reserva espera su reprogramación (RF-015C).
    const episode = episodes[reservation.code];
    const reprogram = episode && ["Pendiente de propuesta", "Propuesta enviada"].includes(episode.status)
      ? ` · <a href="${withTheme(`admin-reprogramar-reserva.html?reservation=${encodeURIComponent(reservation.code)}`, getTheme())}">Reprogramar</a>`
      : "";
    if (mode === "additional-discount") {
      if (isReservationEligibleForAdditionalDiscount(reservation.statusClass) && isOperatorAdmin()) {
        action = `<a href="${withTheme(`admin-aplicar-descuento.html?reservation=${encodeURIComponent(reservation.code)}`, getTheme())}">Aplicar descuento</a>`;
      }
    } else if (reservation.receiptStatus === "En validación") {
      action += ` · <a href="${withTheme(`admin-validar-soporte.html?reservation=${encodeURIComponent(reservation.code)}`, getTheme())}">${canValidate ? "Validar comprobante" : "Ver comprobante"}</a>`;
    } else if (["En ejecución", "Finalizada"].includes(reservation.status)) {
      action += ` · <a href="${withTheme("admin-operacion.html", getTheme())}">Ver operación</a>`;
    } else {
      action += ` · <a href="${withTheme(`admin-gestion-pago.html?reservation=${encodeURIComponent(reservation.code)}`, getTheme())}">${reservation.status === "Cancelada" || reservation.balanceValue === 0 ? "Ver pago" : "Gestionar pago"}</a>`;
    }
    action += reprogram;
    const finance = reservation.financialStatus
      ? `${escapeHtml(reservation.receiptStatus)} · ${escapeHtml(reservation.financialStatus)}`
      : escapeHtml(reservation.receiptStatus);
    return `<tr${archived ? " data-reservation-archived hidden" : ""}><td><a class="operator-reservation-link" href="${detailHref}">#${escapeHtml(reservation.code)}</a><small>${escapeHtml(reservation.date || "Por confirmar")} · ${reservation.travelers || 1} viajeros${(() => { const departure = getOperatorReservationDeparture(reservation); return departure ? ` · ${escapeHtml(departure.id)}${departure.status === "Cancelada" ? " (cancelada)" : ""}` : ""; })()}</small></td><td>${escapeHtml(reservation.customer || "Cliente")}</td><td>${escapeHtml(reservation.service || "Servicio")}</td><td><span class="operator-status ${reservation.statusClass}">${escapeHtml(reservation.status)}</span></td><td><small>${finance}</small><br><strong>${escapeHtml(reservation.balance)}</strong></td><td>${action}</td></tr>`;
  }).join("");

  if (mode === "additional-discount") {
    const hero = document.querySelector(".operator-hero-compact");
    if (hero && !hero.querySelector("[data-additional-discount-banner]")) {
      hero.insertAdjacentHTML("beforeend", '<p data-additional-discount-banner>Selecciona la reserva a la que deseas aplicar un descuento adicional.</p>');
    }
  }

  const toggle = document.querySelector("[data-reservation-scope-toggle]");
  const archivedRows = tbody.querySelectorAll("[data-reservation-archived]");
  if (!toggle || !archivedRows.length) return;
  toggle.addEventListener("click", () => {
    const showAll = toggle.getAttribute("aria-expanded") !== "true";
    archivedRows.forEach((row) => { row.hidden = !showAll; });
    toggle.setAttribute("aria-expanded", String(showAll));
    toggle.textContent = showAll ? "Ver reservas activas" : "Ver todas las reservas";
  });
}

// --- Detalle de reserva ------------------------------------------------------------------
function setupOperatorReservationDetail() {
  if (document.body.dataset.screen !== "operator-reservation-detail") return;

  const code = new URLSearchParams(window.location.search).get("reservation") || "RES-1842";
  const reservation = getUnifiedOperatorReservation(code) || getUnifiedOperatorReservation("RES-1842");
  const setText = (selector, value) => document.querySelectorAll(selector).forEach((node) => { node.textContent = value == null ? "" : value; });
  const canValidate = operatorHasPermission(OPERATOR_PERMISSION_VALIDATE_RECEIPTS);

  setText("[data-reservation-code]", `#${reservation.code}`);
  setText("[data-reservation-service]", reservation.service);
  setText("[data-reservation-customer]", reservation.customer);
  setText("[data-reservation-email]", reservation.email || "cliente@ejemplo.com");
  setText("[data-reservation-travelers]", `${reservation.travelers} personas`);
  setText("[data-reservation-companions]", reservation.companions || "");
  setText("[data-reservation-projected]", reservation.projected);
  setText("[data-reservation-discount]", reservation.discount);
  setText("[data-reservation-final]", reservation.final);
  setText("[data-reservation-paid]", reservation.paid);
  setText("[data-reservation-balance]", `${reservation.balance} ${reservation.balanceValue === 0 ? "sin saldo pendiente" : "pendientes"}`);
  setText("[data-reservation-payment-status]", reservation.receiptStatus);
  setText("[data-reservation-paid-table]", reservation.paid);
  setText("[data-reservation-balance-table]", reservation.balance);
  setText("[data-reservation-receipt-status]", reservation.receiptStatus);
  setText("[data-reservation-financial-status]", reservation.financialStatus || "No aplica por reserva cancelada");
  setText("[data-reservation-payment-type]", reservation.paymentType);
  setText("[data-reservation-payment-medium]", reservation.paymentMedium);
  setText("[data-reservation-validated]", reservation.paid);
  setText("[data-reservation-refunded]", formatCOP(reservation.refundedValue));
  setText("[data-reservation-credit]", formatCOP(reservation.creditBalanceValue));
  setText("[data-reservation-pending-treatment]", reservation.pendingTreatmentValue ? formatCOP(reservation.pendingTreatmentValue) : "$0");
  setText("[data-reservation-min-deposit]", reservation.paymentType === "Abono" ? formatCOP(reservation.minDeposit) : "No aplica");
  setText("[data-reservation-cancellation-cause]", reservation.cancellationCause || "No registrada");

  // Salida, plazo de pago y ampliación (RN-RES-006, RN-RES-010).
  const departure = getOperatorReservationDeparture(reservation);
  const deadline = getOperatorPaymentDeadline(reservation);
  setText("[data-reservation-departure]", departure ? `Salida ${departure.id}: ${departure.label} · ${reservation.travelers} viajeros` : `Salida: ${reservation.date} · ${reservation.travelers} viajeros`);
  setText("[data-reservation-departure-title]", departure ? `${departure.id} · ${departure.tourName}` : "Sin salida asociada");
  setText("[data-reservation-departure-status]", departure ? `${departure.status}${operatorDepartureTextStatus(departure) ? ` · ${operatorDepartureTextStatus(departure)}` : ""}` : "—");
  setText("[data-reservation-departure-vehicles]", departure ? describeOperatorDepartureVehicles(departure) : "—");
  setText("[data-reservation-deadline]", describeOperatorPaymentDeadline(deadline));
  setText("[data-reservation-extension]", deadline.extension ? `${deadline.extension.hours} h concedidas por ${deadline.extension.actor} el ${formatOperatorTenantDateTime(deadline.extension.at)}` : deadline.extensionAvailable ? "Disponible (una única ampliación)" : "No aplica");
  const departureLink = document.querySelector("[data-reservation-departure-link]");
  if (departureLink) { departureLink.hidden = !departure; if (departure) departureLink.href = withTheme(`admin-salidas.html`, getTheme()); }
  const episode = ensureOperatorReprogramEpisodes()[reservation.code];
  const reprogramBox = document.querySelector("[data-reservation-reprogram-box]");
  if (reprogramBox) {
    reprogramBox.hidden = !episode || !["Pendiente de propuesta", "Propuesta enviada"].includes(episode.status);
    const reprogramLink = reprogramBox.querySelector("[data-reprogram-link]");
    if (reprogramLink) reprogramLink.href = withTheme(`admin-reprogramar-reserva.html?reservation=${encodeURIComponent(reservation.code)}`, getTheme());
  }
  const discountLink = document.querySelector("[data-apply-discount-link]");
  if (discountLink) {
    discountLink.hidden = !isReservationEligibleForAdditionalDiscount(reservation.statusClass);
    discountLink.href = withTheme(`admin-aplicar-descuento.html?reservation=${encodeURIComponent(reservation.code)}`, getTheme());
  }
  // Datos sensibles de actividades de riesgo: solo con el permiso Consultar datos sensibles
  // (asignación explícita, también para el Administrador del tenant); cada consulta queda auditada.
  const sensitiveNote = document.querySelector("[data-sensitive-note]");
  if (sensitiveNote) {
    const hasRisk = Boolean(OPERATOR_KNOWN_TOUR_DETAILS[reservation.service]?.risk || /rafting/i.test(reservation.service || ""));
    if (!hasRisk) sensitiveNote.textContent = "Consulta disponible únicamente dentro del operador activo. Esta reserva no tiene requisitos de actividad de riesgo (los datos de identidad y contacto de emergencia siguen la retención indicada abajo).";
    else if (operatorHasPermission(OPERATOR_PERMISSION_VIEW_SENSITIVE)) {
      logOperatorSensitiveAccess(reservation.code);
      sensitiveNote.textContent = "Esta reserva incluye datos sensibles de actividad de riesgo (tipo de sangre, contacto de emergencia, restricciones físicas y consentimientos). Tu permiso Consultar datos sensibles permite consultarlos cuando la gestión lo requiera; esta consulta quedó registrada en la auditoría.";
    } else sensitiveNote.textContent = "Esta reserva incluye datos sensibles de actividad de riesgo. Su consulta exige el permiso Consultar datos sensibles, que tu usuario no tiene asignado; el Administrador del tenant puede asignarlo con auditoría a quien su función operativa lo justifique.";
  }

  const status = document.querySelector("[data-reservation-status]");
  if (status) {
    status.textContent = reservation.status;
    status.className = `operator-status ${reservation.statusClass}`;
  }
  const services = document.querySelector("[data-reservation-services]");
  if (services) {
    services.innerHTML = `<tr><td><strong>${escapeHtml(reservation.service || "Servicio")}</strong></td><td>${escapeHtml(reservation.date || "Por confirmar")}</td><td>${reservation.travelers || 1} viajeros</td><td>${escapeHtml(reservation.execution)}</td></tr>`;
  }

  // Histórico de comprobantes (no se sobrescribe: los rechazados se conservan).
  const receiptsBody = document.querySelector("[data-reservation-receipts]");
  if (receiptsBody) {
    const list = getOperatorReceiptList(reservation.code);
    receiptsBody.innerHTML = list.length
      ? list.map((receipt) => `<tr><td>${escapeHtml(formatOperatorTenantDateTime(receipt.presentedAt))}</td><td>${escapeHtml(receipt.amount)}</td><td>${receipt.decision && receipt.status === "Aprobado" ? escapeHtml(formatCOP(receipt.verifiedAmount)) : "—"}</td><td>${escapeHtml(receipt.status)}${operatorReceiptOverdue(receipt) ? " · Revisión vencida" : ""}</td><td>${escapeHtml(receipt.decision ? `${receipt.decision.actor} · ${formatOperatorTenantDateTime(receipt.decision.decidedAt)}${receipt.decision.reason ? " · " + receipt.decision.reason : ""}` : "Pendiente de decisión")}</td></tr>`).join("")
      : '<tr><td colspan="5">Sin comprobantes presentados.</td></tr>';
  }

  // Acción principal: validar comprobante, ver operación o gestionar el pago.
  const action = document.querySelector("[data-reservation-action]");
  if (action) {
    if (reservation.receiptStatus === "En validación") {
      action.textContent = canValidate ? "Validar comprobante" : "Ver comprobante";
      action.href = withTheme(`admin-validar-soporte.html?reservation=${encodeURIComponent(reservation.code)}`, getTheme());
    } else if (["En ejecución", "Finalizada"].includes(reservation.status)) {
      action.textContent = "Ver operación";
      action.href = withTheme("admin-operacion.html", getTheme());
    } else {
      const settled = reservation.status === "Cancelada" || reservation.balanceValue === 0;
      action.textContent = settled ? "Ver pagos" : "Gestionar pago";
      action.href = withTheme(`admin-gestion-pago.html?reservation=${encodeURIComponent(reservation.code)}`, getTheme());
      action.classList.toggle("operator-outline", settled);
      action.classList.toggle("operator-primary", !settled);
    }
  }

  // Descuento adicional autorizado por el Administrador del tenant.
  const adjustment = getOperatorReservationAdjustment(reservation.code);
  const discountPanel = document.querySelector("[data-additional-discount-panel]");
  if (discountPanel) {
    if (adjustment) {
      const previous = adjustment.previousValue != null ? Number(adjustment.previousValue) : reservation.originalValue;
      setText("[data-additional-discount-percentage]", `${adjustment.percentage}%`);
      setText("[data-additional-discount-reason]", adjustment.reason);
      setText("[data-additional-discount-previous]", formatCOP(previous));
      setText("[data-additional-discount-amount]", formatCOP(Math.max(previous - reservation.value, 0)));
      setText("[data-additional-discount-final]", reservation.final);
      discountPanel.hidden = false;
    } else {
      discountPanel.hidden = true;
    }
  }

  // Cancelar nunca borra la reserva: la causal queda visible como historial incluso cuando
  // no hay devolución que gestionar (si la hay, se muestra en el panel de devolución).
  const cancellation = getOperatorReservationCancellation(reservation.code);
  const refundOrigin = getOperatorRefundOrigin(reservation.code);
  const cancellationHistoryPanel = document.querySelector("[data-cancellation-history-panel]");
  if (cancellationHistoryPanel) {
    if (cancellation && !refundOrigin) {
      setText("[data-cancellation-history-reason]", cancellation.causal);
      setText("[data-cancellation-history-date]", formatOperatorTenantDateTime(cancellation.registeredAt));
      cancellationHistoryPanel.hidden = false;
    } else {
      cancellationHistoryPanel.hidden = true;
    }
  }

  // Cancelar o modificar solo antes de Finalizada/Cancelada (estados terminales).
  const cancelModifyLink = document.querySelector("[data-cancel-modify-link]");
  if (cancelModifyLink) {
    const eligible = !["is-finalized", "is-cancelled"].includes(reservation.statusClass) && !isOperatorQueryOnlyRole();
    cancelModifyLink.hidden = !eligible;
    if (eligible) cancelModifyLink.href = withTheme(`admin-cancelar-modificar-reserva.html?reservation=${encodeURIComponent(reservation.code)}`, getTheme());
  }

  // Gestionar devolución: solo con una cancelación o modificación registrada que ya tiene
  // causal y valor a devolver determinado según la regla del PDR.
  const refundOriginPanel = document.querySelector("[data-refund-origin-panel]");
  if (refundOriginPanel) {
    if (refundOrigin) {
      setText("[data-refund-origin-reason]", refundOrigin.causal);
      setText("[data-refund-origin-amount]", refundOrigin.potentialAmount);
      const actionLink = document.querySelector("[data-refund-origin-action]");
      if (actionLink) actionLink.href = withTheme(`admin-gestionar-devolucion.html?reservation=${encodeURIComponent(reservation.code)}`, getTheme());
      refundOriginPanel.hidden = false;
    } else {
      refundOriginPanel.hidden = true;
    }
  }
}

// --- Reserva registrada --------------------------------------------------------------------
function setupOperatorReservationCreated() {
  if (document.body.dataset.screen !== "operator-reservation-created") return;
  let draft = null;
  try { draft = JSON.parse(sessionStorage.getItem("operatorReservationDraft") || "null"); } catch { draft = null; }
  // Sin borrador de la sesión actual se muestra la última reserva creada (guardada localmente).
  const requestedCode = new URLSearchParams(window.location.search).get("reservation") || "";
  const source = requestedCode ? { code: requestedCode } : draft?.code ? draft : getOperatorCreatedReservations().slice(-1)[0];
  const stored = source?.code ? getUnifiedOperatorReservation(source.code) : null;
  const reservation = stored || {
    code: getNextOperatorReservationCode(),
    customer: "Cliente registrado",
    service: "Servicio seleccionado",
    date: "Por confirmar",
    travelers: 1,
    projected: "$0",
    discount: "$0",
    final: "$0",
    balance: "$0",
    receiptStatus: "Sin comprobante",
    financialStatus: "Sin pago",
    paymentType: "Pago total",
    paymentMedium: "Sin medio definido",
  };
  const setText = (selector, value) => document.querySelectorAll(selector).forEach((node) => { node.textContent = value; });
  setText("[data-created-code]", `#${reservation.code}`);
  setText("[data-created-service]", reservation.service);
  setText("[data-created-departure]", reservation.date);
  setText("[data-created-travelers]", `${reservation.travelers} persona${Number(reservation.travelers) === 1 ? "" : "s"}`);
  setText("[data-created-holder]", reservation.customer || "Cliente registrado");
  setText("[data-created-payment]", `${reservation.receiptStatus} · ${reservation.financialStatus || "Sin pago"}`);
  setText("[data-created-method]", `${reservation.paymentType} · ${reservation.paymentMedium}`);
  setText("[data-created-final]", reservation.final || "$0");
  setText("[data-created-projected]", reservation.projected || "$0");
  setText("[data-created-discount]", reservation.discount || "$0");
  setText("[data-created-deadline]", stored ? describeOperatorPaymentDeadline(getOperatorPaymentDeadline(stored)) : "Se define con la creación de la reserva");
  setText("[data-created-balance]", reservation.balance || "$0");
  document.querySelectorAll("[data-created-detail]").forEach((node) => { node.href = withTheme(`admin-detalle-reserva.html?reservation=${encodeURIComponent(reservation.code)}`, getTheme()); });
  document.querySelectorAll("[data-created-payment-manage]").forEach((node) => { node.href = withTheme(`admin-gestion-pago.html?reservation=${encodeURIComponent(reservation.code)}`, getTheme()); });
}

// --- Gestión de pago de una reserva ----------------------------------------------------------
function setupOperatorReservationPayment() {
  if (document.body.dataset.screen !== "operator-reservation-payment") return;

  const code = new URLSearchParams(window.location.search).get("reservation") || "";
  const setText = (selector, value) => document.querySelectorAll(selector).forEach((node) => { node.textContent = value; });
  const form = document.querySelector("[data-payment-form]");
  const amount = document.querySelector("[data-payment-amount]");
  const support = document.querySelector("[data-payment-support]");
  const feedback = document.querySelector("[data-payment-feedback]");
  const submit = document.querySelector("[data-payment-submit]");
  const review = document.querySelector("[data-payment-review]");
  const approve = document.querySelector("[data-payment-approve]");
  const reject = document.querySelector("[data-payment-reject]");
  const paymentHeading = document.querySelector("[data-payment-heading]");
  const completed = document.querySelector("[data-payment-completed]");
  const reservationStatus = document.querySelector("[data-payment-reservation-status]");
  const say = (message, ok) => {
    if (!feedback) return;
    feedback.hidden = false;
    feedback.textContent = message;
    feedback.classList.toggle("is-valid", Boolean(ok));
  };

  // "Gestión de pago" siempre abre la reserva realmente seleccionada: nunca cae en una reserva
  // fija cuando el código está ausente o no se encuentra.
  const initial = code ? getUnifiedOperatorReservation(code) : null;
  if (!initial) {
    setText("[data-payment-reservation-code]", "Reserva no encontrada");
    setText("[data-payment-customer]", "—");
    say("No se encontró la reserva seleccionada. Vuelve a Reservas u Operación e ingresa nuevamente por Gestionar pago.", false);
    form?.querySelectorAll("input, button").forEach((el) => { el.disabled = true; });
    if (submit) submit.hidden = true;
    return;
  }

  document.querySelectorAll("[data-payment-back]").forEach((node) => {
    node.href = withTheme(`admin-detalle-reserva.html?reservation=${encodeURIComponent(code)}`, getTheme());
  });

  const adjustment = getOperatorReservationAdjustment(code);
  const discountRow = document.querySelector("[data-payment-discount-row]");
  if (discountRow) {
    discountRow.hidden = !adjustment;
    if (adjustment) setText("[data-payment-discount-percentage]", `${adjustment.percentage}%`);
  }

  const canValidate = operatorHasPermission(OPERATOR_PERMISSION_VALIDATE_RECEIPTS);
  const readOnlyRole = isOperatorQueryOnlyRole();

  // Todo se recalcula desde el modelo unificado; esta pantalla no guarda su propia copia.
  const render = () => {
    const reservation = getUnifiedOperatorReservation(code);
    const pendingReceipt = reservation.latestReceipt?.status === "En validación" ? reservation.latestReceipt : null;
    const cancelled = reservation.status === "Cancelada";
    const settled = cancelled || reservation.balanceValue === 0;
    const isTransfer = reservation.paymentMedium === "Transferencia";
    const isCash = reservation.paymentMedium === "Efectivo";
    const hasMedium = isTransfer || isCash;
    // RN-RES-007 y RN-EJE-001: sin salida vigente, con la hora de inicio alcanzada o sin cupo para
    // el primer pago no se recibe dinero ni comprobantes.
    const departureGate = settled ? { ok: true } : checkOperatorPaymentAllowedForDeparture(reservation);

    setText("[data-payment-reservation-code]", `#${reservation.code}`);
    setText("[data-payment-customer]", reservation.customer);
    setText("[data-payment-method]", `${reservation.paymentType} · ${reservation.paymentMedium}`);
    setText("[data-payment-status]", reservation.receiptStatus);
    setText("[data-payment-financial-status]", reservation.financialStatus || "No aplica por reserva cancelada");
    setText("[data-payment-final]", reservation.final);
    setText("[data-payment-balance]", reservation.balance);
    setText("[data-payment-paid]", reservation.paid);
    setText("[data-payment-paid-summary]", reservation.paid);
    setText("[data-payment-credit]", formatCOP(reservation.creditBalanceValue));
    const paymentDeparture = getOperatorReservationDeparture(reservation);
    setText("[data-payment-departure]", paymentDeparture ? `${paymentDeparture.id} · ${paymentDeparture.label} (${paymentDeparture.status})` : "Sin salida asociada");
    setText("[data-payment-deadline]", describeOperatorPaymentDeadline(getOperatorPaymentDeadline(reservation)));
    if (reservationStatus) {
      reservationStatus.textContent = reservation.status;
      reservationStatus.className = `operator-status ${reservation.statusClass}`;
    }

    document.querySelectorAll("[data-payment-entry]").forEach((node) => {
      const isSupport = Boolean(node.querySelector("[data-payment-support]"));
      node.hidden = settled || readOnlyRole || Boolean(pendingReceipt) || (isSupport && !isTransfer);
    });
    if (support) support.required = isTransfer;
    if (amount) {
      amount.disabled = !hasMedium || Boolean(pendingReceipt) || !departureGate.ok;
      amount.placeholder = reservation.paymentType === "Abono" ? `Monto del abono (mínimo ${formatCOP(reservation.minDeposit)})` : "Monto recibido";
    }
    if (submit) {
      submit.hidden = settled || readOnlyRole;
      submit.disabled = !hasMedium || Boolean(pendingReceipt) || !departureGate.ok;
      submit.textContent = isTransfer ? "Registrar comprobante" : "Registrar pago recibido";
    }
    if (completed) completed.hidden = !settled;
    if (paymentHeading) {
      paymentHeading.textContent = cancelled ? "Reserva cancelada" : settled ? "Pago registrado" : "Registra el pago de esta reserva";
    }
    const completedNote = completed?.querySelector("p");
    if (completedNote) {
      completedNote.textContent = cancelled
        ? "Esta reserva está cancelada: no se pueden registrar nuevos pagos ni comprobantes. Se conserva la trazabilidad existente."
        : "No existen valores pendientes por registrar para esta reserva.";
    }
    const movementsList = document.querySelector("[data-payment-movements-list]");
    if (movementsList) {
      const entries = [
        ...getOperatorReceiptList(code).filter((receipt) => receipt.status === "Aprobado").map((receipt) => ({ label: `Comprobante aprobado (${formatOperatorTenantDateTime(receipt.decision?.decidedAt || receipt.presentedAt)})`, value: receipt.appliedAmount || receipt.verifiedAmount })),
        ...getOperatorPaymentMovements(code).filter((movement) => movement.kind === "cash").map((movement) => ({ label: `Efectivo recibido (${formatOperatorTenantDateTime(movement.registeredAt)})`, value: movement.applied })),
      ];
      movementsList.hidden = entries.length === 0;
      movementsList.innerHTML = entries.map((entry) => `<div><span>${escapeHtml(entry.label)}</span><strong>${escapeHtml(formatCOP(entry.value))}</strong></div>`).join("");
    }
    // Comprobante En validación: la decisión (con monto verificado y motivo) se toma en la
    // pantalla de validación, no aquí.
    if (review) review.hidden = !pendingReceipt;
    if (approve) approve.textContent = canValidate ? "Validar comprobante" : "Ver comprobante";
    if (reject) reject.hidden = !canValidate;
    if (!hasMedium && !settled) say("No hay un medio de pago definido para esta reserva. Defínelo antes de registrar dinero.", false);
    else if (readOnlyRole) say("Tu rol es de solo consulta: no puede registrar pagos.", false);
    else if (!departureGate.ok && !pendingReceipt) say(departureGate.error, false);
    else if (pendingReceipt) say("Hay un comprobante En validación. La reserva sigue sin confirmarse hasta su aprobación.", false);
    else if (reservation.paymentType === "Abono" && !settled) say(`Abono mínimo para confirmar: ${formatCOP(reservation.minDeposit)}. El saldo restante queda pendiente.`, false);
    else if (!settled) say("Registra el monto para actualizar la situación financiera y el saldo pendiente.", false);
    else if (feedback) feedback.hidden = true;
    return reservation;
  };
  render();

  const goToValidation = () => { window.location.href = withTheme(`admin-validar-soporte.html?reservation=${encodeURIComponent(code)}`, getTheme()); };
  approve?.addEventListener("click", goToValidation);
  reject?.addEventListener("click", goToValidation);

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const reservation = getUnifiedOperatorReservation(code);
    const value = parseCOP(amount?.value);
    if (!(value > 0)) {
      say("Registra un monto mayor a $0.", false);
      return;
    }
    if (reservation.paymentMedium === "Transferencia") {
      const file = support?.files?.[0];
      if (!file) {
        say("Adjunta el comprobante de transferencia para enviarlo a validación.", false);
        return;
      }
      if (!/\.(pdf|jpe?g|png)$/i.test(file.name) || file.size > OPERATOR_RECEIPT_MAX_BYTES) {
        say("El comprobante debe ser PDF, JPG, JPEG o PNG y no superar 5 MB.", false);
        return;
      }
      const result = submitOperatorReceipt(code, { amount: value, support: file.name });
      if (!result.ok) {
        say(result.error, false);
        return;
      }
      render();
      say("Comprobante registrado en nombre del cliente. Queda En validación y la reserva sigue Pendiente de pago hasta su aprobación.", true);
      return;
    }
    const result = registerOperatorCashPayment(code, value);
    if (!result.ok) {
      say(result.error, false);
      return;
    }
    if (amount) amount.value = "";
    render();
    say(result.confirmed
      ? "Pago en efectivo registrado. Se cumplió la condición de confirmación y la reserva quedó Confirmada."
      : `Pago en efectivo registrado. Situación financiera: ${result.record.financialStatus || "No aplica"}.${result.surplus > 0 ? ` El excedente de ${formatCOP(result.surplus)} quedó como saldo a favor.` : ""}`, true);
  });
}


// ===========================================================================
// FASE 3A - MODELO DE SALIDAS, PLAZOS DE PAGO Y EPISODIOS DE REPROGRAMACIÓN
// (PDR RN-SAL-001, RF-020, RN-RES-006/007, RN-EJE-001/002, sección 16, G3, H3, H8, J3, K1-K3,
// L1-L4, Q3, GAP-009 a GAP-011, GAP-019, GAP-021, FINAL-003, FINAL-006, FINAL-010/011).
//
// Salida: ejecución programada de un tour con fecha, hora de inicio y hora de finalización
// estimada. Estados: Programada, En ejecución, Finalizada, Cancelada. "Pendiente de
// regularización" es una marca (no un estado) y nunca cierra la salida automáticamente.
// Capacidad efectiva = menor entre el cupo del tour y la suma de los vehículos asignados
// (si hay vehículos); un vehículo puede estar en varias salidas si sus intervalos no se
// superponen. Cada reserva pertenece a una única salida y aparta cupo con su primer pago.
//
// Reloj del mockup: las horas límite de las salidas, los plazos de pago y los episodios de
// reprogramación se evalúan contra getOperatorNow() (el "hoy" fijo de la demo);
// la auditoría de cada acción conserva la hora real del navegador.
// ===========================================================================
const OPERATOR_DEPARTURES_KEY = "multitour-operator-departures";
const OPERATOR_TENANT_UTC_OFFSET = "-05:00"; // America/Bogota, sin horario de verano
const OPERATOR_DEFAULT_TOUR_CAPACITY = 20;
const OPERATOR_HOUR_MS = 60 * 60 * 1000;
const OPERATOR_REPROGRAM_EPISODES_KEY = "multitour-reprogram-episodes";
const OPERATOR_REPROGRAM_L1_HOURS = 24;
const OPERATOR_REPROGRAM_RESPONSE_HOURS = 72;
const OPERATOR_REPROGRAM_EPISODE_LIMIT_HOURS = 96;

// Flota de demostración. Los vehículos del catálogo de transporte (si tienen capacidad
// parametrizada) también se pueden asignar a una salida.
const OPERATOR_DEMO_FLEET = [
  { name: "Bus Andino 01", capacity: 30 },
  { name: "Van 02", capacity: 12 },
  { name: "Van 03", capacity: 12 },
];

function operatorDepartureAt(date, time) {
  return `${date}T${time}:00${OPERATOR_TENANT_UTC_OFFSET}`;
}

const OPERATOR_FLEET = Object.fromEntries(OPERATOR_DEMO_FLEET.map((vehicle) => [vehicle.name, vehicle]));
const OPERATOR_BASE_DEPARTURES = [
  { id: "SAL-001", tourKey: "Ruta arqueológica", tourName: "Ruta arqueológica", date: "2026-09-01", start: "06:30", end: "11:00", tourCapacity: 10, vehicles: [OPERATOR_FLEET["Van 02"]], status: "En ejecución", realStartAt: "2026-09-01T06:40:00-05:00", realStartBy: "Fernanda Robayo (Administrador del tenant)" },
  { id: "SAL-002", tourKey: "Río Claro", tourName: "Río Claro", date: "2026-09-01", start: "07:00", end: "10:00", tourCapacity: 12, vehicles: [OPERATOR_FLEET["Van 03"]], status: "Programada" },
  { id: "SAL-003", tourKey: "Rafting y acampada extrema", tourName: "Rafting y acampada extrema", date: "2026-09-13", start: "07:00", end: "17:00", tourCapacity: 16, vehicles: [OPERATOR_FLEET["Van 02"], OPERATOR_FLEET["Van 03"]], status: "Programada" },
  { id: "SAL-004", tourKey: "Tour destino ejemplo - Montañas", tourName: "Tour destino ejemplo - Montañas", date: "2026-09-15", start: "06:30", end: "17:00", tourCapacity: 30, vehicles: [OPERATOR_FLEET["Bus Andino 01"]], status: "Programada" },
  { id: "SAL-005", tourKey: "Ruta Andina", tourName: "Ruta Andina", date: "2026-09-18", start: "06:30", end: "18:00", tourCapacity: 20, vehicles: [OPERATOR_FLEET["Bus Andino 01"]], status: "Cancelada", cancellation: { causal: "Contingencia operativa: cierre de la vía principal del recorrido", origin: "no-atribuible", at: "2026-09-01T09:00:00-05:00", by: "Fernanda Robayo (Administrador del tenant)" } },
  { id: "SAL-006", tourKey: "Tour de ejemplo", tourName: "Tour de ejemplo", date: "2026-09-20", start: "07:00", end: "16:00", tourCapacity: 15, vehicles: [OPERATOR_FLEET["Van 02"]], status: "Programada" },
  { id: "SAL-007", tourKey: "Ruta Andina", tourName: "Ruta Andina", date: "2026-09-22", start: "06:30", end: "18:00", tourCapacity: 20, vehicles: [OPERATOR_FLEET["Van 02"], OPERATOR_FLEET["Van 03"]], status: "Programada" },
  { id: "SAL-008", tourKey: "Tour destino ejemplo - Montañas", tourName: "Tour destino ejemplo - Montañas", date: "2026-09-22", start: "06:30", end: "17:00", tourCapacity: 30, vehicles: [OPERATOR_FLEET["Bus Andino 01"]], seededHeld: 26, status: "Programada" },
  { id: "SAL-009", tourKey: "Ruta Andina", tourName: "Ruta Andina", date: "2026-09-25", start: "06:30", end: "18:00", tourCapacity: 20, vehicles: [OPERATOR_FLEET["Bus Andino 01"]], status: "Programada" },
  { id: "SAL-010", tourKey: "Recorrido cultural e histórico", tourName: "Recorrido cultural e histórico", date: "2026-09-23", start: "08:00", end: "13:00", tourCapacity: 6, vehicles: [OPERATOR_FLEET["Van 02"]], seededHeld: 6, status: "Programada" },
  { id: "SAL-011", tourKey: "Tour destino ejemplo - Montañas", tourName: "Tour destino ejemplo - Montañas", date: "2026-09-29", start: "06:30", end: "17:00", tourCapacity: 30, vehicles: [OPERATOR_FLEET["Bus Andino 01"]], status: "Programada" },
  { id: "SAL-012", tourKey: "Aventura en cenotes ocultos", tourName: "Aventura en cenotes ocultos", date: "2026-09-12", start: "08:00", end: "15:00", tourCapacity: 12, vehicles: [OPERATOR_FLEET["Van 03"]], status: "Programada" },
  { id: "SAL-013", tourKey: "Aventura en cenotes ocultos", tourName: "Aventura en cenotes ocultos", date: "2026-09-19", start: "08:00", end: "15:00", tourCapacity: 12, vehicles: [OPERATOR_FLEET["Van 03"]], status: "Programada" },
  { id: "SAL-014", tourKey: "Rafting y acampada extrema", tourName: "Rafting y acampada extrema", date: "2026-09-27", start: "07:00", end: "17:00", tourCapacity: 16, vehicles: [OPERATOR_FLEET["Van 02"], OPERATOR_FLEET["Van 03"]], status: "Programada" },
  { id: "SAL-015", tourKey: "Recorrido cultural e histórico", tourName: "Recorrido cultural e histórico", date: "2026-09-16", start: "08:00", end: "13:00", tourCapacity: 12, vehicles: [OPERATOR_FLEET["Van 02"]], status: "Programada" },
  { id: "SAL-016", tourKey: "Recorrido cultural e histórico", tourName: "Recorrido cultural e histórico", date: "2026-09-30", start: "08:00", end: "13:00", tourCapacity: 12, vehicles: [OPERATOR_FLEET["Van 02"]], status: "Programada" },
  { id: "SAL-017", tourKey: "Tour destino ejemplo - Montañas", tourName: "Tour destino ejemplo - Montañas", date: "2026-08-29", start: "06:30", end: "17:00", tourCapacity: 30, vehicles: [OPERATOR_FLEET["Bus Andino 01"]], status: "Finalizada", realStartAt: "2026-08-29T06:35:00-05:00", realEndAt: "2026-08-29T16:45:00-05:00" },
  { id: "SAL-019", tourKey: "Tour destino ejemplo - Montañas", tourName: "Tour destino ejemplo - Montañas", date: "2026-09-24", start: "06:30", end: "17:00", tourCapacity: 8, vehicles: [OPERATOR_FLEET["Van 03"]], seededHeld: 8, status: "Programada" },
  { id: "SAL-018", tourKey: "Rafting y acampada extrema", tourName: "Rafting y acampada extrema", date: "2026-08-27", start: "07:00", end: "17:00", tourCapacity: 16, vehicles: [OPERATOR_FLEET["Van 02"], OPERATOR_FLEET["Van 03"]], status: "Finalizada", realStartAt: "2026-08-27T07:00:00-05:00", realEndAt: "2026-08-27T16:30:00-05:00" },
];

// Salida de cada reserva de demostración (las reservas creadas desde Crear reserva guardan su
// propia salida).
const OPERATOR_DEMO_RESERVATION_DEPARTURE = {
  "RES-1842": "SAL-004", "RES-1841": "SAL-003", "RES-1840": "SAL-001", "RES-1837": "SAL-008",
  "RES-1829": "SAL-017", "RES-1822": "SAL-018", "RES-1843": "SAL-005", "RES-1844": "SAL-006",
  "RES-1845": "SAL-007", "RES-1846": "SAL-005",
};

function readOperatorDepartureStore() {
  const stored = readOperatorStorage(OPERATOR_DEPARTURES_KEY, {});
  return { created: Array.isArray(stored.created) ? stored.created : [], patches: stored.patches && typeof stored.patches === "object" ? stored.patches : {} };
}

function writeOperatorDepartureStore(store) {
  writeOperatorStorage(OPERATOR_DEPARTURES_KEY, store);
}

function decorateOperatorDeparture(raw) {
  const departure = { vehicles: [], seededHeld: 0, history: [], ...raw };
  departure.startAt = operatorDepartureAt(departure.date, departure.start);
  departure.endAt = operatorDepartureAt(departure.date, departure.end);
  departure.label = `${formatOperatorDate(departure.date)} · ${departure.start}`;
  return departure;
}

function getOperatorDeparturesRaw() {
  const store = readOperatorDepartureStore();
  return [...OPERATOR_BASE_DEPARTURES, ...store.created]
    .map((item) => decorateOperatorDeparture({ ...item, ...(store.patches[item.id] || {}) }))
    .sort((a, b) => new Date(a.startAt) - new Date(b.startAt));
}

function getOperatorDepartureRaw(id) {
  return getOperatorDeparturesRaw().find((item) => item.id === id) || null;
}

function getNextOperatorDepartureId() {
  const numbers = getOperatorDeparturesRaw().map((item) => Number(String(item.id).replace(/\D/g, ""))).filter(Boolean);
  return `SAL-${String(Math.max(0, ...numbers) + 1).padStart(3, "0")}`;
}

// Aplica un parche a la salida (estado, ejecución, cancelación) y agrega una entrada de
// trazabilidad con actor, fecha y hora.
function patchOperatorDeparture(id, patch, historyEntry) {
  const store = readOperatorDepartureStore();
  const current = getOperatorDepartureRaw(id);
  if (!current) return null;
  const history = [...(current.history || [])];
  if (historyEntry) history.push({ at: getOperatorNow().toISOString(), actor: getOperatorActorLabel(), ...historyEntry });
  store.patches[id] = { ...(store.patches[id] || {}), ...patch, history };
  writeOperatorDepartureStore(store);
  return getOperatorDepartureRaw(id);
}

function createOperatorDeparture(input) {
  const store = readOperatorDepartureStore();
  const id = getNextOperatorDepartureId();
  store.created.push({
    id,
    tourKey: input.tourKey,
    tourName: input.tourName,
    date: input.date,
    start: input.start,
    end: input.end,
    tourCapacity: input.tourCapacity,
    vehicles: input.vehicles,
    seededHeld: 0,
    status: "Programada",
    history: [{ at: getOperatorNow().toISOString(), actor: getOperatorActorLabel(), action: "Salida programada", detail: input.detail || "" }],
  });
  writeOperatorDepartureStore(store);
  return getOperatorDepartureRaw(id);
}

// Flota asignable: demostración + transportes activos del catálogo con capacidad definida.
function getOperatorAssignableVehicles() {
  const list = OPERATOR_DEMO_FLEET.map((vehicle) => ({ ...vehicle }));
  getOperatorActiveTransportOptions().forEach((option) => {
    if (option.capacity > 0 && !list.some((vehicle) => vehicle.name === option.name)) list.push({ name: option.name, capacity: option.capacity });
  });
  return list;
}

function operatorDepartureVehicleCapacity(departure) {
  return (departure.vehicles || []).reduce((sum, vehicle) => sum + Number(vehicle.capacity || 0), 0);
}

// RN-SAL-001: capacidad efectiva = menor entre el cupo del tour y la capacidad total de los
// vehículos asignados (cuando hay transporte asignado).
function operatorDepartureEffectiveCapacity(departure) {
  const tourCapacity = Math.max(Number(departure.tourCapacity) || 0, 0);
  return (departure.vehicles || []).length ? Math.min(tourCapacity, operatorDepartureVehicleCapacity(departure)) : tourCapacity;
}

function operatorDeparturesOverlap(a, b) {
  return new Date(a.startAt) < new Date(b.endAt) && new Date(b.startAt) < new Date(a.endAt);
}

function findOperatorVehicleConflicts(vehicleName, candidate, ignoreId) {
  return getOperatorDeparturesRaw().filter((item) => item.id !== ignoreId && item.status !== "Cancelada"
    && (item.vehicles || []).some((vehicle) => vehicle.name === vehicleName) && operatorDeparturesOverlap(candidate, item));
}

// --- Episodios de reprogramación (RN-EJE-002, L1, I2, K3, FINAL-010/011) -------------------
function getOperatorReprogramEpisodes() {
  const stored = readOperatorStorage(OPERATOR_REPROGRAM_EPISODES_KEY, {});
  // Episodio de demostración: RES-1846 ya tiene una propuesta enviada para la salida SAL-009.
  const seed = {
    "RES-1846": {
      code: "RES-1846", originalDepartureId: "SAL-005", startedAt: "2026-09-01T09:00:00-05:00", l1DueAt: "2026-09-02T09:00:00-05:00",
      limitAt: "2026-09-05T09:00:00-05:00", status: "Propuesta enviada", proposedDepartureId: "SAL-009",
      notifiedAt: "2026-09-01T10:00:00-05:00", responseDueAt: "2026-09-04T10:00:00-05:00", history: [{ at: "2026-09-01T10:00:00-05:00", actor: "Fernanda Robayo (Administrador del tenant)", action: "Propuesta enviada", detail: "Salida propuesta SAL-009 (25 sep 2026 · 06:30)" }],
    },
  };
  const merged = { ...seed, ...stored };
  // La respuesta que el cliente registra desde su panel (propuesta-reprogramacion.html) también
  // resuelve el episodio del mismo caso de demostración (RES-1846).
  const clientResponse = readOperatorStorage(CLIENT_REPROGRAM_RESPONSE_KEY, null);
  const episode = merged["RES-1846"];
  if (clientResponse && episode && episode.status === "Propuesta enviada") {
    merged["RES-1846"] = {
      ...episode,
      status: clientResponse.decision === "aceptar" ? "Aceptada" : clientResponse.decision === "rechazar" ? "Rechazada" : "Vencida",
      derivedFromClient: true,
      response: { decision: clientResponse.decision, channel: "Panel del cliente", evidence: "Respuesta registrada por el cliente desde su panel", actor: clientResponse.respondedBy || "Cliente", respondedAt: clientResponse.respondedAt, source: "cliente" },
    };
  }
  return merged;
}

// Si el cliente rechazó la propuesta (o venció) desde su panel, la reserva ya figura Cancelada
// en sus datos: se determina y autoriza automáticamente la devolución del 100 % de lo validado.
function ensureOperatorClientReprogramRefund() {
  const episode = getOperatorReprogramEpisodes()["RES-1846"];
  if (!episode || !episode.derivedFromClient || episode.status === "Aceptada") return;
  if (getOperatorRefundRequests().some((request) => request.reservationCode === "RES-1846")) return;
  const record = getUnifiedOperatorReservation("RES-1846");
  if (!record || !(record.paidValue > 0)) return;
  const determination = computeOperatorRefundDetermination({ paid: record.paidValue, origin: "no-atribuible" });
  setOperatorRefundOrigin("RES-1846", {
    type: "Cancelación",
    causal: episode.status === "Vencida" ? "Vencimiento del plazo de reprogramación (causa no atribuible al cliente): devolución del 100 %" : "Rechazo de la reprogramación por el cliente (causa no atribuible al cliente): devolución del 100 %",
    origin: determination.origin,
    potentialAmount: formatCOP(determination.amount),
    potentialValue: determination.amount,
    penalty: 0,
    penaltyPercent: 0,
    ruleLabel: determination.ruleLabel,
    pendingCalculation: false,
    registeredAt: getOperatorNow().toISOString(),
  });
  createOperatorRefundRequest("RES-1846", { motive: "Reprogramación no aceptada por el cliente: devolución del 100 %", requestedBy: "Multitour (determinación automática)" });
}

function saveOperatorReprogramEpisode(episode) {
  const stored = readOperatorStorage(OPERATOR_REPROGRAM_EPISODES_KEY, {});
  stored[episode.code] = episode;
  writeOperatorStorage(OPERATOR_REPROGRAM_EPISODES_KEY, stored);
  return episode;
}

function appendOperatorEpisodeHistory(episode, action, detail, { at = "", actor = "" } = {}) {
  return { ...episode, history: [...(episode.history || []), { at: (at ? new Date(at) : getOperatorNow()).toISOString(), actor: actor || getOperatorActorLabel(), action, detail: detail || "" }] };
}

// ¿A qué salida pertenece hoy la reserva? Una reprogramación aceptada o un cambio de fecha
// trasladan la reserva a otra salida; mientras la propuesta está pendiente la reserva
// conserva la salida original (cancelada o interrumpida).
function getOperatorReservationDepartureId(record) {
  if (!record) return null;
  const episode = getOperatorReprogramEpisodes()[record.code];
  if (episode && episode.status === "Aceptada" && episode.proposedDepartureId) return episode.proposedDepartureId;
  const modification = getOperatorReservationModification(record.code);
  if (modification?.departureId) return modification.departureId;
  return record.departureId || OPERATOR_DEMO_RESERVATION_DEPARTURE[record.code] || null;
}

function getOperatorReservationDeparture(record) {
  const id = getOperatorReservationDepartureId(record);
  return id ? getOperatorDepartureRaw(id) : null;
}

// El cupo se aparta con el primer pago (RN-RES-007): pago validado o comprobante presentado
// (En validación o Aprobado). Una reserva Cancelada libera su cupo.
function operatorReservationHoldsSeat(record) {
  if (!record || record.status === "Cancelada") return false;
  if (Number(record.paidValue || 0) > 0 || record.confirmation) return true;
  return getOperatorReceiptList(record.code).some((receipt) => receipt.status === "En validación" || receipt.status === "Aprobado");
}

function getOperatorDepartureOccupancy(departure, reservations) {
  const all = reservations || getUnifiedOperatorReservations();
  let held = Number(departure.seededHeld || 0);
  const holders = [];
  const reservationsOfDeparture = [];
  Object.values(all).forEach((record) => {
    if (getOperatorReservationDepartureId(record) !== departure.id) return;
    reservationsOfDeparture.push(record);
    if (!operatorReservationHoldsSeat(record)) return;
    held += Number(record.travelers) || 0;
    holders.push(record.code);
  });
  // K3: una propuesta de reprogramación pendiente aparta los cupos en la salida propuesta.
  let proposalSeats = 0;
  Object.values(getOperatorReprogramEpisodes()).forEach((episode) => {
    if (episode.status !== "Propuesta enviada" || episode.proposedDepartureId !== departure.id) return;
    proposalSeats += Number(all[episode.code]?.travelers) || 0;
  });
  return { held: held + proposalSeats, proposalSeats, holders, reservations: reservationsOfDeparture };
}

// Salidas con capacidad efectiva, cupos apartados, disponibilidad y alertas (J3, L4).
function getOperatorDepartures() {
  const reservations = getUnifiedOperatorReservations();
  const now = getOperatorNow();
  return getOperatorDeparturesRaw().map((departure) => {
    const occupancy = getOperatorDepartureOccupancy(departure, reservations);
    const effectiveCapacity = operatorDepartureEffectiveCapacity(departure);
    const available = Math.max(effectiveCapacity - occupancy.held, 0);
    const open = departure.status === "Programada" || departure.status === "En ejecución";
    return {
      ...departure,
      effectiveCapacity,
      vehicleCapacity: operatorDepartureVehicleCapacity(departure),
      held: occupancy.held,
      proposalSeats: occupancy.proposalSeats,
      holders: occupancy.holders,
      reservationCodes: occupancy.reservations.map((item) => item.code),
      available,
      isFull: effectiveCapacity > 0 && available <= 0,
      // J3: alerta al alcanzar la hora de inicio sin registro; L4: marca al superar el fin estimado.
      startAlert: departure.status === "Programada" && new Date(departure.startAt) <= now,
      pendingRegularization: open && new Date(departure.endAt) < now,
      bookable: departure.status === "Programada" && new Date(departure.startAt) > now && available > 0,
    };
  });
}

function getOperatorDeparture(id) {
  return getOperatorDepartures().find((item) => item.id === id) || null;
}

// Salidas reservables de un tour (el cliente y Crear reserva solo ofrecen salidas
// Programadas, futuras y con cupo; una salida llena no admite nuevas reservas, G9).
function getOperatorBookableDepartures(tourKeyOrName) {
  return getOperatorDepartures().filter((item) => (item.tourKey === tourKeyOrName || item.tourName === tourKeyOrName) && item.bookable);
}

function operatorDepartureTextStatus(departure) {
  const marks = [];
  if (departure.pendingRegularization) marks.push("pendiente de regularización");
  else if (departure.startAlert) marks.push("hora de inicio alcanzada sin registro");
  return marks.join(" · ");
}

function operatorDepartureStatusClass(status) {
  return ({ "Programada": "is-pending", "En ejecución": "is-execution", "Finalizada": "is-finalized", "Cancelada": "is-cancelled" })[status] || "is-pending";
}

// Validación de una salida (RF-020, RN-SAL-001). Devuelve errores legibles y la capacidad
// efectiva resultante. `held` evita reducir la capacidad por debajo de lo apartado (H8).
function validateOperatorDepartureInput(input, { ignoreId = "", held = 0 } = {}) {
  const errors = [];
  if (!input.tourKey) errors.push("Selecciona el tour.");
  if (!input.date) errors.push("Indica la fecha de la salida.");
  if (!input.start) errors.push("Indica la hora de inicio programada.");
  if (!input.end) errors.push("Indica la hora de finalización estimada.");
  if (input.start && input.end && input.end <= input.start) errors.push("La hora de finalización estimada debe ser posterior a la hora de inicio.");
  if (!(Number(input.tourCapacity) >= 1)) errors.push("El cupo del tour debe ser de al menos 1 viajero.");
  const candidate = decorateOperatorDeparture({ id: ignoreId || "NUEVA", date: input.date || "2000-01-01", start: input.start || "00:00", end: input.end || "00:01", vehicles: input.vehicles || [] });
  (input.vehicles || []).forEach((vehicle) => {
    const conflicts = findOperatorVehicleConflicts(vehicle.name, candidate, ignoreId);
    if (conflicts.length) errors.push(`${vehicle.name} ya está asignado a ${conflicts.map((item) => item.id).join(", ")} en un horario que se superpone.`);
  });
  const draft = { tourCapacity: Number(input.tourCapacity) || 0, vehicles: input.vehicles || [] };
  const effectiveCapacity = operatorDepartureEffectiveCapacity(draft);
  if (input.transportRequired && !(input.vehicles || []).length) errors.push("El tour tiene transporte asociado: asigna al menos un vehículo.");
  if (effectiveCapacity < held) errors.push(`La capacidad efectiva (${effectiveCapacity}) no puede ser inferior a los cupos ya apartados (${held}).`);
  return { ok: errors.length === 0, errors, effectiveCapacity };
}

// --- Plazos de pago (RN-RES-006, E15, G1, H1, Q3, D4, L6) --------------------------------
const OPERATOR_PAYMENT_DEADLINE_HOURS = { "Pago total": 48, "Abono": 24 }; // plazo inicial por tipo de pago (parametrizable por el tenant)
const OPERATOR_BALANCE_HOURS_BEFORE_DEPARTURE = 24; // plazo del saldo del abono antes del inicio de la salida (parametrizable por el tenant)
const OPERATOR_PAYMENT_EXTENSION_HOURS = 24; // duración de la única ampliación (parametrizable por el tenant)
const OPERATOR_PAYMENT_EXTENSIONS_KEY = "multitour-payment-extensions";
const OPERATOR_DEMO_CREATED_AT = {
  "RES-1842": "2026-08-31T10:00:00-05:00",
  "RES-1837": "2026-08-30T09:00:00-05:00",
  "RES-1843": "2026-08-31T09:00:00-05:00",
};

function getOperatorPaymentExtensions() {
  return readOperatorStorage(OPERATOR_PAYMENT_EXTENSIONS_KEY, {});
}

// Plazo de pago de una reserva: inicio en la creación, duración por tipo de pago, una única
// ampliación registrada y límite absoluto en la hora programada de inicio de la salida. Un
// plazo de una reserva cuya salida fue cancelada o interrumpida (causa no atribuible) queda
// congelado (Q3). Una reserva Confirmada con saldo debe pagarlo antes del inicio de la salida.
function getOperatorPaymentDeadline(record) {
  if (!record) return null;
  const departure = getOperatorReservationDeparture(record);
  const extension = getOperatorPaymentExtensions()[record.code] || null;
  const payParams = record.paymentParams || getOperatorPaymentParams(record.service);
  const initialHours = record.paymentType === "Abono" ? payParams.initialHoursDeposit : payParams.initialHoursTotal;
  const createdAtIso = record.createdAtIso || OPERATOR_DEMO_CREATED_AT[record.code] || "";
  const frozen = Boolean(departure && departure.status === "Cancelada" && departure.cancellation?.origin !== "incumplimiento-pago");
  const departureStart = departure ? new Date(departure.startAt) : null;
  let applies = false;
  let dueAt = null;
  let configuredDueAt = null;
  if (record.status === "Pendiente de pago") {
    applies = true;
    if (createdAtIso) {
      configuredDueAt = new Date(new Date(createdAtIso).getTime() + (initialHours + (extension ? Number(extension.hours) : 0)) * OPERATOR_HOUR_MS);
    }
    dueAt = configuredDueAt;
  } else if (record.status === "Confirmada" && record.balanceValue > 0) {
    applies = true;
    // D4: el tenant define el plazo del saldo (antes de la hora de inicio, nunca después). En pago
    // total la diferencia generada por una modificación se paga antes del inicio; en abono, si la
    // diferencia se genera cuando el plazo del saldo ya venció, también se paga antes del inicio (L6).
    if (departureStart) {
      dueAt = departureStart;
      if (record.paymentType === "Abono") {
        const balanceDue = new Date(departureStart.getTime() - payParams.balanceHoursBefore * OPERATOR_HOUR_MS);
        const modifiedAt = getOperatorReservationModification(record.code)?.registeredAt;
        dueAt = modifiedAt && new Date(modifiedAt) >= balanceDue ? departureStart : balanceDue;
      }
    }
  }
  // Tenant inactivo: el plazo (pago inicial, ampliación o saldo) se suspende y continúa con el
  // tiempo restante al reactivarse (AC-01). La hora de inicio de la salida no se desplaza.
  if (dueAt && createdAtIso) {
    dueAt = shiftOperatorDeadlineForSuspension(createdAtIso, dueAt);
    if (configuredDueAt) configuredDueAt = dueAt;
  }
  const limitedByDeparture = Boolean(departureStart && (!dueAt || departureStart <= dueAt));
  const effectiveDueAt = dueAt && departureStart ? (departureStart < dueAt ? departureStart : dueAt) : (dueAt || departureStart || null);
  const now = getOperatorNow();
  const hasReceiptInValidation = record.receiptStatus === "En validación";
  const overdue = Boolean(applies && !frozen && effectiveDueAt && now >= effectiveDueAt);
  return {
    applies,
    frozen,
    initialHours,
    extension,
    extensionAvailable: !extension && applies && !frozen && record.status === "Pendiente de pago",
    createdAtIso,
    configuredDueAt,
    effectiveDueAt,
    limitedByDeparture,
    overdue,
    hasReceiptInValidation,
    departure,
    hoursLeft: effectiveDueAt ? Math.round(((effectiveDueAt - now) / OPERATOR_HOUR_MS) * 10) / 10 : null,
  };
}

function describeOperatorPaymentDeadline(deadline) {
  if (!deadline) return "Sin información de plazo.";
  if (deadline.frozen) return "Plazo congelado: la salida fue cancelada o interrumpida por una causa no atribuible al cliente (la reserva se gestiona con la reprogramación).";
  if (!deadline.applies) return "La reserva no tiene un plazo de pago vigente.";
  if (!deadline.effectiveDueAt) return "Sin fecha de creación registrada para calcular el plazo.";
  const dueText = formatOperatorTenantDateTime(deadline.effectiveDueAt.toISOString());
  const parts = [`Vence el ${dueText}`];
  if (deadline.configuredDueAt) parts.push(`plazo inicial de ${deadline.initialHours} h desde la creación${deadline.extension ? ` más una ampliación de ${deadline.extension.hours} h` : ""}`);
  if (deadline.limitedByDeparture) parts.push("el vencimiento efectivo no supera la hora programada de inicio de la salida");
  if (deadline.overdue) parts.push(deadline.hasReceiptInValidation ? "plazo cumplido: el comprobante En validación conserva la reserva y el cupo hasta su decisión" : "plazo vencido: la reserva se cancela automáticamente y libera el cupo");
  return `${parts.join(" · ")}.`;
}

// La ampliación es única, la conceden el Colaborador operativo o el Administrador del tenant
// antes del vencimiento y queda registrada con duración, fecha, hora y responsable.
function grantOperatorPaymentExtension(code, hours) {
  if (isOperatorQueryOnlyRole()) return { ok: false, error: "Tu rol es de solo consulta: no puede conceder ampliaciones." };
  const record = getUnifiedOperatorReservation(code);
  if (!record) return { ok: false, error: "No se encontró la reserva." };
  const deadline = getOperatorPaymentDeadline(record);
  if (record.status !== "Pendiente de pago") return { ok: false, error: "Solo una reserva Pendiente de pago admite ampliación del plazo." };
  if (deadline.extension) return { ok: false, error: "El plazo ya tuvo su única ampliación." };
  if (deadline.frozen) return { ok: false, error: "El plazo está congelado por la cancelación o interrupción de la salida." };
  if (deadline.overdue) return { ok: false, error: "El plazo ya venció: la ampliación debe concederse antes del vencimiento." };
  const duration = Math.round(Number(hours));
  if (!(duration >= 1)) return { ok: false, error: "Indica la duración de la ampliación en horas (mínimo 1)." };
  const maxExtension = getOperatorReservationPaymentParams(record).extensionHours;
  if (duration > maxExtension) return { ok: false, error: `La ampliación no puede superar ${maxExtension} h (parámetro de pago del tenant).` };
  const all = getOperatorPaymentExtensions();
  all[code] = { hours: duration, at: getOperatorNow().toISOString(), actor: getOperatorActorLabel() };
  writeOperatorStorage(OPERATOR_PAYMENT_EXTENSIONS_KEY, all);
  return { ok: true, deadline: getOperatorPaymentDeadline(getUnifiedOperatorReservation(code)) };
}

// Primer pago: valida la salida y el cupo antes de recibir el dinero o el comprobante
// (RN-RES-007). Desde la hora programada de inicio no se aceptan pagos (RN-EJE-001).
function checkOperatorPaymentAllowedForDeparture(record) {
  if (isOperatorTenantInactive()) return { ok: false, error: "Operador inactivo: no se reciben pagos ni comprobantes nuevos (solo se validan los comprobantes presentados antes de la inactivación)." };
  const departure = getOperatorReservationDeparture(record);
  if (!departure) return { ok: true };
  if (departure.status === "Cancelada") return { ok: false, error: "La salida de esta reserva fue cancelada: no se registran pagos nuevos. La reserva se gestiona con la reprogramación." };
  if (departure.status !== "Programada" || new Date(departure.startAt) <= getOperatorNow()) {
    return { ok: false, error: "Se alcanzó la hora programada de inicio de la salida: ya no se aceptan pagos ni comprobantes." };
  }
  if (!operatorReservationHoldsSeat(record)) {
    const live = getOperatorDeparture(departure.id);
    if (live && live.available < Number(record.travelers || 0)) {
      return { ok: false, error: `La salida ${departure.id} no tiene cupo suficiente (${live.available} disponible${live.available === 1 ? "" : "s"} para ${record.travelers} viajeros): el sistema no recibe el primer pago ni aparta cupo.` };
    }
  }
  return { ok: true };
}


// --- Devoluciones derivadas de cancelaciones automáticas, reprogramaciones y emergencias ------
// Crea la solicitud de devolución de una reserva a partir del origen ya registrado
// (setOperatorRefundOrigin). Las causas no atribuibles al cliente y la emergencia personal se
// determinan y autorizan automáticamente (100 % o monto de la política); la cancelación del
// cliente, el incumplimiento de pago y el excedente por modificación abren la decisión de 24
// horas del Administrador del tenant (devolución del 100 % por defecto o saldo a favor).
function createOperatorRefundRequest(code, { motive = "", note = "", requestedBy = "", at = "" } = {}) {
  const reservation = getUnifiedOperatorReservation(code);
  const origin = getOperatorRefundOrigin(code);
  if (!reservation || !origin) return { ok: false, error: "La reserva no tiene una cancelación o modificación con valor a devolver determinado." };
  const list = getOperatorRefundRequests();
  const existing = list.find((request) => request.reservationCode === code && request.status !== "Rechazada");
  if (existing) return { ok: false, error: "Ya existe una solicitud de devolución registrada para esta reserva.", request: existing };
  const automatic = origin.origin === "no-atribuible" || origin.origin === "emergencia-personal";
  const now = at ? new Date(at) : getOperatorNow();
  const request = {
    id: `refund-${now.getTime()}-${list.length + 1}`,
    reservationCode: code,
    customer: reservation.customer,
    reason: motive || origin.causal,
    administrativeNote: note,
    amount: origin.potentialAmount,
    amountValue: origin.potentialValue ?? parseCOP(origin.potentialAmount),
    origin: origin.origin,
    ruleLabel: origin.ruleLabel || "",
    penalty: origin.penalty || 0,
    pendingCalculation: false,
    requestedAt: getOperatorTenantDateKey(now),
    requestedBy: requestedBy || getOperatorActorLabel(),
    kind: automatic ? "automatica" : "tratamiento",
  };
  if (automatic) {
    Object.assign(request, {
      status: "Autorizada",
      autoDetermined: true,
      authorizedBy: "Multitour (determinación automática)",
      authorizedAt: now.toISOString(),
      authorizationNote: `Determinación automática: ${origin.ruleLabel || "devolución del 100 %"} Queda pendiente de ejecución en máximo 5 días hábiles; no implica que el dinero haya sido devuelto.`,
      executionDueAt: addOperatorBusinessDays(now, OPERATOR_REFUND_EXECUTION_BUSINESS_DAYS).toISOString(),
      adminsNotified: true,
    });
  } else {
    request.status = "Pendiente de autorización";
    request.decisionDueAt = new Date(now.getTime() + OPERATOR_REFUND_DECISION_MS).toISOString();
  }
  list.push(request);
  saveOperatorRefundRequests(list);
  return { ok: true, request };
}

// Cancelación de una reserva por una causa del sistema o del tenant (incumplimiento de pago
// al iniciar la salida, vencimiento de la reprogramación, salida no realizada). Registra la
// cancelación, determina el valor a devolver según la causa y abre la solicitud de devolución
// o de tratamiento pendiente.
function cancelOperatorReservationByCause(code, { causal, origin, automatic = true, at = "" }) {
  const before = getUnifiedOperatorReservation(code);
  if (!before || before.status === "Cancelada") return { ok: false };
  const registeredAt = (at ? new Date(at) : getOperatorNow()).toISOString();
  setOperatorReservationCancellation(code, { causal, origin, registeredAt, registeredBy: automatic ? "Multitour (cancelación automática)" : getOperatorActorLabel(), automatic });
  const after = getUnifiedOperatorReservation(code);
  const base = origin === "incumplimiento-pago" ? after.pendingTreatmentValue : after.paidValue;
  let request = null;
  if (base > 0) {
    const determination = computeOperatorRefundDetermination({ paid: base, origin, penaltyPercent: origin === "cliente" ? getOperatorCancellationPenaltyPercent(after.service) : 0 });
    setOperatorRefundOrigin(code, {
      type: "Cancelación",
      causal,
      origin: determination.origin,
      potentialAmount: formatCOP(determination.amount),
      potentialValue: determination.amount,
      penalty: determination.penalty,
      penaltyPercent: determination.penaltyPercent,
      ruleLabel: determination.ruleLabel,
      pendingCalculation: false,
      registeredAt,
    });
    request = createOperatorRefundRequest(code, { motive: causal, requestedBy: automatic ? "Multitour (cancelación automática)" : "", at: registeredAt }).request || null;
  }
  return { ok: true, request, base };
}

// Reservas cuya cancelación por incumplimiento de pago dejó valores abonados sin solicitud de
// tratamiento (por ejemplo, datos de demostración): se abre la decisión de 24 horas.
function ensureOperatorTreatmentRequests() {
  ensureOperatorClientReprogramRefund();
  Object.values(getUnifiedOperatorReservations()).forEach((record) => {
    if (record.status !== "Cancelada" || record.pendingTreatmentValue <= 0) return;
    const nature = record.cancellationNature || getOperatorReservationCancellation(record.code)?.origin;
    if (nature !== "incumplimiento-pago") return;
    if (getOperatorRefundRequests().some((request) => request.reservationCode === record.code)) return;
    if (!getOperatorRefundOrigin(record.code)) {
      const determination = computeOperatorRefundDetermination({ paid: record.pendingTreatmentValue, origin: "incumplimiento-pago" });
      setOperatorRefundOrigin(record.code, {
        type: "Cancelación",
        causal: record.cancellationCause || "Cancelación por incumplimiento del pago",
        origin: determination.origin,
        potentialAmount: formatCOP(determination.amount),
        potentialValue: determination.amount,
        penalty: 0,
        penaltyPercent: 0,
        ruleLabel: determination.ruleLabel,
        pendingCalculation: false,
        registeredAt: getOperatorNow().toISOString(),
      });
    }
    const created = createOperatorRefundRequest(record.code, { motive: record.cancellationCause || "Cancelación por incumplimiento del pago", requestedBy: "Multitour (cancelación automática)" });
    // El reconocimiento del dinero ocurrió 18 horas antes: la decisión de 24 horas ya corre.
    // Línea de tiempo fija de la demostración (no depende del reloj actual): el dinero se reconoció
    // 18 horas antes del instante de referencia, de modo que la decisión vence 6 horas después.
    const demoBase = new Date(OPERATOR_DEMO_CLOCK_BASE).getTime();
    if (created.ok) updateOperatorRefundRequest(created.request.id, { decisionDueAt: new Date(demoBase + 6 * OPERATOR_HOUR_MS).toISOString(), requestedAt: getOperatorTenantDateKey(new Date(demoBase - 18 * OPERATOR_HOUR_MS)) });
  });
}

// --- Episodios de reprogramación -----------------------------------------------------------
function ensureOperatorReprogramEpisodes() {
  ensureOperatorClientReprogramRefund();
  const episodes = getOperatorReprogramEpisodes();
  const departures = getOperatorDeparturesRaw();
  Object.values(getUnifiedOperatorReservations()).forEach((record) => {
    if (["Cancelada", "Finalizada"].includes(record.status)) return;
    const departureId = getOperatorReservationDepartureId(record);
    const departure = departures.find((item) => item.id === departureId);
    if (!departure) return;
    const cancelled = departure.status === "Cancelada" && departure.cancellation?.origin !== "incumplimiento-pago";
    const interrupted = departure.status === "Finalizada" && departure.interruption && getOperatorReservationExecution(record.code) && !getOperatorReservationExecution(record.code).finalized;
    if (!cancelled && !interrupted) return;
    const existing = episodes[record.code];
    if (existing && !(existing.status === "Aceptada" && existing.proposedDepartureId === departure.id)) return;
    const startedAt = cancelled ? departure.cancellation?.at : departure.interruption?.at;
    if (!startedAt) return;
    const start = new Date(startedAt).getTime();
    saveOperatorReprogramEpisode({
      code: record.code,
      originalDepartureId: departure.id,
      startedAt,
      l1DueAt: new Date(start + OPERATOR_REPROGRAM_L1_HOURS * OPERATOR_HOUR_MS).toISOString(),
      limitAt: new Date(start + OPERATOR_REPROGRAM_EPISODE_LIMIT_HOURS * OPERATOR_HOUR_MS).toISOString(),
      status: "Pendiente de propuesta",
      reason: cancelled ? "Salida cancelada" : "Salida interrumpida",
      history: [{ at: getOperatorNow().toISOString(), actor: "Multitour", action: "Episodio de reprogramación abierto", detail: `${cancelled ? "Cancelación" : "Interrupción"} de ${departure.id}: plazo de 24 h para proponer una nueva salida (límite del episodio: 96 h).` }],
    });
  });
  return getOperatorReprogramEpisodes();
}

// Plazos vigentes de un episodio contra el reloj de referencia del mockup.
function getOperatorEpisodeTimers(episode) {
  const now = getOperatorNow();
  let limitAt = new Date(episode.limitAt);
  // Con una propuesta pendiente, la respuesta del cliente y el tiempo restante del episodio se
  // congelan mientras el tenant está inactivo (I2, FINAL-002, FINAL-011); el plazo L1 de 24 h
  // para proponer sin propuesta pendiente no se congela (GAP-001).
  let frozenMs = 0;
  if (episode.status === "Propuesta enviada" && episode.notifiedAt && episode.responseDueAt) {
    frozenMs = shiftOperatorDeadlineForSuspension(episode.notifiedAt, new Date(episode.responseDueAt)) - new Date(episode.responseDueAt);
    limitAt = new Date(limitAt.getTime() + frozenMs);
  }
  const timers = { limitAt, limitLeftMs: limitAt - now, frozenMs };
  if (episode.status === "Pendiente de propuesta") {
    const l1 = new Date(episode.l1DueAt);
    timers.proposalDueAt = l1 < limitAt ? l1 : limitAt;
    timers.proposalLeftMs = timers.proposalDueAt - now;
    timers.overdue = timers.proposalLeftMs <= 0;
  } else if (episode.status === "Propuesta enviada") {
    timers.responseDueAt = new Date(new Date(episode.responseDueAt).getTime() + frozenMs);
    timers.responseLeftMs = timers.responseDueAt - now;
    timers.overdue = timers.responseLeftMs <= 0;
  }
  return timers;
}

function formatOperatorDuration(ms) {
  const abs = Math.abs(ms);
  const hours = Math.floor(abs / OPERATOR_HOUR_MS);
  const minutes = Math.floor((abs % OPERATOR_HOUR_MS) / 60000);
  return `${ms < 0 ? "vencido hace " : ""}${hours} h ${String(minutes).padStart(2, "0")} min`;
}

// Un cambio de fecha de la reserva (misma reserva) o la aceptación de una reprogramación
// trasladan el cupo en una única operación: aquí solo se consulta si la nueva salida puede
// recibir a los viajeros (el cupo propio no se cuenta dos veces).
function canOperatorDepartureReceive(departure, travelers, ownCode = "") {
  const live = getOperatorDeparture(departure.id);
  if (!live) return { ok: false, error: "La salida no existe." };
  if (live.status !== "Programada") return { ok: false, error: `La salida ${live.id} está ${live.status}: no admite reservas.` };
  if (new Date(live.startAt) <= getOperatorNow()) return { ok: false, error: `La salida ${live.id} ya alcanzó su hora programada de inicio.` };
  const ownSeats = ownCode && live.holders.includes(ownCode) ? Number(getUnifiedOperatorReservation(ownCode)?.travelers || 0) : 0;
  if (live.available + ownSeats < travelers) return { ok: false, error: `La salida ${live.id} no tiene capacidad suficiente (${live.available + ownSeats} cupo(s) disponible(s) para ${travelers} viajeros).` };
  return { ok: true, departure: live };
}

function proposeOperatorReprogram(code, departureId) {
  if (isOperatorQueryOnlyRole()) return { ok: false, error: "Tu rol es de solo consulta." };
  if (!isOperatorAdmin()) return { ok: false, error: "Solo el Administrador del tenant propone la nueva salida." };
  const episode = getOperatorReprogramEpisodes()[code];
  const record = getUnifiedOperatorReservation(code);
  if (!episode || !record) return { ok: false, error: "La reserva no tiene un episodio de reprogramación abierto." };
  if (episode.status !== "Pendiente de propuesta") return { ok: false, error: "El episodio no admite una nueva propuesta en este momento." };
  const timers = getOperatorEpisodeTimers(episode);
  if (timers.limitLeftMs <= 0 || timers.overdue) return { ok: false, error: "El plazo para proponer una alternativa venció: la reserva se cancela con devolución del 100 %." };
  const target = getOperatorDeparture(departureId);
  const original = getOperatorDepartureRaw(episode.originalDepartureId);
  if (!target || target.id === episode.originalDepartureId) return { ok: false, error: "Selecciona una salida distinta de la cancelada o interrumpida." };
  if (original && target.tourKey !== original.tourKey) return { ok: false, error: "La salida propuesta debe ser del mismo tour (un cambio de servicio genera una reserva vinculada)." };
  const receive = canOperatorDepartureReceive(target, Number(record.travelers || 0));
  if (!receive.ok) return receive;
  const now = getOperatorNow();
  // I2/FINAL-011: respuesta = menor entre 72 h, lo que resta del episodio y la hora de la salida propuesta.
  const candidates = [now.getTime() + OPERATOR_REPROGRAM_RESPONSE_HOURS * OPERATOR_HOUR_MS, new Date(episode.limitAt).getTime(), new Date(target.startAt).getTime()];
  const responseDueAt = new Date(Math.min(...candidates)).toISOString();
  saveOperatorReprogramEpisode(appendOperatorEpisodeHistory({ ...episode, status: "Propuesta enviada", proposedDepartureId: target.id, notifiedAt: now.toISOString(), responseDueAt }, "Propuesta enviada", `Salida propuesta ${target.id} (${target.label}). Cupos apartados hasta la respuesta. Respuesta máxima: ${formatOperatorTenantDateTime(responseDueAt)}.`));
  return { ok: true, responseDueAt };
}

// Respuesta del cliente a la propuesta, registrada por un usuario interno cuando llega por un
// canal externo (GAP-008): evidencia, actor y fecha y hora. La aceptación conserva la misma
// reserva, sus pagos y su historial y la asigna a la nueva salida; el rechazo cancela la
// reserva con devolución del 100 % de los valores validados.
function registerOperatorReprogramResponse(code, { decision, channel = "", evidence = "", respondedAt = "" }) {
  if (isOperatorQueryOnlyRole()) return { ok: false, error: "Tu rol es de solo consulta." };
  const episode = getOperatorReprogramEpisodes()[code];
  if (!episode || episode.status !== "Propuesta enviada") return { ok: false, error: "La reserva no tiene una propuesta pendiente de respuesta." };
  if (!["aceptar", "rechazar"].includes(decision)) return { ok: false, error: "Selecciona la respuesta del cliente (acepta o rechaza)." };
  if (!String(evidence).trim()) return { ok: false, error: "Registra la evidencia de la respuesta del cliente (referencia, nombre del archivo o descripción)." };
  if (!channel) return { ok: false, error: "Indica el canal por el que llegó la respuesta." };
  const at = respondedAt ? new Date(respondedAt) : getOperatorNow();
  if (Number.isNaN(at.getTime())) return { ok: false, error: "La fecha y hora de la respuesta no es válida." };
  // FINAL-002: con el tenant inactivo el plazo del cliente está congelado; la respuesta externa que
  // registra el Administrador del tenant tiene efecto inmediato y se valida contra el plazo congelado.
  if (at > getOperatorEpisodeTimers(episode).responseDueAt) return { ok: false, error: "La respuesta llegó después del plazo de respuesta: aplica el vencimiento." };
  const response = { decision, channel, evidence: String(evidence).trim(), actor: getOperatorActorLabel(), respondedAt: at.toISOString(), recordedAt: getOperatorNow().toISOString(), source: "interno" };
  if (decision === "aceptar") {
    const target = getOperatorDeparture(episode.proposedDepartureId);
    if (!target || target.status !== "Programada") return { ok: false, error: "La salida propuesta dejó de ser viable: la propuesta queda sin efecto." };
    saveOperatorReprogramEpisode(appendOperatorEpisodeHistory({ ...episode, status: "Aceptada", response }, "Respuesta registrada: acepta", `Canal: ${channel}. Evidencia: ${response.evidence}`));
    const interruptedExecution = getOperatorReservationExecution(code);
    if (interruptedExecution && !interruptedExecution.finalized) setOperatorReservationExecution(code, { ...interruptedExecution, interruptedReturned: true });
  } else {
    saveOperatorReprogramEpisode(appendOperatorEpisodeHistory({ ...episode, status: "Rechazada", response }, "Respuesta registrada: rechaza", `Canal: ${channel}. Evidencia: ${response.evidence}`));
    cancelOperatorReservationByCause(code, { causal: "Rechazo de la reprogramación por el cliente (causa no atribuible al cliente): devolución del 100 %", origin: "no-atribuible", automatic: false });
  }
  // La pantalla del cliente lee la misma respuesta (RES-1846 es la reserva de demostración).
  if (code === "RES-1846") writeOperatorStorage(CLIENT_REPROGRAM_RESPONSE_KEY, { code, decision, respondedAt: at.toISOString(), source: "interno", actor: response.actor, channel, evidence: response.evidence });
  return { ok: true, decision };
}

function expireOperatorReprogram(code) {
  if (isOperatorQueryOnlyRole()) return { ok: false, error: "Tu rol es de solo consulta." };
  const episode = getOperatorReprogramEpisodes()[code];
  if (!episode || !["Pendiente de propuesta", "Propuesta enviada"].includes(episode.status)) return { ok: false, error: "El episodio ya está resuelto." };
  if (!getOperatorEpisodeTimers(episode).overdue && getOperatorEpisodeTimers(episode).limitLeftMs > 0) return { ok: false, error: "El plazo aún no vence." };
  return expireOperatorReprogramBySystem(code);
}

// Vencimiento del episodio (L1: 24 h sin propuesta; I2: 72 h sin respuesta; límite de 96 h). Lo aplica
// el sistema sin depender del rol de quien abre la pantalla; los efectos se fechan en el instante
// en que venció el plazo, no cuando se carga la página.
function expireOperatorReprogramBySystem(code) {
  const episode = getOperatorReprogramEpisodes()[code];
  if (!episode || !["Pendiente de propuesta", "Propuesta enviada"].includes(episode.status)) return { ok: false, error: "El episodio ya está resuelto." };
  const timers = getOperatorEpisodeTimers(episode);
  const dueCandidates = [timers.proposalDueAt, timers.responseDueAt, timers.limitAt].filter(Boolean).map((value) => value.getTime());
  const dueAt = new Date(Math.min(...dueCandidates, getOperatorNow().getTime())).toISOString();
  const byProposal = episode.status === "Pendiente de propuesta";
  saveOperatorReprogramEpisode(appendOperatorEpisodeHistory({ ...episode, status: "Vencida" }, "Plazo vencido", byProposal ? "Sin propuesta de nueva salida dentro de las 24 horas corridas (L1): cancelación con devolución del 100 %." : "Sin respuesta del cliente dentro del plazo de la propuesta (I2, 72 horas corridas como máximo): cancelación con devolución del 100 %.", { at: dueAt, actor: "Multitour (regla automática)" }));
  cancelOperatorReservationByCause(code, { causal: "Vencimiento del plazo de reprogramación (causa no atribuible al cliente): devolución del 100 %", origin: "no-atribuible", automatic: true, at: dueAt });
  if (code === "RES-1846") writeOperatorStorage(CLIENT_REPROGRAM_RESPONSE_KEY, { code, decision: "vencido", respondedAt: dueAt, source: "interno" });
  logOperatorTimeEvent(`episode-expired:${code}:${episode.startedAt}`, {
    at: dueAt,
    rule: byProposal ? "L1" : "I2",
    action: byProposal ? "Reprogramación vencida sin propuesta (L1)" : "Reprogramación vencida sin respuesta del cliente (I2)",
    detail: `La reserva ${code} se canceló por causa no atribuible al cliente; la devolución del 100 % de lo pagado y validado queda determinada y autorizada, pendiente de ejecución en máximo 5 días hábiles.`,
    recordAffected: `Reserva ${code}`,
    audience: "admin",
    alert: { code: "RP", title: `Reprogramación vencida · ${code}`, body: byProposal ? "Pasaron 24 horas corridas sin proponer una nueva salida: la reserva se canceló con devolución del 100 %." : "El cliente no respondió dentro del plazo de la propuesta: la reserva se canceló con devolución del 100 %." },
    href: "admin-solicitudes-devolucion.html",
  });
  return { ok: true };
}

// GAP-019: si el Administrador del tenant declara antes del vencimiento que no habrá
// alternativa, la reserva se cancela de inmediato con devolución del 100 %.
function declareOperatorNoAlternative(code) {
  if (!isOperatorAdmin()) return { ok: false, error: "Solo el Administrador del tenant declara que no habrá alternativa." };
  const episode = getOperatorReprogramEpisodes()[code];
  if (!episode || episode.status !== "Pendiente de propuesta") return { ok: false, error: "Solo se puede declarar sin alternativa mientras no exista una propuesta." };
  saveOperatorReprogramEpisode(appendOperatorEpisodeHistory({ ...episode, status: "Cancelada por el tenant" }, "Sin alternativa", "El Administrador del tenant declaró que no habrá una salida alternativa."));
  cancelOperatorReservationByCause(code, { causal: "Sin alternativa de reprogramación (causa no atribuible al cliente): devolución del 100 %", origin: "no-atribuible", automatic: false });
  return { ok: true };
}

// --- Operaciones sobre la salida ----------------------------------------------------------
function operatorCanManageExecution() {
  return operatorHasPermission(OPERATOR_PERMISSION_MANAGE_EXECUTION);
}

// Elegible para iniciar: Confirmada con situación financiera Pago completo (RN-EJE-001).
function isOperatorReservationEligibleToStart(record) {
  return Boolean(record && record.status === "Confirmada" && record.financialStatus === "Pago completo");
}

// FINAL-010: la propuesta pendiente hacia una salida que se cancela queda sin efecto, libera
// sus cupos y abre un nuevo plazo L1 (menor entre 24 h y lo que resta del episodio).
function voidOperatorProposalsToDeparture(departureId) {
  const now = getOperatorNow();
  Object.values(getOperatorReprogramEpisodes()).forEach((episode) => {
    if (episode.status !== "Propuesta enviada" || episode.proposedDepartureId !== departureId) return;
    const limitLeft = new Date(episode.limitAt) - now;
    const l1 = Math.min(OPERATOR_REPROGRAM_L1_HOURS * OPERATOR_HOUR_MS, Math.max(limitLeft, 0));
    saveOperatorReprogramEpisode(appendOperatorEpisodeHistory({ ...episode, status: "Pendiente de propuesta", proposedDepartureId: "", notifiedAt: "", responseDueAt: "", l1DueAt: new Date(now.getTime() + l1).toISOString() }, "Propuesta sin efecto", `La salida propuesta ${departureId} se canceló: no cuenta como rechazo y se libera el cupo; nuevo plazo para proponer otra alternativa.`));
  });
}

function cancelOperatorDeparture(id, { causal = "", regularization = false } = {}) {
  const departure = getOperatorDeparture(id);
  if (!departure) return { ok: false, error: "La salida no existe." };
  if (!String(causal).trim()) return { ok: false, error: "Registra la causal de la cancelación." };
  if (regularization) {
    if (!operatorCanManageExecution()) return { ok: false, error: "Tu usuario no tiene el permiso Gestionar ejecución de salidas." };
    if (new Date(departure.startAt) > getOperatorNow()) return { ok: false, error: "Solo se regulariza como no realizada una salida cuya hora programada ya pasó." };
  } else if (!isOperatorAdmin()) {
    return { ok: false, error: "Solo el Administrador del tenant cancela una salida Programada." };
  }
  if (departure.status !== "Programada") return { ok: false, error: departure.status === "En ejecución" ? "Una salida En ejecución no se cancela: registra su interrupción o finalización." : `La salida está ${departure.status}: no admite cancelación.` };
  const at = getOperatorNow().toISOString();
  patchOperatorDeparture(id, { status: "Cancelada", cancellation: { causal: String(causal).trim(), origin: "no-atribuible", at: getOperatorNow().toISOString(), recordedAt: at, by: getOperatorActorLabel(), regularization } }, { action: regularization ? "Regularizada como no realizada (Cancelada)" : "Salida cancelada", detail: String(causal).trim() });
  voidOperatorProposalsToDeparture(id);
  ensureOperatorReprogramEpisodes();
  return { ok: true, affected: departure.reservationCodes.filter((code) => !["Cancelada", "Finalizada"].includes(getUnifiedOperatorReservation(code)?.status)).length };
}

function startOperatorDeparture(id, { realStartAt = "", motive = "", regularization = false } = {}) {
  if (!operatorCanManageExecution()) return { ok: false, error: "Tu usuario no tiene el permiso Gestionar ejecución de salidas." };
  const departure = getOperatorDeparture(id);
  if (!departure) return { ok: false, error: "La salida no existe." };
  if (departure.status !== "Programada") return { ok: false, error: `La salida está ${departure.status}: solo una salida Programada admite el registro de inicio.` };
  if (isOperatorTenantInactive()) return { ok: false, error: "Operador inactivo: acceso restringido. No se inician nuevas salidas; solo se regularizan las que ya estaban En ejecución (L5, GAP-007)." };
  const real = new Date(realStartAt);
  if (!realStartAt || Number.isNaN(real.getTime())) return { ok: false, error: "Indica la fecha y hora de inicio real." };
  const scheduled = new Date(departure.startAt);
  const earlier = real < scheduled;
  if (earlier && !regularization) return { ok: false, error: "El inicio real no puede ser anterior a la hora programada de inicio (solo la regularización histórica admite una hora anterior, con motivo)." };
  if (earlier && !String(motive).trim()) return { ok: false, error: "Registra el motivo obligatorio de la hora real anterior a la programada." };
  const actor = getOperatorActorLabel();
  const started = [];
  const cancelled = [];
  departure.reservationCodes.forEach((code) => {
    const record = getUnifiedOperatorReservation(code);
    if (!record || ["Cancelada", "Finalizada"].includes(record.status)) return;
    if (isOperatorReservationEligibleToStart(record)) {
      setOperatorReservationExecution(code, { departureId: id, reserved: Number(record.travelers) || 0, executed: Number(record.travelers) || 0, served: true, causal: "", services: [], startedAt: real.toISOString(), registeredAt: getOperatorNow().toISOString(), registeredBy: actor, finalized: false });
      started.push(code);
    } else {
      cancelOperatorReservationByCause(code, { causal: "Se alcanzó la hora programada de inicio de la salida sin cumplir las condiciones económicas (pago completo o comprobante aprobado)", origin: "incumplimiento-pago", automatic: true });
      cancelled.push(code);
    }
  });
  patchOperatorDeparture(id, {
    status: "En ejecución",
    realStartAt: real.toISOString(),
    realStartBy: actor,
    startRegularization: earlier ? { motive: String(motive).trim(), scheduledStartAt: departure.startAt, reportedAt: real.toISOString(), registeredAt: getOperatorNow().toISOString(), by: actor } : null,
  }, { action: "Inicio real registrado", detail: `${formatOperatorTenantDateTime(real.toISOString())}${earlier ? ` (anterior a la programada; motivo: ${String(motive).trim()})` : ""}. En ejecución: ${started.length}. Canceladas por pagos pendientes: ${cancelled.length}.` });
  return { ok: true, started, cancelled };
}

function finishOperatorDeparture(id, { realEndAt = "", outcome = "finalizada", interruption = "" } = {}) {
  if (!operatorCanManageExecution()) return { ok: false, error: "Tu usuario no tiene el permiso Gestionar ejecución de salidas." };
  const departure = getOperatorDeparture(id);
  if (!departure || departure.status !== "En ejecución") return { ok: false, error: "Solo una salida En ejecución admite el registro de finalización." };
  const end = new Date(realEndAt);
  if (!realEndAt || Number.isNaN(end.getTime())) return { ok: false, error: "Indica la fecha y hora de finalización real." };
  if (departure.realStartAt && end < new Date(departure.realStartAt)) return { ok: false, error: "La finalización real no puede ser anterior al inicio real." };
  const interrupted = outcome === "interrumpida";
  if (interrupted && !String(interruption).trim()) return { ok: false, error: "Describe la interrupción (causa y evidencia)." };
  const actor = getOperatorActorLabel();
  const finalizedCodes = [];
  const interruptedCodes = [];
  departure.reservationCodes.forEach((code) => {
    const execution = getOperatorReservationExecution(code);
    if (!execution || execution.finalized) return;
    if (interrupted) {
      setOperatorReservationExecution(code, { ...execution, interrupted: { description: String(interruption).trim(), at: end.toISOString() } });
      interruptedCodes.push(code);
    } else {
      setOperatorReservationExecution(code, { ...execution, finalized: true, finalizedAt: end.toISOString(), finalizedBy: actor });
      finalizedCodes.push(code);
    }
  });
  patchOperatorDeparture(id, {
    status: "Finalizada",
    realEndAt: end.toISOString(),
    realEndBy: actor,
    interruption: interrupted ? { description: String(interruption).trim(), at: end.toISOString(), by: actor } : null,
  }, { action: interrupted ? "Salida interrumpida (termina Finalizada)" : "Finalización real registrada", detail: interrupted ? String(interruption).trim() : `Reservas pasadas a Finalizada: ${finalizedCodes.length}.` });
  if (interrupted) ensureOperatorReprogramEpisodes();
  return { ok: true, finalizedCodes, interruptedCodes };
}

// L4/J3/FINAL-006: regularización con la información real disponible. Nunca cierra la salida
// por el paso del tiempo; conserva la hora programada y la hora real reportada.
function regularizeOperatorDeparture(id, { mode = "ejecutada", realStartAt = "", realEndAt = "", startMotive = "", causal = "", interruption = "" } = {}) {
  if (!operatorCanManageExecution()) return { ok: false, error: "Tu usuario no tiene el permiso Gestionar ejecución de salidas." };
  const departure = getOperatorDeparture(id);
  if (!departure) return { ok: false, error: "La salida no existe." };
  if (!departure.pendingRegularization && !departure.startAlert) return { ok: false, error: "La salida no está pendiente de regularización." };
  if (mode === "no-realizada") return cancelOperatorDeparture(id, { causal, regularization: true });
  if (departure.status === "Programada") {
    const started = startOperatorDeparture(id, { realStartAt, motive: startMotive, regularization: true });
    if (!started.ok) return started;
  }
  return finishOperatorDeparture(id, { realEndAt, outcome: mode === "interrumpida" ? "interrumpida" : "finalizada", interruption });
}

function saveOperatorExecutionServices(code, { services, participants }) {
  if (!operatorCanManageExecution()) return { ok: false, error: "Tu usuario no tiene el permiso Gestionar ejecución de salidas." };
  const execution = getOperatorReservationExecution(code);
  if (!execution) return { ok: false, error: "La reserva no tiene una ejecución iniciada." };
  const missing = (services || []).find((service) => !service.provided && !String(service.causal || "").trim());
  if (missing) return { ok: false, error: `Registra la causal del servicio no prestado: ${missing.name}.` };
  const people = Math.min(Math.max(Number.parseInt(participants, 10) || 0, 0), Number(execution.reserved) || 0);
  setOperatorReservationExecution(code, {
    ...execution,
    services: services || [],
    executed: people,
    served: people > 0 && (services || []).some((service) => service.provided),
    causal: (services || []).filter((service) => !service.provided).map((service) => `${service.name}: ${service.causal}`).join("; "),
    servicesRegisteredAt: getOperatorNow().toISOString(),
    servicesRegisteredBy: getOperatorActorLabel(),
  });
  return { ok: true };
}

// Política vigente de reembolso por emergencia personal del cliente (porcentaje sobre lo
// pagado, proporcional a los viajeros afectados). Sin política definida el monto es $0.
const OPERATOR_EMERGENCY_REFUND_POLICY = { "Tour destino ejemplo - Montañas": 30, "Tour Montañas": 30 };

function getOperatorEmergencyRefundPercent(serviceName) {
  return OPERATOR_EMERGENCY_REFUND_POLICY[serviceName] ?? 0;
}

// AB-01: la emergencia personal no cancela la reserva. Se calcula de inmediato el monto
// reembolsable: $0 no genera devolución y la reserva continúa hasta Finalizada; mayor que $0,
// la devolución queda determinada y autorizada automáticamente (pendiente de ejecución en
// máximo 5 días hábiles).
function registerOperatorExecutionNovelty(departureId, { code = "", text = "", personalEmergency = false, affected = 1 } = {}) {
  if (!operatorCanManageExecution()) return { ok: false, error: "Tu usuario no tiene el permiso Gestionar ejecución de salidas." };
  const departure = getOperatorDeparture(departureId);
  if (!departure || departure.status !== "En ejecución") return { ok: false, error: "Las novedades se registran sobre una salida En ejecución." };
  if (!String(text).trim()) return { ok: false, error: "Describe la novedad." };
  const entry = { at: getOperatorNow().toISOString(), actor: getOperatorActorLabel(), code, text: String(text).trim(), kind: personalEmergency ? "Emergencia personal del cliente" : "Novedad operativa" };
  let refund = null;
  if (personalEmergency) {
    const record = code ? getUnifiedOperatorReservation(code) : null;
    if (!record || !departure.reservationCodes.includes(code)) return { ok: false, error: "Selecciona la reserva de la salida a la que pertenece la persona afectada." };
    const people = Math.min(Math.max(Number.parseInt(affected, 10) || 1, 1), Number(record.travelers) || 1);
    const percent = getOperatorEmergencyRefundPercent(record.service);
    const amount = Math.round((record.paidValue * percent / 100) * (people / (Number(record.travelers) || 1)));
    entry.affected = people;
    entry.refundPercent = percent;
    entry.refundAmount = amount;
    refund = { percent, amount, people };
    if (amount > 0) {
      const registeredAt = getOperatorNow().toISOString();
      setOperatorRefundOrigin(code, {
        type: "Novedad de ejecución",
        causal: `Emergencia personal del cliente durante la ejecución: ${entry.text}`,
        origin: "emergencia-personal",
        potentialAmount: formatCOP(amount),
        potentialValue: amount,
        penalty: 0,
        penaltyPercent: 0,
        ruleLabel: `Emergencia personal: política vigente de reembolso del ${percent} % sobre lo pagado y validado (${people} de ${record.travelers} viajeros) = ${formatCOP(amount)} reembolsables. Determinada y autorizada automáticamente (AB-01).`,
        pendingCalculation: false,
        registeredAt,
      });
      const created = createOperatorRefundRequest(code, { motive: `Emergencia personal del cliente durante la ejecución: ${entry.text}` });
      refund.requestId = created.request?.id || "";
    }
  }
  patchOperatorDeparture(departureId, { novelties: [...(departure.novelties || []), entry] }, { action: entry.kind, detail: `${code ? `#${code}: ` : ""}${entry.text}${refund ? ` · reembolsable ${formatCOP(refund.amount)}` : ""}` });
  return { ok: true, refund, entry };
}


// --- Pantallas de salidas, ejecución, reprogramación y tratamiento pendiente -----------------
// "YYYY-MM-DDTHH:MM" de un campo datetime-local (hora local del tenant) -> ISO con desfase.
function operatorLocalInputToIso(value) {
  if (!value) return "";
  const date = new Date(`${value}:00${OPERATOR_TENANT_UTC_OFFSET}`);
  return Number.isNaN(date.getTime()) ? "" : date.toISOString();
}

function operatorFeedback(node, message, ok) {
  if (!node) return;
  node.hidden = false;
  node.textContent = message;
  node.classList.toggle("is-valid", Boolean(ok));
}

// Enlace "Salidas" en el menú de cualquier pantalla del operador (idempotente). Los roles de
// consulta también ven la agenda; las acciones se limitan por permiso dentro de cada pantalla.
function ensureOperatorDeparturesNav() {
  const nav = document.querySelector(".operator-nav");
  if (!nav || nav.querySelector('a[href^="admin-salidas.html"]')) return;
  const link = document.createElement("a");
  link.href = withTheme("admin-salidas.html", getTheme());
  link.textContent = "Salidas";
  if (["operator-departures", "operator-schedule-departure", "operator-execution", "operator-reprogram-reservation"].includes(document.body.dataset.screen)) link.className = "is-active";
  const reservations = nav.querySelector('[data-route="operatorReservations"]');
  if (reservations) reservations.after(link); else nav.prepend(link);
}

// Auditoría de consultas de datos sensibles (CA-030): usuario, reserva, fecha y hora.
const OPERATOR_SENSITIVE_AUDIT_KEY = "multitour-sensitive-access-audit";

function logOperatorSensitiveAccess(code) {
  const log = readOperatorStorage(OPERATOR_SENSITIVE_AUDIT_KEY, []);
  log.unshift({ code, userId: getOperatorCurrentUser().id, actor: getOperatorActorLabel(), at: getOperatorNow().toISOString() });
  writeOperatorStorage(OPERATOR_SENSITIVE_AUDIT_KEY, log.slice(0, 200));
}

function describeOperatorDepartureVehicles(departure) {
  return (departure.vehicles || []).length ? departure.vehicles.map((vehicle) => `${vehicle.name} (${vehicle.capacity})`).join(", ") : "Sin vehículos asignados";
}

function setupOperatorDepartures() {
  if (document.body.dataset.screen !== "operator-departures") return;
  ensureOperatorReprogramEpisodes();
  const tbody = document.querySelector("[data-departures-list]");
  const filter = document.querySelector("[data-departures-filter]");
  const alertsPanel = document.querySelector("[data-departures-alerts]");
  const alertsList = document.querySelector("[data-departures-alerts-list]");
  const alertCount = document.querySelector("[data-departures-alert-count]");
  const feedback = document.querySelector("[data-departures-feedback]");
  const cancelPanel = document.querySelector("[data-departure-cancel-panel]");
  const cancelTitle = document.querySelector("[data-departure-cancel-title]");
  const cancelCausal = document.querySelector("[data-departure-cancel-causal]");
  const cancelFeedback = document.querySelector("[data-departure-cancel-feedback]");
  const admin = isOperatorAdmin();
  const canManage = operatorCanManageExecution();
  let cancelTarget = "";

  const render = () => {
    const all = getOperatorDepartures();
    const selected = filter?.value || "";
    const rows = all.filter((item) => !selected || item.status === selected || (selected === "pendiente" && (item.pendingRegularization || item.startAlert)));
    if (tbody) {
      tbody.innerHTML = rows.map((item) => {
        const actions = [];
        const href = (page) => withTheme(`${page}?departure=${encodeURIComponent(item.id)}`, getTheme());
        if (item.status === "Programada" && admin) actions.push(`<a href="${href("admin-programar-salida.html")}">Editar</a>`);
        if (["Programada", "En ejecución"].includes(item.status) && canManage) actions.push(`<a href="${href("admin-registrar-ejecucion.html")}">${item.pendingRegularization || item.startAlert ? "Regularizar" : item.status === "En ejecución" ? "Gestionar ejecución" : "Registrar ejecución"}</a>`);
        if (["Finalizada", "Cancelada"].includes(item.status)) actions.push(`<a href="${href("admin-registrar-ejecucion.html")}">Ver registro</a>`);
        if (item.status === "Programada" && admin) actions.push(`<button type="button" class="operator-row-toggle" data-departure-cancel="${escapeHtml(item.id)}">Cancelar salida</button>`);
        const episodes = Object.values(getOperatorReprogramEpisodes()).filter((episode) => episode.originalDepartureId === item.id && ["Pendiente de propuesta", "Propuesta enviada"].includes(episode.status));
        if (episodes.length) actions.push(`<a href="${withTheme(`admin-reprogramar-reserva.html?departure=${encodeURIComponent(item.id)}`, getTheme())}">Reprogramar reservas (${episodes.length})</a>`);
        const mark = operatorDepartureTextStatus(item);
        const interruption = item.interruption ? "<br><small>Interrumpida: la salida termina Finalizada con la interrupción registrada</small>" : "";
        return `<tr data-departure-row="${escapeHtml(item.id)}"><td><strong>${escapeHtml(item.id)}</strong><br><small>${escapeHtml(item.tourName)}</small></td><td>${escapeHtml(item.label)}</td><td>${escapeHtml(formatOperatorDate(item.date))} · ${escapeHtml(item.end)}</td><td>${escapeHtml(describeOperatorDepartureVehicles(item))}</td><td><strong>${item.effectiveCapacity}</strong><br><small>Cupo del tour ${item.tourCapacity}${item.vehicles.length ? ` · vehículos ${item.vehicleCapacity}` : ""}</small></td><td>${item.held} de ${item.effectiveCapacity}${item.proposalSeats ? `<br><small>${item.proposalSeats} por propuesta de reprogramación</small>` : ""}${item.isFull && item.status === "Programada" ? "<br><small>Salida llena</small>" : ""}</td><td><span class="operator-status ${operatorDepartureStatusClass(item.status)}">${escapeHtml(item.status)}</span>${mark ? `<br><small>${escapeHtml(mark)}</small>` : ""}${item.cancellation ? `<br><small>${escapeHtml(item.cancellation.causal)}</small>` : ""}${interruption}</td><td>${actions.join("<br>") || "—"}</td></tr>`;
      }).join("") || '<tr><td colspan="8">No hay salidas con este filtro.</td></tr>';
    }
    const flagged = all.filter((item) => item.pendingRegularization || item.startAlert);
    if (alertCount) alertCount.textContent = `${flagged.length} alerta${flagged.length === 1 ? "" : "s"}`;
    if (alertsPanel) alertsPanel.hidden = !(admin || canManage) || flagged.length === 0;
    if (alertsList) {
      alertsList.innerHTML = flagged.map((item) => `<li><strong>${escapeHtml(item.id)} · ${escapeHtml(item.tourName)}</strong>: ${item.pendingRegularization ? `superó la hora de finalización estimada (${escapeHtml(formatOperatorDate(item.date))} ${escapeHtml(item.end)}) sin cierre operativo: <em>pendiente de regularización</em>.` : `alcanzó la hora programada de inicio (${escapeHtml(item.label)}) y sigue Programada sin registro de inicio real.`} <a href="${withTheme(`admin-registrar-ejecucion.html?departure=${encodeURIComponent(item.id)}`, getTheme())}">${canManage ? "Registrar lo ocurrido" : "Consultar"}</a></li>`).join("");
    }
  };
  render();
  filter?.addEventListener("change", render);

  tbody?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-departure-cancel]");
    if (!button) return;
    cancelTarget = button.dataset.departureCancel;
    const target = getOperatorDeparture(cancelTarget);
    if (cancelPanel) cancelPanel.hidden = false;
    if (cancelTitle && target) cancelTitle.textContent = `Cancelar ${target.id} · ${target.tourName} · ${target.label} (${target.held} cupo(s) apartado(s))`;
    if (cancelCausal) { cancelCausal.value = ""; cancelCausal.focus(); }
    if (cancelFeedback) cancelFeedback.hidden = true;
  });
  document.querySelector("[data-departure-cancel-dismiss]")?.addEventListener("click", () => { if (cancelPanel) cancelPanel.hidden = true; cancelTarget = ""; });
  document.querySelector("[data-departure-cancel-confirm]")?.addEventListener("click", () => {
    const result = cancelOperatorDeparture(cancelTarget, { causal: cancelCausal?.value || "" });
    if (!result.ok) { operatorFeedback(cancelFeedback, result.error, false); return; }
    if (cancelPanel) cancelPanel.hidden = true;
    operatorFeedback(feedback, `Salida ${cancelTarget} cancelada por una causa no atribuible al cliente. ${result.affected} reserva(s) abren su episodio de reprogramación: el Administrador del tenant tiene 24 horas corridas para proponer una nueva salida (límite del episodio: 96 horas) o la reserva se cancela con devolución del 100 %.`, true);
    cancelTarget = "";
    render();
  });
}

function setupOperatorScheduleDeparture() {
  if (document.body.dataset.screen !== "operator-schedule-departure") return;
  // RF-020: solo el Administrador del tenant programa salidas y asigna vehículos.
  if (!guardOperatorAdminOnlyScreen("admin-salidas.html")) return;
  const form = document.querySelector("[data-departure-form]");
  if (!form) return;
  const editId = new URLSearchParams(window.location.search).get("departure") || "";
  const editing = editId ? getOperatorDeparture(editId) : null;
  const tourSelect = form.querySelector("[data-departure-tour]");
  const dateInput = form.querySelector("[data-departure-date]");
  const startInput = form.querySelector("[data-departure-start]");
  const endInput = form.querySelector("[data-departure-end]");
  const capacityInput = form.querySelector("[data-departure-tour-capacity]");
  const vehiclesBox = form.querySelector("[data-departure-vehicles]");
  const summary = form.querySelector("[data-departure-capacity-summary]");
  const feedback = form.querySelector("[data-departure-feedback]");
  const lockNote = form.querySelector("[data-departure-lock-note]");
  const heading = document.querySelector("[data-departure-heading]");

  const services = getOperatorActiveTourServices();
  const options = Object.values(services).map((service) => ({ key: service.key, name: service.name, capacity: service.capacity || OPERATOR_DEFAULT_TOUR_CAPACITY, transport: Boolean(service.associatedTransport) }));
  if (editing && !options.some((option) => option.key === editing.tourKey)) options.push({ key: editing.tourKey, name: editing.tourName, capacity: editing.tourCapacity, transport: editing.vehicles.length > 0 });
  tourSelect.innerHTML = '<option value="">Selecciona un tour</option>' + options.map((option) => `<option value="${escapeHtml(option.key)}">${escapeHtml(option.name)}</option>`).join("");
  const fleet = getOperatorAssignableVehicles();
  vehiclesBox.innerHTML = fleet.map((vehicle) => `<label class="operator-check"><input type="checkbox" data-departure-vehicle value="${escapeHtml(vehicle.name)}" data-capacity="${vehicle.capacity}" /> ${escapeHtml(vehicle.name)} · ${vehicle.capacity} viajeros <small data-vehicle-conflict="${escapeHtml(vehicle.name)}"></small></label>`).join("");

  const hasReservations = Boolean(editing && (editing.seededHeld > 0 || editing.reservationCodes.some((code) => !["Cancelada", "Finalizada"].includes(getUnifiedOperatorReservation(code)?.status))));
  if (editing) {
    if (editing.status !== "Programada") {
      operatorFeedback(feedback, `La salida ${editing.id} está ${editing.status}: solo una salida Programada se puede editar.`, false);
      form.querySelectorAll("input, select, button").forEach((el) => { el.disabled = true; });
      return;
    }
    if (heading) heading.textContent = `Editar salida ${editing.id}`;
    tourSelect.value = editing.tourKey;
    dateInput.value = editing.date;
    startInput.value = editing.start;
    endInput.value = editing.end;
    capacityInput.value = editing.tourCapacity;
    form.querySelectorAll("[data-departure-vehicle]").forEach((box) => { box.checked = editing.vehicles.some((vehicle) => vehicle.name === box.value); });
    if (hasReservations) {
      [tourSelect, dateInput, startInput, endInput].forEach((el) => { el.disabled = true; });
      if (lockNote) {
        lockNote.hidden = false;
        lockNote.textContent = "Esta salida tiene reservas: no puede cambiar su fecha ni su hora. Para moverla, cancela la salida original (causa no atribuible al cliente), programa la nueva salida y propónla a las reservas afectadas; cada reserva decide de forma independiente. Sí puedes ajustar la capacidad y los vehículos mientras no quede por debajo de los cupos apartados.";
      }
    }
  }
  if (!editing) tourSelect.addEventListener("change", () => {
    const option = options.find((item) => item.key === tourSelect.value);
    if (option) capacityInput.value = option.capacity;
    recalc();
  });

  const readInput = () => {
    const option = options.find((item) => item.key === tourSelect.value);
    const vehicles = [...form.querySelectorAll("[data-departure-vehicle]:checked")].map((box) => ({ name: box.value, capacity: Number(box.dataset.capacity) }));
    return { tourKey: tourSelect.value, tourName: option?.name || "", date: dateInput.value, start: startInput.value, end: endInput.value, tourCapacity: Number(capacityInput.value), vehicles, transportRequired: Boolean(option?.transport) };
  };
  const recalc = () => {
    const input = readInput();
    const candidate = decorateOperatorDeparture({ id: editId || "NUEVA", date: input.date || "2000-01-01", start: input.start || "00:00", end: input.end || "00:01", vehicles: [] });
    form.querySelectorAll("[data-vehicle-conflict]").forEach((node) => {
      const conflicts = input.date && input.start && input.end ? findOperatorVehicleConflicts(node.dataset.vehicleConflict, candidate, editId) : [];
      node.textContent = conflicts.length ? `· ocupado en ${conflicts.map((item) => item.id).join(", ")}` : "";
    });
    const held = editing ? editing.held : 0;
    const result = validateOperatorDepartureInput(input, { ignoreId: editId, held });
    if (summary) summary.textContent = `Capacidad efectiva de la salida: ${result.effectiveCapacity} viajeros = menor entre el cupo del tour (${input.tourCapacity || 0}) ${input.vehicles.length ? `y la capacidad acumulada de los vehículos (${input.vehicles.reduce((sum, vehicle) => sum + vehicle.capacity, 0)})` : "(sin vehículos asignados)"}.${held ? ` Cupos ya apartados: ${held}.` : ""}`;
    return { input, result };
  };
  form.addEventListener("input", recalc);
  form.addEventListener("change", recalc);
  recalc();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const { input, result } = recalc();
    if (!result.ok) { operatorFeedback(feedback, result.errors.join(" "), false); return; }
    if (editing) {
      patchOperatorDeparture(editing.id, { tourKey: input.tourKey, tourName: input.tourName, date: input.date, start: input.start, end: input.end, tourCapacity: input.tourCapacity, vehicles: input.vehicles }, { action: "Salida editada", detail: `Capacidad efectiva ${result.effectiveCapacity}; vehículos: ${input.vehicles.map((vehicle) => vehicle.name).join(", ") || "sin vehículos"}.` });
      operatorFeedback(feedback, `Salida ${editing.id} actualizada. Capacidad efectiva: ${result.effectiveCapacity}.`, true);
    } else {
      const created = createOperatorDeparture({ ...input, detail: `Capacidad efectiva ${result.effectiveCapacity}; vehículos: ${input.vehicles.map((vehicle) => vehicle.name).join(", ") || "sin vehículos"}.` });
      operatorFeedback(feedback, `Salida ${created.id} programada (${created.label}). Capacidad efectiva: ${result.effectiveCapacity}. Ya se puede reservar.`, true);
      form.querySelectorAll("input, select, button").forEach((el) => { el.disabled = true; });
    }
    window.setTimeout(() => { window.location.href = withTheme("admin-salidas.html", getTheme()); }, 1500);
  });
}

// --- Registrar ejecución de una salida ----------------------------------------------------
function setupOperatorRegisterExecution() {
  if (document.body.dataset.screen !== "operator-execution") return;
  const params = new URLSearchParams(window.location.search);
  let id = params.get("departure") || params.get("salida") || "";
  if (!id && params.get("reservation")) id = getOperatorReservationDepartureId(getUnifiedOperatorReservation(params.get("reservation"))) || "";
  const $ = (selector) => document.querySelector(selector);
  const setText = (selector, value) => { const node = $(selector); if (node) node.textContent = value; };
  const canManage = operatorCanManageExecution();
  const panels = {
    start: $("[data-execution-start-panel]"),
    regularize: $("[data-execution-regularize-panel]"),
    services: $("[data-execution-services-panel]"),
    novelty: $("[data-execution-novelty-panel]"),
    finish: $("[data-execution-finish-panel]"),
  };
  const permissionNote = $("[data-execution-permission-note]");
  const stateNote = $("[data-execution-state-note]");

  const renderRoster = (departure) => {
    const box = $("[data-execution-reservations]");
    if (!box) return;
    const records = departure.reservationCodes.map((code) => getUnifiedOperatorReservation(code)).filter(Boolean);
    if (!records.length) { box.innerHTML = '<p class="operator-copy">La salida no tiene reservas asociadas.</p>'; return; }
    box.innerHTML = records.map((record) => {
      const execution = getOperatorReservationExecution(record.code);
      const eligible = isOperatorReservationEligibleToStart(record);
      let body = "";
      if (execution && execution.departureId === departure.id) {
        const lines = getOperatorReservationServiceLines(record, departure);
        const saved = execution.services || [];
        if (execution.finalized) {
          body = `<p class="operator-copy">Reservado: ${execution.reserved} viajero(s) · Ejecutado: ${execution.executed} viajero(s)${execution.causal ? ` · No prestado: ${escapeHtml(execution.causal)}` : ""}. Reserva Finalizada ${escapeHtml(formatOperatorTenantDateTime(execution.finalizedAt))}.</p>`;
        } else {
          body = `<div class="operator-form-grid"><label>Participantes (reservados: ${execution.reserved})<input type="number" min="0" max="${execution.reserved}" value="${execution.executed}" data-exec-participants ${canManage ? "" : "disabled"} /></label></div>
          <div class="operator-table-wrap"><table class="operator-table"><thead><tr><th>Servicio</th><th>Resultado</th><th>Causal si no se prestó</th></tr></thead><tbody>${lines.map((line) => {
            const prior = saved.find((item) => item.key === line.key);
            return `<tr data-exec-service="${escapeHtml(line.key)}" data-service-name="${escapeHtml(line.name)}"><td>${escapeHtml(line.name)}</td><td><select data-exec-provided ${canManage ? "" : "disabled"}><option value="si"${!prior || prior.provided ? " selected" : ""}>Prestado</option><option value="no"${prior && !prior.provided ? " selected" : ""}>No prestado</option></select></td><td><input type="text" data-exec-causal value="${escapeHtml(prior?.causal || "")}" placeholder="Causal obligatoria si no se prestó" ${canManage ? "" : "disabled"} /></td></tr>`;
          }).join("")}</tbody></table></div>
          ${canManage ? `<div class="operator-form-actions"><button type="button" class="operator-outline" data-exec-save="${escapeHtml(record.code)}">Guardar servicios</button></div>` : ""}
          <p class="operator-form-feedback" data-exec-feedback hidden></p>`;
        }
      } else if (departure.status === "Programada") {
        body = `<p class="operator-copy">${eligible ? "Elegible: Confirmada con Pago completo. Pasará a En ejecución al registrar el inicio." : `No elegible (${escapeHtml(record.status)} · ${escapeHtml(record.financialStatus || "sin situación financiera")}${record.receiptStatus === "En validación" ? " · comprobante En validación" : ""}). Al registrar el inicio se cancela por incumplimiento del pago y se libera el cupo.`}</p>`;
      } else {
        body = `<p class="operator-copy">Sin registro de ejecución para esta reserva (${escapeHtml(record.status)}).</p>`;
      }
      return `<article class="operator-companion-card" data-execution-reservation="${escapeHtml(record.code)}"><strong>#${escapeHtml(record.code)} · ${escapeHtml(record.customer)} · ${record.travelers} viajeros</strong> <span class="operator-status ${record.statusClass}">${escapeHtml(record.status)}</span>${body}</article>`;
    }).join("");
  };

  const render = () => {
    const departure = id ? getOperatorDeparture(id) : null;
    if (!departure) {
      setText("[data-execution-departure-code]", "Salida no encontrada");
      operatorFeedback($("[data-execution-load-feedback]"), "No se encontró la salida seleccionada. Vuelve a Salidas e ingresa nuevamente por Registrar ejecución.", false);
      Object.values(panels).forEach((panel) => { if (panel) panel.hidden = true; });
      return;
    }
    setText("[data-execution-departure-code]", `${departure.id} · ${departure.tourName}`);
    setText("[data-execution-departure-label]", `${departure.label} · fin estimado ${departure.end}`);
    const statusNode = $("[data-execution-departure-status]");
    if (statusNode) { statusNode.textContent = departure.status; statusNode.className = `operator-status ${operatorDepartureStatusClass(departure.status)}`; }
    setText("[data-execution-vehicles]", describeOperatorDepartureVehicles(departure));
    setText("[data-execution-capacity]", `Capacidad efectiva ${departure.effectiveCapacity} · cupos apartados ${departure.held}`);
    setText("[data-execution-real-start]", departure.realStartAt ? formatOperatorTenantDateTime(departure.realStartAt) : "Sin registro");
    setText("[data-execution-real-end]", departure.realEndAt ? formatOperatorTenantDateTime(departure.realEndAt) : "Sin registro");
    const mark = operatorDepartureTextStatus(departure);
    setText("[data-execution-mark]", mark ? mark.charAt(0).toUpperCase() + mark.slice(1) : "Sin marcas");
    if (stateNote) {
      stateNote.hidden = !mark && departure.status !== "Cancelada" && !departure.interruption;
      stateNote.textContent = departure.status === "Cancelada"
        ? `Salida cancelada: ${departure.cancellation?.causal || ""}. Sus reservas se gestionan con la reprogramación o la devolución del 100 %.`
        : departure.interruption
          ? `Salida interrumpida: ${departure.interruption.description}. Termina Finalizada con la interrupción registrada; sus reservas se gestionan con la reprogramación.`
          : mark ? `${departure.pendingRegularization ? "La salida superó su hora de finalización estimada sin cierre operativo: pendiente de regularización." : "Se alcanzó la hora programada de inicio y la salida sigue Programada."} No se cierra automáticamente: registra lo ocurrido con la información real.` : "";
    }
    if (permissionNote) permissionNote.hidden = canManage;
    const open = departure.status === "Programada" || departure.status === "En ejecución";
    const showStart = canManage && departure.status === "Programada" && !departure.pendingRegularization;
    const showRegularize = canManage && departure.status === "Programada" && departure.pendingRegularization;
    const showRunning = departure.status === "En ejecución";
    if (panels.start) panels.start.hidden = !showStart;
    if (panels.regularize) panels.regularize.hidden = !showRegularize;
    if (panels.services) panels.services.hidden = !(showRunning || departure.status === "Finalizada" || departure.status === "Programada");
    if (panels.novelty) panels.novelty.hidden = !(canManage && showRunning);
    if (panels.finish) panels.finish.hidden = !(canManage && showRunning);
    const startReal = $("[data-execution-start-real]");
    if (startReal && !startReal.value) startReal.value = `${departure.date}T${departure.start}`;
    const endReal = $("[data-execution-end-real]");
    if (endReal && !endReal.value) endReal.value = `${departure.date}T${departure.end}`;
    const regStart = $("[data-regularize-start]");
    if (regStart && !regStart.value) regStart.value = `${departure.date}T${departure.start}`;
    const regEnd = $("[data-regularize-end]");
    if (regEnd && !regEnd.value) regEnd.value = `${departure.date}T${departure.end}`;
    renderRoster(departure);
    const noveltySelect = $("[data-novelty-reservation]");
    if (noveltySelect) {
      noveltySelect.innerHTML = '<option value="">Novedad general de la salida</option>' + departure.reservationCodes.filter((code) => getOperatorReservationExecution(code) && !getOperatorReservationExecution(code).finalized).map((code) => `<option value="${escapeHtml(code)}">#${escapeHtml(code)} · ${escapeHtml(getUnifiedOperatorReservation(code).customer)}</option>`).join("");
    }
    const noveltyList = $("[data-novelty-list]");
    if (noveltyList) noveltyList.innerHTML = (departure.novelties || []).map((entry) => `<tr><td>${escapeHtml(formatOperatorTenantDateTime(entry.at))}</td><td>${escapeHtml(entry.kind)}${entry.code ? ` · #${escapeHtml(entry.code)}` : ""}</td><td>${escapeHtml(entry.text)}${entry.refundAmount != null ? `<br><small>Reembolsable calculado: ${formatCOP(entry.refundAmount)} (${entry.refundPercent} % de la política vigente)${entry.refundAmount > 0 ? ": devolución determinada y autorizada automáticamente, pendiente de ejecución en 5 días hábiles" : ": no se genera devolución; la reserva continúa hasta Finalizada"}</small>` : ""}</td><td>${escapeHtml(entry.actor)}</td></tr>`).join("") || '<tr><td colspan="4">Sin novedades registradas.</td></tr>';
    const history = $("[data-execution-history]");
    if (history) history.innerHTML = (departure.history || []).slice().reverse().map((entry) => `<tr><td>${escapeHtml(formatOperatorTenantDateTime(entry.at))}</td><td>${escapeHtml(entry.actor)}</td><td>${escapeHtml(entry.action)}</td><td>${escapeHtml(entry.detail || "")}</td></tr>`).join("") || '<tr><td colspan="4">Sin movimientos registrados.</td></tr>';
    if (!open && !departure.history?.length) { /* sin historial */ }
  };
  render();
  if (!id) return;

  // Inicio real (RN-EJE-001, GAP-010).
  $("[data-execution-start-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = startOperatorDeparture(id, { realStartAt: operatorLocalInputToIso($("[data-execution-start-real]").value) });
    if (!result.ok) { operatorFeedback($("[data-execution-start-feedback]"), result.error, false); return; }
    operatorFeedback($("[data-execution-start-feedback]"), `Inicio registrado. ${result.started.length} reserva(s) pasaron a En ejecución${result.cancelled.length ? `; ${result.cancelled.length} se cancelaron por no cumplir las condiciones económicas (${result.cancelled.map((code) => `#${code}`).join(", ")}) y sus valores abonados quedaron en tratamiento pendiente` : ""}.`, true);
    render();
  });

  // Servicios prestados / no prestados (delegado).
  $("[data-execution-reservations]")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-exec-save]");
    if (!button) return;
    const article = button.closest("[data-execution-reservation]");
    const services = [...article.querySelectorAll("[data-exec-service]")].map((row) => ({
      key: row.dataset.execService,
      name: row.dataset.serviceName,
      provided: row.querySelector("[data-exec-provided]").value === "si",
      causal: row.querySelector("[data-exec-causal]").value.trim(),
    }));
    const result = saveOperatorExecutionServices(button.dataset.execSave, { services, participants: article.querySelector("[data-exec-participants]").value });
    const feedback = article.querySelector("[data-exec-feedback]");
    operatorFeedback(feedback, result.ok ? "Servicios registrados. La diferencia entre lo reservado y lo ejecutado queda visible en Operación." : result.error, result.ok);
  });

  // Novedades y emergencia personal (AB-01).
  const emergency = $("[data-novelty-emergency]");
  emergency?.addEventListener("change", () => { const field = $("[data-novelty-affected-field]"); if (field) field.hidden = !emergency.checked; });
  $("[data-novelty-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = registerOperatorExecutionNovelty(id, { code: $("[data-novelty-reservation]").value, text: $("[data-novelty-text]").value, personalEmergency: Boolean(emergency?.checked), affected: $("[data-novelty-affected]")?.value });
    if (!result.ok) { operatorFeedback($("[data-novelty-feedback]"), result.error, false); return; }
    let message = "Novedad registrada en el historial de la salida.";
    if (result.refund) message = result.refund.amount > 0
      ? `Emergencia personal registrada. Monto reembolsable calculado: ${formatCOP(result.refund.amount)}. La devolución quedó determinada y autorizada automáticamente, pendiente de ejecución en máximo 5 días hábiles.`
      : "Emergencia personal registrada. La política vigente no establece devolución para este supuesto: el monto reembolsable es $0, no se genera devolución y la reserva continúa su cierre normal hasta Finalizada.";
    operatorFeedback($("[data-novelty-feedback]"), message, true);
    $("[data-novelty-form]").reset();
    const field = $("[data-novelty-affected-field]"); if (field) field.hidden = true;
    render();
  });

  // Finalización o interrupción (K1, H2).
  const outcome = $("[data-execution-outcome]");
  outcome?.addEventListener("change", () => { const field = $("[data-execution-interruption-field]"); if (field) field.hidden = outcome.value !== "interrumpida"; });
  $("[data-execution-finish-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = finishOperatorDeparture(id, { realEndAt: operatorLocalInputToIso($("[data-execution-end-real]").value), outcome: outcome.value, interruption: $("[data-execution-interruption]").value });
    if (!result.ok) { operatorFeedback($("[data-execution-finish-feedback]"), result.error, false); return; }
    operatorFeedback($("[data-execution-finish-feedback]"), outcome.value === "interrumpida"
      ? `Salida interrumpida: termina Finalizada con la interrupción registrada. ${result.interruptedCodes.length} reserva(s) se gestionan con la reprogramación (24 h para proponer) o la devolución del 100 %.`
      : `Finalización registrada. ${result.finalizedCodes.length} reserva(s) pasaron a Finalizada; el cierre es de la salida.`, true);
    render();
  });

  // Regularización (J3, L4, FINAL-006, GAP-021).
  const mode = $("[data-regularize-mode]");
  const syncRegularize = () => {
    const value = mode?.value || "ejecutada";
    document.querySelectorAll("[data-regularize-when]").forEach((node) => { node.hidden = !node.dataset.regularizeWhen.split(" ").includes(value); });
  };
  mode?.addEventListener("change", syncRegularize);
  syncRegularize();
  $("[data-regularize-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = regularizeOperatorDeparture(id, {
      mode: mode.value,
      realStartAt: operatorLocalInputToIso($("[data-regularize-start]").value),
      realEndAt: operatorLocalInputToIso($("[data-regularize-end]").value),
      startMotive: $("[data-regularize-start-motive]").value,
      causal: $("[data-regularize-causal]").value,
      interruption: $("[data-regularize-interruption]").value,
    });
    if (!result.ok) { operatorFeedback($("[data-regularize-feedback]"), result.error, false); return; }
    operatorFeedback($("[data-regularize-feedback]"), mode.value === "no-realizada" ? "Salida regularizada como no realizada: queda Cancelada y sus reservas abren su episodio de reprogramación o devolución del 100 %." : "Regularización registrada con la hora real reportada y su trazabilidad.", true);
    render();
  });
}

// Servicios de una reserva para el registro de lo prestado y no prestado.
function getOperatorReservationServiceLines(record, departure) {
  const lines = [{ key: "tour", name: record.service || "Tour" }];
  const details = OPERATOR_KNOWN_TOUR_DETAILS[record.service];
  (details?.inclusions || []).forEach((text, index) => lines.push({ key: `inclusion-${index}`, name: text }));
  if (departure && (departure.vehicles || []).length) lines.push({ key: "transporte", name: `Transporte: ${departure.vehicles.map((vehicle) => vehicle.name).join(", ")}` });
  return lines;
}

// --- Propuesta de reprogramación (RF-015C) ---------------------------------------------------
function setupOperatorReprogramReservation() {
  if (document.body.dataset.screen !== "operator-reprogram-reservation") return;
  ensureOperatorReprogramEpisodes();
  const params = new URLSearchParams(window.location.search);
  const $ = (selector) => document.querySelector(selector);
  const listBody = $("[data-reprogram-list]");
  const detail = $("[data-reprogram-detail]");
  const admin = isOperatorAdmin();
  const queryOnly = isOperatorQueryOnlyRole();
  let selected = params.get("reservation") || "";
  const departureFilter = params.get("departure") || "";
  const open = (episode) => ["Pendiente de propuesta", "Propuesta enviada"].includes(episode.status);

  const renderList = () => {
    const episodes = Object.values(getOperatorReprogramEpisodes()).filter((episode) => !departureFilter || episode.originalDepartureId === departureFilter);
    if (!selected) selected = (episodes.find(open) || episodes[0] || {}).code || "";
    if (listBody) {
      listBody.innerHTML = episodes.map((episode) => {
        const record = getUnifiedOperatorReservation(episode.code);
        const timers = getOperatorEpisodeTimers(episode);
        const left = episode.status === "Pendiente de propuesta" ? `Proponer en ${formatOperatorDuration(timers.proposalLeftMs)}` : episode.status === "Propuesta enviada" ? `Respuesta en ${formatOperatorDuration(timers.responseLeftMs)}` : "—";
        return `<tr data-reprogram-row="${escapeHtml(episode.code)}"><td><strong>#${escapeHtml(episode.code)}</strong></td><td>${escapeHtml(record?.customer || "Cliente")}</td><td>${escapeHtml(episode.originalDepartureId)}</td><td><span class="operator-status ${open(episode) ? "is-pending" : episode.status === "Aceptada" ? "is-confirmed" : "is-cancelled"}">${escapeHtml(episode.status)}</span></td><td>${escapeHtml(left)}</td><td><a href="${withTheme(`admin-reprogramar-reserva.html?reservation=${encodeURIComponent(episode.code)}`, getTheme())}" data-reprogram-pick="${escapeHtml(episode.code)}">Gestionar</a></td></tr>`;
      }).join("") || '<tr><td colspan="6">No hay episodios de reprogramación. Se abren cuando una salida con reservas se cancela o se interrumpe por una causa no atribuible al cliente.</td></tr>';
    }
    return episodes;
  };

  const renderDetail = () => {
    const episode = selected ? getOperatorReprogramEpisodes()[selected] : null;
    if (!episode) { if (detail) detail.hidden = true; return; }
    if (detail) detail.hidden = false;
    const record = getUnifiedOperatorReservation(episode.code);
    const original = getOperatorDepartureRaw(episode.originalDepartureId);
    const proposed = episode.proposedDepartureId ? getOperatorDepartureRaw(episode.proposedDepartureId) : null;
    const timers = getOperatorEpisodeTimers(episode);
    const setText = (selector, value) => { const node = $(selector); if (node) node.textContent = value; };
    setText("[data-reprogram-code]", `Reserva #${episode.code}`);
    setText("[data-reprogram-customer]", `${record?.customer || "Cliente"} · ${record?.travelers || 0} viajeros · ${record?.service || ""}`);
    setText("[data-reprogram-original]", original ? `${original.id} · ${original.label} (${original.status}${original.cancellation ? `: ${original.cancellation.causal}` : original.interruption ? `: ${original.interruption.description}` : ""})` : "—");
    setText("[data-reprogram-proposed]", proposed ? `${proposed.id} · ${proposed.label}` : "Sin propuesta vigente");
    const statusNode = $("[data-reprogram-status]");
    if (statusNode) { statusNode.textContent = episode.status; statusNode.className = `operator-status ${open(episode) ? "is-pending" : episode.status === "Aceptada" ? "is-confirmed" : "is-cancelled"}`; }
    const episodeLeft = timers.limitLeftMs > 0 ? `quedan ${formatOperatorDuration(timers.limitLeftMs)} (límite del episodio: ${formatOperatorTenantDateTime(episode.limitAt)})` : "límite del episodio alcanzado";
    setText("[data-reprogram-timers]", episode.status === "Pendiente de propuesta"
      ? `Plazo para proponer una nueva salida: ${timers.overdue ? "vencido" : `quedan ${formatOperatorDuration(timers.proposalLeftMs)}`} (24 horas corridas desde la cancelación o interrupción). Episodio: ${episodeLeft}.`
      : episode.status === "Propuesta enviada"
        ? `Respuesta del cliente: ${timers.overdue ? "plazo vencido" : `quedan ${formatOperatorDuration(timers.responseLeftMs)}`}; vence el ${formatOperatorTenantDateTime(episode.responseDueAt)} (el menor entre 72 horas corridas desde la notificación, lo que resta del episodio y la hora de inicio de la salida propuesta). Episodio: ${episodeLeft}.`
        : `Episodio cerrado: ${episode.status}.`);
    setText("[data-reprogram-frozen]", "Los plazos económicos de la reserva permanecen congelados durante el episodio y continúan con el tiempo restante si el cliente acepta, sin superar la hora de inicio de la nueva salida.");
    const isOpen = open(episode);
    const proposePanel = $("[data-reprogram-propose-panel]");
    const responsePanel = $("[data-reprogram-response-panel]");
    if (proposePanel) proposePanel.hidden = !(episode.status === "Pendiente de propuesta" && admin);
    if (responsePanel) responsePanel.hidden = !(episode.status === "Propuesta enviada" && !queryOnly);
    const noAlt = $("[data-reprogram-no-alternative]");
    if (noAlt) noAlt.hidden = !(episode.status === "Pendiente de propuesta" && admin);
    const expire = $("[data-reprogram-expire]");
    if (expire) expire.hidden = !(isOpen && !queryOnly && (timers.overdue || timers.limitLeftMs <= 0));
    const target = $("[data-reprogram-target]");
    if (target && episode.status === "Pendiente de propuesta") {
      const options = getOperatorDepartures().filter((item) => original && item.tourKey === original.tourKey && item.id !== episode.originalDepartureId && item.bookable && item.available >= Number(record?.travelers || 0));
      target.innerHTML = '<option value="">Selecciona una salida con capacidad</option>' + options.map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.id)} · ${escapeHtml(item.label)} · ${item.available} cupo(s) disponible(s)</option>`).join("");
      const empty = $("[data-reprogram-target-empty]");
      if (empty) empty.hidden = options.length > 0;
    }
    const respondedAt = $("[data-reprogram-responded-at]");
    if (respondedAt && !respondedAt.value) respondedAt.value = "2026-09-01T12:00";
    const history = $("[data-reprogram-history]");
    if (history) history.innerHTML = (episode.history || []).slice().reverse().map((entry) => `<tr><td>${escapeHtml(formatOperatorTenantDateTime(entry.at))}</td><td>${escapeHtml(entry.actor)}</td><td>${escapeHtml(entry.action)}</td><td>${escapeHtml(entry.detail || "")}</td></tr>`).join("");
    const responseInfo = $("[data-reprogram-response-info]");
    if (responseInfo) {
      responseInfo.hidden = !episode.response;
      if (episode.response) responseInfo.textContent = `Respuesta registrada: ${episode.response.decision === "aceptar" ? "acepta" : "rechaza"} · canal ${episode.response.channel} · evidencia: ${episode.response.evidence} · registrada por ${episode.response.actor} · respuesta del ${formatOperatorTenantDateTime(episode.response.respondedAt)}.`;
    }
  };
  const refresh = () => { renderList(); renderDetail(); };
  refresh();

  listBody?.addEventListener("click", (event) => {
    const link = event.target.closest("[data-reprogram-pick]");
    if (!link) return;
    event.preventDefault();
    selected = link.dataset.reprogramPick;
    refresh();
  });
  $("[data-reprogram-propose-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const result = proposeOperatorReprogram(selected, $("[data-reprogram-target]").value);
    operatorFeedback($("[data-reprogram-feedback]"), result.ok ? `Propuesta enviada. Los cupos quedan apartados en la salida propuesta hasta la respuesta (máximo ${formatOperatorTenantDateTime(result.responseDueAt)}).` : result.error, result.ok);
    if (result.ok) refresh();
  });
  $("[data-reprogram-response-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const raw = $("[data-reprogram-responded-at]").value;
    const result = registerOperatorReprogramResponse(selected, { decision: $("[data-reprogram-decision]").value, channel: $("[data-reprogram-channel]").value, evidence: $("[data-reprogram-evidence]").value, respondedAt: raw ? operatorLocalInputToIso(raw) : "" });
    operatorFeedback($("[data-reprogram-feedback]"), result.ok ? (result.decision === "aceptar" ? "Respuesta registrada: el cliente acepta. La misma reserva conserva sus pagos e historial y queda asignada a la nueva salida." : "Respuesta registrada: el cliente rechaza. La reserva se canceló y se determinó la devolución del 100 % de los valores validados.") : result.error, result.ok);
    if (result.ok) refresh();
  });
  $("[data-reprogram-no-alternative]")?.addEventListener("click", () => {
    const result = declareOperatorNoAlternative(selected);
    operatorFeedback($("[data-reprogram-feedback]"), result.ok ? "Reserva cancelada sin alternativa: devolución del 100 % de los valores pagados y validados, pendiente de ejecución en 5 días hábiles." : result.error, result.ok);
    if (result.ok) refresh();
  });
  $("[data-reprogram-expire]")?.addEventListener("click", () => {
    const result = expireOperatorReprogram(selected);
    operatorFeedback($("[data-reprogram-feedback]"), result.ok ? "Plazo vencido: la reserva se canceló por una causa no atribuible al cliente con devolución del 100 %." : result.error, result.ok);
    if (result.ok) refresh();
  });
}

// --- Tratamiento pendiente de valores abonados (RN-RES-006C, D1, E16, G7) ---------------------
// Decide el Administrador del tenant dentro de 24 horas corridas: devolver el 100 % o registrar
// el 100 % como saldo a favor. Sin decisión, Multitour determina la devolución del 100 %.
function decideOperatorTreatment(requestId, option, motive) {
  if (!isOperatorAdmin()) return { ok: false, error: "Solo el Administrador del tenant decide el tratamiento." };
  const request = getOperatorRefundRequest(requestId);
  if (!request || request.status !== "Pendiente de autorización") return { ok: false, error: "La solicitud ya no está pendiente de decisión." };
  const note = String(motive || "").trim();
  if (!note) return { ok: false, error: "Registra el motivo de la decisión." };
  const now = getOperatorNow();
  if (option === "devolver") {
    updateOperatorRefundRequest(requestId, {
      status: "Autorizada",
      authorizedBy: getOperatorActorLabel(),
      authorizedAt: now.toISOString(),
      authorizationNote: note,
      executionDueAt: addOperatorBusinessDays(now, OPERATOR_REFUND_EXECUTION_BUSINESS_DAYS).toISOString(),
    });
    return { ok: true, option };
  }
  updateOperatorRefundRequest(requestId, { status: "Saldo a favor", authorizedBy: getOperatorActorLabel(), authorizedAt: now.toISOString(), authorizationNote: note, executedBy: getOperatorActorLabel(), executedAt: now.toISOString() });
  addOperatorCreditEntry(request.reservationCode, request.amountValue || parseCOP(request.amount), "Tratamiento pendiente registrado como saldo a favor del 100 %");
  return { ok: true, option };
}

function setupOperatorPendingTreatment() {
  if (document.body.dataset.screen !== "operator-pending-treatment") return;
  // La decisión es exclusiva del Administrador del tenant (sección 9).
  if (!guardOperatorAdminOnlyScreen("admin-solicitudes-devolucion.html")) return;
  ensureOperatorTreatmentRequests();
  const list = document.querySelector("[data-treatment-list]");
  const empty = document.querySelector("[data-treatment-empty]");
  const feedback = document.querySelector("[data-treatment-feedback]");
  const render = () => {
    const requests = getOperatorRefundRequests().filter((request) => request.kind === "tratamiento" || (request.origin === "incumplimiento-pago"));
    const pending = requests.filter((request) => request.status === "Pendiente de autorización");
    if (empty) empty.hidden = pending.length > 0;
    if (!list) return;
    list.innerHTML = pending.map((request) => {
      const left = getOperatorRefundDecisionDueAt(request) - getOperatorNow();
      const rule = OPERATOR_REFUND_ORIGIN_RULES[request.origin];
      return `<article class="operator-panel" data-treatment-card="${escapeHtml(request.id)}"><div class="operator-panel-head"><div><p class="operator-eyebrow">Reserva #${escapeHtml(request.reservationCode)} · ${escapeHtml(request.customer)}</p><h2>Valores abonados: ${escapeHtml(request.amount)}</h2></div><span class="operator-status is-pending">Quedan ${escapeHtml(formatOperatorDuration(Math.max(left, 0)))}</span></div><p class="operator-copy">${escapeHtml(request.reason)}</p><p class="operator-copy">${escapeHtml(request.ruleLabel || `${rule?.label || "Tratamiento pendiente"}.`)} Dentro de 24 horas corridas desde el reconocimiento del dinero, decide entre devolver el 100 % o registrar el 100 % como saldo a favor. Sin decisión se aplica la devolución del 100 % (pendiente de ejecución en máximo 5 días hábiles).</p><div class="operator-form-grid"><label class="operator-form-wide">Motivo de la decisión (obligatorio)<textarea data-treatment-motive placeholder="Registra el motivo de la decisión"></textarea></label></div><div class="operator-form-actions"><button class="operator-primary" type="button" data-treatment-decide="devolver" data-request="${escapeHtml(request.id)}">Registrar devolución del 100 %</button><button class="operator-outline" type="button" data-treatment-decide="saldo" data-request="${escapeHtml(request.id)}">Registrar saldo a favor del 100 %</button><a class="operator-outline" href="${withTheme(`admin-detalle-devolucion.html?id=${encodeURIComponent(request.id)}`, getTheme())}">Ver detalle</a></div></article>`;
    }).join("");
  };
  render();
  list?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-treatment-decide]");
    if (!button) return;
    const motive = button.closest("[data-treatment-card]").querySelector("[data-treatment-motive]").value;
    const result = decideOperatorTreatment(button.dataset.request, button.dataset.treatmentDecide, motive);
    operatorFeedback(feedback, result.ok ? (result.option === "devolver" ? "Devolución del 100 % autorizada: debe ejecutarse y registrarse como movimiento de caja en máximo 5 días hábiles." : "El 100 % quedó registrado como saldo a favor del cliente dentro del tenant (no es movimiento de caja mientras no haya devolución ejecutada).") : result.error, result.ok);
    if (result.ok) render();
  });
}

// ---------------------------------------------------------------------------
// Reglas automáticas por tiempo (PDR v1.9: RN-RES-006/006C, RN-EJE-001/002, RN-CAJ-001)
// ---------------------------------------------------------------------------
// applyOperatorTimeRules() se ejecuta al cargar cada pantalla (cliente, operador y plataforma) y
// aplica sobre los datos de demostración y los creados por el usuario lo que el reloj único
// (getOperatorNow) ya dejó vencido. Es idempotente: cada efecto queda registrado una sola vez en
// el registro de eventos automáticos (auditoría del tenant) y, cuando corresponde, como alerta.
// Los efectos reutilizan los helpers existentes (cancelOperatorReservationByCause,
// createOperatorRefundRequest, expireOperatorReprogramBySystem) y se fechan en el instante en que
// el plazo venció, no cuando se abre la pantalla. Con el tenant inactivo los plazos operativos
// están suspendidos (G4) y no se aplica ninguna regla.
const OPERATOR_TIME_EVENTS_KEY = "multitour-time-events";

function getOperatorTimeEvents() {
  const list = readOperatorStorage(OPERATOR_TIME_EVENTS_KEY, []);
  return Array.isArray(list) ? list : [];
}

// Registra un evento automático una sola vez por clave. audience: admin | receipts | cash | execution.
function logOperatorTimeEvent(key, { at = "", rule = "", action, detail = "", recordAffected = "", audience = "admin", alert = null, href = "" }) {
  const list = getOperatorTimeEvents();
  if (list.some((event) => event.key === key)) return false;
  const now = getOperatorNow().toISOString();
  list.push({ key, at: at || now, loggedAt: now, rule, action, detail, recordAffected, audience, alert, href });
  writeOperatorStorage(OPERATOR_TIME_EVENTS_KEY, list.slice(-400));
  return true;
}

function operatorTimeEventVisible(event) {
  if (isOperatorAdmin()) return true;
  const permission = ({ receipts: OPERATOR_PERMISSION_VALIDATE_RECEIPTS, cash: OPERATOR_PERMISSION_MANAGE_CASH, execution: OPERATOR_PERMISSION_MANAGE_EXECUTION })[event.audience];
  return Boolean(permission && operatorHasPermission(permission));
}

// Alertas de salidas (J3/L4): hora de inicio alcanzada sin registro y pendiente de regularización.
function getOperatorPendingDepartureAlerts() {
  return getOperatorDepartures().filter((item) => item.pendingRegularization || item.startAlert).map((item) => ({
    title: item.pendingRegularization ? `Salida ${item.id} pendiente de regularización` : `Salida ${item.id}: hora de inicio alcanzada sin registro`,
    body: item.pendingRegularization
      ? `Superó la hora de finalización estimada (${formatOperatorDate(item.date)} ${item.end}) sin cierre operativo. No se cierra automáticamente: permanece hasta registrar lo ocurrido.`
      : `Se alcanzó la hora programada de inicio (${item.label}) sin registro de inicio real. Ya no se aceptan pagos y las reservas no elegibles se cancelaron.`,
  }));
}

// a), c) y f): vencimiento del plazo de pago, hora de inicio de la salida y saldo vencido.
function applyOperatorReservationTimeRules(now) {
  Object.values(getUnifiedOperatorReservations()).forEach((record) => {
    if (["Cancelada", "Finalizada", "En ejecución"].includes(record.status)) return;
    const departure = getOperatorReservationDeparture(record);
    const start = departure ? new Date(departure.startAt) : null;
    let cause = "";
    let at = null;
    let rule = "";
    let action = "";
    if (departure && departure.status === "Programada" && start <= now && !isOperatorReservationEligibleToStart(record)) {
      cause = "Se alcanzó la hora programada de inicio de la salida sin cumplir las condiciones económicas (pago completo o comprobante aprobado)";
      at = start;
      rule = "H1 / G1";
      action = "Reserva cancelada al alcanzarse la hora de inicio de la salida";
    } else {
      const deadline = getOperatorPaymentDeadline(record);
      if (!deadline.applies || deadline.frozen || !deadline.overdue || deadline.hasReceiptInValidation) return;
      if (record.status === "Pendiente de pago") {
        cause = "Cancelada por vencimiento del plazo de pago";
        rule = "RN-RES-006 / E1";
        action = "Reserva cancelada por vencimiento del plazo de pago";
      } else if (record.status === "Confirmada" && record.balanceValue > 0) {
        cause = "Cancelada por vencimiento del plazo del saldo";
        rule = "D4 / E1 / L6";
        action = "Reserva cancelada por vencimiento del plazo del saldo";
      } else return;
      at = deadline.effectiveDueAt;
    }
    const result = cancelOperatorReservationByCause(record.code, { causal: cause, origin: "incumplimiento-pago", automatic: true, at: at.toISOString() });
    if (!result.ok) return;
    const treatment = result.base > 0 ? ` Valores abonados (${formatCOP(result.base)}) en tratamiento pendiente: el Administrador del tenant decide en 24 horas entre devolver el 100 % o registrarlos como saldo a favor.` : " No había valores abonados; el cupo quedó liberado.";
    logOperatorTimeEvent(`cancel:${record.code}`, {
      at: at.toISOString(),
      rule,
      action,
      detail: `${cause}.${treatment}`,
      recordAffected: `Reserva ${record.code}`,
      audience: "receipts",
      alert: { code: "RC", title: `${action} · ${record.code}`, body: `${cause}.${treatment}` },
      href: "admin-reservas.html",
    });
  });
}

// c) y L4: marcas de las salidas (alerta de inicio sin registro y pendiente de regularización).
function applyOperatorDepartureTimeMarks() {
  getOperatorDepartures().forEach((departure) => {
    if (departure.startAlert) {
      logOperatorTimeEvent(`departure-start:${departure.id}`, {
        at: departure.startAt,
        rule: "H1 / J3 / L4",
        action: "Hora de inicio alcanzada sin registro de inicio real",
        detail: `La salida ${departure.id} (${departure.label}) alcanzó su hora programada de inicio: se bloquean pagos y comprobantes nuevos, se cancelaron las reservas no elegibles y se alertó a los Administradores y a quienes gestionan la ejecución.`,
        recordAffected: `Salida ${departure.id}`,
        audience: "execution",
      });
    }
    if (departure.pendingRegularization) {
      logOperatorTimeEvent(`departure-regularize:${departure.id}`, {
        at: departure.endAt,
        rule: "J3 / L4",
        action: "Salida pendiente de regularización",
        detail: `La salida ${departure.id} superó su hora de finalización estimada sin cierre operativo. Queda marcada, sin cierre automático, hasta registrar lo ocurrido con la hora real.`,
        recordAffected: `Salida ${departure.id}`,
        audience: "execution",
      });
    }
  });
}

// e): L1, I2 y límite de 96 horas del episodio de reprogramación.
function applyOperatorReprogramTimeRules() {
  Object.values(getOperatorReprogramEpisodes()).forEach((episode) => {
    if (!["Pendiente de propuesta", "Propuesta enviada"].includes(episode.status)) return;
    const timers = getOperatorEpisodeTimers(episode);
    if (timers.overdue || timers.limitLeftMs <= 0) expireOperatorReprogramBySystem(episode.code);
  });
}

// d) y L3: determinación automática a las 24 horas y devolución no ejecutada en 5 días hábiles.
function applyOperatorRefundTimeRules() {
  getOperatorRefundRequests().forEach((request) => {
    if ((request.kind === "tratamiento" || request.origin === "saldo-a-favor") && request.autoDetermined) {
      const body = request.origin === "saldo-a-favor"
        ? `Sin decisión del Administrador del tenant en 24 horas corridas, Multitour autorizó automáticamente la devolución del monto disponible del saldo a favor (${request.amount}) y notificó a todos los Administradores del tenant. Queda pendiente de ejecución en máximo 5 días hábiles; no implica que el dinero haya sido devuelto.`
        : `Sin decisión del Administrador del tenant en 24 horas corridas, Multitour determinó y autorizó la devolución del 100 % (${request.amount}). Queda pendiente de ejecución en máximo 5 días hábiles; no implica que el dinero haya sido devuelto.`;
      logOperatorTimeEvent(`refund-auto:${request.id}`, {
        at: request.authorizedAt,
        rule: "G7 / H4 / H5 / AC-02",
        action: request.origin === "saldo-a-favor" ? "Devolución de saldo a favor autorizada automáticamente" : "Devolución del 100 % determinada y autorizada automáticamente",
        detail: `Reserva ${request.reservationCode}: ${body}`,
        recordAffected: `Reserva ${request.reservationCode}`,
        audience: "admin",
        alert: { code: "DV", title: `Devolución del 100 % determinada automáticamente · ${request.reservationCode}`, body },
        href: "admin-solicitudes-devolucion.html",
      });
    }
    if (operatorRefundExecutionOverdue(request)) {
      logOperatorTimeEvent(`refund-overdue:${request.id}`, {
        at: request.executionDueAt,
        rule: "L3",
        action: "Ejecución de devolución vencida",
        detail: `La devolución de la reserva ${request.reservationCode} (${request.amount}) superó los 5 días hábiles sin ejecutarse. Sigue siendo una obligación pendiente.`,
        recordAffected: `Reserva ${request.reservationCode}`,
        audience: "admin",
      });
    }
  });
}

// b): comprobantes En validación más de 24 horas corridas.
function applyOperatorReceiptTimeRules() {
  getOperatorPendingReceipts().filter(operatorReceiptOverdue).forEach((receipt) => {
    logOperatorTimeEvent(`receipt-overdue:${receipt.id}`, {
      at: new Date(new Date(receipt.presentedAt).getTime() + OPERATOR_RECEIPT_REVIEW_MS).toISOString(),
      rule: "RN-RES-006C",
      action: "Comprobante con revisión vencida",
      detail: `El comprobante ${receipt.id} lleva más de 24 horas corridas En validación. Sigue pendiente: no cancela la reserva ni libera cupos; se genera una alerta prioritaria.`,
      recordAffected: `Reserva ${receipt.code}`,
      audience: "receipts",
    });
  });
}

// g): GAP-012 (caja anterior sin cierre) y AB-02 (caja automática sin efectivo).
function applyOperatorCashTimeRules() {
  // La jornada de demostración se fija a su fecha para que, al avanzar el reloj, la caja del día
  // anterior quede realmente sin cerrar (y no se regenere con la fecha nueva).
  if (!readOperatorStorage(OPERATOR_CASH_DAY_KEY, null)) setOperatorCashDay(getDefaultOperatorCashDay());
  const pendingDays = [];
  const stored = readOperatorStorage(OPERATOR_CASH_DAY_KEY, null);
  if (stored && isOperatorCashPendingClosure() && stored.date < getOperatorCashTodayKey() && stored.status !== "cerrada") pendingDays.push(stored.date);
  getOperatorPendingCashDayList().forEach((day) => pendingDays.push(day.date));
  pendingDays.forEach((date) => {
    logOperatorTimeEvent(`cash-pending:${date}`, {
      at: new Date(`${date}T23:59:59${OPERATOR_TENANT_UTC_OFFSET}`).toISOString(),
      rule: "GAP-012",
      action: "Caja marcada como Pendiente de cierre",
      detail: `La caja del ${date} tuvo apertura operativa y no se cerró al finalizar su día calendario: deja de aceptar movimientos, no tiene cierre automático ni efectivo final calculado por el sistema, y exige cierre formal. La caja del día siguiente opera de forma independiente.`,
      recordAffected: `Caja del ${date}`,
      audience: "cash",
    });
  });
  getOperatorAutomaticCashClosures().forEach((closure) => {
    logOperatorTimeEvent(`cash-auto-close:${closure.date}`, {
      at: closure.closedAt,
      rule: "AB-02",
      action: "Cierre automático de caja sin efectivo",
      detail: `La caja del ${closure.date} se creó automáticamente por movimientos no efectivos, sin apertura operativa ni efectivo, y se cerró sola al finalizar el día calendario del tenant.`,
      recordAffected: `Caja del ${closure.date}`,
      audience: "cash",
    });
  });
}

function applyOperatorTimeRules() {
  if (applyOperatorTimeRules.busy) return;
  applyOperatorTimeRules.busy = true;
  try {
    ensureOperatorTenantSuspensionLedger();
    // I1: una salida cuya hora programada se alcanzó con el tenant inactivo se cancela sola (causa
    // no atribuible al cliente) y no se reactiva al reactivar el tenant. Corre siempre.
    applyOperatorTenantInactiveDepartureCancellations();
    if (isOperatorTenantInactive()) {
      // Tenant inactivo: los plazos operativos y las cancelaciones por plazo están suspendidos (G4).
      // Solo corren los plazos de contingencia: 24 h para proponer una reprogramación (L1) y 5 días
      // hábiles para ejecutar devoluciones (el vencimiento de la respuesta del cliente está congelado).
      ensureOperatorTreatmentRequests();
      ensureOperatorReprogramEpisodes();
      applyOperatorReprogramTimeRules();
      applyOperatorRefundTimeRules();
      return;
    }
    const now = getOperatorNow();
    applyOperatorCashTimeRules();
    ensureOperatorTreatmentRequests();
    ensureOperatorReprogramEpisodes();
    applyOperatorReprogramTimeRules();
    applyOperatorReservationTimeRules(now);
    ensureOperatorTreatmentRequests();
    applyOperatorDepartureTimeMarks();
    applyOperatorRefundTimeRules();
    applyOperatorReceiptTimeRules();
    applyOperatorRetention();
  } catch (error) {
    if (typeof console !== "undefined") console.error("applyOperatorTimeRules", error);
  } finally {
    applyOperatorTimeRules.busy = false;
  }
}

// ===========================================================================
// FASE C del PDR v1.9: parámetros de pago del tenant (D4, L6, E15, RN-RES-004/006, RF-021),
// saldo a favor desde administración (RN-RES-009, GAP-014/015, E17, H11, L7, AC-02), contexto
// comercial fijado y recálculo de modificaciones (GAP-018, FINAL-004, RN-RES-002/003/004,
// RF-003A, RF-005B) y retención de datos sensibles (sección 17, C4, E8, G11, L3, Q1, CA-021).
// ===========================================================================
const OPERATOR_PAYMENT_PARAMS_KEY = "multitour-payment-params";
const OPERATOR_FINANCE_AUDIT_KEY = "multitour-operator-finance-audit";
const OPERATOR_SENSITIVE_RETENTION_KEY = "multitour-sensitive-retention";
const OPERATOR_PAYMENT_PARAM_FIELDS = [
  { key: "initialHoursTotal", label: "Plazo inicial · pago total (h)", short: "Inicial pago total (h)", min: 1, max: 720 },
  { key: "initialHoursDeposit", label: "Plazo inicial · abono (h)", short: "Inicial abono (h)", min: 1, max: 720 },
  { key: "minDepositPercent", label: "Abono mínimo (% del valor final)", short: "Abono mínimo (%)", min: 1, max: 100 },
  { key: "extensionHours", label: "Ampliación única (h)", short: "Ampliación (h)", min: 1, max: 720 },
  { key: "balanceHoursBefore", label: "Plazo del saldo (h antes del inicio)", short: "Saldo (h antes)", min: 1, max: 720 },
  { key: "cancellationPenaltyPercent", label: "Penalidad por cancelación del cliente (%)", short: "Penalidad (%)", min: 0, max: 100 },
];

function getOperatorPaymentParamsDefaults() {
  return {
    initialHoursTotal: OPERATOR_PAYMENT_DEADLINE_HOURS["Pago total"],
    initialHoursDeposit: OPERATOR_PAYMENT_DEADLINE_HOURS["Abono"],
    minDepositPercent: OPERATOR_DEFAULT_MIN_DEPOSIT_PERCENT,
    extensionHours: OPERATOR_PAYMENT_EXTENSION_HOURS,
    balanceHoursBefore: OPERATOR_BALANCE_HOURS_BEFORE_DEPARTURE,
    cancellationPenaltyPercent: 0,
  };
}

function getOperatorPaymentParamsConfig() {
  const stored = readOperatorStorage(OPERATOR_PAYMENT_PARAMS_KEY, null) || {};
  return { tenant: stored.tenant || {}, services: stored.services || {} };
}

// Parámetros efectivos de un servicio: predeterminado del tenant, valor de demostración propio del
// servicio (abono mínimo y penalidad ya modelados en el catálogo) y, con prioridad, lo que el
// Administrador del tenant haya definido para ese servicio.
function getOperatorPaymentParams(serviceName = "") {
  const config = getOperatorPaymentParamsConfig();
  const details = serviceName ? OPERATOR_KNOWN_TOUR_DETAILS[serviceName] : null;
  const seed = {};
  if (details?.minDepositPercent != null) seed.minDepositPercent = details.minDepositPercent;
  const penaltySeed = details?.cancellationPenaltyPercent ?? (serviceName ? OPERATOR_DEMO_CANCELLATION_PENALTY[serviceName] : undefined);
  if (penaltySeed != null) seed.cancellationPenaltyPercent = penaltySeed;
  return { ...getOperatorPaymentParamsDefaults(), ...config.tenant, ...seed, ...((serviceName && config.services[serviceName]) || {}) };
}

function getOperatorReservationPaymentParams(record) {
  return (record && record.paymentParams) || getOperatorPaymentParams(record?.service || "");
}

function addOperatorFinanceAudit(entry) {
  const list = readOperatorStorage(OPERATOR_FINANCE_AUDIT_KEY, []);
  list.unshift({ at: getOperatorNow().toISOString(), actor: getOperatorActorLabel(), ...entry });
  writeOperatorStorage(OPERATOR_FINANCE_AUDIT_KEY, list.slice(0, 300));
}

function describeOperatorPaymentParams(params) {
  return OPERATOR_PAYMENT_PARAM_FIELDS.map((field) => `${field.short}: ${params[field.key]}`).join(" · ");
}

// Guarda los parámetros (solo Administrador del tenant) con motivo y auditoría de valor anterior y nuevo.
function saveOperatorPaymentParams(tenantValues, serviceValues, reason) {
  if (!isOperatorAdmin()) return { ok: false, error: "Solo el Administrador del tenant define los parámetros de pago." };
  if (!String(reason || "").trim()) return { ok: false, error: "Registra el motivo del cambio de parámetros." };
  const clean = (values, label) => {
    const out = {};
    for (const field of OPERATOR_PAYMENT_PARAM_FIELDS) {
      const raw = values[field.key];
      if (raw === "" || raw == null) continue;
      const number = Number(raw);
      if (!Number.isInteger(number) || number < field.min || number > field.max) return { error: `${label}: ${field.label} debe ser un entero entre ${field.min} y ${field.max}.` };
      out[field.key] = number;
    }
    return { out };
  };
  const tenantClean = clean(tenantValues, "Predeterminado del tenant");
  if (tenantClean.error) return { ok: false, error: tenantClean.error };
  const defaults = getOperatorPaymentParamsDefaults();
  const tenantFull = { ...defaults, ...tenantClean.out };
  const services = {};
  for (const [name, values] of Object.entries(serviceValues || {})) {
    const cleaned = clean(values, name);
    if (cleaned.error) return { ok: false, error: cleaned.error };
    if (Object.keys(cleaned.out).length) services[name] = cleaned.out;
  }
  const before = getOperatorPaymentParamsConfig();
  const previousTenant = { ...defaults, ...before.tenant };
  const changes = [];
  if (JSON.stringify(previousTenant) !== JSON.stringify(tenantFull)) changes.push({ record: "Predeterminado del tenant", previous: describeOperatorPaymentParams(previousTenant), next: describeOperatorPaymentParams(tenantFull) });
  new Set([...Object.keys(before.services), ...Object.keys(services)]).forEach((name) => {
    if (JSON.stringify(before.services[name] || {}) !== JSON.stringify(services[name] || {})) {
      changes.push({ record: name, previous: before.services[name] ? JSON.stringify(before.services[name]) : "hereda el predeterminado", next: services[name] ? JSON.stringify(services[name]) : "hereda el predeterminado" });
    }
  });
  if (!changes.length) return { ok: false, error: "No hay cambios que guardar." };
  writeOperatorStorage(OPERATOR_PAYMENT_PARAMS_KEY, { tenant: tenantClean.out, services, updatedAt: getOperatorNow().toISOString(), updatedBy: getOperatorActorLabel() });
  changes.forEach((change) => addOperatorFinanceAudit({
    action: "Parámetros de pago modificados",
    category: "Parámetros de pago del tenant",
    detail: "Plazos, abono mínimo, plazo del saldo y penalidad de cancelación (efecto prospectivo: las reservas ya creadas conservan sus parámetros).",
    reason: String(reason).trim(),
    recordAffected: change.record,
    previousValue: change.previous,
    newValue: change.next,
  }));
  return { ok: true, changes: changes.length };
}

// --- Pantalla "Parámetros de pago del tenant" ------------------------------------------------
function setupOperatorPaymentParams() {
  if (document.body.dataset.screen !== "operator-payment-params") return;
  if (!guardOperatorAdminOnlyScreen("admin-operador.html")) return;
  const host = document.querySelector("[data-payment-params-table]");
  const feedback = document.querySelector("[data-payment-params-feedback]");
  const form = document.querySelector("[data-payment-params-form]");
  if (!host || !form) return;
  const config = getOperatorPaymentParamsConfig();
  const defaults = getOperatorPaymentParamsDefaults();
  const services = getOperatorCatalogServiceOptions().map((option) => option.label);
  const effectiveTenant = { ...defaults, ...config.tenant };
  const cell = (value, placeholder, attrs) => `<td><input type="number" inputmode="numeric" ${attrs} value="${value == null ? "" : escapeHtml(String(value))}" placeholder="${escapeHtml(String(placeholder))}" /></td>`;
  const header = OPERATOR_PAYMENT_PARAM_FIELDS.map((field) => `<th>${escapeHtml(field.short)}</th>`).join("");
  const tenantRow = `<tr><td><strong>Predeterminado del tenant</strong></td>${OPERATOR_PAYMENT_PARAM_FIELDS.map((field) => cell(effectiveTenant[field.key], defaults[field.key], `data-param-scope="tenant" data-param-key="${field.key}" min="${field.min}" max="${field.max}"`)).join("")}</tr>`;
  const serviceRows = services.map((name) => {
    const own = config.services[name] || {};
    const inherited = getOperatorPaymentParams(name);
    return `<tr><td>${escapeHtml(name)}</td>${OPERATOR_PAYMENT_PARAM_FIELDS.map((field) => cell(own[field.key], inherited[field.key], `data-param-scope="service" data-param-service="${escapeHtml(name)}" data-param-key="${field.key}" min="${field.min}" max="${field.max}"`)).join("")}</tr>`;
  }).join("");
  host.innerHTML = `<table class="operator-table mt-compact-table"><thead><tr><th>Servicio</th>${header}</tr></thead><tbody>${tenantRow}${serviceRows}</tbody></table>`;
  const meta = document.querySelector("[data-payment-params-meta]");
  const stored = readOperatorStorage(OPERATOR_PAYMENT_PARAMS_KEY, null);
  if (meta) meta.textContent = stored?.updatedAt ? `Última modificación: ${formatOperatorTenantDateTime(stored.updatedAt)} por ${stored.updatedBy}.` : "Sin cambios guardados: se usan los valores predeterminados.";
  const history = document.querySelector("[data-payment-params-history]");
  const renderHistory = () => {
    if (!history) return;
    const rows = readOperatorStorage(OPERATOR_FINANCE_AUDIT_KEY, []).filter((entry) => entry.category === "Parámetros de pago del tenant").slice(0, 8);
    history.innerHTML = rows.length ? rows.map((entry) => `<tr><td>${escapeHtml(formatOperatorTenantDateTime(entry.at))}</td><td>${escapeHtml(entry.actor)}</td><td>${escapeHtml(entry.recordAffected)}</td><td>${escapeHtml(entry.reason)}</td></tr>`).join("") : '<tr><td colspan="4">Sin cambios auditados.</td></tr>';
  };
  renderHistory();
  document.querySelector("[data-payment-params-reset]")?.addEventListener("click", () => {
    host.querySelectorAll("input").forEach((input) => { input.value = input.dataset.paramScope === "tenant" ? defaults[input.dataset.paramKey] : ""; });
    operatorFeedback(feedback, "Valores predeterminados cargados: guarda con un motivo para aplicarlos.", true);
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const tenantValues = {};
    const serviceValues = {};
    host.querySelectorAll("input").forEach((input) => {
      if (input.dataset.paramScope === "tenant") tenantValues[input.dataset.paramKey] = input.value;
      else (serviceValues[input.dataset.paramService] ||= {})[input.dataset.paramKey] = input.value;
    });
    const result = saveOperatorPaymentParams(tenantValues, serviceValues, form.querySelector("[data-payment-params-reason]").value);
    operatorFeedback(feedback, result.ok ? `Parámetros guardados y auditados (${result.changes} cambio${result.changes === 1 ? "" : "s"}). Aplican a las reservas nuevas; las existentes conservan los suyos.` : result.error, result.ok);
    if (result.ok) renderHistory();
  });
}

// --- Contexto comercial fijado (GAP-018, FINAL-004, RN-RES-002/003) ---------------------------
function getOperatorLiveDiscounts(today = getOperatorTodayDate()) {
  return getOperatorDiscounts().filter((discount) => discount.active && (!discount.start || discount.start <= today) && (!discount.end || discount.end >= today));
}

// Se guarda en la reserva al crearla: descuentos vigentes ese día y porcentaje que se aplicó.
function buildOperatorCommercialContext(serviceName, appliedPercentage) {
  return {
    fixedAt: getOperatorNow().toISOString(),
    service: serviceName,
    appliedPercentage: Math.round(Number(appliedPercentage || 0) * 10) / 10,
    discounts: getOperatorLiveDiscounts().map((discount) => ({ id: discount.id, service: discount.service, serviceLabel: discount.serviceLabel || discount.service, percentage: Number(discount.percentage) || 0, start: discount.start || "", end: discount.end || "" })),
  };
}

function getOperatorCommercialContext(record) {
  if (record.commercialContext) return record.commercialContext;
  const stored = getOperatorReservationModification(record.code)?.context;
  if (stored) return stored;
  const projected = parseCOP(record.projected);
  const discount = Math.abs(parseCOP(record.discount));
  const percentage = projected > 0 ? Math.round((discount / projected) * 1000) / 10 : 0;
  return { derived: true, fixedAt: record.createdAtIso || "", service: record.service, appliedPercentage: percentage, discounts: percentage > 0 ? [{ id: "derivado", service: record.service, serviceLabel: record.service, percentage, start: "", end: "" }] : [] };
}

function operatorContextPercentFor(context, serviceName) {
  if (serviceName === context.service) return Number(context.appliedPercentage || 0);
  const matches = (context.discounts || []).filter((discount) => discount.serviceLabel === serviceName || discount.service === serviceName);
  return matches.length ? Math.max(...matches.map((discount) => Number(discount.percentage) || 0)) : 0;
}

// Recálculo de una modificación con el contexto fijado: los componentes originales conservan su
// tarifa y su descuento; un componente agregado (más viajeros o servicio nuevo) fija la tarifa
// vigente hoy y usa los descuentos del contexto original aplicables. El descuento adicional
// autorizado (existente o propuesto) se aplica al final sobre el subtotal.
function computeOperatorModificationQuote(reservation, serviceRef, newTravelers, additionalPercent = 0) {
  const context = getOperatorCommercialContext(reservation);
  const previous = getOperatorReservationModification(reservation.code);
  let base = previous?.components;
  if (!base) {
    const count = Math.max(Number(reservation.travelers) || 1, 1);
    base = [{ service: reservation.service, travelers: count, unit: Math.round(parseCOP(reservation.projected) / count), pct: Number(context.appliedPercentage || 0), origin: "original" }];
  }
  const same = serviceRef.name === reservation.service;
  const components = [];
  let remaining = Math.max(Number(newTravelers) || 1, 1);
  if (same) {
    base.forEach((component) => {
      if (remaining <= 0) return;
      const take = Math.min(component.travelers, remaining);
      components.push({ ...component, travelers: take });
      remaining -= take;
    });
  }
  if (remaining > 0) components.push({ service: serviceRef.name, travelers: remaining, unit: serviceRef.price, pct: operatorContextPercentFor(context, serviceRef.name), origin: same ? "agregado" : "servicio nuevo" });
  const projected = components.reduce((sum, component) => sum + component.travelers * component.unit, 0);
  const generalDiscount = components.reduce((sum, component) => sum + Math.round((component.travelers * component.unit * component.pct) / 100), 0);
  const finalBase = projected - generalDiscount;
  const extra = Math.min(Math.max(Number(additionalPercent) || 0, 0), 100);
  const final = Math.round(finalBase * (1 - extra / 100));
  return { context, components, projected, discount: projected - final, finalBase, final, additionalPercent: extra };
}

function renderOperatorCommercialContextHtml(reservation) {
  const context = getOperatorCommercialContext(reservation);
  const today = getOperatorTodayDate();
  const sameService = (discount) => discount.serviceLabel === reservation.service || discount.service === reservation.service;
  const own = (context.discounts || []).filter(sameService);
  const keptIds = new Set((context.discounts || []).map((discount) => discount.id));
  const later = getOperatorLiveDiscounts().filter((discount) => !keptIds.has(discount.id) && sameService(discount));
  const expired = own.filter((discount) => discount.end && discount.end < today);
  const fixedAt = context.fixedAt ? formatOperatorTenantDateTime(context.fixedAt) : "la creación de la reserva";
  const list = (items) => items.length ? items.map((discount) => `${escapeHtml(discount.serviceLabel || discount.service)} ${discount.percentage} %${discount.end ? ` (hasta ${escapeHtml(discount.end)})` : ""}`).join("; ") : "ninguno";
  return `<p class="operator-eyebrow">Contexto comercial fijado</p><h2>Reglas de descuento de la creación</h2><div class="operator-detail-list mt-compact-list" data-commercial-context><div><span>Fijado el</span><strong>${escapeHtml(fixedAt)}${context.derived ? " (reconstruido del descuento registrado)" : ""}</strong></div><div><span>Descuento aplicado al servicio</span><strong>${escapeHtml(String(context.appliedPercentage || 0))} %</strong></div><div><span>Descuentos del contexto</span><strong>${list(own)}</strong></div><div><span>Creados después (no aplican)</span><strong>${list(later)}</strong></div><div><span>Vencidos desde la creación (se conservan)</span><strong>${list(expired)}</strong></div></div>`;
}

function renderOperatorComponentsHtml(components) {
  if (!components?.length) return "";
  const origin = { original: "Conserva tarifa y reglas originales", agregado: "Agregado: tarifa vigente hoy y descuentos del contexto original", "servicio nuevo": "Servicio nuevo: tarifa vigente hoy y descuentos del contexto original" };
  return `<div class="operator-table-wrap"><table class="operator-table mt-compact-table" data-quote-components><thead><tr><th>Componente</th><th>Viajeros</th><th>Tarifa unitaria</th><th>Descuento</th><th>Tratamiento</th></tr></thead><tbody>${components.map((component) => `<tr><td>${escapeHtml(component.service)}</td><td>${component.travelers}</td><td>${escapeHtml(formatCOP(component.unit))}</td><td>${escapeHtml(String(component.pct))} %</td><td>${escapeHtml(origin[component.origin] || component.origin)}</td></tr>`).join("")}</tbody></table></div>`;
}

// --- Saldo a favor desde administración --------------------------------------------------------
function normalizeOperatorCustomerName(name) {
  return String(name || "").trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

// Saldo por reserva de origen. El valor solicitado en devoluciones vigentes (no rechazadas) se
// aparta del disponible. No vence y no es transferible entre tenants (solo el tenant activo).
function getOperatorCreditOverview() {
  const ledger = readOperatorStorage(OPERATOR_CREDIT_LEDGER_KEY, {});
  const reservations = getUnifiedOperatorReservations();
  const requests = getOperatorRefundRequests().filter((request) => request.origin === "saldo-a-favor");
  const customers = {};
  Object.entries(ledger).forEach(([code, entries]) => {
    const own = entries.filter((entry) => !entry.tenantId || entry.tenantId === OPERATOR_CURRENT_TENANT_ID);
    if (!own.length) return;
    const record = reservations[code];
    const name = record?.customer || "Cliente sin identificar";
    const key = normalizeOperatorCustomerName(name);
    const customer = customers[key] || (customers[key] = { customer: name, key, sources: [], history: [], available: 0, requested: 0 });
    const live = requests.filter((request) => request.reservationCode === code && request.status !== "Rechazada");
    const requested = live.reduce((sum, request) => sum + Number(request.amountValue || 0), 0);
    const balance = own.reduce((sum, entry) => sum + Number(entry.amount || 0), 0);
    const available = Math.max(balance - requested, 0);
    customer.sources.push({ code, balance, requested, available });
    customer.available += available;
    customer.requested += requested;
    own.forEach((entry) => customer.history.push({ at: entry.at, type: Number(entry.amount) >= 0 ? "Origen" : "Aplicación", detail: entry.origin, code, amount: Number(entry.amount), actor: entry.actor }));
    requests.filter((request) => request.reservationCode === code).forEach((request) => customer.history.push({ at: request.requestedAtIso || (request.decisionDueAt ? new Date(new Date(request.decisionDueAt).getTime() - OPERATOR_REFUND_DECISION_MS).toISOString() : ""), type: "Devolución", detail: `Solicitud ${request.status}${request.autoDetermined ? " (autorizada automáticamente)" : ""}`, code, amount: -Number(request.amountValue || 0), actor: request.requestedBy }));
  });
  Object.values(customers).forEach((customer) => customer.history.sort((a, b) => String(b.at || "").localeCompare(String(a.at || ""))));
  return Object.values(customers).sort((a, b) => b.available - a.available);
}

function getOperatorCreditAvailableForCustomer(customerName) {
  const found = getOperatorCreditOverview().find((customer) => customer.key === normalizeOperatorCustomerName(customerName));
  return found || { customer: customerName, key: normalizeOperatorCustomerName(customerName), sources: [], history: [], available: 0 };
}

// Aplica el saldo a favor de un cliente al pago de una de sus reservas, como pago validado sin
// comprobante. Si es el primer pago, el cupo queda apartado en la misma operación (G10) y solo
// si hay capacidad. La aplican el cliente (self) o el Colaborador operativo / Administrador.
function applyOperatorCreditToExistingReservation(targetCode, amount, { self = false } = {}) {
  if (!self && isOperatorQueryOnlyRole()) return { ok: false, error: "Tu rol es de solo consulta: no puede aplicar saldo a favor." };
  const target = getUnifiedOperatorReservation(targetCode);
  if (!target) return { ok: false, error: "No se encontró la reserva." };
  if (["is-cancelled", "is-finalized", "is-execution"].includes(target.statusClass)) return { ok: false, error: `La reserva está ${target.status}: no admite pagos nuevos.` };
  const departure = getOperatorReservationDeparture(target);
  if (departure && (departure.status !== "Programada" || new Date(departure.startAt) <= getOperatorNow())) return { ok: false, error: "Desde la hora programada de inicio de la salida no se admiten pagos." };
  if (!(target.balanceValue > 0)) return { ok: false, error: "La reserva no tiene saldo pendiente." };
  const credit = getOperatorCreditAvailableForCustomer(target.customer);
  const wanted = Math.round(Number(amount) || 0);
  if (!(wanted > 0)) return { ok: false, error: "Indica un monto mayor a cero." };
  if (wanted > credit.available) return { ok: false, error: `El monto supera el saldo a favor disponible (${formatCOP(credit.available)}).` };
  if (wanted > target.balanceValue) return { ok: false, error: `El monto supera el saldo pendiente de la reserva (${formatCOP(target.balanceValue)}).` };
  const firstPayment = !operatorReservationHoldsSeat(target);
  if (firstPayment && departure) {
    const receive = canOperatorDepartureReceive(departure, Number(target.travelers), targetCode);
    if (!receive.ok) return { ok: false, error: `${receive.error} No se aplicó el saldo a favor.` };
  }
  const actor = self ? "Cliente" : getOperatorActorLabel();
  const at = getOperatorNow().toISOString();
  const ledger = readOperatorStorage(OPERATOR_CREDIT_LEDGER_KEY, {});
  let remaining = wanted;
  credit.sources.filter((source) => source.available > 0).forEach((source) => {
    if (remaining <= 0) return;
    const used = Math.min(source.available, remaining);
    ledger[source.code] = [...(ledger[source.code] || []), { amount: -used, origin: `Aplicado a la reserva ${targetCode}`, tenantId: OPERATOR_CURRENT_TENANT_ID, reservation: source.code, target: targetCode, actor, at }];
    remaining -= used;
  });
  writeOperatorStorage(OPERATOR_CREDIT_LEDGER_KEY, ledger);
  addOperatorPaymentMovement(targetCode, { kind: "credit", value: wanted, applied: wanted, surplus: 0, medium: "Saldo a favor", actor });
  const after = getUnifiedOperatorReservation(targetCode);
  if (after && after.status === "Confirmada") markOperatorReservationConfirmed(targetCode, "Saldo a favor aplicado");
  addOperatorFinanceAudit({
    action: "Saldo a favor aplicado al pago de una reserva",
    category: "Pagos y saldo a favor",
    detail: `${formatCOP(wanted)} aplicados como pago validado sin comprobante${self ? " por el cliente" : " por cuenta del cliente"}${firstPayment ? "; primer pago: cupo apartado en la misma operación" : ""}.`,
    reason: self ? "Aplicación solicitada por el cliente" : "Aplicación por cuenta del cliente",
    recordAffected: `Reserva ${targetCode}`,
    previousValue: `Saldo a favor disponible ${formatCOP(credit.available)}; valores validados ${target.paid}`,
    newValue: `Saldo a favor disponible ${formatCOP(credit.available - wanted)}; valores validados ${after.paid}`,
    actor,
  });
  return { ok: true, applied: wanted, firstPayment, record: after };
}

// Solicitud de devolución del saldo a favor registrada por un usuario interno (a pedido del
// cliente). Mismo circuito que la del cliente: 24 horas corridas para decidir, 5 días hábiles.
function registerOperatorCreditRefundRequest(sourceCode, amount, motive) {
  if (isOperatorQueryOnlyRole()) return { ok: false, error: "Tu rol es de solo consulta: no puede registrar solicitudes." };
  const source = getUnifiedOperatorReservation(sourceCode);
  if (!source) return { ok: false, error: "No se encontró la reserva de origen del saldo." };
  const available = getOperatorCreditAvailableForCustomer(source.customer).sources.find((item) => item.code === sourceCode)?.available || 0;
  const value = Math.round(Number(amount) || 0);
  if (!(value > 0)) return { ok: false, error: "Indica un monto mayor a cero." };
  if (value > available) return { ok: false, error: `El monto supera el saldo disponible de la reserva de origen (${formatCOP(available)}).` };
  if (!String(motive || "").trim()) return { ok: false, error: "Registra el motivo o la referencia de la solicitud del cliente." };
  const now = getOperatorNow();
  const list = getOperatorRefundRequests();
  const request = {
    id: `refund-${now.getTime()}-${list.length + 1}`,
    reservationCode: sourceCode,
    customer: source.customer,
    reason: "Solicitud de devolución del saldo a favor registrada por un usuario interno a pedido del cliente",
    administrativeNote: String(motive).trim(),
    amount: formatCOP(value),
    amountValue: value,
    origin: "saldo-a-favor",
    ruleLabel: "Devolución del saldo a favor (RN-RES-009): el Administrador del tenant autoriza o rechaza de forma justificada en 24 horas corridas; sin decisión se autoriza el monto disponible solicitado.",
    penalty: 0,
    pendingCalculation: false,
    status: "Pendiente de autorización",
    requestedAt: getOperatorTenantDateKey(now),
    requestedAtIso: now.toISOString(),
    requestedBy: getOperatorActorLabel(),
    decisionDueAt: new Date(now.getTime() + OPERATOR_REFUND_DECISION_MS).toISOString(),
  };
  list.push(request);
  saveOperatorRefundRequests(list);
  addOperatorFinanceAudit({
    action: "Solicitud de devolución de saldo a favor registrada",
    category: "Pagos y saldo a favor",
    detail: `${formatCOP(value)} del saldo de la reserva ${sourceCode}; decisión del Administrador del tenant hasta el ${formatOperatorTenantDateTime(request.decisionDueAt)}.`,
    reason: String(motive).trim(),
    recordAffected: `Cliente ${source.customer}`,
    previousValue: `Disponible ${formatCOP(available)}`,
    newValue: `Disponible ${formatCOP(available - value)}`,
  });
  return { ok: true, request };
}

function setupOperatorCreditScreen() {
  if (document.body.dataset.screen !== "operator-credit") return;
  const host = document.querySelector("[data-credit-customers]");
  const summary = document.querySelector("[data-credit-summary]");
  const requestsBody = document.querySelector("[data-credit-requests]");
  const feedback = document.querySelector("[data-credit-feedback]");
  if (!host) return;
  const canAct = !isOperatorQueryOnlyRole();
  const theme = getTheme();
  const blocked = (record) => ["is-cancelled", "is-finalized", "is-execution"].includes(record.statusClass);
  const render = () => {
    const overview = getOperatorCreditOverview();
    const requests = getOperatorRefundRequests().filter((request) => request.origin === "saldo-a-favor");
    const pending = requests.filter((request) => request.status === "Pendiente de autorización");
    if (summary) summary.innerHTML = [
      ["Saldo disponible del tenant", formatCOP(overview.reduce((sum, customer) => sum + customer.available, 0))],
      ["Clientes con saldo", String(overview.filter((customer) => customer.available > 0).length)],
      ["Devoluciones por decidir (24 h)", String(pending.length)],
    ].map(([label, value]) => `<div class="mt-summary-metric"><span class="mt-summary-metric-value">${escapeHtml(value)}</span><span class="mt-summary-metric-label mt-label">${escapeHtml(label)}</span></div>`).join("");
    const reservations = getUnifiedOperatorReservations();
    host.innerHTML = overview.length ? overview.map((customer) => {
      const targets = Object.values(reservations).filter((record) => normalizeOperatorCustomerName(record.customer) === customer.key && !blocked(record) && record.balanceValue > 0);
      const sources = customer.sources.map((source) => `<tr><td><a class="operator-reservation-link" href="${withTheme(`admin-detalle-reserva.html?reservation=${encodeURIComponent(source.code)}`, theme)}">#${escapeHtml(source.code)}</a></td><td>${escapeHtml(formatCOP(source.balance))}</td><td>${escapeHtml(formatCOP(source.requested))}</td><td><strong>${escapeHtml(formatCOP(source.available))}</strong></td><td>${canAct && source.available > 0 ? `<button type="button" class="operator-outline mt-btn-sm" data-credit-refund-open data-source="${escapeHtml(source.code)}" data-max="${source.available}">Solicitar devolución</button>` : ""}</td></tr>`).join("");
      const apply = canAct && customer.available > 0 && targets.length ? `<form class="mt-inline-form" data-credit-apply-form><label>Aplicar a la reserva<select data-credit-target>${targets.map((record) => `<option value="${escapeHtml(record.code)}">#${escapeHtml(record.code)} · saldo ${escapeHtml(formatCOP(record.balanceValue))}</option>`).join("")}</select></label><label>Monto<input type="number" min="1" inputmode="numeric" data-credit-amount value="${Math.min(customer.available, targets[0].balanceValue)}" /></label><button class="operator-primary mt-btn-sm" type="submit">Aplicar como pago validado</button></form>` : (customer.available > 0 ? '<p class="mt-muted">El cliente no tiene reservas con saldo pendiente donde aplicar.</p>' : "");
      const history = customer.history.map((entry) => `<tr><td>${escapeHtml(entry.at ? formatOperatorTenantDateTime(entry.at) : "—")}</td><td>${escapeHtml(entry.type)}</td><td>${escapeHtml(entry.detail || "")}</td><td>#${escapeHtml(entry.code)}</td><td>${escapeHtml(entry.amount >= 0 ? `+${formatCOP(entry.amount)}` : `-${formatCOP(Math.abs(entry.amount))}`)}</td><td>${escapeHtml(entry.actor || "")}</td></tr>`).join("");
      return `<article class="operator-panel mt-compact-panel" data-credit-customer="${escapeHtml(customer.key)}"><div class="operator-panel-head"><div><p class="operator-eyebrow">Cliente</p><h2>${escapeHtml(customer.customer)}</h2></div><span class="operator-status ${customer.available > 0 ? "is-confirmed" : "is-pending"}">Disponible ${escapeHtml(formatCOP(customer.available))}</span></div><div class="operator-table-wrap"><table class="operator-table mt-compact-table"><thead><tr><th>Reserva de origen</th><th>Saldo neto</th><th>En devolución</th><th>Disponible</th><th></th></tr></thead><tbody>${sources}</tbody></table></div>${apply}<div class="mt-inline-form" data-credit-refund-form hidden><label>Monto a devolver<input type="number" min="1" inputmode="numeric" data-credit-refund-amount /></label><label>Motivo o referencia del cliente<input type="text" data-credit-refund-motive placeholder="Ej.: solicitud del cliente por correo" /></label><button type="button" class="operator-primary mt-btn-sm" data-credit-refund-send>Registrar solicitud</button></div><details class="mt-details"><summary>Historial de aplicaciones y devoluciones (${customer.history.length})</summary><div class="operator-table-wrap"><table class="operator-table mt-compact-table"><thead><tr><th>Fecha</th><th>Movimiento</th><th>Detalle</th><th>Reserva</th><th>Valor</th><th>Responsable</th></tr></thead><tbody>${history}</tbody></table></div></details></article>`;
    }).join("") : '<p class="operator-copy">Ningún cliente del tenant tiene saldo a favor. Se genera por excedentes de pago, reducciones de valor o decisiones del Administrador sobre valores en tratamiento.</p>';
    if (requestsBody) requestsBody.innerHTML = requests.length ? requests.map((request) => `<tr><td>#${escapeHtml(request.reservationCode)}</td><td>${escapeHtml(request.customer)}</td><td>${escapeHtml(request.amount)}</td><td>${escapeHtml(request.status)}${request.autoDetermined ? " · autorizada automáticamente" : ""}</td><td>${escapeHtml(request.decisionDueAt ? formatOperatorTenantDateTime(request.decisionDueAt) : "—")}</td><td><a href="${withTheme(`admin-detalle-devolucion.html?id=${encodeURIComponent(request.id)}`, theme)}">${request.status === "Pendiente de autorización" && isOperatorAdmin() ? "Decidir" : "Ver"}</a></td></tr>`).join("") : '<tr><td colspan="6">Sin solicitudes de devolución de saldo a favor.</td></tr>';
  };
  render();
  host.addEventListener("submit", (event) => {
    const form = event.target.closest("[data-credit-apply-form]");
    if (!form) return;
    event.preventDefault();
    const target = form.querySelector("[data-credit-target]").value;
    const result = applyOperatorCreditToExistingReservation(target, form.querySelector("[data-credit-amount]").value);
    if (result.ok) render();
    operatorFeedback(feedback, result.ok ? `Saldo a favor aplicado: ${formatCOP(result.applied)} como pago validado de ${target}${result.firstPayment ? "; el cupo quedó apartado en la misma operación" : ""}. Queda en auditoría.` : result.error, result.ok);
  });
  host.addEventListener("click", (event) => {
    const open = event.target.closest("[data-credit-refund-open]");
    const send = event.target.closest("[data-credit-refund-send]");
    if (open) {
      const box = open.closest("[data-credit-customer]").querySelector("[data-credit-refund-form]");
      box.hidden = false;
      box.dataset.source = open.dataset.source;
      box.querySelector("[data-credit-refund-amount]").value = open.dataset.max;
      return;
    }
    if (send) {
      const box = send.closest("[data-credit-refund-form]");
      const result = registerOperatorCreditRefundRequest(box.dataset.source, box.querySelector("[data-credit-refund-amount]").value, box.querySelector("[data-credit-refund-motive]").value);
      if (result.ok) render();
      operatorFeedback(feedback, result.ok ? `Solicitud registrada por ${result.request.amount}. El Administrador del tenant decide hasta el ${formatOperatorTenantDateTime(result.request.decisionDueAt)}; sin decisión se autoriza automáticamente el monto y se notifica a todos los Administradores. Ejecución en máximo 5 días hábiles.` : result.error, result.ok);
    }
  });
}

// --- Retención de datos sensibles (sección 17, C4, E8, G11, L3, Q1, CA-021) ---------------------
const OPERATOR_SENSITIVE_DATA_TYPES = [
  "Documentos de identidad del titular y los acompañantes",
  "Fechas de nacimiento del titular y los acompañantes",
  "Contactos de emergencia",
  "Datos de salud y consentimientos de actividad de riesgo (tipo de sangre, restricciones físicas)",
];

function addOperatorYears(date, years) {
  const result = new Date(date);
  result.setFullYear(result.getFullYear() + years);
  return result;
}

// Fecha de retención: un año desde la finalización del servicio o el cierre definitivo; si la
// salida lleva más de 7 días sin regularizar, desde su hora de fin estimada; si la inactivación
// del tenant bloquea el cierre, desde la cancelación. Sin cierre aún no hay fecha.
function getOperatorRetentionInfo(record) {
  const deleted = readOperatorStorage(OPERATOR_SENSITIVE_RETENTION_KEY, {})[record.code] || null;
  const departure = getOperatorReservationDeparture(record);
  const now = getOperatorNow();
  const tenant = getPlatformTenants().find((item) => item.id === OPERATOR_CURRENT_TENANT_ID);
  const inactive = Boolean(tenant && tenant.status === "Inactivo");
  let base = null;
  let basis = "";
  let pending = "El plazo de un año empieza al finalizar el servicio o al cierre definitivo de la reserva.";
  if (record.status === "Finalizada") {
    const execution = getOperatorReservationExecution(record.code);
    base = execution?.finalizedAt || departure?.realEndAt || departure?.endAt || null;
    basis = "finalización del servicio";
  } else if (record.status === "Cancelada") {
    const cancellation = getOperatorReservationCancellation(record.code);
    const openRefund = getOperatorRefundRequests().some((request) => request.reservationCode === record.code && ["Pendiente de autorización", "Autorizada"].includes(request.status));
    if (openRefund && !inactive) pending = "La reserva está cancelada, pero la devolución sigue en curso: el plazo empieza con el cierre definitivo.";
    else {
      base = cancellation?.registeredAt || null;
      basis = openRefund && inactive ? "cancelación (la inactivación del tenant bloquea el cierre)" : "cierre definitivo de la reserva cancelada";
    }
  } else if (departure && ["Programada", "En ejecución"].includes(departure.status) && new Date(departure.endAt).getTime() + 7 * 24 * 3600 * 1000 < now.getTime()) {
    base = departure.endAt;
    basis = "hora de fin estimada (salida con más de 7 días sin regularizar)";
  }
  const dueAt = base ? addOperatorYears(base, 1) : null;
  return { code: record.code, base: base ? new Date(base).toISOString() : null, basis, dueAt: dueAt ? dueAt.toISOString() : null, pending, deleted, due: Boolean(dueAt && now >= dueAt) };
}

function scrubOperatorSensitiveData(code) {
  try {
    const history = JSON.parse(localStorage.getItem(CLIENT_RESERVATIONS_HISTORY_KEY) || "[]");
    const next = history.map((item) => item.code === code ? { ...item, holderDocument: "", holderBirthDate: "", companions: [], sensitiveDeleted: true } : item);
    localStorage.setItem(CLIENT_RESERVATIONS_HISTORY_KEY, JSON.stringify(next));
  } catch { /* sin historial del cliente */ }
}

// Al cumplirse el año marca los datos sensibles como eliminados; el histórico comercial (valores,
// pagos, estados, devoluciones) se conserva. Idempotente.
function applyOperatorRetention() {
  const store = readOperatorStorage(OPERATOR_SENSITIVE_RETENTION_KEY, {});
  let changed = false;
  Object.values(getUnifiedOperatorReservations()).forEach((record) => {
    if (store[record.code]) return;
    const info = getOperatorRetentionInfo(record);
    if (!info.due) return;
    store[record.code] = { deletedAt: info.dueAt, markedAt: getOperatorNow().toISOString(), basis: info.basis, types: OPERATOR_SENSITIVE_DATA_TYPES };
    changed = true;
    scrubOperatorSensitiveData(record.code);
    logOperatorTimeEvent(`retention:${record.code}`, {
      at: info.dueAt,
      rule: "Sección 17 / C4 / G11",
      action: "Datos sensibles eliminados por vencimiento de la retención",
      detail: `Reserva ${record.code}: se cumplió un año desde la ${info.basis}. Los datos sensibles quedaron eliminados; se conserva el histórico comercial (valores, pagos, estados y devoluciones).`,
      recordAffected: `Reserva ${record.code}`,
      audience: "admin",
    });
  });
  if (changed) writeOperatorStorage(OPERATOR_SENSITIVE_RETENTION_KEY, store);
}

function setupOperatorRetentionBlock() {
  if (document.body.dataset.screen !== "operator-reservation-detail") return;
  const code = new URLSearchParams(window.location.search).get("reservation") || "RES-1842";
  const record = getUnifiedOperatorReservation(code) || getUnifiedOperatorReservation("RES-1842");
  if (!record || document.querySelector("[data-retention-panel]")) return;
  const info = getOperatorRetentionInfo(record);
  const hasRisk = Boolean(OPERATOR_KNOWN_TOUR_DETAILS[record.service]?.risk || /rafting/i.test(record.service || ""));
  const panel = document.createElement("section");
  panel.className = "operator-panel mt-compact-panel";
  panel.dataset.retentionPanel = "";
  let body;
  if (!operatorHasPermission(OPERATOR_PERMISSION_VIEW_SENSITIVE)) {
    body = '<p class="operator-copy" data-retention-restricted>Datos sensibles: acceso restringido</p><p class="mt-muted">Se requiere el permiso Consultar datos sensibles.</p>';
  } else {
    const when = info.deleted ? formatOperatorTenantDateTime(info.deleted.deletedAt) : info.dueAt ? formatOperatorTenantDateTime(info.dueAt) : "";
    const deletion = info.deleted ? `Eliminados el ${when}` : info.dueAt ? `Se eliminarán el ${when}` : `Sin fecha aún: ${info.pending}`;
    body = `<div class="operator-detail-list mt-compact-list"><div><span>Retención</span><strong data-retention-status>${escapeHtml(info.deleted ? "Datos sensibles eliminados" : info.dueAt ? "Vigente" : "Aún sin fecha")}</strong></div><div><span>Fecha de eliminación</span><strong data-retention-date>${escapeHtml(deletion)}</strong></div>${info.basis ? `<div><span>Base del cálculo</span><strong>${escapeHtml(info.basis)}</strong></div>` : ""}</div><div class="operator-table-wrap"><table class="operator-table mt-compact-table"><thead><tr><th>Tipo de dato</th><th>Fecha de eliminación</th><th>Estado</th></tr></thead><tbody>${OPERATOR_SENSITIVE_DATA_TYPES.filter((type) => hasRisk || !/actividad de riesgo/.test(type)).map((type) => `<tr><td>${escapeHtml(type)}</td><td>${escapeHtml(when || "Por definir")}</td><td>${info.deleted ? "Eliminado" : "Conservado"}</td></tr>`).join("")}</tbody></table></div><p class="mt-muted">El histórico comercial (valores, pagos, estados y devoluciones) se conserva tras la eliminación.</p>`;
  }
  panel.innerHTML = `<p class="operator-eyebrow">Retención</p><h2>Datos sensibles</h2>${body}`;
  const anchor = document.querySelector("[data-sensitive-note]");
  if (anchor) anchor.insertAdjacentElement("afterend", panel);
  else document.querySelector(".operator-content")?.append(panel);
}

// Accesos a Saldo a favor y Parámetros de pago desde Pagos, Catálogos y el detalle de la reserva.
function setupOperatorFinanceLinks() {
  const screen = document.body.dataset.screen;
  const theme = getTheme();
  const link = (href, label) => `<a class="operator-outline mt-btn-sm" href="${withTheme(href, theme)}">${label}</a>`;
  const header = document.querySelector(".mt-page-header");
  const addLinks = (html) => {
    if (!header || header.querySelector("[data-finance-links]") || !html) return;
    const box = document.createElement("div");
    box.dataset.financeLinks = "";
    box.className = "mt-inline-links";
    box.innerHTML = html;
    header.append(box);
  };
  if (screen === "operator-payments") addLinks(link("admin-saldo-favor.html", "Saldo a favor") + (isOperatorAdmin() ? link("admin-parametros-pago.html", "Parámetros de pago") : ""));
  if (screen === "operator-catalogs" && isOperatorAdmin()) addLinks(link("admin-parametros-pago.html", "Parámetros de pago"));
  if (screen === "operator-reservation-detail") {
    const panel = document.querySelector("[data-reservation-credit]")?.closest(".operator-panel");
    if (panel && !panel.querySelector("[data-credit-link]")) panel.insertAdjacentHTML("beforeend", `<p class="mt-muted" data-credit-link><a href="${withTheme("admin-saldo-favor.html", theme)}">Ver saldo a favor del cliente</a></p>`);
  }
}

// --- Control discreto del reloj de demostración ---------------------------------------------
// Avanza el desfase del reloj único (+1 h, +24 h, +72 h) o lo restablece, y recarga la pantalla.
function setupDemoClockControl() {
  const screen = document.body.dataset.screen || "";
  const sidebar = document.querySelector(".operator-sidebar") || document.querySelector(".platform-sidebar");
  const clientScreens = ["client-dashboard", "client-reservations", "client-payments", "client-reprogramming-proposal", "profile"];
  let host = sidebar;
  if (!host && clientScreens.includes(screen)) host = document.querySelector("main") || document.body;
  if (!host || host.querySelector("[data-demo-clock]")) return;
  const box = document.createElement("div");
  box.className = `demo-clock${sidebar ? " demo-clock-sidebar" : " demo-clock-footer"}`;
  box.dataset.demoClock = "";
  const stamp = formatClientDateTime(getOperatorNow());
  box.innerHTML = `<span class="demo-clock-label">Reloj de demostración: <time data-demo-clock-time>${escapeHtml(stamp)}</time></span><span class="demo-clock-actions"><button type="button" data-demo-clock-step="1">+1 h</button><button type="button" data-demo-clock-step="24">+24 h</button><button type="button" data-demo-clock-step="72">+72 h</button><button type="button" data-demo-clock-reset>Restablecer</button></span>`;
  // En el menú lateral va justo debajo de la navegación (el pie de la página puede quedar lejos).
  const signout = sidebar ? sidebar.querySelector(".operator-signout, .platform-signout") : null;
  if (signout) sidebar.insertBefore(box, signout); else host.append(box);
  box.addEventListener("click", (event) => {
    const step = event.target.closest("[data-demo-clock-step]");
    const reset = event.target.closest("[data-demo-clock-reset]");
    if (!step && !reset) return;
    setOperatorDemoClockOffset(reset ? 0 : getOperatorDemoClockOffset() + Number(step.dataset.demoClockStep) * 60 * 60 * 1000);
    window.location.reload();
  });
}

// Fecha del encabezado del resumen del operador y mes del encabezado de Reportes, leídos del reloj.
function setupOperatorClockDates() {
  const todayNode = document.querySelector("[data-operator-today]");
  if (todayNode) {
    const parts = new Intl.DateTimeFormat("es-CO", { timeZone: getOperatorTenantTimezone(), weekday: "long", day: "numeric", month: "numeric", year: "numeric" }).formatToParts(getOperatorNow()).reduce((acc, part) => { acc[part.type] = part.value; return acc; }, {});
    todayNode.textContent = `${parts.weekday.charAt(0).toUpperCase()}${parts.weekday.slice(1)}, ${parts.day} ${OPERATOR_MONTH_ABBR[Number(parts.month) - 1]} ${parts.year}`;
  }
  const monthNode = document.querySelector("[data-reports-month]");
  if (monthNode) {
    const [year, month] = getOperatorTodayDate().split("-");
    const names = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    monthNode.textContent = `${names[Number(month) - 1]} ${year}`;
  }
}

// ---------------------------------------------------------------------------
// Fase B - Operador (tenant) inactivo, primer acceso, roles opcionales y menú por rol.
// PDR v1.9 sección 9 ("Regla operativa mínima de tenant", RF-016, CA-017, GAP-06, A6, E6, E26,
// G4, I1, L5, GAP-001/005/006/007, FINAL-001/002/010/011, AC-01), sección 15 y 24.1.
//
// Modelo: la inactivación y la reactivación quedan en un libro de suspensiones por tenant
// ({ from, to }). Un plazo "suspendido" se calcula como su fecha de vencimiento más el tiempo del
// periodo de suspensión que cae entre su inicio y su vencimiento, de modo que al reactivar el plazo
// continúa con el tiempo restante (AC-01). Sin suspensiones el resultado es el mismo plazo.
// ---------------------------------------------------------------------------
const OPERATOR_TENANT_SUSPENSIONS_KEY = "multitour-tenant-suspensions";
const OPERATOR_OPTIONAL_ROLES_KEY = "multitour-operator-optional-roles";
const OPERATOR_OPTIONAL_ROLES_AUDIT_KEY = "multitour-operator-optional-roles-audit";
const OPTIONAL_OPERATOR_ROLE_IDS = ["gerente", "contador", "analista"];
const OPERATOR_INACTIVE_NOTICE = "Operador inactivo: acceso restringido";

function getOperatorCurrentTenantRecord() {
  try { return getPlatformTenants().find((item) => item.id === OPERATOR_CURRENT_TENANT_ID) || null; } catch { return null; }
}

function isOperatorTenantInactive() {
  const tenant = getOperatorCurrentTenantRecord();
  return Boolean(tenant && tenant.status === "Inactivo");
}

function getOperatorTenantSuspensions() {
  const list = readOperatorStorage(OPERATOR_TENANT_SUSPENSIONS_KEY, []);
  return (Array.isArray(list) ? list : []).filter((item) => item && item.tenantId === OPERATOR_CURRENT_TENANT_ID);
}

// Abre o cierra el periodo de suspensión del tenant al cambiar su estado.
function recordOperatorTenantSuspensionChange(tenantId, nextStatus) {
  const all = readOperatorStorage(OPERATOR_TENANT_SUSPENSIONS_KEY, []);
  const list = Array.isArray(all) ? all : [];
  const now = getOperatorNow().toISOString();
  if (nextStatus === "Inactivo") {
    if (!list.some((item) => item.tenantId === tenantId && !item.to)) list.push({ tenantId, from: now, to: null });
  } else {
    list.forEach((item) => { if (item.tenantId === tenantId && !item.to) item.to = now; });
  }
  writeOperatorStorage(OPERATOR_TENANT_SUSPENSIONS_KEY, list);
}

// Si el estado se alteró sin pasar por la plataforma (datos de demostración), mantiene el libro coherente.
function ensureOperatorTenantSuspensionLedger() {
  const inactive = isOperatorTenantInactive();
  const open = getOperatorTenantSuspensions().some((item) => !item.to);
  if (inactive && !open) recordOperatorTenantSuspensionChange(OPERATOR_CURRENT_TENANT_ID, "Inactivo");
  if (!inactive && open) recordOperatorTenantSuspensionChange(OPERATOR_CURRENT_TENANT_ID, "Activo");
}

// Vencimiento efectivo de un plazo que empezó en startIso: el tiempo en que el tenant estuvo suspendido
// no cuenta, de modo que al reactivarse el plazo continúa con el tiempo restante (AC-01).
function shiftOperatorDeadlineForSuspension(startIso, due) {
  const base = due instanceof Date ? due : new Date(due);
  const start = new Date(startIso).getTime();
  if (!Number.isFinite(start) || !Number.isFinite(base.getTime())) return base;
  let remaining = base.getTime() - start;
  if (remaining <= 0) return base;
  const nowMs = getOperatorNow().getTime();
  const intervals = getOperatorTenantSuspensions()
    .map((item) => [new Date(item.from).getTime(), item.to ? new Date(item.to).getTime() : nowMs])
    .sort((a, b) => a[0] - b[0]);
  let cursor = start;
  for (const [from, to] of intervals) {
    if (to <= cursor) continue;
    if (from > cursor) {
      const gap = from - cursor;
      if (remaining <= gap) break;
      remaining -= gap;
      cursor = from;
    }
    cursor = to;
  }
  return new Date(cursor + remaining);
}

function getOperatorRefundDecisionDueAt(request) {
  const due = new Date(request.decisionDueAt);
  return shiftOperatorDeadlineForSuspension(due.getTime() - OPERATOR_REFUND_DECISION_MS, due);
}

// I1: salidas cuya hora programada se alcanzó con el tenant inactivo.
function applyOperatorTenantInactiveDepartureCancellations() {
  const suspensions = getOperatorTenantSuspensions();
  if (!suspensions.length) return;
  const now = getOperatorNow();
  getOperatorDeparturesRaw().forEach((departure) => {
    if (departure.status !== "Programada") return;
    const start = new Date(departure.startAt);
    if (start > now) return;
    if (!suspensions.some((item) => start >= new Date(item.from) && (!item.to || start < new Date(item.to)))) return;
    const causal = "Se alcanzó la hora programada de la salida con el operador inactivo (causa no atribuible al cliente)";
    // FINAL-010: si era la salida propuesta de una reprogramación pendiente, la propuesta queda sin efecto,
    // se liberan sus cupos y la reserva se cancela con devolución del 100 %, sin nuevo plazo L1.
    Object.values(getOperatorReprogramEpisodes()).forEach((episode) => {
      if (episode.status !== "Propuesta enviada" || episode.proposedDepartureId !== departure.id) return;
      saveOperatorReprogramEpisode(appendOperatorEpisodeHistory({ ...episode, status: "Sin efecto (operador inactivo)" }, "Propuesta sin efecto", `La salida propuesta ${departure.id} alcanzó su hora con el operador inactivo: se liberan los cupos y la reserva se cancela con devolución del 100 %, sin nuevo plazo para proponer.`, { at: departure.startAt, actor: "Multitour (regla automática)" }));
      cancelOperatorReservationByCause(episode.code, { causal: "La salida propuesta alcanzó su hora con el operador inactivo (causa no atribuible al cliente): devolución del 100 %", origin: "no-atribuible", automatic: true, at: departure.startAt });
    });
    patchOperatorDeparture(departure.id, {
      status: "Cancelada",
      cancellation: { causal, origin: "no-atribuible", at: departure.startAt, recordedAt: now.toISOString(), by: "Multitour (regla automática)", regularization: false, tenantInactive: true },
    }, { at: departure.startAt, actor: "Multitour (regla automática)", action: "Salida cancelada automáticamente (operador inactivo)", detail: `${causal}. No se reactiva al reactivar el operador.` });
    ensureOperatorReprogramEpisodes();
    logOperatorTimeEvent(`departure-inactive:${departure.id}`, {
      at: departure.startAt,
      rule: "I1 / G4",
      action: "Salida cancelada automáticamente: hora alcanzada con el operador inactivo",
      detail: `La salida ${departure.id} (${departure.label}) alcanzó su hora programada con el operador inactivo y se canceló por una causa no atribuible al cliente. Sus reservas siguen RN-EJE-002 (reprogramación o devolución del 100 %), sin cancelaciones por incumplimiento de pago. La reactivación no la reactiva.`,
      recordAffected: `Salida ${departure.id}`,
      audience: "execution",
      alert: { code: "SI", title: `Salida ${departure.id} cancelada: operador inactivo`, body: "Alcanzó su hora programada con el operador inactivo; sus reservas pasan a reprogramación o devolución del 100 %." },
      href: "admin-salidas.html",
    });
  });
}

// Obligaciones pendientes del tenant inactivo (solo conteos; sin datos personales).
function getOperatorTenantObligations() {
  const reservations = Object.values(getUnifiedOperatorReservations());
  const affected = reservations.filter((record) => !["Cancelada", "Finalizada"].includes(record.status) && (record.status === "Confirmada" || Number(record.paidValue || 0) > 0));
  const episodes = Object.values(getOperatorReprogramEpisodes()).filter((episode) => ["Pendiente de propuesta", "Propuesta enviada"].includes(episode.status));
  const refunds = getOperatorRefundRequests().filter((request) => request.status === "Pendiente de autorización" || request.status === "Autorizada");
  const access = getPlatformAccessRequests(OPERATOR_CURRENT_TENANT_ID).filter((request) => request.status === "Pendiente");
  const running = getOperatorDepartures().filter((departure) => departure.status === "En ejecución");
  const receipts = getOperatorPendingReceipts();
  const link = (file) => withTheme(file, getTheme());
  return [
    { key: "reservas", label: "Reservas afectadas", count: affected.length, href: link("admin-reservas.html") },
    { key: "reprogramaciones", label: "Reprogramaciones abiertas", count: episodes.length, href: link("admin-salidas.html") },
    { key: "devoluciones", label: "Devoluciones por decidir o ejecutar", count: refunds.length, href: link("admin-solicitudes-devolucion.html") },
    { key: "comprobantes", label: "Comprobantes anteriores por validar", count: receipts.length, href: link("admin-pagos.html") },
    { key: "acceso", label: "Autorizaciones de soporte pendientes", count: access.length, href: link("admin-notificaciones.html") },
    { key: "salidas", label: "Salidas en curso por cerrar o interrumpir", count: running.length, href: link("admin-salidas.html") },
  ];
}

// --- Acceso: login, sesiones guardadas y modo restringido -------------------------------------------
function getOperatorLoginInactiveTenantError(kind, role = "") {
  const tenant = resolveClientLoginTenant();
  if (!tenant || tenant.status !== "Inactivo") return "";
  if (kind === "staff" && tenant.id === OPERATOR_CURRENT_TENANT_ID && role === "admin") return "";
  return kind === "client"
    ? `${tenant.name} está inactivo: no puedes iniciar sesión, reservar ni pagar por ahora. Tus reservas se gestionan con el operador.`
    : `${tenant.name} está inactivo: tus accesos se cerraron. Solo el Administrador del tenant conserva un acceso restringido para gestionar obligaciones pendientes.`;
}

function getClientInactiveTenantMessage() {
  const tenant = resolveClientLoginTenant();
  return tenant && tenant.status === "Inactivo" ? `${tenant.name} está inactivo: no se crean reservas, ni se suben comprobantes o pagos.` : "";
}

const OPERATOR_RESTRICTED_ALLOWED_SCREENS = [
  "operator-admin", "operator-reservations", "operator-reservation-detail", "operator-cancel-modify-reservation",
  "operator-refund-requests", "operator-refund-detail", "operator-manage-refund", "operator-pending-treatment",
  "operator-reprogram-reservation", "operator-departures", "operator-execution", "operator-payments",
  "operator-validate-support", "operator-cash", "operator-cash-history", "operator-notifications",
];
const OPERATOR_RESTRICTED_ALLOWED_FILES = [
  "admin-operador", "admin-reservas", "admin-detalle-reserva", "admin-cancelar-modificar-reserva", "admin-solicitudes-devolucion",
  "admin-detalle-devolucion", "admin-gestionar-devolucion", "admin-tratamiento-pendiente-devolucion", "admin-reprogramar-reserva",
  "admin-salidas", "admin-registrar-ejecucion", "admin-pagos", "admin-validar-soporte", "admin-caja", "admin-historial-caja",
  "admin-notificaciones", "login", "index",
];

function operatorHrefFile(href) {
  return String(href || "").split("#")[0].split("?")[0].replace(/\.html$/, "").split("/").pop();
}

// "login" (sesión cerrada), "dashboard" (pantalla fuera del acceso restringido) o "" (permitido).
function getOperatorInactiveAccessRedirect(screen) {
  if (!String(screen).startsWith("operator-") || !isOperatorTenantInactive()) return "";
  if (!isOperatorAdmin()) return "login";
  return OPERATOR_RESTRICTED_ALLOWED_SCREENS.includes(screen) ? "" : "dashboard";
}

// Pantallas del operador con el tenant inactivo: sesiones de roles distintos del Administrador del tenant
// se cierran; el Administrador conserva únicamente el acceso restringido.
function setupOperatorTenantInactiveMode() {
  const screen = document.body.dataset.screen || "";
  const redirect = getOperatorInactiveAccessRedirect(screen);
  if (redirect) {
    if (redirect === "login") {
      try { localStorage.removeItem(OPERATOR_ROLE_KEY); localStorage.removeItem(OPERATOR_CURRENT_USER_KEY); } catch { /* sin almacenamiento */ }
      window.location.href = `${withTheme("login.html", getTheme())}&inactivo=1`;
    } else window.location.href = `${withTheme("admin-operador.html", getTheme())}&restringido=1`;
    return;
  }
  if (!screen.startsWith("operator-") || !isOperatorTenantInactive()) return;
  const content = document.querySelector(".operator-content");
  const roleLabel = document.querySelector(".operator-sidebar .operator-role");
  if (roleLabel) roleLabel.textContent = `${getOperatorRoleLabel()} (acceso restringido)`;
  document.querySelectorAll(".operator-nav a").forEach((anchor) => {
    if (OPERATOR_RESTRICTED_ALLOWED_FILES.includes(operatorHrefFile(anchor.getAttribute("href")))) return;
    const locked = document.createElement("span");
    locked.className = "operator-nav-locked";
    locked.setAttribute("aria-disabled", "true");
    locked.title = OPERATOR_INACTIVE_NOTICE;
    locked.textContent = anchor.textContent;
    anchor.replaceWith(locked);
  });
  // Los enlaces del contenido hacia pantallas fuera del acceso restringido quedan bloqueados.
  content?.querySelectorAll("a[href]").forEach((anchor) => {
    const file = operatorHrefFile(anchor.getAttribute("href"));
    if (!file.startsWith("admin-") || OPERATOR_RESTRICTED_ALLOWED_FILES.includes(file)) return;
    anchor.removeAttribute("href");
    anchor.classList.add("is-locked");
    anchor.setAttribute("aria-disabled", "true");
    anchor.title = OPERATOR_INACTIVE_NOTICE;
  });
  const params = new URLSearchParams(window.location.search);
  const obligations = getOperatorTenantObligations();
  const banner = document.createElement("section");
  banner.className = "operator-inactive-banner";
  banner.dataset.tenantInactiveBanner = "";
  banner.dataset.tenantInactiveNote = "";
  banner.setAttribute("role", "status");
  const tenant = getOperatorCurrentTenantRecord();
  banner.innerHTML = `<strong>${OPERATOR_INACTIVE_NOTICE}</strong><p>${escapeHtml(tenant?.name || OPERATOR_CURRENT_TENANT_NAME)} está inactivo${tenant?.statusReason ? ` (${escapeHtml(tenant.statusReason)})` : ""}. Solo gestionas obligaciones pendientes: reservas afectadas, reprogramaciones, devoluciones, autorizaciones de soporte, comprobantes presentados antes de la inactivación y salidas en curso. No hay ventas, reservas ni pagos nuevos, y los plazos operativos están suspendidos.${params.get("restringido") ? " Esa sección no está disponible mientras el operador esté inactivo." : ""}</p>`;
  const header = content?.querySelector(".mt-page-header");
  if (header) header.after(banner); else content?.prepend(banner);
  if (screen === "operator-admin") {
    content.querySelectorAll(".operator-dashboard-section, [data-dashboard-flujos-principales]").forEach((node) => node.remove());
    const hero = content.querySelector(".operator-hero");
    const panel = document.createElement("section");
    panel.className = "operator-panel";
    panel.dataset.tenantObligations = "";
    panel.innerHTML = `<div class="operator-panel-head"><div><p class="operator-eyebrow">Acceso restringido</p><h2>Obligaciones pendientes</h2></div><span class="operator-status is-cancelled">Operador inactivo</span></div><p class="operator-copy">Atiende estas obligaciones derivadas de la inactivación. Los plazos de pago, comprobantes, saldo y decisiones financieras de 24 h están suspendidos y continúan con su tiempo restante al reactivar el operador; los de contingencia (24 h para proponer una reprogramación y 5 días hábiles para ejecutar devoluciones) siguen corriendo.</p><ul class="operator-obligations">${obligations.map((item) => `<li><a href="${escapeHtml(item.href)}"><strong>${item.count}</strong><span>${escapeHtml(item.label)}</span></a></li>`).join("")}</ul>`;
    if (hero) {
      hero.querySelector("[data-dashboard-hero-title]")?.replaceChildren("Operador inactivo: gestiona tus obligaciones pendientes.");
      hero.querySelector("[data-dashboard-hero-body]")?.replaceChildren("Tu acceso se limita a regularizar lo que la inactivación dejó pendiente.");
      hero.after(panel);
    } else content.append(panel);
  }
}

// Avisos del canal cliente y de las pantallas de acceso con el operador inactivo.
const CLIENT_INACTIVE_NOTICE_SCREENS = [
  "client-dashboard", "client-reservations", "client-payments", "tours", "tour-detail", "tour-booking", "tour-checkout",
  "tour-payment-success", "tour-payment-failed", "tour-payment-transfer", "lodging", "gastronomy", "restaurants",
  "gastronomy-detail", "companions", "profile", "client-reprogramming-proposal", "signup", "recover", "reset", "login",
];

function setupClientTenantInactiveNotice() {
  const screen = document.body.dataset.screen || "";
  const params = new URLSearchParams(window.location.search);
  if (screen === "login" && params.get("inactivo")) {
    setFeedback("login", "Tu sesión se cerró: el operador está inactivo y solo el Administrador del tenant conserva un acceso restringido.", "is-error");
  }
  if (!CLIENT_INACTIVE_NOTICE_SCREENS.includes(screen)) return;
  const message = getClientInactiveTenantMessage();
  if (!message) return;
  const banner = document.createElement("p");
  banner.className = "client-inactive-banner";
  banner.dataset.clientInactiveBanner = "";
  banner.setAttribute("role", "status");
  banner.innerHTML = `<strong>Operador inactivo.</strong> ${escapeHtml(message)} Puedes consultar el catálogo y tus reservas en modo de solo lectura; los plazos de pago, comprobante y saldo quedan suspendidos y continúan al reactivarse.`;
  const box = document.querySelector("[data-client-tenant-box]");
  const host = document.querySelector("main") || document.body;
  if (box) box.after(banner); else host.prepend(banner);
  const authScreens = ["signup", "recover", "reset", "login"];
  if (authScreens.includes(screen)) {
    document.querySelectorAll("form[data-form] button[type=\"submit\"]").forEach((button) => { if (screen !== "login") button.disabled = true; });
    return;
  }
  document.querySelectorAll("main form button[type=\"submit\"], main [data-booking-continue], main [data-checkout-submit]").forEach((button) => { button.disabled = true; button.title = "Operador inactivo"; });
  document.querySelectorAll("a[href]").forEach((anchor) => {
    const file = operatorHrefFile(anchor.getAttribute("href"));
    if (!["reservar-tour", "finalizar-reserva", "pago-transferencia"].includes(file)) return;
    anchor.classList.add("is-locked");
    anchor.setAttribute("aria-disabled", "true");
    anchor.title = "Operador inactivo";
    anchor.addEventListener("click", (event) => { event.preventDefault(); event.stopImmediatePropagation(); }, true);
  });
  // La respuesta del cliente a una propuesta de reprogramación queda congelada (FINAL-002).
  ["[data-proposal-accept]", "[data-proposal-reject]"].forEach((selector) => {
    const button = document.querySelector(selector);
    if (!button) return;
    const clone = button.cloneNode(true);
    clone.disabled = true;
    clone.title = "Respuesta congelada: operador inactivo";
    button.replaceWith(clone);
  });
}

// Panel de plataforma: indicador de estado y obligaciones pendientes del operador (solo conteos).
function renderPlatformTenantObligations(tenant) {
  const copy = document.querySelector("[data-tenant-state-copy]");
  if (!copy) return;
  let node = document.querySelector("[data-tenant-obligations]");
  if (!node) {
    node = document.createElement("div");
    node.dataset.tenantObligations = "";
    copy.after(node);
  }
  if (tenant.status !== "Inactivo") { node.hidden = true; node.innerHTML = ""; return; }
  node.hidden = false;
  let items = [];
  if (tenant.id === OPERATOR_CURRENT_TENANT_ID) items = getOperatorTenantObligations();
  node.className = "platform-obligations";
  node.innerHTML = `<p class="platform-eyebrow">Obligaciones pendientes del operador</p>${items.length
    ? `<ul>${items.map((item) => `<li><strong>${item.count}</strong> ${escapeHtml(item.label)}</li>`).join("")}</ul>`
    : "<p class=\"platform-section-copy\">Sin datos de obligaciones para este operador en la demostración.</p>"}<p class="platform-section-copy">Solo conteos: la inactivación no da acceso a los datos internos del tenant (E26).</p>`;
}

// --- Primer acceso: cambio de la contraseña temporal (A4, D2, D3, E20, G15) ---------------------------
function operatorTempCredentialPending(user) {
  const credential = user?.tempCredential;
  return Boolean(credential && !credential.activated && !operatorTempCredentialExpired(user));
}

function activateOperatorTempCredential(user) {
  const at = getOperatorNow().toISOString();
  if (user.primary || user.id === OPERATOR_PRIMARY_ADMIN_ID) {
    savePlatformTenants(getPlatformTenants().map((tenant) => (tenant.id === OPERATOR_CURRENT_TENANT_ID ? { ...tenant, tempCredential: { ...(tenant.tempCredential || {}), activated: true, activatedAt: at } } : tenant)));
    recordPlatformAuditEvent({ action: "Contraseña propia establecida en el primer acceso", tenant: OPERATOR_CURRENT_TENANT_NAME, tenantId: OPERATOR_CURRENT_TENANT_ID, detail: "Primer Administrador del tenant · cambio obligatorio de la credencial temporal", actorName: user.name, actorRole: OPERATOR_ADMIN_ROLE_LABEL, recordAffected: "Primer Administrador del tenant", newValue: "Contraseña propia", functionalReference: "Credencial temporal (sección 9, G15)" });
  } else {
    upsertOperatorCollaborator({ ...user, tempCredential: { ...user.tempCredential, activated: true, activatedAt: at } });
  }
  addOperatorUserAudit(user, "Primer acceso: contraseña propia establecida", "Cambio obligatorio de la credencial temporal.");
}

function showOperatorFirstAccessStep(form, user, onDone) {
  form.hidden = true;
  document.querySelectorAll(".mth-login-roles, [data-staff-role-switch]").forEach((node) => { node.hidden = true; });
  const host = form.parentElement;
  host.querySelector("[data-first-access]")?.remove();
  const panel = document.createElement("section");
  panel.className = "mth-login-first-access";
  panel.dataset.firstAccess = "";
  panel.innerHTML = `<h2 class="mth-login-first-access-title">Cambia tu contraseña temporal</h2>
    <p class="mth-login-subtitle">Ingresaste con una credencial temporal (vigente hasta ${escapeHtml(formatOperatorTenantDateTime(user.tempCredential.expiresAt))}). Define tu contraseña personal para continuar.</p>
    <form class="mth-login-form" data-first-access-form novalidate>
      <div class="mth-login-field"><label for="first-access-new">Nueva contraseña</label><input class="mth-login-input" id="first-access-new" name="password" type="password" autocomplete="new-password" /></div>
      <div class="mth-login-field"><label for="first-access-confirm">Confirmar nueva contraseña</label><input class="mth-login-input" id="first-access-confirm" name="confirmation" type="password" autocomplete="new-password" /></div>
      <p class="mth-login-subtitle">Mínimo 8 caracteres, con mayúscula, minúscula, número y carácter especial. No se aceptan contraseñas comunes o comprometidas.</p>
      <p class="feedback" data-feedback="first-access" aria-live="polite"></p>
      <button class="mth-login-submit" type="submit"><span>Guardar y continuar</span></button>
    </form>`;
  form.after(panel);
  panel.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const password = String(data.get("password") || "");
    const confirmation = String(data.get("confirmation") || "");
    if (!password || !confirmation) { setFeedback("first-access", "Ingresa la nueva contraseña y su confirmación.", "is-error"); return; }
    const policyError = getMvpPasswordPolicyError(password);
    if (policyError) { setFeedback("first-access", policyError, "is-error"); return; }
    if (password !== confirmation) { setFeedback("first-access", "La contraseña y su confirmación deben coincidir.", "is-error"); return; }
    activateOperatorTempCredential(user);
    setFeedback("first-access", "Contraseña actualizada. La credencial temporal quedó invalidada. Ingresando...", "is-success");
    onDone();
  });
}

// --- Roles opcionales del tenant (secciones 15 y 24.1) ----------------------------------------------
function isOperatorOptionalRoleEnabled(roleId) {
  if (!OPTIONAL_OPERATOR_ROLE_IDS.includes(roleId)) return true;
  const stored = readOperatorStorage(OPERATOR_OPTIONAL_ROLES_KEY, {});
  if (typeof stored[roleId] === "boolean") return stored[roleId];
  // Sin decisión registrada: se considera habilitado solo si el tenant ya tiene usuarios activos con ese rol.
  return getOperatorCollaborators().some((item) => item.tenantId === OPERATOR_CURRENT_TENANT_ID && item.active !== false && getOperatorRoleIdByLabel(item.role) === roleId);
}

function getOperatorOptionalRolesAudit() {
  const list = readOperatorStorage(OPERATOR_OPTIONAL_ROLES_AUDIT_KEY, []);
  return Array.isArray(list) ? list : [];
}

function setOperatorOptionalRoleEnabled(roleId, enabled) {
  if (!isOperatorAdmin()) return { ok: false, error: "Solo el Administrador del tenant habilita o deshabilita los roles opcionales." };
  if (!OPTIONAL_OPERATOR_ROLE_IDS.includes(roleId)) return { ok: false, error: "Rol no opcional." };
  if (isOperatorTenantInactive()) return { ok: false, error: `${OPERATOR_INACTIVE_NOTICE}: no se modifica la configuración del tenant.` };
  const label = OPERATOR_ROLES[roleId].label;
  if (!enabled) {
    const holders = getOperatorCollaboratorsForCurrentTenant().filter((item) => item.active !== false && getOperatorRoleIdByLabel(item.role) === roleId);
    if (holders.length) return { ok: false, error: `No se puede deshabilitar ${label}: hay ${holders.length} usuario${holders.length === 1 ? "" : "s"} activo${holders.length === 1 ? "" : "s"} con ese rol. Inactívalo${holders.length === 1 ? "" : "s"} primero.` };
  }
  if (isOperatorOptionalRoleEnabled(roleId) === Boolean(enabled)) return { ok: true, unchanged: true };
  const stored = readOperatorStorage(OPERATOR_OPTIONAL_ROLES_KEY, {});
  stored[roleId] = Boolean(enabled);
  writeOperatorStorage(OPERATOR_OPTIONAL_ROLES_KEY, stored);
  const audit = getOperatorOptionalRolesAudit();
  audit.unshift({ roleId, label, action: enabled ? "Habilitado" : "Deshabilitado", actor: getOperatorActorLabel(), at: getOperatorNow().toISOString() });
  writeOperatorStorage(OPERATOR_OPTIONAL_ROLES_AUDIT_KEY, audit);
  return { ok: true };
}

function setupOperatorOptionalRolesPanel() {
  const panel = document.querySelector("[data-optional-roles]");
  if (!panel) return;
  const list = panel.querySelector("[data-optional-roles-list]");
  const feedback = panel.querySelector("[data-optional-roles-feedback]");
  const hints = { gerente: "Consulta, supervisión y seguimiento del negocio.", contador: "Consulta, control y seguimiento económico.", analista: "Consulta, análisis y seguimiento de la información del negocio." };
  const render = () => {
    list.innerHTML = OPTIONAL_OPERATOR_ROLE_IDS.map((id) => {
      const enabled = isOperatorOptionalRoleEnabled(id);
      return `<li class="optional-role-row"><div><strong>${escapeHtml(OPERATOR_ROLES[id].label)}</strong><small>${escapeHtml(hints[id])} Solo consulta.</small></div><label class="optional-role-switch"><input type="checkbox" role="switch" data-optional-role="${id}"${enabled ? " checked" : ""} aria-label="Habilitar ${escapeHtml(OPERATOR_ROLES[id].label)}" /><span>${enabled ? "Habilitado" : "Deshabilitado"}</span></label></li>`;
    }).join("");
  };
  render();
  list.addEventListener("change", (event) => {
    const input = event.target.closest("[data-optional-role]");
    if (!input) return;
    const result = setOperatorOptionalRoleEnabled(input.dataset.optionalRole, input.checked);
    if (feedback) { feedback.textContent = result.ok ? (result.unchanged ? "Sin cambios." : `${OPERATOR_ROLES[input.dataset.optionalRole].label} ${input.checked ? "habilitado" : "deshabilitado"} para este tenant. Cambio auditado.`) : result.error; feedback.classList.toggle("is-valid", Boolean(result.ok)); }
    render();
  });
}

// Menú y pantallas por rol de solo consulta (sección 15): cada rol ve solo lo que su alcance base permite.
const OPERATOR_QUERY_ROLE_GROUPS = {
  catalogs: ["operator-catalogs", "operator-tour-catalog", "operator-transport-catalog", "operator-manage-establishments", "operator-configure-establishment", "operator-configure-tour", "operator-configure-transport", "operator-new-service"],
  payments: ["operator-payments", "operator-validate-support", "operator-reservation-payment", "operator-payment-followup"],
  cash: ["operator-cash", "operator-cash-history", "operator-cash-monthly"],
  operations: ["operator-operations"],
  departures: ["operator-departures", "operator-schedule-departure", "operator-execution", "operator-reprogram-reservation"],
  notifications: ["operator-notifications"],
  reports: ["operator-reports"],
  discounts: ["operator-discounts", "operator-new-discount", "operator-edit-discount", "operator-apply-discount"],
};
const OPERATOR_QUERY_ROLE_ALLOWED = {
  gerente: ["catalogs", "cash", "operations", "departures", "notifications", "reports"],
  contador: ["payments", "cash", "reports"],
  analista: ["catalogs", "payments", "operations", "departures", "reports"],
};
const OPERATOR_QUERY_ROLE_NAV_GROUP = {
  operatorCatalogs: "catalogs", operatorPayments: "payments", operatorCash: "cash", operatorOperations: "operations",
  operatorNotifications: "notifications", operatorReports: "reports", operatorDiscounts: "discounts",
};

// ¿Puede el rol de solo consulta abrir la pantalla? (los demás roles se rigen por sus propias guardas)
function operatorQueryRoleCanOpen(role, screen) {
  const allowed = OPERATOR_QUERY_ROLE_ALLOWED[role];
  if (!allowed) return true;
  const group = Object.keys(OPERATOR_QUERY_ROLE_GROUPS).find((key) => OPERATOR_QUERY_ROLE_GROUPS[key].includes(screen));
  return !group || allowed.includes(group);
}

function setupOperatorQueryRoleMenu() {
  const role = getOperatorRole();
  const allowed = OPERATOR_QUERY_ROLE_ALLOWED[role];
  if (!allowed) return;
  if (!operatorQueryRoleCanOpen(role, document.body.dataset.screen || "")) {
    window.location.href = withTheme("admin-operador.html", getTheme());
    return;
  }
  // Enlaces e indicadores del contenido hacia secciones que el rol no tiene (p. ej. el acceso a Pagos del resumen).
  const fileGroups = { "admin-pagos": "payments", "admin-caja": "cash", "admin-operacion": "operations", "admin-reportes": "reports", "admin-notificaciones": "notifications", "admin-catalogos": "catalogs", "admin-salidas": "departures", "admin-descuentos": "discounts" };
  document.querySelectorAll(".operator-content a[href]").forEach((anchor) => {
    const group = fileGroups[operatorHrefFile(anchor.getAttribute("href"))];
    if (group && !allowed.includes(group)) anchor.remove();
  });
  if (!allowed.includes("payments")) document.querySelector("[data-dashboard-pagos-count]")?.closest(".mt-summary-metric")?.remove();
  if (!allowed.includes("cash")) document.querySelector("[data-dashboard-caja-total]")?.closest(".mt-summary-metric")?.remove();
  document.querySelectorAll(".operator-nav a").forEach((anchor) => {
    const navGroup = OPERATOR_QUERY_ROLE_NAV_GROUP[anchor.dataset.route] || (operatorHrefFile(anchor.getAttribute("href")) === "admin-salidas" ? "departures" : "");
    if (navGroup && !allowed.includes(navGroup)) anchor.remove();
  });
}

const activeTheme = getTheme();
const activeThemeConfig = THEMES[activeTheme];

applyTheme();
hydrateStoredUser();
applyOperatorTimeRules();
setupDemoClockControl();
setupOperatorClockDates();
setupProfileSummary();
setupProfileEdit();
setupPasswordToggle();
setupClientTenantSelector();
setupRoleSwitch();
setupLoginForm(activeThemeConfig, activeTheme);
setupSignupForm(activeTheme);
setupAccountRecovery(activeTheme);
setupResetForm(activeTheme);
setupPlatformScreens(activeTheme);
setupGastronomyCatalog();
setupLodgingCatalog();
setupToursCatalog();
setupVenueLinks(activeTheme);
setupTourLinks(activeTheme);
setupTourBookingLinks(activeTheme);
setupGastronomyDetail(activeTheme);
setupTourDetail(activeTheme);
setupTourBooking(activeTheme);
setupTourCheckout(activeTheme);
setupTourPaymentSuccess(activeTheme);
setupTourPaymentFailed(activeTheme);
setupTourPaymentTransfer(activeTheme);
setupDashboardBooking();
setupDashboardSearch();
setupDashboardNotifications();
setupReprogrammingProposal();
setupClientReservationsScreen();
setupClientPaymentsScreen();
setupCompanionsForm();
setupCatalogSearch();
setupManagedTourCatalog();
setupOperatorAdminCatalogScreens();
setupOperatorNewService();
setupOperatorDiscounts();
setupOperatorNewDiscount();
setupOperatorEditDiscount();
renderClientCatalogProducts();
setupOperatorReservations();
setupOperatorPayments();
setupOperatorApplyDiscount();
setupOperatorReservationDetail();
setupOperatorReservationForm();
setupOperatorReservationCreated();
setupOperatorReservationPayment();
setupOperatorValidateSupport();
setupOperatorPaymentFollowup();
setupOperatorRefundRequests();
setupOperatorRefundDetail();
setupOperatorCancelModifyReservation();
setupOperatorPaymentParams();
setupOperatorCreditScreen();
setupOperatorRetentionBlock();
setupOperatorFinanceLinks();
setupOperatorManageRefund();
setupOperatorCash();
setupOperatorCashHistory();
setupOperatorCashMonthly();
setupOperatorOperation();
ensureOperatorDeparturesNav();
setupOperatorDepartures();
setupOperatorScheduleDeparture();
setupOperatorRegisterExecution();
setupOperatorReprogramReservation();
setupOperatorPendingTreatment();
setupOperatorReports();
setupOperatorRoleChrome();
setupOperatorDashboardRole();
setupOperatorCollaborators();
setupOperatorRegisterCollaborator();
setupOperatorCollaboratorDetail();
setupOperatorQueryRoleMenu();
setupOperatorTenantInactiveMode();
setupClientTenantInactiveNotice();
setupOperatorOptionalRolesPanel();

