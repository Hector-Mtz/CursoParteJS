//Metodos de propiedad

const reproductor = {
    reproducir: function(id)
    {
       console.log(`Reproduciendo cancion: ${id}`);
    },

    pausar: function(){
        console.log("Pausando...")
    },

    crearPlayList: function(nombre){
       console.log(`Creando PlayList ${nombre}.`)
    },

    reproducirPlayList: function(nombre){
      console.log(`Reproduciendo Playlist ${nombre}`)
    }
}

reproductor.reproducir(3840);
reproductor.pausar();   

reproductor.borrarCancion = function(id){
    console.log(`Eliminando cancion ${id}`)
}

reproductor.borrarCancion(3840);

reproductor.crearPlayList("Heavy Metal")

reproductor.reproducirPlayList("Heavy Metal");