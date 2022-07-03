var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0
var incrementNum = document.getElementById('increment');
var decrementNum = document.getElementById('decrement');

incrementNum.addEventListener("click", increment);
decrementNum.addEventListener("click", decrement);


function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 0){
        currentNumberWrapper.style.color='black'
    }

}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumber<0){      
    currentNumberWrapper.style.color = 'red';
    }else{       
    currentNumberWrapper.style.color = 'black';
    }
}


