document.addEventListener("DOMContentLoaded", function(event) {
  var nOfCols = 42, nOfRows = 15;

  var $table = $( '<table>' );
  var $bubbles = [];

  var img = new Image();
  img.src = '/images/tagline.png';

  var canvas = document.createElement( 'canvas' );
  var ctx = canvas.getContext( '2d' );

  img.onload = function () {
    console.log('drawing');
    ctx.drawImage( img, 0, 0 );
    drawBubbles();
  }

  function getPixel(x,y) {
    var data = ctx.getImageData( x, y, 1, 1).data;
    return data;
  }

  function drawBubbles() {
    for ( var i = 0; i < nOfRows; i++ ) {
      var $row = $( '<tr>' );
      $bubbles[i] = [];
      for ( var j = 0; j < nOfCols; j++ ) {
        var pixelData = getPixel( j, i );
        var $cell = $( '<td>' );
        var $bubble = $( '<div>' )
          .addClass( 'bubble' )
          .addClass( 'off' )
          .text( ' ' );

        if( pixelData[0] !== 0 ) $bubble.addClass( 'black' ).addClass( 'on' );

        $bubbles[i][j] = $bubble;
        $cell.append( $bubble );
        $row.append( $cell );

        //if ( Math.random() < 0.05 ) $bubble.attr( 'class','bubble on' );
      }
      $table.append( $row );
    }
  }

  function loop() {
    window.setTimeout ( function () {
      function alterBubble () {
        var i = Math.floor( Math.random() * nOfRows );
        var j = Math.floor( Math.random() * nOfCols );
        var $bubble = $bubbles[i][j];

        if ( $bubble.hasClass( 'black') ) {
          // Do nothing
        } else if ( $bubble.hasClass( 'off' ) ) {
          $bubble
            .addClass( 'on' )
            .removeClass( 'off' );
        } else if ( $bubble.hasClass( 'on' ) ) {
          $bubble
            .addClass( 'wink' )
            .removeClass( 'on' );
        } else if ( $bubble.hasClass( 'wink' ) ) {
          $bubble
            .removeClass( 'wink' )
            .addClass( 'off' );
        }
      }

      var iterations = Math.floor(Math.random() * 10);

      for ( var i = 0; i < iterations; i++ ) {
        alterBubble();
      }

      loop();
    }, 500)
  }

  window.setTimeout( loop, 5000 );

  $('#viz').on('mouseenter', function () {
    // Reset bubbles
    $('.bubble').not('.black')
      .removeClass( 'on' )
      .removeClass( 'wink' )
      .addClass( 'off' );
  })

  $( '#viz' ).append( $table );
});
