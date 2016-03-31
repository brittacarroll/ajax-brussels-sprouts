$('#get-dish').on('click', function(event) {
  event.preventDefault();
    var request = $.ajax({
      method: "GET",
      url: "/dishes/random.json"
    });
    request.done(function(newDish) {
      alert("Your random dish is " + newDish["dish"]);
    });
  });

  // request a new dish and alert the user
