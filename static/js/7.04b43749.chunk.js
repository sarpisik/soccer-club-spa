(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{231:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(16),l=a(219),o=a(221),c=a(220),s=a(257);t.a=Object(r.c)(function(e){var t=e.data,a=e.image,n=e.title,r=e.children,m=t.getImage(a),u={backgroundImage:"url(".concat(m,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",minHeight:"100vh",width:"100%",paddingTop:"5rem"};return i.a.createElement("div",{style:u,className:"static-content"},i.a.createElement(l.a,null,i.a.createElement(o.a,null,i.a.createElement(c.a,{sm:12},i.a.createElement(s.a,{style:{backgroundColor:"rgba(0, 0, 0, .7)"}},i.a.createElement(s.a.Heading,null,i.a.createElement(s.a.Title,{componentClass:"h2"},n)),i.a.createElement(s.a.Body,null,r))))))})},346:function(e,t,a){"use strict";a.r(t);var n=a(15),i=a(0),r=a.n(i),l=a(260),o=a(231),c=a(273),s=a(275),m=a(276),u={phone:m.b,email:m.a,facebook:s.a,youtube:s.d,twitter:s.c,instagram:s.b},d=function(e){var t=e.icon,a=t.name,n=(t.text,t.link),i=t.size;return r.a.createElement("a",{href:n,rel:"noopener noreferrer"},r.a.createElement(c.a,{icon:u[a],size:i}))},h=a(246),g=a(247),p=a(34),f=a(17),E=a(19),v=a(18),b=a(20),y=a(343),w=a(344),S=a(347),O=a(225),k=a(345),j=a(42),C=a(338),I=a(277),V=a.n(I),x=function(){function e(t){Object(n.a)(this,e),this.validations=t}return Object(f.a)(e,[{key:"validate",value:function(e){var t=this.valid();return this.validations.forEach(function(a){if(!t[a.field].isInvalid){var n=e[a.field].toString(),i=a.args||[];("string"===typeof a.method?V.a[a.method]:a.method).apply(void 0,[n].concat(Object(C.a)(i),[e]))!==a.validWhen&&(t[a.field]={isInvalid:!0},t.isValid=!1)}}),t}},{key:"valid",value:function(){var e={};return this.validations.map(function(t){return e[t.field]={isInvalid:!1}}),Object(g.a)({isValid:!0},e)}}]),e}(),F=function(e){return function(t){return function(a){return function(i){function l(a){var i;return Object(n.a)(this,l),(i=Object(E.a)(this,Object(v.a)(l).call(this,a))).FieldGroup=function(e){var t=e.id,a=e.label,n=e.validationState,i=Object(h.a)(e,["id","label","validationState"]);return r.a.createElement(y.a,{validationState:n,controlId:t},r.a.createElement(w.a,null,a),r.a.createElement(S.a,i),r.a.createElement(S.a.Feedback,null))},i.onChange=function(e){var t=e.target.name,a=e.target.value;i.setState(function(e){return Object(p.a)({},t,a)})},i.onValidate=function(e){if(""!==i.state[e])return i.validator.validate(i.state)[e].isInvalid?"error":"success"},i.onSubmit=function(t){return i.setState(function(t){return Object(g.a)({},e,{show:!t.show})})},i.isValidate=function(t){return Object.keys(e).every(function(e){return"success"===i.onValidate(e)})},i.state=Object(g.a)({},e,{show:!1}),i.validator=new x(t),i}return Object(b.a)(l,i),Object(f.a)(l,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(a,Object.assign({},this.state,this.props,{FieldGroup:this.FieldGroup,onChange:this.onChange,onSubmit:this.onSubmit,getValidationState:this.onValidate,isValidate:this.isValidate})),r.a.createElement(O.a,{style:{display:"flex",alignItems:"center"},show:this.state.show,onHide:this.onSubmit},r.a.createElement(O.a.Header,{closeButton:!0}),r.a.createElement(O.a.Body,{style:{padding:"0"}},r.a.createElement(k.a,{style:{position:"static",margin:"0"},bsStyle:"success"},"Your Message Has Been Sent. ",r.a.createElement("strong",null,"Thank you!"))),r.a.createElement(O.a.Footer,null,r.a.createElement(j.a,{bsStyle:"success",onClick:this.onSubmit},r.a.createElement("strong",null,"OK")))))}}]),l}(r.a.Component)}}},A=a(14),B=function(e){var t=Object(A.a)({},e);return r.a.createElement(j.a,t,t.children)},N=[{id:"name",type:"text"},{id:"email",type:"email"},{id:"message",type:"text",componentClass:"textarea"}],G=F({name:"",email:"",message:""})([{field:"name",method:"isAlpha",args:["tr-TR"],validWhen:!0},{field:"name",method:"isByteLength",args:[{min:2,max:10}],validWhen:!0},{field:"email",method:"isEmail",validWhen:!0},{field:"message",method:"isByteLength",args:[{min:2,max:600}],validWhen:!0}])(function(e){var t=e.FieldGroup,a=e.onChange,n=e.getValidationState,i=Object(h.a)(e,["FieldGroup","onChange","getValidationState"]),l=i.isValidate();return r.a.createElement("form",{id:"contact-form",onChange:a,onSubmit:function(e){e.preventDefault(),document.getElementById("contact-form").reset(),i.onSubmit()}},N.map(function(e,a){return r.a.createElement(t,{key:a,id:e.id,type:e.type,name:e.id,componentClass:e.componentClass,placeholder:(i=e.id,i.charAt(0).toUpperCase()+i.slice(1)),validationState:n(e.id)});var i}),r.a.createElement(B,{disabled:!l,type:"submit"},"SEND"),r.a.createElement(B,{type:"reset"},"RESET"))}),T=function e(t,a,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"2x";Object(n.a)(this,e),this.name=t,this.text=a,this.link=i,this.size=r},R=[new T("email","contact@contact.com","mailto:contact@sarpisik.com"),new T("facebook","Facebook Page","https://www.facebook.com/"),new T("youtube","Youtube Channel","https://www.youtube.com/"),new T("twitter","Twitter Page","https://twitter.com/"),new T("instagram","Instagram Blog","https://www.instagram.com/")],W={maxWidth:"100%",height:"150px",position:"relative",marginLeft:"auto",marginRight:"auto"},z={lat:-1.2884,lng:36.8233},D=function(e){var t=e.google;return r.a.createElement("div",{id:"map",style:W},r.a.createElement(l.Map,{google:t,zoom:14,initialCenter:z}))};t.default=Object(l.GoogleApiWrapper)({apiKey:"AIzaSyBoEMqMFX0YhDrHjPgPGf9Om8fv5PwGAhc"})(function(e){var t=e.google;return r.a.createElement(o.a,{image:3,title:"CONTACT INFO"},r.a.createElement("div",{className:"contact-page"},r.a.createElement(G,null),r.a.createElement("div",{className:"icon-container"},R.map(function(e,t){return r.a.createElement(d,{key:t,icon:e})})),r.a.createElement(D,{google:t}),r.a.createElement("p",null,r.a.createElement(d,{icon:new T("phone")}),"012345568"),r.a.createElement("p",null,"ADRESS LINE 1"),r.a.createElement("p",null,"ADRESS LINE 2"),r.a.createElement("p",null,"ADRESS LINE 3")))})}}]);
//# sourceMappingURL=7.04b43749.chunk.js.map