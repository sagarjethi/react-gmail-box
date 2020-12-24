(this["webpackJsonpreact-gmail-api"]=this["webpackJsonpreact-gmail-api"]||[]).push([[0],{103:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(28),o=t.n(l),i=t(47),s=t.n(i),c=t(57),u=t(17),m=Object(n.createContext)(),d=t(26),g=t(13),p=function(e,a){switch(a.type){case"SET_MESSAGES":return Object(g.a)(Object(g.a)({},e),{},{messages:[].concat(Object(d.a)(e.messages),[a.payload]),loading:!1});case"SET_MESSAGE":return Object(g.a)(Object(g.a)({},e),{},{message:a.payload});case"SET_CURRENT_LABEL":return Object(g.a)(Object(g.a)({},e),{},{currentLabel:a.payload});case"SET_NEXT_PAGE_TOKEN":return Object(g.a)(Object(g.a)({},e),{},{nextPageToken:a.payload});case"SET_HAS_MORE_MESSAGES":return Object(g.a)(Object(g.a)({},e),{},{hasMoreMessages:a.payload});case"CLEAR_MESSAGES":return Object(g.a)(Object(g.a)({},e),{},{messages:[]});case"SET_LOADING":return Object(g.a)(Object(g.a)({},e),{},{loading:!0});default:return e}},E=function(e){var a=Object(n.useReducer)(p,{messages:[],message:null,currentLabel:"INBOX",nextPageToken:"",hasMoreMessages:!0,isAuthorize:!1,loading:!1}),t=Object(u.a)(a,2),l=t[0],o=t[1],i=function(e){(e.result.messages?e.result.messages:[]).forEach((function(e){window.gapi.client.gmail.users.messages.get({userId:"me",id:e.id}).execute((function(e){o({type:"SET_MESSAGES",payload:e.result})}))}))},s=function(e){return o({type:"SET_NEXT_PAGE_TOKEN",payload:e})},c=function(e){return o({type:"SET_HAS_MORE_MESSAGES",payload:e})},d=function(){return o({type:"CLEAR_MESSAGES"})},g=function(){return o({type:"SET_LOADING"})};return r.a.createElement(m.Provider,{value:{messages:l.messages,message:l.message,currentLabel:l.currentLabel,nextPageToken:l.nextPageToken,hasMoreMessages:l.hasMoreMessages,loading:l.loading,getMessages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.currentLabel;g(),d();var a=window.gapi.client.gmail.users.messages.list({userId:"me",labelIds:e,maxResults:20});a.execute((function(e){e.result.nextPageToken?(s(e.result.nextPageToken),c(!0)):(s(""),c(!1)),i(e)}))},getMessagesQuery:function(e){g(),d(),window.gapi.client.gmail.users.messages.list({userId:"me",q:e}).execute(i)},getOneMessage:function(e){window.gapi.client.gmail.users.messages.get({userId:"me",id:e}).execute((function(e){console.log(e),o({type:"SET_MESSAGE",payload:e.result})}))},setCurrentLabel:function(e){return o({type:"SET_CURRENT_LABEL",payload:e})},loadMoreMessages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.currentLabel,a=window.gapi.client.gmail.users.messages.list({userId:"me",labelIds:e,maxResults:20,pageToken:l.nextPageToken});a.execute((function(e){e.result.nextPageToken?(s(e.result.nextPageToken),c(!0)):(s(""),c(!1)),i(e)}))},setLoading:g}},e.children)},b=t(30),f=t(61),y=t(108),v=t(116),h=t(49),C=t(117),x=t(64),O=t(45),S=t(109),w=function(){var e=Object(y.a)(),a=e.isOpen,t=e.onOpen,l=e.onClose,o=Object(v.a)(),i=function(e,a,t){var n="";for(var r in e)n+=r+=": "+e[r]+"\r\n";n+="\r\n"+a;var l=b.Base64.encodeURI(n);window.gapi.client.gmail.users.messages.send({userId:"me",resource:{raw:l}}).execute(t)},s=function(e){-1!==e.result.labelIds.indexOf("SENT")?o({title:"Message Sent.",description:"We've Sent your email.",status:"success",duration:9e3,isClosable:!0}):o({title:"An error occurred.",description:"Unable to sent your email.",status:"error",duration:9e3,isClosable:!0})};return r.a.createElement(n.Fragment,null,r.a.createElement(h.a,{w:"100%",h:"48px",leftIcon:f.a,borderRadius:"20px",variant:"solid",variantColor:"blue",onClick:t},"New Message"),r.a.createElement(C.a,{isOpen:a,size:"xl",onClose:l,closeOnOverlayClick:!1},r.a.createElement(C.g,null),r.a.createElement(C.d,null,r.a.createElement(C.f,null,"New Message"),r.a.createElement(C.c,null),r.a.createElement("form",{id:"form",onSubmit:function(e){e.preventDefault();var a=e.target,t=a.elements.emailTo.value,n=a.elements.subject.value,r=a.elements.message.value;i({To:t,Subject:n},r,s),l()}},r.a.createElement(C.b,null,r.a.createElement(x.a,{isRequired:!0},r.a.createElement(O.a,{type:"email",id:"emailTo",placeholder:"To","aria-describedby":"email-helper-text"})),r.a.createElement(x.a,{isRequired:!0},r.a.createElement(O.a,{type:"text",id:"subject",placeholder:"Subject","aria-describedby":"subject-email-helper-text"})),r.a.createElement(x.a,{isRequired:!0},r.a.createElement(S.a,{id:"message",minH:"280px",size:"xl",resize:"vertical"}))),r.a.createElement(C.e,null,r.a.createElement(h.a,{type:"reset",variantColor:"blue",mr:3,onClick:l},"Close"),r.a.createElement(h.a,{type:"submit",variantColor:"green"},"Send"))))))},j=t(4),T=t(110),R=t(18),I=t(48),k=function(){var e=Object(n.useContext)(m),a=e.getMessages,t=e.setCurrentLabel,l=Object(n.useState)("INBOX"),o=Object(u.a)(l,2),i=o[0],s=o[1],c=function(e){var n=e.target.id;s(n),t(n),a(n)};return r.a.createElement(j.a,{w:"16%",h:"100%",bg:"white",border:"1px",borderColor:"gray.200",borderTopLeftRadius:"md",borderBottomLeftRadius:"md"},r.a.createElement(T.b,null,r.a.createElement(T.a,{p:"0.5rem 1rem 1rem"},r.a.createElement(w,null)),r.a.createElement(T.a,null,r.a.createElement(h.a,{id:"INBOX",w:"100%",h:"45px",py:2,pl:8,leftIcon:R.c,variantColor:"blue",variant:"INBOX"===i?"solid":"ghost",justifyContent:"flex-start",onClick:c},"Inbox")),r.a.createElement(T.a,null,r.a.createElement(h.a,{id:"STARRED",w:"100%",h:"45px",py:2,pl:8,leftIcon:R.h,variantColor:"blue",variant:"STARRED"===i?"solid":"ghost",justifyContent:"flex-start",onClick:c},"Starred")),r.a.createElement(T.a,null,r.a.createElement(h.a,{id:"IMPORTANT",w:"100%",h:"45px",py:2,pl:8,leftIcon:R.d,variantColor:"blue",variant:"IMPORTANT"===i?"solid":"ghost",justifyContent:"flex-start",onClick:c},"Important")),r.a.createElement(T.a,null,r.a.createElement(h.a,{id:"SENT",w:"100%",h:"45px",py:2,pl:8,leftIcon:I.b,variantColor:"blue",variant:"SENT"===i?"solid":"ghost",justifyContent:"flex-start",onClick:c},"Sent")),r.a.createElement(T.a,null,r.a.createElement(h.a,{id:"DRAFT",w:"100%",h:"45px",py:2,pl:8,leftIcon:I.a,variantColor:"blue",variant:"DRAFT"===i?"solid":"ghost",justifyContent:"flex-start",onClick:c},"Drafts")),r.a.createElement(T.a,null,r.a.createElement(h.a,{id:"TRASH",w:"100%",h:"45px",py:2,pl:8,leftIcon:"delete",variantColor:"blue",variant:"TRASH"===i?"solid":"ghost",justifyContent:"flxex-start",onClick:c},"Trash")),r.a.createElement(T.a,null,r.a.createElement(h.a,{id:"CATEGORY_SOCIAL",w:"100%",h:"45px",py:2,pl:8,leftIcon:R.f,variantColor:"blue",variant:"CATEGORY_SOCIAL"===i?"solid":"ghost",justifyContent:"flxex-start",onClick:c},"Social")),r.a.createElement(T.a,null,r.a.createElement(h.a,{id:"CATEGORY_PROMOTIONS",w:"100%",h:"45px",py:2,pl:8,leftIcon:R.e,variantColor:"blue",variant:"CATEGORY_PROMOTIONS"===i?"solid":"ghost",justifyContent:"flxex-start",onClick:c},"Promotions"))))},M=function(e,a){var t=e.find((function(e){return e.name===a}));return void 0!==t?t.value:void 0},A=function(e){return e.replace(/['"]+/g,"")},_=t(111),L=t(118),N=t(112),D=t(12),P=t.n(D),z=function(e){var a=e.message,t=e.handleMessageClick,n=A(M(a.payload.headers,"From").split("<")[0]),l=M(a.payload.headers,"Subject"),o=function(e){var a=document.createElement("textarea");return a.innerHTML=e,a.value}(a.snippet.substr(0,75)),i=a.labelIds.indexOf("UNREAD")>-1?"#fff":"#E2E8F0";return r.a.createElement(_.a,{key:a.id,id:a.id,onClick:t,wrap:"no-wrap",justify:"space-around",py:2,bg:i,borderTop:"1px",borderBottom:"1px",borderColor:"gray.300",cursor:"pointer"},r.a.createElement(L.a,{name:n,src:"https://bit.ly/tioluwani-kolawole"}),r.a.createElement(j.a,{w:"80%"},r.a.createElement(N.a,{fontSize:"sm",color:"gray.700",isTruncated:!0},n),r.a.createElement(N.a,{fontSize:"md",fontWeight:"bold",color:"#3182ce",isTruncated:!0},l),r.a.createElement(N.a,{fontSize:"xs",color:"gray.500"},o)))},q=z;z.prototype={message:P.a.object.isRequired,handleMessageClick:P.a.func.isRequired};var F=t(119),G=t(113),B=function(){var e=Object(n.useContext)(m),a=e.getMessagesQuery,t=e.loading,l=Object(n.useState)(""),o=Object(u.a)(l,2),i=o[0],s=o[1],c=function(e){i&&(13!==e.keyCode&&"click"!==e.type||a(i))};return r.a.createElement(j.a,{py:"5px",bg:"white",border:"1px",borderColor:"gray.200"},r.a.createElement(F.a,{size:"lg"},r.a.createElement(G.a,{icon:"search",variant:"ghost",variantColor:"blue",marginLeft:"5px","aria-label":"Search messages",onClick:c,isLoading:t}),r.a.createElement(O.a,{type:"text",placeholder:"Search mail",borderWidth:"0px",borderRadius:"0px",focusBorderColor:"white",value:i,onChange:function(e){return s(e.target.value)},onKeyDown:c})))},U=t(65),H=t(68),Y=function(){var e=Object(n.useContext)(m),a=e.messages,t=e.getOneMessage,l=e.hasMoreMessages,o=e.loadMoreMessages,i=function(e){var a=e.currentTarget.getAttribute("id");t(a)};return r.a.createElement(j.a,{overflowY:"auto",id:"scrollableDiv"},r.a.createElement(U.a,{dataLength:a.length,next:o,hasMore:l,loader:r.a.createElement("h4",null,"Loading..."),scrollableTarget:"scrollableDiv"},a.map((function(e,a){return r.a.createElement(q,{key:a,message:e,handleMessageClick:i})}))))},K=function(){return r.a.createElement(j.a,{mt:6,display:"flex",align:"center",justifyContent:"center"},r.a.createElement(H.a,{thickness:"4px",speed:"0.65s",emptyColor:"gray.200",color:"blue.500",size:"xl"}))},X=function(){var e=Object(n.useContext)(m),a=e.messages,t=e.loading;return r.a.createElement(_.a,{direction:"column",wrap:"no-wrap",w:"70%",h:"100%",bg:"#f1f1f1",color:"black"},r.a.createElement(B,null),!a.length&&t?r.a.createElement(K,null):r.a.createElement(Y,null))},J=function(e){var a=e.replayData,t=Object(y.a)(),l=t.isOpen,o=t.onOpen,i=t.onClose,s=Object(v.a)(),c=function(e,a,t){var n="";for(var r in e)n+=r+=": "+e[r]+"\r\n";n+="\r\n"+a;var l=b.Base64.encodeURI(n);window.gapi.client.gmail.users.messages.send({userId:"me",resource:{raw:l}}).execute(t)},u=function(e){-1!==e.result.labelIds.indexOf("SENT")?s({title:"Message Sent.",status:"success",duration:3e3,isClosable:!0}):s({title:"An error occurred.",description:"Unable to sent your replay.",status:"error",duration:3e3,isClosable:!0})};return r.a.createElement(n.Fragment,null,r.a.createElement(h.a,{rightIcon:R.g,variantColor:"blue",variant:"outline",onClick:o},"Replay"),r.a.createElement(C.a,{isOpen:l,size:"xl",onClose:i,closeOnOverlayClick:!1},r.a.createElement(C.g,null),r.a.createElement(C.d,null,r.a.createElement(C.f,null,"Replay "),r.a.createElement(C.c,null),r.a.createElement("form",{id:"form",onSubmit:function(e){e.preventDefault();var a=e.target,t=a.elements.emailTo.value,n=a.elements.subject.value,r=a.elements["reply-message-id"].value,l=a.elements.message.value;c({To:t,Subject:n,"In-Reply-To":r},l,u),i()}},r.a.createElement(C.b,null,r.a.createElement(O.a,{type:"hidden",id:"reply-message-id",value:a.msgId,readOnly:!0}),r.a.createElement(x.a,{isRequired:!0},r.a.createElement(O.a,{type:"email",id:"emailTo",placeholder:"To","aria-describedby":"email-helper-text",value:a.to,readOnly:!0})),r.a.createElement(x.a,{isRequired:!0},r.a.createElement(O.a,{type:"text",id:"subject",placeholder:"Subject","aria-describedby":"subject-email-helper-text",value:a.subject,readOnly:!0})),r.a.createElement(x.a,{isRequired:!0},r.a.createElement(S.a,{id:"message",minH:"280px",size:"xl",resize:"vertical"}))),r.a.createElement(C.e,null,r.a.createElement(h.a,{type:"reset",variantColor:"blue",mr:3,onClick:i},"Close"),r.a.createElement(h.a,{type:"submit",variantColor:"green"},"Send"))))))};J.prototype={replayData:P.a.object.isRequired};var Q=function(e){var a=e.forwardData,t=e.getMessageBody,l=Object(y.a)(),o=l.isOpen,i=l.onOpen,s=l.onClose,c=Object(v.a)(),u=function(e,a,t){var n="";n+="From: ".concat(M(a,"From")," \r\n"),n+="Date: ".concat(M(a,"Date")," \r\n"),n+="Subject: ".concat(M(a,"Subject")," \r\n"),n+="To: ".concat(e," \r\n"),n+="Content-Type: text/html; charset=UTF-8 \r\n",n+="\r\n ".concat(t),m("me",n,d)},m=function(e,a,t){var n=b.Base64.encodeURI(a);window.gapi.client.gmail.users.messages.send({userId:e,resource:{raw:n}}).execute(t)},d=function(e){-1!==e.result.labelIds.indexOf("SENT")?c({title:"Email forwarded Successfully.",status:"success",duration:3e3,isClosable:!0}):c({title:"An error occurred.",description:"Unable to sent your mail.",status:"error",duration:3e3,isClosable:!0})};return r.a.createElement(n.Fragment,null,r.a.createElement(h.a,{rightIcon:R.b,variantColor:"blue",variant:"outline",onClick:i},"Forward"),r.a.createElement(C.a,{isOpen:o,size:"xl",onClose:s,closeOnOverlayClick:!1},r.a.createElement(C.g,null),r.a.createElement(C.d,null,r.a.createElement(C.f,null,"Forward "),r.a.createElement(C.c,null),r.a.createElement("form",{id:"form",onSubmit:function(e){e.preventDefault();var n=e.target.elements.emailTo.value;u(n,a.payload.headers,t(a.payload)),s()}},r.a.createElement(C.b,null,r.a.createElement(x.a,{isRequired:!0},r.a.createElement(O.a,{type:"email",id:"emailTo",placeholder:"To","aria-describedby":"email-helper-text"})),r.a.createElement(x.a,{isRequired:!0},r.a.createElement(O.a,{type:"text",id:"subject",placeholder:"Subject","aria-describedby":"subject-email-helper-text",value:M(a.payload.headers,"Subject"),readOnly:!0})),r.a.createElement(x.a,{isRequired:!0},r.a.createElement(S.a,{id:"message",minH:"280px",size:"xl",resize:"vertical",value:"------Forward Message------\r\n"+function(e){var a="";return a+="From: "+M(e,"From")+"\r\n",a+="Date: "+M(e,"Date")+"\r\n",a+="Subject: "+M(e,"Subject")+"\r\n",a+="To: "+M(e,"To")+"\r\n"}(a.payload.headers),readOnly:!0}))),r.a.createElement(C.e,null,r.a.createElement(h.a,{type:"reset",variantColor:"blue",mr:3,onClick:s},"Close"),r.a.createElement(h.a,{type:"submit",variantColor:"green"},"Send"))))))};Q.prototype={forwardData:P.a.object.isRequired,getMessageBody:P.a.func.isRequired};t(114),t(115),t(66);var W=function(){var e=Object(n.useContext)(m).getMessages;return Object(n.useEffect)((function(){e()}),[]),r.a.createElement(_.a,{h:"100vh",minH:"600px",justify:"space-arround",wrap:"no-wrap",p:"1em",bg:"#e5f4f1",color:"white"},r.a.createElement(k,null),r.a.createElement(X,null))},V=t(67),Z=function(e){var a=e.handleAuthClick,t=e.loading;return r.a.createElement(_.a,{h:"100vh",justify:"center",alignItems:"center",bg:"#e5f4f1"},r.a.createElement(h.a,{isLoading:t,leftIcon:V.a,height:"50px",variantColor:"blue",variant:"outline",backgroundColor:"white",onClick:a},"Sign in with Google"))},$=t(9),ee=t(120),ae=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)(!0),i=Object(u.a)(o,2),m=i[0],d=i[1];Object(n.useEffect)((function(){Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.gapi.load("client:auth2",{callback:function(){console.log("gmail","AIzaSyCi8Qhn3KE7Fvr0mk9PMY3JfirVSymSiTg"),window.gapi.client.setApiKey("AIzaSyCi8Qhn3KE7Fvr0mk9PMY3JfirVSymSiTg"),window.gapi.auth.authorize({client_id:"1051191375244-dto5v0atot8b3f2t125mbs91sqbj90bh.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/gmail.readonly",immediate:!0},g)},onerror:function(){console.log("gapi.client failed to load!"),d(!1)},timeout:5e3,ontimeout:function(){console.log("gapi.client could not load in a timely manner!")}});case 2:case"end":return e.stop()}}),e)})))()}),[]);var g=function(e){e&&!e.error?(console.log("Sign-in successful"),p()):(console.error("handleAuthResult..."),console.error(e),d(!1))},p=function(){return window.gapi.client.load("gmail","v1").then((function(e){console.log("gapi client loaded for API"),l(!0)}),(function(e){console.error("Error loading window.gapi client for API",e)}))};return r.a.createElement(E,null,r.a.createElement($.a,null,r.a.createElement(ee.a,null),t?r.a.createElement(W,null):r.a.createElement(Z,{loading:m,handleAuthClick:function(){return d(!0),window.gapi.auth.authorize({client_id:"1051191375244-dto5v0atot8b3f2t125mbs91sqbj90bh.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/gmail.readonly",immediate:!1},g)}})))};o.a.render(r.a.createElement(ae,null),document.getElementById("root"))},66:function(e,a,t){e.exports=t.p+"static/media/empty_email.c9034baf.svg"},69:function(e,a,t){e.exports=t(103)}},[[69,1,2]]]);
//# sourceMappingURL=main.755a3082.chunk.js.map