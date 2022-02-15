/*****************************************************
 * Componente acordeon, se carga en home (#/) al final
 ****************************************************/
export function Acordeon(){
    const $acordeon = document.createElement("section");
    $acordeon.classList.add("acordeon");

    /*---------Menu Acordeon en pagina index.html-------*/
    //se anula el de bootstrap y se hace la logica con jquery

    $(()=>{
        $('.acordeon__btn').on("click", (e)=>{
            let tag = e.target.id;
            $("#collapse"+tag).slideToggle("slow");
            $(e.target).children().toggleClass("fa-arrow-up");
        });
    });

    $acordeon.innerHTML=`
    <!----------- MENU ACORDEON--------->
        <h2> Informacion Util</h2>
        <a class="btn acordeon__btn" id="Covid">
          Covid-19  <i class="fas fa-arrow-down"></i>
        </a>

        <!-------info Covid------->
        <div class="collapse " id="collapseCovid">
          <div class="card card-body acordeon--text">
            Hasta el día 31 de octubre de 2021 inclusive, se prorroga la prohibición de ingreso al territorio nacional 
            establecida por <strong>Decreto N° 274/20.</strong> 
            Quedan exceptuadas de la prohibición de ingreso establecida, las personas nacionales o 
            residentes de países limítrofes, siempre que cumplan con las indicaciones, recomendaciones 
            y requisitos sanitarios y migratorios para el ingreso y permanencia en el país establecidos 
            o que se establezcan en el futuro.
          </div>
        </div>
        
        <!------Info Check------------>
        <a class="btn acordeon__btn" id="Check">
          Check-in -- Check-Out  <i class="fas fa-arrow-down"></i>
        </a>
        <div class="collapse" id="collapseCheck">
          <div class="card card-body acordeon--text">
            <strong>¿Qué es el Check in hotel?</strong> 
            El proceso de check-in en hotel es el cual se registra la llegada de uno o varios clientes al hotel. 
            Aquí entraría la toma de datos personales para su posterior envío a las autoridades.<br>
            <strong>¿Y el Check-out?</strong> 
            El check-out hace referencia al momento de la salida del cliente del hotel; durante el cual debe hacer 
            entrega de las llaves o tarjeta de la habitación y cualquier deuda pendiente relacionada con su estancia.
          </div>
        </div>

        <!-------Tips de Viajes--------------->
        <a class="btn acordeon__btn" id="Tips">
          Tips de Viaje   <i class="fas fa-arrow-down"></i>
        </a>
        <div class="collapse acordeon--collapse" id="collapseTips">
          <div class="card card-body acordeon--text">
            <strong>Los tips de viaje que harán de tu primera experiencia un momento único:</strong> <br>
            <strong>Equipaje de mano:</strong> contar con la documentación a mano, de fácil acceso. <br>¿Por qué?
            Porque en cada momento, el ticket de vuelo y quizás algún otro documento se te serán pedidos.<br>
            <strong>Documentación:</strong> tienes que llevar pasaporte, o documento de identidad, ticket de avión (puede ser online), 
            asistencia al viajero (puedes tenerla descargada en la app de la compañía). 
          </div>
        </div>
   
     
    <!-------------Fin Menu acordeon--------------------------->  
    `;

    return $acordeon;
}