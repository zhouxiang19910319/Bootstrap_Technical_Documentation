/*jQuery toggle ul*/
$(document).ready(
    function(){
      $("#hidden_list").hide();
      
      $("#list_toggle").click(
        function(){
          $("#hidden_list").toggle();
        }
      );
    }
  );