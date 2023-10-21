
# RPSLS

RPSLS is short for Rock, Paper, Scissor, Lizard or Spock. This game is a version of the world wide famous game: Rock, Paper or Scissors. The rules are simple, Rock beats Scissors, Scissors cuts Paper and Paper covers Rock (there is more information about the rules inside the game). In this game, there are two more options to choose from; these are Lizard and Spock. This makes the game a bit more advanced and a lot more fun. This game is for everyone who would like to kill some time and have a relaxing moment. Because this game is played against the computer the user can play as many times as he/she likes.

## User experience
To make this site user friendly there were some factors that were taken under consideration.
- Colors and content on the site has to be easy on the eye
- The background and content of the site will not be in a conflict with eachother
- The game has to be easy to use
- The user will have the possibility to read the rules before entering the game
- There will be a clear message to the user to insert username in the login form
- The game will be interactive, having images changing depending on user choice
- The inserted username will be displayed inside the game

To use the website, simply navigate to the following URL:

<https://elinaboman.github.io/rps2/>

![Responsive](/docs./responsive.png)

## Design
The design of this site is very simple using light colors in the background. This is to not distract the user from the content. To make the site a bit more appealing there are orange borders around the main content. The orange color is matched with the orange details in the gamerules area. To create a softer look of the site, the display boxes have a soft border with rounded corners. This is to makes the site playful and easy on the eye. The over all design was planed with web tool Balsamiq. This to plan how the game would look in bigger and smaller wireframes. The font is very soft and playful to harmonize with the over all soft look of the site.

![Balsamiq](/docs./balsaimq.png)

## Features
### Existing Features
#### Enter username form
Before entering the rule- and game area the user has to enter a username. The entered text will later on be displayd in the rule- and game area. This makes the game interactive with the user. If the user doesn't enter any text in the text box, a message will read above the box, asking the user to insert a username. There is a maxlength entered in the html code, so the username can't be too long. This would cause problem with the game design. The game will not continue until a text is entered.

There is a Home button up in the left corner for the user to get back to the Enter username form area at any time.
![Login-form](/docs./loginform.png)
![alert message](/docs./errormsg.png)

#### Rules-area
When the user has choosen a username and clicked the button, the rule area appears. In the rulearea the game rules are explained to the user. The text is combined with a picture that also displays the same rules. This is to make the rules easy to understand as it's easy to get a bit confused by the rules. When the user is ready there is a button that reads: "Let's go!". When the user clicks this button or anywhere else on the page, the game area opens.

![Rules](/docs./rules.png) 
![Rules](/docs./rulesimg.png)


#### Game-area
The gamemarea exist of two closed boxes that displays the user and the computer choices. The result from each round will be displayed above the boxes with both user and computer choices. The winner will score one point from each winning round. These point are then displayed inside the player box. The game finishes after ten rounds and the result is displayed. If the user would like to continiue playing there is a Reset button that resets the scores. The fun can last forever! 

![Game](/docs./gamearea.png)
![Game](/docs./alertmessage.png)

## Features Left to Implement
There are some features left to implement in this game:
* There will be a Return button next to the Home button so the user always can revisit the rule area once inside the game
* The winner of each round will hava a winner declaration inside the game area instead of a window.alert
* The game needs more design to make it more appealing and playful
* There should be audio added to buttons and a mute function inside the game 
* In the future there will be better game functions so that when the user hits the Reset score button, the remaining rounds of the game will also be reset

## Technologies used
- HTML
- CSS
- JavaScript
- Github
- Codeanywhere
- W3C:s CSS-validator
- W3C:s HTML validator
- JSHint
- Lighthouse
- Balsamiq Wireframes
- ChatGPT
- Google devTools
- Google photos

## Testing
All code has been validated trough W3C validator and Jshint.
During the bulding of the site Google devTools has been used to locate errors. Google devTools has also been used to set media queries and to locate JavaScript element.
- Buttons have been tested to make sure the right content is shown
- The icons have been tested to work after deployment
- Game logic has been tested to view the right outcome of the game. Also that the diffrent button options is connected to the right element
- The site has been tested on different browsers:
  * Chrome
  * Safari
  * Firefox
  

## Validator Testing
####  HTML
No errors were returned when passing through the official W3C validator. Validation HTML
![html validation](/docs./html-checker.png)
https://validator.w3.org/nu/#textarea

#### CSS
No errors were found when passing through the official (Jigsaw) validator.
![CSS checker](/docs./css-checker.png)
<https://jigsaw.w3.org/css-validator/validator>

#### JavaScript 
While passing the JavaScript code trough JSHint some warnings were corrected. There were some unused variabels that were removed from the const. Some minor errors were corrected.
There were also one undefined button conected to userChoice. The problem occured because of a outcommented line of code. Problem has been fixed.
JSHint also warned about functions declared within the loop that referred to an outer scope. The problem would be resolved by rewriting the whole loop and put the functions outside of the loop. This warning will be further investagated.

Before corrections:

![JavaScript testing](/docs./javascript-validation-before.png)
After corrections:

![JavaScript testing](/docs./javascript-validation-after.png)

https://jshint.com/
#### Lighthouse testing
![Lighthouse](/docs./lighthouse-testing.png)

## Unfixed Bugs
- There is some problem with the "Let's go!" button in the rule area. The user can click anywhere on the site to get to the game:
    * Solution: Check EventListener
    * Status: Under investegation
  
- If the player hits the Reset button before the game is finished the remaining rounds won't reset. This means that the user has to finish every round for the game to function correctly:
    * Solution: Write new and improved if and else statement for the game function. Make the number of rounds reset togheter with the score
    * Status: Under progress

- The Home button should align closer to the game. There are some problems with the margin and padding of the html and body that causes the icon to wander off towords the upper left corner on bigger screens:
    *   Solution: Adjust html and body CSS
    *   Status: Under progress


## Deployment
This website has been deployed to Github pages:
1. First, navigate to the Settings tab
2. In the dropdown menu scroll down to Pages
3. Inside the Pages tab choose Source, Deploy from branch
4. Under the branch enter main and /(root)
5. Enter save
6. When the site has been deployed a Manilla folder will show up with a red ribbon


## Credits

#### Images

- Open clip art:
rpsls.png
<https://openclipart.org/detail/325665/rock-paper-scissors-lizard-spock>

- PNG EGG:
rock.png 
lizard.png
https://www.pngegg.com/en/png-yiwgy


- Flat icon:
paper.png
<https://www.flaticon.com/free-icon/paper-plane_312619>

- Hi clipart:
spock.png
<https://www.hiclipart.com/free-transparent-background-png-clipart-zkhym>

- Vecteezy: scissors.png
<https://www.hiclipart.com/free-transparent-background-png-clipart-zkhym>

#### FavIcon
- Font Awsome: The favicon of a little house in the upper left corner has been borrowed from from the site Font Awesome

#### Fonts
- Goggle fonts: Tilt Neon- Regular 400 https://fonts.google.com/
  
#### Readme.md
This readme.md has been inspired by:
- Github user gStarhigh:s project pro2
- Code institutes sample readme.md

#### Mentor
Big credits to my fantastic mentor Brian O'Hare.

#### Slack community
Credits to the slack comunity, especially to Craig Hudson and Niclas Hugdahl who really took their time to help with bugs in the code.

#### ChatGPT:
Instructions on how play the games in the rule area has been written together with ChatGPT. ChatGPT helped creating the code to make computer decision random. This information has then been adjusted to fit this game. ChatGPT also helped with the checkWinner function, creating suggestions for how to check the winner.
During code malfunctions ChatGPT has supported with finding different reasons to why code malfunctioned.

#### W3Schools:
The site was used to find information about Javascript in generel. Mostly to find information about for loops, if, else if and else statements.

#### Last credits
- Code Institute tutorials
- My friend Annika Davies
- Google search
