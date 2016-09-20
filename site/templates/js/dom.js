(function ($) {

  'use strict';

  $(document).ready(function () {

    /* MEJS Audio player */
    $('audio').mediaelementplayer({
      audioWidth: '100%',
      features: ['playpause','progress', 'volume']
    }).on('play', function () {
        this.player.container.addClass('playing');
      }).on('pause', function () {
        this.player.container.removeClass('playing');
      });

    /* Sticky navigation */
    $('.nav-page').waypoint('sticky');

    /* Swap out link to home page */
    $('.nav-page-internal').append('<a class="nav-page-home-swap" href="/"></a>');

  });

}(jQuery));