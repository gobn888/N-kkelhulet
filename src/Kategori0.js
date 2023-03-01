import React from "react";
import { useState } from "react"; // import the useState hook.
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"; // import an icon.

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // import FontAwesomeIcon component.
import Tooltip from "@mui/material/Tooltip"; // import Tooltip component.
import keyholeLgog from "./circle-keyhole-logo.png"; // import an image
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"; // import an icon
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons"; // import an icon
import Select from "react-select"; // import Select component

// Define a functional component named Kategori0.
const Kategori0 = () => {
  const [showResults, setShowResults] = useState(""); // initialize state variable for showing results.
  const [showEmptyResult, setShowEmptyResult] = useState(""); // initialize state variable for showing empty result message.

  const [info, setInfo] = useState(""); // initialize state variable for showing info message.

  // define functions to show/hide info message.
  const onClickInfo = () => {
    setInfo(true);
  };
  const onClickClose = () => {
    setInfo(false);
  };

  // initialize state variables for showing/hiding input validation errors
  const [energikj, setEnergikj] = useState(false);
  const [energikcal, setEnergikcal] = useState(false);
  const [mettede, setMettede] = useState(false);
  const [fett, setFett] = useState(false);
  const [protein, setProtein] = useState(false);
  const [karbohydrat, setKarbohydrat] = useState(false);
  const [hvoravSukkerarter, setHvoravSukkerarter] = useState(false);
  const [kostfiber, setKostfiber] = useState(false);
  const [salt, setSalt] = useState(false);

  // initialize state variable for input values
  const [nutrition, setNutrition] = useState({
    energikj: "",
    energikcal: "",
    mettede: "",
    fett: "",
    protein: "",
    karbohydrat: "",
    hvoravSukkerarter: "",
    kostfiber: "",
    salt: "",
  });

  // define function to update input values in state variable
  const changeHandle = (event) => {
    console.log("changeHandle ===", event.target);
    setNutrition({
      ...nutrition,
      [event.target.name]: [event.target.value],
    });
  };

  // define function to handle form submission
  const onClick = () => {
    if (
      nutrition.energikj !== "" &&
      nutrition.energikcal !== "" &&
      nutrition.mettede !== "" &&
      nutrition.fett !== "" &&
      nutrition.protein !== "" &&
      nutrition.karbohydrat !== "" &&
      nutrition.hvoravSukkerarter !== "" &&
      nutrition.kostfiber !== "" &&
      nutrition.salt !== ""
    ) {
      setShowResults(true);
      setShowEmptyResult(false);

      // reset input validation errors
      setEnergikj(false);
      setEnergikcal(false);
      setMettede(false);
      setFett(false);
      setProtein(false);
      setKarbohydrat(false);
      setHvoravSukkerarter(false);
      setKostfiber(false);
      setSalt(false);
    } else {
      // Check each nutrition value to see if it is missing or negative
      // show input validation errors if any input is missing or negative.
      if (nutrition.energikj === "" || nutrition.energikj < 0) {
        setEnergikj(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setEnergikj(false);
      }

      if (nutrition.energikcal === "" || nutrition.energikcal < 0) {
        setEnergikcal(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setEnergikcal(false);
      }

      // repeat for each nutrition value...
      if (nutrition.mettede === "" || nutrition.mettede < 0) {
        setMettede(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setMettede(false);
      }

      if (nutrition.fett === "" || nutrition.fett < 0) {
        setFett(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setFett(false);
      }

      if (nutrition.protein === "" || nutrition.protein < 0) {
        setProtein(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setProtein(false);
      }

      if (nutrition.karbohydrat === "" || nutrition.karbohydrat < 0) {
        setKarbohydrat(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setKarbohydrat(false);
      }

      if (
        nutrition.hvoravSukkerarter === "" ||
        nutrition.hvoravSukkerarter < 0
      ) {
        setHvoravSukkerarter(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setHvoravSukkerarter(false);
      }

      if (nutrition.kostfiber === "" || nutrition.kostfiber < 0) {
        setKostfiber(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setKostfiber(false);
      }

      if (nutrition.salt === "" || nutrition.salt < 0) {
        setSalt(true);
        setShowResults(false);
        setShowEmptyResult(true);
      } else {
        setSalt(false);
      }
    }
  };

  // create an array of energy units to select from
  const selectUnit = [
    {
      value: "energikj",
      label: "(kj)",
    },
    {
      value: "energikcal",
      label: "(kcal)",
    },
  ];

  // set initial state for the select dropdown.
  const [selectsPart, setSelectPart] = useState("");

  console.log("selectsPart:", selectsPart);

  // handler function for when the select dropdown value changes.
  const handlerPart = (event) => {
    console.log("handlerPart ===", event, nutrition);
    setSelectPart(event.value);
  };

  return (
    <div className="row">
      <h5>Porsjon (gram) 100</h5>

      {/* This div creates a column layout for the left side of the table */}
      <div className="col-md-6">
        {/* This div adds a light background color to the table */}
        <div className="bg-light">
          {/* This table shows the nutritional information */}
          <table className="table table-striped">
            {/* The table header */}
            <thead>
              <tr>
                <th scope="col" className="table-font">
                  Energi eller næringsstoff
                </th>
                <th scope="col" className="table-font">
                  Mengde
                </th>
              </tr>
            </thead>

            {/* The table body */}
            <tbody>
              {/* This row shows the energy content */}
              <tr className={(energikj, energikcal ? "alert-box" : null)}>
                <th scope="row" className="table-font">
                  {/* If either the energy (kJ) or energy (kcal) value is missing, an exclamation icon is displayed */}
                  {energikj && energikcal ? (
                    <Tooltip
                      title="Mangler verdi i energi (kJ/Kcal) parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  {/* This div displays the energy label and unit */}
                  <div className="row">
                    <div className="col-md-3">
                      <label for="energiunit" class="form-label">
                        Energi
                      </label>
                    </div>
                    {/* This dropdown allows the user to select the unit for energy */}
                    <div className="col-md-6">
                      <Select
                        placeholder={<div>Velg enhet</div>}
                        className="form-select-md mb-3"
                        options={selectUnit}
                        onChange={(e) => handlerPart(e)}
                      />
                    </div>
                  </div>
                </th>
                {/* This column allows the user to input the energy value */}
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="energikj"
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              {/* This row shows the saturated fat content */}
              <tr className={mettede ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {/* If the saturated fat value is missing, an exclamation icon is displayed */}
                  {fett ? (
                    <Tooltip
                      title="Mangler verdi i mettede fettsyrer parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  Mettede fettsyrer (g)
                </th>
                {/* This column allows the user to input the saturated fat value */}
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="mettede"
                    value={nutrition.mettede}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              {/* This row shows the fat content */}
              <tr className={fett ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {/* If the fat value is missing, an exclamation icon is displayed */}
                  {fett ? (
                    <Tooltip
                      title="Mangler verdi i fett parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  Fett (g)
                </th>
                {/* This column allows the user to input the fat value */}
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="fett"
                    value={nutrition.fett}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              {/* This row shows the protein content */}
              <tr className={protein ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {/* If the protein value is missing, an exclamation icon is displayed */}
                  {protein ? (
                    <Tooltip
                      title="Mangler verdi i protein parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  Protein (g)
                </th>
                {/* This column allows the user to input the protein value */}
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="protein"
                    value={nutrition.protein}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              {/* This row shows the carbohydrate content */}
              <tr className={karbohydrat ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {/* If the carbohydrate value is missing, an exclamation icon is displayed */}
                  {karbohydrat ? (
                    <Tooltip
                      title="Mangler verdi i karbohydrat parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  Karbohydrat (g)
                </th>
                {/* This column allows the user to input the carbohydrate value */}
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="karbohydrat"
                    value={nutrition.karbohydrat}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              {/* This is a table row for hvorav sukkerarter field */}
              <tr className={hvoravSukkerarter ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {/* If hvoravSukkerarter is missing, show a exclamation icon */}
                  {hvoravSukkerarter ? (
                    <Tooltip
                      title="Mangler verdi i hvorav sukkerarter parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  • Hvorav tilsatte sukkerarter (g)
                </th>
                <td>
                  {/* Input field for hvoravSukkerarter */}
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="hvoravSukkerarter"
                    value={nutrition.hvoravSukkerarter}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              {/* This is a table row for kostfiber field */}
              <tr className={kostfiber ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {/* If kostfiber is missing, show a exclamation icon */}
                  {kostfiber ? (
                    <Tooltip
                      title="Mangler verdi i kostfiber parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  • Kostfiber (g)
                </th>
                <td>
                  {/* Input field for kostfiber */}
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="kostfiber"
                    value={nutrition.kostfiber}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              {/* This is a table row for salt field */}
              <tr className={salt ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {/* If salt is missing, show a exclamation icon */}
                  {salt ? (
                    <Tooltip
                      title="Mangler verdi i salt parameter"
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon
                          className="alert-icon"
                          icon={faCircleExclamation}
                        />
                      </div>
                    </Tooltip>
                  ) : null}{" "}
                  Salt (g)
                </th>
                <td>
                  {/* Input field for salt */}
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="salt"
                    value={nutrition.salt}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-12 button-div">
          {/* A submit button that triggers the onClick function when clicked */}
          <button
            type="submit"
            className="btn btn-primary btn-lg button-search"
            onClick={onClick}
          >
            Søk
          </button>
        </div>
      </div>
      {/* End of the div with class "button-div" */}

      <div className="col-md-6">
        {/* If showResults is true, display the container with class "nøkkelhullet-food-result-container" */}
        {showResults ? (
          <div className="container nøkkelhullet-food-result-container">
            {/* An image with class "keyhole-logo" and alt text "keyhole logo" */}
            <img
              src={keyholeLgog}
              className="keyhole-logo img-fluid"
              alt="keyhole logo"
            />
            {/* A heading with text "Nøkkelhullet" */}
            <h5>Nøkkelhullet</h5>
            {/* A div with class "row" */}
            <div className="row">
              <div className="col-md-10">
                {/* A paragraph with text "Produktet innfrir Nøkkelhullet." */}
                <p>Produktet innfrir Nøkkelhullet. </p>
              </div>
              <div className="col-md-2">
                {/* An icon with class "info-button" that triggers the onClickInfo function when clicked */}
                <FontAwesomeIcon
                  className="info-button"
                  icon={faCircleInfo}
                  onClick={onClickInfo}
                />
              </div>
            </div>
            {/* If info is true, display the container with class "info-div row" */}
            {info ? (
              <div className="container info-div row">
                <div className="col-md-10">
                  {/* A paragraph with a link to lovdata.no */}
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
                  {/* An icon with class "x-button" that triggers the onClickClose function when clicked */}
                  <FontAwesomeIcon
                    className="x-button"
                    icon={faXmarkCircle}
                    onClick={onClickClose}
                  />
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
        {/* If showResults is false, display the container with class "nøkkelhullet-food-negResult-container" */}
        {showResults === false && (
          <div className="container nøkkelhullet-food-negResult-container">
            <h5>Nøkkelhullet</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Produktet innfrir ikke Nøkkelhullet.</p>
                {showEmptyResult ? (
                  <p>** Obligatoriske næringsverdier kan ikke være tomme.</p>
                ) : null}

                {showEmptyResult ? (
                  <p>** Velg mat på matkategori velger.</p>
                ) : null}
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
                    Les mer om hvordan oppnå kriteriene på Lovdata’s Forskrift
                    om frivillig merking av næringsmidler med Nøkkelhullet:
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
        )}

        {/* Spacer */}
        <div style={{ padding: "5px" }}></div>

        {/* Display results for ernæringspåstander if showResults is true */}
        {showResults ? (
          <div
            className="container ernæringspåstander-food-result-container"
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
        ) : null}

        {/* Display results for ernæringspåstander if showResults is false */}
        {showResults === false && (
          <div className="container ernæringspåstander-food-negResult-container">
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
        )}

        {/* Spacer */}
        <div style={{ padding: "5px" }}></div>

        {/* Display results for helsepåstander if showResults is true */}
        {showResults ? (
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
        ) : null}

        {/* Display results for helsepåstander if showResults is false */}
        {showResults === false && (
          <div className="container helsepåstander-food-negResult-container">
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
        )}
      </div>
    </div>
  );
};

export default Kategori0;
