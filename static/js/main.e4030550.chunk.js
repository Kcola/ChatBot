(this.webpackJsonpreact_prac=this.webpackJsonpreact_prac||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(16)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(6),r=a.n(s),o=a(2),i=a.n(o),l=a(3),m=a(1),d=a(4);a(13),a(14);var u=function(e){var t=e.Chatlog;return c.a.createElement("div",{id:"msgBody",className:"card-body msg_card_body"},t.map((function(e){var t;return c.a.createElement("div",(t={"data-time":e.time,name:"Bot"===e.name||"loading"===e.name?"bubble-sender":"bubble-reciever"},Object(d.a)(t,"data-time",e.time),Object(d.a)(t,"className","Bot"===e.name||"loading"===e.name?"d-flex justify-content-start mb-4":"d-flex justify-content-end mb-4"),Object(d.a)(t,"key",e.key),t),c.a.createElement("div",{className:"img_cont_msg"},c.a.createElement("img",{src:"Bot"===e.name||"loading"===e.name?"Bot.jpeg":"logo512.png",className:"rounded-circle user_img_msg"})),c.a.createElement("div",{"data-time":e.time,className:"msg_cotainer",dangerouslySetInnerHTML:{__html:"".concat(e.chat)}}))})))};function g(e){var t=e.newChat,a=Object(n.useState)([]),s=Object(m.a)(a,2),r=s[0],o=s[1],i=function(e){e.preventDefault(),r.length>0&&t("Kola",r),document.getElementById("chatInput").value="",o("")};return c.a.createElement("div",{className:"card-footer"},c.a.createElement("form",{onSubmit:i},c.a.createElement("div",{className:"input-group"},c.a.createElement("textarea",{autoComplete:"false",onChange:function(e){return o(e.target.value)},id:"chatInput",className:"form-control type_msg",placeholder:"Type your message..."}),c.a.createElement("div",{id:"submitBtn",onClick:i,className:"input-group-append"},c.a.createElement("span",{type:"submit",className:"input-group-text send_btn"},c.a.createElement("i",{className:"fas fa-location-arrow"}))))))}a(15);var p=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)([]),o=Object(m.a)(r,2),d=o[0],p=o[1],b=function(e){!0===e?s([].concat(Object(l.a)(a),[{key:a.length,name:"loading",chat:'<div style="margin-bottom: -35px; margin-top: 6px;" class="sk-flow"><div class="sk-flow-dot"></div><div class="sk-flow-dot"></div><div class="sk-flow-dot"></div></div>',time:(new Date).getHours()+":"+(new Date).getMinutes()}])):a.splice(-1,1)};return Object(n.useEffect)((function(){var e;if(0==d)s([].concat(Object(l.a)(a),[{key:a.length,name:"Bot",chat:"Welcome to the chat room, I'm Bot",time:(new Date).getHours()+":"+(new Date).getMinutes()}]));else{!function(){var t,n;i.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return b(!0),c.prev=1,c.next=4,i.a.awrap(fetch("https://benjaminbotman.azurewebsites.net/qnamaker/knowledgebases/5632106f-b384-4d61-87d6-93cfc9bc2275/generateAnswer",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"EndpointKey 25b4213b-5dff-40cd-9bfb-7595051ed0a8"},body:JSON.stringify({question:a[a.length-1].chat})}));case 4:return t=c.sent,e={bot_response:"Server is down try again later"},c.next=8,i.a.awrap(t.json());case 8:n=c.sent.answers,"No good match found in KB."===(e={bot_response:n[0].answer}).bot_response&&(e={bot_response:"English pls"}),c.next=16;break;case 13:c.prev=13,c.t0=c.catch(1),e={bot_response:"Server is down try again later"};case 16:return c.next=18,i.a.awrap(s([].concat(Object(l.a)(a),[{key:a.length,name:"Bot",chat:e.bot_response,time:(new Date).getHours()+":"+(new Date).getMinutes()}])));case 18:b(!1);case 19:case"end":return c.stop()}}),null,null,[[1,13]])}()}}),[d]),Object(n.useEffect)((function(){var e=document.getElementById("msgBody");e.scrollTop=e.scrollHeight})),c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header msg_head"},c.a.createElement("div",{className:"d-flex bd-highlight"},c.a.createElement("div",{className:"img_cont"},c.a.createElement("img",{src:"Bot.jpeg",className:"rounded-circle user_img"}),c.a.createElement("span",{className:"online_icon"})),c.a.createElement("div",{className:"user_info"},c.a.createElement("span",null,"Chat with Bot")))),c.a.createElement(u,{Chatlog:a}),c.a.createElement(g,{newChat:function(e,t){p(a.length),s([].concat(Object(l.a)(a),[{key:a.length,name:e,chat:t,time:(new Date).getHours()+":"+(new Date).getMinutes()}]))}}))};r.a.render(c.a.createElement(p,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.e4030550.chunk.js.map