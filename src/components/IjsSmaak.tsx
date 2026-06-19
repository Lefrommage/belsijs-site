type Props = {
  name: string;
  image: string;
  bg: string;
  description?: string;
};

const IjsSmaak = ({ name, image, bg, description }: Props) => {
  return (
    <div className={`group relative rounded-3xl overflow-hidden ${bg} flex flex-col items-center justify-center gap-3 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl py-8 px-4`}>
      <img
        src={image}
        alt={name}
        className="h-48 object-contain transition-transform duration-300 group-hover:scale-110"
      />
      <p className="font-bold text-xl text-gray-800 font-sirenia">{name}</p>
      {description && (
        <p className="text-gray-500 text-sm text-center">{description}</p>
      )}
    </div>
  );
};

export default IjsSmaak;
