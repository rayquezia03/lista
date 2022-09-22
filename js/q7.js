const nome = prompt('Digite o seu nome')
const idade = Number.parseInt(prompt('Digite a sua idade'))
const salario = Number.parseFloat(prompt('Digite o salario do usuário'))
const sexo = prompt('Digite o seu sexo')
const estado_civil = prompt('Digite o seu estado civil: s/c/v/d')

if (nome.length <= 3) {
    alert("Nome inválido")
} else {
    alert("Nome válido")
}
  
if (idade > 0 && idade < 30) {
    alert("Idade Válida")
}else{
    alert("Idade Inválida")
}

if (salário != 0){
    alert("Salário Válido") 
}else{
    alert("Salário Iválido") 
}

if (sexo == 'f' || sexo == 'm'){
    alert('sexo Válido')
}else{
    alert('sexo Inválido')
}

if (estado_civil == 's' || estado_civil == 'c' || estado_civil == 'v' || estado_civil == 'd'){
    alert('Estado civil Válido')
}else{
    alert('Estado civil Inválido')
}