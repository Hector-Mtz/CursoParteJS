//Funciones con parametros

//Los parametros se pasan por medio de los parentesis

//Declaracion de funcion (se puede mandar a llamar donde sea incluso antes de declarar la funcion)

//dentro de la funcion se les asigan a los paraetros valores por default
function sumar (numero1 = 0, numero2=0) //entre parentesis van los parametros de la funcion() que serian los numeros
{
   console.log(numero1+numero2);
}

//REUTILIZAMOS LA FUNCION VARIASS VECES
sumar(10,10); //aqui se le pasan los argumentos o valores reales
sumar(3,3);
sumar(3,6);
sumar(1,2);


//Expresion de la funcion (no se puede llamar donde sea, se tiene que declara antes de llamar)

const sumar2 = function()
{
  console.log(3+3);
}

sumar2();