
function Inteiro() {
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);

    for (var x = n1; x <= n2; x++)
        document.writeln(x);
    document.write("<br>");

    var soma = 0;
    var x;
    for (x = n1; x <= n2; x++)
        soma = soma + x;
    document.write("A soma é: " + soma);
}
