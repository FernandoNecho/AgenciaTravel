/***********************************************
 * *************Componente Promo****************
 * al hacer click en saber mas en cualquier promocion,
 * se carga dinamicamente el componente promo con la informacion del paquete
 ***********************************************/
export function Promo(props){
    let postId= JSON.parse( localStorage.getItem("PostId"));
    let post = props.filter(post=>post.id===postId);
    
    let{id, site, imgPath, alt, price}=post[0];

    //boton que muestra la info del paquete solicitado a traves de un slide
    $(()=>{
        $(".fa").on("click", (e)=>{
            
            let id=(e.target.id).slice(2);
            $(`#animate${id}`).slideToggle(1,()=>{
            //$(this).show();

            $(".container:nth-child(4)").css({
                borderBottomRightRadius: "2rem",
                borderBottomLeftRadius: "2rem"
                });

                $(".container:nth-child(1)").toggleClass("borderRadiusLeft").animate({
                    transition: ".1s"
                });
                $(".container:nth-child(3)").toggleClass("borderRadiusRight").animate({
                    transition: ".1s"
                });
                $(`#fa${id}`).toggleClass("fa-arrow-up").animate({
                    transition: "10s"
                });
            });
                
        });
    });

    //Boton mostrar mas...
    $(()=>{
        $.fn.toggleText = function(txt1, txt2){
            
            if(this.text()==txt1){
                this.text(txt2);
                
            }else{
                this.text(txt1);
            }
            return this;
        }

        $(".btnShow").css({
            color: "#24dfd5",
            textDecoration: "underline wavy"
            
        })
        .on("click",(e)=>{
            e.preventDefault();
            let id= e.target.id;
            $(".hide"+id).slideToggle("slow", ()=>{   
                $(`#${e.target.id}`).toggleText("Leer mas...", "Leer menos...");
            })
        })
    });

    return `
        <div class="cardPromo">
            <div class="container dias">
                <img src="${imgPath}" alt="${alt}">
                <div class="day">11 días /  10 noches</div>
            </div>
            <div class="container">
                <div id="descripcion">
                    <h2>${site}</h2>
                    <p>12 feb. 2022 a 22 feb. 2022</p>
                    <ol class="lista">
                        <li>Incluye Aereos</li>
                        <li>Hotel Media Pension</li>
                        <li>Traslados</li>
                        <li>Excursiones</li>
                    </ol>

                </div>
                <div id="animacion">
                    <ul id="list">
                        <li>Hoteles</li>
                        <li>Traslados</li>
                        <li>Vuelos</li>
                        <li>Seguros</li>
                    </ul>
                    <span class="fa fa-arrow-down flecha" id="fa${id}"></span>
                </div>
            
            </div>

            <div class="container">
                <p>Precio final por 2 personas</p> 
                <b class="price">$${price}</b>
                <small>Cargos e impuestos incluídos</small> <br>
                <a href="#/comprar" class="btnComprar" data-id="${id}">Comprar</a>
            </div>

            <div class="container animate" id="animate${id}">
                <div class="contSlider">
                    <p><i class="fas fa-suitcase"></i> Rio Othon Palace &#9733 &#9733 &#9733 DESAYUNO</p>
                    <p><i class="fas fa-suitcase"></i> Serena Buzios &#9733 &#9733 &#9733 &#9733 DESAYUNO</p>
                </div>

                <div class="contSlider">
                    <p><img src="app/assets/LA-ISO.svg" alt="" id="latam"> LATAM</p>
                    <p>AEP (17:OOHS) ------- SDU (19:30HS)</p>

                    <p><img src="app/assets/LA-ISO.svg" alt="" id="latam"> LATAM</p>
                    <p>SDU (17:OOHS) ------- AEP (19:30HS)</p>
                </div>

                <div class="contSlider">
                    <h2 class="titleRent"><i class="fas fa-taxi"></i> Alquiler de 10 días de auto económico</h2>
                    <p>Alquiler de Auto económico Chevrolet Prisma, Renault Logan, Nissan Versa o similar. 
                        Incluye Kilometraje libre, cobertura por daños y/o robo con franquicia, responsabilidad civil, 
                        y cargo de aeropuerto.</p><p class="hide${id}" style="display: none;"> Requisitos: ser mayor de 21 años, tener licencia de conducir vigente 
                        y contar con tarjeta de crédito internacional válida a nombre del conductor designado, 
                        para el bloqueo de la franquicia por BRL. Toma y deja en Aeropuerto. Es que siempre que el auto se tome 
                        y deje en oficinas diferentes, aplican cargos extras y deberán ser abonados por el cliente directamente en destino.
                    </p>
                    <a href="#" class="btnShow" id="${id}">Leer mas...</a>
                </div>
            </div>
        </div>
    `;
}