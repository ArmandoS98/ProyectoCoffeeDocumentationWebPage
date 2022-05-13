$(document).ready(function () {

  //SLIDER
  if (window.location.href.indexOf('index') > -1) {

    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200
    });


  }




  //POSTS
  if (window.location.href.indexOf('index') > -1) {
    var posts = [
      {
        title: "Prueba de titulo 1",
        date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus quis cupiditate, consectetur dignissimos, in illo adipisci iusto necessitatibus animi nobis unde officiis iure accusantium vel officia inventore dolor numquam! Necessitatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores harum rem qui quibusdam incidunt neque. Sed ad minus aliquam suscipit fugiat cum expedita vero animi asperiores dolores laudantium, laborum magni.'
      },
      {
        title: "Prueba de titulo 2",
        date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus quis cupiditate, consectetur dignissimos, in illo adipisci iusto necessitatibus animi nobis unde officiis iure accusantium vel officia inventore dolor numquam! Necessitatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores harum rem qui quibusdam incidunt neque. Sed ad minus aliquam suscipit fugiat cum expedita vero animi asperiores dolores laudantium, laborum magni.'
      },
      {
        title: "Prueba de titulo 3",
        date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus quis cupiditate, consectetur dignissimos, in illo adipisci iusto necessitatibus animi nobis unde officiis iure accusantium vel officia inventore dolor numquam! Necessitatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores harum rem qui quibusdam incidunt neque. Sed ad minus aliquam suscipit fugiat cum expedita vero animi asperiores dolores laudantium, laborum magni.'
      },
      {
        title: "Prueba de titulo 4",
        date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus quis cupiditate, consectetur dignissimos, in illo adipisci iusto necessitatibus animi nobis unde officiis iure accusantium vel officia inventore dolor numquam! Necessitatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores harum rem qui quibusdam incidunt neque. Sed ad minus aliquam suscipit fugiat cum expedita vero animi asperiores dolores laudantium, laborum magni.'
      },
      {
        title: "Prueba de titulo 5",
        date: 'Publicado el día ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus quis cupiditate, consectetur dignissimos, in illo adipisci iusto necessitatibus animi nobis unde officiis iure accusantium vel officia inventore dolor numquam! Necessitatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores harum rem qui quibusdam incidunt neque. Sed ad minus aliquam suscipit fugiat cum expedita vero animi asperiores dolores laudantium, laborum magni.'
      }
    ];


    posts.forEach((item, index) => {
      var post = `
        <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
        `;

      $("#posts").append(post);
    });
  }

  //SELECTOR DE TEMA
  var theme = $("#theme");

  $("#to-green").click(function () {
    theme.attr("href", "../CSS/green.css")
  });

  $("#to-red").click(function () {
    theme.attr("href", "../CSS/red.css")
  });

  $("#to-blue").click(function () {
    theme.attr("href", "../CSS/blue.css")
  });

  //SCROLL ARRIBA DE LA WEB
  $('.subir').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });

  //LOGIN FALSO
  $("#login form").submit(function () {
    var form_name = $("#nombre").val();

    localStorage.setItem("form_name", form_name);
  });

  var form_name = localStorage.getItem("form_name");

  if (form_name != null && form_name != "undefined") {

    var about_parrafo = $("#about p");

    about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong>");
    about_parrafo.append("<br><a href='#' id='logout'> Cerrar sesion </a>");

    $("#login").hide();

    $("#logout").click(function () {
      localStorage.clear();
      location.reload();
    });

  }

  //ACORDEON
  if (window.location.href.indexOf('about') > -1) {
    $('#acordeon').accordion();
  }

  //RELOJ
  if (window.location.href.indexOf('reloj') > -1) {

    setInterval(function () {
      var reloj = moment().format("h:mm:ss");
      $('#reloj').html(reloj);
    }, 1000);


  }

  //validacion
  if (window.location.href.indexOf('contact') > -1) {
    $.validate({
      lang: 'es'
      

    });
  }





});//FINAL DEL DOCUMENT READY 