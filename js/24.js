//Loops

//For Loop (un for loop va a ir ejecutando un codigo mientras una condicion sea evaluada como verdadera)
//y se deja de ejecutar cuando se deja de cumplir esa condicion
console.log("---FOR---");
for(let i = 1; i<=10 ; i++ ){ //declaramos un indice que comienza en 0, lo siguiente es evaluar una condicion que sea 
                  //verdadera, mientras sea asi se hara el loop tantas veces como se indice y la parte del ++ es
                  //lo que hara el loop, es decir, sumara 1 mientras sea menor a 10 despues de ejecutar
                  //el codigo dentro del loop
  if(i % 2 === 0 ){  //evaluamos una condicion por cada iterada del loop
    console.log(`El numero ${i} es PAR`); //imprime el valor de i   
  }
  else{
    console.log(`El numero ${i} es IMPAR`); 
  }  
}

/*
console.log("---RECORRER CARRITO CON FOR---");
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


for(let e=0; e<=carrito.length;e++){
  console.log(carrito[e]);
}
*/

//While Loop (se ejecuta cuando una condicion sea evaluada como verdadera)
console.log("---WHILE---");
let f=0;

while (f<= 10) { //ejecutamos la condicion primero antes de ejecutar el codigo dentro del loop
                 //si es que sese cumple, sino, no lo ejecuta

  if(f % 2 === 0){ 
    console.log(`El numero ${f} es PAR`);
  }
  else{
    console.log(`El numero ${f} es IMPAR`)
  }

}


//Do while (Ejecuta al menos una vez el codigo antes de evaluar)
console.log("---DO WHILE---");

let g=0;

do{
  console.log(g);

  g++;
} while(g <10);