import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";

import styles from "./SequenceCanvas.module.css";

const SequenceCanvas = () => {
  const canvasAirpodsRef = useRef(null);

  useEffect(() => {
    const { ScrollTrigger } = require("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);
    const context = canvasAirpodsRef.current.getContext("2d");

    canvasAirpodsRef.current.width = 1158;
    canvasAirpodsRef.current.height = 770;

    const frameCount = 147;
    const offset_value = 30;
    const currentFrame = (index) =>
      `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(
        index + 1
      )
        .toString()
        .padStart(4, "0")}.jpg`;

    const images = [];
    const airpods = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    gsap.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "steps(" + frameCount + ")",
      scrollTrigger: {
        trigger: "#main",
        start: "top top",
        end: "+=" + frameCount * offset_value,
        pin: true,
        scrub: true,
      },
      onUpdate: render,
    });

    images[0].onload = render;
    function render() {
      context.clearRect(
        0,
        0,
        canvasAirpodsRef.current.width,
        canvasAirpodsRef.current.height
      );
      context.drawImage(images[airpods.frame], 0, 0);
    }
  }, []);

  return (
    <div className={styles.main} id="main">
      <canvas className={styles.canvas} id="airpods" ref={canvasAirpodsRef} />
    </div>
  );
};

export default SequenceCanvas;
