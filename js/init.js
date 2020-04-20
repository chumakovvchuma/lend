(function($){
  $(function(){
    $('.carousel').carousel({
      numVisible: 9,
      padding: 200
    });




    $('.modal').modal();

    

    $.scrollify({
      section : ".scrollLink",
      sectionName : "section-name",
      interstitialSection : "",
      easing: "easeOutExpo",
      scrollSpeed: 1800,
      offset : 0,
      scrollbars: false,
      standardScrollElements: "#modalm",
      setHeights: true,
      overflowScroll: true,
      updateHash: true,
      touchScroll:true,
      before:function(i,panels) {
        
        var ref = panels[i].attr("data-section-name");
        $(".pagination .active").removeClass("active");
        $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
      },       
      after:function() {},
      afterResize:function() {},
      afterRender:function() {
        var pagination = "<ul class=\"pagination\">";
        var activeClass = "";
        $(".scrollLink").each(function(i) {
          activeClass = "";
          if(i===$.scrollify.currentIndex()) {
            activeClass = "active";
          }
          pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
        });
  
        pagination += "</ul>";
  
        $(".menu").append(pagination);
        $(".pagination a").on("click",$.scrollify.move);
      }
    });
    
      
    
  }); // end of document ready
})(jQuery); // end of jQuery name space


// $( ".menu-one" ).slideToggle("slow");
// $( ".menu-two" ).slideToggle("slow");
// $( ".menu-three" ).slideToggle("slow");
