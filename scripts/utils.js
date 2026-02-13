function limpiarEquipo(nombre) {
  return nombre.replace(/\s+[A-Z]$/, "");
}

function normalizarClub(nombre) {
  return nombre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "")
    .trim();
}

const mapaEscudos = {
  // CIUDAD / BASE
  cdciudad: "escudomini",
  cdciudadb: "escudomini",
  clubdeportivociudad: "escudomini",
clubdeportivociudadcf: "escudomini",
clubdeportivociudadb: "escudomini",
clubdeportivociudadc: "escudomini",

cdciudadjardin: "cjardin",


  // ACADEMIAS / COLEGIOS
  cdcalasanz: "calasanz2",
  cdcalasanzb: "calasanz2",
  cdcalasanzc: "calasanz2",
  cdcalasanzd: "calasanz2",

  cdeportivocristal: "cristal",

  companiademaria: "cmaria",
  companiademariab: "cmaria",
  companiademariac: "cmaria",

  colegioliceo: "liceo",
  liceodemonelossd: "liceomonelos",
  liceodemonelossdb: "liceomonelos",

  colegioobradoiro: "obradoiro",

  

  clubpolideportivoesclavas: "esclavas2",
  cpesclavas: "esclavas2",
  cpesclavasa: "esclavas2",

  // CLUBS HISTÓRICOS
  clubrosaliamera: "rmera",
  clubrosaliamerab: "rmera",

  corunaarbococf: "silva",
  corunaarbococf: "silva",

  eirissd: "eiris",

  galiciagaiteira: "ggaiteira",

  imperatoroar: "imperator",
  imperatoroarb: "imperator",
  imperatoroarc: "imperator",

  maravillasd: "maravillas",

  ozacesurascf: "ozacesuras",
  cfozacesuras: "ozacesuras",

  sinquerersd: "sinquerer",

  sdsantamargarita: "smargarita",

  sportingmeicende: "smeicende", 
  sportingmeicendeb: "smeicende", 

  unionsportiva: "usport",

  vionocf: "viono",

  xuventudelaracha: "xularacha",
  xuventudelarachab: "xularacha",

  // SPORTING / ATLÉTICOS
  sportingcorunessd: "sportingcorunes",
  sportingcorunessdb: "sportingcorunes",

  sportingburgo: "spburgo",
  sportingburgob: "spburgo",

  atleticoarteixo: "atarteixo",
  atleticocastros: "castros",
  atleticocastrosb: "castros",

  atlcorunamontaneroscfc: "montaneros",
  atlcorunamontaneroscf: "montaneros",
  atlcorunamontaneroscfb: "montaneros",

  // CADETES / INFANTIL / OTROS
  bergantinoscf: "bergan",
  bergantinoscfc: "bergan",

  clubdefutbolbatalladorsd: "batallador",
  clubdefutbolbatalladorsdb: "batallador",
  cfbatalladorsd: "batallador",

  scdpastoriza: "pastoriza",

  sportingcambre: "scambre",
  sportingcambreb: "scambre",

  sadacf: "sadacf",
  sadaat: "sadaat",

  portazgosd: "portazgo",

  adcristorey: "adcristorey",

  silvasd: "silva",
  silvasdb: "silva",

  ozajuvenilsd: "ozatest",
  ozajuvenilsdb: "ozatest",
  ozajuvenilsdc: "ozatest",

  cfdeportivoorzan: "orzan",
  escudoorzan: "orzan",

  orillamarsd: "orillamar",
  orillamarsdb: "orillamar",
  orillamarsdc: "orillamar",

  relampagosd: "relampago",

  unioncampestre: "campestre",
  unioncampestreb: "campestre",

  udpaiosacohierros: "paiosaco",

  uralespanolcf: "urale",
  uralespanolcfb: "urale",
  uralespanolcfc: "urale",
  uralespanolcfd: "urale",

  victoriacf: "victoria",
  victoriacfb: "victoria",
  victoriacfd: "victoria",

  // BENJAMÍN / PREBENJAMÍN
  santamariadelmar: "santa",
  santamariadelmarb: "santa",
  santamariadelmarc: "santa",
  santamariadelmard: "santa",

  spcorunessdc: "sportingcorunes",

  // MODESTOS / VETERANOS
  cecebresd: "cecebre",
  clubdomar: "domar",
  herculessd: "herculessd",
  mercuriosdb: "mercurio",
  olimpicocfb: "olimpico",

  sdculturalmaninos: "maninos",
  sdvaldovino: "valdovino",

  oncecaballeros: "oncecaballeros",
  stacruz: "stacruz",
  suevos: "suevos"
};


function obtenerRutaEscudo(equipo) {
  const clubNormalizado = normalizarClub(limpiarEquipo(equipo));
  console.log("Equipo:", equipo, "Normalizado:", clubNormalizado);

  const archivo = mapaEscudos[clubNormalizado] || clubNormalizado;
  console.log("Archivo a usar:", archivo);

  return `./img/crests/${archivo}.png`;
}



function setEscudo(contenedor, ruta) {
  const img = new Image();
  img.onload = () => contenedor.style.backgroundImage = `url("${ruta}")`;
  img.onerror = () => contenedor.style.backgroundImage = `url("/img/crests/escudomini.png")`;
  img.src = ruta;
}
