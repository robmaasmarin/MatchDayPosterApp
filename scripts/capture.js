 
      function captureContent() { 
  const elm = document.querySelector(".cartel");
  const resultDiv = document.querySelector(".result");
  const downloadLink = document.querySelector(".a");
  
  // Limpiar resultado anterior si existe
  resultDiv.innerHTML = '';
  
  html2canvas(elm).then(function(canvas) { 
    resultDiv.append(canvas);
    
    let cvs = document.querySelector("canvas"); 
    downloadLink.href = cvs.toDataURL(); 
    const ahora = new Date();
    // nombre de archivo variable para evitar problemas al descargar en smartphones
    const nombreArchivo = `cartel_${ahora.getFullYear()}-${ahora.getMonth()+1}-${ahora.getDate()}_${ahora.getHours()}-${ahora.getMinutes()}-${ahora.getSeconds()}.png`;

    downloadLink.download = nombreArchivo;
    
    // Mover el botón de download debajo del canvas
    resultDiv.append(downloadLink);
  });
}


     