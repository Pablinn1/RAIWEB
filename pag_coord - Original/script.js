// Seleciona o botão e o conteúdo que você deseja mostrar/ocultar
const seta = document.getElementById('seta');
const conteudo = document.getElementById('conteudo');

// Adiciona um evento de clique ao botão
seta.addEventListener('click', () => {
    // Verifica se o conteúdo está visível
    if (conteudo.classList.contains('hidden')) {
        // Se estiver oculto, mostra o conteúdo
        conteudo.classList.remove('hidden');
    } else {
        // Se estiver visível, oculta o conteúdo
        conteudo.classList.add('hidden');
    }
});
