import { Link } from "react-scroll";
import HeroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";


const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b
    from-rose-400
    to-rose-200"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center mb-8">
          <h2 className="text-4xl sm:text-7xl font-bold">
            I'm a Software Developer
          </h2>
          <p className="py-4 max-w-md text-lg">
            Hi, I'm Saurav Poojary. A passionate Software Developer based in
            Karnataka, India.
          </p>
          <div>
            <Link to="Portfolio" smooth duration={500} className="group bg-black text-rose-300 w-fit px-6 py-3 my-2 flex items-center cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={20} className="ml-1"/>
              </span>
            </Link>
          </div>
        </div>
        <div className="">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full border-solid border-4 border-black mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
