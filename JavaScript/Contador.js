const currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
function increment() {
    if (currentNumber < 10) {
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber
    }

}
function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber<0){
        currentNum
    }

}