$(document).ready(function () {

    function carrito() {
        var cantidad = $(".producto").length;
        $("span").text(cantidad);
    }
    carrito();

   


});