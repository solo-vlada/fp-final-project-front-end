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
                <img src={listing.images} />
                <p>Name: {listing.item_name}</p>
                <p>Description: {listing.description}</p>
                <p>Category: {listing.category}</p>
                <p>Size: {listing.size}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Listings;
