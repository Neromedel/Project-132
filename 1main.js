
status = "";
img = "";

function preload() {
    img = loadImage('phone.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('Status').innerHTML = "Status : Detecting Objects.";
}

function modelLoaded() {
    console.log('Model Loaded.');
    status = true;
    object_detector.detect(img,gotResults);
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("lightseagreen");
    text("Phone",140,40);
    noFill();
    stroke('lightseagreen');
    rect(30,60,450,350);
}

function gotResults(error,results){
if(error){
console.error(error);
}
console.log(results);
}