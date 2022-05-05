let dato = document.getElementById("dato");
let button = document.getElementById("btnentregar")

btnentregar.addEventListener("click", () >= {

  switch (Number(dato.value)) {
    case 1:
      console.log("Entregar medalla de Oro");
      break;
    case 2:
      console.log("Entregar medalle de Plata");
      break;
    case 3:
      console.log("Entregar medalla de Bronce");
      break;
    default :
      console.log("Entregar mención de participación");
  }
} );
