import imagenWhale from "./pictures/TheWhale.png";


const cargarHome = () => {
    const contenedor = document.createElement("div")
    contenedor.classList.add("home")
    const h1 = document.createElement("h1");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const imagen = document.createElement("img");

    h1.textContent = "The Whale Store";
    p1.textContent = "La mejor tienda para encontrar cada cosita que necesites";
    p2.textContent = "Atendido por las lesbianas mas hermosas";
    imagen.src= imagenWhale;
    imagen.alt = "MilkLove"

    contenedor.append(h1, p1, p2, imagen)

    const contenido = document.getElementById("content");
    contenido.append(contenedor);
};

export {cargarHome};
