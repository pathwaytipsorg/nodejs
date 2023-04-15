console.log("JS: Client side javascript file is loaded!");
function myJSFunction() {
  var txt;
  if (confirm("Oh yeah... Now press a button! OK or Cancel")) {
    txt = "Cool... You pressed OK!";
  } else {
    txt = "Cool... You pressed Cancel!";
  }
  document.getElementById("jsdemo").innerHTML = txt;
}
