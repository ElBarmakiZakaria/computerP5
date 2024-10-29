function validateForm() {
    // Get values from the form elements
    const postalCode = document.getElementById('postalCode').value;
    const email = document.getElementById('email').value;
    const integerValue = document.getElementById('integerValue').value;
    const dayOfWeek = document.getElementById('dayOfWeek').value;
    const agreementChecked = document.getElementById('agreement').checked;

    // Clear previous errors
    document.getElementById('postalError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('integerError').textContent = '';
    document.getElementById('agreementError').textContent = '';
    document.getElementById('formError').textContent = '';

    let isFormValid = true;

    // 1. Postal Code Validation (format: XX-XXX)
    const postalCodePattern = /^\d{2}-\d{3}$/;
    if (!postalCodePattern.test(postalCode)) {
        document.getElementById('postalError').textContent = 'Invalid postal code format. Use XX-XXX.';
        isFormValid = false;
    }

    // 2. Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        isFormValid = false;
    }

    // 3. Integer Validation (Must be a number between 5 and 20)
    const integer = parseInt(integerValue);
    if (isNaN(integer) || integer < 5 || integer > 20) {
        document.getElementById('integerError').textContent = 'Enter a valid integer between 5 and 20.';
        isFormValid = false;
    }

    // 4. Day of the Week Validation
    if (dayOfWeek !== 'default') {
        const today = new Date().toLocaleString('en-us', { weekday: 'long' });
        if (dayOfWeek !== today) {
            if (!confirm(`You selected ${dayOfWeek}, but today is ${today}. Do you want to continue?`)) {
                document.getElementById('dayOfWeek').value = 'default';
                isFormValid = false;
            }
        }
    }

    // 5. Agreement Checkbox Validation
    if (!agreementChecked) {
        document.getElementById('agreementError').textContent = 'You must accept the agreement.';
        isFormValid = false;
    }

    // Prevent form submission if validation fails
    if (isFormValid) {
        alert('Form submitted successfully!');
    } else {
        document.getElementById('formError').textContent = 'Please correct the errors before submitting the form.';
    }
}
