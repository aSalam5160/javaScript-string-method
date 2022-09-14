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
