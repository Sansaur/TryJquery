$(document).ready(function() {
  //selecciones();
  //recorrerElDom();
  //manipulacion();
  //sugerencia();
  navegacionPorPestañas();
});

/*
Selecciones

Seleccionar todos los elementos div que poseen la clase “module”.
Especificar tres selecciones que puedan seleccionar el tercer ítem de la lista desordenada #myList. ¿Cuál es el mejor para utilizar? ¿Porqué?
Seleccionar el elemento label del elemento input utilizando un selector de atributo.
Averiguar cuantos elementos en la página están ocultos (ayuda: .length).
Averiguar cuantas imágenes en la página poseen el atributo alt.
Seleccionar todas las filas impares del cuerpo de la tabla.
*/


function selecciones() {
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
function recorrerElDom() {
  $('img').each(function() {
    var attr = $(this).attr("alt");
    if (attr) {
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
  firstSlideshow.siblings().each(function() {
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
function manipulacion() {
  //
  $('#myList').append(`
        <li>Wachipanduzi</li>
            <li>Guarapo</li>
                <li>Watermelon</li>
                    <li>Guanajo</li>
                        <li>Waluigi</li>
        `);
  //
  $('#myList>li:nth-child(odd)').remove();
  //
  $('div.module').last().append('<h2>Eis</h2><p>Warup</p>');
  //
  $('select').find('option').last().after('<option value=Wednesday>Wednesday</option>');
  //
  var nuevoModule = "<div class=module><h2>PREPÁRATE PARA UNA NUEVA IMAGEN</h2><p>INCOMING</p></div>";
  $('div.module').last().after(nuevoModule);
  //console.log($('img').first().attr('src'));
  $('div.module').last().append("<img src="+$('img').first().attr('src')+"></img>");
}
/*
Crear una sugerencia: Utilizar el texto del elemento label y aplicar una “sugerencia” en la caja de ingreso de texto

Establecer el valor del elemento input igual al valor del elemento label.
Añadir la clase “hint” al elemento input.
Remover el elemento label.
Vincular un evento focus en el input para remover el texto de sugerencia y la clase “hint”.
Vincular un evento blur en el input para restaurar el texto de sugerencia y la clase “hint” en caso que no se haya ingresado algún texto.
*/
function sugerencia() {
  //
  var texto = $('label').text();
  //
  var elementoInput = $('label').next('input');
  //console.log(elementoInput.attr('class'))
  $(elementoInput).val(texto);
  //
  $(elementoInput).addClass('hint');
  //
  $('label').remove();
  //
  $(elementoInput).on('focus', function() {
    $(elementoInput).val("");
    $(elementoInput).removeClass('hint');
  });
  //
  $(elementoInput).on('blur', function() {
    $(elementoInput).val(texto);
    $(elementoInput).addClass('hint');
  });
}
/*
Crear una navegación por pestañas para los dos elementos div.module

Ocultar todos los elementos div.module.

Crear una lista desordenada antes del primer div.module para utilizar como pestañas.

Interactuar con cada div utilizando $.fn.each. Por cada uno, utilizar el texto del elemento h2
como el texto para el ítem de la lista desordenada.

Vincular un evento click a cada ítem de la lista de forma que:

muestre el div correspondiente y oculte el otro;

añada la clase “current” al ítem seleccionado;

remueva la clase “current” del otro ítem de la lista.

Finalmente, mostrar la primera pestaña.
*/
function navegacionPorPestañas() {
  $('div.module').hide();
  $('div.module').first().before(`
      <ul id=listaDesordenada>
        <li>PrimerDiv</li>
          <li>SegundoDiv</li>
      </ul>
    `);
    /*

    Dejar esta mierda para otro momento

    $("#listaDesordenada>li").fn.each = function(){
      $(this).text($('h2').first().text());
    }
    */
    $("#listaDesordenada>li").click(function(){
      var index = parseInt($(this).index());
      $("#listaDesordenada>li").removeClass("current");
      $(this).addClass('current');
      $('div.module').hide();
      $('div.module').eq(index).show();
    });
}
/*
Añadir alguna interactividad a la sección blog de la página.

al hacer click en alguno de los titulares del div #blog,
se debe mostrar el párrafo correspondiente con un efecto de deslizamiento;

al hacer click en otro titular,
se debe ocultar el párrafo mostrado con un efecto de deslizamiento y mostrar nuevamente
el párrafo correspondiente también con un efecto de deslizamiento. Ayuda: No se olvide
de utilizar el selector :visible.
*/
function interactividad() {

}
/*
Desplegar los ítems del menú superior de la página.

Al pasar el puntero del ratón por encima de un ítem del menú, se debe mostrar su submenú en caso que exista;
Al no estar más encima de un ítem, el submenú se debe ocultar.
Para poder realizarlo, utilice el método $.fn.hover para añadir
 o remover una clase en el submenú para poder controlar si debe estar oculto
  o visible (El archivo /ejercicios/css/styles.css
  incluye una clase “hover” para este propósito)
*/
function despliegue() {

}
/*
Mover el elemento #slideshow a la parte superior de la página;

Escribir un código que permita mostrar los ítems de forma cíclica,
 mostrando un ítem por unos segundos, luego ocultándolo con un efecto fade out
  y mostrando el siguiente con un efecto fade in;

Una vez llegado al último ítem de la lista, comenzar de nuevo con el primero;

Incluir un área de navegación por debajo del slideshow que muestre cuantas
 imágenes existen y en cual se encuentra (ayuda: $.fn.prevAllpuede resultar
  útil).
*/
function mySlideshow() {

}
