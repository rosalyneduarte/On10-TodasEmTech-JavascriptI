function exibirDados(event) {
    event.preventDefault();

    let pegaAutor = document.getElementById("author").value;
    let pegaTitulo = document.querySelector("#titulo").value;
    let pegaISBN = document.querySelector("#isbn").value;
    let pegaDataPublicacao = document.getElementById("dataPublicacao").value;
    let pegaquantidadeDePaginas = document.getElementById("quantidadeDePaginas").value;
    let dataInsercao = new Date().toLocaleDateString("pt-br");
    let horarioInsercao = new Date().toLocaleTimeString("pt-br");

    if (pegaAutor === ''){
        alert('Digite o nome do Autor.')
    } else if (pegaTitulo === ''){
        alert('Digite o nome do Titulo.')
    } else if (pegaISBN === ''){
    alert('Digite o ISBN.')
    } else if(pegaDataPublicacao === ''){
        alert('Digite a Data de Publicação')
    }else if (pegaquantidadeDePaginas === ''){
        alert('Digite a Quantidade de Paginas')
    }else{

    document.getElementById("resposta").innerHTML += `
    <tr id="coluna-resposta">
        <td> ${pegaTitulo} </td>
        <td> ${pegaAutor} </td>
        <td> ${pegaISBN} </td>
        <td> ${pegaDataPublicacao} </td>
        <td> ${pegaquantidadeDePaginas} </td>
        <td> ${dataInsercao} </td>
        <td> ${horarioInsercao} </td>
        <td> <button class="btn2" onclick="removerLivroTabela(event)">Remover Livro</button> </td>
    </tr>

    `;

    limparDados();
    }
}

function limparDados() {
    document.getElementById('author').value = '';
    document.querySelector('titulo').value = '';
    document.querySelector('#isbn').value = '';
    document.getElementById('dataPublicacao').value = '';
    document.getElementById('quantidadeDePaginas').value = '';
}

document.getElementById('resposta').addEventListener('click', function (event) {
    if (event.target.className === 'delete') {
        event.target.parentElement.remove();
    }

})


function removerLivroTabela(event){
    document.getElementById("coluna-resposta").remove();
}

