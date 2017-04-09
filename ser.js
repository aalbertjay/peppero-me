var express = require('express');
var app = express();
var path = require('path');
//var http = require('http');
//var server = http.createServer(app);

var pizzapi = require('pizzapi');
var googleMapsClient = require('@google/maps').createClient({
   key: 'AIzaSyBRs9XEpg-fVltUzW5Q-V2dqKqn7ycdwW0'
});

var davidHsu = new pizzapi.Customer({
   address: '7030 Preinkert Dr., College Park, MD, 20742',
   firstName: 'David',
   lastName: 'Hsu',
   phone: '1-800-The-White-House',
   email: 'br'
});

var pos;
var allPizzas = new Array();

function findStores(customer) {
   //var allPizzas = new Array();
   pizzapi.Util.findNearbyStores(
      customer.address,
      'Delivery',
      function(storeData) {

         for(var entry = 0; entry < storeData.result.Stores.length; entry++) {
            var curEntry = storeData.result.Stores[entry];
            console.log("cur entry: " + curEntry);

            var posGet = getPos(curEntry.AddressDescription);

            var order = makeOrder(curEntry.StoreID);

         }

         console.log("All PIZZZAAAAS: " + allPizzas);
      }
   );
   //return allPizzas;
}

function getPos(address) {
   var street = address.substring(0, address.search("\n"));
   var city = address.substring(address.search("\n") + 1);
   //var city = second.substring(0, second.search(/[0-9]/));
   var parsedAddress = street + ", " + city;
   //console.log("Parsed address: " + parsedAddress);
   var posToReturn = parseLocation(parsedAddress, function(pos) {
      //console.log("Pos: " + pos);
      allPizzas.push(pos);
      console.log("All pizzas: " + allPizzas);
   });

   //console.log("Position to return: " + posToReturn);
   return posToReturn;
}

function parseLocation(parsedAddress, _callback){
   var posToReturn;
   googleMapsClient.geocode({address: parsedAddress}, function(err, response) {
      if (!err) {
         //console.log(parsedAddress + ": ");
         //console.log(response.json.results[0].geometry.location);
         //console.log(" ");
         posToReturn = response.json.results[0].geometry.location;
         //console.log("Within: " + posToReturn);
         //allPizzas.push(pos);
         //console.log("All pizzas: " + allPizzas[0].lat);
         //return pos;
      } else {
         alert("Geocode not successful");
      }
      _callback(posToReturn);
   });
   return posToReturn;
}

function makeOrder(storeID) {
   var order = new pizzapi.Order({
      customer: davidHsu,
      storeID: storeID,
      deliveryMethod: 'Delivery'
   });

   order.addItem(new pizzapi.Item({
      code: '14SCREEN',
      options: {},
      quantity: 1
   }));

   /*
   var cardInfo = new order.PaymentObject();
   cardInfo.Amount = order.Amounts.Customer;
   cardInfo.Number = cardNumber;
   cardInfo.CardType = order.validateCC(cardNumber);
   cardInfo.Expiration = '0224';
   cardInfo.SecurityCode = '102';
   cardInfo.PostalCode = '20854';
   order.Payments.push(cardInfo);
   */

   return order;
}


app.use(express.static('public'));
app.get('/', function(req, res) {
   res.sendFile('index.html', {
      root: path.join(__dirname, '.')
   })
})
app.get('/index.html', function(req, res) {
   res.sendFile(__dirname + "/index.html");
})

app.listen(8080, function() {
   console.log("listening on 8080");
})

app.get('/process_get', function(req, res) {
   response = findStores(davidHsu);
   //console.log("Begin the responses")
   //console.log(response);
   res.end(JSON.stringify(response));
})
