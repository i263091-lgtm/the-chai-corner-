// Shared JavaScript for The Chai Corner (Lab 12)
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".site-nav");

    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            const isOpen = nav.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    document.querySelectorAll(".order-button").forEach(function (button) {
        button.addEventListener("click", function () {
            alert("Thank you for choosing The Chai Corner! Please visit us to place your order.");
        });
    });

    const year = document.querySelector("[data-current-year]");
    if (year) year.textContent = new Date().getFullYear();
});


// Front-end contact form demo: validates fields and displays a local confirmation only.
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contact-form");
    const feedback = document.querySelector("#form-feedback");
    if (form && feedback) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            feedback.textContent = "Thank you for your message! This is a demo form; no message has been sent.";
            form.reset();
        });
    }
});
