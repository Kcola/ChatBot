(this.webpackJsonpreact_prac=this.webpackJsonpreact_prac||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(5),r=a.n(s),o=a(2),l=a.n(o),m=a(3),i=a(1);a(12),a(13);var u=function(e){var t=e.Chatlog;return c.a.createElement("div",{id:"msgBody",className:"card-body msg_card_body"},t.map((function(e){return c.a.createElement("div",{className:"Bot"===e.name||"loading"===e.name?"d-flex justify-content-start mb-4":"d-flex justify-content-end mb-4",key:e.key},c.a.createElement("div",{className:"img_cont_msg"},c.a.createElement("img",{src:"Bot"===e.name||"loading"===e.name?"Bot.jpeg":"logo512.png",className:"rounded-circle user_img_msg"})),c.a.createElement("div",{className:"msg_cotainer",dangerouslySetInnerHTML:{__html:"".concat(e.chat)+'<span class="msg_time">'.concat(e.time," , Today</span>")}}))})))};function d(e){var t=e.newChat,a=Object(n.useState)([]),s=Object(i.a)(a,2),r=s[0],o=s[1],l=function(e){e.preventDefault(),r.length>0&&t("Kola",r),document.getElementById("chatInput").value="",o("")};return c.a.createElement("div",{className:"card-footer"},c.a.createElement("form",{onSubmit:l},c.a.createElement("div",{className:"input-group"},c.a.createElement("textarea",{autocomplete:"false",onChange:function(e){return o(e.target.value)},id:"chatInput",className:"form-control type_msg",placeholder:"Type your message..."}),c.a.createElement("div",{id:"submitBtn",onClick:l,className:"input-group-append"},c.a.createElement("span",{type:"submit",className:"input-group-text send_btn"},c.a.createElement("i",{className:"fas fa-location-arrow"}))))))}var g=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)([]),o=Object(i.a)(r,2),g=o[0],p=o[1],f=function(e){!0===e?s([].concat(Object(m.a)(a),[{key:a.length,name:"loading",chat:'<div style="margin-bottom: -35px; margin-top: 6px;" class="sk-flow"><div class="sk-flow-dot"></div><div class="sk-flow-dot"></div><div class="sk-flow-dot"></div></div>',time:(new Date).getHours()+":"+(new Date).getMinutes()}])):a.splice(-1,1)};return Object(n.useEffect)((function(){var e;if(0==g)s([].concat(Object(m.a)(a),[{key:a.length,name:"Bot",chat:"Welcome to the chat room, I'm Bot",time:(new Date).getHours()+":"+(new Date).getMinutes()}]));else{!function(){var t;l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return f(!0),n.prev=1,n.next=4,l.a.awrap(fetch("https://flaskchatbot.azurewebsites.net/send",{method:"POST",body:JSON.stringify({chat:a[a.length-1].chat})}));case 4:return t=n.sent,n.next=7,l.a.awrap(t.json());case 7:e=n.sent,n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),e={bot_response:"Server is down try again later"};case 13:return n.next=15,l.a.awrap(s([].concat(Object(m.a)(a),[{key:a.length,name:"Bot",chat:e.bot_response,time:(new Date).getHours()+":"+(new Date).getMinutes()}])));case 15:f(!1);case 16:case"end":return n.stop()}}),null,null,[[1,10]])}()}}),[g]),Object(n.useEffect)((function(){var e=document.getElementById("msgBody");e.scrollTop=e.scrollHeight})),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header msg_head"},c.a.createElement("div",{className:"d-flex bd-highlight"},c.a.createElement("div",{className:"img_cont"},c.a.createElement("img",{src:"Bot.jpeg",className:"rounded-circle user_img"}),c.a.createElement("span",{className:"online_icon"})),c.a.createElement("div",{className:"user_info"},c.a.createElement("span",null,"Chat with Bot")))),c.a.createElement(u,{Chatlog:a}),c.a.createElement(d,{newChat:function(e,t){p(a.length),s([].concat(Object(m.a)(a),[{key:a.length,name:e,chat:t,time:(new Date).getHours()+":"+(new Date).getMinutes()}]))}}))};r.a.render(c.a.createElement(g,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.c6a2391d.chunk.js.map