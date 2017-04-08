/*API key: AIzaSyBRs9XEpg-fVltUzW5Q-V2dqKqn7ycdwW0*/
import simplejson

function getPos(address){
  var address_elements = new Array();

  address = address.split("\n");
  address = address.split(" ");

  for (var i = 0; i < address.length; i++)
    address_elements.push(address[i])

}

/*
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Arrays</h1>

<p>The push method appends a new element to an array.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;
var address = "333 Hawaii Ave Ne\nWashington, DC 20011"

function myFunction() {
    var address_elements = new Array();

 address1 = address.split("\n");
  address2 = address1[1];
  address1 = address1[0];

  address2 = address2.split(" ");
  address1 = address1.split(" ");

  for (var i = 0; i < address1.length; i++){
    address_elements.push(address1[i]);
    }

    for (i = 0; i < address2.length; i++){
    address_elements.push(address2[i]);
    }

    document.getElementById("demo").innerHTML = address_elements;
}
</script>

</body>
</html>*/
