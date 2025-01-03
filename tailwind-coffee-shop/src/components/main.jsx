import Slider from "./slider";
import Story from "./story";
import FeaturedMugs from "./featured-mugs";
import MoreProducts from "./more-products";
import CoffeeMagazine from "./coffee-magazine";
import SubscribeUs from "./subscribe-us";

const Main = () => {
  const data = [
    {
      title: "Featured Mugs",
    },
    {
      title: "More Products",
    },
    {
      title: "Buy 2 mugs and get a coffee magazine free",
    },
    {
      title: "Behind the mugs, lifestyle stories",
    },
  ];

  return (
    <main className="flex-1">
      <Slider />
      <Story />
      <FeaturedMugs title={data[0].title} />
      <MoreProducts title={data[1].title} />
      <MoreProducts title={data[2].title} />
      <CoffeeMagazine title={data[3].title} />
      <SubscribeUs />
    </main>
  );
};

export default Main;
