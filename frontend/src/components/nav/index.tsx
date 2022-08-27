import { Link } from "@solidjs/router";
import { Component, createSignal, onCleanup, onMount } from "solid-js";

import "@styles/components/_nav.scss";

import SVGlogo from "@components/SVGlogo";



const Nav: Component = () => {
  const [open, setOpen] = createSignal(false);

  onMount(() => {
    window.addEventListener("resize", () => {
      setOpen(false);
    });
  });

  onCleanup(() => {
    window.removeEventListener("resize", () => {
      setOpen(false);
    });
  });


  return (
    <div class="nav__spacer">
      <nav class="nav background--gray-6 text--gray-2 text--500 text--sm" onChange={() => {setOpen(false)}}>
          <SVGlogo class="nav__icon"/>

          <ul class={"nav__links" + (open() ? " active" : "")}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/alasgdfk">404</Link>
          </ul>
      </nav>
    </div>
  );
};



export default Nav;