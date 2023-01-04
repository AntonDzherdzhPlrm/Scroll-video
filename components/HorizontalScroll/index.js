import classNames from "classnames";
import gsap from "gsap";
import { useEffect } from "react";
import styles from "./HorizontalScroll.module.css";

// function directionalSnap(increment) {
//   let snapFunc = gsap.utils.snap(increment);
//   return (raw, self) => {
//     let n = snapFunc(raw);
//     return Math.abs(n - raw) < 1e-4 || (n < raw) === self.direction < 0 ? n : self.direction < 0 ? n - increment : n + increment;
//   };
// }

const HorizontalScroll = () => {
  useEffect(() => {
    const { ScrollTrigger } = require("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);

    const horizontalSections = gsap.utils.toArray("#animationWrap > div");

    gsap.to(horizontalSections, {
      xPercent: -100 * (horizontalSections.length - 1),
      ease: "none", // <-- IMPORTANT!
      scrollTrigger: {
        trigger: "#container",
        pin: true,
        scrub: 0.1,
        // snap: directionalSnap(1 / (horizontalSections.length - 1)),
        end: "2000 top", //"+=" + 3000,
      },
    });
  }, []);

  return (
    <div className={styles.container} id="container">
      <div
        className={classNames(styles.animationWrap, styles.toRight)}
        id="animationWrap"
      >
        <div className={styles.item}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
          Quis excepturi voluptates atque dolorum minus eligendi! Omnis minima
          magni recusandae ex dignissimos.
        </div>
        <div className={styles.item}>
          Eaque ullam illum nobis deleniti mollitia unde, sed, nemo ipsa ratione
          ex, dicta aliquam voluptates! Odio vitae eum nobis dignissimos sunt
          ipsum repellendus totam optio distinctio. Laborum suscipit quia
          aperiam.
        </div>
        <div className={styles.item}>
          Animi, porro molestias? Reiciendis dolor aspernatur ab quos nulla
          impedit, dolores ullam hic commodi nobis nam. Dolorem expedita
          laudantium dignissimos nobis a. Dolorem, unde quidem. Tempora et a
          quibusdam inventore!
        </div>
        <div className={styles.item}>
          Labore, unde amet! Alias delectus hic laboriosam et dolorum? Saepe,
          dicta eaque? Veniam eos blanditiis neque. Officia et nostrum, tempore
          modi quo praesentium aspernatur vero dolor, ipsa unde perspiciatis
          minima.
        </div>
        <div className={styles.item}>
          Quaerat error dolorem aspernatur magni dicta ut consequuntur maxime
          tempore. Animi odio eos quod culpa nulla consectetur? Aperiam ipsam
          ducimus delectus reprehenderit unde, non laborum voluptate laboriosam,
          officiis at ea!
        </div>
        <div className={styles.item}>
          Rem nobis facere provident magni minima iste commodi aliquam harum?
          Facere error quos cumque perspiciatis voluptatibus deserunt maiores,
          fugiat sunt sit ab inventore natus saepe, eveniet alias ipsam placeat
          voluptas!
        </div>
        <div className={styles.item}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus, temporibus esse magni illum eos natus ipsum minus?
          Quis excepturi voluptates atque dolorum minus eligendi! Omnis minima
          magni recusandae ex dignissimos.
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
