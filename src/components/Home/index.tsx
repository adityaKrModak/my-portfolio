import React, { useState } from "react";
import TilesAnimation from "../Animations/TilesAnimation";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  const [tilesAnim, toggleTilesAnim] = useState(false);

  const handleOnContinue = () => {
    toggleTilesAnim(!tilesAnim);
  };
  return (
    <>
      <div className="absolute">
        <TilesAnimation toggled={tilesAnim} />
      </div>
      <div className="absolute">
        <Welcome onClick={handleOnContinue} />
      </div>
    </>
  );
};

export default Home;
