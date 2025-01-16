import TitleComponent from "./title";

const CoffeeMagazine = ({ title }) => {
  return (
    <>
      <TitleComponent titleTxt={title} />
      <div className="coffee-magazine w-[95%] xl:w-[65%] mx-auto mb-24">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="magazine-images basis-1/2 md:flex md:flex-row gap-5 w-full h-full mb-5 md:mb-0">
            <div className="magazine-big-image h-[280px] basis-2/3 mb-3 xs:mb-5 md:mb-0 bg-[url('./assets/images/magazine-image-01.jpeg')] bg-cover bg-no-repeat bg-center"></div>

            <div className="magazine-small-images basis-1/3 flex flex-row md:flex-col gap-3 xs:gap-5">
              <div className="h-[130px] xs:h-[200px] md:h-[130px] basis-1/2 bg-[url('./assets/images/magazine-image-02.jpeg')] bg-cover bg-no-repeat bg-center"></div>
              <div className="h-[130px] xs:h-[200px] md:h-[130px] basis-1/2 bg-[url('./assets/images/magazine-image-03.jpeg')] bg-cover bg-no-repeat bg-center"></div>
            </div>
          </div>
          <div className="magazine-post basis-1/2 pl-8 xl:pl-14 text-center md:text-left">
            <div className="uppercase tracking-widest text-gray-500 font-medium text-xs mb-4">
              Premium Offer
            </div>
            <div className="text-4xl mb-4">Get our Coffee Magazine</div>
            <div className="text-gray-500 leading-7 mb-4">
              The most versatile furniture system ever created. Designed to fit
              your life.
            </div>
            <div className="ct-button bg-gray-900 text-white w-max mx-auto md:mx-0">
              Start Shopping
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeMagazine;
