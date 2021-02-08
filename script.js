function compute1(){
var n,p,po,r,ro,x,y,yo,dout, texta, textb,textc,d, line1ct;
 var line1cn, line2ct, line2cn, line3ct, line3cn, line4ct, line4cn;
 line1ct = "If you deposit ";
 line2ct = "at an interest rate of ";
 line3ct = "You will receive an amount of ";
 line4ct = "in the year ";
 alert("before principal");
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
 alert("after principal");
    r=document.getElementById("irate").innerHTML;
 if (isNaN(r) || r < 0.5) {
        textb = "Rate Input must be positive";
    }else{
        textb = "Rate Input is valid";
        ro = r;
    }
    document.getElementById("demob").innerHTML=textb;
 alert("second after rate");
    y=Number(document.getElementById("years").value);
 if (isNaN(y) || y < 0.0) {
        if (!isNan(ro)) {
         textc = "Year Input must be positive";
    }else{
        textc = "Year Input is valid";
        yo = y;
    }
  alert("after year");
    document.getElementById("democ").innerHTML=textc;
    d=(p*(r/100.0)*y);
    dout = d.toFixed(2);
 x = new Date();
 n = (x.getFullYear())+y;
  alert("after date calculation");
 line4ct = line4ct;
 line4cn = n;
 document.getElementById("line4t").innerHTML=line4ct;
  document.getElementById("line4n").innerHTML=line4cn;
  alert("after 4ct and 4cn ");
 if (!isNaN(po)){ 
 line1ct= line1ct;
    document.getElementById("line1t").innerHTML=line1ct;
 line1cn= po + ",";
    document.getElementById("line1n").innerHTML=line1cn;
 }
  alert("after date 1ct and 1cn");
 if (!isNan(ro)) {
 line2ct = line2ct;
     document.getElementById("line2t").innerHTML=line2ct;
  line2cn= ro + "%.";
  document.getElementById("line2n").innerHTML=line2cn;
  }
  alert("after 2ct and 2cn");
   if (!isNan(dout)) {
 line3ct = line3ct;
     document.getElementById("line3t").innerHTML=line3ct;
  line3cn= dout + ",";
  document.getElementById("line3n").innerHTML=line3cn;
  }
 alert("after 3ct and 3cn");
}
}
