import React, { useState } from "react";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      // toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        // toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };     

  return (
    <div className="flex flex-row justify-center my-4 px-2 ">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
          onKeyDown={handleSearchClick}
          className="text-xl font-light px-2 py-1 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        {/* <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />*/}
       <button className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick} >
       <span className="material-symbols-outlined text-white  pt-1">
location_on
</span>
       </button>
      
      
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center ">
        {/* <button
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °F
        </button> */}
      </div>
    </div>
  );
}

export default Inputs;