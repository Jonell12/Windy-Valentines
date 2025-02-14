var noButtonTexts = ["You sure?", "talagaaa?", "weeeh mommyyy?", "i loveee youuu", "plsssss🥺"];
var noClickCount = 0;

function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; 
            displayCatHeart(); 
        });
    } else if (option === 'no') {
        var noButton = document.getElementById('no-button');
        var yesButton = document.getElementById('yes-button');

        if (noClickCount < noButtonTexts.length) {
            noButton.innerText = noButtonTexts[noClickCount];
        } else {
            noButton.innerText = "ayaaaaaaaaaw😭"; 
        }
        noClickCount++; 

        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 1.5; 
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}