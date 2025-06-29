import { useCallback } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

const useScroll = () => {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const [scrollTarget, setScrollTarget] = useState(null);

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
      scrollToComponent(ref); // Always just scroll to the ref
    },
    [scrollToComponent]
  );

  return handleScroll;
};

export default useScroll;
