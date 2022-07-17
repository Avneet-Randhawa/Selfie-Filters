var noseX,noseY = 0;
var st = "y";
function mus(){
    st = "mus";
}
function hats(){
    st = "hat";
}
function lip(){
    st = "lip";
}
function clo(){
    st = "clown";
}
function cig(){
    st = "cig";
}
function gla(){
    st = "glasses";
}
function yglass(){
    st = "y";
}
function rglass(){
    st = "r";
}
function man(){
    st = "i";
}
function masks(){
    st = "m";
}
function preload(){
    mustache = loadImage("https://i.postimg.cc/yNC9vCQj/mustache-student-math-favorite-for-friday-the-the-1.png");
    lipstick = loadImage("https://i.postimg.cc/SsyKrzP8/214-2148053-huda-beauty-liquid-matte-lipstick-material-girl-lipstick-removebg-preview.png");
    clown = loadImage("https://i.postimg.cc/vT7dwSLP/Clown-Nose.png");
    r_glass = loadImage("https://i.postimg.cc/kGsQvpmm/56a2735a20428de403a2c5f9932b50cb-removebg-preview-removebg-preview.png");
    y_glass = loadImage("https://i.postimg.cc/tgcmh7z5/download-removebg-preview-1-removebg-preview.png");
    iron = loadImage("https://i.postimg.cc/BtWkTRZv/580b57fbd9996e24bc43c051.png");
    hacker = loadImage("https://i.postimg.cc/2Snb7WGj/kisscc0-guy-fawkes-mask-security-hacker-anonymous-anonymous-mask-5b4e56aaa8b6b1-44521528153186065069.png");
    hat = loadImage("https://i.postimg.cc/zfwMnx4z/538-5387736-kid-hat-png-transparent-png-removebg-preview.png");
    glasses = loadImage("https://i.postimg.cc/7PMShPgs/thug-life-cool-glasses-png-transparent-0.png");
    cigratte = loadImage("https://i.postimg.cc/XvPN6D1j/66-666130-cigarette-png-hd-wallpaper-cigarette-hd-transparent-png-removebg-preview.png");
}
function setup(){
    canvas = createCanvas(400,400);
    video = createCapture(VIDEO);
    video.size(400,400)
    video.hide();
    background("white");

    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,400,400);
    if(st == "mus"){
    image(mustache,noseX,noseY,100,40)
    }
    if(st == "lip"){
        image(lipstick,noseX,noseY,80,50)
    }
    if(st == "clown"){
        image(clown,noseX,noseY,50,50);
    }
    if(st == "glasses"){
        image(glasses,noseX,noseY,200,180);
    }
    if(st == "cig"){
        image(cigratte,noseX,noseY,130,100);
    }
    if(st == "hat"){
        image(hat,noseX,noseY,250,150);
    }
    if(st == "y"){
        image(y_glass,noseX,noseY,180,70);
    }
    if(st == "r"){
        image(r_glass,noseX,noseY,200,210);
    }
    if(st == "i"){
        image(iron,noseX,noseY,340,320);
    }
    if(st == "m"){
        image(hacker,noseX,noseY,260,300);
    }
}

function modelloaded(){
    console.log("PoseNet Model is intialized")
}
function gotPoses(results){
    if(results.length > 0 && st == "mus"){
        console.log(results);
        noseX = results[0].pose.nose.x-50;
        noseY = results[0].pose.nose.y;
        console.log(noseX+noseY);
    }
    if(results.length > 0 && st == "lip"){
        console.log(results);
        noseX = results[0].pose.nose.x-35;
        noseY = results[0].pose.nose.y+30;
        console.log(noseX+noseY);
    }
    if(results.length > 0 && st == "cig"){
        console.log(results);
        noseX = results[0].pose.nose.x-10;
        noseY = results[0].pose.nose.y-5;
        console.log(noseX+noseY);
    }
    if(results.length > 0 && st == "clown"){
        console.log(results);
        noseX = results[0].pose.nose.x - 20;
        noseY = results[0].pose.nose.y - 20;
        console.log(noseX+noseY);
    }
    if(results.length > 0 && st == "glasses"){
        console.log(results);
        noseX = results[0].pose.leftEye.x - 125;
        noseY = results[0].pose.leftEye.y - 80;
        console.log(noseX+noseY);
    }
    if(results.length > 0 && st == "hat"){
        console.log(results);
        noseX = results[0].pose.leftEye.x - 140;
        noseY = results[0].pose.leftEye.y - 140;
        console.log(noseX+noseY);
    }
    if(results.length > 0 && st == "y"){
        console.log(results);
        noseX = results[0].pose.nose.x -100;
        noseY = results[0].pose.nose.y - 60;
        console.log(noseX+noseY);
    }
    if(results.length > 0 && st == "r"){
        console.log(results);
        noseX = results[0].pose.nose.x -100;
        noseY = results[0].pose.nose.y - 130;
        console.log(noseX+noseY);
    }
    if(results.length > 0 && st == "i"){
        console.log(results);
        noseX = results[0].pose.nose.x -150;
        noseY = results[0].pose.nose.y - 170;
        console.log(noseX+noseY);
    }
    if(results.length > 0 && st == "m"){
        console.log(results);
        noseX = results[0].pose.nose.x -140;
        noseY = results[0].pose.nose.y - 150;
        console.log(noseX+noseY);
    }
}
function save(){
    save("My-Filtered-Selfie.png");
}