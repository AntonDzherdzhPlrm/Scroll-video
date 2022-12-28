import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  Component1,
  Component2,
  Component3,
  Component4,
  Component5,
  SequenceCanvas,
} from "../components";

import styles from "../styles/Scroll4.module.css";

const Scroll4 = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const { ScrollTrigger } = require("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      start: "start",
      end: "max",
      onLeave: (self) => {
        self.scroll(1);
        ScrollTrigger.update();
      },
      onLeaveBack: (self) => {
        self.scroll(ScrollTrigger.maxScroll(window) - 1);
        ScrollTrigger.update();
      },
    });
  }, []);

  return (
    <div className={styles.container} ref={rootRef}>
      <SequenceCanvas />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
    </div>
  );
};

export default Scroll4;
