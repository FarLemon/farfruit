import { Route, Routes } from "@solidjs/router";
import { Component } from "solid-js";

import "@styles/_global.scss";

import Error from "@pages/error";
import Home from "@pages/home";



const App: Component = () => {

  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="/" component={Home}/>
          <Route path="/home" component={Home}/>
        </Route>

        <Route path="/*all" component={Error}/>
      </Routes>
    </>
  );
};


export default App;