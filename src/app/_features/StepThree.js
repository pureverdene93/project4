"use client";
import { useState } from "react";

export const StepThree = (props) => {
  const { handlenextStep, handlebackStep } = props;

  const [date, setDate] = useState("");

  const [image, setImage] = useState(null);

  const [errorState, setErrorState] = useState(false);

  const dateInput = (event) => {
    // const inputName = event.target.name;
    const inputValue = event.target.value;
    setDate(inputValue);
    // console.log("input name", inputName);
    // console.log("input value", inputValue);
    // console.log("date", date);
    console.log(inputValue);
  };

  // const myDateYear = date;
  const newDate = new Date();
  // const yearDiff = newDate.getFullYear() - myDateYear.getFullYear();
  console.log("date", date);

  const rightNowYear =
    newDate.getFullYear() + (newDate.getMonth() / 12 + newDate.getDay() / 365);
  console.log("right now year", rightNowYear);

  const myBirthYear = new Date(date);
  // console.log("my birth year", myBirthYear);
  const ageRightNow =
    myBirthYear.getFullYear(date) +
    (myBirthYear.getMonth(date) / 12 + myBirthYear.getDay(date) / 365);

  const yearDiff = rightNowYear - ageRightNow;
  // console.log("this is my age", yearDiff);

  // console.log("age", ageRightNow);

  // console.log("my year", myBirthYear);

  const errors = {};

  const checkInput = () => {
    if (date.length === 0 || yearDiff <= 18) {
      errors.date = "Error date";
    }
    if (!image) {
      errors.image = "error image";
    }
    return errors;
  };
  const imageChange = (event) => {
    const imageDisplay = event.target.files[0];
    if (imageDisplay) {
      setImage(URL.createObjectURL(imageDisplay));
    }
    // console.log(setImage);
  };
  const imageRemove = () => {
    setImage(null);
  };

  // console.log("it is image type", typeof image);
  // console.log("it is date type", typeof date);

  const conBtn = () => {
    const errors = checkInput();

    if (Object.keys(errors).length === 0) {
      handlenextStep();
      setErrorState({});
    } else {
      setErrorState(errors);
    }
  };

  return (
    <div className="back">
      <div className="back1">
        <div className="q">
          <div className="q1">
            <img src="/Main 1.svg" alt="pinelogo" className="logo" />
            <p className="emoji">Join Us! 😎</p>
            <p className="word">
              Please provide all current information accurately.
            </p>
          </div>

          <div className="q2">
            <div className="firstNameDiv">
              <p className="firstName">
                Date of Birth <span className="od">*</span>
              </p>
              <input
                name="dateOfBirth"
                type="date"
                className="firstInput"
                onChange={dateInput}
              ></input>
              {errorState.date && (
                <p className="errorfirst">
                  Please select a date and you must be older than 18.
                </p>
              )}
            </div>

            <label className="imageUpload" htmlFor="image-upload">
              <p className="firstName">
                Profile image <span className="od">*</span>
              </p>

              {!image && (
                <div className="display">
                  <input
                    id="image-upload"
                    type="file"
                    className="image"
                    onChange={imageChange}
                    style={{ display: "none" }}
                  />
                  <img src="camer.png" className="addImage" />
                  <p className="addImageWord">Add image</p>
                </div>
              )}

              {image && (
                <div className="uploadedImageDisplay">
                  <img src={image} className="uploadedImage" />
                  <button onClick={imageRemove} className="imageRemoveBtn">
                    X
                  </button>
                </div>
              )}
            </label>
            {errorState.image && (
              <p className="errorfirst">Image cannot be blank</p>
            )}
          </div>

          <div className="backandnext">
            <button className="backBtn" onClick={handlebackStep}>
              {"<"} Back
            </button>
            <button className="conBtn" onClick={conBtn}>
              Continue 3/3 {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
