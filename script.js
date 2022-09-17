let fuss = "why you're fuss so much about this kind of stuff"; //variable created called fuss

console.log(fuss.length); //length propertis returns the length of a string

//extracting string method in javaScript

function strFunction() {
  let x = document.getElementById("demo").innerHTML;
  alert("you're gonna see 'Lorem ipsum'");
  document.getElementById("demo").innerHTML = x.substr(0, 25);
}

//function for uppercase

function upFunction() {
  let boro = document.getElementById("up").innerHTML;
  document.getElementById("up").innerHTML = boro.toUpperCase();
}

//function for lowercase

function lowFunction() {
  let choto = document.getElementById("low").innerHTML;
  document.getElementById("low").innerHTML = choto.toLowerCase();
}

// function for string concatination

function stringFunction() {
  let string = document.getElementById("con_ans").innerHTML;
  document.getElementById("con_ans").innerHTML = string.concat(" ", "jhon doe");
}

// function for string padding

function padstart() {
  let x = "5";
  document.getElementById("pad_s").innerHTML = x.padStart(4, "x");
}

function padend() {
  let y = 6;
  let z = y.toString();
  document.getElementById("pad_e").innerHTML = z.padEnd(4, "0");
}

// function for extracting string characters

function charat() {
  let s = document.getElementById("budda").innerHTML;
  document.getElementById("char").innerHTML = s.charAt(8);
}

function charcodeat() {
  let z = document.getElementById("buddas").innerHTML;
  document.getElementById("char_2").innerHTML = z.charCodeAt(8);
}
