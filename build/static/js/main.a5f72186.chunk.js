(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){e.exports=a.p+"static/media/standard-wallpaper.e65a6248.jpg"},261:function(e,t,a){"use strict";(function(e){a.d(t,"a",function(){return C});var n=a(19),s=a(20),r=a(23),c=a(21),i=a(22),o=a(27),l=a(0),u=a.n(l),m=a(11),d=a(117),f=a(581),h=a(562),p=a(582),g=a(70),E=a(583),v=a(584),b=a(564),O=a(108),j=a.n(O),S=a(262),w=a.n(S),y=a(263),N=a.n(y),k=a(264),x=a.n(k),F=a(66),I=a(67),C=function(t){function a(t){var s;return Object(n.a)(this,a),(s=Object(r.a)(this,Object(c.a)(a).call(this,t))).isLocal=function(){return s.props.match.params.username===Object(m.loadUserData)().username},s.captureFile=function(t){t.preventDefault();var a=t.target.files[0],n=new window.FileReader;n.readAsArrayBuffer(a),n.onloadend=function(){s.setState({newImage:"data:image/jpeg;base64,".concat(e(n.result).toString("base64"))})}},s.captureFileBackground=function(t){t.preventDefault();var a=t.target.files[0],n=new window.FileReader;n.readAsArrayBuffer(a),n.onloadend=function(){s.setState({settings:{backgroundImage:"data:image/jpeg;base64,".concat(e(n.result).toString("base64"))}})}},s.defaultBackground=function(e){e.preventDefault(),s.setState({settings:{backgroundImage:!1}})},s.deleteImage=function(){s.setState({newImage:!1})},s.logUserInfo=function(){console.log(Object(m.loadUserData)())},s.toggleSettings=function(){s.setState({changeInfo:!s.state.changeInfo})},s.saveSettings=function(){var e=s.state.settings;Object(m.putFile)("settings.json",JSON.stringify(e),{encrypt:!1}).then(function(){s.setState({changeInfo:!1})})},s.displayFriends=function(){s.setState({displayFriends:!s.state.displayFriends})},s.state={checked:!1,newStatus:"",statuses:[],statusIndex:0,isLoading:!1,changeInfo:!1,newImage:!1,settings:{backgroundImage:!1},displayFriends:!1},s.handleNewStatusChange=s.handleNewStatusChange.bind(Object(o.a)(Object(o.a)(s))),s.handleNewStatusSubmit=s.handleNewStatusSubmit.bind(Object(o.a)(Object(o.a)(s))),s.saveNewStatus=s.saveNewStatus.bind(Object(o.a)(Object(o.a)(s))),s.fetchData=s.fetchData.bind(Object(o.a)(Object(o.a)(s))),s}return Object(i.a)(a,t),Object(s.a)(a,[{key:"fetchData",value:function(){var e=this;this.setState({isLoading:!0});var t={decrypt:!1};Object(m.getFile)("statuses.json",t).then(function(t){var a=JSON.parse(t||"[]");e.setState({statusIndex:a.length,statuses:a})}),Object(m.getFile)("settings.json",t).then(function(t){var a=JSON.parse(t||!1);e.setState({settings:a||e.state.settings})}).finally(function(){e.setState({isLoading:!1})})}},{key:"saveNewStatus",value:function(){var e=this,t=this.state.statuses,a=this.state.statusIndex,n=this.state.newStatus.trim();if(0===n.length)return!1;var s={id:a++,text:n,created_at:Date.now(),image:this.state.newImage};t.unshift(s);Object(m.putFile)("statuses.json",JSON.stringify(t),{encrypt:!1}).then(function(){e.setState({statuses:t})})}},{key:"handleNewStatusChange",value:function(e){this.setState({newStatus:e.target.value})}},{key:"handleNewStatusSubmit",value:function(e){this.saveNewStatus(),this.setState({newStatus:"",newImage:!1})}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this,t=this.props,a=t.person,n=t.username,s={backgroundImage:'url("'.concat(this.state.settings.backgroundImage?this.state.settings.backgroundImage:j.a,'"')},r=this.props.friends.length>0?u.a.createElement("div",{className:"profile-posts"},u.a.createElement("div",{className:"my-post"},u.a.createElement("h1",null,"Friends"),u.a.createElement(d.a,{variant:"flush"},this.props.friends.map(function(t){return u.a.createElement("div",{className:"my-friend",key:t},u.a.createElement(f.a,null,u.a.createElement(h.a,{xs:12},u.a.createElement(d.a.Item,{onClick:function(){e.props.searchFor(t)}},t))))})))):u.a.createElement("div",{className:"profile-posts"},u.a.createElement("div",{className:"my-post"},u.a.createElement("h1",null,"Friends"),u.a.createElement(d.a,{variant:"flush"},u.a.createElement(f.a,null,u.a.createElement(h.a,{xs:12},u.a.createElement(d.a.Item,null,"You don't have any friends yet."))))));return u.a.createElement("div",null,!Object(m.isSignInPending)()&&a&&u.a.createElement("div",{className:"container-myprofile"},u.a.createElement("div",{style:s,className:"container-desc-prof"},u.a.createElement(p.a,null,u.a.createElement(f.a,{className:"myprofile-bio"},u.a.createElement(h.a,{xs:12,md:3,className:"bio-left"},u.a.createElement("img",{src:a.avatarUrl()?a.avatarUrl():"https://s3.amazonaws.com/onename/avatar-placeholder.png",className:"img-rounded avatar",alt:"",id:"avatar-image"})),u.a.createElement(h.a,{xs:12,md:9,className:"bio-right"},u.a.createElement("h1",null,u.a.createElement("span",{id:"heading-name"},a.name()?a.name():"Nameless Person"))))),u.a.createElement("div",{className:"myprofile-options"},u.a.createElement(f.a,{className:"my-options"},u.a.createElement(h.a,{xs:3}),u.a.createElement(h.a,{xs:1},u.a.createElement("img",{src:w.a,onClick:this.toggleSettings,alt:"",className:"bio-icons"})),u.a.createElement(h.a,{xs:8},u.a.createElement("img",{src:x.a,onClick:this.displayFriends,alt:"",className:"bio-icons"}))),u.a.createElement(f.a,null,u.a.createElement(h.a,{md:3}),u.a.createElement(h.a,{xs:12,md:8},u.a.createElement("hr",null)," "),u.a.createElement(h.a,{md:1})),u.a.createElement(f.a,null,u.a.createElement(h.a,{xs:12},u.a.createElement("p",{className:"text-secondary"},a.description()?a.description():"You have no bio."))))),this.state.displayFriends&&r,!this.state.displayFriends&&u.a.createElement("div",{className:"profile-posts"},u.a.createElement(f.a,null,u.a.createElement(h.a,{xs:1,md:2}),u.a.createElement(h.a,{xs:10,md:8},this.isLocal()&&u.a.createElement("div",null,this.state.changeInfo&&u.a.createElement("div",{className:"new-status settings"},u.a.createElement(f.a,null,u.a.createElement(h.a,{md:12},u.a.createElement(g.a,null,u.a.createElement(g.a.Group,{as:f.a,controlId:"formPlaintextEmail"},u.a.createElement(g.a.Label,{column:!0,sm:"3"},"Display name"),u.a.createElement(h.a,{sm:"9"},u.a.createElement(g.a.Control,{plaintext:!0,readOnly:!0,defaultValue:a.name()?a.name():"Nameless Person"}))),u.a.createElement(g.a.Group,{as:f.a,controlId:"formPlaintextPassword"},u.a.createElement(g.a.Label,{column:!0,sm:"3"},"Background image"),u.a.createElement(h.a,{sm:"9"},u.a.createElement("label",{class:"btn btn-outline-success"},"Upload ",u.a.createElement("input",{type:"file",onChange:this.captureFileBackground,hidden:!0})),"     ",u.a.createElement("label",{class:"btn btn-outline-danger",onClick:this.defaultBackground},"Default"))),u.a.createElement("hr",null),u.a.createElement(E.a,{variant:"success",onClick:this.saveSettings},"Save"))))),u.a.createElement("div",{className:"new-status"},u.a.createElement(f.a,null,u.a.createElement(h.a,{md:12},this.state.newImage&&u.a.createElement("div",{className:"post-pic-container"},u.a.createElement(E.a,{onClick:this.deleteImage,variant:"outline-danger",className:"delete-img"},"X"),u.a.createElement("img",{alt:"",className:"post-pic",als:"",src:this.state.newImage})),u.a.createElement(v.a,null,u.a.createElement(b.a,{as:"textarea",className:"input-status",value:this.state.newStatus,onChange:function(t){return e.handleNewStatusChange(t)},placeholder:"What's on your mind?"})))),u.a.createElement(f.a,null,u.a.createElement(h.a,{md:6,className:"input-btn-wrapper"},u.a.createElement("label",{className:"btn btn-outline-secondary"},u.a.createElement("img",{alt:"",src:N.a})," ",u.a.createElement("input",{type:"file",onChange:this.captureFile,hidden:!0}))),u.a.createElement(h.a,{md:4,className:"text-right input-btn-wrapper"},u.a.createElement(E.a,{variant:"outline-success",className:"",onClick:function(t){return e.handleNewStatusSubmit(t)}},"POST")))))),u.a.createElement(h.a,{xs:1,md:2})),u.a.createElement(f.a,null,u.a.createElement(h.a,{xs:1,md:2}),u.a.createElement(h.a,{xs:10,md:8},this.state.isLoading&&u.a.createElement(I.a,null),this.state.statuses.map(function(e){return u.a.createElement(F.a,{person:a,username:n,status:e})})),u.a.createElement(h.a,{xs:1,md:2})))))}}]),a}(l.Component)}).call(this,a(4).Buffer)},262:function(e,t,a){e.exports=a.p+"static/media/settings.674d9d35.svg"},263:function(e,t,a){e.exports=a.p+"static/media/camera.8b7b6457.svg"},264:function(e,t,a){e.exports=a.p+"static/media/users.937fec69.svg"},269:function(e,t,a){e.exports=a(580)},274:function(e,t,a){},287:function(e,t){},288:function(e,t){},308:function(e,t){},310:function(e,t){},514:function(e,t){},577:function(e,t,a){},580:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(164),c=a.n(r),i=(a(274),a(50)),o=a.n(i),l=a(86),u=a(19),m=a(20),d=a(23),f=a(21),h=a(22),p=a(261),g=a(583),E=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.handleSignIn;return s.a.createElement("div",{className:"panel-landing"},s.a.createElement("h1",null,"Blockspace"),s.a.createElement("h2",null,"You own Your data"),s.a.createElement("div",{className:"square-container"},s.a.createElement("div",{className:"landing-square-text"},s.a.createElement(g.a,{style:{color:"rgb(8, 5, 5)",backgroundColor:"#f3f3f3ff"},onClick:e.bind(this)},"Sign In with Blockstack")),s.a.createElement("div",{className:"landing-square"})))}}]),t}(n.Component),v=a(586),b=a(587),O=a(584),j=a(564),S=a(11),w=a(585),y=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(f.a)(t).call(this))).handleSignOut=function(e){e.preventDefault(),Object(S.signUserOut)(window.location.origin)},e.handleSearch=function(e){},e.handleKeyPress=function(t){t.preventDefault(),e.props.searchFor(e.state.searchUser)},e.handleChange=function(t){t.preventDefault(),e.setState({searchUser:t.target.value})},e.state={searchUser:void 0},e}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.person,n=t.username;return s.a.createElement("div",null,s.a.createElement(v.a,{bg:"light",collapseOnSelect:!0,fixed:"top",expand:"sm"},s.a.createElement(v.a.Brand,null,s.a.createElement(w.a,{className:"nav-home-link",to:"/feed"},"My Block Space")),s.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),s.a.createElement(v.a.Collapse,{id:"basic-navbar-nav"},s.a.createElement(b.a,{className:"mr-auto"},s.a.createElement(O.a,{size:"sm"},s.a.createElement(j.a,{type:"text",placeholder:"Search for friends",onChange:function(t){return e.handleChange(t)}}),s.a.createElement(O.a.Append,null,s.a.createElement(g.a,{variant:"outline-secondary",onClick:function(t){return e.handleKeyPress(t)}},"Search")))),s.a.createElement(b.a,{className:'justify-content-end"'},s.a.createElement(b.a.Link,{onClick:this.handleSignOut},"Sign-Out"),s.a.createElement(w.a,{to:"/".concat(n||null)},s.a.createElement("img",{src:a.avatarUrl()?a.avatarUrl():"https://s3.amazonaws.com/onename/avatar-placeholder.png",alt:"",className:"nav-img"}))))))}}]),t}(n.Component),N=a(27),k=a(582),x=a(581),F=a(562),I=a(108),C=a.n(I),D=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"no-res-container"},s.a.createElement("p",null,"Oopsie... ",s.a.createElement("br",null)," We can't find the blockstack id ",s.a.createElement("big",null,'"',this.props.username,'"'),"."))}}]),t}(n.Component),P=a(66),L=a(67),U=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).isLocal=function(){return a.props.match.params.username===Object(S.loadUserData)().username},a.addFriend=function(e){e.preventDefault();var t=a.props.friends;t.unshift(a.state.username);Object(S.putFile)("friends.json",JSON.stringify(t),{encrypt:!1}).then(function(e){console.log("res ,",e),a.setState({following:!0})}),a.setState({following:!0})},a.unFriend=function(e){e.preventDefault();var t=a.props.friends,n=a.state.username;t=t.filter(function(e){return e!==n}),a.props.updateFriends(t);Object(S.putFile)("friends.json",JSON.stringify(t),{encrypt:!1}).then(function(e){console.log("res ,",e),a.setState({following:!1})})},a.logUserInfo=function(){console.log(Object(S.loadUserData)())},a.state={person:void 0,username:"",checked:!1,statuses:[],statusIndex:0,isLoading:!0,following:!1},a.fetchData=a.fetchData.bind(Object(N.a)(Object(N.a)(a))),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"fetchData",value:function(){var e=this,t=this.props.match.params.username;this.setState({isLoading:!0,username:t}),this.setState({}),Object(S.lookupProfile)(t).then(function(t){e.setState({person:new S.Person(t)})}).catch(function(e){console.log("could not resolve profile")});var a={username:t,decrypt:!1};Object(S.getFile)("statuses.json",a).then(function(t){var a=JSON.parse(t||"[]");e.setState({statusIndex:a.length,statuses:a})}).catch(function(t){e.setState({person:void 0})}).finally(function(){e.setState({isLoading:!1})}),this.props.friends.map(function(a){return a===t?e.setState({following:!0}):e.setState({following:!1})})}},{key:"componentDidMount",value:function(){this.fetchData()}},{key:"componentWillReceiveProps",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this.state,t=e.person,a=e.username,n=e.isLoading,r={backgroundImage:'url("'.concat(C.a,'"')};return this.props.match.params.username!==a&&this.fetchData(),s.a.createElement("div",null,n&&s.a.createElement(L.a,null),!n&&t?s.a.createElement("div",{className:"container-myprofile"},s.a.createElement("div",{style:r,className:"container-desc-prof"},s.a.createElement(k.a,null,s.a.createElement(x.a,{className:"myprofile-bio"},s.a.createElement(F.a,{xs:12,md:3,className:"bio-left"},s.a.createElement("img",{alt:"",src:t.avatarUrl()?t.avatarUrl():"https://s3.amazonaws.com/onename/avatar-placeholder.png",className:"img-rounded avatar",id:"avatar-image"})),s.a.createElement(F.a,{xs:12,md:9,className:"bio-right"},s.a.createElement("h1",null,s.a.createElement("span",{id:"heading-name"},t.name()?t.name():"Nameless Person"))))),s.a.createElement("div",{className:"myprofile-options"},s.a.createElement(x.a,{className:"my-options"},s.a.createElement(F.a,{xs:3}),s.a.createElement(F.a,{xs:2},s.a.createElement("p",{className:"text-secondary"},"Posts: ",this.state.statuses.length)),s.a.createElement(F.a,{xs:2},this.state.following?s.a.createElement(g.a,{variant:"outline-danger",className:"",onClick:this.unFriend},"Unfollow"):s.a.createElement(g.a,{variant:"outline-success",className:"",onClick:this.addFriend},"Follow")),s.a.createElement(F.a,{xs:5})),s.a.createElement(x.a,null,s.a.createElement(F.a,{md:3}),s.a.createElement(F.a,{xs:12,md:8},s.a.createElement("hr",null)," "),s.a.createElement(F.a,{md:1})),s.a.createElement(x.a,null,s.a.createElement(F.a,{xs:12},s.a.createElement("p",{className:"text-secondary"},t.description()?t.description():"You have no bio."))))),s.a.createElement("div",{className:"profile-posts"},s.a.createElement(x.a,null,s.a.createElement(F.a,{xs:1,md:2}),s.a.createElement(F.a,{xs:10,md:8},this.state.isLoading&&s.a.createElement("span",null,"Loading..."),this.state.statuses.map(function(e){return s.a.createElement(P.a,{person:t,username:a,status:e})})),s.a.createElement(F.a,{xs:1,md:2})))):s.a.createElement(D,{username:a}))}}]),t}(n.Component),B=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).fetchPostsFromFriends=function(){a.setState({isLoading:!0});var e=a.props.friends;if(0===e.length)return a.setState({noFriends:!0,isLoading:!1});var t={},n=[];e.forEach(function(){var r=Object(l.a)(o.a.mark(function r(c){var i,u;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(S.lookupProfile)(c).then(function(e){return new S.Person(e)}).catch(function(e){console.log("could not resolve profile")});case 2:i=r.sent,u={username:c,decrypt:!1},Object(S.getFile)("statuses.json",u).then(function(e){var a=JSON.parse(e||"[]");a.length>0&&a.forEach(function(e){n.push(e.created_at),t[e.created_at]=s.a.createElement(P.a,{person:i,username:c,status:e})})}).catch(function(e){console.log("fail")}).finally(Object(l.a)(o.a.mark(function s(){var r;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:if(console.log(c," and ",e[e.length-1]),c!==e[e.length-1]){s.next=6;break}return s.next=4,a.mergeSort(n).reverse();case 4:r=s.sent,a.setState({allPosts:t,order:r,isLoading:!1,noFriends:!1});case 6:case"end":return s.stop()}},s,this)})));case 5:case"end":return r.stop()}},r,this)}));return function(e){return r.apply(this,arguments)}}())},a.mergeSort=function(e){if(1===e.length)return e;var t=e.length,n=Math.floor(t/2),s=e.slice(0,n),r=e.slice(n);return a.merge(a.mergeSort(s),a.mergeSort(r))},a.merge=function(e,t){for(var a=[],n=0,s=0;n<e.length&&s<t.length;)e[n]<t[s]?(a.push(e[n]),n++):(a.push(t[s]),s++);return a.concat(e.slice(n)).concat(t.slice(s))},a.state={allPosts:[],isLoading:!1,order:[],noFriends:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchPostsFromFriends()}},{key:"componentWillReceiveProps",value:function(){this.fetchPostsFromFriends()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"feed-container"},s.a.createElement(x.a,null,s.a.createElement(F.a,{xs:1,md:2}),s.a.createElement(F.a,{xs:10,md:8},this.state.isLoading&&s.a.createElement(L.a,null),this.state.noFriends&&s.a.createElement("h1",null,"Oepsie, you have no frinds yet"),!this.state.noFriends&&!this.state.isLoading&&this.state.order.map(function(t){return e.state.allPosts[t]})),s.a.createElement(F.a,{xs:1,md:2})))}}]),t}(n.Component),M=a(589),J=a(590),W=(a(577),"https://s3.amazonaws.com/onename/avatar-placeholder.png"),A=function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).checkSignedInStatus=function(){return!!Object(S.isUserSignedIn)()||(Object(S.isSignInPending)()?(Object(S.handlePendingSignIn)().then(function(e){this.props.history.push("/")}),!1):void 0)},a.loadPerson=Object(l.a)(o.a.mark(function e(){var t,n,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(S.loadUserData)(),e.next=3,new S.Person(t.profile);case 3:return n=e.sent,a.loadFriends(),e.next=7,t.username;case 7:s=e.sent,a.setState({person:n,username:s}),a.props.history.push("/".concat(s));case 10:case"end":return e.stop()}},e,this)})),a.loadFriends=function(){Object(S.getFile)("friends.json",{decrypt:!1}).then(function(e){var t=JSON.parse(e||"[]");a.setState({friends:t})})},a.handleSignIn=function(e){e.preventDefault();var t=window.location.origin;Object(S.redirectToSignIn)(t,t+"/manifest.json",["store_write","publish_data"])},a.searchFor=function(e){a.props.history.push("/users/".concat(e))},a.updateFriends=function(e){a.setState({friends:e})};var n=a.checkSignedInStatus();return a.state={isSignedIn:n,person:{name:function(){return"Anonymous"},avatarUrl:function(){return W},description:function(){return"No description"}},username:null,friends:[]},n&&a.loadPerson(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){Object(S.isSignInPending)()&&Object(S.handlePendingSignIn)().then(function(e){window.location=window.location.origin})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},this.state.isSignedIn?s.a.createElement("div",null,s.a.createElement(y,{searchFor:this.searchFor,person:this.state.person,username:this.state.username}),s.a.createElement(M.a,null,s.a.createElement(J.a,{path:"/users/:username",render:function(t){return s.a.createElement(U,Object.assign({updateFriends:e.updateFriends,friends:e.state.friends,person:e.state.person,username:e.state.username},t))}}),s.a.createElement(J.a,{exact:!0,path:"/feed",render:function(t){return s.a.createElement(B,Object.assign({searchFor:e.searchFor,friends:e.state.friends,person:e.state.person,username:e.state.username},t))}}),s.a.createElement(J.a,{path:"/:username",render:function(t){return s.a.createElement(p.a,Object.assign({searchFor:e.searchFor,friends:e.state.friends,person:e.state.person,username:e.state.username},t))}}),s.a.createElement(J.a,{exact:!0,path:"/",render:function(t){return s.a.createElement(B,Object.assign({searchFor:e.searchFor,friends:e.state.friends,person:e.state.person,username:e.state.username},t))}}))):s.a.createElement(E,{handleSignIn:this.handleSignIn}))}}]),t}(n.Component),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var _=a(588);c.a.render(s.a.createElement(_.a,null,s.a.createElement(J.a,{path:"/",render:function(e){return s.a.createElement(A,e)}})),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");z?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):R(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):R(e)})}}()},66:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(19),s=a(20),r=a(23),c=a(21),i=a(22),o=a(0),l=a.n(o),u=a(581),m=a(562),d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).parseDate=function(e){var t=Date.now();return Math.floor((t-e)/6e4)<60?"".concat(Math.floor((t-e)/6e4)," m"):Math.floor((t-e)/36e5)<24?"".concat(Math.floor((t-e)/36e5)," h"):Math.floor((t-e)/864e5)<7?"".concat(Math.floor((t-e)/864e5)," d"):void 0},a.state={},a}return Object(i.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.person,a=e.username,n=e.status;return l.a.createElement("div",{className:"my-post",key:n.id},l.a.createElement(u.a,{className:"poster-info"},l.a.createElement(m.a,{xs:2},l.a.createElement("img",{src:t.avatarUrl()?t.avatarUrl():"https://s3.amazonaws.com/onename/avatar-placeholder.png",alt:"",className:"post-img"})),l.a.createElement(m.a,{xs:3,className:"poster-info"},a),l.a.createElement(m.a,{xs:4}),l.a.createElement(m.a,{xs:3},l.a.createElement("span",{className:"post-date"},this.parseDate(n.created_at)))),l.a.createElement("hr",null),n.image&&l.a.createElement("div",{className:"post-pic-container"},l.a.createElement("img",{alt:"",className:"post-pic",src:n.image}),l.a.createElement("hr",null)),l.a.createElement("pre",null,n.text))}}]),t}(o.Component)},67:function(e,t,a){"use strict";a.d(t,"a",function(){return u});var n=a(19),s=a(20),r=a(23),c=a(21),i=a(22),o=a(0),l=a.n(o),u=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-myprofile"},l.a.createElement("div",{className:"loader"}))}}]),t}(o.Component)}},[[269,2,1]]]);
//# sourceMappingURL=main.a5f72186.chunk.js.map