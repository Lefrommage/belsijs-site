import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const SocialsIcons = () => {
  return (
    <div className="flex items-center gap-3 text-2xl">

      <a
      href="https://www.tiktok.com/@bels.ijs"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[#FE2C55 ] transition hover:scale-120"
      >
      <FaTiktok />
      </a>

      <a
        href="https://www.instagram.com/belsijs_/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#C13584] transition hover:scale-120"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=61565594807996"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#1877F2] transition hover:scale-120"
      >
        <FaFacebook />
      </a>


    </div>
  );
};


export default SocialsIcons