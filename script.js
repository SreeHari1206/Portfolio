// Project Overlay

function openProjects() {

    document.getElementById("projectOverlay").style.display = "flex";

    document.body.style.overflow = "hidden";

}

function closeProjects() {

    document.getElementById("projectOverlay").style.display = "none";

    document.body.style.overflow = "auto";

}


// Typing Animation

const words = [

    "Structural FEA",

    "Multibody Dynamics",

    "Dynamic Analysis",

    "Engineering R&D"

];

let wordIndex = 0;

let charIndex = 0;

const typingText = document.getElementById("typing-text");


function type() {

    if (charIndex < words[wordIndex].length) {

        typingText.textContent += words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type, 100);

    }

    else {

        setTimeout(erase, 1500);

    }

}


function erase() {

    if (charIndex > 0) {

        typingText.textContent = words[wordIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(erase, 50);

    }

    else {

        wordIndex++;

        if (wordIndex >= words.length) {

            wordIndex = 0;

        }

        setTimeout(type, 500);

    }

}

type();
