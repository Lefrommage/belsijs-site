import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <NavLink
        to="/contact"
        className="
          group
          inline-flex items-center gap-2
          bg-amber-100
          px-4 py-2
          rounded-full
          text-amber-600
          transition-all duration-300
          hover:bg-amber-400
          hover:text-white
          hover:shadow-lg
          hover:-translate-y-1
        "
      >
        Contact
        <FaArrowRight
          className="
            transition-transform duration-300
            group-hover:translate-x-1
          "
        />
      </NavLink>
    </div>
  );
};

export default Contact;
