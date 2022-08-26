import { Route, Routes } from "@solidjs/router";
import { Component } from "solid-js";

import "@styles/_global.scss";

import Error from "@pages/error";
import Home from "@pages/home";

import Footer from "@components/footer";
import Nav from "@components/nav";



const App: Component = () => {

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/">
          <Route path="/" component={Home}/>
          <Route path="/home" component={Home}/>
        </Route>

        <Route path="/*all" component={Error}/>
      </Routes>

      <Footer/>
    </>
  );
};



export default App;