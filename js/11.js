const producto = {    //objeto
    nombreProducto: "Monitor 20 pulgadas",   //propiedad del objeto
    precio: 300,   //propiedad del objeto
    disponible: true    //propiedad del objeto
}

const precioProducto = producto.precio; //extraemos del objeto el precio y lo asignamos a una variable
//const nombreProducto = producto.nombreProducto;


//Destructuring (sacar de uns estructura)

const {precio, nombreProducto}  = producto; //extrae el valor y lo almacena en una variable

console.log(precio);
console.log(nombreProducto);