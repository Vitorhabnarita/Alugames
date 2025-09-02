# 🎮 AluGames - Sistema de Aluguel de Jogos

## 📜 Sobre o Projeto

O AluGames é uma interface web interativa que simula a funcionalidade de aluguel e devolução de jogos de tabuleiro. Este projeto foi desenvolvido como um exercício prático para aprimorar a lógica de programação utilizando JavaScript puro (Vanilla JS).

O foco principal foi a implementação da lógica para manipular o DOM (Document Object Model), gerenciar o estado dos elementos (disponível ou alugado) e responder dinamicamente às interações do usuário.

---

### ✨ Funcionalidades Implementadas

* **Alugar e Devolver Jogos:** Ao clicar no botão, o status do jogo é alterado, atualizando visualmente a imagem e o botão correspondente.
* **Gerenciamento de Estado:** O código controla se um jogo está alugado ou disponível através da adição e remoção de classes CSS.
* **Contador de Jogos Alugados:** Um contador global foi implementado para rastrear e exibir em tempo real a quantidade de jogos que estão alugados.
* **Confirmação de Ações:** O sistema utiliza a função `confirm()` para pedir a confirmação do usuário antes de alugar ou devolver um jogo, prevenindo ações acidentais.

---

### 💻 Tecnologias Utilizadas

* HTML5
* CSS3
* **JavaScript (Vanilla JS)**

---

### 🚀 Lições Aprendidas

Este projeto foi fundamental para solidificar meu entendimento sobre a manipulação direta do DOM. O principal desafio foi criar uma função única e reutilizável (`alterarStatus`) que pudesse tanto alugar quanto devolver um jogo, baseando sua lógica na verificação das classes CSS do elemento clicado. Além disso, a implementação de um contador global reforçou o conceito de gerenciamento de estado em uma aplicação web simples.

*(O HTML e o CSS foram fornecidos como base para o desafio. Minha responsabilidade foi desenvolver todo o arquivo `js/app.js` para implementar as funcionalidades e a interatividade da página.)*
