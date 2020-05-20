var Reserva = function (horario, cantidadDePersonas, precioPorPersona, codigoDeDescuento) {
    this.horario = horario;
    this.cantidadDePersonas = cantidadDePersonas;
    this.precioPorPersona = precioPorPersona;
    this.codigoDeDescuento = codigoDeDescuento;
}

// funcionalidad q calcula precio base de una reserva 

Reserva.prototype.precioBase = function () {
    return this.cantidadDePersonas * this.precioPorPersona;
}

// funcionalidad que calcula precio total de la reserva

Reserva.prototype.precioFinal = function () {
    var precioBase = this.precioBase();
    var adicional = this.adicional();
   
    
    var descuento = this.descuento();

    return precioBase + adicional - descuento;
}

// funcionalidad que calcula el descuento de la reserva
Reserva.prototype.descuento = function () {
    console.log (this.descuentoPorCodigo());
    return this.descuentoPorCodigo() + this.descuentoPorGrupo();

}


// funcionalidad que calcula el descuento por cantidad de personas (grupos)
Reserva.prototype.descuentoPorGrupo = function () {
    var descuento1 = 0;
    if (this.cantidadDePersonas >= 4 && this.cantidadDePersonas <= 6) {
        descuento1 = this.precioBase * 5 / 100;
    }
    if (this.cantidadDePersonas >= 7 && this.cantidadDePersonas <= 8) {
        descuento1 = this.precioBase * 10 / 100;
    }
    if (this.cantidadDePersonas > 8) {
        descuento1 = this.precioBase * 15 / 100;
    }
    return descuento1;

}

// calcula el descuento correspondiente segun el codigo
Reserva.prototype.descuentoPorCodigo = function () {
    var descuento2 = 0;
    if (this.codigoDeDescuento === "DES15") {
        descuento2 = this.precioBase * 15 / 100;
    }
    if (this.codigoDeDescuento === "DES200") {
        descuento2 = 200;
    }
    if (this.codigoDeDescuento === "DES1") {
        descuento2 =  this.precioPorPersona;
    }
    return descuento2;
}


// funcionalidad que calcula los adicionales que se suman a la reserva por horarios  y por dias de finde
Reserva.prototype.adicional = function () {
    return this.adicionalPorHorario() + this.adicionalPorFinde();
}

Reserva.prototype.adicionalPorHorario = function () {
    var adicional1 = 0;
    var horaPico = this.horario.getHours();
    if (horaPico >= 13 && horaPico <= 14 || horaPico >= 20 && horaPico <= 21) {
        return this.precioBase * 5 / 100;
    }
    return adicional1;
}

Reserva.prototype.adicionalPorFinde = function () {
    var adicional2 = 0;
    var diaFinde = this.horario.getDay();
    if (diaFinde === 5 || diaFinde === 6 || diaFinde === 0) {
        return this.precioBase * 10 / 100;
    }
    return adicional2;
}
