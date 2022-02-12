function principal(){if((document.getElementById('emi2').value==null || document.getElementById('emi2').value.length==0) || (document.getElementById('months2').value==null || document.getElementById('months2').value.length==0) ||
(document.getElementById('rate2').value==null || document.getElementById('rate2').value.length==0)) {document.getElementById('princ2').value='Data Reqd.'}else {var emi=document.getElementById('emi2').value;var
princ=document.getElementById('princ2').value; var term =document.getElementById('months2').value;var intr=document.getElementById('rate2').value / 1200;document.getElementById('princ2').value=Math.round(emi*(1-(Math.pow(1/(1 + intr),
term)))/intr);document.getElementById('gt2').value= Math.round(document.getElementById('emi2').value * document.getElementById('months2').value);
document.getElementById('tintt2').value=Math.round(document.getElementById('gt2').value*1-document.getElementById('princ2').value*1)} }
