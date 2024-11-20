const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");
let count = 0;
const labelcount = document.getElementById("labelcount");

increase.onclick= function(){
    count++;
    labelcount.textContent = count;
}
reset.onclick= function(){
    count = 0;
    labelcount.textContent = count;
}
decrease.onclick= function(){
    count--;
    labelcount.textContent = count;
}
