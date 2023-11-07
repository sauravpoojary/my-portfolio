import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  console.log(nav);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 bg-rose-400 px-4 fixed">
      <div>
        <h1 className="text-4xl font-semibold ml-2">Saurav Poojary</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer text-2xl font-medium hover:font-bold hover:scale-105 duration-200"
          >
            <Link to={link.link} smooth duration={500}>
              {link.link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer md:hidden pr-4 z-10"
      >
        {nav ? <FaTimes /> : <FaBars size={30} />}
      </div>

      {nav ? (
        <ul
          className="flex 
      flex-col 
      justify-center 
      items-center 
      absolute 
      top-0 
      left-0 
      w-full 
      h-screen
      bg-gradient-to-b
      from-rose-400
      to-rose-300"
        >
          {links.map((link) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer py-6 text-4xl font-medium hover:font-bold hover:scale-105 duration-200"
            >
              <Link onClick={() => setNav(!nav)} to={link.link} smooth duration={500}>
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default NavBar;
