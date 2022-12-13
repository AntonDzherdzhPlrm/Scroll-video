import { useEffect, useState } from "react";
import {
  Component1,
  Component2,
  Component3,
  Component4,
  Component5,
} from "../components";
import styles from "../styles/Scroll2.module.css";

const InfiniteScrollLoop = (props) => {
  const [list, setList] = useState([]);
  const { className, children } = props;

  useEffect(() => {
    setList(children);
  }, [children]);

  const updateList = (i) =>
    setList((prv) => {
      console.log('prv', prv);
      console.log('i', i);
      const arr = [...prv, ...i]
      console.log('arr', arr);
      return arr;
    });

  return (
    <IfinteInner
      className={className}
      list={list}
      updateList={updateList}
    ></IfinteInner>
  );
};

const IfinteInner = ({ list, updateList }) => {
  const handleScroll = (e) => {
    const target = e.target;
    const end = target.scrollHeight - target.scrollTop === target.clientHeight;
    if (end) updateList(list);
  };

  return (
    <div className={styles.inner} onScroll={handleScroll}>
      {list.map((i) => i)}
    </div>
  );
};

const Scroll2 = () => {
  return (
    <InfiniteScrollLoop className={styles.mainContainer}>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
    </InfiniteScrollLoop>
  );
};

export default Scroll2;
