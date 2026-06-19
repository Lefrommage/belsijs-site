import IjsSmaak from "../components/IjsSmaak";
import Vanille from "../assets/Ice Cream Cones/Vanille.png";
import Chocolade from "../assets/Ice Cream Cones/Chocolade.png";
import Oreo from "../assets/Ice Cream Cones/Oreo.png";
import Straciatella from "../assets/Ice Cream Cones/Straciatella.png";

const smaken = [
  { id: 1, name: "Vanille", image: Vanille, bg: "bg-[#FBF3A7]", description: "Klassiek & romig" },
  { id: 2, name: "Chocolade", image: Chocolade, bg: "bg-[#B49578]", description: "Rijk en vol van smaak" },
  { id: 3, name: "Oreo", image: Oreo, bg: "bg-[#E8E8E8]", description: "Met stukjes Oreo" },
  { id: 4, name: "Straciatella", image: Straciatella, bg: "bg-[#F5F0E8]", description: "Vanille met chocoladeschilfers" },
];

const AanbodPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold font-sirenia mb-2">Ons aanbod</h1>
      <p className="text-gray-500 mb-12">Ontdek onze smaken, ambachtelijk bereid met verse hoevemelk.</p>

      <h2 className="text-3xl font-semibold font-sirenia mb-6">Schepijs</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {smaken.map((smaak) => (
          <IjsSmaak
            key={smaak.id}
            name={smaak.name}
            image={smaak.image}
            bg={smaak.bg}
            description={smaak.description}
          />
        ))}
      </div>

    </div>
  );
};

export default AanbodPage;
