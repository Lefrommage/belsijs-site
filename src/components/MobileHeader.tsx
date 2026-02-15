import { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import SocialsIcons from "./SocialsIcons";

const MobileHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden px-6 py-4">
      {/* pill */}
      <div className="flex items-center justify-between rounded-full bg-white/70 backdrop-blur-xl ring-1 ring-black/5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] px-5 h-14">
        <Logo />

        <div className="flex items-center gap-3">
          

          <button
            onClick={() => setOpen(v => !v)}
            className="inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-black/5"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className="text-2xl leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* dropdown */}
      {open && (
        <div className="mt-3 rounded-2xl bg-white/80 backdrop-blur-xl ring-1 ring-black/5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-4">
          <div className="mt-4 flex justify-center">
            <SocialsIcons/>
          </div>
            <Nav className="flex flex-col gap-2" />
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
