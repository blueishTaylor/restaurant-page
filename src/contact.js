const cargarContacto = () => {
    const contenedorContact = document.createElement("div");
    contenedorContact.classList.add("contact");

    const h1 = document.createElement("h1");
    h1.textContent = "Contact";

    const p1 = document.createElement("p");
    p1.textContent = "Avenida torta 1313";

    const p2 = document.createElement("p");
    p2.textContent = "Numero de contacto : +56987135496";

    const p3 = document.createElement("p");
    p3.textContent = "laislabonita@torta.com"

    contenedorContact.append(h1, p1, p2, p3);
    const content = document.getElementById("content");

    content.append(contenedorContact);
}

export {cargarContacto};