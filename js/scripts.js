$(function() {
  
    //FILTER BY TAG
    $('.filter').on( 'click', 'a', function(e) {
        e.preventDefault();
      
        //Get filter data from active link
        var filterValue = $(this).attr('data-filter');
      
        //Show filtered list by matching data-filter with class of item
        if(filterValue == "red") {
          $(".list .item").fadeIn('slow');
        } else {
          $(".list .item").not("." + filterValue).hide();
          $("." + filterValue).fadeIn('slow');
        }
      
        //Change active filter tag
        $('.filter li').removeClass('active');
        $(this).closest('li').addClass('active');
      
        //Remove search field content when choosing a filter
        $('.no-result').hide();$('#search').val('');
    });
    
    //FILTER BY SEARCH
    var rows = $('.list li');
    $('.no-result').hide();
    
    $('#search').keyup(function() {
        $('.filter li').removeClass('active');
      
        var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
        reg = RegExp(val, 'i'),
        text;
  
        rows.show().filter(function() {
          text = $(this).text().replace(/\s+/g, ' ');
          return !reg.test(text);
        }).hide();
  
        var visible = $('.item:visible').length;
  
        if(visible == 0) { 
          $('.no-result').show();
        } else { 
          $('.no-result').hide();
        }
  
    });
    
  });


//TESTIMONIALS