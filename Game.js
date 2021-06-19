class Game{
    //empty
    constructor(){

    }

    getState(){
        //ref to db
        var stateRef = database.ref("car_database/gameState");
        //add a listener to db 
        ///pass an event ....change in value
        ///as soon as value in datbase changes we will get the new value in datat var
        ///anonymous or unnamed function
        stateRef.on("value",function (data){
            gameState = data.val();
        });

    }
    //update state in to db
    updateState(state){
        var stateRef =  database.ref("car_database/gameState");
        stateRef.update({
            gameState: state
        })

    }
//will start the game
//first display a form
// display playerdetails
//abstaract programmings : create objetcs of things that are to be created later 
    start(){
        if(gameState===0){
            player = new player();
            player.getCount();
            form = new Form();
            form.display();
        }

    }
    
    }

   