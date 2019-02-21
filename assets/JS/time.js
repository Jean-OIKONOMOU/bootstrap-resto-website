// OPEN/CLOSE FUNCTION
var openClosed = function() {
  var d = new Date();
  var hour = d.getHours();
  var day = d.getDay();
  if ((hour > 10) && (hour < 17) && (day != 0) && (day != 6)) {
    x = "<span style=\"color:#07ed11\">On est OUVERT!</span>";
  } else {
    x = "<span style=\"color:#fc4b1c\">Désolé, revenez plus tard.</span>";
  }
document.getElementById("ef").innerHTML = x;
  setTimeout(openClosed, 15000);
};

openClosed();
