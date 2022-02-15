/*******************************************************************************
 * ****************Componente formCompra****************************************
 * Al hacer click en el boton comprar en cualquier promocion,
 * se renderiza el formulario para terminar de realizar la compra
 * Calcula las cuotas y usa el componente validate() para validar el formulario
 *******************************************************************************/
export function formCompra(props){

    let postId= JSON.parse( localStorage.getItem("PostId"));
    let post = props.filter(post=>post.id===postId);
    let{site, imgPath, alt, description,price, airPrice, hotelPrice}= post[0];

    const promo = JSON.stringify(post[0]);
    localStorage.setItem("Promo", promo);
    
    const $buyModal = document.createElement("div");
    $buyModal.id= "buyModal";
    $buyModal.innerHTML = `    

        <div class="buyModal__contenido">
            <h2 >Hagamoslo!!</h2>

            <div id="viaje">
                <h3 id="${site}">${site}</h3>
                <figure>
                    <div class="figureForm">
                        <img src="${imgPath}" alt="${alt}">
                    </div>
                    <figcaption>
                        <p id="descripcion">${description}</p>
                        <b class="price">$${price}</b>
                    </figCaption>
                </figure>
            </div>
            <br>
            <form action="./page404.html" method="get" class="buyModal__frmComprar" id="formulario">

                <legend>Calcula el precio de tus Cuotas</legend>
                <fieldset class="buyModal__frmCuotas" id="render">
                    <label for="cuotas">Cuotas:</label>
                    <select name="number" id="cuotas" >
                        <option value="1"> 1</option>
                        <option value="3" selected>3</option>
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option value="12">12</option>
                    </select>
                    <label for="pasajeros">Pasajeros:</label>
                    <input type="number" id="pasajeros" placeholder="cantidad de personas" name="passenger" title="solo numeros" pattern=".{1,3}$" required>
                    <input type="button" value="Calcular x Cuotas " id="btnCalcular" class="btn btn-dark">
                </fieldset>
                    
                <div id="priceCuotas"></div>

                <fieldset class="buyModal__frmCard">
                    <legend>Titular de la Reserva</legend>
                    <label for="firstName">Nombre</label>
                    <input type="text" id="firstName" placeholder="Nombre" name="first-Name" title="Nombre debe contener solo letras " pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+.{1,15}(.[^0-9])$" required>
                    <label for="lastName">Apellido</label>
                    <input type="text" id="lastName" placeholder="Apellido" name="last-Name" title="Apellido debe contener solo letras" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+.{1,15}(.[^0-9])$" required>
                    <label for="email">Correo Electronico</label>
                    <input type="text" id="email" placeholder="@email" name="Email" title = "Formato  de Email Incorrecto" pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required><br>
                </fieldset>
            
                <fieldset class="buyModal__frmCard">
                    <legend>Datos de la tarjeta</legend>
                    <label for="numberCredit">Numero de Tarjeta</label>
                    <input type="number" id="numberCredit" name="Credit" title = "Ingrese solo digitos numericos(16)" pattern=".{12}$" required>
                    <label for="own">Titular</label>
                    <input type="text" id="own" placeholder="Como figura en la tarjeta" name="titular" title = "Solo Letras - Como figura en la tarjeta" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
                    <label for="expiration">Vencimiento</label>
                    <input type="date" name="" id="expiration" name="Expiration" required>
                    <label for="cod">Cod. Seguridad</label>
                    <input type="text" id="cod" placeholder="xyz" name="codigo" pattern=".{3}$" required title= "El codigo Consta de 3 digitos"><br>
                </fieldset>
                        
                        
                <div class="buyModal__price">
                    <span id="price"> </span><br>
                    <div class="buyModal__price--btnModal">
                    <input type="submit" value="Comprar" id="comprar" class="btn btn-dark">
                    <input type="reset" value="Reset" class="btn btn-dark">
                    </div>
                </div>  
            </form>
        
        </div>
    `;
     return $buyModal;
}