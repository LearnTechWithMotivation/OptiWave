document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Redirect to login.html
    window.location.href = "login.html";
});