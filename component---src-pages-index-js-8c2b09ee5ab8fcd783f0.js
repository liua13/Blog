(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"14Xm":function(e,t,n){e.exports=n("cSMa")},"3BOr":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(["\n  from, to {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n"],["\n  from, to {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n"]),a=l(["\n  font-weight: 100;\n  color: black;\n  font-size: 1em;\n  padding-left: 2px;\n  animation: "," 1s step-end infinite;\n"],["\n  font-weight: 100;\n  color: black;\n  font-size: 1em;\n  padding-left: 2px;\n  animation: "," 1s step-end infinite;\n"]),o=u(n("q1tI")),i=u(n("17x9")),s=n("++BS"),c=u(s);function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var p=(0,s.keyframes)(r),d=c.default.span(a,p),f=function(e){var t=e.className;return o.default.createElement(d,{className:t},"|")};f.propTypes={className:i.default.string},f.defaultProps={className:""},t.default=f},"3RSX":function(e,t,n){"use strict";var r=n("Qfp6");e.exports=function(e){return!(!e||"string"!=typeof e||e.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(e)}},"5R+2":function(e,t){e.exports=function(e,t,n){for(var r=(2<<Math.log(t.length-1)/Math.LN2)-1,a=-~(1.6*r*n/t.length),o="";;)for(var i=e(a),s=a;s--;)if((o+=t[i[s]&r]||"").length===+n)return o}},Bpvx:function(e,t,n){"use strict";var r=n("Qfp6"),a=n("Pfkr"),o=n("3RSX"),i=n("n8Jw")||0;function s(){return a(i)}e.exports=s,e.exports.generate=s,e.exports.seed=function(t){return r.seed(t),e.exports},e.exports.worker=function(t){return i=t,e.exports},e.exports.characters=function(e){return void 0!==e&&r.characters(e),r.shuffled()},e.exports.isValid=o},CR0S:function(e,t,n){"use strict";n("PF2M"),n("IZzc");var r,a="object"==typeof window&&(window.crypto||window.msCrypto);r=a&&a.getRandomValues?function(e){return a.getRandomValues(new Uint8Array(e))}:function(e){for(var t=[],n=0;n<e;n++)t.push(Math.floor(256*Math.random()));return t},e.exports=r},G8ry:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n("q1tI"),o=(r=a)&&r.__esModule?r:{default:r};var i=function(){return o.default.createElement("noscript",null)};i.updateCursor=function(e,t){var n=t.count,r=t.delay,a=t.speed;return Object.assign({},e,{numToErase:n,preEraseLineNum:e.lineNum,speed:a>0?a:e.speed,delay:r>0?e.delay+r:e.delay,step:"line"})},i.getName=function(){return"Reset"},t.default=i},LJc4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n("q1tI"),o=(r=a)&&r.__esModule?r:{default:r};var i=function(){return o.default.createElement("noscript",null)};i.updateCursor=function(e,t){var n=t.ms;return Object.assign({},e,{speed:n})},i.getName=function(){return"Speed"},t.default=i},Pfkr:function(e,t,n){"use strict";var r,a,o=n("vZIR");n("Qfp6");e.exports=function(e){var t="",n=Math.floor(.001*(Date.now()-1567752802062));return n===a?r++:(r=0,a=n),t+=o(7),t+=o(e),r>0&&(t+=o(r)),t+=o(n)}},Qfp6:function(e,t,n){"use strict";var r,a,o,i=n("fqyn"),s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function c(){o=!1}function u(e){if(e){if(e!==r){if(e.length!==s.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter((function(e,t,n){return t!==n.lastIndexOf(e)}));if(t.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. These characters were not unique: "+t.join(", "));r=e,c()}}else r!==s&&(r=s,c())}function l(){return o||(o=function(){r||u(s);for(var e,t=r.split(""),n=[],a=i.nextValue();t.length>0;)a=i.nextValue(),e=Math.floor(a*t.length),n.push(t.splice(e,1)[0]);return n.join("")}())}e.exports={get:function(){return r||s},characters:function(e){return u(e),r},seed:function(e){i.seed(e),a!==e&&(c(),a=e)},lookup:function(e){return l()[e]},shuffled:l}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("Bl7J"),i=n("vrFN"),s=n("Wbzz"),c=n("1eu9"),u=n.n(c),l=n("vOnD"),p=n("/eHF"),d=n.n(p),f=(n("j/HY"),n("NO0K"),Object(l.a)(u.a).withConfig({displayName:"header__BackgroundImageWrapper",componentId:"zdwwlg-0"})(["min-height:90vh;background-attachment:fixed;display:flex;justify-content:center;align-items:center;::before{filter:brightness(60%);}"]),l.a.div.withConfig({displayName:"header__TextWrapper",componentId:"zdwwlg-1"})(["font-size:20px;color:white;height:200px;text-align:center;"]),l.a.p.withConfig({displayName:"header__SiteName",componentId:"zdwwlg-2"})(['font-family:"Oswald","sans serif";font-size:60px;']),n("9eSz")),h=n.n(f),m=(n("8+j9"),l.a.section.withConfig({displayName:"about__SectionWrapper",componentId:"deejg-0"})(["display:block;width:80vw;margin:auto;padding:100px 0;"])),g=l.a.div.withConfig({displayName:"about__FlexBox",componentId:"deejg-1"})(["display:flex;width:100%;flex-wrap:wrap;"]),y=Object(l.a)(h.a).withConfig({displayName:"about__ImageComponent",componentId:"deejg-2"})(["display:block;margin:0 auto;width:200px;"]),v=l.a.div.withConfig({displayName:"about__ImageWrapper",componentId:"deejg-3"})(["margin:20px auto;"]),w=l.a.div.withConfig({displayName:"about__TextWrapper",componentId:"deejg-4"})(["margin:10px auto 0px auto;width:40vw;height:auto;display:flex;flex-direction:column;justify-content:center;@media (max-width:976px){width:100%;}"]),x=l.a.h3.withConfig({displayName:"about__HeaderWrapper",componentId:"deejg-5"})(["text-align:center;font-size:24px;margin-top:-30px;@media (max-width:976px){margin-top:0px;}"]),b=l.a.div.withConfig({displayName:"about__Description",componentId:"deejg-6"})(["font-size:17px;margin-top:15px;text-align:justify;"]),k=function(){var e=Object(s.useStaticQuery)("219256891");return a.a.createElement(m,{id:"about"},a.a.createElement(d.a,{bottom:!0},a.a.createElement(g,null,a.a.createElement(v,null,a.a.createElement(y,{fluid:e.favicon.childImageSharp.fluid})),a.a.createElement(w,null,a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(x,null,e.site.siteMetadata.description),a.a.createElement(b,null,a.a.createElement("br",null),a.a.createElement("br",null),"I'm a senior at MIT studying computer science. Some fun facts about me include:",a.a.createElement("ul",null,a.a.createElement("li",null,"My favorite color is purple!"),a.a.createElement("li",null,"I love walks with good music or good conversations:)"),a.a.createElement("li",null,"I'm right-handed, but I can throw a ball better and can write decently with my left!")),a.a.createElement("br",null),a.a.createElement("br",null))))))};n("E9XD"),l.a.div.withConfig({displayName:"project__Wrapper",componentId:"sc-13025x7-0"})(["width:400px;margin:5px;display:inline-block;background-color:white;@media (max-width:600px){margin:5px auto;width:100%;}@media (max-width:976px){height:auto;}vertical-align:top;height:520px;"]),Object(l.a)(h.a).withConfig({displayName:"project__ImageComponent",componentId:"sc-13025x7-1"})(["display:block;margin:0 auto;width:100%;:hover{filter:brightness(60%);-webkit-transition:all 0.5s ease-in-out;}"]),l.a.div.withConfig({displayName:"project__ProjectWrapper",componentId:"sc-13025x7-2"})(["margin:auto;width:auto;padding:20px;"]),l.a.span.withConfig({displayName:"project__Title",componentId:"sc-13025x7-3"})(["float:left;font-weight:bold;a{color:black;}a:hover{color:purple;}"]),l.a.span.withConfig({displayName:"project__Date",componentId:"sc-13025x7-4"})(["float:right;color:purple;font-size:13px;"]),l.a.div.withConfig({displayName:"project__Caption",componentId:"sc-13025x7-5"})(["clear:both;text-align:left;font-style:italic;font-size:13px;"]),l.a.div.withConfig({displayName:"project__Description",componentId:"sc-13025x7-6"})(["text-align:justify;margin:10px 0;a:hover{color:#a9a9a9;}"]),l.a.div.withConfig({displayName:"project__Technologies",componentId:"sc-13025x7-7"})(["text-align:left;font-size:13px;"]),n("tyPb"),l.a.div.withConfig({displayName:"projects__SectionWrapper",componentId:"sc-1hv4can-0"})(["background-color:#eeeeee;padding:100px 7vw;"]),l.a.h3.withConfig({displayName:"projects__HeaderWrapper",componentId:"sc-1hv4can-1"})(["text-align:center;font-size:35px;"]),l.a.div.withConfig({displayName:"projects__ProjectsLinkWrapper",componentId:"sc-1hv4can-2"})(["text-align:center;"]),l.a.div.withConfig({displayName:"projects__ProjectWrapper",componentId:"sc-1hv4can-3"})(["margin:30px auto 0px auto;display:block;text-align:center;"]),n("jcFm"),n("V229"),l.a.section.withConfig({displayName:"courses__SectionWrapper",componentId:"vkxck3-0"})(["display:block;width:80vw;margin:auto;padding:100px 0;"]),l.a.div.withConfig({displayName:"courses__Column",componentId:"vkxck3-1"})(["display:inline-block;width:49.5%;vertical-align:top;@media (max-width:750px){width:100%;}"]),l.a.h3.withConfig({displayName:"courses__HeaderWrapper",componentId:"vkxck3-2"})(["text-align:center;font-size:35px;"]),l.a.div.withConfig({displayName:"courses__Wrapper",componentId:"vkxck3-3"})([""]),l.a.div.withConfig({displayName:"courses__TermWrapper",componentId:"vkxck3-4"})(["font-size:25px;font-weight:bold;margin:20px 0px 0px 0px;"]),l.a.div.withConfig({displayName:"courses__CoursesWrapper",componentId:"vkxck3-5"})(["margin:5px 0px;"]),l.a.div.withConfig({displayName:"courses__CourseWrapper",componentId:"vkxck3-6"})(["font-size:15px;"]),l.a.span.withConfig({displayName:"courses__CourseNumber",componentId:"vkxck3-7"})(['font-weight:bold;:after{content:": ";}']),l.a.span.withConfig({displayName:"courses__CourseName",componentId:"vkxck3-8"})(['font-weight:normal;:after{content:" ";}']),l.a.span.withConfig({displayName:"courses__CourseLanguage",componentId:"vkxck3-9"})(['font-size:10px;:before{content:"(";}:after{content:")";}']),l.a.div.withConfig({displayName:"courses__ActivityWrapper",componentId:"vkxck3-10"})(["margin:5px 0px;font-size:15px;"]),l.a.span.withConfig({displayName:"courses__ActivityName",componentId:"vkxck3-11"})(['font-weight:bold;:after{content:": ";}']),l.a.span.withConfig({displayName:"courses__ActivityDescription",componentId:"vkxck3-12"})(["font-weight:normal;"]),t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(i.a,{title:"Hi!"}),a.a.createElement("div",{style:{margin:"75px"}}),a.a.createElement(k,null))}},V229:function(e){e.exports=JSON.parse('[{"section":"Undergraduate","activities":[{"activity":"Lab Assistant for Fundamentals of Programming (6.009)","description":"Dedicated six hours of office hours every week to help students debug, design, and document code in their labs involving data structures, algorithmic design, and optimization."},{"activity":"Undergraduate Student Opportunities Program (UROP)","description":"Research at CSAIL (Vision Group) using machine learning techniques to help convert food images to recipes and back."},{"activity":"TechTogether Boston","description":"Boston\'s largest female, femme, and non-binary hackathon! I\'m on the Tech Team, where I\'m helping build the <a href=\'http://boston.techtogether.io/\' target=\'_blank\'>2020 virtual hackathon website</a>."},{"activity":"Rewriting the Code Fellowship","description":"A community of female and non-binary undergraduate and masters students studying computer science / engineering who are interested in industry experience in tech."},{"temp":"MIT TechX","description":""},{"activity":"MIT CodeIt","description":"An educational outreach program that introduces female and non-binary middle school students to computer science. We help with any CS questions they may have and serve as mentors + role models :)"},{"activity":"First Generation + Low Income Program","description":"Mentoring a first year first generation low income student!"},{"temp":"A multi-college student-run organization whose mission is to advocate for health equity and social justice in a global context. I\'m part of the Events Team, where I help plan one large event/conference a semester to raise awareness and fundraise."}]},{"section":"Technical Programs","activities":[{"activity":"Google CSSI-Coursera (2019)","description":"An invite-only online Google CSSI program through Coursera. As part of Google\'s Data Structures and Algorithms curriculum, I took the Algorithmic Toolbox course (divide and conquer techniques, greedy algorithms, dynamic programming)."},{"activity":"MIT Beaverworks Summer Institute (2018)","description":"A six month online course followed by four weeks on MIT campus exploring the intersection of data science and health through machine learning. We worked in groups alongside Cambridge-area clinicians and data scientists to gain hands-on experience applying advanced machine learning and data mining techniques to solve real-world medical challenges."},{"activity":"Girls Who Code Summer Immersion Program (2017)","description":"A seven week summer program introducing girls to computer science."}]}]')},XVVG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n("q1tI"),o=(r=a)&&r.__esModule?r:{default:r};var i=function(){return o.default.createElement("noscript",null)};i.updateCursor=function(e,t){var n=t.ms;return Object.assign({},e,{delay:e.delay+n})},i.getName=function(){return"Delay"},t.default=i},bQgK:function(e,t,n){(function(t){(function(){var n,r,a,o,i,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-i)/1e6},r=t.hrtime,o=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),s=1e9*t.uptime(),i=o-s):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(this,n("8oxB"))},cSMa:function(e,t,n){var r=function(){return this}()||Function("return this")(),a=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,o=a&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,e.exports=n("u4eC"),a)r.regeneratorRuntime=o;else try{delete r.regeneratorRuntime}catch(i){r.regeneratorRuntime=void 0}},fqyn:function(e,t,n){"use strict";var r=1;e.exports={nextValue:function(){return(r=(9301*r+49297)%233280)/233280},seed:function(e){r=e}}},"j/HY":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Speed=t.Reset=t.Delay=t.Cursor=t.Backspace=void 0;var r=n("plls");Object.defineProperty(t,"Backspace",{enumerable:!0,get:function(){return u(r).default}});var a=n("3BOr");Object.defineProperty(t,"Cursor",{enumerable:!0,get:function(){return u(a).default}});var o=n("XVVG");Object.defineProperty(t,"Delay",{enumerable:!0,get:function(){return u(o).default}});var i=n("G8ry");Object.defineProperty(t,"Reset",{enumerable:!0,get:function(){return u(i).default}});var s=n("LJc4");Object.defineProperty(t,"Speed",{enumerable:!0,get:function(){return u(s).default}});var c=u(n("xVvY"));function u(e){return e&&e.__esModule?e:{default:e}}t.default=c.default},jcFm:function(e){e.exports=JSON.parse('[{"term":"Fall 2020","courses":[["6.006","Introduction to Algorithms"],["6.036","Introduction to Machine Learning","Python"],["6.004","Computation Structures","Assembly / RISC-V"],["11.074","Cybersecurity Clinic"],["21W.755","Writing and Reading Short Stories"]]},{"term":"Spring 2020","courses":[["6.009","Fundamentals of Programming","Python"],["6.042","Mathematics of Programming"],["14.01","Principles of Microeconomics"],["8.02","Physics II: Electricity and Magnetism"]]},{"term":"IAP 2020","courses":[["6.145","Introduction to Python","Python"]]},{"term":"Fall 2019","courses":[["18.02","Multivariable Calculus"],["5.111","Principles of Chemical Science"],["7.012","Introduction to Biology"],["24.02","Moral Problems and the Good Life"]]},{"term":"High School","courses":[["","App Development","Android Studio"],["","AP Computer Science (5)","Java"],["","Introduction to Programming","Python"]]}]')},je4i:function(e,t,n){"use strict";e.exports=n("Bpvx")},n8Jw:function(e,t,n){"use strict";e.exports=0},orcf:function(e,t,n){"use strict";n("E9XD"),Object.defineProperty(t,"__esModule",{value:!0}),t.getCircularReplacer=t.replaceTreeText=t.extractText=t.randomize=t.gaussianRandomInRange=t.randomInRange=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=n("q1tI"),o=s(a),i=s(n("je4i"));function s(e){return e&&e.__esModule?e:{default:e}}var c=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],u=function e(t){return t.reduce((function(t,n){return t.concat(Array.isArray(n)?a.Children.toArray(e(n)):a.Children.toArray(n))}),[])},l=function(e){return e.filter((function(e){return void 0!==e}))},p=function(e){return["Backspace","Delay","Speed","Reset"].some((function(t){return e.type&&e.type.getName&&e.type.getName()===t}))},d=t.randomInRange=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},f=t.gaussianRandomInRange=function(e,t){for(var n=d(e,t),r=0;r<5;r++)n+=d(e,t);return Math.floor(n/6)};t.randomize=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.2;return f(e+e*t,e-e*t)},t.extractText=function(){var e=function e(t){return p(t)?t:o.default.isValidElement(t)?-1!==c.indexOf(t.type)?"\n":a.Children.map(t.props.children,(function(t){return e(t)})):Array.isArray(t)?t.map((function(t){return e(t)})):String(t)},t=e.apply(void 0,arguments);return Array.isArray(t)?l(u(t)):l([t])},t.replaceTreeText=function(e,t,n,r){return function e(t,s){if(!(s.length<1||p(t)))return o.default.isValidElement(t)?-1!==c.indexOf(t.type)?1===s.length?a.Children.toArray([""===s.shift()?void 0:t,r?null:n]):""===s.shift()?void 0:t:o.default.createElement(t.type,Object.assign({},t.props,{key:t.key||"Typing."+i.default.generate()}),l(a.Children.toArray(t.props.children).map((function(t){return e(t,s)})))):Array.isArray(t)?l(t.map((function(t){return e(t,s)}))):1===s.length?a.Children.toArray([s.shift(),r?null:n]):s.shift()||""}(e,t.slice())},t.getCircularReplacer=function(){var e=new WeakSet;return function(t,n){if("object"===(void 0===n?"undefined":r(n))&&null!==n){if(e.has(n))return;try{e.add(n)}catch(a){}}return n}}},plls:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n("q1tI"),o=(r=a)&&r.__esModule?r:{default:r};var i=function(){return o.default.createElement("noscript",null)};i.updateCursor=function(e,t){var n=t.speed,r=t.count,a=t.delay;return Object.assign({},e,{numToErase:r,preEraseLineNum:e.lineNum,speed:n>0?n:e.speed,delay:a>0?e.delay+a:e.delay})},i.getName=function(){return"Backspace"},t.default=i},tyPb:function(e){e.exports=JSON.parse('[{"id":"personalwebsite","date":"constantly updating","title":"Personal Website + Blog","image":"PersonWebsite.jpg","link":"/","description":"The site you are looking at right now! It was originally <a href=\'https://github.com/liua13/Blog/tree/version1\' target=\'_blank\'>built using Jekyll</a> but I <a href=\'https://github.com/liua13/Blog/tree/version2\' target=\'_blank\'>rebuilt it with Gatsby + React</a> during quarantine to make my website load faster and make it easier to develop more features for my blog. Enjoy my drawing of myself — but please, don\'t comment on the teeth.","technologies":"Gatsby, React, GraphQL"},{"id":"chatapp","date":"aug 2020 - now","title":"Real Time Chat App","image":"ChatApp.jpg","link":"https://github.com/liua13/private_messaging","description":"A multi-person real-time private messaging chat application. A registered user can send messages privately to any user who is also registered and the recipient receives the message in real time if they are logged in. Works like any messaging chat application (iMessage, Messenger, etc).","technologies":"Node, Jinja, PostgreSQL, Socket.io"},{"id":"lyricalnotes","date":"jul 2020","title":"Lyrical Notes","image":"LyricalNotes.png","link":"https://lyrical-notes.herokuapp.com/","description":"A guessing game from listening to a 30 second preview of a song from Spotify","technologies":"Node, React, Spotify Web API"},{"id":"mappingproject","date":"jun 2020","title":"Mapping Visualization","image":"Mapping.png","caption":"Internship @ Kupenda for the Children","link":"https://mapping-vis.herokuapp.com/","description":"An interactive map with a filter based on user-selected properties and a feature that allows the user to find the closest facilities from any marker. <a class=\'link\' href=\'https://mapping-vis.herokuapp.com/\'>Demo with mock data</a>","technologies":"Leaflet, Node"},{"id":"creativelearning","date":"jan - may 2020","title":"Creative Learning Tool","image":"CreativeLearning.jpg","caption":"UROP @ MIT Media Lab (Lifelong Kindergarten Group)","link":"https://www.media.mit.edu/groups/lifelong-kindergarten/overview/","description":"A creative learning tool to help educators/teachers lesson plan in a more creative and interactive way, since current tools do not address the issues that they face.","technologies":"HTML, CSS, Javascript (jQuery, Node.js, EJS), MongoDB, Mongoose"},{"id":"openstreets","date":"jan 2020","title":"Open Streets","image":"OpenStreets.jpg","link":"https://github.com/liua13/OpenStreets","caption":"MLH Best Use of MongoDB Winner @ TechTogether Boston Hackathon","description":"A crowdsourcing platform that promotes more clean, connected, and collaborative communities by allowing users to post issues on a map, share details, and automatically update the dates and addresses of the posts.","technologies":"HTML, CSS, Javascript (jQuery, Node.js, EJS, Leaflet.js), Nominatim, MongoDB, Mongoose"},{"id":"proteinresearch","date":"nov 2018","title":"Machine Learning Research","image":"Regeneron.jpg","link":"https://sspcdn.blob.core.windows.net/files/Documents/SEP/STS/2019/STS%202019%20Scholar%20Book.pdf#page=15","caption":"Regeneron STS Scholar (formerly Intel Science Talent Search Semifinalist)","description":"A machine learning model to predict the locations of proteins using image processing, ensemble learning, and CNNs; aimed at drug repurposing for protein dysfunctional diseases (cancer, asthma, Alzheimer\'s, etc). I submitted a 14 page research paper to Regeneron STS 2019 (formerly <i>Intel Science Talent Search Semifinalist</i>) and was named one of the 300 Scholars out of 1,964 total entrants.","technologies":"Python (Scikit-learn, TensorFlow, Keras)"}]')},u4eC:function(e,t){!function(t){"use strict";var n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",c="object"==typeof e,u=t.regeneratorRuntime;if(u)c&&(e.exports=u);else{(u=t.regeneratorRuntime=c?e.exports:{}).wrap=m;var l={},p={};p[o]=function(){return this};var d=Object.getPrototypeOf,f=d&&d(d(C([])));f&&f!==n&&r.call(f,o)&&(p=f);var h=w.prototype=y.prototype=Object.create(p);v.prototype=h.constructor=w,w.constructor=v,w[s]=v.displayName="GeneratorFunction",u.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,w):(e.__proto__=w,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(h),e},u.awrap=function(e){return{__await:e}},x(b.prototype),b.prototype[i]=function(){return this},u.AsyncIterator=b,u.async=function(e,t,n,r){var a=new b(m(e,t,n,r));return u.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(h),h[s]="Generator",h[o]=function(){return this},h.toString=function(){return"[object Generator]"},u.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=C,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:C(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}}}function m(e,t,n,r){var a=t&&t.prototype instanceof y?t:y,o=Object.create(a.prototype),i=new S(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return j()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=k(i,n);if(s){if(s===l)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=g(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,i),o}function g(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(r){return{type:"throw",arg:r}}}function y(){}function v(){}function w(){}function x(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function b(e){var t;this._invoke=function(n,a){function o(){return new Promise((function(t,o){!function t(n,a,o,i){var s=g(e[n],e,a);if("throw"!==s.type){var c=s.arg,u=c.value;return u&&"object"==typeof u&&r.call(u,"__await")?Promise.resolve(u.__await).then((function(e){t("next",e,o,i)}),(function(e){t("throw",e,o,i)})):Promise.resolve(u).then((function(e){c.value=e,o(c)}),i)}i(s.arg)}(n,a,t,o)}))}return t=t?t.then(o,o):o()}}function k(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=g(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,l;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function C(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}}(function(){return this}()||Function("return this")())},vZIR:function(e,t,n){"use strict";var r=n("Qfp6"),a=n("CR0S"),o=n("5R+2");e.exports=function(e){for(var t,n=0,i="";!t;)i+=o(a,r.get(),1),t=e<Math.pow(16,n+1),n++;return i}},xEkU:function(e,t,n){(function(t){for(var r=n("bQgK"),a="undefined"==typeof window?t:window,o=["moz","webkit"],i="AnimationFrame",s=a["request"+i],c=a["cancel"+i]||a["cancelRequest"+i],u=0;!s&&u<o.length;u++)s=a[o[u]+"Request"+i],c=a[o[u]+"Cancel"+i]||a[o[u]+"CancelRequest"+i];if(!s||!c){var l=0,p=0,d=[];s=function(e){if(0===d.length){var t=r(),n=Math.max(0,1e3/60-(t-l));l=n+t,setTimeout((function(){var e=d.slice(0);d.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(n){setTimeout((function(){throw n}),0)}}),Math.round(n))}return d.push({handle:++p,callback:e,cancelled:!1}),p},c=function(e){for(var t=0;t<d.length;t++)d[t].handle===e&&(d[t].cancelled=!0)}}e.exports=function(e){return s.call(a,e)},e.exports.cancel=function(){c.apply(a,arguments)},e.exports.polyfill=function(e){e||(e=a),e.requestAnimationFrame=s,e.cancelAnimationFrame=c}}).call(this,n("yLpj"))},xVvY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=m(n("14Xm")),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n("q1tI"),i=m(o),s=m(n("17x9")),c=m(n("xEkU")),u=n("orcf"),l=m(n("plls")),p=m(n("G8ry")),d=m(n("XVVG")),f=m(n("LJc4")),h=m(n("3BOr"));function m(e){return e&&e.__esModule?e:{default:e}}function g(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function y(e){return function(){var t=e.apply(this,arguments);return new Promise((function(e,n){return function r(a,o){try{var i=t[a](o),s=i.value}catch(c){return void n(c)}if(!i.done)return Promise.resolve(s).then((function(e){r("next",e)}),(function(e){r("throw",e)}));e(s)}("next")}))}}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var x=function(e){function t(){var e,n,a,o,i=this;v(this,t);for(var s=arguments.length,c=Array(s),l=0;l<s;l++)c[l]=arguments[l];return n=a=w(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.state={isFinished:!1,text:[]},a.updateState=(o=y(r.default.mark((function e(t){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.hasMounted){e.next=2;break}return e.abrupt("return",new Promise((function(e){a.setState(t,e)})));case 2:case"end":return e.stop()}}),e,i)}))),function(e){return o.apply(this,arguments)}),a.resetState=y(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",a.updateState({toType:(0,u.extractText)(a.props.children),cursor:{lineNum:0,charPos:0,numToErase:0,preEraseLineNum:0,delay:a.props.startDelay,speed:a.props.speed,step:"char"}}));case 1:case"end":return e.stop()}}),e,i)}))),a.beginTyping=y(r.default.mark((function e(){var t;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object.assign({},a.state.cursor),!(a.state.toType.length>0||t.numToErase>0)){e.next=10;break}return e.next=4,a.props.onBeforeType(a.state.text);case 4:return e.next=6,a.type();case 6:return e.next=8,a.props.onAfterType(a.state.text);case 8:e.next=18;break;case 10:return e.next=12,a.props.onFinishedTyping();case 12:if(!a.props.loop){e.next=17;break}return e.next=15,a.resetState();case 15:e.next=18;break;case 17:return e.abrupt("return",a.updateState({isFinished:!0}));case 18:if(!a.hasMounted){e.next=20;break}return e.abrupt("return",a.beginTyping());case 20:case"end":return e.stop()}}),e,i)}))),a.type=y(r.default.mark((function e(){var t,n;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[].concat(g(a.state.toType)),n=Object.assign({},a.state.cursor);t&&t[0]&&t[0].type&&t[0].type.updateCursor&&n.numToErase<1;)n=t[0].type.updateCursor(n,t[0].props),t.shift();return e.next=5,a.updateState({cursor:n,toType:t});case 5:return e.abrupt("return",a.animateNextStep());case 6:case"end":return e.stop()}}),e,i)}))),a.animateNextStep=y(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout(y(r.default.mark((function t(){var n,o,s;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.state,o=n.cursor,s=n.toType,t.next=3,a.updateState({cursor:Object.assign({},o,{delay:0})});case 3:if(!("char"===o.step&&o.numToErase<1)){t.next=9;break}if(!(s.length>0)){t.next=7;break}return t.next=7,a.typeCharacter();case 7:t.next=11;break;case 9:return t.next=11,a.erase();case 11:e();case 12:case"end":return t.stop()}}),t,i)}))),a.state.cursor.delay)})));case 1:case"end":return e.stop()}}),e,i)}))),a.typeCharacter=y(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=y(r.default.mark((function e(t){var n,o,s;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[].concat(g(a.state.toType)),o=[].concat(g(a.state.text)),s=Object.assign({},a.state.cursor),o.length-1<s.lineNum&&(o[s.lineNum]=""),o[s.lineNum]+=n[0][s.charPos],s.charPos+=1,n[0].length-1<s.charPos&&(s.lineNum+=1,s.charPos=0,n.shift()),e.next=9,a.updateState({cursor:s,text:o,toType:n});case 9:setTimeout(t,(0,u.randomize)(s.speed));case 10:case"end":return e.stop()}}),e,i)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,i)}))),a.erase=y(r.default.mark((function e(){return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=y(r.default.mark((function e(t){var n,o;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[].concat(g(a.state.text)),o=Object.assign({},a.state.cursor);case 2:if(!(o.lineNum>n.length-1||o.charPos<0)){e.next=9;break}if(o.lineNum-=1,!(o.lineNum<0)){e.next=6;break}return e.abrupt("break",9);case 6:o.charPos=n[o.lineNum].length?n[o.lineNum].length-1:0,e.next=2;break;case 9:return"char"===o.step&&o.lineNum>=0?n[o.lineNum]=n[o.lineNum].substr(0,n[o.lineNum].length-1):o.numToErase>0?n[o.lineNum]="":n.length=0,o.charPos-=1,o.numToErase-=1,o.numToErase<1&&(o.lineNum=o.preEraseLineNum,o.charPos=0,o.step="char"),e.next=15,a.updateState({cursor:o,text:n});case 15:setTimeout(t,(0,u.randomize)(o.speed));case 16:case"end":return e.stop()}}),e,i)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,i)}))),w(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.children;void 0!==t&&JSON.stringify(t,(0,u.getCircularReplacer)())!==JSON.stringify(e.children,(0,u.getCircularReplacer)())&&this.resetState()}},{key:"componentDidMount",value:function(){var e=this;this.hasMounted=!0,this.resetState().then(y(r.default.mark((function t(){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.onStartedTyping();case 2:(0,c.default)(e.beginTyping);case 3:case"end":return t.stop()}}),t,e)}))))}},{key:"componentWillUnmount",value:function(){this.hasMounted=!1}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.cursorClassName,a=e.hideCursor,o=this.state,s=o.isFinished,c=o.text,l=this.props.cursor||i.default.createElement(h.default,{className:r}),p=(0,u.replaceTreeText)(t,c,l,s||a);return i.default.createElement("div",{className:n},p)}}]),t}(o.Component);x.propTypes={children:s.default.node.isRequired,className:s.default.string,cursor:s.default.node,cursorClassName:s.default.string,speed:s.default.number,startDelay:s.default.number,loop:s.default.bool,onStartedTyping:s.default.func,onBeforeType:s.default.func,onAfterType:s.default.func,onFinishedTyping:s.default.func},x.defaultProps={className:"",cursorClassName:"",speed:50,startDelay:0,loop:!1,onStartedTyping:function(){},onBeforeType:function(){},onAfterType:function(){},onFinishedTyping:function(){}},x.Backspace=l.default,x.Reset=p.default,x.Delay=d.default,x.Speed=f.default,x.Cursor=h.default,t.default=x}}]);
//# sourceMappingURL=component---src-pages-index-js-8c2b09ee5ab8fcd783f0.js.map