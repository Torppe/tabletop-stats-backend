(this["webpackJsonptabletop-stats"]=this["webpackJsonptabletop-stats"]||[]).push([[0],{101:function(e,a,t){e.exports=t(131)},131:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),l=t.n(c),o=t(6),i=t.n(o),s=t(12),u=t(8),m=t(33),p=t(185),d=t(87),f=t(13),g=t(193),v=t(192),E=t(191),y=t(201),b=t(197),h=t(187),x=t(132),w=t(172),j=t(173),O=t(34),k=function(e){var a=e.icon,t=e.primary,n=e.to,c=e.handlePageTransition;return r.a.createElement("li",null,r.a.createElement(x.a,{button:!0,component:O.b,to:n,onClick:c},a?r.a.createElement(w.a,null,a):null,r.a.createElement(j.a,{primary:t})))},S=t(89),C=t.n(S),P=t(194),N=t(49),B=t(20),I=t.n(B),F=null,A=function(e){var a;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(I.a.post("/api/login",e));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}))},G=function(e){F="bearer ".concat(e)},T=function(){return F},H=function(){var e;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(I.a.get("/api/games"));case 2:return e=a.sent,a.abrupt("return",e.data);case 4:case"end":return a.stop()}}))},M=function(e){var a,t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return a={headers:{Authorization:T()}},n.next=3,i.a.awrap(I.a.post("/api/games",e,a));case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}))},R=function(e){var a;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(I.a.get("".concat("/api/games","/").concat(e)));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}))},D=t(14),U=t(175),W=t(176),z=t(177),J=t(178),q=t(179),L=t(198),K=t(180),V=t(181),Q=t(182),X=t(86),Y=t.n(X),Z=t(174),$=t(134),_=Object($.a)((function(e){return{root:{position:"fixed",borderRadius:"0.5em",bottom:e.spacing(2),right:e.spacing(2)}}})),ee=function(e){var a=_();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{onClick:e.handleClick,className:a.root,color:"secondary","aria-label":"add"},r.a.createElement(Y.a,null)))},ae=Object(d.a)({item:{width:"11.5em"},cardContent:{bottom:0,position:"absolute",padding:"0.4em 0.8em 0 1em","&:last-child":{paddingBottom:"0.5em"}},card:{position:"relative",borderRadius:"10px",height:"10em"},input:{backgroundColor:"white"}}),te=function(e){var a=e.value,t=e.handleGameChange,c=e.handleAddGame,l=e.setIsModifying,o=Object(n.useState)(!1),i=Object(s.a)(o,2),u=i[0],m=i[1],p=ae(),d=function(){m(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{open:u,onClose:d,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(W.a,{id:"alert-dialog-title"},'Add a new game called "',a,'"?'),r.a.createElement(z.a,null,r.a.createElement(J.a,{onClick:d,color:"primary",variant:"outlined"},"Cancel"),r.a.createElement(J.a,{onClick:c,color:"primary",variant:"contained"},"Confirm"))),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m(!0)}},r.a.createElement(q.a,{variant:"outlined"},r.a.createElement(L.a,{id:"new-game",placeholder:"Add game",variant:"outlined",color:"secondary",className:p.input,autoFocus:!0,value:a,onBlur:function(){u||l(!1)},onChange:t}))))},ne=function(e){var a=e.games,t=e.setGames,c=e.user;(0,e.setHeader)("Games");var l=ae(),o=Object(n.useState)(null),u=Object(s.a)(o,2),m=u[0],p=u[1],d=Object(n.useState)(!1),f=Object(s.a)(d,2),g=f[0],v=f[1],E=function(){var e,n;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e={title:m},r.prev=1,r.next=4,i.a.awrap(M(e));case 4:n=r.sent,t([].concat(Object(D.a)(a),[n])),v(!1),p(""),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),console.log("failed to create game",r.t0);case 13:case"end":return r.stop()}}),null,null,[[1,10]])},y=function(){v(!g),p("")},b=function(e){p(e.target.value)};return r.a.createElement(r.a.Fragment,null,!g&&r.a.createElement(K.a,{container:!0,spacing:2,justify:"center"},a.map((function(e){return r.a.createElement(K.a,{key:e.id,item:!0,className:l.item},r.a.createElement(O.b,{to:"/game-stats/".concat(e.id)},r.a.createElement(V.a,{className:l.card},r.a.createElement(Q.a,{className:l.cardContent},r.a.createElement(N.a,{align:"left",style:{fontSize:"1.2em"}},e.title)))))}))),c?r.a.createElement(r.a.Fragment,null,g&&r.a.createElement(te,{value:m,handleGameChange:b,handleAddGame:E,setIsModifying:v}),!g&&r.a.createElement(ee,{handleClick:y})):null)},re=Object(d.a)({item:{width:"11.5em"},cardContent:{padding:"0.4em 0.8em 0 1em","&:last-child":{paddingBottom:"0.5em"}},card:{borderRadius:"10px"},title:{fontSize:"1.8em",lineHeight:"1.25em",paddingBottom:"0.3em"}}),ce=function(e){var a=e.title,t=e.value,n=e.titleStyle,c=re();return a&&t?r.a.createElement(K.a,{item:!0,className:c.item},r.a.createElement(V.a,{className:c.card},r.a.createElement(Q.a,{className:c.cardContent},r.a.createElement(N.a,{className:c.title,color:"textSecondary",style:n},a),r.a.createElement(N.a,{align:"right",variant:"h4",component:"h2"},t),e.children))):null},le=function(e){var a=e.matches,t=a.map((function(e){return e.players})).flat(),n=t.map((function(e){return e.points})),c=+(n.reduce((function(e,a){return e+a}),0)/n.length).toFixed(2),l=function(e){if(e){for(var a=e.map((function(e){return e.players})),t=new Map,n=0;n<a.length;n++){var r=a[n].reduce((function(e,a){return a.points>e.points?a:e})),c=t.get(r.player.name);c?t.set(r.player.name,c+1):t.set(r.player.name,1)}var l=Object(D.a)(t.entries()).reduce((function(e,a){return a[1]>e[1]?a:e}),[0,0]);return{name:l[0],wins:l[1]}}}(a),o=t.length>0?t.reduce((function(e,a){return a.points>e.points?a:e})):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(ce,{title:"Games played",value:a.length}),r.a.createElement(ce,{title:"Average points",value:c}),o&&r.a.createElement(ce,{title:"Most points",value:o.points},r.a.createElement(N.a,{color:"textSecondary",variant:"body1",component:"p",align:"right"},o.player.name)),l&&r.a.createElement(ce,{title:"Most wins",value:l.wins},r.a.createElement(N.a,{color:"textSecondary",variant:"body1",component:"p",align:"right"},l.name))))},oe=t(189),ie=t(66),se=t(65),ue=t(199),me=t(196),pe=t(186),de=t(200),fe=t(188),ge=function(e){var a=e.selectedPlayers,t=e.player,n=e.players,c=e.removePlayer,l=e.updatePlayer,o=a.map((function(e){return e.name}));return r.a.createElement(K.a,{container:!0,spacing:1,justify:"center"},r.a.createElement(K.a,{item:!0,md:6,xs:5},r.a.createElement(q.a,{fullWidth:!0,variant:"outlined",required:!0},r.a.createElement(ue.a,{id:"player-label"},"Player"),r.a.createElement(me.a,{labelId:"player-label",id:"player",value:t.name,onChange:function(e){return function(e){var a=Object(se.a)({},t,{name:e});l(a)}(e.target.value)}},n.map((function(e){return r.a.createElement(pe.a,{key:e.name,disabled:o.includes(e.name),value:e.name},e.name)}))))),r.a.createElement(K.a,{item:!0,md:5,xs:5},r.a.createElement(de.a,{fullWidth:!0,required:!0,id:"points",label:"Points",type:"number",defaultValue:t.points,onChange:function(e){return function(e){var a=Object(se.a)({},t,{points:Number(e)});l(a)}(e.target.value)},variant:"outlined"})),r.a.createElement(K.a,{item:!0,xs:1},r.a.createElement(h.a,{"aira-label":"delete",onClick:function(){return c(t)}},r.a.createElement(fe.a,null))))},ve=function(){var e;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(I.a.get("/api/players"));case 2:return e=a.sent,a.abrupt("return",e.data);case 4:case"end":return a.stop()}}))},Ee=function(e){var a;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(I.a.get("".concat("/api/players","/").concat(e)));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}))},ye=t(88),be=t.n(ye),he=t(190),xe=Object(d.a)({cancelButton:{float:"right",marginTop:"-30px",marginRight:"-30px",marginBottom:"15px"}}),we=function(e){var a=e.handleSubmit,t=e.handleCloseForm,c=Object(n.useState)([]),l=Object(s.a)(c,2),o=l[0],u=l[1],m=Object(n.useState)([]),p=Object(s.a)(m,2),d=p[0],f=p[1],g=Object(n.useState)(!1),v=Object(s.a)(g,2),E=v[0],y=v[1],b=xe(),x={marginTop:d.length>0?"2em":null};Object(n.useEffect)((function(){!function(){var e;i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(ve());case 3:e=a.sent,u(e),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log("failed to fetch player data",a.t0);case 10:case"end":return a.stop()}}),null,null,[[0,7]])}()}),[]);var w=function(e){var a=d.map((function(a){return a.id!==e.id?a:e}));f(a)},j=function(e){var a=d.filter((function(a){return a.id!==e.id}));f(a)},O=function(){y(!1)};return r.a.createElement("div",null,r.a.createElement(U.a,{open:E,onClose:O,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(W.a,{id:"alert-dialog-title"},"Add a new match?"),r.a.createElement(z.a,null,r.a.createElement(J.a,{onClick:O,color:"primary",variant:"outlined"},"Cancel"),r.a.createElement(J.a,{onClick:function(){var e=d.filter((function(e){return e.name}));if(!(e.length<1)){var t=e.map((function(e){var a=o.find((function(a){return a.name===e.name}));return a?{player:a.id,points:e.points}:null}));a(t)}},color:"primary",variant:"contained"},"Confirm"))),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),y(!0)}},r.a.createElement(oe.a,{maxWidth:"sm",disableGutters:!0},r.a.createElement(ie.a,{style:{padding:"2em"}},r.a.createElement(h.a,{onClick:t,"aira-label":"cancel",className:b.cancelButton},r.a.createElement(he.a,null)),d.map((function(e){return r.a.createElement(ge,{key:e.id,player:e,players:o,selectedPlayers:d,removePlayer:j,updatePlayer:w})})),r.a.createElement(oe.a,{disableGutters:!0},r.a.createElement(K.a,{container:!0,justify:"space-between",style:x},r.a.createElement(K.a,{item:!0},r.a.createElement(J.a,{variant:"outlined",color:"primary",onClick:function(){var e={id:be()(),name:"",points:null};f([].concat(Object(D.a)(d),[e]))}},"Add player")),r.a.createElement(K.a,{item:!0},r.a.createElement(J.a,{variant:"contained",color:"primary",type:"submit"},"Submit"))))))))},je=function(e){var a,t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return a={headers:{Authorization:T()}},n.next=3,i.a.awrap(I.a.post("/api/matches",e,a));case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}))},Oe=function(e){var a;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(I.a.get("".concat("/api/matches","/game/").concat(e)));case 2:return a=t.sent,t.abrupt("return",a.data.filter((function(e){return e.game})));case 4:case"end":return t.stop()}}))},ke=function(e){var a;return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(I.a.get("".concat("/api/matches","/player/").concat(e)));case 2:return a=t.sent,t.abrupt("return",a.data.filter((function(e){return e.game})));case 4:case"end":return t.stop()}}))},Se=function(e){var a=e.gameId,t=e.setHeader,c=e.user,l=Object(n.useState)([]),o=Object(s.a)(l,2),u=o[0],m=o[1],p=Object(n.useState)(!1),d=Object(s.a)(p,2),f=d[0],g=d[1];Object(n.useEffect)((function(){!function(){var e;i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.awrap(Oe(a));case 3:e=t.sent,m(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("failed to get match data",t.t0);case 10:case"end":return t.stop()}}),null,null,[[0,7]])}(),function(){var e;i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.a.awrap(R(a));case 3:e=n.sent,t(e.title),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("failed to fetch header",n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,7]])}()}),[a,t]);var v=function(e){var t,n;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t={game:a,players:e},r.prev=1,r.next=4,i.a.awrap(je(t));case 4:n=r.sent,m([].concat(Object(D.a)(u),[n])),g(!1),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),console.log("failed to create a new match",r.t0);case 12:case"end":return r.stop()}}),null,null,[[1,9]])};return r.a.createElement(r.a.Fragment,null,!f&&r.a.createElement(le,{matches:u}),c?r.a.createElement(r.a.Fragment,null,f?r.a.createElement(we,{handleSubmit:v,handleCloseForm:function(){return g(!1)}}):r.a.createElement(ee,{handleClick:function(){return g(!0)}})):null)},Ce=Object(d.a)((function(e){return{heading:{marginTop:"65px",marginBottom:"65px"},button:{width:"150px",borderRadius:"40px",padding:"15px 30px",marginTop:"1em"},input:{backgroundColor:"white",borderRadius:"40px",textAlign:"center"},container:Object(u.a)({},e.breakpoints.down("xs"),{position:"fixed",bottom:"50px",right:0})}})),Pe=function(e){var a=e.setUser,t=e.user;(0,e.setHeader)("Login");var c=Object(n.useState)(""),l=Object(s.a)(c,2),o=l[0],u=l[1],m=Object(n.useState)(""),p=Object(s.a)(m,2),d=p[0],f=p[1],g=Ce();return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:null===t?function(e){var t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.prev=1,n.next=4,i.a.awrap(A({username:o,password:d}));case 4:t=n.sent,window.localStorage.setItem("loggedTabletopAppUser",JSON.stringify(t)),G(t.token),a(t),u(""),f(""),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),console.log("failed to login",n.t0);case 15:case"end":return n.stop()}}),null,null,[[1,12]])}:function(e){e.preventDefault(),window.localStorage.removeItem("loggedTabletopAppUser"),a(null)}},r.a.createElement(K.a,{container:!0,spacing:2,justify:"center",alignItems:"center",direction:"column",className:g.container},r.a.createElement(K.a,{item:!0,className:g.heading},r.a.createElement(N.a,{component:"h2",variant:"h4",color:"textPrimary",gutterBottom:!0},"Keep track of"),r.a.createElement(N.a,{component:"h2",variant:"h4",color:"textPrimary"},"Tabletop stats")),null===t?r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{item:!0},r.a.createElement(q.a,{variant:"outlined"},r.a.createElement(L.a,{id:"username",value:o,color:"secondary",placeholder:"username",className:g.input,inputProps:{style:{textAlign:"center"}},onChange:function(e){var a=e.target;return u(a.value)}}))),r.a.createElement(K.a,{item:!0},r.a.createElement(q.a,{variant:"outlined"},r.a.createElement(L.a,{id:"password",value:d,type:"password",placeholder:"password",color:"secondary",className:g.input,inputProps:{style:{textAlign:"center"}},onChange:function(e){var a=e.target;return f(a.value)}}))),r.a.createElement(K.a,{item:!0},r.a.createElement(J.a,{type:"submit",variant:"contained",color:"secondary",className:g.button},"login"))):r.a.createElement(J.a,{variant:"contained",color:"secondary",type:"submit",className:g.button},"logout"))))},Ne=function(e){(0,e.setHeader)("Players");var a=Object(n.useState)([]),t=Object(s.a)(a,2),c=t[0],l=t[1];return Object(n.useEffect)((function(){try{!function(){var e;i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(ve());case 2:e=a.sent,l(e);case 4:case"end":return a.stop()}}))}()}catch(e){console.log("failed to fetch player data")}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{disablePadding:!0},c.map((function(e){return r.a.createElement(k,{key:e.id,to:"/player-stats/".concat(e.id),primary:e.name})}))))},Be=function(e){var a=e.matches,t=e.playerId,n=function(){for(var e=a.map((function(e){return e.players})),n=0,r=0;r<e.length;r++)e[r].reduce((function(e,a){return a.points>e.points?a:e})).player.id===t&&n++;return n}(),c=+(n/a.length*100).toFixed(1);return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{container:!0,spacing:2,justify:"center",style:{marginBottom:"0.35em"}},r.a.createElement(ce,{title:"Matches total",value:a.length}),r.a.createElement(ce,{title:"Wins total",value:n}),r.a.createElement(ce,{title:"Overall win %",value:c&&"".concat(c," %")})))},Ie=function(e){var a=e.matches,t=e.playerId,n=e.gameId;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Be,{matches:a.filter((function(e){return e.game.id===n})),playerId:t}))},Fe=function(e){var a=[],t=new Set,n=!0,r=!1,c=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done);n=!0){var i=l.value;t.has(i.game.id)||(t.add(i.game.id),a.push({id:i.game.id,title:i.game.title}))}}catch(s){r=!0,c=s}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return a},Ae=function(e){var a=e.playerId,t=e.setHeader,c=Object(n.useState)([]),l=Object(s.a)(c,2),o=l[0],u=l[1],m=Object(n.useState)([]),d=Object(s.a)(m,2),f=d[0],g=d[1],v=Object(n.useState)(null),E=Object(s.a)(v,2),y=E[0],b=E[1];return Object(n.useEffect)((function(){try{!function(){var e;i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.awrap(ke(a));case 2:e=t.sent,u(e),g(Fe(e));case 5:case"end":return t.stop()}}))}(),function(){var e;i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(Ee(a));case 2:e=n.sent,t(e.name);case 4:case"end":return n.stop()}}))}()}catch(e){console.log("failed to fetch match or player data",e)}}),[a,t]),r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{component:"h2",variant:"h5",gutterBottom:!0},"Overall stats"),r.a.createElement(Be,{matches:o,playerId:a}),r.a.createElement(N.a,{component:"h2",variant:"h5",gutterBottom:!0},"Game specific stats"),r.a.createElement(p.a,{disablePadding:!0},f.map((function(e){return r.a.createElement(J.a,{key:e.id,onClick:function(){return b(e.id)}},e.title)}))),y&&r.a.createElement(Ie,{matches:o,playerId:a,gameId:y}))},Ge=Object(d.a)((function(e){return{root:{display:"flex"},drawer:Object(u.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(u.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(u.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}}})),Te=function(e){var a=Ge(),t=Object(f.a)(),c=Object(n.useState)(!1),l=Object(s.a)(c,2),o=l[0],u=l[1],d=Object(n.useState)(""),x=Object(s.a)(d,2),w=x[0],j=x[1],O=Object(n.useState)([]),S=Object(s.a)(O,2),B=S[0],I=S[1],F=Object(n.useState)(null),A=Object(s.a)(F,2),T=A[0],M=A[1];Object(n.useEffect)((function(){var e=window.localStorage.getItem("loggedTabletopAppUser");if(e){var a=JSON.parse(e);a&&(M(a),G(a.token))}try{!function(){var e;i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(H());case 2:e=a.sent,I(e);case 4:case"end":return a.stop()}}))}()}catch(t){console.log("failed to fetch game data")}}),[]);var R=function(){u(!o)},D=function(){o&&u(!1)},U=r.a.createElement("div",null,r.a.createElement("div",{className:a.toolbar}),r.a.createElement(E.a,null),r.a.createElement(p.a,{disablePadding:!0},r.a.createElement(k,{key:"Home",to:"/",primary:"Home",handlePageTransition:function(){return D()}}),r.a.createElement(k,{key:"Games",to:"/game-stats",primary:"Games",handlePageTransition:function(){return D()}}),r.a.createElement(k,{key:"Players",to:"/player-stats",primary:"Players",handlePageTransition:function(){return D()}})));return r.a.createElement("div",{className:a.root},r.a.createElement(v.a,null),r.a.createElement(g.a,{style:{boxShadow:"none"},color:"primary",position:"fixed",className:a.appBar},r.a.createElement(P.a,null,r.a.createElement(h.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:R,className:a.menuButton},r.a.createElement(C.a,null)),r.a.createElement(N.a,{color:"textPrimary",variant:"h6",noWrap:!0},w))),r.a.createElement("div",{className:a.drawer},r.a.createElement(b.a,{smUp:!0,implementation:"css"},r.a.createElement(y.a,{variant:"temporary",anchor:"rtl"===t.direction?"right":"left",open:o,onClose:R,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},U)),r.a.createElement(b.a,{xsDown:!0,implementation:"css"},r.a.createElement(y.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},U))),r.a.createElement("div",{className:a.content},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(m.a,{exact:!0,path:"/",render:function(){return r.a.createElement(Pe,{setUser:M,user:T,setHeader:j})}}),r.a.createElement(m.a,{exact:!0,path:"/game-stats",render:function(){return r.a.createElement(ne,{games:B,setGames:I,user:T,setHeader:j})}}),r.a.createElement(m.a,{exact:!0,path:"/game-stats/:game",render:function(e){var a=e.match;return r.a.createElement(Se,{gameId:a.params.game,setHeader:j,user:T})}}),r.a.createElement(m.a,{exact:!0,path:"/player-stats",render:function(){return r.a.createElement(Ne,{setHeader:j})}}),r.a.createElement(m.a,{exact:!0,path:"/player-stats/:player",render:function(e){var a=e.match;return r.a.createElement(Ae,{playerId:a.params.player,setHeader:j,user:T})}})))},He=function(){return r.a.createElement("div",null,r.a.createElement(O.a,null,r.a.createElement(Te,null)))},Me=t(195),Re=t(90),De=Object(Re.a)({palette:{primary:{main:"#d88833",contrastText:"#6E4B20"},secondary:{main:"#ffd59a",contrastText:"#6E4B20"},text:{primary:"#663E11",secondary:"#9B8D75"},background:{default:"#d88833"}},typography:{fontFamily:["Arvo","serif"].join(",")}});l.a.render(r.a.createElement(Me.a,{theme:De},r.a.createElement(He,null)),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.0c209b28.chunk.js.map