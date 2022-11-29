import gsap from "gsap";
import * as ScrollMagic from "scrollmagic-with-ssr"; // Or use scrollmagic-with-ssr to avoid server rendering problems// Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { useEffect, useRef } from "react";

import styles from "./ScrollComponent.module.css";

const ScrollComponent = () => {
  const introRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);

  const load = async () => {
    if (typeof window !== undefined) {
      ScrollMagicPluginGsap(ScrollMagic, gsap);
      const controller = new ScrollMagic.Controller();

      let scene = new ScrollMagic.Scene({
        duration: 57000,
        triggerElement: introRef.current,
        triggerHook: 0,
      })
        .setPin(introRef.current)
        .addTo(controller);

      const textAnim = gsap.fromTo(
        textRef.current,
        { opacity: 1, fontSize: "80px" },
        { opacity: 0, fontSize: "20px" }
      );

      new ScrollMagic.Scene({
        duration: 8000,
        triggerElement: introRef.current,
        triggerHook: 0,
      })
        .setTween(textAnim)
        .addTo(controller);

      let accelamount = 0.2;
      let scrollpos = 0;
      let delay = 0;

      scene.on("update", (e) => {
        scrollpos = e.scrollPos / 1000;
      });

      setInterval(() => {
        delay += (scrollpos - delay) * accelamount;
        videoRef.current.currentTime = delay;
      }, 65);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div ref={introRef} className={styles.intro}>
      <h1 ref={textRef}>Some text</h1>
      <video ref={videoRef} src="/TOP.mp4" />
      <section className={styles.section}>
        <h1>Section</h1>
      </section>
    </div>
  );
};

export default ScrollComponent;
