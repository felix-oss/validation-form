/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var errorMsg = string => {
  var alrt = document.querySelector("#alert");
  alrt.classList.contains("d-none") && alrt.classList.toggle("d-none");
};

window.Send = function Send() {
  var alrt = document.querySelector("#alert");
  !alrt.classList.contains("d-none") && alrt.classList.toggle("d-none");
  document
    .querySelectorAll("input")
    .forEach(inp => (inp.style.borderColor = "#ced4da"));
  document
    .querySelectorAll("#inputState")
    .forEach(inp => (inp.style.borderColor = "#ced4da"));
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    document.querySelector("#inputEmail4").style.borderColor =
      "rgb(223, 104, 104)";
    errorMsg();
  }
  var a = document.forms["myForm"]["aname"].value;
  if (a == "") {
    document.querySelector("#inputPassword4").style.borderColor =
      "rgb(223, 104, 104)";
    errorMsg();
  }
  var b = document.forms["myForm"]["bname"].value;
  if (b == "") {
    document.querySelector("#validationDefaultUsername").style.borderColor =
      "rgb(223, 104, 104)";
    errorMsg();
  }
  var c = document.forms["myForm"]["cname"].value;
  if (c == "") {
    document.querySelector("#firstn").style.borderColor = "rgb(223, 104, 104)";
    errorMsg();
  }
  var d = document.forms["myForm"]["dname"].value;
  if (d == "") {
    document.querySelector("#secondn").style.borderColor = "rgb(223, 104, 104)";
    errorMsg();
  }
  var e = document.forms["myForm"]["ename"].value;
  if (e == "") {
    document.querySelector("#inputCity").style.borderColor =
      "rgb(223, 104, 104)";
    errorMsg();
  }
  var v = document.forms["myForm"]["vname"].value;
  if (v == "") {
    document.querySelector("#inputZip").style.borderColor =
      "rgb(223, 104, 104)";
    errorMsg();
  }
  var e = document.getElementById("inputState");
  var strUser = e.options[e.selectedIndex].value;

  var strUser1 = e.options[e.selectedIndex].text;
  if (strUser == 0) {
    document.querySelector("#inputState").style.borderColor =
      "rgb(223, 104, 104)";
    errorMsg();
  }
  //   var radios = document.getElementsByName("payment");
  //   var formValid = false;

  //   var i = 0;
  //   while (!formValid && i < radios.length) {
  //     if (radios[i].checked) formValid = true;
  //     i++;
  //   }

  //   if (!formValid) alert("Please pick a payment method");
  //   return formValid;
};
// maybe make it check multiple times like with && then try to change the d-none yk
// make it so the red goes away if its filled
