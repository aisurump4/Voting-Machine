// let hiddenFontSize = 12;
// let count = 0;

let counter = 0;

function onPageLoad(){
    choose.innerHTML = "Choose Your President!"
}

function clickNixon(){
    document.getElementById("demo").innerHTML = "Your Vote Has Been Counted";
}

function clickMcgovern() {
    alert("Are You Sure?");
    var text = document.getElementById("demo");
    if (text.style.display === "none") {
    text.style.display = "block";
    } else {
    text.style.display = "none";
    }
    document.getElementById("toggle").style.display="none";
}

georgeButton.onmouseover = function (event) {
    if (counter <= 10){
        this.style.left = Math.random() * 800 + "px"
        this.style.top = Math.random() * 300 + "px"
        counter++;
    }
    
}

window.oncontextmenu = (event) => {
    event.preventDefault();
}




vote.mouseover = function (event) {

    let voteCoords = this.getBoundingClientRect();

    let buttonCoords = {
        top: event.clientY - voteCoords.top,
        left: event.clientX - voteCoords.left
    }

    if (buttonCoords.top < 0) {
        buttonCoords.top = 0;
    }
    if (buttonCoords.left < 0) {
        buttonCoords.left = 0;
    }

    if (buttonCoords.left + georgeButton.clientWidth > vote.clientWidth) {
        buttonCoords.top = vote.clientWidth - georgeButton.clientWidth
    }
    if (buttonCoords.top + georgeButton.clientHeight > vote.clientHeight) {
        buttonCoords.top = vote.clientHeight - georgeButton.clientHeight
    }

    georgeButton.style.left = buttonCoords.left + 'px'
    georgeButton.style.top = buttonCoords.top + 'px'
}
