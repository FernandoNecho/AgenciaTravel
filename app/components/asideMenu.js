/****************************************************
 * Componente asideMenu -se carga en #/promociones
 * usa un data-name para cargar las card en pantalla 
 * segun corresponda la categoria
 **************************************************** */ 
export function asideMenu(){

    document.addEventListener("click", (e)=>{
        if(!e.target.matches(".asideMenu a")) return false;
        localStorage.setItem("PostName", e.target.dataset.name);
    });

    const $aside = document.createElement("aside");
    $aside.id = "gridAside";
    $aside.innerHTML= `

        <!---------ASIDE BAR-------------->
        
        <nav class="asideMenu">
            <ul class="asideMenu__subMenu">
                <li><a href="#/idPackage-1" data-name="vuelos"><i class=" fa fa-plane-departure"></i> Vuelos</a></li>
                <li><a href="#/idPackage-2" data-name="paquetes"><i class="fa fa-suitcase-rolling" ></i> Paquetes</a></li>
                <li><a href="#/idPackage-3" data-name="destinos"><i class="fa fa-globe" ></i> Destinos</a></li>
                <li><a href="#/idPackage-4" data-name="traslados"><i class="fa fa-car-bus" ></i>Traslados</a></li>
                <li><a href="#/idPackage-5" data-name="hoteles"><i class="fa fa-bed" ></i> Hoteles</a></li>
            </ul>
        </nav>

    `;
  return $aside;
}