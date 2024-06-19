document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#scroll-link").addEventListener("click", function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    
    targetElement.scrollIntoView({
      behavior: "smooth"
    });
  });
});