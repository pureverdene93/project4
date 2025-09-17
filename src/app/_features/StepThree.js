"use client";
import { useState } from "react";
import { FormInput } from "../_components/form-input";
const inputHasSpecialChac = (string) => {
  return /[\d\W]+/.test(string);
};
export const StepThree = (props) => {
  const { handlenextStep, handlebackStep } = props;

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

    return errors;
  };

  const conBtn = () => {
    const errors = checkInput();

    if (Object.keys(errors).length === 0) {
      setErrorState({});
      handlenextStep();
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
              <input type="date" className="firstInput"></input>
            </div>
          </div>
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
  );
};
