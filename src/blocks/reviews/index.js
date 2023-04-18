import { useRef } from "react";
import { Inset, Testimonial } from "components";
import { useIsInViewport } from "utils";

export const Reviews = () => {
  const elementRef = useRef();
  const isInViewport = useIsInViewport(elementRef);

  // ANIMATIONS
  const getUnderlineStyle = (inViewPort) => ({
    transition: "all 0.5s ease-in",
    transform: inViewPort ? "" : "scalex(0.2)",
    transformOrigin: "left",
  });

  return (
    <section data-name="Reviews" className="bg-gray-blue">
      <Inset>
        <div className="flex justify-end " ref={elementRef}>
          <div>
            <h2 className="md:text-8xl text-5xl font-bold py-4">300,00 +</h2>
            <span
              className="h-[2px] bg-dark w-full block"
              style={getUnderlineStyle(isInViewport)}
            ></span>
            <p className="my-6 md:text-xl">
              review from <span className="font-bold ">happy customers</span>
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-36 my-28">
          <Testimonial
            name="William M."
            testimonial="Simply the best, would not deal with anyone else!"
          />
          <Testimonial
            name="Sean M"
            testimonial="Quick, easy, convenient, good prices, great customer service, couldn't be happier! Thanks!"
          />
          <Testimonial
            name="Anna B."
            testimonial="Amazing Experience! Fast, secure and good communication!"
          />
        </div>
      </Inset>
    </section>
  );
};
