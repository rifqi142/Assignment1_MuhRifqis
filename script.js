const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  
  mobileMenu.classList.toggle("-translate-y-full");
  mobileMenu.classList.toggle("translate-y-0");
  mobileMenu.classList.toggle("opacity-0");
  mobileMenu.classList.toggle("opacity-100");
});

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-lg");
  } else {
    navbar.classList.remove("shadow-lg");
  }
});

const navLinks = document.querySelectorAll("nav ul li a");

function removeActiveClasses() {
  navLinks.forEach((link) => {
    link.classList.remove("active");
    link.classList.add("border-transparent");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    removeActiveClasses();

    link.classList.add("active");
    link.classList.remove("border-transparent");
  });
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log("Form is valid, proceed with sending message...");
    } else {
      console.log("Form is not valid, fix errors before proceeding.");
    }
  });

function validateForm() {
  let valid = true;

  // Validate name
  const name = document.getElementById("name").value;
  const nameError = document.getElementById("name-error");
  if (!name) {
    nameError.classList.remove("hidden");
    valid = false;
  } else {
    nameError.classList.add("hidden");
  }

  // Validate email
  const email = document.getElementById("email").value;
  const emailError = document.getElementById("email-error");
  const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (!email || !emailPattern.test(email)) {
    emailError.classList.remove("hidden");
    valid = false;
  } else {
    emailError.classList.add("hidden");
  }

  // Validate subject
  const subject = document.getElementById("subject").value;
  const subjectError = document.getElementById("subject-error");
  if (!subject) {
    subjectError.classList.remove("hidden");
    valid = false;
  } else {
    subjectError.classList.add("hidden");
  }

  // Validate message
  const message = document.getElementById("message").value;
  const messageError = document.getElementById("message-error");
  if (!message) {
    messageError.classList.remove("hidden");
    valid = false;
  } else {
    messageError.classList.add("hidden");
  }

  return valid;
}

const scrollUpBtn = document.getElementById("scrollUpBtn");
const circleBorder = scrollUpBtn.querySelector("svg");

window.addEventListener("scroll", () => {
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollTop = window.scrollY;
  const scrollPercentage = (scrollTop / scrollHeight) * 20;

  const strokeDashArray = `${scrollPercentage}, 100`;
  circleBorder.style.strokeDasharray = strokeDashArray;

  if (scrollTop > 100) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
});

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
