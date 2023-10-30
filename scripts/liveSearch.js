$(document).ready(function(){
  $.ajaxSetup({ cache: false });
  $('#search').keyup(function(){
     $('#result').html('');
     $('#state').val('');
     var searchField = $('#search').val();
     var expression = new RegExp(searchField, "i");
     
     $.getJSON('teachers.json', function(data) {
     $.each(data, function(key, value){
         if (value.name.search(expression) != -1 || value.subject.search(expression) != -1){
             $('#result').append('<li class="list-group-item link-class">'+value.name+' | <span class="text-muted">'+value.subject+'</span></li>');
         }
     });   
     });
  });
  
  $('#result').on('click', 'li', function() {
   var click_text = $(this).text().split('|');
   $('#search').val($.trim(click_text[0]));
   $("#result").html('');
  });
 });