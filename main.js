let btnEl = document.querySelector(".generate");
let serialEl = document.querySelector(".serial  ");

btnEl.onclick = function  () {
    let character = "1234567890abxdefghimnopqiuyutxzlkcv";
    let count = 10;
    let random =" " ;
    for (let i = 0; i < count ; i++) {
        random += character[Math.floor(Math.random() * character.length)];

    }   
    serialEl.innerHTML = random ;
}


