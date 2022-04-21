import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useState, useEffect } from "react";

function Footer() {
  const [showBtn, setShowBtn] = useState('');

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowBtn('on');
      } else {
        setShowBtn('');
      }
    });
  }, []);

  return (
    <>
      <BsFillArrowUpCircleFill
        onClick={scrollToTop}
        className={"scroll-to-top " + showBtn}
      />
    </>
  );
}

export default Footer;
