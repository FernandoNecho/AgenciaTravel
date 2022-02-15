/*****************************************
 * Componente loader
 * se muestra cada vez que se consulta a la db.json,
 *  y se espera por la respuesta
 ************************************/
export function Loader(){
    const $imgLoader = document.createElement("img");
    $imgLoader.src = "app/assets/loader.svg";
    $imgLoader.alt= "Cargando...";
    $imgLoader.classList.add("loader");

    return $imgLoader;
}