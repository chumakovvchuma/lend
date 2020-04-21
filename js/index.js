// @ts-nocheck
$( document ).ready(function(){

  let curr = $.scrollify.currentIndex();
  console.log(curr)

  $( ".link-to-two" ).on({ 
    "click": function() { 
      $.scrollify.move("#Головна");
  }});
  $( ".link-to-three" ).on({ 
    "click": function() { 
      $.scrollify.move("#Проекти");
  }});
  $( ".link-to-four" ).on({ 
    "click": function() { 
      $.scrollify.move("#Кар'єра");
  }});



  $( ".link-two-m" ).on({ 
    "click": function() { 
      $.scrollify.move("#Головна");
  }});
  $( ".link-three-m" ).on({ 
    "click": function() { 
      $.scrollify.move("#Проекти");
  }});
  $( ".link-four-m" ).on({ 
    "click": function() { 
      $.scrollify.move("#Кар'єра");
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

