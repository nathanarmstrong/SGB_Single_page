import {
  About,
  BuyNow,
  GetCreative,
  Hero,
  Reviews,
  SellingInfo,
  IconList,
} from "blocks";

export const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <IconList />
      <SellingInfo />
      <About />
      <Reviews />
      <GetCreative />
      <BuyNow />
    </div>
  );
};
