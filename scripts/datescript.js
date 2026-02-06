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
    if (day1 == 0) {
        document.getElementById("daytodisplay").innerHTML = "DOMINGO" + "  ,         " + diaEnNumero + " DE " + month
    }
    else if (day1 == 1) {
        document.getElementById("daytodisplay").innerHTML = "LUNS" + "  ,         " + diaEnNumero + " DE " + month
    }
    else if (day1 == 2) {
        document.getElementById("daytodisplay").innerHTML = "MARTES" + "  ,         " + diaEnNumero + " DE " + month
    }
    else if (day1 == 3) { 
        document.getElementById("daytodisplay").innerHTML = "MÉRCORES"  + "  ,         " + diaEnNumero + " DE " + month
    }
    else if (day1 == 4) {
        document.getElementById("daytodisplay").innerHTML = "XOVES" + "  ,         " + diaEnNumero + " DE " + month
    }
    else if (day1 == 5) {
        document.getElementById("daytodisplay").innerHTML = "VENRES" + "  ,         " + diaEnNumero + " DE " + month
    }
    else if (day1 == 6) {
        document.getElementById("daytodisplay").innerHTML = "SÁBADO" + ", " + diaEnNumero + " DE " + month
    }
    ;

    
    
}