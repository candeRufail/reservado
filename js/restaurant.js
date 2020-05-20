var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}


////////////////////////////////////////////////////////////////////////////////
//Refactorizá la función reservarHorario(horario) utilizando la función filter.
////////////////////////////////////////////////////////////////////////////////

Restaurant.prototype.reservarHorario = function(horarioReservado) {

    this.horarios = this.horarios.filter(elemento => elemento !== horarioReservado)
  
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Modularizá la función obtenerPuntuacion().
//sumatoria(numeros), que reciba un arreglo de numeros y devuelva su sumatoria.
//promedio(numeros), que sume los elementos de un arreglo y luego calcule su promedio. Esta función debe utilizar la función sumatoria(numeros)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Restaurant.prototype.obtenerPuntuacion = function () {
    if (this.calificaciones.length === 0) {
        return 0;
    }
    return promedio(this.calificaciones);
}

function sumatoria(calificaciones) {

    var resultadoSuma = 0;
    for (var i = 0; i < calificaciones.length; i++) {
        resultadoSuma += calificaciones[i];
    }
    return resultadoSuma;
}

function promedio(calificaciones) {
    var promedio = sumatoria(calificaciones) / calificaciones.length;
    return Math.round(promedio * 10) / 10;

}

