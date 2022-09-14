let fuss = "why you're fuss so much about this kind of stuff"; //variable created called fuss

console.log(fuss.length); //length propertis returns the length of a string

//extracting string method in javaScript

function strFunction() {
  let x = document.getElementById("demo").innerHTML;
  alert("you're gonna see 'Lorem ipsum'");
  document.getElementById("demo").innerHTML = x.substr(0, 25);
}
