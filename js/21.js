//Arrow Functions

const sumar = (n1, n2) => {
   console.log(n1+n2);
}

sumar(5,10);


const aprendiendo = (tecnologia) =>  {
    console.log(`Aprendiendo ${tecnologia}`);
}

aprendiendo("JavaScript");



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
const meses = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo' ];

meses.forEach( mes => {
    console.log(mes); // imprime todos los elementos del array por cada elemento existente

    if(mes== "Marzo"){   //validamos para saber si existe un elemento llamado Marzo
       console.log("Marzo si existe dentro del array")
    }
});


//
let resultado;

resultado = carrito.some(producto =>  producto.nombre == "Celular");

console.log(resultado);

//Reduce
let total=0;

resultado = carrito.reduce((total, producto) =>  total + producto.precio ,0); //se le asiga el valor inicial aqui

console.log(resultado);


//Filter tal cual es un filtro

resultado4 = carrito.filter(producto=> producto.precio >= 400);

console.log(resultado4);

