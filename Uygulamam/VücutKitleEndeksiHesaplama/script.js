function BMI() {
    var h=document.getElementById('h').value;
    var w=document.getElementById('w').value;
    var bmi=w/(h/100*h/100);
    var bmio=(bmi.toFixed(2));
    if(bmio<18)
document.getElementById("result").innerHTML="Zayıf" + "---" + "Vücut kitle endeksi:"+bmio;
else if(bmio>=18 && bmio<25)
document.getElementById("result").innerHTML="Normal" + "---" + "Vücut kitle endeksi:"+bmio;
else if(bmio>=25 && bmio<30)
document.getElementById("result").innerHTML="Kilolu" + "---" + "Vücut kitle endeksi:"+bmio;
else if(bmio>=30 && bmio<40)
document.getElementById("result").innerHTML="Obez" + "---" + "Vücut kitle endeksi:"+bmio;
else
document.getElementById("İleri Derecede Obez"+""+bmi.toFixed(2));

}