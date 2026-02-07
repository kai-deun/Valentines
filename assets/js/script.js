const messages = [
    "Sure kana dyan??",
    "Really sure??",
    "Sure na talaga?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

const defaultGif = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHUzcGNmZTV5cTgyNjdhcjgyOXZjOWc1NXk1aHNoNWNodGNscm1xNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/yPAWyc35MhDUNrzySi/giphy.gif";
const yesHoverGif = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmVzYXJwaGN1OG11M296aGx2YnI2NWlzeGUxaW43MDVwYTduZTg4aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1tiwQhwReXrSQ66wsB/giphy.gif";
const noHoverGif = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG95eGZxanRtamV1MzVxOTRhaHhyd2hzODg0Z2l2YWdpbnh2bnZkbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/dH1PXTWnzmi2ocUPsq/giphy.gif";

window.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.querySelector('.yes-button');
    const noButton = document.querySelector('.no-button');
    const mainGif = document.getElementById('main-gif');

    if (!yesButton || !noButton || !mainGif) {
        return;
    }

    mainGif.src = defaultGif;

    yesButton.addEventListener('mouseenter', () => {
        mainGif.src = yesHoverGif;
    });
    yesButton.addEventListener('mouseleave', () => {
        mainGif.src = defaultGif;
    });

    noButton.addEventListener('mouseenter', () => {
        mainGif.src = noHoverGif;
    });
    noButton.addEventListener('mouseleave', () => {
        mainGif.src = defaultGif;
    });
});

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
