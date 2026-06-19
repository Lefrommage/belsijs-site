import { NavLink } from "react-router-dom";

const items = [
  {
    id: 1,
    name: "Schepijs",
    emoji: "🍦",
    bg: "bg-[#FBF3A7]",
    accent: "bg-amber-300",
    description: "Vers geschept, elke dag anders",
  },
  {
    id: 2,
    name: "Frisco's",
    emoji: "🍫",
    bg: "bg-[#F8C9DD]",
    accent: "bg-pink-300",
    description: "Krokant chocoladelaagje",
  },
  {
    id: 3,
    name: "IJstaarten",
    emoji: "🎂",
    bg: "bg-[#C9E9F8]",
    accent: "bg-blue-300",
    description: "Voor elk feestje",
  },
];

const AanbodHomePage = () => {
  return (
    <section className="px-6">
      <h2 className="text-5xl font-semibold mb-10 font-sirenia">Aanbod</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {items.map((item) => (
          <NavLink
            to="/aanbod"
            key={item.id}
            className={`group relative rounded-3xl overflow-hidden ${item.bg} aspect-square flex flex-col items-center justify-center gap-4 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
          >
            <span className="text-7xl transition-transform duration-300 group-hover:scale-110">
              {item.emoji}
            </span>
            <div className="text-center px-4">
              <p className="font-bold text-2xl text-gray-800 font-sirenia">
                {item.name}
              </p>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
};

export default AanbodHomePage;
