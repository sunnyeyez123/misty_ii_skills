
misty.Debug("Starting my skill");



// Parse the response data to get the current condition in _params.city
// and print this in a string to the dev console in the Skill Runner
// web page.
function _SendExternalRequest(data) {
    _data = JSON.parse(data.Result.ResponseObject.Data)
    _answer = _data.answer.toLowerCase();
    _image = _data.image;
    misty.Debug("Misty here! Just letting you know the answer is " + _answer);

   // misty.DisplayImage(_image);
    misty.PlayAudio("s_Disapproval.wav");


    if(_answer == "yes"){
        misty.Debug("Said Yes");
        yesColor();

    }else if (_answer == "no"){
        misty.Debug("Said No");
        noColor();
    }else{
        misty.Debug("Said Maybe");
    misty.ChangeLED(100, 70, 160);

    }
 misty.Pause(10000);
  //  misty.DisplayImage("e_DefaultContent.jpg", 1);

    
}

misty.AddPropertyTest("BumpSensor", "isContacted", "==", true, "boolean");
misty.AddReturnProperty("BumpSensor", "sensorName");
misty.RegisterEvent("checkWeather", "BumpSensor", 200, true);

misty.AddReturnProperty("Touched", "sensorPosition");
misty.AddReturnProperty("Touched", "isContacted");
misty.RegisterEvent("checkWeather", "TouchSensor", 50 ,true);


function _checkWeather(data) {

    misty.SendExternalRequest( "GET", "https://yesno.wtf/api");


}


function yesColor(){
    misty.ChangeLED(0, 250, 35);
        misty.DisplayImage("e_Joy.jpg");
          

}

function noColor(){
     misty.ChangeLED(250, 55, 28);
             misty.DisplayImage("e_Anger.jpg");
              


}










