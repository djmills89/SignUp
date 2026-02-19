const form = document.getElementById('form')
const email = document.getElementById('email')
const submitBtn = document.getElementById('submit-button')
const errorMsg = document.getElementById('error-msg')
const newsletter = document.getElementById('newsletter-form')
const successMsg = document.getElementById('submit-success')
const resetBtn = document.getElementById('reset-btn')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const userEmail = formData.get('email')

    if (!userEmail || !userEmail.includes('@') || userEmail === '') {
        email.classList.add('error-input')
        errorMsg.classList.remove('hidden')
    } else {
        email.classList.remove('error-input')
        errorMsg.classList.add('hidden')
        newsletter.classList.add('hidden')
        successMsg.classList.remove('hidden')
    }
    console.log(email)
})

resetBtn.addEventListener('click', (e) => {
    e.preventDefault()
    newsletter.classList.remove('hidden')
    successMsg.classList.add('hidden')
    email.value = ''
})