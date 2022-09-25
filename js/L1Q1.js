function calcular_idade(){
    let idade = Number.parseInt(document.getElementById('idade').value);
    let meses = Number.parseInt(document.getElementById('meses').value);
    let dias = Number.parseInt(document.getElementById('dia').value);

    let a = idade *365;
    let b = meses *30;
    let soma = a + b + dias;

    alert(`${idade} anos, ${meses} meses e ${dias} dias = ${soma} dias`);
}