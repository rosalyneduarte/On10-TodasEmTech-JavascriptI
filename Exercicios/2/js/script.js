function mostraPrecoAptoDoisDorm() {
    //especificar o elemento do DOM que será manipulado. DICA: botão
    let getBotaoApDoisDorm = document.querySelector('#btnAptoDoisDorm');
    
    getBotaoApDoisDorm.addEventListener('click', function mostrarValor(){

    document.getElementById('precoAptoDoisDorm').innerText = "Preço do imóvel: R$ 500.000,00"


      //evento de exibição do valor do imóvel
  })
};
  
  function mostraPrecoAptoTresDorm() {
      document.getElementById('precoAptoTresDorm').innerHTML = " Preço do imóvel: R$ 600.000,00";
    };
  
  
  mostraPrecoAptoDoisDorm();
