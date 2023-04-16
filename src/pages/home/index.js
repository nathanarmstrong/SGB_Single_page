import { About, BuyNow, GetCreative, Hero, Reviews, SellingInfo } from "blocks";

export const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <SellingInfo />
      <About />
      <Reviews />
      <GetCreative />
      <BuyNow />
    </div>
  );
};
