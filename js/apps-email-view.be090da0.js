(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["apps-email-view"],{"0393":function(e,a,t){"use strict";t("210b");var s=t("604c"),i=t("d9bd");a["a"]=s["a"].extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&Object(i["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(i["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,a){const t=this.getValue(e,a),s=this.getValue(e,a+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(s)}}})},"210b":function(e,a,t){},"308a":function(e,a,t){"use strict";t("5b07")},"3ce2":function(e,a,t){"use strict";t.r(a);var s=t("8212"),i=t("8336"),n=t("b0afa"),o=t("ce7e"),r=t("cd55"),l=t("49e2"),c=t("c865"),d=t("0393"),p=t("132d"),v=t("8860"),u=t("da13"),h=t("5d23"),m=t("e449"),x=t("2fa4"),b=function(){var e=this,a=e._self._c;return a(n["a"],{staticClass:"min-w-0"},[a("div",{staticClass:"email-app-top px-2 py-1 d-flex align-center"},[a(i["a"],{attrs:{icon:""},on:{click:function(a){return e.$router.go(-1)}}},[a(p["a"],[e._v("mdi-arrow-left")])],1),a("div",{staticClass:"mx-3"},[a(i["a"],{attrs:{icon:""}},[a(p["a"],[e._v("bx-archive")])],1),a(i["a"],{attrs:{icon:""}},[a(p["a"],[e._v("mdi-email-mark-as-unread")])],1),a(i["a"],{attrs:{icon:""}},[a(p["a"],[e._v("bx-trash-alt")])],1)],1),a(x["a"]),a("div",{staticClass:"caption mr-1"},[e._v("1 - 20 of 428")]),a(i["a"],{attrs:{icon:"",disabled:""}},[a(p["a"],[e._v("mdi-chevron-left")])],1),a(i["a"],{attrs:{icon:""}},[a(p["a"],[e._v("mdi-chevron-right")])],1)],1),a(o["a"]),a("div",{staticClass:"d-flex pa-2"},[a("div",{staticClass:"text-h6"},[e._v("Do you have Paris recommendations? Have you ever been?")]),a(x["a"]),a("div",[a(i["a"],{attrs:{icon:""}},[a(p["a"],[e._v("mdi-printer")])],1)],1)],1),a("div",{staticClass:"pa-2"},[a(d["a"],{attrs:{multiple:""},model:{value:e.emailsExpanded,callback:function(a){e.emailsExpanded=a},expression:"emailsExpanded"}},e._l(e.emails,(function(t,o){return a(r["a"],{key:o},[a(c["a"],{scopedSlots:e._u([{key:"default",fn:function({open:o}){return[a("div",{staticClass:"d-flex"},[a(s["a"],{attrs:{size:"36px"}},[a("img",{attrs:{src:t.avatar,alt:""}})]),a("div",{staticClass:"mx-3 min-w-0"},[a("div",{staticClass:"font-weight-bold mb-1"},[e._v(e._s(t.name))]),a("div",{directives:[{name:"show",rawName:"v-show",value:o,expression:"open"}]},[a(m["a"],{attrs:{"offset-y":"",right:"",transition:"slide-y-transition"},scopedSlots:e._u([{key:"activator",fn:function({on:t}){return[a(i["a"],e._g({staticClass:"pa-0",attrs:{text:""}},t),[e._v(" to me "),a(p["a"],{attrs:{small:"",right:""}},[e._v("mdi-chevron-down")])],1)]}}],null,!0)},[a(n["a"],{staticClass:"pa-2"},[a("div",[a("span",{staticClass:"grey--text"},[e._v("from:")]),e._v(" johnnilson@whatthisisnotarealemail.com")]),a("div",[a("span",{staticClass:"grey--text"},[e._v("to:")]),e._v(" clara@whatthisisnotarealemail.com")])])],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!o,expression:"!open"}],staticClass:"text-truncate"},[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ut, soluta temporibus, culpa magnam harum quod asperiores excepturi iste veniam possimus dignissimos laboriosam ipsum voluptas repellat consequuntur vitae debitis consequatur.")])]),a(x["a"]),a(m["a"],{attrs:{"offset-y":"",left:"",transition:"slide-y-transition"},scopedSlots:e._u([{key:"activator",fn:function({on:t}){return[a(i["a"],e._g({attrs:{icon:""}},t),[a(p["a"],{attrs:{small:""}},[e._v("mdi-dots-vertical")])],1)]}}],null,!0)},[a(v["a"],{attrs:{dense:"",nav:""}},[a(u["a"],{attrs:{link:""}},[a(h["k"],[e._v("Forward")])],1),a(u["a"],{attrs:{link:""}},[a(h["k"],[e._v("Delete")])],1)],1)],1)],1)]}},{key:"actions",fn:function(){return[a("span")]},proxy:!0}],null,!0)}),a(l["a"],[a("p",[e._v("Hello,")]),a("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")]),a("p",[e._v("Best regards")])])],1)})),1),a(n["a"],{staticClass:"mt-4"},[a("email-editor")],1)],1)],1)},f=[],g=t("440a"),_={components:{EmailEditor:g["a"]},data(){return{emailsExpanded:[3],emails:[{name:"Ubaldo Romaguera",avatar:"/images/avatars/avatar1.svg"},{name:"Ruben Breitenberg",avatar:"/images/avatars/avatar2.svg"},{name:"Blaze Carter",avatar:"/images/avatars/avatar3.svg"},{name:"Bernita Lehner",avatar:"/images/avatars/avatar4.svg"}]}}},w=_,y=(t("308a"),t("2877")),C=Object(y["a"])(w,b,f,!1,null,"db3d74c6",null);a["default"]=C.exports},"49e2":function(e,a,t){"use strict";var s=t("0789"),i=t("9d65"),n=t("a9ad"),o=t("3206"),r=t("80d2"),l=t("58df");const c=Object(l["a"])(i["a"],n["a"],Object(o["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));a["a"]=c.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(e,a){e&&(this.isBooted=!0),null==a?this.isActive=e:this.$nextTick(()=>this.isActive=e)}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(e){return e(s["f"],this.showLazyContent(()=>[e("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(r["v"])(this))])]))}})},"5b07":function(e,a,t){},c865:function(e,a,t){"use strict";var s=t("0789"),i=t("9d26"),n=t("a9ad"),o=t("3206"),r=t("5607"),l=t("80d2"),c=t("58df");const d=Object(c["a"])(n["a"],Object(o["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));a["a"]=d.extend().extend({name:"v-expansion-panel-header",directives:{ripple:r["b"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(e){this.$emit("click",e)},genIcon(){const e=Object(l["v"])(this,"actions")||[this.$createElement(i["b"],this.expandIcon)];return this.$createElement(s["i"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render(e){return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[Object(l["v"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},cd55:function(e,a,t){"use strict";var s=t("4e82"),i=t("3206"),n=t("80d2"),o=t("58df");a["a"]=Object(o["a"])(Object(s["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(i["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(e){this.content=e},unregisterContent(){this.content=null},registerHeader(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick(()=>this.$emit("change"))}},render(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(n["v"])(this))}})}}]);