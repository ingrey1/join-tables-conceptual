"use strict";(self.webpackChunksql_join_tables=self.webpackChunksql_join_tables||[]).push([[110],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=u(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||s[c]||l;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4872:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:3,custom_edit_url:null},p="Many-To-Many Entity Relationships",u={unversionedId:"entity-domain-modeling/many-to-many-relationships",id:"entity-domain-modeling/many-to-many-relationships",title:"Many-To-Many Entity Relationships",description:"---",source:"@site/docs/entity-domain-modeling/many-to-many-relationships.md",sourceDirName:"entity-domain-modeling",slug:"/entity-domain-modeling/many-to-many-relationships",permalink:"/join-tables-conceptual/docs/entity-domain-modeling/many-to-many-relationships",editUrl:null,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"One-To-Many Entity Relationships",permalink:"/join-tables-conceptual/docs/entity-domain-modeling/one-to-many-relationships"},next:{title:"Querying With The SQL Join Table",permalink:"/join-tables-conceptual/docs/join-tables/querying-with-join-table"}},m=[],s={toc:m};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"many-to-many-entity-relationships"},"Many-To-Many Entity Relationships"),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Wolf")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id (PK)"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"age"),(0,l.kt)("th",{parentName:"tr",align:null},"weight"),(0,l.kt)("th",{parentName:"tr",align:null},"cave_id (FK)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Nighteyes"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Young Bull"),(0,l.kt)("td",{parentName:"tr",align:null},"50"),(0,l.kt)("td",{parentName:"tr",align:null},"65"),(0,l.kt)("td",{parentName:"tr",align:null},"77")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Water")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id (PK)"),(0,l.kt)("th",{parentName:"tr",align:null},"location"),(0,l.kt)("th",{parentName:"tr",align:null},"type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"33"),(0,l.kt)("td",{parentName:"tr",align:null},"lake")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"45"),(0,l.kt)("td",{parentName:"tr",align:null},"river")))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"The cave wolves have to drink when they're thirsty. Fortunately, the forest has many sources of water, including: lakes and rivers. Because the cave wolf database will track drinking behavior, it's fine to introduce a Water table. A single wolf may frequent multiple water sources, and often a lake or river will have multiple wolves drinking from it on any given occasion. In this situation, a 'wolf' has many 'water' sources, and each 'water' source has many a 'wolf' drinking from it. This is known as a ",(0,l.kt)("strong",{parentName:"p"},"many-to-many")," relationship."),(0,l.kt)("p",null,"When SQL tables have a ",(0,l.kt)("strong",{parentName:"p"},"one-to-one")," or ",(0,l.kt)("strong",{parentName:"p"},"one-to-many")," relationship, adding a ",(0,l.kt)("strong",{parentName:"p"},"foreign key")," on one of the tables is sufficient to realize the relationship in the database. However, for ",(0,l.kt)("strong",{parentName:"p"},"many-to-many")," relationships between two tables, it's best practice to introduce a third table, often called a ",(0,l.kt)("strong",{parentName:"p"},"Join Table"),"."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"WolfWater")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id (PK)"),(0,l.kt)("th",{parentName:"tr",align:null},"wolf_id (FK)"),(0,l.kt)("th",{parentName:"tr",align:null},"water_id (FK)"),(0,l.kt)("th",{parentName:"tr",align:null},"date"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2000-12-28")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2000-12-29")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"2000-12-30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"2000-12-30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"2000-12-30")))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Each row of the WolfWater ",(0,l.kt)("strong",{parentName:"p"},"Join Table")," represents an occasion on which a 'wolf' drank from a 'water' source. For example, consider the 'wolf' named Nighteyes who has the 'id' of 1. It can be seen that there are three rows with a 'wolf_id' of 1. This means there were three separate occasions on which Nighteyes drank from a 'water' source. On \"2000-12-28\" and \"2000-12-29\", Nighteyes drank from 'water_id'  1, and on \"2000-12-30\", he drank from the 'water_id' 2."),(0,l.kt)("p",null,"Now that the ",(0,l.kt)("strong",{parentName:"p"},"many-to-many")," relationship between 'wolf' and 'water' source has been established via the ",(0,l.kt)("strong",{parentName:"p"},"Join Table")," WolfWater, this table can be used to answer questions about drinking behavior via SQL queries."))}d.isMDXComponent=!0}}]);