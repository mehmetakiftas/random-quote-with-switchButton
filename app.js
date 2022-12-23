const switcheckbox = document.getElementById("switchbutton");
const quoteParagraph = document.getElementById("quoteparagraph");
const quoteButton = document.getElementById("quotebutton");
const quoteDiv = document.getElementById("quotediv");

eventListeners();


function eventListeners(){
    switcheckbox.addEventListener("change",clickSwitch);

    document.addEventListener("DOMContentLoaded",() => {
        async function randomQuote() {
            const response = await fetch("https://api.quotable.io/random");
            const data = await response.json();
            if(response.ok){
                quoteParagraph.textContent = data.content;
            } else {
                quoteParagraph.textContent = "An Error Occured!";
                console.log(data);
            }
        }

        quoteButton.addEventListener("click",randomQuote);
        randomQuote();
    })
}


function clickSwitch(){

    if (switcheckbox.checked) {
        document.body.style.background = "#202124";
        quoteParagraph.style.color = "white";
        quoteButton.className = "btn btn-light";
        quoteDiv.style = "border: white 2px solid;"
      } else {
        document.body.style = "";
        quoteParagraph.style.color = "#202124";
        quoteButton.className = "btn btn-secondary";
        quoteDiv.style = "border: #202124 2px solid;"
      }
    
}