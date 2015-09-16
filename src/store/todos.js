var assign = require('object-assign');
var types = require('../constants/ActionTypes');
var createStore = require('redux').createStore;

var initialState = [{
    text: 'Learning Redux',
    marked: false,
    id: 0
}];

function todos(state, action) {
    state = state || initialState;
    switch (action.type) {
        case types.ADD_TODO:
            return [{
                id: (state.length === 0) ? 0 : state[0].id + 1,
                marked: false,
                text: action.text
            }].concat(state);

        case types.DELETE_TODO:
            return state.filter(function(todo) {
                return todo.id !== action.id;
            });

        case types.EDIT_TODO:
            return state.map(function(todo) {
                return todo.id === action.id ?
                    assign({}, todo, {
                        text: action.text
                    }) : todo;
            });


        default:
            return state;
    }
};

module.exports = createStore(todos,initialState);
