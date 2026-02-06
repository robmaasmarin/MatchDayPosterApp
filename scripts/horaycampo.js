function hourandpitch() {
    const campoSelect = document.getElementById("campo");
    const customCampoInput = document.getElementById("customCampo");
    
    // Si eligió "OTRO", usar el input personalizado, sino usar el select
    const campoValue = campoSelect.value === "OTRO" && customCampoInput.value 
        ? customCampoInput.value 
        : campoSelect.value;
    
    document.getElementById("horaecampo").innerHTML = " " + document.getElementById("appt").value.replace(":", ".")
    + "  -  " + campoValue.replace("-", " - ");
}


