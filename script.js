function compute()
{
    p = document.getElementById("principal").value;
    
    r = document.getElementById("rate").value;
    var slider = document.getElementById("rate");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;}
    
    y = document.getElementById("years").value;
    a=p*(r*(1/100)*y;
    document.getElementById("result").value=a;
    
}
        
