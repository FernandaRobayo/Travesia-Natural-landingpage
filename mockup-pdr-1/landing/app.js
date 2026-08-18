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

function setupLoginForm() {
  const form = document.querySelector('[data-form="login"]');
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = form.querySelector("#login-id");
    const password = form.querySelector("#login-password");

    if (!email.value.trim() || !password.value.trim()) {
      setFeedback(
        "login",
        "Completa el correo y la contrasena para continuar.",
        "is-error"
      );
      return;
    }

    setFeedback(
      "login",
      "Inicio de sesion simulado para administrador o encargado del local.",
      "is-success"
    );

    window.setTimeout(() => {
      window.location.href = "recuperar-contrasena.html";
    }, 700);
  });
}

function setupRecoverForm() {
  const form = document.querySelector('[data-form="recover"]');
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = form.querySelector("#recover-id");

    if (!email.value.trim()) {
      setFeedback(
        "recover",
        "Ingresa tu correo registrado para continuar.",
        "is-error"
      );
      email.focus();
      return;
    }

    setFeedback(
      "recover",
      "Recuperacion simulada. El enlace se enviaria al correo asociado a la cuenta.",
      "is-success"
    );
  });
}

setupPasswordToggle();
setupLoginForm();
setupRecoverForm();
