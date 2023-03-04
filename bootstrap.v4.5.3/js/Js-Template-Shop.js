
(function($) {
  $.fn.custompagination = (function(opation){
      var paginationContainer = this;
      var itemsToPaginate;

      var defcult = {
          itemsperpage :9
      };

      var settings = {};

      $.extend(settings , defcult , opation );

      var itemsperpage = settings.itemsperpage ; 

      itemsToPaginate = $(settings.itemsToPaginate);
      var numberOfPaginationLinks = Math.ceil(itemsToPaginate.length / itemsperpage);

      $('<ul></ul>').prependTo(paginationContainer);

      for ( var index = 0; index < numberOfPaginationLinks; index++) {
          paginationContainer.find("ul").append("<li>"+ (index+1) +"</li>")
      }

      itemsToPaginate.filter(":gt("+  (itemsperpage - 1) +")").hide();

      paginationContainer.find("ul li").on("click", function(){

         var linkNumbers = $(this).text(); 

         var itemsToHide = itemsToPaginate.filter(":lt("+  ((linkNumbers - 1) * itemsperpage ) +")");
         $.merge(itemsToHide , itemsToPaginate.filter(":gt("+  ((linkNumbers * itemsperpage) - 1 ) +")"));
         itemsToHide.hide();
         var itemsToShow = itemsToPaginate.not(itemsToHide);
         itemsToShow.show();
      });
  });
}(jQuery))

$(function(){

  $(document).ready(function(){
      $(".pagination").custompagination({
          itemsToPaginate : (".box"),
      })
  })

}(jQuery))
$('#nav-toggle').click(function(){
  $(this).toggleClass('is-active')
  $('.links-nav .links').toggleClass('show');
});
$(document).ready(function(){
  $(".owl-banner").owlCarousel({
    loop:true,
    items: 1,
    dots:true,
    autoplayTimeout:4000,
    autoplay: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    items:1,
    }
  );
});
$(document).ready(function(){
  $(".owl-pathner").owlCarousel({
    loop:true,
    items: 1,
    margin:20,
    autoplayTimeout:1000,
    autoplay: true,
    responsive:{
        0:{
            items:2,
        },
        767:{
            items:4,
        },
        991:{
            items:6,
        },
      }
    }
  );
})
$(document).ready(function(){
  $(".owl-detail").owlCarousel({
    loop:true,
    items: 1,
    dots:false,
    nav: true,
    autoplayTimeout:4000,
    autoplay: true,
    items:1,
    }
  );
});
$('.dec').click(function(){
  $('.reviwe').removeClass('d-block');
  $('.information').toggleClass('d-block');
  $('.Decription').toggleClass('d-block');
});
$('.inf').click(function(){
  $('.Decription').removeClass('d-block');
  $('.reviwe').removeClass('d-block');
  $('.information').toggleClass('d-block');
});
$('.rev').click(function(){
  $('.Decription').removeClass('d-block');
  $('.information').removeClass('d-block');
  $(".reviwe").toggleClass("d-block");
});
