//Clases
//Para pasar parametros a la clase, se necesita declarar un constructor

class Producto {
   constructor(nombre, precio){ // aqui se colocan los parametros, y funciona como una funcion
      this.nombre = nombre;  //asignamos loas valores que vienen de los argumentos
      this.precio = precio;  //asignamos loas valores que vienen de los argumentos
   } 

   formatearProducto(){//declaramos el metodo
      return  `El producto ${this.nombre} tiene un precio de ${this.precio}`; //se sigue usando this para 
   }
 
   //crear metodo para retornar el precio
  retornarPrecio (){
    return `El precio del producto ${this.nombre} es de ${this.precio}`;
  }

}

const producto1 = new Producto('Monitor curvo de 49"', 500);

const producto2 = new Producto('Laptop', 300);


console.log(producto1);

console.log(producto2);


//Segunda clase libro 
//Herencia, las clases pueden heredar los metodos como las funciones del objeto que queremos que herede
class Libro extends Producto {
    constructor(nombre, precio, isbn){
        this.nombre = nombre;
        this.precio = precio;
        this.isbn = isbn;
    }
}


const libro = new Libro('JavaScript', 120, '964531465351356');

console.log(libro);