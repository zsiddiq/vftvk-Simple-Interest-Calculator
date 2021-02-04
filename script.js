function compute()
{var p,r,y,texta, textb,d;
    p=Number(document.getElementById("principal").value);
    if (isNaN(p) || p < 1) {
        texta = "Amount Input is not valid";
    }else{
        texta = "Amount Input is valid";
    }
    document.getElementById("demoa").innerHTML=texta;
 
    r=document.getElementById("irate").innerHTML;
 if (isNaN(r) || r < 1) {
        textb = "Rate Input is not valid";
    }else{
        textb = "Rate Input is valid";
    }
    document.getElementById("demob").innerHTML=textb;
 
    y=Number(document.getElementById("years").value);
    d=p*r*y
   document.getElementById("answer").value=d;
}
        
