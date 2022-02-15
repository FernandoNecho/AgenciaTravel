/************************************************************************************************
 * **************Componente Facturacion**********************************************************
 * al hacer click en comprar en cualquier oferta, lleva al formlario FormCompra el cual levanta
 * el componente facturacion para terminar la compra y emitir mensaje de exito
 *************************************************************************************************/

export function Facturacion(){
  
    
// Clase para calcular el Precio en cuotas y por cantidad de pasajeros
//para el formulario de la pagina formCompra.html
    class priceTrip{
        constructor( cuotas, precioHotel, precioAereo, pasajeros,opcion){
            this.cuotas = cuotas;    
            this.precioHotel = precioHotel;
            this.precioAereo = precioAereo;
            this.pasajeros = pasajeros;
            this.opcion = opcion;
            this.precioFinal =0;
        }
      
        //metodo CalcularViaje -recibe un nodo (#id=priceCoutas) para imprimir lo calculado
        calcularViaje(estimado){
            let precio= 0;
            let precioCuotas= 0;
            const impuestos = 0.21

            //verifico que me llegue un numero como pasajeros
            if(this.pasajeros || typeof this.pasajeros=== "number"){
                
                if(this.pasajeros>2){ //si son mas de 2 pasajeros, deja de ser base doble.          
                    precio = this.precioHotel + (this.precioAereo*this.pasajeros);
                }
                else{
                    precio = this.precioHotel + this.precioAereo;
                }
                    
                precio+= precio*impuestos;

                //calculo en base a la cantidad de cuotas e imprimo resultado en pantalla
                switch (this.cuotas){
                
                    case 1:{
                        this.precioFinal=precio;
                        estimado.innerHTML= `<p>El precio final por todo su viaje es de: <b> $${this.precioFinal}</b></p>  
                                            <p>El valor de cada cuota(1) es: <b>  $${this.precioFinal}</b></p> 
                                            <p>Precio Hotel: <b>$ ${this.precioHotel} </b></p> 
                                            <p>Precio del Aereo: <b>$ ${this.precioAereo}</b></p> 
                                            <p>los calculos fueron hechos en base a la siguiente cantidad de pasajeros: <b>${this.pasajeros}</b></p>
                                            <p>Inmpuestos incluidos</p>`;
                        break;
                    }
                    
                    case 3:{
                            this.precioFinal = precio + precio*0,1;
                            precioCuotas = (this.precioFinal/3).toFixed(2);
                            estimado.innerHTML= `<p>El precio final por todo su viaje es de: <b> $${this.precioFinal}</b></p>  
                                                <p>El valor de cada cuota(3) es: <b> $ ${precioCuotas}</b></p> 
                                                <p>Precio Hotel: <b>$ ${this.precioHotel} </b></p> 
                                                <p>Precio del Aereo: <b>$ ${this.precioAereo}</b></p> 
                                                <p>Los calculos fueron hechos en base a la siguiente cantidad de pasajeros: <b>${this.pasajeros}</b></p>
                                                <p>Inmpuestos incluidos</p>`;
                
                            break;
                    }
                    
                    case 6:{
                            this.precioFinal = precio + precio*0,2;
                            precioCuotas = (this.precioFinal/6).toFixed(2);
                            estimado.innerHTML= `<p>El precio final por todo su viaje es de: <b> $${this.precioFinal}</b></p>  
                                                <p>El valor de cada cuota(6) es: <b> $ ${precioCuotas}</b></p> 
                                                <p>Precio Hotel: <b>$ ${this.precioHotel} </b></p> 
                                                <p>Precio del Aereo: <b>$ ${this.precioAereo}</b></p> 
                                                <p>Los calculos fueron hechos en base a la siguiente cantidad de pasajeros: <b>${this.pasajeros}</b></p>
                                                <p>Inmpuestos incluidos</p>`;
                
                            break;
                    }
                
                    case 9:{
                            this.precioFinal = precio + precio*0,3;
                            precioCuotas = (this.precioFinal/9).toFixed(2);
                            
                            estimado.innerHTML= `<p>El precio final por todo su viaje es de: <b> $${this.precioFinal}</b></p>  
                                                <p>El valor de cada cuota(9) es: <b> $ ${precioCuotas}</b></p> 
                                                <p>Precio Hotel: <b>$ ${this.precioHotel} </b></p> 
                                                <p>Precio del Aereo: <b>$ ${this.precioAereo}</b></p> 
                                                <p>Los calculos fueron hechos en base a la siguiente cantidad de pasajeros: <b>${this.pasajeros}</b></p>
                                                <p>Inmpuestos incluidos</p>`;
                            break;
                    }
                
                    case 12:{
                            this.precioFinal = precio + precio*0,4;
                            precioCuotas = (this.precioFinal/12).toFixed(2);
                            estimado.innerHTML= `<p>El precio final por todo su viaje es de: <b> $${this.precioFinal}</b></p>  
                                                <p>El valor de cada cuota(12) es: <b> $ ${precioCuotas}</b></p> 
                                                <p>Precio Hotel: <b>$ ${this.precioHotel} </b></p> 
                                                <p>Precio del Aereo: <b>$ ${this.precioAereo}</b></p> 
                                                <p>Los calculos fueron hechos en base a la siguiente cantidad de pasajeros: <b>${this.pasajeros}</b></p>
                                                <p>Inmpuestos incluidos</p>`;
                
                            break;
                    }

                    default:{
                        alert("Ingreso un opcion incorrecta, las cuotas son [1-3-6-9-12]");
                        
                        }
                } 
                return true;              
            }               
        }
    }


    //Clase para realizar la compra, levanta los datos de la tarjeta de credito y hereda de la clase priceTrip
    class cardPay extends priceTrip{

        //constructor con iteraccion con el DOM
        constructor(firstName, lastName, email, numberCredit, own, expiration, codSeguridad, cuotas, precioHotel, precioAereo, pasajeros, opcion){
            super( cuotas, precioHotel, precioAereo, pasajeros,opcion);
            this.firstName= firstName;
            this.lastName= lastName;
            this.email = email;
            this.numberCredit= numberCredit;
            this.own= own;
            this.expiration= expiration;
            this.codSeguridad= codSeguridad;    
        }

        //al hacer click en submit invoca a la funcion calcular viaje y corrobora los datos ingresado de la credit card
        comprar(){
            let priceCuotas = document.getElementById("priceCuotas");
            let aprobado = this.calcularViaje(priceCuotas);
            if(aprobado) {
                //imprimo Aviso de Exito!!
                this.success();
            }
            else{
                return;
            }
                
            
        }
        
        //si todo esta correcto valido y envio mensaje a la pantalla con la compra
        success(){
            
            const promo = JSON.parse(localStorage.getItem("Promo"));
            const precioCuotas =(this.precioFinal/this.cuotas).toFixed(2);
            const $form = document.getElementById("formulario");
            $form.outerHTML=`<h2>Gracias por su Compra!!!</h2>
                            <div>
                                <p>Sr./a: ${this.firstName} ${this.lastName}</p>
                                <p>Le va estar llegando un mail a ${this.email} con su reserva al destino: ${promo.site}</p>
                                <p>Descripcion del Paquete: ${promo.description} : $${this.precioFinal}</p>
                                <p>Cantidad de cuotas: ${this.cuotas}</p>
                                <p>El valor de cada cuota(12) es: <b> $ ${precioCuotas}</b></p> 
                                <p>Precio Hotel: <b>$ ${this.precioHotel} </b></p> 
                                <p>Precio del Aereo: <b>$ ${this.precioAereo}</b></p> 
                                <p>Los calculos fueron hechos en base a la siguiente cantidad de pasajeros: <b>${this.pasajeros}</b></p>
                                <p>El equipo de Travel les agradece por confiar en nosotros y les desea un feliz viaje</p>
                            </div>
                            <a href="#/" class="btn btn-dark">Volver...</a>`
        }
    }


    // adhiero al boton calcular cuotas al listener
    let calcViaje = document.getElementById("btnCalcular");
    calcViaje.addEventListener("click", calculo );

    //funcion que muestra precio en cuotas, si solo quiero calcular antes de comprar
    function calculo(){
        let storagePromo = JSON.parse( localStorage.getItem("Promo"));
        let precioHotel = parseInt(storagePromo.hotelPrice);
        let precioAereo = parseInt(storagePromo.airPrice);
        let id = parseInt(storagePromo.id);

        let pasajeros = document.getElementById("pasajeros").value;
        let cuotas = parseInt(document.getElementById("cuotas").value);

        if(cuotas!=1 && cuotas!==3 && cuotas!==6 && cuotas!==9 && cuotas!==12){
            alert("Ingreso una opcion incorrecta, las opciones son[1-3-6-9-12]");
            
        }

        let finalPrice = new priceTrip( cuotas, precioHotel, precioAereo, pasajeros,id);
        let priceCuotas = document.getElementById("priceCuotas");
        finalPrice.calcularViaje(priceCuotas);

    }
        
    //add el evento submit a la escucha
    let formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", validar);
        
    //si se aprieta submit levanto todos los datos del los formularios
    function validar(e){
        e.preventDefault();
        let firstName = formulario.firstName.value;
        let lastName= formulario.lastName.value;
        let email = formulario.email.value;
        let numberCredit = parseInt(formulario.numberCredit.value);
        let own = formulario.own.value;
        let expiration = formulario.expiration.value;
        let codSeguridad = parseInt(formulario.cod.value);
        let cuotas = parseInt(formulario.cuotas.value);
        let pasajeros = document.getElementById("pasajeros").value;

        let storagePromo = JSON.parse( localStorage.getItem("Promo"));
        let precioHotel = parseInt(storagePromo.hotelPrice);
        let precioAereo = parseInt(storagePromo.airPrice);
        let id = parseInt(storagePromo.id);
        
        //creo una instancia
        let factura = new cardPay(firstName, lastName, email,numberCredit, own, expiration, codSeguridad, cuotas,precioHotel, precioAereo, pasajeros, id);
        //emito compra
        factura.comprar();

    }  

}
