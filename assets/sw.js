$(function() {

  var noOfThumbnails = $('#product-page-thumbnails').children().length;
  var slidesToShow = noOfThumbnails <= 4 ? 1 : 4;
  var infinite = noOfThumbnails <= 4 ? false : true;
  var variableWidth = !infinite;

  $('#product-page-thumbnails').slick({
    slidesToScroll: 1,
    slidesToShow: 4,
    arrows: true,
    vertical: true,
    verticalSwiping:true,
    asNavFor: '#product-page-images',
    infinite: true,
    focusOnSelect: true,
    prevArrow: '<i class="carousel-prev fa fa-chevron-up" style="display:inline-block!important;"></i>',
    nextArrow: '<i class="carousel-next fa fa-chevron-down" style="display:inline-block!important;"></i>',
  });
  
  $('#product-page-images').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: false,
    asNavFor: '#product-page-thumbnails',
    infinite: infinite,
    // variableWidth: true,
    centerMode: true,
    centerPadding: '0',
  });
  
  $('#related-products-row').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<i class="slick-prev slick-arrow fa fa-chevron-left"></i>',
    nextArrow: '<i class="slick-next slick-arrow fa fa-chevron-right"></i>',
  });
  
  $('.banner-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
    
  function addParam(currentUrl,key,val) {
    var url = new URL(currentUrl);
    url.searchParams.set(key, val);
    return url.href; 
  }
    
  // Update filters and reload page
  $('#sort-by').on('change', function() {
    if ( !(getParameterByName('sort_by') == $(this).val()) ) {
      window.location.href = addParam(window.location.href, 'sort_by', $(this).val());
    }
  });
    
  // Update filter options on page load
  if (getParameterByName('sort_by')) {
    var options = $('#sort-by option');
    var vaildOpts = $.map(options , function(option) {
      return option.value;
    });
    if (vaildOpts.includes(getParameterByName('sort_by'))) {
      $('#sort-by').val(getParameterByName('sort_by')).change();
    }
  }
    
  // sticky navbar
  var prevScrollpos = window.pageYOffset;
  var navbarHidden = false;
    
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var navRetractHeight = ($('#announcement-bar')[0]?.scrollHeight + $('#logo-bar')[0].scrollHeight) * -1;
    if (prevScrollpos > currentScrollPos) {
      if (navbarHidden) {
        $('#shopify-section-header header').css('top', '0px');
        $('.main-content').css('margin-top', '');
        navbarHidden = false;
      }
    } else if (!navbarHidden && (currentScrollPos > (navRetractHeight * -1))) {
      $('#shopify-section-header header').css('top', navRetractHeight);
      navbarHidden = true;
    }
    prevScrollpos = currentScrollPos;
  };
  
  window.addEventListener('pageshow', () => {
    $('select.collection-variant-selector').val('rs');
  });

  // Collection Cart Button
  $('select.collection-variant-selector').on('change', function(){
    $(this).next('.collection-submit-btn').attr('disabled', false);
  });
  setTimeout(function(){
    
    let click_event = new Event("click", {
          bubbles: true, // only bubbles and cancelable
          cancelable: true, // work in the Event constructor
    });
    let window_url = window.location.href.split('variant=');
    if(window_url.length > 1){
      let variant_id = window_url[window_url.length-1];
      if(variant_id){
          document.querySelector(`#var-${variant_id}`)?.dispatchEvent(click_event)
      }
    }
    
  }, 2000)
  
});