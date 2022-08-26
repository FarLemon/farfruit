import { Link } from "@solidjs/router";
import { Component } from "solid-js";

import "@styles/components/_nav.scss";

import SVGlogo from "@components/SVGlogo";



const Nav: Component = () => {

  return (
      <nav class="nav">
          <SVGlogo class="nav__icon"/>
          <ul class="nav__links">
            <Link href="/">Home</Link>
            <Link href="/alasgdfk">404</Link>
          </ul>
      </nav>
  );
};



export default Nav;