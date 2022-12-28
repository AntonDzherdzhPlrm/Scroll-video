import { cloneElement, useEffect, useRef } from "react";
import {
  // ScrollComponent,
  Component1,
  Component2,
  Component3,
  Component4,
  Component5,
  Sequence,
  SequenceCanvas
} from "../components";
import styles from "../styles/Scroll3.module.css";

const Scroll3 = () => {
  const scrollContainerRef = useRef(null);
  // const scrollEllementRef = useRef(null);

  const scrollPage = () => {
    if (
      scrollContainerRef.current.offsetHeight +
        scrollContainerRef.current.scrollTop >=
      scrollContainerRef.current.scrollHeight
    ) {
      const elemContainer = document.querySelector("#scroll-element");
      const clone = elemContainer.cloneNode(true);
      const parent = elemContainer.parentElement;
      parent.appendChild(clone);
      parent.children[0].remove();
    }

    if (scrollContainerRef.current.scrollTop === 0) {
      const elemContainer = document.querySelector("#scroll-element");
      const clone = elemContainer.cloneNode(true);
      const parent = elemContainer.parentElement;
      parent.insertBefore(clone, parent.firstChild);
      parent.scrollTo(0, elemContainer.scrollHeight);
      parent.lastElementChild.remove();
    }
  };

  useEffect(() => {
    const elemContainer = document.querySelector("#scroll-element");
    const clone = elemContainer.cloneNode(true);
    const parent = elemContainer.parentElement;

    // const cloneRef = cloneElement(scrollEllementRef, {
    //   ref: scrollEllementRef,
    // });
    // const parentRef = scrollEllementRef.current.parentElement;

    // parentRef.appendChild(clone);
    // parentRef.appendChild(clone);
    // parentRef.scrollTo(0, 1);

    parent.appendChild(clone);
    // parent.appendChild(clone);
    parent.scrollTo(0, 1);

    const scrollContainerNode = scrollContainerRef.current;

    scrollContainerNode.addEventListener("scroll", scrollPage);

    // return () => {
    //   scrollContainerNode.removeEventListner("scroll", scrollPage);
    // };
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.scrollContainer} ref={scrollContainerRef}>
        <div
          id="scroll-element"
          className={styles.scrollElement}
          // ref={scrollEllementRef}
        >
          {/* <Sequence /> */}
          {/* <SequenceCanvas/> */}
          <Component1 />
          <Component2 />
          <Component3 />
          <Component4 />
          <Component5 />
        </div>
      </div>
    </div>
  );
};

export default Scroll3;
