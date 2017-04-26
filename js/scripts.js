$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#cat").prepend("<li>Hello!</li>");
    $("ul#dog").prepend("<li>RUFF OFF!!</li>");

    $("ul#cat").children("li").first().click(function() {
      alert('hi');
    });
  });

  $("button#goodbye").click(function() {
    $("ul#cat").prepend("<li>Goodbye!</li>");
    $("ul#dog").prepend("<li>Snooze ya later!!</li>");
  });

  $("button#stop").click(function() {
    $("ul#cat").prepend("<li>Stop copying me!</li>");
    $("ul#dog").prepend("<li>I do what i want mr. cat!</li>");
  });
});
