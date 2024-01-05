import { City } from 'country-state-city';
import { getAuth, signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

const Home = () => {

    const auth = getAuth();

    const [user] = useAuthState(auth);

    const signingOut = () => {
        signOut(auth).then(() => console.log('Sign Out Successfully')).catch((e) => console.log('Unable to sign out'));
    }

    const [city, setCity] = useState("");
    const [filteredCities, setFilteredCities] = useState();

    const handleOnClick = () => {
        filterCitiesByCharacter(city);
        console.log(filteredCities);
    };

    const filterCitiesByCharacter = (character) => {
        const citiesList = City.getCitiesOfCountry("IN");
        const filteredCities = citiesList.filter((city) =>
            city.name.toLowerCase().startsWith(character.toLowerCase())
        );
        setFilteredCities(filteredCities.map((city) => city.name));
    };


    return (
        <div>
            <div>
                <label>
                    Search:{" "}
                    <input
                        type="text"
                        name="emailId"
                        onChange={(event) => {
                            setCity(event.target.value);
                        }}
                    />
                </label>
                <br />
                <button
                    onClick={() => {
                        handleOnClick();
                    }}
                >
                    search
                </button>

            </div>
            <div>
                {
                    user ?
                        <div onClick={signingOut}>Sign Out</div> :
                        <div>
                            <Link to='/Login'>Login</Link>
                            <Link to='/Signup'>Sign Up</Link>
                        </div>
                }
            </div>
        </div>
    )
}

export default Home