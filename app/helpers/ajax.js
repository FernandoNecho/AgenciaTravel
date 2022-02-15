/************************************************************
 * Componente que consulta a la base de datos que se le pida
 * en caso de exito llama a una funcion 
 * en caso de error imprime en pantalla el mensaje
 *************************************************************/
export async function ajax(props){
    let {url, cbSuccess}= props;

    await fetch(url)
    .then(res=>res.ok? res.json(): Promise.reject(res))
    .then(json=>cbSuccess(json))
    .catch(err=>{
        let message=err.statusText||"Ocurrio un error";

        document.getElementById("posts").innerHTML=`
        <div class="error">
            <p>Error: ${err.status} - ${message}</p>
        </div>`;

        document.querySelector(".loader").style.display = "none"; 
    });
}