/**
 * Created by petervandenkerckhove on 28/10/14.
 */

var bondArray = new Array();

bondArray[0] = new Image();
bondArray[0].src = 'img/SeanConnery.png';

bondArray[1] = new Image();
bondArray[1].src = 'img/GeorgeLazenby.png';

bondArray[2] = new Image();
bondArray[2].src = 'img/TimothyDalton.png';

bondArray[3] = new Image();
bondArray[3].src = 'img/RogerMoore.png';

bondArray[4] = new Image();
bondArray[4].src = 'img/PierceBrosnan.png';

bondArray[5] = new Image();
bondArray[5].src = 'img/DanielCraig.png';

/*------------------------------------*/

function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < bondArray.length;i++)
    {
        if(bondArray[i].src == img.src)
        {
            changeName(i);
            if(i === bondArray.length-1){
                document.getElementById(element).src = bondArray[0].src;
                break;
            }
            document.getElementById(element).src = bondArray[i+1].src;
            break;
        }
    }
}

function previousImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < bondArray.length;i++)
    {
        if(bondArray[i].src == img.src)
        {
            if(i === 0){
                document.getElementById(element).src = bondArray[5].src;
                changeName(bondArray.length - 2);
                break;
            }
            document.getElementById(element).src = bondArray[i-1].src;
            changeName(i-2);
            //alert(i);
            break;
        }
    }
}

function changeName(i){
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