class Form{
    constructor(){

    }
    display(){
        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(130,0);
        var input = createInput("Name");
        var button = createButton('Play');
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting = createElement('h2');
            greeting.html(" Hello, welcome to the game! " + name)
            greeting.position(100,160);
        }) 
    }
}