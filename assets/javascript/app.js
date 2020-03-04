
//Create objects for the questions
var questions = {
    question1:"What fruit is stinky and has lots of spikes?",
    question2:"What fruit is green on the outside, sweet, and has either red or white flesh?",
    question3:"What fruit has soft sweet flesh and many seeds with a purple skin?",
    question4:"What sweet purple skin fruit has white flesh and a seed in each sliver?",
    question5:"What brown hairy fruit is known for it's 'water' and delicious white meat?",
    question6:"What flat orange fruit is this?",
    question7:"What purple or yellow skinned fruit is known for it's sweet and sour taste with lots of seeds?",
    question8:"What fruit is shown here? (Hint:You can eat it ripe or raw)",
    question9:"What dried fruit is sweet and similar to a prune?",
    question10:"What fruit has many seeds and is neutral in flavor while looking like a mythical creature's scale?",

}

//Create objects for the answers
var answers = {
    answer1:"a: Durian",
    answer2:"b: Guava",
    answer3:"a: Fig",
    answer4:"d: Mangosteen",
    answer5:"b: Coconut",
    answer6:"c: Persimmon",
    answer7:"b: Passionfruit",
    answer8:"d: Papaya",
    answer9:"a: Date",
    answer10:"d: Dragon Fruit",
}

//Create array for answer choices for each question
var question1choices = ["a: Durian", "b: Guava", "c: Plum", "d: Orange"];
var question2choices = ["a: Clementine", "b: Guava", "c: Passionfruit", "d: Peach"];
var question3choices = ["a: Fig", "b: Orange", "c: Plum", "d: Banana"];
var question4choices = ["a: Durian", "b: Guava", "c: Plum", "d: Mangosteen"];
var question5choices = ["a: Banana", "b: Coconut", "c: Plum", "d: Peach"];
var question6choices = ["a: Orange", "b: Guava", "c: Persimmon", "d: Mangosteen"];
var question7choices = ["a: Durian", "b: Passionfruit", "c: Plum", "d: Dragonfruit"];
var question8choices = ["a: Durian", "b: Guava", "c: Mangosteen", "d: Papaya"];
var question9choices = ["a: Date", "b: Guava", "c: Plum", "d: Papaya"];
var question10choices = ["a: Fig", "b: Apple", "c: Dragonfruit", "d: Orange"];
//Create buttons for each answer choice in the array




for (var i=0; i < question1choices.length; i++) {
$("#choices").append("<button>" + question1choices[i] + "</button>");
}
createButtons1();
//Create for loop for if/else statements regarding user choice
    //If userchoice matches the answer then "you win", else "you lose".
    //If "You lose" move to next question.
//Set time settings of 1 minute total to complete game

//Reset and move onto next question
