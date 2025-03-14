// script.js - Nugencare Interactive Features

document.addEventListener("DOMContentLoaded", function () {
    // Sticky Navbar Effect
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#111";
            header.style.transition = "0.3s";
        } else {
            header.style.backgroundColor = "#222";
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // Product Hover Animation
    const products = document.querySelectorAll(".product");
    products.forEach(product => {
        product.addEventListener("mouseenter", () => {
            product.style.transform = "scale(1.1)";
        });
        product.addEventListener("mouseleave", () => {
            product.style.transform = "scale(1)";
        });
    });

    // Smooth Scrolling for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
});
