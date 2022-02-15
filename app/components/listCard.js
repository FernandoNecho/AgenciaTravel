/*********************************************************
 ******************** Componente ListCard*****************
 *Renderiza las distintas promociones por categoria
  (vuelos, paquetes, hoteles,traslados, destinos)
 *segun se selecciona del componente asideMenu
 ******************************************************/
export function listCard(props){
    
    document.addEventListener("click", (e)=>{
        if(!e.target.matches(".mdal")) return false;
        localStorage.setItem("PostId", e.target.dataset.id);
    });
   
   return`
            <div class="card mb-3 mx-auto" style="max-width: 98%;">
                <div class="row g-0">
                    <div class="col-md-4 coverImg">
                        <img src="${props.imgPath}" class="img-fluid rounded-start card__imag" alt="${props.alt}" width="100%">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body mt-0">
                            <h3 class="card-title">${props.site}</h3>
                            <p class="card-text">${props.description}<br>
                                <a href="#/${props.site}?idPackage=2" class="btn btn-danger mdal"  data-id="${props.id}">Saber mas...</a>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </p>   
                        </div>
                    </div>
                </div>
            </div>
           
    `;
       
}
