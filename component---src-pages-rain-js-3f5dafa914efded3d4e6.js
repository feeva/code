(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4tZ6":function(t,e,a){"use strict";a.r(e);a("HQhv"),a("YBKJ"),a("q8oJ"),a("8npG");var i=a("kjaY"),n=a.n(i),o=a("q1tI"),r=a.n(o),s=a("vrFN"),l=a("EVdn"),h=a.n(l),c=(a("n0hJ"),function(t,e){var a=this;this.getWidth=function(){return a.canvasContext.canvas.width},this.getHeight=function(){return a.canvasContext.canvas.height},this.start=function(t){var e=Date.now();a.stopped=!1,function i(){if(!a.stopped){var n=t(e);a.draw(n),requestAnimationFrame(i)}}()},this.stop=function(){return a.stopped=!0},this.draw=function(t,e){var i=a.canvasContext,n={};e||i.clearRect(0,0,i.canvas.width,i.canvas.height);for(var o=0;o<t.length;++o){var r=t[o];r.color?(n[r.color]||(n[r.color]=[])).push(r):"IMG"===r.tagName&&i.drawImage(r,r.left,r.top)}for(var s in n){i.beginPath(),i.fillStyle=s;for(var l=n[s],h=0,c=l.length;h<c;++h){var p=l[h];"circle"===p.type?(i.moveTo(p.cx,p.cy),i.arc(p.cx,p.cy,p.r,0,2*Math.PI)):"rect"===p.type&&i.fillRect(p.x,p.y,p.width,p.height)}i.fill()}},this.stop(),"string"==typeof t&&(t=document.getElementById(t)),t.width=e||t.offsetWidth,t.height=e?e*t.offsetHeight/t.offsetWidth:t.offsetHeight,this.canvasContext=t.getContext("2d")}),p=a("bAq4"),u=a.n(p);function d(t){return function(t){return t=Number(t).toString(2),t=new Array(33-t.length).join("0")+t,parseInt(t.split("").reverse().join(""),2)}(t)/4294967296}function m(t,e){this.boyCanvas=new c("boyCanvas"),this.rainCanvas=new c("rainCanvas"),this.boyImage=document.getElementById("boyImage"),this.RunLength=2e3,this.RainColor="#99f",this.RainHitColor="#f00",this.ViewWidth=t,this.ViewHeight=e,this.boyImage.top=this.ViewHeight-200,this.boyImage.left=0}function v(){return alert(h()("#help").text()),!1}m.prototype.reset=function(){if(this.AnimationSpeed>0){this.AnimationSpeed=0;var t=this;requestAnimationFrame((function(){t.reset()}))}else{h()("#canvasContainer").css("height","240px"),h()("#boyCanvas").show(),h()("#scrollBar").show(),h()("#rainCanvas").css({transition:"none",transform:"none"}),this.MaxVx=.4,this.Vx=Number(h()("#rainSpeed").val())/5,this.Vy=1,this.CanvasWidth=this.ViewWidth+this.RunLength*this.MaxVx,this.CanvasHeight=this.RunLength*this.Vy+240,this.X0=this.Vx<=0?0:this.CanvasWidth-this.ViewWidth,this.Y0=this.RunLength*this.Vy,this.StartTime=Date.now(),this.RunSpeed=h()("#runSpeed").val()/2,this.RainDensity=Number(h()("#rainDensity").val()/5),this.RainDropRadius=2+Number(h()("#rainDropRadius").val()),this.AnimationSpeed=2*Number(h()("#animationSpeed").val()),this.HitCount=0,h()("#scroller").css("width",h()("#scrollBar").width()+this.RunLength+"px"),h()("#scrollBar").prop("scrollLeft",0),h()("#rainCanvas").css({left:-this.X0+"px",width:this.CanvasWidth+"px",top:-this.RunLength*this.Vy-240+this.ViewHeight+"px",height:this.RunLength*this.Vy+240+"px"}),this.rainCanvas.canvasContext.canvas.width=this.CanvasWidth,this.rainCanvas.canvasContext.canvas.height=this.CanvasHeight,this.RainDrops=[];for(var e=0,a=2e3*this.RainDensity;e<a;++e)this.RainDrops.push({type:"circle",cx:d(e)*this.CanvasWidth,cy:this.Y0-e/this.RainDensity*this.RunLength/2e3,r:this.RainDropRadius,color:this.RainColor});this.rainCanvas.draw(this.RainDrops);var i=this,n=parseInt(h()("#scrollBar").prop("scrollLeft"));requestAnimationFrame((function t(){(n+=i.AnimationSpeed)<i.RunLength&&i.boyImage.left<i.ViewWidth?(h()("#scrollBar").prop("scrollLeft",n),i.update(n),i.AnimationSpeed>0&&requestAnimationFrame(t)):(i.AnimationSpeed=0,h()("#btnStop").hide(),h()("#btnBirdView").show())})),this.AnimationSpeed>0?h()("#btnStop").show():h()("#btnStop").hide(),h()("#btnBirdView").hide()}},m.prototype.update=function(t){h()("#rainCanvas").css({left:-this.X0+this.Vx*t+"px",top:-this.Y0+this.Vy*t+"px"}),this.boyImage.left=(this.boyImage.startTime&&t>this.boyImage.startTime?t-this.boyImage.startTime:0)*this.RunSpeed,this.boyCanvas.draw([this.boyImage]);for(var e=this.boyCanvas.canvasContext.getImageData(0,0,this.ViewWidth,this.ViewHeight).data,a=[],i=0,n=this.RainDrops.length;i<n;++i){var o=this.RainDrops[i],r=o.cx-this.X0+this.Vx*t|0,s=o.cy-this.Y0+this.Vy*t|0;r>=0&&s>=0&&r<this.ViewWidth&&s<this.ViewHeight&&e[4*(this.ViewWidth*s+r)+3]>0&&(o.color!==this.RainHitColor&&(o.color=this.RainHitColor,this.HitCount++,a.push(o)),this.boyImage.startTime||(this.boyImage.startTime=t))}this.rainCanvas.draw(a,!0),h()("#hitCount").text(this.HitCount)};var f=function(t){var e,a;function i(){return t.apply(this,arguments)||this}a=t,(e=i).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var o=i.prototype;return o.componentDidMount=function(){var t=new m(h()("#boyCanvas").width(),h()("#boyCanvas").height());setTimeout((function(){return t.reset()}),1e3),h()("#btnReset").click((function(){return t.reset()})),h()("#btnStop").click((function(e){t.AnimationSpeed=0,h()(e.target).hide(),h()("#btnBirdView").show()})),h()("#scrollBar").on("scroll",(function(e){var a=e.target.scrollLeft;t.update(a)})),h()("#btnBirdView").click((function(){h()("#canvasContainer").css("height","740px"),h()("#boyCanvas").hide(),h()("#scrollBar").hide(),h()("#rainCanvas").css({left:-(t.CanvasWidth-900)/2+"px",top:-(t.CanvasHeight-740-80)/2+"px",transform:"scale(.36, .36)",transition:"all 1.6s ease-in-out"})}))},o.render=function(){return r.a.createElement("div",{style:{width:"900px"}},r.a.createElement(s.a,{title:"비 맞기 시뮬레이션",description:"비 올 때 걷거나 뛰는 속력에 따른 비 맞기 시뮬레이션"}),r.a.createElement("div",{className:n.a.highlight},"비에 맞은 양: ",r.a.createElement("span",{id:"hitCount"},"0"),"방울 ",r.a.createElement("a",{href:"#none",onClick:v},"(?)")),r.a.createElement("div",{id:"canvasContainer",style:{position:"relative",border:"solid 1px #ddd",height:"240px",overflow:"hidden"}},r.a.createElement("canvas",{id:"boyCanvas",style:{width:"100%",height:"100%",position:"absolute",left:"0",top:"0"}}),r.a.createElement("canvas",{id:"rainCanvas",style:{width:"100%",height:"100%",position:"absolute",left:"0",top:"0",opacity:".5"}})),r.a.createElement("div",{id:"scrollBar",style:{width:"100%",overflowX:"scroll"}},r.a.createElement("div",{id:"scroller",style:{height:"1px"}})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"runSpeed"},"달리기 속력:",r.a.createElement("select",{id:"runSpeed",defaultValue:"3"},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"))),r.a.createElement("label",{htmlFor:"rainSpeed"},"바람:",r.a.createElement("select",{id:"rainSpeed",defaultValue:"0"},r.a.createElement("option",{value:"-2"},"-2(동풍)"),r.a.createElement("option",{value:"-1"},"-1(동풍)"),r.a.createElement("option",{value:"0"},"없음"),r.a.createElement("option",{value:"1"},"1(동풍)"),r.a.createElement("option",{value:"2"},"2(서풍)"))),r.a.createElement("label",{htmlFor:"rainDensity"},"비 밀도:",r.a.createElement("select",{id:"rainDensity",defaultValue:"3"},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"))),r.a.createElement("label",{htmlFor:"rainDropRadius"},"빗방울 크기:",r.a.createElement("select",{id:"rainDropRadius",defaultValue:"3"},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"))),r.a.createElement("label",{htmlFor:"animationSpeed"},"애니메이션 속도:",r.a.createElement("select",{id:"animationSpeed",defaultValue:"1"},r.a.createElement("option",{value:"0"},"애니메이션 안함"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5"))),r.a.createElement("button",{id:"btnReset",type:"button"},"설정!"),r.a.createElement("button",{id:"btnStop",type:"button"},"정지"),r.a.createElement("button",{id:"btnBirdView",type:"button"},"맞은 비 보기")),r.a.createElement("div",{id:"help",style:{display:"none"}},"비올 때 걷거나 뛰는 속력에 따른 비 맞는 양을 보기 위한 시뮬레이션입니다. 화면 아래 쪽의 여러 조건에 따라 시뮬레이션을 달리 해보실 수 있고 애니메이션으로 실행한 경우 [맞은 비 보기]를 눌러 전체 비의 양 대비 맞은 비의 양을 시각적으로 확인하실 수 있습니다. 소년은 비를 한 방울이라도 맞는 시점에야 움직이기 시작합니다. 본 프로그램은 HTML5 기반이므로 인터넷 익스플로러의 경우 버전 9 이상이어야 합니다."),r.a.createElement("div",{style:{textAlign:"center",marginTop:"1em"}},"(c) 2014, 2020, 이동련",r.a.createElement("br",null)," ",r.a.createElement("a",{href:"https://feeva.github.io",target:"_blank",rel:"noreferrer"},"Nothing New Under the Sun")),r.a.createElement("img",{id:"boyImage",src:u.a,style:{position:"absolute",width:"-1000px",top:"-1000px"},alt:"boy"}))},i}(r.a.Component);e.default=f},HXzo:function(t,e,a){"use strict";a("EU/P")("trim",(function(t){return function(){return t(this,3)}}))},"Y++M":function(t,e,a){"use strict";var i=a("DFzH"),n=a("dTG6"),o=a("kiRH");t.exports=function(t){for(var e=i(this),a=o(e.length),r=arguments.length,s=n(r>1?arguments[1]:void 0,a),l=r>2?arguments[2]:void 0,h=void 0===l?a:n(l,a);h>s;)e[s++]=t;return e}},bAq4:function(t,e,a){t.exports=a.p+"static/boy_running-2d2ec5ae67c4a860c2829d7b40760dc7.png"},kjaY:function(t,e,a){t.exports={highlight:"rain-module--highlight--1s6z7"}},n0hJ:function(t,e,a){var i=a("P8UN");i(i.P,"Array",{fill:a("Y++M")}),a("Dq1/")("fill")}}]);
//# sourceMappingURL=component---src-pages-rain-js-3f5dafa914efded3d4e6.js.map