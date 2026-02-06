
function mostrarEscudoVisitante() {
  const select = document.getElementById("chapter");
  const contenedor = document.getElementById("visitante");

  if (!select.value) {
    contenedor.style.backgroundImage = "";
    return;
  }

  const ruta = obtenerRutaEscudo(select.value);
setEscudo(contenedor, ruta);
}



/*function escudoVisitante() {
    if (document.getElementById("chapter").value == "C.D. CIUDAD" ||document.getElementById("chapter").value == "C.D. CIUDAD B" ) {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Infantil_A/escudomini.png)";
    }
    else if (document.getElementById("chapter").value == "C. DEPORTIVO CRISTAL") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Modestos/cristal.png)"
    }
    else if (document.getElementById("chapter").value == "C.D. CALASANZ") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Modestos/calasanz2.png)"
    }
    else if (document.getElementById("chapter").value == "C.D. CIUDAD JARDIN") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Modestos/cjardin.png)"
    }
    else if (document.getElementById("chapter").value == "CORUÑA ARBOCO C. F." || document.getElementById("chapter").value == "SILVA S.D." || document.getElementById("chapter").value == "SILVA S.D. C"|| document.getElementById("chapter").value == "SILVA S.D. B") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Modestos/silva.png)"
    }
    else if (document.getElementById("chapter").value == "EIRÍS S.D.") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Modestos/eiris.png)"
    }
    else if (document.getElementById("chapter").value == "GALICIA GAITEIRA") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Modestos/ggaiteira.png)"
    }
    else if (document.getElementById("chapter").value == "IMPERATOR O.A.R"|| document.getElementById("chapter").value == "IMPERATOR O.A.R. C"  ) {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Modestos/imperator.png)"
    }
    else if (document.getElementById("chapter").value == "LICEO DE MONELOS S.D." || document.getElementById("chapter").value == "LICEO DE MONELOS S.D. B") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Modestos/liceomonelos.png)"
    }
    else if (document.getElementById("chapter").value == "MARAVILLAS S.D.") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Modestos/maravillas.png)"
    }
    else if (document.getElementById("chapter").value == "S.D. SANTA MARGARITA") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Modestos/smargarita.png)"
    }
    else if (document.getElementById("chapter").value == "SADA ATLÉTICO CLUB FUTBOL") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Modestos/sadaat.png)"
    }
    else if (document.getElementById("chapter").value == "SIN QUERER S.D.") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Modestos/sinquerer.png)"
    }
    else if (document.getElementById("chapter").value == "SPORTING CORUÑES S.D." || document.getElementById("chapter").value == "SPORTING CORUÑES S.D. B" || document.getElementById("chapter").value == "SP CORUÑÉS S.D.C. C") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Modestos/sportingcorunes.png)"
    }
    else if (document.getElementById("chapter").value == "UNION SPORTIVA") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Modestos/usport.png)"
    }
    else if (document.getElementById("chapter").value == "VIOÑO C.F.") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Modestos/viono.png)"
    }
    else if (document.getElementById("chapter").value == "ATLETICO CASTROS"  || document.getElementById("chapter").value == "ATLÉTICO CASTROS" || document.getElementById("chapter").value == "ATLÉTICO CASTROS B" || document.getElementById("chapter").value == "ATLÉTICO CASTROS C"|| document.getElementById("chapter").value == "ATLETICO CASTROS D") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Juveniles/castros.png)"
    }
    else if (document.getElementById("chapter").value == "C.D. MARTE") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Juveniles/marte.png)"
    }
    else if (document.getElementById("chapter").value == "C.F. DEPORTIVO ORZÁN" || document.getElementById("chapter").value == "C.F. DEPORTIVO ORZÁN B") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Juveniles/orzan.png)"
    }
    else if (document.getElementById("chapter").value == "COLEGIO OBRADOIRO" || document.getElementById("chapter").value == "A.D.C. OBRADOIRO") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Juveniles/obradoiro.png)"
    }
    else if (document.getElementById("chapter").value == "COMPAÑÍA DE MARÍA" || document.getElementById("chapter").value == "COMPAÑÍA DE MARÍA B" || document.getElementById("chapter").value == "COMPAÑÍA DE MARÍA C") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Juveniles/cmaria.png)"
    }
    else if (document.getElementById("chapter").value == "IMPERATOR O.A.R. B" || document.getElementById("chapter").value == "IMPERATOR OAR C" || document.getElementById("chapter").value == "IMPERATOR O.A.R.") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Juveniles/imperator.png)"
    }
    else if (document.getElementById("chapter").value == "OZA JUVENIL S.D." || document.getElementById("chapter").value == "OZA JUVENIL S.D. B" || document.getElementById("chapter").value == "OZA JUVENIL S.D. C" || document.getElementById("chapter").value == "OZA JUVENIL S.D. D") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Juveniles/ozatest.png)"
    }
    else if (document.getElementById("chapter").value == "TORRE S.D.") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Juveniles/torresd.png)"
    }
    else if (document.getElementById("chapter").value == "ATL. CORUÑA MONTAÑEROS C.F. C" || document.getElementById("chapter").value == "ATL. CORUÑA MONTAÑEROS C.F B" ) {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Cadetes/montaneros.png)"
    }
    else if (document.getElementById("chapter").value == "CLUB POLIDEPORTIVO ESCLAVAS" ||  document.getElementById("chapter").value == "C.P. ESCLAVAS A") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Cadetes/esclavas2.png)"
    }
    else if (document.getElementById("chapter").value == "ORILLAMAR S.D. B" || document.getElementById("chapter").value == "ORILLAMAR S.D. C" || document.getElementById("chapter").value == "ORILLAMAR S.D. D"|| document.getElementById("chapter").value == "ORILLAMAR S.D.") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Cadetes/orillamar.png)"
    }
    else if (document.getElementById("chapter").value == "CLUB DE FÚTBOL BATALLADOR S.D." || document.getElementById("chapter").value == "CF BATALLADOR S.D. B"  || document.getElementById("chapter").value == "C. F. BATALLADOR S.D. B") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Infantil_A/batallador.png)"
    }
    else if (document.getElementById("chapter").value == "CLUB ROSALÍA MERA B" || document.getElementById("chapter").value == "CLUB ROSALÍA MERA") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Infantil_A/rmera.png)"
    }
    else if (document.getElementById("chapter").value == "MARISTAS CORUÑA F.S.") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Infantil_A/maristas2.png)"
    }
    else if (document.getElementById("chapter").value == "RELÁMPAGO S. D." || document.getElementById("chapter").value == "RELÁMPAGO S. D. B") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Infantil_A/relampago.png)"
    }
    else if (document.getElementById("chapter").value == "S.C.D. SAN CRISTOBAL") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Infantil_A/san_cristobal_das_vinas.png)"
    }
    else if (document.getElementById("chapter").value == "URAL ESPAÑOL C.F. C" || document.getElementById("chapter").value == "URAL ESPAÑOL C.F. D"|| document.getElementById("chapter").value == "URAL ESPAÑOL C.F. VUELTA XENTES B" || document.getElementById("chapter").value == "URAL ESPAÑOL C.F. B"|| document.getElementById("chapter").value == "URAL ESPAÑOL C.F.") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Infantil_A/urale.png)"
    }
    else if (document.getElementById("chapter").value == "SANTA MARIA DEL MAR B" || document.getElementById("chapter").value == "SANTA MARIA DEL MAR D" || document.getElementById("chapter").value == "SANTA MARIA DEL MAR"|| document.getElementById("chapter").value == "SANTA MARIA DEL MAR C") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Infantil_B/santa.png)"
    }
    else if (document.getElementById("chapter").value == "VICTORIA C.F." ||document.getElementById("chapter").value == "VICTORIA C.F. E" || document.getElementById("chapter").value == "VICTORIA C.F. D" || document.getElementById("chapter").value == "VICTORIA C.F. C"|| document.getElementById("chapter").value == "VICTORIA C.F. B") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Alevines/victoria.png)"
    }
    /////////////////////////////////////////////////////////////////////////////////////////
    else if (document.getElementById("chapter").value == "COIRÓS VETERANOS C.F.") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Veteranos/coiros.png)"
    }
    else if (document.getElementById("chapter").value == "S.D. CULTURAL MANIÑOS") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Veteranos/maninos.png)"
    }
    else if (document.getElementById("chapter").value == "S.D. VALDOVIÑO") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Veteranos/valdovino.png)"
    }
    else if (document.getElementById("chapter").value == "C.D. CALASANZ C" || document.getElementById("chapter").value == "C.D. CALASANZ B" || document.getElementById("chapter").value == "C.D. CALASANZ E") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/Cadetes/calasanz.png)"
    }

    /////////////update season 2024-25
        /////////////update season 2024-25 modestos
        else if (document.getElementById("chapter").value == "C.D. LARIN") {
            document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/larin.png)"
        }
        else if (document.getElementById("chapter").value == "RACING SADA F.C.") {
            document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/rsada.png)"
        }
        else if (document.getElementById("chapter").value == "S.C.D. PASTORIZA") {
            document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/pastoriza.png)"
        }
        else if (document.getElementById("chapter").value == "SPORTING MEICENDE B") {
            document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/smeicende.png)"
        }
        else if (document.getElementById("chapter").value == "SUEVOS C.F.") {
            document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/suevos.png)"
        }
        /////////////update season 2024-25 cadetes A
    
        else if (document.getElementById("topic").value == "ATLETICO ARTEIXO" || document.getElementById("chapter").value == "ATLETICO ARTEIXO B"  || document.getElementById("chapter").value == "ATLETICO ARTEIXO C" || document.getElementById("chapter").value == "ATLETICO ARTEIXO D") {
            document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/atarteixo.png)"
        }
        else if (document.getElementById("chapter").value == "ATLETICO SAN PEDRO") {
            document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/atsanpedro.png)"
        }
        else if (document.getElementById("chapter").value == "C.D. OBRERO") {
            document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/cdobrero2.png)"
        }
        else if (document.getElementById("chapter").value == "S.D. BREXO LEMA") {
            document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/brexolema.png)"
        }
        else if (document.getElementById("chapter").value == "SADA C.F. B" || document.getElementById("chapter").value == "SADA C.F.") {
            document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/sadacf.png)"
        }
        else if (document.getElementById("chapter").value == "SAN TIRSO S.D. C") {
            document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/santirso.png)"
        }
        else if (document.getElementById("chapter").value == "SANTA CRUZ C.F.") {
            document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/stacruz.png)"
        }
        else if (document.getElementById("chapter").value == "SPORTING CAMBRE B" || document.getElementById("chapter").value == "SPORTING CAMBRE C") {
            document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/scambre.png)"
        }
        else if (document.getElementById("chapter").value == "U.D.J. ALMEIRAS" || document.getElementById("chapter").value == "U.D.J. ALMEIRAS B") {
            document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/almeiras.png)"
        }
        else if (document.getElementById("chapter").value == "PORTAZGO S.D.") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/portazgo.png)"
    }

        /////////////update season 2024-25 cadetes B
    else if (document.getElementById("chapter").value == "AD CRISTO REY" || document.getElementById("chapter").value == "A.D. CRISTO REY") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/adcristorey.png)"
    }
    else if (document.getElementById("chapter").value == "AD CULLEREDO" || document.getElementById("chapter").value == "A.D. CULLEREDO") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/adculleredo.png)"
    }
    else if (document.getElementById("chapter").value == "XUVENTUDE LARACHA") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/xularacha.png)"
    }
    else if (document.getElementById("chapter").value == "ONCE CABALLEROS" || document.getElementById("chapter").value == "ONCE CABALLEROS B") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/oncecaballeros.png)"
    }
    else if (document.getElementById("chapter").value == "UD PAIOSACO" || document.getElementById("chapter").value == "U.D. PAIOSACO- HIERROS") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/paiosaco.png)"
    }
    else if (document.getElementById("chapter").value == "UNIÓN CAMPESTRE" || document.getElementById("chapter").value == "UNIÓN CAMPESTRE C") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/campestre.png)"


    }
    else if (document.getElementById("chapter").value == "SPORTING BURGO \"B\"") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/spburgo.png)"
    }
    
     else if (document.getElementById("chapter").value == "BERGANTIÑOS C.F. C") {
        document.getElementById("visitante").style.backgroundImage = "url(./img/escudos/crests/bergan.png)"
    }
    else if (document.getElementById("chapter").value == "COLEGIO LICEO") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/liceo.png)"
    }
    else if (document.getElementById("chapter").value == "CLUB DO MAR") {
        document.getElementById("local").style.backgroundImage = "url(./img/escudos/crests/domar.png)"
    }
    
}
*/