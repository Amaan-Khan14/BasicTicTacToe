let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector(".newbtn");
let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msgcontainer")
let turnX=true;
let count=0

let winnPatt=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
     box.addEventListener("click",()=>{
        count++;

        if (turnX==true) {
            box.innerHTML="X";
            turnX=false;
            
        } else {
            box.innerHTML="O";
            turnX=true;
        }
        box.disabled=true
        toChkDraw();
        toChkWinner();
     });
     
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}

toChkDraw=()=>{
    for (let patt of winnPatt) {
        let pos1=boxes[patt[0]].innerText;
        let pos2=boxes[patt[1]].innerText;
        let pos3=boxes[patt[2]].innerText;
        
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(count==9){
                msg.innerText=`The Match HAs been draw`;
                msgcontainer.classList.remove("hide");
            }
        }
    }
}

toChkWinner=()=>{
    for (let patt of winnPatt) {
        let pos1=boxes[patt[0]].innerText;
        let pos2=boxes[patt[1]].innerText;
        let pos3=boxes[patt[2]].innerText;
        
        if(pos1!=""&&pos2!=""&&pos3!=""){
            if (pos1==pos2&&pos2==pos3) {
                showWinner(pos1);
                
                disableBoxes();
            }
            
            
        }
    }
}


showWinner=(winner)=>{
    msg.innerText=`Congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
}




const reset=()=>{
    turnX=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
    for (let box of boxes) {
        box.innerText="";
    }
    count=0
}

newbtn.addEventListener("click",reset);
resetbtn.addEventListener("click",reset)