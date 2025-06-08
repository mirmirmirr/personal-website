$(document).ready(function() {

    $.ajax({

        // opening and getting information from the JSON file
        type: "GET",
        url: "projectsPage.json",
        dataType: "json",
        success: function(responseData, status){
        
        // if loaded, first read and write out the basic information for the "cards"
          var output = "<div class='container'>"
          $.each(responseData.projects, function(i, item) {
              output += '<div class="card">';
              output += '<img src="' + item.image + '" alt="' + item.labTitle + '">'
              output += '<p class="title">' + item.labNumber + ': <br>' + item.labTitle + '</p>';
              output += '</div>'
          });
          output += "</div>"
          $('#projects').html(output);

        // second read of the JSON will be for more project specific information
          var desOutput = "";
          $.each(responseData.projects, function(i, item) {
            desOutput += '<div class="description" style="display: none;">';
            desOutput += '<img src="' + item.image + '" alt="' + item.labTitle + '">';
            desOutput += '<div class="text">';
            desOutput += '<h1>' + item.labNumber + ': ' + item.labTitle + '</h1>';
            desOutput += '<p>' + item.description + '</p></div>';
            desOutput += '</div>';
          });
          $('#descriptions').html(desOutput);

        // jQuery to help with animations for toggling descriptions on and off
          $('.card').on('click', function() {
            // hide everything initally
            $('.description').hide();
            // show description for each lab when it's card is clicked
            var index = $(this).index();
            $('#descriptions .description').eq(index).toggle();
          });    
        }, 

        // print an error if something went wrong with the JSON file reading
        error: function(msg) {
          alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });

});
