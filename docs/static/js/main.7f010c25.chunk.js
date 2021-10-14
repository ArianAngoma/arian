(this["webpackJsonparian-js"]=this["webpackJsonparian-js"]||[]).push([[0],{187:function(n,e,t){"use strict";t.r(e);var a,r,i,o,c,s,l,d,m,b,j=t(1),p=t(112),h=t.n(p),x=t(14),u=t(8),g=t(25),f=t(4),_=t(5),O=t(11),v=t(0),y=_.b.nav(a||(a=Object(f.a)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: var(--dark-bg);\n\n  ul {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 90%;\n    text-align: center;\n\n    li {\n      display: inline-block;\n      border-radius: 8px;\n      transition: 0.3s ease background-color;\n\n      &:hover {\n        background-color: var(--deep-dark);\n      }\n    }\n\n    a {\n      display: inline-block;\n      font-family: 'RobotoMono Regular', serif;\n      padding: 1rem 2rem;\n      font-size: 2rem;\n      color: var(--gray-1);\n      outline: none;\n    }\n\n    .active {\n      color: var(--white);\n    }\n  }\n\n  .mobile-menu-icon {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n\n    * {\n      pointer-events: none;\n    }\n  }\n\n  .navItems .closeNavIcon {\n    display: none;\n  }\n\n  @media only screen and (max-width: 768px) {\n    padding: 0;\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n\n    .mobile-menu-icon {\n      display: block;\n    }\n\n    .navItems {\n      --top: 1rem;\n      transition: 0.3s ease transform;\n      background-color: var(--deep-dark);\n      padding: 2rem;\n      width: 90%;\n      max-width: 300px;\n      border-radius: 12px;\n      position: absolute;\n      right: 1rem;\n      top: var(--top);\n\n      .closeNavIcon {\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n\n        * {\n          pointer-events: none;\n        }\n      }\n\n      li {\n        display: block;\n        margin-bottom: 1rem;\n      }\n    }\n  }\n"]))),w=function(){var n=Object(j.useState)(!1),e=Object(g.a)(n,2),t=e[0],a=e[1];return Object(v.jsxs)(y,{children:[Object(v.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:Object(v.jsx)(O.g,{})}),Object(v.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(v.jsx)("div",{className:"closeNavIcon",onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:Object(v.jsx)(O.a,{})}),Object(v.jsx)("li",{children:Object(v.jsx)(x.c,{to:"/",exact:!0,onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsx)(x.c,{to:"/about",onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:"About"})}),Object(v.jsx)("li",{children:Object(v.jsx)(x.c,{to:"/projects",onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:"Projects"})}),Object(v.jsx)("li",{children:Object(v.jsx)(x.c,{to:"/contact",onClick:function(){return a(!t)},role:"button",onKeyDown:function(){return a(!t)},tabIndex:0,children:"Contact"})})]})]})},k=t.p+"static/media/hero2.57fa962a.gif",N=t.p+"static/media/social-media-arrow.ecc0133c.svg",I=t.p+"static/media/scroll-down-arrow.8ad25c53.svg",S=_.b.div(r||(r=Object(f.a)(["\n  margin-top: 2rem;\n\n  .button {\n    font-size: 2.2rem;\n    background-color: ",";\n    padding: 0.7em 2em;\n    border: 2px solid var(--gray-1);\n    border-radius: 8px;\n    display: inline-block;\n    color: ",";\n  }\n\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.8rem;\n    }\n  }\n"])),(function(n){return n.outline?"transperant":"var(--gray-1)"}),(function(n){return n.outline?"var(--gary-1)":"black"})),z=function(n){var e=n.btnText,t=void 0===e?"test":e,a=n.btnLink,r=void 0===a?"test":a,i=n.outline,o=void 0!==i&&i,c=n.download;return void 0!==c&&c?Object(v.jsx)(S,{outline:o,className:"button-wrapper",children:Object(v.jsx)(x.b,{className:"button",to:r,target:"_blank",download:!0,children:t})}):Object(v.jsx)(S,{outline:o,className:"button-wrapper",children:Object(v.jsx)(x.b,{className:"button",to:r,children:t})})},A=_.b.div(i||(i=Object(f.a)(["\n  max-width: 500px;\n  margin: 0 auto;\n  font-size: 1.8rem;\n  line-height: 1.3em;\n  @media only screen and (max-width: 768px) {\n    font-size: 1.4rem;\n  }\n"]))),B=function(n){var e=n.children;return Object(v.jsx)(A,{className:"para",children:Object(v.jsx)("p",{children:e})})},C=_.b.div(o||(o=Object(f.a)(["\n  .hero {\n    height: 100vh;\n    min-height: 1000px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n\n  .hero__heading {\n    font-size: 2rem;\n    margin-bottom: -4rem;\n    position: relative;\n\n    span {\n      display: inline-block;\n      width: 100%;\n    }\n\n    .hero__name {\n      font-family: 'Montserrat SemiBold', serif;\n      font-size: 7rem;\n      color: var(--white);\n    }\n  }\n\n  .hero__img {\n    max-width: 900px;\n    width: 100%;\n    height: 600px;\n    margin: 0 auto;\n    border: 2px solid var(--gray-1);\n  }\n\n  .hero__info {\n    margin-top: -18rem;\n  }\n\n  .hero__social,\n  .hero__scrollDown {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    position: absolute;\n\n    bottom: 20px;\n    width: 50px;\n  }\n\n  .hero__social {\n    left: 50px;\n  }\n\n  .hero__scrollDown {\n    right: 50px;\n  }\n\n  .hero__social__indicator,\n  .hero__scrollDown {\n    width: 50px;\n\n    p {\n      font-size: 1.6rem;\n      transform: translateY(-70px) rotate(90deg);\n      letter-spacing: 0.7rem;\n      text-transform: uppercase;\n    }\n\n    img {\n      max-height: 45px;\n      width: 16px;\n      margin: 0 auto;\n      object-fit: contain;\n    }\n  }\n\n  .hero__scrollDown {\n    img {\n      max-height: 70px;\n    }\n  }\n\n  .hero__social__text {\n    ul {\n      li {\n        margin-bottom: 1rem;\n\n        a {\n          display: inline-block;\n          font-size: 1.6rem;\n          transform: rotate(-90deg);\n          letter-spacing: 5px;\n          margin-bottom: 2rem;\n        }\n      }\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    .hero {\n      min-height: 750px;\n    }\n\n    .hero__heading {\n      font-size: 1.4rem;\n      margin-bottom: -3rem;\n\n      .hero__name {\n        font-size: 4.5rem;\n      }\n    }\n\n    .hero__img {\n      height: 300px;\n    }\n\n    .hero__info {\n      margin-top: 3rem;\n    }\n\n    .hero__social {\n      left: 0;\n      bottom: -15%;\n      width: 20px;\n\n      .hero__social__indicator {\n        width: 20px;\n\n        p {\n          font-size: 1.2rem;\n        }\n\n        img {\n          max-height: 22px;\n        }\n      }\n\n      .hero__social__text {\n        ul {\n          li {\n            a {\n              font-size: 1.2rem;\n              margin-bottom: 1rem;\n            }\n          }\n        }\n      }\n    }\n\n    .hero__scrollDown {\n      right: 0;\n      width: 20px;\n      gap: 1rem;\n\n      p {\n        font-size: 1.3rem;\n      }\n    }\n  }\n"]))),D=function(){return Object(v.jsx)(C,{children:Object(v.jsx)("div",{className:"hero",children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("h1",{className:"hero__heading",children:[Object(v.jsx)("span",{children:"Hola, soy"}),Object(v.jsx)("span",{className:"hero__name",children:"Arian Angoma"})]}),Object(v.jsx)("div",{className:"hero__img",children:Object(v.jsx)("img",{src:k,alt:""})}),Object(v.jsxs)("div",{className:"hero__info",children:[Object(v.jsx)(B,{children:"Profesional en el desarrollo de software e integraci\xf3n de sistemas, con experiencia como programador en diferentes proyectos."}),Object(v.jsx)(z,{btnText:"ver mis proyectos",btnLink:"/projects"})]}),Object(v.jsxs)("div",{className:"hero__social",children:[Object(v.jsxs)("div",{className:"hero__social__indicator",children:[Object(v.jsx)("p",{children:"Follow"}),Object(v.jsx)("img",{src:N,alt:"icon"})]}),Object(v.jsx)("div",{className:"hero__social__text",children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"https://www.linkedin.com/in/arian-angoma-vilchez/",target:"_blank",rel:"noreferrer",children:"LI"})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"https://twitter.com/ArianAngomaJS",target:"_blank",rel:"noreferrer",children:"TW"})})]})})]}),Object(v.jsxs)("div",{className:"hero__scrollDown",children:[Object(v.jsx)("p",{children:"Scroll"}),Object(v.jsx)("img",{src:I,alt:"ScrollDown Arrow"})]})]})})})},R=_.b.div(c||(c=Object(f.a)(["\n  text-align: center;\n\n  p {\n    font-family: 'RobotoMono Regular', serif;\n    font-size: 2rem;\n  }\n\n  h2 {\n    font-family: 'Montserrat Bold', serif;\n    font-size: 6rem;\n    margin-top: 0.5rem;\n    text-transform: uppercase;\n  }\n\n  @media only screen and (max-width: 768px) {\n    text-align: center;\n    p {\n      font-size: 1.2rem;\n    }\n\n    h2 {\n      font-size: 3.6rem;\n    }\n  }\n"]))),M=function(n){var e=n.subheading,t=void 0===e?"Need Subheading":e,a=n.heading,r=void 0===a?"need heading":a;return Object(v.jsxs)(R,{className:"section-title",children:[Object(v.jsx)("p",{children:t}),Object(v.jsx)("h2",{children:r})]})},L=t.p+"static/media/about-sec-img.bd7f5f8e.jpg",F=_.b.div(s||(s=Object(f.a)(["\n  padding: 10rem 0;\n\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: left;\n  }\n\n  .aboutSection__left,\n  .aboutSection__right {\n    flex: 1;\n  }\n\n  .section-title {\n    text-align: left;\n  }\n\n  .para {\n    margin-top: 2rem;\n    margin-left: 0;\n  }\n\n  .aboutSection__buttons {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n    margin-top: 2rem;\n  }\n\n  @media only screen and (max-width: 950px) {\n    .aboutSection__left {\n      flex: 4;\n    }\n\n    .aboutSection__right {\n      flex: 3;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      text-align: center;\n    }\n\n    .aboutSection__left,\n    .aboutSection__right {\n      width: 100%;\n    }\n\n    .aboutSection__right {\n      margin-top: 3rem;\n    }\n\n    .section-title {\n      text-align: center;\n    }\n\n    .para {\n      margin: 0 auto;\n      margin-top: 2rem;\n    }\n\n    .aboutSection__buttons {\n      flex-direction: column;\n      gap: 0rem;\n\n      .button-wrapper,\n      a {\n        width: 100%;\n        text-align: center;\n      }\n    }\n  }\n"]))),P=function(){return Object(v.jsx)(F,{children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"aboutSection__left",children:[Object(v.jsx)(M,{subheading:"Perm\xedtame presentarme",heading:"Sobre M\xed"}),Object(v.jsx)(B,{children:"Apasionado con la programaci\xf3n y las nuevas tecnolog\xedas, gran parte de mi tiempo la dedico a la investigaci\xf3n y desarrollo de software, me encanta aprender y ponerlo en pr\xe1ctica d\xeda a d\xeda."}),Object(v.jsxs)("div",{className:"aboutSection__buttons",children:[Object(v.jsx)(z,{btnText:"Proyectos",btnLink:"/projects"}),Object(v.jsx)(z,{btnText:"Leer M\xe1s",btnLink:"/about",outline:!0})]})]}),Object(v.jsx)("div",{className:"aboutSection__right",children:Object(v.jsx)("img",{className:"aboutImg",src:L,alt:"Img"})})]})})},T=_.b.div(l||(l=Object(f.a)(["\n  text-align: center;\n\n  .servicesItem__icon {\n    svg {\n      width: 3rem;\n    }\n  }\n\n  .servicesItem__title {\n    font-size: 2.5rem;\n    font-family: 'Montserrat SemiBold', serif;\n  }\n\n  .para {\n    margin-top: 2rem;\n  }\n"]))),E=function(n){var e=n.icon,t=void 0===e?Object(v.jsx)(O.c,{}):e,a=n.title,r=void 0===a?"Web Design":a,i=n.desc,o=void 0===i?"Web Design":i;return Object(v.jsxs)(T,{className:"servicesItem",children:[Object(v.jsx)("div",{className:"servicesItem__icon",children:t}),Object(v.jsx)("div",{className:"servicesItem__title",children:r}),Object(v.jsx)(B,{children:o})]})},J=_.b.div(d||(d=Object(f.a)(["\n  padding: 10rem 0;\n\n  .services__allItems {\n    display: flex;\n    gap: 10rem;\n    justify-content: space-between;\n    margin-top: 5rem;\n  }\n\n  @media only screen and (max-width: 768px) {\n    .services__allItems {\n      flex-direction: column;\n      max-width: 350px;\n      margin: 0 auto;\n      margin-top: 5rem;\n      gap: 5rem;\n    }\n  }\n"]))),H=function(){return Object(v.jsx)(J,{children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(M,{subheading:"Lo que har\xe9 por ti",heading:"Servicios"}),Object(v.jsxs)("div",{className:"services__allItems",children:[Object(v.jsx)(E,{icon:Object(v.jsx)(O.e,{}),title:"Desarrollo Web",desc:"Desarrollo sitios web. Creo un sitio web de alto rendimiento con una velocidad incre\xedble."}),Object(v.jsx)(E,{icon:Object(v.jsx)(O.b,{}),title:"Backend",desc:"Desarrollo API's robustas y escalables con comunicaci\xf3n a diferentes bases de datos SQL y/o NoSQL."}),Object(v.jsx)(E,{icon:Object(v.jsx)(O.c,{}),title:"Frontend",desc:"Desarrollo interfaces gr\xe1ficas para que el usuario pueda ver e interactuar con la informaci\xf3n."})]})]})})},q=t(193),K=t(191),U=t(192),V=t(190),W=(t(129),t(194)),G=t.p+"static/media/calendar-app.980ac4b3.jpeg",Y=[{id:Object(W.a)(),name:"Calendar App",desc:"Una aplicaci\xf3n web para agendar notas en un calendario por usuario, Desarrollada en ReactJs y NodeJs.",img:G,link:"https://calendar-app-arianjs.herokuapp.com/",repoFrontend:"https://github.com/ArianAngoma/calendar-app-frontend-react",repoBackend:"https://github.com/ArianAngoma/calendar-app-backend-node"},{id:Object(W.a)(),name:"Calendar App",desc:"Una aplicaci\xf3n web para agendar notas en un calendario por usuario, Desarrollada en ReactJs y NodeJs.",img:G,link:"https://calendar-app-arianjs.herokuapp.com/",repoFrontend:"https://github.com/ArianAngoma/calendar-app-frontend-react",repoBackend:"https://github.com/ArianAngoma/calendar-app-backend-node"},{id:Object(W.a)(),name:"Calendar App",desc:"Una aplicaci\xf3n web para agendar notas en un calendario por usuario, Desarrollada en ReactJs y NodeJs.",img:G,link:"https://calendar-app-arianjs.herokuapp.com/",repoFrontend:"https://github.com/ArianAngoma/calendar-app-frontend-react",repoBackend:"https://github.com/ArianAngoma/calendar-app-backend-node"}],Q=t.p+"static/media/projectImg.e5d14d3a.png",X=_.b.div(m||(m=Object(f.a)(["\n  .projectItem__img {\n    width: 100%;\n    height: 400px;\n    border-radius: 12px;\n    overflow: hidden;\n    display: inline-block;\n    border: 3px solid var(--gray-2);\n\n    img {\n      height: 100%;\n    }\n  }\n\n  .projectItem__info {\n    margin-top: 1rem;\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 12px;\n  }\n\n  .projectItem__title {\n    font-size: 2.2rem;\n  }\n\n  .projectItem__desc {\n    font-size: 1.6rem;\n    font-family: 'RobotoMono Regular', serif;\n    margin-top: 1rem;\n  }\n\n  .projectItem__repo_desc {\n    font-size: 1.2rem;\n    font-family: 'RobotoMono Regular', serif;\n  }\n\n  .projectItem__repo {\n    font-size: 1.2rem;\n    font-family: 'RobotoMono Regular', serif;\n    color: lightskyblue;\n  }\n\n  @media only screen and (max-width: 768px) {\n    .projectItem__img {\n      height: 350px;\n    }\n  }\n"]))),Z=function(n){var e=n.img,t=void 0===e?Q:e,a=n.title,r=void 0===a?"Project Name":a,i=n.desc,o=void 0===i?"Desc":i,c=n.link,s=void 0===c?"https://calendar-app-arianjs.herokuapp.com":c,l=n.repoFrontend,d=n.repoBackend;return Object(v.jsxs)(X,{children:[Object(v.jsx)("a",{href:s,target:"_blank",className:"projectItem__img",rel:"noreferrer",children:Object(v.jsx)("img",{src:t,alt:"project img"})}),Object(v.jsxs)("div",{className:"projectItem__info",children:[Object(v.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:Object(v.jsx)("h3",{className:"projectItem__title",children:r})}),Object(v.jsx)("p",{className:"projectItem__desc",children:o}),Object(v.jsx)("br",{}),Object(v.jsxs)("p",{className:"projectItem__repo_desc",children:["Repositorios: ",Object(v.jsx)("span",{}),l&&Object(v.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",className:"projectItem__repo",children:"Frontend"}),l&&d&&Object(v.jsx)("span",{children:" - "}),d&&Object(v.jsx)("a",{href:d,target:"_blank",rel:"noreferrer",className:"projectItem__repo",children:"Backend"})]})]})]})};U.a.use([V.a]);var $,nn,en,tn,an,rn,on,cn,sn,ln,dn,mn=_.b.div(b||(b=Object(f.a)(["\n  padding: 10rem 0;\n\n  .projects__allItems {\n    display: flex;\n    gap: 3rem;\n    margin-top: 5rem;\n  }\n\n  .swiper-container {\n    padding-top: 8rem;\n    max-width: 100%;\n  }\n\n  .swiper-button-prev,\n  .swiper-button-next {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n    background: var(--deep-dark);\n    z-index: 10;\n    right: 60px;\n    left: auto;\n    top: 0;\n    transform: translateY(50%);\n    color: var(--gray-1);\n    border-radius: 8px;\n  }\n\n  .swiper-button-next {\n    right: 0;\n  }\n\n  .swiper-button-prev::after,\n  .swiper-button-next::after {\n    font-size: 2rem;\n  }\n\n  @media only screen and (max-width: 768px) {\n    .projects__allItems {\n      flex-direction: column;\n      max-width: 400px;\n      margin: 0 auto;\n      margin-top: 7rem;\n      gap: 5rem;\n\n      .projectItem__img {\n        width: 100%;\n      }\n    }\n  }\n"]))),bn=function(){return Object(v.jsx)(mn,{children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(M,{subheading:"Algunos de mis trabajos recientes",heading:"Proyectos"}),Object(v.jsx)("div",{className:"projects__allItems",children:Object(v.jsx)(q.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:3}},children:Y.map((function(n,e){if(!(e>=5))return Object(v.jsx)(K.a,{children:Object(v.jsx)(Z,{title:n.name,img:n.img,desc:n.desc,link:n.link,repoFrontend:n.repoFrontend,repoBackend:n.repoBackend})},n.id)}))})})]})})},jn=_.b.div($||($=Object(f.a)(["\n  padding: 5rem 0;\n\n  .contactBanner__wrapper {\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    padding: 5rem 0rem;\n    text-align: center;\n  }\n\n  .contactBanner__heading {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n  }\n\n  @media only screen and (max-width: 768px) {\n    .contactBanner__heading {\n      font-size: 2.8rem;\n    }\n  }\n"]))),pn=function(){return Object(v.jsx)(jn,{children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"contactBanner__wrapper",children:[Object(v.jsx)(B,{children:"Tienes un proyecto en mente"}),Object(v.jsx)("h3",{className:"contactBanner__heading",children:"D\xe9jame que te ayude"}),Object(v.jsx)(z,{btnText:"Contactar Ahora",btnLink:"/contact"})]})})})},hn=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(D,{}),Object(v.jsx)(P,{}),Object(v.jsx)(H,{}),Object(v.jsx)(bn,{}),Object(v.jsx)(pn,{})]})},xn=_.b.div(nn||(nn=Object(f.a)(["\n  .heading {\n    font-size: 2.4rem;\n    margin-bottom: 2rem;\n  }\n\n  li {\n    margin-bottom: 1rem;\n  }\n\n  a {\n    font-size: 1.8rem;\n  }\n"]))),un=function(n){var e=n.heading,t=void 0===e?"Col Heading":e,a=n.links,r=void 0===a?[{type:"Link",title:"Home",path:"/home"},{type:"Link",title:"About",path:"/about"}]:a;return Object(v.jsxs)(xn,{children:[Object(v.jsx)("h2",{className:"heading",children:t}),Object(v.jsx)("ul",{children:r.map((function(n,e){return Object(v.jsx)("li",{children:"Link"===n.type?Object(v.jsx)(x.b,{to:n.path,children:n.title}):Object(v.jsx)("a",{href:n.path,target:"_blank",rel:"noreferrer",children:n.title})},e)}))})]})},gn=_.b.div(en||(en=Object(f.a)(["\n  background-color: var(--deep-dark);\n  padding-top: 10rem;\n\n  .container {\n    display: flex;\n    gap: 3rem;\n  }\n\n  .footer__col1 {\n    flex: 2;\n  }\n\n  .footer__col2,\n  .footer__col3,\n  .footer__col4 {\n    flex: 1;\n  }\n\n  .footer__col1__title {\n    font-size: 3.5rem;\n    margin-bottom: 1rem;\n  }\n\n  .copyright {\n    background-color: var(--dark-bg);\n    text-align: left;\n    padding: 1rem 0;\n    margin-top: 5rem;\n\n    .para {\n      margin-left: 0;\n    }\n  }\n\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      gap: 0rem;\n\n      & > div {\n        margin-top: 5rem;\n      }\n    }\n\n    .footer__col1 .para {\n      max-width: 100%;\n    }\n\n    .copyright {\n      .container {\n        div {\n          margin-top: 0;\n        }\n      }\n    }\n  }\n"]))),fn=function(){return Object(v.jsxs)(gn,{children:[Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"footer__col1",children:[Object(v.jsx)("h1",{className:"footer__col1__title",children:"Arian Angoma"}),Object(v.jsx)(B,{children:"Apasionado con la programaci\xf3n y las nuevas tecnolog\xedas, gran parte de mi tiempo la dedico a la investigaci\xf3n y desarrollo de software."})]}),Object(v.jsx)("div",{className:"footer__col2",children:Object(v.jsx)(un,{heading:"Enlaces",links:[{title:"Home",path:"/",type:"Link"},{type:"Link",title:"About",path:"/about"},{type:"Link",title:"Projects",path:"/projects"},{type:"Link",title:"Contact",path:"/contact"}]})}),Object(v.jsx)("div",{className:"footer__col3",children:Object(v.jsx)(un,{heading:"Informaci\xf3n de Contacto",links:[{title:"+51983416698",path:"tel:+51983416698"},{title:"arian.angoma@tecsup.edu.pe",path:"mailto:arian.angoma@tecsup.edu.pe"}]})}),Object(v.jsx)("div",{className:"footer__col4",children:Object(v.jsx)(un,{heading:"Redes Sociales",links:[{title:"Linkedin",path:"https://www.linkedin.com/in/arian-angoma-vilchez/"},{title:"Twitter",path:"https://twitter.com/ArianAngomaJS"}]})})]}),Object(v.jsx)("div",{className:"copyright",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsx)(B,{children:"\xa9 2021 - Arian Angoma"})})})]})},_n=_.b.div(tn||(tn=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  position: relative;\n  /* gap: 5rem; */\n  margin-top: 3rem;\n\n  .title {\n    font-size: 2.4rem;\n  }\n\n  .items {\n    display: flex;\n    gap: 1.5rem;\n    position: absolute;\n    left: 18rem;\n  }\n\n  .item {\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 8px;\n  }\n\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    .items {\n      position: initial;\n      gap: 1rem;\n    }\n\n    .title {\n      font-size: 2rem;\n    }\n  }\n"]))),On=function(n){var e=n.title,t=void 0===e?"Title":e,a=n.items,r=void 0===a?["HTML","CSS"]:a;return Object(v.jsxs)(_n,{children:[Object(v.jsx)("h1",{className:"title",children:t}),Object(v.jsx)("div",{className:"items",children:r.map((function(n,e){return Object(v.jsx)("div",{className:"item",children:Object(v.jsx)(B,{children:n})},e)}))})]})},vn=t.p+"static/media/about-page-img.1ef828a5.jpg",yn=_.b.div(an||(an=Object(f.a)(["\n  padding: 20rem 0 10rem 0;\n\n  .top-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n  }\n\n  .left {\n    flex: 3;\n  }\n\n  .right {\n    flex: 2;\n  }\n\n  .about__subheading {\n    font-size: 2.2rem;\n    margin-bottom: 2rem;\n\n    span {\n      background-color: var(--deep-dark);\n      padding: 0.5rem;\n      border-radius: 8px;\n    }\n  }\n\n  .about__heading {\n    font-size: 3.6rem;\n    margin-bottom: 3rem;\n  }\n\n  .about__info {\n    margin-bottom: 4rem;\n\n    .para {\n      max-width: 100%;\n    }\n  }\n\n  .right {\n    img {\n      border: 2px solid var(--gray-1);\n    }\n  }\n\n  .about__info__items {\n    margin-top: 15rem;\n  }\n\n  .about__info__item {\n    margin-bottom: 10rem;\n  }\n\n  .about__info__heading {\n    font-size: 3.6rem;\n    text-transform: uppercase;\n  }\n\n  @media only screen and (max-width: 768px) {\n    padding: 10rem 0;\n    .top-section {\n      flex-direction: column;\n      gap: 5rem;\n    }\n\n    .about__subheading {\n      font-size: 1.8rem;\n    }\n\n    .about__heading {\n      font-size: 2.8rem;\n    }\n\n    .about__info__heading {\n      font-size: 3rem;\n    }\n  }\n"]))),wn=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(yn,{children:[Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"top-section",children:[Object(v.jsxs)("div",{className:"left",children:[Object(v.jsxs)("p",{className:"about__subheading",children:["Hola, soy ",Object(v.jsx)("span",{children:"Arian Angoma"})]}),Object(v.jsx)("h2",{className:"about__heading",children:"Un desarrollador de Software"}),Object(v.jsx)("div",{className:"about__info",children:Object(v.jsxs)(B,{children:["Profesional en el desarrollo de software e integraci\xf3n de sistemas, con experiencia como programador en diferentes proyectos.",Object(v.jsx)("br",{})," ",Object(v.jsx)("br",{}),"Me fascina la programaci\xf3n y todo lo relacionado con la web, me gusta aprender nuevas tecnolog\xedas cada d\xeda y crear apps para que la gente las use y mejorar su forma de trabajo, me encanta pensar que con una sola aplicaci\xf3n puedo solucionar miles de problemas a miles de personas.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"Como desarrollador autodidacta, se podr\xeda decir que he destacado m\xe1s en el \xe1mbito backend, trabajando en muchos proyectos privados y p\xfablicos, lo cual mejor\xf3 enormemente mi experiencia y habilidades en general."]})}),Object(v.jsx)(z,{btnText:"Download CV",download:!0,btnLink:"/cv/CV_ARIAN_ANGOMA.pdf"})]}),Object(v.jsx)("div",{className:"right",children:Object(v.jsx)("img",{src:vn,alt:"me"})})]}),Object(v.jsxs)("div",{className:"about__info__items",children:[Object(v.jsxs)("div",{className:"about__info__item",children:[Object(v.jsx)("h1",{className:"about__info__heading",children:"Educaci\xf3n"}),Object(v.jsx)(On,{title:"Tecsup",items:["Instituto de Educaci\xf3n Superior en Per\xfa"]}),Object(v.jsx)(On,{title:"Universidad",items:["Universidad Complutense de Madrid"]})]}),Object(v.jsxs)("div",{className:"about__info__item",children:[Object(v.jsx)("h1",{className:"about__info__heading",children:"Mis Habilidades"}),Object(v.jsx)(On,{title:"FrontEnd",items:["HTML","CSS","JavaScript","REACT"]}),Object(v.jsx)(On,{title:"BackEnd",items:["NodeJs","ExpressJs","NestJs"]}),Object(v.jsx)(On,{title:"Tecnolo\xedas",items:["TypeScript","Git","Github","AWS"]})]}),Object(v.jsxs)("div",{className:"about__info__item",children:[Object(v.jsx)("h1",{className:"about__info__heading",children:"Experiencias"}),Object(v.jsx)(On,{title:"Pucara Bull",items:["Desarrollador como Backend y Frontend"]}),Object(v.jsx)(On,{title:"Tukuy Club",items:["Desarrollador en el Departamento de TI"]})]})]})]}),Object(v.jsx)(pn,{})]})})},kn=_.b.div(rn||(rn=Object(f.a)(["\n  padding: 10rem 0;\n\n  .projects__allItems {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 5rem;\n    margin-top: 5rem;\n  }\n\n  .projects__searchBar {\n    position: relative;\n    width: 300px;\n    margin-top: 5rem;\n  }\n\n  .projects__searchBar input {\n    width: 100%;\n    font-size: 2rem;\n    padding: 0.8rem;\n    color: var(--black);\n    border-radius: 6px;\n    outline: none;\n    border: none;\n  }\n\n  .projects__searchBar .searchIcon {\n    position: absolute;\n    width: 2rem;\n\n    right: 1rem;\n  }\n\n  .projects__searchBar .searchIcon path {\n    color: var(--deep-dark);\n  }\n\n  @media only screen and (max-width: 768px) {\n    .projects__searchBar,\n    .projects__searchBar form,\n    .projects__searchBar input {\n      width: 100%;\n    }\n  }\n"]))),Nn=function(){var n=Object(j.useState)(""),e=Object(g.a)(n,2),t=e[0],a=e[1],r=Object(j.useState)(Y),i=Object(g.a)(r,2),o=i[0],c=i[1];Object(j.useEffect)((function(){""!==t&&c((function(){return Y.filter((function(n){return n.name.toLowerCase().match(t.toLowerCase())}))}))}),[t]);return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(kn,{children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(M,{heading:"Proyectos",subheading:"Algunos de mis trabajos recientes"}),Object(v.jsx)("div",{className:"projects__searchBar",children:Object(v.jsxs)("form",{children:[Object(v.jsx)("input",{type:"text",value:t,onChange:function(n){n.preventDefault(),a(n.target.value),!n.target.value.length>0&&c(Y)},placeholder:"Nombre del proyecto"}),Object(v.jsx)(O.i,{className:"searchIcon"})]})}),Object(v.jsx)("div",{className:"projects__allItems",children:o.map((function(n){return Object(v.jsx)(Z,{title:n.name,desc:n.desc,img:n.img,repoFrontend:n.repoFrontend,repoBackend:n.repoBackend},n.id)}))})]})})})},In=t(117),Sn=t.n(In),zn=t(48),An=t(77),Bn=_.b.form(on||(on=Object(f.a)(["\n  width: 100%;\n\n  .form-group {\n    width: 100%;\n    margin-bottom: 2rem;\n  }\n\n  label {\n    font-size: 1.8rem;\n  }\n\n  input,\n  textarea {\n    width: 100%;\n    font-size: 2rem;\n    padding: 1.2rem;\n    color: var(--gray-1);\n    background-color: var(--deep-dark);\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    margin-top: 1rem;\n  }\n\n  textarea {\n    min-height: 250px;\n    resize: vertical;\n  }\n\n  button[type='submit'] {\n    background-color: var(--gray-1);\n    color: var(--black);\n    font-size: 2rem;\n    display: inline-block;\n    outline: none;\n    border: none;\n    padding: 1rem 4rem;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n"]))),Cn=function(){var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(j.useState)(n),t=Object(g.a)(e,2),a=t[0],r=t[1],i=function(){r(arguments.length>0&&void 0!==arguments[0]?arguments[0]:n)};return[a,function(n){var e=n.target;r(Object(An.a)(Object(An.a)({},a),{},Object(zn.a)({},e.name,e.value)))},i]}({name:"",email:"",message:""}),e=Object(g.a)(n,2),t=e[0],a=e[1],r=t.name,i=t.email,o=t.message;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(Bn,{onSubmit:function(n){n.preventDefault(),console.log("hola"),Sn.a.post("http://localhost:3030/api/email",t).then((function(n){n.data.success,console.log(n.data)})).catch((function(n){console.log(n)}))},children:[Object(v.jsx)("div",{className:"form-group",children:Object(v.jsxs)("label",{htmlFor:"name",children:["Su nombre",Object(v.jsx)("input",{type:"text",id:"name",name:"name",value:r,onChange:a})]})}),Object(v.jsx)("div",{className:"form-group",children:Object(v.jsxs)("label",{htmlFor:"email",children:["Su correo electr\xf3nico",Object(v.jsx)("input",{type:"email",id:"email",name:"email",value:i,onChange:a})]})}),Object(v.jsx)("div",{className:"form-group",children:Object(v.jsxs)("label",{htmlFor:"message",children:["Su mensaje",Object(v.jsx)("textarea",{type:"text",id:"message",name:"message",value:o,onChange:a})]})}),Object(v.jsx)("button",{type:"submit",children:"Enviar"})]})})},Dn=_.b.div(cn||(cn=Object(f.a)(["\n  padding: 2rem;\n  background-color: var(--deep-dark);\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n\n  .icon {\n    color: var(--white);\n    background-color: var(--gray-2);\n    padding: 1.3rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n  }\n\n  svg {\n    width: 3.5rem;\n  }\n"]))),Rn=function(n){var e=n.icon,t=void 0===e?Object(v.jsx)(O.h,{}):e,a=n.text,r=void 0===a?"I need text ":a;return Object(v.jsxs)(Dn,{children:[Object(v.jsx)("div",{className:"icon",children:t}),Object(v.jsx)("div",{className:"info",children:Object(v.jsx)(B,{children:r})})]})},Mn=_.b.div(sn||(sn=Object(f.a)(["\n  padding: 10rem 0;\n\n  .contactSection__wrapper {\n    display: flex;\n    gap: 5rem;\n    margin-top: 7rem;\n    justify-content: space-between;\n    position: relative;\n  }\n\n  .contactSection__wrapper::after {\n    position: absolute;\n    content: '';\n    width: 2px;\n    height: 50%;\n    background-color: var(--gray-1);\n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, -50%);\n  }\n\n  .left {\n    width: 100%;\n    max-width: 500px;\n  }\n\n  .right {\n    max-width: 500px;\n    width: 100%;\n    border-radius: 12px;\n    /* padding-left: 3rem; */\n  }\n\n  @media only screen and (max-width: 768px) {\n    .contactSection__wrapper {\n      flex-direction: column;\n    }\n\n    .contactSection__wrapper::after {\n      display: none;\n    }\n\n    .left,\n    .right {\n      max-width: 100%;\n    }\n\n    .right {\n      padding: 4rem 2rem 2rem 2rem;\n    }\n  }\n"]))),Ln=function(){return Object(v.jsx)(Mn,{children:Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(M,{heading:"contacto",subheading:"Ponte en contacto"}),Object(v.jsxs)("div",{className:"contactSection__wrapper",children:[Object(v.jsxs)("div",{className:"left",children:[Object(v.jsx)(Rn,{icon:Object(v.jsx)(O.f,{}),text:"+51983416698"}),Object(v.jsx)(Rn,{icon:Object(v.jsx)(O.d,{}),text:"arian.angoma@tecsup.edu.pe"})]}),Object(v.jsx)("div",{className:"right",children:Object(v.jsx)(Cn,{})})]})]})})},Fn=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(Ln,{})})},Pn=t(118),Tn=t.n(Pn),En=function(n){var e=n.children,t=Object(j.useRef)(null),a=Object(u.f)().pathname;return Object(j.useEffect)((function(){t.current.scrollbar.setPosition(0,0)}),[a]),Object(v.jsx)(Tn.a,{ref:t,damping:.09,children:e})},Jn=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(x.a,{children:[Object(v.jsx)(w,{}),Object(v.jsxs)(En,{children:[Object(v.jsxs)(u.c,{children:[Object(v.jsx)(u.a,{path:"/about",children:Object(v.jsx)(wn,{})}),Object(v.jsx)(u.a,{path:"/projects",children:Object(v.jsx)(Nn,{})}),Object(v.jsx)(u.a,{path:"/contact",children:Object(v.jsx)(Fn,{})}),Object(v.jsx)(u.a,{path:"/",children:Object(v.jsx)(hn,{})})]}),Object(v.jsx)(fn,{})]})]})})},Hn=Object(_.a)(ln||(ln=Object(f.a)(["\n  * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n\n  :root {\n    --dark-bg: #262626;\n    --gray-1: #BCB4B4;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --white: white;\n    --black: black;\n  }\n\n  html {\n    font-size: 10px;\n    font-family: 'Roboto Mono', serif;\n    background-color: var(--dark-bg);\n  }\n\n  ul, li {\n    list-style: none;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  img, svg {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  button {\n    outline: none\n  }\n\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n\n  /* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),qn=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",Kn=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",Un=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",Vn=Object(_.a)(dn||(dn=Object(f.a)(["\n  @font-face {\n    font-family: 'RobotoMono Regular';\n    src: url(",");\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'Montserrat Bold';\n    src: url(",");\n    font-style: normal;\n  }\n\n  html {\n    font-family: 'RobotoMono Regular', serif;\n    color: var(--gray-1);\n  }\n\n  * {\n    font-family: 'RobotoMono Regular', serif;\n    color: var(--gray-1);\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-family: 'Montserrat SemiBold', serif\n  }\n"])),qn,Kn,Un);h.a.render(Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(Vn,{}),Object(v.jsx)(Hn,{}),Object(v.jsx)(Jn,{})]}),document.getElementById("root"))}},[[187,1,2]]]);
//# sourceMappingURL=main.7f010c25.chunk.js.map