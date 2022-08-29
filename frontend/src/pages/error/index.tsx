import { Component } from "solid-js";



const Error: Component = () => {

  return (
    <>
      <div style={{"margin": "auto"}}>
        <h1 style={{"margin-bottom": "0.5rem"}}>404: Page Not Found!</h1>
        <p class="text--xs" style={{"text-align": "center"}}>It seems that the page you are looking for doesn't exist</p>
      </div>
    </>
  );
};



export default Error;