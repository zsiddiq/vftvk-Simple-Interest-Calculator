function compute()
{var p,po,r,ro,y,texta, textb,d, line1c, line2c, line3c, line4c;
 line1c = "If you deposit ";
 line2c = "at an interest rate of ";
    p=Number(document.getElementById("principal").value);
    if (isNaN(p) || p < 1) {
        texta = "Amount Input is not valid";
    }else{
        texta = "Amount Input is valid";
        po = p;
    }
    document.getElementById("demoa").innerHTML=texta;
 
    r=document.getElementById("irate").innerHTML;
 //alert(r);
 if (isNaN(r) || r < 0.5) {
        textb = "Rate Input is not valid";
    }else{
        textb = "Rate Input is valid";
        ro = r;
    }
    document.getElementById("demob").innerHTML=textb;
 
    y=Number(document.getElementById("years").value);
    d=(p*(r/100.0)*y)
    document.getElementById("answer").value=d;
    document.getElementById("line1").innerHTML=line1c;
 document.getElementById("line2").innerHTML=line2c;
    document.getElementById("pout").innerHTML=po;
 document.getElementById("rout").innerHTML=ro;
 
}
        
