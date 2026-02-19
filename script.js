const form = document.getElementById('form')
const email = document.getElementById('email')
const submitBtn = document.getElementById('submit-button')
const errorMsg = document.getElementById('error-msg')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const userEmail = formData.get('email')

    if (!userEmail.includes('@') || userEmail === '') {
        email.classList.add('error-input')
        errorMsg.classList.remove('hidden')
    } else {
        email.classList.remove('error-input')
        errorMsg.classList.add('hidden')
    }


    console.log(formData.get('email'))
})