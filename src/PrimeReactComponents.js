import React from "react";
import { Button } from "primereact/button";

const PrimeReactComponents = () => {
  return (
    <div>
      <div className="buttons">
        <Button label="Click Me!" className="btn" />
        <Button label="Link button" link className="btn" />
        <Button label="Primary" className="btn" />
        <Button label="Secondary" severity="secondary" className="btn" />
        <Button
          label="Success"
          severity="success"
          text
          raised
          className="btn"
        />
        <Button label="Info" severity="info" text raised className="btn" />
      </div>
    </div>
  );
};

export default PrimeReactComponents;
