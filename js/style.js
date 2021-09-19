    $('.carousel').carousel({
        interval: 3500
    })

    $(document).ready(function () {
        new WOW().init();
    });

    //document.getElementById('Nav-A').className = '';

    //BOTON ARRIBA
    $(document).ready(function () {

        new WOW().init();

        $(window).scroll(function () {
            if ($(this).scrollTop() > 400) {
                $('.btn-up').slideDown(100);
            } else {
                $('.btn-up').slideUp(100);
            }
        });
    });

    //FUNCION DE FILTRO     
    $(document).ready(function () {
        //AGREGA CLASE ACTIVE AL PRIMER BOTON
        $('.categorias .btn_Item[filtro="T_"]').addClass('bt-activo')

        $('.btn_Item').click(function () {
            var catProduct = $(this).attr('filtro');
            //console.log(catProduct);

            //AGREGA CLASE ACTIVE AL BOTON SELECCIONADO
            $('.btn_Item').removeClass('bt-activo');
            $(this).addClass('bt-activo');

            //OCULTANDO PRODUCTOS
            $('.id_producto').hide();

            //MOSTRANDO PRODUCTOS
            $('.id_producto[filtro="' + catProduct + '"]').show();
            document.getElementById("Cards").classList.add("row-cols-md-3", "row-cols-lg-4");
            MTP();
        });

        $('.btn_Item[filtro="T_"]').click(function () {
            $('.id_producto').show();
        });
    });