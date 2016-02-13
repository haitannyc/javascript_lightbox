$(document).ready(function() {
  // alert('okay');


  //   var imgUrl = $(event.target).data("img-url") 
  //   $("body").append("<img src='" + imgUrl + "'>")
  // };
    

 $(".lightbox-link").click(function(event){

    var link_element = $(event.currentTarget);
    var imageURL = link_element.data("img-url");

    var image = $("#pic");
    image.attr('src', imageURL);

    // postion pic in center
    centerImage(image);

     // display the outerbox div
     $('.lightbox-outer').show(); 

     // close the pic
     $(".lightbox-outer").click(function(){    
      $(".lightbox-outer").hide();
    });
   //  $("#pic").append("<img src='" + imgUrl + "'>")
   // })

 // $("#pic").click(function(event) {
 //    // $('#link1').reload();
 //    $("#pic").hide();
 });
// -------end of my code----------

// copied code to center pic on page

function centerImage(image) {

  image.load(function(){
    var page_height = $(window).height();
    var image_height = image.height();
    var image_height_offset = ( page_height - image_height ) / 2;
    image.parent().css("margin-top", image_height_offset);
  });
}





  // ------------------------
  // bottom of documentready
});