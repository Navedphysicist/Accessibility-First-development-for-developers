document.querySelectorAll('button[aria-controls]').forEach(button => {
    button.addEventListener('click', () => {
      const sectionId = button.getAttribute('aria-controls');
      const section = document.getElementById(sectionId);
      const expanded = button.getAttribute('aria-expanded') === 'true';
  
      button.setAttribute('aria-expanded', !expanded);
      section.hidden = expanded;
    });
  });
  