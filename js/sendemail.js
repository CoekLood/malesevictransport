// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission

//     // Collect form data
//     let params = {
//         name: document.getElementById('name').value,
//         phone: document.getElementById('phone').value,
//         email: document.getElementById('email').value,
//         address: document.getElementById('address').value,
//         message: document.getElementById('message').value,
//     };

//     // Send the form data using EmailJS
//     emailjs.send('service_hm8g3kn', 'template_vrha1p8', params)
//         .then(function(response) {
//             console.log('SUCCESS!', response.status, response.text);
//             alert('Email sent successfully!'); // Optionally, show a success message
//         }, function(error) {
//             console.log('FAILED...', error);
//             alert(`Error: ${error.text}\nShow this to developers.`); // Optionally, show an error message
//         });
// });

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

    // Send the form data to the Back4App backend
    fetch('https://parseapi.back4app.com/functions/sendEmail', {  // Use your Back4App URL here
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Parse-Application-Id': '0GZAedEXoy6NFwUkwAonglsDnFukt0lq084uf9DQ',  // Replace with your Back4App App ID
            'X-Parse-REST-API-Key': 'KwAtGpOLDAoDfhbQDZmPtJQ6fBposX36oubksTrz',  // Replace with your Back4App REST API Key
        },
        body: JSON.stringify(params),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Email sent successfully!');
        } else {
            alert('Error sending email: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending email');
    });
});
