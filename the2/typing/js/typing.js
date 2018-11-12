	
	
	var str = '我王境泽就算饿死<br>死外边<br>从这跳下去<br>也不会吃你们一点东西<br><br><br><br><br>真香';
   	var i = 0;
   	var strss='';
	   function typing(){
	    var divTyping = document.getElementById('theType');
	    if (i <= str.length) {
	    	strss=str.slice(0, i++);
	     divTyping.innerHTML = strss + '_';
	     if(i=='9' || i=='10' || i=='11' || i=='15' || i=='16' || i=='17' || i=='23' || i=='24' || i=='25'){
	     	setTimeout('typing()', 10);
	     }else{
	     	 setTimeout('typing()', 200);//递归调用
	     }
	    
	    }else{
	     divTyping.innerHTML = str;//结束打字,移除 _ 光标
	    }
	   }
	   typing();
