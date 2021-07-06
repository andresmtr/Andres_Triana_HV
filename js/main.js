//  animation escritura
// var typed = new Typed('.typed', {
//     strings: ['Ingeniero de sistemas', 'Analista de datos', 'Desarrollo', 'Monitoreo y seguimiento'],
//     typeSpeed: 20,
//     backSpeed: 20,
//     fadeOut: true,
//     loop: true,
//     // showCursor: false
//   });

// nombre and

$('#name_a').on("mouseover", function(){
    $('#name_a').animate({fontSize:"40px"});
});

$('#name_a').on("mouseout", function(){
    $('#name_a').animate({fontSize:"30px"});
});

//acerca 

$('#me').on("mouseover", function(){
    $('#me').animate({fontSize:"40px"});
});

$('#me').on("mouseout", function(){
    $('#me').animate({fontSize:"30px"});
});

//skill


$('#skill').on("mouseover", function(){
    $('#skill').animate({fontSize:"40px"});
});

$('#skill').on("mouseout", function(){
    $('#skill').animate({fontSize:"30px"});
});

    /**
     * Array con las imagenes y enlaces que se iran mostrando en la web
     */
     var ofimatica=new Array(
        ['img/office2.png'],
        ['img/office.png'],
    );

     var DesarrolloWeb = new Array(
        ['img/web2.png'],
        ['img/web.png'],
     )

     var dataScience = new Array(
        ['img/data2.png'],
        ['img/data.png'],
    )

    var develop = new Array(
        ['img/programacion2.png'],
        ['img/programacion.png'],
    )


    var contador=0;
    /**
     * Funcion para cambiar la imagen y link
     */
    function rotarImagenes()
    {
        // cambiamos la imagen y la url
        contador++
        document.getElementById("ofimatica").src=ofimatica[contador%ofimatica.length][0];
        $("#ofimatica").fadeIn(500);
        $("#ofimatica").fadeOut(2000);

        document.getElementById("des-web").src=DesarrolloWeb[contador%DesarrolloWeb.length][0];
        $("#des-web").fadeIn(1000);
        $("#des-web").fadeOut(2000);

        document.getElementById("data-science").src=dataScience[contador%dataScience.length][0];
        $("#data-science").fadeIn(1500);
        $("#data-science").fadeOut(2000);

        document.getElementById("develop").src=develop[contador%develop.length][0];
        $("#develop").fadeIn(2000);
        $("#develop").fadeOut(2000);
        

    }
    /**
     * Función que se ejecuta una vez cargada la página
     */
    onload=function()
    {
        // Cargamos una imagen aleatoria
        rotarImagenes();
 
        // Indicamos que cada 5 segundos cambie la imagen
        setInterval(rotarImagenes,4000);

    }

    // nombre and



    