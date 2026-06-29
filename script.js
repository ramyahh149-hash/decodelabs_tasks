// -------------------------
// LOADER
// -------------------------

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "0.8s ease";

    }, 1500);

});

// -------------------------
// HERO FADE-IN
// -------------------------

const hero = document.querySelector(".hero");

hero.style.opacity = "0";
hero.style.transform = "translateY(40px)";

window.addEventListener("load", () => {

    setTimeout(() => {

        hero.style.transition = "1.2s ease";

        hero.style.opacity = "1";

        hero.style.transform = "translateY(0px)";

    }, 700);

});

// -------------------------
// NAVBAR EFFECT
// -------------------------

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(255,255,255,.92)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.10)";

    }

    else{

        header.style.background = "rgba(255,255,255,.65)";
        header.style.boxShadow = "0 10px 40px rgba(0,0,0,.06)";

    }

});
// =========================
// STYLE QUIZ
// =========================
// =========================
// NESTORIA QUIZ
// =========================

let selectedRoom = "";
let selectedVibe = "";

// ROOM

const roomButtons = document.querySelectorAll(".room-options .quiz-btn");

roomButtons.forEach(button => {

    button.addEventListener("click", () => {

        roomButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        selectedRoom = button.dataset.room;

    });

});

// VIBE

const vibeButtons = document.querySelectorAll(".vibe-options .quiz-btn");

vibeButtons.forEach(button => {

    button.addEventListener("click", () => {

        vibeButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        selectedVibe = button.dataset.vibe;

    });

});

// RESULT

document.getElementById("discover").addEventListener("click", () => {

    const result = document.getElementById("result");

    if(selectedRoom==="" || selectedVibe===""){

        result.innerHTML="⚠️ Please answer both questions.";

        return;

    }

    let title="";
    let description="";

    if(selectedRoom==="villa" && selectedVibe==="luxury"){

        title="🏡 Luxury Villa";

        description="Floor-to-ceiling glass, marble finishes, premium lighting and spacious layouts.";

    }

    else if(selectedRoom==="kids" && selectedVibe==="nature"){

        title="🌿 Jungle Explorer";

        description="Treehouse beds, botanical colours, wooden furniture and playful nature-inspired décor.";

    }

    else if(selectedRoom==="bedroom" && selectedVibe==="minimal"){

        title="🤍 Scandinavian Bedroom";

        description="Soft whites, oak furniture, linen fabrics and natural sunlight.";

    }

    else if(selectedRoom==="living" && selectedVibe==="traditional"){

        title="🪵 Heritage Living";

        description="Wood finishes, handcrafted furniture, warm lighting and timeless elegance.";

    }

    else{

        title="✨ Contemporary Comfort";

        description="A balanced blend of modern design, warmth and functionality.";

    }

    result.innerHTML=`

        <h2>${title}</h2>

        <p>${description}</p>

    `;

});