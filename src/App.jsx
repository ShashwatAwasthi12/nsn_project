import { useState } from "react";
import CityTaxy from "./components/CityTaxy";
import Outstation from "./components/Outstation";
import Rental from "./components/Rental";

function App() {
  const [cityTaxy, setcityTaxy] = useState(true);
  const [outstation, setOutstation] = useState(false);
  const [rental, setRental] = useState(false);
  const handleOutstation = () => {
    setcityTaxy(false);
    setRental(false);
    setOutstation(true);
  };
  const handleCityTaxi = () => {
    setcityTaxy(true);
    setRental(false);
    setOutstation(false);
  };
  const handleRental = () => {
    setcityTaxy(false);
    setRental(true);
    setOutstation(false);
  };

  return (
    <div className="App">
      <button onClick={handleCityTaxi}>CITY TAXY</button>
      <button onClick={handleOutstation}>OUTSTATION</button>
      <button onClick={handleRental}>RENTAL</button>

      <hr></hr>
      <div>
        {cityTaxy && <CityTaxy />}
        {outstation && <Outstation />}
        {rental && <Rental />}
      </div>
    </div>
  );
}

export default App;
