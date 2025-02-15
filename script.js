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

    // Name Validation
    const name = document.getElementById('name').value.trim();
    if (!name) showError('name', 'Name is required');

    // Email Validation
    const email = document.getElementById('email').value.trim();
    if (!email) {
        showError('email', 'Email is required');
    } else if (!isValidEmail(email)) {
        showError('email', 'Invalid email format');
    }

    // Message Validation
    const message = document.getElementById('message').value.trim();
    if (!message) showError('message', 'Message is required');

    // Submit if valid
    if (name && email && isValidEmail(email) && message) {
        alert('Form submitted successfully!');
        this.reset();
    }
});

// Helper Functions
function showError(fieldId, errorMessage) {
    const field = document.getElementById(fieldId);
    field.classList.add('error');
    // Display error message
}

function clearErrors() {
    // Clear previous errors
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
