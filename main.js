function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
    const discoverGrids = document.querySelectorAll('.discover-grid');

    discoverGrids.forEach(discoverGrid => {
        let isDown = false;
        let startX;
        let scrollLeft;

        discoverGrid.addEventListener('mousedown', (e) => {
            isDown = true;
            discoverGrid.classList.add('active');
            startX = e.pageX - discoverGrid.offsetLeft;
            scrollLeft = discoverGrid.scrollLeft;
        });

        discoverGrid.addEventListener('mouseleave', () => {
            isDown = false;
            discoverGrid.classList.remove('active');
        });

        discoverGrid.addEventListener('mouseup', () => {
            isDown = false;
            discoverGrid.classList.remove('active');
        });

        discoverGrid.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - discoverGrid.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            discoverGrid.scrollLeft = scrollLeft - walk;
        });

        const scrollContainer = discoverGrid.parentElement;
        const leftButton = scrollContainer.querySelector('.scroll-button.left');
        const rightButton = scrollContainer.querySelector('.scroll-button.right');

        if(leftButton && rightButton) {
            leftButton.addEventListener('click', () => {
                discoverGrid.scrollBy({
                    left: -240,
                    behavior: 'smooth'
                });
            });

            rightButton.addEventListener('click', () => {
                discoverGrid.scrollBy({
                    left: 240,
                    behavior: 'smooth'
                });
            });
        }
    });
});
