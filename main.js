prediction1 = "";
prediction2 = "";
camera = document.getElementById("camera");
Webcam.set({
    width: 400,
    height: 450,
    image_format: 'png',
    png_quality: 100
});
Webcam.attach('#camera');

function takesnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="imgcaptured" src="'+data_uri+'"/>'
    });
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MtnPnyvi_/model.json', modelLoaded);

function modelLoaded(){
    console.log("modelLoaded");
}