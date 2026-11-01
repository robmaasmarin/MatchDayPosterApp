function actualizarCartel() {
  whichcategory();
  dayOfTheWeek(document.getElementById('date').value);
  hourandpitch();
  mostrarEscudoLocal();
  mostrarEscudoVisitante();
  alignRows("#daytodisplay .fecha-wrapper", "#horaecampo .hora-wrapper");

}
