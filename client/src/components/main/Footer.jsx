import React from "react";
import "../../styles/footer.css";

function Footer() {
  return (
    <footer>
      <p>
        בנייה:{" "}
        <a href="https://github.com/galguss" target="_blank" rel="noopener">
          גל גוסקובסקי
        </a>
      </p>
      <p>
        עיצוב:{" "}
        <a
          href="https://inbald6.wixsite.com/inbal-d-portfolio/%D7%A2%D7%99%D7%A6%D7%95%D7%91-%D7%92%D7%A8%D7%A4%D7%99"
          rel="noopener"
          target="_blank"
        >
          ענבל דגן
        </a>
      </p>
      <p>כל הזכויות שמורות למכללת כנרת &copy;</p>
    </footer>
  );
}

export default Footer;
