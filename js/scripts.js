// Inputs and Textarea events
const data = {
    nameInput: '',
    emailInput: '',
    messageInput: '';
}

const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const messageInput = document.querySelector('#messageInput');
const form = document.querySelector('.form');

nameInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);
messageInput.addEventListener('input', validateForm);

// Submit Event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Validate form 
    const { nameInput, emailInput, messageInput } = data;
    console.log(nameInput);
    console.log(emailInput);
    console.log(messageInput);
    if (nameInput === '' || emailInput === '' || messageInput === '') {
        showAlert('All fields are required', true);
        return; //Stop running the function 

    }

    showAlert('Your message has been sent successfully')

});

//Save data from the form
function validateForm(e) {
    data[e.target.id] = e.target.value;
}

//Show an alert message
function showAlert(message, error = null) {
    const alert = document.createElement('P');
    alert.textContent = message;
    if (error) { // Show an error message
        alert.classList.add('error');
    } else { // Show a sent message
        alert.classList.add('sent')
    }
    form.appendChild(alert);

    //Desappear after 2 seconds
    setTimeout(() => {
        alert.remove();
    }, 2000);
}