import "./styles.css"

import { cargarHome } from "./home.js"
cargarHome();

import { cargarMenu } from "./menu.js";
cargarMenu();

import { cargarContacto} from "./contact.js";
cargarContacto();

const contenido = document.getElementById("content");
const botonHome = document.getElementById("home-btn");
const botonMenu = document.getElementById("menu-btn");
const botonContact = document.getElementById("contact-btn");

const mostrarPestana = (accion) => {

    contenido.textContent = "";
    accion();
};

botonHome.addEventListener("click", mostrarPestana(cargarHome));
botonMenu.addEventListener("click", mostrarPestana(cargarMenu));
botonContact.addEventListener("click", mostrarPestana(cargarContacto));


cargarHome();