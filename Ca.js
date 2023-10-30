var siteKey = '6LdMxMgoAAAAADLzz1GN0JmRiVvUQB_kQTGoqPdK';

function handleFormSubmission(event) {
    event.preventDefault();

    var recaptchaResponse = grecaptcha.getResponse();

    if (!recaptchaResponse) {
        alert('Please complete the reCAPTCHA verification.');
    } else {
        // You can submit the form to your server or perform other actions here
    }
}

document.getElementById('yourFormSubmitButton').addEventListener('click', handleFormSubmission);
