// window.addEventListener("load", () => {

//     document.querySelector(".hero-content").style.opacity = "1";
//     document.querySelector(".hero-image").style.opacity = "1";

// });

// // Scroll Navbar Shadow

// window.addEventListener("scroll", () => {

//     const header = document.querySelector("header");

//     if (window.scrollY > 50) {

//         header.style.background = "rgba(75,46,30,0.95)";
//         header.style.backdropFilter = "blur(10px)";
//         header.style.position = "sticky";
//         header.style.top = "0";

//     } else {

//         header.style.background = "transparent";

//     }

// });

// // Smooth Scroll

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {

//     anchor.addEventListener('click', function(e) {

//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });

//     });

// });

// =========================
// Page Load Animation
// =========================

window.addEventListener("load", () => {

    const leftSection = document.querySelector(".left-section");
    const rightSection = document.querySelector(".right-section");

    if(leftSection){
        leftSection.style.opacity = "1";
        leftSection.style.transform = "translateX(0)";
    }

    if(rightSection){
        rightSection.style.opacity = "1";
        rightSection.style.transform = "translateX(0)";
    }

});

// =========================
// Navbar Scroll Effect
// =========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(!navbar) return;

    if(window.scrollY > 50){

        navbar.style.background = "rgba(45,22,13,0.95)";
        navbar.style.backdropFilter = "blur(15px)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
        navbar.style.transition = "all 0.4s ease";

    }
    else{

        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "none";
        navbar.style.boxShadow = "none";

    }

});

// =========================
// Typing Animation
// =========================

const typingElement = document.getElementById("typing-text");

const roles = [
    "AI & Machine and Deep Learning Enthusiast",
    "Full Stack Developer",
    "Contribute in Research And Patent ",
    "Computer Science Student at VIT"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    if(!typingElement) return;

    const currentRole = roles[roleIndex];

    if(!isDeleting){

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if(charIndex === currentRole.length){

            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    }
    else{

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if(charIndex === 0){

            isDeleting = false;

            roleIndex++;

            if(roleIndex >= roles.length){
                roleIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);

}

typeEffect();


// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});


// =========================
// Image Hover Glow
// =========================

const profileImage = document.querySelector(".profile-img");

if(profileImage){

    profileImage.addEventListener("mouseenter", () => {

        profileImage.style.transition = "all 0.5s ease";

    });

}


// =========================
// Current Year in Footer
// =========================

const yearElement = document.getElementById("year");

if(yearElement){

    yearElement.textContent =
        new Date().getFullYear();

}

