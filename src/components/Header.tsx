import ContactButton from "./ContactButton";
import Logo from "./Logo";
import Nav from "./Nav";
import SocialsIcons from "./SocialsIcons";

const Header = () => {
  return (
    <div className="hidden md:block">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div
          className="
            flex items-center justify-between
            rounded-full
            bg-white/70 backdrop-blur-xl
            ring-1 ring-black/5
            shadow-[0_12px_40px_rgba(0,0,0,0.12)]
            px-5 h-14
          "
        >
          <Logo />

          <Nav className="hidden md:flex justify-center gap-2" />

          <div className="flex items-center gap-4">
            <SocialsIcons />
            <ContactButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
