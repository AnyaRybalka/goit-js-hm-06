const loginForm = document.querySelector('.login-form');
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const elements = event.target.elements;
    if (!elements.email.value || !elements.password.value) {
      alert('All fields are required!');
      return;
    }
    const formData = {
      email: elements.email.value,
      password: elements.password.value,
    };
    console.log(formData);
    loginForm.reset();
  });
