/* script.js */

// Seleção de elementos
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header .navbar a");
const contactForm = document.getElementById("contact-form");

/**
 * Lógica de Navegação Ativa (Scroll)
 * Otimizada para atualizar o menu conforme o usuário desce a página
 */
window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        // Adiciona a classe active apenas ao link que contém o ID da seção visível
        const activeLink = document.querySelector(
          `header .navbar a[href*='${id}']`
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      });
    }
  });
};

/**
 * Lógica do Formulário de Contato
 * Adiciona feedback visual simples e previne envios vazios
 */
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Coleta de valores
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validação simples
    if (name === "" || email === "" || message === "") {
      alert("⚠️ Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    // Simulação de envio
    const submitBtn = contactForm.querySelector("button");
    const originalText = submitBtn.innerText;

    submitBtn.innerText = "Enviando...";
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.7";

    // Simula um atraso de rede (1.5 segundos)
    setTimeout(() => {
      alert(`✅ Sucesso! Obrigado, ${name}. Recebemos sua mensagem.`);

      // Reseta o formulário
      contactForm.reset();

      // Restaura o botão
      submitBtn.innerText = originalText;
      submitBtn.disabled = false;
      submitBtn.style.opacity = "1";
    }, 1500);
  });
}
