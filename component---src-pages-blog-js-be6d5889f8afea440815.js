(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+Em6":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),o=a("9eSz"),l=a.n(o),r=a("vOnD"),p=a("/eHF"),d=a.n(p),s=a("8+j9"),c=r.a.div.withConfig({displayName:"stub__Wrapper",componentId:"sc-1d0uq3y-0"})(["margin:30px auto;clear:left;display:block;width:800px;overflow:hidden;background-color:white;border-radius:20px;@media (max-width:850px){width:85%;}"]),u=r.a.div.withConfig({displayName:"stub__ImageWrapper",componentId:"sc-1d0uq3y-1"})(["float:left;width:39%;:hover{filter:brightness(60%);-webkit-transition:all 0.5s ease-in-out;}@media (max-width:850px){width:100%;}"]),m=Object(r.a)(l.a).withConfig({displayName:"stub__ImageComponent",componentId:"sc-1d0uq3y-2"})(["width:100%;border-radius:20px 0 0 20px;@media (max-width:850px){border-radius:20px 20px 0 0;}"]),g=r.a.div.withConfig({displayName:"stub__TextWrapper",componentId:"sc-1d0uq3y-3"})(["margin:auto;width:55%;display:inline-block;padding:20px 3%;@media (max-width:850px){padding:20px 20px;width:90%;}"]),f=r.a.span.withConfig({displayName:"stub__Category",componentId:"sc-1d0uq3y-4"})(["text-transform:uppercase;font-size:15px;a{color:purple;}a:hover{color:#a9a9a9;}"]),x=r.a.span.withConfig({displayName:"stub__Title",componentId:"sc-1d0uq3y-5"})(["margin:5px 0px 10px 0px;font-size:30px;display:block;a{color:black;}a:hover{color:purple;}"]),b=r.a.span.withConfig({displayName:"stub__Subtitle",componentId:"sc-1d0uq3y-6"})(["display:block;font-size:17px;margin:0px 0px 15px 0px;"]),y=r.a.span.withConfig({displayName:"stub__Date",componentId:"sc-1d0uq3y-7"})(['display:block;font-size:14px;font-family:"Barlow",sans-serif;']);t.a=function(e){var t=e.slug,a=e.title,n=e.date,o=e.subtitle,l=e.image,r=(e.caption,e.categories);return i.a.createElement(d.a,{bottom:!0},i.a.createElement(c,null,i.a.createElement(u,null,i.a.createElement(s.a,{to:"/post"+t},i.a.createElement(m,{fluid:l}))),i.a.createElement(g,null,r.map((function(e,t){return i.a.createElement(f,{key:e},t?", ":"",i.a.createElement(s.a,{to:"/category/"+e+"/"},e))})),i.a.createElement(x,null,i.a.createElement(s.a,{to:"/post"+t},a)),i.a.createElement(b,null,o),i.a.createElement(y,null,n))))}},vx99:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),o=a("Bl7J"),l=a("vrFN"),r=a("Wbzz"),p=a("vOnD"),d=a("+Em6"),s=p.a.div.withConfig({displayName:"blog__BlogWrapper",componentId:"uubyus-0"})(["padding:125px 0 100px 0;background-color:#eeeeee;"]),c=p.a.div.withConfig({displayName:"blog__BlogText",componentId:"uubyus-1"})(['text-align:center;font-size:40px;font-family:"Barlow",sans-serif;text-transform:uppercase;']),u=function(){var e=Object(r.useStaticQuery)("1786268740");return i.a.createElement(s,null,i.a.createElement("div",{style:{textAlign:"center"}},"welcome to"),i.a.createElement(c,null,"My blog"),e.posts.edges.map((function(t){var a=t.node.frontmatter,n=e.images.edges.find((function(e){return e.node.childImageSharp.fluid.originalName===a.image}));return i.a.createElement(d.a,{slug:t.node.fields.slug,key:a.title,title:a.title,date:a.date,subtitle:a.subtitle,image:n.node.childImageSharp.fluid,caption:a.caption,categories:a.categories})})))};t.default=function(){return i.a.createElement(o.a,null,i.a.createElement(l.a,{title:"Blog"}),i.a.createElement(u,null))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-be6d5889f8afea440815.js.map