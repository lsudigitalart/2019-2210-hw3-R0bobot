function setup(){
    createCanvas(windowWidth, windowHeight);
    background(11, 10, 8);

    var r1 = random(width);
    var r2 = random(height);

    // dot array background
    for(var a = 0; a <= height - 20; a +=10){
        for(var b = 0; b <= width - 20; b +=10){
            fill(62, 23, 64);
            ellipse(b, a, 4, 4);
            //draw line to center
            stroke(111, 124, 179);
            strokeWeight(0.4);
            line(b, a, r1, r2);
        }
    }

    // the moon
    fill("beige");
    circle(r1, r2, random(width / 2));

    // the pillars
    for(var i = 10000; i > 0; i = i - 20){
        print(i);
        fill(55, 142, 116);
        stroke(16, 28, 29);
        rect(random(i), random(i), 16, i, 10);
    }

    // the ground?
    for(var u = 5000; u > 0; u = u - 2){
        print(u);
        fill(15, 159, 221);
        ellipse(u, 790, 5, 150);
    }
}

function draw(){

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