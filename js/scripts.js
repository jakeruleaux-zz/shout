$(document).ready(function() {
  $("#form-one").submit(function(event) {
    var repeatInput = $("input#repeat").val();

    $(".repeat").text(repeatInput);

    $("#shout").show();
    event.preventDefault();
  });
});
