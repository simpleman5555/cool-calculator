

var numberArray = [];
var checkDot1 = 0;
var checkDot2 = 0;
var dotIndex1;
var dotIndex2;
var headerNumbers = 1;
var arrayNotEmpty = false;
var equalOnce = true;
document.getElementById("countingList").innerHTML += "Counting History:<br /><br />";

for(i=12; i<16; i++) {
        
    document.getElementById("button"+i).onclick = function() {
        if((document.forms["form1"]["headerNumber1"].value != "") && (arrayNotEmpty == true) && (document.forms["form1"]["headerNumber2"].value == "")) {
            document.forms["form1"]["headerOperationSign"].value = this.innerHTML;
            numberArray.splice(0,numberArray.length); 
        }
    }
}
    
inputNumbers(headerNumbers);
  
function inputNumbers(headerNumbers) {
    
    for(j=0; j<10; j++) {
        
        document.getElementById("button"+j).onclick = function() {
            
            arrayNotEmpty = true;
            
            if(document.forms["form1"]["headerOperationSign"].value != "") {
                headerNumbers = 2;           
            } else {
                headerNumbers = 1;     
            }
            
            if(document.getElementById("result").innerHTML != "") {
                headerNumbers = 0;
            }

            numberArray.push(this.innerHTML);

            if((numberArray[0] == 0) && (/[0-9]/g.test(numberArray[1]) == true)) {

                document.forms["form1"]["headerNumber"+headerNumbers].value = null;
                document.forms["form1"]["headerNumber"+headerNumbers].value = this.innerHTML;
                numberArray.splice(0, 1);
            } else {
                document.forms["form1"]["headerNumber"+headerNumbers].value += this.innerHTML;
            }
        }
    }
}

document.getElementById("button10").onclick = function() {
    if(document.forms["form1"]["headerOperationSign"].value == "") {
        if((checkDot1 == 0) && (/[0-9]/g.test(numberArray[0]) == true)) {
            document.forms["form1"]["headerNumber1"].value += ".";
            numberArray.push(".");
            dotIndex1 = numberArray.lastIndexOf(".");
            checkDot1++;
        }
    } else {
        if((checkDot2 == 0) && (/[0-9]/g.test(numberArray[0]) == true)){
            document.forms["form1"]["headerNumber2"].value += ".";
            numberArray.push(".");
            dotIndex2 = numberArray.lastIndexOf(".");
            checkDot2++;
        }
    }
}

document.getElementById("button11").onclick = function() {
    if((document.forms["form1"]["headerOperationSign"].value != "") && (numberArray.length == 0)) {
        document.forms["form1"]["headerNumber2"].value = "-";
    }
    if((document.forms["form1"]["headerOperationSign"].value == "") && (numberArray.length == 0)) {
        document.forms["form1"]["headerNumber1"].value = "-";
    }
}

var arrayLength = 0;

document.getElementById("delOneNumber2").onclick = function() {
    if(/\./g.test(document.forms["form1"]["headerNumber2"].value) == true) {
        if(numberArray.length == (dotIndex2 + 1)) { checkDot2 = 0; };
    };
    
    if((document.forms["form1"]["headerOperationSign"].value != "") && (document.getElementById("result").innerHTML == "")) {
        if(numberArray.length >= 1) {
            arrayLength = numberArray.length;
            arrayLength--;
        } else {
            arrayLength--;
        };
        
        if(arrayLength == -2) {
            document.forms["form1"]["headerNumber2"].value = null;
        }
        
        if(arrayLength >= -1) {
            
            numberArray.splice(numberArray.length-1,1);
            
            if(/\-/g.test(document.forms["form1"]["headerNumber2"].value) == true) {
                document.forms["form1"]["headerNumber2"].value = null;
                if(arrayLength > -1) {document.forms["form1"]["headerNumber2"].value = "-"; };

                for(i=0; i<numberArray.length; i++) {
                    document.forms["form1"]["headerNumber2"].value += numberArray[i];
                }
            } else {
                document.forms["form1"]["headerNumber2"].value = null;
                for(i=0; i<numberArray.length; i++) {
                    document.forms["form1"]["headerNumber2"].value += numberArray[i];
                }
            }
        }
          
    }
}

document.getElementById("delOneNumber1").onclick = function() {
    
    if(/\./g.test(document.forms["form1"]["headerNumber1"].value) == true) {
        if(numberArray.length == (dotIndex1 + 1)) { checkDot1 = 0; };
    };
    
    if(document.forms["form1"]["headerOperationSign"].value == "") {
        if(numberArray.length >= 1) {
            arrayLength = numberArray.length;
            arrayLength--;
        } else {
            arrayLength--;
        };
        
        if(arrayLength == -2) {
            document.forms["form1"]["headerNumber1"].value = null;
        }
        
        if(arrayLength >= -1) {
            
            numberArray.splice(numberArray.length-1,1);
            
            if(/\-/g.test(document.forms["form1"]["headerNumber1"].value) == true) {
                document.forms["form1"]["headerNumber1"].value = null;
                if(arrayLength > -1) {document.forms["form1"]["headerNumber1"].value = "-"; };

                for(i=0; i<numberArray.length; i++) {
                    document.forms["form1"]["headerNumber1"].value += numberArray[i];
                }
            } else {
                document.forms["form1"]["headerNumber1"].value = null;
                for(i=0; i<numberArray.length; i++) {
                    document.forms["form1"]["headerNumber1"].value += numberArray[i];
                }
            }
        }
    }
}

function isEqual() {
    
    if(equalOnce) {
        var number1 = parseFloat(document.forms["form1"]["headerNumber1"].value);
        var number2 = parseFloat(document.forms["form1"]["headerNumber2"].value);

        if(document.forms["form1"]["headerOperationSign"].value == "+") {
            document.getElementById("result").innerHTML = number1 + number2;
        }
        if(document.forms["form1"]["headerOperationSign"].value == "-") {
            document.getElementById("result").innerHTML = number1 - number2;
        }
        if(document.forms["form1"]["headerOperationSign"].value == "*") {
            document.getElementById("result").innerHTML = number1 * number2;
        }
        if(document.forms["form1"]["headerOperationSign"].value == "/") {
            document.getElementById("result").innerHTML = number1 / number2;
        }

        document.getElementById("countingList").innerHTML += document.forms["form1"]["headerNumber1"].value + " " + document.forms["form1"]["headerOperationSign"].value + " " + document.forms["form1"]["headerNumber2"].value + " " + "=" + " " + document.getElementById("result").innerHTML + ";<br />";
        
        equalOnce = false;
    }
}

document.getElementById("headerEqualSign").onclick = function() {
    if((document.forms["form1"]["headerNumber1"].value != "") && (document.forms["form1"]["headerOperationSign"].value != "") && (document.forms["form1"]["headerNumber2"].value != "")) {
       isEqual();
    }
}

document.getElementById("clearCountingList").onclick = function() {
    document.getElementById("countingList").innerHTML = null;
    document.getElementById("countingList").innerHTML += "Counting History:<br /><br />";
}

document.getElementById("headerDel").onclick = function() {
    document.forms["form1"]["headerNumber1"].value = "";
    document.forms["form1"]["headerOperationSign"].value = "";
    document.forms["form1"]["headerNumber2"].value = "";
    document.getElementById("result").innerHTML = "";
    numberArray.splice(0,numberArray.length);
    arrayNotEmpty = false;
    equalOnce = true;
    checkDot1 = 0;
    checkDot2 = 0;
}
