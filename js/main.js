//팝업존
$(document).ready(function(){		
	var param = "#popup";
	var obj = ".pop>li";
	var btn = param+" .control";
	var interval = 5000; 
	var speed = 0;
	var viewSize = 1;
	var moreSize = 0;
	var dir = "x";
	var data = 0;
	var auto = true;
	var hover = false;
	var method = "easeInOutCubic";
	var op1 = false;		 
	stateScrollObj(param,obj,btn,interval,speed,viewSize,moreSize,dir,data,auto,hover,method,op1);
});

// 2023 08 16 psm 카드뉴스
//카드뉴스
$(document).ready(function(){		
	var param = "#cardNews";
	var obj = ".pop>li";
	var btn = param+" .control";
	var interval = 5000; 
	var speed = 0;
	var viewSize = 1;
	var moreSize = 0;
	var dir = "x";
	var data = 0;
	var auto = true;
	var hover = false;
	var method = "easeInOutCubic";
	var op1 = false;		 
	stateScrollObj(param,obj,btn,interval,speed,viewSize,moreSize,dir,data,auto,hover,method,op1);
});

$(document).ready(function(){

	//카드뉴스 슬라이드
	$(".slide01").slick({	
		row: 1,		
		speed:700,			
		slidesToShow:2,
		slidesToScroll:1,
		infinite: true,
		autoplay: true,
		autoplaySpeed : 3000,
		prevArrow:$('.card_ctrl_prev'),
		nextArrow:$('.card_ctrl_next'),
		responsive: [ // 반응형 웹 구현 옵션
					{ 
						breakpoint: 1024, //화면 사이즈 480px
						settings: {	
							slidesToShow:3
						} 
					},
					{ 
						breakpoint: 768, //화면 사이즈 480px
						settings: {	
							slidesToShow:2
						} 
					},
					{ 
						breakpoint: 480, //화면 사이즈 480px
						settings: {	
							slidesToShow:1
						} 
					}
				]
	});
	
	$(".card_ctrl_stop").on("click", function() {
		$(".slide01").slick("slickPause");
		$(".card_ctrl_play").css("display","");
		$(this).css("display","none");
		sliderFocus(this);
	});
	
	$(".card_ctrl_play").on("click", function() {
		$(".slide01").slick("slickPlay");
		$(".card_ctrl_stop").css("display","");
		$(this).css("display","none");
		sliderFocus(this);
	});

	$('.slide01').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){ 
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.slide01_ctrl > .total').html("<span class='current'>"+i+"</span> / <span>"+slick.slideCount+"</span>");
		});

// function setSlideCounter01(slide01, slide01_ctrl) {
//     $('.slide01').on('init reInit afterChange', function(event, slick, currentSlide){
//         var i = (currentSlide ? currentSlide : 0) + 1;
//         $('.slide01_ctrl .total').html(
//             "<span class='pop_paging current'>" + i + "</span> / <span>" + slick.slideCount + "</span>"
//         );
//     });
// }
// // slide01 적용
// setSlideCounter01('.slide01', '.slide01_ctrl');

	// 민원서비스 슬라이드
	$(".slide02").slick({	
		row: 1,		
		speed:700,			
		slidesToShow:5,
		slidesToScroll:1,
		infinite: true,
		autoplay: true,
		autoplaySpeed : 3000,
		prevArrow:$('.service_ctrl_prev'),
		nextArrow:$('.service_ctrl_next'),
		responsive: [ // 반응형 웹 구현 옵션
					{  
						breakpoint: 1400, //화면 사이즈 960px
						settings: {
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:4
						} 
					},
					{  
						breakpoint: 1024, //화면 사이즈 960px
						settings: {
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:5
						} 
					},
					{ 
						breakpoint: 768, //화면 사이즈 768px
						settings: {	
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:4
						} 
					},
					{ 
						breakpoint: 480, //화면 사이즈 768px
						settings: {	
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:3
						} 
					}
				]
	});
	$(".service_ctrl_stop").on("click", function() {
		$(".slide02").slick("slickPause");
		$(".service_ctrl_play").css("display","");
		$(this).css("display","none");
		sliderFocus(this);
	});
	
	$(".service_ctrl_play").on("click", function() {
		$(".slide02").slick("slickPlay");
		$(".service_ctrl_stop").css("display","");
		$(this).css("display","none");
		sliderFocus(this);
	});

	// 팝업존 슬라이드
	$(".slide03").slick({	
		row: 1,		
		speed:700,			
		slidesToShow:1,
		slidesToScroll:1,
		infinite: true,
		autoplay: true,
		autoplaySpeed : 3000,
		prevArrow:$('.pop_ctrl_prev'),
		nextArrow:$('.pop_ctrl_next'),
	});
	$(".pop_ctrl_stop").on("click", function() {
		$(".slide03").slick("slickPause");
		$(".pop_ctrl_play").css("display","");
		$(this).css("display","none");
		sliderFocus(this);
	});
	
	$(".pop_ctrl_play").on("click", function() {
		$(".slide03").slick("slickPlay");
		$(".pop_ctrl_stop").css("display","");
		$(this).css("display","none");
		sliderFocus(this);
	});
	
	
	$('.slide03').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){ 
		var i = (currentSlide ? currentSlide : 0) + 1;
		$('.slide03_ctrl > .total').html("<span class='current'>"+i+"</span> / <span>"+slick.slideCount+"</span>");
		});

// 	function setSlideCounter03(slide03, slide03_ctrl) {
// 			$('.slide03').on('init reInit afterChange', function(event, slick, currentSlide){
// 					var i = (currentSlide ? currentSlide : 0) + 1;
// 					$('.slide03_ctrl .total').html(
// 							"<span class='pop_paging current'>" + i + "</span> / <span>" + slick.slideCount + "</span>"
// 					);
// 			});
// 	}

// // slide03 적용
// setSlideCounter03('.slide03', '.slide03_ctrl');

})

$(document).ready(function(){

	// 게시판 탭
	$(".tabs01 > button").click(function(){
		var idx = $(this).index();
		$(".tabs01 > button").removeClass("active");
		$(this).addClass("active");
		$(".tabs01_conts > .tabs01_cont").removeClass("active");
		$(".tabs01_conts > .tabs01_cont").eq(idx).addClass("active");
	})

})

$(document).ready(function(){

	// 미디어 홍보관 탭
	$(".tabs02 > button").click(function(){
		var idx = $(this).index();
		$(".tabs02 > button").removeClass("active");
		$(this).addClass("active");
		$(".tabs02_conts > .tabs02_cont").removeClass("active");
		$(".tabs02_conts > .tabs02_cont").eq(idx).addClass("active");
	})

})

$(document).ready(function(){

	// 도내소방서
	$(".map_name_group > .map_name").mouseenter(function(){
		var idx = $(this).index();
		$(".map_name_group > .map_name").removeClass("active");
		$(".gnmap .map_box").removeClass("active");
		$(".gnmap .map_box").eq(idx).addClass("active");
		$(this).addClass("active");
	})
	$(".gnmap .map_box").mouseenter(function(){
		var idx = $(this).parent('g').index();
		$(".gnmap .map_box").removeClass("active");
		$(".map_name_group > .map_name").removeClass("active");
		$(".map_name_group > .map_name").eq(idx).addClass("active");
		$(this).addClass("active");
	})
	$(".gnmap .map_box").mouseleave(function(){
		$(".gnmap .map_box").removeClass("active");
		$(".map_name_group > .map_name").removeClass("active");
	})
	$(".map_name_group > .map_name").mouseleave(function(){
		$(".gnmap .map_box").removeClass("active");
		$(".map_name_group > .map_name").removeClass("active");
	})

})

//배너존
$(document).ready(function(){		
	var param = "#mbanner";
	var obj = ".obj>li";
	var btn = param+" .control";
	var interval = 4000;
	var speed = 600;
	var viewSize = 1;
	var moreSize = 0;
	var dir = "x";
	var data = 0;
	var auto = true;
	var hover = false;
	var method = "easeInOutCubic";
	var op1 = false;
	stateScrollObj(param,obj,btn,interval,speed,viewSize,moreSize,dir,data,auto,hover,method,op1);		
});
//민원서비스
$(document).ready(function(){		
	var param = "#mlink";
	var obj = ".obj>li";
	var btn = param+" .control";
	var interval = 5000; 
	var speed = 0;
	var viewSize = 1;
	var moreSize = 0;
	var dir = "x";
	var data = 0;
	var auto = true;
	var hover = false;
	var method = "easeInOutCubic";
	var op1 = false;		 
	stateScrollObj(param,obj,btn,interval,speed,viewSize,moreSize,dir,data,auto,hover,method,op1);
});

//팝업 쿠키 저장
function setCookie(cookieName, value){
 var exdays = 1;
 var exdate = new Date();
 var day = exdate.getDate() * 1;
 exdate.setDate(day + exdays);
 var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
 document.cookie = cookieName + "=" + cookieValue;
}

//쿠키조회
function getCookie(cookieName) {
 cookieName = cookieName + '=';
 var cookieData = document.cookie;
 var start = cookieData.indexOf(cookieName);
 var cookieValue = '';
 if(start != -1){
     start += cookieName.length;
     var end = cookieData.indexOf(';', start);
     if(end == -1)end = cookieData.length;
     cookieValue = cookieData.substring(start, end);
 }
 return unescape(cookieValue);
}

//팝업 닫기(쿠키설정)
$(document).on('click', '.popupCookieSet', function() {
	var popValue = $(this).attr("data-seq");
	var cookieNM = "popCookie"+popValue;
	
	setCookie(cookieNM, "hide", "1");
	$("#popupNormal"+popValue).parent().hide();
});

//팝업(동영상타입-7일) 닫기(쿠키설정)
$(document).on('click', '.popupVideoCookieSet', function() {
	var popValue = $(this).attr("data-seq");
	var cookieNM = "popCookie"+popValue;
	
	setCookie(cookieNM, "hide", "7");
	$("#popupNormal"+popValue).parent().hide();
});

//이미지맵
;(function($) {
	$.fn.rwdImageMaps = function() {
		var $img = this;
		
		var rwdImageMap = function() {
			$img.each(function() {
				if (typeof($(this).attr('usemap')) == 'undefined')
					return;
				
				var that = this,
					$that = $(that);
				
				// Since WebKit doesn't know the height until after the image has loaded, perform everything in an onload copy
				$('<img />').load(function() {
					var attrW = 'width',
						attrH = 'height',
						w = $that.attr(attrW),
						h = $that.attr(attrH);
					
					if (!w || !h) {
						var temp = new Image();
						temp.src = $that.attr('src');
						if (!w)
							w = temp.width;
						if (!h)
							h = temp.height;
					}
					
					var wPercent = $that.width()/100,
						hPercent = $that.height()/100,
						map = $that.attr('usemap').replace('#', ''),
						c = 'coords';
					
					$('map[name="' + map + '"]').find('area').each(function() {
						var $this = $(this);
						if (!$this.data(c))
							$this.data(c, $this.attr(c));
						
						var coords = $this.data(c).split(','),
							coordsPercent = new Array(coords.length);
						
						for (var i = 0; i < coordsPercent.length; ++i) {
							if (i % 2 === 0)
								coordsPercent[i] = parseInt(((coords[i]/w)*100)*wPercent);
							else
								coordsPercent[i] = parseInt(((coords[i]/h)*100)*hPercent);
						}
						$this.attr(c, coordsPercent.toString());
					});
				}).attr('src', $that.attr('src'));
			});
		};
		$(window).resize(rwdImageMap).trigger('resize');
		
		return this;
	};
})(jQuery);