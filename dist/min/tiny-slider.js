var tns=function(){var t=window,e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},n=window,i=n.cancelAnimationFrame||n.mozCancelAnimationFrame||function(t){clearTimeout(t)};function a(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function r(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function o(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function u(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var l=document.documentElement;function s(t){var e="";return t.fake&&(e=l.style.overflow,t.style.background="",t.style.overflow=l.style.overflow="hidden",l.appendChild(t)),e}function c(t,e){t.fake&&(t.remove(),l.style.overflow=e,l.offsetHeight)}function f(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function d(t){return("insertRule"in t?t.cssRules:t.rules).length}function v(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var p="classList"in document.createElement("_"),h=p?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},m=p?function(t,e){h(t,e)||t.classList.add(e)}:function(t,e){h(t,e)||(t.className+=" "+e)},g=p?function(t,e){h(t,e)&&t.classList.remove(e)}:function(t,e){h(t,e)&&(t.className=t.className.replace(e,""))};function y(t,e){return t.hasAttribute(e)}function x(t,e){return t.getAttribute(e)}function b(t){return void 0!==t.item}function w(t,e){if(t=b(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function C(t,e){t=b(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function M(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function T(t,e){"none"!==t.style.display&&(t.style.display="none")}function E(t,e){"none"===t.style.display&&(t.style.display="")}function A(t){return"none"!==window.getComputedStyle(t).display}function B(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}for(var i=document.createElement("fakeelement"),a=(t.length,0);a<t.length;a++){var r=t[a];if(void 0!==i.style[r])return r}return!1}function N(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var L=!1;try{var S=Object.defineProperty({},"passive",{get:function(){L=!0}});window.addEventListener("test",null,S)}catch(t){}var O=!!L&&{passive:!0};function H(t,e,n){for(var i in e){var a=["touchstart","touchmove"].indexOf(i)>=0&&(!n||"auto"===n)&&O;t.addEventListener(i,e[i],a)}}function k(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&O;t.removeEventListener(n,e[n],i)}}function D(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}function R(t){return t.map((t=>t.querySelector(".ui-button.-cta")||!1))}"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var I=function(t){t=a({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var n=document,l=window,p={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},b={},L=t.useLocalStorage;if(L){var S=navigator.userAgent,O=new Date;try{(b=l.localStorage)?(b.setItem(O,O),L=b.getItem(O)==O,b.removeItem(O)):L=!1,L||(b={})}catch(t){L=!1}L&&(b.tnsApp&&b.tnsApp!==S&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){b.removeItem(t)})),localStorage.tnsApp=S)}var P=b.tC?r(b.tC):o(b,"tC",function(){var t=document,e=u(),n=s(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",l=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],f=0;f<3;f++)if(r=l[f],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?c(e,n):i.remove(),a}(),L),W=b.tPL?r(b.tPL):o(b,"tPL",function(){var t,e=document,n=u(),i=s(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var l=0;l<70;l++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?c(n,i):a.remove(),t}(),L),z=b.tMQ?r(b.tMQ):o(b,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=u(),i=s(n),a=e.createElement("div"),r=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",a.className="tns-mq-test",n.appendChild(r),n.appendChild(a),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?c(n,i):a.remove(),"absolute"===t}(),L),q=b.tTf?r(b.tTf):o(b,"tTf",B("transform"),L),F=b.t3D?r(b.t3D):o(b,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=u(),a=s(i),r=n.createElement("p"),o=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?c(i,a):r.remove(),void 0!==e&&e.length>0&&"none"!==e}(q),L),j=b.tTDu?r(b.tTDu):o(b,"tTDu",B("transitionDuration"),L),V=b.tTDe?r(b.tTDe):o(b,"tTDe",B("transitionDelay"),L),Z=b.tADu?r(b.tADu):o(b,"tADu",B("animationDuration"),L),$=b.tADe?r(b.tADe):o(b,"tADe",B("animationDelay"),L),G=b.tTE?r(b.tTE):o(b,"tTE",N(j,"Transition"),L),Q=b.tAE?r(b.tAE):o(b,"tAE",N(Z,"Animation"),L),X=l.console&&"function"==typeof l.console.warn,Y=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],K={};if(Y.forEach((function(e){if("string"==typeof t[e]){var i=t[e],a=n.querySelector(i);if(K[e]=i,!a||!a.nodeName)return void(X&&console.warn("Can't find",t[e]));t[e]=a}})),!(t.container.children.length<1)){var J=t.responsive,U=t.nested,_="carousel"===t.mode;if(J){0 in J&&(t=a(t,J[0]),delete J[0]);var tt={};for(var et in J){var nt=J[et];nt="number"==typeof nt?{items:nt}:nt,tt[et]=nt}J=tt,tt=null}if(_||function t(e){for(var n in e)_||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!_){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var it=t.animateIn,at=t.animateOut,rt=t.animateDelay,ot=t.animateNormal}var ut,lt="horizontal"===t.axis,st=n.createElement("div"),ct=n.createElement("div"),ft=t.container,dt=ft.parentNode,vt=ft.outerHTML,pt=ft.children,ht=pt.length,mt=R(Array.from(pt));breakpointZone,windowWidth=Hn(),isOn=!1,J&&_n(),_&&(ft.className+=" tns-vpfix");var gt,yt,xt,bt,wt,Ct,Mt,Tt,Et,At=t.autoWidth,Bt=Pn("fixedWidth"),Nt=Pn("edgePadding"),Lt=Pn("gutter"),St=Rn(),Ot=Pn("center"),Ht=At?1:Math.floor(Pn("items")),kt=Pn("slideBy"),Dt=t.viewportMax||t.fixedWidthViewportWidth,Rt=Pn("arrowKeys"),It=Pn("speed"),Pt=t.rewind,Wt=!Pt&&t.loop,zt=Pn("autoHeight"),qt=Pn("controls"),Ft=Pn("controlsText"),jt=Pn("nav"),Vt=Pn("touch"),Zt=Pn("mouseDrag"),$t=Pn("autoplay"),Gt=Pn("autoplayTimeout"),Qt=Pn("autoplayText"),Xt=Pn("autoplayHoverPause"),Yt=Pn("autoplayResetOnVisibility"),Kt=(Mt=null,Tt=Pn("nonce"),Et=document.createElement("style"),Mt&&Et.setAttribute("media",Mt),Tt&&Et.setAttribute("nonce",Tt),document.querySelector("head").appendChild(Et),Et.sheet?Et.sheet:Et.styleSheet),Jt=t.lazyload,Ut=t.lazyloadSelector,_t=[],te=Wt?(wt=function(){if(At||Bt&&!Dt)return ht-1;var e=Bt?"fixedWidth":"items",n=[];if((Bt||t[e]<ht)&&n.push(t[e]),J)for(var i in J){var a=J[i][e];a&&(Bt||a<ht)&&n.push(a)}return n.length||n.push(0),Math.ceil(Bt?Dt/Math.min.apply(null,n):Math.max.apply(null,n))}(),Ct=_?Math.ceil((5*wt-ht)/2):4*wt-ht,Ct=Math.max(wt,Ct),In("edgePadding")?Ct+1:Ct):0,ee=_?ht+2*te:ht+te,ne=!(!Bt&&!At||Wt),ie=Bt?Ei():null,ae=!_||!Wt,re=lt?"left":"top",oe="",ue="",le=Bt?function(){return Ot&&!Wt?ht-1:Math.ceil(-ie/(Bt+Lt))}:At?function(){for(var t=0;t<ee;t++)if(gt[t]>=-ie)return t}:function(){return Ot&&_&&!Wt?ht-1:Wt||_?Math.max(0,ee-Math.ceil(Ht)):ee-1},se=Ln(Pn("startIndex")),ce=se,fe=(Nn(),0),de=At?null:le(),ve=t.preventActionWhenRunning,pe=t.swipeAngle,he=!pe||"?",me=!1,ge=t.onInit,ye=new D,xe=" tns-slider tns-"+t.mode,be=ft.id||(bt=window.tnsId,window.tnsId=bt?bt+1:1,"tns"+window.tnsId),we=Pn("disable"),Ce=!1,Me=t.freezable,Te=!(!Me||At)&&Un(),Ee=!1,Ae={click:Di,keydown:function(t){t=ji(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Xe.disabled||Di(t,-1):Ye.disabled||Di(t,1))}},Be={click:function(t){if(me){if(ve)return;Hi()}var e=Vi(t=ji(t));for(;e!==_e&&!y(e,"data-nav");)e=e.parentNode;if(y(e,"data-nav")){var n=an=Number(x(e,"data-nav")),i=Bt||At?n*ht/en:n*Ht;ki(Re?n:Math.min(Math.ceil(i),ht-1),t),rn===n&&(fn&&zi(),an=-1)}},keydown:function(t){t=ji(t);var e=n.activeElement;if(!y(e,"data-nav"))return;var i=[p.LEFT,p.RIGHT,p.ENTER,p.SPACE].indexOf(t.keyCode),a=Number(x(e,"data-nav"));i>=0&&(0===i?a>0&&Fi(Ue[a-1]):1===i?a<en-1&&Fi(Ue[a+1]):(an=a,ki(a,t)))}},Ne={mouseover:function(){fn&&(Ii(),dn=!0)},mouseout:function(){dn&&(Ri(),dn=!1)}},Le={visibilitychange:function(){n.hidden?fn&&(Ii(),pn=!0):pn&&(Ri(),pn=!1)}},Se={keydown:function(t){t=ji(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);e>=0&&Di(t,0===e?-1:1)}},Oe={touchstart:Qi,touchmove:Xi,touchend:Ki,touchcancel:Ki},He={mousedown:Qi,mousemove:Xi,mouseup:Ki,mouseleave:Ki},ke=In("controls"),De=In("nav"),Re=!!At||t.navAsThumbnails,Ie=In("autoplay"),Pe=In("touch"),We=In("mouseDrag"),ze="tns-slide-active",qe="tns-slide-cloned",Fe="tns-complete",je={load:function(t){li(Vi(t))},error:function(t){e=Vi(t),m(e,"failed"),si(e);var e}},Ve="force"===t.preventScrollOnTouch;if(ke)var Ze,$e,Ge=t.controlsContainer,Qe=t.controlsContainer?t.controlsContainer.outerHTML:"",Xe=t.prevButton,Ye=t.nextButton,Ke=t.prevButton?t.prevButton.outerHTML:"",Je=t.nextButton?t.nextButton.outerHTML:"";if(De)var Ue,_e=t.navContainer,tn=t.navContainer?t.navContainer.outerHTML:"",en=At?ht:_i(),nn=0,an=-1,rn=On(),on=rn,un="tns-nav-active",ln="Carousel Page ",sn=" (Current Slide)";if(Ie)var cn,fn,dn,vn,pn,hn="forward"===t.autoplayDirection?1:-1,mn=t.autoplayButton,gn=t.autoplayButton?t.autoplayButton.outerHTML:"",yn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Pe||We)var xn,bn,wn={},Cn={},Mn=!1,Tn=lt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};At||Bn(we||Te),q&&(re=q,oe="translate",F?(oe+=lt?"3d(":"3d(0px, ",ue=lt?", 0px, 0px)":", 0px)"):(oe+=lt?"X(":"Y(",ue=")")),_&&(ft.className=ft.className.replace("tns-vpfix","")),function(){In("gutter");st.className="tns-outer",ct.className="tns-inner",st.id=be+"-ow",ct.id=be+"-iw",""===ft.id&&(ft.id=be);xe+=W||At?" tns-subpixel":" tns-no-subpixel",xe+=P?" tns-calc":" tns-no-calc",At&&(xe+=" tns-autowidth");xe+=" tns-"+t.axis,ft.className+=xe,_?((ut=n.createElement("div")).id=be+"-mw",ut.className="tns-ovh",st.appendChild(ut),ut.appendChild(ct)):st.appendChild(ct);if(zt){(ut||ct).className+=" tns-ah"}if(dt.insertBefore(st,ft),ct.appendChild(ft),v(pt,(function(t,e){m(t,"tns-item"),t.id||(t.id=be+"-item"+e),!_&&ot&&m(t,ot),w(t,{"aria-hidden":"true",tabindex:"-1"}),mt[e]&&w(mt[e],{"aria-hidden":"true",tabindex:"-1"})})),te){for(var e=n.createDocumentFragment(),i=n.createDocumentFragment(),a=te;a--;){var r=a%ht,o=pt[r].cloneNode(!0);if(m(o,qe),C(o,"id"),i.insertBefore(o,i.firstChild),_){var u=pt[ht-1-r].cloneNode(!0);m(u,qe),C(u,"id"),e.appendChild(u)}}ft.insertBefore(e,ft.firstChild),ft.appendChild(i),pt=ft.children,mt=R(Array.from(pt))}}(),function(){if(!_)for(var e=se,n=se+Math.min(ht,Ht);e<n;e++){var i=pt[e];i.style.left=100*(e-se)/Ht+"%",m(i,it),g(i,ot)}lt&&(W||At?(f(Kt,"#"+be+" > .tns-item","font-size:"+l.getComputedStyle(pt[0]).fontSize+";",d(Kt)),f(Kt,"#"+be,"font-size:0;",d(Kt))):_&&v(pt,(function(t,e){t.style.marginLeft=function(t){return P?P+"("+100*t+"% / "+ee+")":100*t/ee+"%"}(e)})));if(z){if(j){var a=ut&&t.autoHeight?Vn(t.speed):"";f(Kt,"#"+be+"-mw",a,d(Kt))}a=Wn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),f(Kt,"#"+be+"-iw",a,d(Kt)),_&&(a=lt&&!At?"width:"+zn(t.fixedWidth,t.gutter,t.items)+";":"",j&&(a+=Vn(It)),f(Kt,"#"+be,a,d(Kt))),a=lt&&!At?qn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(a+=Fn(t.gutter)),_||(j&&(a+=Vn(It)),Z&&(a+=Zn(It))),a&&f(Kt,"#"+be+" > .tns-item",a,d(Kt))}else{_&&zt&&(ut.style[j]=It/1e3+"s"),ct.style.cssText=Wn(Nt,Lt,Bt,zt),_&&lt&&!At&&(ft.style.width=zn(Bt,Lt,Ht));a=lt&&!At?qn(Bt,Lt,Ht):"";Lt&&(a+=Fn(Lt)),a&&f(Kt,"#"+be+" > .tns-item",a,d(Kt))}if(J&&z)for(var r in J){r=parseInt(r);var o=J[r],u=(a="",""),s="",c="",p="",h=At?null:Pn("items",r),y=Pn("fixedWidth",r),x=Pn("speed",r),b=Pn("edgePadding",r),w=Pn("autoHeight",r),C=Pn("gutter",r);j&&ut&&Pn("autoHeight",r)&&"speed"in o&&(u="#"+be+"-mw{"+Vn(x)+"}"),("edgePadding"in o||"gutter"in o)&&(s="#"+be+"-iw{"+Wn(b,C,y,x,w)+"}"),_&&lt&&!At&&("fixedWidth"in o||"items"in o||Bt&&"gutter"in o)&&(c="width:"+zn(y,C,h)+";"),j&&"speed"in o&&(c+=Vn(x)),c&&(c="#"+be+"{"+c+"}"),("fixedWidth"in o||Bt&&"gutter"in o||!_&&"items"in o)&&(p+=qn(y,C,h)),"gutter"in o&&(p+=Fn(C)),!_&&"speed"in o&&(j&&(p+=Vn(x)),Z&&(p+=Zn(x))),p&&(p="#"+be+" > .tns-item{"+p+"}"),(a=u+s+c+p)&&Kt.insertRule("@media (min-width: "+r/16+"em) {"+a+"}",Kt.cssRules.length)}}(),$n();var En=Wt?_?function(){var t=fe,e=de;t+=kt,e-=kt,Nt?(t+=1,e-=1):Bt&&(St+Lt)%(Bt+Lt)&&(e-=1),te&&(se>e?se-=ht:se<t&&(se+=ht))}:function(){if(se>de)for(;se>=fe+ht;)se-=ht;else if(se<fe)for(;se<=de-ht;)se+=ht}:function(){se=Math.max(fe,Math.min(de,se))},An=_?function(){var t,e,n,i,a,r,o,u,l,s,c;Mi(ft,""),j||!It?(Ni(),It&&A(ft)||Hi()):(t=ft,e=re,n=oe,i=ue,a=Ai(),r=It,o=Hi,u=Math.min(r,10),l=a.indexOf("%")>=0?"%":"px",a=a.replace(l,""),s=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),c=(a-s)/r*u,setTimeout((function a(){r-=u,s+=c,t.style[e]=n+s+l+i,r>0?setTimeout(a,u):o()}),u))}:function(){_t=[];var t={};t[G]=t[Q]=Hi,k(pt[ce],t),H(pt[se],t),Li(ce,it,at,!0),Li(se,ot,it),G&&Q&&It&&A(ft)||Hi()};return{version:"2.9.10",getInfo:ea,events:ye,goTo:ki,play:function(){$t&&!fn&&(Wi(),vn=!1)},pause:function(){fn&&(zi(),vn=!0)},isOn:isOn,updateSliderHeight:hi,refresh:$n,destroy:function(){if(Kt.disabled=!0,Kt.ownerNode&&Kt.ownerNode.remove(),k(l,{resize:Kn}),Rt&&k(n,Se),Ge&&k(Ge,Ae),_e&&k(_e,Be),k(ft,Ne),k(ft,Le),mn&&k(mn,{click:qi}),$t&&clearInterval(cn),_&&G){var e={};e[G]=Hi,k(ft,e)}Vt&&k(ft,Oe),Zt&&k(ft,He);var i=[vt,Qe,Ke,Je,tn,gn];for(var a in Y.forEach((function(e,n){var a="container"===e?st:t[e];if("object"==typeof a&&a){var r=!!a.previousElementSibling&&a.previousElementSibling,o=a.parentNode;a.outerHTML=i[n],t[e]=r?r.nextElementSibling:o.firstElementChild}})),Y=it=at=rt=ot=lt=st=ct=ft=dt=vt=pt=ht=breakpointZone=windowWidth=At=Bt=Nt=Lt=St=Ht=kt=Dt=Rt=It=Pt=Wt=zt=Kt=Jt=gt=_t=te=ee=ne=ie=ae=re=oe=ue=le=se=ce=fe=de=pe=he=me=ge=ye=xe=be=we=Ce=Me=Te=Ee=Ae=Be=Ne=Le=Se=Oe=He=ke=De=Re=Ie=Pe=We=ze=Fe=je=yt=qt=Ft=Ge=Qe=Xe=Ye=Ze=$e=jt=_e=tn=Ue=en=nn=an=rn=on=un=ln=sn=$t=Gt=hn=Qt=Xt=mn=gn=Yt=yn=cn=fn=dn=vn=pn=wn=Cn=xn=Mn=bn=Tn=Vt=Zt=null,this)"rebuild"!==a&&(this[a]=null);isOn=!1},rebuild:function(){return I(a(t,K))}}}function Bn(t){t&&(qt=jt=Vt=Zt=Rt=$t=Xt=Yt=!1)}function Nn(){for(var t=_?se-te:se;t<0;)t+=ht;return t%ht+1}function Ln(t){return t=t?Math.max(0,Math.min(Wt?ht-1:ht-Ht,t)):0,_?t+te:t}function Sn(t){for(null==t&&(t=se),_&&(t-=te);t<0;)t+=ht;return Math.floor(t%ht)}function On(){var t,e=Sn();return t=Re?e:Bt||At?Math.ceil((e+1)*en/ht-1):Math.floor(e/Ht),!Wt&&_&&se===de&&(t=en-1),t}function Hn(){return l.innerWidth||n.documentElement.clientWidth||n.body.clientWidth}function kn(t){return"top"===t?"afterbegin":"beforeend"}function Dn(t){if(null!=t){var e,i,a=n.createElement("div");return t.appendChild(a),i=(e=a.getBoundingClientRect()).right-e.left,a.remove(),i||Dn(t.parentNode)}}function Rn(){var t=Nt?2*Nt-Lt:0;return Dn(dt)-t}function In(e){if(t[e])return!0;if(J)for(var n in J)if(J[n][e])return!0;return!1}function Pn(e,n){if(null==n&&(n=windowWidth),"items"===e&&Bt)return Math.floor((St+Lt)/(Bt+Lt))||1;var i=t[e];if(J)for(var a in J)n>=parseInt(a)&&e in J[a]&&(i=J[a][e]);return"slideBy"===e&&"page"===i&&(i=Pn("items")),_||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function Wn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=lt?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(lt?u+" 0 0":"0 "+u+" 0")+";"}return!_&&a&&j&&i&&(r+=Vn(i)),r}function zn(t,e,n){return t?(t+e)*ee+"px":P?P+"("+100*ee+"% / "+n+")":100*ee/n+"%"}function qn(t,e,n){var i;if(t)i=t+e+"px";else{_||(n=Math.floor(n));var a=_?ee:n;i=P?P+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==U?i+";":i+" !important;"}function Fn(t){var e="";!1!==t&&(e=(lt?"padding-":"margin-")+(lt?"right":"bottom")+": "+t+"px;");return e}function jn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Vn(t){return jn(j,18)+"transition-duration:"+t/1e3+"s;"}function Zn(t){return jn(Z,17)+"animation-duration:"+t/1e3+"s;"}function $n(){if(In("autoHeight")||At||!lt){var t=ft.querySelectorAll("img");v(t,(function(t){var e=t.src;Jt||(e&&e.indexOf("data:image")<0?(t.src="",H(t,je),m(t,"loading"),t.src=e):li(t))})),e((function(){di(M(t),(function(){yt=!0}))})),In("autoHeight")&&(t=ci(se,Math.min(se+Ht-1,ee-1))),Jt?Gn():e((function(){di(M(t),Gn)}))}else _&&Bi(),Xn(),Yn()}function Gn(){if(At&&ht>1){var t=Wt?se:ht-1;!function e(){var n=pt[t].getBoundingClientRect().left,i=pt[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Qn():setTimeout((function(){e()}),16)}()}else Qn()}function Qn(){lt&&!At||(mi(),At?(ie=Ei(),Me&&(Te=Un()),de=le(),Bn(we||Te)):Ui()),_&&Bi(),Xn(),Yn()}function Xn(){if(gi(),st.insertAdjacentHTML("afterbegin",`<div class="tns-liveregion visually-hidden">slide <span class="current">${ri()}</span> of ${ht}</div>`),xt=st.querySelector(".tns-liveregion .current"),Ie){var e=$t?"stop":"start";mn?w(mn,{"data-action":e}):t.autoplayButtonOutput&&(st.insertAdjacentHTML(kn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+yn[0]+e+yn[1]+Qt[0]+"</button>"),mn=st.querySelector("[data-action]")),mn&&H(mn,{click:qi}),$t&&(Wi(),Xt&&H(ft,Ne),Yt&&H(ft,Le))}if(De){if(_e)w(_e,{"aria-label":"Carousel Pagination"}),v(Ue=_e.children,(function(t,e){w(t,{"data-nav":e,tabindex:"-1","aria-label":ln+(e+1),"aria-controls":be})}));else{for(var n="",i=Re?"":'style="display:none"',a=0;a<ht;a++)n+='<button type="button" data-nav="'+a+'" tabindex="-1" aria-controls="'+be+'" '+i+' aria-label="'+ln+(a+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",st.insertAdjacentHTML(kn(t.navPosition),n),_e=st.querySelector(".tns-nav"),Ue=_e.children}if(ta(),j){var r=j.substring(0,j.length-18).toLowerCase(),o="transition: all "+It/1e3+"s";r&&(o="-"+r+"-"+o),f(Kt,"[aria-controls^="+be+"-item]",o,d(Kt))}w(Ue[rn],{"aria-label":ln+(rn+1)+sn}),C(Ue[rn],"tabindex"),m(Ue[rn],un),H(_e,Be)}ke&&(Ge||Xe&&Ye||(st.insertAdjacentHTML(kn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" aria-label="Previously" tabindex="0" aria-controls="'+be+'">'+Ft[0]+'</button><button type="button" data-controls="next" tabindex="0" aria-controls="'+be+'">'+Ft[1]+"</button></div>"),Ge=st.querySelector(".tns-controls")),Xe&&Ye||(Xe=Ge.children[0],Ye=Ge.children[1]),t.controlsContainer&&w(Ge,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&w([Xe,Ye],{"aria-controls":be,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(w(Xe,{"data-controls":"prev"}),w(Ye,{"data-controls":"next"})),Ze=xi(Xe),$e=xi(Ye),Ci(),Ge?H(Ge,Ae):(H(Xe,Ae),H(Ye,Ae))),ti()}function Yn(){if(_&&G){var e={};e[G]=Hi,H(ft,e)}Vt&&H(ft,Oe,t.preventScrollOnTouch),Zt&&H(ft,He),Rt&&H(n,Se),"inner"===U?ye.on("outerResized",(function(){Jn(),ye.emit("innerLoaded",ea())})):(J||Bt||At||zt||!lt)&&H(l,{resize:Kn}),zt&&("outer"===U?ye.on("innerLoaded",fi):we||fi()),ui(),we?ii():Te&&ni(),ye.on("indexChanged",vi),"inner"===U&&ye.emit("innerLoaded",ea()),"function"==typeof ge&&ge(ea()),isOn=!0}function Kn(t){e((function(){Jn(ji(t))}))}function Jn(e){if(isOn){"outer"===U&&ye.emit("outerResized",ea(e)),windowWidth=Hn();var i,a=breakpointZone,r=!1;J&&(_n(),(i=a!==breakpointZone)&&ye.emit("newBreakpointStart",ea(e)));var o,u,l=Ht,s=we,c=Te,p=Rt,h=qt,y=jt,x=Vt,b=Zt,w=$t,C=Xt,M=Yt,A=se;if(i){var B=Bt,N=zt,L=Ft,S=Ot,O=Qt;if(!z)var D=Lt,R=Nt}if(Rt=Pn("arrowKeys"),qt=Pn("controls"),jt=Pn("nav"),Vt=Pn("touch"),Ot=Pn("center"),Zt=Pn("mouseDrag"),$t=Pn("autoplay"),Xt=Pn("autoplayHoverPause"),Yt=Pn("autoplayResetOnVisibility"),i&&(we=Pn("disable"),Bt=Pn("fixedWidth"),It=Pn("speed"),zt=Pn("autoHeight"),Ft=Pn("controlsText"),Qt=Pn("autoplayText"),Gt=Pn("autoplayTimeout"),z||(Nt=Pn("edgePadding"),Lt=Pn("gutter"))),Bn(we),St=Rn(),lt&&!At||we||(mi(),lt||(Ui({reset:!0}),r=!0)),(Bt||At)&&(ie=Ei(),de=le()),(i||Bt)&&(Ht=Pn("items"),kt=Pn("slideBy"),(u=Ht!==l)&&(Bt||At||(de=le()),En())),i&&we!==s&&(we?ii():function(){if(!Ce)return;if(Kt.disabled=!1,ft.className+=xe,Bi(),Wt)for(var t=te;t--;)_&&E(pt[t]),E(pt[ee-t-1]);if(!_)for(var e=se,n=se+ht;e<n;e++){var i=pt[e],a=e<se+Ht?it:ot;i.style.left=100*(e-se)/Ht+"%",m(i,a)}ei(),Ce=!1}()),Me&&(i||Bt||At)&&(Te=Un())!==c&&(Te?(Ni(Ai(Ln(0))),ni()):(!function(){if(!Ee)return;Nt&&z&&(ct.style.margin="");if(te)for(var t="tns-transparent",e=te;e--;)_&&g(pt[e],t),g(pt[ee-e-1],t);ei(),Ee=!1}(),r=!0)),Bn(we||Te),$t||(Xt=Yt=!1),Rt!==p&&(Rt?H(n,Se):k(n,Se)),qt!==h&&(qt?Ge?E(Ge):(Xe&&E(Xe),Ye&&E(Ye)):Ge?T(Ge):(Xe&&T(Xe),Ye&&T(Ye))),jt!==y&&(jt?(E(_e),ta()):T(_e)),Vt!==x&&(Vt?H(ft,Oe,t.preventScrollOnTouch):k(ft,Oe)),Zt!==b&&(Zt?H(ft,He):k(ft,He)),$t!==w&&($t?(mn&&E(mn),fn||vn||Wi()):(mn&&T(mn),fn&&zi())),Xt!==C&&(Xt?H(ft,Ne):k(ft,Ne)),Yt!==M&&(Yt?H(n,Le):k(n,Le)),i){if(Bt===B&&Ot===S||(r=!0),zt!==N&&(zt||(ct.style.height="")),qt&&Ft!==L&&(Xe.innerHTML=Ft[0],Ye.innerHTML=Ft[1]),mn&&Qt!==O){var I=$t?1:0,P=mn.innerHTML,W=P.length-O[I].length;P.substring(W)===O[I]&&(mn.innerHTML=P.substring(0,W)+Qt[I])}}else Ot&&(Bt||At)&&(r=!0);if((u||Bt&&!At)&&(en=_i(),ta()),(o=se!==A)?(ye.emit("indexChanged",ea()),r=!0):u?o||vi():(Bt||At)&&(ui(),gi(),ai()),u&&!_&&function(){for(var t=se+Math.min(ht,Ht),e=ee;e--;){var n=pt[e];e>=se&&e<t?(m(n,"tns-moving"),n.style.left=100*(e-se)/Ht+"%",m(n,it),g(n,ot)):n.style.left&&(n.style.left="",m(n,ot),g(n,it)),g(n,at)}setTimeout((function(){v(pt,(function(t){g(t,"tns-moving")}))}),300)}(),!we&&!Te){if(i&&!z&&(Nt===R&&Lt===D||(ct.style.cssText=Wn(Nt,Lt,Bt,It,zt)),lt)){_&&(ft.style.width=zn(Bt,Lt,Ht));var q=qn(Bt,Lt,Ht)+Fn(Lt);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Kt,d(Kt)-1),f(Kt,"#"+be+" > .tns-item",q,d(Kt))}zt&&fi(),r&&(Bi(),ce=se)}i&&ye.emit("newBreakpointEnd",ea(e))}}function Un(){if(!Bt&&!At)return ht<=(Ot?Ht-(Ht-1)/2:Ht);var t=Bt?(Bt+Lt)*ht:gt[ht],e=Nt?St+2*Nt:St+Lt;return Ot&&(e-=Bt?(St-Bt)/2:(St-(gt[se+1]-gt[se]-Lt))/2),t<=e}function _n(){for(var t in breakpointZone=0,J)t=parseInt(t),windowWidth>=t&&(breakpointZone=t)}function ti(){!$t&&mn&&T(mn),!jt&&_e&&T(_e),qt||(Ge?T(Ge):(Xe&&T(Xe),Ye&&T(Ye)))}function ei(){$t&&mn&&E(mn),jt&&_e&&E(_e),qt&&(Ge?E(Ge):(Xe&&E(Xe),Ye&&E(Ye)))}function ni(){if(!Ee){if(Nt&&(ct.style.margin="0px"),te)for(var t="tns-transparent",e=te;e--;)_&&m(pt[e],t),m(pt[ee-e-1],t);ti(),Ee=!0}}function ii(){if(!Ce){if(Kt.disabled=!0,ft.className=ft.className.replace(xe.substring(1),""),C(ft,["style"]),Wt)for(var t=te;t--;)_&&T(pt[t]),T(pt[ee-t-1]);if(lt&&_||C(ct,["style"]),!_)for(var e=se,n=se+ht;e<n;e++){var i=pt[e];C(i,["style"]),g(i,it),g(i,ot)}ti(),Ce=!0}}function ai(){var t=ri();xt.innerHTML!==t&&(xt.innerHTML=t)}function ri(){var t=oi(),e=Sn(t[0])+1,n=Sn(t[1])+1;return e===n?e:`${e} to ${n}`}function oi(t){null==t&&(t=Ai());var e,n,i,a=se;if(Ot||Nt?(At||Bt)&&(n=-(parseFloat(t)+Nt),i=n+St+2*Nt):At&&(n=gt[se],i=n+St),At)gt.forEach((function(t,r){r<ee&&((Ot||Nt)&&t<=n+.5&&(a=r),i-t>=.5&&(e=r))}));else{if(Bt){var r=Bt+Lt;Ot||Nt?(a=Math.floor(n/r),e=Math.ceil(i/r-1)):e=a+Math.ceil(St/r)-1}else if(Ot||Nt){var o=Ht-1;if(Ot?(a-=o/2,e=se+o/2):e=se+o,Nt){var u=Nt*Ht/St;a-=u,e+=u}a=Math.floor(a),e=Math.ceil(e)}else e=a+Ht-1;a=Math.max(a,0),e=Math.min(e,ee-1)}return[a,e]}function ui(){if(Jt&&!we){var t=oi();t.push(Ut),ci.apply(null,t).forEach((function(t){if(!h(t,Fe)){var e={};e[G]=function(t){t.stopPropagation()},H(t,e),H(t,je),t.src=x(t,"data-src");var n=x(t,"data-srcset");n&&(t.srcset=n),m(t,"loading")}}))}}function li(t){m(t,"loaded"),si(t)}function si(t){m(t,Fe),g(t,"loading"),k(t,je)}function ci(t,e,n){var i=[];for(n||(n="img");t<=e;)v(pt[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function fi(){var t=ci.apply(null,oi());e((function(){di(t,hi)}))}function di(t,n){return yt?n():(t.forEach((function(e,n){!Jt&&e.complete&&si(e),h(e,Fe)&&t.splice(n,1)})),t.length?void e((function(){di(t,n)})):n())}function vi(){ui(),gi(),ai(),Ci(),function(){if(jt&&(rn=an>=0?an:On(),an=-1,rn!==on)){var t=Ue[on],e=Ue[rn];w(t,{tabindex:"-1","aria-label":ln+(on+1)}),g(t,un),w(e,{"aria-label":ln+(rn+1)+sn}),C(e,"tabindex"),m(e,un),on=rn}}()}function pi(t,e){for(var n=[],i=t,a=Math.min(t+e,ee);i<a;i++)n.push(pt[i].offsetHeight);return Math.max.apply(null,n)}function hi(){var t=zt?pi(se,Ht):pi(te,ht),e=ut||ct;e.style.height!==t&&(e.style.height=t+"px")}function mi(){gt=[0];var t=lt?"left":"top",e=lt?"right":"bottom",n=pt[0].getBoundingClientRect()[t];v(pt,(function(i,a){a&&gt.push(i.getBoundingClientRect()[t]-n),a===ee-1&&gt.push(i.getBoundingClientRect()[e]-n)}))}function gi(){var t=oi(),e=t[0],n=t[1];v(pt,(function(t,i){i>=e&&i<=n?y(t,"aria-hidden")&&(C(t,["aria-hidden","tabindex"]),m(t,ze),mt[i]&&C(mt[i],["aria-hidden","tabindex"])):y(t,"aria-hidden")||(w(t,{"aria-hidden":"true",tabindex:"-1"}),g(t,ze),mt[i]&&w(mt[i],{"aria-hidden":"true",tabindex:"-1"}))}))}function yi(t){return t.nodeName.toLowerCase()}function xi(t){return"button"===yi(t)}function bi(t){return"true"===t.getAttribute("aria-disabled")}function wi(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Ci(){if(qt&&!Pt&&!Wt){var t=Ze?Xe.disabled:bi(Xe),e=$e?Ye.disabled:bi(Ye),n=se<=fe,i=!Pt&&se>=de;n&&!t&&wi(Ze,Xe,!0),!n&&t&&wi(Ze,Xe,!1),i&&!e&&wi($e,Ye,!0),!i&&e&&wi($e,Ye,!1)}}function Mi(t,e){j&&(t.style[j]=e)}function Ti(t){return null==t&&(t=se),At?(St-(Nt?Lt:0)-(gt[t+1]-gt[t]-Lt))/2:Bt?(St-Bt)/2:(Ht-1)/2}function Ei(){var t=St+(Nt?Lt:0)-(Bt?(Bt+Lt)*ee:gt[ee]);return Ot&&!Wt&&(t=Bt?-(Bt+Lt)*(ee-1)-Ti():Ti(ee-1)-gt[ee-1]),t>0&&(t=0),t}function Ai(t){var e;if(null==t&&(t=se),lt&&!At)if(Bt)e=-(Bt+Lt)*t,Ot&&(e+=Ti());else{var n=q?ee:Ht;Ot&&(t-=Ti()),e=100*-t/n}else e=-gt[t],Ot&&At&&(e+=Ti());return ne&&(e=Math.max(e,ie)),e+=!lt||At||Bt?"px":"%"}function Bi(t){Mi(ft,"0s"),Ni(t)}function Ni(t){null==t&&(t=Ai()),ft.style[re]=oe+t+ue}function Li(t,e,n,i){var a=t+Ht;Wt||(a=Math.min(a,ee));for(var r=t;r<a;r++){var o=pt[r];i||(o.style.left=100*(r-se)/Ht+"%"),rt&&V&&(o.style[V]=o.style[$]=rt*(r-t)/1e3+"s"),g(o,e),m(o,n),i&&_t.push(o)}}function Si(t,e){ae&&En(),(se!==ce||e)&&(ye.emit("indexChanged",ea()),ye.emit("transitionStart",ea()),zt&&fi(),fn&&t&&["click","keydown"].indexOf(t.type)>=0&&zi(),me=!0,An())}function Oi(t){return t.toLowerCase().replace(/-/g,"")}function Hi(t){if(_||me){if(ye.emit("transitionEnd",ea(t)),!_&&_t.length>0)for(var e=0;e<_t.length;e++){var n=_t[e];n.style.left="",$&&V&&(n.style[$]="",n.style[V]=""),g(n,at),m(n,ot)}if(!t||!_&&t.target.parentNode===ft||t.target===ft&&Oi(t.propertyName)===Oi(re)){if(!ae){var i=se;En(),se!==i&&(ye.emit("indexChanged",ea()),Bi())}"inner"===U&&ye.emit("innerLoaded",ea()),me=!1,ce=se}}}function ki(t,e){if(!Te)if("prev"===t)Di(e,-1);else if("next"===t)Di(e,1);else{if(me){if(ve)return;Hi()}var n=Sn(),i=0;if("first"===t?i=-n:"last"===t?i=_?ht-Ht-n:ht-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(ht-1,t))),i=t-n)),!_&&i&&Math.abs(i)<Ht){var a=i>0?1:-1;i+=se+i-ht>=fe?ht*a:2*ht*a*-1}se+=i,_&&Wt&&(se<fe&&(se+=ht),se>de&&(se-=ht)),Sn(se)!==Sn(ce)&&Si(e)}}function Di(t,e){if(me){if(ve)return;Hi()}var n;if(!e){for(var i=Vi(t=ji(t));i!==Ge&&[Xe,Ye].indexOf(i)<0;)i=i.parentNode;var a=[Xe,Ye].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(Pt){if(se===fe&&-1===e)return void ki("last",t);if(se===de&&1===e)return void ki("first",t)}e&&(se+=kt*e,At&&(se=Math.floor(se)),Si(n||t&&"keydown"===t.type?t:null))}function Ri(){cn=setInterval((function(){Di(null,hn)}),Gt),fn=!0}function Ii(){clearInterval(cn),fn=!1}function Pi(t,e){w(mn,{"data-action":t}),mn.innerHTML=yn[0]+t+yn[1]+e}function Wi(){Ri(),mn&&Pi("stop",Qt[1])}function zi(){Ii(),mn&&Pi("start",Qt[0])}function qi(){fn?(zi(),vn=!0):(Wi(),vn=!1)}function Fi(t){t.focus()}function ji(t){return Zi(t=t||l.event)?t.changedTouches[0]:t}function Vi(t){return t.target||l.event.srcElement}function Zi(t){return t.type.indexOf("touch")>=0}function $i(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Gi(){return r=Cn.y-wn.y,o=Cn.x-wn.x,e=Math.atan2(r,o)*(180/Math.PI),n=pe,i=!1,(a=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":a<=n&&(i="vertical"),i===t.axis;var e,n,i,a,r,o}function Qi(t){if(me){if(ve)return;Hi()}$t&&fn&&Ii(),Mn=!0,bn&&(i(bn),bn=null);var e=ji(t);ye.emit(Zi(t)?"touchStart":"dragStart",ea(t)),!Zi(t)&&["img","a"].indexOf(yi(Vi(t)))>=0&&$i(t),Cn.x=wn.x=e.clientX,Cn.y=wn.y=e.clientY,_&&(xn=parseFloat(ft.style[re].replace(oe,"")),Mi(ft,"0s"))}function Xi(t){if(Mn){var n=ji(t);Cn.x=n.clientX,Cn.y=n.clientY,_?bn||(bn=e((function(){Yi(t)}))):("?"===he&&(he=Gi()),he&&(Ve=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Ve&&t.preventDefault()}}function Yi(t){if(he){if(i(bn),Mn&&(bn=e((function(){Yi(t)}))),"?"===he&&(he=Gi()),he){!Ve&&Zi(t)&&(Ve=!0);try{t.type&&ye.emit(Zi(t)?"touchMove":"dragMove",ea(t))}catch(t){}var n=xn,a=Tn(Cn,wn);if(!lt||Bt||At)n+=a,n+="px";else n+=q?a*Ht*100/((St+Lt)*ee):100*a/(St+Lt),n+="%";ft.style[re]=oe+n+ue}}else Mn=!1}function Ki(n){if(Mn){bn&&(i(bn),bn=null),_&&Mi(ft,""),Mn=!1;var a=ji(n);Cn.x=a.clientX,Cn.y=a.clientY;var r=Tn(Cn,wn);if(Math.abs(r)){if(!Zi(n)){var o=Vi(n);H(o,{click:function t(e){$i(e),k(o,{click:t})}})}_?bn=e((function(){if(lt&&!At){var t=-r*Ht/(St+Lt);t=r>0?Math.floor(t):Math.ceil(t),se+=t}else{var e=-(xn+r);if(e<=0)se=fe;else if(e>=gt[ee-1])se=de;else for(var i=0;i<ee&&e>=gt[i];)se=i,e>gt[i]&&r<0&&(se+=1),i++}Si(n,r),ye.emit(Zi(n)?"touchEnd":"dragEnd",ea(n))})):he&&Di(n,r>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(Ve=!1),pe&&(he="?"),$t&&!fn&&Ri()}function Ji(t,e=""){t.style.height=e,Array.from(pt).forEach((t=>{t.style.height=e}))}function Ui(t={reset:!1}){var e=ut||ct;if(t.reset&&Ji(e),lt||Pn("autoHeight"))e.style.height=gt[se+Ht]-gt[se]+"px";else{var{height:n}=Array.from(pt).sort(((t,e)=>{var n=t.getBoundingClientRect().height;return e.getBoundingClientRect().height-n}))[0].getBoundingClientRect();Ji(e,`${n}px`),mi()}}function _i(){var t=Bt?(Bt+Lt)*ht/St:ht/Ht;return Math.min(Math.ceil(t),ht)}function ta(){if(jt&&!Re&&en!==nn){var t=nn,e=en,n=E;for(nn>en&&(t=en,e=nn,n=T);t<e;)n(Ue[t]),t++;nn=en}}function ea(t){return{container:ft,slideItems:pt,navContainer:_e,navItems:Ue,controlsContainer:Ge,hasControls:ke,prevButton:Xe,nextButton:Ye,items:Ht,slideBy:kt,cloneCount:te,slideCount:ht,slideCountNew:ee,index:se,indexCached:ce,displayIndex:Nn(),navCurrentIndex:rn,navCurrentIndexCached:on,pages:en,pagesCached:nn,sheet:Kt,isOn:isOn,event:t||{}}}X&&console.warn("No slides found in",t.container)};return I}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
