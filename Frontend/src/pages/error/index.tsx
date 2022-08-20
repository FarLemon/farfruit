import { Component } from "solid-js";

import "@styles/pages/_error.scss";



const Error: Component = () => {

  return (
    <>
      <h1>404 Page not Found!</h1>
      <p>Return to <a href="/">Home Page</a></p>
    </>
  );
};



export default Error;