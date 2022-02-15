/***************************************
 * **********Componente slider*********
 * se carga dinamicamente en el Home
 ***************************************/
export function Slider(){
    const $slider = document.createElement("div");
    $slider.classList.add("principal");
    $slider.innerHTML=`
    <!----------------SLIDER CAROUSEL----------------->
    
        <div id="carouselExampleIndicators" class="carousel slide mx-auto" data-bs-ride="carousel">
          <h2 class="subtitulo">Los lugares mas Insolitos</h2>

          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
            
          <div class="carousel-inner">

            <div class="carousel-item active">
              <img src="app/img/playa.jpg" class="d-block w-40" alt="cayo guillermo Cuba">
              <div class="carousel-caption d-none d-md-block bg-dark opacity-75 rounded-pill">
                <h5>Cabo Guillermo</h5>
                <p class="text-center p-3 ">El entorno natural de gran belleza de este precioso cayo ya fue admirado por el propio Ernest Hemingway, 
                  el reconocido premio Nobel de literatura estadounidense que acostumbraba a veranear en Cuba, 
                  especialmente en estos preciosos cayos. </p>
              </div>
            </div>
      
            <div class="carousel-item">
              <img src="app/img/egipto.jpg" class="d-block w-40 " alt="Valle de los reyes Egipto">
              <div class="carousel-caption d-none d-md-block bg-dark opacity-75 rounded-pill">
                <h5>Valle de los Reyes- Egipto</h5>
                <p class="text-center p-3 ">Disfruta una paquete clásico a Egipto muy agradable en El Cairo, Luxor, Aswan y muchas ciudades. 
                    Visitando todos los monumentos en Egipto.</p>
              </div>
            </div>
      
            <div class="carousel-item">
              <img src="app/img/ciudadNY.jpg" class="d-block w-40" alt=" New York Estados Unidos">
              <div class="carousel-caption d-none d-md-block bg-dark opacity-75 rounded-pill">
                <h5>New York</h5>
                <p class="text-center p-3"> La ciudad de los rascacielos ha protagonizado películas y novelas que la han convertido 
                  en el destino soñado para muchos. 
                  Viajar a Nueva York es una experiencia única, ¿a qué esperas para comprobarlo?
                </p>
              </div>
            </div>
          </div>
      
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
      
          <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon " aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      
        </div>

        <h2 class="subtitulo promo__subTitle">Promociones</h2>
    `;
    return $slider;
}