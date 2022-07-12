//Programacion orientada a objetos

//Object literal (basicamente nosotros le asignamos valor por tanto es estatico)
const producto = {  
    nombre:'Tablet',
    precio: 500
}

//Object constructor (es mas dinamico pero no tan comun como el anterior)
function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function () { //le pasamos un producto y con ello el nombre y precio para darles un nuevo formato
    return `El cliente ${this.nombre} tiene un apellido ${this.apellido}`;
}

//Clase es una forma en la que se almacena la forma(datos) que va a tener un objeto en especifico
//Es un contenedor de todos los datos, metodos y funciones que va tener en el
//La clase sirve como un plano para construir muchos objetos
function Producto(nombreProducto, precio, disponible){
    this.nombreProducto = nombreProducto; //creamos una nueva instancia y tomamtos el argumento y lo asignamos
    this.precio = precio;
    this.disponible = disponible;
}


//Prototypes (va a ser una funcion  que esta asociada a un tipo de objeto)
//Estos nos permiten crear funciones que solo se utilizan en  un objeto en especifico

Producto.prototype.formatearProducto = function () { //le pasamos un producto y con ello el nombre y precio para darles un nuevo formato
    return `El producto ${this.nombreProducto} tiene un precio de ${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 40"', 800, true    ); // crea un nuevo producto con la instancia de la clase

console.log(producto2.formatearProducto());

const producto3 = new Producto('Laptop', 800, false); 

console.log(producto3.formatearProducto());

const producto4 = new Producto('Celular', 500, true);

console.log(producto4);

const cliente = new Cliente('Juan', 'De la Torre');

console.log(cliente);

console.log(cliente.formatearCliente());


function formatearProducto(producto) { //le pasamos un producto y con ello el nombre y precio para darles un nuevo formato
    return `El producto ${producto.nombreProducto} tiene un precio de ${producto.precio}`;
}




