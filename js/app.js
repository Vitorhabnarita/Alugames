function alterarStatus(id) {
    // 1. Pega o elemento do card do jogo (o <li>)
    let jogoSelecionado = document.getElementById(`game-${id}`);

    // 2. Dentro do card, pega o botão e a imagem específicos daquele jogo
    let botao = jogoSelecionado.querySelector('.dashboard__item__button');
    let imagem = jogoSelecionado.querySelector('.dashboard__item__img');
    let nomeDoJogo = jogoSelecionado.querySelector('.dashboard__item__name').textContent

    // 3. Verifica se o jogo está alugado (pela classe do botão)
    if (botao.classList.contains('dashboard__item__button--return')) {
        if (confirm(`Você deseja devolver o jogo "${nomeDoJogo}"?`)){
    
        // Se estiver alugado, executa a lógica de DEVOLUÇÃO
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented');
        }
    } else {
        
        // Se estiver disponível, executa a lógica de ALUGUEL
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
    }
 contarEImprimirJogosAlugados() 

}

function contarEImprimirJogosAlugados() {
  // Passo 1: Selecionar todos os elementos que marcam um jogo como alugado.
  // A variável terá uma NodeList com todos os jogos encontrados.
  let jogosAlugados = document.querySelectorAll('.dashboard__item__button--return');

  // Passo 2: Usar a propriedade .length para obter a quantidade de itens na lista.
  let quantidade = jogosAlugados.length;

  // Passo 3: Imprimir a informação no console com uma frase explicativa.
  console.log(`Total de jogos alugados: ${quantidade}`);
}

// Para executar e ver o resultado, basta chamar a função.
contarEImprimirJogosAlugados(); 