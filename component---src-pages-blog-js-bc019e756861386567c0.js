(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+Em6":function(n,e,t){"use strict";var a=t("MUpH"),r=t("q1tI"),i=t.n(r),o=t("9eSz"),l=t.n(o),c=t("vOnD"),u=t("/eHF"),p=t.n(u),d=t("8+j9");function s(){var n=Object(a.a)(['\n  display: block;\n  font-size: 14px;\n  font-family: "Barlow", sans-serif;\n']);return s=function(){return n},n}function f(){var n=Object(a.a)(["\n  display: block;\n  font-size: 17px;\n  margin: 0px 0px 15px 0px;\n"]);return f=function(){return n},n}function m(){var n=Object(a.a)(["\n  margin: 5px 0px 10px 0px;\n  font-size: 30px;\n  display: block;\n\n  a {\n    color: black;\n  }\n\n  a:hover {\n    color: purple;\n  }\n"]);return m=function(){return n},n}function x(){var n=Object(a.a)(["\n  text-transform: uppercase;\n  font-size: 15px;\n\n  a {\n    color: purple;\n  }\n\n  a:hover {\n    color: #a9a9a9;\n  }\n"]);return x=function(){return n},n}function b(){var n=Object(a.a)(["\n  margin: auto;\n  width: 55%;\n  display: inline-block;\n  padding: 20px 3%;\n  @media (max-width: 850px) {\n    padding: 20px 20px;\n    width: 90%;\n  }\n"]);return b=function(){return n},n}function v(){var n=Object(a.a)(["\n  width: 100%;\n  border-radius: 20px 0 0 20px;\n  @media (max-width: 850px) {\n    border-radius: 20px 20px 0 0;\n  }\n"]);return v=function(){return n},n}function g(){var n=Object(a.a)(["\n  float: left;\n  width: 39%;\n\n  :hover {\n    filter: brightness(60%);\n    -webkit-transition: all 0.5s ease-in-out;\n  }\n\n  @media (max-width: 850px) {\n    width: 100%;\n  }\n"]);return g=function(){return n},n}function w(){var n=Object(a.a)(["\n  margin: 30px auto;\n  clear: left;\n  display: block;\n  width: 800px;\n  overflow: hidden;\n  background-color: white;\n  border-radius: 20px;\n\n  @media (max-width: 850px) {\n    width: 85%;\n  }\n"]);return w=function(){return n},n}var h=c.a.div(w()),E=c.a.div(g()),O=Object(c.a)(l.a)(v()),j=c.a.div(b()),k=c.a.span(x()),y=c.a.span(m()),z=c.a.span(f()),B=c.a.span(s());e.a=function(n){var e=n.slug,t=n.title,a=n.date,r=n.subtitle,o=n.image,l=(n.caption,n.categories);return i.a.createElement(p.a,{bottom:!0},i.a.createElement(h,null,i.a.createElement(E,null,i.a.createElement(d.a,{to:"/post"+e},i.a.createElement(O,{fluid:o}))),i.a.createElement(j,null,l.map((function(n,e){return i.a.createElement(k,{key:n},e?", ":"",i.a.createElement(d.a,{to:"/category/"+n+"/"},n))})),i.a.createElement(y,null,i.a.createElement(d.a,{to:"/post"+e},t)),i.a.createElement(z,null,r),i.a.createElement(B,null,a))))}},vx99:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),r=t.n(a),i=t("Bl7J"),o=t("vrFN"),l=t("MUpH"),c=t("Wbzz"),u=t("vOnD"),p=t("+Em6");function d(){var n=Object(l.a)(['\n  text-align: center;\n  font-size: 40px;\n  font-family: "Barlow", sans-serif;\n  text-transform: uppercase;\n']);return d=function(){return n},n}function s(){var n=Object(l.a)(["\n  padding: 125px 0 100px 0;\n  background-color: #eeeeee;\n"]);return s=function(){return n},n}var f=u.a.div(s()),m=u.a.div(d()),x=function(){var n=Object(c.useStaticQuery)("1786268740");return r.a.createElement(f,null,r.a.createElement("div",{style:{textAlign:"center"}},"welcome to"),r.a.createElement(m,null,"My blog"),n.posts.edges.map((function(e){var t=e.node.frontmatter,a=n.images.edges.find((function(n){return n.node.childImageSharp.fluid.originalName===t.image}));return r.a.createElement(p.a,{slug:e.node.fields.slug,key:t.title,title:t.title,date:t.date,subtitle:t.subtitle,image:a.node.childImageSharp.fluid,caption:t.caption,categories:t.categories})})))};e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Blog"}),r.a.createElement(x,null))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-bc019e756861386567c0.js.map