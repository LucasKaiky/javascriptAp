const numero = Number(prompt('Digite seu número:'))
const num = document.getElementById('numero')
const text = document.getElementById('texto')

num.innerHTML= numero
text.innerHTML= `<p>A raiz quadrada do seu número é: ${Math.sqrt(numero)};</p>
<p>É inteiro: ${Number.isInteger(numero)};</p>
<p>É NaN: ${Number.isNaN(numero)};</p>
<p>Arredondado para baixo: ${Math.floor(numero)};</p>
<p>Arredondado para cima: ${Math.ceil(numero)};</p>
<p>Com 2 casas decimais: ${numero.toFixed(2)}</p>`

//Objeto Math. importante para simplificações matemáticas.