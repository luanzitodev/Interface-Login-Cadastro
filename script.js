function showRegisterForm() {
    
    document.getElementById('loginForm').style.transform = 'rotateY(180deg)';
    
    
    document.querySelectorAll('#loginForm .input-field, #loginForm button, capeta, remember').forEach(function (el) {
        el.style.opacity = 0;
    });
    /*fiz com ajuda essas partes*/
    setTimeout(function() {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
        document.getElementById('registerForm').style.transform = 'rotateY(0deg)';
        

        document.querySelectorAll('#registerForm .input-field, #registerForm button, capeta, remember, .remember p').forEach(function (el) {
            el.style.opacity = 1;
        });
    }, 500); 
}

function showLoginForm() {
    
    document.getElementById('registerForm').style.transform = 'rotateY(-180deg)';
    
    
    document.querySelectorAll('#registerForm .input-field, #registerForm button, capeta, remember').forEach(function (el) {
        el.style.opacity = 0;
    });
    
    
    setTimeout(function() {
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('loginForm').style.transform = 'rotateY(0deg)';
        
        
        document.querySelectorAll('#loginForm .input-field, #loginForm button, remember, capeta').forEach(function (el) {
            el.style.opacity = 1;
        });
    }, 500); 
}

function login() {
    alert("Login realizado com sucesso!");
}

function register() {
    alert("Cadastro realizado com sucesso!");
}
