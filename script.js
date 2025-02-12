function toggleMenu() {
    const body = document.body;
    body.classList.toggle('menu-open');
}

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const aboutSections = document.querySelectorAll('.about-section');

    // Remove active class from all sections
    aboutSections.forEach(sec => sec.classList.remove('active'));

    // Add active class to the clicked section
    section.previousElementSibling.classList.add('active');

    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

function animateGreeting() {
    const letters = document.querySelectorAll('.greeting .letter');
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.opacity = '1';
        }, index * 150); // Adjust the delay as needed
    });

    setTimeout(() => {
        letters.forEach(letter => {
            letter.style.opacity = '0';
        });
        animateGreeting();
    }, letters.length * 100 + 1000); // Adjust the delay as needed
}

document.addEventListener('DOMContentLoaded', () => {
    animateGreeting();
    // Add red class to letters in "Keith"
    const keithLetters = document.querySelectorAll('.greeting .letter:nth-child(n+8):nth-child(-n+12)');
    keithLetters.forEach(letter => {
        letter.classList.add('red');
    });
});

