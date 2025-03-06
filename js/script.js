let counter = document.querySelector(".counter");

console.log(counter);
// console.log(counter.dataset.number);
let count = 0;

function counterUp(){
    count++;
    counter.innerHTML = count;

    if (count == counter.dataset.number) {
        clearInterval(stop);
    }
}
let stop = setInterval(function(){
    counterUp();

}, 500);

