import { useRef } from "react";
import { Controller, Scene } from "react-scrollmagic";
import ImageSequence from "./ImageSequence";
import styles from "./Sequence.module.css";

const Sequence = () => {
  const ref = useRef();

  return (
    <div className={styles.mainContainer}>
      <Controller>
        <Scene duration="200%" triggerHook="onLeave" pin>
          {(progress) => (
            <div style={{ height: "100vh", position: "relative" }}>
              <ImageSequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
    </div>
  );
};

export default Sequence;
