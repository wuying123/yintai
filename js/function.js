/*
	getClass(className,[range])
	获取指定class的对象的集合
	className 指定的类名
	range     指定的范围
	如果传入范围，就是指定的范围，如果不传范围，就是document 
*/
function getClass(className,range){
	//设置获取元素的范围
	var range=range?range:document;
	//var range=range||document;
	//判断浏览器
	if(document.getElementsByClassName){
		//w3c
		return range.getElementsByClassName(className);
	}
	else{
		//ie6~8
		//arr 保存指定的className对象
		var arr=[];
		//获取所有的元素
		var all=range.getElementsByTagName('*');
	    //挑选指定的元素
	    for(var i=0;i<all.length;i++){
	    	//all[i].className==className
	    	//函数：判断当前元素的className是否包含指定的className.
	    	if(checkClass(all[i].className,className)){
	    		arr.push(all[i]);
	    	}

	    }
	    //挑选完毕，将数组输出；
	    return arr;
		
	}
}
/*
checkClass(obj,className)
检查obj里面是否包含className
obj "one two"
className  "one"
*/
function checkClass(obj,className){
	var arr=obj.split("");
	for(i=0;i<arr.length;i++){
		if (arr[i]==className){
			return true;
		}
	}
	return false;
}




//**********************************************************************


/*getContent(obj,[val])获取或设置对象的文本
obj  指定的对象
val  要设置的内容*/

function getContent (obj,val) {
	if(obj.innerText){
		if(val===undefined){
			return obj.innerText;
		}
		else{
			obj.innerText=val;
		}
	}
	else{
		if(val===undefined){
			return obj.textContent;
		}
		else{
			obj.textContent=val;
		}
	}
}




//****************************************************************************

/*
getStyle(obj,attr)
获取指定元素指定的样式;
obj   指定的元素；
attr  指定的样式
*/
function getStyle(obj,attr){
	//"height"  height
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,null)[attr];
	}
}




//******************************************************************

/*
$("")
.one  获取类名
#one  获取id
div	  获取标签
*/
function $(selecter,ranges){
	var ranges=ranges?ranges:document;
	if(selecter.charAt(0)=="."){
		return getClass(selecter.slice(1),ranges);
	}
	else if(selecter.charAt(0)=="#"){
		return document.getElementById(selecter.slice(1));
	}
	else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
		return ranges.getElementsByTagName(selecter);
	}
}




//线条问题

function line(obj){ 
			          var dw=obj[0].offsetWidth;
			          var dh=obj[0].offsetHeight;
			          var top=[];
			          var bottom=[];
			          var left=[];
			          var right=[];
			          for(var i=0;i<obj.length;i++){
			           obj[i].index=i;
			            top.push($('.top',obj[i])[0]);
				        bottom.push($('.bottom',obj[i])[0]);
				        left.push($('.left',obj[i])[0]);
				        right.push($('.right',obj[i])[0]);
			           obj[i].onmouseover=function(){
			            animate(top[this.index],{width:dw});
			            animate(bottom[this.index],{width:dw});
			            animate(left[this.index],{height:dh});
			            animate(right[this.index],{height:dh});
			          }
			           obj[i].onmouseout=function(){
			            animate(top[this.index],{width:0});
			            animate(bottom[this.index],{width:0});
			            animate(left[this.index],{height:0});
			            animate(right[this.index],{height:0});
			          }
			         }
			}

			function line1(obj){ 
			          var dw=parseInt(getStyle(obj[0],'width'))+2;
			          var dh=parseInt(getStyle(obj[0],'height'))+2;
			          var top=[];
			          var bottom=[];
			          var left=[];
			          var right=[];
			          for(var i=0;i<obj.length;i++){
			           obj[i].index=i;
			            top.push($('.top',obj[i])[0]);
				        bottom.push($('.bottom',obj[i])[0]);
				        left.push($('.left',obj[i])[0]);
				        right.push($('.right',obj[i])[0]);
			           obj[i].onmouseover=function(){
			            animate(top[this.index],{width:dw});
			            animate(bottom[this.index],{width:dw});
			            animate(left[this.index],{height:dh});
			            animate(right[this.index],{height:dh});
			          }
			           obj[i].onmouseout=function(){
			            animate(top[this.index],{width:0});
			            animate(bottom[this.index],{width:0});
			            animate(left[this.index],{height:0});
			            animate(right[this.index],{height:0});
			          }
			         }
			}