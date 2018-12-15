(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{135:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(142),o=a(139);t.default=function(){return i.a.createElement(r.a,null,i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist. Please return ",i.a.createElement(o.Link,{to:"/",style:{color:"#4DB39A"}},"home")," "))}},139:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return d});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),c=a(138),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(140),p=a.n(l);a.d(t,"PageRenderer",function(){return p.a});var m=a(35);a.d(t,"parsePath",function(){return m.a});var u=i.a.createContext({}),d=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},140:function(e,t,a){var n;e.exports=(n=a(144))&&n.default||n},141:function(e,t,a){"use strict";var n=a(145),i=a.n(n),r={siteTitle:"Chiamaka Ikeanyi",siteURL:"http://chiamakaikeanyi.netlify.com",tagline:"Chiamaka Ikeanyi | Software Engineer",profilePic:i.a,description:"Chiamaka Ikeanyi is a Software Engineer based in Lagos, Nigeria. She builds solutions with great user experience using best practices. She is a Front-end Engineer at Konga Online Shopping where she collaborate with awesome engineers to build amazing products for a huge customer base. In addition to her development work, Chiamaka is a technical writer and editor at Facebook Developer Circles Lagos and freeCodeCamp. She also writes musings on Poesie",keywords:"chiamaka ikeanyi, chiamakaikeanyi, software engineer, software engineering, front-end engineer, discurva, women in tech, code, programming, women, tech, javascript, html, css, technical writer",themeColor:"#4DB39A",twitterCardType:"summary_large_image",siteOgType:"website",author:"Chiamaka Ikeanyi",authorProfilePic:i.a,twitterHandle:"@chiamakaikeanyi",linkedIn:"https://www.linkedin.com/in/chiamakaikeanyi",github:"https://github.com/chiamakaikeanyi",codepen:"https://codepen.io/chiamakaikeanyi",stackoverflow:"https://stackoverflow.com/users/7000929/chiamaka-ikeanyi",twitter:"https://twitter.com/chiamakaikeanyi",medium:"https://medium.com/@chiamakaikeanyi",shareImage:"logo",imageWidth:1200,imageHeight:1200};t.a=r},142:function(e,t,a){"use strict";var n=a(143),i=a(0),r=a.n(i),o=a(4),c=a.n(o),s=a(147),l=a.n(s),p=a(139),m=a(141),u=(a(146),function(e){var t=e.children;return r.a.createElement(p.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:m.a.description},{name:"keywords",content:m.a.keywords},{name:"application-name",content:m.a.tagline},{name:"msapplication-TileColor",content:"#4DB39A"},{name:"msapplication-TileImage",content:m.a.profilePic},{name:"msapplication-navbutton-color",content:m.a.themeColor},{name:"theme-color",content:m.a.themeColor},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:m.a.themeColor},{name:"apple-mobile-web-app-title",content:m.a.tagline},{name:"author",content:m.a.author},{name:"twitter:card",content:m.a.twitterCardType},{name:"twitter:site",content:m.a.siteURL},{name:"twitter:creator",content:m.a.twitterHandle},{name:"twitter:title",content:m.a.tagline},{name:"twitter:image",content:m.a.profilePic},{name:"twitter:image:alt",content:m.a.tagline},{name:"twitter:description",content:m.a.description},{property:"og:type",content:m.a.siteOgType},{property:"og:url",content:m.a.siteURL},{property:"og:locale",content:"en"},{property:"og:image:type",content:"image/png"},{property:"og:title",content:m.a.tagline},{property:"og:image",content:m.a.profilePic},{property:"og:image:width",content:m.a.imageWidth},{property:"og:image:height",content:m.a.imageHeight},{property:"og:image:alt",content:m.a.tagline},{property:"og:description",content:m.a.description}]},r.a.createElement("html",{lang:"en",prefix:"og: http://ogp.me/ns#"})),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});u.propTypes={children:c.a.node.isRequired},t.a=u},143:function(e){e.exports={data:{site:{siteMetadata:{title:"Chiamaka Ikeanyi"}}}}},144:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),c=a(51),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},145:function(e,t,a){e.exports=a.p+"static/chiamakaikeanyi-e475deeee5559c5081b2ceaa7a352696.png"},146:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-404-js-a0b8852a516d5fd5a580.js.map