import React from "react";

import { useState } from "react"; // import the useState hook.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // import FontAwesomeIcon component.
import keyholeLgog from "./circle-keyhole-logo.png"; // import an image
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"; // import an icon
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons"; // import an icon

const Kategori21 = () => {
  // Defining a state variable called 'info' and a function to update it called 'setInfo'
  const [info, setInfo] = useState("");

  // Defining a function to update the 'info' state variable to 'true' when the info button is clicked
  const onClickInfo = () => {
    setInfo(true);
  };
  // Defining a function to update the 'info' state variable to 'false' when the close button is clicked
  const onClickClose = () => {
    setInfo(false);
  };

  // Returning the following HTML elements as a JSX expression
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="container nøkkelhullet-food-result-container">
          <img
            src={keyholeLgog}
            className="keyhole-logo img-fluid"
            alt="keyhole logo"
          />
          <h5>Nøkkelhullet</h5>
          <div className="row">
            <div className="col-md-10">
              <p>Det er ingen betingelser for å møte Nøkkelhullet. </p>
            </div>
            <div className="col-md-2">
              <FontAwesomeIcon
                className="info-button"
                icon={faCircleInfo}
                onClick={onClickInfo}
              />
            </div>
          </div>
          {info ? (
            <div className="container info-div row">
              <div className="col-md-10">
                <p>
                  Les mer om hvilke krav det stilles for merking av
                  Nokkellhullet på Lovdatas "Forskrift om frivillig merking a
                  nœringsmidler med Nokkellhullet":
                  <a
                    href="https://lovdata.no/dokument/SF/forskrift/2015-02-18-139"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    lovdata.no
                  </a>
                </p>
              </div>
              <div className="col-md-2">
                <FontAwesomeIcon
                  className="x-button"
                  icon={faXmarkCircle}
                  onClick={onClickClose}
                />
              </div>
            </div>
          ) : null}
        </div>

        <div style={{ padding: "5px" }}></div>
        <div
          className="container rnæringspåstander-food-result-container"
          style={{ background: "#f2f0b5" }}
        >
          <h5>Ernæringspåstander</h5>
          <div className="row">
            <div className="col-md-10">
              <p>Under utvikling. </p>
            </div>
            <div className="col-md-2">
              <FontAwesomeIcon className="info-button" icon={faCircleInfo} />
            </div>
          </div>
        </div>
        <div style={{ padding: "5px" }}></div>
        <div
          className="container helsepåstander-food-result-container"
          style={{ background: "#f2f0b5" }}
        >
          <h5>Helsepåstander</h5>
          <div className="row">
            <div className="col-md-10">
              <p>Under utvikling. </p>
            </div>
            <div className="col-md-2">
              <FontAwesomeIcon className="info-button" icon={faCircleInfo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kategori21;
