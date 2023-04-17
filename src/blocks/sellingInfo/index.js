import { Inset, Highlights } from "components";

export const SellingInfo = () => {
  return (
    <section data-name="SellingInfo">
      <Inset>
        <h2 className="text-3xl font-semibold ">
          Selling your jewellery, silverware, and
          <br />
          other unwanted metals is simple!
        </h2>
        <hr className="w-16 border-gray-blue-light border my-16" />
        <p className="my-16">
          Sell gold, silver, platinum, or palladium in any amount. You get a
          quick quote and the
          <br />
          best price, no matter how much you sell.
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-32  mt-28">
          <Highlights
            title="Request your free label"
            body="Fill out the form and choose your preferred method of shipping. Once we receive your request, our agent will send you an insured shipping label and instructions via email."
          />
          <Highlights
            title="Ship your metal"
            body="Track your insured shipment every step of the way via Canada Post or UPS. All shipments are fully insured."
          />
          <Highlights
            title="Get paid!"
            body="Within 24 hours after receiving the metal, one of our certified technicians will appraise your item(s) based on metal content and send you an offer. Once your email. order is confirmed, payment will be deposited directly into your bank account."
          />
        </div>
      </Inset>
    </section>
  );
};
