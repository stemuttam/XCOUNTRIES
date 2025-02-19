import React, { useState, useEffect } from "react";
import CountryCard from "./CountryCard";

const CountryList = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch("https://xcountries-backend.azurewebsites.net/all");
                if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
                
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.error("Error fetching data:", error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="country-list">
            {countries.map((country, index) => (
                <CountryCard key={index} name={country.name} flag={country.flag} />
            ))}
        </div>
    );
};

export default CountryList;
