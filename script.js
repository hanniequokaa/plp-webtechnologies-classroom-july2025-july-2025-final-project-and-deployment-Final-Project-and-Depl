// VARIABLES
let yarnColors = ["Pink", "White", "Lavender", "Mint", "Sky Blue"];
let favoriteStitch = "Double Crochet";
let isShopOpen = true;

// FUNCTION WITH PARAMETER + RETURN
function greetVisitor(name) {
    return `Hello ${name}! Welcome to Moraa's Crochet Page 🧶✨`;
}

// Ask name and greet
let userName = prompt("What’s your name?");
if (userName) {
    alert(greetVisitor(userName));
}

// CONDITIONAL
if (isShopOpen) {
    console.log("Our crochet shop is open! Browse and enjoy 🛒");
} else {
    console.log("Sorry, we’re closed. Come back tomorrow!");
}

// LOOP → Display available yarn colors in console
console.log("Available yarn colors:");
for (let i = 0; i < yarnColors.length; i++) {
    console.log(`- ${yarnColors[i]}`);
}

// DOM MANIPULATION → Create list of yarn colors
let colorsList = document.createElement("ul");
yarnColors.forEach(color => {
    let li = document.createElement("li");
    li.textContent = color;
    colorsList.appendChild(li);
});
document.getElementById("yarn-section").appendChild(colorsList);

// EVENT LISTENER → Theme toggle
document.getElementById("theme-btn").addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    alert("Theme switched! 🌓");
});

// COUNTER
let count = 0;
document.getElementById("count-btn").addEventListener("click", function () {
    count++;
    document.getElementById("count-display").textContent = count;
});

// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "") {
        alert("Name is required!");
        return;
    }
    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }
    if (message === "") {
        alert("Please enter a message.");
        return;
    }

    alert("Form submitted successfully ✅");
    this.reset();
});

// MOUSEOVER EVENT
document.getElementById("hover-box").addEventListener("mouseover", function () {
    this.textContent = "LIVE, LOVE, BREATHE CROCHET! 🧶❤️";
});

// FUNCTION WITH PARAM + RETURN (PRICE CALCULATION)
function calculatePrice(quantity) {
    const pricePerBall = 150;
    return quantity * pricePerBall;
}

document.getElementById("price-btn").addEventListener("click", function () {
    let qty = parseInt(prompt("How many yarn balls do you want?"));
    if (!isNaN(qty) && qty > 0) {
        let total = calculatePrice(qty);
        alert(`Your total is KSh ${total}`);
    } else {
        alert("Please enter a valid number.");
    }
});

// TRIGGER CSS ANIMATION
document.getElementById("animate-btn").addEventListener("click", function () {
    let box = document.getElementById("hover-box");
    box.classList.add("animate-bounce");
    setTimeout(() => {
        box.classList.remove("animate-bounce");
    }, 600);
});

// ✅ HIGHLIGHT ACTIVE NAV LINK (Improved)
const currentPage = window.location.pathname.split("/").pop().split("?")[0] || "index.html";
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
    const linkHref = link.getAttribute("href");
    if (
        linkHref === currentPage || 
        (currentPage === "index.html" && linkHref === "./") ||
        (currentPage === "" && linkHref === "index.html")
    ) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});
