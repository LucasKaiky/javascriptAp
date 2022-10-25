//função 

/* 
function ola(){
    console.log('Salve!')
}

ola() 
*/

// arrow function abaixo, forma moderna 
const calculadora = () => {
    const n1 = Number(prompt('Digite o número que deseja: '))
    const n2 = Number(prompt('Digite um segundo número: '))
    const op = prompt('Digite qual operação deseja fazer: + = soma / - = subtração / * = mult / / = divisão')

    let resultado = 0
    if (op=='+'){
        resultado = n1 + n2
    }
    else if(op == '-'){
        resultado = n1-n2
    }
    else if(op == '*'){
        resultado = n1*n2
    }
    else if(op == '/'){
        resultado = n1/n2
    }
    else{
        console.log("ERRO!")
        resultado = NaN
    }
    return resultado
}

console.log(`A operação dos resultados é ${calculadora()}`)


