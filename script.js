const submitBtn = document.querySelector('.submit button')

const form = document.getElementsByTagName('form')

const abusiveArray = [
    'mjinga',
    'fuck',
    'mafi',
    'shenzi',
]

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    const nameValue = document.getElementById('name').value.trim()
    const emailValue = document.getElementById('email').value.trim()
    const passwordValue = document.getElementById('password').value.trim()
    const confirmPasswordValue = document.getElementById('c-password').value.trim()

    if(nameValue == '' && emailValue == '' && passwordValue ==='' && confirmPasswordValue == ''){
        displayAlert('Name, email, password and confirm password fields are empty!!')
    } 
    else if(nameValue == '' || emailValue == '' || passwordValue ==='' || confirmPasswordValue == ''){
        displayAlert('one of the fields is empty!!')
    }
    else if(passwordValue !== confirmPasswordValue){
        displayAlert('passwords dont not match!!')
    }
    else if(abusiveArray.includes(nameValue) || abusiveArray.includes(emailValue) || abusiveArray.includes(passwordValue) || abusiveArray.includes(confirmPasswordValue)){
        displayAlert('strong word used!!')
    } 
})

//alert 

const alertContainer = document.getElementById('alert')

const displayAlert = (text)=>{
    alertContainer.querySelector('.content p').textContent = text
    alertContainer.classList.add('active')
}

const exitBtn = document.querySelector('.exit')

exitBtn.onclick = ()=>{
    alertContainer.classList.remove('active')
}