(this["webpackJsonpemployee-directory-app"]=this["webpackJsonpemployee-directory-app"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),r=c.n(n),i=c(15),a=c.n(i),j=c(3),l=c(17),o=(c(23),function(e){var t=e.employees,c=Object(n.useState)([]),r=Object(j.a)(c,2),i=r[0],a=r[1];return Object(n.useEffect)((function(){return a(t)}),[t]),Object(s.jsx)("div",{className:"table-responsive",children:Object(s.jsxs)("table",{className:"table table-striped",children:[Object(s.jsx)("thead",{className:"table-header",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"Picture"}),Object(s.jsx)("th",{scope:"col",children:"Title"}),Object(s.jsx)("th",{scope:"col",onClick:function(){var e=Object(l.a)(t).sort((function(e,t){var c=e.name.first,s=t.name.first;return c<s?-1:c>s?1:0}));a(e)},children:"FirstName"}),Object(s.jsx)("th",{scope:"col",children:"LastName"}),Object(s.jsx)("th",{scope:"col",children:"Gender"}),Object(s.jsx)("th",{scope:"col",children:"Email"}),Object(s.jsx)("th",{scope:"col",children:"Phone Number"}),Object(s.jsx)("th",{scope:"col",children:"Mobile"}),Object(s.jsx)("th",{scope:"col",children:"City"}),Object(s.jsx)("th",{scope:"col",children:"State"}),Object(s.jsx)("th",{scope:"col",children:"Country"}),Object(s.jsx)("th",{scope:"col",children:"Zip Code"})]})}),Object(s.jsx)("tbody",{className:"table-data",children:i.map((function(e){var t=e.location,c=t.city,n=t.state,r=t.country,i=t.postcode,a=e.picture.thumbnail,j=e.cell,l=e.phone,o=e.gender,b=e.email,d=e.name,h=d.first,u=d.last,O=d.title;return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("img",{alt:"Employee images",src:a})}),Object(s.jsx)("td",{children:O}),Object(s.jsx)("th",{children:h}),Object(s.jsx)("td",{children:u}),Object(s.jsx)("td",{children:o}),Object(s.jsx)("td",{children:b}),Object(s.jsx)("td",{children:l}),Object(s.jsx)("td",{children:j}),Object(s.jsx)("td",{children:c}),Object(s.jsx)("td",{children:n}),Object(s.jsx)("td",{children:r}),Object(s.jsx)("td",{children:i}),Object(s.jsx)("td",{})]},b)}))})]})})}),b=(c(24),function(e){var t=e.employees,c=e.updateEmployees,r=Object(n.useState)(""),i=Object(j.a)(r,2),a=i[0],l=i[1];return Object(n.useEffect)((function(){var e=""===a?t:t.filter((function(e){return e.name.first.toLowerCase().indexOf(a.toLowerCase())>=0}));c(e)}),[a,t]),Object(s.jsxs)("div",{className:"filter-data",children:[Object(s.jsx)("p",{className:"sub-header",children:"To filter by first name, please begin your search in the user input!"}),Object(s.jsx)("input",{className:"input-box",value:a,onChange:function(e){return l(e.target.value)}})]})});c(25);var d=function(){return Object(s.jsxs)("footer",{className:"footer",children:[Object(s.jsx)("a",{href:"https://www.linkedin.com/in/enxhi-salaj-09a859173/",children:Object(s.jsx)("i",{className:"fab fa-linkedin fa-2x"})}),Object(s.jsxs)("a",{href:"https://github.com/Enxhis",children:[Object(s.jsx)("i",{className:"fab fa-github fa-2x"})," "]}),Object(s.jsx)("br",{}),Object(s.jsx)("p",{className:"copyright",children:"\xa9 Enxhi Salaj 2021"})]})};c(26);var h=function(){return Object(s.jsx)("div",{className:"header",children:Object(s.jsx)("h1",{children:"Employee Directory"})})},u=c(16),O=c.n(u);var x=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)([]),a=Object(j.a)(i,2),l=a[0],u=a[1];return Object(n.useEffect)((function(){O.a.get("https://randomuser.me/api/?results=200&nat=us").then((function(e){var t=e.data.results;return r(t)}))}),[]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(h,{}),Object(s.jsx)(b,{employees:c,updateEmployees:u}),Object(s.jsx)(o,{employees:l}),Object(s.jsx)(d,{})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),r(e),i(e)}))};c(45);a.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),p()}},[[46,1,2]]]);
//# sourceMappingURL=main.9aceddbb.chunk.js.map