(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/emptyCover.9fd03e55.png"},21:function(e,t,a){e.exports=a(35)},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(18),c=a.n(r),l=a(6),s=a(7),i=a(9),h=a(8),u=a(10),m=a(4),b=a(0),f=a(14),d="https://reactnd-books-api.udacity.com",k=localStorage.token;k||(k=localStorage.token=Math.random().toString(36).substr(-8));var p={Accept:"application/json",Authorization:k},v=function(e,t){return fetch("".concat(d,"/books/").concat(e.id),{method:"PUT",headers:Object(f.a)({},p,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},E=function(e){return fetch("".concat(d,"/search"),{method:"POST",headers:Object(f.a)({},p,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},g=function(e){var t=e.book,a=e.books,n=e.changeShelf,r="none",c=!0,l=!1,s=void 0;try{for(var i,h=a[Symbol.iterator]();!(c=(i=h.next()).done);c=!0){var u=i.value;if(u.id===t.id){r=u.shelf;break}}}catch(m){l=!0,s=m}finally{try{c||null==h.return||h.return()}finally{if(l)throw s}}return o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{onChange:function(e){return n(t,e.target.value)},defaultValue:r},o.a.createElement("option",{value:"move",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))},y=a(19),S=a.n(y),N=function(e){var t=e.book,a=e.books,n=e.changeShelf,r=e.id,c=t.imageLinks&&t.imageLinks.thumbnail?t.imageLinks.thumbnail:S.a,l=t.title?t.title:"Title not Available";return o.a.createElement("li",{key:r},o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(c,")")}}),o.a.createElement(g,{book:t,books:a,changeShelf:n})),o.a.createElement("div",{className:"book-title"},l),t.authors&&t.authors.map(function(e,t){return o.a.createElement("div",{className:"book-authors",key:t},e)})))},j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={searchValue:"",searchResults:[],emptySearch:!1},a.getBook=function(e){var t=e.target.value;a.setState({searchValue:t}),t?E(t.trim()).then(function(e){e.length>0?a.setState({searchResults:e,emptySearch:!1}):a.setState({searchResults:[],emptySearch:!0})}):a.setState({searchResults:[],emptySearch:!0})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.books,a=e.changeShelf,n=this.state,r=n.searchValue,c=n.searchResults,l=n.emptySearch;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(m.b,{className:"close-search",to:"/"},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:r,onChange:this.getBook}))),o.a.createElement("div",{className:"search-books-results"},c&&r&&o.a.createElement("ol",{className:"books-grid"},c.map(function(e,n){return o.a.createElement(N,{book:e,books:t,changeShelf:a,key:e.id})})),l&&o.a.createElement("h3",null,"We do not have the book which matches these criteria"),!r&&!l&&o.a.createElement("h3",null,"You can search the book by using the seach input")))}}]),t}(o.a.Component),O=function(e){var t=e.books,a=e.changeShelf;return o.a.createElement("ol",{className:"books-grid"},t.map(function(e,n){return o.a.createElement(N,{book:e,books:t,changeShelf:a,key:n})}))},R=function(e){var t=e.books,a=e.changeShelf;return o.a.createElement("div",{className:"list-books-content"},[{name:"currentlyReading",title:"Currently Reading"},{name:"wantToRead",title:"Want to Read"},{name:"read",title:"Read"}].map(function(e,n){var r=t.filter(function(t){return t.shelf===e.name});return o.a.createElement("div",{className:"bookshelf",key:n},o.a.createElement("h2",{className:"bookshelf-title"},e.title),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement(O,{books:r,changeShelf:a,key:n})))}))},w=function(){return o.a.createElement("div",{className:"screen404"},o.a.createElement("p",{className:"heading"},"OOPS!"),o.a.createElement("p",{className:"paragraph"},"We can't find the page you're looking for!"),o.a.createElement("button",{className:"homePageButton",variant:"outline-primary"},o.a.createElement(m.b,{className:"homepageLink",to:"/"},"Visit homepage")))},C=function(){return o.a.createElement("div",{className:"spinner"},o.a.createElement("div",{className:"s s1"}),o.a.createElement("div",{className:"s s2"}),o.a.createElement("div",{className:"s s3"}),o.a.createElement("div",{className:"s s4"}))},T=(a(31),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.changeShelf=function(e,t){v(e,t).then(function(){e.shelf=t,a.setState(function(t){return{books:t.books.filter(function(t){return t.id!==e.id}).concat(e)}})})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(d,"/books"),{headers:p}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){return e.setState({books:t})})}},{key:"render",value:function(){var e=this,t=this.state.books;return o.a.createElement("div",{className:"app"},t.length?o.a.createElement(m.a,null,o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/search",render:function(){return o.a.createElement(j,{books:t,changeShelf:e.changeShelf})}}),o.a.createElement(b.a,{exact:!0,path:"/",render:function(){return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement(R,{books:t,changeShelf:e.changeShelf}),o.a.createElement("div",{className:"open-search"},o.a.createElement(m.b,{to:"/search"},o.a.createElement("button",null,"Search a book"))))}}),o.a.createElement(b.a,{path:"*",component:w}))):o.a.createElement(C,null))}}]),t}(o.a.Component));a(33);c.a.render(o.a.createElement(T,null),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.48b4bedf.chunk.js.map