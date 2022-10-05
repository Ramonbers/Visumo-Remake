$(document).ready(function() {

  var showAnimation = false;

  /* ANIMATE 3 PHOTOS ON LOAD */
  function animateSection(section, opacity, endopacity, delay = 0) {
    setTimeout(function() {
      if (showAnimation) {
        $("." + section + " img").animate({
          opacity: opacity
        }, 1000, function() {
          $("." + section + " img").delay(500).animate({
            opacity: endopacity
          }, 1000, function() {});
        });
      }
    }, delay);
  }

  var scene = $('#images').get(0);
  var parallaxInstance = new Parallax(scene);

  var scene2 = $('#images2').get(0);
  var parallaxInstance2 = new Parallax(scene2);

  var scene3 = $('#images3').get(0);
  var parallaxInstance3 = new Parallax(scene3);

  $(".groeien_hover").mouseenter(function() {
    $(".circle").css("width", "13px");
    $(".circle").css("height", "13px");
    $(".circle").css("margin", "32px");
  }).mouseout(function() {
    $(".circle").css("margin", "30px");
    $(".circle").css("width", "10px");
    $(".circle").css("height", "10px");
  });


  var waveAnimationActive = false;

  $(".underline_blue").mouseenter(function() {
    if (!waveAnimationActive) {
      let rows = $(".circles").find(".row").toArray().reverse();
      waveAnimation(rows);
    }
  });

  var colors = [
    "143,0,255",
    "0,255,157",
    "0,116,255"
  ];

  function waveAnimation(array) {
    waveAnimationActive = true;
    var i = 0;
    var total = array.length - 1;
    var randomColor = colors[Math.floor(Math.random() * 3)];

    var loop = function() {
      if (i < total && waveAnimationActive) {
        i++;
        $(array[i]).children().each(function(e) {
          $(this).animate({
            "background-color": "rgba(" + randomColor + ",0.5)"
          }, 500, function() {
            $(this).animate({
              "background-color": "rgba(" + randomColor + ",1)"
            }, 100, function() {
              $(this).animate({
                "background-color": "rgba(" + randomColor + ",0.5)"
              }, 500, function() {
                $(this).animate({
                  "background-color": "#322aff"
                }, 100, function() {

                });
              });
            });
          });
        });
      } else {
        console.log("ENDED");
        waveAnimationActive = false;
        return;
      }
      setTimeout(loop, 150); // Snelheid bolletjes (dikte van wave ook)
    }
    loop();

  }


  /* DISPLAY MAPS ON HOVER */
  $(".loc_email").mouseover(function() {
    $("#map").css("opacity", 1);
    showAnimation = false;
  });

  $(".loc_email").mouseout(function() {
    $("#map").css("opacity", 0);
    showAnimation = true;
  });


});