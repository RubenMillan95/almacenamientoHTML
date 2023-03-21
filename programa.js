//crear los eventListeners

let botonAlmacenar=document.getElementById("btnAlmacenar");

botonAlmacenar.addEventListener('click', ()=>{

    //almacenar un dato en seccionstorage
    sessionStorage.setItem("nombre","Ruben");
    sessionStorage.setItem("apellido","Millan");

    localStorage.setItem("nombre","Ruben");
    localStorage.setItem("apellido","Millan");

});

let botonBorrar=document.getElementById("btnBorrar");
botonBorrar.addEventListener('click', function(){
    sessionStorage.clear();
    localStorage.clear();
}) 

//recorrer el sessionstorage y el localstorage
//mostrando las variables como una fila en la tabla del DOM

function construirFilas(){
    
    //crear un arreglo con las fuentes de datos
    let fuentes=[localStorage, sessionStorage];

    for(let k=0; k<fuentes.length;k++){
        let miFuente=fuentes[k];
    }


    for(let i=0; i<miFuente .length;i++){
    let cuerpoTabla=document.getElementById("cuerpoTabla");

    let fila=document.createElement("tr");
    let celda=document.createElement("td");

    //crear un nodo tipo texto
    let texto=document.createTextNode(miFuente.key(i));
    celda.appendChild(texto);
    fila.appendChild(celda);

    celda=document.createElement("td");
    let.valor=miFuente.getItem(miFuente.key(i));
    texto=document.createTextNode(valor);
    celda.appendChild(texto);

    fila.appendChild(celda);
    cuerpoTabla.appendChild(fila);
    }
    fila.appendChild(celda);
    cuerpoTabla.appendChild(fila);
}
