import { useRef, useState, useCallback, useLayoutEffect } from "react";
import {
  Component1,
  Component2,
  Component3,
  Component4,
  Component5,
} from "../components";
import styles from "../styles/SLoop.module.css";

const useBrowserLayoutEffect = process.browser ? useLayoutEffect : () => {};

const SLoop = () => {
  return (
    <div className={styles.container}>
      <InfiniteScrollLoop>
        {/* <ScrollComponent /> */}
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />
      </InfiniteScrollLoop>
    </div>
  );
};

const InfiniteScrollLoop = ({
  surroundingBackup = 1,
  outerStyle,
  innerStyle,
  children,
}) => {
  const contentRef = useRef(null);
  const scrollRef = useRef(null);
  const [height, setHeight] = useState(0);

  const backupHeight = height * surroundingBackup;

  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const scroll = scrollRef.current.scrollTop;
      if (scroll < backupHeight || scroll >= backupHeight + height) {
        scrollRef.current.scrollTop = backupHeight + (scroll % height);
      }
    }
  }, [height, backupHeight]);

  useBrowserLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.offsetHeight);
      scrollRef.current.scrollTop = backupHeight;
    }
  });

  return (
    <div className={styles.infiniteScrollLoopOuter} style={outerStyle}>
      <div
        className={styles.infiniteScrollLoopInner}
        ref={scrollRef}
        style={{
          height,
          ...innerStyle,
        }}
        onScroll={handleScroll}
      >
        {Array(surroundingBackup)
          .fill()
          .map((_, index) => (
            <div key={index}>{children}</div>
          ))}
        <div ref={contentRef}>{children}</div>
        {Array(surroundingBackup)
          .fill()
          .map((_, index) => (
            <div key={index}>{children}</div>
          ))}
      </div>
    </div>
  );
};

export default SLoop;
