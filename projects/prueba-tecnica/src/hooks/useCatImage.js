import { useEffect, useState } from "react";

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!fact) return;

    const firstWord = fact.split(" ", 3).join(" ");

    fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`)
      .then((res) => {
        const { url } = res;
        setImageUrl(url);
      })
      .catch((err) => console.log(err));
  }, [fact]);

  return { imageUrl };
}
