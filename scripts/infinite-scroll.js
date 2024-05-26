document.addEventListener('DOMContentLoaded', () => {
    const iconContainer = document.querySelector('.icon-scroll');

    const icons = [
        { src: 'sources/programmazione.png', alt: 'Programmazione', text: 'Programmazione' },
        { src: 'sources/programmazione.png', alt: 'Database', text: 'Database' },
        { src: 'sources/programmazione.png', alt: 'Server', text: 'Server' },
        { src: 'sources/programmazione.png', alt: 'Web Development', text: 'Web Development' },
        { src: 'sources/programmazione.png', alt: 'Web Design', text: 'Web Design' }
    ];

    function addIcons() {
        for (let i = 0; i < 5; i++) {
            icons.forEach(icon => {
                const iconDiv = document.createElement('div');
                iconDiv.classList.add('icon');

                const img = document.createElement('img');
                img.src = icon.src;
                img.alt = icon.alt;

                const p = document.createElement('p');
                p.textContent = icon.text;

                iconDiv.appendChild(img);
                iconDiv.appendChild(p);
                iconContainer.appendChild(iconDiv);
            });
        }
    }

    // Aggiungi le prime icone
    addIcons();

    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            addIcons();
        }
    });
});
