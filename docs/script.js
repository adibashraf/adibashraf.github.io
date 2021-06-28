function button1() {
    document.getElementById("quotebox").style.backgroundColor="#73AD21";
    document.getElementById("quotebox").style.border="2px solid #f44";
    document.getElementById("quotebox").style.fontSize="large";
    document.getElementById("quotebox").style.fontFamily="Helvetica";
}

function button2() {
    document.getElementById("quotebox").style.backgroundColor="aqua";
    document.getElementById("quotebox").style.border="2px solid salmon";
    document.getElementById("quotebox").style.fontSize="medium";
    document.getElementById("quotebox").style.fontFamily="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
}

function button3() {
    document.getElementById("quotebox").style.backgroundColor="orangered";
    document.getElementById("quotebox").style.border="2px solid blanchedalmond";
    document.getElementById("quotebox").style.fontSize="x-large";
    document.getElementById("quotebox").style.fontFamily="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
}

function button4() {
    document.getElementById("quotebox").style.backgroundColor="yellowgreen";
    document.getElementById("quotebox").style.border="2px solid yellow";
    document.getElementById("quotebox").style.fontSize="small";
    document.getElementById("quotebox").style.fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
}

function convert() {
    var numval = document.getElementById("numval").value;
    var unit = document.getElementById("convert");
    var choice = unit.options[unit.selectedIndex].value;
    var result;

    if(choice == "lbkg"){
        answer = numval * 0.4536;
        answer = answer + " kg"
    }
    if(choice == "kglb"){
        answer = numval * 2.2046;
        answer = answer + " pounds"
    }

    document.getElementById("output").innerHTML = answer;
}

function numberCalculation() {
	var val = document.getElementById("numIn").value;
	var numArray = val.split(",");
	var sum = 0;
	var average = 0;
	if(val != '') {
		for (var i = 0; i < numArray.length; i++) {
			numArray[i] = parseFloat(numArray[i]);
		}
		for (var i = 0; i < numArray.length; i++) {
			sum = sum + numArray[i];
		}
		average = sum/numArray.length;

		var max = Math.max(...numArray)
		var min = Math.min(...numArray)

		numArray.reverse();	
		var reversedArray = numArray.join();
		
		if (!isNaN(sum)) {
			document.getElementById("max").innerHTML = "Max: " + max;
			document.getElementById("min").innerHTML = "Min: " + min;
            document.getElementById("sum").innerHTML = "Sum: " + sum;
            document.getElementById("average").innerHTML = "Average: " + average;
			document.getElementById("reverse").innerHTML = "Reverse Order: " + reversedArray;		
        }
	}
}


function clearText() {
	document.getElementById("textInput").value = '';
	document.getElementById("case").value = "lower";	
}

function capitalize() {
	var check = document.getElementById("case").value;
	var str = document.getElementById("textInput").value;

	if(check == "lower") {
		document.getElementById("textInput").value = str.toUpperCase();
		document.getElementById("case").value = "upper";				
	}
	if(check == "upper") {
		document.getElementById("textInput").value = str.toLowerCase();
		document.getElementById("case").value = "lower";				
	}
}

function sort() {
	var str = document.getElementById("textInput").value;
	var arr = str.split("\n");
	var sorted = arr.sort();
	document.getElementById("textInput").value= sorted.join("\n");
}

function reverse() {
	var str = document.getElementById("textInput").value;
	var arr = str.split("\n");
	for(i = 0; i < arr.length; i++){
		arr[i] = arr[i].split("").reverse().join("");
	}
	document.getElementById("textInput").value = arr.join("\n");
}

function strip() {
	var str = document.getElementById("textInput").value;
	var edit = str.replace(/^\s+|\s+$/gm, '');
	var arr = edit.split("\n");
	for(i = 0; i < arr.length; i++){
		arr[i] = arr[i].trim();
	}
	document.getElementById("textInput").value = arr.join('\n');
}

function addNumber() {
	var str = document.getElementById("textInput").value;
	var arr = str.split("\n");
	for(i = 1; i <= arr.length; i++){
		arr[i-1] = i + ". " + arr[i-1];
	}
	document.getElementById("textInput").value = arr.join("\n");
}

function shuffle() {
	var str = document.getElementById("textInput").value;
	var arr = str.split("\n");
	var temp;
    var rand;
    var size = arr.length;
	while (size !== 0) {
	    rand = Math.floor(Math.random() * size);
	    size -= 1;

	    temp = arr[size];
	    arr[size] = arr[rand];
	    arr[rand] = temp;
	}
	document.getElementById("textInput").value = arr.join("\n");
}

function openTab(tabName) {
	var i, x;
	x = document.getElementsByClassName("container");
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none";
	}
	document.getElementById(tabName).style.display = "block";
}