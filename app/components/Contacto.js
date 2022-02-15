/*********************************************************************************
 * Componente Contacto - se carga al hacer click en el menu contacto #/contacto
 * Se valida con el componente Validate() que esta en la carpeta helpers
 ********************************************************************************/
export function Contacto(){
    
    const $contacto = document.createElement("main");
    $contacto.id="frmContacto";

    $(()=>{

        $("#submitContact").on("click", (e)=>{
            e.preventDefault();
            let d = document,
            name=d.getElementById("nombre"),
            lastname= d.getElementById("apellido"),
            email= d.getElementById("mail"),
            phone = d.getElementById("telefono");

            const namePattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+.{1,15}(.[^0-9])$";
            const emailPattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$";
            const phonePattern = ".{6,20}$"

            let regex= new RegExp(namePattern),
            emailRegex= new RegExp(emailPattern),
            phoneRegex= new RegExp(phonePattern);

            if(!regex.exec(name.value) || !regex.exec(lastname.value) || !emailRegex.exec(email.value) || !phoneRegex.exec(phone.value)){
                return
            }
            else{
                $("#frmContacto").append("<span class='errorInput'>Mensaje enviado con exito</span>");
                $(".errorInput").fadeOut(6000);      
                $(".form")[0].reset();
            }
        }); 
    });

    $contacto.innerHTML=`
        <section class="formulario" id="formulario">
            <form  method="get" class="form">
                <fieldset >
                    <h2 class="form__subtitle">Formulario de Contacto</h2>

                    <section class="form__inputText">
                        <label class="form__label" for="nombre">Nombre:</label>
                        <input class="form__input" type="text" name="firstName" id="nombre" placeholder="Nombre" title="Nombre debe contener solo letras y longitud mayor a 3" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+.{1,15}(.[^0-9])$"required>
                                
                        <label class="form__label" for="apellido">Apellido:</label>
                        <input class="form__input"  type="text" name="lastName" id="apellido" placeholder="Apellido" title="Apellido debe contener solo letras y longitud mayor a 3" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+.{1,15}(.[^0-9])$" required>
                                
                        <label class="form__label" for="mail">Email:</label>
                        <input class="form__input" type="email" name="email" id="mail" placeholder="Email" title = "Formato  de Email Incorrecto" pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$"  required>
                                
                        <label class="form__label" for="telefono">Telefono:</label>
                        <input class="form__input" type="number" name="phone" id="telefono" title=" solo acepta numeros y longitud mayor a 6" pattern = ".{6,20}$" placeholder="Telefono" required>
                    </section>
                        
                    <section class="form__terminos">
                    <label for="terminos">Acepto Recibir Informacion a mi correo</label>
                    <input type="checkbox" name="terminos" id="terminos"class="mt-2 mx-2">
                    </section>
                            
                    <section class="form__comentarios">
                    <legend>Comentarios</legend>
                    <textarea name="comments"  class= "form__selDestinos" cols="100" rows="6" placeholder="Dejanos tu comentario" title="Maximo 255 caracteres" data-pattern="^.{1,255}$" required></textarea>
                    </section>

                    <section class="form__btnForm">
                    <input class="form__btnForm--btn" id="submitContact" type="submit" value="Enviar">
                    <input class="form__btnForm--btn" type="reset" value="Reset">
                    </section>
                </fieldset>
            </form>
        </section>

        <section class="contact">
            <h2 class="form__subtitle">Informacion de Contacto</h2>

            <span>Email: Travel@gmail.com</span>
            <span>Telefono: 123456789</span>
            <span>Direccion: Av. de los viaje - A todo el Mundo - Argentina</span>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3393.1428143370695!2d-61.09075319956095!3d-31.739302573040053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1635380664458!5m2!1ses!2sar"   class="contact__maps" loading="lazy"></iframe>
        </section>
    `;

    return $contacto;
}