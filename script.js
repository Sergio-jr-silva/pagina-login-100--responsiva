const enviar = document.querySelector("#btn");

enviar.addEventListener("click", (e)=>{
    e.preventDefault();
const numero = document.querySelector('#primeiro').value
const n2 = document.querySelector('#secundo').value
const total = parseInt(numero) + parseInt(n2)
console.log(total)

const calculo = document.querySelector("#calculo")
calculo.innerHTML = (total)
})
