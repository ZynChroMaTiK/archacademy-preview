(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["landing-home"],{"3d70":function(t,e,a){},5372:function(t,e,a){"use strict";a("3d70")},"6a56":function(t,e,a){t.exports=a.p+"img/feature1.78b4cfb3.jpg"},"8adc":function(t,e,a){},cc20:function(t,e,a){"use strict";a("8adc");var s=a("58df"),i=a("0789"),l=a("9d26"),c=a("a9ad"),r=a("4e82"),o=a("7560"),n=a("f2e7"),u=a("1c87"),d=a("af2b"),p=a("d9bd");e["a"]=Object(s["a"])(c["a"],d["a"],u["a"],o["a"],Object(r["a"])("chipGroup"),Object(n["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...u["a"].options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(u["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created(){const t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach(([t,e])=>{this.$attrs.hasOwnProperty(t)&&Object(p["a"])(t,e,this)})},methods:{click(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter(){const t=[];return this.isActive&&t.push(this.$createElement(l["b"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(i["g"],t)},genClose(){return this.$createElement(l["b"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:t=>{t.stopPropagation(),t.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(t){const e=[this.genContent()];let{tag:a,data:s}=this.generateRouteLink();s.attrs={...s.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex},s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);const i=this.textColor||this.outlined&&this.color;return t(a,this.setTextColor(i,s),e)}})},d4e2:function(t,e,a){"use strict";a.r(e);var s=a("8336"),i=a("a523"),l=a("ce7e"),c=a("8dd9"),r=function(){var t=this,e=t._self._c;return e("div",[e(c["a"],[e(i["a"],{staticClass:"py-6 pt-lg-15 text-center"},[e("h1",{staticClass:"text-h4 text-sm-h3 text-md-h2 text-lg-h1"},[t._v("Your awesome "),e("span",{staticClass:"primary--text"},[t._v("web project")])]),e("h2",{staticClass:"text-h6 text-sm-h5 mt-4 w-full w-md-8-12 w-xl-half mx-auto"},[t._v("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi ex facilis ad atque natus tenetur debitis qui quisquam iure amet.")]),e("div",{staticClass:"mt-8"},[e(s["a"],{staticClass:"my-1 mx-sm-1 w-full w-sm-auto",attrs:{"x-large":"",color:"primary"}},[t._v("Start free trial")]),e(s["a"],{staticClass:"my-1 mx-sm-1 w-full w-sm-auto",attrs:{"x-large":""}},[t._v("Learn more")])],1)])],1),e("Partners"),e("Stats"),e(i["a"],[e(l["a"])],1),e("Feature2"),e("Feature1"),e("Pricing"),e("CallToAction")],1)},o=[],n=function(){var t=this,e=t._self._c;return e(c["a"],{staticClass:"d-flex flex-column"},[e("svg",{staticClass:"logos-bg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1442 163"}},[e("path",{attrs:{d:"m-3.90909,6l48.30303,16c48.30303,16 144.90908,48 241.51514,48c96.60606,0 193.21211,-32 289.81817,-32c96.60606,0 193.21211,32 289.81817,53.3c96.60606,21.7 193.21211,31.7 289.81817,16c96.60606,-16.3 193.21211,-58.3 241.51514,-80l48.30303,-21.3l0,160l-48.30303,0c-48.30303,0 -144.90908,0 -241.51514,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -289.81817,0c-96.60606,0 -193.21211,0 -241.51514,0l-48.30303,0l0,-160z"}})])])},u=[],d=(a("5372"),a("2877")),p={},m=Object(d["a"])(p,n,u,!1,null,"30056104",null),h=m.exports,v=a("62ad"),g=a("6b53"),f=a("0fd9"),b=function(){var t=this,e=t._self._c;return e(i["a"],{staticClass:"pt-0 pb-4"},[e(f["a"],t._l(t.stats,(function(a,s){return e(v["a"],{key:s,attrs:{cols:"12",sm:"6",lg:"3"}},[e("div",{staticClass:"text-center"},[e("div",{staticClass:"text-h2 text-number font-weight-light"},[t._v(t._s(a.value))]),e(g["a"],{staticClass:"mx-auto",attrs:{"max-width":"300"}},[e("div",{staticClass:"font-weight-regular my-2"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit.")]),e("div",{staticClass:"text-h6 text-lg-h5"},[t._v(t._s(a.title))])])],1)])})),1)],1)},x=[],C={data(){return{stats:[{title:"Projects",value:"4,253"},{title:"API Requests",value:"1,283,787"},{title:"Subscribers",value:"1,348"},{title:"Businesses",value:"331,234"}]}}},_=C,w=Object(d["a"])(_,b,x,!1,null,null,null),y=w.exports,k=a("b0afa"),B=a("cc20"),j=a("132d"),q=function(){var t=this,e=t._self._c;return e(i["a"],{staticClass:"pt-4 pt-md-8 pb-10",attrs:{id:"pricing"}},[e(g["a"],{staticClass:"mx-auto text-center",attrs:{"max-width":"1200"}},[e("h2",{staticClass:"text-h3 mb-2"},[t._v("Pricing")]),e("div",{staticClass:"text-h6 text-lg-h5"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit.")])]),e(f["a"],{staticClass:"mt-10"},t._l(t.plans,(function(a,i){return e(v["a"],{key:i,attrs:{cols:"12",lg:"4"}},[e(k["a"],{staticClass:"text-body-1 pa-4",attrs:{outlined:"",elevation:"2"}},[e("div",{staticClass:"d-flex justify-space-between"},[e("div",{staticClass:"mr-2"},[e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"text-h4 font-weight-black"},[t._v(t._s(a.title))]),a.featured?e("div",{staticClass:"ml-2"},[e(B["a"],{staticClass:"font-weight-black",attrs:{small:"",color:"primary"}},[t._v("Popular")])],1):t._e()]),e("div",{staticClass:"mt-1"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit.")])]),e("div",{staticClass:"text-right"},[e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"text-h5 font-weight-light mr-1"},[t._v("$")]),e("div",{staticClass:"text-h3 text-number font-weight-black"},[t._v(t._s(a.price))])]),e("div",{staticClass:"justify-end overline"},[t._v("/month")])])]),e(l["a"],{staticClass:"my-4"}),e("div",{staticClass:"text-h6"},t._l(a.features,(function(a,s){return e("div",{key:s,staticClass:"d-flex align-center justify-space-between my-1"},[e("div",[a.value?e("span",{staticClass:"font-weight-black mr-1"},[t._v(t._s(a.value))]):t._e(),e("span",{staticClass:"text-truncate font-weight-regular"},[t._v(t._s(a.label))])]),e(j["a"],{attrs:{color:"primary"}},[t._v("mdi-check")])],1)})),0),e(l["a"],{staticClass:"my-4"}),e(s["a"],{attrs:{"x-large":"",block:"",outlined:!a.featured,color:a.featured?"primary":"",to:"/auth/signup"}},[t._v(" Subscribe ")])],1)],1)})),1)],1)},S=[],E={data(){return{plans:[{title:"Basic",price:"29",features:[{value:"5",label:"Accounts"},{value:"100GB",label:"Bandwith"},{value:"10GB",label:"Disk Space"},{value:"",label:"Unlimited Emails"}]},{title:"Startup",price:"49",featured:!0,features:[{value:"20",label:"Accounts"},{value:"1TB",label:"Bandwith"},{value:"100GB",label:"Disk Space"},{value:"",label:"Unlimited Emails"}]},{title:"Enterprise",price:"149",features:[{value:"100",label:"Accounts"},{value:"10TB",label:"Bandwith"},{value:"10TB",label:"Disk Space"},{value:"",label:"Unlimited Emails"}]}]}}},L=E,$=Object(d["a"])(L,q,S,!1,null,null,null),O=$.exports,A=a("adda"),G=function(){var t=this,e=t._self._c;return e(c["a"],[e(i["a"],{staticClass:"py-4 py-lg-8"},[e(f["a"],[e(v["a"],{attrs:{cols:"12",lg:"6"}},[e("div",{staticClass:"text-uppercase font-weight-bold body-2 primary--text mb-2 mt-0 mt-xl-10"},[t._v("Work with us")]),e("h2",{staticClass:"text-h3"},[t._v("Get your startup ready for business")]),e("div",{staticClass:"text-h6 text-lg-h5 mt-5"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit error labore doloremque fugit! Dolor fugit molestiae vero quos quisquam nobis, eos debitis magni omnis ea incidunt amet voluptate dignissimos!")])]),e(v["a"],{attrs:{cols:"12",lg:"6"}},[e(A["a"],{staticClass:"elevation-6",attrs:{src:a("6a56"),"max-height":"480"}})],1)],1)],1)],1)},P=[],T={},D=Object(d["a"])(T,G,P,!1,null,null,null),F=D.exports,I=function(){var t=this,e=t._self._c;return e(c["a"],[e(i["a"],{staticClass:"py-8"},[e("div",{staticClass:"d-flex flex-column flex-lg-row justify-space-between align-center"},[e("div",{staticClass:"text-center text-lg-left"},[e("div",{staticClass:"text-h3"},[t._v("Ready to talk?")]),e("div",{staticClass:"text-h3 primary--text"},[t._v("Our team is here to help.")])]),e("div",{staticClass:"mt-4 mt-lg-0"},[e(s["a"],{staticClass:"my-1 mx-sm-2 w-full w-sm-auto",attrs:{"x-large":"",color:"primary"}},[t._v("Contact Sales")]),e(s["a"],{staticClass:"my-1 w-full w-sm-auto",attrs:{"x-large":""}},[t._v("Learn more")])],1)])])],1)},z=[],R={},U=Object(d["a"])(R,I,z,!1,null,null,null),J=U.exports,N=function(){var t=this,e=t._self._c;return e(i["a"],{staticClass:"py-4"},[e(f["a"],t._l(t.features,(function(a,s){return e(v["a"],{key:s,attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"mr-2"},[e(c["a"],{staticClass:"pa-2 elevation-1",attrs:{outlined:"",rounded:""}},[e(j["a"],[t._v(t._s(a.icon))])],1)],1),e("div",[e("div",{staticClass:"text-h5"},[t._v(t._s(a.title))]),e("div",{staticClass:"text-h6 font-weight-light mt-1"},[t._v(t._s(a.description))])])])])})),1)],1)},V=[],W={data(){return{features:[{icon:"mdi-account-check-outline",title:"Account Verification",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda"},{icon:"mdi-lifebuoy",title:"Dedicated Support",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda"},{icon:"mdi-email-open-multiple-outline",title:"Email Integration",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda"},{icon:"mdi-clock-outline",title:"Save Time",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse expedita fugit quam aliquam. Autem assumenda"}]}}},Y=W,H=Object(d["a"])(Y,N,V,!1,null,null,null),K=H.exports,M={components:{Partners:h,Stats:y,Pricing:O,Feature1:F,Feature2:K,CallToAction:J}},Q=M,X=Object(d["a"])(Q,r,o,!1,null,null,null);e["default"]=X.exports}}]);