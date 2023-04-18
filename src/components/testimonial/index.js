import { useRef } from "react";
import { useIsInViewport } from "utils";

export const Testimonial = ({ testimonial, name }) => {
  const elementRef = useRef();
  const isInViewport = useIsInViewport(elementRef);

  // ANIMATIONS
  const getFadeStyle = (inViewPort) => ({
    transition: "all 0.2s ease-in",
    opacity: inViewPort ? "1" : "0.2",
  });

  return (
    <div className="grid" ref={elementRef}>
      <div className="relative">
        <p>{testimonial}</p>
        <img
          className="absolute -left-5 -top-4 max-h-10"
          src={process.env.PUBLIC_URL + "/images/air-quotes.png"}
          style={getFadeStyle(isInViewport)}
        />
      </div>
      <p className="font-bold pt-12 grid content-end">{name}</p>
    </div>
  );
};
