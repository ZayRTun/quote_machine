$(document).ready(function () {
  var xQuote;
  var xAuthor;
  function myFunc() {
      $.ajax({
          url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en", jsonp: 'jsonp', dataType: 'jsonp', success: function (response) {
              xQuote = response.quoteText;
              xAuthor = response.quoteAuthor;
              $(".quote").text(xQuote);
              if (xAuthor) {
                  $(".author").html("<br>By - " + xAuthor);
              } else {
                  $(".author").html("<br>By - " + "Unknown");
              }
          }

      });

  }
  myFunc();
  $("#gQuote").on("click", function() {
      myFunc();
  });
  $("#share").on("click", function() {
      window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(xQuote + " By - " + xAuthor));
  });
});