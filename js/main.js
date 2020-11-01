$(document).ready(function(){
	
	
	//메인이미지 설명 태그추가
	$("#main ol li a").after("<p class='line'><span>line</span></p>");
	$(".line").css({"width":"100%","height":"3px","background-color":"#ffffff"});
	$(".line span").text("").css({"width":"0","height":"3px","background-color":"#000000","display":"block"});
	
	
	
	var i=0;
	var auto;
	timer();
	function timer(){
			auto=setInterval(function(){
			i++;
			if(i<4){
				$("#main img").attr("src","img/main"+i+".jpg");

				$("#main ol li a").removeClass("selected");
				$("#main ol li.title_0"+i+" a").addClass("selected");

				$(".line > span").css("width","0");
				$("#main ol li.title_0"+i+" .line span").delay(0).stop().animate({width:"100%"},2000);

			}else if(i>=4&&i<6){
				$("#main img").attr("src","img/main"+i+".jpg");

				$(".title_01,.title_02,.title_03").hide();
				$(".title_04,.title_05").show();

				$("#main ol li a").removeClass("selected");
				$("#main ol li.title_0"+i+" a").addClass("selected");

				$(".line span").css("width","0");
				$("#main ol li.title_0"+i+" .line span").delay(0).stop().animate({width:"100%"},2000);

			}else{
				i=1;
				$("#main img").attr("src","img/main"+i+".jpg");

				$(".title_01,.title_02,.title_03").show();
				$(".title_04,.title_05").hide();

				$("#main ol li a").removeClass("selected");
				$("#main ol li.title_0"+i+" a").addClass("selected");
				$(".line span").css("width","0");
				$("#main ol li.title_0"+i+" .line span").delay(0).stop().animate({width:"100%"},2000);

			}
			return false;
			},4000);
		}//function(timer)



		$("#main ol li").click(function(){
				clearInterval(auto);
				var tg=$(this).attr("data-n");
				if(tg<4){
				$("#main img").attr("src","img/main"+tg+".jpg");

				$("#main ol li a").removeClass("selected");
				$("#main ol li.title_0"+tg+" a").addClass("selected");

				$(".line > span").css("width","0");
				$("#main ol li.title_0"+tg+" .line span").delay(0).stop().animate({width:"100%"},2000);

				}else{
					$("#main img").attr("src","img/main"+tg+".jpg");

					$(".title_01,.title_02,.title_03").hide();
					$(".title_04,.title_05").show();

					$("#main ol li a").removeClass("selected");
					$("#main ol li.title_0"+tg+" a").addClass("selected");

					$(".line span").css("width","0");
					$("#main ol li.title_0"+tg+" .line span").delay(0).stop().animate({width:"100%"},2000);
				}
				i=tg;
				timer();
			});
	
    
			
	//brandstory
	
	$("#brand-story ol li").click(function(){
		var select_title=$(this).index();
		$("#brand-story ol li a h5").css("background-image","none");
		$(".brand-story-text li h5").removeClass("br-click");
		$("#brand-story h5").eq(select_title+1).addClass("br-click");
		$("#brand-story ol li a p").hide();
		$("#brand-story p").eq(select_title).show(function(){
			$('#brand-story ol li a p').css({"width":"0","opacity":"0"});
			$(this).stop().animate({width:"60%",opacity:1},3000);
		});
		
		if(select_title==0){
			$(".bs-img").attr("src","../img/comfort.png");
		}else if(select_title==1){
			$(".bs-img").attr("src","../img/safe.png").attr("alt","안전함");
		}else{
			$(".bs-img").attr("src","../img/easy.png").attr("alt","간편함");
			$("#brand-story h5").eq(0).addClass("br-click");
		}
		return false;
	});

	
	//반응형
	//메뉴버튼 클릭하면 메뉴오픈
	$("#menu-button").click(function(){
		$("#menu-mobile").animate({right:"0"},"slow");
	});
	$(".close_btn").click(function(){
		$("#menu-mobile").animate({right:"-100%"},"slow");
	});
	
	var show_submenu=false;
	$("#menu-mobile > ul > li").click(function(){
		show_submenu=!show_submenu;
		if(show_submenu==true){
			$(this).children("ul").slideDown(300);
			$("a",this).children(".plus_btn").text("-");
		}else{
			$(this).children("ul").slideUp(300);
			$("a",this).children(".plus_btn").text("+");
		}
	});
	
	
	
	
	//반응형 메인이미지
	$("#tablet-mobile-main ol li a").after("<p class='line'><span>line</span></p>");
	$(".line").css({"width":"100%","height":"3px","background-color":"#ffffff"});
	$(".line span").text("").css({"width":"0","height":"3px","background-color":"#000000","display":"block"});
	
	
	
	
	var n=0;
	var auto2;
	timer2();
	function timer2(){
		auto2=setInterval(function(){
			n++;
			if(n<6){
				$("#tablet-mobile-main div img").attr("src","../img/main"+n+".jpg");
				
				$("#tablet-mobile-main li").hide();
				$("#tablet-mobile-main li.main"+n).show();
				
				$(".line span").css("width","0");
				$("#tablet-mobile-main ol li.main"+n+" .line span").delay(0).stop().animate({width:"100%"},2000);
				
			}else{
				n=1;
				$("#tablet-mobile-main div img").attr("src","../img/main"+n+".jpg");
				
				$("#tablet-mobile-main li").hide();
				$("#tablet-mobile-main li.main"+n).show();
				
				$(".line span").css("width","0");
				$("#tablet-mobile-main ol li.main"+n+" .line span").delay(0).stop().animate({width:"100%"},2000);
			}
		},3000);
	}
	
	
	
	//하단
	var show_info=false;
	$(".information-mobile .info-title").click(function(){
		show_info=!show_info;
		if(show_info==true){
			$(this).nextAll().show();
			$("a",this).children(".more-info").text("-");
		}else{
			$(this).nextAll().hide();
			$("a",this).children(".more-info").text("+");
		}
		return false;
	});
	
});//end