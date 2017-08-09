$(document).ready(function(){
  $("#cajaCiudad").append('<p>'+localStorage.getItem("ciudad")+'</p>');
  $("#submit").click(function(e){
      var error = "";
      var vacio = "";

      if ($("#infoInput").val() == "") {

        vacio += "<br>Debe completar el campo";
      }

      if (vacio != "") {
        error += "<p>El siguiente campo se encuentra vacío" + vacio;
      }

      if (error != "") {
        $("#error").html(error);
      } else {
        $("#error").hide();
        //e.preventDefault();
        window.location = "indexFilter.html";
        localStorage.setItem("ciudad", $("#infoInput").val());
      }
    });

  localStorage.setItem("fechaIn", $("#fechaInput").val());
    console.log(localStorage);
});