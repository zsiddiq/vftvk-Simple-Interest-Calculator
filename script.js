function compute()
{var p,r,y,text,d;
    p=Number(document.getElementById("principal").value);
    if (isNaN(p) || p < 1) {
        text = "Amount Input is not valid";
    }else{
        text = "Amount Input is valid";
    }
    document.getElementById("demoa").innerHTML=text;
    r=Number(document.getElementById("irate").value);
    y=Number(document.getElementById("years").value);
    d=p*y
   document.getElementById("answer").value=d;
}
        
