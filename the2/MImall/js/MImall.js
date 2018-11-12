var s1=document.getElementById('s1')
var s2=document.getElementById('s2')
var s3=document.getElementById('s3')

var mBack=document.getElementById('mBack')

var m1=document.getElementById('m1')
var m2=document.getElementById('m2')
var m3=document.getElementById('m3')
var mb1=document.getElementById('mb1')
var mb2=document.getElementById('mb2')
var mb3=document.getElementById('mb3')
var box1=document.getElementById('box1')

var l1=document.getElementById('l1')
var l2=document.getElementById('l2')
var l3=document.getElementById('l3')


var clear=function(){
	m1.style.zIndex='5';
	m2.style.zIndex='5';
	m3.style.zIndex='5';
	mb1.style.zIndex='9';
	mb2.style.zIndex='9';
	mb3.style.zIndex='9';
	s1.style.borderWidth='0px'
	s2.style.borderWidth='0px'
	s3.style.borderWidth='0px'
}

	s1.addEventListener('click',function(){
		clear();
		m1.style.zIndex='6'
		mb1.style.zIndex='10'
		s1.style.borderWidth='5px'
	})
	s2.addEventListener('click',function(){
		clear();
		m2.style.zIndex='6'
		mb2.style.zIndex='10'
		s2.style.borderWidth='5px'
	})
	s3.addEventListener('click',function(){
		clear();
		m3.style.zIndex='6'
		mb3.style.zIndex='10'
		s3.style.borderWidth='5px'
	})
	
	mb1.addEventListener('mouseover',function(){
		l1.style.display='inline-block'
	})
	mb2.addEventListener('mouseover',function(){
		l2.style.display='inline-block'
	})
	mb3.addEventListener('mouseover',function(){
		l3.style.display='inline-block'
	})
	
	mb1.addEventListener('mouseout',function(){
		l1.style.display='none'
		box1.style.display='none'
	})
	mb2.addEventListener('mouseout',function(){
		l2.style.display='none'
		box1.style.display='none'
	})
	mb3.addEventListener('mouseout',function(){
		l3.style.display='none'
		box1.style.display='none'
	})
	
	mb1.addEventListener('mousemove',function(e){
		box1.style.display='inline-block'
		var x=e.clientX
		var y=e.clientY
					
		box1.style.left= x-175 +'px'
		box1.style.top= y-175 +'px'
		
		l1.style.left= x +'px'
		l1.style.top= y +'px'
		})
	mb2.addEventListener('mousemove',function(e){
		box1.style.display='inline-block'
		var x=e.clientX
		var y=e.clientY
					
		box1.style.left= x-175 +'px'
		box1.style.top= y-175 +'px'
		
		l2.style.left= x +'px'
		l2.style.top= y +'px'
		})
	mb3.addEventListener('mousemove',function(e){
		box1.style.display='inline-block'
		var x=e.clientX
		var y=e.clientY
					
		box1.style.left= x-175 +'px'
		box1.style.top= y-175 +'px'
		
		l3.style.left= x +'px'
		l3.style.top= y +'px'
		})