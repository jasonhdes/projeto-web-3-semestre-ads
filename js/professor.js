
// Função que extrai o ID da URL
function getProfessorID() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

// Função que exibe apenas o currículo do professor selecionado
function mostrarCurriculoDoProfessor() {
    const id = getProfessorID(); // Ex: "01", "02", etc.
    const secoes = document.querySelectorAll('.persona');

    secoes.forEach(secao => {
        if (secao.id === id) {
            secao.style.display = 'block';
        } else {
            secao.style.display = 'none';
        }
    });
}

// Executa quando a página carregar
window.onload = mostrarCurriculoDoProfessor;

