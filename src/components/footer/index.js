import { Inset } from "components";

export const Footer = () => {
  return (
    <footer className="bg-gray">
      <Inset>
        <div className="grid md:grid-cols-2 gap-5 items-center">
          <img
            className="m-auto md:m-0"
            src={process.env.PUBLIC_URL + "/images/silver-gold-bull.png"}
            alt="canadian-mint-full"
          />
          <div className="md:text-end text-center items-center font-light text-xl md:text-base">
            <a href="/" className="mx-2 whitespace-nowrap inline-block">
              Privacy Policy
            </a>
            <span className="rounded h-[0.2rem] w-[0.2rem] bg-dark mb-[0.1rem] mx-2 hidden md:inline-block"></span>
            <a href="/" className="mx-2 whitespace-nowrap">
              Terms & Conditions
            </a>
            <p className="mx-2 whitespace-nowrap inline-block">
              © Silver Gold Bull ™
            </p>
          </div>
        </div>
      </Inset>
    </footer>
  );
};
