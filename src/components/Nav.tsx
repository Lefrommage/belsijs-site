import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import New from "./New";

const linkStyle =
  "px-4 py-2 rounded-md hover:bg-amber-100 hover:text-amber-500 transition-all duration-200 hover:scale-105";

const Nav = ({ className = "" }) => {
  return (
    <nav className={`relative font-semibold ${className}`}>
      <NavLink to="/" className={linkStyle}>
        Home
      </NavLink>

      <Dropdown
        label="Aanbod"
        items={[
          { to: "/aanbod#schepijs", label: "Schepijs" },
          { to: "/aanbod#ijstaarten", label: "Ijstaarten" },
          { to: "/aanbod#friscos", label: "Frisco's", isNew: true },
        ]}
      />

      <NavLink to="/foodtruck" className={linkStyle}>
        Foodtruck
      </NavLink>

      <NavLink to="/lammetjespret" className={linkStyle}>
        Lammetjespret <New />
      </NavLink>

      <Dropdown
        label="Ontdek"
        items={[
          { to: "/ontdek#overons", label: "Over Ons" },
          { to: "/ontdek#waaromgeitenmelk", label: "Waarom Geitenmelk?" },
          { to: "/ontdek#faq", label: "Veel gestelde vragen" },
        ]}
      />
    </nav>
  );
};

export default Nav;
