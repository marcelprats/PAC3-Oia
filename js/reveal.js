const sections = document.querySelectorAll('.reveal');

const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(revealSection, {
    threshold: 0.15,
});

sections.forEach(section => {
    observer.observe(section);
});
