//https://teachablemachine.withgoogle.com/models/vJesv9BBw/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/vJesv9BBw/model.json',modelReady);
}
 function modelReady(){
     //classifier.classify(gotResults);
     console.log("modelReady")
 }