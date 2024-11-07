import React from "react";
import "./SectionDisc.css";

const SectionDisc = () => {
  return (
    <>
      <div className="text-h3">
        <h3>Description</h3>
        <h3>Additional Information</h3>
        <h3>Reviews [5]</h3>
      </div>
      <div className=" pra-disc container">
        <p>
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>
      <div className="pic-disc container">
        <div>
          <img
            src={require("../images/Cloud sofa three seater + ottoman_1 1.png")}
            alt=""
          />
        </div>
        <br />
        <div>
          <img
            src={require("../images/Cloud sofa three seater + ottoman_2 1.png")}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SectionDisc;
