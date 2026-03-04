(function () {
  "use strict";

  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".site-nav a");

  if (navToggle && header) {
    navToggle.addEventListener("click", function () {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      header.classList.toggle("nav-open", !expanded);
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        header.classList.remove("nav-open");
      });
    });
  }

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries, io) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  const bmiForm = document.getElementById("bmi-form");
  const bmiHeight = document.getElementById("height");
  const bmiWeight = document.getElementById("weight");
  const bmiResult = document.getElementById("bmi-result");

  function getBmiCategory(value) {
    if (value < 18.5) {
      return "Bajo peso";
    }
    if (value < 25) {
      return "Peso normal";
    }
    if (value < 30) {
      return "Sobrepeso";
    }
    return "Obesidad";
  }

  function renderBmiResult() {
    if (!bmiHeight || !bmiWeight || !bmiResult) {
      return;
    }

    const heightCm = Number.parseFloat(bmiHeight.value);
    const weightKg = Number.parseFloat(bmiWeight.value);

    if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) {
      bmiResult.innerHTML = "<p>Ingresa valores validos para altura y peso.</p>";
      return;
    }

    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    const bmiFixed = bmi.toFixed(1);
    const category = getBmiCategory(bmi);

    bmiResult.innerHTML = ""
      + '<p class="bmi-value">' + bmiFixed + '</p>'
      + '<p class="bmi-category">' + category + '</p>'
      + '<p>IMC = peso (kg) / altura² (m).</p>';
  }

  if (bmiForm) {
    bmiForm.addEventListener("submit", function (event) {
      event.preventDefault();
      renderBmiResult();
    });

    [bmiHeight, bmiWeight].forEach(function (input) {
      if (input) {
        input.addEventListener("input", function () {
          if (bmiHeight.value && bmiWeight.value) {
            renderBmiResult();
          }
        });
      }
    });
  }

  const scheduleRows = document.querySelectorAll(".schedule-table tbody tr[data-day]");
  if (scheduleRows.length) {
    const dayMap = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6" };
    const currentDay = dayMap[new Date().getDay()];

    scheduleRows.forEach(function (row) {
      if (row.getAttribute("data-day") === currentDay) {
        row.classList.add("row-today");
      }
    });
  }

  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      formMessage.textContent = "Gracias. Tu mensaje fue enviado. Te contactaremos pronto.";
      contactForm.reset();
    });
  }
})();
