class Form{
    constructor(){

    }
    display(){
        //header
        var title = cerateElement('h1');
        titile.html('Car Racing Gme');
        title.position(250,50);
        //input box
        var input = createInmput("Name");
        //button
        var btn = createButton("Register");
        var greetings = createElement("h3");
        input.position(250,100);
        btn.position(250,150);
       //expects a funtion name
       // anonymus or unnamed function
        btn.mousePressed(function (){
            input.hide();
            btn.hide();
            var name = input.value();
            playerCount = playerCount + 1;
            player.updateCount(playerCount);
            player.updateName(name);
            greetings.html("Welcome  "+ name);
            greetings.position(250,250);
        })
    }
}