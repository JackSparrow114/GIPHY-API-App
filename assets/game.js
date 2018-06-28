$(document).ready(function(){
    renderButtons();
    renderRest();
    $('#submit').on("click",function(){
        var newVal = $('#topic').val();
        topics.push(newVal);
        renderButtons();

    });
});
var topics = ['Tom Cruise','Brad Pitt','George Clooney','Kate Winslate','Maryl Streep','Margaret Robbie'];

function renderButtons(){
    $("#buttons").empty();
    var buttons = $('<div></div>');
    
    for(var i=0;i<topics.length;i++){
        var newButton = $('<button></button>');
        newButton.addClass("topic-button");
        newButton.text(topics[i]);
        newButton.val(topics[i]);
        buttons.append(newButton);
    }
    $("#buttons").append(buttons);
}

function renderRest(){
    var inputForm = $('<div></div>');
    var label = $('<p></p>');
    label.text('Add a topic: ');
    var input = $('<input type="text" id="topic">');
    var button = $('<input type="submit" id="submit">');
    inputForm.append(label);
    inputForm.append(input);
    inputForm.append(button);
    $("#add-button").append(inputForm);
}