document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('.radio-button');
    
    radioButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            setChecked(button);
        });

        button.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp':
                case 'ArrowLeft':
                    event.preventDefault();
                    const prevIndex = (index === 0) ? radioButtons.length - 1 : index - 1;
                    radioButtons[prevIndex].focus();
                    break;
                case 'ArrowDown':
                case 'ArrowRight':
                    event.preventDefault();
                    const nextIndex = (index === radioButtons.length - 1) ? 0 : index + 1;
                    radioButtons[nextIndex].focus();
                    break;
                case ' ':
                case 'Enter':
                    event.preventDefault();
                    setChecked(button);
                    break;
            }
        });
    });

    function setChecked(button) {
        radioButtons.forEach(btn => {
            btn.setAttribute('aria-checked', 'false');
            btn.tabIndex = -1;
            btn.removeAttribute('checked');
        });
        button.setAttribute('aria-checked', 'true');
        button.tabIndex = 0;
        button.setAttribute('checked', 'checked');
        button.focus();
    }
});
