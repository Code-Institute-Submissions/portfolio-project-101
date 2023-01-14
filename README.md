# Kids Maths
![image](https://user-images.githubusercontent.com/119969411/212360576-665ef017-aa43-4296-8930-b7c9a98a9992.png)

The *__Kids Maths__* is a site that hopes to help parents with their kids, so that they can coupe with the Maths subject. As this subject in school tends to be difficult for a lot of kids, with all the logic etc. then this site could release some of the tension that this topic creates - in a stress related point of view. This site's goal is to make a simple game of Maths with easy calculated numbers that are equal to the Maths in school (a learning by doing concept).
The game has sounds and scorings that should give the kids motivation (like applauds etc). The game on the site does not have any sound effects that gives the kids negative feedback, but only positive feedback, which should inspire the kids to enjoy the Maths topic rather than thinking that it is boring...
In short words, we would like to help kids to keep up the eager of learning Maths without giving up - because of lack of motivation.
The Maths and its logic is necessary for all kids and is used everywhere. So by making it a fun game, maybe we can encourage the kids to submit this fine topic and help them on a trip for a better and brighter future, when they grow up.
By repeating Maths they learn and with this game - it will hopefully be fun to repeat - for the kids.

# Existing Features

The __*"Kids Maths"*__ site has:

* A Calculator that generates random numbers.
* There is also a *Summary Page* that displays results of all the answers, if they were correct or not and the result of the time spent on the Maths quiz.
* There is a *reset function* on the *Summary Page* page also, so that the kids won't have to learn about the "crtl+shit+R" function, if they want to start over.
* There are *"Mute function"*. also, but as the intention is to give positive feedback by sound, the sound is recommended to stay on - with a choice of switch it off.
* A __*Link*__ to the Summary Page is provided in the game area, which gives the kids an opportunity to capture their effort and show it to their parents.

## Summary page

![image](https://user-images.githubusercontent.com/119969411/212361245-031be8be-16dd-41ee-a371-a276db375543.png)

This page contains a simple -easy to overview-table, of the *correct answers*, *wrong answers* and *total time* spent on the quiz. It focuses on the effort spent on the game and is as simple as it can get, to not complicate things.

## The Game page 

![image](https://user-images.githubusercontent.com/119969411/212361394-4c19dba9-9387-4723-a47c-8e9110e9c92b.png)

The game page has a simple overview of the functions provided to start the game and what the game gives in response. Press something and the game will give the user feedback about what the game is all about.
It has minimal functions, to let the Kids focus on the game, rather than focusing on how to play it.

## The game Main functions

<img width="302" alt="image" src="https://user-images.githubusercontent.com/119969411/212361803-1a52316d-2b0a-4258-a49e-ed36e1ff7ab9.png">

The *Calculator* section will allow the user to play/Learn *"Addition"*, *"Subtraction"*, *"Multiplication"* and *"Division"* by random numbers generated via clicking each specific button. An answering box will allow the user to give input of numbers as answers to the quiz...if other characters than numbers is entered in the answering box, the user will get feedback to enter a valid number... if the answer is wrong, then the user will get a visual feedback of that and the correct answer is given as feedback... if the answer to the question is correct, then the user will get positive feedback of that including a pling sound... each time the user reaches a value of 10 correct answers, then the user will get an applauded sound. The mute and sound-On buttons, gives the user a chance to turn of the game-sound and put it back on again. All answers - correct or wrong, are counted and showed on a scoreboard after pressing enter or clicking submit answer - so the Summary Page is just a copy of that, to view as a "diploma" and share it with kid’s parents.


# Testing

The site has been tested within the timeline and resources given, on different devices and different browser.
Tools as jigsaw.w3.org, valitator.w3.org, webaccessability.com, caniuse.com, Lighthouse and JSHint, plus more has been used to ensure a stable site -before submitting this project.

Features as “toggle button” for the sound on and off where taken away from this project, for future approvements, Since this Issue was never solved (To have only one mute button instead of two separate - one for *on* and one for *off*).


## Validator Testing

![image](https://user-images.githubusercontent.com/119969411/212362331-ac16492c-e854-455b-85d3-13eb8d2be634.png)

![image](https://user-images.githubusercontent.com/119969411/212362501-f29d6a16-16cc-493a-822b-1338e82afd12.png)

![image](https://user-images.githubusercontent.com/119969411/212362671-ed74c270-68e1-4202-b853-c09ec678d9fe.png)

![image](https://user-images.githubusercontent.com/119969411/212362749-d37af5a7-9e84-41e0-aa30-0fe4edb2c7c8.png)


### HTML
No errors were returned when passing through the official W3C validator.
### CSS
No errors were found when passing through the official (Jigsaw) validator.
### Java Script
Warnings were present regarding the languish (not to use "LET" but "VAR" instead and not to use "CONST")... other than that, the *test* passed through without any issues.
### Accessibility
No errors were found when passing through the official (Chrome Lighthouse) validator.
- but the feedback noted that the site buttons did not have any text. The buttons have the operators “+”,”–“, “x”, and “/” signs and respective explanation below - *so this feedback was ignored*... but to ensure that the screen-reader can coupe with the game buttons - an "ALT" attribute with text was added to these buttons (so that the screen-reader can speak out each buttons functionality.

# Deployment

The site was deployed via GitHub pages:

The __live__ link can be found here - https://svenloevgren.github.io/portfolio-project-2/

(Link for Code: https://github.com/SvenLoevgren/portfolio-project-2 ).

# Credits

Code Institute education in general coding of HTML, CSS and Java Script - including advice of where to find free content on the web to style the site, plus tools to use to validate the site.
Extra credit to my mentor given by Code Institute, for making it possible to understand the logic of coding and troubleshooting this site.

## Content
The Site and layout was taken from Code institute "Love Maths" project... and adjusted to fit the "Kids Maths" - adding features as sound, text, Summary etc.
Instructions on how to implement the "Division" button was taken from the Code Institute education material.

## Media
Images from *"Pixabay"*, icons from *"Font awesome"*, Fonts from *"Google fonts"*, Logos from *"Code Institute program"*.
Both the logos of title and heading was taken from the Code institute education material (of the "Love Maths" project).
