import { useState, useEffect } from "react";

let globalState = {};
let listeners = [];
/*
actions are in the form of:
{
    actionId: (globalState) =>{} (function to execute according to the action)
}
*/
let actions = {};

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];
  listeners.push(setState);

  const dispatch = (actionId, payload) => {
    const newState = actions[actionId](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }
    return () => {
      if (shouldListen) {
        listeners = listeners.filter((listener) => listener !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initState) => {
  if (initState) {
    globalState = { ...globalState, ...initState };
  }
  actions = { ...actions, ...userActions };
};
