import noiseTexture from "../assets/belfotos/noise.png";

const Grain = () => {
  return (
    <div
      className="
        pointer-events-none
        fixed inset-0
        z-[999]
        opacity-[0.09]
        mix-blend-overlay
      "
      style={{
        backgroundImage: `url(${noiseTexture})`,
      }}
    />
  );
};

export default Grain;
