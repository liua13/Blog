(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"14Xm":function(e,t,n){e.exports=n("cSMa")},"3BOr":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(["\n  from, to {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n"],["\n  from, to {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n"]),a=l(["\n  font-weight: 100;\n  color: black;\n  font-size: 1em;\n  padding-left: 2px;\n  animation: "," 1s step-end infinite;\n"],["\n  font-weight: 100;\n  color: black;\n  font-size: 1em;\n  padding-left: 2px;\n  animation: "," 1s step-end infinite;\n"]),o=s(n("q1tI")),i=s(n("17x9")),u=n("++BS"),c=s(u);function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var p=(0,u.keyframes)(r),f=c.default.span(a,p),d=function(e){var t=e.className;return o.default.createElement(f,{className:t},"|")};d.propTypes={className:i.default.string},d.defaultProps={className:""},t.default=d},"3RSX":function(e,t,n){"use strict";var r=n("Qfp6");e.exports=function(e){return!(!e||"string"!=typeof e||e.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},"5R+2":function(e,t){e.exports=function(e,t,n){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,a=-~(1.6*r*n/t.length),o="";;)for(var i=e(a),u=a;u--;)if((o+=t[i[u]&r]||"").length===+n)return o}},Bpvx:function(e,t,n){"use strict";var r=n("Qfp6"),a=n("Pfkr"),o=n("3RSX"),i=n("n8Jw")||0;function u(){return a(i)}e.exports=u,e.exports.generate=u,e.exports.seed=function(t){return r.seed(t),e.exports},e.exports.worker=function(t){return i=t,e.exports},e.exports.characters=function(e){return void 0!==e&&r.characters(e),r.shuffled()},e.exports.isValid=o},CR0S:function(e,t,n){"use strict";var r,a="object"==typeof window&&(window.crypto||window.msCrypto);r=a&&a.getRandomValues?function(e){return a.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=r},G8ry:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n("q1tI"),o=(r=a)&&r.__esModule?r:{default:r};var i=function(){return o.default.createElement("noscript",null)};i.updateCursor=function(e,t){var n=t.count,r=t.delay,a=t.speed;return Object.assign({},e,{numToErase:n,preEraseLineNum:e.lineNum,speed:a>0?a:e.speed,delay:r>0?e.delay+r:e.delay,step:"line"})},i.getName=function(){return"Reset"},t.default=i},LJc4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n("q1tI"),o=(r=a)&&r.__esModule?r:{default:r};var i=function(){return o.default.createElement("noscript",null)};i.updateCursor=function(e,t){var n=t.ms;return Object.assign({},e,{speed:n})},i.getName=function(){return"Speed"},t.default=i},Pfkr:function(e,t,n){"use strict";var r,a,o=n("vZIR");n("Qfp6");e.exports=function(e){var t="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?r++:(r=0,a=n),t+=o(7),t+=o(e),r>0&&(t+=o(r)),t+=o(n)}},Qfp6:function(e,t,n){"use strict";var r,a,o,i=n("fqyn"),u="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function c(){o=!1}function s(e){if(e){if(e!==r){if(e.length!==u.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,n){return t!==n.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+u.length+" unique characters. These characters were not unique: "+t.join(", "));r=e,c()}}else r!==u&&(r=u,c())}function l(){return o||(o=function(){r||s(u);for(var e,t=r.split(""),n=[],a=i.nextValue();t.length>0;)a=i.nextValue(),e=Math.floor(a*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return r||u},characters:function(e){return s(e),r},seed:function(e){i.seed(e),a!==e&&(c(),a=e)},lookup:function(e){return l()[e]},shuffled:l}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("Bl7J"),i=n("vrFN"),u=n("Wbzz"),c=n("1eu9"),s=n.n(c),l=n("vOnD"),p=n("/eHF"),f=n.n(p),d=n("j/HY"),h=n.n(d),m=n("NO0K"),g=Object(l.a)(s.a).withConfig({displayName:"header__BackgroundImageWrapper",componentId:"zdwwlg-0"})(["min-height:90vh;background-attachment:fixed;display:flex;justify-content:center;align-items:center;::before{filter:brightness(60%);}"]),y=l.a.div.withConfig({displayName:"header__TextWrapper",componentId:"zdwwlg-1"})(["font-size:20px;color:white;height:200px;text-align:center;"]),v=l.a.p.withConfig({displayName:"header__SiteName",componentId:"zdwwlg-2"})(['font-family:"Oswald","sans serif";font-size:60px;']),w=function(){var e=Object(u.useStaticQuery)("671468744");return a.a.createElement(g,{fluid:e.background.childImageSharp.fluid,id:"top"},a.a.createElement(f.a,{bottom:!0},a.a.createElement(y,null,a.a.createElement("span",null,"hey, i'm"),a.a.createElement(v,null,"ANNIE LIU"),a.a.createElement(m.a,null),a.a.createElement(h.a,{hideCursor:!0},a.a.createElement(h.a.Delay,{ms:400}),a.a.createElement("span",null,"nice to meet you!")))))},x=n("9eSz"),b=n.n(x),E=l.a.section.withConfig({displayName:"about__SectionWrapper",componentId:"deejg-0"})(["display:block;width:67vw;margin:auto;padding:75px 0;"]),j=l.a.div.withConfig({displayName:"about__FlexBox",componentId:"deejg-1"})(["display:flex;width:100%;flex-wrap:wrap;"]),k=Object(l.a)(b.a).withConfig({displayName:"about__ImageComponent",componentId:"deejg-2"})(["display:block;margin:0 auto;width:200px;"]),_=l.a.div.withConfig({displayName:"about__ImageWrapper",componentId:"deejg-3"})(["margin:20px auto;"]),N=l.a.div.withConfig({displayName:"about__TextWrapper",componentId:"deejg-4"})(["margin:10px auto 0px auto;width:40vw;height:auto;display:flex;flex-direction:column;justify-content:center;@media (max-width:976px){width:100%;}"]),S=l.a.h3.withConfig({displayName:"about__HeaderWrapper",componentId:"deejg-5"})(["text-align:center;font-size:35px;margin-top:-30px;@media (max-width:976px){margin-top:0px;}"]),T=l.a.div.withConfig({displayName:"about__Description",componentId:"deejg-6"})(["font-size:17px;margin-top:15px;text-align:justify;"]),O=function(){var e=Object(u.useStaticQuery)("219256891");return a.a.createElement(E,{id:"about"},a.a.createElement(f.a,{bottom:!0},a.a.createElement(j,null,a.a.createElement(_,null,a.a.createElement(k,{fluid:e.favicon.childImageSharp.fluid})),a.a.createElement(N,null,a.a.createElement(S,null,"ABOUT"),a.a.createElement(T,null,e.site.siteMetadata.description)))))},C=n("8+j9"),I=l.a.div.withConfig({displayName:"project__Wrapper",componentId:"sc-13025x7-0"})(["width:400px;margin:5px;display:inline-block;background-color:white;@media (max-width:600px){margin:5px auto;width:100%;}@media (max-width:976px){height:auto;}vertical-align:top;height:500px;"]),P=Object(l.a)(b.a).withConfig({displayName:"project__ImageComponent",componentId:"sc-13025x7-1"})(["display:block;margin:0 auto;width:100%;:hover{filter:brightness(60%);-webkit-transition:all 0.5s ease-in-out;}"]),L=l.a.div.withConfig({displayName:"project__ProjectWrapper",componentId:"sc-13025x7-2"})(["margin:auto;width:auto;padding:20px;"]),M=l.a.span.withConfig({displayName:"project__Title",componentId:"sc-13025x7-3"})(["float:left;font-weight:bold;a{color:black;}a:hover{color:purple;}"]),R=l.a.span.withConfig({displayName:"project__Date",componentId:"sc-13025x7-4"})(["float:right;color:purple;font-size:13px;"]),A=l.a.div.withConfig({displayName:"project__Caption",componentId:"sc-13025x7-5"})(["clear:both;text-align:left;font-style:italic;font-size:13px;"]),z=l.a.div.withConfig({displayName:"project__Description",componentId:"sc-13025x7-6"})(["text-align:justify;margin:10px 0;a:hover{color:#a9a9a9;}"]),B=l.a.div.withConfig({displayName:"project__Technologies",componentId:"sc-13025x7-7"})(["text-align:left;font-size:13px;"]),D=function(e){var t=e.date,n=e.title,r=e.caption,o=e.image,i=e.link,u=e.description,c=e.technologies;return a.a.createElement(I,null,a.a.createElement(C.a,{to:i},a.a.createElement(P,{fluid:o})),a.a.createElement(L,null,a.a.createElement("div",null,a.a.createElement(M,null,a.a.createElement(C.a,{to:i},n)),a.a.createElement(R,null,t)),a.a.createElement(A,null,r),a.a.createElement(z,{dangerouslySetInnerHTML:{__html:u}}),a.a.createElement(B,null,"Technologies: ",c)))},F=n("tyPb"),q=l.a.div.withConfig({displayName:"projects__SectionWrapper",componentId:"sc-1hv4can-0"})(["background-color:#eeeeee;padding:100px 7vw;"]),J=l.a.h3.withConfig({displayName:"projects__HeaderWrapper",componentId:"sc-1hv4can-1"})(["text-align:center;font-size:35px;"]),V=l.a.div.withConfig({displayName:"projects__ProjectWrapper",componentId:"sc-1hv4can-2"})(["margin:30px auto 0px auto;display:block;text-align:center;"]),W=function(){var e=Object(u.useStaticQuery)("2105956244");var t=function(){var e=Object(r.useState)({width:void 0,height:void 0}),t=e[0],n=e[1];return Object(r.useEffect)((function(){function e(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}();if(console.log(t),t.width<=976)return a.a.createElement(q,{id:"projects"},a.a.createElement(f.a,{bottom:!0},a.a.createElement(J,null,"PROJECTS")),a.a.createElement(V,null,F.map((function(t){var n=e.allFile.edges.find((function(e){return e.node.childImageSharp.fluid.originalName===t.image}));return a.a.createElement(f.a,{bottom:!0,key:t.id},a.a.createElement(D,{key:t.id,id:t.id,date:t.date,title:t.title,caption:t.caption,description:t.description,link:t.link,technologies:t.technologies,image:n.node.childImageSharp.fluid}))}))));var n=F.reduce((function(e,t,n){return(n%2==0?e.push([t]):e[e.length-1].push(t))&&e}),[]);return a.a.createElement(q,{id:"projects"},a.a.createElement(f.a,{bottom:!0},a.a.createElement(J,null,"PROJECTS")),a.a.createElement(V,null,n.map((function(t){return a.a.createElement(f.a,{bottom:!0,key:t[0].id},a.a.createElement(a.a.Fragment,null,t.map((function(t){var n=e.allFile.edges.find((function(e){return e.node.childImageSharp.fluid.originalName===t.image}));return a.a.createElement(D,{key:t.id,id:t.id,date:t.date,title:t.title,caption:t.caption,description:t.description,link:t.link,technologies:t.technologies,image:n.node.childImageSharp.fluid})}))))}))))};t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(i.a,{title:"Hi!"}),a.a.createElement(w,null),a.a.createElement(O,null),a.a.createElement(W,null))}},XVVG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n("q1tI"),o=(r=a)&&r.__esModule?r:{default:r};var i=function(){return o.default.createElement("noscript",null)};i.updateCursor=function(e,t){var n=t.ms;return Object.assign({},e,{delay:e.delay+n})},i.getName=function(){return"Delay"},t.default=i},bQgK:function(e,t,n){(function(t){(function(){var n,r,a,o,i,u;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,o=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),u=1e9*t.uptime(),i=o-u):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(this,n("8oxB"))},cSMa:function(e,t,n){var r=function(){return this}()||Function("return this")(),a=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=a&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n("u4eC"),a)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(i){r.regeneratorRuntime=void 0}},fqyn:function(e,t,n){"use strict";var r=1;e.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(e){r=e}}},"j/HY":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Speed=t.Reset=t.Delay=t.Cursor=t.Backspace=void 0;var r=n("plls");Object.defineProperty(t,"Backspace",{enumerable:!0,get:function(){return s(r).default}});var a=n("3BOr");Object.defineProperty(t,"Cursor",{enumerable:!0,get:function(){return s(a).default}});var o=n("XVVG");Object.defineProperty(t,"Delay",{enumerable:!0,get:function(){return s(o).default}});var i=n("G8ry");Object.defineProperty(t,"Reset",{enumerable:!0,get:function(){return s(i).default}});var u=n("LJc4");Object.defineProperty(t,"Speed",{enumerable:!0,get:function(){return s(u).default}});var c=s(n("xVvY"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=c.default},je4i:function(e,t,n){"use strict";e.exports=n("Bpvx")},n8Jw:function(e,t,n){"use strict";e.exports=0},orcf:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getCircularReplacer=t.replaceTreeText=t.extractText=t.randomize=t.gaussianRandomInRange=t.randomInRange=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=n("q1tI"),o=u(a),i=u(n("je4i"));function u(e){return e&&e.__esModule?e:{default:e}}var c=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],s=function e(t){return t.reduce((function(t,n){return t.concat(Array.isArray(n)?a.Children.toArray(e(n)):a.Children.toArray(n))}),[])},l=function(e){return e.filter((function(e){return void 0!==e}))},p=function(e){return["Backspace","Delay","Speed","Reset"].some((function(t){return e.type&&e.type.getName&&e.type.getName()===t}))},f=t.randomInRange=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},d=t.gaussianRandomInRange=function(e,t){for(var n=f(e,t),r=0;r<5;r++)n+=f(e,t);return Math.floor(n/6)};t.randomize=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.2;return d(e+e*t,e-e*t)},t.extractText=function(){var e=function e(t){return p(t)?t:o.default.isValidElement(t)?-1!==c.indexOf(t.type)?"\n":a.Children.map(t.props.children,(function(t){return e(t)})):Array.isArray(t)?t.map((function(t){return e(t)})):String(t)},t=e.apply(void 0,arguments);return Array.isArray(t)?l(s(t)):l([t])},t.replaceTreeText=function(e,t,n,r){return function e(t,u){if(!(u.length<1||p(t)))return o.default.isValidElement(t)?-1!==c.indexOf(t.type)?1===u.length?a.Children.toArray([""===u.shift()?void 0:t,r?null:n]):""===u.shift()?void 0:t:o.default.createElement(t.type,Object.assign({},t.props,{key:t.key||"Typing."+i.default.generate()}),l(a.Children.toArray(t.props.children).map((function(t){return e(t,u)})))):Array.isArray(t)?l(t.map((function(t){return e(t,u)}))):1===u.length?a.Children.toArray([u.shift(),r?null:n]):u.shift()||""}(e,t.slice())},t.getCircularReplacer=function(){var e=new WeakSet;return function(t,n){if("object"===(void 0===n?"undefined":r(n))&&null!==n){if(e.has(n))return;try{e.add(n)}catch(a){}}return n}}},plls:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n("q1tI"),o=(r=a)&&r.__esModule?r:{default:r};var i=function(){return o.default.createElement("noscript",null)};i.updateCursor=function(e,t){var n=t.speed,r=t.count,a=t.delay;return Object.assign({},e,{numToErase:r,preEraseLineNum:e.lineNum,speed:n>0?n:e.speed,delay:a>0?e.delay+a:e.delay})},i.getName=function(){return"Backspace"},t.default=i},tyPb:function(e){e.exports=JSON.parse('[{"id":"lyricalnotes","date":"jul 2020","title":"Lyrical Notes","image":"LyricalNotes.png","link":"https://lyrical-notes.herokuapp.com/","description":"A guessing game from listening to a 30 second preview of a song from Spotify","technologies":"Node, React, Spotify Web API"},{"id":"mappingproject","date":"jun 2020","title":"Mapping Visualization","image":"Mapping.png","caption":"Internship @ Kupenda for the Children","link":"https://mapping-vis.herokuapp.com/","description":"An interactive map with a filter based on user-selected properties and a feature that allows the user to find the closest facilities from any marker. Meant to help save the lives of hundreds of disabled children living in Kenya at high risk of falling through the cracks and change policies regarding these issues. <a class=\'link\' href=\'https://mapping-vis.herokuapp.com/\'>Demo with mock data</a>","technologies":"Leaflet, Node"},{"id":"creativelearning","date":"jan - may 2020","title":"Creative Learning Tool","image":"CreativeLearning.jpg","caption":"UROP @ MIT Media Lab (Lifelong Kindergarten Group)","link":"https://www.media.mit.edu/groups/lifelong-kindergarten/overview/","description":"A creative learning tool to help teachers and educators work and learn more creatively and interactively, since current tools do not address the issues that they face.","technologies":"HTML, CSS, Javascript (jQuery, Node.js, EJS), MongoDB, Mongoose"},{"id":"openstreets","date":"jan 2020","title":"Open Streets","image":"OpenStreets.jpg","link":"https://github.com/liua13/OpenStreets","caption":"MLH Best Use of MongoDB Winner @ TechTogether Boston Hackathon","description":"A crowdsourcing platform that promotes more clean, connected, and collaborative communities by allowing users to post issues on a map, share details, and automatically update the dates and addresses of the posts.","technologies":"HTML, CSS, Javascript (jQuery, Node.js, EJS, Leaflet.js), Nominatim, MongoDB, Mongoose"},{"id":"proteinresearch","date":"nov 2018","title":"Machine Learning Research","image":"Regeneron.jpg","link":"https://sspcdn.blob.core.windows.net/files/Documents/SEP/STS/2019/STS%202019%20Scholar%20Book.pdf#page=15","caption":"Regeneron STS Scholar (formerly Intel Science Talent Search Semifinalist)","description":"A machine learning model for protein subcellular localization predictions to help identify drug targets and contribute to drug repurposing efforts for many protein dysfunctional diseases, including cancer, asthma, and Alzheimer\'s.","technologies":"Python (Scikit-learn, TensorFlow, Keras)"}]')},u4eC:function(e,t){!function(t){"use strict";var n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag",c="object"==typeof e,s=t.regeneratorRuntime;if(s)c&&(e.exports=s);else{(s=t.regeneratorRuntime=c?e.exports:{}).wrap=m;var l={},p={};p[o]=function(){return this};var f=Object.getPrototypeOf,d=f&&f(f(N([])));d&&d!==n&&r.call(d,o)&&(p=d);var h=w.prototype=y.prototype=Object.create(p);v.prototype=h.constructor=w,w.constructor=v,w[u]=v.displayName="GeneratorFunction",s.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},s.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,u in e||(e[u]="GeneratorFunction")),e.prototype=Object.create(h),e},s.awrap=function(e){return{__await:e}},x(b.prototype),b.prototype[i]=function(){return this},s.AsyncIterator=b,s.async=function(e,t,n,r){var a=new b(m(e,t,n,r));return s.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(h),h[u]="Generator",h[o]=function(){return this},h.toString=function(){return"[object Generator]"},s.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},s.values=N,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;k(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}}}function m(e,t,n,r){var a=t&&t.prototype instanceof y?t:y,o=Object.create(a.prototype),i=new _(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return S()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var u=E(i,n);if(u){if(u===l)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=g(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,i),o}function g(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(r){return{type:"throw",arg:r}}}function y(){}function v(){}function w(){}function x(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function b(e){var t;this._invoke=function(n,a){function o(){return new Promise((function(t,o){!function t(n,a,o,i){var u=g(e[n],e,a);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==typeof s&&r.call(s,"__await")?Promise.resolve(s.__await).then((function(e){t("next",e,o,i)}),(function(e){t("throw",e,o,i)})):Promise.resolve(s).then((function(e){c.value=e,o(c)}),i)}i(u.arg)}(n,a,t,o)}))}return t=t?t.then(o,o):o()}}function E(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=g(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,l;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:S}}function S(){return{value:void 0,done:!0}}}(function(){return this}()||Function("return this")())},vZIR:function(e,t,n){"use strict";var r=n("Qfp6"),a=n("CR0S"),o=n("5R+2");e.exports=function(e){for(var t,n=0,i="";!t;)i+=o(a,r.get(),1),t=e<Math.pow(16,n+1),n++;return i}},xEkU:function(e,t,n){(function(t){for(var r=n("bQgK"),a="undefined"==typeof window?t:window,o=["moz","webkit"],i="AnimationFrame",u=a["request"+i],c=a["cancel"+i]||a["cancelRequest"+i],s=0;!u&&s<o.length;s++)u=a[o[s]+"Request"+i],c=a[o[s]+"Cancel"+i]||a[o[s]+"CancelRequest"+i];if(!u||!c){var l=0,p=0,f=[];u=function(e){if(0===f.length){var t=r(),n=Math.max(0,1e3/60-(t-l));l=n+t,setTimeout((function(){var e=f.slice(0);f.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return f.push({handle:++p,callback:e,cancelled:!1}),p},c=function(e){for(var t=0;t<f.length;t++)f[t].handle===e&&(f[t].cancelled=!0)}}e.exports=function(e){return u.call(a,e)},e.exports.cancel=function(){c.apply(a,arguments)},e.exports.polyfill=function(e){e||(e=a),e.requestAnimationFrame=u,e.cancelAnimationFrame=c}}).call(this,n("yLpj"))},xVvY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=m(n("14Xm")),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("q1tI"),i=m(o),u=m(n("17x9")),c=m(n("xEkU")),s=n("orcf"),l=m(n("plls")),p=m(n("G8ry")),f=m(n("XVVG")),d=m(n("LJc4")),h=m(n("3BOr"));function m(e){return e&&e.__esModule?e:{default:e}}function g(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function y(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function r(a,o){try{var i=t[a](o),u=i.value}catch(c){return void n(c)}if(!i.done)return Promise.resolve(u).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(u)}("next")}))}}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var x=function(e){function t(){var e,n,a,o,i=this;v(this,t);for(var u=arguments.length,c=Array(u),l=0;l<u;l++)c[l]=arguments[l];return n=a=w(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.state={isFinished:!1,text:[]},a.updateState=(o=y(r.default.mark((function e(t){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.hasMounted){e.next=2;break}return e.abrupt("return",new Promise((function(e){a.setState(t,e)})));case 2:case"end":return e.stop()}}),e,i)}))),function(e){return o.apply(this,arguments)}),a.resetState=y(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.updateState({toType:(0,s.extractText)(a.props.children),cursor:{lineNum:0,charPos:0,numToErase:0,preEraseLineNum:0,delay:a.props.startDelay,speed:a.props.speed,step:"char"}}));case 1:case"end":return e.stop()}}),e,i)}))),a.beginTyping=y(r.default.mark((function e(){var t;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object.assign({},a.state.cursor),!(a.state.toType.length>0||t.numToErase>0)){e.next=10;break}return e.next=4,a.props.onBeforeType(a.state.text);case 4:return e.next=6,a.type();case 6:return e.next=8,a.props.onAfterType(a.state.text);case 8:e.next=18;break;case 10:return e.next=12,a.props.onFinishedTyping();case 12:if(!a.props.loop){e.next=17;break}return e.next=15,a.resetState();case 15:e.next=18;break;case 17:return e.abrupt("return",a.updateState({isFinished:!0}));case 18:if(!a.hasMounted){e.next=20;break}return e.abrupt("return",a.beginTyping());case 20:case"end":return e.stop()}}),e,i)}))),a.type=y(r.default.mark((function e(){var t,n;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[].concat(g(a.state.toType)),n=Object.assign({},a.state.cursor);t&&t[0]&&t[0].type&&t[0].type.updateCursor&&n.numToErase<1;)n=t[0].type.updateCursor(n,t[0].props),t.shift();return e.next=5,a.updateState({cursor:n,toType:t});case 5:return e.abrupt("return",a.animateNextStep());case 6:case"end":return e.stop()}}),e,i)}))),a.animateNextStep=y(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout(y(r.default.mark((function t(){var n,o,u;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.state,o=n.cursor,u=n.toType,t.next=3,a.updateState({cursor:Object.assign({},o,{delay:0})});case 3:if(!("char"===o.step&&o.numToErase<1)){t.next=9;break}if(!(u.length>0)){t.next=7;break}return t.next=7,a.typeCharacter();case 7:t.next=11;break;case 9:return t.next=11,a.erase();case 11:e();case 12:case"end":return t.stop()}}),t,i)}))),a.state.cursor.delay)})));case 1:case"end":return e.stop()}}),e,i)}))),a.typeCharacter=y(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=y(r.default.mark((function e(t){var n,o,u;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[].concat(g(a.state.toType)),o=[].concat(g(a.state.text)),u=Object.assign({},a.state.cursor),o.length-1<u.lineNum&&(o[u.lineNum]=""),o[u.lineNum]+=n[0][u.charPos],u.charPos+=1,n[0].length-1<u.charPos&&(u.lineNum+=1,u.charPos=0,n.shift()),e.next=9,a.updateState({cursor:u,text:o,toType:n});case 9:setTimeout(t,(0,s.randomize)(u.speed));case 10:case"end":return e.stop()}}),e,i)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,i)}))),a.erase=y(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=y(r.default.mark((function e(t){var n,o;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[].concat(g(a.state.text)),o=Object.assign({},a.state.cursor);case 2:if(!(o.lineNum>n.length-1||o.charPos<0)){e.next=9;break}if(o.lineNum-=1,!(o.lineNum<0)){e.next=6;break}return e.abrupt("break",9);case 6:o.charPos=n[o.lineNum].length?n[o.lineNum].length-1:0,e.next=2;break;case 9:return"char"===o.step&&o.lineNum>=0?n[o.lineNum]=n[o.lineNum].substr(0,n[o.lineNum].length-1):o.numToErase>0?n[o.lineNum]="":n.length=0,o.charPos-=1,o.numToErase-=1,o.numToErase<1&&(o.lineNum=o.preEraseLineNum,o.charPos=0,o.step="char"),e.next=15,a.updateState({cursor:o,text:n});case 15:setTimeout(t,(0,s.randomize)(o.speed));case 16:case"end":return e.stop()}}),e,i)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,i)}))),w(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.children;void 0!==t&&JSON.stringify(t,(0,s.getCircularReplacer)())!==JSON.stringify(e.children,(0,s.getCircularReplacer)())&&this.resetState()}},{key:"componentDidMount",value:function(){var e=this;this.hasMounted=!0,this.resetState().then(y(r.default.mark((function t(){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.onStartedTyping();case 2:(0,c.default)(e.beginTyping);case 3:case"end":return t.stop()}}),t,e)}))))}},{key:"componentWillUnmount",value:function(){this.hasMounted=!1}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.cursorClassName,a=e.hideCursor,o=this.state,u=o.isFinished,c=o.text,l=this.props.cursor||i.default.createElement(h.default,{className:r}),p=(0,s.replaceTreeText)(t,c,l,u||a);return i.default.createElement("div",{className:n},p)}}]),t}(o.Component);x.propTypes={children:u.default.node.isRequired,className:u.default.string,cursor:u.default.node,cursorClassName:u.default.string,speed:u.default.number,startDelay:u.default.number,loop:u.default.bool,onStartedTyping:u.default.func,onBeforeType:u.default.func,onAfterType:u.default.func,onFinishedTyping:u.default.func},x.defaultProps={className:"",cursorClassName:"",speed:50,startDelay:0,loop:!1,onStartedTyping:function(){},onBeforeType:function(){},onAfterType:function(){},onFinishedTyping:function(){}},x.Backspace=l.default,x.Reset=p.default,x.Delay=f.default,x.Speed=d.default,x.Cursor=h.default,t.default=x}}]);
//# sourceMappingURL=component---src-pages-index-js-5a9dee06d3eb4e9e9813.js.map