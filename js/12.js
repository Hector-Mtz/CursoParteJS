//"use strict"; //ejecuta el codigo JS de manera esctricta

const producto = {    //objeto
    nombreProducto: "Monitor 20 pulgadas",   //propiedad del objeto
    precio: 300,   //propiedad del objeto
    disponible: true    //propiedad del objeto
}

//Object.freeze(producto); //congelamos el objeto para que no se le pueda agregar mas propiedades, lo convierte en un objeto sellado
//Object.freeze no permite agregar o eliminar propiedades, ni alterar valores de esas propiedades

Object.seal(producto);
//Object.seal no permite agregar ni eliminar propiedades pero si modificarlas

producto.imagen = 'imagen.jpg';

console.log(Object.isFrozen(producto));// nos regresa true o false si el objeto esta sellado(congelado)

console.log(Object.isSealed(producto));// tampoco permite agregar nuevas propiedades

console.log(producto);

