$(function(){
	lang();
	langTM();
    // GNB();
    // LNB();
    // subTab();
    mGNB();
    footer();
    pageUtil();  
    Site();
});

/* 유틸메뉴_언어선택 */
function lang(){
    $('.lang button').click(function() {
        $(this).next().slideToggle(300);
    });
};

function langTM(){
    $('.langTM button').click(function() {
        $(this).next().slideToggle(300);
    });
};

//GNB
// function GNB(){
//     var $gnb = $("#gnb");
//     var $header = $("#header");
//     var speed = 400;

//     $gnb.find("li h2 a").focus(function(ev){
//         var winW = $(window).width();
//         if( winW > 1019){
//             ev.preventDefault();
//             gnbMotion();
//         }
//     });
    
//     $gnb.find("li h2 a").click(function(ev){
//         var winW = $(window).width();
//         if( winW < 1019){
//             ev.preventDefault();
//             $(this).parent().next().slideToggle(speed).parent().siblings().children('div').slideUp(speed);
//             return false;
//         }
//     });

//     $gnb.find("li h2 a").focus(function(){
//         if($(window).width() > 1019){
//             gnbMotion();
//         }
//     }).hover(function() {
//         if($(window).width() > 1019){
//             gnbMotion();
//         }
//     },function() {

//     },300);

//     $('#header a').blur(function() {
//         if($(window).width() > 1019){
//             setTimeout(function(){
//                 if( !$('#header a').is(':focus') ) {
//                     gnbReturn();
//                 }
//             },10);
//         }
//     });

//     $('#header .temp').mouseleave(function() {
//         if($(window).width() > 1019){
//             gnbReturn();
//         }
//     });

//     $gnb.find('>li').hover(function() {
//         if($(window).width() > 1019){
//            $(this).addClass('over').siblings().removeClass('over');
//         }
//     });

//     $("#gnbClose").bind("click", function(){
//         if($(window).width() > 1019){
//             gnbReturn();
//         }
//         return false;
//     });

//     //리사이즈 초기화
//     $(window).resize(function(){
//         $('.ulWrap').removeAttr('style');
//         $header.removeAttr('style');
//         $('.gnb_wrap').removeAttr('style');
//         $header.find(">.temp").removeAttr('style');
//         $(".headerWrap .gnb li .ulWrap, .headerWrap .adbox").hide();
//         $("#gnbClose").hide();
//         $("#floatLink").removeAttr('style');
//         //$("#menu nav").removeAttr('style');
//         $("#menu h2").removeClass('on');
//         $(".inSub > ul").removeAttr('style');
//     });

// }

function gnbMotion(){
    var speed = 400;

    $('#header').addClass("gnb_bg")
    $('#header').animate({"height":"680px"},speed);/*<!-- 메인네비123123 하위메뉴 높이값 -->*/
    $('#header').find(">.temp").animate({"height":"680px"},speed);
    $(".headerWrap .gnb li .ulWrap, .headerWrap .adbox").show();
    $("#gnbClose").show();
}

function gnbReturn(){
    var speed = 400;

    $('#header').removeClass("gnb_bg")
    $("#gnbClose").hide();
    $('#header').animate({"height":"140px"},speed,function(){$(this).removeAttr('style');});
    $('#header').find(">.temp").animate({"height":"140px"},speed,function(){$(this).removeAttr('style');});
    $(".headerWrap .gnb li .ulWrap, .headerWrap .adbox").hide();
}

function LNB(){
     var $lnb = $(".lnb");
     var lnbLink = $('.lnb a');
     var current = $.trim($('.location strong').text());

     if($lnb.size() > 0){

        lnbLink.each(function() {
            if ( $(this).text() == current ) {
                $(this).parent().addClass('on');

                if ( $(this).parent().parent().hasClass('subLnb')) {
                    $(this).parents('.subLnb').parent().addClass('on').children("ul").slideDown(500);;
                }
            }
        });

        var $on = $lnb.find(">li.on");
        var idx = $on.index();

        if($(window).width() <= 1019){
            $('#menu nav').show().delay(1000).slideUp(500,function(){
                $(this).removeAttr('style');
            });
        }

        $('#menu h1').click(function(){
            if($(window).width() <= 1019){
                $(this).toggleClass('on').next().slideToggle(500);
            }
        });

        $lnb.find(">li>a").bind('click',function(){
            if( $(this).siblings("ul").size() > 0 ){
               $(this).next('ul').slideToggle(500).parent().addClass("on").siblings("li").removeClass("").children('ul').slideUp(500);
               return false;
            }
        });

        if(idx >= 0){
            $('#menu').mouseleave(function(){
                if($(window).width() > 1019){
                    $('.lnb').children('li').eq(idx).addClass('on').children('ul').slideDown(500).parent().siblings('li').removeClass('on').children('ul').slideUp(500);
                }
            });
        }

        $('.lnb').blur(function(){
            if($(window).width() > 1019){
                $('.lnb').children('li').eq(idx).addClass('on').children('ul').slideDown(500).parent().siblings('li').removeClass('on').children('ul').slideUp(500);
            }
        });
    }
}


$(function(){
    $("#groupBtn > a").bind("click", function(){
        if( $(this).parent().hasClass("active") ){
            $(this).parent().removeClass("active").next("ul").slideUp("slow");
        }else{
            $(this).parent().addClass("active").next("ul").slideDown();
        }
        return false;
    });
});

$(function(){
        var nowSiteSize = $(window).width();
    //console.log('nowSiteSize__'+nowSiteSize);
        if(nowSiteSize >= 1280 ){
            
            pcVer();
        } else { 
            mobileVer();
            $('html, body').css({'overflow': 'auto'});

        }
    $(window).resize(function () { 
        var siteSize = $(window).width();
        console.log(siteSize);
        if(siteSize >= 1280 ){
            //$(".sideGnb").hide();
            pcVer();
        } else { 
        
                mobileVer();
            
    
        }
    });
    
    function pcVer() {
        $("#gnb").addClass("pcGnb");
        $("#gnb").removeClass("mobileGnb");
    }
    function mobileVer() {
            $("#gnb").addClass("mobileGnb");
            $("#gnb").removeClass("pcGnb");
	}
});


    /* 상단메뉴 */
    $(function(){
        $('.pcGnb > li > a').bind("mouseenter  focus",function(){
            var index = $('.pcGnb > li > a').index(this);
            $('#header').addClass("gnb_bg");
            $('.lnb_bg').stop().slideDown();
            $('.pcGnb > li').removeClass('on');
            $(this).parent('.pcGnb > li').addClass('on');
            $(this).parent('.pcGnb > li').children('.ulWrap').stop().slideDown();
        });

        $('.pcGnb > li').bind("mouseleave",function(){
            var index = $('.pcGnb > li > a').index(this);
            $('#header').removeClass('gnb_bg');
            $('.pcGnb > li').removeClass('on');
            $('.ulWrap').stop().slideUp();
            $('.lnb_bg').stop().slideUp();
        });

        
        $('.mobileGnb > li > a').bind("click",function(){
            var index = $('.pcGnb > li > a').index(this);
            // $(this).parent('li').siblings('li').children('.ulWrap').show();
            // $(this).parent('li').children('.ulWrap').hide();

			if($(this).next(".ulWrap").css("display") == "none") {
				$(".ulWrap").hide();
				$(this).next(".ulWrap").stop().slideDown();
				
			} else { 
				$(".ulWrap").stop().slideUp();
			}
			

			return false;
        });

        


    })


//MENU 슬라이딩
function mGNB(){
    var $open = false;
    var $open2 = false;

    $("#mGnb").bind("click", function(){
        if($open != false){
            $('#header').removeClass("gnb_bg")
            if($(window).width() > 680){
                $('#mGnb').removeClass("close")
                $('#mGnb').addClass("allmenu")
                $(this).parents(".gnb_wrap").stop(true).animate({"left":"-400px"}, 600, 'easeOutExpo');
                $open = false;
            }else{
                $('#mGnb').removeClass("close")
                $('#mGnb').addClass("allmenu")
                $(this).parents(".gnb_wrap").stop(true).animate({"left":"-300px"}, 600, 'easeOutExpo');
                $open = false;
            }
        }else{
            $('#header').addClass("gnb_bg")
            $('#mGnb').removeClass("allmenu")
            $('#mGnb').addClass("close")
            $(this).parents(".gnb_wrap").stop(true).animate({"left":"0px"}, 600, 'easeOutExpo');
            $open = true;
        }
        return false;
    });
    $("#mLnb").bind("click", function(){
        if($open2 != false){
            $(this).parents("#menu").stop(true).animate({"left":"-400px"}, 600, 'easeOutExpo');
            $open2 = false;
        }else{
            $(this).parents("#menu").stop(true).animate({"left":"0px"}, 600, 'easeOutExpo');
            $open2 = true;
        }
        return false;
    });
    $(window).resize(function(){
        $('#menu nav').removeAttr('style');
        $('#menu h1').removeClass('on');
    });
};







//푸터슬라이딩박스
function footer(){
    $('.footBtn button, .footer_link button').click(function() {
        $(this).next().slideToggle(300);
    });
};

function subTab(){
  $("#sixTab a").click(function(){
      var _href = $(this).attr('href');
      var _class = $(_href).attr('class');
      $(this).parent().addClass('on').siblings().removeClass('on');
      $(_href).show().siblings('.'+ _class).hide();
      return false;
  });
};

//푸터 사이트링크
function Site(){
    $('.siteLink .site_list h2').click(function() {
        if($(this).next('ul').css("display") == "none"){
            $('.site_list > ul').slideUp(300);
            $(this).next('ul').slideDown(300);
        }else{
            $(this).next('ul').slideUp(300);
        }
    });
};

function pageUtil() {
    var settings = {
            button      : '#toTop',
            text        : '컨텐츠 상단으로 이동',
            min         : 100,
            fadeIn      : 400,
            fadeOut     : 400,
            scrollSpeed : 1019,
            easingType  : 'easeInOutExpo'
        },
        oldiOS     = false,
        oldAndroid = false;

    if( /(iPhone|iPod|iPad)\sOS\s[0-4][_\d]+/i.test(navigator.userAgent) ) { oldiOS = true; }
    if( /Android\s+([0-2][\.\d]+)/i.test(navigator.userAgent) ) { oldAndroid = true; }
    $('body').append('<a href="#" id="' + settings.button.substring(1) + '" title="' + settings.text + '">' + settings.text + '</a>');
    $( settings.button ).on('click', function( e ){
        $('html, body').animate({ scrollTop : 0 }, settings.scrollSpeed, settings.easingType );
        e.preventDefault();
    })
    .on('mouseenter', function() {
        $( settings.button ).addClass('hover');
    })
    .on('mouseleave', function() {
        $( settings.button ).removeClass('hover');
    });

    $(window).scroll(function() {
        var position = $(window).scrollTop();
        if( oldiOS || oldAndroid ) {
            $( settings.button ).css({
                'position' : 'absolute',
                'top'      : position + $(window).height()
            });
        }
        if ( position > settings.min ) { $( settings.button ).fadeIn( settings.fadeIn );  }
        else { $( settings.button ).fadeOut( settings.fadeOut );  }
    });
}

// 상단 검색		
$(document).ready(function(){
	
	var TOPSEARCH = (function(){
		var $target = $('.box_search_2'),
			$layer = $('.box_search_2_1'),
			$btn = $('.box_search_1 .btn_search a');
		$btn.bind('click',function(){
			if ($target.hasClass('on')){
				hideSearch();
			} else {
				$target.addClass('on').css('display','block');
				$layer.stop().animate({ right : '0' },300,'easeInQuad');
			}
			return false;
		});
		$('.box_search_dim a').bind('click blur',function(){
			hideSearch();
			return false;
		});
		$(".box_search_2").click(function(e){
			var event = e || window.event;
			event.cancelBubble = true;
			if (event.stopPropagation){
				event.stopPropagation();
			}
		});
		$('body').click(function(){
			if ($target.is(':visible')){
				hideSearch();
			};
		});
		$('.box_search_2 button').bind('blur',function(){
			hideSearch();
		});
		function hideSearch(){
			$target.css('display','block');
			$layer.animate({ right : '-720px' },300,'easeInQuad',function(){
				$target.removeClass('on').css('display','none');
			});
		};
		// html5 input placeholder - ie7,8용
		if (!("placeholder" in document.createElement("input"))) {
			jQuery(':input[placeholder]').each(function(){
				var $this = jQuery(this),
					$val = $this.val(),
					$ph = jQuery(this).attr('placeholder'),
					$parent = jQuery(this).parent(),
					$span_txt;
				if ($this.val() == ''){
					$this.wrap('<p>');
					jQuery('<span class=\"span_placeholder\">' + $ph + '</span>').insertAfter($this).css({ position : 'absolute' , top : '14px' , left : '12px' , color : '#666' , fontSize : '12px' }).bind( 'click', function(){
						$this.focus();
					});
					jQuery(this).bind('focus blur',function(e){
						if (e.type == "focus"){
							$this.next().css('display','none');
						} else if (e.type == "blur" && $this.val() == ''){
							$this.next().css('display','block');
						}
					});
				}
			})
		};
	}());

});

/* 메뉴 박스*/
$(function(){
	openList();
	recruitList();
});

function openList(){
	$('.openInfo ul li > a.menu_go').off('click');
	$('.openInfo ul li > a.menu_go').on('click' , function(){
		var title = $(this).parent('li');
		if (title.hasClass('on')){
			$(".openInfo ul li").removeClass("on");
		} else {
			title.addClass("on");
			$(".openInfo ul li").not(title).removeClass("on");
		}
	});
	$('.openInfo .btn_close').click(function() {
        $(".openInfo ul li").removeClass("on");
    });
	
}
function recruitList(){
	$('.recruit ul li > a.menu_go').off('click');
	$('.recruit ul li > a.menu_go').on('click' , function(){
		var title = $(this).parent('li');
		if (title.hasClass('on')){
			$(".recruit ul li").removeClass("on");
		} else {
			title.addClass("on");
			$(".recruit ul li").not(title).removeClass("on");
		}
	});
	$('.recruit .btn_close').click(function() {
        $(".recruit ul li").removeClass("on");
    });
	
}

/* function valueEmpty */
jQuery.fn.valueEmpty = function() {
    if (jQuery.trim(jQuery(this).val()).length < 1 ) {
        return true;
    } else {
        return false;
    }
};


/* function number and comma */
function numComma(data){
	if (jQuery.trim(data).length > 3 ) {
    	var returnValue = "";
        var commaValue = ""+data;
        for(idx=commaValue.length-1,chk=0;idx>=0;idx--,chk++){
        	if(chk == 3){
        		chk=0;
        		returnValue = commaValue.substr(idx,1) + "," + returnValue;
        	} else {
        		returnValue = commaValue.substr(idx,1) + returnValue;
        	}
        }
        return returnValue;
    } else {
        return data;
    }
}

$(function () {
	/* function onlyNumber */
	$(".onylNum").change(function(){
		$(this).val($(this).val().replace(/[^0-9]/g,""));
	});
})

//파일 다운로드
function mfn_fileDownload(fileKey){
	if(fileKey != "" || fileKey == null){
		var sqlId = "cmm_file.fileInfo";
		location.href="/common/fileDownload.do?fileKey="+fileKey+"&sqlId="+sqlId;	
	}
};

function goDiquestSearch(ty){
	var searchTxt = "";
	
	if(ty == "01") {
		searchTxt = $("#topSearch_1").val();
	} else if(ty == "02") {
		searchTxt = $("#topSearch_2").val();
	} else {
		alert("잘못된 접근입니다.")
		return;
	}
	
	if(searchTxt == "") {
		alert("검색어를 입력하세요.")
		return;
	}
	
	searchTxt = encodeURI( searchTxt ) ;

	window.open("http://www.gyeongnam.go.kr/index.gyeong?menuCd=DOM_000000106007016000&searchTerm="+searchTxt,"_blank");
};


				// 배너존
				$(function(){
					$('.bnrList').slick({
						autoplay : true,
						autoplaySpeed : 3000,
						slidesToShow: 5,
						dots : false,
						prevArrow: $('.bnrCtrl .prev'),
						nextArrow: $('.bnrCtrl .next'),
						responsive: [
							{
								breakpoint: 1280,
								settings: {
									slidesToShow: 5,
									slidesToScroll: 5
								}
							},
							{
								breakpoint: 980,
								settings: {
									slidesToShow: 4,
									slidesToScroll: 4
								}
							},
							{
								breakpoint: 680,
								settings: {
									slidesToShow: 2,
									slidesToScroll: 2
								}
							}
						]
					});
					$('.bnrCtrl .stop').click(function() {
						$('.bnrList').slick('slickPause');
						$(this).parent().next().children('a').addClass('on');
						$(this).removeClass('on');
					});
					$('.bnrCtrl .play').click(function() {
						$('.bnrList').slick('slickPlay');
						$(this).parent().prev().children('a').addClass('on');
						$(this).removeClass('on');
					});
				});

/* 검색박스 여닫기 */
    $(function(){
        $('.search_box .btn_open').click(function(){
            $('.box_search_0').addClass("active");
        })
        $('.search_box .btn_close').click(function(){
            $('.box_search_0').removeClass("active");
        })
    })