/*const variableTiempo = setTimeout(saludo, 2000);*/

/*function detenerTimeOut() {
  clearTimeout(variableTiempo);
}*/

function saludo(){
	gsap.to("#contenedor", { left:"100vw", duration: 1, delay: 4, onComplete: prueba});
}
saludo();

function prueba(){
	alert("hola");
}