import Slider from "./slider";
import Story from "./story";
import FeaturedMugs from "./featured-mugs";
import MoreProducts from "./more-products";
import CoffeeMagazine from "./coffee-magazine";
import SubscribeUs from "./subscribe-us";

const Main = () => {
  return (
    <main className="flex-1">
      <div>Main</div>
      <Slider />
      <Story />
      <FeaturedMugs />
      <MoreProducts />
      <CoffeeMagazine />
      <SubscribeUs />
    </main>
  );
};

export default Main;
