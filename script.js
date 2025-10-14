const menuOpen = document.querySelector('.menu-open')
const menuClose = document.querySelector('.menu-close')
const links = document.querySelector('.links')
const logoImg = document.querySelector('.logo img')

menuOpen.addEventListener('click', ()=>{
    menuOpen.classList.add('active')
    menuClose.classList.add('active')
    links.classList.add('active')
    logoImg.classList.add('active')

})

menuClose.addEventListener('click', ()=>{
    menuOpen.classList.remove('active')
    menuClose.classList.remove('active')
    links.classList.remove('active')
    logoImg.classList.remove('active')
})


const tabs = document.querySelectorAll('.tab')
const content  = document.querySelectorAll('.tab-content')

tabs.forEach((tab, index) =>{
    tab.addEventListener('click', ()=>{

        tabs.forEach(t => t.classList.remove('active'))
        content.forEach(c => c.classList.remove('active') )
    
        tab.classList.add('active')
        content[index].classList.add('active')
    })
})


const questions = document.querySelectorAll('.question')
const faqItem = document.querySelectorAll('.faq-item')

questions.forEach(question =>{
    question.addEventListener('click', ()=>{
        // find the parent faq-item of the clicked question
        const parent = question.parentElement
        parent.classList.toggle('active')

    })
})

const form =document.querySelector('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const emailInput = document.querySelector('.input-con')
    const errorMessage = document.querySelector('.error-message')
    const errorIcon = document.querySelector('.error-icon')
    const formBtn  = document.querySelector('.form-btn')
    const email = form.elements.email.value.trim()
    let hasError = false
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i;
    let emailError = ''
    if(!email){
        emailError = 'This field is required'
        hasError = true
        errorMessage.style.display = 'block'
        errorIcon.style.display = 'block'
        emailInput.classList.add('error')
        formBtn.classList.add('error')

    }else if(!emailPattern.test(email)){
        emailError = 'Whoops,  make sure it is an email'
         hasError = true
        errorMessage.style.display = 'block'
        errorIcon.style.display = 'block'
        emailInput.classList.add('error')
        formBtn.classList.add('error')
    }else{
        errorMessage.style.display = 'none'
        errorIcon.style.display = 'none'
        emailInput.classList.remove('error')
        formBtn.classList.remove('error')
    }
    errorMessage.textContent = emailError
})