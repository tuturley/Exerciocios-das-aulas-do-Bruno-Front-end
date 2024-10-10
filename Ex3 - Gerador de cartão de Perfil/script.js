document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    console.log(event.target.profissao)
    const profissao = event.target.profissao.value; // Usando event.target para acessar o valor do select
    const resultadoDiv = document.getElementById('resultado');

    // Limpar qualquer perfil anterior
    resultadoDiv.innerHTML = '';

    // Criar o elemento do cartão de perfil
    const profileCard = document.createElement('div');
    profileCard.classList.add('profile-card');

    let titulo, descricao;

    // Switch para selecionar a profissão e configurar o cartão
    switch (profissao) {
        case 'programador':
            titulo = 'Perfil do Programador';
            descricao = 'Alguém que escreve código para criar soluções digitais.';
            profileCard.classList.add('programador');
            break;
        case 'designer':
            titulo = 'Perfil do Designer';
            descricao = 'Um criador visual que transforma ideias em belas interfaces e experiências.';
            profileCard.classList.add('designer');
            break;
        case 'musico':
            titulo = 'Perfil do Músico';
            descricao = 'Um artista que expressa emoções e histórias através da música.';
            profileCard.classList.add('musico');
            break;
        default:
            titulo = 'Profissão não selecionada';
            descricao = 'Por favor, selecione uma profissão válida.';
    }

    // Definir o conteúdo do cartão
    profileCard.innerHTML = `<h2>${titulo}</h2><p>${descricao}</p>`;

    // Adicionar botão de alternância de visibilidade
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Destacar';
    
    // Função de alternância de visibilidade
    toggleButton.addEventListener('click', function() {
        profileCard.classList.toggle('highlight');
    });

    // Usando append para adicionar o botão ao cartão
    profileCard.append(toggleButton);

    // Adicionar o cartão ao resultado
    resultadoDiv.append(profileCard);
});
