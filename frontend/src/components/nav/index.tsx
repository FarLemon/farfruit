import { Link } from "@solidjs/router";
import { Component, createSignal, For, onCleanup, onMount } from "solid-js";

import SVGlogo from "@components/SVGlogo";

import "@styles/components/_nav.scss";



const Nav: Component = () => {
  const [isOpen, setOpen] = createSignal(false);
  const [isHamburger, setHamburger] = createSignal((window.innerWidth < 720) ? true : false);
  const [links] = createSignal([
    { text: "Home", directory: "/", focused: false },
    { text: "About", directory: "/about", focused: false },
    { text: "Company", directory: "/company", focused: false },
    { text: "Contact", directory: "/contact", focused: false }
  ]);



  onMount(() => {
    window.addEventListener("resize", () => {
      setOpen(false);
      window.innerWidth < 720 ? setHamburger(true) : setHamburger(false);
    });
  });

  onCleanup(() => {
    window.removeEventListener("resize", () => {
      setOpen(false);
      window.innerWidth < 720 ? setHamburger(true) : setHamburger(false);
    });
  });



  const Hamburger: Component = () => {
    return (
      <button class="nav__hamburger" onClick={() => setOpen(!isOpen())}>
        <svg class={(isOpen() ? "open" : "")} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 80">
          <rect id="top" class="fill--gray-6" x="0" y="0" rx="3" width="100" height="6"/>
          <rect id="middle" class="fill--gray-6" x="0" y="37" rx="3" width="100" height="6"/>
          <rect id="bottom" class="fill--gray-6" x="0" y="74" rx="3" width="100" height="6"/>
        </svg>
      </button>
    )
  }



  const Links: Component = () => {
    return (
      <ul class={"nav__links" + (isHamburger() ? " hamburger" : "") + (isHamburger() && isOpen() ? " open" : "")}>
        <For each={links()}>{(link) =>
          <Link class="nav__links__link" href={link.directory} onClick={() => setOpen(false)}>{link.text}</Link>
        }</For>
      </ul>
    )
  }



  return (
    <nav class="nav background--light text--gray-6 text--500 text--sm">
        <SVGlogo class="nav__icon" width="2.5rem" height="2.5rem"/>

        {isHamburger() ? <Hamburger /> : <></>}

        <Links />
    </nav>
  );
};



export default Nav;