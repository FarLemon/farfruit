import { Component } from "solid-js";

import "@styles/components/_footer.scss";

import SVGlogo from "@components/SVGlogo";



const Footer: Component = () => {

  return (
      <footer class="footer">
        <div class="footer__content">
          <SVGlogo class="footer__content__icon"/>
          <p class="footer__content__text">Copyright &#169; 2022 FarFruit. All Rights Resered</p>
        </div>
      </footer>
  );
};



export default Footer;