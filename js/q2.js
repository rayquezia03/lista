function reajuste(salario){
    var salario = Number.parseFloat(document.getElementById("salario").value);
    var aumento = Number.parseFloat(salario * 0.01);
    var salario_novo = salario + aumento;
    var form = salario_novo.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    return alert(` O novo salário é: ${form}`);
} 

