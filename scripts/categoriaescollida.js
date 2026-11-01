function whichcategory() {
    const competitionSelect = document.getElementById("competition");
    const customCompetitionInput = document.getElementById("customCompetition");
    
    // Si eligió "OTRA", usar el input personalizado, sino usar el select
    const competitionValue = competitionSelect.value === "OTRA" && customCompetitionInput.value 
        ? customCompetitionInput.value 
        : competitionSelect.value;

    // meter imagen categoría    
    
    const categoryValue = document.getElementById("subject").value;
    const ligaEl = document.getElementById("nombreliga");


    document.getElementById("category").innerHTML = categoryValue;

    const imagePath = categoryImages[categoryValue];

    if (imagePath) {
        document.getElementById("category").innerHTML =
            '<img src="' + imagePath + '" alt="' + categoryValue + '">';
    }

    
        const ligaImagePath = ligaImages[competitionValue]; // <-- crea este objeto igual que categoryImages
    ligaEl.innerHTML = ligaImagePath
        ? '<img src="' + ligaImagePath + '" alt="' + competitionValue + '">'
        : "-" + competitionValue + "-";
    document.getElementById("teamlocal").innerHTML = document.getElementById("topic").value;
    document.getElementById("teamvisitante").innerHTML = document.getElementById("chapter").value;
}