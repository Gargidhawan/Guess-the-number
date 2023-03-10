'use strict';

//console.log(document.querySelector('.message').textContent);
//here we use . to denote message because message is a class 
//if it is a id then we will use #

//DOM document object model :
//structured representation of HTML Documnents allows JAVASCRIPT to access HTML elements and style to manipulate them
//store as in tree structure (generated by browser on HTML load)

//web APIs: application programing interface 
//libraries written in javascript that we can access directly

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;




document.querySelector('.check').addEventListener('click', function()
{
    const guess = Number (document.querySelector('.guess').value);
    console.log(typeof guess);
    //no input uploaded
    if (!guess)
    {
        document.querySelector('.message').textContent = ' ❌ No number!';
        document.querySelector('body').style.backgroundColor = '#87ceeb';
    }
    //when the guess is correct 
    else if (guess === secretNumber)
    {
        document.querySelector('body').style.backgroundColor = '#60b347';
        //no . is used inside the bracket because that is for representing class element 

        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.message').textContent = '🎊 Correct Number ';
        document.querySelector('.number').textContent = secretNumber;

        if(score > highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    //when guess is lareger
    else if (guess > secretNumber)
    {
        if(score > 0 )
        {
            document.querySelector('.message').textContent = '📈 Higher than actual number!';
            score--;
            document.querySelector('.score').textContent = score ;
            document.querySelector('body').style.backgroundColor = '#ff0000';
        }
        else
        {
            document.querySelector('.message').textContent = '🤞 Better luck next time!'
            document.querySelector('body').style.backgroundColor = '#ffff00';
        }
    }
    //when guess is lower
    else if ( guess < secretNumber)
    {
        if(score > 0)
        {
        document.querySelector('.message').textContent = '📉 Lower than the actual number!';
        score--;
        document.querySelector('.score').textContent = score ;
        document.querySelector('body').style.backgroundColor = '#ff0000';
        }
        else
        {
            document.querySelector('.message').textContent = '🤞 Better luck next time!'; 
            document.querySelector('body').style.backgroundColor = '#ffff00';
        }
    }
});

document.querySelector('.again').addEventListener('click', function()
{
    score = 10;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = '0';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = ' ';
    document.querySelector('body').style.backgroundColor = '#000000';
    //no . is used inside the bracket because that is for representing class element 

    document.querySelector('.number').style.width = '15rem';

});  




