const producto = {    //objeto
    nombreProducto: "Monitor 20 pulgadas",   //propiedad del objeto
    precio: 300,   //propiedad del objeto
    disponible: true    //propiedad del objeto
}

const medidas = {
    peso: '1kg',
    medida:'1m'
}

console.log("Objeto producto: ");
console.log(producto);
console.log("Objeto medidas: ");
console.log(medidas);

//Union de objetos

const nuevo_producto = { ...producto, ...medidas }; //agregamos ambos objetos en uno nuevo con  SPREAD OPERATOR


console.log("Objeto nuevo producto: ");
console.log(nuevo_producto);