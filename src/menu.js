   import iconoPancito from "./pictures/bread.png";
   import iconotSushito from "./pictures/sushi.png";
   import iconoGalletas from "./pictures/cookies.png";
   import iconoGomitas from "./pictures/gummies.png";
   import iconoPapitas from "./pictures/crisps.png"
   
   
   const elMenu = [
      { nombre: "Pancito",
        precio: 500,
        icono: iconoPancito
      }, 
      {
        nombre:"Sushito", 
        precio: 1500,
        icono: iconotSushito
      },
      {
        nombre:"Gomitas",
        precio:1000,
        icono: iconoGomitas
      },
      {
        nombre:"Papitas fritas", 
        precio:800,
        icono: iconoPapitas
      }, 
      {
        nombre:"Galletas", 
        precio:700,
        icono:iconoGalletas
      }

    ]
    
    const cargarMenu = () => {
    const contenedorMenu = document.createElement("div");
    contenedorMenu.classList.add("menu");

    const h1 = document.createElement("h1");
    h1.textContent = "Menucito de las lesbianas";
    contenedorMenu.append(h1);

    elMenu.forEach(producto => {
        const contenedor = document.createElement("div");
        contenedor.classList.add("item");

        const infoProducto = document.createElement("div");
        infoProducto.classList.add("item-info");

        const img = document.createElement("img");
        img.src = producto.icono;
        img.alt = producto.nombre;
        img.classList.add("item-icon");
        
        const titulo = document.createElement("h2");
        titulo.textContent = producto.nombre;
        
        infoProducto.append(img, titulo);

        const p = document.createElement("p");
        p.textContent = `$${producto.precio}`;          
        
        contenedor.append(infoProducto, p);
        contenedorMenu.append(contenedor);
    });

    const content = document.getElementById("content");
    content.append(contenedorMenu);
}

export {cargarMenu};