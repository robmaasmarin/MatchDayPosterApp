function hourandpitch() {
    const campoSelect = document.getElementById("campo");
    const customCampoInput = document.getElementById("customCampo");

    const campoValue =
        campoSelect.value === "OTRO" && customCampoInput.value
            ? customCampoInput.value
            : campoSelect.value;

    const hora = document.getElementById("appt").value;
    const rutaReloj = obtenerRutaExtra("clock-solid-full.png");

    document.getElementById("horaecampo").innerHTML =
        `<div class="hora-wrapper">
            <img src="${rutaReloj}" alt="" class="icono-hora">
            <span class="hora">${hora} H</span>
            <span class="campo">- ${campoValue.replace("-", " - ")}</span>
         </div>`;
}