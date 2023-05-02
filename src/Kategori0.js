import React from "react";
import { useState } from "react"; // import the useState hook.
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"; // import an icon.
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { faSave, faShare, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // import FontAwesomeIcon component.
import Tooltip from "@mui/material/Tooltip"; // import Tooltip component.
import keyholeLgog from "./circle-keyhole-logo.png"; // import an image
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"; // import an icon
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons"; // import an icon
import Select from "react-select"; // import Select component

// This component is called Kategori1
const Kategori0 = () => {
  // State variables for showing results and empty result message

  const [showNokkelhulletResults, setShowNokkelhulletResults] = useState(null);
  const [showErnaeringsResults, setShowErnaeringsResults] = useState(null);
  const [showHelsepåstander, setShowHelsepåstander] = useState(null);
  const [showEmptyResult, setShowEmptyResult] = useState(""); // initialize state variable for showing empty result message.

  //state for controlling the buttons' visibility
  const [showButtons, setShowButtons] = useState(false);

  // State variables to control the visibility of the information sections
  const [infoNokkelhullet, setInfoNokkelhullet] = useState(false);
  const [infoErnaerings, setInfoErnaerings] = useState(false);
  const [infoHelsepåstander, setInfoHelsepåstander] = useState(false);

  // Function to show an information section based on the container parameter
  const onClickInfo = (container) => {
    if (container === "nokkelhullet") {
      setInfoNokkelhullet(true);
    } else if (container === "ernaerings") {
      setInfoErnaerings(true);
    } else if (container === "helsepåstander") {
      setInfoHelsepåstander(true);
    }
  };

  // Function to hide an information section based on the container parameter
  const onClickClose = (container) => {
    if (container === "nokkelhullet") {
      setInfoNokkelhullet(false);
    } else if (container === "ernaerings") {
      setInfoErnaerings(false);
    } else if (container === "helsepåstander") {
      setInfoHelsepåstander(false);
    }
  };

  // initialize State variables for handling input fields and validation errors
  const [energikj, setEnergikj] = useState(false);
  const [energikcal, setEnergikcal] = useState(false);
  const [fett, setFett] = useState(false);
  const [mettede, setMettede] = useState(false);
  const [karbohydrat, setKarbohydrat] = useState(false);
  const [hvoravSukkerarter, setHvoravSukkerarter] = useState(false);
  const [kostfiber, setKostfiber] = useState(false);
  const [protein, setProtein] = useState(false);
  const [salt, setSalt] = useState(false);

  // State variable for storing nutrition information entered by user/input values
  const [nutrition, setNutrition] = useState({
    energikj: "",
    energikcal: "",
    fett: "",
    mettede: "",
    karbohydrat: "",
    hvoravSukkerarter: "",
    kostfiber: "",
    protein: "",
    salt: "",
  });

  // Handler for updating nutrition state/state variable based on input field changes/input values
  const changeHandle = (event) => {
    console.log("changeHandle ===", event.target, event.target.value);
    setNutrition({
      ...nutrition,
      [event.target.name]: event.target.value,
    });
  };

  // define function to handle form submission
  const onClick = (e) => {
    e.preventDefault();

    setShowHelsepåstander(true);
    setShowErnaeringsResults(true);
    setShowButtons(true);

    console.log("onclick ===", selectsPart, nutrition);

    // Check if all required fields are filled out and within valid ranges
    // The if statement checks if all required inputs are non-empty and meet the nutritional requirements
    if (
      nutrition.energikj !== "" &&
      nutrition.energikcal !== "" &&
      nutrition.fett !== "" &&
      nutrition.mettede !== "" &&
      nutrition.karbohydrat !== "" &&
      nutrition.hvoravSukkerarter !== "" &&
      nutrition.kostfiber !== "" &&
      nutrition.protein !== "" &&
      nutrition.salt !== ""
    ) {
      // If all requirements are met, display the nutrition results
      setShowNokkelhulletResults(true);
      // Hide any empty result messages or error messages
      setShowEmptyResult(false);

      // Check if the user selected "energikj" and if nutrition input lable of "energikj" is not empty
      if (selectsPart === "energikj" && nutrition.energikj !== "") {
        setEnergikj(false);
      }

      // Check if the user selected "energikcal" and if nutrition input lable of "energikcal" is not empty
      if (selectsPart === "energikcal" && nutrition.energikcal !== "") {
        setEnergikcal(false);
      }
      // Reset all input validation errors

      // reset all nutrition input validation errors
      setEnergikj(false);
      setEnergikcal(false);
      setFett(false);
      setMettede(false);
      setKarbohydrat(false);
      setHvoravSukkerarter(false);
      setKostfiber(false);
      setProtein(false);
      setSalt(false);
      // If any inputs are missing or do not meet the requirements, show appropriate error messages
    } else {
      if (selectsPart === "energikj") {
        console.log("energikj ===", selectsPart, nutrition.energikj);
        if (nutrition.energikj === "" || nutrition.energikj < 0) {
          console.log("energikj ===", selectsPart, nutrition.energikj);
          setEnergikj(true);
          setShowNokkelhulletResults(false);
          setShowEmptyResult(true);
        } else {
          setEnergikj(false);
        }
      }

      if (selectsPart === "energikcal") {
        console.log("energikcal ===", selectsPart, nutrition.energikcal);
        if (nutrition.energikcal === "" || nutrition.energikcal < 0) {
          console.log("energikcal ===", selectsPart, nutrition.energikcal);
          setEnergikcal(true);
          setShowNokkelhulletResults(false);
          setShowEmptyResult(true);
        } else {
          setEnergikcal(false);
        }
      }

      // repeat for each nutrition value...
      if (nutrition.fett === "" || nutrition.fett < 0) {
        setFett(true);
        setShowNokkelhulletResults(false);
        setShowEmptyResult(true);
      } else {
        setFett(false);
      }

      if (nutrition.mettede === "" || nutrition.mettede < 0) {
        setMettede(true);
        setShowNokkelhulletResults(false);
        setShowEmptyResult(true);
      } else {
        setMettede(false);
      }

      // Check if the 'karbohydrat' input is missing or negative, and display an error message if necessary
      if (nutrition.karbohydrat === "" || nutrition.karbohydrat < 0) {
        setKarbohydrat(true);
        setShowNokkelhulletResults(false);
        setShowEmptyResult(true);
      } else {
        setKarbohydrat(false);
      }

      if (
        nutrition.hvoravSukkerarter === "" ||
        nutrition.hvoravSukkerarter < 0
      ) {
        setHvoravSukkerarter(true);
        setShowNokkelhulletResults(false);
        setShowEmptyResult(true);
      } else {
        setHvoravSukkerarter(false);
      }

      if (nutrition.kostfiber === "" || nutrition.kostfiber < 0) {
        setKostfiber(true);
        setShowNokkelhulletResults(false);
        setShowEmptyResult(true);
      } else {
        setKostfiber(false);
      }

      if (nutrition.protein === "" || nutrition.protein < 0) {
        setProtein(true);
        setShowNokkelhulletResults(false);
        setShowEmptyResult(true);
      } else {
        setProtein(false);
      }

      if (nutrition.salt === "" || nutrition.salt < 0) {
        setSalt(true);
        setShowNokkelhulletResults(false);
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

  // Declare a state variable for the select dropdown.
  const [selectsPart, setSelectPart] = useState("");

  console.log("selectsPart:", selectsPart);

  // A function to handle changes to the select dropdown energy unit
  const handlerPart = (event) => {
    console.log("handlerPart ===", event, nutrition);
    setSelectPart(event.value);
  };

  return (
    <div className="row">
      <h5>Næringsinnhold per 100 g/ml</h5>

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
                {/* This column allows the user to input the energy value in the input field */}
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

              {/* Additional rows for other nutrient selections */}

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

              {/* This row shows the saturated fat content */}
              <tr className={mettede ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {/* If the saturated fat value is missing, an exclamation icon is displayed */}
                  {mettede ? (
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
          {/* Button that submits the form and calls the onClick function when clicked */}
          <button
            type="submit"
            className="btn btn-primary btn-lg button-search"
            onClick={onClick}
          >
            Beregn
          </button>
        </div>
      </div>
      {/* End of the div with class "button-div" */}

      <div className="col-md-6">
        {/*Negative results nøkkelhullet container" */}
        {showNokkelhulletResults === false && (
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
                  onClick={() => onClickInfo("nokkelhullet")}
                />
              </div>
            </div>
            {infoNokkelhullet ? (
              // Information section for "Nøkkelhullet"
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
                    onClick={() => onClickClose("nokkelhullet")}
                  />
                </div>
              </div>
            ) : null}
          </div>
        )}

        {/* Spacer */}
        <div style={{ padding: "5px" }}></div>
        {/* container for Ernaerings results  */}
        {showErnaeringsResults && (
          <div className="container ernæringspåstander-food-result-container-none">
            <h5>Ernæringspåstander</h5>
            <div className="row">
              <div className="col-md-10">
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
                  onClick={() => onClickInfo("ernaerings")}
                />
              </div>
            </div>
            {infoErnaerings ? (
              // Information section for "Ernæringspåstander"
              <div className="container info-div row">
                <div className="col-md-10">
                  <p>
                    Les mer om hvordan oppnå kriteriene på Lovdata’s Forskrift
                    om ernærings- og helsepåstander om næringsmidler:
                    <a
                      href="https://lovdata.no/dokument/SF/forskrift/2010-02-17-187/KAPITTEL_1#KAPITTEL_1"
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
                    onClick={() => onClickClose("ernaerings")}
                  />
                </div>
              </div>
            ) : null}
          </div>
        )}

        {/* Spacer */}
        <div style={{ padding: "5px" }}></div>
        {/* container for Helsepåstander results  */}
        {showHelsepåstander && (
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
                <FontAwesomeIcon
                  className="info-button"
                  icon={faCircleInfo}
                  onClick={() => onClickInfo("helsepåstander")}
                />
              </div>
            </div>
            {infoHelsepåstander ? (
              // Information section for "Helsepåstander"
              <div className="container info-div row">
                <div className="col-md-10">
                  <p>
                    Les mer om hvordan oppnå kriteriene på Lovdata’s Forskrift
                    om ernærings- og helsepåstander om næringsmidler:
                    <a
                      href="https://lovdata.no/dokument/SF/forskrift/2010-02-17-187/KAPITTEL_1#KAPITTEL_1"
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
                    onClick={() => onClickClose("helsepåstander")}
                  />
                </div>
              </div>
            ) : null}
          </div>
        )}
        {/* Spacer */}
        <div style={{ padding: "15px" }}></div>
        {/* conditional rendering for the buttons using showButtons state */}
        {showButtons && (
          <div className="d-flex justify-content-between">
            {/* Save button */}
            <button
              className="btn btn-secondary"
              style={{ width: "200px", marginRight: "5px" }}
            >
              <i className="fas fa-save" style={{ marginRight: "5px" }}></i>{" "}
              Lagre produkt
            </button>

            {/* Share button */}
            <button
              className="btn btn-secondary"
              style={{ width: "200px", marginRight: "5px" }}
            >
              <i className="fas fa-share" style={{ marginRight: "5px" }}></i>{" "}
              Del produkt
            </button>

            {/* Add a new product button */}
            <button
              className="btn btn-secondary"
              onClick={() => window.location.reload()}
              style={{ width: "200px", marginRight: "5px" }}
            >
              <i className="fas fa-plus" style={{ marginRight: "5px" }}></i>{" "}
              Legg til et nytt produkt
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Kategori0;
