import { useRef } from "react";
import { Inset, CallToAction } from "components";
import { useIsInViewport } from "utils";

const pStyle = "my-10 leading-7";

export const GetCreative = () => {
  const elementRef = useRef();
  const isInViewport = useIsInViewport(elementRef);

  // ANIMATIONS
  const setShrinkStyle = (inViewPort) => ({
    transition: "all 1s ease-in",
    transform: inViewPort ? "" : "rotate(45deg)",
  });

  const getShrinkLineStyle = (inViewPort) => ({
    transition: "all 0.5s ease-in",
    transform: inViewPort ? "" : "scalex(4)",
    transformOrigin: "left",
  });

  return (
    <section data-name="GetCreative" className="relative">
      <div
        className="bg-no-repeat bg-left-top bg-contain absolute left-0 h-[29rem] -top-[1px] w-1/2"
        style={{ backgroundImage: "url(/images/bottom.svg)" }}
      ></div>
      <Inset>
        <div className="grid md:grid-cols-2 relative my-12">
          <img
            className="absolute -top-[16rem] -left-[11rem] min-w[17rem]"
            src={process.env.PUBLIC_URL + "/images/gold-donut.png"}
            style={setShrinkStyle(isInViewport)}
          />
          <div className="col-start-2">
            <h2 className="text-3xl font-bold " ref={elementRef}>
              Get creative!
            </h2>
            <hr
              className="w-16 border-gray-blue-light border my-12"
              style={getShrinkLineStyle(isInViewport)}
            />
            <p className={pStyle}>
              You'll always have the option to apply your proceeds to a new
              purchase of precious metals for your collection or investments.
            </p>
            <p className={pStyle}>
              Ask us how you can get the most out of your dollar by purchasing
              low-premium investment metals.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-20 mb-12">
          <CallToAction
            img={process.env.PUBLIC_URL + "/images/dollar-sign.png"}
            titleList={["Free live", "quote!"]}
            textList={[
              "Simply call us at (877) 447 6400 to receive a free live quote on the current market price of your metals.",
              "You are under no obligation to sell to us, although we can quickly complete your sale over the phone if you are ready to sell now. You will have your shipping label shortly after your sale is placed.",
            ]}
            leftAmount="2rem"
          />
          <CallToAction
            img={process.env.PUBLIC_URL + "/images/house.png"}
            titleList={["Estate & Collection", "Sales"]}
            textList={[
              "Looking to sell your collection or settle an estate in one convenient sale?",
              "Our unmatched buying power allows us to give you the best offer and to close quickly on all large sales. Simply put together a list of what you want to sell and give us a call for a quote.",
            ]}
            leftAmount="4rem"
          />
        </div>
      </Inset>
    </section>
  );
};
