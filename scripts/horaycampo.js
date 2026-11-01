function hourandpitch() {
    const campoSelect = document.getElementById("campo");
    const customCampoInput = document.getElementById("customCampo");

    const campoValue =
        campoSelect.value === "OTRO" && customCampoInput.value
            ? customCampoInput.value
            : campoSelect.value;

    const hora = document.getElementById("appt").value;

    document.getElementById("horaecampo").innerHTML =
        `<div class="hora-wrapper">
            <img src="../img/extras/clock-solid-full.png" alt="" class="icono-hora">
            <span class="hora">${hora} H</span>
            <span class="campo">- ${campoValue.replace("-", " - ")}</span>
         </div>`;
}