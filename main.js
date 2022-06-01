nosex = "";
nosey = "";
img1 = "";
function preload(){
    img1 =loadImage("https://i.postimg.cc/X7N2ym4r/download-removebg-preview.png")
}
function setup(){
    canvas = createCanvas(800,800)
    canvas.center()
    webcam = createCapture(VIDEO)
    webcam.size(800,800)
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
function gotposes(results){
    if(results.length > 0){
        console.log(results)
        nosex = results[0].pose.nose.x
        nosey = results[0].pose.nose.y
        console.log(nosex,nosey)
    }
}
function draw(){
    image(webcam,0,0,800,800)
    fill("red")
    stroke("blue")
    circle(nosex,nosey,50)
    image(img1,nosex - 200,nosey - 200,400,300)
}
