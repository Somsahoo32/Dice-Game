const ButtonE1 = document.getElementById("roll-button");
const DiceE1 = document.getElementById("dice");
const rollHistoryE1 = document.getElementById("roll-history");

let historyList = [];

function rollDice(){
    const rollResult =  Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    DiceE1.innerHTML = diceFace;
    historyList.push(rollResult);
    updateRollHistory();
}

function updateRollHistory(){
    rollHistoryE1.innerHTML = "";
    historyList.forEach((result,index)=>{
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${index+1}:<span>${getDiceFace(result)}</span>`;
        rollHistoryE1.appendChild(listItem);
    });

}
function getDiceFace(rollResult){
    switch(rollResult){
        case 1:
        return "&#9856;";
        case 2:
            return "&#9857;";
            case 3 :
                return "&#9858;";
                case 4:
                    return "&#9859;";
                    case 5:
                        return "&#9860;";
                        case 6:
                            return "&#9861;";

        default:
            console.error(`Unexpected roll result: ${rollResult}`);
            return "";
    }
}

ButtonE1.addEventListener("click",() => {
    DiceE1.classList.add("roll-animation");
    setTimeout(()=>{
        DiceE1.classList.remove("roll-animation");
        rollDice();
    },1000);
});

