// Dropdown.tsx
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import New from "./New";

export type DropdownItem = {
  to: string;
  label: string;
  isNew?: boolean;
};

type DropdownProps = {
  label: string;
  items: DropdownItem[];
  className?: string;
  menuClassName?: string;
};

const triggerStyle =
  "px-4 py-2 rounded-md hover:bg-amber-100 hover:text-amber-500 transition-all duration-200 hover:scale-105";

const itemStyle =
  "block w-full px-3 py-2 hover:bg-amber-100 rounded-xl hover:text-amber-500 transition-all hover:scale-105";

export default function Dropdown({
  label,
  items,
  className = "",
  menuClassName = "",
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // ✅ Close on outside click + ESC
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      {/* ✅ Click toggles (works on mobile) */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-2 ${triggerStyle}`}
        aria-expanded={open}
      >
        {label}
        <FaChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          className={`
            absolute top-full left-1/2 -translate-x-1/2 pt-3
            min-w-56 rounded-2xl bg-white shadow-xl p-2 text-black z-50
            ${menuClassName}
          `}
        >
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={itemStyle}
              onClick={() => setOpen(false)} // ✅ close after selecting
            >
              <div className="flex items-center justify-center gap-2">
                {item.label}
                {item.isNew && <New />}
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
