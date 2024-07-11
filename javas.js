
let gameSeq=[];
let userSeq=[];

let started = false;
let level=0;

let btnss = ["bred" ,"byellow","bgreen","bblue"];

let par = document.querySelector("p");

document.addEventListener("keypress", function () {
   if(started == false){
     started=true;
     console.log("game is started");

     levelUp();
   }
   
})

function levelUp(){
    userSeq=[];
    level++;
    par.innerHTML=`level ${level}`;

    let randBox = Math.floor(Math.random() * 3); 
    let randcolor = btnss[randBox];
    let randbtn = document.querySelector(`.${randcolor}`);
   gameSeq.push(randcolor);
    btnflash(randbtn);
}

function btnflash(btn){
btn.classList.add("flash");
setTimeout( function(){
 btn.classList.remove("flash");
}, 500);

}

function checkAns(idx){
 

 if(userSeq[idx]===gameSeq[idx]){
  if(userSeq.length==gameSeq.length){
    setTimeout(levelUp,1000);
  }
 }else{
    par.innerHTML = `Game over!<b>Score = ${level}</b><br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    }, 150);
    reset();
 }
}

function buttonpress(){
  let btn = this;
  btnflash(btn); 

  usercolor = btn.getAttribute("id");
userSeq.push(usercolor);

checkAns(userSeq.length-1);
}

let allbtns= document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",
        buttonpress
    )
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}