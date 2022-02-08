$(document).ready(function () {

    function carrito() {
        var cantidad = $(".producto").length;
        $("span").text(cantidad);
        if(cantidad == 0){
           $("#main").text("No hay productos en tu carrito");
        }
    }
    carrito();

    $("#delete1").click(function(){
        $("#prod1").remove();
        carrito();
      });

    $("#delete2").click(function(){
        $("#prod2").remove();
        carrito();
      });

    $("#delete3").click(function(){
        $("#prod3").remove();
        carrito();
      });

      var suma = 0;
    $('.precio').each(function(){
        suma += parseFloat($(this).val());
        $("#precio").text(suma);
      });
      
});