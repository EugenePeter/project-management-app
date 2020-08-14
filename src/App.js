import React from "react";

import { Switch, Route } from "react-router-dom";
import { useImmerReducer } from "use-immer";

import DispatchContext from "./context/DispatchContext";
import StateContext from "./context/StateContext";

import ChatComponent from "./components/chat-component/chat-component";
import ChatInput from "./components/chat-component/chat-input";
import LoginComponent from "./components/login/login";
import RegisterComponent from "./components/register-component/register-component";
import HomePage from "./components/page/home-page.component";

function App() {
  const initialState = {
    loggedIn: false,
    username: "",
    chatRoom: "",
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.loggedIn = true;
        return;
      case "username":
        draft.username = action.value;
        return;
      case "chatRoom":
        draft.chatRoom = action.value;
        return;
      default:
        return state;
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Switch>
          <Route exact path="/register">
            <RegisterComponent />
          </Route>
          <Route exact path="/login">
            <LoginComponent />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/chat/:name">
            <ChatComponent />
          </Route>
          <Route path="/test">
            <ChatInput />
          </Route>
        </Switch>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
