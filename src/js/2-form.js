// Step 1: Declare formData object
const formData = {
  email: '',
  message: ''
};

// Step 2: Get references to the form and its fields
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// Step 3: Load any saved data from localStorage on page load
document.addEventListener('DOMContentLoaded', populateForm);

// Step 4: Add an input event listener to save data in real time
form.addEventListener('input', onFormInput);

// Step 5: Add a submit event listener for form validation and submission
form.addEventListener('submit', onFormSubmit);

// Function to populate the form with data from localStorage
function populateForm() {
  const savedData = localStorage.getItem('feedback-form-state');
  
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    formData.email = email || '';
    formData.message = message || '';
    
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

// Function to handle input event and save data to localStorage
function onFormInput() {
  formData.email = emailInput.value.trim();
  formData.message = messageInput.value.trim();

  // Save the formData object to localStorage
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// Function to handle form submission
function onFormSubmit(event) {
  event.preventDefault();

  // Validate if both fields are filled
  if (!formData.email || !formData.message) {
    alert('Please fill out both the email and message fields.');
    return;
  }

  // Log the form data to the console
  console.log('Form submitted:', formData);

  // Clear localStorage and the form
  localStorage.removeItem('feedback-form-state');
  form.reset();
  
  // Reset the formData object
  formData.email = '';
  formData.message = '';
}
