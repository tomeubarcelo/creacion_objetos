//creacion de 3 objetos reales con propiedades y métodos

var equipo = {
    //propiedades del objeto equipo
    nombre: 'RCD Mallorca',
    liga: '1a división',
    fundacion: 1916,
    capitan: 'Xisco Campos',
    //metodo
    detalles: function() {
        console.log('El equipo es ' + this.nombre + ', actualmente juega en ' + this.liga + '. Se fundó en ' +
            this.fundacion + ' y su actual capitán es ' + this.capitan);
    }
}
equipo.detalles();

var persona = {
    nombre: 'Tomeu Barceló',
    edad: 24,
    ciudad: 'Palma',
    cod_postal: '07010',
    detalles: function() {
        console.log('Mi nombre es ' + this.nombre + '. Tengo ' + this.edad + ' y vivo en ' + this.ciudad +
            ' con código postal ' + this.cod_postal);
    }
}
persona.detalles();

var montanya = {
    nombre: 'Puig Major',
    altitud_metros: 1445,
    cordillera: 'Serra de Tramuntana',
    municipio: 'Escorca',
    detalles: function() {
        console.log('La montaña más alta de Mallorca es el ' + montanya.nombre + ' con ' + montanya.altitud_metros +
            ' metros. Se ubica en el municipio de ' + montanya.municipio + ' dentro de la ' + montanya.cordillera);
    }
}
montanya.detalles();