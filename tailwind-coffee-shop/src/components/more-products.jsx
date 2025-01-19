import TitleComponent from "./title";
const MoreProducts = ({ title }) => {
  const data = [
    {
      image: "./assets/images/product-coffee-01.jpeg",
      title: "Red Love Cup",
      priceSale: "25.00",
      price: "$37.00",
      isOnSale: true,
      key: 1,
    },
    {
      image: "./assets/images/product-coffee-02.jpeg",
      title: "Black Tea Cup",
      priceSale: "$15.00",
      price: "$29.00",
      isOnSale: true,
      key: 2,
    },
    {
      image: "./assets/images/product-coffee-03.jpeg",
      title: "B&W Essentials Mug",
      priceSale: "",
      price: "$19.00",
      isOnSale: false,
      key: 3,
    },
    {
      image: "./assets/images/product-coffee-04.jpeg",
      title: "Winter Style Mug",
      priceSale: "",
      price: "$25.00",
      isOnSale: false,
      key: 4,
    },
    {
      image: "./assets/images/product-coffee-05.jpeg",
      title: "Ceramic Tea",
      priceSale: "",
      price: "$46.00",
      isOnSale: false,
      key: 5,
    },
    {
      image: "./assets/images/product-coffee-06.jpeg",
      title: "No Handle Bar Cup",
      priceSale: "",
      price: "$34.00",
      isOnSale: false,
      key: 6,
    },
    {
      image: "./assets/images/product-coffee-07.jpeg",
      title: "Espresso Cup by Mugs.co",
      priceSale: "",
      price: "$25.00",
      isOnSale: false,
      key: 7,
    },
    {
      image: "./assets/images/product-coffee-08.jpeg",
      title: "Pink Premium Ceramic",
      priceSale: "",
      price: "$99.00",
      isOnSale: false,
      key: 8,
    },
    {
      image: "./assets/images/product-coffee-09.jpeg",
      title: "Summer Designer Cup",
      priceSale: "",
      price: "$34.00",
      isOnSale: false,
      key: 9,
    },
  ];

  return (
    <>
      <TitleComponent titleTxt={title} />
      <div className="more-products w-[95%] xl:w-[65%] mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
          {data.map((product) => {
            console.log(product.image);
            return (
              <div className="product-card" key={product.title}>
                <div
                  className={`product-card-image-more bg-[url(./assets/images/product-coffee-09.jpeg)]`}
                >
                  <a href="#" alt="product">
                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                      {product.isOnSale && (
                        <div className="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-coffee-400">
                          On Sale.
                        </div>
                      )}
                      <div className="absolute ct-button bg-white text-gray-900 p-4 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn">
                        Explore Mug
                      </div>
                    </div>
                  </a>
                </div>

                <div className="product-card-title">
                  <a href="#" alt="product">
                    <div className="text-xl mb-3 hover:text-coffee-400">
                      {product.title}
                    </div>
                  </a>
                  {product.isOnSale ? (
                    <div className="">
                      <span className="text-lg text-coffee-400">
                        {product.priceSale}
                      </span>
                      <span className="line-through ml-2 text-gray-400">
                        {product.price} USD
                      </span>
                    </div>
                  ) : (
                    <div className="">
                      <span className="text-gray-500">{product.price} USD</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {/* <div className="bg-[url(./assets/images/product-coffee-09.jpeg)]"></div> */}
        </div>
      </div>
    </>
  );
};

export default MoreProducts;
