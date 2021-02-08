function compute()
{var n,p,po,r,ro,x,y,yo,dout, texta, textb,textc,d, line1ct, line1cn,line2ct, line2cn, line3ct, line3cn, line4ct, line4cn;
 line1ct = "If you deposit ";
 line2ct = "at an interest rate of ";
 line3ct = "You will receive an amount of ";
 line4ct = "in the year ";
    p=Number(document.getElementById("principal").value);
    if (isNaN(p) || p < 1) {
        alert("Please enter a positive number for principal amount");
        texta = "Amount Input must be positive";
        document.getElementById("principal").focus();
    }else{
        texta = "Amount Input is valid";
        po = p;
    }
    document.getElementById("demoa").innerHTML=texta;
 
    r=document.getElementById("irate").innerHTML;
 //alert(r);
 if (isNaN(r) || r < 0.5) {
        textb = "Rate Input must be positive";
    }else{
        textb = "Rate Input is valid";
        ro = r;
    }
    document.getElementById("demob").innerHTML=textb;
 
    y=Number(document.getElementById("years").value);
 if (isNaN(y) || y < 0.0) {
        if (!isNan(ro)) {
 line2ct = line2ct;
     document.getElementById("line2t").innerHTML=line2ct;
         textc = "Year Input must be positive";
    }else{
        textc = "Year Input is valid";
        yo = y;
    }
    document.getElementById("democ").innerHTML=textc;
    d=(p*(r/100.0)*y);
    dout = d.toFixed(2);
    //document.getElementById("answer").value=d;
 x = new Date();
 n = (x.getFullYear())+y;
 line4ct = line4ct;
 line4cn = n;
 document.getElementById("line4t").innerHTML=line4ct;
  document.getElementById("line4n").innerHTML=line4cn;
 if (!isNaN(po)){ 
 line1ct= line1ct;
    document.getElementById("line1t").innerHTML=line1ct;
 line1cn= po + ",";
    document.getElementById("line1n").innerHTML=line1cn;
 }
 if (!isNan(ro)) {
 line2ct = line2ct;
     document.getElementById("line2t").innerHTML=line2ct;
  line2cn= ro + "%.";
  document.getElementById("line2n").innerHTML=line2cn;
  }
   if (!isNan(dout)) {
 line3ct = line3ct;
     document.getElementById("line3t").innerHTML=line3ct;
  line3cn= dout + ",";
  document.getElementById("line2n").innerHTML=line3cn;
  }
 
 
}
        
