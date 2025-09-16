"use client";
import Image from "next/image";
import { useState } from "react";
import "./index.css";
import { FormInput } from "./_components/form-input";

const inputHasSpecialChac = (string) => {
  return /[\d\W]+/.test(string);
};

export default function Home() {
  const [nameValues, setNameValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const [errorState, setErrorState] = useState(false);

  const handleInputChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setNameValues({ ...nameValues, [inputName]: inputValue });
  };

  const checkInput = () => {
    const errors = {};
    if (
      inputHasSpecialChac(nameValues.firstName) ||
      nameValues.firstName.length <= 2
    ) {
      errors.firstName = errors.firstName = "Error first name";
    }
    if (
      inputHasSpecialChac(nameValues.lastName) ||
      nameValues.lastName.length <= 2
    ) {
      errors.lastName = errors.lastName = "Error last name";
    }
    if (
      inputHasSpecialChac(nameValues.userName) ||
      nameValues.userName.length <= 2
    ) {
      errors.userName = errors.userName = "Error username";
    }

    // if ()

    return errors;
  };

  const conBtn = () => {
    const errors = checkInput();

    if (Object.keys(errors).length === 0) {
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
            <FormInput
              inputTag={"First Name"}
              inputOnChange={handleInputChange}
              inputValue={nameValues.firstName}
              inputName={"firstName"}
              inputPlaceHolder={"Enter your first name."}
              error={errorState.firstName}
              errorMessage={
                "First name cannot contain special characters or numbers."
              }
            />

            <FormInput
              inputTag={"Last Name"}
              inputOnChange={handleInputChange}
              inputValue={nameValues.lastName}
              inputName={"lastName"}
              inputPlaceHolder={"Enter your last name"}
              error={errorState.lastName}
              errorMessage={
                "Last name cannot contain special characters or numbers."
              }
            />

            <FormInput
              inputTag={"Username"}
              inputOnChange={handleInputChange}
              inputValue={nameValues.userName}
              inputName={"userName"}
              inputPlaceHolder={"Enter your username"}
              error={errorState.userName}
              errorMessage={"This username is already taken."}
            />
          </div>
        </div>
        <button className="continueBtn" onClick={conBtn}>
          Continue 1/3 {">"}
        </button>
      </div>
    </div>
  );
}
