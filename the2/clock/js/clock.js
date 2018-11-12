var time=new Date()
var hours=time.getHours()
var minutes=time.getMinutes()
var seconds=time.getSeconds()

var hourLine=document.getElementById('hourLine')
var minuteLine=document.getElementById('minuteLine')
var secondLine=document.getElementById('secondLine')



var changeTime=function(){
	time=new Date()
	hours=time.getHours()
	minutes=time.getMinutes()
	seconds=time.getSeconds()
	hourLine.style.transform = 'rotate(' + (hours*15-135) + 'deg)';
	minuteLine.style.transform = 'rotate(' + (minutes*6-90) + 'deg)';
	secondLine.style.transform = 'rotate(' + (seconds*6-90)+'deg)';	
	t=setTimeout("changeTime()",100)
}
changeTime()
