//Objetos

const nombreProducto = "Monitor 20 pulgadas";
const precio = 300;
const disponible = true;


const producto = {    //objeto
    nombreProducto: "Monitor 20 pulgadas",   //propiedad del objeto
    precio: 300,   //propiedad del objeto
    disponible: true    //propiedad del objeto
}

console.log(producto); // imprime todo el objeto

//Acceso a propiedades
console.log(producto.nombreProducto); //imprime la propiedad de nombre
console.log(producto.precio); //imprime la propiedad de precio
console.log(producto.disponible); //imprime la propiedad de disponible

console.log(producto["precio"]);