listaDeCosas = ["tomates", "lechuga", "pimiento", "boniato", "papa"];
list2 = ["ordenador", "teclado", "mouse"];

imprimirEnConsola(list2);
imprimirEnConsola(listaDeCosas);

function imprimirEnConsola(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
}
