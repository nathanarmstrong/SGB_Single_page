import { useState, useRef } from "react";
import { Inset, Calendly } from "components";
import { useIsInViewport } from "utils";

const inputStyle = "rounded-sm my-2 p-4 h-10 w-full";
const listStyle = "font-light my-4";

export const Hero = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();

  const elementRef = useRef();
  const isInViewport = useIsInViewport(elementRef);

  // ANIMATIONS
  const getFadeLeftStyles = (inViewPort) => ({
    transition: "all 0.5s ease-in",
    opacity: inViewPort ? "1" : "0.8",
    transform: inViewPort ? "" : "translateX(-25%)",
  });
  const getUnderlineStyle = (inViewPort) => ({
    transition: "all 0.5s ease-in",
    opacity: "1",
    transform: inViewPort ? "" : "scalex(0.2)",
    transformOrigin: "left",
  });

  return (
    <section data-name="Hero" className="bg-gray">
      <Inset>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {/* LEFT */}

          <div className="relative md:order-first order-last" ref={elementRef}>
            <div className="md:pb-48 pb-24">
              <h1 className="text-5xl font-semibold">Get the best price</h1>
              <p className="text-xl tracking-widest my-3">
                when selling your{" "}
                <span className="relative">
                  gold and silver!
                  <span
                    className="bg-gray-blue-light absolute -bottom-2 left-0 h-[3px] right-0"
                    style={getUnderlineStyle(isInViewport)}
                  ></span>
                </span>
              </p>
              <ul className="list-disc my-14">
                <li className={listStyle}>Best price guarantee</li>
                <li className={listStyle}>Free shipping & Insurance</li>
                <li className={listStyle}>10+ years in online business</li>
                <li className={listStyle}>Over 289,000 Canadians trust us</li>
              </ul>
            </div>
            {/* COIN IMAGES */}
            <img
              className="absolute bottom-[-2rem] right-[-1rem] max-h-24 md:max-h-none	"
              src={process.env.PUBLIC_URL + "/images/canada-gold-mint-half.png"}
              style={getFadeLeftStyles(isInViewport)}
              alt="gold-mint-half"
            />
            <img
              className="absolute bottom-[-2rem] left-[-2rem]"
              src={
                process.env.PUBLIC_URL + "/images/canada-silver-mint-half.png"
              }
              style={getFadeLeftStyles(isInViewport)}
              alt="silver-mint-half"
            />
            {/* COIN IMAGES END */}
          </div>

          {/* LEFT END */}

          {/* RIGHT */}

          <div className="md:pl-20 pl-0">
            {/* FORM */}

            <div className=" bg-gray-dark p-5 rounded-2xl h-full">
              <h2 className="text-3xl font-semibold text-center">
                Request a FREE <br />
                Shipping Label!
              </h2>
              <input
                className={inputStyle}
                placeholder="First name"
                onBlur={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <input
                className={inputStyle}
                placeholder="Last name"
                onBlur={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <input
                className={inputStyle}
                placeholder="Email"
                type="email"
                onBlur={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Calendly
                firstName={firstName}
                lastName={lastName}
                email={email}
              />
            </div>

            {/* FORM END */}
          </div>

          {/* RIGHT END */}
        </div>
      </Inset>
    </section>
  );
};
