//Tipos de dato

//String
const producto = 'Monitor de 20"';

const producto2 = String('Monitor 30 pulgadas'); //String creado con constructor

const producto3 = new String('Monitor 50 pulgadas'); // string creado como objeto


console.log( typeof producto); // typeof para ver que tipo de dato es
console.log( typeof producto2);
console.log( typeof producto3);

//Funciones
const tweet = 'Aprendiendo JS con el curso de Desarrollo Web Completo';

//Lenght
console.log('Este es el Tweet: '+ tweet);
console.log("Catnidad de caracteres de tweet: " + tweet.length) //metodo lenght para saber la cantidad de caracteres

//IndexOf permite ver en que posicion se encuentra un texto que buscamos

console.log(tweet.indexOf('JS')); //si regresa -1 es que no pudo encontrar el elemento

//Includes retorna true o false dependiendo si encuentra el elemento

console.log(tweet.includes('JS'));