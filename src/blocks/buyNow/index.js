import { useRef } from "react";
import { Inset } from "components";
import { useIsInViewport } from "utils";

export const BuyNow = () => {
  const elementRef = useRef();
  const isInViewport = useIsInViewport(elementRef);

  // ANIMATIONS
  const getFadeStyle = (inViewPort) => ({
    transition: "all 1s ease-in",
    opacity: inViewPort ? "1" : "0.3",
    transform: inViewPort ? "" : "translateX(30%)",
  });

  return (
    <section
      data-name="BuyNow"
      className="bg-gradient-to-b from-gray to-gray-light"
    >
      <Inset ySpace="py-0">
        <div className="grid md:grid-cols-3 md:gap-12">
          <div className="mt-20">
            <p ref={elementRef}>Not sure about what you want to sell?</p>
            <h2 className="font-bold text-3xl my-10">
              You can always buy some beautiful investment metals!
            </h2>
            <a href="/">
              <button className="rounded-full bg-gray-blue-light px-16 py-2 font-medium my-10 hover:bg-white border-2 border-gray-blue-light">
                {" "}
                BUY NOW
              </button>
            </a>
          </div>
          <div className="md:col-span-2">
            <img
              src={
                process.env.PUBLIC_URL + "/images/silver-gold-collection.png"
              }
              style={getFadeStyle(isInViewport)}
            />
          </div>
        </div>
      </Inset>
    </section>
  );
};
