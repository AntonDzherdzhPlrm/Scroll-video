import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Frog } from "../../data/frogSequence";

import styles from "./SequenceFrog.module.css";

const SequenceFrog = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const { ScrollTrigger } = require("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);
    const context = canvasRef.current.getContext("2d");

    canvasRef.current.width = 1920;
    canvasRef.current.height = 1080;

    const frameCount = Frog.length;
    const offset_value = 20;

    const images = [];
    const airpods = {
      frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = Frog[i].src;
      images.push(img);
    }

    gsap.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "steps(" + frameCount + ")",
      scrollTrigger: {
        trigger: "#mainFrog",
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
        canvasRef.current.width,
        canvasRef.current.height
      );
      context.drawImage(images[airpods.frame], 0, 0);
    }
  }, []);

  return (
    <div className={styles.main} id="mainFrog">
      <canvas className={styles.canvas} id="frog" ref={canvasRef} />
    </div>
  );
};

export default SequenceFrog;
