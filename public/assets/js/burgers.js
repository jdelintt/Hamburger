const { urlencoded } = require("express");

$(function () {
  $(".create-form").on("submit", function (event) {
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

  $(".eatburger").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredBurger = {
      devoured: 1,
    };
    $.ajax("/api/burgers", {
      type: "PUT",
      data: devouredBurger,
    }).then(function () {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
  $(".deleteburder").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");

    $.ajax({
      type: "DELTE",
      url: "/api/burgers/" + id,
    }).then(function () {
      console.log("Burger eaten!");
      location.reload();
    });
  });
});
