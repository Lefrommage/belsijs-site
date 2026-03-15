import LogoBel from "../assets/Logo's/Logo - Bel's ijs - witte achtergrond_Vanille - primair logo.png";
import { NavLink } from "react-router-dom";

interface LogoProperties {
  className?: string;
}

const Logo = ({ className }: LogoProperties) => {
  return (
    <NavLink to="/" className="inline-block group">
      <img
        alt="Bel's ijs Logo"
        src={LogoBel}
        className="h-20 w-auto transition-transform duration-300 group-hover:scale-135 group-hover:-rotate-8"
      />
    </NavLink>
  );
};

export default Logo;
