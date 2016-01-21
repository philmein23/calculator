
function showNum(num) {
    document.getElementById("display").value += num;
}

function sum() {
 document.getElementById("display").value += "+";
}

function multiply() {
    document.getElementById("display").value += "*";
}
function subtract() {
    document.getElementById("display").value += "-";
}

function divide() {
    document.getElementById("display").value += "/";
}

function decimal() {
    document.getElementById("display").value += ".";
}

function clear() {
    document.getElementById("display").value = "";

}

function toCalc() {
    document.getElementById("display").value = eval(document.getElementById("display").value);
}