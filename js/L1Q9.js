function maior() {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);
    var n4 = parseFloat(document.getElementById("n4").value);
    var n5 = parseFloat(document.getElementById("n5").value);

    var maior = n1;

    if (n2 > maior) {
        maior = n2;

    }
    if (n3 > maior) {
        maior = n3;

    }
    if (n4 > maior) {
        maior = n4;

    }
    if (n5 > maior) {
        maior = n5;

    }
    alert("O maior número é: " + (maior))


}