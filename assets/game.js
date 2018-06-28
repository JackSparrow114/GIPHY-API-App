$(document).ready(function(){
    paintButtons();
    var label = $('<p></p>');
    label.text('Add a topic: ');
    var input = $('<input type="text">');
    var button = $('<input type="submit">');
    inputForm.append(label);
    inputForm.append(input);
    inputForm.append(button);
    $("#add-button").append(inputForm);
});
var topics = ['Tom Cruise','Brad Pitt','George Clooney','Kate Winslate','Maryl Streep','Margaret Robbie'];

function paintButtons(){
    var buttons = $('<div></div>');
    var inputForm = $('<div></div>');
    for(var i=0;i<topics.length;i++){
        var newButton = $('<button></button>');
        newButton.addClass("topic-button");
        newButton.text(topics[i]);
        newButton.val(topics[i]);
        buttons.append(newButton);
    }
    $("#buttons").append(buttons);
}