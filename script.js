function compute()
{var p,r,y,text;
    p=Number(document.getElementById("principal").value);
    if (isNaN(p) || p < 1) {
        text = "Amount Input is not valid";
    }
    document.getElementById("demoa").innerHTML=text;
    r=Number(document.getElementById("irate").value);
    y=Number(document.getElementById("years").value);
   document.getElementById("answer").value=p;
}
        
