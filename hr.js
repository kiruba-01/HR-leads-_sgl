var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
   
    this.classList.toggle("active");

    
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}




function addCredits() {
  
  
var enteredValue = document.getElementById("enteredValue").value;
  if (enteredValue != "" && enteredValue != " ") { 
  if ( enteredValue <= 1000){
    var result = parseInt(enteredValue) + parseInt(1); 
    document.getElementById("enteredValue").value = result;
    var creditValue = document.getElementById("creditPoints").innerText; 

var resultDollar = parseFloat(creditValue) + parseFloat(0.40);
 document.getElementById("creditPoints").innerHTML = resultDollar.toFixed(2);
document.getElementById("errormsg").innerHTML="";
  } else{
    document.getElementById("errormsg").innerHTML="cannot enter value greater than 1000";
    
  }
   
 } else {
 document.getElementById("creditPoints").innerHTML = ""; 

} 

 }



function removeCredits() { 
  
var enteredValue = document.getElementById("enteredValue").value;
   if (enteredValue != "" && enteredValue != " "){
  if(enteredValue >= 50){
     var result = parseInt(enteredValue) - parseInt(1); document.getElementById("enteredValue").value = result;
    var creditValue = document.getElementById("creditPoints").innerText; 

var resultDollar = parseFloat(creditValue) - parseFloat(0.40); document.getElementById("creditPoints").innerHTML = resultDollar.toFixed(2);
document.getElementById("errormsg").innerHTML=" ";
  }
 else{
   document.getElementById("errormsg").innerHTML="cannot enter value lesser than 50"
   
 }
   }
   else {
 document.getElementById("creditPoints").innerHTML = ""; 

} 
}



function convertValue() { 
var enteredValue = document.getElementById("enteredValue").value;
 
if (enteredValue != "" && enteredValue != " ") { 
var conversionRate = 0.40; 
if (enteredValue >= 50 && enteredValue <= 1000 ){
  var convertedValue = parseInt(enteredValue) * conversionRate;
  document.getElementById("creditPoints").innerHTML = convertedValue.toFixed(2); 
  document.getElementById("errormsg").innerHTML="";
  } else {
    if (enteredValue > 1000 ) { 
      document.getElementById("enteredValue").value = ""; 
    }
    
     document.getElementById("errormsg").innerHTML="Enter value between 50 to 1000"
    }
} 
  else {
 document.getElementById("creditPoints").innerHTML = ""; 
} 

}

