import { useRef } from "react";
import { useIsInViewport } from "utils";

export const CallToAction = ({ img, titleList, textList, leftAmount }) => {
  const elementRef = useRef();
  const isInViewport = useIsInViewport(elementRef);

  // ANIMATIONS
  const getFadeStyle = (inViewPort) => ({
    transition: "all 0.2s ease-in",
    opacity: inViewPort ? "1" : "0.2",
    left: `-${leftAmount}`,
  });

  return (
    <div>
      <div className="relative my-20" ref={elementRef}>
        {titleList.map((title) => {
          return <h2 className="z-20 relative font-bold text-4xl">{title}</h2>;
        })}
        <img
          className="absolute z-10 -top-[1.5rem]"
          style={({ left: `-${leftAmount}` }, getFadeStyle(isInViewport))}
          src={img}
          alt="call-to-action-image"
        />
      </div>
      {textList.map((text) => {
        return <p className="my-10 leading-loose">{text}</p>;
      })}
    </div>
  );
};
