(function(t){function i(i){for(var s,l,o=i[0],h=i[1],u=i[2],a=0,d=[];a<o.length;a++)l=o[a],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&d.push(n[l][0]),n[l]=0;for(s in h)Object.prototype.hasOwnProperty.call(h,s)&&(t[s]=h[s]);r&&r(i);while(d.length)d.shift()();return c.push.apply(c,u||[]),e()}function e(){for(var t,i=0;i<c.length;i++){for(var e=c[i],s=!0,o=1;o<e.length;o++){var h=e[o];0!==n[h]&&(s=!1)}s&&(c.splice(i--,1),t=l(l.s=e[0]))}return t}var s={},n={app:0},c=[];function l(i){if(s[i])return s[i].exports;var e=s[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=s,l.d=function(t,i,e){l.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,i){if(1&i&&(t=l(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)l.d(e,s,function(i){return t[i]}.bind(null,s));return e},l.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(i,"a",i),i},l.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},l.p="/PKM/Test_vue3_build/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],h=o.push.bind(o);o.push=i,o=o.slice();for(var u=0;u<o.length;u++)i(o[u]);var r=h;c.push([0,"chunk-vendors"]),e()})({0:function(t,i,e){t.exports=e("56d7")},"15e2":function(t,i,e){},2966:function(t,i,e){},"56d7":function(t,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("7a23"),n={class:"main"},c={class:"app"},l={class:"app2"};function o(t,i,e,o,h,u){var r=this,a=Object(s["m"])("list"),d=Object(s["m"])("lists-of-items");return Object(s["i"])(),Object(s["d"])("div",n,[Object(s["e"])("div",c,[(Object(s["i"])(!0),Object(s["d"])(s["a"],null,Object(s["l"])(h.secondActivList,(function(t,i){return Object(s["i"])(),Object(s["c"])(a,{key:t,onAuthBoxs:u.myAuthBoxs,numberOfBoxs:r.numberOfBoxs,onCheckedAuthBox:u.checkedAuthBox,onInputNumberChange:u.inputNumberChange,checkList:r.secondActivList[i],ni:i,onActualBox:u.actualBox,onAllColors:u.alloFColors,allLists:r.allLists,myDot:h.myDot,onAddDot:u.checkedDot},null,8,["onAuthBoxs","numberOfBoxs","onCheckedAuthBox","onInputNumberChange","checkList","ni","onActualBox","onAllColors","allLists","myDot","onAddDot"])})),128))]),Object(s["e"])("div",l,[(Object(s["i"])(!0),Object(s["d"])(s["a"],null,Object(s["l"])(h.secondActivList,(function(t,i){return Object(s["i"])(),Object(s["c"])(d,{key:t,allLists:r.allLists,ni:i,numberOfBoxs:r.numberOfBoxs,allColorsArr:h.allColorsArr,onIterItem:u.iterItem},null,8,["allLists","ni","numberOfBoxs","allColorsArr","onIterItem"])})),128))])])}var h={class:"left_block"},u=["id","checked"],r=["for"],a=["hidden"],d=["disabled"],b=["disabled"],f=["checked","onClick"],p={class:"inBlk"},m=["disabled","value","onInput"];function O(t,i,e,n,c,l){var o=this;return Object(s["i"])(),Object(s["d"])("div",h,[Object(s["e"])("button",{onClick:i[0]||(i[0]=function(){return l.visiblity&&l.visiblity.apply(l,arguments)})},Object(s["n"])(c.visible?"▼":"▲"),1),Object(s["e"])("input",{id:this.ni,name:"happy",class:Object(s["g"])({mark:c.dot}),type:"checkbox",checked:c.checkedList,onClick:i[1]||(i[1]=function(){return l.checkedBox&&l.checkedBox.apply(l,arguments)})},null,10,u),Object(s["e"])("label",{for:this.ni},null,8,r),Object(s["f"])("list "+Object(s["n"])(e.ni+1),1),Object(s["e"])("div",{hidden:c.visible},[Object(s["e"])("button",{onClick:i[2]||(i[2]=function(){return l.plus&&l.plus.apply(l,arguments)}),disabled:10===this.lists.length},"+",8,d),Object(s["e"])("button",{onClick:i[3]||(i[3]=function(){return l.minus&&l.minus.apply(l,arguments)}),disabled:4===this.lists.length},"-",8,b),Object(s["e"])("ul",null,[(Object(s["i"])(!0),Object(s["d"])(s["a"],null,Object(s["l"])(c.lists,(function(t,n){return Object(s["i"])(),Object(s["d"])("li",{key:n},[Object(s["e"])("input",{type:"checkbox",id:"checkbox",checked:o.allLists[e.ni][n],onClick:function(t){return l.checkedItem(n,t)}},null,8,f),Object(s["e"])("label",{for:"checkbox",onClick:i[4]||(i[4]=Object(s["o"])((function(){}),["prevent","stop"]))},"Item "+Object(s["n"])(n+1),1),Object(s["e"])("div",p,[Object(s["e"])("input",{id:"numbers",class:"inBlk",disabled:!o.allLists[e.ni][n],type:"text",value:o.allLists[e.ni][n]?o.numberOfBoxs[e.ni][n]:"",placeholder:0,onInput:function(t){return l.inputChange(n,t)}},null,40,m),Object(s["e"])("button",{class:"inBlk",style:Object(s["h"])({"background-color":o.color[n]}),onClick:i[5]||(i[5]=function(){return l.changeColor&&l.changeColor.apply(l,arguments)})},null,4)])])})),128))])],8,a)])}e("caad"),e("2532"),e("a9e3");var k={props:["numberOfBoxs","secondActivList","checkList","ni","allLists","myDot"],emits:["auth-boxs","checked-auth-box","input-number-change","actual-box","all-colors","ni","add-dot"],data:function(){return{lists:[!1,!1,!1,!1,!1],visible:!1,boxs:this.numberOfBoxs[this.ni],inputDisable:!0,color:["red","blue","grey","yellow","orange","blueviolet","brown","chocolate","crimson","cyan","black","white"],checkedList:this.checkList,dot:this.myDot[this.ni]}},methods:{checkedBox:function(t){if(!0===t.target.checked)for(var i in this.checkedList=!0,this.lists)this.lists[i]=!0,this.$emit("checked-auth-box",i,this.lists,this.ni);else if(!1===t.target.checked)for(var e in this.checkedList=!1,this.lists)this.lists[e]=!1,this.$emit("checked-auth-box",e,this.lists,this.ni);!0!==this.checkedList||this.lists.includes(!1)?!1===this.checkedList&&this.lists.includes(!0)&&(this.dot=!0,this.$emit("add-dot",this.dot,this.ni)):(this.dot=!1,this.$emit("add-dot",this.dot,this.ni))},checkedItem:function(t,i){this.lists[t]=i.target.checked,this.lists[t]?(this.inputDisable=!0,this.$emit("auth-boxs",t,this.lists,this.ni)):(this.inputDisable=!this.lists[t],this.$emit("auth-boxs",t,this.lists,this.ni)),this.lists.includes(!1)?this.lists.includes(!1)&&(this.checkedList=!1,this.$emit("actual-box",this.lists,this.ni)):(this.checkedList=!0,this.$emit("actual-box",this.lists,this.ni)),this.lists.includes(!1)&&this.lists.includes(!0)?(this.dot=!0,this.$emit("add-dot",this.dot,this.ni)):(this.dot=!1,this.$emit("add-dot",this.dot,this.ni))},plus:function(){this.lists.push(!1),this.lists.includes(!1)||!1!==this.checkedList?this.lists.includes(!1)&&!0===this.checkedList&&(this.checkedList=!1):this.checkedList=!0,this.$emit("actual-box",this.lists,this.ni),this.lists.includes(!1)&&this.lists.includes(!0)?(this.dot=!0,this.$emit("add-dot",this.dot,this.ni)):(this.dot=!1,this.$emit("add-dot",this.dot,this.ni))},minus:function(){this.lists.pop(),this.lists.includes(!1)||!1!==this.checkedList?this.lists.includes(!1)&&!0===this.checkedList&&(this.checkedList=!1):this.checkedList=!0,this.$emit("actual-box",this.lists,this.ni),this.lists.includes(!1)&&this.lists.includes(!0)?(this.dot=!0,this.$emit("add-dot",this.dot,this.ni)):(this.dot=!1,this.$emit("add-dot",this.dot,this.ni))},visiblity:function(){this.visible=!this.visible},inputChange:function(t,i){i.target.value<=99&&i.target.value>=0?(this.boxs[t]=Number(i.target.value),this.$emit("input-number-change",t,this.boxs,this.ni),this.$emit("all-colors",this.color,this.ni)):i.target.value=""},changeColor:function(){this.color.unshift(this.color.pop()),this.$emit("all-colors",this.color,this.ni)}}},j=(e("c871"),e("6b0d")),v=e.n(j);const x=v()(k,[["render",O],["__scopeId","data-v-ef53ec98"]]);var y=x,L=["disabled","onClick"];function g(t,i,e,n,c,l){var o=this;return Object(s["i"])(),Object(s["d"])("div",null,[Object(s["e"])("ul",null,[Object(s["f"])(" List "+Object(s["n"])(e.ni+1),1),(Object(s["i"])(!0),Object(s["d"])(s["a"],null,Object(s["l"])(this.allLists[e.ni].length,(function(t){return Object(s["i"])(),Object(s["d"])("li",{key:t},[(Object(s["i"])(!0),Object(s["d"])(s["a"],null,Object(s["l"])(o.numberOfBoxs[e.ni][t-1],(function(i){return Object(s["i"])(),Object(s["d"])("button",{disabled:!1===o.allLists[e.ni][t-1],style:Object(s["h"])({"background-color":c.myColor[e.ni][t-1]}),key:i,onClick:function(i){return l.btnBoxs(t,e.ni)}},null,12,L)})),128))])})),128))])])}var B={props:["allLists","numberOfBoxs","ni","item","allColorsArr"],emits:["iter-item"],data:function(){return{myColor:this.allColorsArr}},methods:{btnBoxs:function(t,i){this.$emit("iter-item",t,i)}}};e("a933");const C=v()(B,[["render",g],["__scopeId","data-v-4f8cccfd"]]);var A=C,$={data:function(){return{numberOfBoxs:[[],[],[]],allLists:[[],[],[]],secondActivList:[!1,!1,!1],allColorsArr:[[],[],[]],myDot:[!1,!1,!1]}},components:{List:y,ListsOfItems:A},methods:{myAuthBoxs:function(t,i,e){this.allLists[e][t]=i[t],this.allLists[e].length=i.length},checkedAuthBox:function(t,i,e){this.allLists[e].length=i.length,this.allLists[e][t]=i[t]},inputNumberChange:function(t,i,e){this.numberOfBoxs[e][t]=i[t]},actualBox:function(t,i){this.allLists[i].length=t.length},alloFColors:function(t,i){this.allColorsArr[i]=t},iterItem:function(t,i){this.numberOfBoxs[i][t-1]-=1},checkedDot:function(t,i){this.myDot[i]=t}}};e("805c");const I=v()($,[["render",o],["__scopeId","data-v-5824c154"]]);var _=I;Object(s["b"])(_).mount("#app")},"805c":function(t,i,e){"use strict";e("9d65")},"9d65":function(t,i,e){},a933:function(t,i,e){"use strict";e("2966")},c871:function(t,i,e){"use strict";e("15e2")}});
//# sourceMappingURL=app.d76774dc.js.map