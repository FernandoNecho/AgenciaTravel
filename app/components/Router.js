/*******************************************************************************
 * **********Componente Router**************************************************
 * Detecta los cambio en la url (hash) y va cambiando las vistas dinamicamente.
 * los cambios se renderizan en el componente Post
 *******************************************************************************/

import { ajax } from "../helpers/ajax.js";
import { PostCard } from "../components/PostCard.js";
import { Promo } from "./Promo.js";
import { Nosotros } from "./Nosotros.js";
import { formCompra } from "./FormCompra.js";
import { Contacto } from "./Contacto.js";
import { Previaje } from "./Previaje.js";
import { asideMenu } from "./asideMenu.js";
import { Slider } from "./Slider.js";
import { Acordeon } from "./Acordeon.js";
import { listCard } from "./listCard.js";
import { Validate } from "../helpers/validateForm.js";
import { Facturacion } from "../helpers/Facturacion.js";




export async function Router(){
    let{hash}= location;

    const $root = document.getElementById("root");
    
    const $posts =document.getElementById("posts");
    $posts.innerHTML=null;

    if(!hash||hash==="#/"){
        //si estoy en el index, renderizo los componentes
       $root.insertAdjacentElement("beforeend", Slider());
       $root.insertAdjacentElement("afterbegin", Acordeon());
      
       //muestro todas las promociones
       await ajax({
            url: "app/helpers/db.json",
            cbSuccess:(posts)=>{            
                let html ="";
                posts.forEach(post => html+=PostCard(post));            
                $posts.innerHTML = html;
            }
        });


    }
    else if(hash==="#/promociones" || hash.includes("#/idPackage")){
        const $div = document.createElement("div");
        $div.id= "gridPromo";
        $root.appendChild($div);
        $div.insertAdjacentElement("afterbegin", asideMenu());
        
        const $h3= document.createElement("h3");
        $h3.classList.add("mt-2","mainPromo--titlePromo");
        
        $h3.textContent=(`${localStorage.getItem("PostName") ||"vuelos"}`.toUpperCase());
        $div.insertAdjacentElement("beforebegin", $h3);
        $div.appendChild($posts);
        $posts.classList.replace("promo","mainPromo");
       
        //data atribute que guarda en el storage el valor del boton que se hizo
        //click en el menu Aside 
        let postName = localStorage.getItem("PostName") ||"vuelos";
        
        /*objeto con los distintos idPackage que trae el json.
        *filtra segun se hizo click en el menu del componente asideMenu
        */
        const Packages = {
            vuelos: 1,
            paquetes: 2,
            destinos: 3,
            traslados: 4,
            hoteles: 5,
        }

        //Variable para guardar idpackage que coincide.
        let idPackage;

        //recorro el objeto y comparo quien llamo (Vuelos, paquetes, ...)
        for (const key in Packages) {
            if (key===postName) {
                idPackage = Packages[key];
            }         
        }
        
        //consulto a la base de datos db.json y renderizo en pantalla segun se filtro 
        await ajax({
            url: "app/helpers/db.json",
            cbSuccess:(posts)=>{            
                let html ="";
                posts.forEach(post => {
                    if(post.idPackage===idPackage)
                    html+=listCard(post)
                });            
                $posts.innerHTML = html;
            }
        });       
    }
    
    else if(hash==="#/nosotros"){  
        //renderizo el componente nosotros del menu principal    
        $posts.appendChild(Nosotros());
    }

    else if(hash==="#/argentina"){      
        //renderizo el componente Previaje
        $root.insertAdjacentElement("beforeend",Previaje());
        
        //consulto a la base de datos db.json y renderizo en pantalla por idPackage (idPackage=6 trae solo las card de argentina)
        await ajax({
            url: "app/helpers/db.json",
            cbSuccess:(posts)=>{            
                let html ="";
                posts.forEach(post => {
                    if(post.idPackage===6)
                    html+=PostCard(post)
                });            
                $posts.innerHTML = html;
            }
        });       
    }

    else if(hash==="#/contacto"){     
        //renderizo el componente contacto del menu principal  
        $posts.appendChild(Contacto());
        //llamo a la funcion validate para validar el formulario
        Validate();
    }

    else if(hash==="#/comprar"){   
        $posts.classList.replace("promo","promoComprar");  
        //Al hacer click en comprar, renderiza el formulario de compra con la informacion de la promocion.
        await ajax({
            url: "app/helpers/db.json",
            cbSuccess: (posts)=>{              
                $posts.appendChild(formCompra(posts))                
            }  
        });
        //valido el formulario
        Validate();
        //Componente que se encarga de calcular las cuotas y precios, y envia mensaje final en caso de realizarse la compra.
        Facturacion();
        
    }else{
             
        await ajax({
            url: "app/helpers/db.json",
            cbSuccess: (posts)=>{            
                let html ="";  
                html=Promo(posts);
                $posts.innerHTML = html;
                
            }
    
        });
    }

    document.querySelector(".loader").style.display = "none"; 
}