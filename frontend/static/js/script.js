const display = document.getElementById("display");
const historyList = document.getElementById("history-list");

let history = [];
let shouldClear = false;

function append(value){

    if(shouldClear){
        display.value = "";
        shouldClear = false;
    }

    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    try{

        const expression = display.value;

        const result = eval(expression);

        history.push(`${expression} = ${result}`);

        renderHistory();

        display.value = result;

        shouldClear = true;

    }
    catch{

        display.value = "Error";

        shouldClear = true;
    }
}

function renderHistory(){

    if(history.length === 0){
        historyList.innerHTML = "No calculations yet.";
        return;
    }

    historyList.innerHTML = "";

    history.forEach(item => {

        const div = document.createElement("div");

        div.classList.add("history-item");

        div.textContent = item;

        historyList.appendChild(div);

    });

}