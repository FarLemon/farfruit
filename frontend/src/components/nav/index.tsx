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
    <nav class="nav background--gray-6 text--gray-2 text--500 text--sm" onChange={() => {setOpen(false)}}>
        <SVGlogo class="nav__icon"/>
        <button class="nav__hamburger" onClick={() => setOpen(!open())}>
          <svg class={"nav__hamburger__svg" + (open() ? " active" : "")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80">
            <rect id="top" x="0" y="0" rx="3" width="100" height="6"/>
            <rect id="middle" x="0" y="37" rx="3" width="100" height="6"/>
            <rect id="bottom" x="0" y="74" rx="3" width="100" height="6"/>
          </svg>
        </button>

        <ul class={"nav__links" + (open() ? " active" : "")}>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/company" onClick={() => setOpen(false)}>Company</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </ul>
    </nav>
  );
};



export default Nav;