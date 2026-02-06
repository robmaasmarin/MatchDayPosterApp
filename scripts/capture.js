 
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
    downloadLink.download = "html2canvas.png";
    
    // Mover el botón de download debajo del canvas
    resultDiv.append(downloadLink);
  });
}


     