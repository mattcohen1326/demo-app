(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],{14:function(e,t,i){},31:function(e,t,i){},339:function(e){e.exports=JSON.parse('{"articles":[{"title":"First Post","date":"June 6 2022","body":"test"},{"title":"Second Post","date":"June 6 2022","body":"test"},{"title":"Second Post","date":"June 6 2022","body":"test"},{"title":"Second Post","date":"June 6 2022","body":"test"},{"title":"Second Post","date":"June 6 2022","body":"test"}]}')},340:function(e,t,i){"use strict";i.r(t);var s=i(1),a=i.n(s),c=i(13),n=i.n(c),r=(i(70),i(3)),l=i(4),o=i(6),u=i(5),d=(i.p,i(14),i(2)),p=(i(31),i.p,i.p,i.p,i.p,i.p+"static/media/logo.9e055cc2.png"),h=i(40),j=i.p+"static/media/sotw.08d35445.png",m=[j,i.p+"static/media/aotw.28efa10c.png",j,j,j],b=(i(71),i(0)),v=0,O=["rgb(12, 156, 238, .3)","rgb(61,189,194, .3)","rgb(89, 31, 206,.3)","rgb(112, 128, 144,.3)"],A=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(e){return Object(r.a)(this,i),t.call(this,e)}return Object(l.a)(i,[{key:"render",value:function(){4==v&&(v=0);var e=O[v];v++;var t={backgroundColor:e};return Object(b.jsxs)("div",{style:t,className:"Article",children:[Object(b.jsx)("h1",{children:this.props.title}),Object(b.jsx)("img",{src:this.props.img})]})}}]),i}(a.a.Component);var g=function(){var e=i(339),t=[];console.log(m);for(var s=0;s<e.articles.length;s++){var a=Object(b.jsx)(A,{title:e.articles[s].title,img:m[s]});t.push(a)}return t},f=i(9),x=i(8),y=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(e){var s;return Object(r.a)(this,i),(s=t.call(this,e)).state={isHovered:!1},s.handleHover=s.handleHover.bind(Object(f.a)(s)),s}return Object(l.a)(i,[{key:"handleHover",value:function(){this.setState((function(e){return{isHovered:!e.isHovered}}))}},{key:"render",value:function(){return Object(b.jsx)(x.b,{to:this.props.navigation,style:{color:this.state.isHovered?"green":"white"},children:Object(b.jsx)("div",{className:"nav-item",children:this.props.name})})}}]),i}(a.a.Component);var C=function(){return Object(b.jsxs)("div",{className:"nav",children:[Object(b.jsx)(y,{name:"Home",navigation:"/StartPage"}),Object(b.jsx)(y,{name:"Playlists",navigation:"/Playlists"}),Object(b.jsx)(y,{name:"Genre",navigation:"/Genre"}),Object(b.jsx)(y,{name:"Music In Media",navigation:"/SpaceHome"}),Object(b.jsx)(y,{name:"Live Music",navigation:"/Playlists"})]})},k=i(17),S=i.n(k),I=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(e){var s;return Object(r.a)(this,i),(s=t.call(this,e)).state={clicked:!1},s.handleClick=s.handleClick.bind(Object(f.a)(s)),s}return Object(l.a)(i,[{key:"handleClick",value:function(){this.setState((function(e){return{clicked:!e.clicked}}))}},{key:"render",value:function(){if(this.state.clicked)return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{id:"MenuOptions",children:[Object(b.jsx)("div",{id:"menuButtonX",onTouchStart:this.handleClick}),Object(b.jsx)("img",{src:p})]}),Object(b.jsx)(C,{})]});g();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{id:"MenuOptions",children:[Object(b.jsx)("div",{id:"menuButtonOpen",onTouchStart:this.handleClick}),Object(b.jsx)("img",{src:p})]}),this.props.content]})}}]),i}(a.a.Component);var w=function(){var e=g();return document.querySelector("body").style.overflowY="hidden",Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(S.a,{minWidth:1224,children:[Object(b.jsx)(C,{}),Object(b.jsxs)("div",{id:"HomeBody",children:[Object(b.jsx)("div",{id:"Timeline",children:Object(b.jsx)(h.a,{sourceType:"profile",screenName:"milkywavesmusic",options:{height:400}})}),Object(b.jsx)("div",{id:"Articles",children:e}),Object(b.jsx)("div",{id:"Timeline",children:Object(b.jsx)(h.a,{sourceType:"profile",screenName:"milkywavesmusic",options:{height:400}})})]})]}),Object(b.jsx)(S.a,{maxWidth:1223,children:Object(b.jsx)(I,{content:Object(b.jsx)("div",{id:"Articles",children:g()})})})]})};function Q(e){return Object(b.jsxs)("div",{id:e.id,children:[Object(b.jsx)("h1",{children:"MILKY"}),Object(b.jsx)("h1",{children:"WAVES"})]})}a.a.Component;var D=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(b.jsx)("div",{id:"start",children:Object(b.jsx)("h2",{children:"Press Any Key To Continue"})})}}]),i}(a.a.Component),E=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(e){var s;return Object(r.a)(this,i),(s=t.call(this,e)).state={isClicked:!1},s.handleClick=s.handleClick.bind(Object(f.a)(s)),s}return Object(l.a)(i,[{key:"handleClick",value:function(){console.log("ok"),this.setState((function(e){return{isClicked:!e.isClicked}}))}},{key:"render",value:function(){return this.state.isClicked?Object(b.jsx)(w,{}):Object(b.jsxs)("span",{autoFocus:!0,id:"homepage",tabIndex:-1,onTouchStart:this.handleClick,onKeyPress:this.handleClick,children:[Object(b.jsx)(Q,{id:"og"}),Object(b.jsx)(Q,{id:"title"}),Object(b.jsx)(D,{})]})}}]),i}(a.a.Component),q=i(29),P="https://embed.music.apple.com/us/playlist/a%24vp-z/pl.u-oZyllDYtovZNYd,A$VP - Z,2,5,1,\nhttps://embed.music.apple.com/us/playlist/back-to-jerzeee/pl.u-WabZZdRiypr06x,Back To Jersey,5,3,7,\nhttps://embed.music.apple.com/us/playlist/ch%C3%ADll/pl.182408adb858449198c9819f7d69073a,Chill,2,1,1,\nhttps://embed.music.apple.com/us/playlist/chill-2-0/pl.6c00369428624901bd247cf8d796bbc2,Chill 2,5,4,8,\nhttps://embed.music.apple.com/us/playlist/chill-3-0/pl.u-8aAVVZetW7PMxD,Chill 3,3,6,2,\nhttps://embed.music.apple.com/us/playlist/chill-4-0/pl.u-NpXmm2asNj1rRk,Chill 4,2,7,4,\nhttps://open.spotify.com/embed/playlist/4MajpmHAtKoB7u0Gpv8nto?utm_source=generator,Milky Waves,3,5,6,1",B=i.p+"static/media/skim.0df43e52.png",N=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(e){return Object(r.a)(this,i),t.call(this,e)}return Object(l.a)(i,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{id:"skim",children:[Object(b.jsx)("img",{id:"skim-pic",src:B}),Object(b.jsxs)("div",{className:"speech-bubble",children:[this.props.message,";"]})]})})}}]),i}(a.a.Component),W="https://open.spotify.com/embed/playlist/0D9QTncVv7AbHrz7Pnb7qi?utm_source=generator,A$VP - Z,2,5,1,\nhttps://open.spotify.com/embed/playlist/0hvk1zlf3IHK1DEj2T2vwr?utm_source=generator,Back To Jersey,5,3,7,\nhttps://open.spotify.com/embed/playlist/1IkXJrizGSRPbqUAri6LNC?utm_source=generator,Chill,2,1,1,\nhttps://open.spotify.com/embed/playlist/30f1avFY8uKz5xuvNbcecH?utm_source=generator,Chill 2,5,4,8,\nhttps://open.spotify.com/embed/playlist/1DKDT6Dl6yLPi77LMPq6AZ?utm_source=generator,Chill 3,3,6,2,\nhttps://open.spotify.com/embed/playlist/4gDkhh9AGiPWz8N2STNth3?utm_source=generator,Chill 4,2,7,4,\nhttps://open.spotify.com/embed/playlist/4MajpmHAtKoB7u0Gpv8nto?utm_source=generator,Milky Waves,3,5,6,1",M=i.p+"static/media/spotify.cd66b8f6.png",V=0,T=["rgb(12, 156, 238, .3)","rgb(61,189,194, .3)","rgb(89, 31, 206,.3)","rgb(112, 128, 144,.3)"],G="apple";function H(){var e;return V==T.length&&(V=0),e=T[V],V++,e}a.a.Component;var Y=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(e){var s;return Object(r.a)(this,i),(s=t.call(this,e)).state={mood:s.props.mood,weather:s.props.weather,activity:s.props.activity},s}return Object(l.a)(i,[{key:"render",value:function(){return Object(b.jsx)(q.a,{id:"playlist",className:"playlist",allow:"autoplay *",src:this.props.url})}}]),i}(a.a.Component),F=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(e){return Object(r.a)(this,i),t.call(this,e)}return Object(l.a)(i,[{key:"render",value:function(){var e={backgroundColor:this.props.color,fontSize:this.props.size};return Object(b.jsxs)("div",{id:this.props.id,style:e,className:"playlist-category",children:[Object(b.jsxs)("div",{className:"blurb",children:[Object(b.jsx)("h1",{style:{fontSize:this.props.size},children:this.props.name.toUpperCase()}),Object(b.jsx)("p",{children:this.props.desc})]}),Object(b.jsx)(Y,{ranks:[1,2,3,4],url:this.props.url})]})}}]),i}(a.a.Component);function Z(e){for(var t="",i="",s=[],a=!0,c=!1,n=!1,r=!1,l=!1,o="",u="",d="",p=0;p<e.length;p++)"\r"!=e.charAt(p)&&"\n"!=e.charAt(p)&&"undefined"!=e&&(","===e.charAt(p)?a?(a=!a,c=!0):c?(c=!1,n=!0):n?(n=!1,r=!0):r?(r=!1,l=!0):l&&(l=!1,s.push(Object(b.jsx)(F,{mood:parseInt(o),weather:parseInt(u),activity:parseInt(d),color:H(),size:String(3)+"vw",url:t,name:i,desc:""})),t="",i="",o="",u="",d="",l=!1,a=!0):a?t+=e.charAt(p):c?i+=e.charAt(p):n?o+=e.charAt(p):r?u+=e.charAt(p):l&&(d+=e.charAt(p)));return s}var z=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(e){return Object(r.a)(this,i),t.call(this,e)}return Object(l.a)(i,[{key:"render",value:function(){return Object(b.jsx)("img",{id:this.props.id,src:this.props.logo,onClick:this.props.click})}}]),i}(a.a.Component),K=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(e){var s;return Object(r.a)(this,i),(s=t.call(this,e)).state={mood:"angry",weather:"rainy",activity:"chilling",ptype:"apple"},s.handleChange=s.handleChange.bind(Object(f.a)(s)),s.choosePlaylist=s.choosePlaylist.bind(Object(f.a)(s)),s.convertMood=s.convertMood.bind(Object(f.a)(s)),s.convertWeather=s.convertWeather.bind(Object(f.a)(s)),s.convertActivity=s.convertActivity.bind(Object(f.a)(s)),s.distance=s.distance.bind(Object(f.a)(s)),s.handleClick=s.handleClick.bind(Object(f.a)(s)),s}return Object(l.a)(i,[{key:"handleClick",value:function(e){this.setState({chosen:!this.state.chosen}),this.setState({ptype:"apple"==G?"spot":"apple"})}},{key:"handleChange",value:function(e){"moods"===e.target.id?this.setState({mood:e.target.value}):"weathers"===e.target.id?this.setState({weather:e.target.value}):"activities"===e.target.id&&this.setState({activity:e.target.value})}},{key:"distance",value:function(e){var t=0;return console.log(this.convertActivity()+" "+this.convertMood()+" "+this.convertWeather()),t+=Math.abs(this.convertMood()-e.props.mood),t+=Math.abs(this.convertWeather()-e.props.weather),t+=Math.abs(this.convertActivity()-e.props.activity)}},{key:"convertWeather",value:function(e){var t=this.state.weather;return"rainy"==t?1:"snow"==t?3:"cold"==t?5:"spring"==t?7:"summer"==t?10:void 0}},{key:"convertActivity",value:function(e){var t=this.state.activity;return"chilling"==t?1:"study"==t?5:"workout"==t?10:void 0}},{key:"convertMood",value:function(e){var t=this.state.mood;return"angry"==t?1:"sad"==t?3:"indifferent"==t?5:"vibes"==t?7:"happy"==t?10:void 0}},{key:"choosePlaylist",value:function(e){var t=new Object,i=[];i="apple"==this.state.ptype?Z(P):Z(W);for(var s=0;s<i.length;s++)t[i[s].props.name]=this.distance(i[s]);var a=100,c="";for(var n in t)t[n]<a&&(a=t[n],c=n);console.log(c);for(s=0;s<i.length;s++)if(i[s].props.name==c)return console.log(i[s].props),s}},{key:"render",value:function(){return this.state.chosen?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{id:"playlist-choices",children:[Object(b.jsx)("h1",{children:"Playlist Picker"}),Object(b.jsxs)("div",{id:"alignment",children:[Object(b.jsxs)("div",{id:"non-arrow",children:[Object(b.jsxs)("div",{id:"mood",className:"selector",children:[Object(b.jsx)("h1",{children:"Mood"}),Object(b.jsxs)("select",{value:this.state.mood,name:"mood-choices",id:"moods",onChange:this.handleChange,children:[Object(b.jsx)("option",{value:"angry",children:"Angry"}),Object(b.jsx)("option",{value:"sad",children:"Sad"}),Object(b.jsx)("option",{value:"indifferent",children:"Indifferent"}),Object(b.jsx)("option",{value:"vibes",children:"Vibes"}),Object(b.jsx)("option",{value:"happy",children:"Happy"})]})]}),Object(b.jsxs)("div",{id:"weather",className:"selector",children:[Object(b.jsx)("h1",{children:"Weather"}),Object(b.jsxs)("select",{value:this.state.weather,onChange:this.handleChange,name:"mood-choices",id:"weathers",children:[Object(b.jsx)("option",{value:"rainy",children:"Rainy"}),Object(b.jsx)("option",{value:"snow",children:"Snow"}),Object(b.jsx)("option",{value:"cold",children:"Winter"}),Object(b.jsx)("option",{value:"spring",children:"Spring"}),Object(b.jsx)("option",{value:"summer",children:"Summer"})]})]}),Object(b.jsxs)("div",{id:"activity",className:"selector",children:[Object(b.jsx)("h1",{children:"Activity"}),Object(b.jsxs)("select",{value:this.state.activity,onChange:this.handleChange,name:"mood-choices",id:"activities",children:[Object(b.jsx)("option",{value:"chilling",children:"Chilling"}),Object(b.jsx)("option",{value:"study",children:"Study"}),Object(b.jsx)("option",{value:"workout",children:"Workout"})]})]})]}),Object(b.jsx)("div",{id:"choosing",children:Object(b.jsx)(L,{logo:p,click:this.handleClick})})]})]}),Object(b.jsx)(X,{choice:this.choosePlaylist()})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{id:"playlist-choices",children:[Object(b.jsx)("h1",{children:"Playlist Picker"}),Object(b.jsxs)("div",{id:"alignment",children:[Object(b.jsxs)("div",{id:"non-arrow",children:[Object(b.jsxs)("div",{id:"mood",className:"selector",children:[Object(b.jsx)("h1",{children:"Mood"}),Object(b.jsxs)("select",{value:this.state.mood,name:"mood-choices",id:"moods",onChange:this.handleChange,children:[Object(b.jsx)("option",{value:"angry",children:"Angry"}),Object(b.jsx)("option",{value:"sad",children:"Sad"}),Object(b.jsx)("option",{value:"indifferent",children:"Indifferent"}),Object(b.jsx)("option",{value:"vibes",children:"Vibes"}),Object(b.jsx)("option",{value:"happy",children:"Happy"})]})]}),Object(b.jsxs)("div",{id:"weather",className:"selector",children:[Object(b.jsx)("h1",{children:"Weather"}),Object(b.jsxs)("select",{value:this.state.weather,onChange:this.handleChange,name:"mood-choices",id:"weathers",children:[Object(b.jsx)("option",{value:"rainy",children:"Rainy"}),Object(b.jsx)("option",{value:"snow",children:"Snow"}),Object(b.jsx)("option",{value:"cold",children:"Winter"}),Object(b.jsx)("option",{value:"spring",children:"Spring"}),Object(b.jsx)("option",{value:"summer",children:"Summer"})]})]}),Object(b.jsxs)("div",{id:"activity",className:"selector",children:[Object(b.jsx)("h1",{children:"Activity"}),Object(b.jsxs)("select",{value:this.state.activity,onChange:this.handleChange,name:"mood-choices",id:"activities",children:[Object(b.jsx)("option",{value:"chilling",children:"Chilling"}),Object(b.jsx)("option",{value:"study",children:"Study"}),Object(b.jsx)("option",{value:"workout",children:"Workout"})]})]})]}),Object(b.jsx)("div",{id:"not-choosing",children:Object(b.jsx)(L,{logo:p,click:this.handleClick})})]})]}),Object(b.jsx)(X,{})]})}}]),i}(a.a.Component),L=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(e){return Object(r.a)(this,i),t.call(this,e)}return Object(l.a)(i,[{key:"render",value:function(){return Object(b.jsx)("img",{id:this.props.id,src:this.props.logo,onClick:this.props.click})}}]),i}(a.a.Component),X=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(e){var s;return Object(r.a)(this,i),(s=t.call(this,e)).state={type:"apple"},s.handleApple=s.handleApple.bind(Object(f.a)(s)),s.handleSpot=s.handleSpot.bind(Object(f.a)(s)),s}return Object(l.a)(i,[{key:"handleApple",value:function(){this.setState({type:"apple"}),V=0,G="apple"}},{key:"handleSpot",value:function(){console.log("fuq"),this.setState({type:"spot"}),V=0,G="spot"}},{key:"render",value:function(){if("apple"==this.state.type)var e=Z(P);else e=Z(W);var t=Object(b.jsx)("h1",{id:"pStart",children:"Browse All Playlists:"});if(e.unshift(t),null!=this.props.choice){console.log(this.props.choice);var i=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{id:"rec",children:"RECOMMENDED PLAYLIST :"}),Object(b.jsx)(F,{id:"chosen",name:e[this.props.choice+1].props.name,mood:e[this.props.choice+1].props.mood,weather:e[this.props.choice+1].props.weather,activity:e[this.props.choice+1].props.activity,color:e[this.props.choice+1].props.color,size:e[this.props.choice+1].props.size,url:e[this.props.choice+1].props.url,desc:""})]});e.unshift(i)}return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{id:"apple-spotify",children:[Object(b.jsx)(z,{logo:"data:image/png;base64,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",click:this.handleApple}),Object(b.jsx)(z,{logo:M,click:this.handleSpot})]}),e]})}}]),i}(a.a.Component);var R=function(){return document.querySelector("body").style.overflowY="scroll",Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(S.a,{minWidth:1223,children:[Object(b.jsx)(C,{}),Object(b.jsx)(K,{ptype:"apple"}),Object(b.jsx)(N,{message:" THE WHEEL TO GET A SUGGESTED PLAYLIST.  WHILE THE WHEEL IS SPINNING YOUR RECOMMENDATION WILL APPEAR BELOW"})]}),Object(b.jsx)(S.a,{maxWidth:1223,children:Object(b.jsx)(I,{content:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(K,{ptype:"apple"}),Object(b.jsx)(N,{message:" THE WHEEL TO GET A SUGGESTED PLAYLIST.  WHILE THE WHEEL IS SPINNING YOUR RECOMMENDATION WILL APPEAR BELOW"})]})})})]})},U=i.p+"static/media/album2.9be76627.jpeg",J=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(e){var s;return Object(r.a)(this,i),(s=t.call(this,e)).state={mood:s.props.mood,weather:s.props.weather,activity:s.props.activity},s}return Object(l.a)(i,[{key:"render",value:function(){return Object(b.jsx)(q.a,{id:"playlist",className:"playlist",allow:"autoplay *",src:this.props.url})}}]),i}(a.a.Component),_=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(e){return Object(r.a)(this,i),t.call(this,e)}return Object(l.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"album-of-the-week",children:[Object(b.jsxs)("div",{className:"album-description",children:[Object(b.jsx)("h1",{children:this.props.title}),Object(b.jsx)("p",{children:this.props.desc}),Object(b.jsx)(J,{url:this.props.url})]}),Object(b.jsx)("div",{className:"album",children:Object(b.jsx)("img",{src:this.props.album})})]})}}]),i}(a.a.Component);var $=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(C,{}),Object(b.jsx)(_,{desc:"Thugs Back at it again with another masterpiece.  This one is a vibe and features a few new looks for Thug as well as a return to a few classic sounds.  My personal favorites are Stressed, Stupid, and Peepin Out The Window",title:"Punk",album:U,url:"https://embed.music.apple.com/us/album/punk/1590479961"})]})},ee=(i.p,i.p+"static/media/cp_logo.875b38d6.png"),te=i.p+"static/media/cp_music.0ae19d16.png",ie=i.p+"static/media/cp_radar.31b80b67.png",se=i.p+"static/media/drums.fe940d4f.png",ae=i.p+"static/media/cp_levels.47d6fdac.png",ce=i.p+"static/media/right.25a0c0ed.png";var ne=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{id:"panel"}),Object(b.jsxs)("div",{id:"controls",children:[Object(b.jsx)("img",{id:"cp_logo",src:ee}),Object(b.jsx)(x.b,{to:"/Playlists",children:Object(b.jsx)("img",{id:"cp_music",src:te})}),Object(b.jsx)("img",{id:"cd_radar",src:ie}),Object(b.jsx)(x.b,{to:"/Playlists",children:Object(b.jsx)("img",{id:"cd_drums",src:se})}),Object(b.jsx)("img",{id:"cd_levels",src:ae}),Object(b.jsx)("img",{id:"cd_right",src:ce})]})]})};var re=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{id:"spacehome"}),Object(b.jsx)(x.b,{id:"spacelink",to:"/SpaceWarp",children:Object(b.jsx)("div",{className:"travel"})}),Object(b.jsx)(ne,{})]})},le=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(e){return Object(r.a)(this,i),t.call(this,e)}return Object(l.a)(i,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{id:"hologram",children:[Object(b.jsx)("div",{class:"card"}),Object(b.jsx)("div",{class:"holo"})]})})}}]),i}(a.a.Component),oe=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(e){return Object(r.a)(this,i),t.call(this,e)}return Object(l.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{id:"space-content",children:[Object(b.jsx)("h1",{children:this.props.title}),Object(b.jsx)("p",{children:this.props.message})]})}}]),i}(a.a.Component),ue=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(e){return Object(r.a)(this,i),t.call(this,e)}return Object(l.a)(i,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{class:"attempt",children:Object(b.jsxs)("div",{class:"scene",children:[Object(b.jsxs)("div",{class:"wrap",children:[Object(b.jsx)("div",{class:"wall wall-right"}),Object(b.jsx)("div",{class:"wall wall-left"}),Object(b.jsx)("div",{class:"wall wall-top"}),Object(b.jsx)("div",{class:"wall wall-bottom"}),Object(b.jsx)("div",{class:"wall wall-back"})]}),Object(b.jsxs)("div",{class:"wrap",children:[Object(b.jsx)("div",{class:"wall wall-right"}),Object(b.jsx)("div",{class:"wall wall-left"}),Object(b.jsx)("div",{class:"wall wall-top"}),Object(b.jsx)("div",{class:"wall wall-bottom"}),Object(b.jsx)("div",{class:"wall wall-back"})]})]})}),Object(b.jsx)(le,{}),Object(b.jsx)(oe,{title:"test",message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere sed nisi vel accumsan. In nec metus at neque aliquet porttitor finibus ultrices turpis. Nunc posuere augue risus, scelerisque euismod ante scelerisque quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse laoreet faucibus cursus. Integer eget odio vitae erat semper accumsan at ut elit. Suspendisse consequat tortor nibh, non pulvinar dui pharetra ac. Sed lacinia ultrices augue, ut semper dui consectetur sit amet.Aenean et tellus ut diam fringilla laoreet. Praesent eleifend hendrerit vestibulum. Morbi quis dolor nisl. Nunc eleifend auctor est, eget laoreet nunc eleifend in. Vivamus egestas mauris et cursus vehicula. Cras pharetra mauris et auctor vulputate. Nunc interdum malesuada magna in aliquam. Sed tempor leo odio, et convallis nibh feugiat a. Nunc dapibus ipsum id viverra ultrices. Ut sit amet sapien placerat, rutrum mauris ac, accumsan massa. Vestibulum tortor mi, pellentesque tempus eros sit amet, tempus aliquam nulla. Quisque lorem arcu, interdum ut cursus id, tincidunt a sapien. Nulla placerat hendrerit accumsan. Phasellus placerat semper bibendum.uspendisse id tincidunt urna. Fusce orci ligula, sagittis nec tellus vel, luctus dictum sapien. Donec interdum iaculis nulla, ut ullamcorper purus pulvinar eget. Proin a commodo mauris. Integer vestibulum eros in neque semper, at rutrum dolor sagittis. Aliquam ac massa auctor, egestas leo at, posuere odio. Suspendisse feugiat lorem ac diam malesuada laoreet. Cras id felis fringilla, efficitur dolor quis, posuere quam. Vivamus nec porta dolor. Morbi vel nibh sollicitudin, sollicitudin lorem vitae, egestas mauris. Donec sed varius augue. In vitae tortor ut sapien luctus pharetra ac at quamMaecenas eget semper enim, in semper est. Sed viverra purus eu dui posuere malesuada. In sem erat, sodales sit amet viverra non, mollis nec sem. Sed pulvinar vestibulum nulla, vitae malesuada lectus semper luctus. Curabitur vel eleifend ipsum, vitae rutrum erat. Praesent mollis orci id odio rhoncus tempus. Sed vitae ipsum facilisis, pharetra erat eget, fermentum ipsum. Sed pulvinar pulvinar auctor. In sit amet sollicitudin sem. Sed convallis libero hendrerit ex convallis, eget suscipit orci consectetur. Donec luctus molestie mauris, ut convallis lacus efficitur et.Cras accumsan vel elit at vehicula. Pellentesque egestas tellus non velit cursus ultricies. Maecenas pharetra sagittis mauris, non rhoncus magna vestibulum porta. Fusce sit amet congue justo. Mauris mollis fermentum vehicula. Donec imperdiet a eros ut consectetur. Etiam condimentum, purus vel aliquam tempus, eros dolor gravida velit, id commodo augue neque vitae arcu. Morbi eget felis at erat maximus blandit malesuada id risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere sed nisi vel accumsan. In nec metus at neque aliquet porttitor finibus ultrices turpis. Nunc posuere augue risus, scelerisque euismod ante scelerisque quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse laoreet faucibus cursus. Integer eget odio vitae erat semper accumsan at ut elit. Suspendisse consequat tortor nibh, non pulvinar dui pharetra ac. Sed lacinia ultrices augue, ut semper dui consectetur sit amet.Aenean et tellus ut diam fringilla laoreet. Praesent eleifend hendrerit vestibulum. Morbi quis dolor nisl. Nunc eleifend auctor est, eget laoreet nunc eleifend in. Vivamus egestas mauris et cursus vehicula. Cras pharetra mauris et auctor vulputate. Nunc interdum malesuada magna in aliquam. Sed tempor leo odio, et convallis nibh feugiat a. Nunc dapibus ipsum id viverra ultrices. Ut sit amet sapien placerat, rutrum mauris ac, accumsan massa. Vestibulum tortor mi, pellentesque tempus eros sit amet, tempus aliquam nulla. Quisque lorem arcu, interdum ut cursus id, tincidunt a sapien. Nulla placerat hendrerit accumsan. Phasellus placerat semper bibendum.uspendisse id tincidunt urna. Fusce orci ligula, sagittis nec tellus vel, luctus dictum sapien. Donec interdum iaculis nulla, ut ullamcorper purus pulvinar eget. Proin a commodo mauris. Integer vestibulum eros in neque semper, at rutrum dolor sagittis. Aliquam ac massa auctor, egestas leo at, posuere odio. Suspendisse feugiat lorem ac diam malesuada laoreet. Cras id felis fringilla, efficitur dolor quis, posuere quam. Vivamus nec porta dolor. Morbi vel nibh sollicitudin, sollicitudin lorem vitae, egestas mauris. Donec sed varius augue. In vitae tortor ut sapien luctus pharetra ac at quamMaecenas eget semper enim, in semper est. Sed viverra purus eu dui posuere malesuada. In sem erat, sodales sit amet viverra non, mollis nec sem. Sed pulvinar vestibulum nulla, vitae malesuada lectus semper luctus. Curabitur vel eleifend ipsum, vitae rutrum erat. Praesent mollis orci id odio rhoncus tempus. Sed vitae ipsum facilisis, pharetra erat eget, fermentum ipsum. Sed pulvinar pulvinar auctor. In sit amet sollicitudin sem. Sed convallis libero hendrerit ex convallis, eget suscipit orci consectetur. Donec luctus molestie mauris, ut convallis lacus efficitur et.Cras accumsan vel elit at vehicula. Pellentesque egestas tellus non velit cursus ultricies. Maecenas pharetra sagittis mauris, non rhoncus magna vestibulum porta. Fusce sit amet congue justo. Mauris mollis fermentum vehicula. Donec imperdiet a eros ut consectetur. Etiam condimentum, purus vel aliquam tempus, eros dolor gravida velit, id commodo augue neque vitae arcu. Morbi eget felis at erat maximus blandit malesuada id risus."}),Object(b.jsx)(ne,{})]})}}]),i}(a.a.Component),de=function(){return Object(b.jsxs)(d.c,{children:[" ",Object(b.jsx)(d.a,{exact:!0,path:"/Playlists",element:Object(b.jsx)(R,{}),children:" "}),Object(b.jsx)(d.a,{exact:!0,path:"/Nav",element:Object(b.jsx)(C,{}),children:" "}),Object(b.jsx)(d.a,{exact:!0,path:"/StartPage",element:Object(b.jsx)(w,{})}),Object(b.jsx)(d.a,{exact:!0,path:"/",element:Object(b.jsx)(E,{})}),Object(b.jsx)(d.a,{exact:!0,path:"/Home",element:Object(b.jsx)(E,{})}),Object(b.jsx)(d.a,{exact:!0,path:"/AOTW",element:Object(b.jsx)($,{})}),Object(b.jsx)(d.a,{exact:!0,path:"/SpaceWarp",element:Object(b.jsx)(ue,{})}),Object(b.jsx)(d.a,{exact:!0,path:"/SpaceHome",element:Object(b.jsx)(re,{})})]})},pe=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(e){var s;return Object(r.a)(this,i),(s=t.call(this,e)).state={starting:!1},s}return Object(l.a)(i,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(de,{})})}}]),i}(a.a.Component),he=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,341)).then((function(t){var i=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,n=t.getTTFB;i(e),s(e),a(e),c(e),n(e)}))};n.a.render(Object(b.jsxs)(x.a,{children:[Object(b.jsx)(pe,{})," "]}),document.getElementById("root")),he()},70:function(e,t,i){}},[[340,1,2]]]);
//# sourceMappingURL=main.8bd83a1d.chunk.js.map