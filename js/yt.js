window.onload=function(){
	var win=$(".window")[0];
	var img=$(".lunbo");
	var len=img.length;
	var lis=$("li",win);
	var btn=$(".anniu",win)[0];
	var btnL=$(".btnL",win)[0];
	var btnR=$(".btnR",win)[0];
	var bjtp=$(".bjtp");
	var num=0;
	var flag=true;

	for(var i=0;i<len;i++){
		if(i==0){
			lis[0].style.background="red";
			btn.style.display="none";			
			continue;

		}
		img[i].style.opacity=0;
		bjtp[i].style.opacity=0;
	}
	var t;
	t=setInterval(moveR,2000);
	win.onmouseover=function(){
		clearInterval(t);
		btn.style.display="block";
	}
	win.onmouseout=function(){
		t=setInterval(moveR,2000);
		btn.style.display="none";
	}
	btnR.onclick=function(){
		if(flag){
			flag=false;
			moveR();
		}
		
	}
	btnL.onclick=function(){
		if(flag){
			flag=false;
			moveL();
		}
	}

	function moveR(){
		num++;
		if(num==len){
			num=0;
		}
		for(var i=0;i<len;i++){
			animate(img[i],{opacity:0},function(){
				flag=true;
			});
			animate(bjtp[i],{opacity:0},function(){
				flag=true;
			});
			lis[i].style.background="#262626";
		}
		animate(img[num],{opacity:1});
		animate(bjtp[num],{opacity:1});
		lis[num].style.background="red";
	}

	function moveL(){
		num--;
		if(num<0){
			num=len-1;
		}
		for(var i=0;i<len;i++){
			animate(img[i],{opacity:0},function(){
				flag=true;
			});
			animate(bjtp[i],{opacity:0},function(){
				flag=true;
			});
			lis[i].style.background="#262626";
		}
		animate(img[num],{opacity:1});
		animate(bjtp[num],{opacity:1});
		lis[num].style.background="red";
	}

	for(var i=0;i<len;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			num=this.index;
			for(var j=0;j<len;j++){
				lis[j].style.background="#262626";
				animate(img[j],{opacity:0});
				animate(bjtp[j],{opacity:0});
			}
			lis[this.index].style.background="red";
			animate(img[this.index],{opacity:1});
			animate(bjtp[this.index],{opacity:1});
		}
	}


	var htp=$(".htp1-2")[0];
	var ewm=$(".ewm")[0];
	htp.onmouseover=function(){
		ewm.style.display="block";
	}
	htp.onmouseout=function(){
		ewm.style.display="none";
	}

	var htp1=$(".htp1-3")[0];
	var ewm1=$(".ewm1")[0];
	htp1.onmouseover=function(){
		ewm1.style.display="block";
	}
	htp1.onmouseout=function(){
		ewm1.style.display="none";
	}



	var denglu=$(".separ")[0];
	var dl=$(".DL")[0];
	denglu.onmouseover=function(){
		dl.style.display="block";
	}
	denglu.onmouseout=function(){
		dl.style.display="none";
	}

	// 线条
	var flnp=$(".flnp");
	line(flnp);

	var flnp1=$(".flnp1");
	line(flnp1);

	var ssmp6=$(".ssmp6");
	line(ssmp6);
	var ssmp7=$(".ssmp7");
	line(ssmp7);
	var ssmp8=$(".ssmp8");
	line(ssmp8);
	var ssmp5=$(".ssmp5");
	line(ssmp5);

	//banner下选项卡
	var bkhh=$(".chaozhi1-2")[0];
	var chaozhi11=$(".chaozhi1-1")[0];	
	var sjzx1=$(".chaozhi1-3")[0];

	
	var sjzx=$(".chaozhi3-2")[0];
	var chaozhi3=$(".chaozhi3")[0];
	var bkhh1=$(".chaozhi3-1")[0];

	bkhh.onmouseover=function(){

		bkhh1.style.display="block";
		chaozhi3.style.display="none";
		sjzx.style.display="none";

	}
	sjzx1.onmouseover=function(){
		sjzx.style.display="block";
		bkhh1.style.display="none";
		chaozhi3.style.display="none";

	}
	chaozhi11.onmouseover=function(){
		chaozhi3.style.display="block";
		bkhh1.style.display="none";
		sjzx.style.display="none";
	}
	
	
	// banner导航栏

	var mingpin1=$(".mingpin1");
	var enabled=$(".enabled");
	var zuanshi=$(".zuanshi");
	var zsconvert=$(".zsconvert");
	var Rightj=$(".Rightj");

	for(var i=0;i<mingpin1.length;i++){
		mingpin1[i].index=i;
		mingpin1[i].onmouseover=function(){
			for(var j=0;j<enabled.length;j++){
				enabled[j].style.display="none";
				// zuanshi[j].style.display="none";
			}
			enabled[this.index].style.display="block";
			zsconvert[this.index].style.display="block";
			Rightj[this.index].style.display="none";
		}
		mingpin1[i].onmouseout=function(){
			for(var j=0;j<enabled.length;j++){
				enabled[j].style.display="none";
				zsconvert[j].style.display="none";
				Rightj[j].style.display="block";

			}
		}
	}


	







	//********专款同柜********************************
	var rmpp=$(".rmpp")[0];
	var rmpp1=$(".rmpp")[1];

	var panel=$(".panel")[0];
	var panelx=$(".panelx")[0];
	rmpp.onmouseover=function(){
		panel.style.display="block";
		panelx.style.display="none";
	}
	rmpp1.onmouseover=function(){
		panelx.style.display="block";
		panel.style.display="none";
	}


	var omg=$(".omg");
	line1(omg);
	var omg1=$(".omg1");
	line1(omg1);




	//***************无缝轮播

	// var ssmp4=$(".ssmp4");
	// var touming1=$(".touming1");
	// var touming2=$(".touming2");
	// var btn1=$(".btn1");
	// var btnL1=$(".btnL1");
	// var btnR1=$(".btnR1");
	// var yuan1=$(".yuan1");
	// var yuan2=$(".yuan2");
	// var flag=true;

	// for(var i=0;i<ssmp4.length;i++){
	// 	touming1[i].style.left=0;
	// 	yuan1[i].style.background="#e5004f";

	// 	ssmp4[i].index=i;

	// 	ssmp4[i].onmouseover=function(){

	// 		btn1[this.index].style.display="block";
	// 	}
	// 	ssmp4[i].onmouseout=function(){
	// 		btn1[this.index].style.display="none";
	// 	}

	// 	btnL1[i].index=i;
	// 	btnR1[i].index=i;

	// 	btnR1[i].onclick=function(){
	// 		if(flag){
	// 			flag=false;
	// 			animate(touming1[this.index],{left:-390},function(){
	// 				flag=true;
	// 			});
	// 			animate(touming2[this.index],{left:0},function(){
	// 				flag=true;
	// 			});
	// 			yuan1[this.index].style.background="#ccc";
	// 			yuan2[this.index].style.background="#e5004f";
	// 		}
			
	// 	}

	// 	btnL1[i].onclick=function(){
	// 		if(flag){
	// 			flag=false;
	// 			animate(touming1[this.index],{left:0},function(){
	// 				flag=true;
	// 			});
	// 			animate(touming2[this.index],{left:390},function(){
	// 				flag=true;
	// 			});
	// 			yuan1[this.index].style.background="#e5004f";
	// 			yuan2[this.index].style.background="#ccc";
	// 		}
			
	// 	}


	// 	yuan1[i].index=i;
	// 	yuan2[i].index=i;

	// 	yuan2[i].onclick=function(){
	// 		if(flag){
	// 			flag=false;
	// 			animate(touming1[this.index],{left:-390},function(){
	// 				flag=true;
	// 			});
	// 			animate(touming2[this.index],{left:0},function(){
	// 				flag=true;
	// 			});
	// 			yuan1[this.index].style.background="#ccc";
	// 			yuan2[this.index].style.background="#e5004f";
	// 		}
			
	// 	}
	// 	yuan1[i].onclick=function(){
	// 		if(flag){
	// 			flag=false;
	// 			animate(touming1[this.index],{left:0},function(){
	// 				flag=true;
	// 			});
	// 			animate(touming2[this.index],{left:390},function(){
	// 				flag=true;
	// 			});
	// 			yuan1[this.index].style.background="#e5004f";
	// 			yuan2[this.index].style.background="#ccc";
	// 		}
			
	// 	}
		
	// }


	
	function smallRadio(num){
        var ndc=$('.ssmp4')[num];
        var smallRadio=$('.touming1',ndc);
        var cir=$('.yuan1',ndc);
        var iw=parseInt(getStyle(smallRadio[0],'width'));
        var number=0;
        cir[0].style.background='#E4165E';
        smallRadio[1].style.left=iw+'px';
        for(var i=0;i<cir.length;i++){
        cir[i].index=i;
        cir[i].onclick=function(){
        	if(this.index==number) return;
        	if(this.index<number){
        	smallRadio[this.index].style.left=-iw+'px';
        	animate(smallRadio[number],{left:iw});
        	animate(smallRadio[this.index],{left:0});
        	animate(cir[this.index],{background:'#E4165E'});
        	animate(cir[number],{background:'#6e6e6e'});
        	number=this.index;
            }
        	if(this.index>number){
        	smallRadio[this.index].style.left=iw+'px';
        	animate(smallRadio[number],{left:-iw});
        	animate(smallRadio[this.index],{left:0});
        	animate(cir[this.index],{background:'#E4165E'});
        	animate(cir[number],{background:'#6e6e6e'});
        	number=this.index;
           }
        }
        }
         var btnrr=document.createElement('div');
         var prevr=document.createElement('div');
         var nextr=document.createElement('div');
         btnrr.className='btn1';
         prevr.className='btnL1';
         nextr.className='btnR1';
         ndc.appendChild(btnrr);
         btnrr.appendChild(prevr);
         btnrr.appendChild(nextr);
         ndc.onmouseover=function(){
         	animate(btnrr,{width:388,left:0});
         }
         ndc.onmouseout=function(){
         	animate(btnrr,{width:448,left:-30});
         }
         prevr.onclick=function(){
         	if(number==0) return;
         	else{
         		smallRadio[0].style.left=-iw+'px';
        	    animate(smallRadio[number],{left:iw});
        	    animate(smallRadio[0],{left:0});
        	    animate(cir[0],{background:'#E4165E'});
        	    animate(cir[number],{background:'#6e6e6e'});
        	    number=0;
         	}
         }
         nextr.onclick=function(){
         	if(number==1) return;
         	else{
         	smallRadio[1].style.left=iw+'px';
        	animate(smallRadio[number],{left:-iw});
        	animate(smallRadio[1],{left:0});
        	animate(cir[1],{background:'#E4165E'});
        	animate(cir[number],{background:'#6e6e6e'});
        	number=1;
         	}
         }
     }
     smallRadio(0);
     smallRadio(3);
     smallRadio(4);
     smallRadio(5);
     smallRadio(6);
     smallRadio(7);
     smallRadio(8);

	//******************************************************************
	

	////////////////banner上面的GIF轮播
	var hdmin3=$(".hdmin3")[0];
	var tu=$(".abc");
	var num3=0;

	for(var i=0;i<tu.length;i++){
		if(i==0){
			continue;
		}
		tu[i].style.display="none";
	}
	setInterval(function(){
		num3++;
		if(num3==tu.length){
			num3=0;
		}
		for(var i=0;i<tu.length;i++){
			tu[i].style.display="none";
		}
		tu[num3].style.display="block";
	},1500)
	////////////////banner上面的GIF轮播


	var hdmin5=$(".hdmin5")[0];
	var wsp=$(".wsp",hdmin5)[0];
	hdmin5.onmouseover=function(){
		wsp.style.display="block";
	}
	hdmin5.onmouseout=function(){
		wsp.style.display="none";
	}



	//*******************按需加载**************
	//var obj=document.body.scrollTop?document.body:document.documentElement;
	var obj=document.body||document.documentElement;
		
		//获取浏览器可视高度
		var ch=document.documentElement.clientHeight;
		//各个楼层距离页面的距离
		var floor=$(".ssmp");
		var floorArr=[];
		var item5=$(".item5");
		var item8=$(".item8");

		for(var i=0;i<floor.length;i++){
			floorArr.push(floor[i].offsetTop);
		}

		

		//楼层跳转
		//滚动当前层楼对应的scrollTop
		var item=$(".item");
		var flag=true;
		for(var i=0;i<item.length;i++){
			
			item[i].index=i;

			item[i].onclick=function(){
				flag=false;
				for(var j=0;j<item.length;j++){
					item5[j].style.display="none";
					item8[j].style.display="block";
				}
				item5[this.index].style.display="block";
				item8[this.index].style.display="none";
				animate(obj,{scrollTop:floorArr[this.index]},function(){
					flag=true;
				});
				// animate(document.documentElement,{scrollTop:floorArr[this.index]},function(){
				// 	flag=true;
				// });
			}


			item[i].onmouseover=function(){
				for(var j=0;j<item.length;j++){
					item5[j].style.display="none";
					item8[j].style.display="block";
				}
				item5[this.index].style.display="block";
				item8[this.index].style.display="none";
			}
		}




		window.onscroll=function(){
			if(!flag){
				return;
			}
			//获取当前滚动的距离
			// obj=document.body.scrollTop?document.body:document.documentElement;
			var scrollTop=obj.scrollTop;
			//临界条件，可视窗口的一个高度+滚动条滚动的距离>=某个楼层的offsetTop
			for(var i=0;i<floorArr.length;i++){
				if(ch+scrollTop>=floorArr[i]+100){
					//获取当前楼层下边的图片并追加路径
					var imgs=$("img",floor[i]);
					
					for(var j=0;j<imgs.length;j++){
						imgs[j].src=imgs[j].getAttribute("imgpath");
					}
				}
			}


			//实现楼层与选项的同步
			for (var i=0;i<floor.length;i++){
				if(ch+scrollTop>=floorArr[i]+300){
					for(var j=0;j<floor.length;j++){
						item5[j].style.display="none";
						item8[j].style.display="block";
					}
					item5[i].style.display="block";
					item8[i].style.display="none";
				}
			} 
		var jump=$(".jump")[0];

		
		if(scrollTop>floorArr[0]-200){
			jump.style.display="block";
			
		}else{
			jump.style.display="none";
		}
		
	}
		var item1=$("#item1");
		item1.onclick=function(){
			
			item5[9].style.display="block";
			item8[9].style.display="none";

			animate(obj,{scrollTop:0},function(){
				item5[9].style.display="none";
				item8[9].style.display="block";

			});
			// animate(document.body,{scrollTop:0});
			
			
		}
		item1.onmouseout=function(){
			item5[9].style.display="none";
			item8[9].style.display="block";
		}
		

		/***************************最左侧轮播****************************************************************/
		function FLbar(num){
			var floorbar=$(".floorbar")[num];
			var gaoimg=$(".gaoimg",floorbar);
			var btnLeft=$(".btnLeft",floorbar)[0];
			var btnRight=$(".btnRight",floorbar)[0];
			var width1=parseInt(getStyle(gaoimg[0],"width")); 
			var nextLB=0;
			var indexLB=0;
			var flagG=true;
			for(var i=0;i<gaoimg.length;i++){
				if(i==0){
					continue;
				}
				gaoimg[i].style.left=width1+"px";
			}
			btnRight.onclick=function(){
				if(flagG){
					flagG=false;
					nextLB++;
					if(nextLB==gaoimg.length){
						nextLB=0;
					}
					gaoimg[nextLB].style.left=width1+"px";
					animate(gaoimg[indexLB],{left:-width1});
					animate(gaoimg[nextLB],{left:0},function(){
						flagG=true;
					});

					indexLB=nextLB;
				}
				
			}
			btnLeft.onclick=function(){
				if(flagG){
					flagG=false;
					nextLB--;
					if(nextLB<0){
						nextLB=gaoimg.length-1;
					}
					gaoimg[nextLB].style.left=-width1+"px";
					animate(gaoimg[indexLB],{left:width1});
					animate(gaoimg[nextLB],{left:0},function(){
						flagG=true;
					});

					indexLB=nextLB;
					}

			}
		}
		FLbar(0);
		FLbar(1);
		FLbar(2);
		FLbar(3);
		FLbar(4);
		FLbar(5);
		FLbar(6);
		FLbar(7);
		FLbar(8);





		











	

	

}