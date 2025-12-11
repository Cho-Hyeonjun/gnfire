

/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.8.4
 *
 */
(function(a,b,c,d){var e=a(b);a.fn.lazyload=function(c){function i(){var b=0;f.each(function(){var c=a(this);if(h.skip_invisible&&!c.is(":visible"))return;if(!a.abovethetop(this,h)&&!a.leftofbegin(this,h))if(!a.belowthefold(this,h)&&!a.rightoffold(this,h))c.trigger("appear"),b=0;else if(++b>h.failure_limit)return!1})}var f=this,g,h={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null};return c&&(d!==c.failurelimit&&(c.failure_limit=c.failurelimit,delete c.failurelimit),d!==c.effectspeed&&(c.effect_speed=c.effectspeed,delete c.effectspeed),a.extend(h,c)),g=h.container===d||h.container===b?e:a(h.container),0===h.event.indexOf("scroll")&&g.bind(h.event,function(a){return i()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,c.one("appear",function(){if(!this.loaded){if(h.appear){var d=f.length;h.appear.call(b,d,h)}a("<img />").bind("load",function(){c.hide().attr("src",c.data(h.data_attribute))[h.effect](h.effect_speed),b.loaded=!0;var d=a.grep(f,function(a){return!a.loaded});f=a(d);if(h.load){var e=f.length;h.load.call(b,e,h)}}).attr("src",c.data(h.data_attribute))}}),0!==h.event.indexOf("scroll")&&c.bind(h.event,function(a){b.loaded||c.trigger("appear")})}),e.bind("resize",function(a){i()}),/iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent.persisted&&f.each(function(){a(this).trigger("appear")})}),a(b).load(function(){i()}),this},a.belowthefold=function(c,f){var g;return f.container===d||f.container===b?g=e.height()+e.scrollTop():g=a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return f.container===d||f.container===b?g=e.width()+e.scrollLeft():g=a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return f.container===d||f.container===b?g=e.scrollTop():g=a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return f.container===d||f.container===b?g=e.scrollLeft():g=a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!a.rightoffold(b,c)&&!a.leftofbegin(b,c)&&!a.belowthefold(b,c)&&!a.abovethetop(b,c)},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})})(jQuery,window,document)

/*
 * 스크롤바에 디자인을 입히기 위한 대체 스크립트 Alternate script for scrollbar design Info -
 * http://www.psyonline.kr/1330044766 Demo -
 * http://www.psyonline.kr/plugin/fakescroll/demo.html
 */
var fakescroll=function(){var g={defaultoption:{scrollsize:100,scrollsizefix:0,scrollsizelock:!1,tracksize:0,outsidetrack:null,barsize:"auto",barminsize:20,trackhtml:"",barhtml:"",animate:!0,hide:!1,nointeract:!1,useswipe:!0,directionlock:!0,disable:!1,blockparentscroll:!1,tag:"div",usetransform:"translate3d"},cssclass:{content:"scroll-content",neutralzone:"scroll-neutralzone",x:["scroll-track scroll-track-x","scroll-bar scroll-bar-x","scroll-arrow scroll-arrow-left","scroll-arrow scroll-arrow-right",
"scroll-content-x"],y:["scroll-track scroll-track-y","scroll-bar scroll-bar-y","scroll-arrow scroll-arrow-up","scroll-arrow scroll-arrow-down","scroll-content-y"],iosmode:"ios"},items:[],set:function(a,c,b){var e,h,f,d,l,k,m=g.defaultoption,n=g.cssclass,r=g.items,t=g.handle,p=g.createtag,q=g.scrollbar,s=g.style,w=g.findelement,u=g.remove;l=g.browser;var v=!1;a=w(a);if(!a)return null;e=0;for(f=r.length;e<f;e++)if(r[e]&&r[e].target==a){r[e]=u(r[e]);break}a.scrollTop=0;a.scrollLeft=0;a.style.overflow=
"hidden";"static"==s.get(a,"position")&&s.set(a,"position","relative");"none"==s.get(a,"display")&&(s.set(a,"display","block"),v=!0);c=c||{};k=c.tag||m.tag;d={id:r.length,target:a,animate:void 0!=c.animate?c.animate:m.animate,useswipe:void 0!=c.useswipe?c.useswipe:m.useswipe,directionlock:void 0!=c.directionlock?c.directionlock:m.directionlock,slidermode:c.slidermode,wcp:["marginLeft","marginTop"]};(e=void 0!=c.usetransform?c.usetransform:m.usetransform)&&(l.support.transform&&(l.support.translate3d||
l.support.translate))&&(d.wcp=l.support.translate3d&&"translate3d"==e?["tx3d","ty3d"]:["tx","ty"]);d.handle={start:function(a){t.start(d,this,a)},end:function(a){t.end(d,a)},barmove:function(a){t.barmove(d,a)},wheel:function(a){t.wheel(d,a)},swipe:function(a){t.swipe(d,a)},swipeend:function(a){t.swipeend(d,a)},killautoscroll:function(a){g.killautoscroll(d)}};d.wrapper=p(d,k,n.content,"wrapper");l=a.childNodes;e=0;for(f=l.length;e<f;e++)d.wrapper.appendChild(l[e]),f--,e--;a.appendChild(d.wrapper);
l=d.wrapper.getElementsByTagName("*");e=0;for(f=l.length;e<f;e++)g.event.add(l[e],"focus",function(){var a=this;setTimeout(function(){d.target.scrollTop=0;d.scrollTo(a)},0)});l=["left","right","up","down"];for(e=0;2>e;e++)if(f=e?"y":"x",d[f]={},c[f]=c[f]||{},c.disable||c[f].disable)d[f].disable=!0,d[f].blockparentscroll=c[f].blockparentscroll||c.blockparentscroll||m.blockparentscroll;else{for(h in m)"animate"!=h&&("useswipe"!=h&&"tag"!=h&&"usetransform"!=h&&"directionlock"!=h)&&(d[f][h]=c[f][h]||
c[h]||m[h]);d[f].now=0;d[f].to=0;d[f].nowpage=0;d[f].totalpage=1;d[f].scrollsizelock&&(d[f].scrollsizefix?d[f].scrollsize=d[f].scrollsizefix:d[f].scrollsizefix=d[f].scrollsize);if(!d[f].hide){d[f].outsidetrack=w(d[f].outsidetrack);d[f].tracksizefix=!1;d[f].tracksize&&("number"==typeof d[f].tracksize?d[f].tracksizefix=!0:"string"==typeof d[f].tracksize&&(/^(\-|\+)[1-9]/.test(d[f].tracksize)?d[f].tracksize=parseInt(d[f].tracksize):d[f].tracksize=0));d[f].track=p(d,k,n[f][0],"track-"+f,f);d[f].trackhtml&&
(d[f].track.innerHTML=d[f].trackhtml);d[f].nointeract&&(d[f].track.style.pointerEvents="none");d[f].bar=p(d,k,n[f][1],"bar-"+f,f);d[f].barhtml&&(d[f].bar.innerHTML=d[f].barhtml);d[f].track.appendChild(d[f].bar);d[f].trackcontainer=d[f].outsidetrack||a;d[f].trackcontainer.appendChild(d[f].track);"static"==s.get(d[f].trackcontainer,"position")&&s.set(d[f].trackcontainer,"position","relative");d[f].arrowsize=[0,0];if(!d.slidermode)if(d[f].arrow=[p(d,k,n[f][2],"arrow-"+l[2*e],f),p(d,k,n[f][3],"arrow-"+
l[2*e+1],f)],d[f].track.appendChild(d[f].arrow[0]),d[f].track.appendChild(d[f].arrow[1]),d[f].arrow[0].offsetWidth){if("x"==f)for(h=0;2>h;h++)d[f].arrowsize[h]=d[f].arrow[h].offsetWidth+s.get(d[f].arrow[h],"marginLeft")+s.get(d[f].arrow[h],"marginRight");else for(h=0;2>h;h++)d[f].arrowsize[h]=d[f].arrow[h].offsetHeight+s.get(d[f].arrow[h],"marginTop")+s.get(d[f].arrow[h],"marginBottom");d[f].arrowsize[3]=d[f].arrowsize[0]+d[f].arrowsize[1]}else d[f].track.removeChild(d[f].arrow[0]),d[f].track.removeChild(d[f].arrow[1]),
d[f].arrow=null;"x"==f?(d[f].bar.style.width=0,d[f].bsizem=d[f].bar.offsetWidth):(d[f].bar.style.height=0,d[f].bsizem=d[f].bar.offsetHeight)}}if(d.x.disable&&d.y.disable)return u(d);d.x.hide||(d.y.hide||d.x.disable||d.y.disable||d.x.tracksizefix||d.y.tracksizefix||d.x.trackcontainer!=d.y.trackcontainer)||(d.neutralzone=p(d,k,n.neutralzone,"neutralzone"),d.x.trackcontainer.appendChild(d.neutralzone));d.reset=q.reset;d.remove=q.remove;d.scrollLeft=q.scrollLeft;d.scrollTop=q.scrollTop;d.scrollTo=q.scrollTo;
d.pageLeft=q.pageLeft;d.pageTop=q.pageTop;d.pageTo=q.pageTo;d.scrollWidth=q.scrollWidth;d.scrollHeight=q.scrollHeight;d.maxScrollLeft=q.maxScrollLeft;d.maxScrollTop=q.maxScrollTop;d.stop=q.stop;d.cancelSwipe=q.cancelSwipe;d.evs={};d.event={scrollstart:[],scroll:[],scrollend:[],pagechange:[],reset:[],add:function(a,b){return q.event.add(d,a,b)},remove:function(a,b){return q.event.remove(d,a,b)}};d.addEventListener=d.event.add;d.removeEventListener=d.event.remove;delete d.useswipe;r.push(d);return b?
d:g.reset(d,v)},scrollbar:{reset:function(){return g.reset(this)},remove:function(){return g.remove(this)},scrollLeft:function(a,c){return g.scrollLeft(this,a,c)},scrollTop:function(a,c){return g.scrollTop(this,a,c)},scrollTo:function(a,c,b){return g.scrollTo(this,a,c,b)},pageLeft:function(a,c){return g.pageLeft(this,a,c)},pageTop:function(a,c){return g.pageTop(this,a,c)},pageTo:function(a,c,b){return g.pageTo(this,a,c,b)},scrollWidth:function(){return g.scrollWidth(this)},scrollHeight:function(){return g.scrollHeight(this)},
maxScrollLeft:function(){return g.maxScrollLeft(this)},maxScrollTop:function(){return g.maxScrollTop(this)},stop:function(){return g.stop(this,!0)},cancelSwipe:function(){return g.cancelSwipe(this)},event:{add:function(a,c,b){c=c.toLowerCase();a.event[c]&&a.event[c].push(b);return a},remove:function(a,c,b){c=c.toLowerCase();if(a.event[c])for(var e=0,g=a.event[c].length;e<g;e++)a.event[c][e]==b&&(a.event[c].splice(e,1),g--,e--);return a}}},reset:function(a,c){var b,e,h=a.target,f=a.wrapper,d=g.browser,
l=g.style,k=g.classname,m=g.event,n=a.wcp;e=g.cssclass;var r=a.handle,t=a.x,p=a.y,q=["x y width clientWidth offsetWidth scrollWidth".split(" "),"y x height clientHeight offsetHeight scrollHeight".split(" ")];g.stop(a);7==d.ie&&(h.style.overflow="visible",f.style.zoom=0);for(i=0;2>i;i++)b=a[q[i][0]],b.disable||(l.set(f,n[i],0),b.hide||(b.track.style.display="none"),k.remove(f,e[q[i][0]][4]),b.clientsize=h[q[i][3]],b.contentsize=Math.max(h[q[i][5]],f[q[i][4]],f[q[i][5]]),7==d.ie&&f.getElementsByTagName("*").length&&
(b.contentsize=Math.max(b.contentsize,f.getElementsByTagName("*")[0][q[i][4]])),b.show=b.contentsize>b.clientsize,!b.show||(b.outsidetrack||b.hide)||k.add(f,e[q[i][0]][4]));a.neutralzone&&(a.neutralzone.style.display=t.show&&p.show?"block":"none");var s,k=!1;for(i=0;2>i;i++)(b=a[q[i][0]],e=a[q[i][1]],b.show)?(b.contentsize=Math.max(h[q[i][5]],f[q[i][4]],f[q[i][5]]),7==d.ie&&f.getElementsByTagName("*").length&&(b.contentsize=Math.max(b.contentsize,f.getElementsByTagName("*")[0][q[i][4]])),b.ablesize=
b.clientsize-b.contentsize,b.now&&(b.scrollsizefix&&b.nowpage&&(b.now=-b.scrollsizefix*b.nowpage),b.ablesize>b.now&&(b.now=b.ablesize),l.set(f,n[i],b.now)),b.to=b.now,b.scrollsizefix&&(t=Math.round(-b.now/b.scrollsizefix),s=Math.floor(Math.abs(b.ablesize/b.scrollsizefix))+1,t!=b.nowpage||s!=b.totalpage)&&(b.nowpage=t,b.totalpage=s,k=!0),b.hide||(b.tracksizefix?e=b.tracksize:(!b.outsidetrack||e.outsidetrack&&b.outsidetrack==e.outsidetrack?e.show&&b.trackcontainer==e.trackcontainer?(e.track.style.display=
"block",e=b.trackcontainer[q[i][3]]-e.track[q[i][4]]):e=b.trackcontainer[q[i][3]]:e=b.trackcontainer[q[i][3]],e+=b.tracksize),l.set(b.track,q[i][2],Math.max(e,0)),e=b.arrowsize[0]?e-b.arrowsize[3]:e,b.bnowsize="auto"==b.barsize?Math.max(Math.round(e*(b.clientsize/b.contentsize)),b.barminsize):b.barsize,b.bnowsize-=b.bsizem,l.set(b.bar,q[i][2],b.bnowsize),b.bminpos=b.arrowsize[0],b.bmaxpos=b.bminpos+e-b.bnowsize-b.bsizem,g.movebar(a,q[i][0],b.now),b.track.style.display="block")):(b.now=0,b.ablesize=
0);7==d.ie&&(h.style.overflow="hidden",f.style.zoom=1);d.mobile||a.slidermode||(p.show?(m.add(f,"mousewheel",r.wheel),p.hide||m.add(p.track,"mousewheel",r.wheel)):p.disable||(m.remove(f,"mousewheel",r.wheel),p.hide||m.remove(p.track,"mousewheel",r.wheel)));c&&l.set(a.target,"display","none");k&&g.scrollevent.load(a,"pagechange");g.scrollevent.load(a,"reset");return a},scroll:function(a,c,b,e,h,f){var d,l=a.wrapper,k="x"==c||"left"==c||"right"==c?"x":"y",m=a.wcp["x"==k?0:1],n=a[k];!e&&0<b&&(b=Math.round(n.ablesize*
((b-n.bminpos)/(n.bmaxpos-n.bminpos))));c=Math.round(void 0!=b?b:"up"==c||"left"==c?n.to+n.scrollsize:n.to-n.scrollsize);n.scrollsizefix&&(c=Math.round(c/n.scrollsizefix)*n.scrollsizefix);c=0<c?0:c<n.ablesize?n.ablesize:c;n.scrollsizefix&&(d=g.setpage(a,k,c),n.scrollsizelock&&(c=-n.nowpage*n.scrollsizefix));if(f)return[c,d];if(a.slidermode||n.to!=c)d&&g.scrollevent.load(a,"pagechange"),n.to=c,g.ani.stop(l),a.animate&&!h?(h={},h[m]=c,g.handle.animate(a,h,void 0==b||e)):(n.now=c,g.style.set(l,m,c),
(void 0==b||e||0===e)&&g.movebar(a,k,c,!1,h),g.scrollevent.load(a,"ing"))},scrollevent:{load:function(a,c,b){var e=a.event,h=a.evs.scrollstartfired,f=g.scrollevent.fire;"start"==c&&!h&&a.animate?(e.scrollstart.length&&f(a,"scrollstart"),a.evs.scrollstartfired=!0):"ing"==c&&e.scroll.length?f(a,"scroll"):"end"==c?(b&&g.scrollevent.load(a,"ing"),h&&(e.scrollend.length&&f(a,"scrollend"),a.evs.scrollstartfired=!1)):("pagechange"==c||"reset"==c)&&e[c].length&&f(a,c)},fire:function(a,c){for(var b=g.scrollevent.bullet(a,
c),e=a.event[c],h=0,f=e.length;h<f;h++)e[h].call(a,b)},bullet:function(a,c){var b=a.x,e=a.y;return{type:c,scrollLeft:-b.now,scrollTop:-e.now,scrollWidth:Math.max(b.contentsize,b.clientsize)||0,scrollHeight:Math.max(e.contentsize,e.clientsize)||0,pageLeft:b.nowpage||0,pageTop:e.nowpage||0,totalPageLeft:b.totalpage||0,totalPageTop:e.totalpage||0,barLeft:b.bar&&b.bar.offsetLeft||0,barTop:e.bar&&e.bar.offsetTop||0,barWidth:b.bar&&b.bar.offsetWidth||0,barHeight:e.bar&&e.bar.offsetHeight||0}}},autoscroll:function(a,
c,b,e){if(a.slidermode)e||(b=Math.max(b-a[c].bnowsize/2,0)),g.scroll(a,c,b,0);else{var h=a.x,f=a.y;g.killautoscroll(a);g.event.add(document,"mouseup",a.handle.killautoscroll);void 0!=b?c="x"==c?h.bar.offsetLeft+h.bar.offsetWidth>b?"left":"right":f.bar.offsetTop+f.bar.offsetHeight>b?"up":"down":(c=c.match(/arrow-([a-z]+)/)[1],b="up"==c?f.bminpos:"down"==c?f.bmaxpos+f.bar.offsetHeight:"left"==c?h.bminpos:h.bmaxpos+h.bar.offsetWidth);var d=!0,l=function(){"left"==c&&h.bar.offsetLeft<=b||"right"==c&&
h.bar.offsetLeft+h.bar.offsetWidth>=b||"up"==c&&f.bar.offsetTop<=b||"down"==c&&f.bar.offsetTop+f.bar.offsetHeight>=b?g.killautoscroll(a):(g.scroll(a,c),a.evs.astimer=setTimeout(l,d?500:30),d=!1)};l()}},killautoscroll:function(a){clearTimeout(a.evs.astimer);g.event.remove(document,"mouseup",a.handle.killautoscroll)},scrollLeft:function(a,c,b){var e;if(e=g.getoffset(a,c))a.scrollLeft(e[0]);else{if(isNaN(parseInt(c)))return-a.x.now;g.scroll(a,"x",-c,!0,b)}},scrollTop:function(a,c,b){var e;if(e=g.getoffset(a,
c))a.scrollTop(e[1]);else{if(isNaN(parseInt(c)))return-a.y.now;g.scroll(a,"y",-c,!0,b)}},getoffset:function(a,c){var b,e,h,f,d=g.findelement(c);if(d){e=document.body;h=f=0;b=g.style.get(a.wrapper,"position");for(a.wrapper.style.position="relative";d!=a.wrapper&&d!=e;)h+=d.offsetLeft,f+=d.offsetTop,d=d.offsetParent;a.wrapper.style.position=b;return d==e?!1:[h,f]}return!1},scrollTo:function(a,c,b,e){var h,f,d,l,k,m,n=arguments;property={};wrapper=a.wrapper;wcp=a.wcp;for(h=1;3>h;h++)l=(d=g.getoffset(a,
n[h])||d)||!n[h]&&d?d[h-1]:n[h],isNaN(parseInt(l))||(f=2>h?"x":"y",l=g.scroll(a,f,-l,!1,!1,!0),a[f].to!=l[0]&&(k=!0),l[1]&&(m=!0),property[wcp[h-1]]=a[f].to=l[0]);if(k)if(m&&g.scrollevent.load(a,"pagechange"),a.animate&&!e)g.handle.animate(a,property,!0);else{for(h=0;2>h;h++)isNaN(property[wcp[h]])||(f=h?"y":"x",a[f].now=a[f].to=property[wcp[h]],g.style.set(wrapper,wcp[h],property[wcp[h]]),g.movebar(a,f,property[wcp[h]]));g.scrollevent.load(a,"ing")}},pageLeft:function(a,c,b){if(isNaN(c))return a.x.nowpage;
g.scrollLeft(a,c*a.x.scrollsizefix,b)},pageTop:function(a,c,b){if(isNaN(c))return a.y.nowpage;g.scrollTop(a,c*a.y.scrollsizefix,b)},pageTo:function(a,c,b,e){isNaN(c)||isNaN(b)||g.scrollTo(a,c*a.x.scrollsizefix,b*a.y.scrollsizefix,e)},scrollWidth:function(a){return-a.x.contentsize},scrollHeight:function(a){return-a.y.contentsize},maxScrollLeft:function(a){return-a.x.ablesize},maxScrollTop:function(a){return-a.y.ablesize},stop:function(a,c){g.ani.stop(a.wrapper);var b,e,h;for(b=0;2>b;b++)e=b?"y":"x",
h=a[e],h.disable||(h.now=h.to=0<h.now?0:h.ablesize>h.now?h.ablesize:Math.round(h.now),g.style.set(a.wrapper,a.wcp[b],h.now),g.movebar(a,e,h.now,!0));g.eventkiller.killed&&g.eventkiller.leave();if(c)return g.scrollevent.load(a,"end",!0),g.event.remove(document,"mousemove",a.handle.swipe,a.id),g.event.remove(document,"mouseup",a.handle.swipeend,a.id),a},cancelSwipe:function(a){g.event.remove(document,"mousemove",a.handle.swipe,a.id);return a},movebar:function(a,c,b,e,h){var f=a[c];if(f.show&&!f.hide){b=
f.bminpos+(f.bmaxpos-f.bminpos)*(b/f.ablesize);var d="x"==c?"left":"top";e&&(e="x"==c?["offsetHeight","width"]:["offsetWidth","height"],c=f.bnowsize,f.bminpos>b?(c=Math.round(f.bnowsize+4*(b-f.bminpos)),f.bar[e[0]]-f.bsizem>c&&(c=f.bar[e[0]]-f.bsizem),b=f.bminpos):b>f.bmaxpos&&(c=Math.round(f.bnowsize+4*(f.bmaxpos-b)),f.bar[e[0]]-f.bsizem>c&&(c=f.bar[e[0]]-f.bsizem),b=f.bmaxpos+f.bnowsize-c),g.style.set(f.bar,e[1],c));a.slidermode&&!h?(a={},a[d]=b,g.ani.set(f.bar,a,{time:0.5,rounding:!0})):g.style.set(f.bar,
d,b)}},setpage:function(a,c,b){a=a[c];b=Math.round(-b/a.scrollsizefix);b=0>b?0:b>a.totalpage-1?a.totalpage-1:b;return b!=a.nowpage?(a.nowpage=b,!0):!1},handle:{start:function(a,c,b){var e,h=a.evs,f=a.handle,d=g.browser,l=g.event.add;a.slidermode?g.ani.stop(a[a.y.disable?"x":"y"].bar):g.stop(a);h.swdrt=0;e=c.dataset.fsflag;h.target=c;if("wrapper"==e){c=b.target||b.srcElement;e=c.nodeName.toLowerCase();if("input"==e||"select"==e||"textarea"==e){if("input"==e&&"range"==c.type||"select"==e&&!d.mobile&&
d.webkit)return!0;h.fcusel=c}else!d.mobile&&b.preventDefault&&b.preventDefault();h.sweventdead=!1;h.offsetpos=[a.x.now,a.y.now];h.clientpos=h.swbasepos=g.handle.getpoint(b);h.swstime=(new Date).getTime();l(document,"mousemove",f.swipe,a.id);l(document,"mouseup",f.swipeend,a.id);return!0}/track/.test(e)?(c=b.target||b.srcElement,e=e.match(/track-([a-z]+)/)[1],g.autoscroll(a,e,"x"==e?(b.offsetX||b.layerX)+c.offsetLeft:(b.offsetY||b.layerY)+c.offsetTop)):/arrow/.test(e)?g.autoscroll(a,e):("bar-x"==e?
(h.offsetpos=c.offsetLeft,h.clientpos=g.handle.getpoint(b)[0]):(h.offsetpos=c.offsetTop,h.clientpos=g.handle.getpoint(b)[1]),g.classname.add(c,"active"),l(document,"mousemove",f.barmove),l(document,"mouseup",f.end));return g.handle.killevent(b,!0)},end:function(a,c){g.classname.remove(a.evs.target,"active");g.event.remove(document,"mousemove",a.handle.barmove);g.event.remove(document,"mouseup",a.handle.end)},barmove:function(a,c){var b,e=a.evs,h=e.target.dataset.fsflag.match(/bar-(x|y)/)[1],f=a[h],
d="x"==h?"left":"top";b=g.handle.getpoint(c)["x"==h?0:1];e.clientpos!=b&&(b=e.offsetpos-(e.clientpos-b),f.bminpos>b?b=f.bminpos:b>f.bmaxpos&&(b=f.bmaxpos),g.style.set(e.target,d,b),g.scroll(a,h,b));return g.handle.killevent(c)},wheel:function(a,c){var b=c.wheelDelta||c.detail,e=a.y;g.browser.firefox&&(b*=-1);if(!e.blockparentscroll&&(0<b&&0==e.now||0>b&&e.now==e.ablesize))return!0;g.scroll(a,0<b?"up":"down");return g.handle.killevent(c,!0)},swipe:function(a,c){if(a.evs.sweventdead)return!0;var b=
a.evs,e=g.handle,h=e.getpoint(c),f=(new Date).getTime(),d,l,k="marginLeft"==a.wcp[0],m=[],n=[],r=["x","y"];l=a.x;var t=a.y;for(d=0;2>d;d++)m[d]=b.clientpos[d]-h[d],n[d]=b.offsetpos[d]-m[d];if(!b.swdrt&&(Math.abs(m[0])||Math.abs(m[1]))){d=Math.abs(180*Math.atan2(m[0],m[1])/Math.PI);b.swdrt=!l.blockparentscroll||t.disable||l.show&&!l.disable?!t.blockparentscroll||l.disable||t.show&&!t.disable?a.directionlock?45>d||135<d?"y":100>d&&80<d?"x":"f":"f":"x":"y";for(d=0;2>d;d++)if(l=a[r[d]],!l.blockparentscroll&&
b.swdrt==r[d]&&(0>m[d]&&0==l.now||0<m[d]&&l.now==l.ablesize))return d=d?0:1,l=a[r[d]],l.scrollsizefix&&(b={},b[a.wcp[d]]=Math.round(l.now/l.scrollsizefix)*l.scrollsizefix,g.setpage(a,r[d],b[a.wcp[d]]),b[a.wcp[d]]=g.ani.getvalues("",l.now,b[a.wcp[d]],g.ani.fps/2,"easeOutExpo",k),e.animate(a,b,!0,!0,0.5)),e.removeswipehandle(a),!0;b.fcusel&&(b.fcusel.blur(),b.fcusel=null);e.removeswipehandle(a,!0);g.eventkiller.killed||g.browser.mobile||g.eventkiller.call(a.target)}f-300>b.swstime&&(b.swstime=f,b.swbasepos=
h);g.scrollevent.load(a,"start");for(d=0;2>d;d++)l=a[r[d]],!l.show&&!l.blockparentscroll||"f"!=b.swdrt&&b.swdrt!=r[d]||(0<n[d]?n[d]/=2:l.ablesize>n[d]&&(n[d]-=(n[d]-l.ablesize)/2),l.now=l.to=n[d],g.style.set(b.target,a.wcp[d],n[d]),g.movebar(a,r[d],n[d],!0));g.scrollevent.load(a,"ing");return e.killevent(c)},swipeend:function(a,c){var b=a.evs,e=g.handle,h=e.getpoint(c),f={},d,l=(new Date).getTime()-b.swstime,k,m,n,r,t=[],p=[],q=null,s=[],w=!1,u=g.ani.fps,v="marginLeft"==a.wcp[0];for(k=0;2>k;k++){q=
null;m=k?"y":"x";d=a[m];s[k]=b.swbasepos[k]-h[k];if((d.show||d.blockparentscroll)&&(!s[k]&&d.scrollsizefix||"f"==b.swdrt||b.swdrt==m)&&5<Math.abs(s[k]))if(d.scrollsizelock)0<d.now||d.ablesize>d.now?Math.abs(s[k])>d.scrollsizefix&&(t[k]=0<s[k]?d.nowpage+1:d.nowpage-1):300>l&&(t[k]=0<s[k]?d.nowpage+1:d.nowpage-1),void 0==t[k]&&(currentpage=Math.round(-d.now/d.scrollsizefix),t[k]=currentpage>d.nowpage?d.nowpage+1:d.nowpage>currentpage?d.nowpage-1:currentpage),t[k]=0>t[k]?0:t[k]>d.totalpage-1?d.totalpage-
1:t[k],p[k]=g.ani.getvalues("",d.now,-t[k]*d.scrollsizefix,u,"easeOutExpo",v);else if(300>l&&s[k]){r=Math.round(d.now-s[k]*((300-l)/25));d.scrollsizefix&&(r=Math.round(r/d.scrollsizefix)*d.scrollsizefix);if(0<s[k]&&r>-d.now||0>s[k]&&d.ablesize+d.ablesize-d.now>r)r=0<s[k]?0:d.ablesize,p[k]=g.ani.getvalues(a.wcp[k],d.now,r,u/2,"easeOutCubic",v);else{if(0>s[k]&&0<d.now||0<s[k]&&d.ablesize>d.now)q=d.now-s[k]/4,p[k]=g.ani.getvalues("",d.now,q,u/10,"easeOutCubic",v),m=p[k].length;else for(p[k]=g.ani.getvalues("",
d.now,r,2*u,"easeOutCubic",v),m=0,n=p[k].length;m<n;m++)if(0>s[k]){if(0<p[k][m]){null==q&&(q=7*Math.abs((p[k][m-1]||0)-p[k][m]));if(p[k][m]>q){p[k][m]/=2;m+=1;p[k].length=m;break}p[k][m]/=2}}else if(d.ablesize>p[k][m]){null==q&&(q=d.ablesize-7*((p[k][m-1]||d.ablesize)-p[k][m]));if(q>p[k][m]){p[k][m]-=(p[k][m]-d.ablesize)/2;m+=1;p[k].length=m;break}p[k][m]-=(p[k][m]-d.ablesize)/2}if(0>s[k]&&0<p[k][m-1]||0<s[k]&&d.ablesize>p[k][m-1])r=0>s[k]?0:d.ablesize,p[k]=p[k].concat(g.ani.getvalues("",p[k][m-1],
r,u/2,"easeOutCubic",v))}d.scrollsizefix&&(t[k]=Math.round(-r/d.scrollsizefix))}p[k]||(r=0<d.now?0:d.ablesize>d.now?d.ablesize:Math.round(d.now),d.scrollsizefix&&(r=Math.max(d.ablesize,Math.round(r/d.scrollsizefix)*d.scrollsizefix),t[k]=Math.round(-r/d.scrollsizefix),t[k]=0>t[k]?0:t[k]>d.totalpage-1?d.totalpage-1:t[k]),p[k]=g.ani.getvalues("",d.now,r,u/2,"easeOutCubic",v));t[k]!=d.nowpage&&(d.nowpage=t[k],w=!0);f[a.wcp[k]]=p[k]}w&&g.scrollevent.load(a,"pagechange");void 0!=f[a.wcp[0]]||void 0!=f[a.wcp[1]]?
e.animate(a,f,!0,!0,2):g.scrollevent.load(a,"end");e.removeswipehandle(a);if(g.eventkiller.killed)return g.eventkiller.leave(),e.killevent(c)},animate:function(a,c,b,e,h){g.ani.set(a.wrapper,c,{time:h,rounding:"marginLeft"==a.wcp[0],onstart:function(){g.scrollevent.load(a,"start")},onupdate:function(c){g.handle.onanimate(a,c,b,e)},onend:function(c){g.handle.onanimate(a,c,b,e)}})},onanimate:function(a,c,b,e){var h,f,d=a.wcp;for(h=0;2>h;h++)f=h?"y":"x",void 0!=c[d[h]]&&(a[f].now=c[d[h]],e&&(a[f].to=
a[f].now),b&&g.movebar(a,f,c[d[h]],e));g.scrollevent.load(a,"update"==c.type?"ing":"end",!0)},removeswipehandle:function(a,c){var b=g.event.remove;if(c){var e,h=["x","y"],f=g.items.length;for(c=a.target.parentNode;"body"!=c.nodeName.toLowerCase();){for(e=0;e<f;e++)if((b=g.items[e])&&b.target==c){b.evs.swdrt="q";b.stop();b.evs.sweventdead=!0;if(9>g.browser.ie)for(e=0;2>e;e++)b[h[e]].now=b[h[e]].to=b.evs.offsetpos[e],g.style.set(b.wrapper,b.wcp[e],b[h[e]].now),g.movebar(b,h[e],b[h[e]].now,!0);break}c=
c.parentNode}}else b(document,"mousemove",a.handle.swipe,a.id),b(document,"mouseup",a.handle.swipeend,a.id)},getpoint:function(a){return g.browser.mobile?[a.touches[0]?a.touches[0].pageX:a.changedTouches[0].pageX,a.touches[0]?a.touches[0].pageY:a.changedTouches[0].pageY]:[a.clientX,a.clientY]},killevent:function(a,c){a.stopPropagation&&(a.stopPropagation(),c&&a.preventDefault&&a.preventDefault());a.cancelBubble=!0;return a.returnValue=!1}},remove:function(a){var c=a.target,b=a.wrapper,e=a.x.track,
h=a.y.track;if(b){for(var f=b.childNodes,d=0,l=f.length;d<l;d++)c.appendChild(f[d]),l--,d--;c.removeChild(b)}e&&(e.parentNode.style.position="",e.parentNode.removeChild(e));h&&(h.parentNode.style.position="",h.parentNode.removeChild(h));c.style.overflow="";d=0;c=g.items;for(l=c.length;d<l;d++)if(c[d]==a){c[d]=null;break}return null},event:{typeinmobile:{mouseover:"touchstart",mousedown:"touchstart",mousemove:"touchmove",mouseout:"touchend",mouseup:"touchend"},type:function(a){var c=g.browser,b=g.event.typeinmobile;
return c.mobile&&b[a]?b[a]:c.firefox&&"mousewheel"==a?"DOMMouseScroll":a},add:function(a,c,b,e){c=g.event.type(c);a.addEventListener?a.addEventListener(c,b,!1):(a[c+e+b]=function(){b.call(a,window.event)},a.attachEvent("on"+c,a[c+e+b]))},remove:function(a,c,b,e){c=g.event.type(c);a.removeEventListener?a.removeEventListener(c,b,!1):a[c+e+b]&&(a.detachEvent("on"+c,a[c+e+b]),a[c+e+b]=null)}},classname:{add:function(a,c){this.set("add",a,c)},remove:function(a,c){this.set("remove",a,c)},set:function(a,
c,b){var e=(" "+c.className).replace(RegExp(" "+b,"g"),"");c.className=("add"==a?e+" "+b:e).replace(/^ +/,"")}},style:{exp:[[/translate3d\(([e0-9\-\.]+)(?:px)?, ([e0-9\-\.]+)(?:px)?/,/(translate3d\()[e0-9\-\.]+(?:px)?/,/(translate3d\([e0-9\-\.]+(?:px)?, )[e0-9\-\.]+(?:px)?/],[/translate\(([e0-9\-\.]+)(?:px)?, ([e0-9\-\.]+)(?:px)?/,/(translate\()[e0-9\-\.]+(?:px)?/,/(translate\([e0-9\-\.]+(?:px)?, )[e0-9\-\.]+(?:px)?/]],get:function(a,c){var b,e,h=g.browser.support;/^t(x|y)(3d)?/.test(c)?(e=c,c=h.transform):
"opacity"!=c||h.opacity||(c="filter");b=a.style[c]?a.style[c]:a.currentStyle?a.currentStyle[c]:document.defaultView.getComputedStyle(a,null)[c];return c==h.transform?/3d/.test(e)?(b=b.match(g.style.exp[0][0]))?parseInt("tx3d"==e?b[1]:b[2]):0:(b=b.match(g.style.exp[1][0]))?parseInt("tx"==e?b[1]:b[2]):0:"opacity"==c?parseFloat(b):"filter"==c?(b=parseFloat(b.match(/alpha *\( *opacity *[=:] *([0-9\.]+) *\)/i)[1]))||0===b?b/100:1:"auto"==b?0:/(pt|px)$/.test(b)?parseInt(b):b},set:function(a,c,b){var e=
g.browser.support;void 0!=b&&(/^t(x|y)(3d)?/.test(c)?/3d/.test(c)?a.style[e.transform]=a.style[e.transform].replace(g.style.exp[0]["tx3d"==c?1:2],"$1"+b+"px"):a.style[e.transform]=a.style[e.transform].replace(g.style.exp[1]["tx"==c?1:2],"$1"+b+"px"):"opacity"==c?e.opacity?a.style.opacity=b:a.style.filter="alpha(opacity="+100*b+")":a.style[c]=isNaN(b)?b:b+"px")}},createtag:function(a,c,b,e,h){c=document.createElement(c);var f=g.browser.support;c.dataset||(c.dataset={},9>g.browser.ie&&(c.style.filter=
"inherit"));c.dataset.fsflag=e;c.className=b;"wrapper"==e?/^t(x|y)(3d)?/.test(a.wcp[0])&&(c.style[f.transform]+=" "+(/3d/.test(a.wcp[0])?f.translate3d:f.translate)):c.style.position="absolute";("wrapper"==e&&a.useswipe||"neutralzone"!=e&&h&&!a[h].nointeract)&&g.event.add(c,"mousedown",a.handle.start);return c},findelement:function(a){"string"==typeof a&&(a=document.getElementById(a));return a&&a.nodeType&&1==a.nodeType?a:null},ani:{fps:72,time:1,easing:"easeOutQuint",target:[],timer:[],set:function(a,
c,b){b=b||{};var e,h=0,f=g.ani.no(a),d=b.time||g.ani.time,l=Math.round(d*g.ani.fps),k={};clearTimeout(g.ani.timer[f]);for(e in c)k[e]=c[e].length?c[e]:g.ani.getvalues(e,g.style.get(a,e),c[e],l,b.easing||g.ani.easing,b.rounding),h=Math.max(k[e].length,h);if(2>h){for(e in c)c[e]=c[e][0];c.type="end";c.percent=1;b.onend&&b.onend.call(a,c)}else{var m,n,r=1E3*d/l,t=function(){var d=Math.round(l*(((new Date).getTime()-m)/(n-m))),e,s={};if(h-1>d){for(e in c)s[e]=k[e][d],g.style.set(a,e,s[e]);s.type="update";
b.onupdate&&b.onupdate.call(a,s);g.ani.timer[f]=setTimeout(t,r)}else{for(e in c)s[e]=k[e][k[e].length-1],g.style.set(a,e,s[e]);s.type="end";b.onend&&b.onend.call(a,s)}};g.ani.timer[f]=setTimeout(function(){m=(new Date).getTime();n=m+1E3*d;b.onstart&&b.onstart.call(a,{type:"start"});t()},1E3*(b.delay||0))}},stop:function(a){clearTimeout(g.ani.timer[g.ani.no(a)])},no:function(a){for(var c=0,b=g.ani.target.length;c<b;c++)if(a==g.ani.target[c])return c;g.ani.target.push(a);return g.ani.target.length-
1},getvalues:function(a,c,b,e,h,f){for(var d,l=[],k=b-c,m=g.ani.equations,n=1;n<=e&&(d=m[h](n,c,k,e),l.push("opacity"==a?parseInt(1E3*d)/1E3:f?Math.round(d):d),d!=b);n++);return l},equations:{linear:function(a,c,b,e){return b*a/e+c},easeOutCubic:function(a,c,b,e){return b*((a=a/e-1)*a*a+1)+c},easeOutQuint:function(a,c,b,e){return b*((a=a/e-1)*a*a*a*a+1)+c},easeOutExpo:function(a,c,b,e){return a==e?c+b:1.001*b*(-Math.pow(2,-10*a/e)+1)+c}}},eventkiller:{killer:null,killed:!1,call:function(a){a.appendChild(g.eventkiller.killer);
g.eventkiller.killed=!0},leave:function(){g.eventkiller.killer.parentNode.removeChild(g.eventkiller.killer);g.eventkiller.killed=!1}}};g.browser=function(){var a={support:{fixed:!0,opacity:!0,transform:!1}},c=navigator.userAgent,b=c.match(/msie ([0-9])+/i);b&&(b=parseInt(b[1]),7>b&&(a.support.fixed=!1),9>b&&(a.support.opacity=!1),a.ie=b);a.firefox=/firefox/i.test(c);a.webkit=/applewebkit/i.test(c);a.opera=/opera/i.test(c);a.ios=/ip(ad|hone|od)/i.test(c);a.android=/android/i.test(c);a.mobile=document.hasOwnProperty&&
document.hasOwnProperty("ontouchstart")&&(a.ios||a.android);c=document.createElement("div");b="position:absolute;left:0;top:0;width:100%;height:100%;background:#f60;z-index:10000;opacity:0;";a.support.opacity||(b+="filter:alpha(opacity=0)");c.style.cssText=b;var b=["t","WebkitT","MozT","OT","msT"],e="ransform";if(c.style.hasOwnProperty)for(var h=0;5>h;h++)if(void 0!=c.style[b[h]+"ransition"]&&(a.support.transition=b[h]+"ransition"),void 0!=c.style[b[h]+e]){e=b[h]+e;a.support.transform=e;c.style[e]=
"translate3d(0px, 0px, 0px)";a.support.translate3d=c.style[e];c.style[e]="translate(0px, 0px)";a.support.translate=c.style[e];c.style[e]="";break}g.eventkiller.killer=c;return a}();g.preset=function(a,c,b,e){a=g.findelement(a);if(!a)return null;b=b||{};b.x=b.x||{};b.y=b.y||{};return g.presetlist[c](a,b,e)};g.presetlist={"ios-mode":function(a,c,b){g.classname.add(a,g.cssclass.iosmode);c.animate=!0;c.tracksize=c.tracksize||"-2";c.nointeract=!0;c.barminsize=35;var e,h,f=g.set(a,c);f.display=function(a,
b){a=a||{type:"blank"};if("scrollstart"==a.type||"blank"==a.type){for(e=0;2>e;e++)h=f[e?"y":"x"],h.disable||h.hide||(g.ani.stop(h.bar),g.style.set(h.bar,"opacity",0.5));"blank"==a.type&&f.display({},0.5)}else for(e=0;2>e;e++)h=f[e?"y":"x"],h.disable||h.hide||g.ani.set(h.bar,{opacity:0},{easing:"linear",time:0.25,delay:b})};f.addEventListener("scrollstart",f.display).addEventListener("scrollend",f.display);if(b)for(e=0;2>e;e++)h=f[e?"y":"x"],h.disable||h.hide||g.style.set(h.bar,"opacity",0);else f.display({type:"scrollstart"}),
f.display({},1);return f},"show-only-over":function(a,c){var b=g.set(a,c),e,h,f=!1,d=!1,l=function(a,c){d=a&&("mouseover"==a.type||"touchstart"==a.type);if(!f){for(e=0;2>e;e++)h=b[e?"y":"x"],!h.disable&&h.show&&g.ani.set(h.track,{opacity:d?1:0},{easing:"linear",time:0.2,delay:c});b.neutralzone&&b.neutralzone.offsetWidth&&g.ani.set(b.neutralzone,{opacity:d?1:0},{easing:"linear",time:0.2,delay:c})}},k=function(){f=!0;g.event.add(document,"mouseup",m,b.id)},m=function(){f=!1;d||l("",0);g.event.remove(document,
"mouseup",m,b.id)};g.event.add(b.target,"mouseover",l);g.event.add(b.target,"mouseout",l);for(e=0;2>e;e++)h=b[e?"y":"x"],h.disable||h.hide||(g.style.set(h.track,"opacity",1),g.event.add(h.bar,"mousedown",k));b.neutralzone&&b.neutralzone.offsetWidth&&g.style.set(b.neutralzone,"opacity",1);l("",1);return b},"slider-x":function(a,c){return g.presetter.slider(a,c,"x")},"slider-y":function(a,c){return g.presetter.slider(a,c,"y")},"switch-x":function(a,c){return g.presetter["switch"](a,c,"x")},"switch-y":function(a,
c){return g.presetter["switch"](a,c,"y")}};g.presetter={slider:function(a,c,b){if(void 0==c.barsize||void 0==c.min||void 0==c.max||c.min==c.max||c.min>c.max)return null;var e,h;"x"==b?(c.y.disable=!0,e="clientWidth",h="Left"):(c.x.disable=!0,e="clientHeight",h="Top");var f=c.max-c.min,d=a[e],l=d+f;e=c.step||1;var k=Math.round((void 0!=c.value?c.value:c.min)/e)*e;c.min>k&&(k=c.min);c.animate=!1;c.slidermode=!0;c.scrollsizefix=e;var m=g.set(a,c,!0);"x"==b?(g.style.set(m.wrapper,"width",l),g.style.set(m.wrapper,
"height",1)):(g.style.set(m.wrapper,"width",1),g.style.set(m.wrapper,"height",l));g.style.set(m.wrapper,"opacity",0);m.reset();m["scroll"+h]((l-d)*((k-c.min)/f),!0);m.addEventListener("scroll",function(a){a=c.min+f*a["scroll"+h]/(l-d);k!=a&&(c.onchange&&c.onchange(a),k=a)});var n=!1,r=function(){n&&(g.autoscroll(m,b,m[b].bar["offset"+h],!0),n=!1);g.event.remove(document,"mouseup",r,m.id)};g.event.add(m[b].bar,"mousedown",function(){n=!0;g.event.add(document,"mouseup",r,m.id)});return m},"switch":function(a,
c,b){if(void 0==c.barsize)return null;c.min=0;c.max=a["x"==b?"clientWidth":"clientHeight"];c.step=c.max;c.value=c.value?c.step:0;var e,h=c.onchange;c.onchange=function(a){c.value=a;h&&h(c.value?!0:!1);e=!0};var f=g.presetter.slider(a,c,b),d=function(){e||setTimeout(function(){f["x"==b?"scrollLeft":"scrollTop"](c.value?0:c.step)},0);g.event.remove(document,"mousemove",k,f.id);g.event.remove(document,"mouseup",d,f.id)},l;a=function(a){e=!1;l=g.handle.getpoint(a);g.event.add(document,"mousemove",k,f.id);
g.event.add(document,"mouseup",d,f.id)};var k=function(a){a=g.handle.getpoint(a);if(l[0]!=a[0]||l[1]!=a[1])e=!0};g.event.add(f[b].bar,"mousedown",a);g.event.add(f[b].track,"mousedown",a);return f}};return g}();


/* jQuery easing 1.3 */
jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b}});


/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com |
 * http://flesler.blogspot.com Dual licensed under MIT and GPL.
 * 
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/**
 * bxSlider v4.2.12
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

;(function($) {

  var defaults = {

    // GENERAL
    mode: 'horizontal',
    slideSelector: '',
    infiniteLoop: true,
    hideControlOnEnd: false,
    speed: 500,
    easing: null,
    slideMargin: 0,
    startSlide: 0,
    randomStart: false,
    captions: false,
    ticker: false,
    tickerHover: false,
    adaptiveHeight: false,
    adaptiveHeightSpeed: 500,
    video: false,
    useCSS: true,
    preloadImages: 'visible',
    responsive: true,
    slideZIndex: 50,
    wrapperClass: 'bx-wrapper',

    // TOUCH
    touchEnabled: true,
    swipeThreshold: 50,
    oneToOneTouch: true,
    preventDefaultSwipeX: true,
    preventDefaultSwipeY: false,

    // ACCESSIBILITY
    ariaLive: true,
    ariaHidden: true,

    // KEYBOARD
    keyboardEnabled: false,

    // PAGER
    pager: true,
    pagerType: 'full',
    pagerShortSeparator: ' / ',
    pagerSelector: null,
    buildPager: null,
    pagerCustom: null,

    // CONTROLS
    controls: true,
    nextText: 'Next',
    prevText: 'Prev',
    nextSelector: null,
    prevSelector: null,
    autoControls: false,
    startText: 'Start',
    stopText: 'Stop',
    autoControlsCombine: false,
    autoControlsSelector: null,

    // AUTO
    auto: false,
    pause: 4000,
    autoStart: true,
    autoDirection: 'next',
    stopAutoOnClick: false,
    autoHover: false,
    autoDelay: 0,
    autoSlideForOnePage: false,

    // CAROUSEL
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 0,
    slideWidth: 0,
    shrinkItems: false,

    // CALLBACKS
    onSliderLoad: function() { return true; },
    onSlideBefore: function() { return true; },
    onSlideAfter: function() { return true; },
    onSlideNext: function() { return true; },
    onSlidePrev: function() { return true; },
    onSliderResize: function() { return true; }
  };

  $.fn.bxSlider = function(options) {

    if (this.length === 0) {
      return this;
    }

    // support multiple elements
    if (this.length > 1) {
      this.each(function() {
        $(this).bxSlider(options);
      });
      return this;
    }

    // create a namespace to be used throughout the plugin
    var slider = {},
    // set a reference to our slider element
    el = this,
    // get the original window dimens (thanks a lot IE)
    windowWidth = $(window).width(),
    windowHeight = $(window).height();

    // Return if slider is already initialized
    if ($(el).data('bxSlider')) { return; }

    /**
     * ===================================================================================
     * = PRIVATE FUNCTIONS
     * ===================================================================================
     */

    /**
     * Initializes namespace settings to be used throughout plugin
     */
    var init = function() {
      // Return if slider is already initialized
      if ($(el).data('bxSlider')) { return; }
      // merge user-supplied options with the defaults
      slider.settings = $.extend({}, defaults, options);
      // parse slideWidth setting
      slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
      // store the original children
      slider.children = el.children(slider.settings.slideSelector);
      // check if actual number of slides is less than minSlides / maxSlides
      if (slider.children.length < slider.settings.minSlides) { slider.settings.minSlides = slider.children.length; }
      if (slider.children.length < slider.settings.maxSlides) { slider.settings.maxSlides = slider.children.length; }
      // if random start, set the startSlide setting to random number
      if (slider.settings.randomStart) { slider.settings.startSlide = Math.floor(Math.random() * slider.children.length); }
      // store active slide information
      slider.active = { index: slider.settings.startSlide };
      // store if the slider is in carousel mode (displaying / moving multiple slides)
      slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1 ? true : false;
      // if carousel, force preloadImages = 'all'
      if (slider.carousel) { slider.settings.preloadImages = 'all'; }
      // calculate the min / max width thresholds based on min / max number of slides
      // used to setup and update carousel slides dimensions
      slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
      slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
      // store the current state of the slider (if currently animating, working is true)
      slider.working = false;
      // initialize the controls object
      slider.controls = {};
      // initialize an auto interval
      slider.interval = null;
      // determine which property to use for transitions
      slider.animProp = slider.settings.mode === 'vertical' ? 'top' : 'left';
      // determine if hardware acceleration can be used
      slider.usingCSS = slider.settings.useCSS && slider.settings.mode !== 'fade' && (function() {
        // create our test div element
        var div = document.createElement('div'),
        // css transition properties
        props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
        // test for each property
        for (var i = 0; i < props.length; i++) {
          if (div.style[props[i]] !== undefined) {
            slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
            slider.animProp = '-' + slider.cssPrefix + '-transform';
            return true;
          }
        }
        return false;
      }());
      // if vertical mode always make maxSlides and minSlides equal
      if (slider.settings.mode === 'vertical') { slider.settings.maxSlides = slider.settings.minSlides; }
      // save original style data
      el.data('origStyle', el.attr('style'));
      el.children(slider.settings.slideSelector).each(function() {
        $(this).data('origStyle', $(this).attr('style'));
      });

      // perform all DOM / CSS modifications
      setup();
    };

    /**
     * Performs all DOM and CSS modifications
     */
    var setup = function() {
      var preloadSelector = slider.children.eq(slider.settings.startSlide); // set the default preload selector (visible)

      // wrap el in a wrapper
      el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
      // store a namespace reference to .bx-viewport
      slider.viewport = el.parent();

      // add aria-live if the setting is enabled and ticker mode is disabled
      if (slider.settings.ariaLive && !slider.settings.ticker) {
        slider.viewport.attr('aria-live', 'polite');
      }
      // add a loading div to display while images are loading
      slider.loader = $('<div class="bx-loading" />');
      slider.viewport.prepend(slider.loader);
      // set el to a massive width, to hold any needed slides
      // also strip any margin and padding from el
      el.css({
        width: slider.settings.mode === 'horizontal' ? (slider.children.length * 1000 + 215) + '%' : 'auto',
        position: 'relative'
      });
      // if using CSS, add the easing property
      if (slider.usingCSS && slider.settings.easing) {
        el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
      // if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
      } else if (!slider.settings.easing) {
        slider.settings.easing = 'swing';
      }
      // make modifications to the viewport (.bx-viewport)
      slider.viewport.css({
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
      });
      slider.viewport.parent().css({
        maxWidth: getViewportMaxWidth()
      });
      // apply css to all slider children
      slider.children.css({
        float: slider.settings.mode === 'horizontal' ? 'left' : 'none',
        listStyle: 'none',
        position: 'relative'
      });
      // apply the calculated width after the float is applied to prevent scrollbar interference
      slider.children.css('width', getSlideWidth());
      // if slideMargin is supplied, add the css
      if (slider.settings.mode === 'horizontal' && slider.settings.slideMargin > 0) { slider.children.css('marginRight', slider.settings.slideMargin); }
      if (slider.settings.mode === 'vertical' && slider.settings.slideMargin > 0) { slider.children.css('marginBottom', slider.settings.slideMargin); }
      // if "fade" mode, add positioning and z-index CSS
      if (slider.settings.mode === 'fade') {
        slider.children.css({
          position: 'absolute',
          zIndex: 0,
          display: 'none'
        });
        // prepare the z-index on the showing element
        slider.children.eq(slider.settings.startSlide).css({zIndex: slider.settings.slideZIndex, display: 'block'});
      }
      // create an element to contain all slider controls (pager, start / stop, etc)
      slider.controls.el = $('<div class="bx-controls" />');
      // if captions are requested, add them
      if (slider.settings.captions) { appendCaptions(); }
      // check if startSlide is last slide
      slider.active.last = slider.settings.startSlide === getPagerQty() - 1;
      // if video is true, set up the fitVids plugin
      if (slider.settings.video) { el.fitVids(); }
      if (slider.settings.preloadImages === 'all' || slider.settings.ticker) { preloadSelector = slider.children; }
      // only check for control addition if not in "ticker" mode
      if (!slider.settings.ticker) {
        // if controls are requested, add them
        if (slider.settings.controls) { appendControls(); }
        // if auto is true, and auto controls are requested, add them
        if (slider.settings.auto && slider.settings.autoControls) { appendControlsAuto(); }
        // if pager is requested, add it
        if (slider.settings.pager) { appendPager(); }
        // if any control option is requested, add the controls wrapper
        if (slider.settings.controls || slider.settings.autoControls || slider.settings.pager) { slider.viewport.after(slider.controls.el); }
      // if ticker mode, do not allow a pager
      } else {
        slider.settings.pager = false;
      }
      loadElements(preloadSelector, start);
    };

    var loadElements = function(selector, callback) {
      var total = selector.find('img:not([src=""]), iframe').length,
      count = 0;
      if (total === 0) {
        callback();
        return;
      }
      selector.find('img:not([src=""]), iframe').each(function() {
        $(this).one('load error', function() {
          if (++count === total) { callback(); }
        }).each(function() {
          if (this.complete) { $(this).trigger('load'); }
        });
      });
    };

    /**
     * Start the slider
     */
    var start = function() {
      // if infinite loop, prepare additional slides
      if (slider.settings.infiniteLoop && slider.settings.mode !== 'fade' && !slider.settings.ticker) {
        var slice    = slider.settings.mode === 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides,
        sliceAppend  = slider.children.slice(0, slice).clone(true).addClass('bx-clone'),
        slicePrepend = slider.children.slice(-slice).clone(true).addClass('bx-clone');
        if (slider.settings.ariaHidden) {
          sliceAppend.attr('aria-hidden', true);
          slicePrepend.attr('aria-hidden', true);
        }
        el.append(sliceAppend).prepend(slicePrepend);
      }
      // remove the loading DOM element
      slider.loader.remove();
      // set the left / top position of "el"
      setSlidePosition();
      // if "vertical" mode, always use adaptiveHeight to prevent odd behavior
      if (slider.settings.mode === 'vertical') { slider.settings.adaptiveHeight = true; }
      // set the viewport height
      slider.viewport.height(getViewportHeight());
      // make sure everything is positioned just right (same as a window resize)
      el.redrawSlider();
      // onSliderLoad callback
      slider.settings.onSliderLoad.call(el, slider.active.index);
      // slider has been fully initialized
      slider.initialized = true;
      // bind the resize call to the window
      if (slider.settings.responsive) { $(window).bind('resize', resizeWindow); }
      // if auto is true and has more than 1 page, start the show
      if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) { initAuto(); }
      // if ticker is true, start the ticker
      if (slider.settings.ticker) { initTicker(); }
      // if pager is requested, make the appropriate pager link active
      if (slider.settings.pager) { updatePagerActive(slider.settings.startSlide); }
      // check for any updates to the controls (like hideControlOnEnd updates)
      if (slider.settings.controls) { updateDirectionControls(); }
      // if touchEnabled is true, setup the touch events
      if (slider.settings.touchEnabled && !slider.settings.ticker) { initTouch(); }
      // if keyboardEnabled is true, setup the keyboard events
      if (slider.settings.keyboardEnabled && !slider.settings.ticker) {
        $(document).keydown(keyPress);
      }
    };

    /**
     * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
     */
    var getViewportHeight = function() {
      var height = 0;
      // first determine which children (slides) should be used in our height calculation
      var children = $();
      // if mode is not "vertical" and adaptiveHeight is false, include all children
      if (slider.settings.mode !== 'vertical' && !slider.settings.adaptiveHeight) {
        children = slider.children;
      } else {
        // if not carousel, return the single active child
        if (!slider.carousel) {
          children = slider.children.eq(slider.active.index);
        // if carousel, return a slice of children
        } else {
          // get the individual slide index
          var currentIndex = slider.settings.moveSlides === 1 ? slider.active.index : slider.active.index * getMoveBy();
          // add the current slide to the children
          children = slider.children.eq(currentIndex);
          // cycle through the remaining "showing" slides
          for (i = 1; i <= slider.settings.maxSlides - 1; i++) {
            // if looped back to the start
            if (currentIndex + i >= slider.children.length) {
              children = children.add(slider.children.eq(i - 1));
            } else {
              children = children.add(slider.children.eq(currentIndex + i));
            }
          }
        }
      }
      // if "vertical" mode, calculate the sum of the heights of the children
      if (slider.settings.mode === 'vertical') {
        children.each(function(index) {
          height += $(this).outerHeight();
        });
        // add user-supplied margins
        if (slider.settings.slideMargin > 0) {
          height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
        }
      // if not "vertical" mode, calculate the max height of the children
      } else {
        height = Math.max.apply(Math, children.map(function() {
          return $(this).outerHeight(false);
        }).get());
      }

      if (slider.viewport.css('box-sizing') === 'border-box') {
        height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
              parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
      } else if (slider.viewport.css('box-sizing') === 'padding-box') {
        height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
      }

      return height;
    };

    /**
     * Returns the calculated width to be used for the outer wrapper / viewport
     */
    var getViewportMaxWidth = function() {
      var width = '100%';
      if (slider.settings.slideWidth > 0) {
        if (slider.settings.mode === 'horizontal') {
          width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
        } else {
          width = slider.settings.slideWidth;
        }
      }
      return width;
    };

    /**
     * Returns the calculated width to be applied to each slide
     */
    var getSlideWidth = function() {
      var newElWidth = slider.settings.slideWidth, // start with any user-supplied slide width
      wrapWidth      = slider.viewport.width();    // get the current viewport width
      // if slide width was not supplied, or is larger than the viewport use the viewport width
      if (slider.settings.slideWidth === 0 ||
        (slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
        slider.settings.mode === 'vertical') {
        newElWidth = wrapWidth;
      // if carousel, use the thresholds to determine the width
      } else if (slider.settings.maxSlides > 1 && slider.settings.mode === 'horizontal') {
        if (wrapWidth > slider.maxThreshold) {
          return newElWidth;
        } else if (wrapWidth < slider.minThreshold) {
          newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
        } else if (slider.settings.shrinkItems) {
          newElWidth = Math.floor((wrapWidth + slider.settings.slideMargin) / (Math.ceil((wrapWidth + slider.settings.slideMargin) / (newElWidth + slider.settings.slideMargin))) - slider.settings.slideMargin);
        }
      }
      return newElWidth;
    };

    /**
     * Returns the number of slides currently visible in the viewport (includes partially visible slides)
     */
    var getNumberSlidesShowing = function() {
      var slidesShowing = 1,
      childWidth = null;
      if (slider.settings.mode === 'horizontal' && slider.settings.slideWidth > 0) {
        // if viewport is smaller than minThreshold, return minSlides
        if (slider.viewport.width() < slider.minThreshold) {
          slidesShowing = slider.settings.minSlides;
        // if viewport is larger than maxThreshold, return maxSlides
        } else if (slider.viewport.width() > slider.maxThreshold) {
          slidesShowing = slider.settings.maxSlides;
        // if viewport is between min / max thresholds, divide viewport width by first child width
        } else {
          childWidth = slider.children.first().width() + slider.settings.slideMargin;
          slidesShowing = Math.floor((slider.viewport.width() +
            slider.settings.slideMargin) / childWidth);
        }
      // if "vertical" mode, slides showing will always be minSlides
      } else if (slider.settings.mode === 'vertical') {
        slidesShowing = slider.settings.minSlides;
      }
      return slidesShowing;
    };

    /**
     * Returns the number of pages (one full viewport of slides is one "page")
     */
    var getPagerQty = function() {
      var pagerQty = 0,
      breakPoint = 0,
      counter = 0;
      // if moveSlides is specified by the user
      if (slider.settings.moveSlides > 0) {
        if (slider.settings.infiniteLoop) {
          pagerQty = Math.ceil(slider.children.length / getMoveBy());
        } else {
          // when breakpoint goes above children length, counter is the number of pages
          while (breakPoint < slider.children.length) {
            ++pagerQty;
            breakPoint = counter + getNumberSlidesShowing();
            counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
          }
        }
      // if moveSlides is 0 (auto) divide children length by sides showing, then round up
      } else {
        pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
      }
      return pagerQty;
    };

    /**
     * Returns the number of individual slides by which to shift the slider
     */
    var getMoveBy = function() {
      // if moveSlides was set by the user and moveSlides is less than number of slides showing
      if (slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()) {
        return slider.settings.moveSlides;
      }
      // if moveSlides is 0 (auto)
      return getNumberSlidesShowing();
    };

    /**
     * Sets the slider's (el) left or top position
     */
    var setSlidePosition = function() {
      var position, lastChild, lastShowingIndex;
      // if last slide, not infinite loop, and number of children is larger than specified maxSlides
      if (slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop) {
        if (slider.settings.mode === 'horizontal') {
          // get the last child's position
          lastChild = slider.children.last();
          position = lastChild.position();
          // set the left position
          setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
        } else if (slider.settings.mode === 'vertical') {
          // get the last showing index's position
          lastShowingIndex = slider.children.length - slider.settings.minSlides;
          position = slider.children.eq(lastShowingIndex).position();
          // set the top position
          setPositionProperty(-position.top, 'reset', 0);
        }
      // if not last slide
      } else {
        // get the position of the first showing slide
        position = slider.children.eq(slider.active.index * getMoveBy()).position();
        // check for last slide
        if (slider.active.index === getPagerQty() - 1) { slider.active.last = true; }
        // set the respective position
        if (position !== undefined) {
          if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
          else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
        }
      }
    };

    /**
     * Sets the el's animating property position (which in turn will sometimes animate el).
     * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
     *
     * @param value (int)
     *  - the animating property's value
     *
     * @param type (string) 'slide', 'reset', 'ticker'
     *  - the type of instance for which the function is being
     *
     * @param duration (int)
     *  - the amount of time (in ms) the transition should occupy
     *
     * @param params (array) optional
     *  - an optional parameter containing any variables that need to be passed in
     */
    var setPositionProperty = function(value, type, duration, params) {
      var animateObj, propValue;
      // use CSS transform
      if (slider.usingCSS) {
        // determine the translate3d value
        propValue = slider.settings.mode === 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
        // add the CSS transition-duration
        el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
        if (type === 'slide') {
          // set the property value
          el.css(slider.animProp, propValue);
          if (duration !== 0) {
            // bind a callback method - executes when CSS transition completes
            el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
              //make sure it's the correct one
              if (!$(e.target).is(el)) { return; }
              // unbind the callback
              el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
              updateAfterSlideTransition();
            });
          } else { //duration = 0
            updateAfterSlideTransition();
          }
        } else if (type === 'reset') {
          el.css(slider.animProp, propValue);
        } else if (type === 'ticker') {
          // make the transition use 'linear'
          el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
          el.css(slider.animProp, propValue);
          if (duration !== 0) {
            el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
              //make sure it's the correct one
              if (!$(e.target).is(el)) { return; }
              // unbind the callback
              el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
              // reset the position
              setPositionProperty(params.resetValue, 'reset', 0);
              // start the loop again
              tickerLoop();
            });
          } else { //duration = 0
            setPositionProperty(params.resetValue, 'reset', 0);
            tickerLoop();
          }
        }
      // use JS animate
      } else {
        animateObj = {};
        animateObj[slider.animProp] = value;
        if (type === 'slide') {
          el.animate(animateObj, duration, slider.settings.easing, function() {
            updateAfterSlideTransition();
          });
        } else if (type === 'reset') {
          el.css(slider.animProp, value);
        } else if (type === 'ticker') {
          el.animate(animateObj, duration, 'linear', function() {
            setPositionProperty(params.resetValue, 'reset', 0);
            // run the recursive loop after animation
            tickerLoop();
          });
        }
      }
    };

    /**
     * Populates the pager with proper amount of pages
     */
    var populatePager = function() {
      var pagerHtml = '',
      linkContent = '',
      pagerQty = getPagerQty();
      // loop through each pager item
      for (var i = 0; i < pagerQty; i++) {
        linkContent = '';
        // if a buildPager function is supplied, use it to get pager link value, else use index + 1
        if (slider.settings.buildPager && $.isFunction(slider.settings.buildPager) || slider.settings.pagerCustom) {
          linkContent = slider.settings.buildPager(i);
          slider.pagerEl.addClass('bx-custom-pager');
        } else {
          linkContent = i + 1;
          slider.pagerEl.addClass('bx-default-pager');
        }
        // var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
        // add the markup to the string
        pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
      }
      // populate the pager element with pager links
      slider.pagerEl.html(pagerHtml);
    };

    /**
     * Appends the pager to the controls element
     */
    var appendPager = function() {
      if (!slider.settings.pagerCustom) {
        // create the pager DOM element
        slider.pagerEl = $('<div class="bx-pager" />');
        // if a pager selector was supplied, populate it with the pager
        if (slider.settings.pagerSelector) {
          $(slider.settings.pagerSelector).html(slider.pagerEl);
        // if no pager selector was supplied, add it after the wrapper
        } else {
          slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
        }
        // populate the pager
        populatePager();
      } else {
        slider.pagerEl = $(slider.settings.pagerCustom);
      }
      // assign the pager click binding
      slider.pagerEl.on('click touchend', 'a', clickPagerBind);
    };

    /**
     * Appends prev / next controls to the controls element
     */
    var appendControls = function() {
      slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
      slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
      // bind click actions to the controls
      slider.controls.next.bind('click touchend', clickNextBind);
      slider.controls.prev.bind('click touchend', clickPrevBind);
      // if nextSelector was supplied, populate it
      if (slider.settings.nextSelector) {
        $(slider.settings.nextSelector).append(slider.controls.next);
      }
      // if prevSelector was supplied, populate it
      if (slider.settings.prevSelector) {
        $(slider.settings.prevSelector).append(slider.controls.prev);
      }
      // if no custom selectors were supplied
      if (!slider.settings.nextSelector && !slider.settings.prevSelector) {
        // add the controls to the DOM
        slider.controls.directionEl = $('<div class="bx-controls-direction" />');
        // add the control elements to the directionEl
        slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
        // slider.viewport.append(slider.controls.directionEl);
        slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
      }
    };

    /**
     * Appends start / stop auto controls to the controls element
     */
    var appendControlsAuto = function() {
      slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
      slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
      // add the controls to the DOM
      slider.controls.autoEl = $('<div class="bx-controls-auto" />');
      // bind click actions to the controls
      slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
      slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
      // if autoControlsCombine, insert only the "start" control
      if (slider.settings.autoControlsCombine) {
        slider.controls.autoEl.append(slider.controls.start);
      // if autoControlsCombine is false, insert both controls
      } else {
        slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
      }
      // if auto controls selector was supplied, populate it with the controls
      if (slider.settings.autoControlsSelector) {
        $(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
      // if auto controls selector was not supplied, add it after the wrapper
      } else {
        slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
      }
      // update the auto controls
      updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
    };

    /**
     * Appends image captions to the DOM
     */
    var appendCaptions = function() {
      // cycle through each child
      slider.children.each(function(index) {
        // get the image title attribute
        var title = $(this).find('img:first').attr('title');
        // append the caption
        if (title !== undefined && ('' + title).length) {
          $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
        }
      });
    };

    /**
     * Click next binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickNextBind = function(e) {
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) { return; }
      // if auto show is running, stop it
      if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      el.goToNextSlide();
    };

    /**
     * Click prev binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickPrevBind = function(e) {
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) { return; }
      // if auto show is running, stop it
      if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      el.goToPrevSlide();
    };

    /**
     * Click start binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickStartBind = function(e) {
      el.startAuto();
      e.preventDefault();
    };

    /**
     * Click stop binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickStopBind = function(e) {
      el.stopAuto();
      e.preventDefault();
    };

    /**
     * Click pager binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickPagerBind = function(e) {
      var pagerLink, pagerIndex;
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) {
        return;
      }
      // if auto show is running, stop it
      if (slider.settings.auto  && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      pagerLink = $(e.currentTarget);
      if (pagerLink.attr('data-slide-index') !== undefined) {
        pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
        // if clicked pager link is not active, continue with the goToSlide call
        if (pagerIndex !== slider.active.index) { el.goToSlide(pagerIndex); }
      }
    };

    /**
     * Updates the pager links with an active class
     *
     * @param slideIndex (int)
     *  - index of slide to make active
     */
    var updatePagerActive = function(slideIndex) {
      // if "short" pager type
      var len = slider.children.length; // nb of children
      if (slider.settings.pagerType === 'short') {
        if (slider.settings.maxSlides > 1) {
          len = Math.ceil(slider.children.length / slider.settings.maxSlides);
        }
        slider.pagerEl.html((slideIndex + 1) + slider.settings.pagerShortSeparator + len);
        return;
      }
      // remove all pager active classes
      slider.pagerEl.find('a').removeClass('active');
      // apply the active class for all pagers
      slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
    };

    /**
     * Performs needed actions after a slide transition
     */
    var updateAfterSlideTransition = function() {
      // if infinite loop is true
      if (slider.settings.infiniteLoop) {
        var position = '';
        // first slide
        if (slider.active.index === 0) {
          // set the new position
          position = slider.children.eq(0).position();
        // carousel, last slide
        } else if (slider.active.index === getPagerQty() - 1 && slider.carousel) {
          position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
        // last slide
        } else if (slider.active.index === slider.children.length - 1) {
          position = slider.children.eq(slider.children.length - 1).position();
        }
        if (position) {
          if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
          else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
        }
      }
      // declare that the transition is complete
      slider.working = false;
      // onSlideAfter callback
      slider.settings.onSlideAfter.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
    };

    /**
     * Updates the auto controls state (either active, or combined switch)
     *
     * @param state (string) "start", "stop"
     *  - the new state of the auto show
     */
    var updateAutoControls = function(state) {
      // if autoControlsCombine is true, replace the current control with the new state
      if (slider.settings.autoControlsCombine) {
        slider.controls.autoEl.html(slider.controls[state]);
      // if autoControlsCombine is false, apply the "active" class to the appropriate control
      } else {
        slider.controls.autoEl.find('a').removeClass('active');
        slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
      }
    };

    /**
     * Updates the direction controls (checks if either should be hidden)
     */
    var updateDirectionControls = function() {
      if (getPagerQty() === 1) {
        slider.controls.prev.addClass('disabled');
        slider.controls.next.addClass('disabled');
      } else if (!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd) {
        // if first slide
        if (slider.active.index === 0) {
          slider.controls.prev.addClass('disabled');
          slider.controls.next.removeClass('disabled');
        // if last slide
        } else if (slider.active.index === getPagerQty() - 1) {
          slider.controls.next.addClass('disabled');
          slider.controls.prev.removeClass('disabled');
        // if any slide in the middle
        } else {
          slider.controls.prev.removeClass('disabled');
          slider.controls.next.removeClass('disabled');
        }
      }
    };

    /**
     * Initializes the auto process
     */
    var initAuto = function() {
      // if autoDelay was supplied, launch the auto show using a setTimeout() call
      if (slider.settings.autoDelay > 0) {
        var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
      // if autoDelay was not supplied, start the auto show normally
      } else {
        el.startAuto();

        //add focus and blur events to ensure its running if timeout gets paused
        $(window).focus(function() {
          el.startAuto();
        }).blur(function() {
          el.stopAuto();
        });
      }
      // if autoHover is requested
      if (slider.settings.autoHover) {
        // on el hover
        el.hover(function() {
          // if the auto show is currently playing (has an active interval)
          if (slider.interval) {
            // stop the auto show and pass true argument which will prevent control update
            el.stopAuto(true);
            // create a new autoPaused value which will be used by the relative "mouseout" event
            slider.autoPaused = true;
          }
        }, function() {
          // if the autoPaused value was created be the prior "mouseover" event
          if (slider.autoPaused) {
            // start the auto show and pass true argument which will prevent control update
            el.startAuto(true);
            // reset the autoPaused value
            slider.autoPaused = null;
          }
        });
      }
    };

    /**
     * Initializes the ticker process
     */
    var initTicker = function() {
      var startPosition = 0,
      position, transform, value, idx, ratio, property, newSpeed, totalDimens;
      // if autoDirection is "next", append a clone of the entire slider
      if (slider.settings.autoDirection === 'next') {
        el.append(slider.children.clone().addClass('bx-clone'));
      // if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
      } else {
        el.prepend(slider.children.clone().addClass('bx-clone'));
        position = slider.children.first().position();
        startPosition = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
      }
      setPositionProperty(startPosition, 'reset', 0);
      // do not allow controls in ticker mode
      slider.settings.pager = false;
      slider.settings.controls = false;
      slider.settings.autoControls = false;
      // if autoHover is requested
      if (slider.settings.tickerHover) {
        if (slider.usingCSS) {
          idx = slider.settings.mode === 'horizontal' ? 4 : 5;
          slider.viewport.hover(function() {
            transform = el.css('-' + slider.cssPrefix + '-transform');
            value = parseFloat(transform.split(',')[idx]);
            setPositionProperty(value, 'reset', 0);
          }, function() {
            totalDimens = 0;
            slider.children.each(function(index) {
              totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
            });
            // calculate the speed ratio (used to determine the new speed to finish the paused animation)
            ratio = slider.settings.speed / totalDimens;
            // determine which property to use
            property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
            // calculate the new speed
            newSpeed = ratio * (totalDimens - (Math.abs(parseInt(value))));
            tickerLoop(newSpeed);
          });
        } else {
          // on el hover
          slider.viewport.hover(function() {
            el.stop();
          }, function() {
            // calculate the total width of children (used to calculate the speed ratio)
            totalDimens = 0;
            slider.children.each(function(index) {
              totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
            });
            // calculate the speed ratio (used to determine the new speed to finish the paused animation)
            ratio = slider.settings.speed / totalDimens;
            // determine which property to use
            property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
            // calculate the new speed
            newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
            tickerLoop(newSpeed);
          });
        }
      }
      // start the ticker loop
      tickerLoop();
    };

    /**
     * Runs a continuous loop, news ticker-style
     */
    var tickerLoop = function(resumeSpeed) {
      var speed = resumeSpeed ? resumeSpeed : slider.settings.speed,
      position = {left: 0, top: 0},
      reset = {left: 0, top: 0},
      animateProperty, resetValue, params;

      // if "next" animate left position to last child, then reset left to 0
      if (slider.settings.autoDirection === 'next') {
        position = el.find('.bx-clone').first().position();
      // if "prev" animate left position to 0, then reset left to first non-clone child
      } else {
        reset = slider.children.first().position();
      }
      animateProperty = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
      resetValue = slider.settings.mode === 'horizontal' ? -reset.left : -reset.top;
      params = {resetValue: resetValue};
      setPositionProperty(animateProperty, 'ticker', speed, params);
    };

    /**
     * Check if el is on screen
     */
    var isOnScreen = function(el) {
      var win = $(window),
      viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
      },
      bounds = el.offset();

      viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();
      bounds.right = bounds.left + el.outerWidth();
      bounds.bottom = bounds.top + el.outerHeight();

      return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };

    /**
     * Initializes keyboard events
     */
    var keyPress = function(e) {
      var activeElementTag = document.activeElement.tagName.toLowerCase(),
      tagFilters = 'input|textarea',
      p = new RegExp(activeElementTag,['i']),
      result = p.exec(tagFilters);

      if (result == null && isOnScreen(el)) {
        if (e.keyCode === 39) {
          clickNextBind(e);
          return false;
        } else if (e.keyCode === 37) {
          clickPrevBind(e);
          return false;
        }
      }
    };

    /**
     * Initializes touch events
     */
    var initTouch = function() {
      // initialize object to contain all touch values
      slider.touch = {
        start: {x: 0, y: 0},
        end: {x: 0, y: 0}
      };
      slider.viewport.bind('touchstart MSPointerDown pointerdown', onTouchStart);

      //for browsers that have implemented pointer events and fire a click after
      //every pointerup regardless of whether pointerup is on same screen location as pointerdown or not
      slider.viewport.on('click', '.bxslider a', function(e) {
        if (slider.viewport.hasClass('click-disabled')) {
          e.preventDefault();
          slider.viewport.removeClass('click-disabled');
        }
      });
    };

    /**
     * Event handler for "touchstart"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchStart = function(e) {
      //disable slider controls while user is interacting with slides to avoid slider freeze that happens on touch devices when a slide swipe happens immediately after interacting with slider controls
      slider.controls.el.addClass('disabled');

      if (slider.working) {
        e.preventDefault();
        slider.controls.el.removeClass('disabled');
      } else {
        // record the original position when touch starts
        slider.touch.originalPos = el.position();
        var orig = e.originalEvent,
        touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig];
        // record the starting touch x, y coordinates
        slider.touch.start.x = touchPoints[0].pageX;
        slider.touch.start.y = touchPoints[0].pageY;

        if (slider.viewport.get(0).setPointerCapture) {
          slider.pointerId = orig.pointerId;
          slider.viewport.get(0).setPointerCapture(slider.pointerId);
        }
        // bind a "touchmove" event to the viewport
        slider.viewport.bind('touchmove MSPointerMove pointermove', onTouchMove);
        // bind a "touchend" event to the viewport
        slider.viewport.bind('touchend MSPointerUp pointerup', onTouchEnd);
        slider.viewport.bind('MSPointerCancel pointercancel', onPointerCancel);
      }
    };

    /**
     * Cancel Pointer for Windows Phone
     *
     * @param e (event)
     *  - DOM event object
     */
    var onPointerCancel = function(e) {
      /* onPointerCancel handler is needed to deal with situations when a touchend
      doesn't fire after a touchstart (this happens on windows phones only) */
      setPositionProperty(slider.touch.originalPos.left, 'reset', 0);

      //remove handlers
      slider.controls.el.removeClass('disabled');
      slider.viewport.unbind('MSPointerCancel pointercancel', onPointerCancel);
      slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
      slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
      if (slider.viewport.get(0).releasePointerCapture) {
        slider.viewport.get(0).releasePointerCapture(slider.pointerId);
      }
    };

    /**
     * Event handler for "touchmove"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchMove = function(e) {
      var orig = e.originalEvent,
      touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
      // if scrolling on y axis, do not prevent default
      xMovement = Math.abs(touchPoints[0].pageX - slider.touch.start.x),
      yMovement = Math.abs(touchPoints[0].pageY - slider.touch.start.y),
      value = 0,
      change = 0;

      // x axis swipe
      if ((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX) {
        e.preventDefault();
      // y axis swipe
      } else if ((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY) {
        e.preventDefault();
      }
      if (slider.settings.mode !== 'fade' && slider.settings.oneToOneTouch) {
        // if horizontal, drag along x axis
        if (slider.settings.mode === 'horizontal') {
          change = touchPoints[0].pageX - slider.touch.start.x;
          value = slider.touch.originalPos.left + change;
        // if vertical, drag along y axis
        } else {
          change = touchPoints[0].pageY - slider.touch.start.y;
          value = slider.touch.originalPos.top + change;
        }
        setPositionProperty(value, 'reset', 0);
      }
    };

    /**
     * Event handler for "touchend"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchEnd = function(e) {
      slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
      //enable slider controls as soon as user stops interacing with slides
      slider.controls.el.removeClass('disabled');
      var orig    = e.originalEvent,
      touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
      value       = 0,
      distance    = 0;
      // record end x, y positions
      slider.touch.end.x = touchPoints[0].pageX;
      slider.touch.end.y = touchPoints[0].pageY;
      // if fade mode, check if absolute x distance clears the threshold
      if (slider.settings.mode === 'fade') {
        distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
        if (distance >= slider.settings.swipeThreshold) {
          if (slider.touch.start.x > slider.touch.end.x) {
            el.goToNextSlide();
          } else {
            el.goToPrevSlide();
          }
          el.stopAuto();
        }
      // not fade mode
      } else {
        // calculate distance and el's animate property
        if (slider.settings.mode === 'horizontal') {
          distance = slider.touch.end.x - slider.touch.start.x;
          value = slider.touch.originalPos.left;
        } else {
          distance = slider.touch.end.y - slider.touch.start.y;
          value = slider.touch.originalPos.top;
        }
        // if not infinite loop and first / last slide, do not attempt a slide transition
        if (!slider.settings.infiniteLoop && ((slider.active.index === 0 && distance > 0) || (slider.active.last && distance < 0))) {
          setPositionProperty(value, 'reset', 200);
        } else {
          // check if distance clears threshold
          if (Math.abs(distance) >= slider.settings.swipeThreshold) {
            if (distance < 0) {
              el.goToNextSlide();
            } else {
              el.goToPrevSlide();
            }
            el.stopAuto();
          } else {
            // el.animate(property, 200);
            setPositionProperty(value, 'reset', 200);
          }
        }
      }
      slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
      if (slider.viewport.get(0).releasePointerCapture) {
        slider.viewport.get(0).releasePointerCapture(slider.pointerId);
      }
    };

    /**
     * Window resize event callback
     */
    var resizeWindow = function(e) {
      // don't do anything if slider isn't initialized.
      if (!slider.initialized) { return; }
      // Delay if slider working.
      if (slider.working) {
        window.setTimeout(resizeWindow, 10);
      } else {
        // get the new window dimens (again, thank you IE)
        var windowWidthNew = $(window).width(),
        windowHeightNew = $(window).height();
        // make sure that it is a true window resize
        // *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
        // are resized. Can you just die already?*
        if (windowWidth !== windowWidthNew || windowHeight !== windowHeightNew) {
          // set the new window dimens
          windowWidth = windowWidthNew;
          windowHeight = windowHeightNew;
          // update all dynamic elements
          el.redrawSlider();
          // Call user resize handler
          slider.settings.onSliderResize.call(el, slider.active.index);
        }
      }
    };

    /**
     * Adds an aria-hidden=true attribute to each element
     *
     * @param startVisibleIndex (int)
     *  - the first visible element's index
     */
    var applyAriaHiddenAttributes = function(startVisibleIndex) {
      var numberOfSlidesShowing = getNumberSlidesShowing();
      // only apply attributes if the setting is enabled and not in ticker mode
      if (slider.settings.ariaHidden && !slider.settings.ticker) {
        // add aria-hidden=true to all elements
        slider.children.attr('aria-hidden', 'true');
        // get the visible elements and change to aria-hidden=false
        slider.children.slice(startVisibleIndex, startVisibleIndex + numberOfSlidesShowing).attr('aria-hidden', 'false');
      }
    };

    /**
     * Returns index according to present page range
     *
     * @param slideOndex (int)
     *  - the desired slide index
     */
    var setSlideIndex = function(slideIndex) {
      if (slideIndex < 0) {
        if (slider.settings.infiniteLoop) {
          return getPagerQty() - 1;
        }else {
          //we don't go to undefined slides
          return slider.active.index;
        }
      // if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
      } else if (slideIndex >= getPagerQty()) {
        if (slider.settings.infiniteLoop) {
          return 0;
        } else {
          //we don't move to undefined pages
          return slider.active.index;
        }
      // set active index to requested slide
      } else {
        return slideIndex;
      }
    };

    /**
     * ===================================================================================
     * = PUBLIC FUNCTIONS
     * ===================================================================================
     */

    /**
     * Performs slide transition to the specified slide
     *
     * @param slideIndex (int)
     *  - the destination slide's index (zero-based)
     *
     * @param direction (string)
     *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
     */
    el.goToSlide = function(slideIndex, direction) {
      // onSlideBefore, onSlideNext, onSlidePrev callbacks
      // Allow transition canceling based on returned value
      var performTransition = true,
      moveBy = 0,
      position = {left: 0, top: 0},
      lastChild = null,
      lastShowingIndex, eq, value, requestEl;
      // store the old index
      slider.oldIndex = slider.active.index;
      //set new index
      slider.active.index = setSlideIndex(slideIndex);

      // if plugin is currently in motion, ignore request
      if (slider.working || slider.active.index === slider.oldIndex) { return; }
      // declare that plugin is in motion
      slider.working = true;

      performTransition = slider.settings.onSlideBefore.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);

      // If transitions canceled, reset and return
      if (typeof (performTransition) !== 'undefined' && !performTransition) {
        slider.active.index = slider.oldIndex; // restore old index
        slider.working = false; // is not in motion
        return;
      }

      if (direction === 'next') {
        // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
        if (!slider.settings.onSlideNext.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
          performTransition = false;
        }
      } else if (direction === 'prev') {
        // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
        if (!slider.settings.onSlidePrev.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
          performTransition = false;
        }
      }

      // check if last slide
      slider.active.last = slider.active.index >= getPagerQty() - 1;
      // update the pager with active class
      if (slider.settings.pager || slider.settings.pagerCustom) { updatePagerActive(slider.active.index); }
      // // check for direction control update
      if (slider.settings.controls) { updateDirectionControls(); }
      // if slider is set to mode: "fade"
      if (slider.settings.mode === 'fade') {
        // if adaptiveHeight is true and next height is different from current height, animate to the new height
        if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
          slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
        }
        // fade out the visible child and reset its z-index value
        slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
        // fade in the newly requested slide
        slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex + 1).fadeIn(slider.settings.speed, function() {
          $(this).css('zIndex', slider.settings.slideZIndex);
          updateAfterSlideTransition();
        });
      // slider mode is not "fade"
      } else {
        // if adaptiveHeight is true and next height is different from current height, animate to the new height
        if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
          slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
        }
        // if carousel and not infinite loop
        if (!slider.settings.infiniteLoop && slider.carousel && slider.active.last) {
          if (slider.settings.mode === 'horizontal') {
            // get the last child position
            lastChild = slider.children.eq(slider.children.length - 1);
            position = lastChild.position();
            // calculate the position of the last slide
            moveBy = slider.viewport.width() - lastChild.outerWidth();
          } else {
            // get last showing index position
            lastShowingIndex = slider.children.length - slider.settings.minSlides;
            position = slider.children.eq(lastShowingIndex).position();
          }
          // horizontal carousel, going previous while on first slide (infiniteLoop mode)
        } else if (slider.carousel && slider.active.last && direction === 'prev') {
          // get the last child position
          eq = slider.settings.moveSlides === 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
          lastChild = el.children('.bx-clone').eq(eq);
          position = lastChild.position();
        // if infinite loop and "Next" is clicked on the last slide
        } else if (direction === 'next' && slider.active.index === 0) {
          // get the last clone position
          position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
          slider.active.last = false;
        // normal non-zero requests
        } else if (slideIndex >= 0) {
          //parseInt is applied to allow floats for slides/page
          requestEl = slideIndex * parseInt(getMoveBy());
          position = slider.children.eq(requestEl).position();
        }

        /* If the position doesn't exist
         * (e.g. if you destroy the slider on a next click),
         * it doesn't throw an error.
         */
        if (typeof (position) !== 'undefined') {
          value = slider.settings.mode === 'horizontal' ? -(position.left - moveBy) : -position.top;
          // plugin values to be animated
          setPositionProperty(value, 'slide', slider.settings.speed);
        } else {
          slider.working = false;
        }
      }
      if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
    };

    /**
     * Transitions to the next slide in the show
     */
    el.goToNextSlide = function() {
      // if infiniteLoop is false and last page is showing, disregard call
      if (!slider.settings.infiniteLoop && slider.active.last) { return; }
      var pagerIndex = parseInt(slider.active.index) + 1;
      el.goToSlide(pagerIndex, 'next');
    };

    /**
     * Transitions to the prev slide in the show
     */
    el.goToPrevSlide = function() {
      // if infiniteLoop is false and last page is showing, disregard call
      if (!slider.settings.infiniteLoop && slider.active.index === 0) { return; }
      var pagerIndex = parseInt(slider.active.index) - 1;
      el.goToSlide(pagerIndex, 'prev');
    };

    /**
     * Starts the auto show
     *
     * @param preventControlUpdate (boolean)
     *  - if true, auto controls state will not be updated
     */
    el.startAuto = function(preventControlUpdate) {
      // if an interval already exists, disregard call
      if (slider.interval) { return; }
      // create an interval
      slider.interval = setInterval(function() {
        if (slider.settings.autoDirection === 'next') {
          el.goToNextSlide();
        } else {
          el.goToPrevSlide();
        }
      }, slider.settings.pause);
      // if auto controls are displayed and preventControlUpdate is not true
      if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('stop'); }
    };

    /**
     * Stops the auto show
     *
     * @param preventControlUpdate (boolean)
     *  - if true, auto controls state will not be updated
     */
    el.stopAuto = function(preventControlUpdate) {
      // if no interval exists, disregard call
      if (!slider.interval) { return; }
      // clear the interval
      clearInterval(slider.interval);
      slider.interval = null;
      // if auto controls are displayed and preventControlUpdate is not true
      if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('start'); }
    };

    /**
     * Returns current slide index (zero-based)
     */
    el.getCurrentSlide = function() {
      return slider.active.index;
    };

    /**
     * Returns current slide element
     */
    el.getCurrentSlideElement = function() {
      return slider.children.eq(slider.active.index);
    };

    /**
     * Returns a slide element
     * @param index (int)
     *  - The index (zero-based) of the element you want returned.
     */
    el.getSlideElement = function(index) {
      return slider.children.eq(index);
    };

    /**
     * Returns number of slides in show
     */
    el.getSlideCount = function() {
      return slider.children.length;
    };

    /**
     * Return slider.working variable
     */
    el.isWorking = function() {
      return slider.working;
    };

    /**
     * Update all dynamic slider elements
     */
    el.redrawSlider = function() {
      // resize all children in ratio to new screen size
      slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
      // adjust the height
      slider.viewport.css('height', getViewportHeight());
      // update the slide position
      if (!slider.settings.ticker) { setSlidePosition(); }
      // if active.last was true before the screen resize, we want
      // to keep it last no matter what screen size we end on
      if (slider.active.last) { slider.active.index = getPagerQty() - 1; }
      // if the active index (page) no longer exists due to the resize, simply set the index as last
      if (slider.active.index >= getPagerQty()) { slider.active.last = true; }
      // if a pager is being displayed and a custom pager is not being used, update it
      if (slider.settings.pager && !slider.settings.pagerCustom) {
        populatePager();
        updatePagerActive(slider.active.index);
      }
      if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
    };

    /**
     * Destroy the current instance of the slider (revert everything back to original state)
     */
    el.destroySlider = function() {
      // don't do anything if slider has already been destroyed
      if (!slider.initialized) { return; }
      slider.initialized = false;
      $('.bx-clone', this).remove();
      slider.children.each(function() {
        if ($(this).data('origStyle') !== undefined) {
          $(this).attr('style', $(this).data('origStyle'));
        } else {
          $(this).removeAttr('style');
        }
      });
      if ($(this).data('origStyle') !== undefined) {
        this.attr('style', $(this).data('origStyle'));
      } else {
        $(this).removeAttr('style');
      }
      $(this).unwrap().unwrap();
      if (slider.controls.el) { slider.controls.el.remove(); }
      if (slider.controls.next) { slider.controls.next.remove(); }
      if (slider.controls.prev) { slider.controls.prev.remove(); }
      if (slider.pagerEl && slider.settings.controls && !slider.settings.pagerCustom) { slider.pagerEl.remove(); }
      $('.bx-caption', this).remove();
      if (slider.controls.autoEl) { slider.controls.autoEl.remove(); }
      clearInterval(slider.interval);
      if (slider.settings.responsive) { $(window).unbind('resize', resizeWindow); }
      if (slider.settings.keyboardEnabled) { $(document).unbind('keydown', keyPress); }
      //remove self reference in data
      $(this).removeData('bxSlider');
    };

    /**
     * Reload the slider (revert all DOM changes, and re-initialize)
     */
    el.reloadSlider = function(settings) {
      if (settings !== undefined) { options = settings; }
      el.destroySlider();
      init();
      //store reference to self in order to access public functions later
      $(el).data('bxSlider', this);
    };

    init();

    $(el).data('bxSlider', this);

    // returns the current jQuery object
    return this;
  };

})(jQuery);









