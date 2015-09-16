var React = require('react/addons');
var connect=require("react-redux").connect;
var bindActionCreators=require('redux').bindActionCreators;
var TodoActions=require("../actions/todos");

var Root = React.createClass({
  addTodo:function (text) {
    this.actions.addTodo(text);
  },
  deleteTodo:function (id) {
    this.actions.deleteTodo(id);

  },
  render: function() {
    var that=this;
    var dispatch=this.props.dispatch;
    var todos=this.props.todos;
    this.actions = bindActionCreators(TodoActions, dispatch);
    var todoNodes=todos.map(function (data) {
        return (
          <li><span>{data.id} .</span>{data.text}
            <input type="button" onClick={that.deleteTodo.bind(that,data.id)} value="delete">
            </input>
          </li>
        );
    });

    return (
      <div>
        <div>
          <h3>Dummy Todo</h3>
        </div>
        <ul>
          {todoNodes}
        </ul>
        <input type="button" onClick={this.addTodo.bind(this,"Learning Redux!")} value="Add Dummy Todo">

        </input>
      </div>

    );
  }

});

function mapStateToProps(state) {
  return {
    todos: state
  };
}

module.exports = connect(mapStateToProps)(Root);
