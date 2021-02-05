function compute()
{var n,p,po,r,ro,x,y,dout, texta, textb,d, line1c, line2c, line3c, line4c;
 line1c = "If you deposit ";
 line2c = "at an interest rate of ";
 line3c = "You will receive an amount of ";
 line4c = "in the year ";
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
    d=(p*(r/100.0)*y);
    dout = d.toFixed(2);
    //document.getElementById("answer").value=d;
 x = new Date();
 n = (x.getFullYear())+y;
 line4c = line4c + n;
 document.getElementById("line4").innerHTML=line4c;
 line1c= line1c + po + ",";
    document.getElementById("line1").innerHTML=line1c;
 line2c= line2c + ro + "%.";
 document.getElementById("line2").innerHTML=line2c;
 line3c = line3c + dout + ",";
 document.getElementById("line3").innerHTML=line3c;
 //document.getElementById("rout").innerHTML=ro;
 //x = new Date();
 //n = (x.getFullYear())+y;
 //line4c = line4c + n;
 
}
        
