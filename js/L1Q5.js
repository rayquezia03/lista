alert('O salário mínimo custa: R$ 788,00')

function calcular(salario){
    var salario = Number.parseFloat(document.getElementById("salario").value);
    var qtde = (salario / 788)
    var form = qtde.toFixed(2)
    if (form <=1){
        return alert(` Você recebe ${form} salário mínimo`);
    }else{
        return alert(` Você recebe ${form} salários mínimos`);
    }
} 

