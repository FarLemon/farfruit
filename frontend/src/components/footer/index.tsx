import { Component } from "solid-js";

import SVGlogo from "@components/SVGlogo";



const style_footer: object = {
  "margin-top": "auto",
  "display": "flex",
  "align-items": "center",
  "justify-content": "space-between",
  "padding": "0.75rem calc(50vw - 175px)"
};



const Footer: Component = () => {

  return (
      <footer class="background--gray-6 text--gray-4 text--xs" style={style_footer}>
          <SVGlogo width="1.5rem" height="1.5rem" />
          <p>Copyright &#169; 2022 FarFruit. All Rights Resered</p>
      </footer>
  );
};



export default Footer;