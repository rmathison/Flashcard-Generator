//This needs a lot of work and will be refactored appropriately -- I want to use require(fs) so users can create flashcards
//Due to lack of time I had to make something work fast, I broke the cardinal rule of Do Not Repeat, and the UI ain't pretty
//I need more time to research inquirer and how to loop through the answer/question arrays
//I used Math.random rather than an ordered succession of properties in the constructor


var Basiq = require("./Basic");
var Clozed = require("./ClozeCard");
var inquirer = require("inquirer");
var fs = require("fs");




var card = new Basiq("Who directed the film Apocalypse Now?", "Coppola");
var card2 = new Basiq("Who directed the film Stripes?", "Reitman");





var cloze = new Clozed("Richard Linklater", "directed the film Dazed and Confused", "Richard Linklater directed the film Dazed and Confused");
var cloze2 = new Clozed("Ennio Morricone", "The famous score for the film The Good, the bad and the Ugly was composed by", "The famous score for the film The Good, the bad and the Ugly was composed by Ennio Morricone");




var beginQuiz = function() {

    inquirer.prompt([{

            type: 'list',
            name: 'inputData',
            message: 'Pick a quiz:',
            choices: ['Basic-quiz', 'Cloze-quiz', 'Quit']
        }

    ]).then(function(choice) {

        if (choice.inputData === 'Basic-quiz') {
            basicQuiz();
        } else if (choice.inputData === 'Cloze-quiz') {
            clozeQuiz();
        } else if (choice.inputData === 'Quit') {
            console.log('Come Again');
        }
    });

}

var basicQuiz = function() {
    var basicArray = [card, card2];


    var randomBasic = Math.floor(Math.random() * basicArray.length);
    var randomBasic = basicArray[randomBasic];
    inquirer.prompt([{

            type: 'list',
            name: 'inputBasic',
            message: 'Pick a side of the Flashcard:',
            choices: ['Front', 'Back', 'Quit']
        }

    ]).then(function(choice) {

        if (choice.inputBasic === 'Front') {
            randomBasic.showFront();
            inquirer.prompt([{
                type: 'list',
                name: 'inputBasic',
                message: 'Select Back or Quit',
                choices: ['Back', 'Quit']
            }]).then(function(choice) {
                if (choice.inputBasic === 'Back') {
                    randomBasic.showBack();
                    setTimeout(function() { basicQuiz(); }, 3000);
                } else if (choice.inputBasic === 'Quit') {
                    beginQuiz();
                }
            });
        } else if (choice.inputBasic === 'Back') {
            randomBasic.showBack();
            inquirer.prompt([{
                type: 'list',
                name: 'inputBasic',
                message: 'Select Front or Quit',
                choices: ['Front', 'Quit']
            }]).then(function(choice) {
                if (choice.inputBasic === 'Front') {
                    randomBasic.showFront();
                    setTimeout(function() { basicQuiz(); }, 3000);
                } else if (choice.inputBasic === 'Quit') {
                    beginQuiz();
                }
            });
        } else if (choice.inputBasic === 'Quit') {
            beginQuiz();
        }
    });

}

var clozeQuiz = function() {
    var clozeArray = [cloze, cloze2];

    var randomCloze = Math.floor(Math.random() * clozeArray.length);
    var randomCloze = clozeArray[randomCloze];
    inquirer.prompt([{

            type: 'list',
            name: 'inputCloze',
            message: 'Select Partial or Quit:',
            choices: ['Partial', 'Quit']
        }

    ]).then(function(choice) {

        if (choice.inputCloze === 'Partial') {
            randomCloze.showPartial();
            inquirer.prompt([{
                type: 'list',
                name: 'inputCloze',
                message: 'See Answer or Quit',
                choices: ['Answer', 'Quit']
            }]).then(function(choice) {
                if (choice.inputCloze === 'Answer') {
                    randomCloze.showCloze();
                    setTimeout(function() { clozeQuiz(); }, 3000);
                } else if (choice.inputCloze === 'Quit') {
                    beginQuiz();
                }
            });
        } else if (choice.inputCloze === 'Quit') {
            beginQuiz();
        }
    });

}

beginQuiz();

// make a prompt that says show back of card
//make a prompt that says show rest of answer then for both basic and clozed use showBack or showClozed once clicked