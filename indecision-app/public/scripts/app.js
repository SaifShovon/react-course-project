console.log('App.js is running');
// JSX -Javascript XML

// var template = React.createElemrnt(
// 	"h1",
// 	{id:"someid"},
// 	"Somenthing New"
// );
// var appRoot = documrnt.getElementById('app');
// ReactDOM.render(template,appRoot);
//var template = <p>hhhhhhhhhh</p>;
var template = React.createElement("p", {
 id: "someid"
}, "this is JSX from app.js!!");
var appRoot = document.getElementById('app');
ReactDOM.render(template,appRoot);