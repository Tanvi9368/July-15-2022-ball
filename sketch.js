var ball;

var database;

var position;

function setup(){
    createCanvas(500,500);
    database = firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition = database.ref("ball/position")
    ballPosition.on("value",readPosition,writeError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}


function readPosition(data) {
    position=data.val()
    position.x=ball.x,
    position.y=ball.y;
}

function writePosition() {
database.ref("ball/position").set({
 x:position.x+x,
y:position.y+y
})
}

function writeError() {
    console.log("error in writing to the database")
}