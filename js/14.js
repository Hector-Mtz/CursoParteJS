//Arrays o arreglos

const numeros = [10,20,30,40,50];

console.log(numeros); //imrpime el array

console.table(numeros); //imprime el array en una tabla

const arreglo = [
    "Hola", 
    10, 
    true, 
    "si", 
    null,
    {nombre: "Juan", trabajo:"Programador"},
    [1,2,3,4,5]
]; //puede almacenar distintos tipos de valores

console.log(arreglo);

//Acceder a valores de array

console.log(numeros[4]);

//Conocer  la extension del arreglo

console.log(numeros.length);

//Iterar arreglo

numeros.forEach(function(numero){ //se ejecuta 1 ves por cada elemento del arreglo
   console.log(numero);
});


//Agregar un nuevo elemento al array

numeros[5] = 60; //no tan comun ya que necesitas conocer la extension del arreglo y si existe ya un elemento en esa posicion lo sobreescribe

console.table(numeros);

//metodo push

numeros.push(70); //metodo para agregar un nuevo elemento al final del arreglo
numeros.push(80,90,100); 

console.log(numeros);

//metodo unshift

numeros.unshift(-10,-20-30); //agrega elementos al array al inicio del arreglo


//Eliminar elementos de arerglo

const meses = new Array('Enero','Febrero', 'Marzo', 'Abril', 'Mayo' );

console.log(meses);

console.table(meses);

//Metodo pop

meses.pop(); //elimina el ultimo elemento del array

//Metodo Shift

meses.shift(); //elimina el primer elemento del arreglo

//Metodo slice

const meses2 = new Array('Enero','Febrero', 'Marzo', 'Abril', 'Mayo' );

meses2.slice(2,1); //elimina a partir del indice que le indicamos que es el primer parametro y el segundo le indicamos cuantos elementos


//Rest Operator y Spread Operator 
//se usan para crear un nuevo arreglo con los nuevos datos para no alterar el arreglo actual

const nuevo_arreglo = [...meses2, "Junio"]; //agregamos un nuevo elemento sin necesidad 
                                            //de alterar el actual, es decir, copiamos el array y 
                                            //le agregamos el nuevo valor

console.log(nuevo_arreglo);

const otro_arreglo = ['Julio', ...meses2]; //agrega al inicio el nuevoe lemento al array

console.log(otro_arreglo);

