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

const Kategori8a = () => {
  // State variables for showing results and empty result message
  const [showNokkelhulletResults, setShowNokkelhulletResults] = useState(null);
  const [showErnaeringsResults, setShowErnaeringsResults] = useState("");
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
        setShowErnaeringsResults("all");
      } else if (
        !lowSugars &&
        !withNoAddedSugars &&
        !containsNaturallyOccurringSugars &&
        !sugarsFree
      ) {
        setShowErnaeringsResults("none");
      } else {
        setShowErnaeringsResults("some");
      }
    }
  }, [
    lowSugars,
    withNoAddedSugars,
    containsNaturallyOccurringSugars,
    sugarsFree,
    buttonClicked,
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
  const [karbohydrat, setKarbohydrat] = useState(false);
  const [karbohydratNull, setKarbohydratNull] = useState(false);
  const [naturligSukker, setNaturligSukker] = useState(false);
  const [hvoravSukkerarter, setHvoravSukkerarter] = useState(false);
  const [kostfiber, setKostfiber] = useState(false);
  const [kostfiberNull, setKostfiberNull] = useState(false);
  const [protein, setProtein] = useState(false);
  const [salt, setSalt] = useState(false);
  const [saltNull, setSaltNull] = useState(false);

  // State variable for storing nutrition information entered by user
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
      nutrition.fett <= 7 &&
      nutrition.mettede !== "" &&
      nutrition.karbohydrat !== "" &&
      nutrition.karbohydrat <= 5 &&
      nutrition.naturligSukker !== "" &&
      nutrition.hvoravSukkerarter !== "" &&
      nutrition.kostfiber !== "" &&
      nutrition.kostfiber >= 5 &&
      nutrition.protein !== "" &&
      nutrition.salt !== "" &&
      nutrition.salt <= 1
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
      setKarbohydrat(false);
      setKarbohydratNull(false);
      setNaturligSukker(false);
      setHvoravSukkerarter(false);
      setKostfiber(false);
      setKostfiberNull(false);
      setProtein(false);
      setSalt(false);
      setSaltNull(false);
      // If the user has not selected any nutrients, set errors accordingly
      // Check each nutrition value to see if it is missing or negative
      // show input validation errors if any input is missing or negative.
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
      if (nutrition.fett > 7) {
        setFett(true);
        setShowNokkelhulletResults(false);
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

      if (nutrition.karbohydrat === "" || nutrition.karbohydrat < 0) {
        setKarbohydratNull(true);
        setShowNokkelhulletResults(false);
        setShowEmptyResult(true);
      } else {
        setKarbohydratNull(false);
      }
      if (nutrition.karbohydrat > 5) {
        setKarbohydrat(true);
        setShowNokkelhulletResults(false);
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
        setKostfiberNull(true);
        setShowNokkelhulletResults(false);
        setShowEmptyResult(true);
      } else {
        setKostfiberNull(false);
      }
      if (nutrition.kostfiber < 5) {
        setKostfiber(true);
        setShowNokkelhulletResults(false);
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
      if (nutrition.salt > 1) {
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
    if (nutrition.hvoravSukkerarter === "0" && nutrition.karbohydrat > 0) {
      setContainsNaturallyOccurringSugars(true);
    } else {
      setContainsNaturallyOccurringSugars(false);
    }
  };

  // create an array of energy units to select from
  const selectUnit = [
    {
      value: "energikj", // This is the value that will be used in the code
      label: "(kj)", // This is the value that will be displayed to the user in the dropdown
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
    const inputVal = document.getElementsByName(event.value); // Get the input elements with the name of the selected option
    console.log("handlerPart ===", event, nutrition, inputVal); // Log the selected option, current nutrition state, and input elements to the console
    setSelectPart(event.value); // Update the selectsPart state with the value of the selected option
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
                  {/* An icon with a tooltip to indicate missing values in energy parameters */}
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
                    {/* A dropdown menu for selecting the energy unit */}
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
                {/* An input field for entering the energy value */}
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
                      title="Produktet innfrir ikke Nøkkelhullet på grunn av mengden fett. Mengden på fett må være lavere enn eller lik 7 g/ 100 g for å møte kravene for Nøkkelhullsmerking."
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
              <tr className={mettede ? "alert-box" : null}>
                <th scope="row" className="table-font">
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
              <tr
                className={
                  karbohydrat
                    ? "alert-box"
                    : null || karbohydratNull
                    ? "alert-box"
                    : null
                }
              >
                <th scope="row" className="table-font">
                  {karbohydrat ? (
                    <Tooltip
                      title="Produktet innfrir ikke Nøkkelhullet på grunn av mengden sukkerarter. Mengden på sukkerarter må være lavere enn eller lik 5 g / 100 g for å møte kravene for Nøkkelhullsmerking."
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon className="alert-icon" icon={faBan} />
                      </div>
                    </Tooltip>
                  ) : null}
                  {karbohydratNull ? (
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

              {/* This row shows hvorav sukkerarter content */}
              <tr className={hvoravSukkerarter ? "alert-box" : null}>
                <th scope="row" className="table-font">
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
              <tr
                className={
                  kostfiber
                    ? "alert-box"
                    : null || kostfiberNull
                    ? "alert-box"
                    : null
                }
              >
                <th scope="row" className="table-font">
                  {kostfiber ? (
                    <Tooltip
                      title="Produktet innfrir ikke Nøkkelhullet på grunn av mengden kostfiber. Mengden på kostfiber må være høyst enn eller lik 5 g / 100 g for å møte kravene for Nøkkelhullsmerking."
                      placement="right"
                      arrow
                    >
                      <div className="icon">
                        <FontAwesomeIcon className="alert-icon" icon={faBan} />
                      </div>
                    </Tooltip>
                  ) : null}
                  {kostfiberNull ? (
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
                  {salt ? (
                    <Tooltip
                      title="Produktet innfrir ikke Nøkkelhullet på grunn av mengden salt. Mengden på salt må være lavere enn eller lik 1 g/ 100 g for å møte kravene for Nøkkelhullsmerking."
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
        {/* Button that submits the form and calls the onClick function */}
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
                <p>Produktet innfrir ikke Nøkkelhullet.</p>
                {showEmptyResult ? (
                  <p>** Obligatoriske næringsverdier kan ikke være tomme.</p>
                ) : null}

                {fett ? <p>** Fett verdien kan være høyst 7 g/100 g.</p> : null}

                {karbohydrat ? (
                  <p>
                    ** Tilsatte sukkerarter verdien kan være høyst 5 g/100 g.
                  </p>
                ) : null}
                {kostfiber ? (
                  <p>** Kostfiber verdien kan være minst 5 g/100 g.</p>
                ) : null}

                {salt ? <p>** Salt verdien kan være høyst 1 g/100 g.</p> : null}
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

        {/* container for ernæringspåstander results */}
        {buttonClicked && (
          <div
            className={`container ernæringspåstander-food-result-container-${showErnaeringsResults}`}
          >
            <h5>Ernæringspåstander</h5>
            <div className="row">
              <div className="col-md-10">
                {/* Low sugars */}
                {lowSugars ? (
                  <div>
                    <p>
                      ** Lavt sukkerinnhold: Produktet oppfyller kravet for
                      "Lavt sukkerinnhold" påstanden.
                    </p>
                    <p>
                      Dette produktet inneholder høyst 5 g sukkerarter per 100 g
                      for næringsmidler i fast form, eller høyst 2,5 g
                      sukkerarter per 100 ml for næringsmidler i flytende form.
                    </p>
                  </div>
                ) : (
                  <div>
                    <p>
                      ** Lavt sukkerinnhold: Produktet oppfyller ikke kravet for
                      "Lavt sukkerinnhold" påstanden.
                    </p>
                    <ul>
                      <li>
                        For faste næringsmidler, må sukkerinnholdet være høyst 5
                        g per 100 g.
                      </li>
                      <li>
                        For flytende næringsmidler, må sukkerinnholdet være
                        høyst 2,5 g per 100 ml.
                      </li>
                    </ul>
                  </div>
                )}

                {/* "SUGARS-FREE" claim */}
                {sugarsFree ? (
                  <div>
                    <p>
                      ** Sukkerfri: Produktet oppfyller kravet for "Sukkerfri"
                      påstanden.
                    </p>
                    <p>
                      Dette produktet inneholder ikke mer enn 0,5 g sukkerarter
                      per 100 g/ml.
                    </p>
                  </div>
                ) : (
                  <div>
                    <p>
                      ** Sukkerfri: Produktet oppfyller ikke kravet for
                      "Sukkerfri" påstanden.
                    </p>
                    <ul>
                      <li>
                        Produktet må inneholde høyst 0,5 g sukkerarter per 100
                        g/ml.
                      </li>
                    </ul>
                  </div>
                )}

                {/* with No added sugars */}
                {withNoAddedSugars ? (
                  <div>
                    <p>
                      ** Uten tilsatt sukker: Produktet oppfyller kravet for
                      "Uten tilsatt sukker" påstanden.
                    </p>
                    <p>
                      Dette produktet er ikke tilsatt monosakkarider,
                      disakkarider eller andre næringsmidler på grunn av deres
                      søtende egenskaper.
                    </p>
                  </div>
                ) : (
                  <div>
                    <p>
                      ** Uten tilsatt sukker: Produktet oppfyller ikke kravet
                      for "Uten tilsatt sukker" påstanden.
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
                    <p>
                      ** Med et naturlig innhold av sukker: Produktet oppfyller
                      kravet for "Med et naturlig innhold av sukker" påstanden.
                    </p>
                    <p>
                      Dette produktet inneholder naturlig forekommende sukker.
                    </p>
                  </div>
                ) : (
                  <div>
                    <p>
                      ** Med et naturlig innhold av sukker: Produktet oppfyller
                      ikke kravet for "Med et naturlig innhold av sukker"
                      påstanden.
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
          <div className="button-container">
            {/* Save button */}
            <div className="button-wrapper">
              {/* Dropdown menu for saving food product in various formats */}
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle custom-button"
                  type="button"
                  id="lagreProduktDropdown"
                  data-bs-toggle="dropdown" // Controls the presentation of the dropdown menu
                >
                  <FontAwesomeIcon
                    icon={faSave}
                    className="icon-right-spacing" // Allows space between the icon and the text
                  />
                  Lagre produkt
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="lagreProduktDropdown" // Associates this menu with its button
                >
                  {/* Each list item represents a disabled save option */}
                  {/* aria-describedby provides extra context for accessibility tools */}
                  <li>
                    <button
                      className="dropdown-item"
                      disabled
                      aria-describedby="pdfDesc" // Disabled dropdown items with aria-describedby property for descriptive text
                    >
                      Lagre som PDF
                    </button>
                    <span
                      id="pdfDesc"
                      style={{ fontSize: "smaller", color: "gray" }}
                    >
                      (Denne funksjonen er under utvikling)
                    </span>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      disabled
                      aria-describedby="bildeDesc"
                    >
                      Lagre som bilde
                    </button>
                    <span
                      id="bildeDesc"
                      style={{ fontSize: "smaller", color: "gray" }}
                    >
                      (Denne funksjonen er under utvikling)
                    </span>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      disabled
                      aria-describedby="nettskyDesc"
                    >
                      Lagre i nettsky
                    </button>
                    <span
                      id="nettskyDesc"
                      style={{ fontSize: "smaller", color: "gray" }}
                    >
                      (Denne funksjonen er under utvikling)
                    </span>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      disabled
                      aria-describedby="profilenDesc"
                    >
                      Lagre i profilen
                    </button>
                    <span
                      id="profilenDesc"
                      style={{ fontSize: "smaller", color: "gray" }}
                    >
                      (Denne funksjonen er under utvikling)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Share button */}
            <div className="button-wrapper">
              <div className="dropdown">
                <button
                  className="btn btn-primary dropdown-toggle custom-button"
                  type="button"
                  id="delProduktDropdown"
                  data-bs-toggle="dropdown"
                >
                  <FontAwesomeIcon
                    icon={faShare}
                    className="icon-right-spacing"
                  />
                  Del produkt
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="delProduktDropdown"
                >
                  <li>
                    <button
                      className="dropdown-item"
                      disabled
                      aria-describedby="epost-description"
                    >
                      Send på e-post
                    </button>
                    <span
                      id="epost-description"
                      style={{ fontSize: "smaller", color: "gray" }}
                    >
                      (Denne funksjonen er under utvikling)
                    </span>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      disabled
                      aria-describedby="samarbeidsplattformer-description"
                    >
                      Del på samarbeidsplattformer
                    </button>
                    <span
                      id="samarbeidsplattformer-description"
                      style={{ fontSize: "smaller", color: "gray" }}
                    >
                      (Denne funksjonen er under utvikling)
                    </span>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      disabled
                      aria-describedby="lenke-description"
                    >
                      Kopier lenke
                    </button>
                    <span
                      id="lenke-description"
                      style={{ fontSize: "smaller", color: "gray" }}
                    >
                      (Denne funksjonen er under utvikling)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* A simple button for adding a new product, which reloads the page on click */}
            <div className="button-wrapper">
              <button
                className="btn btn-primary custom-button"
                onClick={() => window.location.reload()}
              >
                <FontAwesomeIcon icon={faPlus} className="icon-right-spacing" />
                Legg til et nytt produkt
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Kategori8a;
