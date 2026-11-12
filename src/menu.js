   
   const elMenu = [
      { nombre: "Pancito",
        precio: 500
      }, 
      {
        nombre:"Sushito", 
        precio: 1500
      },
      {
        nombre:"gomitas",
        precio:1000
      },
      {
        nombre:"papitas fritas", 
        precio:800
      }, 
      {
        nombre:"galletas", 
        precio:700
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
        
        const titulo = document.createElement("h2");
        titulo.textContent = producto.nombre;
        
        const p = document.createElement("p");
        p.textContent = `$${producto.precio}`;          
        
        contenedor.append(titulo, p);
        contenedorMenu.append(contenedor);
    })
    const content = document.getElementById("content");
    content.append(contenedorMenu);
}

export {cargarMenu};