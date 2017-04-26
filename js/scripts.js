$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var dearnameInput = $("input#dearname").val();
    var sincerelynameInput = $("input#sincerelyname").val();

    $(".dearname").text(dearnameInput);
    $(".sincerelyname").text(sincerelynameInput);

    $("#letter").show();

    event.preventDefault();

    });
  });
