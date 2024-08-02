document.querySelectorAll('li[role="treeitem"]').forEach(treeitem => {
  const button = treeitem.querySelector('button');
  const group = treeitem.querySelector('ul[role="group"]');
  
  if (button && group) {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';

      button.setAttribute('aria-expanded', !expanded);
      group.hidden = expanded;
    });
  }
  
  const label = document.getElementById(treeitem.getAttribute('aria-labelledby'));
  
  if (label) {
    label.addEventListener('click', () => {
      const expanded = treeitem.getAttribute('aria-expanded') === 'true';

      treeitem.setAttribute('aria-expanded', !expanded);
      if (group) {
        group.hidden = expanded;
      }
      button.setAttribute('aria-expanded', !expanded);
    });
  }
});
