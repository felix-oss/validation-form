/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.Send = function Send() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    document.querySelector("#inputEmail4").style.background =
      "rgb(223, 104, 104)";
  }
  var a = document.forms["myForm"]["aname"].value;
  if (a == "") {
    document.querySelector("#inputPassword4").style.background =
      "rgb(223, 104, 104)";
  }
  var b = document.forms["myForm"]["bname"].value;
  if (b == "") {
    document.querySelector("#validationDefaultUsername").style.background =
      "rgb(223, 104, 104)";
  }
  var c = document.forms["myForm"]["cname"].value;
  if (c == "") {
    document.querySelector("#firstn").style.background = "rgb(223, 104, 104)";
  }
  var d = document.forms["myForm"]["dname"].value;
  if (d == "") {
    document.querySelector("#secondn").style.background = "rgb(223, 104, 104)";
  }
  var e = document.forms["myForm"]["ename"].value;
  if (e == "") {
    document.querySelector("#inputCity").style.background =
      "rgb(223, 104, 104)";
  }
  var v = document.forms["myForm"]["vname"].value;
  if (v == "") {
    document.querySelector("#inputZip").style.background = "rgb(223, 104, 104)";
  }
  var e = document.getElementById("inputState");
  var strUser = e.options[e.selectedIndex].value;

  var strUser1 = e.options[e.selectedIndex].text;
  if (strUser == 0) {
    alert("Please select a State");
  }
  //   if ((document.getElementById("mastercard").checked = false)) {
  //     alert("Please select a Payment Method");
  //   }
  //   if ((document.getElementById("visa").checked = false)) {
  //     alert("Please select a Payment Method");
  //   }
  //   if ((document.getElementById("paypal").checked = false)) {
  //     alert("Please select a Payment Method");
  //   }
  //   if ((document.getElementById("amexpress").checked = false)) {
  //     alert("Please select a Payment Method");
  //   }

  var radios = document.getElementsByName("payment");
  var formValid = false;

  var i = 0;
  while (!formValid && i < radios.length) {
    if (radios[i].checked) formValid = true;
    i++;
  }

  if (!formValid) alert("Please pick a payment method");
  return formValid;
};
// maybe make it check multiple times like with && then try to change the d-none yk
// make it so the red goes away if its filled
