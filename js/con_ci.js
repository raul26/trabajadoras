$(document).ready(function(){

  $('#menu').mouseenter(function  () {
    $('#sub-menu').show();
  })
  $('#cont').mouseleave(function  () {
    $('#sub-menu').hide();
  })
  var slideNumber=0;

  $(".content").hide();
  $("#cero").show();
  $( "#next" ).click(function(){
  slideNumber=slideNumber+1;

    doHideShow(slideNumber);

    if(slideNumber==3){
   var url      = window.location.href;
       var pageFinal= url.replace("hablemos_seguridad.html", "index.html");

   window.location.replace(pageFinal);
   slideNumber=0;
   console.log(slideNumber);
   console.log(pageFinal);

  }

   })

   $( "#back" ).click(function(){
  slideNumber=slideNumber-1;
  doHideShow(slideNumber);


  if(slideNumber<0){
   var url      = window.location.href;
   var pageFinal= url.replace("decalogo_derechos.html", "index.html");
   window.location.replace(pageFinal);
   slideNumber=0;
   console.log(slideNumber);
   console.log(pageFinal);

  }

   })

});

function doHideShow (slideNumber) {
   var convertidoLetra = returnLetra(slideNumber);
  $(".content").hide();
  console.log(convertidoLetra);
  $('#'+convertidoLetra).show();


}


function returnLetra (slideNumber) {
    var divSelected="";
    switch(slideNumber) {
    case 0:
        divSelected="cero";
        break;
    case 1:
        divSelected="uno";
        break;
    case 2:
        divSelected="dos";
        break;
    case 3:
        divSelected="tres";
        break;
    case 4:
        divSelected="cuatro";
         break;
    case 5:
        divSelected="cinco";
         break;
    case 6:
        divSelected="seis";
         break;
    case 7:
        divSelected="siete";
         break;
    case 8:
        divSelected="ocho";
         break;
    case 9:
        divSelected="nueve";
         break;
    case 10:
        divSelected="diez";
         break;
  }
    return divSelected;
}
