import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);

  // const handleToggleTopMenu = (e) => {
  //   console.log("handleToggleTopMenu e: ", e.target);
  //   const topMenu = document.getElementById("ct-top-menu");
  //   const toggleTopMenuIcon = document.getElementById(
  //     "ct-toggle-top-menu-icon"
  //   );
  //   console.log("handleToggleTopMenu toggleTopMenuIcon: ", toggleTopMenuIcon);
  //   console.log("handleToggleTopMenu topMenu: ", topMenu);

  //   document.addEventListener("click", (e) => {
  //     // const topMenu = document.getElementById("ct-top-menu");
  //     // const toggleTopMenuIcon = document.getElementById(
  //     //   "ct-toggle-top-menu-icon"
  //     // );
  //     console.log("handleToggleTopMenu e: ", e.target);
  //     console.log("toggleTopMenuIcon", toggleTopMenuIcon);
  //     if (toggleTopMenuIcon.contains(e.target)) {
  //       topMenu.classList.toggle("ct-top-menu-expanded");
  //       topMenu.classList.toggle("hidden");
  //     } else {
  //       console.log("handleToggleTopMenu else");
  //       if (topMenu.classList.contains("ct-top-menu-expanded")) {
  //         console.log("handleToggleTopMenu else if");
  //         topMenu.classList.remove("ct-top-menu-expanded");
  //         topMenu.classList.add("hidden");
  //       }
  //     }
  //   });
  // };

  return (
    <header className="p-6 mx-auto">
      <nav className="flex flex-row justify-between items-center relative">
        <div className="logo basis-2/6 text-center text-xl font-semibold">
          CoffeeStyle.
        </div>
        <ul
          id="ct-top-menu"
          className="lg:flex hidden basis-3/6 lg:justify-end cursor-pointer lg:items-center lg:gap-8 uppercase text-sm text-gray-500 font-medium"
        >
          <li className="ct-top-menu-item">
            <a href="#">Home</a>
          </li>
          <li className="ct-top-menu-item">
            <a href="#">Products</a>
          </li>
          <li className="ct-top-menu-item">
            <a href="#">Blog</a>
          </li>
          <li className="ct-top-menu-item">
            <a href="#">About</a>
          </li>
          <li className="ct-top-menu-item">
            <a href="#">Contact</a>
          </li>
          <li className="ct-top-menu-item">
            <a href="#">StyleGuide</a>
          </li>
        </ul>
        <ul className="flex flex-row basis-3/6 lg:basis-1/6 justify-end lg:justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium">
          <li>
            <a href="#" className="flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="ct-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span className="mx-2" href="#">
                Cart
              </span>
              <span className="ct-badge-circle bg-orange-400 text-white">
                10
              </span>
            </a>
          </li>
        </ul>

        <div className="lg:hidden basis-1/6 flex items-center cursor-pointer px-2 sm:px-4">
          <svg
            id="ct-toggle-top-menu-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ct-icon"
            // onClick={handleToggleTopMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
      </nav>
      <div></div>
    </header>
  );
};

export default Header;
