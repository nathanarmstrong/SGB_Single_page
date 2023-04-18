import { useRef } from "react";
import { Inset } from "components";
import { useIsInViewport } from "utils";

export const IconList = () => {
  const elementRef = useRef();
  const isInViewport = useIsInViewport(elementRef);

  // ANIMATIONS
  const getFadeInStyle = (inViewPort) => ({
    transition: "all 0.5s ease-in",
    opacity: inViewPort ? "1" : "0.1",
    transform: inViewPort ? "" : "scale(0.8)",
  });

  return (
    <section data-name="IconList" className="bg-gray-light">
      <Inset ySpace="py-3">
        <div className="grid md:grid-cols-4 grid-cols-2" ref={elementRef}>
          <img
            src={process.env.PUBLIC_URL + "/images/shopper-approved-cre.png"}
            alt="silver-mint-half"
            style={getFadeInStyle(isInViewport)}
          />
          <img
            src={process.env.PUBLIC_URL + "/images/brinks-cred.png"}
            alt="silver-mint-half"
            style={getFadeInStyle(isInViewport)}
          />
          <img
            src={process.env.PUBLIC_URL + "/images/google-cred.png"}
            alt="silver-mint-half"
            style={getFadeInStyle(isInViewport)}
          />
          <img
            src={process.env.PUBLIC_URL + "/images/bbb-cred.png"}
            alt="silver-mint-half"
            style={getFadeInStyle(isInViewport)}
          />
        </div>
      </Inset>
    </section>
  );
};
