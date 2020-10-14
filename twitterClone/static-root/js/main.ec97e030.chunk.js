(this["webpackJsonptwitterclone-web"]=this["webpackJsonptwitterclone-web"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),o=n.n(r);n(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,t,n,a){var c;a&&(c=JSON.stringify(a));var r=new XMLHttpRequest,o="http://localhost:8000/api".concat(t);r.responseType="json";var l=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var c=n[a].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}("csrftoken");r.open(e,o),r.setRequestHeader("Content-Type","application/json"),l&&(r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-CSRFToken",l)),r.onload=function(){403===r.status&&("Authentication credentials were not provided."===r.response.detail&&-1===window.location.href.indexOf("login")&&(window.location.href="/login?showLoginRequired=true"));n(r.response,r.status)},r.onerror=function(e){n({message:"The request was an error"},400)},r.send(c)}function s(e,t){var n="/tweets/feed/";null!==t&&void 0!==t&&(n=t.replace("http://localhost:8000/api","")),l("GET",n,e)}function i(e,t,n){var a="/tweets/";e&&(a="/tweets/?username=".concat(e)),null!==n&&void 0!==n&&(a=n.replace("http://localhost:8000/api","")),l("GET",a,t)}function u(e){var t=e.tweet,n=e.action,a=e.didPerformAction,r=t.likes?t.likes:0,o=e.className?e.className:"btn btn-primary btn-sm",s=n.display?n.display:"Action",i=function(e,n){console.log(e,n),console.log(t.author.username),200!==n&&201!==n||!a||a(e,n)},u="like"===n.type?"".concat(r," ").concat(s):s;return c.a.createElement("button",{className:o,onClick:function(e){e.preventDefault(),function(e,t,n){l("POST","/tweets/action/",n,{id:e,action:t})}(t.id,n.type,i)}},u)}var m=n(7),d=n(1);function f(e){var t=e.username;return c.a.createElement("span",{className:"pointer",onClick:function(e){window.location.href="/profiles/".concat(t)}},e.children)}function w(e){var t=e.user,n=!0===e.includeFullName?"".concat(t.first_name," ").concat(t.last_name," "):null;return c.a.createElement(c.a.Fragment,null,n,c.a.createElement(f,{username:t.username},"@",t.username))}function b(e){var t=e.user;return c.a.createElement(f,{username:t.username},c.a.createElement("span",{className:"mx-1 px-3 py-2 rounded-circle bg-dark text-white"},t.username[0]))}function p(e){var t=e.tweet;return t.parent?c.a.createElement(v,{isRetweet:!0,retweeter:e.retweeter,hideActions:!0,className:" ",tweet:t.parent}):null}function v(e){var t=e.tweet,n=e.didRetweet,r=e.hideActions,o=e.isRetweet,l=e.retweeter,s=Object(a.useState)(e.tweet?e.tweet:null),i=Object(d.a)(s,2),f=i[0],v=i[1],E=e.className?e.className:"col-10 mx-auto col-md-6";E=!0===o?"".concat(E," p-2 border rounded"):E;var h=window.location.pathname.match(Object(m.a)(/([0-9]+)/,{tweetid:1})),O=h?h.groups.tweetid:-1,j="".concat(t.id)==="".concat(O),g=function(e,t){200===t?v(e):201===t&&n&&n(e)};return c.a.createElement("div",{className:E},!0===o&&c.a.createElement("div",{className:"mb-2"},c.a.createElement("span",{className:"small text-muted"},"Retweet via ",c.a.createElement(w,{user:l}))),c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:""},c.a.createElement(b,{user:t.user})),c.a.createElement("div",{className:"col-11"},c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement(w,{includeFullName:!0,user:t.user})),c.a.createElement("p",null,t.content),c.a.createElement(p,{tweet:t,retweeter:t.user})),c.a.createElement("div",{className:"btn btn-group px-0"},f&&!0!==r&&c.a.createElement(c.a.Fragment,null,c.a.createElement(u,{tweet:f,didPerformAction:g,action:{type:"like",display:"Likes"}}),c.a.createElement(u,{tweet:f,didPerformAction:g,action:{type:"unlike",display:"Unlike"}}),c.a.createElement(u,{tweet:f,didPerformAction:g,action:{type:"retweet",display:"Retweet"}})),!0===j?null:c.a.createElement("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)}},"View")))))}function E(e){var t=e.didTweet,n=c.a.createRef(),a=function(e,n){201===n?t(e):(console.log(e),alert("An error occured! Please try again"))};return c.a.createElement("div",{className:e.className},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=n.current.value;l("POST","/tweets/create/",a,{content:t}),n.current.value=""}},c.a.createElement("textarea",{ref:n,required:!0,className:"form-control",name:"tweet"}),c.a.createElement("button",{type:"submit",className:"btn btn-primary my-3"},"Tweet")))}var h=n(2);function O(e){var t=Object(a.useState)([]),n=Object(d.a)(t,2),r=n[0],o=n[1],l=Object(a.useState)([]),s=Object(d.a)(l,2),u=s[0],m=s[1],f=Object(a.useState)(null),w=Object(d.a)(f,2),b=w[0],p=w[1],E=Object(a.useState)(!1),O=Object(d.a)(E,2),j=O[0],g=O[1];Object(a.useEffect)((function(){var t=Object(h.a)(e.newTweets).concat(r);t.length!==u.length&&m(t)}),[e.newTweets,u,r]),Object(a.useEffect)((function(){if(!1===j){i(e.username,(function(e,t){200===t?(p(e.next),o(e.results),g(!0)):alert("There was an error")}))}}),[r,j,g,e.username]);var N=function(e){var t=Object(h.a)(r);t.unshift(e),o(t);var n=Object(h.a)(u);n.unshift(u),m(n)};return c.a.createElement(c.a.Fragment,null,u.map((function(e,t){return c.a.createElement(v,{tweet:e,didRetweet:N,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})})),null!==b&&c.a.createElement("button",{onClick:function(t){if(t.preventDefault(),null!==b){i(e.username,(function(e,t){if(200===t){p(e.next);var n=Object(h.a)(u).concat(e.results);o(n),m(n)}else alert("There was an error")}),b)}},className:"btn btn-outline-primary"},"Load next"))}function j(e){var t=Object(a.useState)([]),n=Object(d.a)(t,2),r=n[0],o=n[1],l=Object(a.useState)([]),i=Object(d.a)(l,2),u=i[0],m=i[1],f=Object(a.useState)(null),w=Object(d.a)(f,2),b=w[0],p=w[1],E=Object(a.useState)(!1),O=Object(d.a)(E,2),j=O[0],g=O[1];Object(a.useEffect)((function(){var t=Object(h.a)(e.newTweets).concat(r);t.length!==u.length&&m(t)}),[e.newTweets,u,r]),Object(a.useEffect)((function(){if(!1===j){s((function(e,t){200===t&&(p(e.next),o(e.results),g(!0))}))}}),[r,j,g,e.username]);var N=function(e){var t=Object(h.a)(r);t.unshift(e),o(t);var n=Object(h.a)(u);n.unshift(u),m(n)};return c.a.createElement(c.a.Fragment,null,u.map((function(e,t){return c.a.createElement(v,{tweet:e,didRetweet:N,className:"my-5 py-5 border bg-white text-dark",key:"".concat(t,"-{item.id}")})})),null!==b&&c.a.createElement("button",{onClick:function(e){if(e.preventDefault(),null!==b){s((function(e,t){if(200===t){p(e.next);var n=Object(h.a)(u).concat(e.results);o(n),m(n)}}),b)}},className:"btn btn-outline-primary"},"Load next"))}function g(e){var t=e.tweetId,n=Object(a.useState)(!1),r=Object(d.a)(n,2),o=r[0],s=r[1],i=Object(a.useState)(null),u=Object(d.a)(i,2),m=u[0],f=u[1],w=function(e,t){200===t?f(e):alert("There was an error finding your tweet.")};return Object(a.useEffect)((function(){!1===o&&(!function(e,t){l("GET","/tweets/".concat(e,"/"),t)}(t,w),s(!0))}),[t,o,s]),null===m?null:c.a.createElement(v,{tweet:m,className:e.className})}var N=c.a.createElement,y=document.getElementById("twitterclone");y&&o.a.render(N((function(e){var t=Object(a.useState)([]),n=Object(d.a)(t,2),r=n[0],o=n[1],l="false"!==e.canTweet;return c.a.createElement("div",{className:e.className},!0===l&&c.a.createElement(E,{didTweet:function(e){var t=Object(h.a)(r);t.unshift(e),o(t)},className:"col-12 mb-3"}),c.a.createElement(O,Object.assign({newTweets:r},e)))}),y.dataset),y);var k=document.getElementById("twitterclone-feed");k&&o.a.render(N((function(e){var t=Object(a.useState)([]),n=Object(d.a)(t,2),r=n[0],o=n[1],l="false"!==e.canTweet;return c.a.createElement("div",{className:e.className},!0===l&&c.a.createElement(E,{didTweet:function(e){var t=Object(h.a)(r);t.unshift(e),o(t)},className:"col-12 mb-3"}),c.a.createElement(j,Object.assign({newTweets:r},e)))}),k.dataset),k),document.querySelectorAll(".twitterclone-detail").forEach((function(e){o.a.render(N(g,e.dataset),e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.ec97e030.chunk.js.map