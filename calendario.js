console.log("Hola");

/*
Defina objetos similares para los otros meses. 
Para renderizar la tabla de un mes basta saber 
cual es el día de semana inicial, y cuántos días tiene el mes.
*/


var Enero = {"firstWeekDay": 6,"days": 31, "name": "Enero", "eventos": eventosEnero=[]};
var Febrero = {"firstWeekDay": 2, "days": 28, "name": "Febrero","eventos": eventosFebrero = []};
var Marzo = {"firstWeekDay": 2, "days": 31, "name": "Marzo", "eventos": eventosMarzo=[]};
var Abril = {"firstWeekDay": 5, "days": 30, "name": "Abril", "eventos": eventosAbril=[]};
var Mayo = {"firstWeekDay": 0, "days": 31, "name": "Mayo", "eventos": eventosMayo=[]};
var Junio = {"firstWeekDay": 3, "days": 30, "name": "Junio", "eventos": eventosJunio=[]};
var Julio = {"firstWeekDay": 5, "days": 31, "name": "Julio", "eventos": eventosJulio=[]};
var Agosto = {"firstWeekDay": 1, "days": 31, "name": "Agosto", "eventos": eventosAgosto=[]};
var Septiembre = {"firstWeekDay": 4, "days": 30, "name": "Septiembre", "eventos": eventosSeptiembre=[]};
var Octubre = {"firstWeekDay": 6, "days": 30, "name": "Octubre", "eventos": eventosOctubre=[]}
var Noviembre = {"firstWeekDay": 2, "days": 30, "name": "Noviembre", "eventos": eventosNoviembre=[]}
var Diciembre = {"firstWeekDay": 4, "days": 31, "name": "Diciembre", "eventos": eventosDiciembre=[]}



function addEventToDay(month, day) {
    console.log(month + " " + day);
    var eventText = window.prompt("Ingrese texto del evento: ");

    /* El chequeo de eventText es obligatorio */
    if(eventText) {
	getMonth(month).eventos[day] = eventText;
    }

    renderSelectedMonth(month);
}

function removeEventToDay(month, day){
    getMonth(month).eventos[day]=null;
    renderSelectedMonth(month);
}
		    
function getHTMLForMonthDay(month, day) {
    var dayId = day;
    var dayHTML = "<td id=\"" + dayId + "\" >";
   // dayHTML += "onclick=\"addEventToDay(" + month + "," + day + ")\">";
    dayHTML += "<input type='button' onclick= addEventToDay("+ month +"," + day +")  value='agregar Evento'>";
    dayHTML += "<input type='button' onclick= removeEventToDay("+ month +"," + day +")  value='Borrar Evento'>";
    dayHTML += "<br>" +day;

    if(getMonth(month).eventos[day]) {
	dayHTML += "<hr/>";
	dayHTML += getMonth(month).eventos[day];
    }
	
    dayHTML += "</td>";
    return dayHTML;
}


function getHTMLForMonthTable(selectedMonth) {
    /*
     El valor de weekDayIdx debe cambiar
     si el primer dia del mes  no es lunes
    */
    var weekDayIdx = getMonth(selectedMonth).firstWeekDay;
    var newHTML = "";
    var newSemanaHTML = "";

    for(var y = 1; y <= getMonth(selectedMonth).firstWeekDay; y++){
        newSemanaHTML +="<td></td>";
    }
    
    for(var i = 1; i <= getMonth(selectedMonth).days; i++) {
        if(weekDayIdx == 0) {
            newSemanaHTML += "<tr>";
        }
        
        //newSemanaHTML +="<td></td>";

        newSemanaHTML += getHTMLForMonthDay(selectedMonth, i);

        if(weekDayIdx == 6 || (i + 1) > getMonth(selectedMonth).days) {
            newSemanaHTML += "</tr>";
            newHTML += newSemanaHTML;
            newSemanaHTML = "";
        }
        
        weekDayIdx = (weekDayIdx + 1) % 7;	
    }

    return newHTML;
}



function getMonthName(month) {
    switch(parseInt(month)) {
    case 0: return Enero.name;
    case 1: return Febrero.name;
    case 2: return Marzo.name;
    case 3: return Abril.name;
    case 4: return Mayo.name;
    case 5: return Junio.name;
    case 6: return Julio.name;
    case 7: return Agosto.name;
    case 8: return Septiembre.name;
    case 9: return Octubre.name;
    case 10: return Noviembre.name;
    case 11: return Diciembre.name;
    }

    throw new Error("No existe mes con indice: " + month);
}

function getMonth(month) {
    switch(parseInt(month)) {
    case 0: return Enero;
    case 1: return Febrero;
    case 2: return Marzo;
    case 3: return Abril;
    case 4: return Mayo;
    case 5: return Junio;
    case 6: return Julio;
    case 7: return Agosto;
    case 8: return Septiembre;
    case 9: return Octubre;
    case 10: return Noviembre;
    case 11: return Diciembre;
    }
    throw new Error("No existe mes con indice: " + month);
}

function renderSelectedMonth(selectedMonth) {
    console.log(selectedMonth);

    var monthName = getMonthName(selectedMonth);
    console.log(monthName);

    // Ver: http://stackoverflow.com/questions/13775519/html-draw-table-using-innerhtml
    var newHTML = "";
    newHTML += "<h1>Mes: " + monthName + "</h1>";
    //newHTML += "<input type='button' onclick= removeEventToDay("+ selectedMonth +")  value='Borrar Evento'>";
    //newHTML += '<input type="button" onclick="removeEventToDay("selectedMonth")" value="Borrar Evento">';
    //dayHTML += "onclick=\"addEventToDay(" + month + "," + day + ")\">";
    newHTML += "<table>";    
    newHTML += "<tr>";
    newHTML += "<th>Lunes</th>";
    newHTML += "<th>Martes</th>";
    newHTML += "<th>Miercoles</th>";
    newHTML += "<th>Jueves</th>";
    newHTML += "<th>Viernes</th>";
    newHTML += "<th>Sabado</th>";
    newHTML += "<th>Domingo</th>";
    newHTML += "</tr>";

    /*
    Aqui usted debe renderizar la tabla con los dias del mes
    Utilice la información en el objeto 'diasMayo' o el que
    corresponda según el mes seleccionado.

    A modo de demostración, el siguiente código renderiza
    la tabla con el mes de Mayo.
    */

    newHTML += getHTMLForMonthTable(selectedMonth);

    /* Fin de la tabla */
    newHTML += "</table>";

    /* Actualizamos el innerHTML del div currentMonth */
    var monthDiv = document.getElementById("currentMonth");    
    monthDiv.innerHTML = newHTML;
}
