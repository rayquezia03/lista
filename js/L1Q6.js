function calcularBissexto() {
    let day_array = [
      'Segunda-Feira', 
      'Terça-Feira', 
      'Quarta-Feira', 
      'Quinta-Feira', 
      'Sexta-Feira', 
      'Sábado', 
      'Domingo'];
    let date_full = new Date(document.form_main.date.value);
    let calcular_bissexto = (ano) => (ano % 4 == 0 &&  ano % 100 != 0 ||  ano % 400 == 0)  
    ? 'E bissexto' : 'Nao e bissexto';
    document.querySelector('#tipo').innerText = calcular_bissexto(date_full.getFullYear());
    document.querySelector('#dia').innerText = day_array[date_full.getDay()];
  }