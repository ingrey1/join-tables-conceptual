"use strict";(self.webpackChunksql_join_tables=self.webpackChunksql_join_tables||[]).push([[297],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,i(i({ref:e},u),{},{components:n})):a.createElement(h,i({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6232:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:1},p="One-To-One Entity Relationships",s={unversionedId:"entity-domain-modeling/one-to-one-relationships",id:"entity-domain-modeling/one-to-one-relationships",title:"One-To-One Entity Relationships",description:"---",source:"@site/docs/entity-domain-modeling/one-to-one-relationships.md",sourceDirName:"entity-domain-modeling",slug:"/entity-domain-modeling/one-to-one-relationships",permalink:"/join-tables-conceptual/docs/entity-domain-modeling/one-to-one-relationships",editUrl:"https://github.com/ingrey1/join-tables-conceptual.git/docs/entity-domain-modeling/one-to-one-relationships.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/join-tables-conceptual/docs/intro"},next:{title:"One-To-Many Entity Relationships",permalink:"/join-tables-conceptual/docs/entity-domain-modeling/one-to-many-relationships"}},u=[],c={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"one-to-one-entity-relationships"},"One-To-One Entity Relationships"),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Wolf")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"age"),(0,l.kt)("th",{parentName:"tr",align:null},"weight"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Nighteyes"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"200")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Claw"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"80")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Cave")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"size"),(0,l.kt)("th",{parentName:"tr",align:null},"location"),(0,l.kt)("th",{parentName:"tr",align:null},"mineral"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"800"),(0,l.kt)("td",{parentName:"tr",align:null},"78"),(0,l.kt)("td",{parentName:"tr",align:null},"Granite")))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"The kind of relationship between two entities depends on the situation. Assume that in the cave-wolf domain, the wolves never share caves, and only ever inhabit one cave at a time. In this case, a 'wolf' and a 'cave' stand in a ",(0,l.kt)("strong",{parentName:"p"},"one-to-one")," relationship: a wolf has one cave, and each cave belongs to one wolf. "),(0,l.kt)("p",null,"To capture this relationship between the Wolf and Cave tables, we can add a new column to the Wolf table: 'cave_id'."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Wolf")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"age"),(0,l.kt)("th",{parentName:"tr",align:null},"weight"),(0,l.kt)("th",{parentName:"tr",align:null},"cave_id"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Nighteyes"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Claw"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"80"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"By adding the Cave 'id' as a foreign key named 'cave_id' to the Wolf table, the hypothetical database has successfully captured the one-to-one relationship between the 'wolf' and 'cave' entities. Now, if someone is curious which cave Nighteyes lives in, they can check the 'cave_id'. In this case, Nighteyes lives in the cave with a primary key of 4. Looking at the Cave table, it's clear Nighteyes occupies the cave at location 78 in the forest, and that cave is made of Granite."),(0,l.kt)("p",null,"Of course, not every cave wolf will have a cave. This state of affairs is represented in Claw's record as an empty or null 'cave_id' value."),(0,l.kt)("p",null,"The next section will illustrate the one-to-many relationship, using 'wolf' and 'rabbit' entities."))}d.isMDXComponent=!0}}]);