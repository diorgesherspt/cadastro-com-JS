const dados = [];

function mostrarListagem(dados) {
  
  const tabela = document.getElementById('corpoTabela');
  tabela.innerHTML = ""
  // Percorrer cada elemento do vetor exibir na tela
  dados.forEach((valor,posicao) => {
    console.log(`No index ${valor} achei o isto:${posicao}`);
    // Agora vamos adicionar na tela
    tabela.innerHTML += `<tr>
                            <td> ${posicao + 1}</td> 
                            <td> ${valor.nomeRecebido}</td>
                            <td> ${valor.sobrenomeRecebido}</td>
                            <td> ${valor.cidadeRecebida}</td>
                            <td> ${valor.estadoRecebido}</td>
                        </tr>`;
  });
}

function salvar(){
    if(document.getElementById('validationDefault01').value==""||
    document.getElementById('validationDefault02').value==""||
    document.getElementById('validationDefault03').value==""||
    document.getElementById('validationDefault04').value=="Escolha..."||
    document.getElementById('invalidCheck2').checked==false){
        var elemento=document.getElementById("aviso")
        document.getElementById('aviso').hidden = false;
        elemento.textContent="preencha todos os campos"
    }
    else{
    let nomeRecebido =  document.getElementById('validationDefault01').value
    let sobrenomeRecebido =  document.getElementById('validationDefault02').value
    let cidadeRecebida =  document.getElementById('validationDefault03').value
    let estadoRecebido =  document.getElementById('validationDefault04').value
    document.getElementById('validationDefault01').value = null
    document.getElementById('validationDefault02').value = null
    dados.push({nomeRecebido,sobrenomeRecebido,cidadeRecebida,estadoRecebido})
    //console.log('vet >>>', {nomeRecebido,sobrenomeRecebido,cidadeRecebida,estadoRecebido})
    document.getElementById('formulario').hidden = true;
    document.getElementById('botaoNovo').hidden = false;
    mostrarListagem(dados)
    }
  }

  function filtrarElementos(palavra, lista){
    //filtrar para obter novo vetor
    const novaLista=  lista.filter(elemento =>{
        palavra =  palavra.toLowerCase();
        nome =   elemento.nomeRecebido.toLowerCase();     
  
      //Verificar se o valor possui a palavra do filtro
      return  nome.search(palavra) != -1
    })
  
    //Passar o novo vetor para ser exibido
    console.log('novaLista >>>>>>>> ', {palavra, novaLista})
    mostrarListagem(novaLista)
  }



  function pedirNovoUsuario() {
    document.getElementById('formulario').hidden = false;
    document.getElementById('botaoNovo').hidden = true;
  }


  document.getElementById('botaoPesquisar').onclick = () =>{
    const palavra =  document.getElementById('campoPesquisa').value
    filtrarElementos(palavra, dados);
  }

  document.getElementById('botaoLimpar').onclick = () => {
    mostrarListagem(dados);
  };

  document.getElementById('botaoCadastrar').onclick = () => {
    salvar();
  };

  document.getElementById('botaoNovo').onclick = () => {
    pedirNovoUsuario();
  };

  document.getElementById('botaoOrdenar').onclick = () => {
    ordenarElementos();
  };
  document.getElementById('formulario').hidden = true;
  document.getElementById('aviso').hidden = true;