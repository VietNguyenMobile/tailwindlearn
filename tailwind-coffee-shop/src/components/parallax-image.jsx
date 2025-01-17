const ParallaxImage = ({ image }) => {
  return (
    // <div className="ct-parallax">
    //   <div className="bg-[url(./assets/images/bg-parallax-01.jpeg)] ct-parallax-image"></div>
    // </div>
    <div className="bg-[url(./assets/images/bg-parallax-01.jpeg)] bg-cover bg-no-repeat bg-center h-[400px] mb-24 bg-fixed w-[100vw] relative left-[calc(-50vw+50%)]"></div>
  );
};

export default ParallaxImage;
