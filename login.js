document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Hardcoded user credentials (for demo purposes only)
    const validUsername = 'Adarsh';
    const validPassword = '12345';

    // Get user input from form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Check credentials
    if (username === validUsername && password === validPassword) {
        // Store login state in localStorage (to simulate logged-in state)
        localStorage.setItem('loggedIn', 'true');
        
        // Redirect to the main shopping page
        window.location.href = 'index.html';
    } else {
        // Show an error message if credentials are invalid
        errorMessage.textContent = 'Invalid username or password!';
        errorMessage.style.display = 'block';
    }
});
