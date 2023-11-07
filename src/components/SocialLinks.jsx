import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/saurav-poojary-104326212/",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/sauravpoojary",
    },
    {
      id: 3,
      child: (
        <>
          LeetCode <SiLeetcode size={25} />
        </>
      ),
      href: "https://leetcode.com/sauravpoojary/",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links &&
          links.map((link) => (
            <li key={link.id} className="flex justify-between items-center w-40 h-14 px-4 bg-black ml-[-100px] hover:ml-[-5px] hover:rounded-md duration-300">
              <a
                href={link.href}
                className="flex justify-between items-center w-full text-rose-300"
                target="_blank"
                rel="noreferrer"
              >
                {link.child}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
