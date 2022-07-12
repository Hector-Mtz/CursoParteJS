//this ayuda a redireccionar o a conocer valores dentro de un mismo objeto
//(como si buscarqa las cosas sobre si mismo)
//No es recomendable usar arrow function ya que cuando ejecute la funcion hara referencia a window
//No al objeto, en este caso es mejor usar function

const reservacion = {
    nombre:'Juan',
    apellido:'De La Torre',
    total: 5000,
    pagado:false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y la cantidad a pagar es de $${this.total}`);
    }
};

reservacion.informacion();