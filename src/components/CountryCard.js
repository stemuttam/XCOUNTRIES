import React from "react";
import "../styles.css";

const CountryCard = ({ name, flag }) => {
    return (
        <div className="country-card">
            <img src={flag} alt={`Flag of ${name}`} className="flag-img" />
            <p>{name}</p>
        </div>
    );
};

export default CountryCard;
