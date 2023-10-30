const form =document.getElementById("form")
const password =document.getElementById("password")
const email =document.getElementById("email")

form.addEventListener("submit",function(e){
    e.preventDefault()

    checkInputs()
})


function checkInputs(){
    const emailValue=email.value.trim()
    const passwordValue=password.value

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank')
    }
    else if(!isValidEmail(emailValue)){
        setErrorFor(email,'Email is not valid')
    }
    else{
        setSuccessFor(email)
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank')
    }
    else if(passwordValue.length < 8){
        setErrorFor(password,'Password must be at least 8 characters long')
    }
    else{
        setSuccessFor(password)
    }
}

function setErrorFor(input,message){
    const formControl=input.parentElement
    const small=formControl.querySelector('small')

    small.innerText=message
    formControl.className="form-control error"
}

function setSuccessFor(input){
    const formControl=input.parentElement
    formControl.className="form-control success"
}

function isValidEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}