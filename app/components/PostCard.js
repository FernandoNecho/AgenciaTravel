/*******************************************
 *********** Componente PostCard************
 * Renderiza las card de las promociones
 * Ya sea cuando se hace click en home o en 
 * argentina desde el menu principal
 ******************************************/
export function PostCard(props){
    let{id, imgPath, site, alt,price, description}= props;

    document.addEventListener("click", (e)=>{
        if(!e.target.matches(".post-card a")) return false;
        localStorage.setItem("PostId", e.target.dataset.id);
    });

    return ` 
        <div class="card post-card">
            <img src=${imgPath} class="card-img-top card__imgSize" alt=${alt}>
            
            <div class="card-body card__body">
                <h2 class="card-title card__body--title">${site}</h2>
                <p class="card-text">${description} </p>
                <p><b class="card-price">$${price}</b></p>
                <a href="#/${site}" class="btn card__btnCompra" data-id="${id}">Saber mas...</a>                         
            </div>     
        </div> 
    `;  
}