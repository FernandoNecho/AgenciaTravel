/********************************************************************************
 * Componente APP
 * selecciona la etiqueta root en el index.html
 * agrega los componentes post(), donde se renderiza todo el contenido dinamico
 * agrega el componente load() que muestra una imagen load mientras espera la 
 * respuesta 
 * y agrega el componente Router que maneja el cambio en la url 
 *********************************************************************************/
import { Loader } from "./components/Loader.js";
import { Post } from "./components/Post.js";
import { Router } from "./components/Router.js";

export function App(){
    const $root = document.getElementById("root");
    $root.innerHTML= null;
   
    $root.appendChild(Post());
    $root.appendChild(Loader());
    
    Router();
    
}