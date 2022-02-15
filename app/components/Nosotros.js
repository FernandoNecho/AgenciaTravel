/*******************************************************************
 * Componente Nosotros
 * Renderiza la pagina nosotros al consultar en el menu la pestaña nosotros
 * ******************************************************************/
export function Nosotros(){
    const $main = document.createElement("main");
    $main.classList.add("we")
    $main.innerHTML= `
    <!---------------------Main Informacion--------------------------------> 
  
      <h2 class="subtitulo ">Acerca de Nosotros</h2>
  
      <!--Seccion Bio-->
      <section >           
        <article class="we__infoNosotros">
          <h1>Travel</h1>
          <small class="we__infoNosotros--frase">Hacemos posible tu Sueños</small>
        </article>
      </section>
  
    
  
      <article>
        <p class="we__parrafoInfo">
            Travel es una agencia de viajes con más de 25 años brindando servicios turísticos a particulares, familias y empresas.
            Nuestro staff profesional lo está esperando para planear su próximo viaje de placer o negocios.
        </p>
      </article>
  
      <section>
        <div class="cardNos">
          <img src="app/img/nosotros.jpg" class="card-img-top cardNos--picture" alt="Grupo de trabajo">
          <div class="card-body cardNos__presentation">
            <h2 class="card-title cardNos--title">Nuestro Equipo</h2>
            <p class="card-text cardNos__text">
              Creemos que viajar nos transforma, porque nos permite encontrar la mejor versión de nosotros mismos. 
              Por eso, ofrecemos el mejor servicio de atención personalizada para acompañarte ANTES, DURANTE y DESPUÉS de tu viaje. 
            </p>
          </div>
        </div>
      </section>
  
      <article class="valores">
        <div>
          <span><i class="valores__icon fa fa-hands"></i></span>
          <h3>Misión</h3>
          <p>Armar viajes siempre es una tarea placentera. 
              Todo eso se logra con capacitación continua, profesionalismo, compañerismo y, 
              principalmente, con una enorme voluntad de servicio.
          </p>
        </div>
  
        <div>
          <span><i class="valores__icon fa fa-heart"></i></span>
          <h3>valores</h3>
          <p>Felices de trabajar en este rubro tan placentero, agradecidos de clientes que confían en nosotros 
              y proveedores que reciben a nuestros pasajeros dándole lo mejor de sí.
          </p>
        </div>
  
        <div>
          <span><i class="valores__icon fa fa-handshake"></i></span>
          <h3>Por que Contratarnos</h3>
          <p>Nuestro único interés son nuestros clientes, queremos una experiencia satisfactoria para todos 
              para si algún día vuelves a viajar, vuelvas a contratarnos
          </p>
        </div>
              
      </article>
    
    `;

    return $main;
}