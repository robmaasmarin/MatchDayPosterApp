function mostrarEscudoLocal() {
  const select = document.getElementById("topic");
  const contenedor = document.getElementById("local");

  if (!select.value) {
    contenedor.style.backgroundImage = "";
    return;
  }

  // Aquí ya obtiene la ruta correcta, con fallback
  const ruta = obtenerRutaEscudo(select.value);
setEscudo(contenedor, ruta);
}






/*function mostrarEscudo() {
    if (document.getElementById("topic").value == "C.D. CIUDAD" ||document.getElementById("topic").value == "C.D. CIUDAD B" ) {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Infantil_A/escudomini.png)";
    }
    else if (document.getElementById("topic").value == "C. DEPORTIVO CRISTAL") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Modestos/cristal.png)"
    }
    else if (document.getElementById("topic").value == "C.D. CALASANZ") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Modestos/calasanz2.png)"
    }
    else if (document.getElementById("topic").value == "C.D. CIUDAD JARDIN") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Modestos/cjardin.png)"
    }
    else if (document.getElementById("topic").value == "CORUÑA ARBOCO C. F." || document.getElementById("topic").value == "SILVA S.D." || document.getElementById("topic").value == "SILVA S.D. C" || document.getElementById("topic").value == "SILVA S.D. B") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Modestos/silva.png)"
    }
    else if (document.getElementById("topic").value == "EIRÍS S.D.") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Modestos/eiris.png)"
    }
    else if (document.getElementById("topic").value == "GALICIA GAITEIRA") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Modestos/ggaiteira.png)"
    }
    else if (document.getElementById("topic").value == "IMPERATOR O.A.R" || document.getElementById("topic").value == "IMPERATOR O.A.R. C"  ) {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Modestos/imperator.png)"
    }
    else if (document.getElementById("topic").value == "LICEO DE MONELOS S.D." || document.getElementById("topic").value == "LICEO DE MONELOS S.D. B") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Modestos/liceomonelos.png)"
    }
    else if (document.getElementById("topic").value == "MARAVILLAS S.D.") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Modestos/maravillas.png)"
    }
    else if (document.getElementById("topic").value == "S.D. SANTA MARGARITA") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Modestos/smargarita.png)"
    }
    else if (document.getElementById("topic").value == "SADA ATLÉTICO CLUB FUTBOL") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Modestos/sadaat.png)"
    }
    else if (document.getElementById("topic").value == "SIN QUERER S.D.") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Modestos/sinquerer.png)"
    }
    else if (document.getElementById("topic").value == "SPORTING CORUÑES S.D." || document.getElementById("topic").value == "SPORTING CORUÑES S.D. B"|| document.getElementById("topic").value == "SP CORUÑÉS S.D.C. C") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Modestos/sportingcorunes.png)"
    }
    else if (document.getElementById("topic").value == "UNION SPORTIVA") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Modestos/usport.png)"
    }
    else if (document.getElementById("topic").value == "VIOÑO C.F.") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Modestos/viono.png)"
    }
    else if (document.getElementById("topic").value == "ATLETICO CASTROS" || document.getElementById("topic").value == "ATLÉTICO CASTROS" || document.getElementById("topic").value == "ATLÉTICO CASTROS B" || document.getElementById("topic").value == "ATLÉTICO CASTROS C"|| document.getElementById("topic").value == "ATLETICO CASTROS D") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/castros.png)"
    }
    else if (document.getElementById("topic").value == "C.D. MARTE") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Juveniles/marte.png)"
    }
    else if (document.getElementById("topic").value == "C.F. DEPORTIVO ORZÁN" || document.getElementById("topic").value == "C.F. DEPORTIVO ORZÁN B") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Juveniles/orzan.png)"
    }
    else if (document.getElementById("topic").value == "COLEGIO OBRADOIRO" || document.getElementById("topic").value == "A.D.C. OBRADOIRO") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Juveniles/obradoiro.png)"
    }
    else if (document.getElementById("topic").value == "COMPAÑÍA DE MARÍA" || document.getElementById("topic").value == "COMPAÑÍA DE MARÍA B" || document.getElementById("topic").value == "COMPAÑÍA DE MARÍA C") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Juveniles/cmaria.png)"
    }
    else if (document.getElementById("topic").value == "IMPERATOR O.A.R. B" || document.getElementById("topic").value == "IMPERATOR OAR C" || document.getElementById("topic").value == "IMPERATOR O.A.R.") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Juveniles/imperator.png)"
    }
    else if (document.getElementById("topic").value == "OZA JUVENIL S.D." || document.getElementById("topic").value == "OZA JUVENIL S.D. B" || document.getElementById("topic").value == "OZA JUVENIL S.D. C" || document.getElementById("topic").value == "OZA JUVENIL S.D. D") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Juveniles/ozatest.png)"
    }
    else if (document.getElementById("topic").value == "TORRE S.D.") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Juveniles/torresd.png)"
    }
    else if (document.getElementById("topic").value == "ATL. CORUÑA MONTAÑEROS C.F. C" || document.getElementById("topic").value == "ATL. CORUÑA MONTAÑEROS C.F B" ) {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Cadetes/montaneros.png)"
    }
    else if (document.getElementById("topic").value == "CLUB POLIDEPORTIVO ESCLAVAS" || document.getElementById("topic").value == "C.P. ESCLAVAS A") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Cadetes/esclavas2.png)"
    }
    else if (document.getElementById("topic").value == "ORILLAMAR S.D. B" || document.getElementById("topic").value == "ORILLAMAR S.D. C" || document.getElementById("topic").value == "ORILLAMAR S.D. D" || document.getElementById("topic").value == "ORILLAMAR S.D.") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Cadetes/orillamar.png)"
    }
    else if (document.getElementById("topic").value == "CLUB DE FÚTBOL BATALLADOR S.D." || document.getElementById("topic").value == "CF BATALLADOR S.D. B" || document.getElementById("topic").value == "C. F. BATALLADOR S.D. B") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Infantil_A/batallador.png)"
    }
    else if (document.getElementById("topic").value == "CLUB ROSALÍA MERA B" || document.getElementById("topic").value == "CLUB ROSALÍA MERA") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Infantil_A/rmera.png)"
    }
    else if (document.getElementById("topic").value == "MARISTAS CORUÑA F.S.") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Infantil_A/maristas2.png)"
    }
    else if (document.getElementById("topic").value == "RELÁMPAGO S. D." || document.getElementById("topic").value == "RELÁMPAGO S. D. B") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Infantil_A/relampago.png)"
    }
    else if (document.getElementById("topic").value == "S.C.D. SAN CRISTOBAL") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Infantil_A/san_cristobal_das_vinas.png)"
    }
    else if (document.getElementById("topic").value == "URAL ESPAÑOL C.F. C" || document.getElementById("topic").value == "URAL ESPAÑOL C.F. VUELTA XENTES B" || document.getElementById("topic").value == "URAL ESPAÑOL C.F. B"|| document.getElementById("topic").value == "URAL ESPAÑOL C.F." || document.getElementById("topic").value == "URAL ESPAÑOL C.F. B"|| document.getElementById("topic").value == "URAL ESPAÑOL C.F. D") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Infantil_A/urale.png)"
    }
    else if (document.getElementById("topic").value == "SANTA MARIA DEL MAR B" || document.getElementById("topic").value == "SANTA MARIA DEL MAR D" || document.getElementById("topic").value == "SANTA MARIA DEL MAR" || document.getElementById("topic").value == "SANTA MARIA DEL MAR C") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Infantil_B/santa.png)"
    }
    else if (document.getElementById("topic").value == "VICTORIA C.F." || document.getElementById("topic").value == "VICTORIA C.F. E" || document.getElementById("topic").value == "VICTORIA C.F. D" || document.getElementById("topic").value == "VICTORIA C.F. C"|| document.getElementById("topic").value == "VICTORIA C.F. B") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Alevines/victoria.png)"
    }
    /////////////////////////////////////////////////////////////////////////////////////////
    else if (document.getElementById("topic").value == "COIRÓS VETERANOS C.F.") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Veteranos/coiros.png)"
    }
    else if (document.getElementById("topic").value == "S.D. CULTURAL MANIÑOS") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Veteranos/maninos.png)"
    }
    else if (document.getElementById("topic").value == "S.D. VALDOVIÑO") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Veteranos/valdovino.png)"
    }
    else if (document.getElementById("topic").value == "C.D. CALASANZ C" || document.getElementById("topic").value == "C.D. CALASANZ B" || document.getElementById("topic").value == "C. D. CALASANZ D"|| document.getElementById("topic").value == "C.D. CALASANZ E") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Cadetes/calasanz.png)"
    }
    /////////////update season 2024-25 modestos
    else if (document.getElementById("topic").value == "C.D. LARIN") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/larin.png)"
    }
    else if (document.getElementById("topic").value == "RACING SADA F.C.") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/rsada.png)"
    }
    else if (document.getElementById("topic").value == "S.C.D. PASTORIZA") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/pastoriza.png)"
    }
    else if (document.getElementById("topic").value == "SPORTING MEICENDE B") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/smeicende.png)"
    }
    else if (document.getElementById("topic").value == "SUEVOS C.F.") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/suevos.png)"
    }
    /////////////update season 2024-25 cadetes A

    else if (document.getElementById("topic").value == "ATLETICO ARTEIXO" || document.getElementById("topic").value == "ATLETICO ARTEIXO B" || document.getElementById("topic").value == "ATLETICO ARTEIXO C" || document.getElementById("topic").value == "ATLETICO ARTEIXO D") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/atarteixo.png)"
    }
    else if (document.getElementById("topic").value == "ATLETICO SAN PEDRO") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/atsanpedro.png)"
    }
    else if (document.getElementById("topic").value == "C.D. OBRERO") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/cdobrero2.png)"
    }
    else if (document.getElementById("topic").value == "S.D. BREXO LEMA") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/brexolema.png)"
    }
    else if (document.getElementById("topic").value == "SADA C.F. B" || document.getElementById("topic").value == "SADA C.F.") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/sadacf.png)"
    }
    else if (document.getElementById("topic").value == "SAN TIRSO S.D. C") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/santirso.png)"
    }
    else if (document.getElementById("topic").value == "SANTA CRUZ C.F.") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/stacruz.png)"
    }
    else if (document.getElementById("topic").value == "SPORTING CAMBRE B" || document.getElementById("topic").value == "SPORTING CAMBRE C") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/scambre.png)"
    }
    else if (document.getElementById("topic").value == "U.D.J. ALMEIRAS" || document.getElementById("topic").value == "U.D.J. ALMEIRAS B") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/almeiras.png)"
    }
    else if (document.getElementById("topic").value == "PORTAZGO S.D.") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/portazgo.png)"
    }

    /////////////update season 2024-25 cadetes B
    else if (document.getElementById("topic").value == "AD CRISTO REY" || document.getElementById("topic").value == "A.D. CRISTO REY") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/adcristorey.png)"
    }
    else if (document.getElementById("topic").value == "AD CULLEREDO" || document.getElementById("topic").value == "A.D. CULLEREDO") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/adculleredo.png)"
    }
    else if (document.getElementById("topic").value == "XUVENTUDE LARACHA") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/xularacha.png)"
    }
    else if (document.getElementById("topic").value == "ONCE CABALLEROS" || document.getElementById("topic").value == "ONCE CABALLEROS B") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/oncecaballeros.png)"
    }
    else if (document.getElementById("topic").value == "UD PAIOSACO" || document.getElementById("topic").value == "U.D. PAIOSACO- HIERROS") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/paiosaco.png)"
    }
    else if (document.getElementById("topic").value == "UNIÓN CAMPESTRE" || document.getElementById("topic").value == "UNIÓN CAMPESTRE C") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/campestre.png)"
    }
    else if (document.getElementById("topic").value == "SPORTING BURGO \"B\"") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/spburgo.png)"
    }

     else if (document.getElementById("topic").value == "BERGANTIÑOS C.F. C") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/bergan.png)"
    }

      else if (document.getElementById("topic").value == "COLEGIO LICEO") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/liceo.png)"
    }
    else if (document.getElementById("topic").value == "CLUB DO MAR") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/domar.png)"
    }



}

function escudoVisitante() {
    if (document.getElementById("topic").value == "C.D. CIUDAD") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/Infantil_A/escudomini.png)";
    }
    else if (document.getElementById("chapter").value == "ATL. CORUÑA MONTAÑEROS C.F. C") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Infantil_A/urale.png)";
    }
    
}
*/
