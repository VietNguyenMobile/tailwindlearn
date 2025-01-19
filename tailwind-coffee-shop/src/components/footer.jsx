const Footer = () => {
  const dataMenu = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "Our Products",
      link: "#",
    },
    {
      title: "About",
      link: "#",
    },
    {
      title: "Contact",
      link: "#",
    },
    {
      title: "Styleguide",
      link: "#",
    },
    {
      title: "Viet Nguyen Author",
      link: "https://quocviet.com",
    },
  ];

  const dataFollowUs = [
    {
      title: "Facebook",
      link: "https://facebook.com/quocviet.ce",
    },
    {
      title: "Twitter",
      link: "https://twitter.com/quocviet_ce",
    },
    {
      title: "Instagram",
      link: "https://instagram.com/quocviet_ce",
    },
    {
      title: "Pinterest",
      link: "https://pinterest.com/quocviet_ce",
    },
  ];

  return (
    <footer className="w-[95%] xl:w-[65%] mx-auto pb-24 text-gray-500 text-sm">
      <div className="flex flex-col md:flex-row text-center md:text-left gap-12 md:gap-8">
        <div className="basis-1/3">
          <div className="font-bold text-xl mb-4 text-gray-800">
            CoffeeStyle.
          </div>
          <div className="mb-8 md:mb-20">
            Delivering the best coffee life since 1996. From coffee geeks to the
            real ones.
          </div>
          <div className="text-gray-400 hover:text-coffee-400">
            quocviet Blog. © 2016
          </div>
        </div>
        <div className="basis-1/6">
          <div className="uppercase font-semibold tracking-wider text-gray-600 mb-4">
            Menu
          </div>
          <div className="flex flex-col gap-3">
            {dataMenu.map((item, index) => (
              <div key={index}>
                <a href={item.link} className="hover:text-coffee-400">
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="basis-1/6">
          <div className="uppercase font-semibold tracking-wider text-gray-600 mb-4">
            Folllow Us
          </div>
          <div className="flex flex-col gap-3">
            {dataFollowUs.map((item, index) => (
              <div key={index}>
                <a href={item.link} className="hover:text-coffee-400">
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="basis-1/3">
          <div className="uppercase font-semibold tracking-wider text-gray-600 mb-8 md:mb-4">
            Contact Us
          </div>
          <div className="mb-4">We&apos;re Always Happy to Help</div>
          <div className="mb-16 text-gray-800 text-[22px] tracking-wide">
            <a
              href="mailto:quocviet.ce@gmail.com"
              className="hover:text-coffee-400"
            >
              quocviet.ce@gmail.com
            </a>
          </div>
          <div className="">
            <a
              href="https://quocviet.com"
              target="blank"
              className="text-gray-400 hover:text-coffee-400"
            >
              Powered by Viet Nguyen Author
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
