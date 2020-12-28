$(function () {
  $("#about").blast({
    delimiter: "character",
    tag: "span",
  });

  $("#aboutHead").blast({
    delimiter: "character",
    tag: "span",
  });

  $("#navHome").css("visibility", "hidden");
  $("#navAbout").css("visibility", "hidden");
  $("#navContact").css("visibility", "hidden");

  var a = 0;

  $("#logo-Img").addClass("animate__tada");

  $(".blast").each(function () {
    $(this).hide();
    if (a == 300) {
      a = 400;
    }

    if (a == 1100) {
      a = 1200;
    }

    var el = $(this);
    setTimeout(function () {
      el.removeClass("blast").addClass("animate__bounceIn").show();
    }, a);

    if (a < 1200) {
      a = a + 100;
    } else {
      a = a + 80;
    }
  });

  setTimeout(function () {
    $(".animate__bounceIn").each(function () {
      $(this).removeClass("animate__bounceIn").addClass("blast");
    });
    $("#logo-Img").removeClass("animate__tada").addClass("logoImg");

    $(".blast").mouseenter(function () {
      $(this).addClass("hoverAnimation").removeClass("blast");
      $(this).css("color", "aqua");
      $(this).one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          $(this).addClass("blast").removeClass("hoverAnimation");
        }
      );
    });

    $("#about span").mouseleave(function () {
      $(this).css("color", "white");
    });
  }, 2000);

  $(".fa-home").mouseenter(function () {
    $(this).css("visibility", "hidden");
    $("#navHome").css("visibility", "visible");
  });
  $("#navHome").mouseleave(function () {
    $(this).css("visibility", "hidden");
    $(".fa-home").css("visibility", "visible");
  });

  $(".fa-user").mouseenter(function () {
    $(this).css("visibility", "hidden");
    $("#navAbout").css("visibility", "visible");
  });
  $("#navAbout").mouseleave(function () {
    $(this).css("visibility", "hidden");
    $(".fa-user").css("visibility", "visible");
  });

  $(".fa-address-card").mouseenter(function () {
    $(this).css("visibility", "hidden");
    $("#navContact").css("visibility", "visible");
  });
  $("#navContact").mouseleave(function () {
    $(this).css("visibility", "hidden");
    $(".fa-address-card").css("visibility", "visible");
  });

  setTimeout(function () {
    $(".animate__bounceIn").each(function () {
      $(this).removeClass("animate__bounceIn").addClass("blast");
    });

    $(".blast").mouseenter(function () {
      $(this).addClass("hoverAnimation").removeClass("blast");
      $(this).css("color", "aqua");
      $(this).one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          $(this).addClass("blast").removeClass("hoverAnimation");
        }
      );
    });

    $("#aboutHead span").mouseleave(function () {
      $(this).css("color", "white");
    });
  }, 2000);
});
