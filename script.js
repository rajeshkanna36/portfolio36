const typedTextSpan = document.querySelector(".typed-text");
const textArray = ["UI/UX Designer", "Developer"];
const cursor = document.getElementById("cursor")
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 50); // Adjust typing speed here (milliseconds)
    } else {
        setTimeout(erase, 1500); // Wait before erasing
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 30); // Adjust erasing speed here
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0; // Reset to the beginning
        }
        setTimeout(type, 500); // Wait before typing the next phrase
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load
    if (textArray.length) setTimeout(type, 500);
});

document.addEventListener("DOMContentLoaded", () => {
    const flipCards = document.querySelectorAll(".flip-card");

    flipCards.forEach(card => {
        const learnMoreBtn = card.querySelector(".learn-more-btn");

        // Flip the card when clicking the "Learn More" button
        learnMoreBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            card.setAttribute("data-flipped", "true");
        });

        // Automatically flip back when leaving the card area
        card.addEventListener("mouseleave", () => {
            card.setAttribute("data-flipped", "false");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const progressCircles = document.querySelectorAll(".progress-circle");

    const animateCircles = () => {
        progressCircles.forEach(circle => {
            const percentage = circle.getAttribute("data-percentage");
            // Set the pink gradient based on the percentage
            circle.style.background = `conic-gradient(#ff3385 ${percentage}%, #e0e0e0 ${percentage}%)`;
        });
    };

    const isVisible = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    };

    const onScroll = () => {
        progressCircles.forEach(circle => {
            if (isVisible(circle)) {
                animateCircles();
            }
        });
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // Trigger on load
});

