document.addEventListener('DOMContentLoaded', () => {
    showSection('smartphones');
});

function showSection(sectionId, event) {
    event.preventDefault();
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
        activeSection.querySelector('h1').focus();
    }
}
