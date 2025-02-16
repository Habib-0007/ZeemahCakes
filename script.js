import ScrollReveal from "scrollreveal";

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  });

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Form Submission
  const orderForm = document.getElementById("order-form");
  const contactForm = document.getElementById("contact-form");

  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    showNotification(
      "Thank you for your order! We will contact you soon to confirm the details."
    );
    orderForm.reset();
  });

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    showNotification(
      "Thank you for your message! We will get back to you as soon as possible."
    );
    contactForm.reset();
  });

  // Notification function
  function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("show");
    }, 100);

    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // Scroll Reveal Animation
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    reset: true,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
  });

  sr.reveal(".hero-content", { delay: 200 });
  sr.reveal(".about-content", { delay: 200 });
  sr.reveal(".cake-item", { interval: 200 });
  sr.reveal(".order-form", { delay: 200 });
  sr.reveal(".contact-content", { delay: 200 });

  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const heroContent = document.querySelector(".hero-content");
    const scrollPosition = window.pageYOffset;
    heroContent.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  });

  // Animate cake items on hover
  const cakeItems = document.querySelectorAll(".cake-item");
  cakeItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "scale(1.05)";
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "scale(1)";
    });
  });

  // Animate form inputs on focus
  const formInputs = document.querySelectorAll("input, textarea, select");
  formInputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.parentElement.classList.add("input-focus");
    });
    input.addEventListener("blur", () => {
      input.parentElement.classList.remove("input-focus");
    });
  });
});
