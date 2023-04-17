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
        <div className="grid grid-cols-3 gap-16">
          <Highlights />
          <Highlights />
          <Highlights />
        </div>
      </Inset>
    </section>
  );
};
