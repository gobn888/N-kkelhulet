import React from "react";
import { useState, useEffect } from "react"; // import the useState and useeffect hook.
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
const Kategori1 = () => {
  // State variables for showing results and empty result message

  const [showNokkelhulletResults, setShowNokkelhulletResults] = useState(null);
  const [showErnaeringsResults, setShowErnaeringsResults] = useState(null);
  const [showHelsepåstander, setShowHelsepåstander] = useState(null);
  const [showEmptyResult, setShowEmptyResult] = useState(""); // initialize state variable for showing empty result message.

  //state variable to store the user's food type selection (solid or liquid) and the low sugars claim result
  const [foodType, setFoodType] = useState("");
  const [lowSugars, setLowSugars] = useState(null);

  //state variable for SugarsFree claim
  const [sugarsFree, setSugarsFree] = useState(null);

  //state variable to track whether the product meets the WITH NO ADDED SUGARS claim or not
  const [withNoAddedSugars, setWithNoAddedSugars] = useState(null);

  //state variable to track whether the product meets the "CONTAINS NATURALLY OCCURRING SUGARS" claim or not
  const [
    containsNaturallyOccurringSugars,
    setContainsNaturallyOccurringSugars,
  ] = useState(null);

  // State variable for tracking if the button is clicked
  const [buttonClicked, setButtonClicked] = useState(false);

  // useEffect hook for checking the conditions for the nutrition claims when button is clicked
  useEffect(() => {
    if (buttonClicked) {
      if (
        lowSugars &&
        withNoAddedSugars &&
        containsNaturallyOccurringSugars &&
        sugarsFree
      ) {
        setShowErnaeringsResults(true);
      } else {
        setShowErnaeringsResults(false);
      }
    }
  }, [
    lowSugars,
    withNoAddedSugars,
    containsNaturallyOccurringSugars,
    buttonClicked,
    sugarsFree,
  ]);

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
  const [fettNull, setFettNull] = useState(false);
  const [mettede, setMettede] = useState(false);
  const [mettedeNull, setMettedeNull] = useState(false);
  const [karbohydrat, setKarbohydrat] = useState(false);
  const [naturligSukker, setNaturligSukker] = useState(false);

  const [hvoravSukkerarter, setHvoravSukkerarter] = useState(false);
  const [hvoravSukkerarterNull, setHvoravSukkerarterNull] = useState(false);
  const [kostfiber, setKostfiber] = useState(false);
  const [protein, setProtein] = useState(false);
  const [salt, setSalt] = useState(false);
  const [saltNull, setSaltNull] = useState(false);

  // initialize State variable for storing nutrition information entered by user/input values
  const [nutrition, setNutrition] = useState({
    energikj: "",
    energikcal: "",
    fett: "",
    mettede: "",
    karbohydrat: "",
    naturligSukker: "",
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
    setButtonClicked(true);
    setShowHelsepåstander(true);
    setShowButtons(true);

    console.log("onclick ===", selectsPart, nutrition);

    // Check if all required fields are filled out and within valid ranges
    // The if statement checks if all required inputs are non-empty and meet the nutritional requirements
    if (
      nutrition.fett !== "" &&
      nutrition.fett <= 3 &&
      nutrition.mettede !== "" &&
      nutrition.mettede <= 0.6 &&
      nutrition.karbohydrat !== "" &&
      nutrition.naturligSukker !== "" &&
      nutrition.hvoravSukkerarter !== "" &&
      nutrition.hvoravSukkerarter <= 1 &&
      nutrition.kostfiber !== "" &&
      nutrition.protein !== "" &&
      nutrition.salt !== "" &&
      nutrition.salt <= 0.5
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

      setFett(false);
      setFettNull(false);
      setMettede(false);
      setMettedeNull(false);
      setKarbohydrat(false);
      setNaturligSukker(false);
      setHvoravSukkerarter(false);
      setHvoravSukkerarterNull(false);
      setKostfiber(false);
      setProtein(false);
      setSalt(false);
      setSaltNull(false);

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
        setFettNull(true);
        setShowNokkelhulletResults(false);
        setShowEmptyResult(true);
      } else {
        setFettNull(false);
      }
      if (nutrition.fett > 3) {
        setFett(true);
        setShowNokkelhulletResults(false);
      } else {
        setFett(false);
      }

      if (nutrition.mettede === "" || nutrition.mettede < 0) {
        setMettedeNull(true);
        setShowNokkelhulletResults(false);
        setShowEmptyResult(true);
      } else {
        setMettedeNull(false);
      }
      if (nutrition.mettede > 0.6) {
        setMettede(true);
        setShowNokkelhulletResults(false);
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

      if (nutrition.naturligSukker === "" || nutrition.naturligSukker < 0) {
        setNaturligSukker(true);
        setShowNokkelhulletResults(false);
        setShowEmptyResult(true);
      } else {
        setNaturligSukker(false);
      }

      // Check if the 'hvoravSukkerarter' input is missing, negative or above the maximum allowed value (1),
      // and display an error message if necessary
      if (
        nutrition.hvoravSukkerarter === "" ||
        nutrition.hvoravSukkerarter < 0
      ) {
        setHvoravSukkerarterNull(true);
        setShowNokkelhulletResults(false);
        setShowEmptyResult(true);
      } else {
        setHvoravSukkerarterNull(false);
      }
      if (nutrition.hvoravSukkerarter > 1) {
        setHvoravSukkerarter(true);
        setShowNokkelhulletResults(false);
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
        setSaltNull(true);
        setShowNokkelhulletResults(false);
        setShowEmptyResult(true);
      } else {
        setSaltNull(false);
      }
      if (nutrition.salt > 0.5) {
        setSalt(true);
        setShowNokkelhulletResults(false);
      } else {
        setSalt(false);
      }
    }

    // Check for the "LOW SUGARS" claim
    if (foodType === "solid" && parseFloat(nutrition.karbohydrat) <= 5) {
      setLowSugars(true);
    } else if (
      foodType === "liquid" &&
      parseFloat(nutrition.karbohydrat) <= 2.5
    ) {
      setLowSugars(true);
    } else {
      setLowSugars(false);
    }

    // Check for the "SUGARS-FREE" claim
    if (foodType === "solid" && parseFloat(nutrition.karbohydrat) <= 0.5) {
      setSugarsFree(true);
    } else if (
      foodType === "liquid" &&
      parseFloat(nutrition.karbohydrat) <= 0.5
    ) {
      setSugarsFree(true);
    } else {
      setSugarsFree(false);
    }

    // Check the condition for the "WITH NO ADDED SUGARS" nutrition claim
    if (nutrition.hvoravSukkerarter === "0" && nutrition.karbohydrat > 0) {
      setWithNoAddedSugars(true);
    } else {
      setWithNoAddedSugars(false);
    }

    // Check the condition for the "CONTAINS NATURALLY OCCURRING SUGARS" nutrition claim
    if (nutrition.hvoravSukkerarter === "0" && karbohydrat === naturligSukker) {
      setContainsNaturallyOccurringSugars(true);
    } else {
      setContainsNaturallyOccurringSugars(false);
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

  // A function to handle changes to the select dropdown energy unit
  const handlerPart = (event) => {
    const inputVal = document.getElementsByName(event.value);
    console.log("handlerPart ===", event, nutrition, inputVal);
    setSelectPart(event.value);
  };

  //create an array of food types to select from
  const foodTypes = [
    {
      value: "solid",
      label: "Fast form",
    },
    {
      value: "liquid",
      label: "Flytende form",
    },
  ];

  return (
    <div className="row">
      {/* This div creates a column layout for the left side of the table */}
      <div className="col-md-6">
        {/* the selector (dropdown menu) for choosing the food type. */}
        <div className="form-group">
          <label htmlFor="foodType">Velg type matvare:</label>
          <Select
            className="form-control"
            id="foodType"
            options={foodTypes}
            onChange={(e) => setFoodType(e.value)} // update the onFoodTypeChange function to directly set the food type state
            placeholder="Velg type matvare"
          />
        </div>

        <h5>
          Næringsinnhold per 100{" "}
          {foodType === "solid" ? "g" : foodType === "liquid" ? "ml" : "g/ml"}
        </h5>

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
                {/* This column allows the user to input the energy value in input field*/}
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name={selectsPart}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              {/* Additional rows for other nutrient selections */}
              {/* This row shows the fat content */}
              <tr
                className={
                  fett ? "alert-box" : null || fettNull ? "alert-box" : null
                }
              >
                <th scope="row" className="table-font">
                  {fett ? (
                    <Tooltip
                      title="Produktet innfrir ikke Nøkkelhullet på grunn av mengden fett. Mengden på fett må være lavere enn eller lik 3/ 100 g for å møte kravene for Nøkkelhullsmerking."
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon className="alert-icon" icon={faBan} />
                      </div>
                    </Tooltip>
                  ) : null}
                  {fettNull ? (
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
              <tr
                className={
                  mettede
                    ? "alert-box"
                    : null || mettedeNull
                    ? "alert-box"
                    : null
                }
              >
                <th scope="row" className="table-font">
                  {mettede ? (
                    <Tooltip
                      title="Produktet innfrir ikke Nøkkelhullet på grunn av mengden mettede fettsyrer. Mengden på mettede fettsyrer må være lavere enn eller lik 0.6 / 100 g for å møte kravene for Nøkkelhullsmerking."
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon className="alert-icon" icon={faBan} />
                      </div>
                    </Tooltip>
                  ) : null}
                  {mettedeNull ? (
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

              {/* This row shows the carbohydrate (total sugars)content */}
              <tr className={karbohydrat ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {/* If the "karbohydrat" value is missing, display an exclamation icon with a tooltip */}
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
                {/* Input field for "karbohydrat" value */}
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

              {/* This row shows the natural occuring sugars content */}
              <tr className={naturligSukker ? "alert-box" : null}>
                <th scope="row" className="table-font">
                  {/* If the naturligSukker value is missing, display an exclamation icon with a tooltip */}
                  {naturligSukker ? (
                    <Tooltip
                      title="Mangler verdi i naturligSukker parameter"
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
                  • Naturlig innhold av sukker (g)
                </th>
                {/* Input field for Naturlig innhold av sukker  value */}
                <td>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    name="naturligSukker"
                    value={nutrition.naturligSukker}
                    onChange={changeHandle}
                    className="form-control"
                  ></input>
                </td>
              </tr>

              {/* This row shows hvorav tilsatte sukkerarter (added sugars)content */}
              <tr
                className={
                  hvoravSukkerarter
                    ? "alert-box"
                    : null || hvoravSukkerarterNull
                    ? "alert-box"
                    : null
                }
              >
                <th scope="row" className="table-font">
                  {/* If the "hvoravSukkerarter" value is too high, display a ban icon with a tooltip */}
                  {hvoravSukkerarter ? (
                    <Tooltip
                      title="Produktet innfrir ikke Nøkkelhullet på grunn av mengden hvoravSukkerarter. Mengden på hvoravSukkerarter må være lavere enn eller lik 1 g/ 100 g for å møte kravene for Nøkkelhullsmerking."
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon className="alert-icon" icon={faBan} />
                      </div>
                    </Tooltip>
                  ) : null}
                  {/* If the "hvoravSukkerarter" value is missing, display an exclamation icon with a tooltip */}
                  {hvoravSukkerarterNull ? (
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
                {/* Input field for "hvoravSukkerarter" value */}

                <td>
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

              {/* This row shows kostfiber content */}
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

              {/* This row shows salt content */}
              <tr
                className={
                  salt ? "alert-box" : null || saltNull ? "alert-box" : null
                }
              >
                <th scope="row" className="table-font">
                  {/* If salt is missing, show a exclamation icon */}
                  {salt ? (
                    <Tooltip
                      title="Produktet innfrir ikke Nøkkelhullet på grunn av mengden salt. Mengden på salt må være lavere enn eller lik 0.5 / 100 g for å møte kravene for Nøkkelhullsmerking."
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon className="alert-icon" icon={faBan} />
                      </div>
                    </Tooltip>
                  ) : null}
                  {saltNull ? (
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
                {/* Input field for salt */}
                <td colSpan="2">
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

        {/* Button that submits the form and calls the onClick function when clicked */}
        <div className="col-12 button-div">
          <button
            type="submit"
            className="btn btn-primary btn-lg button-search"
            onClick={onClick}
          >
            Beregn
          </button>
        </div>
      </div>

      <div className="col-md-6">
        {/* positive results nøkkelhullet container" */}
        {showNokkelhulletResults ? (
          <div className="container nøkkelhullet-food-result-container">
            {/* An image with class "keyhole-logo" and alt text "keyhole logo" */}
            <img
              src={keyholeLgog}
              className="keyhole-logo img-fluid"
              alt="keyhole logo"
            />
            {/* A heading with text "Nøkkelhullet" */}
            <h5>Nøkkelhullet</h5>
            <div className="row">
              <div className="col-md-10">
                <p>Produktet innfrir Nøkkelhullet. </p>
              </div>
              <div className="col-md-2">
                {/* FontAwesome icon with event listener to show the "Nøkkelhullet" information section */}
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
                  {/* A paragraph with a link to Lovdata's "Forskrift om frivillig merking a nœringsmidler med Nokkellhullet" */}
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
                  {/* FontAwesome icon with event listener to hide the "Nøkkelhullet" information section */}
                  <FontAwesomeIcon
                    className="x-button"
                    icon={faXmarkCircle}
                    onClick={() => onClickClose("nokkelhullet")}
                  />
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
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

                {mettede ? (
                  <p>** Tilsatt fett kan høyst inneholde 20 % mettet fett.</p>
                ) : null}

                {fett ? (
                  <p>** Tilsatt fett verdien kan være høyst 3 g/100 g.</p>
                ) : null}

                {hvoravSukkerarter ? (
                  <p>
                    ** Tilsatte sukkerarter verdien kan være høyst 1 g/100 g.
                  </p>
                ) : null}

                {salt ? (
                  <p>** Salt verdien kan være høyst 0.5 g/100 g.</p>
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

        {/* container for ernæringspåstander if there are all true results */}
        {buttonClicked && (
          <div
            className={
              lowSugars &&
              sugarsFree &&
              withNoAddedSugars &&
              containsNaturallyOccurringSugars
                ? "container ernæringspåstander-food-result-container-all"
                : !lowSugars &&
                  !sugarsFree &&
                  !withNoAddedSugars &&
                  !containsNaturallyOccurringSugars
                ? "container ernæringspåstander-food-result-container-none"
                : "container ernæringspåstander-food-result-container-some"
            }
          >
            <h5>Ernæringspåstander</h5>
            <div className="row">
              <div className="col-md-10">
                {/* Low sugars */}
                {lowSugars ? (
                  <div>
                    <p>** Lavt sukkerinnhold:</p>
                    <p>
                      Dette produktet inneholder høyst 5 g sukkerarter per 100 g
                      for næringsmidler i fast form, eller høyst 2,5 g
                      sukkerarter per 100 ml for næringsmidler i flytende form
                      og oppfyller kravet for "Lavt sukkerinnhold".
                    </p>
                  </div>
                ) : (
                  <div>
                    <p>
                      ** Produktet innfrir ikke "Lavt sukkerinnhold" påstanden.
                    </p>
                    <ul>
                      <li>
                        For faste næringsmidler, sukkerinnholdet må være høyst 5
                        g per 100 g.
                      </li>
                      <li>
                        For flytende næringsmidler, sukkerinnholdet må være
                        høyst 2,5 g per 100 ml.
                      </li>
                    </ul>
                  </div>
                )}

                {/* "SUGARS-FREE" claim */}
                {sugarsFree ? (
                  <div>
                    <p>** Sukkerfri:</p>
                    <p>
                      Dette produktet oppfyller kravet for "Sukkerfri" ved å
                      inneholde ikke mer enn 0,5 g sukkerarter per 100 g/ml.
                    </p>
                  </div>
                ) : (
                  <div>
                    <p>** Produktet innfrir ikke "Sukkerfri" påstanden.</p>
                    <ul>
                      <li>
                        Produktet må inneholde høyst 0,5 g sukkerarter per 100
                        g/ml for å oppfylle "Sukkerfri" påstanden.
                      </li>
                    </ul>
                  </div>
                )}

                {/* with No added sugars */}
                {withNoAddedSugars ? (
                  <div>
                    <p>** Uten tilsatt sukker:</p>
                    <p>
                      Dette produktet er ikke tilsatt monosakkarider,
                      disakkarider eller andre næringsmidler på grunn av deres
                      søtende egenskaper og oppfyller kravet for "Uten tilsatt
                      sukker".
                    </p>
                  </div>
                ) : (
                  <div>
                    <p>
                      ** Produktet innfrir ikke "Uten tilsatt sukker" påstanden.
                    </p>
                    <ul>
                      <li>
                        Produktet må ikke være tilsatt monosakkarider,
                        disakkarider eller andre næringsmidler på grunn av deres
                        søtende egenskaper.
                      </li>
                    </ul>
                  </div>
                )}

                {/* Contains naturally occurring sugars */}
                {containsNaturallyOccurringSugars ? (
                  <div>
                    <p>** Med et naturlig innhold av sukker:</p>
                    <p>
                      Dette produktet inneholder naturlig forekommende sukker og
                      oppfyller kravet for "Med et naturlig innhold av sukker".
                    </p>
                  </div>
                ) : (
                  <div>
                    <p>
                      ** Produktet innfrir ikke "Med et naturlig innhold av
                      sukker" påstanden.
                    </p>
                    <ul>
                      <li>
                        Produktet må inneholde naturlig forekommende sukker og
                        ikke ha tilsatt sukker.
                      </li>
                    </ul>
                  </div>
                )}
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
              className="btn btn-primary"
              style={{ width: "200px", marginRight: "5px" }}
            >
              <i className="fas fa-save" style={{ marginRight: "5px" }}></i>{" "}
              Lagre produkt
            </button>

            {/* Share button */}
            <button
              className="btn btn-primary"
              style={{ width: "200px", marginRight: "5px" }}
            >
              <i className="fas fa-share" style={{ marginRight: "5px" }}></i>{" "}
              Del produkt
            </button>

            {/* Add a new product button */}
            <button
              className="btn btn-primary"
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

export default Kategori1;
