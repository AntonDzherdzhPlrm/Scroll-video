import { useState, useEffect } from "react";

const defaultState = { image: undefined, status: "loading" };

export const useImage = (url, crossOrigin) => {
  const [resimage, setResImage] = useState(defaultState);
  const image = resimage.image;
  const status = resimage.status;

  useEffect(() => {
    if (!url) return;

    setResImage({ image: url, status: "loaded" });
  }, [url]);

  // useEffect(() => {
  //   if (!url && !document) return;
  //   const img = document.createElement("img");

  //   function onload() {
  //     setResImage({ image: img, status: "loaded" });
  //   }

  //   function onerror() {
  //     setResImage({ image: undefined, status: "failed" });
  //   }

  //   img.addEventListener("load", onload);
  //   img.addEventListener("error", onerror);
  //   crossOrigin && (img.crossOrigin = crossOrigin);
  //   img.src = url.src;

  //   return () => {
  //     img.removeEventListener("load", onload);
  //     img.removeEventListener("error", onerror);
  //     setResImage(defaultState);
  //   };
  // }, [url, crossOrigin]);

  // return array because it it better to use in case of several useImage hooks
  // const [background, backgroundStatus] = useImage(url1);
  // const [patter] = useImage(url2);
  return [image, status];
};

export default useImage;
