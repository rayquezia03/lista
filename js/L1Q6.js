function procurar(num1){
    var num1 = Number.parseFloat(document.getElementById("num").value);
    var antecessor = num1 - 1;
    var sucessor = num1 + 1;
    return alert(` O numero escolhido foi ${num1} ,cujo antecessor é ${antecessor}, e o sucessor ${sucessor}!`)
}

