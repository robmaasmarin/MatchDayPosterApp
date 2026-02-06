function whichcategory() {
    const competitionSelect = document.getElementById("competition");
    const customCompetitionInput = document.getElementById("customCompetition");
    
    // Si eligió "OTRA", usar el input personalizado, sino usar el select
    const competitionValue = competitionSelect.value === "OTRA" && customCompetitionInput.value 
        ? customCompetitionInput.value 
        : competitionSelect.value;
    
    document.getElementById("category").innerHTML = document.getElementById("subject").value;
    document.getElementById("nombreliga").innerHTML = "*" + competitionValue + "*";
    document.getElementById("teamlocal").innerHTML = document.getElementById("topic").value;
    document.getElementById("teamvisitante").innerHTML = document.getElementById("chapter").value;
}