import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import Api from "../utils/Api";
import Spinner from "./Spinner";
import avatarLarge from "../../assets/jpg/avatar-large.jpg";

const BeerDetails = props => {
  const [beer, setBeer] = useState({});

  useEffect(() => {
    if (!props.beerId) {
      navigate("/");
      return;
    }

    Api.get(`/beers/${props.beerId}`).then(({ data: beerInfo }) => {
      setBeer(beerInfo || {});
    });
  }, []);

  return (
    <div className="beerDetails">
      <h2 className="pageTitle">Detail page</h2>
      {beer ? (
        <div className="beerDetails_content">
          <div className="beerDetails_avatar">
            <img src={avatarLarge} alt={beer.name} />
          </div>
          <div className="beerDetails_info">
            <h3 className="beerDetails_title">{beer.name}</h3>
            <p>{beer.description}</p>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default BeerDetails;
