export function saveState(state) {
  console.log(state);
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch(e) {
    // error
  }
}

export function loadState() {
  try {
    var serializedState = localStorage.getItem('state');
    if( serializedState === null ) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch(e) {
    return undefined;
  }
}
