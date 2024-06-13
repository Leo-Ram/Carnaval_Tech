console.log("adios")

let id = "AKfycbyldeL1mKoCIc6i2LEt7uGgoHUMSk8BAZZincDZOCeFQr-eOKMMdUTSHtwyH-TexcNB";
let url1 = "https://script.google.com/macros/s/AKfycbyldeL1mKoCIc6i2LEt7uGgoHUMSk8BAZZincDZOCeFQr-eOKMMdUTSHtwyH-TexcNB/exec";

let today = new Date();
let actual = today.toISOString().slice(0, 10); // Formato YYYY-MM-DD
document.getElementById("fecha").value = actual;

//setInterval(consulta,3000)


function consulta() {
    let fecha = document.getElementById("fecha").value
    let zona = leer();
    console.log(fecha,zona);
    
    let dia = fecha.split("-")[2];
    dia = parseInt(dia);
    console.log(dia);
    console.log(info[dia])
    document.getElementById("numero_aforo").textContent = Math.round( info[dia]);

    
    document.getElementById("numero_seguridad").textContent = info2[zona] + "%";
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

function nSeguro(numero) {
    switch (numero) {
        case 1:
            return "muy seguro";
        case 2:
            return "seguro";
        case 3:
            return "neutral";
        case 4:
            return "inseguro";
        case 5:
            return "muy inseguro";
        default:
            return "Número inválido";
    }
}


let info ={
1:	6683.946971,
2:	9139.187536,
3:	8458.697494,
4:	10330.92093,
5:	10919.65645,
6:	11032.06908,
7:	8599.864913,
8:	5973.720102,
9:	6212.017165,
10:	5034.694607,
11:	5758.871433,
12:	3308.239507,
13:	3153.911677,
14:	3855.027026,
15:	4170.094242,
16:	4353.16225,
17:	4766.995536,
18:	4355.116038,
19:	5312.223627,
20:	4309.296112,
21:	3917.889488,
22:	3311.996763,
23:	5897.823383,
24:	7018.729399,
25:	5236.970452,
26:	6472.608946,
27:	5123.193551,
28:	2410.170326,
29:	6116.495463,
30:	5988.942814,
31:	4874.289949,

}

let info2 = {
1:	0.07,
2:	0.14,
3:	0.20,
4:	0.27,
5:	0.34,
6:	0.41,
7:	0.47,
8:	0.54,
9:	0.61,
10:	0.68,
11:	0.75,
12:	0.81,
13:	0.88,
14:	0.95,
15:	1.02,
16:	1.08,
17:	1.15,
18:	1.22,
19:	1.29,
20:	1.36,
21:	1.42,
}
    