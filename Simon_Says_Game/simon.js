let h3=document.querySelector("h3");
let gameseq=[];
let userseq=[];
let btns=["yellow","green","red","purple"];
let started=false;
let level=0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("games started");
        started=true;
    }
    levelup();
})

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randindx=Math.floor(Math.random()*3);
    let randcolor=btns[randindx];
    let randbtn=document.getElementById(`${randcolor}`);
    gameseq.push(randcolor);
    gameflash(randbtn);
}

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    check_wins(userseq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


// function for wins
function check_wins(idx){
    if(gameseq[idx]===userseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Sorry wrong prediction😔.Your score is <b>${level}<b> <br> !Press any key to start.`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        highestscore(level);
        reset();
    }
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;

}
let highest=0;
function highestscore(score){
    if(highest<score){
        highest=score;
    }
    h3.innerHTML=`Your Highest score is <b>${highest}</b>`

}

