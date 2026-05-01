import { Link } from "react-router";
import ButtonPrimary from "./ButtonPrimary";

const Header = () => {
  return (
    <header className="flex items-center max-w-7xl  text-neutral-100 fixed z-10 left-1/2 transform -translate-x-1/2 top-0 w-full justify-between  py-8">
      <ul className=" flex items-center text-base gap-6">
        <li>
          <Link to="#">Programs</Link>
        </li>
        <li>
          <Link to="#">Academy</Link>
        </li>
      </ul>
      <p role="logo" className="font-bold text-2xl self-end">
        Harsh Fitness
      </p>
      <ButtonPrimary text="Sign Up" link="/signup" />
    </header>
  );
};

export default Header;
