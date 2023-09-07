let tiempo_restante = 3600;


function timer(){
    var seg = tiempo_restante % 60;
    seg = (seg < 10 )? "0" + seg : seg

    var min = Math.floor((tiempo_restante/60) % 60);
    min = (min < 10 )? "0" + min : min

    var hrs = Math.floor(tiempo_restante / 3600);
    hrs = (hrs < 10 )? "0" + hrs : hrs

    if(tiempo_restante > 0){
        document.getElementById("segundos").innerHTML = "hrs: " + hrs + " min: " + min + " seg: " + seg;
        tiempo_restante--;
    }
}
const intervalo = setInterval(timer, 1000);

timer();