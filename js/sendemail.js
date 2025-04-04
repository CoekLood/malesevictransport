document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    let params = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        message: document.getElementById('message').value,
    };

    // Send the form data using EmailJS
    emailjs.send('service_hm8g3kn', 'template_vrha1p8', params)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully!'); // Optionally, show a success message
        }, function(error) {
            console.log('FAILED...', error);
            alert(`Error: ${error.text}\nShow this to developers.`); // Optionally, show an error message
        });
});

