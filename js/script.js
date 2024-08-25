/*============== JQuery ==============*/

$(document).ready(function(){

    // Draggable
     $( "#draggable" ).draggable();

     // droppable
         $( "#draggable1" ).draggable();

         $( "#droppable" ).droppable({
              drop: function( event, ui ) {
             $( this )
             .addClass( "ui-state-highlight" )
             .find( "#loren" )
            .html( "Dropped!" );
          }
         });
         // Resizable
          $( "#resizable" ).resizable();
          // Resizable-animate
          $( "#resizable1" ).resizable({
             animate: true
          });
           // container Resizable content
           $( "#resizable2" ).resizable({
             containment: "#container"
          });
           // Snap to grid 
             $( "#resizable3" ).resizable({
               grid: 50
          });
             // Ghost content
               $( "#resizable4" ).resizable({ 
               ghost: true
          });
               // Selectable  content

             $( "#selectable" ).selectable();
             // Sortable content

             $( "#sortable" ).sortable();
             // Accordion content

             $( "#accordion" ).accordion();

              // Accordion collapsible content

             $( "#accordion1" ).accordion({
                  collapsible: true
          });

             // Accordion customize icon content

         var icons = {
              header: "ui-icon-circle-arrow-e",
              activeHeader: "ui-icon-circle-arrow-s"
            };
              $( "#accordion2" ).accordion({
              icons: icons
            });
               $( "#toggle" ).button().on( "click", function() {
              if ( $( "#accordion2" ).accordion( "option", "icons" ) ) {
                $( "#accordion2" ).accordion( "option", "icons", null );
              } else {
                $( "#accordion2" ).accordion( "option", "icons", icons );
              }
          });

         // Accordion customize icon content
            $( "#accordion3" ).accordion({
                  heightStyle: "fill"
                });
             
        $( "#accordion-resizer" ).resizable({
          minHeight: 140,
          minWidth: 200,
          resize: function() {
            $( "#accordion3" ).accordion( "refresh" );
          }
        });

           // autocomplete
           var availableTags = [
                  "ActionScript",
                  "AppleScript",
                  "Asp",
                  "BASIC",
                  "C",
                  "C++",
                  "Clojure",
                  "COBOL",
                  "ColdFusion",
                  "Erlang",
                  "Fortran",
                  "Groovy",
                  "Haskell",
                  "Java",
                  "JavaScript",
                  "Lisp",
                  "Perl",
                  "PHP",
                  "Python",
                  "Ruby",
                  "Scala",
                  "Scheme"
                ];
                $( "#tags" ).autocomplete({
                  source: availableTags
                });

         // controlgroup
      $( ".controlgroup" ).controlgroup()
    $( ".controlgroup-vertical" ).controlgroup({
      "direction": "vertical"
    });
    // selectmenu
        $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();

});

 // Datepicker
  $( function() {
    $( "#datepicker" ).datepicker();
  } );

 // Dialog
   $( function() {
    $( "#dialog" ).dialog();
  } );
    // Progressbar
     $( function() {
    $( "#progressbar" ).progressbar({
      value: 37
    });
  } );

     // checkboxradio
  $( function() {
    $( "input" ).checkboxradio();
  } );
 // colorpicker
    $( function() {
    function hexFromRGB(r, g, b) {
      var hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }
    function refreshSwatch() {
      var red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
      $( "#swatch" ).css( "background-color", "#" + hex );
    }
 
    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
    $( "#red" ).slider( "value", 255 );
    $( "#green" ).slider( "value", 140 );
    $( "#blue" ).slider( "value", 60 );
  } );


     // Tabs
      $( function() {
    $( "#tabss" ).tabs();
  } );

      // Tooltip
       $( function() {
    $( document ).tooltip();
  } );
 // AddClass
         $( function() {
    $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }
  } );
 // Color Animation

  $( function() {
    var state = true;
    $( "#button1" ).on( "click", function() {
      if ( state ) {
        $( "#effect1" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect1" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  } );




