(this["webpackJsonpwould-you-rather"]=this["webpackJsonpwould-you-rather"]||[]).push([[0],{65:function(e,t,n){},66:function(e,t,n){},76:function(e,t,n){},79:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(30),r=n.n(s),c=(n(65),n(66),n(13)),i=n(6),u={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"/avatars/avatar-6.png",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"/avatars/avatar-1.png",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"/avatars/avatar-2.png",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},d={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function j(e){return new Promise((function(t,n){var a=e.author,o=function(e){var t=e.optionOneText,n=e.optionTwoText,a=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:a,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout((function(){d=Object(i.a)(Object(i.a)({},d),{},Object(c.a)({},o.id,o)),u=Object(i.a)(Object(i.a)({},u),{},Object(c.a)({},a,Object(i.a)(Object(i.a)({},u[a]),{},{questions:u[a].questions.concat([o.id])}))),t(o)}),1e3)}))}var l=n(24),h=n.n(l),b="RECEIVE_USERS",p="RECEIVE_QUESTIONS",O="ANSWER_QUESTION",m="NEW_QUESTION",x=function(){return function(e){e(Object(l.showLoading)()),Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(i.a)({},u))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(i.a)({},d))}),1e3)}))]).then((function(t){var n,a;e((n=t[0],{type:b,users:n})),e((a=t[1],{type:p,questions:a}))})).finally((function(){return e(Object(l.hideLoading)())}))}},v=function(e,t){var n=e.authedUser,a=e.qid,o=e.answer;return function(e){e(Object(l.showLoading)()),function(e){var t=e.authedUser,n=e.qid,a=e.answer;return new Promise((function(e,o){setTimeout((function(){u=Object(i.a)(Object(i.a)({},u),{},Object(c.a)({},t,Object(i.a)(Object(i.a)({},u[t]),{},{answers:Object(i.a)(Object(i.a)({},u[t].answers),{},Object(c.a)({},n,a))}))),d=Object(i.a)(Object(i.a)({},d),{},Object(c.a)({},n,Object(i.a)(Object(i.a)({},d[n]),{},Object(c.a)({},a,Object(i.a)(Object(i.a)({},d[n][a]),{},{votes:d[n][a].votes.concat([t])}))))),e()}),500)}))}({authedUser:n,qid:a,answer:o}).then((function(){e(function(e,t,n){return{type:O,id:t,authed:e,answer:n}}(n,a,o)),t&&t()})).finally((function(){return e(Object(l.hideLoading)())}))}},f=function(e,t){var n=e.optionOneText,a=e.optionTwoText,o=e.author;return function(e){e(Object(l.showLoading)()),j({optionOneText:n,optionTwoText:a,author:o}).then((function(n){e(function(e){return{type:m,question:e}}(n)),t&&t(n.id)})).finally((function(){return e(Object(l.hideLoading)())}))}};function y(e,t){switch(t.type){case O:return Object(i.a)(Object(i.a)({},e),{},{answers:Object(i.a)(Object(i.a)({},e.answers),{},Object(c.a)({},t.id,t.answer))});case m:return Object(i.a)(Object(i.a)({},e),{},{questions:e.questions.concat([t.question])});default:return e}}function w(e,t){switch(t.type){case O:return Object(i.a)(Object(i.a)({},e),{},Object(c.a)({},t.answer,function(e,t){switch(t.type){case O:return Object(i.a)(Object(i.a)({},e),{},{votes:e.votes.concat([t.authed])});default:return e}}(e[t.answer],t)));default:return e}}var g="LOG_IN",q="LOG_OUT",T=function(e){return{type:g,id:e}},k=function(){return{type:q}};var N=n(27),C=Object(N.c)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(i.a)(Object(i.a)({},e),t.users);case O:return Object(i.a)(Object(i.a)({},e),{},Object(c.a)({},t.authed,y(e[t.authed],t)));case m:return Object(i.a)(Object(i.a)({},e),{},Object(c.a)({},t.question.author,y(e[t.question.author],t)));default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(i.a)(Object(i.a)({},e),t.questions);case O:return Object(i.a)(Object(i.a)({},e),{},Object(c.a)({},t.id,w(e[t.id],t)));case m:return Object(i.a)(Object(i.a)({},e),{},Object(c.a)({},t.question.id,Object(i.a)({},t.question)));default:return e}},authed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.id;case q:return null;default:return e}},loadingBar:l.loadingBarReducer}),L=Object(N.a)((function(e){var t=e.dispatch,n=e.getState;return function(e){return function(a){return"function"===typeof a?a(t,n):e(a)}}}),(function(e){e.dispatch;var t=e.getState;return function(e){return function(n){console.group(n.type),console.log("The action is",n);var a=e(n);return console.log("The state is",t()),console.groupEnd(),a}}})),S=Object(N.d)(C,L),A=n(7),U=n(8),z=n(10),R=n(9),E=function(e,t,n){var a=e.id,o=e.optionOne,s=e.optionTwo,r=t.name,c=t.avatarURL,i=n?o.votes.includes(n.id)?"optionOne":s.votes.includes(n.id)?"optionTwo":"":"";return{id:a,name:r,avatarURL:c,optionOneText:o.text,optionOneVotes:o.votes.length,optionTwoText:s.text,optionTwoVotes:s.votes.length,totalVotes:o.votes.length+s.votes.length,authedAnswer:i}},Q=function(e,t){var n=e/t*100;return{percent:n,text:"".concat(n.toFixed(1),"%")}},P=n(12),D=(n(76),n(1)),I=function(e){Object(z.a)(n,e);var t=Object(R.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"render",value:function(){var e=this.props,t=e.question,n=e.QuestionSub;return t?Object(D.jsxs)("div",{className:"question",children:[Object(D.jsx)("div",{className:"question-img",children:Object(D.jsx)("img",{src:t.avatarURL,alt:t.name})}),Object(D.jsxs)("div",{className:"question-right",children:[Object(D.jsxs)("h6",{className:"question-header",children:[t.name," asks ... ?"]}),Object(D.jsx)(n,{question:t})]})]}):Object(D.jsx)("h3",{children:"Question not found"})}}]),n}(a.Component),W=Object(P.connect)((function(e,t){var n=e.questions,a=e.authed,o=e.users,s=t.id,r=a?o[a]:null,c=n[s];return{question:c?E(c,o[c.author],r):null}}))(I),V=n(18),F=function(e){Object(z.a)(n,e);var t=Object(R.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"render",value:function(){var e=this.props.question;return Object(D.jsxs)("div",{className:"question-body",children:[Object(D.jsxs)("p",{children:[e.optionOneText," or ",e.optionTwoText,"?"]}),Object(D.jsx)(V.Link,{className:"button",to:"/".concat(e.authedAnswer?"result":"answer","/").concat(e.id),children:e.authedAnswer?"See Result":"Answer"})]})}}]),n}(a.Component),G=n(11),M=(n(79),"answered"),_="unanswered",B=function(e){Object(z.a)(n,e);var t=Object(R.a)(n);function n(){var e;Object(A.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={active:_},e.changeQuestions=function(t){e.setState({active:t})},e}return Object(U.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.authed,a=t.questions,o=this.state.active,s=n?Object.keys(n.answers):[],r=n?a.filter((function(e){var t=s.includes(e);return o===M?t:!t})):a;return Object(D.jsxs)(D.Fragment,{children:[!n&&Object(D.jsx)(G.c,{to:"/login"}),Object(D.jsx)("h1",{className:"text-center my-4",children:"Would you rather"}),Object(D.jsxs)("div",{className:"home-container",children:[Object(D.jsxs)("div",{className:"btns-wrapper",children:[Object(D.jsx)("button",{className:"button ".concat(o===_?"active":""),onClick:function(){return e.changeQuestions("unanswered")},children:"Unanswered Questions"}),Object(D.jsx)("button",{className:"button ".concat(o===M?"active":""),onClick:function(){return e.changeQuestions("answered")},children:"Answered Questions"})]}),Object(D.jsx)("div",{className:"questions-wrapper",children:r.map((function(e){return Object(D.jsx)(W,{id:e,QuestionSub:F},e)}))})]})]})}}]),n}(a.Component),J=Object(P.connect)((function(e){var t=e.authed,n=e.users,a=e.questions;return{questions:Object.keys(a),authed:t?n[t]:null}}))(B),$=n(93),H=n(97),X=n(95),K=n(60),Y=function(e){Object(z.a)(n,e);var t=Object(R.a)(n);function n(){var e;Object(A.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={id:""},e.handleChange=function(t){e.setState({id:t})},e.handleSubmit=function(t){t.preventDefault();var n=e.state.id;e.state.id?e.props.dispatch(T(n)):alert("Please choose a user")},e.componentDidMount=function(){e.props.authed&&e.props.history.push("/")},e.componentDidUpdate=function(){e.props.authed&&e.props.history.push("/")},e}return Object(U.a)(n,[{key:"render",value:function(){var e=this,t=this.props.users;return Object(D.jsxs)("div",{className:"border border-dark p-3",children:[Object(D.jsx)("h4",{className:"text-center mb-1",children:"Welcome to would you rather game"}),Object(D.jsx)("h6",{className:"text-center mb-3",children:"Please choose a user to start playing"}),Object(D.jsx)($.a,{className:"d-block mx-auto my-5",src:"https://tse4.mm.bing.net/th?id=OIP.b3kDLAq9vS0APl1nwmlXnAAAAA&pid=Api",alt:"Would you rather",fluid:!0,rounded:!0}),Object(D.jsxs)(H.a,{onSubmit:this.handleSubmit,children:[Object(D.jsx)(H.a.Group,{children:Object(D.jsxs)(X.a,{className:"my-3",children:[Object(D.jsx)(X.a.Toggle,{variant:"secondary",id:"dropdown-basic",children:this.state.id?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)($.a,{className:"img",src:t[this.state.id].avatarURL}),t[this.state.id].name]}):"Choose a user"}),Object(D.jsx)(X.a.Menu,{children:Object.keys(t).map((function(n){return Object(D.jsxs)(X.a.Item,{onClick:function(){return e.handleChange(n)},children:[Object(D.jsx)($.a,{className:"img",src:t[n].avatarURL},n),t[n].name]},n)}))})]})}),Object(D.jsx)(K.a,{className:"w-100",variant:"primary",type:"submit",block:!0,children:"Login"})]})]})}}]),n}(a.Component),Z=Object(P.connect)((function(e){return{users:e.users,authed:e.authed}}))(Y),ee=n(94),te=function(e){Object(z.a)(n,e);var t=Object(R.a)(n);function n(){var e;Object(A.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={answer:"",isAnswered:!1},e.handleChange=function(t){e.setState({answer:t.target.value})},e.handleAnswer=function(t){t.preventDefault(),e.setState({isAnswered:!0}),e.props.dispatch(v({authedUser:e.props.authed.id,qid:e.props.question.id,answer:e.state.answer},(function(){return e.props.history.push("/result/".concat(e.props.question.id))})))},e}return Object(U.a)(n,[{key:"render",value:function(){var e=this.props,t=e.question,n=e.authed;return console.log(this.state.answer),Object(D.jsxs)(D.Fragment,{children:[(!n||Object.keys(n.answers).includes(t.id))&&Object(D.jsx)(G.c,{to:"/"}),Object(D.jsxs)("div",{className:"question-body",children:[Object(D.jsx)("h6",{children:"Would you rather .."}),Object(D.jsxs)(H.a,{onSubmit:this.handleAnswer,children:[Object(D.jsx)(ee.a,{className:"p-2",children:Object(D.jsx)(H.a.Check,{type:"radio",name:"answer",value:"optionOne",onClick:this.handleChange,label:t.optionOneText,required:!0})}),Object(D.jsx)(ee.a,{className:"p-2",children:Object(D.jsx)(H.a.Check,{type:"radio",name:"answer",value:"optionTwo",onClick:this.handleChange,label:t.optionTwoText,required:!0})}),Object(D.jsx)("button",{className:"button mt-5",to:"/answer/".concat(t.id),disabled:this.state.isAnswered,children:"Answer"})]})]})]})}}]),n}(a.Component),ne=Object(G.o)(Object(P.connect)((function(e){var t=e.authed,n=e.users;return{authed:t?n[t]:null}}))(te)),ae=function(e){Object(z.a)(n,e);var t=Object(R.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"render",value:function(){var e=this.props.match.params.id;return Object(D.jsx)(W,{id:e,QuestionSub:ne},e)}}]),n}(a.Component),oe=n(99),se=function(e){Object(z.a)(n,e);var t=Object(R.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"render",value:function(){var e=this.props.question,t=e.optionOneText,n=e.optionOneVotes,a=e.optionTwoText,o=e.optionTwoVotes,s=e.totalVotes,r=e.authedAnswer,c=Q(n,s),i=c.percent,u=c.text,d=Q(o,s),j=d.percent,l=d.text;return Object(D.jsxs)("div",{className:"question-body",children:[Object(D.jsx)("h4",{children:"Results:"}),Object(D.jsxs)("div",{className:"question-result",children:[Object(D.jsxs)("div",{className:"result-box ".concat("optionOne"===r?"your":""),children:[Object(D.jsxs)("p",{children:["Would you rather ",t,"?"]}),Object(D.jsx)(oe.a,{now:i,label:u,variant:"success"}),Object(D.jsxs)("p",{className:"votes text-center",children:[n," out of ",s," votes"]})]}),Object(D.jsxs)("div",{className:"result-box ".concat("optionTwo"===r?"your":""),children:[Object(D.jsxs)("p",{children:["Would you rather ",a,"?"]}),Object(D.jsx)(oe.a,{now:j,label:l,variant:"success"}),Object(D.jsxs)("p",{className:"votes text-center",children:[o," out of ",s," votes"]})]})]}),Object(D.jsx)(V.Link,{className:"button mt-2",to:"/",children:"Go back"})]})}}]),n}(a.Component),re=function(e){Object(z.a)(n,e);var t=Object(R.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"render",value:function(){var e=this.props.match.params.id;return Object(D.jsx)(W,{id:e,QuestionSub:se},e)}}]),n}(a.Component),ce=function(e){Object(z.a)(n,e);var t=Object(R.a)(n);function n(){var e;Object(A.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={optionOneText:"",optionTwoText:""},e.handleChange=function(t){e.setState(Object(c.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.optionOneText,o=n.optionTwoText,s=e.props.authed;e.props.dispatch(f({optionOneText:a,optionTwoText:o,author:s},(function(t){return e.props.history.push("/answer/".concat(t))})))},e}return Object(U.a)(n,[{key:"render",value:function(){return Object(D.jsxs)(D.Fragment,{children:[!this.props.authed&&Object(D.jsx)(G.c,{to:"/"}),Object(D.jsxs)("div",{className:"border border-dark p-3",children:[Object(D.jsx)("h2",{className:"text-center mb-3",children:"Create your question"}),Object(D.jsx)("p",{children:"Would you rather ..."}),Object(D.jsxs)(H.a,{onSubmit:this.handleSubmit,children:[Object(D.jsxs)(H.a.Group,{children:[Object(D.jsx)(H.a.Label,{children:"First option:"}),Object(D.jsx)(H.a.Control,{name:"optionOneText",placeholder:"Enter you first option",onChange:this.handleChange,value:this.state.optionOneText,required:!0})]}),Object(D.jsxs)(H.a.Group,{children:[Object(D.jsx)(H.a.Label,{children:"Second option:"}),Object(D.jsx)(H.a.Control,{name:"optionTwoText",placeholder:"Enter you second option",onChange:this.handleChange,value:this.state.optionTwoText,required:!0})]}),Object(D.jsx)(K.a,{className:"my-3 w-100",type:"submit",variant:"primary",block:!0,children:"Create question"})]})]})]})}}]),n}(a.Component),ie=Object(P.connect)((function(e){return{authed:e.authed}}))(ce),ue=(n(86),function(e){Object(z.a)(n,e);var t=Object(R.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"render",value:function(){var e=this.props,t=e.user,n=e.rank,a=t.questions.length,o=Object.keys(t.answers).length;return Object(D.jsxs)("div",{className:"user","data-rank":n,children:[Object(D.jsx)("div",{className:"user-img",children:Object(D.jsx)("img",{src:t.avatarURL,alt:t.name})}),Object(D.jsxs)("div",{className:"user-body",children:[Object(D.jsxs)("p",{className:"user-info",children:[Object(D.jsx)("span",{children:"Questions Asked :"}),Object(D.jsx)("span",{className:"num",children:a})]}),Object(D.jsxs)("p",{className:"user-info",children:[Object(D.jsx)("span",{children:"Questions Answered :"}),Object(D.jsx)("span",{className:"num",children:o})]})]}),Object(D.jsxs)("div",{className:"user-score",children:[Object(D.jsx)("p",{className:"score text-center my-0 py-2",children:"Score"}),Object(D.jsx)("p",{className:"text-center my-0 py-2",children:a+o})]})]})}}]),n}(a.Component)),de=function(e){Object(z.a)(n,e);var t=Object(R.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"render",value:function(){var e=this.props,t=e.users,n=e.authed;return Object(D.jsxs)("div",{children:[!n&&Object(D.jsx)(G.c,{to:"/"}),Object(D.jsx)("h2",{className:"text-center my-4",children:"Leaderboard"}),t.map((function(e,t){return Object(D.jsx)(ue,{user:e,rank:t+1},e.id)}))]})}}]),n}(a.Component),je=function(e,t){return t[1].questions.length+Object.keys(t[1].answers).length-(e[1].questions.length+Object.keys(e[1].answers).length)},le=Object(P.connect)((function(e){var t=e.users,n=e.authed;return{users:Object.entries(t).sort(je).map((function(e){return e[1]})),authed:n}}))(de),he=n(38),be=n(96),pe=n(98),Oe=function(e){Object(z.a)(n,e);var t=Object(R.a)(n);function n(){var e;Object(A.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).handleLogout=function(){e.props.dispatch(k()),e.props.history.push("/login")},e}return Object(U.a)(n,[{key:"render",value:function(){var e=this.props.authed;return Object(D.jsxs)(be.a,{bg:"dark",variant:"dark",expand:"md",collapseOnSelect:!0,className:"p-3",children:[Object(D.jsx)(be.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(D.jsx)(be.a.Collapse,{id:"basic-navbar-nav",children:Object(D.jsxs)(pe.a,{className:"ml-auto",children:[Object(D.jsx)(he.LinkContainer,{to:"/",children:Object(D.jsx)(pe.a.Link,{children:"Home"})}),e&&Object(D.jsx)(he.LinkContainer,{to:"/new",children:Object(D.jsx)(pe.a.Link,{children:"New Question"})}),e&&Object(D.jsx)(he.LinkContainer,{to:"/leaderboard",children:Object(D.jsx)(pe.a.Link,{children:"LeaderBoard"})}),!e&&Object(D.jsx)(he.LinkContainer,{to:"/login",children:Object(D.jsx)(pe.a.Link,{children:"Login"})}),e&&Object(D.jsxs)("div",{className:"nav-info",children:[Object(D.jsx)($.a,{className:"img",src:e.avatarURL,alt:e.name,fluid:!0}),Object(D.jsx)("span",{children:e.name.split(" ")[0]})]}),e&&Object(D.jsx)(pe.a.Link,{onClick:this.handleLogout,children:"Logout"})]})})]})}}]),n}(a.Component),me=Object(G.o)(Object(P.connect)((function(e){var t=e.users,n=e.authed;return{authed:n?t[n]:null}}))(Oe)),xe=function(){return Object(D.jsx)("p",{className:"text-sm-center my-3",children:"Created by Abanoub Magdy \xa9 2021"})},ve=function(e){Object(z.a)(n,e);var t=Object(R.a)(n);function n(){return Object(A.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(x())}},{key:"render",value:function(){var e=this.props.authed;return Object(D.jsxs)(o.a.Fragment,{children:[Object(D.jsx)(me,{}),Object(D.jsx)(h.a,{}),!e&&Object(D.jsx)(G.c,{to:"/login"}),Object(D.jsxs)("main",{children:[Object(D.jsx)(G.d,{path:"/",exact:!0,component:J}),Object(D.jsx)(G.d,{path:"/login",component:Z}),Object(D.jsx)(G.d,{path:"/answer/:id",component:ae}),Object(D.jsx)(G.d,{path:"/result/:id",component:re}),Object(D.jsx)(G.d,{path:"/leaderboard",component:le}),Object(D.jsx)(G.d,{path:"/new",component:ie})]}),Object(D.jsx)(xe,{})]})}}]),n}(a.Component),fe=Object(P.connect)((function(e){return{authed:e.authed}}))(ve);r.a.render(Object(D.jsx)(P.Provider,{store:S,children:Object(D.jsx)(V.BrowserRouter,{children:Object(D.jsx)(fe,{})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.d2b8c417.chunk.js.map