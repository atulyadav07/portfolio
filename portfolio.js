// Typewriter Effect with Blinking Cursor
const textArray = [
  "Boost your business through internet.",
  "Online your business by Code Point.",
];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetween = 2000;
const typewriter = document.getElementById("typewriter");

// Create blinking cursor span
const cursorSpan = document.createElement("span");
cursorSpan.classList.add("cursor");
cursorSpan.textContent = "|";
typewriter.parentNode.insertBefore(cursorSpan, typewriter.nextSibling);

function type() {
  const currentText = textArray[index];

  if (isDeleting) {
    typewriter.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index = (index + 1) % textArray.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, erasingSpeed);
    }
  } else {
    typewriter.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(type, delayBetween);
    } else {
      setTimeout(type, typingSpeed);
    }
  }
}

// Toggle Navbar for Mobile
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  const links = navLinks.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });

  // Start typewriter effect after DOM is ready
  setTimeout(type, 1000);
});
