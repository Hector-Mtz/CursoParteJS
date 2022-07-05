//Estructuras de control

const puntaje = 1000; //asignamos el valor (puede ser string o number)

if(puntaje==1000)  //el == es para comparar, pero no importa el tipo de dato, con === revisa el valor y el tipo de dato
{
  console.log("El puntaje es 1000");
}
else{
    console.log("No es igual a 1000")
}



const efectivo = 1000;

const carrito = 800;

if(efectivo >= carrito){
   console.log("El usuario puede pagar");
}
else{
   console.log("Fondos insuficientes");
}


const rol = "ADMIN";


if(rol === "ADMIN"){    //revisamos primera condicion
    console.log("Acceso a todoel sistema");
}
else if(rol === "EDITOR"){ //revisamos una segunda condicion
   console.log("Eres editor puedes entrar pero no puedes hacer mucho");
}
else {//sino se cumplen las 2 anteriores cae en este resultado
    console.log("No tienes acceso");
}