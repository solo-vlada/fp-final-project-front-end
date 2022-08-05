import React, { useEffect, useState } from "react";
import { getAllListings } from "../../utils/api";
import { Link } from "react-router-dom";

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    getAllListings().then((listingsFromApi) => {
      setListings(listingsFromApi);
    });
  }, []);

  return (
    <div>
      Listings
      <h1>All listings from others</h1>
      <ul className="all-listings">
        {listings.map((listing) => {
          return (
            <Link key={listing.id} to={`/home/${listing.id}`}>
              <li key={listing.id} className="listings">
                <img src="string" />
                <p>Description: {listing.description}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Listings;
