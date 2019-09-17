function setup(){
    createCanvas(windowWidth, windowHeight);
    background(62, 23, 64);

    for(var x = 9999; x > 0; x = x - 15){
        print(x);
        //translate(width / 2, 0);
        //translate(p5.Vector.fromAngle(millis() / 1000, 4));
        fill(62, 23, 64);
        stroke(206, 209, 65);
        rect(x, 0, 40, 3000);
    }
    
    fill("beige");
    circle(random(width), random(height), random(width / 2));

    for(var i = 10000; i > 0; i = i - 20){
        print(i);
        circle(i, i, 10);
        fill(55, 142, 116);
        stroke(16, 28, 29);
        rect(random(i), random(i), 30, i, 10);
    }

    for(var u = 5000; u > 0; u = u - 2){
        print(u);
        fill(15, 159, 221);
        ellipse(u, 790, 5, 150);
    }
}

function draw(){
    
    print(mouseX, mouseY);

    var redC1 = 150;
    var greenC1 = 0;
    var blueC1 = 0;

    var redC2 = 0;
    var greenC2 = 150;
    var blueC2 = 0;

    //fill(redC1, greenC1, blueC1);
    //circle(width / 2, height / 2, 250);
    
    
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}