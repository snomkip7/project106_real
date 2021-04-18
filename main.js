link_in_progress = "https://teachablemachine.withgoogle.com/models/PIn-SQieD/";

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML = '<img src="'+data_uri+'" id="captured_image"/>'
    })
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PIn-SQieD/model.json', modelLoaded);

function modelLoaded(){
    console.log("Model loaded!");
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
        console.log("failed :(");
    }
    else{
        console.log(results);
        console.log("success!!!");
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
    }
}