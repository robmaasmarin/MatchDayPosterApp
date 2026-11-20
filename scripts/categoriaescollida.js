function whichcategory() {
    const competitionSelect = document.getElementById("competition");
    const customCompetitionInput = document.getElementById("customCompetition");

    const competitionValue = competitionSelect.value === "OTRA" && customCompetitionInput.value
        ? customCompetitionInput.value
        : competitionSelect.value;

    const categoryValue = document.getElementById("subject").value;
    const ligaEl = document.getElementById("nombreliga");
    const categoryEl = document.getElementById("category");

    categoryEl.innerHTML = categoryValue;

    const categoryFile = categoryImages[categoryValue];

    if (categoryFile) {
        const imagePath = obtenerRutaImagen("categories", categoryFile);
        categoryEl.innerHTML = `<img src="${imagePath}" alt="${categoryValue}">`;
    }

    const ligaFile = ligaImages[competitionValue];

    ligaEl.innerHTML = ligaFile
        ? `<img src="${obtenerRutaImagen("ligas", ligaFile)}" alt="${competitionValue}">`
        : "-" + competitionValue + "-";

    document.getElementById("teamlocal").innerHTML = document.getElementById("topic").value;
    document.getElementById("teamvisitante").innerHTML = document.getElementById("chapter").value;
}