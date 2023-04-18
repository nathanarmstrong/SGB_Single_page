import { Inset } from "components";

export const Nav = ({ title, body }) => {
  return (
    <nav className="bg-gray">
      <Inset>
        <div className="grid md:grid-cols-2 gap-5 items-center">
          <img
            className="m-auto md:m-0"
            src={process.env.PUBLIC_URL + "/images/Silver-Gold-refining.png"}
            alt="canadian-mint-full"
          />
          <div className="md:text-end text-center">
            <a href="tel:877-447-6400">
              <span className="h-3 w-3 bg-gray-blue-light inline-block"></span>{" "}
              CALL US <span className="font-semibold">(877) 447 6400</span>
            </a>
          </div>
        </div>
      </Inset>
    </nav>
  );
};
