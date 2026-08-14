// ======================
// LOADER
// ======================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});

// ======================
// NAVBAR SCROLL EFFECT
// ======================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

// ======================
// REVEAL ON SCROLL
// ======================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 120) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);
revealSections();

// ======================
// COUNTERS
// ======================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const statsSection = document.querySelector(".stats");

    const sectionTop =
        statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                Number(counter.dataset.target);

            let count = 0;

            const speed = target / 80;

            const updateCounter = () => {

                count += speed;

                if (count < target) {

                    counter.innerText =
                        Math.floor(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);
startCounters();

// ======================
// BACK TO TOP BUTTON
// ======================

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ======================
// 3D PROJECT CARDS
// ======================

const cards =
document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateY =
            (x - centerX) / 18;

        const rotateX =
            (centerY - y) / 18;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});

// ======================
// PARALLAX HERO IMAGE
// ======================

const heroImage =
document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.clientX) / 40;

    const y =
        (window.innerHeight / 2 - e.clientY) / 40;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});

// ======================
// SMOOTH NAVIGATION
// ======================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ======================
// FLOATING BACKGROUND
// ======================

const background =
document.querySelector(".background-animation");

let posX = 50;
let posY = 50;

window.addEventListener("mousemove", e => {

    posX =
        (e.clientX / window.innerWidth) * 100;

    posY =
        (e.clientY / window.innerHeight) * 100;

    background.style.background = `
    radial-gradient(
        circle at ${posX}% ${posY}%,
        rgba(0,212,255,.15),
        transparent 25%
    ),
    radial-gradient(
        circle at 80% 30%,
        rgba(255,255,255,.05),
        transparent 25%
    ),
    radial-gradient(
        circle at 50% 80%,
        rgba(0,212,255,.08),
        transparent 35%
    ),
    #000`;

});

// ======================
// CONTACT FORM DEMO
// ======================

const form =
document.querySelector(".contact-form");

form.addEventListener("submit", e => {

    e.preventDefault();

    alert(
        "Message Sent Successfully!"
    );

    form.reset();

});

// ======================
// HERO TEXT ANIMATION
// ======================

const heroTitle =
document.querySelector(".hero h1");

heroTitle.style.opacity = "0";
heroTitle.style.transform =
"translateY(40px)";

setTimeout(() => {

    heroTitle.style.transition =
    "1.2s ease";

    heroTitle.style.opacity = "1";

    heroTitle.style.transform =
    "translateY(0)";

}, 500);

// ======================
// IMAGE HOVER ZOOM
// ======================

const galleryImages =
document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.filter =
        "brightness(1.15)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.filter =
        "brightness(1)";

    });

});function openVideo(videoPath){

    const modal =
    document.getElementById("videoModal");

    const video =
    document.getElementById("projectVideo");

    video.src = videoPath;

    modal.style.display = "flex";

    video.play();

}

function closeVideo(){

    const modal =
    document.getElementById("videoModal");

    const video =
    document.getElementById("projectVideo");

    video.pause();

    video.currentTime = 0;

    modal.style.display = "none";

}