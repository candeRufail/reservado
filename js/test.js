
var expect = chai.expect; 
//testea la funcion reservar horario.

describe('Test reservar horarios.', function(){
    it('Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo..',function(){
        var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        var reserva  = restaurant.horarios.length;
        restaurant.reservarHorario("15:30");
        expect(restaurant.horarios.length).to.equal(reserva - 1);
    })

    it('el arreglo se mantenga igual, exactamente con los mismos elementos.cuando reservo un horario que el restaurant no posee',function(){
        var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        var reserva = restaurant.horarios.length;
        restaurant.reservarHorario("16:00");
        expect(restaurant.horarios.length).to.equal(reserva);
    })

    it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.',function(){
        var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        var reserva = restaurant.horarios.length;
        restaurant.reservarHorario();
        expect(restaurant.horarios.length).to.equal(reserva);
    })
})



//testea la funcion obtener puntuacion

describe('Test obtener puntuacion', function(){
    it('la puntuacion, que es el pormedio de la calificaciones se calcula correcto.',function(){
        var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        expect(restaurant.obtenerPuntuacion()).to.equal(7.4);
    })

    it('Dado un restaurante que no tiene calificacion la puntuacion es igual a 0',function(){
        var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", []);
        expect(restaurant.obtenerPuntuacion()).to.equal(0);
    })
})


//Testeá la función calificar

describe('Test función calificar', function(){
    it('determina si la calificacion es un numero',function(){
        var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5, 4]);
        var calificacion  = restaurant.calificaciones.length;
        restaurant.calificar(4);
        expect(restaurant.calificaciones.length).to.equal(calificacion + 1);
    })
})


//Test función buscarRestaurante(id)

describe('Test función buscarRestaurante(id)', function () {
    it('determina si el restaurant buscado es el correcto', function () {
        expect(listado.buscarRestaurante(1).nombre).to.equal("TAO Uptown");
    })
})


//testea la función obtenerRestaurantes()para verificar su funcionamiento. 
describe('Testeá la función obtenerRestaurantes', function () {
    it('determina si los restaurant filtrados por su ubicacion y hora son  correctos', function () {
        var obtenerRestaurantes = listado.obtenerRestaurantes("Asiática", "Nueva York","18:00");
        expect(obtenerRestaurantes.length).to.equal(1);
    })
})

describe('Testeá la función obtenerRestaurantes', function () {
    it('determina si los restaurant filtrados por su tipo de comida son  correctos', function () {
        var obtenerRestaurantes = listado.obtenerRestaurantes("Hamburguesa",null,null);
        expect(obtenerRestaurantes.length).to.equal(4);
    })
})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// TDD   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//un restaurante testea correctamente su precio base/////////////
describe('Testeá el precio base', function () {
    it('determina si el precio es correcto', function () {
        var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        expect(reserva1.precioBase()).to.equal(2800);
    })
})

//un restaurante testea correctamente su precio final//////////
describe('Testeá el precio final', function () {
    it('determina si el precio es correcto', function () {
        var reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200")
        expect(reserva2.precioFinal()).to.equal(100);
    })
})



