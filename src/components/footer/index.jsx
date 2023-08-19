import React from "react";
import { footerStyle } from "./style";
import { Link } from "react-router-dom";
import siteLogo from "../../assets/images/site-logo.svg";

export const Footer = () => {
  const classes = footerStyle();

  return (
    <div className={classes.footerWrapper}>
      <footer className="site-footer" id="footer">
        <div className="bottom-footer">
          <div className="container">
            <div className="text-center">
              <div className="footer-logo">
                {/* <Link to="/" title="logo">
                  <img src={siteLogo} alt="sitelogo" />
                </Link> */}
                <h2 style={{color:"#af4df1",fontFamily:"arial",fontSize:"30px"}}>BOOKSTORE</h2>         
              </div>
              <p className="copyright-text">
                © BOOKSTORE.com. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
