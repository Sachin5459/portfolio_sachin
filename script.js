// ==================== PARTICLES INIT ====================
tsParticles.load("tsparticles", {
  fpsLimit: 60,
  background: { color: "transparent" },
  particles: {
    number: { value: 60, density: { enable: true, area: 800 } },
    color: { value: "#d4af37" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: { min: 1, max: 4 } },
    move: { enable: true, speed: 2, direction: "none", random: true, outModes: { default: "out" } },
    links: { enable: true, distance: 120, color: "#d4af37", opacity: 0.3, width: 1 },
  },
  interactivity: {
    events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" } },
    modes: { repulse: { distance: 100 }, push: { quantity: 4 } }
  },
  detectRetina: true,
});

// ==================== TYPING EFFECT ====================
const typingText = ["Front-End Developer", "UI/UX Enthusiast", "React.js & JavaScript"];
let index = 0, charIndex = 0;
const typingElement = document.getElementById("typing");

function type() {
  if (index >= typingText.length) index = 0;
  const currentText = typingText[index];
  typingElement.textContent = currentText.slice(0, charIndex + 1);
  charIndex++;
  if (charIndex === currentText.length) {
    setTimeout(() => { charIndex = 0; index++; type(); }, 2000);
  } else {
    setTimeout(type, 150);
  }
}
type();

// ==================== SCROLL ANIMATION ====================
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// ==================== SKILL FILL ANIMATION ====================
const skillFills = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.style.width = entry.target.dataset.percent;
  });
}, { threshold: 0.5 });
skillFills.forEach(fill => skillObserver.observe(fill));

// ==================== PROJECT CARD ANIMATION ====================
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.3 });
projectCards.forEach(card => projectObserver.observe(card));

// ==================== EMAILJS CONTACT FORM ====================
emailjs.init("DLacm8wOmwQffSVI2"); // Your EmailJS public key
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function(e) {
  e.preventDefault();
  emailjs.sendForm('service_octehdn', 'template_403ve9e', this)
    .then(() => { alert("Thank you! Your message has been sent."); contactForm.reset(); },
          (error) => { alert("Oops! Something went wrong.", error); });
});

// ==================== NAV LINK ACTIVE ON SCROLL ====================
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 80;
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active');
    } else link.classList.remove('active');
  });
});





