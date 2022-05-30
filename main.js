nosex = "";
nosey = "";
function preload(){

}
function setup(){
    canvas = createCanvas(800,800)
    canvas.center()
    webcam = createCapture(VIDEO)
    webcam.hide()
    posenet = ml5.poseNet(webcam,modelloaded)
    posenet.on("pose",gotposes)
}
function modelloaded(){
    console.log("model is loaded")
}
function takepic(){
    save("myimg.png")
}
function draw(){
    image(webcam,0,0,800,800)
}
function gotposes(results){
    if(results.length > 0){
        console.log(results)
        nosex = results[0].pose.nose.x
        nosey = results[0].pose.nose.y
        console.log(nosex,nosey)
    }
}