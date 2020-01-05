"use strict";

//Map

function initMap() {
  let map, beetroot, styles, marker, info, content;

  beetroot = { lat: 49.589018, lng: 34.557746 };

  styles = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#ebe3cd"
        }
      ]
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#523735"
        }
      ]
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f1e6"
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#c9b2a6"
        }
      ]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#dcd2be"
        }
      ]
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#ae9e90"
        }
      ]
    },
    {
      featureType: "landscape.natural",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae"
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#93817c"
        }
      ]
    },
    {
      featureType: "poi.business",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#a5b076"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#447530"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f1e6"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#fdfcf8"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#f8c967"
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#e9bc62"
        }
      ]
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#e98d58"
        }
      ]
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#db8555"
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#806b63"
        }
      ]
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae"
        }
      ]
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8f7d77"
        }
      ]
    },
    {
      featureType: "transit.line",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#ebe3cd"
        }
      ]
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#dfd2ae"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#b9d3c2"
        }
      ]
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#92998d"
        }
      ]
    }
  ];

  content = '<h1 class="info-title">I\'m here</h1>';

  map = new google.maps.Map(document.getElementById("map"), {
    center: beetroot,
    zoom: 18,
    styles: styles,
    disableDefaultUI: true,
    zoomControl: true,
    streetViewControl: true
  });

  marker = new google.maps.Marker({
    position: beetroot,
    map: map,
    icon: "images/marker.png",
    draggable: true
  });

  info = new google.maps.InfoWindow({
    content: content
  });

  marker.addListener("click", function() {
    info.open(map, marker);
  });
}

(function($) {
  $(document).ready(function() {
    // navigation
    //slider
    $(".sl").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      arrows: true,
      variableWidth: false,
      prevArrow:
        "<button type='button' class='slick-prev pull-left'><i class='fas fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next pull-right'><i class='fas fa-angle-right' aria-hidden='true'></i></button>"
    });

    let sections = {
      header: $("#header").offset().top,
      projects: $("#projects").offset().top,
      news: $("#news").offset().top,
      contact: $("#map").offset().top
    };

    $(window).scroll(function() {
      let scrTop = $(document).scrollTop() + $(window).height() / 3,
        pos;

      if (scrTop < sections.projects) {
        pos = "header";
      } else if (scrTop >= sections.projects && scrTop < sections.news) {
        pos = "projects";
      } else if (scrTop >= sections.news && scrTop < sections.contact) {
        pos = "news";
      } else if (scrTop >= sections.contact) {
        pos = "contact";
      }
      $(".fixed-nav")
        .find(".active")
        .removeClass("active");
      $(".fixed-nav")
        .find(`a[data-menu=${pos}]`)
        .addClass("active");
    });

    //Fancybox
    $(".photo").fancybox({
      buttons: ["fullScreen", "download", "thumbs", "close"],
      animationEffect: "zoom-in-out",
      animationDuration: 800,
      transitionEffect: "rotate",
      transitionDuration: 500,
      loop: "true"
    });
  });
})(jQuery);
