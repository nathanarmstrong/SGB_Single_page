import { Inset, Testimonial } from "components";

export const Reviews = () => {
  return (
    <section data-name="Reviews" className="bg-gray-blue">
      <Inset>
        <div className="flex justify-end ">
          <div>
            <h2 className="md:text-8xl text-5xl font-bold border-b-2 py-4">
              300,00 +
            </h2>
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
