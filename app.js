function leftTabs (){
    var actionElement = document.querySelector('#myTab a[href="#profile"]')
    bootstrap.Tab.getInstance(actionElement).show;
}


var boton = document.getElementById("miBoton");

  // Agrega un evento de clic al botón
  boton.addEventListener("click", function() {
    // La función que se ejecutará cuando se haga clic en el botón
    alert("¡Hola, mundo!");
  });