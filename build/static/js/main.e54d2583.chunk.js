(this["webpackJsonptabletop-stats"]=this["webpackJsonptabletop-stats"]||[]).push([[0],{139:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),l=t.n(c),i=t(18),o=t(46),m=t(8),u=t(31),s=t(187),d=t(82),p=t(11),f=t(197),E=t(196),b=t(195),g=t(203),h=t(202),y=t(192),v=t(140),j=t(181),O=t(182),x=t(45),w=function(e){var a=e.icon,t=e.primary,n=e.to;return r.a.createElement("li",null,r.a.createElement(v.a,{button:!0,component:x.b,to:n},a?r.a.createElement(j.a,null,a):null,r.a.createElement(O.a,{primary:t})))},k=t(84),S=t.n(k),C=t(198),G=t(53),N=t(24),P=t.n(N),B=function(){return P.a.get("/api/games")},F=function(e){return P.a.post("/api/games",e)},A=function(e){return P.a.get("".concat("/api/games","/").concat(e))},D=t(80),H=t.n(D),M=t(12),I=t(204),W=t(81),R=t.n(W),T=t(183),q=t(141),J=Object(q.a)((function(e){return{root:{position:"fixed",borderRadius:"0.5em",bottom:e.spacing(2),right:e.spacing(2)}}})),z=function(e){var a=J();return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{onClick:e.handleClick,className:a.root,color:"secondary","aria-label":"add"},r.a.createElement(R.a,null)))},L=function(e){var a=e.value,t=e.handleGameChange,n=e.handleAddGame;return r.a.createElement("form",{onSubmit:n},r.a.createElement(I.a,{id:"new-game",label:"Add game",variant:"outlined",color:"secondary",autoFocus:!0,value:a,onChange:t}))},U=function(e){var a=e.games,t=e.setGames,c=Object(n.useState)(null),l=Object(i.a)(c,2),o=l[0],m=l[1],u=Object(n.useState)(!1),d=Object(i.a)(u,2),p=d[0],f=d[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,a.map((function(e){return r.a.createElement(w,{key:e.id,primary:e.title,to:"/game-stats/".concat(e.id)})}))),p&&r.a.createElement(L,{value:o,handleGameChange:function(e){m(e.target.value)},handleAddGame:function(e){return H.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:e.preventDefault(),F({title:o}).then((function(e){t([].concat(Object(M.a)(a),[e.data])),f(!1),m("")})).catch((function(e){console.log("failed to create game")}));case 3:case"end":return n.stop()}}))}}),r.a.createElement(z,{handleClick:function(){f(!p),m("")}}))},V=(t(125),t(188)),K=t(189),Q=t(190),X=Object(d.a)({item:{width:"11.5em"},cardContent:{padding:"0.4em 0.8em 0 1em","&:last-child":{paddingBottom:"0.5em"}},card:{borderRadius:"10px"},title:{fontSize:"1.8em",lineHeight:"1.25em",paddingBottom:"0.3em"}}),Y=function(e){var a=X(),t=e.title,n=e.value;return t&&n?r.a.createElement(V.a,{item:!0,className:a.item},r.a.createElement(K.a,{className:a.card},r.a.createElement(Q.a,{className:a.cardContent},r.a.createElement(G.a,{className:a.title,color:"textSecondary"},t),r.a.createElement(G.a,{align:"right",variant:"h5",component:"h2"},n),e.children))):null},Z=function(e){var a=e.matches,t=a.map((function(e){return e.players})).flat(),n=t.map((function(e){return e.points})),c=+(n.reduce((function(e,a){return e+a}),0)/n.length).toFixed(2),l=function(e){if(e){for(var a=e.map((function(e){return e.players})),t=new Map,n=0;n<a.length;n++){var r=a[n].reduce((function(e,a){return a.points>e.points?a:e})),c=t.get(r.player.name);c?t.set(r.player.name,c+1):t.set(r.player.name,1)}var l=Object(M.a)(t.entries()).reduce((function(e,a){return a[1]>e[1]?a:e}),[0,0]);return{name:l[0],wins:l[1]}}}(a),i=t.length>0?t.reduce((function(e,a){return a.points>e.points?a:e})):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(Y,{title:"Games played",value:a.length}),r.a.createElement(Y,{title:"Average points",value:c}),i&&r.a.createElement(Y,{title:"Most points",value:i.points},r.a.createElement(G.a,{color:"textSecondary",variant:"body2",component:"p",align:"right"},i.player.name)),l&&r.a.createElement(Y,{title:"Most wins",value:l.wins},r.a.createElement(G.a,{color:"textSecondary",variant:"body2",component:"p",align:"right"},l.name))))},$=t(193),_=t(87),ee=t(194),ae=t(186),te=t(206),ne=t(200),re=t(191),ce=t(208),le=function(e){var a=e.selectedPlayers,t=e.player,n=e.players,c=e.removePlayer,l=e.updatePlayer,i=a.map((function(e){return e.name}));return r.a.createElement(V.a,{container:!0,spacing:1,justify:"center"},r.a.createElement(V.a,{item:!0,md:6,xs:5},r.a.createElement(ae.a,{fullWidth:!0,variant:"outlined",required:!0},r.a.createElement(te.a,{id:"player-label"},"Player"),r.a.createElement(ne.a,{labelId:"player-label",id:"player",value:t.name,onChange:function(e){return function(e){var a=Object(o.a)({},t,{name:e});l(a)}(e.target.value)}},n.map((function(e){return r.a.createElement(re.a,{key:e.name,disabled:i.includes(e.name),value:e.name},e.name)}))))),r.a.createElement(V.a,{item:!0,md:5,xs:5},r.a.createElement(I.a,{fullWidth:!0,required:!0,id:"points",label:"Points",type:"number",defaultValue:t.points,onChange:function(e){return function(e){var a=Object(o.a)({},t,{points:Number(e)});l(a)}(e.target.value)},variant:"outlined"})),r.a.createElement(V.a,{item:!0,xs:1},r.a.createElement(y.a,{"aira-label":"delete",onClick:function(){return c(t)}},r.a.createElement(ce.a,null))))},ie=function(){return P.a.get("/api/players")},oe=t(83),me=t.n(oe),ue=function(e){var a=e.handleSubmit,t=Object(n.useState)([]),c=Object(i.a)(t,2),l=c[0],o=c[1],m=Object(n.useState)([]),u=Object(i.a)(m,2),s=u[0],d=u[1],p={marginTop:s.length>0?"2em":null};Object(n.useEffect)((function(){ie().then((function(e){o(e.data)})).catch((function(e){console.log("failed to fetch player data",e)}))}),[]);var f=function(e){var a=s.map((function(a){return a.id!==e.id?a:e}));d(a)},E=function(e){var a=s.filter((function(a){return a.id!==e.id}));d(a)};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=s.filter((function(e){return e.name}));if(!(t.length<1)){var n=t.map((function(e){var a=l.find((function(a){return a.name===e.name}));return a?{player:a.id,points:e.points}:null}));a(n)}}},r.a.createElement($.a,{maxWidth:"sm",disableGutters:!0},r.a.createElement(_.a,{style:{padding:"2em"}},s.map((function(e){return r.a.createElement(le,{key:e.id,player:e,players:l,selectedPlayers:s,removePlayer:E,updatePlayer:f})})),r.a.createElement($.a,{disableGutters:!0},r.a.createElement(V.a,{container:!0,justify:"space-between",style:p},r.a.createElement(V.a,{item:!0},r.a.createElement(ee.a,{variant:"outlined",color:"primary",onClick:function(){var e={id:me()(),name:"",points:null};d([].concat(Object(M.a)(s),[e]))}},"Add player")),r.a.createElement(V.a,{item:!0},r.a.createElement(ee.a,{variant:"contained",color:"primary",type:"submit"},"Submit"))))))))},se=function(e){return P.a.post("/api/matches",e)},de=function(e){return P.a.get("".concat("/api/matches","/game/").concat(e))},pe=function(e){var a=e.gameId,t=e.setHeader,c=Object(n.useState)([]),l=Object(i.a)(c,2),o=l[0],m=l[1],u=Object(n.useState)(!1),s=Object(i.a)(u,2),d=s[0],p=s[1];Object(n.useEffect)((function(){de(a).then((function(e){m(e.data)})).catch((function(e){console.log("failed to get match data",e)})),A(a).then((function(e){t(e.data.title)}))}),[a,t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{handleClick:function(){return p(!d)}}),d?r.a.createElement(ue,{handleSubmit:function(e){se({game:a,players:e}).then((function(e){m([].concat(Object(M.a)(o),[e.data])),p(!1)})).catch((function(e){console.log("failed to create a new match",e)}))}}):r.a.createElement(Z,{matches:o}))},fe=Object(d.a)((function(e){return{root:{display:"flex"},drawer:Object(m.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),appBar:Object(m.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)"),marginLeft:240}),menuButton:Object(m.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,toolbarDrawer:Object(o.a)({},e.mixins.toolbar),drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)}}})),Ee=function(e){var a=fe(),t=Object(p.a)(),c=Object(n.useState)(!1),l=Object(i.a)(c,2),o=l[0],m=l[1],d=Object(n.useState)(""),v=Object(i.a)(d,2),j=v[0],O=v[1],x=Object(n.useState)([]),k=Object(i.a)(x,2),N=k[0],P=k[1];Object(n.useEffect)((function(){B().then((function(e){P(e.data)})).catch((function(e){console.log("failed to get game data")}))}),[]);var F=function(){m(!o)},A=r.a.createElement("div",null,r.a.createElement("div",{className:a.toolbar}),r.a.createElement(b.a,null),r.a.createElement(s.a,null,r.a.createElement(w,{key:"Home",to:"/",primary:"Home"}),r.a.createElement(w,{key:"Games",to:"/game-stats",primary:"Games"})));return r.a.createElement("div",{className:a.root},r.a.createElement(E.a,null),r.a.createElement(f.a,{style:{boxShadow:"none"},color:"primary",position:"fixed",className:a.appBar},r.a.createElement(C.a,null,r.a.createElement(y.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:F,className:a.menuButton},r.a.createElement(S.a,null)),r.a.createElement(G.a,{color:"textPrimary",variant:"h6",noWrap:!0},j))),r.a.createElement("div",{className:a.drawer,"aria-label":"games stats"},r.a.createElement(h.a,{smUp:!0,implementation:"css"},r.a.createElement(g.a,{variant:"temporary",anchor:"rtl"===t.direction?"right":"left",open:o,onClose:F,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},A)),r.a.createElement(h.a,{xsDown:!0,implementation:"css"},r.a.createElement(g.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},A))),r.a.createElement("div",{className:a.content},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(u.a,{exact:!0,path:"/",render:function(){return O("")}}),r.a.createElement(u.a,{exact:!0,path:"/game-stats",render:function(){return O("Games"),r.a.createElement(U,{games:N,setGames:P})}}),r.a.createElement(u.a,{exact:!0,path:"/game-stats/:game",render:function(e){var a=e.match;return r.a.createElement(pe,{gameId:a.params.game,setHeader:O})}})))},be=function(){return r.a.createElement("div",null,r.a.createElement(x.a,null,r.a.createElement(Ee,null)))},ge=t(199),he=t(85),ye=Object(he.a)({palette:{primary:{main:"#FF9500",contrastText:"#6E4B20"},secondary:{main:"#ffd59a",contrastText:"#6E4B20"},text:{primary:"#6E4B20",secondary:"#9B8D75"},background:{default:"#FF9500"}},typography:{fontFamily:["Arvo","serif"].join(",")}});l.a.render(r.a.createElement(ge.a,{theme:ye},r.a.createElement(be,null)),document.getElementById("root"))},95:function(e,a,t){e.exports=t(139)}},[[95,1,2]]]);
//# sourceMappingURL=main.e54d2583.chunk.js.map