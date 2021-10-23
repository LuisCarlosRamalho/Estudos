let btnSignIn = document.getElementById('sign-in')
let btnSignUp = document.getElementById('sign-up')

let body = document.getElementById('body')

btnSignUp.addEventListener('click', function() {
  body.className = 'sign-up-js'
})

btnSignIn.addEventListener('click', function () {
  body.className = 'sign-in-js'
})