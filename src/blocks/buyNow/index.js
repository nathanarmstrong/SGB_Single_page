import { Inset } from "components";

export const BuyNow = () => {
  return (
    <section
      data-name="BuyNow"
      className="bg-gradient-to-b from-gray to-gray-light"
    >
      <Inset ySpace="py-0">
        <div className="grid md:grid-cols-3 md:gap-12">
          <div className="mt-20">
            <p>Not sure about what you want to sell?</p>
            <h2 className="font-bold text-3xl my-10">
              You can always buy some beautiful investment metals!
            </h2>
            <a href="/">
              <button className="rounded-full bg-gray-blue-light px-20 py-2 font-medium my-10">
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
            />
          </div>
        </div>
      </Inset>
    </section>
  );
};
