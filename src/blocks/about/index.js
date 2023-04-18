import { useRef } from "react";
import { Inset, NumberedInfo } from "components";
import { useIsInViewport } from "utils";

export const About = () => {
  const elementRef = useRef();
  const isInViewport = useIsInViewport(elementRef);

  // ANIMATIONS
  const getGrowStyle = (inViewPort) => ({
    transition: "all 1s ease-in",
    transform: inViewPort ? "" : "scale(0.8)",
  });

  return (
    <section data-name="About" className="bg-dark text-gray-light relative">
      <Inset>
        <div
          ref={elementRef}
          className="grid md:grid-cols-2 md:grid-rows-5  grid-cols-1 gap-x-28 gap-y-20 md:gap-y-2 text-gray-light my-20"
        >
          <div className="md:row-span-2 md:col-start-1 h-full w-full ">
            <NumberedInfo
              title="Best price guarantee"
              img={process.env.PUBLIC_URL + "/images/number-1.png"}
              ListText={[
                "We help maximize the value of your unwanted gold. We guarantee to pay the highest prices for your precious metals.",
                "Get your cash one day after we receive and verify your items!",
              ]}
            />
          </div>
          <div className="md:row-start-2 md:col-start-2 row-span-2 ">
            <NumberedInfo
              title="We buy everything!"
              img={process.env.PUBLIC_URL + "/images/number-2.png"}
              ListText={[
                "We have paid over $50,000,000 to our customers since our inception.",
                "We are the largest buyer of precious metals in Canada.",
              ]}
            />
          </div>
          <div className="md:row-span-2 md:row-start-4 ">
            <NumberedInfo
              title="What we buy"
              img={process.env.PUBLIC_URL + "/images/number-3.png"}
              ListText={[
                "We pay cash for precious metals, including Scrap Gold & Silver, Broken Gold Jewelry, Gold Coins, Gold Watches, Dental Gold and more. If you are looking to sell gold and silver, you have come to the right place.",
              ]}
            />
          </div>
        </div>
      </Inset>
      {/* SVG */}
      <div
        className="bg-no-repeat md:bg-right-bottom bg-left-bottom bg-contain absolute left-0 h-[9rem] md:h-[22rem] -bottom-[1px] w-screen min-w-[1500px]"
        style={{ backgroundImage: "url(/images/top.svg)" }}
      ></div>
      <img
        className="absolute md:bottom-8 -bottom-32 left-1/2 -ml-2 max-h-80"
        src={process.env.PUBLIC_URL + "/images/canada-gold-mint.png"}
        alt="canadian-mint-full"
        style={getGrowStyle(isInViewport)}
      />
    </section>
  );
};
