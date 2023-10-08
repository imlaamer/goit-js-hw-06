const form = document.querySelector('.login-form')
form.addEventListener('submit', checkSubmitedForm)


function checkSubmitedForm(event) {
    event.preventDefault();
    const form = event.target;
    const emailInput= form.elements.email; 
    const passwordInput = form.elements.password; 

 if (emailInput.value == false || passwordInput.value == false) 
 
 {
    alert('Заповніть всі поля!')
 }
 else {console.log({
    email: emailInput.value,
    password: passwordInput.value 
}) }

form.reset()
}


