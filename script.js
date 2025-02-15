// Toggle menu for mobile
document.querySelector('.menu-icon').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});

// Tab content switching
function opentab(tabName) {
    const tabs = document.querySelectorAll('.tab-contents');
    tabs.forEach(tab => {
        tab.classList.remove('active-tab');
    });

    const links = document.querySelectorAll('.tab-links');
    links.forEach(link => {
        link.classList.remove('active-link');
    });

    document.getElementById(tabName).classList.add('active-tab');
    document.querySelector(tab-links[onclick="opentab('${tabName}')"]).classList.add('active-link');
}