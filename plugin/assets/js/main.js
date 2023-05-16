$(document).ready(function(){
    $(".btnsave").click(function(){
        const list= $(".inp").val();
      $("ul").append('<li>'+list+'</li>');
    });
    $(".btnsearch").click(function(){
        const search = $('.search').val().trim();
        $("ul li").filter(function () {
            return $(this).search().trim().indexOf(search) ==-1
        }).hide();
    });
  })