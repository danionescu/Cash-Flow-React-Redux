function createStore(reducer, initialState) {
  return {
    state: initialState,
    reducer: reducer,
    observers: [],

    getState() {
      return this.state;
    },

    dispatch(action) {
      this.state = reducer(action, this.state);
      this.observers.forEach(observer => {
        observer();
      })
    },

    subscribe(observer) {
      this.observers = [...this.observers, observer];

      return function() {
        this.observers = this.observers.filter(item => item !== observer);
      }.bind(this);
    }

  }
}

function simpleReducer(action, state = [] ) {
  switch( action.type ) {
    case "om":
    state = [...state, "om"]
    break;
    case "nom":
    state = [...state, "nom"];
    break;
  }

  return state;
}

var store = createStore(simpleReducer, []);
var unsubscribe = store.subscribe(function(state) {
  console.log(store.getState());
});

store.dispatch({type: "om"});
// console.log: ["om"]
store.dispatch({type: "nom"});
// console.log: ["om", "nom"]
store.dispatch({type: "nom"});
// console.log: ["om", "nom", "nom"]

unsubscribe();

store.dispatch({type: "nom"});
// nothing is printed
