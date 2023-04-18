import { useRef } from "react";
import { useIsInViewport } from "utils";

export const Highlights = ({ title, body }) => {
  const elementRef = useRef();
  const isInViewport = useIsInViewport(elementRef);

  // ANIMATIONS
  const getScaleStyles = (inViewPort) => ({
    transition: "all 0.5s ease-in",
    transform: inViewPort ? "" : "scalex(0.2)",
    transformOrigin: "left",
  });
  return (
    <div>
      <div className="relative h-6 ">
        <div
          className="bg-gray-blue-light w-full h-full"
          style={getScaleStyles(isInViewport)}
          ref={elementRef}
        ></div>
        <h3 className="absolute left-2 right-2 bottom-3 font-bold text-xl">
          {title}
        </h3>
      </div>
      <p className="leading-loose mt-14">{body}</p>
    </div>
  );
};
