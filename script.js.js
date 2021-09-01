function tabuada() {
  // vou buscar o valor do input e converto em int
  let numero = parseInt(document.getElementById("numero").value);
  // vou buscar a div para apresentar a tabuada
  let resposta = document.getElementById("mostrar_tabuada");
  // inicializo a variavel tabuada para guardar cada linha
  let tabuada = "";

  for (let i = 1; i <= 10; i++)
    tabuada += `${numero} x ${i} = ${numero * i} <br>`;

  // insiro a tabuada no browser com o
  resposta.innerHTML = tabuada;
}
