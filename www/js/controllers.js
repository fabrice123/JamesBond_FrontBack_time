angular.module('starter.controllers', [])




.controller('AppCtrl', function($scope, $ionicModal, $timeout) {




       document.getElementById("jbaudio").load();
        document.getElementById("jbaudio").pause();
        //document.getElementById("jbaudio").play();
        $scope.volumOnorOff=function() {
            var getvolume = document.getElementById("volume");

            var volumelogo = getvolume.className;

            if (volumelogo == "button button-icon icon ion-volume-high activated") {
                console.log("volumelogo");
                getvolume.className = "button button-icon icon ion-volume-mute";
                document.getElementById("jbaudio").pause();
            }
            if (volumelogo == "button button-icon icon ion-volume-mute activated") {
                console.log("volumelogo");
                getvolume.className = "button button-icon icon ion-volume-high";
                document.getElementById("jbaudio").play();
            }
        };
})


    .controller('BondsCtrl', function($scope) {
        $scope.bonds = [
            {"id": 0},
            {  "id": 1 },
            {  "id": 2 },
            { "id": 3 },
            {  "id": 4 },
            { "id": 5}
        ];
        $scope.jbnimber=0;
        $scope.bonds[0].imagesrc=new Image();
        $scope.bonds[0].imagesrc.src='img/SeanConnery.png';
        $scope.bonds[1].imagesrc=new Image();
        $scope.bonds[1].imagesrc.src='img/GeorgeLazenby.png';
        $scope.bonds[2].imagesrc=new Image();
        $scope.bonds[2].imagesrc.src='img/TimothyDalton.png';
        $scope.bonds[3].imagesrc=new Image();
        $scope.bonds[3].imagesrc.src='img/RogerMoore.png';
        $scope.bonds[4].imagesrc=new Image();
        $scope.bonds[4].imagesrc.src='img/PierceBrosnan.png';
        $scope.bonds[5].imagesrc=new Image();
        $scope.bonds[5].imagesrc.src='img/DanielCraig.png';



        $scope.nextImage=function(element)
        {
            var img = document.getElementById(element);

            for(var i = 0; i < $scope.bonds.length;i++)
            {

                if($scope.bonds[i].imagesrc.src == img.src)
                {


                    $scope.jbnimber=i+1;
                    console.log($scope.jbnimber);
                    console.log( $scope.bonds);
                    if(i === $scope.bonds.length-1){
                        document.getElementById(element).className= "bondImage fade";
                        setTimeout(function(){ document.getElementById(element).src = $scope.bonds[0].imagesrc.src;},200);
                        setTimeout(function(){  if(document.getElementById(element).className=="bondImage fade")
                        {
                            document.getElementById(element).className= "bondImage fade-in-not-out";
                        }
                        else{

                            document.getElementById(element).className= "bondImage fade-in-not-out-in";

                        }
                            $scope.changeName(i);
                        },350);
                        console.log(i);
                        break;
                    }



                    console.log(document.getElementById(element));
                    document.getElementById(element).className= "bondImage fade";
                    setTimeout(function(){  document.getElementById(element).src = $scope.bonds[i+1].imagesrc.src;},200);
                    setTimeout(function(){  if(document.getElementById(element).className=="bondImage fade")
                    {
                        document.getElementById(element).className= "bondImage fade-in-not-out";
                    }
                    else{

                        document.getElementById(element).className= "bondImage fade-in-not-out-in";

                    }
                        $scope.changeName(i);
                    },350);


                    break;
                }
            }
        }

        $scope.previousImage=function(element)
        {
            var img = document.getElementById(element);

            for(var i = 0; i < $scope.bonds.length;i++)
            {
                if($scope.bonds[i].imagesrc.src == img.src)
                {
                    if(i === 0){
                        document.getElementById(element).className= "bondImage fade";
                        setTimeout(function(){  document.getElementById(element).src =$scope.bonds[5].imagesrc.src;},200);
                        setTimeout(function(){  if(document.getElementById(element).className=="bondImage fade")
                        {
                            document.getElementById(element).className= "bondImage fade-in-not-out";
                        }
                        else{

                            document.getElementById(element).className= "bondImage fade-in-not-out-in";

                        }
                            $scope.changeName($scope.bonds.length - 2);
                        },350);

                        break;
                    }

                    document.getElementById(element).className= "bondImage fade";

                    setTimeout(function(){ document.getElementById(element).src = $scope.bonds[i-1].imagesrc.src;},200);

                    setTimeout(function(){  if(document.getElementById(element).className=="bondImage fade")
                    {
                        document.getElementById(element).className= "bondImage fade-in-not-out";
                    }
                    else{

                        document.getElementById(element).className= "bondImage fade-in-not-out-in";

                    }
                        $scope.changeName(i-2);
                    },350);

                    //alert(i);
                    break;
                }
            }
        }

        $scope.changeName =function (i){
            switch(i+1){
                case 1:
                    document.getElementById('firstname').innerHTML = "George";
                    document.getElementById('lastname').innerHTML = "Lazenby";
                    break;
                case 2:
                    document.getElementById('firstname').innerHTML = "Timothy";
                    document.getElementById('lastname').innerHTML = "Dalton";
                    break;
                case 3:
                    document.getElementById('firstname').innerHTML = "Roger";
                    document.getElementById('lastname').innerHTML = "Moore";
                    break;
                case 4:
                    document.getElementById('firstname').innerHTML = "Pierce";
                    document.getElementById('lastname').innerHTML = "Brosnan";
                    break;
                case 5:
                    document.getElementById('firstname').innerHTML = "Daniel";
                    document.getElementById('lastname').innerHTML = "Craig";
                    break;
                default:
                    document.getElementById('firstname').innerHTML = "Sean";
                    document.getElementById('lastname').innerHTML = "Connery";

                    break;
            }
        }
    })

    .controller('SingleBondCtrl', function($scope,$http,bondservice, $stateParams) {

        $scope.bonds=[];
        var retrievedObject1,  retrievedObject2, retrievedObject3,retrievedObject4,retrievedObject5,retrievedObject6;

        $scope.ide=$stateParams.bondId;

        switch ($scope.ide)
        {
            case "0":

                GetTheBondbyId(738,retrievedObject1,'bond1Storage');

                //undefined
                break;
            case "1":
                GetTheBondbyId(10167,retrievedObject2,'bond2Storage');
break;
            case "2":
                GetTheBondbyId(10669,retrievedObject3,'bond3Storage');

                break;
            case "3":
                GetTheBondbyId(10222,retrievedObject4,'bond4Storage');

                break;
            case "4":
                GetTheBondbyId(517,retrievedObject5,'bond5Storage');

                break;
            case "5":
                GetTheBondbyId(8784,retrievedObject6,'bond6Storage');

                break;
            case "0":
                GetTheBondbyId(738,retrievedObject1,'bond1Storage');

                break;
        }



        function GetTheBondbyId(bondid,objectretriever,storager) {
            objectretriever = localStorage.getItem(storager);
            if (typeof objectretriever === 'undefined' || objectretriever === null) {

                bondservice.getsinglebond(bondid).then(function (data) {

                    $scope.bonds = data;
                    $scope.bonds.biografie = $scope.bonds['biography'];
                    $scope.bonds.profileimage = $scope.bonds['profile_path'];
                    $scope.bonds.birthday = $scope.bonds['birthday'];
                    $scope.bonds.name = $scope.bonds['name'];
                    console.log($scope.bonds.profileimage);
                    console.log("kkkk" +$scope.networkIcon);
                    $scope.bonds.place_of_birth = $scope.bonds['place_of_birth'];

                    storage = localStorage.setItem(storager, JSON.stringify($scope.bonds));
                });
            }
            else {

                $scope.bonds = JSON.parse(objectretriever);
                console.log("kkk");
                console.log('retrievedObject: ', JSON.parse(objectretriever));
            }


        }
$scope.linkfunction=function(){
    console.log("loplop");
};


    })

    .controller('SingleBondPictureCtrl', function($scope,$http,picturebondservice, $stateParams) {



        $scope.ide=$stateParams.bondId;

        switch ($scope.ide)
        {
            case "0":

                GetTheBondbyId(738);

                //undefined
                break;
            case "1":
                GetTheBondbyId(10167);
                break;
            case "2":
                GetTheBondbyId(10669);

                break;
            case "3":
                GetTheBondbyId(10222);

                break;
            case "4":
                GetTheBondbyId(517);

                break;
            case "5":
                GetTheBondbyId(8784);

                break;
            case "0":
                GetTheBondbyId(738);

                break;
        }

        console.log("kk"+$scope.pictures);
        function GetTheBondbyId(bondid) {

            picturebondservice.getpicturesbond(bondid).then(function (data) {

console.log("ss");

                $scope.pictures = data;




            });

        }



    })

    .controller('SingleBondMovieCtrl', function($scope, $http,$q,moviesbondservice ,$stateParams) {

        $scope.ide=$stateParams.bondId;

        switch ($scope.ide)
        {
            case "0":

                GetTheBondbyId(738);

                //undefined
                break;
            case "1":
                GetTheBondbyId(10167);
                break;
            case "2":
                GetTheBondbyId(10669);

                break;
            case "3":
                GetTheBondbyId(10222);

                break;
            case "4":
                GetTheBondbyId(517);

                break;
            case "5":
                GetTheBondbyId(8784);

                break;
            case "0":
                GetTheBondbyId(738);

                break;
        }

        function GetTheBondbyId(bondid) {
           /* $scope.items = [];
            $scope.totalItems=0;
            $scope.startList = 0;
            $scope.stopLoadingData = false;

            $scope.more = function () {
                console.log("k");
                console.log( $scope.stopLoadingData);
                if (!$scope.stopLoadingData) {
                    $scope.loading = true;
            $http.get('https://api.themoviedb.org/3/person/'+bondid+'?api_key=587a0b5335cd9ab61abe241c25591eb9&append_to_response=movie_credits', {"startList": $scope.startList}).success(function (data) {


                $scope.totalItems=data.movie_credits.cast.length;
                console.log($scope.totalItems);
                angular.forEach(data.movie_credits.cast,function (key) {

                    $scope.items.push(key);
                });
                $scope.stopLoadingData = ($scope.items.length === $scope.totalItems);
                $scope.startList += 10;
                console.log($scope.items.length);
            });
                };
                $scope.loading = false;
            };
            $scope.more();*/
            $scope.movies=[];
            moviesbondservice.getmoviesbond(bondid).then(function (data) {


                angular.forEach(data,function (key) {

                    if(key['poster_path']==null)
                    {
                        console.log(key['poster_path']);

                    }
                    else {
                        console.log(key);
                        $scope.movies.push(key);
                    }
                });

            console.log($scope.movies.length);



            });
        }


    })





    .controller('GirlsCtrl', function($scope, $http,$q,$stateParams,bondgirlsservice,TDCardDelegate,$timeout) {
       var i;
        var cardTypes = [];

        $scope.thegirls=new Array(22);
       $scope.thegirls=[9871,9896,9907,9919,10070,10168,10190,10223,10341,10458,10475,10500,10342,10660,10670,10679,10695,1620,9205,4587,10912,18182,1030261];

$scope.loading=true;
$scope.cardTypes=[];
        $scope.pipi="http://image.tmdb.org/t/p/w500/"
        for (i = 0; i <  $scope.thegirls.length; i++) {
            console.log( "1");
            bondgirlsservice.getbondgirls($scope.thegirls[i]).then(function (data) {
                console.log(data + "    "+i);
                $scope.cardTypes.push(data);

              if($scope.cardTypes.length==23)
              {
                  girls();

                 $timeout(function(){$scope.loading=false;},1000) ;
              }
                else
              {
                  $scope.loading=true;
              }


            });


        }
       function girls(){
       cardTypes=$scope.cardTypes;
           console.log(cardTypes);




        $scope.cards = Array.prototype.slice.call(cardTypes, 0);

console.log($scope.cards);
        $scope.cardDestroyed = function(index) {
            $scope.cards.splice(index, 1);
        };

        $scope.addCard = function() {

            var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
            console.log(newCard);
            newCard.id = Math.random();
            $scope.cards.push(angular.extend({}, newCard));
        }

       }
    })

    .controller('CardCtrl', function($scope, TDCardDelegate) {
        console.log("k");
        $scope.cardSwipedLeft = function(index) {
            console.log('LEFT SWIPE');
            $scope.addCard();
        };
        $scope.cardSwipedRight = function(index) {
            console.log('RIGHT SWIPE' + index);
            $scope.cardDestroyed();
        };
    })


    .controller('BondgirlsCtrl', function($scope, $stateParams) {

    })


    .controller('MapsCtrl', function($scope, $stateParams,$ionicLoading, $compile,leafletEvents) {
        console.log("kk");
        $scope.eventStatus = 'Map View';

        angular.extend($scope, {
            center: {
                lat: 39.8282,
                lng: -98.5795,
                zoom: 5
            },
            markers: {
                mainMarker: {
                    lat: 39.8282,
                    lng: -98.5795,
                    focus: true
                }
            },
            events: {
                markers: {
                    enable: leafletEvents.getAvailableMarkerEvents()
                }
            }
        });

        var markerEvents = leafletEvents.getAvailableMarkerEvents();
        for (var k in markerEvents) {
            var eventName = 'leafletDirectiveMarker.' + markerEvents[k];
            $scope.$on(eventName, function(event, args){
                $scope.eventStatus = event.name;

                console.log("Got " + event.name);
            });
        }


    })



