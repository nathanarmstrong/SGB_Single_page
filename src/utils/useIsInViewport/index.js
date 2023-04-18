import { useEffect, useState } from "react";

export const useIsInViewport = (ref) => {
  const [isInViewPort, setIsInViewport] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const { bottom } = ref.current.getBoundingClientRect();
      return setIsInViewport(window.innerHeight - bottom > 20);
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, isInViewPort]);

  return isInViewPort;
};
