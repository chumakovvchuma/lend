// @ts-nocheck
// global vars
var winWidth = $(window).width();
var winHeight = $(window).height();

// set initial div height / width
$('#main-content').css({
    'width': winWidth,
'height': winHeight,
});

// make sure div stays full width/height on resize
$(window).resize(function(){
    $('#main-content').css({
    'width': winWidth,
    'height': winHeight,
});
});