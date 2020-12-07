/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.Send = function Send() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("All fields must be filled out");
    return false;
  }
  var a = document.forms["myForm"]["aname"].value;
  if (a == "") {
    alert("All fields must be filled out");
    return false;
  }
  var b = document.forms["myForm"]["bname"].value;
  if (b == "") {
    alert("All fields must be filled out");
    return false;
  }
  var c = document.forms["myForm"]["cname"].value;
  if (c == "") {
    alert("All fields must be filled out");
    return false;
  }
  var d = document.forms["myForm"]["dname"].value;
  if (d == "") {
    alert("All fields must be filled out");
    return false;
  }
  var e = document.forms["myForm"]["ename"].value;
  if (e == "") {
    alert("All fields must be filled out");
    return false;
  }
  var v = document.forms["myForm"]["vname"].value;
  if (v == "") {
    alert("All fields must be filled out");
    return false;
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
