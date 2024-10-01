const formData = {
  email: '',
  message: ''
};

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

document.addEventListener('DOMContentLoaded', populateForm);

form.addEventListener('input', onFormInput);

form.addEventListener('submit', onFormSubmit);

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

function onFormInput() {
  formData.email = emailInput.value.trim();
  formData.message = messageInput.value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Please fill out both the email and message fields.');
    return;
  }

  console.log('Form submitted:', formData);

  localStorage.removeItem('feedback-form-state');
  form.reset();
  
  formData.email = '';
  formData.message = '';
}
