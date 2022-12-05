import gsap from "gsap";
import * as ScrollMagic from "scrollmagic-with-ssr"; // Or use scrollmagic-with-ssr to avoid server rendering problems// Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import { useEffect, useRef } from "react";

import styles from "./ScrollComponent.module.css";

const ScrollComponent = () => {
  const introRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);
  const sectionRef = useRef(null);
  const textSectionRef = useRef(null);

  const load = async () => {
    if (typeof window !== undefined) {
      ScrollMagicPluginGsap(ScrollMagic, gsap);
      const controller = new ScrollMagic.Controller();

      let scene = new ScrollMagic.Scene({
        duration: 6000,
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

      const bgAnim = gsap.fromTo(bgRef.current, { opacity: 0 }, { opacity: 1 });

      const textSectionAnim = gsap.fromTo(
        textSectionRef.current,
        { opacity: 0, fontSize: "20px" },
        { opacity: 1, fontSize: "80px" }
      );

      new ScrollMagic.Scene({
        duration: 4000,
        triggerElement: introRef.current,
        triggerHook: 0,
      })
        .setTween(textAnim)
        .addTo(controller);

      new ScrollMagic.Scene({
        duration: 3000,
        offset: 4000,
        triggerElement: introRef.current,
        triggerHook: 0.5,
      })
        .setTween(bgAnim)
        .addTo(controller);

      new ScrollMagic.Scene({
        duration: 1000,
        offset: 6000,
        triggerElement: introRef.current,
        triggerHook: 0,
      })
        .setTween(textSectionAnim)
        .addTo(controller);

      let accelamount = 0.3;
      let scrollpos = 0;
      let delay = 0;

      scene.on("update", (e) => {
        scrollpos = e.scrollPos / 1000;
      });

      setInterval(() => {
        delay += (scrollpos - delay) * accelamount;
        videoRef.current.currentTime = delay;
      }, 200);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div ref={introRef} className={styles.intro}>
      <div className={styles.videoContainer}>
        <div ref={bgRef} className={styles.bgContainer} />
        <h1 ref={textRef}>Some text</h1>
        <video ref={videoRef} src="/video1.mp4" />
      </div>

      <section ref={sectionRef} className={styles.section}>
        <h1 ref={textSectionRef}>Section</h1>
      </section>
    </div>
  );
};

export default ScrollComponent;
