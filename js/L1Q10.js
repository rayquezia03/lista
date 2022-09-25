function Calculo() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);
    var n4 = parseFloat(document.getElementById("n4").value);
    var n5 = parseFloat(document.getElementById("n5").value);


    var soma = document.getElementById("soma").innerHTML = "Resultado da soma é:"
        + (Number(n1) + Number(n2) + Number(n3) + Number(n4) + Number(n5));
    var media = document.getElementById("media").innerHTML = "Resultado da média é:"
        + (Number(n1) + Number(n2) + Number(n3) + Number(n4) + Number(n5)) / 5;

    

}
