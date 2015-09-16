var React=require("react/addons");
var Root=require("./containers/Root.jsx");
var store=require("./store/todos.js");
var Provider=require("react-redux").Provider;

React.render(
  <Provider store={store}>
    {function() { return <Root />; }}
  </Provider>,document.getElementById("root"));
