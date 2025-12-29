const roles = [
    "Web Developer",
    "ECE Engineering Student",
    "AI & LLM Learner",
    "Content Creator"
];

let i = 0;
let j = 0;

function typeEffect() {
    if (i === roles.length) i = 0;

    let current = roles[i];
    document.getElementById("typing").textContent =
        current.substring(0, j + 1);

    j++;

    if (j > current.length) {
        setTimeout(() => {
            j = 0;
            i++;
        }, 1500);
    }

    setTimeout(typeEffect, 120);
}

typeEffect();
