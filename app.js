const ordenesDeTrabajo = [
    { titulo1: 'Orden 1', titulo2: 'Orden 2', contenido: 'Contenido de la Orden 1' },
    { titulo: 'Orden 2', contenido: 'Contenido de la Orden 2' },
    { titulo: 'Orden 1', contenido: 'Contenido de la Orden 1' },
    { titulo: 'Orden 2', contenido: 'Contenido de la Orden 2' },
    { titulo: 'Orden 1', contenido: 'Contenido de la Orden 1' },
    { titulo: 'Orden 2', contenido: 'Contenido de la Orden 2' },
    { titulo: 'Orden 1', contenido: 'Contenido de la Orden 1' },
    
    
    // Agrega más órdenes 
  ];
  
  // Función para crear acordeones en función de las órdenes de trabajo
  function crearAcordeones() {
    const acordeonContainer = document.getElementById('acordeonContainer');
  
    ordenesDeTrabajo.forEach((orden, index) => {
      const acordeon = document.createElement('div');
      acordeon.className = 'accordion';
  
      acordeon.innerHTML = `

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css">
      
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                
            <div class="col">

                <div class="row">
                ${orden.titulo1}
                </div> 

                <div class="row">
                ${orden.titulo2}
                </div>

            </div> 
            <div class="col">

                <div class="row">
                ${orden.titulo1}
                </div> 

                <div class="row">
                ${orden.titulo2}
                </div>
                

            </div> 

            <div class="col">

                <div class="row">
                ${orden.titulo1}
                </div> 

                <div class="row">
                ${orden.titulo2}
                </div>
                

            </div>

            <div class="col">

                <div class="row">
                ${orden.titulo1}
                </div> 

                <div class="row">
                ${orden.titulo2}
                </div>
                

            </div>
              
            
            
            </button>
          </h2>
          <div id="collapse${index}" class="accordion-collapse collapse show" data-bs-parent="#acordeonContainer">
            <div class="accordion-body">
              ${orden.contenido}
            </div>
          </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js" integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa" crossorigin="anonymous"></script>
    
      `;
  
      acordeonContainer.appendChild(acordeon);
    });
  }

  window.onload = crearAcordeones;