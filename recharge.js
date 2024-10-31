const payButtons = document.querySelectorAll('.pay-button');

payButtons.forEach(button => {
    button.addEventListener('click', () => {
        const plan = button.dataset.plan;

        // Redirect to payment page based on plan
        if (plan === 'basic') {
            window.location.href = 'payment-success.html';
        } else if (plan === 'entertainment') {
            window.location.href = 'payment-success.html';
        } else if (plan === 'premium') {
            window.location.href = 'payment-success.html';
        }
    });
});