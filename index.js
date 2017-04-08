var pizzapi = require('pizzapi');

var davidHsu = new pizzapi.Customer({
   address: '7030 Preinkert Dr., College Park, MD, 20742',
   firstName: 'David',
   lastName: 'Hsu',
   phone: '1-800-The-White-House',
   email: 'br'
});

pizzapi.Util.findNearbyStores(
   davidHsu.address,
   'Delivery',
   function(storeData) {
      /*storeData.result.Stores.forEach(function(entry) {
         var mystore = new pizzapi.Store({
            ID: entry.StoreID
         });

         var order = makeOrder(mystore.ID);

         order.validate(function(result) {
            console.log("Wowza");
         });

         //order.price(function(result) {
         //   console.log("Price!");
         //});


         //mystore.getMenu(function(menu) {
         //   console.log(menu);
         //})


      }); */
      console.log('\n\n##################\nNearby Stores\n##################\n\n',storeData.result.Stores);
   }
);
/*
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


   return order;
}
*/
