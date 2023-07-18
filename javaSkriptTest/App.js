var button = document.getElementById('MyB');
var hightScore = document.getElementById('HS');
let count = 0;
let previusHightScore = 0;

let maxValue = 101;
let minValue = 1;

button.addEventListener('click', function(){
    let random = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;  

    if(random == 1){
        count = 0;
        maxValue = 101;
    }
    else{
        count++;
        maxValue--;
    }

    button.textContent = count;

    if(count > previusHightScore){
        previusHightScore = count;
        hightScore.textContent = 'hight score: ' + previusHightScore
    }
    if(count == 100){
        console.log('you win!!!')
    } 

    console.log(maxValue);
    console.log(random);
})

