"use strict";(self.webpackChunksql_join_tables=self.webpackChunksql_join_tables||[]).push([[671],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(h,i(i({ref:e},d),{},{components:n})):a.createElement(h,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9881:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:1},s="Introduction",p={unversionedId:"intro",id:"intro",title:"Introduction",description:"When setting up a relational SQL database, an important task is identifying which tables will go in the database, and how those tables are related to each other. One way to do this involves modeling the target domain in terms of entities and their relationships. The following document will describe three kinds of entity relationships, and illustrate how they can be implemented as persistent, structured data in a SQL database.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/join-tables-conceptual/docs/intro",editUrl:"https://github.com/ingrey1/join-tables-conceptual.git/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"One-To-One Entity Relationships",permalink:"/join-tables-conceptual/docs/entity-domain-modeling/one-to-one-relationships"}},d=[],u={toc:d};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"When setting up a relational SQL database, an important task is identifying which tables will go in the database, and how those tables are related to each other. One way to do this involves modeling the target domain in terms of entities and their relationships. The following document will describe three kinds of entity relationships, and illustrate how they can be implemented as persistent, structured data in a SQL database.  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Domain: a situation or context. For example, a Dinosaur or Movie domain.        "),(0,l.kt)("li",{parentName:"ul"},"Entity: these are the objects that exist in a given domain. For example, a Dinosaur domain might have plant, lake, and dinosaur entities; a Movie domain might have movie, director, viewer, and venue entities.")),(0,l.kt)("p",null,"Suppose that the goal is to setup a database for a wolf preserve, in order to track the health and success of a cave wolf repopulation effort. The domain is the forest where the wolves live. This domain contains many different entities: trees, bushes, caves, bacteria, molecules, wolves, rabbits. However, not all of these entities are relevant for the practical concerns that will determine which tables go in the wildlife database. For example, a 'bush' could be a relevant entity for a database aimed at cataloging plant life, but it's not important for the wolf database."),(0,l.kt)("p",null,"Here are a couple potentially relevant entities: 'wolf' and 'cave'. The wolves need to be tracked, so the database will have a Wolf table. These wolves live in caves, so the database should also have a Cave table. "),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Wolf")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"age"),(0,l.kt)("th",{parentName:"tr",align:null},"weight"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Nighteyes"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"200")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Halla"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"150")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Claw"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"80")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Swift"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"110")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Cave")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"size"),(0,l.kt)("th",{parentName:"tr",align:null},"location"),(0,l.kt)("th",{parentName:"tr",align:null},"mineral"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"800"),(0,l.kt)("td",{parentName:"tr",align:null},"78"),(0,l.kt)("td",{parentName:"tr",align:null},"Granite")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"600"),(0,l.kt)("td",{parentName:"tr",align:null},"43"),(0,l.kt)("td",{parentName:"tr",align:null},"Limestone")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"400"),(0,l.kt)("td",{parentName:"tr",align:null},"62"),(0,l.kt)("td",{parentName:"tr",align:null},"Mud")))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"The next section will examine the 'wolf' and 'cave' entity relationship, and consider how that relationship can be realized in a hypothetical wildlife database with Wolf and Cave tables."))}c.isMDXComponent=!0}}]);