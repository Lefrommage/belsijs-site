import Vanille from "../assets/Ice Cream Cones/Vanille.png"
import Chocolade from "../assets/Ice Cream Cones/Chocolade.png"
import Oreo from "../assets/Ice Cream Cones/Oreo.png"


const items = [
  { id: 1, name: "Chocolade", image: Chocolade, bg: "bg-[#B49578]" },
  { id: 2, name: "Framboos", image: Oreo, bg: "bg-[#F8C9DD]" },
  { id: 3, name: "Vanille", image: Vanille, bg: "bg-[#FBF3A7]" },
];


const AanbodHomePage = () => {
  return (
    <section className="px-6">
      <h2 className="text-5xl font-semibold mb-5 font-sirenia">
        Populaire ijssmaken
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-3xl overflow-hidden hover: transition duration-300"
          >
            {/* Background shape */}
            <div className="absolute inset-0 overflow-hidden">
            {/* main blob */}
            <div
                className={`
                absolute -bottom-14 left-1/2 h-[70%] w-[120%] -translate-x-1/2
                ${item.bg}
                rounded-[55%_45%_40%_60%/55%_55%_45%_45%]
                rotate-[-8deg]
                transition-all duration-300
                group-hover:-bottom-24 group-hover:rotate-[-12deg]
                `}
            />

            {/* accent bubble */}
            <div
                className={`
                absolute -bottom-6 right-6 h-24 w-24
                ${item.bg}
                opacity-40
                rounded-full
                blur-[1px]
                transition-all duration-300
                group-hover:-bottom-16 group-hover:right-10
                `}
            />
            </div>

            {/* Ice cream image */}
            <div className="relative flex justify-center pt-12">
              <img
                src={item.image}
                alt={item.name}
                className="h-72 object-contain transition-transform duration-300 group-hover:scale-145 group-hover:rotate-5"
              />
            </div>

            {/* Name + extra info */}
            <div className="relative text-center py-6 text-gray-700">
              <p className="font-semibold text-lg">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AanbodHomePage;
