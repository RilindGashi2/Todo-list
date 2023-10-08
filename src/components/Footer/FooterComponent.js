// FooterComponent.js

import React from 'react';
import './Footercomponent.css'; 




const FooterComponent = () => {
  return (
    <>
      
     
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
      />
      
     
      <div class="footer-basic">
        <footer>
          <div class="social">
            <a href="#">
              <i class="icon ion-social-instagram"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-snapchat"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-twitter"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-facebook"></i>
            </a>
          </div>
         
          <p class="copyright">RilindGashi © 2023</p>
        </footer>
      </div>
    </>
  );
};

export default FooterComponent;
