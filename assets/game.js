$(document).ready(function(){
    renderButtons();
    renderRest();
    $('#submit').on("click",function(){
        var newVal = $('#topic').val();
        topics.push(newVal);
        renderButtons();
        console.log(topics);
    });

    $(document).on("click",'.topic-button',function(event){
        var search = event.currentTarget.value;
        console.log('you searched for '+search);
        fetchGifs(search);
    });
    $(document).on("click",'.gif',function(event){
        var src = $(this);
        if(src[0].currentSrc.includes('_s.gif')){
            state = 'moving';
            var newSrc = src[0].currentSrc.replace('_s.gif','.gif');
        } else {
            state = 'still';
            var newSrc = src[0].currentSrc.replace('.gif','_s.gif');
        }
        console.log(newSrc);
        event.currentTarget.src = newSrc;
    });
});
var topics = ['Tom Cruise','Brad Pitt','George Clooney','Kate Winslet','Maryl Streep','Margot Robbie'];
var state = 'still';
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

function fetchGifs(search){
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    search + "&api_key=6OjxLYPJbItWHPJs2M6IfBse82EWljtB&limit=10";

    $.ajax({
        url : queryURL,
        method : 'GET'
    }).then(function(response){
        var results = response.data;
        console.log(response);
        console.log(results);
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var personImage = $("<img class='gif'>");
            personImage.attr("src", results[i].images.fixed_height_still.url);
            gifDiv.prepend(p);
            gifDiv.prepend(personImage);
            $("#gifs").prepend(gifDiv);
        }
    });
}