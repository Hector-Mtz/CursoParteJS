//ForEach y MAP (Metodos exclusivos de arreglos)

const carrito = [
    {nombre: "Monitor 20 pulgadas", precio: 500},
    {nombre: "Television 50 pulgadas", precio: 700},
    {nombre: "Tablet", precio: 300},
    {nombre: "Audifonos", precio: 200},
    {nombre: "Teclado", precio: 500},
    {nombre: "Celular", precio: 500},
    {nombre: "Bocinas", precio: 300},
    {nombre: "Laptop", precio: 800},
  ];

//FOREACH (Solamente se puede ocupar en arreglos) ejectuta 
carrito.forEach(producto => console.log(producto.nombre)); //toma o espera los valores por parametro

//MAP(Solamente se puede ocupar en arreglos)
const arreglo2 = carrito.map(producto => `${producto.nombre} y $${producto.precio}`); 

console.log(arreglo2);

//DIFERENCIAS ENTRE AMBOS
/*

Cuando se quiere iterar sobre un arreglo y mostrar los elementos en pantalla se us ForEach

Si se quiere crear un nuevo arreglo, se usa MAP

ForEach esta diseñado para iterar y mostrar los resultados
MAP crea un nuevo arreglo  con lo que le pongamos para que lo retorne
*/ 

