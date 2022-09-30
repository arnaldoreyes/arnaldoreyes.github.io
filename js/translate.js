$(document).ready(function() {
        
    
/*================================================= TRANSLATE ICON =================================================*/ 

    /*el on change detecta cuando cambias el valor de un input o select
      aqui estas detectando cuando se cambia el valor del input con id leguajes
      */
    $('#language-button').on("click", function() {
        
        //obtiene el valor del select segun lo que pusiste en el value del optin te debe devolver es o en dependiendo la opcion seleccionada
        var defaultLang = $(this).attr('data-type');
        //verifica si el valor no esta vacio
        if (defaultLang != "") {
            var ruta = "./js/";
            //concatena la ruta, mas el valor del select + el .json para obtener cual archivo quieres abrir si el es.json o el en.json
            var archivoCadenas = ruta + defaultLang + ".json";
            if (defaultLang == 'en') {
                $(this).attr('data-type', 'es');
                $(this).text('en');
            } else {
                $(this).attr('data-type', 'en');
                $(this).text('es');
            }
            /*el getJson va a recorrer el json que le pasas y 
            te va a devolver todo lo que tienes alli en la variable
             data, si quieres has un console.log(data) para que verifiques 
             si esta leyendo o no el archivo y como te lo devuelve*/

            $.getJSON(archivoCadenas).done(function(data) {

                /* El .each es un ciclo para objetos si no me equivoco,
                 lo que va hacer es obtener todos los objetos donde esta la clase .js-translate 
                 y como tiene un .each los va a  recorrer*/
                $('.js-translate').each(function() {
                    //aqui va a obtener el valor que pusiste en el data-string ejemplo  "menu_shop"
                    var identificador = $(this).attr('data-string');
                    //aqui accedes al valor que esta en menu_shop, como data es el json, accederias asi data["menu_shop"]
                    //luego eso que acabas de optener se lo insertas al texto de ese opbejo, es decir, al texto de ese p, o a o h1
                    $(this).text(data[identificador]);
                });
            });

        }
    });    
    
    //llama al change 
    $('#lenguaje').trigger('change');

});