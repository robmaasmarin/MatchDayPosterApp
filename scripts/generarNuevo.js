
        function myFunction() {
          let text = "Generar nuevo cartel?";
          if (confirm(text) == true) {
            window.location.reload();
          } else {
            text = "You canceled!";
          }
          document.getElementById("demo").innerHTML = text;
        }
        