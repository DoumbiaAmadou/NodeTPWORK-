/*
* Init Module. 
*/
(function(){
	'use strict' ; 
var app = angular.module('appModule' , [ 'ngRoute']);  


/*! --------------------- Routes
*/
app.config(function ($routeProvider){
	$routeProvider
	.when('/'			,{templateUrl:'partials/accueil.html'})
	.when('/commentaires' , {templateUrl:'partials/commentaires.html'})
	.otherwise({redirectTo: '/'}); 

});

/*! ---------------------controlleur
*/
app.controller('produitController' , ['$scope' , function ($scope){
	$scope.resultat  = $scope.p1+$scope.p2;//{"avocados" , "bannana"} 
	
	$scope.p1 = 0 ;
	$scope.p2 = 0 ;

	
	$scope.inc = function($scope){
		console.log("amadou"); 
			$scope.p1++;
			
	}
}]); 

app.controller('commentaireClient' , ['$scope' , function($scope){
	$scope.commentaires = [
   {
      "_id": "59fc7cd7dfb0a821432f60d2",
      "username": "Traci",
      "age": 33,
      "company": "SUSTENZA",
      "email": "tracijackson@sustenza.com",
      "phone": "+1 (925) 561-3434",
      "contenu": "Ullamco sint mollit adipisicing laborum irure sit id id laborum magna."
   },
   {
      "_id": "59fc7cd7269ea054f5bd84d1",
      "username": "Strickland",
      "age": 20,
      "company": "ZEPITOPE",
      "email": "stricklandjackson@zepitope.com",
      "phone": "+1 (859) 557-2368",
      "contenu": "Proident irure qui ut ut."
   },
   {
      "_id": "59fc7cd7be04e5dae707739d",
      "username": "Lori",
      "age": 24,
      "company": "PANZENT",
      "email": "lorijackson@panzent.com",
      "phone": "+1 (975) 472-2778",
      "contenu": "Laboris et duis dolor non id occaecat incididunt incididunt ex duis ipsum."
   },
   {
      "_id": "59fc7cd7af8d1d92b0934ec2",
      "username": "Crane",
      "age": 38,
      "company": "NEUROCELL",
      "email": "cranejackson@neurocell.com",
      "phone": "+1 (943) 558-2773",
      "contenu": "Nostrud mollit ad aute adipisicing est et nulla mollit exercitation ullamco magna."
   },
   {
      "_id": "59fc7cd78ee996142c1f6a2e",
      "username": "Barton",
      "age": 30,
      "company": "KIDGREASE",
      "email": "bartonjackson@kidgrease.com",
      "phone": "+1 (879) 445-3442",
      "contenu": "Amet minim ipsum et pariatur."
   },
   {
      "_id": "59fc7cd7aa86e3b78558ce48",
      "username": "Melinda",
      "age": 27,
      "company": "AQUAZURE",
      "email": "melindajackson@aquazure.com",
      "phone": "+1 (947) 544-2908",
      "contenu": "Sint cillum occaecat cupidatat qui laborum deserunt."
   },
   {
      "_id": "59fc7cd798f2d7a33efa86e0",
      "username": "Underwood",
      "age": 20,
      "company": "IZZBY",
      "email": "underwoodjackson@izzby.com",
      "phone": "+1 (866) 478-2293",
      "contenu": "Cupidatat ut dolore labore amet velit qui aliquip."
   },
   {
      "_id": "59fc7cd71b4d16b81c5b728c",
      "username": "Marian",
      "age": 28,
      "company": "ZENTILITY",
      "email": "marianjackson@zentility.com",
      "phone": "+1 (831) 502-3542",
      "contenu": "Esse aute quis cupidatat et et."
   },
   {
      "_id": "59fc7cd7ae401f2b7fe14f73",
      "username": "Henson",
      "age": 39,
      "company": "COMVEYER",
      "email": "hensonjackson@comveyer.com",
      "phone": "+1 (939) 415-2834",
      "contenu": "Ea velit dolor aute aliquip duis adipisicing incididunt deserunt veniam occaecat exercitation esse in."
   },
   {
      "_id": "59fc7cd7d2ad381b966722c1",
      "username": "Day",
      "age": 30,
      "company": "VINCH",
      "email": "dayjackson@vinch.com",
      "phone": "+1 (913) 487-3938",
      "contenu": "Mollit voluptate cupidatat culpa enim ex sint eiusmod aliqua ad enim proident duis."
   },
   {
      "_id": "59fc7cd723b481ea68a67cf0",
      "username": "Mamie",
      "age": 22,
      "company": "COMBOGENE",
      "email": "mamiejackson@combogene.com",
      "phone": "+1 (986) 528-3852",
      "contenu": "Ipsum aliqua non cupidatat ea velit occaecat."
   },
   {
      "_id": "59fc7cd78ef3e7bbb2c2fbbc",
      "username": "Autumn",
      "age": 33,
      "company": "ARCHITAX",
      "email": "autumnjackson@architax.com",
      "phone": "+1 (824) 571-2349",
      "contenu": "In reprehenderit Lorem sint exercitation commodo aute in minim do."
   },
   {
      "_id": "59fc7cd7b4c33b1e0e342c28",
      "username": "Ramirez",
      "age": 23,
      "company": "XYQAG",
      "email": "ramirezjackson@xyqag.com",
      "phone": "+1 (980) 539-3277",
      "contenu": "Irure nulla voluptate est eiusmod aliquip quis dolor ipsum."
   },
   {
      "_id": "59fc7cd74542e7923c8fb20e",
      "username": "House",
      "age": 30,
      "company": "SNACKTION",
      "email": "housejackson@snacktion.com",
      "phone": "+1 (944) 550-3722",
      "contenu": "Dolore aliqua adipisicing cupidatat incididunt tempor sint adipisicing laborum aliquip ipsum consequat officia ad."
   },
   {
      "_id": "59fc7cd7115bb8f75c9e03bf",
      "username": "Nita",
      "age": 24,
      "company": "KENGEN",
      "email": "nitajackson@kengen.com",
      "phone": "+1 (951) 412-2278",
      "contenu": "Ipsum esse laboris non minim exercitation ea nisi est officia."
   },
   {
      "_id": "59fc7cd788a200a6abd1e84b",
      "username": "Cervantes",
      "age": 25,
      "company": "EMOLTRA",
      "email": "cervantesjackson@emoltra.com",
      "phone": "+1 (910) 586-2102",
      "contenu": "Incididunt excepteur mollit ex in et ad aute reprehenderit sit fugiat."
   },
   {
      "_id": "59fc7cd7578c0fae9c44c1b5",
      "username": "Willie",
      "age": 33,
      "company": "SONGBIRD",
      "email": "williejackson@songbird.com",
      "phone": "+1 (997) 502-3070",
      "contenu": "Duis ut culpa esse tempor Lorem laborum anim reprehenderit et nulla tempor amet proident."
   },
   {
      "_id": "59fc7cd715902f1798885de8",
      "username": "Letitia",
      "age": 27,
      "company": "STUCCO",
      "email": "letitiajackson@stucco.com",
      "phone": "+1 (978) 427-2620",
      "contenu": "Pariatur ullamco exercitation et excepteur nulla incididunt amet id aute reprehenderit cupidatat fugiat id veniam."
   },
   {
      "_id": "59fc7cd7a194642235ac4e83",
      "username": "Rena",
      "age": 24,
      "company": "DIGIAL",
      "email": "renajackson@digial.com",
      "phone": "+1 (893) 474-3503",
      "contenu": "Proident magna minim est Lorem."
   },
   {
      "_id": "59fc7cd7bc77339df35937b2",
      "username": "Latoya",
      "age": 34,
      "company": "ORBAXTER",
      "email": "latoyajackson@orbaxter.com",
      "phone": "+1 (896) 481-2059",
      "contenu": "Aute adipisicing cupidatat nisi mollit deserunt laboris veniam."
   },
   {
      "_id": "59fc7cd731b6398705e181e5",
      "username": "Fletcher",
      "age": 28,
      "company": "NURPLEX",
      "email": "fletcherjackson@nurplex.com",
      "phone": "+1 (970) 512-3519",
      "contenu": "Aute elit nisi reprehenderit exercitation Lorem culpa qui ut elit dolore laboris pariatur incididunt consectetur."
   },
   {
      "_id": "59fc7cd717101a4e8efbfd1c",
      "username": "Nicholson",
      "age": 28,
      "company": "BLEENDOT",
      "email": "nicholsonjackson@bleendot.com",
      "phone": "+1 (970) 496-2896",
      "contenu": "Velit nostrud reprehenderit est nulla tempor laborum do reprehenderit."
   },
   {
      "_id": "59fc7cd7691511d6e025bc2b",
      "username": "Hayden",
      "age": 28,
      "company": "TELEPARK",
      "email": "haydenjackson@telepark.com",
      "phone": "+1 (983) 466-2225",
      "contenu": "Aute velit consectetur veniam sunt pariatur adipisicing irure."
   },
   {
      "_id": "59fc7cd713e3cc29284ad6c0",
      "username": "Rosanne",
      "age": 22,
      "company": "ZENSUS",
      "email": "rosannejackson@zensus.com",
      "phone": "+1 (907) 527-2029",
      "contenu": "Cupidatat id aliquip fugiat eiusmod eiusmod sit dolore voluptate adipisicing voluptate veniam duis ut."
   },
   {
      "_id": "59fc7cd7b6d1d9e9a81a2f5f",
      "username": "Ferguson",
      "age": 23,
      "company": "ARCTIQ",
      "email": "fergusonjackson@arctiq.com",
      "phone": "+1 (821) 590-3380",
      "contenu": "Consequat duis pariatur nisi duis."
   },
   {
      "_id": "59fc7cd7527a779b230677df",
      "username": "Miranda",
      "age": 23,
      "company": "ENERSOL",
      "email": "mirandajackson@enersol.com",
      "phone": "+1 (971) 537-2709",
      "contenu": "Excepteur est esse eiusmod ullamco officia laboris nisi eiusmod duis officia."
   },
   {
      "_id": "59fc7cd76481f1eb21be8ccd",
      "username": "Wall",
      "age": 35,
      "company": "GEOFORM",
      "email": "walljackson@geoform.com",
      "phone": "+1 (848) 503-3043",
      "contenu": "Exercitation consequat nostrud proident Lorem labore."
   },
   {
      "_id": "59fc7cd75ca40541db0c0da9",
      "username": "Sharpe",
      "age": 37,
      "company": "PROGENEX",
      "email": "sharpejackson@progenex.com",
      "phone": "+1 (856) 563-3677",
      "contenu": "Ut eiusmod cillum incididunt aute exercitation tempor quis deserunt exercitation."
   },
   {
      "_id": "59fc7cd776bf2097a3bf523e",
      "username": "Morton",
      "age": 21,
      "company": "SENSATE",
      "email": "mortonjackson@sensate.com",
      "phone": "+1 (848) 482-2170",
      "contenu": "Amet est dolore dolor voluptate et commodo."
   },
   {
      "_id": "59fc7cd710c3b40d61219ee1",
      "username": "Good",
      "age": 29,
      "company": "LINGOAGE",
      "email": "goodjackson@lingoage.com",
      "phone": "+1 (939) 473-3256",
      "contenu": "Adipisicing mollit ullamco fugiat dolore consectetur."
   },
   {
      "_id": "59fc7cd751c31f8c39e57ccc",
      "username": "Paul",
      "age": 30,
      "company": "CENTREGY",
      "email": "pauljackson@centregy.com",
      "phone": "+1 (835) 536-2320",
      "contenu": "Ut officia deserunt dolore qui et consequat veniam sint ea eu aute nulla tempor."
   },
   {
      "_id": "59fc7cd7c77f87398448279d",
      "username": "Hood",
      "age": 38,
      "company": "FANGOLD",
      "email": "hoodjackson@fangold.com",
      "phone": "+1 (941) 408-2778",
      "contenu": "Sunt esse officia ullamco proident enim eiusmod voluptate sint."
   },
   {
      "_id": "59fc7cd744bb22b94048d0a2",
      "username": "Georgia",
      "age": 33,
      "company": "ACUMENTOR",
      "email": "georgiajackson@acumentor.com",
      "phone": "+1 (917) 589-3872",
      "contenu": "Minim reprehenderit nostrud minim ullamco labore ad duis aute nulla quis aliquip eiusmod velit mollit."
   },
   {
      "_id": "59fc7cd703efecb86a5c5eb0",
      "username": "Socorro",
      "age": 36,
      "company": "SPEEDBOLT",
      "email": "socorrojackson@speedbolt.com",
      "phone": "+1 (913) 548-2588",
      "contenu": "Cupidatat ullamco dolor Lorem irure nisi ex."
   },
   {
      "_id": "59fc7cd73549b1a32fe82569",
      "username": "Oliver",
      "age": 39,
      "company": "SENMEI",
      "email": "oliverjackson@senmei.com",
      "phone": "+1 (817) 506-3113",
      "contenu": "Aute laborum cupidatat aliquip id officia exercitation."
   },
   {
      "_id": "59fc7cd7f94f0dc6e535ed9d",
      "username": "Cummings",
      "age": 25,
      "company": "KLUGGER",
      "email": "cummingsjackson@klugger.com",
      "phone": "+1 (953) 503-3330",
      "contenu": "Laborum aliqua dolor sunt nostrud nisi dolore magna."
   },
   {
      "_id": "59fc7cd7e1bb0edb920106e1",
      "username": "Castillo",
      "age": 39,
      "company": "ZIDOX",
      "email": "castillojackson@zidox.com",
      "phone": "+1 (937) 565-3347",
      "contenu": "Fugiat magna et elit quis nostrud."
   },
   {
      "_id": "59fc7cd78bd30f71164a97bb",
      "username": "Jacqueline",
      "age": 40,
      "company": "INRT",
      "email": "jacquelinejackson@inrt.com",
      "phone": "+1 (963) 473-2345",
      "contenu": "Quis officia duis dolor elit officia sunt."
   },
   {
      "_id": "59fc7cd709c6ccac6e4b5c6f",
      "username": "Hopkins",
      "age": 25,
      "company": "FLUMBO",
      "email": "hopkinsjackson@flumbo.com",
      "phone": "+1 (897) 589-3261",
      "contenu": "Est exercitation ad aliqua anim tempor aliqua mollit quis."
   },
   {
      "_id": "59fc7cd71570f74d08f6f915",
      "username": "Kimberley",
      "age": 37,
      "company": "SLOFAST",
      "email": "kimberleyjackson@slofast.com",
      "phone": "+1 (828) 486-3022",
      "contenu": "Ex cupidatat in ad minim aute cillum anim proident ipsum elit excepteur ea commodo."
   },
   {
      "_id": "59fc7cd7cd95634233388b55",
      "username": "Angelina",
      "age": 40,
      "company": "ZERBINA",
      "email": "angelinajackson@zerbina.com",
      "phone": "+1 (985) 527-2423",
      "contenu": "Qui pariatur ut magna laborum in excepteur velit Lorem enim mollit dolore ad cillum."
   },
   {
      "_id": "59fc7cd7655148dee3b807a9",
      "username": "Campbell",
      "age": 27,
      "company": "LETPRO",
      "email": "campbelljackson@letpro.com",
      "phone": "+1 (971) 585-3545",
      "contenu": "Anim velit Lorem eiusmod laborum adipisicing ullamco."
   },
   {
      "_id": "59fc7cd7588fd4fe49b3eed4",
      "username": "Powell",
      "age": 33,
      "company": "SENMAO",
      "email": "powelljackson@senmao.com",
      "phone": "+1 (862) 582-2773",
      "contenu": "Anim in esse minim deserunt."
   },
   {
      "_id": "59fc7cd79f551bb43a463b01",
      "username": "Gill",
      "age": 26,
      "company": "ENJOLA",
      "email": "gilljackson@enjola.com",
      "phone": "+1 (867) 584-2833",
      "contenu": "Irure laboris cillum consequat irure nostrud eiusmod."
   },
   {
      "_id": "59fc7cd7ee2ad0664065e9ae",
      "username": "Cherie",
      "age": 31,
      "company": "DANJA",
      "email": "cheriejackson@danja.com",
      "phone": "+1 (961) 438-3478",
      "contenu": "Ad enim qui amet excepteur."
   },
   {
      "_id": "59fc7cd74df0a30958e49f24",
      "username": "Bowman",
      "age": 31,
      "company": "TASMANIA",
      "email": "bowmanjackson@tasmania.com",
      "phone": "+1 (925) 462-2809",
      "contenu": "Nostrud qui elit exercitation proident."
   },
   {
      "_id": "59fc7cd7bc0d10f3be465037",
      "username": "Mona",
      "age": 24,
      "company": "GENMOM",
      "email": "monajackson@genmom.com",
      "phone": "+1 (983) 493-3277",
      "contenu": "Id exercitation nulla amet ad tempor sint."
   },
   {
      "_id": "59fc7cd7e8a214f51371505b",
      "username": "Mckee",
      "age": 26,
      "company": "EARBANG",
      "email": "mckeejackson@earbang.com",
      "phone": "+1 (874) 517-2215",
      "contenu": "Consectetur magna incididunt laborum eu dolore adipisicing commodo occaecat amet voluptate ad."
   },
   {
      "_id": "59fc7cd794e83152828664f7",
      "username": "Della",
      "age": 25,
      "company": "EMTRAK",
      "email": "dellajackson@emtrak.com",
      "phone": "+1 (999) 583-2746",
      "contenu": "Amet amet magna non deserunt excepteur."
   },
   {
      "_id": "59fc7cd7ea17291eb3b85b1e",
      "username": "Michael",
      "age": 24,
      "company": "SONGLINES",
      "email": "michaeljackson@songlines.com",
      "phone": "+1 (812) 573-3818",
      "contenu": "Culpa adipisicing ipsum Lorem eiusmod mollit laborum tempor qui duis voluptate nisi."
   },
   {
      "_id": "59fc7cd7a6fc4894870aee85",
      "username": "Calhoun",
      "age": 24,
      "company": "VETRON",
      "email": "calhounjackson@vetron.com",
      "phone": "+1 (946) 482-3077",
      "contenu": "Laborum in sunt nulla velit aliquip exercitation voluptate consequat sunt anim ipsum reprehenderit consequat incididunt."
   },
   {
      "_id": "59fc7cd700bed8915d9a8df2",
      "username": "Thomas",
      "age": 37,
      "company": "ZOID",
      "email": "thomasjackson@zoid.com",
      "phone": "+1 (991) 428-3091",
      "contenu": "Voluptate est cupidatat reprehenderit Lorem fugiat magna."
   },
   {
      "_id": "59fc7cd7525b63bc15dcfe54",
      "username": "Mullins",
      "age": 34,
      "company": "SKYPLEX",
      "email": "mullinsjackson@skyplex.com",
      "phone": "+1 (923) 557-2348",
      "contenu": "Anim cillum sint sunt ad est laboris nulla amet."
   },
   {
      "_id": "59fc7cd786e6cd5c896c8d05",
      "username": "Sue",
      "age": 28,
      "company": "VORATAK",
      "email": "suejackson@voratak.com",
      "phone": "+1 (828) 444-3686",
      "contenu": "Pariatur id amet aliqua nisi amet sit velit laborum deserunt quis proident."
   },
   {
      "_id": "59fc7cd71eb0673a52f3fe49",
      "username": "Valenzuela",
      "age": 33,
      "company": "ISOLOGIA",
      "email": "valenzuelajackson@isologia.com",
      "phone": "+1 (973) 423-3591",
      "contenu": "Id culpa dolor duis tempor."
   },
   {
      "_id": "59fc7cd7dfd8367e68bdfc1d",
      "username": "Vickie",
      "age": 24,
      "company": "ZILLAN",
      "email": "vickiejackson@zillan.com",
      "phone": "+1 (856) 498-2168",
      "contenu": "Cupidatat anim elit do id cupidatat exercitation voluptate."
   }
	]

}]); 


})()