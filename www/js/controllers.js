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

    .controller('SingleBondCtrl', function($scope,$http,bondservice, $stateParams) {

        $scope.bonds=[];
        var retrievedObject1,  retrievedObject2, retrievedObject3,retrievedObject4,retrievedObject5,retrievedObject6;

        $scope.ide=$stateParams.bondId;

        switch ($scope.ide)
        {
            case "0":
                retrievedObject1 = localStorage.getItem('bond1Storage');
                if (typeof retrievedObject1 === 'undefined' || retrievedObject1 === null) {

                    bondservice.getsinglebond(738).then(function (data) {

                        $scope.bonds = data;
                        $scope.bonds.biografie = $scope.bonds['biography'];
                        $scope.bonds.profileimage = $scope.bonds['profile_path'];
                        $scope.bonds.birthday = $scope.bonds['birthday'];
                        $scope.bonds.name = $scope.bonds['name'];
                        console.log( $scope.bonds.profileimage);
                        console.log( $scope.networkIcon);
                        $scope.bonds.place_of_birth = $scope.bonds['place_of_birth'];

                        storage = localStorage.setItem('bond1Storage', JSON.stringify($scope.bonds));
                    });
                }
                else {

                    $scope.bonds = JSON.parse(retrievedObject1);
                    console.log('retrievedObject: ', JSON.parse(retrievedObject1));
                }


                //undefined
                break;
            case "1":
                retrievedObject2 = localStorage.getItem('bond2Storage');
                if (typeof retrievedObject2 === 'undefined' || retrievedObject2 === null) {
                    bondservice.getsinglebond(10167).then(function (data) {
                        $scope.bonds = data;
                        $scope.bonds.biografie = $scope.bonds['biography'];
                        $scope.bonds.profileimage = $scope.bonds['profile_path'];
                        $scope.bonds.birthday = $scope.bonds['birthday'];
                        $scope.bonds.name = $scope.bonds['name'];
                        $scope.bonds.place_of_birth = $scope.bonds['place_of_birth'];

                        storage = localStorage.setItem('bond2Storage', JSON.stringify($scope.bonds));
                    });
                }
                else {

                    $scope.bonds = JSON.parse(retrievedObject2);
                    console.log('retrievedObject: ', JSON.parse(retrievedObject2));
                }
                break;
            case "2":
                retrievedObject3 = localStorage.getItem('bond3Storage');
                if (typeof retrievedObject3 === 'undefined' || retrievedObject3 === null) {
                    bondservice.getsinglebond(10669).then(function (data) {
                        $scope.bonds = data;
                        $scope.bonds.biografie = $scope.bonds['biography'];
                        $scope.bonds.profileimage = $scope.bonds['profile_path'];
                        $scope.bonds.birthday = $scope.bonds['birthday'];
                        $scope.bonds.name = $scope.bonds['name'];
                        $scope.bonds.place_of_birth = $scope.bonds['place_of_birth'];
                        console.log($scope.bonds);

                        storage = localStorage.setItem('bond3Storage', JSON.stringify($scope.bonds));
                    });
                }
                else {

                    $scope.bonds = JSON.parse(retrievedObject3);
                    console.log('retrievedObject: ', JSON.parse(retrievedObject3));
                }
                break;
            case "3":
                retrievedObject4 = localStorage.getItem('bond4Storage');
                if (typeof retrievedObject4 === 'undefined' || retrievedObject4 === null) {
                    bondservice.getsinglebond(10222).then(function (data) {
                        $scope.bonds = data;
                        $scope.bonds.biografie = $scope.bonds['biography'];
                        $scope.bonds.profileimage = $scope.bonds['profile_path'];
                        $scope.bonds.birthday = $scope.bonds['birthday'];
                        $scope.bonds.name = $scope.bonds['name'];
                        $scope.bonds.place_of_birth = $scope.bonds['place_of_birth'];

                        storage = localStorage.setItem('bond4Storage', JSON.stringify($scope.bonds));
                    });
                }
                else {

                    $scope.bonds = JSON.parse(retrievedObject4);
                    console.log('retrievedObject: ', JSON.parse(retrievedObject4));
                }
                break;
            case "4":
                retrievedObject5 = localStorage.getItem('bond5Storage');
                if (typeof retrievedObject5 === 'undefined' || retrievedObject5 === null) {
                    console.log("sd");
                    bondservice.getsinglebond(517).then(function (data) {
                        $scope.bonds = data;
                        $scope.bonds.biografie = $scope.bonds['biography'];
                        $scope.bonds.profileimage = $scope.bonds['profile_path'];
                        $scope.bonds.birthday = $scope.bonds['birthday'];
                        $scope.bonds.name = $scope.bonds['name'];
                        $scope.bonds.place_of_birth = $scope.bonds['place_of_birth'];

                        storage = localStorage.setItem('bond5Storage', JSON.stringify($scope.bonds));
                    });
                }
                else {

                    $scope.bonds = JSON.parse(retrievedObject5);
                    console.log('retrievedObject: ', JSON.parse(retrievedObject5));
                }
                break;
            case "5":
                retrievedObject6 = localStorage.getItem('bond6Storage');
                if (typeof retrievedObject6 === 'undefined' || retrievedObject6 === null) {
                    bondservice.getsinglebond(8784).then(function (data) {
                        $scope.bonds = data;
                        $scope.bonds.biografie = $scope.bonds['biography'];
                        $scope.bonds.profileimage = $scope.bonds['profile_path'];
                        $scope.bonds.birthday = $scope.bonds['birthday'];
                        $scope.bonds.name = $scope.bonds['name'];
                        $scope.bonds.place_of_birth = $scope.bonds['place_of_birth'];

                        storage = localStorage.setItem('bond6Storage', JSON.stringify($scope.bonds));
                    });
                }
                else {

                    $scope.bonds = JSON.parse(retrievedObject6);
                    console.log('retrievedObject: ', JSON.parse(retrievedObject6));
                }
                break;
            case "0":
                retrievedObject1 = localStorage.getItem('bond1Storage');
                if (typeof retrievedObject1 === 'undefined' || retrievedObject1 === null) {
                    bondservice.getsinglebond(738).then(function (data) {
                        $scope.bonds = data;
                        $scope.bonds.biografie = $scope.bonds['biography'];
                        $scope.bonds.profileimage = $scope.bonds['profile_path'];
                        $scope.bonds.birthday = $scope.bonds['birthday'];
                        $scope.bonds.name = $scope.bonds['name'];
                        $scope.bonds.place_of_birth = $scope.bonds['place_of_birth'];

                        storage = localStorage.setItem('bond1Storage', JSON.stringify($scope.bonds));
                    });
                }
                else {

                        $scope.bonds = JSON.parse(retrievedObject1);
                        console.log('retrievedObject: ', JSON.parse(retrievedObject1));
                    }
                break;
        }






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


