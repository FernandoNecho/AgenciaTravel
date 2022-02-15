/*********************************************************
 * *************Componente Post***************************
 * se carga en la app, 
 * es el componente donde se renderizan todas las consultas
 *******************************************************/
export function Post(){
    const $posts = document.createElement("section");
    $posts.id= "posts";
    $posts.classList.add("promo");
    return $posts;
}