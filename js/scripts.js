$(document).ready(function () {

    function carrito() {
        var cantidad = $(".producto").length;
        $("header .user-utils #shopping-cart > span").text(cantidad);
        if(cantidad == 0){
           $("#main").text("No hay productos en tu carrito");
        }
    }
    carrito();

    $("#delete1").click(function(){
        $("#prod1").remove();
        carrito();
        sumar();
      });

    $("#delete2").click(function(){
        $("#prod2").remove();
        carrito();
        sumar();
      });

    $("#delete3").click(function(){
        $("#prod3").remove();
        carrito();
        sumar();
      });


    function sumar(){
        var suma = 0;
        $('.precio').each(function(){
            suma += parseFloat($(this).text());
            $("#total").text(suma);
        });
    }
      
    sumar();

    $(document).scroll(function() {

      if($(this).scrollTop() > 25){
        $('#totop').fadeIn(500);
  
      }else{
        $('header').removeClass("fixed");
        $('#totop').fadeOut(500);
      }
    });
  
    $('#totop').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
    });
      
});