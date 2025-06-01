
document.addEventListener('DOMContentLoaded', function() {
    // Lógica para alternar a visibilidade da senha
    const toggleSenha = document.querySelector('.toggle-senha');
    const campoSenha = document.getElementById('password');

    if (toggleSenha && campoSenha) {
        toggleSenha.addEventListener('click', function() {
            const tipo = campoSenha.getAttribute('type') === 'password' ? 'text' : 'password';
            campoSenha.setAttribute('type', tipo);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }

    // Lógica de Autenticação Simulada
    const formLogin = document.getElementById('form-login');
    const campoEmail = document.getElementById('email');
    const mensagemFeedback = document.getElementById('mensagem-feedback');

    // Credenciais simuladas
    const USUARIO_CORRETO = 'professor@uni.com';
    const SENHA_CORRETA = '123';

    if (formLogin) {
        formLogin.addEventListener('submit', function(evento) {
            evento.preventDefault(); // Impede o envio padrão do formulário

            const emailDigitado = campoEmail.value.trim();
            const senhaDigitada = campoSenha.value.trim();

            // Limpa mensagens anteriores
            mensagemFeedback.textContent = '';
            mensagemFeedback.className = 'mensagem-feedback'; // Reseta as classes

             if (emailDigitado === USUARIO_CORRETO && senhaDigitada === SENHA_CORRETA) {

                setTimeout(() => {
                // Redireciona para a página area-professor.html
                 window.location.href = 'area-professor.html';
                });
            } else {
            // Autenticação falhou
            mensagemFeedback.textContent = 'Email ou senha incorretos.';
            mensagemFeedback.classList.add('erro');
         } 
        });
    }
});