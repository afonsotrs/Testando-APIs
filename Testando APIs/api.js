// 69313575
// 46550972
// 49030280
// Variáveis
const cepinput = document.querySelector("#cep")
const bnt = document.querySelector("#buscarcep")
const estado = document.querySelector("#estado")
const cidade = document.querySelector("#cidade")
const endereco = document.querySelector("#endereco")
const bairro = document.querySelector("#bairro")
const msgerror = document.querySelector("#errormsg")

// Funções

const acessardados = async(cep) => {
    const url = `https://brasilapi.com.br/api/cep/v1/${cep}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data;
}

const mostrarcep = async (cep) => {
    const data = await acessardados(cep);
    estado.innerHTML = data.state;
    cidade.innerHTML = data.city; 
    endereco.innerHTML = data.street;
    bairro.innerHTML = data.neighborhood;
};

// Eventos
bnt.addEventListener("click", function mostrarresultao(){
    if(cepinput.value == 0){
        alert("Digite o CEP")
    }else if(cepinput.value.length > 8 || cepinput.value.length < 8){
        alert("O CEP deve conter apenas 8 digitos")
    }else{
        document.querySelector(".resultado").style.display = "block"
    }
});

bnt.addEventListener("click" , (e) =>{
    e.preventDefault();
    const cep = cepinput.value;
    mostrarcep(cep);
});
