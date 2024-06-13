console.log("adios")

let id = "AKfycbyldeL1mKoCIc6i2LEt7uGgoHUMSk8BAZZincDZOCeFQr-eOKMMdUTSHtwyH-TexcNB";
let url1 = "https://script.google.com/macros/s/AKfycbyldeL1mKoCIc6i2LEt7uGgoHUMSk8BAZZincDZOCeFQr-eOKMMdUTSHtwyH-TexcNB/exec";

let today = new Date();
let actual = today.toISOString().slice(0, 10); // Formato YYYY-MM-DD
document.getElementById("fecha").value = actual;

setInterval(consulta,3000)

function consulta() {
    let fecha = document.getElementById("fecha").value
    let zona = leer();
    console.log(fecha,zona);
    let url1 = "https://script.google.com/macros/s/AKfycbyldeL1mKoCIc6i2LEt7uGgoHUMSk8BAZZincDZOCeFQr-eOKMMdUTSHtwyH-TexcNB/exec";
    async function fetchRowByDate() {
        const date = fecha;
        const url = url1 + encodeURIComponent(date);
        
        try {
            const response = await fetch(url);
            const data = await response.json();          
            if (data.error) {
            //document.getElementById('result').innerText = data.error;
            console.log("no funciona ", data.error);
        } else {
            //document.getElementById('result').innerText = JSON.stringify(data, null, 2);
            console.log("funciona ", JSON.stringify(data, null, 2))
        }
        } catch (error) {
          //document.getElementById('result').innerText = 'Error: ' + error.message;
            console.log("no funciona2 ", error.message);
        }
    }

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

