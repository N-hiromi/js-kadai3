 $(function () {
    var searchWord = function(){
      var searchText = $(this).val(); 
    
      $('.target-area li').each(function() {
        var targetText = $(this).attr("id");
      
        if (targetText.indexOf(searchText) != -1) {
          $(this).removeClass('hidden');
         } else {
             $(this).addClass('hidden');
           }
      });
    };

  $('#search-text').on('input', searchWord);
});