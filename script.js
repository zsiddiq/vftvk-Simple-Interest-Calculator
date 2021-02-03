function compute()
{
    p = Number(document.getElementById("principal").value);
    //r = Number(document.getElementById("rate").value);
    y = Number(document.getElementById("years").value);
    var rangeslider = document.getElementById("sliderRange"); 
   var output = document.getElementById("demo"); 
    output.innerHTML = rangeslider.value; 
  
   rangeslider.oninput = function() { 
   output.innerHTML = this.value; 
}
        
