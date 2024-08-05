document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    
    heroSection.addEventListener('click', () => {
        alert('Welcome to The Kombi Koffee, where magic and coffee blend perfectly!');
    });
    
    // Twinkling stars effect
    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        document.body.appendChild(star);
        setTimeout(() => {
            document.body.removeChild(star);
        }, 5000);
    }

    setInterval(createStar, 100);
});
