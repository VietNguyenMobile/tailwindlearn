import { Player } from "video-react";
import TitleComponent from "./title";
const Story = ({ title = "Our Coffee Story" }) => {
  return (
    <>
      <TitleComponent titleTxt={title} />

      <div className="story flex flex-col lg:flex-row  justify-center items-center gap-8 lg:gap-4 w-[95%] xl:w-[65%] mx-auto mb-24">
        <div className="basis-1/2">
          <video
            autoPlay
            loop
            controls
            muted
            className="w-full h-full object-cover min-h-[350px] bg-black"
          >
            <source src="./assets/videos/coffee-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="basis-1/2 text-center lg:text-left lg:pl-6">
          <div className="text-3xl font-normal mb-6 leading-10">
            Even the all-powerful Pointing has no control about the blind texts.
          </div>
          <div className="text-gray-500 leading-7 mb-6">
            It is a paradisematic country, in which roasted parts of sentences
            fly into your mouth. <br />
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar.
          </div>
          <div>
            <a
              href="#"
              className="text-coffee-400 hover:text-coffee-600 relative 
              after:absolute after:-bottom-2 after:left-0 after:bg-coffee-50 
              after:h-0.5 after:w-full after:transition-all after:ease-in-out after:duration-400
              hover:after:bg-coffee-200"
            >
              Read the full Story
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
