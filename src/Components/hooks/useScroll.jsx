import { useCallback } from "react";

const useScroll = () => {
  const scrollToComponent = useCallback((ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  const handleScroll = useCallback(
    (ref) => {
      scrollToComponent(ref);
    },
    [scrollToComponent]
  );

  return handleScroll;
};

export default useScroll;
