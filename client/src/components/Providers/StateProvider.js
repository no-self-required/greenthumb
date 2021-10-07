import { createContext, useState } from 'react';
export const stateContext = createContext();
export default function StateProvider(props) {

  // Here is our Shared State Object
  const [likes, setlikes] = useState(0);

  // Functions to change  the counter state item
  const increment = function() {
    setlikes(likes + 1);
  };
  const decrement = function() {
    setlikes(likes - 1);
  };
  // const clear = function() {
  //   setState({ ...state, counter: 0 });
  // };

  // This list can get long with a lot of functions.  Reducer may be a better choice
  const likesData = { likes, increment, decrement };

  // We can now use this as a component to wrap anything 
  // that needs our state
  return (
    <stateContext.Provider value={likesData}>
      {props.children}
    </stateContext.Provider>
  );
};