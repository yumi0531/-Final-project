let pictures = ["chick" ,"cat" ,"coolCat" ,"dog"];
let index = 0;
function start(){
    pickrole= document.getElementById("role");
    Next = document.getElementById("next");
    Next.addEventListener("click", pickNext ,false)
    Prev = document.getElementById("prev");
    Prev.addEventListener("click", pickPrev ,false)
    StartGame = document.getElementById("startGame")
    StartGame.addEventListener("click", beginning ,false)
}

function pickNext(){
    index++;
    if (index == 4){
        index = 0;
    }
    pickrole.setAttribute("src", pictures[index] + ".png");
    console.log("下一個角色");
}

function pickPrev(){
    index--;
    if (index == -1){
        index = 3;

    }
    pickrole.setAttribute("src", pictures[index] + ".png");
    console.log("上一個角色");
    
}

function beginning(){
    $('.UI').remove();
} 

window.addEventListener("load", start ,false);