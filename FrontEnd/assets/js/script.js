// Login
document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();              
    const user = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if(!user || !password){
        alert("Por favor complete los datos");
        return
    }
    
    const formData = {
        user: user,
        password: password
    };
    
    try {                  
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
            
        });
        if(response.ok && formData){
          window.location.href='dashboard.html';
        }else{
            alert("Usuario o contraseña incorrecta")

        }
    } catch (error) {
        console.error('Error al enviar la solicitud:', error);
    }
});
