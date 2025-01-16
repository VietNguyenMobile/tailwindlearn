import PropTypes from "prop-types";
import TitleComponent from "./title";
const FeaturedMugs = ({ title = "Featured Mugs" }) => {
  return (
    <>
      <TitleComponent titleTxt={title} />
      <div className="featured-mugs w-[95%] lg:w-[65%] mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
          <div className="product-card">
            <div className="product-card-image bg-[url(./assets/images/featured-mug-01.jpg)]">
              <a href="#" alt="product">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                  {/* <div className="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-coffee-400">
                    On Sale.
                  </div> */}
                  <div className="absolute ct-button bg-white text-gray-900 p-4 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>

            <div className="product-card-title">
              <a href="#" alt="product">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Pink Premium Ceramic
                </div>
              </a>
              <div className="">
                {/* <span className="text-lg text-coffee-400">$50.00</span> */}
                <span className="text-gray-500">$99.00</span>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-card-image bg-[url(./assets/images/featured-mug-02.jpg)]">
              <a href="#" alt="product">
                <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                  <div className="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-coffee-400">
                    On Sale.
                  </div>
                  <div className="absolute ct-button bg-white text-gray-900 p-4 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn">
                    Explore Mug
                  </div>
                </div>
              </a>
            </div>

            <div className="product-card-title">
              <a href="#" alt="product">
                <div className="text-xl mb-3 hover:text-coffee-400">
                  Pink Premium Ceramic
                </div>
              </a>
              <div className="">
                <span className="text-lg text-coffee-400">$50.00</span>
                <span className="line-through ml-2 text-gray-400">$69.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FeaturedMugs.propTypes = {
  title: PropTypes.string,
};

export default FeaturedMugs;
