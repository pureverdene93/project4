"use client";
import { useState } from "react";
import { FormInput } from "../_components/form-input";
const inputHasSpecialChac = (string) => {
  return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(string);
};
const phoneNumber = (num) => {
  return /^\d{8}$/.test(num);
};
const password = (pass) => {
  return /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).+$/.test(pass);
};
const stepTwoLocal = (values) => {
  localStorage.setItem("stepTwo", JSON.stringify(values));
};
export const StepTwo = (props) => {
  const { handlenextStep, handlebackStep } = props;

  const getItemFromLocalStepTwo = () => {
    const values = localStorage.getItem("stepTwo");
    if (values) {
      return JSON.parse(values);
    } else {
      return { email: "", phoneNumber: "", password: "", confirmPassword: "" };
    }
  };

  const [nameValues, setNameValues] = useState(getItemFromLocalStepTwo);

  const [errorState, setErrorState] = useState(false);

  const handleInputChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setNameValues({ ...nameValues, [inputName]: inputValue });
    console.log(event.target.name);
    console.log(event.target.value);
  };

  const checkInput = () => {
    const errors = {};
    if (!inputHasSpecialChac(nameValues.email)) {
      errors.email = errors.email = "Error first name";
    }
    if (!phoneNumber(nameValues.phoneNumber)) {
      errors.phoneNumber = errors.phoneNumber = "Error phone name";
    }
    if (!password(nameValues.password)) {
      errors.password = errors.password = "Wrong password";
    }
    if (nameValues.confirmPassword !== nameValues.password) {
      errors.confirmPassword = errors.confirmPassword = "Wrong";
    }

    return errors;
  };

  const conBtn = () => {
    const errors = checkInput();

    if (Object.keys(errors).length === 0) {
      setErrorState({});
      stepTwoLocal(nameValues);
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
            <FormInput
              inputTag={"Email"}
              inputOnChange={handleInputChange}
              inputValue={nameValues.email}
              inputName={"email"}
              inputPlaceHolder={"Enter your email."}
              error={errorState.email}
              errorMessage={"Please provide a valid email address."}
              type={"email"}

              // inputBorderColor={inputHasSpecialChac(nameValues.firstName)}s
            />

            <FormInput
              inputTag={"Phone Number"}
              inputOnChange={handleInputChange}
              inputValue={nameValues.phoneNumber}
              inputName={"phoneNumber"}
              inputPlaceHolder={"Enter your phone number"}
              error={errorState.phoneNumber}
              errorMessage={"Please enter a valid phone number."}
              type={"text"}
              // inputBorderColor={inputHasSpecialChac(nameValues.lastName)}
            />

            <FormInput
              inputTag={"Password"}
              inputOnChange={handleInputChange}
              inputValue={nameValues.password}
              inputName={"password"}
              inputPlaceHolder={"Enter your password."}
              error={errorState.password}
              errorMessage={
                "Password must include letters, numbers and special characters."
              }
              type={"password"}
              // inputBorderColor={inputHasSpecialChac(nameValues.userName)}
            />
            <FormInput
              inputTag={"Confirm Password"}
              inputOnChange={handleInputChange}
              inputValue={nameValues.confirmPassword}
              inputName={"confirmPassword"}
              inputPlaceHolder={"Confirm your password."}
              error={errorState.confirmPassword}
              errorMessage={"Passwords do not match. Please try again."}
              type={"password"}
              // inputBorderColor={inputHasSpecialChac(nameValues.userName)}
            />
          </div>
          <div className="backandnext">
            <button className="backBtn" onClick={handlebackStep}>
              {"<"} Back
            </button>
            <button className="conBtn" onClick={conBtn}>
              Continue 2/3 {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
