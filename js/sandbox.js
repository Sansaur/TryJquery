/*
Selecciones

Seleccionar todos los elementos div que poseen la clase “module”.
Especificar tres selecciones que puedan seleccionar el tercer ítem de la lista desordenada #myList. ¿Cuál es el mejor para utilizar? ¿Porqué?
Seleccionar el elemento label del elemento input utilizando un selector de atributo.
Averiguar cuantos elementos en la página están ocultos (ayuda: .length).
Averiguar cuantas imágenes en la página poseen el atributo alt.
Seleccionar todas las filas impares del cuerpo de la tabla.
*/

$(document).ready(function(){
    //selecciones();
    //recorrerElDom();
    //manipulacion();
    sugerencia();
});

function selecciones(){
    //
    var divsModule = $('.module');
    //
    $("#myList:nth-child(3)");
    $("#myList").get(3);
    $("#myList").children()[3];
    $("#myList").find(3);
    //
    $('input').closest('label');
    //
    var hiddens = $('*:hidden').length;
    console.warn(hiddens);
    //
    var imgsAlt = $('img').attr("alt").length;
    console.warn(imgsAlt);
    //
    var oddTableRows = $('tr:odd')
}

/*
Recorrer el DOM

Seleccionar todas las imágenes en la página; registrar en la consola el atributo alt de cada imagen.
Seleccionar el elemento input, luego dirigirse hacia el formulario y añadirle una clase al mismo.
Seleccionar el ítem que posee la clase “current” dentro de la lista #myList y remover dicha clase en el elemento; luego añadir la clase “current” al siguiente ítem de la lista.
Seleccionar el elemento select dentro de #specials; luego dirigirse hacia el botón submit.
Seleccionar el primer ítem de la lista en el elemento #slideshow; añadirle la clase “current” al mismo y luego añadir la clase “disabled” a los elementos hermanos.
*/
function recorrerElDom(){
    $('img').each(function(){
        var attr = $(this).attr("alt");
        if(attr){
            console.log(attr);
        }
    });
    //
    $('input').closest('form').addClass('clase');
    //
    var closestCurrent = $('#myList').closest('.current');
    closestCurrent.removeClass('.current');
    closestCurrent.next().addClass('.current');
    //
    $('#specials').closest('select').closest('input[type="submit"]');
    //
    var firstSlideshow = $('#slideshow').find(1);
    firstSlideshow.addClass('current');
    firstSlideshow.siblings().each(function(){
        $(this).addClass('.disabled');
    });
}
/*
Manipulación

Añadir 5 nuevos ítems al final de la lista desordenada #myList.
Remover los ítems impares de la lista.
Añadir otro elemento h2 y otro párrafo al último div.module.
Añadir otra opción al elemento select; darle a la opción añadida el valor “Wednesday”.
Añadir un nuevo div.module a la página después del último; luego añadir una copia de una de las imágenes existentes dentro del nuevo div.
*/
function manipulacion(){
    //
    $('#myList').append(`
        <li>Wachipanduzi</li>
            <li>Guarapo</li>
                <li>Watermelon</li>
                    <li>Guanajo</li>
                        <li>Waluigi</li>
        `);
        //
    $('#myList:odd').each(function(){$(this).remove()});
    //
    $('div.module').last().append('<h2>Eis</h2><p>Warup</p>');
    //
    $('select').find('option').last().after('<option value=Wednesday>Wednesday</option>');
    //
    var ultimoModule = $('div.module').last();
    ultimoModule.append('<h2>PREPÁRATE PARA UNA NUEVA IMAGEN</h2><p>INCOMING</p>');
    console.log($('img').find(1));
    ultimoModule.append();
}
/*
Crear una sugerencia: Utilizar el texto del elemento label y aplicar una “sugerencia” en la caja de ingreso de texto

Establecer el valor del elemento input igual al valor del elemento label.
Añadir la clase “hint” al elemento input.
Remover el elemento label.
Vincular un evento focus en el input para remover el texto de sugerencia y la clase “hint”.
Vincular un evento blur en el input para restaurar el texto de sugerencia y la clase “hint” en caso que no se haya ingresado algún texto.
*/
function sugerencia(){
    //
    var texto = $('label').text();
    //
    var elementoInput = $('label').find('input');
    console.log(elementoInput.attr('class'))
    $(elementoInput).val(texto);
    //
    $(elementoInput).addClass('hint');
    //
    $('label').remove();
    //
    $(elementoInput).on('focus',function(){
        $(elementoInput).val("");
        $(elementoInput).removeClass('hint');
    });
    //
    $(elementoInput).on('blur',function(){
        $(elementoInput).val(texto);
        $(elementoInput).addClass('hint');
    });
}
