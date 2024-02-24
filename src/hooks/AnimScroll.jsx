import { useEffect, useRef } from "react";

const AnimScroll = ({ children, anim }) => {
  const elementRef = useRef([]);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__animated");
          entry.target.classList.add(anim);
          observer?.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    if (elementRef.current) {
      observer?.observe(elementRef.current);

      return () => {
        if (elementRef.current && observer && observer.unobserve) {
          observer.unobserve(elementRef.current);
        }
      };
    }
  }, []);

  return (
    <div ref={elementRef} className="animated-element">
      {children}
    </div>
  );
};

export default AnimScroll;
