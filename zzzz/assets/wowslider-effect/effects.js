// ken burns 
// options.paths=[{ from:[X,Y,Ratio], to:[X,Y,Ratio] },...] - transition description
// 					from - begin state, to - end state
// 					X,Y = 0..1 - relative position, 
//					Ratio>1 - degree of stretching, 
function ws_kenburns(d,t,z){function u(b){return h[b?Math.floor(Math.random()*(m?h.length:Math.min(5,h.length))):0]}function v(){g=f('<div style="width:100%;height:100%"></div>').css({"z-index":8,position:"absolute",left:0,top:0}).appendTo(A)}function w(b,c,d){var a={width:100*b[2]+"%"};a[c?"right":"left"]=-100*(b[2]-1)*(c?1-b[0]:b[0])+"%";a[d?"bottom":"top"]=-100*(b[2]-1)*(d?1-b[1]:b[1])+"%";if(!m)for(var e in a)/\%/.test(a[e])&&(a[e]=(/right|left|width/.test(e)?k:l)*parseFloat(a[e])/100+"px");return a}
function x(b,c,h){var a=f(b),a={width:a.width(),height:a.height(),marginTop:a.css("marginTop"),marginLeft:a.css("marginLeft")};m&&(r&&r.stop(1),r=y);n&&n.remove();n=g;v();h&&(g.hide(),n.stop(!0,!0));if(m){var e,p,q;q=f('<canvas width="'+k+'" height="'+l+'"/>');q.css({position:"absolute",left:0,top:0}).css(a).appendTo(g);e=q.get(0).getContext("2d");p=q.clone().appendTo(g).get(0).getContext("2d");y=wowAnimate(function(a){a=[c.from[0]*(1-a)+a*c.to[0],c.from[1]*(1-a)+a*c.to[1],c.from[2]*(1-a)+a*c.to[2]];
p.drawImage(b,-k*(a[2]-1)*a[0],-l*(a[2]-1)*a[1],k*a[2],l*a[2]);e.clearRect(0,0,k,l);a=e;e=p;p=a},0,1,d.duration+2*d.delay)}else k=a.width,l=a.height,f('<img src="'+b.src+'"/>').css({position:"absolute",left:"auto",right:"auto",top:"auto",bottom:"auto"}).appendTo(g).css(w(c.from,.5<c.from[0],.5<c.from[1])).animate(w(c.to,.5<c.from[0],.5<c.from[1]),{easing:"linear",queue:!1,duration:1.5*d.duration+d.delay});h&&g.fadeIn(d.duration)}var f=jQuery,B=f(this),m=document.createElement("canvas").getContext,
A=f("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_kenburns").appendTo(z),h=d.paths||[{from:[0,0,1],to:[0,0,1.2]},{from:[0,0,1.2],to:[0,0,1]},{from:[1,0,1],to:[1,0,1.2]},{from:[0,1,1.2],to:[0,1,1]},{from:[1,1,1],to:[1,1,1.2]},{from:[.5,1,1],to:[.5,1,1.3]},{from:[1,.5,1.2],to:[1,.5,1]},{from:[1,.5,1],to:[1,.5,1.2]},{from:[0,.5,1.2],to:[0,.5,1]},{from:[1,.5,1.2],to:[1,.5,1]},{from:[.5,.5,1],to:[.5,.5,1.2]},{from:[.5,.5,1.3],to:[.5,
.5,1]},{from:[.5,1,1],to:[.5,0,1.15]}],k=d.width,l=d.height,y,r,g,n;v();1==d.effect.length&&f(function(){t.each(function(b){f(this).css({visibility:"hidden"});b==d.startSlide&&x(this,u(b),0)})});this.go=function(b,c){setTimeout(function(){B.trigger("effectEnd")},d.duration);x(t.get(b),u(b),1)}};
// ken burns 
// options.paths=[{ from:[X,Y,Ratio], to:[X,Y,Ratio] },...] - transition description
// 					from - begin state, to - end state
// 					X,Y = 0..1 - relative position, 
//					Ratio>1 - degree of stretching, 
function ws_kenburns(d,t,z){function u(b){return h[b?Math.floor(Math.random()*(m?h.length:Math.min(5,h.length))):0]}function v(){g=f('<div style="width:100%;height:100%"></div>').css({"z-index":8,position:"absolute",left:0,top:0}).appendTo(A)}function w(b,c,d){var a={width:100*b[2]+"%"};a[c?"right":"left"]=-100*(b[2]-1)*(c?1-b[0]:b[0])+"%";a[d?"bottom":"top"]=-100*(b[2]-1)*(d?1-b[1]:b[1])+"%";if(!m)for(var e in a)/\%/.test(a[e])&&(a[e]=(/right|left|width/.test(e)?k:l)*parseFloat(a[e])/100+"px");return a}
function x(b,c,h){var a=f(b),a={width:a.width(),height:a.height(),marginTop:a.css("marginTop"),marginLeft:a.css("marginLeft")};m&&(r&&r.stop(1),r=y);n&&n.remove();n=g;v();h&&(g.hide(),n.stop(!0,!0));if(m){var e,p,q;q=f('<canvas width="'+k+'" height="'+l+'"/>');q.css({position:"absolute",left:0,top:0}).css(a).appendTo(g);e=q.get(0).getContext("2d");p=q.clone().appendTo(g).get(0).getContext("2d");y=wowAnimate(function(a){a=[c.from[0]*(1-a)+a*c.to[0],c.from[1]*(1-a)+a*c.to[1],c.from[2]*(1-a)+a*c.to[2]];
p.drawImage(b,-k*(a[2]-1)*a[0],-l*(a[2]-1)*a[1],k*a[2],l*a[2]);e.clearRect(0,0,k,l);a=e;e=p;p=a},0,1,d.duration+2*d.delay)}else k=a.width,l=a.height,f('<img src="'+b.src+'"/>').css({position:"absolute",left:"auto",right:"auto",top:"auto",bottom:"auto"}).appendTo(g).css(w(c.from,.5<c.from[0],.5<c.from[1])).animate(w(c.to,.5<c.from[0],.5<c.from[1]),{easing:"linear",queue:!1,duration:1.5*d.duration+d.delay});h&&g.fadeIn(d.duration)}var f=jQuery,B=f(this),m=document.createElement("canvas").getContext,
A=f("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_kenburns").appendTo(z),h=d.paths||[{from:[0,0,1],to:[0,0,1.2]},{from:[0,0,1.2],to:[0,0,1]},{from:[1,0,1],to:[1,0,1.2]},{from:[0,1,1.2],to:[0,1,1]},{from:[1,1,1],to:[1,1,1.2]},{from:[.5,1,1],to:[.5,1,1.3]},{from:[1,.5,1.2],to:[1,.5,1]},{from:[1,.5,1],to:[1,.5,1.2]},{from:[0,.5,1.2],to:[0,.5,1]},{from:[1,.5,1.2],to:[1,.5,1]},{from:[.5,.5,1],to:[.5,.5,1.2]},{from:[.5,.5,1.3],to:[.5,
.5,1]},{from:[.5,1,1],to:[.5,0,1.15]}],k=d.width,l=d.height,y,r,g,n;v();1==d.effect.length&&f(function(){t.each(function(b){f(this).css({visibility:"hidden"});b==d.startSlide&&x(this,u(b),0)})});this.go=function(b,c){setTimeout(function(){B.trigger("effectEnd")},d.duration);x(t.get(b),u(b),1)}};
// ken burns 
// options.paths=[{ from:[X,Y,Ratio], to:[X,Y,Ratio] },...] - transition description
// 					from - begin state, to - end state
// 					X,Y = 0..1 - relative position, 
//					Ratio>1 - degree of stretching, 
function ws_kenburns(d,t,z){function u(b){return h[b?Math.floor(Math.random()*(m?h.length:Math.min(5,h.length))):0]}function v(){g=f('<div style="width:100%;height:100%"></div>').css({"z-index":8,position:"absolute",left:0,top:0}).appendTo(A)}function w(b,c,d){var a={width:100*b[2]+"%"};a[c?"right":"left"]=-100*(b[2]-1)*(c?1-b[0]:b[0])+"%";a[d?"bottom":"top"]=-100*(b[2]-1)*(d?1-b[1]:b[1])+"%";if(!m)for(var e in a)/\%/.test(a[e])&&(a[e]=(/right|left|width/.test(e)?k:l)*parseFloat(a[e])/100+"px");return a}
function x(b,c,h){var a=f(b),a={width:a.width(),height:a.height(),marginTop:a.css("marginTop"),marginLeft:a.css("marginLeft")};m&&(r&&r.stop(1),r=y);n&&n.remove();n=g;v();h&&(g.hide(),n.stop(!0,!0));if(m){var e,p,q;q=f('<canvas width="'+k+'" height="'+l+'"/>');q.css({position:"absolute",left:0,top:0}).css(a).appendTo(g);e=q.get(0).getContext("2d");p=q.clone().appendTo(g).get(0).getContext("2d");y=wowAnimate(function(a){a=[c.from[0]*(1-a)+a*c.to[0],c.from[1]*(1-a)+a*c.to[1],c.from[2]*(1-a)+a*c.to[2]];
p.drawImage(b,-k*(a[2]-1)*a[0],-l*(a[2]-1)*a[1],k*a[2],l*a[2]);e.clearRect(0,0,k,l);a=e;e=p;p=a},0,1,d.duration+2*d.delay)}else k=a.width,l=a.height,f('<img src="'+b.src+'"/>').css({position:"absolute",left:"auto",right:"auto",top:"auto",bottom:"auto"}).appendTo(g).css(w(c.from,.5<c.from[0],.5<c.from[1])).animate(w(c.to,.5<c.from[0],.5<c.from[1]),{easing:"linear",queue:!1,duration:1.5*d.duration+d.delay});h&&g.fadeIn(d.duration)}var f=jQuery,B=f(this),m=document.createElement("canvas").getContext,
A=f("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_kenburns").appendTo(z),h=d.paths||[{from:[0,0,1],to:[0,0,1.2]},{from:[0,0,1.2],to:[0,0,1]},{from:[1,0,1],to:[1,0,1.2]},{from:[0,1,1.2],to:[0,1,1]},{from:[1,1,1],to:[1,1,1.2]},{from:[.5,1,1],to:[.5,1,1.3]},{from:[1,.5,1.2],to:[1,.5,1]},{from:[1,.5,1],to:[1,.5,1.2]},{from:[0,.5,1.2],to:[0,.5,1]},{from:[1,.5,1.2],to:[1,.5,1]},{from:[.5,.5,1],to:[.5,.5,1.2]},{from:[.5,.5,1.3],to:[.5,
.5,1]},{from:[.5,1,1],to:[.5,0,1.15]}],k=d.width,l=d.height,y,r,g,n;v();1==d.effect.length&&f(function(){t.each(function(b){f(this).css({visibility:"hidden"});b==d.startSlide&&x(this,u(b),0)})});this.go=function(b,c){setTimeout(function(){B.trigger("effectEnd")},d.duration);x(t.get(b),u(b),1)}};
// ken burns 
// options.paths=[{ from:[X,Y,Ratio], to:[X,Y,Ratio] },...] - transition description
// 					from - begin state, to - end state
// 					X,Y = 0..1 - relative position, 
//					Ratio>1 - degree of stretching, 
function ws_kenburns(d,t,z){function u(b){return h[b?Math.floor(Math.random()*(m?h.length:Math.min(5,h.length))):0]}function v(){g=f('<div style="width:100%;height:100%"></div>').css({"z-index":8,position:"absolute",left:0,top:0}).appendTo(A)}function w(b,c,d){var a={width:100*b[2]+"%"};a[c?"right":"left"]=-100*(b[2]-1)*(c?1-b[0]:b[0])+"%";a[d?"bottom":"top"]=-100*(b[2]-1)*(d?1-b[1]:b[1])+"%";if(!m)for(var e in a)/\%/.test(a[e])&&(a[e]=(/right|left|width/.test(e)?k:l)*parseFloat(a[e])/100+"px");return a}
function x(b,c,h){var a=f(b),a={width:a.width(),height:a.height(),marginTop:a.css("marginTop"),marginLeft:a.css("marginLeft")};m&&(r&&r.stop(1),r=y);n&&n.remove();n=g;v();h&&(g.hide(),n.stop(!0,!0));if(m){var e,p,q;q=f('<canvas width="'+k+'" height="'+l+'"/>');q.css({position:"absolute",left:0,top:0}).css(a).appendTo(g);e=q.get(0).getContext("2d");p=q.clone().appendTo(g).get(0).getContext("2d");y=wowAnimate(function(a){a=[c.from[0]*(1-a)+a*c.to[0],c.from[1]*(1-a)+a*c.to[1],c.from[2]*(1-a)+a*c.to[2]];
p.drawImage(b,-k*(a[2]-1)*a[0],-l*(a[2]-1)*a[1],k*a[2],l*a[2]);e.clearRect(0,0,k,l);a=e;e=p;p=a},0,1,d.duration+2*d.delay)}else k=a.width,l=a.height,f('<img src="'+b.src+'"/>').css({position:"absolute",left:"auto",right:"auto",top:"auto",bottom:"auto"}).appendTo(g).css(w(c.from,.5<c.from[0],.5<c.from[1])).animate(w(c.to,.5<c.from[0],.5<c.from[1]),{easing:"linear",queue:!1,duration:1.5*d.duration+d.delay});h&&g.fadeIn(d.duration)}var f=jQuery,B=f(this),m=document.createElement("canvas").getContext,
A=f("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_kenburns").appendTo(z),h=d.paths||[{from:[0,0,1],to:[0,0,1.2]},{from:[0,0,1.2],to:[0,0,1]},{from:[1,0,1],to:[1,0,1.2]},{from:[0,1,1.2],to:[0,1,1]},{from:[1,1,1],to:[1,1,1.2]},{from:[.5,1,1],to:[.5,1,1.3]},{from:[1,.5,1.2],to:[1,.5,1]},{from:[1,.5,1],to:[1,.5,1.2]},{from:[0,.5,1.2],to:[0,.5,1]},{from:[1,.5,1.2],to:[1,.5,1]},{from:[.5,.5,1],to:[.5,.5,1.2]},{from:[.5,.5,1.3],to:[.5,
.5,1]},{from:[.5,1,1],to:[.5,0,1.15]}],k=d.width,l=d.height,y,r,g,n;v();1==d.effect.length&&f(function(){t.each(function(b){f(this).css({visibility:"hidden"});b==d.startSlide&&x(this,u(b),0)})});this.go=function(b,c){setTimeout(function(){B.trigger("effectEnd")},d.duration);x(t.get(b),u(b),1)}};
// ken burns 
// options.paths=[{ from:[X,Y,Ratio], to:[X,Y,Ratio] },...] - transition description
// 					from - begin state, to - end state
// 					X,Y = 0..1 - relative position, 
//					Ratio>1 - degree of stretching, 
function ws_kenburns(d,t,z){function u(b){return h[b?Math.floor(Math.random()*(m?h.length:Math.min(5,h.length))):0]}function v(){g=f('<div style="width:100%;height:100%"></div>').css({"z-index":8,position:"absolute",left:0,top:0}).appendTo(A)}function w(b,c,d){var a={width:100*b[2]+"%"};a[c?"right":"left"]=-100*(b[2]-1)*(c?1-b[0]:b[0])+"%";a[d?"bottom":"top"]=-100*(b[2]-1)*(d?1-b[1]:b[1])+"%";if(!m)for(var e in a)/\%/.test(a[e])&&(a[e]=(/right|left|width/.test(e)?k:l)*parseFloat(a[e])/100+"px");return a}
function x(b,c,h){var a=f(b),a={width:a.width(),height:a.height(),marginTop:a.css("marginTop"),marginLeft:a.css("marginLeft")};m&&(r&&r.stop(1),r=y);n&&n.remove();n=g;v();h&&(g.hide(),n.stop(!0,!0));if(m){var e,p,q;q=f('<canvas width="'+k+'" height="'+l+'"/>');q.css({position:"absolute",left:0,top:0}).css(a).appendTo(g);e=q.get(0).getContext("2d");p=q.clone().appendTo(g).get(0).getContext("2d");y=wowAnimate(function(a){a=[c.from[0]*(1-a)+a*c.to[0],c.from[1]*(1-a)+a*c.to[1],c.from[2]*(1-a)+a*c.to[2]];
p.drawImage(b,-k*(a[2]-1)*a[0],-l*(a[2]-1)*a[1],k*a[2],l*a[2]);e.clearRect(0,0,k,l);a=e;e=p;p=a},0,1,d.duration+2*d.delay)}else k=a.width,l=a.height,f('<img src="'+b.src+'"/>').css({position:"absolute",left:"auto",right:"auto",top:"auto",bottom:"auto"}).appendTo(g).css(w(c.from,.5<c.from[0],.5<c.from[1])).animate(w(c.to,.5<c.from[0],.5<c.from[1]),{easing:"linear",queue:!1,duration:1.5*d.duration+d.delay});h&&g.fadeIn(d.duration)}var f=jQuery,B=f(this),m=document.createElement("canvas").getContext,
A=f("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_kenburns").appendTo(z),h=d.paths||[{from:[0,0,1],to:[0,0,1.2]},{from:[0,0,1.2],to:[0,0,1]},{from:[1,0,1],to:[1,0,1.2]},{from:[0,1,1.2],to:[0,1,1]},{from:[1,1,1],to:[1,1,1.2]},{from:[.5,1,1],to:[.5,1,1.3]},{from:[1,.5,1.2],to:[1,.5,1]},{from:[1,.5,1],to:[1,.5,1.2]},{from:[0,.5,1.2],to:[0,.5,1]},{from:[1,.5,1.2],to:[1,.5,1]},{from:[.5,.5,1],to:[.5,.5,1.2]},{from:[.5,.5,1.3],to:[.5,
.5,1]},{from:[.5,1,1],to:[.5,0,1.15]}],k=d.width,l=d.height,y,r,g,n;v();1==d.effect.length&&f(function(){t.each(function(b){f(this).css({visibility:"hidden"});b==d.startSlide&&x(this,u(b),0)})});this.go=function(b,c){setTimeout(function(){B.trigger("effectEnd")},d.duration);x(t.get(b),u(b),1)}};
// ken burns 
// options.paths=[{ from:[X,Y,Ratio], to:[X,Y,Ratio] },...] - transition description
// 					from - begin state, to - end state
// 					X,Y = 0..1 - relative position, 
//					Ratio>1 - degree of stretching, 
function ws_kenburns(d,t,z){function u(b){return h[b?Math.floor(Math.random()*(m?h.length:Math.min(5,h.length))):0]}function v(){g=f('<div style="width:100%;height:100%"></div>').css({"z-index":8,position:"absolute",left:0,top:0}).appendTo(A)}function w(b,c,d){var a={width:100*b[2]+"%"};a[c?"right":"left"]=-100*(b[2]-1)*(c?1-b[0]:b[0])+"%";a[d?"bottom":"top"]=-100*(b[2]-1)*(d?1-b[1]:b[1])+"%";if(!m)for(var e in a)/\%/.test(a[e])&&(a[e]=(/right|left|width/.test(e)?k:l)*parseFloat(a[e])/100+"px");return a}
function x(b,c,h){var a=f(b),a={width:a.width(),height:a.height(),marginTop:a.css("marginTop"),marginLeft:a.css("marginLeft")};m&&(r&&r.stop(1),r=y);n&&n.remove();n=g;v();h&&(g.hide(),n.stop(!0,!0));if(m){var e,p,q;q=f('<canvas width="'+k+'" height="'+l+'"/>');q.css({position:"absolute",left:0,top:0}).css(a).appendTo(g);e=q.get(0).getContext("2d");p=q.clone().appendTo(g).get(0).getContext("2d");y=wowAnimate(function(a){a=[c.from[0]*(1-a)+a*c.to[0],c.from[1]*(1-a)+a*c.to[1],c.from[2]*(1-a)+a*c.to[2]];
p.drawImage(b,-k*(a[2]-1)*a[0],-l*(a[2]-1)*a[1],k*a[2],l*a[2]);e.clearRect(0,0,k,l);a=e;e=p;p=a},0,1,d.duration+2*d.delay)}else k=a.width,l=a.height,f('<img src="'+b.src+'"/>').css({position:"absolute",left:"auto",right:"auto",top:"auto",bottom:"auto"}).appendTo(g).css(w(c.from,.5<c.from[0],.5<c.from[1])).animate(w(c.to,.5<c.from[0],.5<c.from[1]),{easing:"linear",queue:!1,duration:1.5*d.duration+d.delay});h&&g.fadeIn(d.duration)}var f=jQuery,B=f(this),m=document.createElement("canvas").getContext,
A=f("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_kenburns").appendTo(z),h=d.paths||[{from:[0,0,1],to:[0,0,1.2]},{from:[0,0,1.2],to:[0,0,1]},{from:[1,0,1],to:[1,0,1.2]},{from:[0,1,1.2],to:[0,1,1]},{from:[1,1,1],to:[1,1,1.2]},{from:[.5,1,1],to:[.5,1,1.3]},{from:[1,.5,1.2],to:[1,.5,1]},{from:[1,.5,1],to:[1,.5,1.2]},{from:[0,.5,1.2],to:[0,.5,1]},{from:[1,.5,1.2],to:[1,.5,1]},{from:[.5,.5,1],to:[.5,.5,1.2]},{from:[.5,.5,1.3],to:[.5,
.5,1]},{from:[.5,1,1],to:[.5,0,1.15]}],k=d.width,l=d.height,y,r,g,n;v();1==d.effect.length&&f(function(){t.each(function(b){f(this).css({visibility:"hidden"});b==d.startSlide&&x(this,u(b),0)})});this.go=function(b,c){setTimeout(function(){B.trigger("effectEnd")},d.duration);x(t.get(b),u(b),1)}};
// ken burns 
// options.paths=[{ from:[X,Y,Ratio], to:[X,Y,Ratio] },...] - transition description
// 					from - begin state, to - end state
// 					X,Y = 0..1 - relative position, 
//					Ratio>1 - degree of stretching, 
function ws_kenburns(d,t,z){function u(b){return h[b?Math.floor(Math.random()*(m?h.length:Math.min(5,h.length))):0]}function v(){g=f('<div style="width:100%;height:100%"></div>').css({"z-index":8,position:"absolute",left:0,top:0}).appendTo(A)}function w(b,c,d){var a={width:100*b[2]+"%"};a[c?"right":"left"]=-100*(b[2]-1)*(c?1-b[0]:b[0])+"%";a[d?"bottom":"top"]=-100*(b[2]-1)*(d?1-b[1]:b[1])+"%";if(!m)for(var e in a)/\%/.test(a[e])&&(a[e]=(/right|left|width/.test(e)?k:l)*parseFloat(a[e])/100+"px");return a}
function x(b,c,h){var a=f(b),a={width:a.width(),height:a.height(),marginTop:a.css("marginTop"),marginLeft:a.css("marginLeft")};m&&(r&&r.stop(1),r=y);n&&n.remove();n=g;v();h&&(g.hide(),n.stop(!0,!0));if(m){var e,p,q;q=f('<canvas width="'+k+'" height="'+l+'"/>');q.css({position:"absolute",left:0,top:0}).css(a).appendTo(g);e=q.get(0).getContext("2d");p=q.clone().appendTo(g).get(0).getContext("2d");y=wowAnimate(function(a){a=[c.from[0]*(1-a)+a*c.to[0],c.from[1]*(1-a)+a*c.to[1],c.from[2]*(1-a)+a*c.to[2]];
p.drawImage(b,-k*(a[2]-1)*a[0],-l*(a[2]-1)*a[1],k*a[2],l*a[2]);e.clearRect(0,0,k,l);a=e;e=p;p=a},0,1,d.duration+2*d.delay)}else k=a.width,l=a.height,f('<img src="'+b.src+'"/>').css({position:"absolute",left:"auto",right:"auto",top:"auto",bottom:"auto"}).appendTo(g).css(w(c.from,.5<c.from[0],.5<c.from[1])).animate(w(c.to,.5<c.from[0],.5<c.from[1]),{easing:"linear",queue:!1,duration:1.5*d.duration+d.delay});h&&g.fadeIn(d.duration)}var f=jQuery,B=f(this),m=document.createElement("canvas").getContext,
A=f("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_kenburns").appendTo(z),h=d.paths||[{from:[0,0,1],to:[0,0,1.2]},{from:[0,0,1.2],to:[0,0,1]},{from:[1,0,1],to:[1,0,1.2]},{from:[0,1,1.2],to:[0,1,1]},{from:[1,1,1],to:[1,1,1.2]},{from:[.5,1,1],to:[.5,1,1.3]},{from:[1,.5,1.2],to:[1,.5,1]},{from:[1,.5,1],to:[1,.5,1.2]},{from:[0,.5,1.2],to:[0,.5,1]},{from:[1,.5,1.2],to:[1,.5,1]},{from:[.5,.5,1],to:[.5,.5,1.2]},{from:[.5,.5,1.3],to:[.5,
.5,1]},{from:[.5,1,1],to:[.5,0,1.15]}],k=d.width,l=d.height,y,r,g,n;v();1==d.effect.length&&f(function(){t.each(function(b){f(this).css({visibility:"hidden"});b==d.startSlide&&x(this,u(b),0)})});this.go=function(b,c){setTimeout(function(){B.trigger("effectEnd")},d.duration);x(t.get(b),u(b),1)}};
// ken burns 
// options.paths=[{ from:[X,Y,Ratio], to:[X,Y,Ratio] },...] - transition description
// 					from - begin state, to - end state
// 					X,Y = 0..1 - relative position, 
//					Ratio>1 - degree of stretching, 
function ws_kenburns(d,t,z){function u(b){return h[b?Math.floor(Math.random()*(m?h.length:Math.min(5,h.length))):0]}function v(){g=f('<div style="width:100%;height:100%"></div>').css({"z-index":8,position:"absolute",left:0,top:0}).appendTo(A)}function w(b,c,d){var a={width:100*b[2]+"%"};a[c?"right":"left"]=-100*(b[2]-1)*(c?1-b[0]:b[0])+"%";a[d?"bottom":"top"]=-100*(b[2]-1)*(d?1-b[1]:b[1])+"%";if(!m)for(var e in a)/\%/.test(a[e])&&(a[e]=(/right|left|width/.test(e)?k:l)*parseFloat(a[e])/100+"px");return a}
function x(b,c,h){var a=f(b),a={width:a.width(),height:a.height(),marginTop:a.css("marginTop"),marginLeft:a.css("marginLeft")};m&&(r&&r.stop(1),r=y);n&&n.remove();n=g;v();h&&(g.hide(),n.stop(!0,!0));if(m){var e,p,q;q=f('<canvas width="'+k+'" height="'+l+'"/>');q.css({position:"absolute",left:0,top:0}).css(a).appendTo(g);e=q.get(0).getContext("2d");p=q.clone().appendTo(g).get(0).getContext("2d");y=wowAnimate(function(a){a=[c.from[0]*(1-a)+a*c.to[0],c.from[1]*(1-a)+a*c.to[1],c.from[2]*(1-a)+a*c.to[2]];
p.drawImage(b,-k*(a[2]-1)*a[0],-l*(a[2]-1)*a[1],k*a[2],l*a[2]);e.clearRect(0,0,k,l);a=e;e=p;p=a},0,1,d.duration+2*d.delay)}else k=a.width,l=a.height,f('<img src="'+b.src+'"/>').css({position:"absolute",left:"auto",right:"auto",top:"auto",bottom:"auto"}).appendTo(g).css(w(c.from,.5<c.from[0],.5<c.from[1])).animate(w(c.to,.5<c.from[0],.5<c.from[1]),{easing:"linear",queue:!1,duration:1.5*d.duration+d.delay});h&&g.fadeIn(d.duration)}var f=jQuery,B=f(this),m=document.createElement("canvas").getContext,
A=f("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_kenburns").appendTo(z),h=d.paths||[{from:[0,0,1],to:[0,0,1.2]},{from:[0,0,1.2],to:[0,0,1]},{from:[1,0,1],to:[1,0,1.2]},{from:[0,1,1.2],to:[0,1,1]},{from:[1,1,1],to:[1,1,1.2]},{from:[.5,1,1],to:[.5,1,1.3]},{from:[1,.5,1.2],to:[1,.5,1]},{from:[1,.5,1],to:[1,.5,1.2]},{from:[0,.5,1.2],to:[0,.5,1]},{from:[1,.5,1.2],to:[1,.5,1]},{from:[.5,.5,1],to:[.5,.5,1.2]},{from:[.5,.5,1.3],to:[.5,
.5,1]},{from:[.5,1,1],to:[.5,0,1.15]}],k=d.width,l=d.height,y,r,g,n;v();1==d.effect.length&&f(function(){t.each(function(b){f(this).css({visibility:"hidden"});b==d.startSlide&&x(this,u(b),0)})});this.go=function(b,c){setTimeout(function(){B.trigger("effectEnd")},d.duration);x(t.get(b),u(b),1)}};
// ken burns 
// options.paths=[{ from:[X,Y,Ratio], to:[X,Y,Ratio] },...] - transition description
// 					from - begin state, to - end state
// 					X,Y = 0..1 - relative position, 
//					Ratio>1 - degree of stretching, 
function ws_kenburns(d,t,z){function u(b){return h[b?Math.floor(Math.random()*(m?h.length:Math.min(5,h.length))):0]}function v(){g=f('<div style="width:100%;height:100%"></div>').css({"z-index":8,position:"absolute",left:0,top:0}).appendTo(A)}function w(b,c,d){var a={width:100*b[2]+"%"};a[c?"right":"left"]=-100*(b[2]-1)*(c?1-b[0]:b[0])+"%";a[d?"bottom":"top"]=-100*(b[2]-1)*(d?1-b[1]:b[1])+"%";if(!m)for(var e in a)/\%/.test(a[e])&&(a[e]=(/right|left|width/.test(e)?k:l)*parseFloat(a[e])/100+"px");return a}
function x(b,c,h){var a=f(b),a={width:a.width(),height:a.height(),marginTop:a.css("marginTop"),marginLeft:a.css("marginLeft")};m&&(r&&r.stop(1),r=y);n&&n.remove();n=g;v();h&&(g.hide(),n.stop(!0,!0));if(m){var e,p,q;q=f('<canvas width="'+k+'" height="'+l+'"/>');q.css({position:"absolute",left:0,top:0}).css(a).appendTo(g);e=q.get(0).getContext("2d");p=q.clone().appendTo(g).get(0).getContext("2d");y=wowAnimate(function(a){a=[c.from[0]*(1-a)+a*c.to[0],c.from[1]*(1-a)+a*c.to[1],c.from[2]*(1-a)+a*c.to[2]];
p.drawImage(b,-k*(a[2]-1)*a[0],-l*(a[2]-1)*a[1],k*a[2],l*a[2]);e.clearRect(0,0,k,l);a=e;e=p;p=a},0,1,d.duration+2*d.delay)}else k=a.width,l=a.height,f('<img src="'+b.src+'"/>').css({position:"absolute",left:"auto",right:"auto",top:"auto",bottom:"auto"}).appendTo(g).css(w(c.from,.5<c.from[0],.5<c.from[1])).animate(w(c.to,.5<c.from[0],.5<c.from[1]),{easing:"linear",queue:!1,duration:1.5*d.duration+d.delay});h&&g.fadeIn(d.duration)}var f=jQuery,B=f(this),m=document.createElement("canvas").getContext,
A=f("<div>").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("ws_effect ws_kenburns").appendTo(z),h=d.paths||[{from:[0,0,1],to:[0,0,1.2]},{from:[0,0,1.2],to:[0,0,1]},{from:[1,0,1],to:[1,0,1.2]},{from:[0,1,1.2],to:[0,1,1]},{from:[1,1,1],to:[1,1,1.2]},{from:[.5,1,1],to:[.5,1,1.3]},{from:[1,.5,1.2],to:[1,.5,1]},{from:[1,.5,1],to:[1,.5,1.2]},{from:[0,.5,1.2],to:[0,.5,1]},{from:[1,.5,1.2],to:[1,.5,1]},{from:[.5,.5,1],to:[.5,.5,1.2]},{from:[.5,.5,1.3],to:[.5,
.5,1]},{from:[.5,1,1],to:[.5,0,1.15]}],k=d.width,l=d.height,y,r,g,n;v();1==d.effect.length&&f(function(){t.each(function(b){f(this).css({visibility:"hidden"});b==d.startSlide&&x(this,u(b),0)})});this.go=function(b,c){setTimeout(function(){B.trigger("effectEnd")},d.duration);x(t.get(b),u(b),1)}};
