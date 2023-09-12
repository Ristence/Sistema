


  function ingresar(nombre_ingreso){
    const listaOrdenes = document.getElementById("listaOrdenes");
    const nuevoAlgo = document.createElement("li");
    nuevoAlgo.textContent = nombre_ingreso;
    listaOrdenes.appendChild(nuevoAlgo);
    
  }
  
  const formulario = document.getElementById("formIngresar");
  formulario.addEventListener("submit", 
    function(event){
      alert("¡Hola, mundo!");
      const nombre_ingreso = document.getElementById("nombre_O").value;
      ingresar(nombre_ingreso);
      document.getElementById("nombre_O").value = "";
      
    });
