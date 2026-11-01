function dayOfTheWeek(params) {
    const dayInNumber = new Date(params);
    const day1 = dayInNumber.getDay();
    const mymonth = params.slice(5, 7)
    var month = "";
    const diaEnNumero = params.slice(-2);

    //cálculo mes del año
    if (mymonth == "01") {
        month = "XANEIRO"
    }
    else if (mymonth == "02") {
        month = "FEBREIRO"
    }
    else if (mymonth == "03") {
        month = "MARZO"
    }
    else if (mymonth == "04") {
        month = "ABRIL"
    }
    else if (mymonth == "05") {
        month = "MAIO"
    }
    else if (mymonth == "06") {
        month = "XUÑO"
    }
    else if (mymonth == "07") {
        month = "XULLO"
    }
    else if (mymonth == "08") {
        month = "AGOSTO"
    }
    else if (mymonth == "09") {
        month = "SETEMBRO"
    }
    else if (mymonth == "10") {
        month = "OUTUBRO"
    }
    else if (mymonth == "11") {
        month = "NOVEMBRO"
    }
    else if (mymonth == "12") {
        month = "DECEMBRO"
    }

    // calcular día de la semana en base a la fecha escogida
    var diaTexto = "";

    if (day1 == 0) {
        diaTexto = "DOMINGO" + ",         " + diaEnNumero + " DE " + month
    }
    else if (day1 == 1) {
        diaTexto = "LUNS" + ",         " + diaEnNumero + " DE " + month
    }
    else if (day1 == 2) {
        diaTexto = "MARTES" + ",         " + diaEnNumero + " DE " + month
    }
    else if (day1 == 3) {
        diaTexto = "MÉRCORES" + ",         " + diaEnNumero + " DE " + month
    }
    else if (day1 == 4) {
        diaTexto = "XOVES" + ",         " + diaEnNumero + " DE " + month
    }
    else if (day1 == 5) {
        diaTexto = "VENRES" + ",         " + diaEnNumero + " DE " + month
    }
    else if (day1 == 6) {
        diaTexto = "SÁBADO" + ", " + diaEnNumero + " DE " + month
    }

    document.getElementById("daytodisplay").innerHTML =
        `<div class="fecha-wrapper">
            <img src="../img/extras/calendar-days-regular-full.png" alt="" class="icono-fecha">
            <span class="fecha-texto">${diaTexto}</span>
         </div>`;
}