

const btnLanazarModal = document.querySelectorAll("[data-open]");
const isVisible = "is-visible";
const btnOculatarModal = document.querySelector('#oculatr-modal');

 const contModal = document.querySelector('.contenedor-modal');
// const seleccion = await obtenerInput('Ingrese el tipo de cuerpo (Skinny, Normal, Holgado): ');
// const sexo = await obtenerInput('Ingrese el sexo (H/M): ');



// btnLanazarModal.addEventListener('click', (e) =>{
//      e.prevenDefault();
//    contModal.classList.add('mostrar')
   
// });
for(const el of btnLanazarModal) {
    el.addEventListener("click", function() {
      const modalId = this.dataset.open;
      document.getElementById(modalId).classList.add(isVisible);
    });
  }


  function obtenerTalla() {
    const bustoInput = document.getElementById("busto");
    const cinturaInput = document.getElementById("cintura");
    const caderaInput = document.getElementById("cadera");

    const busto = parseInt(bustoInput.value);
    const cintura = parseInt(cinturaInput.value);
    const cadera = parseInt(caderaInput.value);

    const talla = obtenerTallaRopa(busto, cintura, cadera);

    alert("La talla de ropa es: " + talla);
    
    // const resultado = document.getElementById("resultado");
    // resultado.textContent = "La talla de ropa es: " + talla;
  }

 
  function obtenerTallaRopa(busto, cintura, cadera) {
    const tallas = [
        { talla: "XS", busto: [76, 81], cintura: [58, 64], cadera: [84, 89] },
        { talla: "S", busto: [81, 86], cintura: [64, 69], cadera: [89, 94] },
        { talla: "M", busto: [86, 91], cintura: [69, 74], cadera: [94, 99] },
        { talla: "L", busto: [91, 97], cintura: [74, 80], cadera: [99, 105] },
        { talla: "XL", busto: [97, 103], cintura: [80, 87], cadera: [105, 111] },
      ];


      const tallaEncontrada = tallas.find((talla) => {
        const cumpleBusto = busto >= talla.busto[0] && busto <= talla.busto[1];
        const cumpleCintura = cintura >= talla.cintura[0] && cintura <= talla.cintura[1];
        const cumpleCadera = cadera >= talla.cadera[0] && cadera <= talla.cadera[1];

        return cumpleBusto && cumpleCintura && cumpleCadera;
      });


      return tallaEncontrada ? tallaEncontrada.talla : "Desconocida";
    }









// const ObtenerTallas = () => {
//     const tallasH = [
//         { Alto: 168, Peso: 63, Talla: "XS" },
//         { Alto: 174, Peso: 72, Talla: "S" },
//         { Alto: 180, Peso: 81, Talla: "M" },
//         { Alto: 186, Peso: 90, Talla: "L" },
//         { Alto: 192, Peso: 98, Talla: "XL" },
//         { Alto: 200, Peso: 105, Talla: '2XL"' }
//       ]
//       const tallasM = [
//         { Alto: 155, Peso: 45, Talla: "XS" },
//         { Alto: 165, Peso: 65, Talla: "S" },
//         { Alto: 170, Peso: 72, Talla: "M" },
//         { Alto: 186, Peso: 78, Talla: "L" },
//         { Alto: 190, Peso: 84, Talla: "XL" },
//         { Alto: 200, Peso: 90, Talla: '2XL"' }
//       ]
//       const tipoCuerpo = { Skinny: 0.9, Normal: 1, Holgado: 1.1 }
      
//       const seleccion = "Normal"// este esw el cuerpo 
//       const sexo = "h" //este es el imput del sexo de la persona
//       const getAlto = (data, target) =>
//         data.reduce((acc, obj) =>
//           Math.abs(target - obj.Alto) < Math.abs(target - acc.Alto) ? obj : acc
//         )
      
//       const getPeso = (data, target) =>
//         data.reduce((acc, obj) =>
//           Math.abs(target - obj.Peso) < Math.abs(target - acc.Peso) ? obj : acc
//         )
      
//       if (sexo == "h") {
//         console.log(
//           "Talla segun altura: ",
//           getAlto(tallasH  * tipoCuerpo[seleccion])
//         )
//         console.log(
//           "Talla segun peso: ",
//           getPeso(tallasH * tipoCuerpo[seleccion])
//         )
//       } else if (sexo == "M") {
//         console.log(
//           "Talla segun altura: ",
//           getAlto(tallasM * tipoCuerpo[seleccion])
//         )
//         console.log(
//           "Talla segun peso: ",
//           getPeso(tallasM  * tipoCuerpo[seleccion])
//         )
//       }

//     };