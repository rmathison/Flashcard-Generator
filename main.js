var Basiq = require("./Basic");
var Clozed = require("./ClozeCard");
var inquirer = require("inquirer");
var fs = require("fs");




var card = new Basiq("hello", "goodbye");

var beginQuiz = function() {

    inquirer.prompt([{

            type: 'list',
            name: 'inputData',
            message: 'What would you like to do?',
            choices: ['Basic-quiz', 'Cloze-quiz', 'Quit']
        }

    ]).then(function(choice) {

        if (choice.inputData === 'Basic-quiz') {
            card.showFront();
        } else if (choice.inputData === 'Cloze-quiz') {
            card.showFront();
        } else if (choice.inputData === 'Quit') {
            console.log('Come Again');
        }
    });

}

beginQuiz();