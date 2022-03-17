let form = document.getElementById('loginForm');


form.addEventListener('submit', (e) => {

    e.preventDefault();
    let emailU = document.getElementById('email').value;
    let passwordU = document.getElementById('password').value;

    fetch('http://localhost:4000/Usuarios', {
        method: 'POST',
        body: JSON.stringify({
            userEmail: emailU,
            userPassword: passwordU
        }),
        headers: {
            'Content-Type': "application/json; charset=UTF-8"
        }
    }).then(() => {
        window.location.href = "./pages/home.html";
        alert("La información se guardó correctamente");
      
    }).catch((err) => {
        alert(err)
    })

   
})