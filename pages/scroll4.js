import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import {
  Component1,
  Component2,
  Component3,
  Component4,
  Component5,
  SequenceCanvas,
  SequenceFrog,
  HorizontalScroll,
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
      <HorizontalScroll />
      <Component3 />
      <SequenceFrog />
      <Component4 />
      <Component5 />
      <div className={styles.imgContainer}>
        <Image
          src="https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/0001.jpg"
          alt="phones"
          width={1158}
          height={770}
        />
      </div>
    </div>
  );
};

export default Scroll4;
