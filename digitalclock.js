function clock(){
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var day=date.getDay()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()

    var am_pm="AM"
    if(hh>=12){
        am_pm="PM"
    }
    if(hh>12){
        hh-=12
    }
    if(hh==0){
        hh=12
    }

    if(mo==0){
        mo="Jan"
    }
    else if(mo==1){
        mo="Feb"
    }
    else if(mo==2){
        mo="Mar"
    }
    else if(mo==3){
        mo="Apr"
    }
    else if(mo==4){
        mo="May"
    }
    else if(mo==5){
        mo="Jun"
    }
    else if(mo==6){
        mo="July"
    }
    else if(mo==7){
        mo="Aug"
    }
    else if(mo==8){
        mo="Sep"
    }
    else if(mo==9){
        mo="Oct"
    }
    else if(mo==10){
        mo="Nov"
    }
    else{
        mo="Dec"
    }

    switch(day)
    {
        case 0:day="Sunday"
           document.body.style.backgroundImage="url(./0.jpg)"
        break;
        case 1:day="Monday"
        document.body.style.backgroundImage="url(./1.jpg)"
        break;
        case 2:day="Tuesday"
        document.body.style.backgroundImage="url(./2.jpg)"
        break;
        case 3:day="Wednesday"
        document.body.style.backgroundImage="url(./3.jpg)"
        break;
        case 4:day="Thursday"
        document.body.style.backgroundImage="url(./4.jpg)"
        break;
        case 5:day="Friday"
        document.body.style.backgroundImage="url(./5.jpg)"
        break;
        case 6:day="Saturday"
        document.body.style.backgroundImage="url(./6.jpg)"
        
    }
    document.getElementById("time").innerHTML=`${hh}:${mm} ${am_pm}`
    document.getElementById("date").innerHTML=`${dd}/${mo}/${yy}`
    document.getElementById("day").innerHTML=day
    document.getElementById("sec").innerHTML=ss
    setTimeout(clock,1000)

}
clock()

var audio=new Audio()
audio.src="./alarm-clock-short-6402.mp3"

function alarmfunction(){
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()

    var am_pm="AM"
    if(hh>=12){
        am_pm="PM"
    }
    if(hh>12){
        hh-=12
    }
    if(hh==0){
        hh=12
    }
    var usergivenhh=document.getElementById("userhours").value
    var usergivenmm=document.getElementById("userminutes").value
    var usergivenam_pm=document.getElementById("useram_pm").value

    if(hh==usergivenhh && mm==usergivenmm && am_pm==usergivenam_pm){
        audio.play()
        audio.loop
        
    }
    else{
        audio.pause()
    }
    setTimeout(alarmfunction,1000)

}
function closewindow(){
    document.getElementById("alarmcontainer").style.display="none"
}
function openwindow(){
    document.getElementById("alarmcontainer").style.display="flex"

}
