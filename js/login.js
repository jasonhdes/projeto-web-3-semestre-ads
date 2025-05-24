
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
    const SENHA_CORRETA = '123'; // Use uma senha simples para o teste

    if (formLogin) {
        formLogin.addEventListener('submit', function(evento) {
            evento.preventDefault(); // Impede o envio padrão do formulário

            const emailDigitado = campoEmail.value.trim();
            const senhaDigitada = campoSenha.value.trim();

            // Limpa mensagens anteriores
            mensagemFeedback.textContent = '';
            mensagemFeedback.className = 'mensagem-feedback'; // Reseta as classes

            if (emailDigitado === USUARIO_CORRETO && senhaDigitada === SENHA_CORRETA) {
                // Autenticação bem-sucedida
                mensagemFeedback.textContent = 'Login bem-sucedido! Redirecionando...';
                mensagemFeedback.classList.add('sucesso');

                // Simula um redirecionamento após 2 segundos
                setTimeout(() => {
                    // Você pode redirecionar para outra página HTML
                    // window.location.href = 'pagina-de-boas-vindas.html';
                    
                    // Ou apenas limpar o formulário e mostrar uma mensagem de sucesso
                    formLogin.reset(); // Limpa os campos do formulário
                    mensagemFeedback.textContent = 'Bem-vindo, Professor(a)!'; // Nova mensagem para manter visível
                    mensagemFeedback.classList.add('sucesso');
                    // Opcional: esconder a mensagem após um tempo, se não houver redirecionamento real
                    // setTimeout(() => {
                    //     mensagemFeedback.textContent = '';
                    //     mensagemFeedback.className = 'mensagem-feedback';
                    // }, 5000);

                }, 2000); // 2 segundos
            } else {
                // Autenticação falhou
                mensagemFeedback.textContent = 'Email ou senha incorretos.';
                mensagemFeedback.classList.add('erro');
            }
        });
    }
});