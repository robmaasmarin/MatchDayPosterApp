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

  // ACADEMIAS / COLEGIOS
  acrueiro: "rueiro",
  cdcalasanz: "calasanz2",
  cdcalasanzb: "calasanz2",
  cdcalasanzc: "calasanz2",
  cdcalasanzd: "calasanz2",
  cdcalasanze: "calasanz2",
  cdeportivocristal: "cristal",
  cdmarte: "marte",
  cdobrero: "cdobrero2",
  adliceo: "liceo",
  colegioliceo: "liceo",
  colegioobradoiro: "obradoiro",
  clubcompaniademaria: "cmaria",
  clubpolideportivoesclavas: "esclavas2",
  companiademaria: "cmaria",
  companiademariab: "cmaria",
  companiademariac: "cmaria",
  cpesclavas: "esclavas2",
  cpesclavasa: "esclavas2",
  liceodemonelossd: "liceomonelos",
  liceodemonelossdb: "liceomonelos",

  // BENJAMÍN / PREBENJAMÍN

  santamariadelmar: "santa",
  santamariadelmarb: "santa",
  santamariadelmarc: "santa",
  santamariadelmard: "santa",
  spcorunessdc: "sportingcorunes",

  // CADETES / INFANTIL / OTROS

  adcristorey: "adcristorey",
  atlcercedense: "atcercedense", 
  atleticoperillo: "perillo",
  academiacorunadeportiva: "academia", 
  bergantinoscf: "bergan",
  bergantinoscfc: "bergan",
  carnoedocf: "carnoedo",
  cfcarnoedo: "carnoedo",
  cfbatalladorsd: "batallador",
  cfdeportivoorzan: "orzan",
  clubdefutbolbatalladorsd: "batallador",
  clubdefutbolbatalladorsdb: "batallador",
  escudoorzan: "orzan",
  ozajuvenilsd: "ozatest",
  ozajuvenilsdb: "ozatest",
  ozajuvenilsdc: "ozatest",
  orillamarsd: "orillamar",
  orillamarsdb: "orillamar",
  orillamarsdc: "orillamar",
  portazgosd: "portazgo",
  relampagosd: "relampago",
  sadacf: "sadacf",
  sadaat: "sadaat",
  scdpastoriza: "pastoriza",
  sdbrexolema: "brexolema",
  sdcordenes: "ordes",
  sdcordenesb: "ordes",
  silvasd: "silva",
  silvasdb: "silva",
  silvasdc: "silva",
  sportingcambre: "scambre",
  sportingcambreb: "scambre",
  udjalmeiras: "almeiras",
  udjuvenildealmeiras: "almeiras",
  udjuvenildealmeirasb: "almeiras",
  udpaiosaco: "paiosaco",
  udpaiosacohierros: "paiosaco",
  unioncampestre: "campestre",
  unioncampestreb: "campestre",
  uralespanolcf: "urale",
  uralespanolcfb: "urale",
  uralespanolcfc: "urale",
  uralespanolcfd: "urale",
  victoriacf: "victoria",
  victoriacfb: "victoria",
  victoriacfc: "victoria",
  victoriacfd: "victoria",

  // CIUDAD / BASE

  betanzoscf: "betanzos",
  betanzoscfb: "betanzos",
  cdciudad: "escudomini",
  cdciudadb: "escudomini",
  cdciudadjardin: "cjardin",
  cdciudadjardinb: "cjardin",
  clubdeportivociudad: "escudomini",
  clubdeportivociudadb: "escudomini",
  clubdeportivociudadc: "escudomini",
  clubdeportivociudadcf: "escudomini",

  // CLUBS HISTÓRICOS

  cfozacesuras: "ozacesuras",
  clubrosaliamera: "rmera",
  clubrosaliamerab: "rmera",
  corunaarbococf: "silva",
  eirissd: "eiris",
  galiciagaiteira: "ggaiteira",
  imperatoroar: "imperator",
  imperatoroarb: "imperator",
  imperatoroarc: "imperator",
  maravillasd: "maravillas",
  ozacesurascf: "ozacesuras",
  santirsosd: "santirso",
  santirsosdb: "santirso",
  santirsosdc: "santirso",
  santirsosdd: "santirso",
  sdsantamargarita: "smargarita",
  sdsantamargaritab: "smargarita",
  sinquerersd: "sinquerer",
  sportingmeicende: "smeicende",
  sportingmeicendeb: "smeicende",
  unionsportiva: "usport",
  vionocf: "viono",
  xuventudelaracha: "xularacha",
  xuventudelarachab: "xularacha",

  // MODESTOS / VETERANOS

  cecebresd: "cecebre",
  clubdomar: "domar",
  herculessd: "herculessd",
  mercuriosdb: "mercurio",
  oncecaballeros: "oncecaballeros",
  oncecaballeroscf: "oncecaballeros",
  olimpicocf: "olimpico",
  olimpicocfb: "olimpico",
  piadelacf: "piadela",
  sdculturalmaninos: "maninos",
  sdvaldovino: "valdovino",
  stacruz: "stacruz",
  suevos: "suevos",

  // SPORTING / ATLÉTICOS

  atleticoarteixo: "atarteixo",
  atleticoarteixob: "atarteixo",
  atleticoarteixoc: "atarteixo",
  atleticocastros: "castros",
  atleticocastrosb: "castros",
  atlcorunamontaneros: "montaneros",
  atlcorunamontanerosb: "montaneros",
  atlcorunamontaneroscf: "montaneros",
  atlcorunamontaneroscfb: "montaneros",
  atlcorunamontaneroscfc: "montaneros",
  atlcorunamontaneroscfd: "montaneros",
  atleticosanpedro: "atsanpedro",
  atleticosanpedrob: "atsanpedro",
  seabellasdc: "abella",
  sportingburgo: "spburgo",
  sportingburgob: "spburgo",
  sportingcorunessd: "sportingcorunes",
  sportingcorunessdb: "sportingcorunes",
  sportingcorunesasadorlacabana: "sportingcorunes",
sportingcorunesasadorlacabanab: "sportingcorunes",
  xuventudecrendescf: "xcrendes",

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
function justifyText(element, targetWidthPx) {
    // Reseteamos letter-spacing y forzamos inline-block para medir el ancho REAL del texto
    element.style.letterSpacing = "0px";
    const displayOriginal = element.style.display;
    element.style.display = "inline-block";

    const textoLength = element.textContent.length;
    const anchoNatural = element.getBoundingClientRect().width;

    // Restauramos el display original
    element.style.display = displayOriginal;

    if (textoLength <= 1) return;

    const espacioExtra = (targetWidthPx - anchoNatural) / (textoLength - 1);

    element.style.letterSpacing = Math.max(espacioExtra, 0) + "px";
}

function getFechaWrapperWidth() {
    const icono = document.querySelector("#daytodisplay .icono-fecha");
    const texto = document.querySelector("#daytodisplay .fecha-texto");

    if (!icono || !texto) return null;

    const anchoIcono = icono.getBoundingClientRect().width;
    const anchoTexto = texto.getBoundingClientRect().width;
    const gap = 8; // el mismo valor que pusiste en el CSS del fecha-wrapper

    return anchoIcono + gap + anchoTexto;
}

function alignRows(selectorFecha, selectorHora) {
    const filaFecha = document.querySelector(selectorFecha);
    const filaHora = document.querySelector(selectorHora);

    if (!filaFecha || !filaHora) return;

    // "max-content" fuerza a que el bloque se encoja a su contenido real para medir
    filaFecha.style.width = "max-content";
    filaHora.style.width = "max-content";

    const anchoFecha = filaFecha.getBoundingClientRect().width;
    const anchoHora = filaHora.getBoundingClientRect().width;

    const anchoMax = Math.max(anchoFecha, anchoHora);

    filaFecha.style.width = anchoMax + "px";
    filaHora.style.width = anchoMax + "px";
}

const categoryImages = {
    "AFECCIONADOS": "../img/categories/afeccionadoscanva.png",
    "XUVENIL A": "../img/categories/xuvenil-a.png",
    "XUVENIL B": "../img/categories/xuvenil-b.png",
    "CADETE A": "../img/categories/cadete-a.png",
    "CADETE B": "../img/categories/cadete-b.png",
    "INFANTÍS": "../img/categories/infantiles.png",
    "ALEVÍN A": "../img/categories/alevin-a.png",
    "ALEVÍN B": "../img/categories/alevin-b.png",
    "ALEVÍN C": "../img/categories/alevin-c.png",
    "BENXAMÍNS": "../img/categories/benxamins.png",
    "PREBENXAMÍNS": "../img/categories/prebenxamins.png",
     "VETERANOS": "../img/categories/veteranos.png"
};

const ligaImages = {
  "1ª FUTGAL": "../img/ligas/1futgal.png",
  "2ª FUTGAL": "../img/ligas/2afutgal.png",
  "3ª FUTGAL": "../img/ligas/3afutgal.png",
  "ALEVIN F-7 - SEGUNDA FUTGAL": "../img/ligas/f72afutgal.png",
  "3ª AUTONÓMICA VETERANOS": "../img/ligas/3aautonomica.png"

  // ...
};