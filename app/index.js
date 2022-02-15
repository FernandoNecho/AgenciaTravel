/*******************************************************
 * cuando se carga la pagina o hay un cambio en el hash
 * llama al componente App
 *******************************************************/
import { App } from "./App.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", App);