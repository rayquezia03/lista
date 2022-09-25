function calcular(p1,q1,p2,q2) {   
p1 = Number.parseInt(document.getElementById('p1').value);
q1 = Number.parseInt(document.getElementById('q1').value);
p2 = Number.parseInt(document.getElementById('p2').value);
q2 = Number.parseInt(document.getElementById('q2').value);
ipi = Number.parseFloat(document.getElementById('ipi').value);

let formula = ((p1*q1 + p2*q2) * (ipi/100+1))
let form = formula.toFixed(2)
alert(`O valor total é ${form} `);
}