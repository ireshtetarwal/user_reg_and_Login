$(document).ready(function() {
    $("#login-form").submit(function(event) {
        event.preventDefault();
        var formData = $(this).serialize();
        
        $.ajax({
            type: "POST",
            url: "login.php",
            data: formData,
            success: function(response) {
                $("#login-result").html(response);
            }
        });
    });
});
