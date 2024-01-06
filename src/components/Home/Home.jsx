import { City } from "country-state-city";
import { getAuth, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../Core/SearchBar";

const Home = () => {
  const auth = getAuth();

  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const signingOut = () => {
    signOut(auth)
      .then(() => console.log("Sign Out Successfully"))
      .catch((e) => console.log("Unable to sign out"));
    navigate("/login");
    toast.success("Signed Out Successfully");
  };

  const [city, setCity] = useState("");
  const [filteredCities, setFilteredCities] = useState();

  const handleOnClick = (city) => {
    // filterCitiesByCharacter(city);
    console.log(filteredCities);
    setCity(city);
    setFilteredCities([]);
  };

  const filterCitiesByCharacter = (character) => {
    const citiesList = City.getCitiesOfCountry("IN");
    const filteredCities = citiesList.filter((city) =>
      city.name.toLowerCase().startsWith(character.toLowerCase())
    );
    setFilteredCities(filteredCities.map((city) => city.name));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);

    if (city.length >= 2) {
      filterCitiesByCharacter(e.target.value);
    } else {
      setFilteredCities();
    }
  };

  return (
    <div className="text-white flex flex-col lg:flex-row justify-between items-center">
      <div className="mb-4 lg:mb-0">Logo</div>
      <div className="flex flex-col items-center lg:flex-row lg:items-center">
        <SearchBar
          onChange={handleChange}
          city={city}
          setCity={setCity}
          onClick={handleOnClick}
        />

        <div className="bg-richblack-5 text-richblack-900 w-full max-h-40 overflow-y-auto lg:w-[25%] mx-auto rounded-md lg:ml-4 mt-4 lg:mt-0">
          <ul className="list-none p-0">
            {filteredCities?.length > 0 &&
              filteredCities.map((city, index) => (
                <li
                  key={index}
                  className="py-2 px-4 border-b border-gray-300 hover:bg-richblack-700 hover:text-richblack-5 cursor-pointer"
                  onClick={() => handleOnClick(city)}
                >
                  {city}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="py-4">
        {user ? (
          <div
            onClick={signingOut}
            className="bg-white text-richblack-900 hover:cursor-pointer rounded-md px-3 py-2"
          >
            Sign Out
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-4 text-richblack-900 justify-center">
            <Link
              to="/Login"
              className="bg-white rounded-md hover:cursor-pointer px-3 py-2 lg:mr-4 lg:last:mr-0"
            >
              Login
            </Link>
            <Link
              to="/Signup"
              className="bg-white hover:cursor-pointer rounded-md px-3 py-2"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
