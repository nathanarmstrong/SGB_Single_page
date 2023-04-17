import { useState } from "react";
import { Inset, Calendly } from "components";

const inputStyle = "rounded-sm my-2 p-4 h-10 w-full";
const listStyle = "font-light my-4";

export const Hero = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();

  return (
    <section data-name="Hero" className="bg-gray">
      <Inset>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {/* LEFT */}

          <div className="relative md:order-first order-last">
            <div className="md:pb-48 pb-24">
              <h1 className="text-5xl font-semibold">Get the best price</h1>
              <p className="text-xl tracking-widest my-3">
                when selling your{" "}
                <span className="underline underline-offset-8	decoration-gray-blue-light">
                  gold and silver!
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
              alt="gold-mint-half"
            />
            <img
              className="absolute bottom-[-2rem] left-[-2rem]"
              src={
                process.env.PUBLIC_URL + "/images/canada-silver-mint-half.png"
              }
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
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <input
                className={inputStyle}
                placeholder="Last name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <input
                className={inputStyle}
                placeholder="Email"
                onChange={(e) => {
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
