console.log("adios")

let today = new Date();
let actual = today.toISOString().slice(0, 10); // Formato YYYY-MM-DD
document.getElementById("fecha").value = actual;

setInterval(consulta,3000)

function consulta() {
    let fecha = document.getElementById("fecha").value
    let zona = leer();
    console.log(fecha,zona);
}
function leer() {
    let direccion = document.getElementById("zona").value
    if (direccion > 0 && direccion < 22) {
        document.getElementById("zona").style.backgroundColor = "#fff";
        let zona = parseInt(direccion);
        return zona;
    } else {
        document.getElementById("zona").style.backgroundColor = "#f005"
    }
}