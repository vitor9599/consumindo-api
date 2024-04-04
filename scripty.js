function consultaEndereco (){
    let cep = document.querySelector("#cep").value;
    if(cep.length !==8){ alert ("cep Invalido!");
        return;
    }
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(function(response){
        response.json().then(mostrarEndereco)
    });
}
function mostrarEndereco(dados){
   let resultado = document.querySelector("#resultado");
   if(dados.erro){
    resultado.innerHTML ="Nao foi possivel localizar complemento";

   }else{
   resultado.innerHTML = `<p>Endereco:${dados.logradouro}<p>
                         <p>Complemento:${dados.Complemento}<p>
                         <p>Bairro:${dados.bairro}<p>
                         <p>Cidade:${dados.localidade}<p>
                         <p>Municipio:${dados.uf}<p>
                         <p>Numero:${dados.siafi}<p>
   ` 
}
}
