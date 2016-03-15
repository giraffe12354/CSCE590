angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})


/*.factory('Trips', function() {
  // Might use a resource here that returns a JSON array
  var gUser=null;
  // Some fake testing data

      var trips = [{
    id: 0,
    fromcity: 'AAA',
    tocity: 'BBB',
    date: '2016-5-15'
  }];

  
  console.log("initializing app...");

var APPLICATION_ID = '39A2CA58-20B2-F790-FFF0-A4239F494300',
    SECRET_KEY = 'C880CB24-6D10-8E4C-FF7E-9C94567FC500',
    VERSION = 'v1'; //default application version;
 
Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);



  return {
    all: function() {
      return trips;
    },
    remove: function(trip) {
      trips.splice(trips.indexOf(trip), 1);
    },
    addtrip:function(from,to,date){
      trips.push({
        id:trips.length,
        fromcity:from,
        tocity:to,
        date:date
      })
      //SAVE trips to localStorage

    },
    get: function(tripId) {
      for (var i = 0; i < trips.length; i++) {
        if (trips[i].id === parseInt(tripId)) {
          return trips[i];
        }
      }
      return null;
    }
  };
})*/

.factory('Products', function() {
  // Might use a resource here that returns a JSON array
  var gUser=null;
  // Some fake testing data

      var products = [{
    id: 0,
    ProductName: 'Tomato',
    ProductQuantity: '1 lb',
    ProductPrice: '$5',
    ProductType: 'Food',
    OrderDate: '2016-5-15'
  }];

  var searchproducts = [];

  console.log("initializing app...");

var APPLICATION_ID = '39A2CA58-20B2-F790-FFF0-A4239F494300',
    SECRET_KEY = 'C880CB24-6D10-8E4C-FF7E-9C94567FC500',
    VERSION = 'v1'; //default application version;
 
Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);



  return {
    all: function() {

      var productlist = Backendless.Persistence.of
  ( Product ).find();
  console.log(Backendless);
  console.log(productlist.data.length+ "found");
    products = productlist.data;

      return products;
    },
    remove: function(product) {
     // products.splice(products.indexOf(product), 1);
     console.log('"'+"ProductName='"+product.ProductName+"'"+'"'+product.objectId);
      
      var dataQuery = {
         
         condition:"ProductName='7'"
       

      };
      // var myContact = contactStorage.find( dataQuery );
      // console.log(myContact.data.length);
      // contactStorage.remove( myContact.data[0] );

      var dataQuery = new Backendless.DataQuery();
      dataQuery.condition = sprintf("objectId='%s'",product.objectId);
      myproducts = Backendless.Persistence.of(Product).find(dataQuery);
      console.log(myproducts.data.length +" found");
      Backendless.Persistence.of(Product).remove(myproducts.data[0]);

      var i = products.indexOf(product);
      if(i>-1){
        products.splice(i, 1);
      }
    },
    addproduct:function(name,quantity,price,type,date){
      products.push({
        id:products.length,
        ProductName:name,
        ProductQuantity:quantity,
        ProductPrice:price,
        ProductType:type,
        OrderDate:date
      })
      //SAVE trips to localStorage

    },
    get: function(productId) {
      console.log(productId);
      for (var i = 0; i < products.length; i++) {
        if (products[i].objectId == productId) {
          return products[i];
        }
      }
      return null;
    }
  };
})


;


function sprintf() {
    var args = arguments,
    string = args[0],
    i = 1;
    return string.replace(/%((%)|s|d)/g, function (m) {
        // m is the matched format, e.g. %s, %d
        var val = null;
        if (m[2]) {
            val = m[2];
        } else {
            val = args[i];
            // A switch statement so that the formatter can be extended. Default is %s
            switch (m) {
                case '%d':
                    val = parseFloat(val);
                    if (isNaN(val)) {
                        val = 0;
                    }
                    break;
            }
            i++;
        }
        return val;
    });
}