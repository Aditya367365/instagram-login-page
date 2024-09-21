document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for now
    // Show loading spinner when form is submitted
    document.getElementById('loading').style.display = 'block';

    // Hide the form while loading
    document.querySelector('.login-wrapper').style.display = 'none';

    // Simulate loading (for demo purposes, you can replace this with actual form submission handling)
    setTimeout(function() {
        // After 2 seconds (simulating a network request), you can hide the spinner
        document.getElementById('loading').style.display = 'none';
        // For now, show the login wrapper again (remove this in real use case)
        document.querySelector('.login-wrapper').style.display = 'block';
        alert("Login successful!");
    }, 2000);
});
