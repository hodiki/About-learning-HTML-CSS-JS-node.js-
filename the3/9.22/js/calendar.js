var days = 31
var now = new Date()
var year = now.getFullYear()
var month = now.getMonth()+1
var today = now.getDate()

var yearLeft=document.getElementById('yearLeft')
var yearRight=document.getElementById('yearRight')

var years=document.getElementsByClassName('year')
var months=document.getElementsByClassName('month')
var dayss=document.getElementsByClassName('dayss')
	
	
var innerYearAndMonth=function(){
	yearString=year.toString();
	years[0].innerHTML= '<div id="yearLeft"><</div>'+yearString+'<div id="yearRight">></div>';

	monthString=month.toString();
	months[0].innerHTML='<div id="monthLeft"><</div>'+monthString+'<div id="monthRight">></div>';
}

innerYearAndMonth(year,years,month,months);





var getdays = function(){
	if(year%4==0 && month==2){
		days=29
	}else if(year%4!=0 && month==2){
		days=28
	}else if(month==4 || month==6 || month==9 || month==11){
		days=30
	}else{
		days=31
	}
	return days
}

var getweek = function(){
	var date = year + '-' + month + '-' +'01'
	var week = (new Date(date)).getDay()
	return week
}

var week=getweek();

var i=0;

var j=0;

var inn=1;
var beforeweek=0;
var beforeweekss='';

var countAndInBeforeWeek=function(){
	beforeweek=0;
	beforeweekss='';
	if(week==0){
		beforeweek=6;
	}else{
		beforeweek=week-1;
	}
	if(inn==1){
		for(j=0;j<beforeweek;j++){
			beforeweekss=beforeweekss+'<div class="nodays">0</div> ';
		}
	}
	return beforeweekss
}

    var dayDiv='<div class="days">1</div> ';
	var dayDivs=countAndInBeforeWeek(getweek(year,month),1);

var inDiv=function(){
	
	days=getdays();
	week=getweek();
	dayDiv='<div class="days">1</div> ';
	countAndInBeforeWeek(getweek(),1);
	dayDivs=countAndInBeforeWeek(getweek(),1);
	

for (i=0;i<days;i++) {
	if((i+1)==today){
		dayDiv='<div class="todays">'+(i+1)+'</div> '
	}else{
		dayDiv='<div class="days">'+(i+1)+'</div> '
	}
	
	dayDivs=dayDivs+dayDiv;
}	
	dayss[0].innerHTML=dayDivs;

}

inDiv();




var monthLeft=document.getElementById('monthLeft');
var monthRight=document.getElementById('monthRight');

var yearLeft=document.getElementById('yearLeft');
var yearRight=document.getElementById('yearRight');


var nextyear=function(){
	year=year+1;
	innerYearAndMonth();
	inDiv();
	monthLeft=document.getElementById('monthLeft');
	monthRight=document.getElementById('monthRight');
	yearLeft=document.getElementById('yearLeft');
	yearRight=document.getElementById('yearRight');
	monthLeft.addEventListener('click',lastmonth);
	monthRight.addEventListener('click',nextmonth);
	yearLeft.addEventListener('click',lastyear);
	yearRight.addEventListener('click',nextyear);
	return year;
}

var lastyear=function(){
	year=year-1;
	innerYearAndMonth();
	inDiv();
	monthLeft=document.getElementById('monthLeft');
	monthRight=document.getElementById('monthRight');
	yearLeft=document.getElementById('yearLeft');
	yearRight=document.getElementById('yearRight');
	monthLeft.addEventListener('click',lastmonth);
	monthRight.addEventListener('click',nextmonth);
	yearLeft.addEventListener('click',lastyear);
	yearRight.addEventListener('click',nextyear);
	return year;
}



var nextmonth=function(){
	if(month==12){
		month=1;
		year=year+1;
	}else{
		month=month+1;
	}
	innerYearAndMonth();
	inDiv();
	monthLeft=document.getElementById('monthLeft');
	monthRight=document.getElementById('monthRight');
	yearLeft=document.getElementById('yearLeft');
	yearRight=document.getElementById('yearRight');
	monthLeft.addEventListener('click',lastmonth);
	monthRight.addEventListener('click',nextmonth);
	yearLeft.addEventListener('click',lastyear);
	yearRight.addEventListener('click',nextyear);
	return month;
}

var lastmonth=function(){
	if(month==1){
		month=12;
		year=year-1;
	}else{
		month=month-1;
	}
	innerYearAndMonth();
	inDiv();
	monthLeft=document.getElementById('monthLeft');
	monthRight=document.getElementById('monthRight');
	yearLeft=document.getElementById('yearLeft');
	yearRight=document.getElementById('yearRight');
	monthLeft.addEventListener('click',lastmonth);
	monthRight.addEventListener('click',nextmonth);
	yearLeft.addEventListener('click',lastyear);
	yearRight.addEventListener('click',nextyear);
	return month;
}

monthLeft.addEventListener('click',lastmonth);
monthRight.addEventListener('click',nextmonth);
yearLeft.addEventListener('click',lastyear);
yearRight.addEventListener('click',nextyear);


var backTodaying=function(){
	year = now.getFullYear();
	month = now.getMonth()+1;
	innerYearAndMonth();
	inDiv();
	monthLeft=document.getElementById('monthLeft');
	monthRight=document.getElementById('monthRight');
	yearLeft=document.getElementById('yearLeft');
	yearRight=document.getElementById('yearRight');
	monthLeft.addEventListener('click',lastmonth);
	monthRight.addEventListener('click',nextmonth);
	yearLeft.addEventListener('click',lastyear);
	yearRight.addEventListener('click',nextyear);
}

var backToday=document.getElementById('backToday');
backToday.addEventListener('click',backTodaying)

