import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import Api from "../utils/Api";
import Spinner from "./Spinner";
import avatarSmall from "../../assets/jpg/avatar-small.jpg";

const BeerList = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    Api.get("/beers").then(({ data: beerList }) => {
      setBeers(beerList || []);
    });
  }, []);

  return (
    <div className="beerList">
      <h2 className="pageTitle">Ranking</h2>
      <ul data-testid="beer-list">
        {!beers.length ? (
          <li>
            <Spinner />
          </li>
        ) : (
          beers.map(beer => (
            <li className="beerList_item" key={beer._id}>
              <Link to={`/beerdetails/${beer._id}`} title="See details">
                <img src={avatarSmall} alt={beer.name} />

                <div>
                  <h2 className="beerList_item">{beer.name}</h2>
                  <p>{beer.description}</p>
                </div>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default BeerList;
