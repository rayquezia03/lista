function validar_idade(idade) {
    var idade = Number.parseInt(document.getElementById("idade").value);
    var meses = idade * 12;
    var dias = meses * 30;
    return alert(`Possui ${idade} anos,${meses} meses e ${dias} dias`)
}

