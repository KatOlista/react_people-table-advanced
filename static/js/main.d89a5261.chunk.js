(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{38:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(26),r=(c(36),c(37),c(7)),a=c(3),s=(c(38),c(10)),l=c.n(s),i=c(1),j=function(){var e=function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})};return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(r.c,{className:e,to:"/",children:"Home"}),Object(i.jsx)(r.c,{"aria-current":"page",className:e,to:"/people",children:"People"})]})})})},o=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(j,{}),Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(a.b,{})})})]})},u=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},d=c(4),b=c(0),h=c(5),O=c(9),x=c(15),p=c(8),m=function(e){return e.Name="name",e.Sex="sex",e.Born="born",e.Died="died",e}({});function f(e,t){return e.find((function(e){return e.name===t}))}var v=["16","17","18","19","20"],g="https://mate-academy.github.io/react_people-table/api/people.json";function N(e){return new Promise((function(t){return setTimeout(t,e)}))}function y(){return(y=Object(p.a)(Object(h.a)().mark((function e(){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N(500).then((function(){return fetch(g)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return e.map((function(t){var c=t.motherName,n=t.fatherName;return Object(x.a)(Object(x.a)({},t),{},{mother:c?f(e,c):void 0,father:n?f(e,n):void 0})}))}var S=c(27);function k(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(d.a)(e,2),n=t[0],r=t[1];null===r?c.delete(n):Array.isArray(r)?(c.delete(n),r.forEach((function(e){c.append(n,e)}))):c.set(n,r)})),c.toString()}var P=["children","params"],A=function(e){var t=e.children,c=e.params,n=Object(S.a)(e,P),a=Object(r.d)(),s=Object(d.a)(a,1)[0];return Object(i.jsx)(r.b,Object(x.a)(Object(x.a)({to:{search:k(s,c)}},n),{},{children:t}))},E=function(e){var t,c=e.value,n=Object(r.d)(),a=Object(d.a)(n,1)[0].getAll("centuries")||[],s=a.includes(c);return Object(i.jsx)(A,{"data-cy":"century",className:l()("button","mr-1",{"is-info":s}),params:{centuries:(t=c,a.includes(t)?a.filter((function(e){return e!==t})):[].concat(Object(O.a)(a),[t]))},children:c})},F=function(e){return e.Name="Name",e.Sex="Sex",e.Born="Born",e.Died="Died",e}({}),L=function(e){return e.All="",e.Male="m",e.Female="f",e}({}),q=function(e){var t=e.sexValue,c=Object(r.d)(),n=Object(d.a)(c,1)[0].get("sex")||"",a=L[t],s=n===a;return"All"===t&&(a=null,s=!n),Object(i.jsx)(A,{className:l()({"is-active":s}),params:{sex:a},children:t})},M=function(){var e=Object(r.d)(),t=Object(d.a)(e,2),c=t[0],n=t[1],a=c.get("query")||"",s=c.getAll("centuries")||[];return Object(i.jsxs)("nav",{className:"panel",children:[Object(i.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(i.jsx)("p",{className:"panel-tabs","data-cy":"SexFilter",children:Object.keys(L).map((function(e){return Object(i.jsx)(q,{sexValue:e},e)}))}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("p",{className:"control has-icons-left",children:[Object(i.jsx)("input",{value:a,"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",onChange:function(e){e.target.value?n(k(c,{query:e.target.value})):n(k(c,{query:null}))}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(i.jsx)("div",{className:"level-left",children:v.map((function(e){return Object(i.jsx)(E,{value:e},e)}))}),Object(i.jsx)("div",{className:"level-right ml-4",children:Object(i.jsx)(A,{"data-cy":"centuryALL",className:l()("button","is-success",{"is-outlined":!!s.length}),params:{centuries:[]},children:"All"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsx)("a",{className:"button is-link is-outlined is-fullwidth",href:"#/people",children:"Reset all filters"})})]})},B=(c(40),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})}),_=function(e){return e.FEMALE="f",e.MALE="m",e}({}),C=function(e){var t=e.person,c=t.name,n=t.sex,a=t.slug,s=Object(r.d)(),j=Object(d.a)(s,1)[0],o=n===_.FEMALE;return Object(i.jsx)(r.b,{to:"../people/".concat(a,"?").concat(j.toString()),className:l()({"has-text-danger":o}),children:c})},D=function(e){var t=e.person,c=e.selectedPersonSlug,n=t.slug,r=t.sex,a=t.born,s=t.died,j=t.fatherName,o=t.motherName,u=t.mother,d=t.father,b=c===n;return Object(i.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":b}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(C,{person:t})}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:u?Object(i.jsx)(C,{person:u}):o||"-"}),Object(i.jsx)("td",{children:d?Object(i.jsx)(C,{person:d}):j||"-"})]})},T=function(e){var t,c=e.value,n=Object(r.d)(),a=Object(d.a)(n,1)[0],s=c.toLowerCase(),l=a.get("sort")||"",j=a.get("order")||"";return Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[c,Object(i.jsx)(A,{params:(t=s,t!==l?{sort:t,order:null}:l!==t||j?{sort:null,order:null}:{sort:t,order:"desc"}),children:Object(i.jsxs)("span",{className:"icon",children:[s!==l&&Object(i.jsx)("i",{className:"fas fa-sort"}),s===l&&!j&&Object(i.jsx)("i",{className:"fas fa-sort-up"}),j&&s===l&&Object(i.jsx)("i",{className:"fas fa-sort-down"})]})})]})},c)},R=function(e){var t=e.people,c=e.filteredPeople,n=e.setFilteredPeople,s=Object(a.r)().slug||"",l=Object(b.useState)(t),j=Object(d.a)(l,2),o=j[0],u=j[1],h=Object(r.d)(),x=Object(d.a)(h,1)[0],p=x.get("sort")||"",f=x.get("order")||"",v=x.get("query")||"",g=x.getAll("centuries")||[],N=x.get("sex")||"",y={query:v,centuries:g,sex:N};return Object(b.useEffect)((function(){u(function(e,t){return t?Object(O.a)(e).sort((function(e,c){switch(t){case m.Name:case m.Sex:return e[t].localeCompare(c[t]);case m.Born:case m.Died:return e[t]-c[t];default:return 0}})):Object(O.a)(e)}(t,p))}),[p,v,g.length,N]),Object(b.useEffect)((function(){n(function(e,t){var c=t;return e.sex&&(c=c.filter((function(t){return t.sex===e.sex}))),e.centuries.length&&(c=c.filter((function(t){var c=Math.ceil(t.born/100);return e.centuries.includes(c.toString())}))),e.query&&(c=c.filter((function(t){var c,n;return t.name.includes(e.query)||(null===(c=t.motherName)||void 0===c?void 0:c.includes(e.query))||(null===(n=t.fatherName)||void 0===n?void 0:n.includes(e.query))}))),c}(y,o))}),[v,g.length,N,o]),"desc"===f&&c.reverse(),Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object.keys(F).map((function(e){return Object(i.jsx)(T,{value:e},e)})),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:c.map((function(e){return Object(i.jsx)(D,{person:e,selectedPersonSlug:s},e.slug)}))}),Object(i.jsx)(a.b,{})]})},H=function(){var e=Object(b.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(b.useState)([]),a=Object(d.a)(r,2),s=a[0],l=a[1],j=Object(b.useState)(!1),o=Object(d.a)(j,2),u=o[0],h=o[1],O=Object(b.useState)(!1),x=Object(d.a)(O,2),p=x[0],m=x[1];Object(b.useEffect)((function(){h(!0),function(){return y.apply(this,arguments)}().then((function(e){n(w(e)),l(w(e))})).catch((function(){m(!0),n([])})).finally((function(){h(!1)}))}),[]);var f=p&&!u,v=!c.length&&!p&&!u,g=!u&&!s.length&&!v;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(i.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:!u&&Object(i.jsx)(M,{})}),Object(i.jsx)("div",{className:"column",children:Object(i.jsxs)("div",{className:"box table-container",children:[u&&Object(i.jsx)(B,{}),f&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",children:"Something went wrong"}),v&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),g&&Object(i.jsx)("p",{children:"There are no people matching the current search criteria"}),!!c.length&&Object(i.jsx)(R,{people:c,filteredPeople:s,setFilteredPeople:l})]})})]})})]})},J=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},V=function(){return Object(i.jsx)(r.a,{children:Object(i.jsx)(a.e,{children:Object(i.jsxs)(a.c,{path:"/",element:Object(i.jsx)(o,{}),children:[Object(i.jsx)(a.c,{index:!0,element:Object(i.jsx)(u,{})}),Object(i.jsx)(a.c,{path:"home",element:Object(i.jsx)(a.a,{to:"/",replace:!0})}),Object(i.jsx)(a.c,{path:"people",element:Object(i.jsx)(H,{})}),Object(i.jsx)(a.c,{path:"people/:slug?",element:Object(i.jsx)(H,{})}),Object(i.jsx)(a.c,{path:"*",element:Object(i.jsx)(J,{})})]})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(V,{}))}},[[41,1,2]]]);
//# sourceMappingURL=main.d89a5261.chunk.js.map