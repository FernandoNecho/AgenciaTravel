/***********************************************
 * **********Componente PreViaje****************
 * Renderiza en la pestaña argentina la informacion
 **********************************************/
export function Previaje(){
    const $section = document.createElement("section");
    $section.classList.add("previaje");

    $section.innerHTML= `
        <h2 class="subtitulo ">Destinos Argentina</h2>
        <article class="previaje__pres">
            <h4>PREVIAJE</h4>
            <p><strong>Previaje es un programa de preventa turística que te reintegra 
                el 50% del valor de tu viaje en crédito,</strong> 
                para viajar y disfrutar de todos los destinos de Argentina, 
                desde noviembre de 2021 y durante todo el 2022.
            </p>
        </article>

        <section class="info">
            <article class="info__art">
                <img src="app/assets/icon_50porciento.svg" alt="50 porciento" class="info__art--icono">

                <p>Realizá tus compras anticipadas en 2021 para viajar desde noviembre 2021 y durante todo 2022. 
                    Por cada comprobante que presentes recibirás el 50% de lo que hayas gastado a modo de crédito, 
                    para realizar más compras en el sector turístico hasta el 31 de diciembre de 2022.
                </p>

                <div class="info__art--btn"><a href="https://previaje.gob.ar/como-funciona" target="_blanck">Leer mas</a></div>
            </article>

            <article class="info__art">
                <img src="app/assets/icon_credito.svg" alt="credito" class="info__art--icono">

                <p>¿Qué compras generan crédito? Todos los servicios turísticos comercializados por prestadores inscriptos. 
                    Agencias de viaje, alojamiento, vuelos y ómnibus de larga distancia tienen un tope de $100.000. 
                    Los demás prestadores tienen un tope de $5.000 en total.
                </p>

                <div class="info__art--btn"><a href="https://previaje.gob.ar/prestadores-inscriptos" target="_blanck">Prestadores Inscriptos</a></div>
            </article>

            <article class="info__art">
                <img src="app/assets/icon_form.svg" alt="formulario" class="info__art--icono">

                <p>Una vez realizada la precompra de tu viaje, registrate con tu usuario y contraseña de Mi Argentina, 
                    completá el formulario y cargá los comprobantes. 
                    Los comprobantes deben estar emitidos con tu nombre, tipo y número de documento.
                </p>

                <div class="info__art--btn"><a href="https://previaje.gob.ar/app/beneficiarios" target="_blanck">Registrate</a></div>
            </article>
        </section>
        <h2 class="subtitulo promo__subTitle">Promociones</h2>
    `;
    return $section;
}