$(function () {
  $(".create-form").on("click", function (event) {
    console.log("I'm Happpy");
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newburger").val().trim(),
      devoured: 0,
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $("#eatbutton").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredBurger = {
      devoured: 1,
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredBurger,
    }).then(function () {
      console.log("Burger was eaten!");
      // Reload the page to get the updated list
      location.reload();
    });
  });
  $("#deleteburger").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");

    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id,
    }).then(location.reload());
  });
});
