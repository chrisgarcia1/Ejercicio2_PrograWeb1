function calcular(){

    let primerparcial= document.getElementById("1P").value
    let segundoparcial= document.getElementById("2P").value
    let tercerparcial = document.getElementById ("3P").value

    if (primerparcial===""){
        alert ("Favor ingresar nota del primer parcial")
        document.getElementById("mensaje").value = "Error"
    }
    if (segundoparcial===""){
        alert ("Favor ingresar nota del segundo parcial")
        document.getElementById("mensaje").value = "Error"
    }
    if (tercerparcial===""){
        alert ("Favor ingresar nota del tercer parcial")
        document.getElementById("mensaje").value = "Error"
    }

    if (primerparcial!= "" && segundoparcial!="" && tercerparcial!=""){
        let primerp= parseFloat(primerparcial)
        let segundop= parseFloat(segundoparcial)
        let tercerp= parseFloat(tercerparcial)

        if (primerp <0 || primerp>30){
            alert ("Ingresar un valor valido en la nota del primer parcial")
            document.getElementById("mensaje").value = "Error"
        }
        if (segundop <0 || segundop>30){
            alert ("Ingresar un valor valido en la nota del segundo parcial")
            document.getElementById("mensaje").value = "Error"
        } 
        if (tercerp <0 || tercerp>40){
            alert ("Ingresar un valor valido en la nota del tercer parcial")
            document.getElementById("mensaje").value = "Error"
        }

        if (primerp>=0 && primerp<=30 && segundop>=0 && segundop<=30 && tercerp>=0 && tercerp<=40){
            let suma = primerp + segundop + tercerp

            document.getElementById("total").value = suma

            if (suma >= 90) {
                document.getElementById("mensaje").value = "Sobresaliente"

            } else if (suma >= 80) {
                document.getElementById("mensaje").value = "Muy Bueno"
            } else if (suma >= 60) {
                document.getElementById("mensaje").value = "Bueno"
            } else {
                document.getElementById("mensaje").value = "Reprobado"
            }
        }


            
        
        
        

    }
    
}

function limpiar(){
    document.getElementById("mensaje").value=""
    document.getElementById("1P").value=""
    document.getElementById("2P").value=""
    document.getElementById("3P").value=""
    document.getElementById("total").value=""

}