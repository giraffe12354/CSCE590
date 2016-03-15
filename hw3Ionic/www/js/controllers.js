angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


/*.controller('TripsCtrl', function($scope, Trips) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.trips = Trips.all();
  $scope.remove = function(trip) {
    Trips.remove(trip);
  };
})*/

.controller('ProductsCtrl', function($scope, Products) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.products = Products.all();
  $scope.remove = function(product) {
    Products.remove(product);
  };
})


/*.controller('TripDetailCtrl', function($scope, $stateParams, Trips) {
  $scope.trip = Trips.get($stateParams.tripId);
})*/

.controller('ProductDetailCtrl', function($scope, $stateParams, Products) {
  $scope.product = Products.get($stateParams.productId);
})



.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

/*.controller('AddTripCtrl', function($scope,$state,Trips) {
  var self=this;
  self.fromcity = "";
  self.tocity = "";
  self.date = new Date("11/21/2016");

  $scope.trips = Trips.all();
    console.log($scope.trips.length  +" trips so far ");


  $scope.save=function () {
    // body...
    console.log("save to new page ");
    console.log(self.fromcity+"  "+self.tocity);
    console.log($scope.trips.length);
    //now save the info to the Data Object. 
    console.log(Trips.all().length  +" trips so far ");
    Trips.addtrip(self.fromcity,self.tocity,self.date);
    $state.go("tab.trips");
    // $ionicHistory.goBack();

  };

})*/

.controller('AddProductCtrl', function($scope,$state,Products) {
  var self=this;
  self.ProductName = "";
  self.ProductQuantity = "";
  self.ProductPrice= "";
  self.ProductType = "";
  self.OrderDate = new Date("11/21/2016");

  $scope.products = Products.all();
    console.log($scope.products.length  +" products so far ");


  $scope.save=function () {
    // body...
    console.log("save to new page ");
    console.log(self.ProductName+"  "+self.ProductQuantity+"  "+self.ProductPrice+"  "+self.ProductType);
    console.log($scope.products.length);
    //now save the info to the Data Object. 
    console.log(Products.all().length  +" products so far ");
    //Products.addproduct(self.ProductName,self.ProductQuantity,self.ProductPrice,self.ProductType,self.OrderDate);
    //$state.go("tab.products");
    // $ionicHistory.goBack();
    var currentUser = Backendless.UserService.getCurrentUser();
    if(currentUser==null){
      console.log(" cannot find user obj");
    }
    var product = new Product( {
     user:currentUser,
     ProductName: self.ProductName,
     ProductQuantity: self.ProductQuantity,
     ProductPrice: self.ProductPrice,
     ProductType: self.ProductType,
     OrderDate: self.date,
  });
 
  var savedProduct = Backendless.Persistence.of( Product ).save( product );

  $scope.products = Products.all();


    $state.go("tab.products");

  };

})



/*.controller('RegisterCtrl', function($scope,$state,Trips) {
  var self=this;
  self.email = "";
  self.password = "";
  self.name = "";


  $scope.save=function () {
    // body...
    console.log("save to new page ");
    console.log(self.email+"  "+self.name);
    function userRegistered( user )
    {
      Trips.gUser=user;
     alert( "user has been registered:"+user.email);
    }-
     
    function gotError( err ) // see more on error handling
    {
     console.log( "error message - " + err.message );
     console.log( "error code - " + err.statusCode );
    }
     
    var user = new Backendless.User();
    user.email = self.email;
    user.password = self.password;
    user.name=self.name;
    Backendless.UserService.register( 
      user, new Backendless.Async( 
        this.userRegistered, this.gotError ) );

    $state.go("tab.trips");
    // $ionicHistory.goBack();

  };

})*/

.controller('RegisterCtrl', function($scope,$state,Products) {
  var self=this;
  self.email = "";
  self.password = "";
  self.name = "";


  $scope.save=function () {
    // body...
    console.log("save to new page ");
    console.log(self.email+"  "+self.name);
    function userRegistered( user )
    {
      Products.gUser=user;
     alert( "user has been registered:"+user.email);
    }-
     
    function gotError( err ) // see more on error handling
    {
     console.log( "error message - " + err.message );
     console.log( "error code - " + err.statusCode );
    }
     
    var user = new Backendless.User();
    user.email = self.email;
    user.password = self.password;
    user.name=self.name;
    Backendless.UserService.register( 
      user, new Backendless.Async( 
        this.userRegistered, this.gotError ) );

    $state.go("tab.products");
    // $ionicHistory.goBack();

  };

})

/*.controller('LoginCtrl', function($scope,$state,Trips) {

 var self=this;
$scope.login = function() {
  console.log("login executed");
  console.log(self.email);
 var loggedUser = Backendless.UserService.login( self.email, self.password );
   console.log( "User has been logged in: " + loggedUser );
 
   var user = Backendless.UserService.getCurrentUser();
  if( user != null )
   {
    // get user's email (i.e. mandatory/predefined property)
    // email = user.getEmail();
     alert("logedin");
   }
  else
   {
     console.log( "User hasn't been logged" );
   }
}

});*/

.controller('LoginCtrl', function($scope,$state,Products) {

 var self=this;
$scope.login = function() {
  console.log("login executed");
  console.log(self.email);
 var loggedUser = Backendless.UserService.login( self.email, self.password );
   console.log( "User has been logged in: " + loggedUser );
 
   var user = Backendless.UserService.getCurrentUser();
  if( user != null )
   {
    // get user's email (i.e. mandatory/predefined property)
    // email = user.getEmail();
     alert("logedin");
   }
  else
   {
     console.log( "User hasn't been logged" );
   }
}

});


function Product(args) {
   args = args || {};
  this.ProductName = args.ProductName || "";
  this.ProductQuantity = args.ProductQuantity || "";
  this.ProductPrice = args.ProductPrice || "";
  this.ProductType = args.ProductType || "";
  this.Orderdate = args.Orderdate || "";
}
