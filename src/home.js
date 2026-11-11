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
    imagen.src= "https://thaistarx.com/wp-content/uploads/2025/08/GxrTDh7aQAAC-07-819x1024.jpg"
    imagen.alt = "MilkLove"

    contenedor.append(h1, p1, p2, imagen)

    const contenido = document.getElementById("content");
    contenido.append(contenedor);
};

export {cargarHome};
