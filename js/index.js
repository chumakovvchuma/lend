// @ts-nocheck
$( document ).ready(function(){

  let curr = $.scrollify.currentIndex();
  console.log(curr)

  $( ".link-to-two" ).on({ 
    "click": function() { 
      $.scrollify.move("#twoPage");
  }});
  $( ".link-to-three" ).on({ 
    "click": function() { 
      $.scrollify.move("#threePage");
  }});
  $( ".link-to-four" ).on({ 
    "click": function() { 
      $.scrollify.move("#fourPage");
  }});



  $( ".link-two-m" ).on({ 
    "click": function() { 
      $.scrollify.move("#twoPage");
  }});
  $( ".link-three-m" ).on({ 
    "click": function() { 
      $.scrollify.move("#threePage");
  }});
  $( ".link-four-m" ).on({ 
    "click": function() { 
      $.scrollify.move("#fourPage");
  }});




  $( ".link-one" ).on({ 
    "click": function() { 
        $.scrollify.move("#onePage");
  }});
  $( ".link-two" ).on({ 
    "click": function() { 
        $.scrollify.move("#twoPage");
  }});
  $( ".link-three" ).on({ 
    "click": function() { 
        $.scrollify.move("#threePage");
  }});
  $( ".link-four" ).on({ 
    "click": function() { 
        $.scrollify.move("#fourPage");
  }});

})

