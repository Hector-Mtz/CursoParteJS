//Funciones y funciones personalizadas

//Declaracion de funcion (se puede mandar a llamar donde sea incluso antes de declarar la funcion)

function sumar () //entre parentesis van los argumentos de la funcion
{
   console.log(10+10);
}

sumar();

//Expresion de la funcion (no se puede llamar donde sea, se tiene que declara antes de llamar)

const sumar2 = function()
{
  console.log(3+3);
}

sumar2();

//IIFE son funciones que se invocan ellas mismas (no tan recomendables), pero son utiles para proteger
//el mezclado de variables entre archivos o del mismo archivo

(function(){
    console.log("esto es una funcion"); 
})();