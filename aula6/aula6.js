//objeto 
/*
function pessoa(nome,idade){
    return {
        nome, idade
    }
}
console.log(pessoa)
*/
function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
    const pessoas=[]
    function recebeEvento(evento){
        evento.preventDefault()
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')
        
        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} pesa ${peso.value}KG 
        e tem ${altura.value}m de altura </p>`
    }
    form.addEventListener('submit', recebeEvento)
}
meuEscopo()