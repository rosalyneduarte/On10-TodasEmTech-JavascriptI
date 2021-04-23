document.getElementById('acoesBotao').addEventListener('click', function acionarBotao(event) {
 // event.preventDefault();

  const mudaCorTitulo = document.querySelector('.meu-titulo').style.color = 'blue';
  //  console.log(mudaCorTitulo) - Teste se esta pegando a funcao
    const mudarParagrafo = document.querySelector('#meuNome').innerHTML += ' E tenho 30 anos'
  // console.log(mudarParagrafo)
    const mudaSpan = document.querySelector('span').style.textDecoration = 'underline' ;
});
