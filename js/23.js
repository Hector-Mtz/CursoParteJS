//Switch

const metodoPago = "Tarjeta";

switch (metodoPago) { //le pasamos al switch lo que vamos a evaluar
    case 'Tarjeta':  //si es igual a tarjeta ejecuta el sig codigo
        console.log("Pagaste con tarjeta");
        break; //indica hasta donde se ejecuta el codigo

    case 'Cheque':
        console.log("El usuario va a pagar con cheque, revisaremos los fondos primero.");
        break;

    case 'Efectivo':
         console.log("Pagaste con efectivo.");
         break;
    
    default:  //se tiene una accion por default si la cualquiera de los case no se cumple
        console.log("Aun no haz apagado");
      break;
}