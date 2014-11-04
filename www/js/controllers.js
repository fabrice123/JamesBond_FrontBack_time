angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal,$http,bondservice, $timeout) {

        bondservice.getbonds().then(function(data){
console.log(data);
        });



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
            {"id": 0,"web":"http://googlewebcomponents.github.io/"},
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

                    $scope.changeName(i);
                    $scope.jbnimber=i+1;
                    console.log($scope.jbnimber);
                    console.log( $scope.bonds);
                    if(i === $scope.bonds.length-1){
                        document.getElementById(element).src = $scope.bonds[0].imagesrc.src;
                        break;
                    }
                    document.getElementById(element).src = $scope.bonds[i+1].imagesrc.src;
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
                        document.getElementById(element).src =$scope.bonds[5].imagesrc.src;
                        $scope.changeName($scope.bonds.length - 2);
                        break;
                    }
                    document.getElementById(element).src = $scope.bonds[i-1].imagesrc.src;
                    $scope.changeName(i-2);
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

    .controller('SingleBondCtrl', function($scope, $stateParams) {
        console.log("kk");
        console.log($stateParams.bondId);
        $scope.ide=$stateParams.bondId;
    })

    .controller('GirlsCtrl', function($scope, $stateParams) {

    })

    .controller('BondgirlsCtrl', function($scope, $stateParams) {

    })

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})


