// js/main.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleSenha = document.querySelector('.toggle-senha');
    const campoSenha = document.getElementById('password'); // O ID do input continua 'password'

    if (toggleSenha && campoSenha) {
        toggleSenha.addEventListener('click', function() {
            const tipo = campoSenha.getAttribute('type') === 'password' ? 'text' : 'password';
            campoSenha.setAttribute('type', tipo);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }
});