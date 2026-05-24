
const botonExperiencia = document.getElementById("experiencia");

//función flecha
const experiencia = (e) => {

    //1. clicamos constantes  

  const tuNOMBRE = document.getElementById("nombre").value;
  const tusAÑOS = parseFloat(document.getElementById("años").value)

  const reRESULTADO = document.getElementById("resultado");

 

    //2.creamos una variable para guardar mensaje
         let nivel = "";


    //3. rangos


     if(tuNOMBRE === "" || isNaN(tusAÑOS)) {

            reRESULTADO.innerText = " Rellena todos los campos";
            return;
            
         }


         if (tusAÑOS < 2) {
        nivel = "Principiante"; // 👈 ¡Cambiado a mayúscula!
    } else if (tusAÑOS <= 4) {
        nivel = "Intermedio";
    } else if (tusAÑOS <= 7) {
        nivel = "Avanzado";
    } else if (tusAÑOS <= 10) {
        nivel = "Experto";
    } else {
        nivel = "Gurú";  // 👈 Tu Gurú perfecto aquí
    }

     
         //4. Mostrar el mensaje final
            reRESULTADO.innerHTML = "Hola " + tuNOMBRE + ", tu nivel es: " + nivel;
        

        }



botonExperiencia.addEventListener("click",experiencia);