export const Testimonial = ({ testimonial, name }) => {
  return (
    <div className="grid">
      <div className="relative">
        <p>{testimonial}</p>
        <img
          className="absolute -left-5 -top-4 max-h-10"
          src={process.env.PUBLIC_URL + "/images/air-quotes.png"}
        />
      </div>
      <p className="font-bold pt-12 grid content-end">{name}</p>
    </div>
  );
};
