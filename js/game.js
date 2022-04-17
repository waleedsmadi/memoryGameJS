// selectors 
const userName = document.querySelector("[data-name]"),
      theTime = document.querySelector("[data-time]"),
      theScore = document.querySelector("[data-score]"),
      boxes = Array.from(document.querySelectorAll(".box"));



// setting 
let activeClick = false;
let counterPic = 0;
let score = 0;
let sec = 30;
let pic1;
let pic2;






// Functions

function startGame(){

    // reset all setting 
    activeClick = false;
    counterPic = 0;
    score = 0;
    sec = 30;



    // shuffle boxes
    shuffle(boxes)


    // show pics for 3's, then hide again
    // and make the click active
    boxes.forEach(box => {
        box.classList.add("flip");
    });

    setTimeout(function(){
        boxes.forEach(box => {
            box.classList.remove("flip");
        });
        activeClick = true;
        time();
    },3000);
}





// Monitor and reduce time
function time(){
    setInterval(function(){
        theTime.innerText = sec--;
        if(sec == 0){
            return window.location.assign("/result.html");
        }
    },1000)
}





// shuffle boxes
function shuffle(array){
    let current = array.length,
        temp,
        random;

        // randomize positions (swapping)
        while(current > 0){
            random = parseInt(Math.random() * current);
            current --;
            
            temp = array[current];

            array[current] = array[random];
            
            array[random] = temp;
        }

        // re-order boxes
        for(let i=0; i<array.length; i++){
            array[i].style.order = i;
        }
}





boxes.forEach(box => {
    box.addEventListener("click", function(){

        // if click not active OR the pic is fliped >> return
        if(!activeClick || this.classList.contains("flip")) return
        
        counterPic ++;

        this.classList.add("flip");
        
        // if one pic is fliped
        if(counterPic != 2){
            pic1 = this.querySelector(".back");
        
        // two pics are fliped
        }else{
            pic2 = this.querySelector(".back");;
            counterPic = 0;
            activeClick = false;



            // check if these pics are identical
            if (pic1.dataset["pic"] === pic2.dataset["pic"]){
                incrementScore();
                activeClick = true;
            }else{
                setTimeout(function(){
                    console.log("no");
                    pic1.parentElement.classList.remove("flip");
                    pic2.parentElement.classList.remove("flip");
                    activeClick = true;
                }, 1000)
            }
        }


    });
});


// increment the score
function incrementScore(){
    score ++;
    theScore.innerText = score;   
}



// starting the game
startGame();