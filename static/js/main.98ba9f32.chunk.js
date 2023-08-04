(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(8),a=c.n(n),r=c(7),s=c(16),i=c(6),o=c(14),l=c(15),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/REMOVE":return null;case"currentTodo/SET":return t.payload;default:return e}},h=c(5),b=function(e){return{type:"ALL",payload:e}},f=function(e){return{type:"ACTIVE",payload:e}},m=function(e){return{type:"COMPLETED",payload:e}},p=function(e){return{type:"INPUT",payload:e}},O={query:"",status:"all"},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ALL":return{query:t.payload,status:"all"};case"ACTIVE":return{query:t.payload,status:"active"};case"COMPLETED":return{query:t.payload,status:"completed"};case"INPUT":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});default:return e}},v=function(e){return{type:"todos/GET",payload:e}},y=[],N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;return"todos/GET"===t.type?t.payload:e},g=Object(i.combineReducers)({currentTodo:j,filter:x,todos:N}),T=Object(i.createStore)(g,Object(o.composeWithDevTools)(Object(i.applyMiddleware)(l.a))),w=c(9),E=c(3),k=c(4),C=c.n(k),q=c(0),L=(c(25),c(26),r.b),S=r.c,I=c(1),A=function(){var e=L(),t=S((function(e){return e.currentTodo})),c=S((function(e){return e.filter})),n=S((function(e){return e.todos.filter((function(e){return e.title.toLocaleLowerCase().includes(c.query.toLocaleLowerCase())}))})),a=function(){switch(c.status){case"all":return n.filter((function(e){return e}));case"active":return n.filter((function(e){return!e.completed}));case"completed":return n.filter((function(e){return e.completed}));default:return n}};return Object(I.jsxs)(I.Fragment,{children:[c.query&&!a().length&&Object(I.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),Object(I.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[!!a().length&&Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:"#"}),Object(I.jsx)("th",{children:Object(I.jsx)("span",{className:"icon",children:Object(I.jsx)("i",{className:"fas fa-check"})})}),Object(I.jsx)("th",{children:"Title"}),Object(I.jsx)("th",{children:" "})]})}),Object(I.jsx)("tbody",{children:a().map((function(c){return Object(I.jsxs)("tr",{"data-cy":"todo",children:[Object(I.jsx)("td",{className:"is-vcentered",children:c.id}),Object(I.jsx)("td",{className:"is-vcentered",children:c.completed&&Object(I.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(I.jsx)("i",{className:"fas fa-check"})})}),Object(I.jsx)("td",{className:"is-vcentered is-expanded",children:Object(I.jsx)("p",{className:c.completed?"has-text-success":"has-text-danger",children:c.title})}),Object(I.jsx)("td",{className:"has-text-right is-vcentered",children:Object(I.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return e(d(c))},children:Object(I.jsx)("span",{className:"icon",children:Object(I.jsx)("i",{className:"far ".concat((n=c.id,(null===t||void 0===t?void 0:t.id)===n?"fa-eye-slash":"fa-eye"))})})})})]},c.id);var n}))})]})]})},P=function(){var e=L(),t=S((function(e){return e.filter})),c=function(t){return e(p(t))};return Object(I.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(I.jsx)("p",{className:"control",children:Object(I.jsx)("span",{className:"select",children:Object(I.jsxs)("select",{"data-cy":"statusSelect",onChange:function(c){return function(c){switch(c){case"active":return e(f(t.query));case"completed":return e(m(t.query));default:return e(b(t.query))}}(c.target.value)},children:[Object(I.jsx)("option",{value:"all",children:"All"}),Object(I.jsx)("option",{value:"active",children:"Active"}),Object(I.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(I.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(I.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t.query,onChange:function(e){return c(e.target.value)}}),Object(I.jsx)("span",{className:"icon is-left",children:Object(I.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(I.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t.query&&Object(I.jsx)("button",{"data-cy":"clearSearchButton","aria-label":"delete",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},D=(c(28),function(){return Object(I.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(I.jsx)("div",{className:"Loader__content"})})});function M(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var _=function(){var e=L(),t=S((function(e){return e.currentTodo})),c=Object(q.useState)({email:"",name:""}),n=Object(E.a)(c,2),a=n[0],r=n[1],s=Object(q.useState)(!0),i=Object(E.a)(s,2),o=i[0],l=i[1];return Object(q.useEffect)((function(){var e=function(){var e=Object(w.a)(C.a.mark((function e(){var c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,l(!0),e.next=6,n=t.userId,M("/users/".concat(n));case 6:c=e.sent,r(c),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(2),new Error("Error");case 13:return e.prev=13,l(!1),e.finish(13);case 16:case"end":return e.stop()}var n}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(I.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(I.jsx)("div",{className:"modal-background"}),o?Object(I.jsx)(D,{}):t&&Object(I.jsxs)("div",{className:"modal-card",children:[Object(I.jsxs)("header",{className:"modal-card-head",children:[Object(I.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(I.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return e(u())}})]}),Object(I.jsxs)("div",{className:"modal-card-body",children:[Object(I.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(I.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(I.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(I.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(I.jsx)("a",{href:"mailto:".concat(a.email),children:"".concat(a.name)})]})]})]})]})},V=function(){var e=L(),t=Object(q.useState)(!1),c=Object(E.a)(t,2),n=c[0],a=c[1],r=S((function(e){return e.currentTodo}));return Object(q.useEffect)((function(){var t=function(){var t=Object(w.a)(C.a.mark((function t(){var c;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(!0),t.next=4,M("/todos");case 4:c=t.sent,e(v(c)),t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(0),new Error("Error");case 11:return t.prev=11,a(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{className:"section",children:Object(I.jsx)("div",{className:"container",children:Object(I.jsx)("div",{className:"box",children:n?Object(I.jsx)(D,{}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("h1",{className:"title",children:"Todos:"}),Object(I.jsx)("div",{className:"block",children:Object(I.jsx)(P,{})}),Object(I.jsx)("div",{className:"block",children:Object(I.jsx)(A,{})})]})})})}),r&&Object(I.jsx)(_,{})]})},B=function(){return Object(I.jsx)(r.a,{store:T,children:Object(I.jsx)(s.a,{children:Object(I.jsx)(V,{})})})};a.a.render(Object(I.jsx)(B,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.98ba9f32.chunk.js.map