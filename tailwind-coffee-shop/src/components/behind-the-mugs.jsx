import TitleComponent from "./title";
const BehindTheMugs = ({ title }) => {
  const data = [
    {
      key: 1,
      image: "./assets/images/lifestyle-story-01.jpeg",
      title:
        "Health Check: why do I get a headache when I haven’t had my coffee?",
      subTile:
        "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      date: "October 9, 2018",
    },
    {
      key: 2,
      image: "./assets/images/lifestyle-story-01.jpeg",
      title: "How long does a cup of coffee keep you awake?",
      subTile:
        "It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.",
      date: "October 9, 2018",
    },
    {
      key: 3,
      image: "./assets/images/lifestyle-story-01.jpeg",
      title:
        "Recent research suggests that heavy coffee drinkers may reap health benefits.",
      subTile:
        "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      date: "October 9, 2018",
    },
  ];

  return (
    <div className="behind-the-mugs font-Karla text-base mx-auto px-8">
      <TitleComponent titleTxt={title} />
      <div className="lifestyle-stories w-[95%] xl:w-[65%] mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
          {data.map((product) => {
            return (
              <div key={product.key} className="tqd-lifestyle-story-card">
                <div className="h-[300px] bg-[url('./assets/images/lifestyle-story-01.jpeg')] bg-cover bg-no-repeat bg-center">
                  <a href="#" alt="trungquandev">
                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out hover:duration-400 relative group">
                      <div className="ct-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2 hidden group-hover:block group-hover:animate-fadeIn">
                        Read The Full Story
                      </div>
                    </div>
                  </a>
                </div>
                <div className="text-left my-6">
                  <a href="#" alt="product">
                    <div className="text-xl mb-3 hover:text-coffee-400">
                      {product.title}
                    </div>
                  </a>
                  <div className="text-gray-500 leading-7 mb-3">
                    {product.subTile}
                  </div>
                  <div className="text-gray-500 leading-7 uppercase text-[13px] font-semibold tracking-widest">
                    {product.date}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BehindTheMugs;
