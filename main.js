var status1;
var vid;
objects = [];
var objectdetector;

function preload(){
    vid = createVideo("video.mp4");
}

function setup() {
    canvas = createCanvas(700, 420);
    canvas.center();
    vid.hide();
}

function draw() {
    image(vid, 0, 0, 700, 420);
    objectdetector.detect(vid, gotResults);
    if (status1 != ""){
        for(i = 0; i < objects.length; i++) {
           document.getElementById("objectsSpan").innerHTML = objects.length ;
           document.getElementById("statusSpan").innerHTML = "Object(s) Detected";
            
           
        }
    }

}

function start() {
    objectdetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("statusSpan").innerHTML = " Detecting Objects";
}

 function modelLoaded(){
     console.log("Model Loaded!!")
     status1 = true;
     vid.loop();
     vid.speed(1);
     vid.volume(5);
 }
  function gotResults(error, result) {
      if (error) {
          console.log(error)
      }
      console.log(result);
      objects = result;
    }