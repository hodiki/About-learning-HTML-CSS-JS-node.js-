var time=new Date()
var hours=time.getHours()
var minutes=time.getMinutes()
var seconds=time.getSeconds()

var theHours=document.getElementById('hours')
var theMinutes=document.getElementById('minutes')
var theSeconds=document.getElementById('seconds')

var theXmHours=document.getElementById('xmHours')
var theXmMinutes=document.getElementById('xmMinutes')
var theXmSeconds=document.getElementById('xmSeconds')


var innTime=function(){
	time=new Date()
	hours=time.getHours()
	if(hours<10){
		hours='0'+hours.toString()
	}
	
	minutes=time.getMinutes()
	if(minutes<10){
		minutes='0'+minutes.toString()
	}
	
	seconds=time.getSeconds()
	if(seconds<10){
		seconds='0'+seconds.toString()
	}
	
	theHours.innerHTML='<p class="time" id="hours">'+hours+'</p>'
	theMinutes.innerHTML='<p class="time" id="minutes">'+minutes+'</p>'
	theSeconds.innerHTML='<p class="time" id="seconds">'+seconds+'</p>'
	
	theXmHours.innerHTML='<p class="time" id="xmHours">'+hours+'</p>'
	theXmMinutes.innerHTML='<p class="time" id="xmMinutes">'+minutes+'</p>'
	theXmSeconds.innerHTML='<p class="time" id="xmSeconds">'+seconds+'</p>'
	
	t=setTimeout("innTime()",100)	
}

innTime();
