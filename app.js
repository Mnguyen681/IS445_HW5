var init=16 ; // initial font size
function arrow(event) { // function to handle arrow keys
event.preventDefault(); // to prevent default scroll functions
var balloon = document.getElementById("balloon"); // getting the paragraph
    switch (event.key) { // switch case
        case "ArrowDown": //In case of arrow down pressing
        init=init-(init*0.15) ; //Decreasing the ballon size by 10%
        balloon.style.fontSize=init+"px" ; //Updating the new balloon size
        if (init <=0){ 
            balloon.textContent="Done" ; //Repacing balloon
            balloon.style.fontSize == "60px" ;
            window.removeEventListener('keydown',arrow); //Removing any more inflating/deflating        
        }
        break;
        case "ArrowUp": //In case of arrow up pressing
        if (init >=60){ // max ballon size to 40px
            balloon.textContent="💥" ; //replaced balloon
            window.removeEventListener('keydown',arrow); //Removing any more inflating/deflating
        }
        else{
            init=init+(init*0.15) ; //increasing the size of balloon
            balloon.style.fontSize=init+"px" ;//Updating balloon size
        }break;
    }
}

window.addEventListener("keydown",arrow) ; //Event listener when key is pressed