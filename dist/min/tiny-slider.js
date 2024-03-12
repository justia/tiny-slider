var tns=function(){var t=window,e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},n=window,i=n.cancelAnimationFrame||n.mozCancelAnimationFrame||function(t){clearTimeout(t)};function a(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function r(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function o(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function u(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var l=document.documentElement;function s(t){var e="";return t.fake&&(e=l.style.overflow,t.style.background="",t.style.overflow=l.style.overflow="hidden",l.appendChild(t)),e}function c(t,e){t.fake&&(t.remove(),l.style.overflow=e,l.offsetHeight)}function f(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function d(t){return("insertRule"in t?t.cssRules:t.rules).length}function v(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var p="classList"in document.createElement("_"),h=p?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},m=p?function(t,e){h(t,e)||t.classList.add(e)}:function(t,e){h(t,e)||(t.className+=" "+e)},g=p?function(t,e){h(t,e)&&t.classList.remove(e)}:function(t,e){h(t,e)&&(t.className=t.className.replace(e,""))};function y(t,e){return t.hasAttribute(e)}function x(t,e){return t.getAttribute(e)}function b(t){return void 0!==t.item}function C(t,e){if(t=b(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function w(t,e){t=b(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function M(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function T(t,e){"none"!==t.style.display&&(t.style.display="none")}function E(t,e){"none"===t.style.display&&(t.style.display="")}function A(t){return"none"!==window.getComputedStyle(t).display}function B(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}for(var i=document.createElement("fakeelement"),a=(t.length,0);a<t.length;a++){var r=t[a];if(void 0!==i.style[r])return r}return!1}function N(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var L=!1;try{var S=Object.defineProperty({},"passive",{get:function(){L=!0}});window.addEventListener("test",null,S)}catch(t){}var H=!!L&&{passive:!0};function D(t,e,n){for(var i in e){var a=["touchstart","touchmove"].indexOf(i)>=0&&(!n||"auto"===n)&&H;t.addEventListener(i,e[i],a)}}function R(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&H;t.removeEventListener(n,e[n],i)}}function O(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}function k(t){return t.map((t=>t.querySelector("a")||!1))}"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var I=function(t){t=a({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var n=document,l=window,p={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},b={},L=t.useLocalStorage;if(L){var S=navigator.userAgent,H=new Date;try{(b=l.localStorage)?(b.setItem(H,H),L=b.getItem(H)==H,b.removeItem(H)):L=!1,L||(b={})}catch(t){L=!1}L&&(b.tnsApp&&b.tnsApp!==S&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){b.removeItem(t)})),localStorage.tnsApp=S)}var P=b.tC?r(b.tC):o(b,"tC",function(){var t=document,e=u(),n=s(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",l=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],f=0;f<3;f++)if(r=l[f],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?c(e,n):i.remove(),a}(),L),z=b.tPL?r(b.tPL):o(b,"tPL",function(){var t,e=document,n=u(),i=s(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var l=0;l<70;l++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?c(n,i):a.remove(),t}(),L),W=b.tMQ?r(b.tMQ):o(b,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=u(),i=s(n),a=e.createElement("div"),r=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",a.className="tns-mq-test",n.appendChild(r),n.appendChild(a),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?c(n,i):a.remove(),"absolute"===t}(),L),q=b.tTf?r(b.tTf):o(b,"tTf",B("transform"),L),F=b.t3D?r(b.t3D):o(b,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=u(),a=s(i),r=n.createElement("p"),o=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?c(i,a):r.remove(),void 0!==e&&e.length>0&&"none"!==e}(q),L),j=b.tTDu?r(b.tTDu):o(b,"tTDu",B("transitionDuration"),L),V=b.tTDe?r(b.tTDe):o(b,"tTDe",B("transitionDelay"),L),$=b.tADu?r(b.tADu):o(b,"tADu",B("animationDuration"),L),G=b.tADe?r(b.tADe):o(b,"tADe",B("animationDelay"),L),Q=b.tTE?r(b.tTE):o(b,"tTE",N(j,"Transition"),L),X=b.tAE?r(b.tAE):o(b,"tAE",N($,"Animation"),L),Y=l.console&&"function"==typeof l.console.warn,K=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],J={};if(K.forEach((function(e){if("string"==typeof t[e]){var i=t[e],a=n.querySelector(i);if(J[e]=i,!a||!a.nodeName)return void(Y&&console.warn("Can't find",t[e]));t[e]=a}})),!(t.container.children.length<1)){var U=t.responsive,_=t.nested,Z="carousel"===t.mode;if(U){0 in U&&(t=a(t,U[0]),delete U[0]);var tt={};for(var et in U){var nt=U[et];nt="number"==typeof nt?{items:nt}:nt,tt[et]=nt}U=tt,tt=null}if(Z||function t(e){for(var n in e)Z||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!Z){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var it=t.animateIn,at=t.animateOut,rt=t.animateDelay,ot=t.animateNormal}var ut,lt,st="horizontal"===t.axis,ct=n.createElement("div"),ft=n.createElement("div"),dt=t.container,vt=dt.parentNode,pt=dt.outerHTML,ht=dt.children,mt=ht.length,gt=k(Array.from(ht)),yt=kn(),xt=!1;U&&ni(),Z&&(dt.className+=" tns-vpfix");var bt,Ct,wt,Mt,Tt,Et,At,Bt,Nt,Lt=t.autoWidth,St=qn("fixedWidth"),Ht=qn("edgePadding"),Dt=qn("gutter"),Rt=zn(),Ot=qn("center"),kt=Lt?1:Math.floor(qn("items")),It=qn("slideBy"),Pt=t.viewportMax||t.fixedWidthViewportWidth,zt=qn("arrowKeys"),Wt=qn("speed"),qt=t.rewind,Ft=!qt&&t.loop,jt=qn("autoHeight"),Vt=qn("controls"),$t=qn("controlsText"),Gt=qn("nav"),Qt=qn("touch"),Xt=qn("mouseDrag"),Yt=qn("autoplay"),Kt=qn("autoplayTimeout"),Jt=qn("autoplayText"),Ut=qn("autoplayHoverPause"),_t=qn("autoplayResetOnVisibility"),Zt=(At=null,Bt=qn("nonce"),Nt=document.createElement("style"),At&&Nt.setAttribute("media",At),Bt&&Nt.setAttribute("nonce",Bt),document.querySelector("head").appendChild(Nt),Nt.sheet?Nt.sheet:Nt.styleSheet),te=t.lazyload,ee=t.lazyloadSelector,ne=[],ie=Ft?(Tt=function(){if(Lt||St&&!Pt)return mt-1;var e=St?"fixedWidth":"items",n=[];if((St||t[e]<mt)&&n.push(t[e]),U)for(var i in U){var a=U[i][e];a&&(St||a<mt)&&n.push(a)}return n.length||n.push(0),Math.ceil(St?Pt/Math.min.apply(null,n):Math.max.apply(null,n))}(),Et=Z?Math.ceil((5*Tt-mt)/2):4*Tt-mt,Et=Math.max(Tt,Et),Wn("edgePadding")?Et+1:Et):0,ae=Z?mt+2*ie:mt+ie,re=!(!St&&!Lt||Ft),oe=St?Ni():null,ue=!Z||!Ft,le=st?"left":"top",se="",ce="",fe=St?function(){return Ot&&!Ft?mt-1:Math.ceil(-oe/(St+Dt))}:Lt?function(){for(var t=0;t<ae;t++)if(bt[t]>=-oe)return t}:function(){return Ot&&Z&&!Ft?mt-1:Ft||Z?Math.max(0,ae-Math.ceil(kt)):ae-1},de=Dn(qn("startIndex")),ve=de,pe=(Hn(),0),he=Lt?null:fe(),me=t.preventActionWhenRunning,ge=t.swipeAngle,ye=!ge||"?",xe=!1,be=t.onInit,Ce=new O,we=" tns-slider tns-"+t.mode,Me=dt.id||(Mt=window.tnsId,window.tnsId=Mt?Mt+1:1,"tns"+window.tnsId),Te=qn("disable"),Ee=!1,Ae=t.freezable,Be=!(!Ae||Lt)&&ei(),Ne=!1,Le={click:Pi,keydown:function(t){t=Gi(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Ue.disabled||Pi(t,-1):_e.disabled||Pi(t,1))}},Se={click:function(t){if(xe){if(me)return;ki()}var e=Qi(t=Gi(t));for(;e!==nn&&!y(e,"data-nav");)e=e.parentNode;if(y(e,"data-nav")){var n=un=Number(x(e,"data-nav")),i=St||Lt?n*mt/rn:n*kt;Ii(ze?n:Math.min(Math.ceil(i),mt-1),t),ln===n&&(pn&&ji(),un=-1)}},keydown:function(t){t=Gi(t);var e=n.activeElement;if(!y(e,"data-nav"))return;var i=[p.LEFT,p.RIGHT,p.ENTER,p.SPACE].indexOf(t.keyCode),a=Number(x(e,"data-nav"));i>=0&&(0===i?a>0&&$i(en[a-1]):1===i?a<rn-1&&$i(en[a+1]):(un=a,Ii(a,t)))}},He={mouseover:function(){pn&&(Wi(),hn=!0)},mouseout:function(){hn&&(zi(),hn=!1)}},De={visibilitychange:function(){n.hidden?pn&&(Wi(),gn=!0):gn&&(zi(),gn=!1)}},Re={keydown:function(t){t=Gi(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);e>=0&&Pi(t,0===e?-1:1)}},Oe={touchstart:Ji,touchmove:Ui,touchend:Zi,touchcancel:Zi},ke={mousedown:Ji,mousemove:Ui,mouseup:Zi,mouseleave:Zi},Ie=Wn("controls"),Pe=Wn("nav"),ze=!!Lt||t.navAsThumbnails,We=Wn("autoplay"),qe=Wn("touch"),Fe=Wn("mouseDrag"),je="tns-slide-active",Ve="tns-slide-cloned",$e="tns-complete",Ge={load:function(t){fi(Qi(t))},error:function(t){e=Qi(t),m(e,"failed"),di(e);var e}},Qe="force"===t.preventScrollOnTouch;if(Ie)var Xe,Ye,Ke=t.controlsContainer,Je=t.controlsContainer?t.controlsContainer.outerHTML:"",Ue=t.prevButton,_e=t.nextButton,Ze=t.prevButton?t.prevButton.outerHTML:"",tn=t.nextButton?t.nextButton.outerHTML:"";if(Pe)var en,nn=t.navContainer,an=t.navContainer?t.navContainer.outerHTML:"",rn=Lt?mt:na(),on=0,un=-1,ln=On(),sn=ln,cn="tns-nav-active",fn="Carousel Page ",dn=" (Current Slide)";if(We)var vn,pn,hn,mn,gn,yn="forward"===t.autoplayDirection?1:-1,xn=t.autoplayButton,bn=t.autoplayButton?t.autoplayButton.outerHTML:"",Cn=["<span class='tns-visually-hidden'>"," animation</span>"];if(qe||Fe)var wn,Mn,Tn={},En={},An=!1,Bn=st?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Lt||Sn(Te||Be),q&&(le=q,se="translate",F?(se+=st?"3d(":"3d(0px, ",ce=st?", 0px, 0px)":", 0px)"):(se+=st?"X(":"Y(",ce=")")),Z&&(dt.className=dt.className.replace("tns-vpfix","")),function(){Wn("gutter");ct.className="tns-outer",ft.className="tns-inner",ct.id=Me+"-ow",ft.id=Me+"-iw",""===dt.id&&(dt.id=Me);we+=z||Lt?" tns-subpixel":" tns-no-subpixel",we+=P?" tns-calc":" tns-no-calc",Lt&&(we+=" tns-autowidth");we+=" tns-"+t.axis,dt.className+=we,Z?((ut=n.createElement("div")).id=Me+"-mw",ut.className="tns-ovh",ct.appendChild(ut),ut.appendChild(ft)):ct.appendChild(ft);if(jt){(ut||ft).className+=" tns-ah"}if(vt.insertBefore(ct,dt),ft.appendChild(dt),v(ht,(function(t,e){m(t,"tns-item"),t.id||(t.id=Me+"-item"+e),!Z&&ot&&m(t,ot),C(t,{"aria-hidden":"true",tabindex:"-1"}),gt[e]&&C(gt[e],{"aria-hidden":"true",tabindex:"-1"})})),ie){for(var e=n.createDocumentFragment(),i=n.createDocumentFragment(),a=ie;a--;){var r=a%mt,o=ht[r].cloneNode(!0);if(m(o,Ve),w(o,"id"),i.insertBefore(o,i.firstChild),Z){var u=ht[mt-1-r].cloneNode(!0);m(u,Ve),w(u,"id"),e.appendChild(u)}}dt.insertBefore(e,dt.firstChild),dt.appendChild(i),ht=dt.children,gt=k(Array.from(ht))}}(),function(){if(!Z)for(var e=de,n=de+Math.min(mt,kt);e<n;e++){var i=ht[e];i.style.left=100*(e-de)/kt+"%",m(i,it),g(i,ot)}st&&(z||Lt?(f(Zt,"#"+Me+" > .tns-item","font-size:"+l.getComputedStyle(ht[0]).fontSize+";",d(Zt)),f(Zt,"#"+Me,"font-size:0;",d(Zt))):Z&&v(ht,(function(t,e){t.style.marginLeft=function(t){return P?P+"("+100*t+"% / "+ae+")":100*t/ae+"%"}(e)})));if(W){if(j){var a=ut&&t.autoHeight?Qn(t.speed):"";f(Zt,"#"+Me+"-mw",a,d(Zt))}a=Fn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),f(Zt,"#"+Me+"-iw",a,d(Zt)),Z&&(a=st&&!Lt?"width:"+jn(t.fixedWidth,t.gutter,t.items)+";":"",j&&(a+=Qn(Wt)),f(Zt,"#"+Me,a,d(Zt))),a=st&&!Lt?Vn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(a+=$n(t.gutter)),Z||(j&&(a+=Qn(Wt)),$&&(a+=Xn(Wt))),a&&f(Zt,"#"+Me+" > .tns-item",a,d(Zt))}else{Z&&jt&&(ut.style[j]=Wt/1e3+"s"),ft.style.cssText=Fn(Ht,Dt,St,jt),Z&&st&&!Lt&&(dt.style.width=jn(St,Dt,kt));a=st&&!Lt?Vn(St,Dt,kt):"";Dt&&(a+=$n(Dt)),a&&f(Zt,"#"+Me+" > .tns-item",a,d(Zt))}if(U&&W)for(var r in U){r=parseInt(r);var o=U[r],u=(a="",""),s="",c="",p="",h=Lt?null:qn("items",r),y=qn("fixedWidth",r),x=qn("speed",r),b=qn("edgePadding",r),C=qn("autoHeight",r),w=qn("gutter",r);j&&ut&&qn("autoHeight",r)&&"speed"in o&&(u="#"+Me+"-mw{"+Qn(x)+"}"),("edgePadding"in o||"gutter"in o)&&(s="#"+Me+"-iw{"+Fn(b,w,y,x,C)+"}"),Z&&st&&!Lt&&("fixedWidth"in o||"items"in o||St&&"gutter"in o)&&(c="width:"+jn(y,w,h)+";"),j&&"speed"in o&&(c+=Qn(x)),c&&(c="#"+Me+"{"+c+"}"),("fixedWidth"in o||St&&"gutter"in o||!Z&&"items"in o)&&(p+=Vn(y,w,h)),"gutter"in o&&(p+=$n(w)),!Z&&"speed"in o&&(j&&(p+=Qn(x)),$&&(p+=Xn(x))),p&&(p="#"+Me+" > .tns-item{"+p+"}"),(a=u+s+c+p)&&Zt.insertRule("@media (min-width: "+r/16+"em) {"+a+"}",Zt.cssRules.length)}}(),Yn();var Nn=Ft?Z?function(){var t=pe,e=he;t+=It,e-=It,Ht?(t+=1,e-=1):St&&(Rt+Dt)%(St+Dt)&&(e-=1),ie&&(de>e?de-=mt:de<t&&(de+=mt))}:function(){if(de>he)for(;de>=pe+mt;)de-=mt;else if(de<pe)for(;de<=he-mt;)de+=mt}:function(){de=Math.max(pe,Math.min(he,de))},Ln=Z?function(){var t,e,n,i,a,r,o,u,l,s,c;Ai(dt,""),j||!Wt?(Hi(),Wt&&A(dt)||ki()):(t=dt,e=le,n=se,i=ce,a=Li(),r=Wt,o=ki,u=Math.min(r,10),l=a.indexOf("%")>=0?"%":"px",a=a.replace(l,""),s=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),c=(a-s)/r*u,setTimeout((function a(){r-=u,s+=c,t.style[e]=n+s+l+i,r>0?setTimeout(a,u):o()}),u))}:function(){ne=[];var t={};t[Q]=t[X]=ki,R(ht[ve],t),D(ht[de],t),Di(ve,it,at,!0),Di(de,ot,it),Q&&X&&Wt&&A(dt)||ki()};return{version:"2.9.11",getInfo:aa,events:Ce,goTo:Ii,play:function(){Yt&&!pn&&(Fi(),mn=!1)},pause:function(){pn&&(ji(),mn=!0)},isOn:xt,updateSliderHeight:yi,refresh:Yn,destroy:function(){if(Zt.disabled=!0,Zt.ownerNode&&Zt.ownerNode.remove(),R(l,{resize:Zn}),zt&&R(n,Re),Ke&&R(Ke,Le),nn&&R(nn,Se),R(dt,He),R(dt,De),xn&&R(xn,{click:Vi}),Yt&&clearInterval(vn),Z&&Q){var e={};e[Q]=ki,R(dt,e)}Qt&&R(dt,Oe),Xt&&R(dt,ke);var i=[pt,Je,Ze,tn,an,bn];for(var a in K.forEach((function(e,n){var a="container"===e?ct:t[e];if("object"==typeof a&&a){var r=!!a.previousElementSibling&&a.previousElementSibling,o=a.parentNode;a.outerHTML=i[n],t[e]=r?r.nextElementSibling:o.firstElementChild}})),K=it=at=rt=ot=st=ct=ft=dt=vt=pt=ht=mt=lt=yt=Lt=St=Ht=Dt=Rt=kt=It=Pt=zt=Wt=qt=Ft=jt=Zt=te=bt=ne=ie=ae=re=oe=ue=le=se=ce=fe=de=ve=pe=he=ge=ye=xe=be=Ce=we=Me=Te=Ee=Ae=Be=Ne=Le=Se=He=De=Re=Oe=ke=Ie=Pe=ze=We=qe=Fe=je=$e=Ge=Ct=Vt=$t=Ke=Je=Ue=_e=Xe=Ye=Gt=nn=an=en=rn=on=un=ln=sn=cn=fn=dn=Yt=Kt=yn=Jt=Ut=xn=bn=_t=Cn=vn=pn=hn=mn=gn=Tn=En=wn=An=Mn=Bn=Qt=Xt=null,this)"rebuild"!==a&&(this[a]=null);xt=!1},rebuild:function(){return I(a(t,J))}}}function Sn(t){t&&(Vt=Gt=Qt=Xt=zt=Yt=Ut=_t=!1)}function Hn(){for(var t=Z?de-ie:de;t<0;)t+=mt;return t%mt+1}function Dn(t){return t=t?Math.max(0,Math.min(Ft?mt-1:mt-kt,t)):0,Z?t+ie:t}function Rn(t){for(null==t&&(t=de),Z&&(t-=ie);t<0;)t+=mt;return Math.floor(t%mt)}function On(){var t,e=Rn();return t=ze?e:St||Lt?Math.ceil((e+1)*rn/mt-1):Math.floor(e/kt),!Ft&&Z&&de===he&&(t=rn-1),t}function kn(){return l.innerWidth||n.documentElement.clientWidth||n.body.clientWidth}function In(t){return"top"===t?"afterbegin":"beforeend"}function Pn(t){if(null!=t){var e,i,a=n.createElement("div");return t.appendChild(a),i=(e=a.getBoundingClientRect()).right-e.left,a.remove(),i||Pn(t.parentNode)}}function zn(){var t=Ht?2*Ht-Dt:0;return Pn(vt)-t}function Wn(e){if(t[e])return!0;if(U)for(var n in U)if(U[n][e])return!0;return!1}function qn(e,n){if(null==n&&(n=yt),"items"===e&&St)return Math.floor((Rt+Dt)/(St+Dt))||1;var i=t[e];if(U)for(var a in U)n>=parseInt(a)&&e in U[a]&&(i=U[a][e]);return"slideBy"===e&&"page"===i&&(i=qn("items")),Z||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function Fn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=st?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(st?u+" 0 0":"0 "+u+" 0")+";"}return!Z&&a&&j&&i&&(r+=Qn(i)),r}function jn(t,e,n){return t?(t+e)*ae+"px":P?P+"("+100*ae+"% / "+n+")":100*ae/n+"%"}function Vn(t,e,n){var i;if(t)i=t+e+"px";else{Z||(n=Math.floor(n));var a=Z?ae:n;i=P?P+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==_?i+";":i+" !important;"}function $n(t){var e="";!1!==t&&(e=(st?"padding-":"margin-")+(st?"right":"bottom")+": "+t+"px;");return e}function Gn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Qn(t){return Gn(j,18)+"transition-duration:"+t/1e3+"s;"}function Xn(t){return Gn($,17)+"animation-duration:"+t/1e3+"s;"}function Yn(){if(Wn("autoHeight")||Lt||!st){var t=dt.querySelectorAll("img");v(t,(function(t){var e=t.src;te||(e&&e.indexOf("data:image")<0?(t.src="",D(t,Ge),m(t,"loading"),t.src=e):fi(t))})),e((function(){hi(M(t),(function(){Ct=!0}))})),Wn("autoHeight")&&(t=vi(de,Math.min(de+kt-1,ae-1))),te?Kn():e((function(){hi(M(t),Kn)}))}else Z&&Si(),Un(),_n()}function Kn(){if(Lt&&mt>1){var t=Ft?de:mt-1;!function e(){var n=ht[t].getBoundingClientRect().left,i=ht[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Jn():setTimeout((function(){e()}),16)}()}else Jn()}function Jn(){st&&!Lt||(xi(),Lt?(oe=Ni(),Ae&&(Be=ei()),he=fe(),Sn(Te||Be)):ea()),Z&&Si(),Un(),_n()}function Un(){if(bi(),ct.insertAdjacentHTML("afterbegin",`<div class="tns-liveregion visually-hidden">slide <span class="current">${li()}</span> of ${mt}</div>`),wt=ct.querySelector(".tns-liveregion .current"),We){var e=Yt?"stop":"start";xn?C(xn,{"data-action":e}):t.autoplayButtonOutput&&(ct.insertAdjacentHTML(In(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+Cn[0]+e+Cn[1]+Jt[0]+"</button>"),xn=ct.querySelector("[data-action]")),xn&&D(xn,{click:Vi}),Yt&&(Fi(),Ut&&D(dt,He),_t&&D(dt,De))}if(Pe){if(nn)C(nn,{"aria-label":"Carousel Pagination"}),v(en=nn.children,(function(t,e){C(t,{"data-nav":e,tabindex:"-1","aria-label":fn+(e+1),"aria-controls":Me})}));else{for(var n="",i=ze?"":'style="display:none"',a=0;a<mt;a++)n+='<button type="button" data-nav="'+a+'" tabindex="-1" aria-controls="'+Me+'" '+i+' aria-label="'+fn+(a+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",ct.insertAdjacentHTML(In(t.navPosition),n),nn=ct.querySelector(".tns-nav"),en=nn.children}if(ia(),j){var r=j.substring(0,j.length-18).toLowerCase(),o="transition: all "+Wt/1e3+"s";r&&(o="-"+r+"-"+o),f(Zt,"[aria-controls^="+Me+"-item]",o,d(Zt))}C(en[ln],{"aria-label":fn+(ln+1)+dn}),w(en[ln],"tabindex"),m(en[ln],cn),D(nn,Se)}Ie&&(Ke||Ue&&_e||(ct.insertAdjacentHTML(In(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" aria-label="Previous" tabindex="0" aria-controls="'+Me+'">'+$t[0]+'</button><button type="button" data-controls="next" tabindex="0" aria-controls="'+Me+'">'+$t[1]+"</button></div>"),Ke=ct.querySelector(".tns-controls")),Ue&&_e||(Ue=Ke.children[0],_e=Ke.children[1]),t.controlsContainer&&C(Ke,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&C([Ue,_e],{"aria-controls":Me,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(C(Ue,{"data-controls":"prev"}),C(_e,{"data-controls":"next"})),Xe=wi(Ue),Ye=wi(_e),Ei(),Ke?D(Ke,Le):(D(Ue,Le),D(_e,Le))),ii()}function _n(){if(Z&&Q){var e={};e[Q]=ki,D(dt,e)}Qt&&D(dt,Oe,t.preventScrollOnTouch),Xt&&D(dt,ke),zt&&D(n,Re),"inner"===_?Ce.on("outerResized",(function(){ti(),Ce.emit("innerLoaded",aa())})):(U||St||Lt||jt||!st)&&D(l,{resize:Zn}),jt&&("outer"===_?Ce.on("innerLoaded",pi):Te||pi()),ci(),Te?oi():Be&&ri(),Ce.on("indexChanged",mi),"inner"===_&&Ce.emit("innerLoaded",aa()),"function"==typeof be&&be(aa()),xt=!0}function Zn(t){e((function(){ti(Gi(t))}))}function ti(e){if(xt){"outer"===_&&Ce.emit("outerResized",aa(e)),yt=kn();var i,a=lt,r=!1;U&&(ni(),(i=a!==lt)&&Ce.emit("newBreakpointStart",aa(e)));var o,u,l=kt,s=Te,c=Be,p=zt,h=Vt,y=Gt,x=Qt,b=Xt,C=Yt,w=Ut,M=_t,A=de;if(i){var B=St,N=jt,L=$t,S=Ot,H=Jt;if(!W)var O=Dt,k=Ht}if(zt=qn("arrowKeys"),Vt=qn("controls"),Gt=qn("nav"),Qt=qn("touch"),Ot=qn("center"),Xt=qn("mouseDrag"),Yt=qn("autoplay"),Ut=qn("autoplayHoverPause"),_t=qn("autoplayResetOnVisibility"),i&&(Te=qn("disable"),St=qn("fixedWidth"),Wt=qn("speed"),jt=qn("autoHeight"),$t=qn("controlsText"),Jt=qn("autoplayText"),Kt=qn("autoplayTimeout"),W||(Ht=qn("edgePadding"),Dt=qn("gutter"))),Sn(Te),Rt=zn(),st&&!Lt||Te||(xi(),st||(ea({reset:!0}),r=!0)),(St||Lt)&&(oe=Ni(),he=fe()),(i||St)&&(kt=qn("items"),It=qn("slideBy"),(u=kt!==l)&&(St||Lt||(he=fe()),Nn())),i&&Te!==s&&(Te?oi():function(){if(!Ee)return;if(Zt.disabled=!1,dt.className+=we,Si(),Ft)for(var t=ie;t--;)Z&&E(ht[t]),E(ht[ae-t-1]);if(!Z)for(var e=de,n=de+mt;e<n;e++){var i=ht[e],a=e<de+kt?it:ot;i.style.left=100*(e-de)/kt+"%",m(i,a)}ai(),Ee=!1}()),Ae&&(i||St||Lt)&&(Be=ei())!==c&&(Be?(Hi(Li(Dn(0))),ri()):(!function(){if(!Ne)return;Ht&&W&&(ft.style.margin="");if(ie)for(var t="tns-transparent",e=ie;e--;)Z&&g(ht[e],t),g(ht[ae-e-1],t);ai(),Ne=!1}(),r=!0)),Sn(Te||Be),Yt||(Ut=_t=!1),zt!==p&&(zt?D(n,Re):R(n,Re)),Vt!==h&&(Vt?Ke?E(Ke):(Ue&&E(Ue),_e&&E(_e)):Ke?T(Ke):(Ue&&T(Ue),_e&&T(_e))),Gt!==y&&(Gt?(E(nn),ia()):T(nn)),Qt!==x&&(Qt?D(dt,Oe,t.preventScrollOnTouch):R(dt,Oe)),Xt!==b&&(Xt?D(dt,ke):R(dt,ke)),Yt!==C&&(Yt?(xn&&E(xn),pn||mn||Fi()):(xn&&T(xn),pn&&ji())),Ut!==w&&(Ut?D(dt,He):R(dt,He)),_t!==M&&(_t?D(n,De):R(n,De)),i){if(St===B&&Ot===S||(r=!0),jt!==N&&(jt||(ft.style.height="")),Vt&&$t!==L&&(Ue.innerHTML=$t[0],_e.innerHTML=$t[1]),xn&&Jt!==H){var I=Yt?1:0,P=xn.innerHTML,z=P.length-H[I].length;P.substring(z)===H[I]&&(xn.innerHTML=P.substring(0,z)+Jt[I])}}else Ot&&(St||Lt)&&(r=!0);if((u||St&&!Lt)&&(rn=na(),ia()),(o=de!==A)?(Ce.emit("indexChanged",aa()),r=!0):u?o||mi():(St||Lt)&&(ci(),bi(),ui()),u&&!Z&&function(){for(var t=de+Math.min(mt,kt),e=ae;e--;){var n=ht[e];e>=de&&e<t?(m(n,"tns-moving"),n.style.left=100*(e-de)/kt+"%",m(n,it),g(n,ot)):n.style.left&&(n.style.left="",m(n,ot),g(n,it)),g(n,at)}setTimeout((function(){v(ht,(function(t){g(t,"tns-moving")}))}),300)}(),!Te&&!Be){if(i&&!W&&(Ht===k&&Dt===O||(ft.style.cssText=Fn(Ht,Dt,St,Wt,jt)),st)){Z&&(dt.style.width=jn(St,Dt,kt));var q=Vn(St,Dt,kt)+$n(Dt);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Zt,d(Zt)-1),f(Zt,"#"+Me+" > .tns-item",q,d(Zt))}jt&&pi(),r&&(Si(),ve=de)}i&&Ce.emit("newBreakpointEnd",aa(e))}}function ei(){if(!St&&!Lt)return mt<=(Ot?kt-(kt-1)/2:kt);var t=St?(St+Dt)*mt:bt[mt],e=Ht?Rt+2*Ht:Rt+Dt;return Ot&&(e-=St?(Rt-St)/2:(Rt-(bt[de+1]-bt[de]-Dt))/2),t<=e}function ni(){for(var t in lt=0,U)t=parseInt(t),yt>=t&&(lt=t)}function ii(){!Yt&&xn&&T(xn),!Gt&&nn&&T(nn),Vt||(Ke?T(Ke):(Ue&&T(Ue),_e&&T(_e)))}function ai(){Yt&&xn&&E(xn),Gt&&nn&&E(nn),Vt&&(Ke?E(Ke):(Ue&&E(Ue),_e&&E(_e)))}function ri(){if(!Ne){if(Ht&&(ft.style.margin="0px"),ie)for(var t="tns-transparent",e=ie;e--;)Z&&m(ht[e],t),m(ht[ae-e-1],t);ii(),Ne=!0}}function oi(){if(!Ee){if(Zt.disabled=!0,dt.className=dt.className.replace(we.substring(1),""),w(dt,["style"]),Ft)for(var t=ie;t--;)Z&&T(ht[t]),T(ht[ae-t-1]);if(st&&Z||w(ft,["style"]),!Z)for(var e=de,n=de+mt;e<n;e++){var i=ht[e];w(i,["style"]),g(i,it),g(i,ot)}ii(),Ee=!0}}function ui(){var t=li();wt.innerHTML!==t&&(wt.innerHTML=t)}function li(){var t=si(),e=Rn(t[0])+1,n=Rn(t[1])+1;return e===n?e:`${e} to ${n}`}function si(t){null==t&&(t=Li());var e,n,i,a=de;if(Ot||Ht?(Lt||St)&&(n=-(parseFloat(t)+Ht),i=n+Rt+2*Ht):Lt&&(n=bt[de],i=n+Rt),Lt)bt.forEach((function(t,r){r<ae&&((Ot||Ht)&&t<=n+.5&&(a=r),i-t>=.5&&(e=r))}));else{if(St){var r=St+Dt;Ot||Ht?(a=Math.floor(n/r),e=Math.ceil(i/r-1)):e=a+Math.ceil(Rt/r)-1}else if(Ot||Ht){var o=kt-1;if(Ot?(a-=o/2,e=de+o/2):e=de+o,Ht){var u=Ht*kt/Rt;a-=u,e+=u}a=Math.floor(a),e=Math.ceil(e)}else e=a+kt-1;a=Math.max(a,0),e=Math.min(e,ae-1)}return[a,e]}function ci(){if(te&&!Te){var t=si();t.push(ee),vi.apply(null,t).forEach((function(t){if(!h(t,$e)){var e={};e[Q]=function(t){t.stopPropagation()},D(t,e),D(t,Ge),t.src=x(t,"data-src");var n=x(t,"data-srcset");n&&(t.srcset=n),m(t,"loading")}}))}}function fi(t){m(t,"loaded"),di(t)}function di(t){m(t,$e),g(t,"loading"),R(t,Ge)}function vi(t,e,n){var i=[];for(n||(n="img");t<=e;)v(ht[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function pi(){var t=vi.apply(null,si());e((function(){hi(t,yi)}))}function hi(t,n){return Ct?n():(t.forEach((function(e,n){!te&&e.complete&&di(e),h(e,$e)&&t.splice(n,1)})),t.length?void e((function(){hi(t,n)})):n())}function mi(){ci(),bi(),ui(),Ei(),function(){if(Gt&&(ln=un>=0?un:On(),un=-1,ln!==sn)){var t=en[sn],e=en[ln];C(t,{tabindex:"-1","aria-label":fn+(sn+1)}),g(t,cn),C(e,{"aria-label":fn+(ln+1)+dn}),w(e,"tabindex"),m(e,cn),sn=ln}}()}function gi(t,e){for(var n=[],i=t,a=Math.min(t+e,ae);i<a;i++)n.push(ht[i].offsetHeight);return Math.max.apply(null,n)}function yi(){var t=jt?gi(de,kt):gi(ie,mt),e=ut||ft;e.style.height!==t&&(e.style.height=t+"px")}function xi(){bt=[0];var t=st?"left":"top",e=st?"right":"bottom",n=ht[0].getBoundingClientRect()[t];v(ht,(function(i,a){a&&bt.push(i.getBoundingClientRect()[t]-n),a===ae-1&&bt.push(i.getBoundingClientRect()[e]-n)}))}function bi(){var t=si(),e=t[0],n=t[1];v(ht,(function(t,i){i>=e&&i<=n?y(t,"aria-hidden")&&(w(t,["aria-hidden","tabindex"]),m(t,je),gt[i]&&w(gt[i],["aria-hidden","tabindex"])):y(t,"aria-hidden")||(C(t,{"aria-hidden":"true",tabindex:"-1"}),g(t,je),gt[i]&&C(gt[i],{"aria-hidden":"true",tabindex:"-1"}))}))}function Ci(t){return t.nodeName.toLowerCase()}function wi(t){return"button"===Ci(t)}function Mi(t){return"true"===t.getAttribute("aria-disabled")}function Ti(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Ei(){if(Vt&&!qt&&!Ft){var t=Xe?Ue.disabled:Mi(Ue),e=Ye?_e.disabled:Mi(_e),n=de<=pe,i=!qt&&de>=he;n&&!t&&Ti(Xe,Ue,!0),!n&&t&&Ti(Xe,Ue,!1),i&&!e&&Ti(Ye,_e,!0),!i&&e&&Ti(Ye,_e,!1)}}function Ai(t,e){j&&(t.style[j]=e)}function Bi(t){return null==t&&(t=de),Lt?(Rt-(Ht?Dt:0)-(bt[t+1]-bt[t]-Dt))/2:St?(Rt-St)/2:(kt-1)/2}function Ni(){var t=Rt+(Ht?Dt:0)-(St?(St+Dt)*ae:bt[ae]);return Ot&&!Ft&&(t=St?-(St+Dt)*(ae-1)-Bi():Bi(ae-1)-bt[ae-1]),t>0&&(t=0),t}function Li(t){var e;if(null==t&&(t=de),st&&!Lt)if(St)e=-(St+Dt)*t,Ot&&(e+=Bi());else{var n=q?ae:kt;Ot&&(t-=Bi()),e=100*-t/n}else e=-bt[t],Ot&&Lt&&(e+=Bi());return re&&(e=Math.max(e,oe)),e+=!st||Lt||St?"px":"%"}function Si(t){Ai(dt,"0s"),Hi(t)}function Hi(t){null==t&&(t=Li()),dt.style[le]=se+t+ce}function Di(t,e,n,i){var a=t+kt;Ft||(a=Math.min(a,ae));for(var r=t;r<a;r++){var o=ht[r];i||(o.style.left=100*(r-de)/kt+"%"),rt&&V&&(o.style[V]=o.style[G]=rt*(r-t)/1e3+"s"),g(o,e),m(o,n),i&&ne.push(o)}}function Ri(t,e){ue&&Nn(),(de!==ve||e)&&(Ce.emit("indexChanged",aa()),Ce.emit("transitionStart",aa()),jt&&pi(),pn&&t&&["click","keydown"].indexOf(t.type)>=0&&ji(),xe=!0,Ln())}function Oi(t){return t.toLowerCase().replace(/-/g,"")}function ki(t){if(Z||xe){if(Ce.emit("transitionEnd",aa(t)),!Z&&ne.length>0)for(var e=0;e<ne.length;e++){var n=ne[e];n.style.left="",G&&V&&(n.style[G]="",n.style[V]=""),g(n,at),m(n,ot)}if(!t||!Z&&t.target.parentNode===dt||t.target===dt&&Oi(t.propertyName)===Oi(le)){if(!ue){var i=de;Nn(),de!==i&&(Ce.emit("indexChanged",aa()),Si())}"inner"===_&&Ce.emit("innerLoaded",aa()),xe=!1,ve=de}}}function Ii(t,e){if(!Be)if("prev"===t)Pi(e,-1);else if("next"===t)Pi(e,1);else{if(xe){if(me)return;ki()}var n=Rn(),i=0;if("first"===t?i=-n:"last"===t?i=Z?mt-kt-n:mt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(mt-1,t))),i=t-n)),!Z&&i&&Math.abs(i)<kt){var a=i>0?1:-1;i+=de+i-mt>=pe?mt*a:2*mt*a*-1}de+=i,Z&&Ft&&(de<pe&&(de+=mt),de>he&&(de-=mt)),Rn(de)!==Rn(ve)&&Ri(e)}}function Pi(t,e){if(xe){if(me)return;ki()}var n;if(!e){for(var i=Qi(t=Gi(t));i!==Ke&&[Ue,_e].indexOf(i)<0;)i=i.parentNode;var a=[Ue,_e].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(qt){if(de===pe&&-1===e)return void Ii("last",t);if(de===he&&1===e)return void Ii("first",t)}e&&(de+=It*e,Lt&&(de=Math.floor(de)),Ri(n||t&&"keydown"===t.type?t:null))}function zi(){vn=setInterval((function(){Pi(null,yn)}),Kt),pn=!0}function Wi(){clearInterval(vn),pn=!1}function qi(t,e){C(xn,{"data-action":t}),xn.innerHTML=Cn[0]+t+Cn[1]+e}function Fi(){zi(),xn&&qi("stop",Jt[1])}function ji(){Wi(),xn&&qi("start",Jt[0])}function Vi(){pn?(ji(),mn=!0):(Fi(),mn=!1)}function $i(t){t.focus()}function Gi(t){return Xi(t=t||l.event)?t.changedTouches[0]:t}function Qi(t){return t.target||l.event.srcElement}function Xi(t){return t.type.indexOf("touch")>=0}function Yi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Ki(){return r=En.y-Tn.y,o=En.x-Tn.x,e=Math.atan2(r,o)*(180/Math.PI),n=ge,i=!1,(a=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":a<=n&&(i="vertical"),i===t.axis;var e,n,i,a,r,o}function Ji(t){if(xe){if(me)return;ki()}Yt&&pn&&Wi(),An=!0,Mn&&(i(Mn),Mn=null);var e=Gi(t);Ce.emit(Xi(t)?"touchStart":"dragStart",aa(t)),!Xi(t)&&["img","a"].indexOf(Ci(Qi(t)))>=0&&Yi(t),En.x=Tn.x=e.clientX,En.y=Tn.y=e.clientY,Z&&(wn=parseFloat(dt.style[le].replace(se,"")),Ai(dt,"0s"))}function Ui(t){if(An){var n=Gi(t);En.x=n.clientX,En.y=n.clientY,Z?Mn||(Mn=e((function(){_i(t)}))):("?"===ye&&(ye=Ki()),ye&&(Qe=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Qe&&t.preventDefault()}}function _i(t){if(ye){if(i(Mn),An&&(Mn=e((function(){_i(t)}))),"?"===ye&&(ye=Ki()),ye){!Qe&&Xi(t)&&(Qe=!0);try{t.type&&Ce.emit(Xi(t)?"touchMove":"dragMove",aa(t))}catch(t){}var n=wn,a=Bn(En,Tn);if(!st||St||Lt)n+=a,n+="px";else n+=q?a*kt*100/((Rt+Dt)*ae):100*a/(Rt+Dt),n+="%";dt.style[le]=se+n+ce}}else An=!1}function Zi(n){if(An){Mn&&(i(Mn),Mn=null),Z&&Ai(dt,""),An=!1;var a=Gi(n);En.x=a.clientX,En.y=a.clientY;var r=Bn(En,Tn);if(Math.abs(r)){if(!Xi(n)){var o=Qi(n);D(o,{click:function t(e){Yi(e),R(o,{click:t})}})}Z?Mn=e((function(){if(st&&!Lt){var t=-r*kt/(Rt+Dt);t=r>0?Math.floor(t):Math.ceil(t),de+=t}else{var e=-(wn+r);if(e<=0)de=pe;else if(e>=bt[ae-1])de=he;else for(var i=0;i<ae&&e>=bt[i];)de=i,e>bt[i]&&r<0&&(de+=1),i++}Ri(n,r),Ce.emit(Xi(n)?"touchEnd":"dragEnd",aa(n))})):ye&&Pi(n,r>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(Qe=!1),ge&&(ye="?"),Yt&&!pn&&zi()}function ta(t,e=""){t.style.height=e,Array.from(ht).forEach((t=>{t.style.height=e}))}function ea(t={reset:!1}){var e=ut||ft;if(t.reset&&ta(e),st||qn("autoHeight"))e.style.height=bt[de+kt]-bt[de]+"px";else{var{height:n}=Array.from(ht).sort(((t,e)=>{var n=t.getBoundingClientRect().height;return e.getBoundingClientRect().height-n}))[0].getBoundingClientRect();ta(e,`${n}px`),xi()}}function na(){var t=St?(St+Dt)*mt/Rt:mt/kt;return Math.min(Math.ceil(t),mt)}function ia(){if(Gt&&!ze&&rn!==on){var t=on,e=rn,n=E;for(on>rn&&(t=rn,e=on,n=T);t<e;)n(en[t]),t++;on=rn}}function aa(t){return{container:dt,slideItems:ht,navContainer:nn,navItems:en,controlsContainer:Ke,hasControls:Ie,prevButton:Ue,nextButton:_e,items:kt,slideBy:It,cloneCount:ie,slideCount:mt,slideCountNew:ae,index:de,indexCached:ve,displayIndex:Hn(),navCurrentIndex:ln,navCurrentIndexCached:sn,pages:rn,pagesCached:on,sheet:Zt,isOn:xt,event:t||{}}}Y&&console.warn("No slides found in",t.container)};return I}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
