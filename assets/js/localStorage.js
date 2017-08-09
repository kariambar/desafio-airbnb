$(document).ready(function(){
  //show items saved in local storage
/*  $("#infoInput").html(localStorage.getItem("ciudad"));

$(document).ready(function(){
  $("#caja-imprimir").html(localStorage.getItem("emailLocal"));*/
  //$("#email-box").append('<p>'+localStorage.getItem("localEmail")+'<p>');
  /*var mostrarEmail = function(){
    //show items saved in local storage
      return $("#email").value(localStorage.getItem("localEmail"));
  }
  console.log(mostrarEmail);*/

$("#submit").click(function(e){
    //console.log("welcome to the menu");
    //console.log(isPass() + " FALSE = NO ES UN NUMERO, TRUE = EUREKA");
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
  //console.log(localStorage)
});