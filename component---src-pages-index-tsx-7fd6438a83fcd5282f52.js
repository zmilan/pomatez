(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5EGp":function(e,t,a){"use strict";var r=a("63Ad");t.__esModule=!0,t.default=void 0;var n,l=r(a("T1e2")),i=r(a("QKC2")),d=r(a("PE9J")),s=r(a("8VmE")),o=r(a("mXGw")),c=r(a("W0B4")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=h(t||a||[]);return r&&r.src},h=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),g=function(e){var t=u(e),a=m(t);return p[a]||!1},E="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,S=b&&window.IntersectionObserver,v=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,l=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:l}),o.default.createElement("source",{media:n,srcSet:a,sizes:l}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function k(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,l=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(l?'sizes="'+l+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",l=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+o+i+d+a+r+t+l+n+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},P=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,l=e.spreadProps,i=e.ariaHidden,d=o.default.createElement(x,(0,s.default)({ref:t,src:a},l,{ariaHidden:i}));return r.length>1?o.default.createElement("picture",null,n(r),d):d})),x=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,l=e.style,i=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,h=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},h,{onLoad:i,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},l)}))}));x.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var T=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!E&&S&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(E||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,l.default)(a)),a.handleRef=a.handleRef.bind((0,l.default)(a)),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(p[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,l=void 0===n?{}:n,i=e.imgStyle,d=void 0===i?{}:i,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,p=e.fluid,g=e.fixed,E=e.backgroundColor,b=e.durationFadeIn,S=e.Tag,v=e.itemProp,y=e.loading,L=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,s.default)({opacity:R?1:0,transition:T?"opacity "+b+"ms":"none"},d),M="boolean"==typeof E?"lightgray":E,j={transitionDelay:b+"ms"},C=(0,s.default)({opacity:this.state.imgLoaded?0:1},T&&j,d,f),V={title:t,alt:this.state.isVisible?"":a,style:C,className:m,itemProp:v};if(p){var N=p,W=h(p);return o.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},l),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},o.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),M&&o.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:M,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&j)}),W.base64&&o.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:V,imageVariants:N,generateSources:I}),W.tracedSVG&&o.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:V,imageVariants:N,generateSources:k}),this.state.isVisible&&o.default.createElement("picture",null,w(N),o.default.createElement(x,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:y,draggable:L})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,s.default)({alt:a,title:t,loading:y},W,{imageVariants:N}))}}))}if(g){var D=g,A=h(g),H=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:A.width,height:A.height},l);return"inherit"===l.display&&delete H.display,o.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(A.srcSet)},M&&o.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:M,width:A.width,opacity:this.state.imgLoaded?0:1,height:A.height},T&&j)}),A.base64&&o.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:A.base64,spreadProps:V,imageVariants:D,generateSources:I}),A.tracedSVG&&o.default.createElement(P,{ariaHidden:!0,ref:this.placeholderRef,src:A.tracedSVG,spreadProps:V,imageVariants:D,generateSources:k}),this.state.isVisible&&o.default.createElement("picture",null,w(D),o.default.createElement(x,{alt:a,title:t,width:A.width,height:A.height,sizes:A.sizes,src:A.src,crossOrigin:this.props.crossOrigin,srcSet:A.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:y,draggable:L})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,s.default)({alt:a,title:t,loading:y},A,{imageVariants:D}))}}))}return null},t}(o.default.Component);T.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),M=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function j(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}T.propTypes={resolutions:z,sizes:M,fixed:j(c.default.oneOfType([z,c.default.arrayOf(z)])),fluid:j(c.default.oneOfType([M,c.default.arrayOf(M)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=T;t.default=C},QeBL:function(e,t,a){"use strict";a.r(t);var r=a("mXGw"),n=a.n(r),l=a("Nhdc"),i=a("Wbzz"),d=a("5EGp"),s=a.n(d),o=a("bFe0"),c=a("20nU"),u=a("0lfv"),f=a("sqT6"),m=function(){var e=Object(i.useStaticQuery)("1560457519"),t=e.allMarkdownRemark,a=e.workTimePreviewLight,d=e.workTimePreviewDark,m=e.shortBreakPreviewLight,h=e.shortBreakPreviewDark,p=e.longBreakPreviewLight,g=e.longBreakPreviewDark,E=e.configPreviewLight,b=e.configPreviewDark,S=e.settingsPreviewLight,v=e.settingsPreviewDark,w=e.tasksPreviewLight,y=e.tasksPreviewDark,k=t.edges[0].node.frontmatter,I=Object(r.useState)("Mobile"),L=I[0],R=I[1],O=Object(r.useContext)(f.c).isDarkMode;Object(r.useLayoutEffect)((function(){R(Object(u.a)())}),[]);return n.a.createElement(o.I,{id:"landing"},n.a.createElement(o.K,null,n.a.createElement(o.mb,null),n.a.createElement(o.nb,null),n.a.createElement(o.J,null,n.a.createElement(o.M,null,n.a.createElement("h1",null,k.title),n.a.createElement("h2",null,k.subTitle)),n.a.createElement(o.L,null,function(){switch(L){case"Windows":return n.a.createElement(o.k,{as:"a",href:c.WINDOWS_INSTALLER},n.a.createElement(l.d,{name:"windows"}),"for Windows");case"MacOS":return n.a.createElement(o.k,{as:"a",href:c.MAC_INSTALLER},n.a.createElement(l.d,{name:"apple"}),"for Mac OS");case"Linux":return n.a.createElement(o.k,{href:"/",to:"installers",offset:-24,duration:420,smooth:!0},n.a.createElement(l.d,{name:"tux"}),"for Linux OS");default:return n.a.createElement(o.k,{href:"/",to:"installers",offset:-24,duration:420,smooth:!0},n.a.createElement(l.d,{name:"download"}),"See Installers")}}(),n.a.createElement(o.G,{as:"a",href:"https://github.com/roldanjr/pomatez",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(l.d,{name:"github"}),"GitHub Repo"))),n.a.createElement(o.bb,null,n.a.createElement(o.ab,null,n.a.createElement(s.a,{fluid:O?y.childImageSharp.fluid:w.childImageSharp.fluid,alt:"tasks preview"})),n.a.createElement(o.ab,null,n.a.createElement(s.a,{fluid:O?v.childImageSharp.fluid:S.childImageSharp.fluid,alt:"settings preview"})),n.a.createElement(o.ab,null,n.a.createElement(s.a,{fluid:O?b.childImageSharp.fluid:E.childImageSharp.fluid,alt:"config preview"})),n.a.createElement(o.ab,null,n.a.createElement(s.a,{fluid:O?d.childImageSharp.fluid:a.childImageSharp.fluid,alt:"work time preview"})),n.a.createElement(o.ab,null,n.a.createElement(s.a,{fluid:O?h.childImageSharp.fluid:m.childImageSharp.fluid,alt:"short break preview"})),n.a.createElement(o.ab,null,n.a.createElement(s.a,{fluid:O?g.childImageSharp.fluid:p.childImageSharp.fluid,alt:"long break preview"})))))},h=function(){var e,t=Object(i.useStaticQuery)("2772759684"),a=t.allMarkdownRemark,d=t.tasksPreviewLight,c=t.tasksPreviewDark,u=t.configPreviewLight,m=t.configPreviewDark,h=Object(r.useContext)(f.c).isDarkMode,p=a.edges[0].node;return n.a.createElement(o.C,{id:"features"},n.a.createElement(o.x,null,n.a.createElement(l.a,{node:p}),n.a.createElement(o.w,null,n.a.createElement(o.lb,null,n.a.createElement(o.B,null,n.a.createElement(o.A,null,n.a.createElement(s.a,{fluid:h?c.childImageSharp.fluid:d.childImageSharp.fluid,alt:"tasks preview"})),n.a.createElement(o.A,null,n.a.createElement(s.a,{fluid:h?m.childImageSharp.fluid:u.childImageSharp.fluid,alt:"config preview"})))),n.a.createElement(o.z,null,null===(e=p.frontmatter.features)||void 0===e?void 0:e.map((function(e,t){return n.a.createElement(o.y,{key:t},n.a.createElement("h5",null,e.heading),n.a.createElement("p",null,e.description))}))))))},p=function(){var e,t,a=Object(i.useStaticQuery)("207954612").allMarkdownRemark.edges[0].node;return n.a.createElement(o.j,{id:"boosters"},n.a.createElement(o.x,null,n.a.createElement(l.a,{node:a}),n.a.createElement(o.i,null,null===(e=a.frontmatter.boosters)||void 0===e?void 0:e.map((function(e,t){return n.a.createElement(o.h,{key:t},n.a.createElement(o.g,null,n.a.createElement(s.a,{fixed:e.image.childImageSharp.fixed,alt:e.heading})),n.a.createElement(o.f,null,n.a.createElement("h5",null,e.heading),n.a.createElement("p",null,e.description),n.a.createElement("a",{href:e.link,rel:"noopener noreferrer",target:"_blank"},"See Details")))}))),n.a.createElement(o.m,null,n.a.createElement("h6",null,a.frontmatter.headline),n.a.createElement("div",null,null===(t=a.frontmatter.companies)||void 0===t?void 0:t.map((function(e,t){return n.a.createElement(o.l,{key:t},n.a.createElement(s.a,{fluid:e.logo.childImageSharp.fluid,alt:e.name}))}))))))},g=function(){var e,t=Object(i.useStaticQuery)("3776110879"),a=t.allMarkdownRemark,d=t.shortBreakPreviewLight,c=t.shortBreakPreviewDark,u=t.longBreakPreviewLight,m=t.longBreakPreviewDark,h=Object(r.useContext)(f.c).isDarkMode,p=a.edges[0].node;return n.a.createElement(o.cb,{id:"roadmap"},n.a.createElement(o.eb,null,n.a.createElement(l.a,{node:p}),n.a.createElement(o.db,null,n.a.createElement(o.lb,null,n.a.createElement(o.gb,null,n.a.createElement(o.fb,null,n.a.createElement(s.a,{fluid:h?c.childImageSharp.fluid:d.childImageSharp.fluid,alt:"short break preview"})),n.a.createElement(o.fb,null,n.a.createElement(s.a,{fluid:h?m.childImageSharp.fluid:u.childImageSharp.fluid,alt:"long break preview"})))),n.a.createElement(o.ib,null,null===(e=p.frontmatter.features)||void 0===e?void 0:e.map((function(e,t){return n.a.createElement(o.hb,{key:t},n.a.createElement("h5",null,e.heading),n.a.createElement("p",null,e.description))}))))))},E=function(){var e=Object(i.useStaticQuery)("2952297972").allMarkdownRemark.edges[0].node;return n.a.createElement(o.o,{id:"installers"},n.a.createElement(o.r,null,n.a.createElement(l.a,{node:e}),n.a.createElement(o.q,null,n.a.createElement(o.u,null,n.a.createElement(o.v,null,n.a.createElement(l.d,{name:"windows"})),n.a.createElement(o.p,{as:"a",href:c.WINDOWS_INSTALLER},n.a.createElement(l.d,{name:"download"}),"Windows 7, 8 and 10")),n.a.createElement(o.s,null,n.a.createElement(o.v,null,n.a.createElement(l.d,{name:"linux"})),n.a.createElement(o.O,null,n.a.createElement(o.p,{as:"a",href:c.DEB_INSTALLER},n.a.createElement(l.d,{name:"download"}),".deb"),n.a.createElement(o.p,{as:"a",href:c.APP_IMAGE_INSTALLER},n.a.createElement(l.d,{name:"download"}),".AppImage"),n.a.createElement(o.p,{as:"a",href:c.RPM_INSTALLER},n.a.createElement(l.d,{name:"download"}),".rpm"),n.a.createElement("span",null,"Or"),n.a.createElement(o.p,{id:"snap-store-btn",as:"a",href:"https://snapcraft.io/pomatez",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",null,"Get it from Snap Store"),n.a.createElement(l.d,{name:"snap-store"})))),n.a.createElement(o.t,null,n.a.createElement(o.v,null,n.a.createElement(l.d,{name:"apple"})),n.a.createElement(o.p,{as:"a",href:c.MAC_INSTALLER},n.a.createElement(l.d,{name:"download"}),"Mac OS 10.10+")))))};t.default=function(){return n.a.createElement(l.b,null,n.a.createElement(l.c,null),n.a.createElement(m,null),n.a.createElement(h,null),n.a.createElement(p,null),n.a.createElement(g,null),n.a.createElement(E,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-7fd6438a83fcd5282f52.js.map