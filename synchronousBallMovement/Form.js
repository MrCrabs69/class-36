class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2");
        title.html("car racing game");
        title.position(550,150);

        var input = createInput("name");
        var button = createButton("play");

        input.position(580,200);
        button.position(600,250);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            
            var greating = createElement("h2");
            greating.html("hello " + name);
            greating.position(600,200);

        })
    }
}