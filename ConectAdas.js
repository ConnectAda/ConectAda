const links = document.querySelectorAll('.social-share-menu a');
links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        window.open(link.href, '_blank');
    });
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}
