// Arrays Methods (se les dice asi ya que tiene el nombre de la variable,
// seguido del punto y seguido de una funcion)

const meses = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo' ];

console.log(meses);

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

console.log(carrito);


//foreach meses

meses.forEach(function (mes) {
    console.log(mes); // imprime todos los elementos del array por cada elemento existente

    if(mes== "Marzo"){   //validamos para saber si existe un elemento llamado Marzo
       console.log("Marzo si existe dentro del array")
    }
});

//Inlcudes es equivalente al codigo anterior

const resultado = meses.includes('Marzo');

console.log(resultado);

//Some ideal para arreglo de objetos para comprobar si existe algo dentro del arreglo

const resultado2 = carrito.some(function(producto){
  return producto.nombre == "Celular"
});

console.log(resultado2);

//Reduce

resultado3 = carrito.reduce(function(total, producto){ //requerimos el total donde se va a guardar y el producto que seria de donde sacaremos las cantidades
   return total + producto.precio 
},0); //se le asiga el valor inicial aqui

console.log(resultado3);


//Filter tal cual es un filtro

resultado4 = carrito.filter(function(producto){
   return producto.precio >= 400;
});

console.log(resultado4);

