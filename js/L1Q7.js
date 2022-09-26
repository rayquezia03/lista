function validar_idade(idade){
    var idade = Number.parseInt(document.getElementById("idade").value);
 
    if (idade > 0 && idade < 150) {
        alert("Idade Válida")
    }else{
        alert("Idade Inválida")
    }
}
 
function validar_nome(nome){
    var nome = document.getElementById("nome").value;
 
    if (nome.length <= 3) {
        alert("Nome inválido")
    } else {
        alert("Nome válido")
    }
}
function validar_salario(salario){
    var salario = Number.parseFloat(document.getElementById("salario").value);
    if (salario > 0){
        alert("Salário válido")
    }else {
        alert("Salário inválido")
    }
}
function validar_sexo(sexo){
    var sexo = document.getElementById("sexo").value;
    if (sexo == 'f' || sexo == 'm'){
        alert('sexo Válido')
    }else{
        alert('sexo Inválido')
    }
}
function validar_estado(estado){
    var estado = document.getElementById("estado").value;
    if (estado == 's' || estado == 'c' || estado == 'v' || estado == 'd'){
        alert('Estado Civil Válido')
    }else{
        alert('Estado Civil Inválido')
    }
}
 

 
