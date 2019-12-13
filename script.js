var question = ["Which of the following is a school color?",
                "Question 2"];
var answers = [  ['Red', 'Green', 'Blue', 'Yellow'], 
                ['One', 'Two', 'Three', 'Four'] ];
var answerButtons = document.getElementsByClassName("quizButton");
var correct = [3, 1];
var currQ = 0;

document.getElementById("question").innerHTML = question[currQ];

for(var spot=0; spot<answers[currQ].length; spot++)
{
    answerButtons[spot].innerHTML = answers[currQ][spot];

    answerButtons[spot].addEventListener('click', function() {
        disableAll();
        if(this.innerHTML == answers[currQ][correct[currQ]]){
            this.setAttribute('style','background-color:rgb(76,175,80);');
        }else {
            this.setAttribute('style','background-color:rgb(215,50,35);');
        }
    });
}

function changeColor() {
    document.getElementById('demo2').setAttribute('style','background-color:rgb(215,50,35);');
}

function disableAll() {
    for(var num=0; num<answerButtons.length; num++) {
        answerButtons[num].setAttribute('disabled',true);
    }
}