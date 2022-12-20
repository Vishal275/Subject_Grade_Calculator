function calculate(){
    var english = parseInt(document.getElementById('subject1').value);
    var mathematics = parseInt(document.getElementById('subject2').value);
    var  physics = parseInt(document.getElementById('subject3').value);
    var  chemistry = parseInt(document.getElementById('subject4').value);
    var  computer = parseInt(document.getElementById('subject5').value);
    if (!english || !mathematics || !physics || !chemistry || !computer){
        document.getElementById('alert_msg').innerHTML = "**Fields can't be empty"
        console.log('A');
    }
    else {
        document.getElementById('alert_msg').innerHTML = '';
        if (english>100 || mathematics>100 || physics>100 || chemistry>100 || computer>100) {
            document.getElementById("alert_msg").innerHTML = `**Invalid marks`;
        }
        
        else{
            document.getElementById('alert_msg').innerHTML = '';
            var obtained = english + mathematics + physics + chemistry + computer;
            var percentage = parseFloat(obtained/500 *100).toFixed(2);
            document.getElementById('obtain').innerHTML = obtained;
            document.getElementById('percentage').innerHTML = percentage + "%";
            if (english >= 40 && mathematics >= 40 && physics >= 40 && chemistry >= 40 && computer >= 40){
                document.getElementById("remarks").innerHTML = "<span style = 'color:#20E523;font-weight: bold;'>PASS</span>"
            }
            else{
                document.getElementById("remarks").innerHTML = "<span style = 'color:#FF0000;font-weight: bold;'>FAIL</span>"
            }
            if (percentage >= 90){
                document.getElementById('grade').textContent = "O"
            }
            if (percentage >= 80){
                document.getElementById('grade').textContent = "A"
            }
            else if (percentage >= 70){
                document.getElementById('grade').textContent = "B"
            }
            else if (percentage >= 60){
                document.getElementById('grade').textContent = "C"
            }
            else if (percentage >= 50){
                document.getElementById('grade').textContent = "D"
            }
            else if (percentage >= 40){
                document.getElementById('grade').textContent = "E"
            }
            else {
                document.getElementById('grade').textContent = "F"
            }
        }
    }

    
}