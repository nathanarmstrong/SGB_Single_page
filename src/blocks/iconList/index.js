import { Inset } from "components";

export const IconList = () => {
  return (
    <section data-name="IconList" className="bg-gray-light">
      <Inset ySpace="py-3">
        <div className="grid md:grid-cols-4 grid-cols-2">
          <img
            src={process.env.PUBLIC_URL + "/images/shopper-approved-cre.png"}
            alt="silver-mint-half"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/brinks-cred.png"}
            alt="silver-mint-half"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/google-cred.png"}
            alt="silver-mint-half"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/bbb-cred.png"}
            alt="silver-mint-half"
          />
        </div>
      </Inset>
    </section>
  );
};
