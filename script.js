// Example JavaScript to handle redirection and login logic
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple authentication check (replace with real authentication logic)
        if (username === 'user' && password === 'password') {
            // Store authentication status (in a real app, use sessions or tokens)
            localStorage.setItem('authenticated', 'true');
            window.location.href = 'profile.html'; // Redirect to the profile page
        } else {
            alert('Invalid username or password.');
        }
    });

    // Redirect to login if not authenticated
    if (window.location.pathname !== '/index.html' && !localStorage.getItem('authenticated')) {
        window.location.href = 'index.html';
    }
});
// Logout functionality
document.getElementById('logout')?.addEventListener('click', () => {
    localStorage.removeItem('authenticated');
    window.location.href = 'index.html'; // Redirect to the login page
});
