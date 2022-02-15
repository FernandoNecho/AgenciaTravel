/****************************************************************
 *      *************Componente Validate*****************
 * Valida los formularios, tanto de formCompra como de contacto.
 ****************************************************************/
export function Validate(){
    const $input = document.querySelectorAll("input[required]");
    console.log($input)

    $input.forEach(input => {
        const $span = document.createElement("span");
        $span.id = input.name;
        $span.classList.add("errorInput", "none");
        $span.textContent = input.title;
        input.insertAdjacentElement("afterend", $span);
    });

    document.addEventListener("keyup",(e)=>{
        if(e.target.matches("input[required]")){
            let $input = e.target;
            let pattern = $input.pattern || $input.dataset.pattern;

            if(pattern){
                let regex = new RegExp(pattern);
                return !regex.exec($input.value) ? document.getElementById($input.name).classList.add("isActive"): document.getElementById($input.name).classList.remove("isActive");
            }

            if(!pattern){
                return $input.value===""? document.getElementById($input.name).classList.add("isActive"): document.getElementById($input.name).classList.remove("isActive");
            }
        }
    })
}