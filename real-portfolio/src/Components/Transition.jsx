/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import "./Transition.css";
import { Power1 } from "gsap";
function Transition({ timeline }) {
  const trans = useRef(null);
  useEffect(() => {
    timeline.to(trans.current, {
      duration: 3.5,
      x: 2500,
      ease: Power1.easeOut,
    });
  });
  return (
    <div>
      <div className="transition-effect" ref={trans}></div>
    </div>
  );
}

export default Transition;
