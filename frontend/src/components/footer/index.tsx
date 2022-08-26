import { Component } from "solid-js";

import "@styles/components/_footer.scss";

import SVGlogo from "@components/SVGlogo";



const Footer: Component = () => {

  return (
      <footer class="footer">
          <SVGlogo class="footer__icon"/>
          <p class="footer__text">Copyright &#169; 2022 FarFruit. All Rights Resered</p>
      </footer>
  );
};



export default Footer;