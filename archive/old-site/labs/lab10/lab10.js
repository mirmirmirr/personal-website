$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "rss.xml",
    dataType: "xml",
    success: function (responseData, status) {
      var output = "";
      $(responseData)
        .find("item")
        .each(function () {
          output += '<div class="card">';
          output +=
            '<p class="text-title">' + $(this).find("title").text() + "</p>";
          output +=
            '<p class="text-body">' +
            $(this).find("description").text() +
            "</p>";
          output += '<a href="' + $(this).find("link").text() + '">';
          output += '<button class="card-button"> Article </button>';
          output += "</a></div>";
        });
      $("#rss_feed").html(output);
    },

    error: function (msg) {
      // there was a problem
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    },
  });

  $.ajax({
    type: "GET",
    url: "atom.xml",
    dataType: "xml",
    success: function (responseData, status) {
      var output = "";
      $(responseData)
        .find("entry")
        .each(function () {
          output += '<div class="card">';
          output +=
            '<p class="text-title">' + $(this).find("title").text() + "</p>";
          output +=
            '<p class="text-body">' + $(this).find("summary").text() + "</p>";
          output += '<a href="' + $(this).find("link").attr("href") + '">';
          output += '<button class="card-button"> Article </button>';
          output += "</a></div>";
        });
      $("#atom_feed").html(output);
    },

    error: function (msg) {
      // there was a problem
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    },
  });
});
