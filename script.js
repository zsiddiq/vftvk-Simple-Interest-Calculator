function compute()
{var p,r,y,texta, textb,d, line1c, line2c, line3c, line4c;
 line1c = "If you deposit ";
    p=Number(document.getElementById("principal").value);
    if (isNaN(p) || p < 1) {
        texta = "Amount Input is not valid";
    }else{
        texta = "Amount Input is valid";
    }
    document.getElementById("demoa").innerHTML=texta;
 
    r=document.getElementById("irate").innerHTML;
 //alert(r);
 if (isNaN(r) || r < 0.5) {
        textb = "Rate Input is not valid";
    }else{
        textb = "Rate Input is valid";
    }
    document.getElementById("demob").innerHTML=textb;
 
    y=Number(document.getElementById("years").value);
    d=p*r*y
 document.getElementById("line1").innerHTML=line1c;
   document.getElementById("answer").value=d;
}
        
