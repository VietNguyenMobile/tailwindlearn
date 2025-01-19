// import BackgroundImage from "../assets/images/slider-bg.jpeg";

const Slider = () => {
  return (
    <div className="slider h-[530px] bg-slider-bg bg-cover bg-no-repeat bg-bottom mb-24">
      <div className="w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-40">
        <div className="mx-16 text-white text-center">
          <div className="uppercase mb-6">Best Place To Buy Coffee</div>
          <div className="font-medium text-5xl mb-6">Coffee Mugs</div>
          <div className="font-medium text-lg mb-8">
            The most versatile furniture system ever created. Designed to fit
            your life, made to move and grow.
          </div>
          <div className="flex justify-center">
            <div className="ct-button bg-white text-gray-900 w-max p-4">
              Explore Our Products
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
