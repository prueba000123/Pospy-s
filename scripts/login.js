let form =document.getElementById('loginForm');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location = './pages/register.html'
})